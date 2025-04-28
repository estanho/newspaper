import { z } from "zod";

const newspaperDataSchema = z.object({
  slug: z.string(),
  date: z.string(),
  pages: z.array(
    z.object({
      id: z.string(),
      image: z.object({
        enabled: z.boolean(),
        src: z.string(),
      }),
      clips: z.array(z.string()),
    })
  ),
});

export type newspaperData = z.infer<typeof newspaperDataSchema>;

export const newspaperSchema = z.object({
  newspaper: newspaperDataSchema,
});

export type newspaperType = z.infer<typeof newspaperSchema>;
