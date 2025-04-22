import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const cocktails = defineCollection({
	loader: glob({ base: './docs', pattern: '**/*.{md,mdx}' }),
	schema: z
		.object({
			title: z.string(),
			description: z.string(),
			spirits: z.array(z.string()),
			ingredients: z.array(z.string()),
			notes: z.string().optional(),
			rating: z.number().optional(),
			styles: z.array(z.string()).optional(),
			image: z.string().optional(),
		})
		.passthrough()
});

export const collections = { cocktails };

await astroZodCollectionsToJsonSchemas(collections);
