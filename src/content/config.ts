import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const records = defineCollection({
	loader: glob({ base: './docs', pattern: '**/*.{md,mdx}' }),
	schema: z
		.object({
			title: z.string(),
			image: z.string().optional(),
			created: z.string().date().optional(),
			lastUpdate: z.string().date().optional(),
		})
		.passthrough()
});

export const collections = { records };

await astroZodCollectionsToJsonSchemas(collections);
