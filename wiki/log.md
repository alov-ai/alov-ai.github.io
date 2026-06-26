---
title: Wiki Log
type: log
updated: 2026-06-26
---

# Wiki Log

A chronological, append-only log. Each entry starts with the prefix
`## [YYYY-MM-DD] <ingest|query|lint> | Title`.

## [2026-06-26] setup | Wiki initialization

An LLM-wiki scaffold was created in the `alov-ai.github.io` website repository:

- `CLAUDE.md` schema (domain: the organization and its website; one source per
  ingest, with human involvement).
- `wiki/` structure (index, log, overview, entities, concepts, decisions, sources)
  and `raw/` (sources + assets/).
- `wiki/` and `raw/` were added to `exclude` in `_config.yml` so Jekyll does not
  publish them.

## [2026-06-26] ingest | Website repository snapshot

Source: the repository itself at the time of wiki start (see [[2026-06-26-repo-snapshot]]).
Created: [[website]], [[decision-chirpy-theme]], [[overview]]. Touched [[index]].
Key point: the website is an untouched Chirpy starter template; the config
contains placeholders.

## [2026-06-26] ingest | Alov Intelligence mission and strategy

Source: human-provided text about the mission, strategy, and products (see
[[2026-06-26-mission-strategy]]; original: `raw/2026-06-26-mission-strategy.md`).
It closed the central gap: "what kind of organization is alov-ai?"
Created: [[organization]], [[products]], [[gamified-learning]], [[community-model]],
[[open-source-first]], [[inbound-marketing]], [[partnerships]].
Updated: [[overview]] (rewritten), [[website]] (role in strategy), [[index]].
Key point: an open-source product company for R&D in Azerbaijan, a bottom-up
approach, skill gamification, and a broad diaspora audience. By human decision,
the "open questions" block was not split into separate pages.

## [2026-06-26] lint | Wiki translated to English

Translated the `wiki/` Markdown pages from Russian to English while preserving
file names, frontmatter keys, tags, sources, and wiki links.

## [2026-06-26] design | Homepage structure

Worked out the homepage section skeleton with the human. Decided on a **custom
landing page** (not the default Chirpy post feed). Initial scope: four sections -
Hero, Manifesto, Four pillars, Latest from blog (IDs 1-2-3-6); directions,
gamification, and a final CTA deferred. Created the first `wiki/website/` doc:
[[homepage-structure]]. Touched [[index]].

## [2026-06-26] ingest | BSU partner and cryptography course

Human reported (in conversation, no `raw/` source yet) a partner: the Center for
Digital Technologies and Applied Research at Baku State University, which created
a cryptography course. Created: [[bsu-digital-center]], [[cryptography-course]].
Updated: [[partnerships]] (first concrete partner), [[community-model]] (first
workshop example), [[index]]. Both pages are stubs with explicit Data gaps;
website placement (Education/Courses vs Collaborations/Partners) noted but not
yet decided.

## [2026-06-26] decision | Course file hosting

Added course facts: free, TeX/PDF + Jupyter notebooks, Azerbaijani, one semester
(half published at launch), Alov role = hosting + promotion, one-off
collaboration. Decided file hosting: **inside the site repo**
(`assets/courses/cryptography/`), notebooks via Colab/nbviewer (no nbconvert at
launch). Created [[decision-course-file-hosting]]; updated [[cryptography-course]],
[[index]]. Site placement settled as a single course page under a
Collaborations/Partners area (no full Courses catalog for a one-off).

## [2026-06-26] build | Landing page implemented

Built the custom homepage agreed in [[homepage-structure]]. Added
`_layouts/landing.html` (on Chirpy's `default`, keeps the sidebar),
`_includes/landing/{hero,manifesto,pillars,blog}.html`, and
`assets/css/landing.scss` (theme CSS variables, light/dark). `index.html` now
uses `layout: landing`; the post feed moved to `_tabs/blog.md` (`layout: home`,
order 1), shifting categories/tags/archives/about to 2-5. Hero CTA -> GitHub org.
Filled real `_config.yml` values (title, tagline, description, url, github,
social); Twitter handle and org email left blank (unknown, not fabricated).
Created [[decision-landing-page]]; updated [[homepage-structure]], [[index]].
Not built locally (no Ruby/Jekyll toolchain on this machine) - relies on the
Pages CI build.

## [2026-06-26] build | About page + first blog post

Filled the previously-empty About tab (`_tabs/about.md`) with real Alov
Intelligence content (mission, four pillars, audience, get-involved -> GitHub
org). Added a first pinned post `_posts/2026-06-26-welcome-more-coming-soon.md`
as a "coming soon" placeholder, which also populates the landing's "Latest from
blog" section so it no longer shows the empty-state text.

## [2026-06-26] build | Bilingual cryptography course page

Built the course page at `courses/cryptography.md` -> `/courses/cryptography/`:
**bilingual Azerbaijani / English** with an in-page language switcher
(`.lang.az`/`.lang.en` + `data-lang`, toggled by `assets/js/course-lang.js`,
styled by `assets/css/course.css`; choice saved in `localStorage`). The 17-row
syllabus is data-driven from `_data/crypto_course.yml` (per lecture: AZ/EN title,
PDF, Colab, nbviewer); file links are percent-encoded from the real non-ASCII
filenames. **Lecture titles were taken from the lecture PDFs themselves.**
Created [[decision-bilingual-course-page]]; updated [[cryptography-course]],
[[decision-course-file-hosting]], [[index]].
Findings: (1) the repo actually holds **all 17 lectures + 17 practicals**, not
"half at launch" as previously recorded - corrected both pages. (2) The
lecture-17 PDF was a byte-for-byte **duplicate of lecture 16**; the human
replaced it with the correct HMAC/Poly1305 file. Not built locally (no
Ruby/Jekyll on this machine) - relies on the Pages CI build.

## [2026-06-26] build | Collaborations nav area

Gave the [[partnerships]] pillar a public home and made the [[cryptography-course]]
discoverable. Added a **Collaborations** nav tab (`_tabs/collaborations.md`,
`/collaborations/`, icon `fas fa-handshake`, **order 2** - right after Blog),
introducing partners by type with an **Academic** section linking the BSU course;
the course page links back. Reordered the remaining tabs down by one
(Categories 3, Tags 4, Archives 5, About 6). This realizes the earlier placement
decision (single course page under a Collaborations / Partners area). Updated
[[cryptography-course]], [[partnerships]], [[bsu-digital-center]].
