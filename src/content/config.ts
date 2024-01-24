import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { homepage, blog };
