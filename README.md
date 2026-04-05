# Beautiful Animated Academic Website (No Build, Pure HTML/CSS/JS)

Deploy on GitHub Pages in minutes. All content is in `/data/*.json` — just edit and push.

## Quick Start
1. **Edit content** in `data/site.json`, `data/projects.json`, `data/publications.json`, `data/experience.json`.
2. Optionally place a portrait at `assets/img/avatar.jpg` and link your CV (in `data/site.json` → `cv`).
3. Push to a repo named **username.github.io** (for root domain) or any repo and enable GitHub Pages.
4. Open your site — done!

## Features
- Clean, responsive layout with **glassmorphism** and **gradient** accents
- **Reveal‑on‑scroll** animations (respects `prefers-reduced-motion`)
- **Theme toggle** (light/dark) with persistence
- Sticky, mobile‑friendly nav
- Data‑driven sections (projects, pubs, experience) from JSON
- No build step, no dependencies

## Where to edit
- **Title/hero/bio/socials** → `data/site.json`
- **Projects** → `data/projects.json`
- **Publications** → `data/publications.json`
- **Experience** → `data/experience.json`

## Notes
- If testing locally with `file://`, some browsers block `fetch()` of JSON. Use a tiny server: `python -m http.server` and open `http://localhost:8000`.
- All animations are subtle and accessible by default.
