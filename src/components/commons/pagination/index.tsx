"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NewspaperType } from "@/types/newspaper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({
  newspaper,
  page,
}: {
  newspaper: NewspaperType;
  page: number;
}) {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  function scrollToTop() {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function PaginationPages() {
    return newspaper.pages.map((item) => (
      <li key={item.id}>
        <Button
          size="icon"
          variant={page === item.id ? "secondary" : "default"}
          className={page === item.id ? "border-2 border-primary" : ""}
          asChild
        >
          <Link
            href={`/newspaper/${newspaper.slug}/?edition=${newspaper.slug}&page=${item.id}`}
            className="flex items-center"
            onClick={scrollToTop}
          >
            {item.id}
          </Link>
        </Button>
      </li>
    ));
  }

  return (
    <ul className="mx-auto flex justify-center gap-1">
      <li>
        {page === 1 ? (
          <Button disabled className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>
        ) : (
          <Button className="flex items-center gap-1" asChild>
            <Link
              href={`/newspaper/${newspaper.slug}/?edition=${newspaper.slug}&page=${page - 1}`}
              onClick={scrollToTop}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Link>
          </Button>
        )}
      </li>
      {isDesktop ? (
        <PaginationPages />
      ) : (
        <li className="flex items-center px-3">
          <div>
            <span className="font-title text-lg">
              {page} - {newspaper.pages.length}
            </span>
          </div>
        </li>
      )}
      <li>
        {page === newspaper.pages.length ? (
          <Button disabled className="flex items-center gap-1">
            Próxima
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button className="flex items-center gap-1" asChild>
            <Link
              href={`/newspaper/${newspaper.slug}/?edition=${newspaper.slug}&page=${page + 1}`}
              onClick={scrollToTop}
            >
              Próxima
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </li>
    </ul>
  );
}
