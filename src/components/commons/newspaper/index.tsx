"use client";

import Pagination from "@/components/commons/pagination";
import { NewspaperType } from "@/types/newspaper";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Newspaper({
  newspaper,
  page,
}: {
  newspaper: NewspaperType;
  page: number;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="mx-4 mb-14">
        <div className="mx-4 flex min-h-[20rem] flex-col justify-center rounded-lg bg-secondary px-24 shadow-2xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/emotes/choke7run.gif"
              height={56}
              width={56}
              alt="Choke7Run"
              quality={100}
              unoptimized
            />
            <span className="font-title text-xl">Carregando ...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 mb-14">
      <div className="mb-2">
        <Pagination newspaper={newspaper} page={page} />
      </div>
      <div className="flex min-h-[40rem] flex-col rounded-lg border-2 border-primary bg-secondary p-1 shadow-2xl">
        <Image
          src={newspaper.pages[page - 1].image.src}
          alt={"Jornal em imagem - Página " + page}
          width={1600}
          height={1200}
          quality={100}
          priority
          className="w-full"
        />

        <div className="px-6 pb-6 lg:px-11">
          <h1 className="pb-6 text-center font-title text-3xl font-bold text-primary lg:text-5xl">
            Clipes da Semana
          </h1>
          <div className="grid min-h-[800px] flex-col gap-4 lg:min-h-[401px] lg:grid-cols-2">
            {newspaper.pages[page - 1].clips &&
              newspaper.pages[page - 1].clips.map((clip) => {
                return (
                  <iframe
                    title="Clipe da Semana na Twitch"
                    key={clip}
                    src={`https://clips.twitch.tv/embed?clip=${clip}&parent=${process.env.APP_BASE_URL}`}
                    allowFullScreen={true}
                    className="h-full w-full rounded-lg border-2 border-primary bg-primary"
                  ></iframe>
                );
              })}
          </div>
        </div>
        <Image
          src="/newspapers/separator.png"
          alt="Separador do Jornal"
          width={1600}
          height={0}
          quality={100}
          className="w-full pb-10"
          priority
        />
      </div>
      <div className="mt-2">
        <Pagination newspaper={newspaper} page={page} />
      </div>
    </div>
  );
}
