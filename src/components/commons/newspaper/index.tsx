"use client";

import Pagination from "@/components/commons/pagination";
import { NewspaperType } from "@/types/newspaper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Newspaper({
  newspaper,
  page,
}: {
  newspaper: NewspaperType;
  page: number;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  const loadTwitterWidgets = () => {
    if (typeof window !== "undefined" && window.twttr) {
      window.twttr.widgets.load();
    } else if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("async", "true");
      script.onload = () => {
        if (window.twttr) {
          window.twttr.widgets.load();
        }
      };
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && newspaper.pages[page - 1]?.tweets?.length > 0) {
      setTimeout(() => {
        loadTwitterWidgets();
      }, 100);
    }
  }, [hasMounted, page, newspaper.pages]);

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
        <div className="relative">
          <Image
            src={newspaper.pages[page - 1].image.src}
            alt={"Jornal em imagem - Página " + page}
            width={1600}
            height={1200}
            quality={100}
            priority
            className="w-full"
          />

          {newspaper.pages[page - 1].links.length > 0 && (
            <Link
              href={"https://www.youtube.com/watch?v=4ZF1GIoopEc"}
              target="_blank"
            >
              <div className="absolute right-[4%] top-[59%] z-10 h-8 w-24 cursor-pointer md:top-[60%] lg:h-24 lg:w-96" />
            </Link>
          )}
        </div>

        <div className="px-6 pb-6 lg:px-11">
          {newspaper.pages[page - 1].clips.length > 0 && (
            <>
              <h1 className="pb-6 text-center font-title text-3xl font-bold text-primary lg:text-5xl">
                Clipes da Semana
              </h1>
              <div className="grid min-h-[800px] flex-col gap-4 lg:min-h-[401px] lg:grid-cols-2">
                {newspaper.pages[page - 1].clips.map((clip) => {
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
            </>
          )}
          {newspaper.pages[page - 1].tweets.length > 0 && page === 1 && (
            <>
              <h1 className="pb-6 text-center font-title text-3xl font-bold text-primary lg:text-5xl">
                Tweets da Semana
              </h1>
              <div className="grid min-h-[800px] flex-col gap-4 lg:min-h-[401px] lg:grid-cols-2">
                <blockquote className="twitter-tweet" data-dnt="true">
                  <p lang="pt" dir="ltr">
                    A volta da choke (do tutu e do gafas)
                    <a href="https://twitter.com/hashtag/Arkanis2Temporada?src=hash&amp;ref_src=twsrc%5Etfw">
                      #Arkanis2Temporada
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/arkanis?src=hash&amp;ref_src=twsrc%5Etfw">
                      #arkanis
                    </a>{" "}
                    <a href="https://t.co/GrvVzmSdMn">
                      pic.twitter.com/GrvVzmSdMn
                    </a>
                  </p>
                  &mdash; Acervo choke7 (@Acervochoke7){" "}
                  <a href="https://twitter.com/Acervochoke7/status/1922062493926506734?ref_src=twsrc%5Etfw">
                    May 12, 2025
                  </a>
                </blockquote>
                <blockquote className="twitter-tweet" data-dnt="true">
                  <p lang="in" dir="ltr">
                    Kit do tucupi{" "}
                    <a href="https://twitter.com/hashtag/Arkanis2Temporada?src=hash&amp;ref_src=twsrc%5Etfw">
                      #Arkanis2Temporada
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/arkanis?src=hash&amp;ref_src=twsrc%5Etfw">
                      #arkanis
                    </a>{" "}
                    <a href="https://t.co/vxj7ctCbpI">
                      pic.twitter.com/vxj7ctCbpI
                    </a>
                  </p>
                  &mdash; Acervo choke7 (@Acervochoke7){" "}
                  <a href="https://twitter.com/Acervochoke7/status/1922112555503300725?ref_src=twsrc%5Etfw">
                    May 13, 2025
                  </a>
                </blockquote>
              </div>
            </>
          )}
          {newspaper.pages[page - 1].tweets.length > 0 && page === 2 && (
            <>
              <h1 className="pb-6 text-center font-title text-3xl font-bold text-primary lg:text-5xl">
                Tweets da Semana
              </h1>
              <div className="grid min-h-[800px] flex-col gap-4 lg:min-h-[401px] lg:grid-cols-2">
                <blockquote className="twitter-tweet" data-dnt="true">
                  <p lang="en" dir="ltr">
                    Blaze cake?{" "}
                    <a href="https://twitter.com/hashtag/arkanis?src=hash&amp;ref_src=twsrc%5Etfw">
                      #arkanis
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/arkanis2temporada?src=hash&amp;ref_src=twsrc%5Etfw">
                      #arkanis2temporada
                    </a>{" "}
                    <a href="https://t.co/A4bNNSxmj1">
                      pic.twitter.com/A4bNNSxmj1
                    </a>
                  </p>
                  &mdash; Acervo choke7 (@Acervochoke7){" "}
                  <a href="https://twitter.com/Acervochoke7/status/1923032233255846214?ref_src=twsrc%5Etfw">
                    May 15, 2025
                  </a>
                </blockquote>
                <blockquote className="twitter-tweet" data-dnt="true">
                  <p lang="pt" dir="ltr">
                    Desculpem mas eu n me aguentei
                    <br />
                    eu amei essa cena KAKAKAKA <br />O MAIOR LUTO E O TUCUPI E O
                    DENIX ASSIM{" "}
                    <a href="https://twitter.com/hashtag/ARKANIS2?src=hash&amp;ref_src=twsrc%5Etfw">
                      #ARKANIS2
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/Arkanis?src=hash&amp;ref_src=twsrc%5Etfw">
                      #Arkanis
                    </a>{" "}
                    <a href="https://t.co/TwRwpVHmql">
                      pic.twitter.com/TwRwpVHmql
                    </a>
                  </p>
                  &mdash; 𝒜𝓀!ℒ𝓎ℯℯ𝓈 土 (@Lyesss__){" "}
                  <a href="https://twitter.com/Lyesss__/status/1923208149298790756?ref_src=twsrc%5Etfw">
                    May 16, 2025
                  </a>
                </blockquote>
              </div>
            </>
          )}
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
