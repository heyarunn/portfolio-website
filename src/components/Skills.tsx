import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Skills &amp; Tech</span>
          <h2 className="section-title mt-3">
            The tools and technologies I work with
          </h2>
          <p className="mt-4 text-muted">
            The technologies I reach for every day to build fast, reliable and
            scalable products. Always learning, always adding to the toolkit.
          </p>
        </div>

        {/* Organic, left-aligned tag cloud */}
        <div className="relative mt-14">
          {/* soft glow behind the cloud */}
          <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-[60%] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-3">
            {skills.map((skill) =>
              skill.featured ? (
                <span
                  key={skill.name}
                  className="rounded-full border border-brand bg-brand/20 px-5 py-2.5 text-base font-semibold text-white shadow-glow backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-brand/30"
                >
                  {skill.name}
                </span>
              ) : (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-white"
                >
                  {skill.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
