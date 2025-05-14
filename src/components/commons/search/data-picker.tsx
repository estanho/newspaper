"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { NewspaperDaysType } from "@/types/newspaper-days";
import { format, isEqual, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DatePicker({
  newspaperDays,
}: {
  newspaperDays: NewspaperDaysType | null;
}) {
  const [date, setDate] = useState<Date>();
  const [previousDays, setPreviousDays] = useState<Date[]>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { toast } = useToast();

  useEffect(() => {
    if (!newspaperDays) {
      toast({
        title: "Ocorreu uma erro ao carregar os dias disponíveis",
        description: "Aguarde um momento e tente novamente.",
        variant: "destructive",
      });
      return;
    }

    const edition = searchParams.get("edition");

    if (edition) {
      const editionSelected = newspaperDays.find((day) => day.slug === edition);
      if (editionSelected) {
        setDate(editionSelected.date);
        const sixDaysBefore = Array.from({ length: 6 }, (_, i) =>
          subDays(editionSelected.date, i + 1)
        );
        setPreviousDays(sixDaysBefore);
        return;
      }

      setDate(undefined);
      setPreviousDays([]);
    } else {
      setDate(undefined);
      setPreviousDays([]);
    }
  }, [newspaperDays, searchParams, pathname, toast]);

  function handleSelectDate(selected: Date | undefined) {
    if (!newspaperDays) return;

    if (!selected || (date && isEqual(date, selected))) {
      setDate(undefined);
      setPreviousDays([]);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("edition");
      router.push(`${pathname}?${newParams.toString()}`);
      return;
    }

    const dateMatched = newspaperDays.find((day) =>
      isEqual(day.date, selected)
    );

    if (dateMatched) {
      setDate(selected);
      const sixDaysBefore = Array.from({ length: 6 }, (_, i) =>
        subDays(selected, i + 1)
      );
      setPreviousDays(sixDaysBefore);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("edition", dateMatched.slug);
      router.push(`${pathname}?${newParams.toString()}`);
    }
  }

  function isDisableDate(date: Date) {
    if (!newspaperDays) return true;

    return !newspaperDays.some(
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
          onSelect={handleSelectDate}
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
