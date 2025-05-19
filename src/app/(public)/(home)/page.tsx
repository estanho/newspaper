import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 mb-14">
      <div className="flex flex-col rounded-lg border-2 border-primary bg-background p-8 text-center shadow-lg">
        <h1 className="font-title text-6xl">Saponíus</h1>
        <p className="pt-4 text-3xl">A sua página de notícias da AK!Choke7</p>
        <div className="mt-8 flex items-center justify-center gap-4 rounded bg-primary/10 p-2">
          <span className="text-xl">Último jornal: 19/05/2025</span>
          <Button asChild>
            <Link href="/newspaper/2?page=1">Acessar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
