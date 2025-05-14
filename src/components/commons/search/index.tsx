import BtnSearch from "@/components/commons/search/btn-search";
import DataPicker from "@/components/commons/search/data-picker";
import { fetchNewspaperDays } from "@/services/fetch-api";
import { Suspense } from "react";

export default async function Search() {
  const newspaperDays = await fetchNewspaperDays();

  return (
    <div className="flex w-full justify-center gap-1 py-14">
      <Suspense>
        <DataPicker newspaperDays={newspaperDays.data} />
        <BtnSearch />
      </Suspense>
    </div>
  );
}
