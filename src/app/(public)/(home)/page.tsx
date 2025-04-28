import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Search />
      <div className="flex flex-col gap-4 rounded-lg border-2 border-primary bg-background p-12 text-center shadow-lg">
        <h1 className="font-title text-6xl">Saponíus</h1>
        <p className="font-text text-3xl">
          A sua página de notícias da AK!Choke7
        </p>
        <span className="font-text text-lg">
          Última atualização: 28/04/2025
        </span>
      </div>
    </>
  );
}
