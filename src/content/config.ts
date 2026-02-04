import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(false),
    image: z.string().optional(),
  }),
});

const patentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    patentNumber: z.string(),
    status: z.enum(['granted', 'pending']),
    filingDate: z.date(),
    grantDate: z.date().optional(),
    description: z.string(),
    certificateUrl: z.string(),
    inventors: z.array(z.string()),
    assignee: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  patents: patentsCollection,
};
