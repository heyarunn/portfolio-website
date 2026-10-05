# Portfolio

A personal developer portfolio built with Next.js (App Router) and Tailwind CSS.
Dark theme with an interactive particle-network hero, project showcase, skills
cloud, career timeline and a contact section.

## Tech stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS 3**
- Google Font: Jost

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |

## Project structure

```
src/
  app/
    layout.tsx       # Root layout, font, metadata
    page.tsx         # Assembles all sections
    globals.css      # Theme tokens + component utilities
  components/
    Header.tsx       # Sticky nav + mobile menu
    Hero.tsx         # Headline + particle background
    ParticleNetwork.tsx # Interactive pointer-driven canvas
    Projects.tsx     # Project cards
    Services.tsx     # What I do
    Process.tsx      # How I work (vertical flow)
    Skills.tsx       # Skills tag cloud
    Career.tsx       # Career journey blocks
    Contact.tsx      # Contact CTA
    Footer.tsx       # Footer
  data/
    content.ts       # All copy/content in one place
```

## Customizing

All text, projects, skills, career entries and contact details live in
`src/data/content.ts`. Colors and fonts are configured in `tailwind.config.ts`
and `src/app/layout.tsx`.
