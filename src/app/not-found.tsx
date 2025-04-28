import Navigation from "@/components/commons/navigation-bar/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen">
      <header>
        <Navigation />
      </header>
      <main className="mx-auto mt-24 flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center justify-center rounded border-2 border-primary bg-background p-12">
          <h1 className="font-title text-4xl">Página não encontrada</h1>
          <p className="font-text text-2xl">
            A página que você está procurando não existe.
          </p>
          <div className="mt-12">
            <Link href="/">
              <Button variant="default">
                <ArrowLeft className="text-primary-foreground" />
                <span>Voltar para o início</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0">
        <Footer />
      </footer>
    </div>
  );
}
