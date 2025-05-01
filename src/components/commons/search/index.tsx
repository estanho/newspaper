"use client";

import DataPicker from "@/components/commons/search/data-picker";
import { Button } from "@/components/ui/button";
import { fetchNewspaperDays } from "@/services/fetch-data";
import { newspaperDaysData } from "@/types/newspaper-days-schema";
import { isEqual } from "date-fns";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const [slug, setSlug] = useState<string>();
  const [newspaperDays, setNewspaperDays] = useState<newspaperDaysData>();
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      const newspaperDays = await fetchNewspaperDays();
      if (!newspaperDays) return;
      setNewspaperDays(newspaperDays as newspaperDaysData);
    };

    loadData();
  }, []);

  function RedirectPage(slug: string) {
    router.push(`/edition/${slug}/1`);
  }

  function handleDate(date: Date | undefined) {
    if (!date) {
      setSlug(undefined);
      return;
    }
    const dateFound = newspaperDays?.find((item) => isEqual(date, item.date));
    if (!dateFound) return;
    setSlug(dateFound?.slug);
  }

  function handleSearch() {
    if (!slug) return;
    RedirectPage(slug);
  }

  return (
    <section
      aria-label="Search"
      className="flex w-full justify-center gap-1 py-14"
    >
      <DataPicker getDate={handleDate} data={newspaperDays} />
      <Button
        variant="secondary"
        size="icon"
        className="border-2 border-secondary-foreground"
        onClick={handleSearch}
      >
        <SearchIcon className="text-secondary-foreground" />
      </Button>
    </section>
  );
}
