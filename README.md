# Jesse Stanger — Portfolio

Portfolio site showcasing projects, writing, and experience. Built with [Astro](https://astro.build) with design inspiration from [o16g](https://o16g.com).

## Features

- SPA-like navigation with Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Dark theme with animated grid background
- Interactive particle effects
- Filterable project showcase with smooth animations
- Scroll progress indicator
- Fully responsive design

## Quick Start

**Local development:**
```bash
npm install
npm run dev  # http://localhost:4321
```

**Production build:**
```bash
npm run build
npm run preview
```

**Docker:**
```bash
# Development
docker compose --profile dev up

# Production  
docker compose --profile prod up  # http://localhost:8080
```

## Deployment

Automatically deployed to [Cloudflare Pages](https://pages.cloudflare.com/) on every push to `main` via GitHub Actions.

For development guide, see [AGENTS.md](AGENTS.md).
