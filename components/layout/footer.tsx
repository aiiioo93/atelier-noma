import Link from "next/link";

const navigation = [
  { name: "Projets", href: "/projets" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:py-5 lg:px-8 lg:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="w-fit font-display text-xl font-medium sm:text-2xl"
          >
            Atelier Noma
          </Link>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs text-foreground/60 transition-colors hover:text-brand sm:text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-sans text-[10px] text-foreground/40 sm:mt-6 sm:text-xs">
          <p>© {new Date().getFullYear()} Atelier Noma</p>

          <p>Paris, France</p>
        </div>
      </div>
    </footer>
  );
}