# Development Guide

See [README.md](README.md) for setup and Docker instructions.

## Astro Project Structure

```
src/
  components/    # Reusable UI components
  data/         # Content data (projects, posts, skills, experiences)
  layouts/      # Page layouts
  pages/        # Route pages (auto-routed)
  styles/       # Global styles
```

## Development Tips

- Astro auto-reloads `src/` changes (except server-side code)
- Server changes require container restart: `docker compose restart dev`
- Use [Playwright](https://playwright.dev) for automated testing and debugging
- Check container logs: `docker compose logs dev -f`

## Deployment

Automatically deployed to Cloudflare Pages on `main` branch push via GitHub Actions.
