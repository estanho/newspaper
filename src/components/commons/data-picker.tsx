"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { newspaperDaysData } from "@/types/newspaper-days-schema";
import { format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DatePicker({
  getDate,
  data,
}: {
  getDate: (slug: Date) => void;
  data: newspaperDaysData | undefined;
}) {
  const [date, setDate] = useState<Date>();
  const [previousDays, setPreviousDays] = useState<Date[]>([]);

  useEffect(() => {
    if (!date) {
      setPreviousDays([]);
      return;
    }
    getDate(date);

    const sixDaysBefore = Array.from({ length: 6 }, (_, i) =>
      subDays(date, i + 1)
    );

    setPreviousDays(sixDaysBefore);
  }, [getDate, date]);

  function isDisableDate(date: Date) {
    return !data?.some(
      (dayEnabled) =>
        dayEnabled.date.getDate() === date.getDate() &&
        dayEnabled.date.getMonth() === date.getMonth() &&
        dayEnabled.date.getFullYear() === date.getFullYear()
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start border-2 border-primary text-left font-text text-xl font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP", { locale: ptBR })
          ) : (
            <span>Selecione a data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-2 border-primary bg-background p-2 font-text text-primary">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          lang="pt-BR"
          locale={ptBR}
          disabled={isDisableDate}
          modifiers={{
            highlighted: previousDays,
          }}
          modifiersStyles={{
            highlighted: {
              backgroundColor: "rgba(66, 72, 55, 0.800)",
              color: "rgb(235, 224, 203)",
            },
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
