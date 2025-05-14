import { z } from "zod";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const [day_num, month, year] = dateString.split("-");
      return new Date(Number(year), Number(month) - 1, Number(day_num));
    }),
  })
);

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
