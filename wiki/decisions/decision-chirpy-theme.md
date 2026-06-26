---
title: Decision - Chirpy Theme for the Website
type: decision
tags: [website, jekyll, chirpy]
created: 2026-06-26
updated: 2026-06-26
sources: [2026-06-26-repo-snapshot]
---

# Decision - Chirpy Theme for the Website

**Status:** accepted (recorded by usage; rationale reconstructed).

## Context

The `alov-ai` organization needed a static website/blog on GitHub Pages. The
repository was created from the
[Chirpy Starter](https://github.com/cotes2020/chirpy-starter) template.

## Decision

Use Jekyll with the **jekyll-theme-chirpy** theme through the official starter
template, with a CD workflow for deployment to GitHub Pages.

## Consequences

- Out of the box: dark/light theme, TOC, categories/tags, archives, PWA, search,
  SEO tags.
- Theme static assets are connected through the `assets/lib` git submodule, which
  requires `git submodule update --init` for local work.
- Content and config need to be filled in manually (currently placeholders; see
  [[website]]).
- The site is tied to the Chirpy structure (layouts/collections); customization
  happens within the theme's constraints.

## Links

- Affects [[website]].
- The open question about the website concept is in [[overview]].
