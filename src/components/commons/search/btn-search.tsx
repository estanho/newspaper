"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BtnSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  function handleSearch() {
    if (searchParams.get("edition")) {
      const edition = searchParams.get("edition");
      if (pathname.endsWith(`/${edition}`)) return;
      setIsLoading(true);
      router.push(`/newspaper/${edition}?edition=${edition}&page=1`);
    }
  }

  return (
    <Button
      aria-label="Pesquisar"
      variant="secondary"
      size="icon"
      className="border-2 border-secondary-foreground"
      onClick={handleSearch}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        <SearchIcon className="text-secondary-foreground" />
      )}
    </Button>
  );
}
