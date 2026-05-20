# Copilot Instructions — Tilly Louise Hair

## Project overview
Static website for a hairdressing business. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide React. Exported as fully static HTML and hosted on **GitHub Pages** at tillylouisehair.co.uk. DNS is managed in Cloudflare (DNS only, no proxy).

## Critical: Tailwind CSS v4
This project uses **Tailwind CSS v4**, not v3. Key differences:
- Configuration is **CSS-first** — all theme customisation lives in `app/globals.css` inside `@theme {}`
- There is **no** `tailwind.config.js` or `tailwind.config.ts` — do not create one
- Custom tokens defined as `--color-*` and `--font-*` in `@theme` become Tailwind utility classes directly (e.g. `--color-gold` → `bg-gold`, `text-gold`, `border-gold`)
- Use `var(--color-xxx)` for inline CSS/style props; use utility class names in `className`

## Critical: Static export
- `next.config.ts` has `output: 'export'` and `images: { unoptimized: true }`
- Do **not** use any server-only Next.js features (server actions, API routes, middleware, etc.)
- All pages must be statically renderable at build time

## Colour palette (defined in `app/globals.css`)
| Token | Value | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Page background |
| `surface` | `#F2EDE6` | Card/section backgrounds |
| `surface-dark` | `#E0D5C8` | Borders, dividers |
| `brown` | `#2C1A0E` | Primary text, headings |
| `brown-light` | `#5C3D2E` | Secondary headings |
| `gold` | `#C9A84C` | Primary accent |
| `gold-light` | `#E8C97A` | Hover states |
| `gold-dark` | `#A8863A` | Active/pressed states |
| `muted` | `#8A7060` | Secondary/body text |

## Typography
- **Headings** (`h1`–`h5`): Playfair Display — `font-display` — elegant serif
- **Body**: Inter — `font-sans` — clean sans-serif
- Both fonts loaded via `next/font/google` in `app/layout.tsx` as CSS variables

## Mobile-first (critical)
- All layouts must be designed **mobile-first** — base styles for mobile, scale up with `sm:`, `md:`, `lg:`
- Minimum touch target size: 44×44px for all interactive elements
- Single-column on mobile, expand to multi-column on `md+`
- Never design desktop-first and add mobile overrides

## Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- All interactive elements need descriptive `aria-label` where the label isn't clear from context
- `aria-expanded` / `aria-controls` on toggles and menus
- Focus styles: `outline: 2px solid var(--color-gold); outline-offset: 2px` (set globally)
- Colour contrast must pass WCAG AA — avoid gold text on cream (use brown text on gold backgrounds instead)
- All images need meaningful `alt` text

## Component conventions
- Client components (`useState`, `useEffect`, framer-motion, `usePathname`) must have `'use client'` as the first line
- Server components (layout, footer, simple page wrappers) do not need it
- Section components live in `components/sections/`
- Framer Motion: always use `viewport={{ once: true, margin: "-50px" }}` on `whileInView` to avoid re-triggering on scroll back

## Business data
All contact details, opening hours, social links, tagline and business name are in **`lib/site.ts`**. Always import from there — never hardcode business data in components.

## Announcement banner
A thin fixed banner sits above the navigation bar. It is fully controlled from **`lib/site.ts`** — no code changes needed to update it:

| Field | Type | Purpose |
|---|---|---|
| `announcement.visible` | `boolean` | `true` shows the banner; `false` hides it (and collapses its height) |
| `announcement.message` | `string` | Banner copy — keep to one short sentence |
| `announcement.link` | `string \| null` | Optional CTA href; set to `null` for no button |
| `announcement.linkLabel` | `string \| null` | Optional CTA label; set to `null` for no button |

## Deployment
- CI runs on pull requests to `main` (build + type-check)
- Deploys run automatically on push to `main` via GitHub Actions → GitHub Pages
- No AWS infrastructure — no secrets or variables needed in the repo
