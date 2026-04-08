# AGENTS

Repository: https://github.com/stangahh/portfolio

See [README.md](README.md) for setup and Docker instructions.

## GitHub CLI

Always use `gh` for interacting with GitHub. Common commands:
- `gh repo view` - view current repo info
- `gh issue list` - list issues
- `gh issue create` - create new issue
- `gh pr create` - create pull request
- `gh pr list` - list pull requests
- `gh pr view` - view current PR

## Debugging

```bash
docker compose logs dev -f # view container logs
docker compose ps # view running containers
```

## Tips

- Astro auto-reloads in `src/` but server changes need full restart
- Frontend debugging use browser DevTools
