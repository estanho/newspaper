import Image from "next/image";

export default function Loading() {
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
