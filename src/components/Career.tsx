import { careers } from "@/data/content";

export default function Career() {
  return (
    <section
      id="why"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Career Journey</span>
          <h2 className="section-title mt-3">Chapters of my career</h2>
          <p className="mt-4 text-muted">
            The path that shaped how I build — the roles, the learning, and the
            experiences that got me here.
          </p>
        </div>

        {/* Blocks, two per row */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {careers.map((item) => (
            <div
              key={item.no}
              className="glass-card group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-card"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/20" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand-glow">
                    {item.type}
                  </span>
                  <span className="text-xs text-muted">{item.period}</span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-brand-glow">
                  {item.destination}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
