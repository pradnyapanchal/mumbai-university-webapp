# University of Mumbai — Vite + React 19 + Tailwind v4

## Stack
| Tool | Version |
|---|---|
| Vite | ^6 |
| React | ^19 |
| @vitejs/plugin-react | ^4 |
| tailwindcss + @tailwindcss/vite | ^4 (no postcss) |
| Tabler Icons | CDN |
| EB Garamond + Inter | Google Fonts CDN |

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview   # preview build
```

## File structure

```
mu-website/
├── index.html                      ← Vite root HTML
├── vite.config.js                  ← Vite + @tailwindcss/vite (no postcss)
├── package.json
└── src/
    ├── main.jsx                    ← createRoot entry
    ├── App.jsx                     ← root layout
    ├── index.css                   ← @import "tailwindcss" · @theme · all CSS
    ├── hooks/
    │   └── useReveal.js            ← IntersectionObserver scroll-reveal hook
    ├── data/
    │   └── content.js              ← all static content (edit here)
    └── components/
        ├── Navbar.jsx              ← sticky, fully responsive (hamburger + desktop)
        ├── Ticker.jsx              ← infinite news ticker
        ├── HeroSlider.jsx          ← auto-play, rAF progress bar, cubic-bezier
        ├── SlideGeo.jsx            ← 4 geometric SVG art overlays
        ├── AlertStrip.jsx          ← teal notice banner
        ├── StatsSection.jsx        ← 2-col mobile / 4-col desktop stat grid
        ├── NotificationsSection.jsx ← bordered list with New badges
        ├── NewsSection.jsx         ← 1→2→4 col responsive news grid
        ├── EventsSection.jsx       ← 1→2 col responsive events grid
        ├── QuickLinksSection.jsx   ← 2→3→6 col icon grid
        ├── SectionHead.jsx         ← reusable section header (eyebrow + title + link)
        └── Footer.jsx              ← 1→3→5 col responsive footer
```

## Tailwind v4

- **No `tailwind.config.js`** needed — plugin handles everything
- **No `postcss.config.js`** needed — `@tailwindcss/vite` is a native Vite plugin
- Custom tokens in `src/index.css` under `@theme {}`
- CSS custom properties (var(--teal) etc.) used for inline styles

## Responsiveness

Every section is designed mobile-first:
- Mobile   < 640px  — single column, compact spacing
- Tablet   640–1023px — 2-column grids
- Desktop  ≥ 1024px — full multi-column layouts, desktop navbar

## Customise content

Edit `src/data/content.js` — no component changes needed.

## Customise colours

Change the `@theme {}` + `:root {}` blocks in `src/index.css`.
