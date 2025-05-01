import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div aria-label="Rodapé" className="bg-primary px-4 py-6">
      <div className="flex flex-wrap justify-center text-center">
        <p className="text-lg text-primary-foreground">
          © {currentYear} Mantido por{" "}
          <Link
            href="https://x.com/oTutti_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-muted-foreground"
            aria-label="oTutti em X"
          >
            oTutti
          </Link>
          ,{" "}
          <Link
            href="https://x.com/NVAMBFR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-muted-foreground"
            aria-label="Nalbert em X"
          >
            Nalbert
          </Link>{" "}
          e{" "}
          <Link
            href="https://pedrohrg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline transition-colors hover:text-muted-foreground"
            aria-label="Site do Estanho"
          >
            Estanho
            <Code2 className="size-5" aria-hidden="true" />
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
