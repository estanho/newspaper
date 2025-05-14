import { parse } from "date-fns";
import { toDate } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const dateParsed = parse(dateString, "dd-MM-yyyy", new Date(), {
        locale: ptBR,
      });

      return toDate(dateParsed, { timeZone: "America/Sao_Paulo" });
    }),
  })
);

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
