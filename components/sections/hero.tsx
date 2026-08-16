import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto min-h-[calc(100svh-5rem)] max-w-7xl overflow-hidden md:grid md:h-[calc(100svh-5rem)] md:min-h-0 md:grid-cols-2 md:items-center md:gap-10 md:overflow-visible md:px-6 md:py-10 lg:px-8">
      {/* Texte */}
      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-end px-6 py-10 text-white md:min-h-0 md:items-center md:px-0 md:py-0 md:text-foreground">
        <div className="w-full max-w-xl">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.28em] text-white/70 md:mb-6 md:text-sm md:text-brand">
            Architecture intérieure
            <span className="hidden md:inline"> & design</span>
          </p>

          <h1 className="max-w-sm font-display text-5xl font-medium leading-[0.92] md:max-w-none md:text-6xl md:leading-[0.95] md:tracking-tight lg:text-7xl">
            Des espaces pensés pour être vécus.
          </h1>

          {/* Texte mobile */}
          <p className="mt-6 max-w-sm font-sans text-sm leading-6 text-white/75 md:hidden">
            Des intérieurs élégants, fonctionnels et intemporels, imaginés
            autour de celles et ceux qui les habitent.
          </p>

          {/* Texte desktop */}
          <p className="mt-8 hidden max-w-lg font-sans text-lg leading-7 text-brand-muted md:block">
            Atelier Noma imagine des intérieurs élégants, fonctionnels et
            intemporels, conçus autour de celles et ceux qui les habitent.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-10">
            <Button
              asChild
              size="lg"
              className="bg-white px-6 text-foreground hover:bg-white/90 md:bg-foreground md:text-background md:hover:bg-foreground/85"
            >
              <Link href="/projets">Découvrir nos projets</Link>
            </Button>

            <Link
              href="/a-propos"
              className="font-sans text-xs text-white/80 transition-colors hover:text-white md:text-sm md:text-foreground md:underline-offset-4 md:hover:text-brand md:hover:underline"
            >
              Notre approche →
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="absolute inset-0 z-0 md:relative md:inset-auto md:h-[calc(100svh-10rem)]">
        <Image
          src="/images/hero/atelier-noma-hero.jpg"
          alt="Intérieur résidentiel parisien imaginé par Atelier Noma"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover object-center"
        />

        {/* Overlay uniquement smartphone */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 md:hidden" />

        {/* Cadre uniquement desktop */}
        <div className="absolute inset-6 hidden border border-white/35 md:block" />

        {/* Informations uniquement desktop */}
        <div className="absolute bottom-8 left-8 hidden text-white md:block">
          <p className="font-display text-3xl">Paris</p>

          <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-white/75">
            Projet résidentiel
          </p>
        </div>
      </div>
    </section>
  );
}