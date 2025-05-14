import Footer from "@/components/commons/footer";
import Navigation from "@/components/commons/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col font-text leading-7 tracking-wider">
      <header>
        <Navigation />
      </header>

      <main className="mx-auto flex max-w-7xl flex-1 flex-col">
        <div className="m-4 mb-14 mt-24">
          <div className="flex flex-col rounded-lg border-2 border-primary bg-background p-8 text-center shadow-lg">
            <h1 className="font-title text-4xl">Página não encontrada</h1>
            <p className="text-2xl">
              A página que você está procurando não existe.
            </p>
            <div className="mt-8">
              <Link href="/">
                <Button variant="default">
                  <ArrowLeft className="text-primary-foreground" />
                  <span className="text-lg">Voltar para o início</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
