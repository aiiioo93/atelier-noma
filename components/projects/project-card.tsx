import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    location: string;
    category: string;
    image: string;
    alt: string;
  };
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/projets/${project.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-5 border border-white/40 transition-all duration-500 group-hover:inset-4" />

          <span className="absolute right-6 top-6 font-sans text-xs tracking-[0.2em] text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-2 font-sans text-sm text-brand-muted">
              {project.location}
            </p>
          </div>

          <span className="pt-2 font-sans text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-foreground/45">
          {project.category}
        </p>
      </Link>
    </article>
  );
}