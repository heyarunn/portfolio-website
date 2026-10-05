import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Me</span>
          <h2 className="section-title mt-3">
            A few things I&apos;ve designed and built
          </h2>
          <p className="mt-4 text-muted">
            A mix of things I&apos;ve built — from full-stack web apps to
            backend systems and this very site. Each one taught me something new
            and solved a real problem along the way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="glass-card group relative overflow-hidden p-7 hover:-translate-y-1 hover:border-brand/60 hover:shadow-card"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/20" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-2xl ring-1 ring-brand/30">
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-bold">
                        {p.name}
                      </h3>
                      <span className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 text-xs text-muted">
                        {p.period}
                      </span>
                    </div>
                    <p className="text-sm text-brand-glow">{p.tagline}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-[10px] text-brand-glow ring-1 ring-brand/40">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {p.link && p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-glow transition group-hover:gap-2"
                  >
                    {p.cta} <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
