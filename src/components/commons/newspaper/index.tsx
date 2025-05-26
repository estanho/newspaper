import Clips from "@/components/commons/newspaper/clips";
import Separator from "@/components/commons/newspaper/separator";
import Tweets from "@/components/commons/newspaper/tweets";
import Pagination from "@/components/commons/pagination";
import { NewspaperType } from "@/types/newspaper";
import Image from "next/image";
import Link from "next/link";

export default function Newspaper({
  newspaper,
  page,
}: {
  newspaper: NewspaperType;
  page: number;
}) {
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

        <div className="px-2 pb-6 lg:px-10">
          {/* Clipes Twitch */}
          {newspaper.pages[page - 1].clips.length > 0 && (
            <Clips clips={newspaper.pages[page - 1].clips} />
          )}
          {/* Tweets */}
          {newspaper.pages[page - 1].tweets.length > 0 && (
            <Tweets tweets={newspaper.pages[page - 1].tweets} />
          )}
        </div>
        {newspaper.pages[page - 1].clips.length > 0 ||
        newspaper.pages[page - 1].tweets.length > 0 ? (
          <Separator />
        ) : (
          <></>
        )}
      </div>
      <div className="mt-2">
        <Pagination newspaper={newspaper} page={page} />
      </div>
    </div>
  );
}
