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
