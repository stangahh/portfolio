---
name: job-application
description: Generate a tailored resume and cover letter PDF from a job listing URL. Use when the user pastes a job posting link and wants an application pack, or asks to "apply for this job", "tailor my resume for this", or similar.
license: MIT
compatibility: opencode
---

## What this does

Takes a job listing URL, fetches and reads the listing, then produces a
job-specific resume YAML, rendered resume PDF, and rendered cover letter PDF
under `resume/jobs/<slug>/`.

## Prerequisites

- `uv tool install "rendercv[full]"` (one-time; check with `uv tool list` first)
- The source files this skill depends on: `resume/Jesse_Stanger_CV.yaml`,
  `resume/cover_letter_template.typ`, `resume/scripts/compile_cover_letter.py`,
  `resume/Makefile`, `src/data/muchskills.ts` (for skill-level evidence).

## Workflow

1. **Fetch the listing.** Use `webfetch` on the provided URL. If it fails or
   returns junk (JS-rendered job boards often do), try the Playwright browser
   tools to load and read the page instead.

2. **Pick a slug** for the folder: `<company>-<role>` in lowercase-with-hyphens
   (e.g. `acme-senior-engineer`). Create `resume/jobs/<slug>/` and save the
   listing text to `resume/jobs/<slug>/listing.md` (include the URL at the top).

3. **Read the current resume and data sources** before writing anything:
   - `resume/Jesse_Stanger_CV.yaml` — the canonical resume content
   - `src/data/experiences.ts`, `src/data/projects.ts`, `src/data/skills.ts` —
     fuller detail than what's condensed into the resume
   - `src/data/muchskills.ts` — self-assessed skill levels; use this to check
     whether a skill the listing asks for is genuinely strong, middling, or
     weak before deciding how much to emphasise it

4. **Tailor a copy of the resume**, not the canonical one:
   - Copy `resume/Jesse_Stanger_CV.yaml` to `resume/jobs/<slug>/Jesse_Stanger_CV.yaml`
   - Reorder/reword the Skills lines and experience bullets to foreground what
     the listing asks for, using the person's own existing wording as the
     source of truth
   - Do not invent experience, skills, employers, or dates that aren't already
     in the canonical data. If the listing wants something genuinely absent,
     leave it out rather than fabricate it.
   - Keep it to 2 pages. Check by rendering (step 6) before finishing.
   - Update `settings.render_command.output_folder` is not needed — the
     Makefile passes `--output-folder` explicitly.

5. **Write the cover letter data** to `resume/jobs/<slug>/cover_letter.json`,
   matching the fields `cover_letter_template.typ` expects:
   ```json
   {
     "name": "Jesse Stanger",
     "location": "Melbourne, Australia",
     "email": "me@stangahh.dev",
     "portfolio": "https://stangahh.dev",
     "date": "<today, e.g. 6 October 2026>",
     "hiring-manager": "<name or \"Hiring Manager\" if unknown>",
     "company": "<company name>",
     "company-location": "<city, country, or omit/null if unknown>",
     "role-title": "<role title from the listing>",
     "salutation": "Dear <Hiring Manager / name>,",
     "body-paragraphs": ["<para 1>", "<para 2>", "<para 3, optional>"],
     "sign-off": "Kind regards,"
   }
   ```
   Keep the letter to 3 short paragraphs: why this role/company, the 2-3
   strongest matching pieces of real experience, and a closing line. Write in
   the person's own voice — direct, no filler, no generic enthusiasm claims
   that aren't backed by something concrete from their history.

6. **Render both documents:**
   ```bash
   cd resume && make job JOB=<slug>
   ```
   This produces `Jesse_Stanger_Resume.pdf` and `Jesse_Stanger_Cover_Letter.pdf`
   in `resume/jobs/<slug>/`.

7. **Verify the resume PDF.** Temporarily flip `dont_generate_png: true` to
   `false` in the job's YAML, re-render, and view the PNG pages to confirm:
   page count (must be 2), no obvious overflow/cut-off text, no fabricated
   claims slipped in. Flip the setting back to `true` and re-render once
   confirmed (keeps the committed-if-ever-needed YAML consistent with the
   main resume's settings).

8. **Report back** the two PDF paths and a one-paragraph summary of what was
   emphasised and why, so the user can review before submitting.

## Rules

- Never fabricate experience, skills, dates, or employers. Every claim in the
  tailored resume and cover letter must trace to something already in
  `src/data/`, `resume/Jesse_Stanger_CV.yaml`, or `src/data/muchskills.ts`.
- Don't touch the canonical `resume/Jesse_Stanger_CV.yaml` — always work on
  the copy inside `resume/jobs/<slug>/`.
- `resume/jobs/` is gitignored (see root `.gitignore`) — these are personal,
  per-application artifacts, not site content. Don't try to commit them.
- If the listing is paywalled, requires login, or can't be fetched, say so
  and ask the user to paste the text directly rather than guessing content.
