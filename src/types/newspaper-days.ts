import { z } from "zod";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const [day_num, month, year] = dateString.split("-").map(Number);
      return new Date(Date.UTC(year, month - 1, day_num, 3, 0, 0));
    }),
  })
);

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
