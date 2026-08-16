import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ContactCta() {
  return (
    <section className="bg-brand px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-20">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/65">
              Un projet en tête ?
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Parlons de votre espace.
            </h2>

            <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-white/70 sm:text-base">
              Appartement, maison ou lieu professionnel, chaque projet commence
              par une conversation.
            </p>

            <div className="mt-9">
              <Button
                asChild
                size="lg"
                className="bg-white px-7 text-foreground hover:bg-white/90"
              >
                <Link href="/contact">Démarrer un projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}