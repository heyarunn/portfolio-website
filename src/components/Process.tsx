import { processFlow } from "@/data/content";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">How I work</span>
          <h2 className="section-title mt-3">
            A clear process from idea to launch
          </h2>
          <p className="mt-4 text-muted">
            Every project follows a simple, proven path — understand the
            problem, design the solution, build it well, and ship it. No
            guesswork, just steady progress you can see at each step.
          </p>
        </div>

        {/* Vertical flow */}
        <ol className="relative mt-14 ml-3 max-w-2xl space-y-8 before:absolute before:left-[1.3rem] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-brand before:via-brand/40 before:to-transparent">
          {processFlow.map((item, i) => {
            const isFinal = i >= processFlow.length - 2;
            return (
              <li key={item.step} className="relative flex items-start gap-5">
                {/* Node */}
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${isFinal
                    ? "border-brand bg-brand text-white shadow-glow"
                    : "border-border bg-card text-brand-glow"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Step label + one-line description (no box) */}
                <div className="flex-1 pt-1">
                  <p className="font-display text-base font-semibold text-white">
                    {item.step}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
