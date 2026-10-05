import ParticleNetwork from "./ParticleNetwork";
import { contact } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* Interactive particle / constellation background */}
      <ParticleNetwork className="z-0" />

      {/* Soft skyline + vignette gradient to echo the reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"
      />

      <div className="container-x relative z-10 flex flex-col items-center py-28 text-center md:py-36">
        <span className="eyebrow">Fueled by Curiosity. Driven by Impact</span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Transforming Your{" "}
          <span className="bg-gradient-to-r from-brand-glow to-accent bg-clip-text text-transparent">
            Ideas into Reality
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Connect with me
          </a>
          <a href="#services" className="btn-ghost">
            Explore services
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Web Designing
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Web Development
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
            Cloud & Deployment
          </span>
        </div>
      </div>
    </section>
  );
}
