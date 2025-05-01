"use client";

import BtnSocialNetwork from "@/components/commons/navigation/btn-social-network";
import MenuIcon from "@/components/icons/menu-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <div className="h-16 bg-primary p-3"></div>;
  }

  if (isDesktop) {
    return (
      <div className="grid grid-cols-2 items-center justify-center bg-primary p-3">
        <div className="flex justify-start">
          <BtnSocialNetwork />
        </div>
        <div className="flex justify-end">
          <span className="font-title text-4xl text-primary-foreground">
            <Link href="/">Saponíus</Link>
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center bg-primary p-3">
        <div className="flex justify-start">
          <Button size="icon" onClick={() => setOpen(!open)}>
            <span className="fill-primary-foreground">
              <MenuIcon />
            </span>
          </Button>
        </div>
        <div className="flex justify-end">
          <Link href="/">
            <span className="font-title text-4xl text-primary-foreground">
              Saponíus
            </span>
          </Link>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          aria-label="Menu com as Redes Sociais"
          className="w-[70%]"
        >
          <SheetHeader className="mt-12">
            <SheetTitle>Redes Sociais</SheetTitle>
            <SheetDescription>
              Siga a Choke7 nas Redes Sociais!
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8">
            <BtnSocialNetwork />
          </div>
          <div className="fixed bottom-0">
            <Image
              src="/emotes/choke7privada.gif"
              alt="Choke7Privada"
              width={56}
              height={56}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
