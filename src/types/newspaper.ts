import { z } from "zod";

export const NewspaperSchema = z.object({
  id: z.coerce.number(),
  slug: z.string(),
  date: z.string(),
  pages: z.array(
    z.object({
      id: z.coerce.number(),
      image: z.object({
        enabled: z.boolean(),
        src: z.string(),
      }),
      clips: z.array(z.string()),
      tweets: z.array(z.string()),
      links: z.array(z.object({ id: z.coerce.number(), position: z.string() })),
    })
  ),
});

export type NewspaperType = z.infer<typeof NewspaperSchema>;
