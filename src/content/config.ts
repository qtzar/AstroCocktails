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
      liqueurs: z.array(z.string()).optional(),
      ingredients: z.array(z.string()),
      rating: z.number(),
      glassware: z.string(),
      method: z.string(),
      styles: z.array(z.string()),
      image: z.string().optional(),
      source: z.string().optional(),
      notes: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { cocktails };

await astroZodCollectionsToJsonSchemas(collections);
