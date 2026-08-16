import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Projet introuvable",
    };
  }

  return {
    title: project.title,
    description: project.intro,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.id === id
  );

  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/projets"
            className="mb-12 inline-block font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-brand"
          >
            ← Tous les projets
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand">
                {project.location}
              </p>

              <h1 className="font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <p className="max-w-xl font-sans text-base leading-7 text-brand-muted sm:text-lg">
              {project.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Grande image */}
      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 767px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Informations projet */}
      <section className="border-b border-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-20 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/40">
                Année
              </p>

              <p className="mt-2 font-display text-2xl">
                {project.year}
              </p>
            </div>

            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/40">
                Surface
              </p>

              <p className="mt-2 font-display text-2xl">
                {project.surface}
              </p>
            </div>

            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/40">
                Lieu
              </p>

              <p className="mt-2 font-display text-2xl">
                {project.location}
              </p>
            </div>

            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/40">
                Mission
              </p>

              <p className="mt-2 font-display text-2xl">
                {project.mission}
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand">
              Le projet
            </p>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[0.95] sm:text-5xl">
              Une réponse pensée autour du lieu.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-brand-muted">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Projet suivant */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand">
            Projet suivant
          </p>

          <Link
            href={`/projets/${nextProject.id}`}
            className="group flex items-end justify-between gap-6 border-b border-border pb-8"
          >
            <div>
              <p className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
                {nextProject.title}
              </p>

              <p className="mt-3 font-sans text-sm text-brand-muted">
                {nextProject.location}
              </p>
            </div>

            <span className="pb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}