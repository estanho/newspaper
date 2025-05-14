import { parse } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      return parse(dateString, "dd-MM-yyyy", new Date(), {
        locale: ptBR,
      });
    }),
  })
);

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
