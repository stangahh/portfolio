# Jesse Stanger — Portfolio

Personal site built with Astro. Design inspired by [o16g](https://o16g.com).

## Features

- SPA-like navigation with [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Dark theme with grid background
- Optional particle effects
- Project filtering with smooth animations
- Scroll progress bar
- Mobile responsive

## Setup

```bash
npm install
npm run dev # local dev at http://localhost:4321
npm run build # production build
```

### Docker

```bash
# Development
docker compose --profile dev up
docker compose --profile dev restart dev

# Production
docker compose --profile prod up # http://localhost:8080
```
