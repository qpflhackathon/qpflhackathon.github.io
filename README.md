# EPFL Quantum Hackathon website

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS, and exported as a static site to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # static export to out/
pnpm lint
```

TypeScript is pinned to 6.x and ESLint to 9.x: typescript-eslint doesn't support TypeScript 7 yet, and the plugins in `eslint-config-next` don't support ESLint 10 yet.

## Where things live

- `src/content/` – site text and data (committee, schedule, past edition). Most updates only touch these files.
- `src/components/sections/` – one component per page section.
- `src/components/` and `src/components/ui/` – reusable building blocks (cards, buttons, sections, links).
- `src/app/globals.css` – Tailwind theme: brand colours (`rouge`, `leman`, `canard`, `taupe`, …) and fonts.
- `assets/images/` – images, imported in code via `@assets/images/...`.

## Deployment

Pushes to `main` build the site and publish `out/` to the `gh-pages` branch. Pull requests get a preview at `https://qpflhackathon.github.io/previews/pr-<N>/` (built with `BASE_PATH=/previews/pr-<N>`).
