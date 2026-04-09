---
title: "The Unix Philosophy for AI Toolchains"
description: "Do one thing and do it well. How the Unix philosophy maps onto AI-native workflows: small skills, hierarchical CLAUDE.md files, and version-controlled agents."
date: "2026-04-07T14:23:00+10:00"
tags: ["Unix", "Workflow", "AI", "Tooling", "Philosophy"]
category: "essays"
---

Most developers' AI workflows look like someone else's defaults.

A system prompt copied from a blog post. Tool configuration that shipped with the extension. Instructions written once, never revisited. The same mistake we made with IDEs — hand the complexity to a monolith and adapt yourself to it.

The Unix philosophy is the antidote. It's old. It applies to a completely new layer of the stack.

## What it actually says

Doug McIlroy's summary has outlasted most of what they were building at Bell Labs:

> Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.

Do one thing well. Compose tools together. Use a universal interface.

The pipe is the whole game. Each tool knows nothing about the others. Each is independently testable, independently replaceable. The composition is where the power lives. That principle didn't die with the terminal — it found a new substrate: natural language.

## Skills as small tools

A Claude Code skill is a markdown file. It lives in `~/.claude/skills/<name>/SKILL.md`. It does one thing. You invoke it with a slash command and it knows exactly what to do — because it was written for exactly that purpose, not every purpose.

```
/worktree-manager PROJ-123
```

New worktree. Named branch. Jira context pulled in. That's the whole skill. It doesn't manage CI. It doesn't explain git. One thing, done well.

The anatomy mirrors a shell function:

```markdown
---
name: commit
description: Stage and commit changes with a conventional commit message. Use when committing work.
---

Stage modified files, generate a conventional commit message from the diff,
and commit. Confirm before pushing.
```

Where a shell function crystallises a repeated terminal action, a skill crystallises a repeated AI interaction into something reusable and precise. The pattern is identical. The interface is English instead of stdin.

Skills compose. A release skill can invoke the commit skill. A PR skill can invoke a review skill. Build primitives first, then pipelines. And apply the same discipline: the moment a skill starts doing two things, split it.

<details>
<summary>OpenCode equivalent</summary>

OpenCode respects the `.claude/` directory structure. Drop skill directories under `.claude/skills/<name>/SKILL.md` in your project or home directory and OpenCode discovers and invokes them via the same slash-command interface. Your skill library is portable across both tools without modification.

</details>

## Hierarchical CLAUDE.md files

Shell scripts in `~/bin` are global. Config in the repo is local. The distinction matters — global tools belong globally, project context belongs locally.

Claude Code applies the same hierarchy to `CLAUDE.md` files. When you run Claude in a directory, it traverses *up* the tree and loads every `CLAUDE.md` it finds along the way. Subdirectory files are loaded on-demand, as Claude accesses files in those directories.

```
~/.claude/CLAUDE.md              ← always loaded (global prefs)
~/projects/api/CLAUDE.md         ← loaded when working in this repo
~/projects/api/src/CLAUDE.md     ← loaded when Claude touches src/
```

Each layer knows its scope. The global file doesn't encode project-specific rules. The project file doesn't try to cover every repo. The agent inherits the full stack and applies the right level for the task. `$PATH` for context — local overrides global, specific overrides general.

Keep them under 500 lines. Move reference material into skill files, which are loaded on-demand rather than at session start.

<details>
<summary>OpenCode equivalent</summary>

OpenCode reads the same `CLAUDE.md` hierarchy. A `CLAUDE.md` at your project root provides project context; `~/.claude/CLAUDE.md` provides your global preferences. If you already maintain these files for Claude Code, OpenCode picks them up automatically — no duplication needed.

</details>

## Version control is the only discipline that matters

A dotfile not in git is technical debt — one drive failure from years of preferences, gone. Your AI toolchain has the same problem with ten times the stakes.

Your skills encode decisions. How you want PRs drafted. How you want migrations reviewed. How you want release notes structured. That's not configuration — it's experience. It belongs in a repo.

```
~/.claude/
  CLAUDE.md
  skills/
    commit/
      SKILL.md
    review-pr/
      SKILL.md
    worktree-manager/
      SKILL.md
      reference.md       ← loaded on-demand, not at session start
```

Version-controlled, committed, pushed. Your toolchain survives a new machine. The git log records when you decided PRs should always include a test plan. You can bisect if a skill starts behaving unexpectedly.

The commit history is the archaeology of your judgment. Every entry in `skills/` is a decision that something was worth automating — and now that decision has a timestamp.

<details>
<summary>OpenCode equivalent</summary>

OpenCode respects the same `.claude/` directory in your home folder. A single dotfiles repo containing `~/.claude/` works for both tools. One source of truth, two AI environments.

</details>

## Each skill is a decision

Not a config file. Not a slash command. A decision, crystallised into a form the agent can execute.

The decision to never manually draft a commit message. The decision that PR descriptions should always include a test plan. The decision that worktree setup costs more cognitive overhead than it should.

Each one is sitting in a file somewhere, running silently, compounding.

Every skill you write makes the next one faster to write. The review skill you wrote last quarter runs on every PR. The commit skill fires dozens of times a week. The ROI on tooling is absurd, and AI tooling has the same economics with a higher ceiling — the tasks it touches are bigger.

The Unix philosophy is old because it's right. Build small things that do one thing well. Wire them together. Own the interface.

Your AI toolchain is the one piece of software you'll use every single day of your career. Put it in git.
