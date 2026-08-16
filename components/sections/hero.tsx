import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      {/* Version smartphone */}
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#b7ad9d] md:hidden">
        {/* Future image */}
        <div className="absolute inset-0 bg-[#b7ad9d]" />

        {/* Overlay pour garder le texte lisible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

        <div className="relative flex min-h-[calc(100svh-5rem)] items-end px-6 py-10 text-white">
          <div className="w-full pb-4">
            <p className="mb-5 font-sans text-xs uppercase tracking-[0.28em] text-white/70">
              Architecture intérieure
            </p>

            <h1 className="max-w-sm font-display text-5xl font-medium leading-[0.92]">
              Des espaces pensés pour être vécus.
            </h1>

            <p className="mt-6 max-w-sm font-sans text-sm leading-6 text-white/75">
              Des intérieurs élégants, fonctionnels et intemporels, imaginés
              autour de celles et ceux qui les habitent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                asChild
                className="bg-white px-6 text-foreground hover:bg-white/90"
              >
                <Link href="/projets">Découvrir nos projets</Link>
              </Button>

              <Link
                href="/a-propos"
                className="font-sans text-xs text-white/80 transition-colors hover:text-white"
              >
                Notre approche →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Version tablette / ordinateur */}
      <section className="mx-auto hidden h-[calc(100svh-5rem)] max-w-7xl grid-cols-2 items-center gap-10 px-6 py-10 md:grid lg:px-8">
        <div className="max-w-xl">
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.3em] text-brand">
            Architecture intérieure & design
          </p>

          <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-tight lg:text-7xl">
            Des espaces pensés pour être vécus.
          </h1>

          <p className="mt-8 max-w-lg font-sans text-lg leading-7 text-brand-muted">
            Atelier Noma imagine des intérieurs élégants, fonctionnels et
            intemporels, conçus autour de celles et ceux qui les habitent.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/85"
            >
              <Link href="/projets">Découvrir nos projets</Link>
            </Button>

            <Link
              href="/a-propos"
              className="font-sans text-sm underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Notre approche →
            </Link>
          </div>
        </div>

        <div className="relative h-[calc(100svh-10rem)] w-full overflow-hidden bg-[#ddd6ca]">
          <div className="absolute inset-6 border border-foreground/15" />

          <div className="absolute bottom-8 left-8">
            <p className="font-display text-3xl">Paris</p>

            <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-foreground/60">
              Projet résidentiel
            </p>
          </div>
        </div>
      </section>
    </>
  );
}