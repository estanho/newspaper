"use client";

import { Button } from "@/components/ui/button";
import { fetchNewspaper } from "@/services/fetch-data";
import { newspaperData } from "@/types/newspaper-schema";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

export default function Newspaper({ slugs }: { slugs: string[] }) {
  const [newspaper, setNewspaper] = useState<newspaperData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageId, setPageId] = useState<number | undefined>();

  const router = useRouter();

  const urlSlugSchema = z
    .array(z.string().regex(/^([1-9]|[1-9][0-9]+)$/))
    .min(1);

  function findByUrlSlugs(slugs: string[], newspaper: newspaperData | null) {
    if (!newspaper) return false;

    const slugValidation = urlSlugSchema.safeParse(slugs);
    if (!slugValidation.success) return false;

    const validatedSlugs = slugValidation.data;

    if (validatedSlugs.length === 2) {
      return newspaper.pages.some((item) => item.id === validatedSlugs[1]);
    }

    return false;
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setPageId(Number(slugs[1]));
        const data = await fetchNewspaper();
        setNewspaper(data as newspaperData);

        const isValidSlug = findByUrlSlugs(slugs, data as newspaperData);

        if (!isValidSlug) {
          redirect("/not-found");
        }
      } catch (error) {
        console.error("Error loading newspaper data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40rem] min-w-[60rem] items-center justify-center bg-secondary">
        <span className="font-text text-5xl text-primary">Carregando...</span>
      </div>
    );
  }

  const currentPage = newspaper?.pages?.find(
    (page) => Number(page.id) === pageId
  );

  if (!currentPage) {
    redirect("/not-found");
  }

  const currentIndex = newspaper?.pages.findIndex(
    (page) => Number(page.id) === pageId
  );

  const handleNavigation = (direction: "prev" | "next") => {
    if (!newspaper || currentIndex === undefined) return;

    const newPage =
      direction === "next"
        ? newspaper.pages[currentIndex + 1]
        : newspaper.pages[currentIndex - 1];

    if (newPage) {
      router.push(`/edition/${slugs[0]}/${newPage.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" }); // <- aqui
    }
  };

  return (
    <>
      <div className="flex min-h-[40rem] flex-col bg-secondary shadow-2xl">
        <div className="flex justify-between px-3 pt-8 md:px-11">
          <Button
            onClick={() => handleNavigation("prev")}
            disabled={!newspaper || currentIndex === 0}
            className="bg-primary font-text text-xl text-primary-foreground disabled:opacity-50"
          >
            Página Anterior
          </Button>

          <Button
            onClick={() => handleNavigation("next")}
            disabled={!newspaper || currentIndex === newspaper.pages.length - 1}
            className="bg-primary font-text text-xl text-primary-foreground disabled:opacity-50"
          >
            Próxima Página
          </Button>
        </div>

        <Image
          src={currentPage.image.src}
          alt={"Jornal em imagem"}
          width={1600}
          height={0}
          priority
          quality={100}
          className="w-full"
        />

        <div className="mb-10">
          <h1 className="text-center font-title text-5xl font-bold text-primary">
            Clipes da Semana
          </h1>
          <div className="grid h-full gap-4 p-10 md:h-[401px] md:grid-cols-2">
            {currentPage &&
              currentPage.clips.map((clip) => {
                return (
                  <iframe
                    key={clip}
                    src={`https://clips.twitch.tv/embed?clip=${clip}&parent=saponius.vercel.app`}
                    allowFullScreen={true}
                    className="h-full w-full"
                  ></iframe>
                );
              })}
          </div>
          <Image
            src="/newspapers/separator.png"
            alt="Separador do Jornal"
            width={1600}
            height={0}
            priority
            quality={100}
            className="w-full"
          />
        </div>

        <div className="my-12 flex justify-between px-3 md:mt-0 md:px-11">
          <Button
            onClick={() => handleNavigation("prev")}
            disabled={!newspaper || currentIndex === 0}
            className="bg-primary font-text text-xl text-primary-foreground disabled:opacity-50"
          >
            Página Anterior
          </Button>

          <Button
            onClick={() => handleNavigation("next")}
            disabled={!newspaper || currentIndex === newspaper.pages.length - 1}
            className="bg-primary font-text text-xl text-primary-foreground disabled:opacity-50"
          >
            Próxima Página
          </Button>
        </div>
      </div>
    </>
  );
}
