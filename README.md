# University Grade Tracker (Vite + React + TS)

![UI Screenshot](assets/screenshot.png)

This is a minimal Vite + React + TypeScript scaffold to run `tracker.tsx`.

Quick start:

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

Notes:
- This project includes Tailwind CSS; if you don't want Tailwind, remove `index.css` and the PostCSS files.
- `window.storage` is referenced by the component; in a normal browser environment this won't exist — it's likely provided by an extension or host. The app will catch errors and fall back to an empty state, but you can replace `window.storage` calls with localStorage if desired.

GitHub Pages deployment
- The app is configured for the GitHub repository `uni-track`.
- The workflow at `.github/workflows/pages.yml` builds and deploys the site to GitHub Pages whenever you push to `main`.
- In the GitHub repository settings, set Pages to use `GitHub Actions` as the source.
- The workflow also writes `.nojekyll` and `404.html` so static assets load correctly and direct refreshes stay on the app.
