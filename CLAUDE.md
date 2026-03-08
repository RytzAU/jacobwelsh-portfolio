# Portfolio — jacobwelsh.dev

## Stack
Next.js 14 | React 18 | TypeScript 5 (strict) | Tailwind 3

## Commands
- `npm run dev` — development server
- `npm run build` — production build (static export)
- `npm run lint`
- No test suite

## Architecture
- Path alias: `@/*` → `./src/*`
- Pages: about, contact, sites (client work), work (case studies)
- Components: `src/components/` — case-studies/, diagrams/, video embeds (FeatureVideo, DemoVideo)
- Static site — no database, no auth, no API routes
- Case study components extracted into `src/components/case-studies/{project}/`

## Design System
- Inter font (display + body weights)
- Custom Tailwind: text-hero, text-display, text-title, text-body-lg, text-body, text-small
- Colors: bg-canvas, bg-surface, bg-elevated, text-primary, text-secondary, text-tertiary, border-border
- Reveal animation component for scroll-triggered entrances
- DemoVideo: click-to-play with poster, seek, unmute (for demos with audio)
- FeatureVideo: auto-playing muted loops (for feature previews)

## Conventions
- Package manager: npm
- Optimize for Core Web Vitals (LCP, CLS, FID)
- Every file < 300 lines
