import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-surface p-8 text-center md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative">
            <h2 className="section-title mx-auto max-w-2xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Whether it&apos;s a new idea, a role, or just a quick chat about
              tech — I&apos;d love to hear from you. Drop a message and I&apos;ll
              get back to you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${contact.email}`} className="btn-primary">
                Email me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Connect on LinkedIn
              </a>
              <a href={`tel:${contact.phone}`} className="btn-ghost">
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
