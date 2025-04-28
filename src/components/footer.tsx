import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div aria-label="Rodapé" className="mt-12 bg-primary px-4 py-6">
      <div className="flex flex-wrap items-center justify-center text-center">
        <p className="font-text text-xl tracking-wide text-secondary">
          © {currentYear} Mantido por{" "}
          <Link
            href="https://x.com/oTutti_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-opacity-80"
            aria-label="oTutti em X"
          >
            oTutti
          </Link>
          ,{" "}
          <Link
            href="https://x.com/NVAMBFR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-opacity-80"
            aria-label="Nalbert em X"
          >
            Nalbert
          </Link>{" "}
          e{" "}
          <Link
            href="https://pedrohrg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline transition-colors hover:text-opacity-80"
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
