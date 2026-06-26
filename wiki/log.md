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
