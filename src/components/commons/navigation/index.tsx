"use client";

import BtnSocialNetwork from "@/components/commons/navigation/btn-social-network";
import MenuIcon from "@/components/icons/menu-icon";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Skeleton } from "@/components/ui/skeleton";
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

  function handleClick() {
    setOpen(false);
  }

  if (!hasMounted) {
    return (
      <div className="grid grid-cols-2 items-center justify-center bg-primary p-3">
        <div className="flex justify-start gap-3">
          <Skeleton className="h-[30px] w-[140px] rounded-md bg-secondary/10" />
        </div>
        <div className="flex justify-end">
          <span className="font-title text-4xl text-primary-foreground">
            <Link href="/">Saponíus</Link>
          </span>
        </div>
      </div>
    );
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
    <div className="grid grid-cols-2 items-center justify-center bg-primary p-3">
      <div className="flex justify-start">
        <Drawer open={open} onOpenChange={setOpen} autoFocus={open}>
          <DrawerTrigger>
            <Button
              aria-label="Abrir menu"
              size="icon"
              className="shadow-none"
              onClick={() => setOpen(!open)}
              asChild
            >
              <div className="fill-primary-foreground">
                <MenuIcon />
              </div>
            </Button>
          </DrawerTrigger>
          <DrawerContent
            aria-label="Menu com as Redes Sociais"
            className="text-pretty font-text tracking-wide"
          >
            <DrawerHeader>
              <DrawerTitle className="tracking-wide">Redes Sociais</DrawerTitle>
              <DrawerDescription>
                Siga a Choke7 nas Redes Sociais!
              </DrawerDescription>
            </DrawerHeader>
            <div className="mb-8">
              <BtnSocialNetwork handleClick={handleClick} />
            </div>
            <div className="fixed bottom-0 left-3">
              <Image
                src="/emotes/choke7privada.gif"
                alt="Choke7Privada"
                width={56}
                height={56}
                unoptimized
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex justify-end">
        <Link href="/">
          <span className="font-title text-4xl text-primary-foreground">
            Saponíus
          </span>
        </Link>
      </div>
    </div>
  );
}
