import Newspaper from "@/components/newspaper";
import Search from "@/components/search";
import { fetchNewspaperDays } from "@/services/fetch-data";
import { newspaperDaysData } from "@/types/newspaper-days-schema";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function Edition({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) {
  const { slugs } = await params;
  const newspaperDays = await fetchNewspaperDays();

  const urlSlugSchema = z
    .array(z.string().regex(/^([1-9]|[1-9][0-9]+)$/))
    .min(1)
    .max(2);

  if (!findByUrlSlugs(slugs, newspaperDays)) {
    redirect("/not-found");
  }

  function findByUrlSlugs(slugs: string[], newspaperDays: newspaperDaysData) {
    const slugValidation = urlSlugSchema.safeParse(slugs);
    if (!slugValidation.success) return false;

    const validatedSlugs = slugValidation.data;

    if (validatedSlugs.length === 1) {
      const aux = newspaperDays.some((item) => item.slug === validatedSlugs[0]);
      if (!aux) return false;
      redirect(`/edition/${validatedSlugs[0]}/1`);
    }

    if (validatedSlugs.length === 2) {
      return newspaperDays.some((item) => item.slug === validatedSlugs[0]);
    }

    return false;
  }

  return (
    <>
      <Search />
      <Newspaper slugs={slugs} />
    </>
  );
}
