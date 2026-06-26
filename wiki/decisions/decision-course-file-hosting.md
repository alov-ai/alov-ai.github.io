---
title: Decision - Course File Hosting in the Site Repo
type: decision
tags: [website, course, hosting, jupyter, assets]
created: 2026-06-26
updated: 2026-06-26
sources: []
---

# Decision - Course File Hosting in the Site Repo

**Status:** accepted (chosen by the human on 2026-06-26; implemented - files are
in the repo and the page is built, see [[decision-bilingual-course-page]]).

> **Correction (2026-06-26):** the Context below says "only about half of it goes
> live at launch". In fact the repo now holds **all 17 lectures and 17
> practicals** - the full course, not half. See [[cryptography-course]].

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
- **Notebooks:** stored as `.ipynb` in the repo. On the site, surface them via
  **"Open in Colab"** (run) and a **"View" (nbviewer)** link (read) - no build
  step needed, since the files are reachable by URL once deployed. A
  `nbconvert` -> HTML step in the deploy workflow is a possible later upgrade if
  inline rendering is wanted.
- **Site page:** a single course page under a **Collaborations / Partners** area
  (no full Courses catalog for a one-off), with description, syllabus, language,
  status (half the course at launch), BSU attribution, and links to the
  materials. See [[cryptography-course]] -> Placement on the website.

## Consequences

- One repo to manage; no separate course repo to set up.
- The site repo grows with PDFs/notebooks; keep an eye on size if more material
  lands (revisit toward a separate repo if it stops being a one-off).
- No native in-page notebook rendering at launch; readers go to Colab/nbviewer.
  Acceptable for executable material, revisitable via `nbconvert`.
- Files deploy and version together with the site - simple, but couples course
  updates to site deploys.

## Links

- [[cryptography-course]] - the course being hosted.
- [[bsu-digital-center]] - the partner that authored it.
- [[website]] - the site repo and stack.
- [[decision-chirpy-theme]] - the theme this builds on.
