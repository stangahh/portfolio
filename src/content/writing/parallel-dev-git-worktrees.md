---
title: "Parallel Development with Git Worktrees and Claude Code"
description: "Stop context-switching between tickets. Git worktrees give each task its own isolated workspace — and Claude Code skills automate the whole setup from a single prompt."
date: "Apr 2025"
dateGroup: "April 2025"
dateId: "2025-04"
tags: ["Claude Code", "Git", "Workflow", "AI"]
category: "technical"
---

Three tickets. All urgent. All yours.

The usual dance: `git stash`, switch branches, wait for rebuild. By the time you context-switch to ticket #2, you've already forgotten the edge case you were debugging in #1. Your teammates can't help because they'd conflict with your WIP branch. You're the bottleneck.

You don't need to work faster. You need to work in parallel.

## The Fix

**[Git worktrees](https://git-scm.com/docs/git-worktree) + [Claude Code](https://claude.ai/code) skills = parallel task execution.**

Git worktrees let a single repository exist in multiple directories simultaneously — each on its own branch, with its own working tree, fully isolated. No stashing. No conflicts. No lost context.

Claude Code skills automate the setup. One prompt, and you have a new worktree named after your ticket, branched correctly, ready to work.

> Don't context-switch — context-multiply.

## Installation

**Requirements:** [Claude Code](https://claude.ai/code) ≥ 2.0.12, [Git](https://git-scm.com/downloads) ≥ 2.5.0

```bash
# Add the marketplace and install
claude plugin marketplace add stangahh/cc-worktree-marketplace
claude plugin install worktree-manager@cc-worktree-marketplace
```

Then add the [Atlassian MCP server](https://www.atlassian.com/platform/remote-mcp-server) so Claude can pull ticket details directly from Jira:

```bash
claude mcp add --transport http atlassian-mcp-server https://mcp.atlassian.com/v1/mcp
```

**Manual install:** Pull the skill files from the [repository](https://github.com/stangahh/cc-worktree-marketplace) and drop them into your project's `.claude/skills/<skill-name>/SKILL.md`.

## The Workflow

Once installed, you just tell Claude about the ticket:

```
"Start work on PROJ-123"
```

Claude automatically fetches the ticket from Jira, creates an isolated worktree at `../repo-PROJ-123-description/`, and checks out a properly named branch (`feature/PROJ-123-description`).

Three tickets in flight looks like this:

```
Terminal 1: "Start work on PROJ-123"
Terminal 2: "I'm starting a new ticket now — PROJ-456"
Terminal 3: "PROJ-789 is ready to begin"
```

Your directory structure after:

```
/dev/myapp/                          (main) ← coordination hub
/dev/myapp-PROJ-123-login/           (feature/PROJ-123-login)
/dev/myapp-PROJ-456-dashboard/       (feature/PROJ-456-dashboard)
/dev/myapp-PROJ-789-api/             (fix/PROJ-789-api)
```

Each worktree links back to Jira context, works on an isolated branch, and can be committed and pushed independently.

## How It Works

Two composable skills under the hood:

- **`git-branching`** — enforces naming conventions (`feature/PROJ-123-desc`, `fix/PROJ-789-api`)
- **`worktree-manager`** — orchestrates worktree creation and wires in the [Atlassian MCP](https://www.atlassian.com/platform/remote-mcp-server) for ticket context

The key design principle: small, focused skills that chain together. Not a monolith.

## The Reality

**The wins:**
- Work on multiple tickets simultaneously without conflicts
- Zero context loss — each worktree has its own state, history, and Jira link
- No more stashing or losing WIP

**The rough edges:**
- You have to explicitly tell Claude which worktree to operate in: `"In the PROJ-123 worktree, add the login button"` — otherwise changes land in main
- Cleanup is manual for now (though a `cleanup-worktree` skill is a natural next step)
- Autonomous merge conflict resolution is still something LLMs get wrong — keep that step human

**The mental model shift:**
One worktree = one task. Internalize that, and the workflow is fluid. Ignore it, and you'll end up with 12 worktrees in various states of done.

## Extensions

- **Conventional commits?** Pair a commit-message skill with `git-branching` for end-to-end branch and commit convention enforcement.
- **Speed it up further?** Ask Claude to use subagents — it can parallelize research, file search, and implementation across worktrees. Good for reducing context rot on long-running tasks.
- **Share it with your team?** Commit the skills to your project's `.claude/` directory and everyone gets them automatically. Works with [OpenCode](https://opencode.ai) too — it reads `.claude/skills/` natively.

---

**Repository:** [github.com/stangahh/cc-worktree-marketplace](https://github.com/stangahh/cc-worktree-marketplace)
