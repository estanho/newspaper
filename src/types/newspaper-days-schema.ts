import { z } from "zod";

const newspaperDaysDataSchema = z.array(
  z.object({
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const [day_num, month, year] = dateString.split("-");
      return new Date(Number(year), Number(month) - 1, Number(day_num));
    }),
  })
);

export type newspaperDaysData = z.infer<typeof newspaperDaysDataSchema>;

export const newspaperDaysSchema = z.object({
  newspaperDays: newspaperDaysDataSchema,
});

export type newspaperDays = z.infer<typeof newspaperDaysSchema>;
