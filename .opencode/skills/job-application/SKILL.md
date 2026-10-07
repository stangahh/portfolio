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
   Preserve the listing's original section structure and headings verbatim —
   don't summarize or flatten sections like "What You Need" / "What You'll
   Bring" vs "Nice to Have" / "Highly Regarded" into a single merged list.
   Step 4's fit assessment depends on that tiering surviving intact; losing it
   here means a hard requirement can get silently miscategorised as optional
   later. If the source page's structure is genuinely unclear or unmarked,
   note that explicitly in listing.md rather than inventing a structure.

3. **Research the company briefly.** Check the company's site, About page, or
   recent news for one or two concrete, specific details (a product, a stated
   value, a market position, something they've shipped or announced) — not
   generic flattery like "innovative" or "fast-growing." This feeds the
   company-interest beat in the cover letter (step 6). If nothing concrete
   turns up, don't pad — skip this beat and keep the letter to 3 paragraphs.

4. **Assess fit and flag hard gaps before building anything.** This is a gate,
   not just a note for later — don't start tailoring until this is done:
   - Split the listing's requirements into a mandatory tier and a
     preferred/nice-to-have tier. Listings rarely use the literal words
     "mandatory" or "essential" — look for structural signals instead: a
     "What You Will Bring" / "Requirements" / "You'll need" section is the
     mandatory tier; a "Highly Regarded" / "Nice to Have" / "Bonus" section is
     the preferred tier. If there's only one undifferentiated list, treat all
     of it as the mandatory tier.
   - Cross-check every mandatory-tier item against real evidence in
     `src/data/muchskills.ts`, `src/data/experiences.ts`, `src/data/projects.ts`,
     and `resume/Jesse_Stanger_CV.yaml`. "Evidence" means an actual skill
     entry, project, or bullet — not an adjacent/transferable skill assumed to
     cover it.
   - **Report every mandatory-tier item in a table**, not prose, so fit is
     scannable and consistent across every role:
     ```
     | Requirement | Evidence | Match |
     |---|---|---|
     | <requirement as stated> | <specific skill/project/bullet, or "none found"> | Strong / Partial / None |
     ```
     - **Strong** — directly evidenced, comfortably meets what's asked.
     - **Partial** — real evidence exists but is thinner than what's asked
       (e.g. self-rated Intermediate where "Strong" is required, or one
       project vs. sustained experience).
     - **None** — no evidence anywhere in the data sources. This is a hard
       gap by definition.
   - After the table, give a **single verdict line**: `Verdict: Strong Fit /
     Good Fit / Stretch / Hard Gap`, plus an at-a-glance count, e.g.
     `6 Strong, 2 Partial, 0 None`. Use:
     - **Strong Fit** — all/nearly all Strong, no None.
     - **Good Fit** — mostly Strong with some Partial, no None.
     - **Stretch** — multiple Partial or one None, still arguably worth
       applying.
     - **Hard Gap** — one or more None on items central to the role (not
       edge-case asks), or several None items.
   - If there's a **None**, say so plainly and note it materially increases
     rejection odds regardless of how well the rest of the profile fits.
     Let the user decide whether to continue — don't decide for them.
   - If the user doesn't explicitly ask about fit, do this assessment anyway
     and lead with it — the whole point is catching rejection-on-mandatory-
     requirements before time is spent building a tailored resume and letter.

5. **Read the current resume and data sources** before writing anything:
   - `resume/Jesse_Stanger_CV.yaml` — the canonical resume content
   - `src/data/experiences.ts`, `src/data/projects.ts`, `src/data/skills.ts` —
     fuller detail than what's condensed into the resume
   - `src/data/muchskills.ts` — self-assessed skill levels; use this to check
     whether a skill the listing asks for is genuinely strong, middling, or
     weak before deciding how much to emphasise it

6. **Tailor a copy of the resume**, not the canonical one:
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

7. **Write the cover letter data** to `resume/jobs/<slug>/cover_letter.json`,
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
   Structure the letter around three beats, flexibly split into 3 or 4 short
   paragraphs depending on how much real material there is:
   - **Opening hook** — career stage and trajectory tied to this specific
     role (e.g. "I've built X and Y as a [current role]; the [role title] at
     [company] is the natural next step"). Not a generic "I am writing to
     apply for..." opener.
   - **Company-specific interest** — a genuine, specific reason this
     *company* (not just the role) appeals, grounded in whatever concrete
     detail turned up in step 3. If step 3 found nothing concrete, fold this
     into the opening paragraph instead of inventing generic flattery — don't
     pad the letter to hit 4 paragraphs.
   - **Matching experience** — the 2-3 strongest, most relevant pieces of
     real experience from the tailored resume, in the person's own voice.
   - **Gap disclosure, if there are gaps** — name what's genuinely missing
     against the listing's requirements, then back any adaptability claim
     with specific tools/stacks the person has already picked up on the job
     (check `src/data/muchskills.ts` and the experience bullets for real
     examples). Don't close a gap disclosure with an abstract trait claim
     like "I'm a fast learner" or "I can pick up anything" — that's exactly
     the kind of unfalsifiable claim this rule set is trying to avoid. Anchor
     it in a named, checkable example instead (e.g. "X, Y, and Z were all new
     to me when I started building with them").
   - **Closing** — enthusiasm to contribute, a thank-you for considering the
     application, and a soft next-steps line (e.g. "I'd welcome the chance
     to discuss this further").
   Write in the person's own voice — direct, no filler, no generic enthusiasm
   claims that aren't backed by something concrete from their history. The
   company-interest beat is the one most prone to sounding like AI-generated
   flattery — hold it to the same no-fabrication bar as experience claims.

8. **Render both documents:**
   ```bash
   cd resume && make job JOB=<slug>
   ```
   This produces `Jesse_Stanger_Resume.pdf` and `Jesse_Stanger_Cover_Letter.pdf`
   in `resume/jobs/<slug>/`.

9. **Verify the resume PDF.** Temporarily flip `dont_generate_png: true` to
   `false` in the job's YAML, re-render, and view the PNG pages to confirm:
   page count (must be 2), no obvious overflow/cut-off text, no fabricated
   claims slipped in. Flip the setting back to `true` and re-render once
   confirmed (keeps the committed-if-ever-needed YAML consistent with the
   main resume's settings).

10. **Report back** the two PDF paths and a one-paragraph summary of what was
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
