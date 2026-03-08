# Jacob Welsh Portfolio

A Scandinavian editorial-inspired portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Design

Inspired by Legora and Asket—Scandinavian minimalism meets editorial typography.

- Large, confident serif headlines (Cormorant Garamond)
- Generous whitespace
- Warm neutral colour palette (cream, paper, ink, stone)
- Subtle animations and transitions
- Mobile-first, responsive design

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles and Tailwind
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── contact/
│   │   └── page.tsx    # Contact page
│   └── work/
│       ├── page.tsx    # Work index
│       ├── shake/
│       │   └── page.tsx # Shake case study
│       ├── rytz/
│       │   └── page.tsx # RYTZ case study
│       └── arqelo/
│           └── page.tsx # Arqelo case study
```

## Customisation

### Content
- Update contact details in all pages (search for `jacob@jacobwelsh.dev`, LinkedIn URLs)
- Add actual screenshots to replace placeholder divs
- Adjust copy as needed

### Screenshots
Replace the placeholder `[Platform Screenshot]` divs with actual images:
1. Add images to `/public/images/`
2. Use Next.js Image component: `import Image from 'next/image'`
3. Replace placeholder divs with `<Image src="/images/..." alt="..." fill className="object-cover" />`

### Fonts
Fonts are loaded from Google Fonts in `globals.css`. To change:
1. Update the `@import` statement
2. Update `fontFamily` in `tailwind.config.ts`

### Colours
Colour palette is defined in `tailwind.config.ts` under `colors`:
- `cream`: Primary background
- `paper`: Secondary background
- `ink`: Primary text
- `stone`: Secondary text
- `muted`: Tertiary text
- `accent`: Hover states

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import project to Vercel
3. Deploy

Or build locally:
```bash
npm run build
# Output in .next/
```

## Domain Setup

Configure `jacobwelsh.dev` DNS:
1. Add A record pointing to Vercel IP
2. Add CNAME for www subdomain
3. Enable SSL in Vercel dashboard

---

Built with Next.js 14, React, TypeScript, and Tailwind CSS.
