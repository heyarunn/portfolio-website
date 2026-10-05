import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">What I do</span>
          <h2 className="section-title mt-3">
            Every core service your growth needs
          </h2>
          <p className="mt-4 text-muted">
            From design to deployment, I offer end-to-end services that turn
            ideas into polished, high-performing products. Whether you need a
            single piece or a full build, every project gets the same care and
            attention to detail.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card group p-6 hover:-translate-y-1 hover:border-brand/60 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-2xl ring-1 ring-brand/30">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-glow transition group-hover:gap-2"
              >
                {s.link} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
