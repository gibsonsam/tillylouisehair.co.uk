# Tilly Louise Hair

Static website for Tilly Louise Hair, built with Next.js, TypeScript and Tailwind CSS.

Exports to plain HTML/CSS/JS and is hosted on **GitHub Pages** at [tillylouisehair.co.uk](https://tillylouisehair.co.uk).

---

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

To update business details (phone, email, hours, address, social links) edit **`lib/site.ts`** — it's the single source of truth for all business data.

---

## Deployment

Deployments are automated via **GitHub Actions**:

| Event | Workflow |
|---|---|
| Pull request → `main` | `.github/workflows/ci.yml` — build + type-check |
| Push / merge → `main` | `.github/workflows/deploy.yml` — build + deploy to GitHub Pages |

No secrets or variables are required — the deploy workflow uses the built-in `GITHUB_TOKEN` via the `actions/deploy-pages` action.

---

## Project structure

```
.github/
  workflows/
    ci.yml        Pull request build + type-check
    deploy.yml    Main branch deploy to GitHub Pages
app/              Next.js App Router pages
components/       Shared UI components
  sections/       Homepage section components
lib/
  site.ts         ← Business data (edit this to update contact details, hours, etc.)
  hours.ts        ← Display formatting helpers for opening hours
```
