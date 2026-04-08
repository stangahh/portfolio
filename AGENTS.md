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

## Subagents — research and investigation

When instructed to "research", "investigate", "explore", or "look into" something, always delegate to a subagent via the Agent tool. This keeps research context isolated from the main conversation and prevents context bloat. Return only a concise summary of findings to the main conversation — not the full raw output.

## Context7 — proactive doc fetching

When architecting, configuring, or writing code that involves any of the following, fetch docs via Context7 **before** producing any code or config — even if you think you know the answer:

- **Astro** (components, integrations, config, adapters, content collections)
- **Cloudflare Wrangler / Workers / Pages / D1 / KV / R2** (CLI flags, wrangler.toml, bindings)
- **GitHub Actions** (workflow syntax, actions marketplace, runners, secrets, OIDC)
- **Any other specific tool, CLI, or platform** where version-specific syntax or config is involved
