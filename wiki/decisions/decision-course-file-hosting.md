---
title: Decision - Course File Hosting in the Site Repo
type: decision
tags: [website, course, hosting, jupyter, assets]
created: 2026-06-26
updated: 2026-07-31
sources: []
---

# Decision - Course File Hosting in the Site Repo

**Status:** accepted (chosen by the human on 2026-06-26; implemented - files are
in the repo and the page is built, see [[decision-bilingual-course-page]]).

> **Correction (2026-06-27):** the **nbviewer** link was **dropped**; only the
> "Open in Colab" link survives. Two issues surfaced when testing the live links:
> (1) the Colab/nbviewer URLs pointed at `assets/courses/cryptography/` but the
> notebooks actually live in the `notebooks/` subfolder - fixed by adding
> `notebooks/` to the URLs in `_data/crypto_course.yml`. (2) Even with the right
> path, **nbviewer cannot resolve the non-ASCII notebook filenames** (`Məşğələ_*`,
> with `ə ş ğ`): its `/github/` mode matches the file by name against a directory
> listing and fails (`not found among N files`), almost certainly a Unicode
> normalization (NFC vs NFD) mismatch. Colab works because it fetches the file
> directly from GitHub without a listing-based name match. The human chose to
> remove the nbviewer link rather than rename the files to ASCII. See [[log]].

> **Correction (2026-07-31):** the size assumptions in this decision are out of
> date twice over. The repo now holds **30 lectures and 33 practicals** across
> **two semesters** (it was 17+17 at launch, then 15+17 after the 2026-06-28
> renumbering). The "one-off, small collaboration" premise that justified hosting
> inside the site repo still holds, but the "keep an eye on size" consequence
> below is now worth acting on: `assets/courses/cryptography/` has roughly
> doubled.
>
> **The TeX part of this decision is withdrawn.** The `tex/` folder never
> materialized - only `pdf/` and `notebooks/` exist - and the human chose to
> **drop TeX rather than publish the sources**. The course page's help note no
> longer mentions TeX; it now says the lecture PDFs and Jupyter notebooks are in
> the GitHub repository (AZ + EN). The "TeX kept as open source for transparency"
> bullet under Decision below therefore no longer applies; PDF is the only form in
> which lectures are published. See [[cryptography-course]].

> **Correction (2026-06-26):** the Context below says "only about half of it goes
> live at launch". In fact the repo holds the **full course**, not half. See
> [[cryptography-course]].

## Context

Alov Intelligence will **host and promote** the [[cryptography-course]] by the
[[bsu-digital-center]] - a one-off collaboration. The course is free, in
Azerbaijani, ships as **TeX/PDF files and Jupyter notebooks**, and only about
half of it goes live at launch.

The site is a Jekyll/Chirpy site on GitHub Pages (see [[website]],
[[decision-chirpy-theme]]). Two frictions shape the choice:

1. Jekyll/GitHub Pages does **not render `.ipynb`** natively.
2. PDFs and TeX add binary/source weight to the site repo.

Options weighed: a separate course repo in the `alov-ai` org, hosting inside the
site repo, or an external platform with links. The human chose **inside the site
repo** - everything in one place for a single small collaboration.

## Decision

Host the course files **inside the `alov-ai.github.io` repository**.

- **Files:** keep them under a dedicated assets path, e.g.
  `assets/courses/cryptography/` - `pdf/`, `tex/`, `notebooks/`.
- **PDF:** the primary reading format; linked for view/download from the course
  page.
- **TeX:** kept as open source for transparency; available in the repo, not
  rendered on the site.
- **Notebooks:** stored as `.ipynb` in the repo (under `notebooks/`). On the site,
  surface them via **"Open in Colab"** (run) only - no build step needed, since the
  files are reachable by URL once deployed. An nbviewer "View" link was planned but
  dropped (non-ASCII filenames break nbviewer; see the Correction above). A
  `nbconvert` -> HTML step in the deploy workflow is a possible later upgrade if
  read-only inline rendering is wanted.
- **Site page:** a single course page under a **Collaborations / Partners** area
  (no full Courses catalog for a one-off), with description, syllabus, language,
  status (half the course at launch), BSU attribution, and links to the
  materials. See [[cryptography-course]] -> Placement on the website.

## Consequences

- One repo to manage; no separate course repo to set up.
- The site repo grows with PDFs/notebooks; keep an eye on size if more material
  lands (revisit toward a separate repo if it stops being a one-off).
- No native in-page notebook rendering at launch; readers go to Colab (run-only;
  no read-only viewer after nbviewer was dropped). Acceptable for executable
  material, revisitable via `nbconvert` if a read-only view is wanted.
- Files deploy and version together with the site - simple, but couples course
  updates to site deploys.

## Links

- [[cryptography-course]] - the course being hosted.
- [[bsu-digital-center]] - the partner that authored it.
- [[website]] - the site repo and stack.
- [[decision-chirpy-theme]] - the theme this builds on.
