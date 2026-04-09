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

## UI changes — visual verification

After making any UI change (components, layouts, styles, pages), always verify the result in Playwright against the local dev server before considering the task done. Verify at **both desktop (1280×900) and mobile (375×812)** — resize the viewport explicitly for each. Check for horizontal overflow, layout breakage, and readability at both sizes.

When taking screenshots with Playwright, always save them to `.playwright-mcp/` (e.g., `browser_take_screenshot` with a path like `.playwright-mcp/my-screenshot.png`). Never dump screenshots to the repo root or any other tracked directory. Delete screenshots after verification is complete — do not leave them in the working tree.

## Data model — projects, skills, and the tag system

These three data files are tightly coupled. Changes to one almost always require changes to the others:

- **`src/data/projects.ts`** — Each project has a `tags: string[]` array. These tags are the canonical source of truth for filterable technology labels. Every tag becomes a filter button on `/projects`.
- **`src/data/skills.ts`** — Skill names listed here appear on the homepage (`/`) skills grid. **Skill names must exactly match project tags** (case-sensitive) wherever you want them to interlink. If a skill name doesn't match a tag, the connection is broken.
- **`src/data/experiences.ts`** — Experience descriptions are plain text. The `tagify()` function in `src/pages/about.astro` scans these descriptions at build time and wraps any exact tag matches (case-insensitive, word-boundary constrained) in clickable `<a class="skill-chip">` links pointing to `/projects?tech=<tag>`.

### Rules for keeping the system consistent

1. **Adding a new skill**: Add it to `skills.ts` AND ensure at least one project in `projects.ts` carries the matching tag. The tag name in `projects.ts` is the canonical form — the skill name should match it exactly.
2. **Adding a new tag to a project**: Check whether it should also appear in `skills.ts`. If it's a meaningful specialty or technology the site highlights, add it.
3. **Skill names must be exact tag names**: Do not use compound or qualified names (e.g. `"Microfrontends (single-spa)"`) if you want the about page to chip-link to the filter. The parenthetical qualifiers break the match. Use the plain form (`"Microfrontends"`) and let the `single-spa` tag handle the detail separately.
4. **Experience descriptions and tagify**: If you add a tag to `projects.ts` and want it to appear as a chip on the about page, check whether the relevant experience descriptions in `experiences.ts` actually use that word. The match is exact (case-insensitive, whole-word). Singular vs. plural matters — `"Microfrontends"` does not match `"microfrontend"`. Update the description to use the canonical tag name if needed.
5. **URL filter keys**: The `/projects?tech=<tag>` filter uses `tag.toLowerCase()` as the key. Spaces are allowed (e.g. `?tech=react three fiber`). Tags with spaces, dots, or slashes work fine in the URL and in the filter logic.

## Subagents — research and investigation

When instructed to "research", "investigate", "explore", or "look into" something, always delegate to a subagent via the Agent tool. This keeps research context isolated from the main conversation and prevents context bloat. Return only a concise summary of findings to the main conversation — not the full raw output.

## Keeping AGENTS.md and README.md up to date

After making any change that affects how the project works — including new pages, routes, components, integrations, config changes, deployment changes, or data structures — update both files as needed:

- **AGENTS.md**: Update development tips, project structure, or workflow guidance if the change affects how agents or developers should work with the repo.
- **README.md**: Update setup instructions, feature descriptions, or any user-facing documentation that reflects the current state of the app.

Do not defer these updates. Treat them as part of the same task as the code change.

## Context7 — proactive doc fetching

When architecting, configuring, or writing code that involves any of the following, fetch docs via Context7 **before** producing any code or config — even if you think you know the answer:

- **Astro** (components, integrations, config, adapters, content collections)
- **Cloudflare Wrangler / Workers / Pages / D1 / KV / R2** (CLI flags, wrangler.toml, bindings)
- **GitHub Actions** (workflow syntax, actions marketplace, runners, secrets, OIDC)
- **Any other specific tool, CLI, or platform** where version-specific syntax or config is involved
