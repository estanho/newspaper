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
import { format } from "date-fns";
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

  useEffect(() => {
    if (!date) return;
    getDate(date);
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
        />
      </PopoverContent>
    </Popover>
  );
}
