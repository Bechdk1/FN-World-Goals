# FN World Goals

School project: React + Vite.

## Getting started

```bash
npm install
cp .env.example .env   # optional — 4000 is the default either way
npm run dev
```

The app runs on http://localhost:4000/.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR on port 4000 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the built `dist/` on port 4000 |
| `npm run lint` | ESLint over the project |

## Configuration

`vite.config.js` reads `.env` through Vite's `loadEnv` and takes `PORT` from it,
falling back to 4000. `strictPort` is on, so a busy port fails loudly instead of
silently moving the app somewhere else.

`.env` is git-ignored; `.env.example` is the tracked template. Only variables
prefixed `VITE_` reach the browser (as `import.meta.env.VITE_*`) — never put a
secret in one, it ships in the bundle.

## Linting

ESLint 10 with flat config in `eslint.config.js`, using the `react-hooks` and
`react-refresh` plugins. The Vite template ships oxlint by default; this project
uses ESLint instead.

Note that Oxc still appears in the dependency tree, in a different role: Vite 8
bundles with Rolldown, which uses Oxc as its parser, and `@vitejs/plugin-react`
uses Oxc for the Fast Refresh transform. That is the build pipeline, not linting,
and it is unrelated to the oxlint/ESLint choice.
