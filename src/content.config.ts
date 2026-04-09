import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    dateGroup: z.string(),
    dateId: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['technical', 'essays']),
  }),
});

export const collections = { writing };
