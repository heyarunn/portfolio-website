import { careers } from "@/data/content";

export default function Career() {
  return (
    <section
      id="why"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="section-title">Chapters of my career</h2>
          <p className="mt-4 text-muted">
            The path that shaped how I build — the roles, the learning, and the
            experiences that got me here.
          </p>
        </div>

        {/* Timeline: centre line on desktop, left line on mobile */}
        <div className="relative mt-14">
          <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#b48cff] via-[#7a3fe0] to-transparent md:left-1/2" />

          <div className="space-y-10 md:space-y-14">
            {careers.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.no}
                  className={`relative pl-12 md:flex md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* dot on the line */}
                  <span className="absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-brand ring-4 ring-[#0a0613] md:left-1/2" />

                  {/* card, alternating sides */}
                  <article className="glass-card p-6 hover:border-brand/50 md:w-[calc(50%-2.5rem)] md:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="rounded-md bg-gradient-soft px-2 py-0.5 text-xs text-gradient">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted">{item.period}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-gradient">
                      {item.destination}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}