"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Projets", href: "/projets" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/a-propos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-medium tracking-wide"
        >
          Atelier Noma
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-foreground/70 transition-colors hover:text-brand"
            >
              {item.name}
            </Link>
          ))}

          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/85"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </nav>

        <div className="md:hidden">
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Ouvrir le menu"
        className="hover:bg-transparent"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-px w-5 bg-foreground" />
          <span className="h-px w-5 bg-foreground" />
        </span>
      </Button>
    </SheetTrigger>

    <SheetContent
      side="right"
      className="w-[85%] border-l border-border bg-background px-8 py-8 sm:max-w-sm"
    >
      <SheetHeader className="p-0 text-left">
        <SheetTitle className="font-display text-2xl font-medium">
          Atelier Noma
        </SheetTitle>
      </SheetHeader>

      <nav className="mt-16 flex flex-col items-start gap-9">
        {navigation.map((item) => (
          <SheetClose asChild key={item.href}>
            <Link
              href={item.href}
              className="font-display text-3xl font-normal transition-colors hover:text-brand"
            >
              {item.name}
            </Link>
          </SheetClose>
        ))}

        <div className="mt-5 h-px w-full bg-border" />

        <SheetClose asChild>
          <Button
            asChild
            className="mt-1 w-fit bg-foreground px-7 py-5 text-background hover:bg-foreground/85"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </SheetClose>
      </nav>
    </SheetContent>
  </Sheet>
</div>
      </div>
    </header>
  );
}