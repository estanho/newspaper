import Newspaper from "@/components/commons/newspaper";
import { fetchNewspaperBySlug } from "@/services/fetch-api";
import { PageSchema } from "@/types/page";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Edition({
  params,
  searchParams,
}: {
  params: Promise<{ edition: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { edition } = await params;
  const search = await searchParams;

  if (!search.page) {
    redirect(`/newspaper/${edition}?page=1`);
  }

  const pageParsed = PageSchema.safeParse(search.page as string).data;
  if (!pageParsed) {
    return <Error text="Que página é essa? Ta maluco?!" />;
  }

  const newspaper = (await fetchNewspaperBySlug(edition)).data;
  if (!newspaper) {
    return <Error text="Ocorreu um erro ao carregar o jornal." />;
  }

  const pageExists = newspaper.pages.find((page) => page.id === pageParsed);
  if (!pageExists) {
    return <Error text="Não encontrei essa página no jornal." />;
  }

  return (
    <>
      <Newspaper newspaper={newspaper} page={pageParsed} />
    </>
  );
}

function Error({ text }: { text?: string }) {
  return (
    <div className="mx-4 flex min-h-[20rem] flex-col justify-center rounded-lg bg-secondary px-24 shadow-2xl">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/emotes/desmaio.png"
          height={56}
          width={56}
          alt="Desmaio"
          quality={100}
          className="animate-pulse"
          unoptimized
        />
        <span className="font-title text-xl">
          {text ? text : "Ocorreu um erro ao carregar a página."}
        </span>
      </div>
    </div>
  );
}
