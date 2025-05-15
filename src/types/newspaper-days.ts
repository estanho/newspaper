import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { z } from "zod";

// Timezone padrão para renderização do calendário
export const DISPLAY_TIMEZONE = "America/Sao_Paulo";

export const NewspaperDaysSchema = z.array(
  z.object({
    id: z.coerce.number(),
    slug: z.string(),
    date: z.string().transform((dateString) => {
      const [day_num, month, year] = dateString.split("-").map(Number);
      const utcDate = new Date(Date.UTC(year, month - 1, day_num, 12, 0, 0, 0));
      const displayDate = toZonedTime(utcDate, DISPLAY_TIMEZONE);

      Object.defineProperty(displayDate, "originalUTCDate", {
        value: utcDate,
        writable: false,
        enumerable: false,
      });

      return displayDate;
    }),
  })
);

export const prepareCalendarDate = (date: Date): Date => {
  if ("originalUTCDate" in date) {
    return date;
  }

  const localMidnight = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    12,
    0,
    0,
    0
  );

  return toZonedTime(
    fromZonedTime(
      localMidnight,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    ),
    DISPLAY_TIMEZONE
  );
};

export const isSameCalendarDay = (date1: Date, date2: Date): boolean => {
  const prepared1 = prepareCalendarDate(date1);
  const prepared2 = prepareCalendarDate(date2);

  return (
    prepared1.getDate() === prepared2.getDate() &&
    prepared1.getMonth() === prepared2.getMonth() &&
    prepared1.getFullYear() === prepared2.getFullYear()
  );
};

export type NewspaperDaysType = z.infer<typeof NewspaperDaysSchema>;
