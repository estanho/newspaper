import { parse } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const dateParsed = parse(dateString, "dd-MM-yyyy", new Date(0), {
        locale: ptBR,
      });

      return toZonedTime(dateParsed, "America/Sao_Paulo");
    }),
  })
);

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
