import { nav, contact } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 ring-1 ring-brand/40">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              <span className="font-display text-lg font-bold">
                Arun<span className="text-brand-glow">A</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              I care about ownership, clean engineering and tools that make real work faster, and I'm always looking for AI-related projects to learn from.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Arun A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
