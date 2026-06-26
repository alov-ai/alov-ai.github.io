---
title: Decision - Custom Landing Page over the Chirpy Home
type: decision
tags: [website, homepage, landing, chirpy, jekyll]
created: 2026-06-26
updated: 2026-06-26
sources: [2026-06-26-repo-snapshot, 2026-06-26-mission-strategy]
---

# Decision - Custom Landing Page over the Chirpy Home

**Status:** accepted.

## Context

The site's home was the default Chirpy `home` layout - a reverse-chronological
post feed. For an organization whose key visitor actions are *understand the
mission* and *join / contribute*, a post feed sells neither, and with zero posts
it renders as an empty page. The agreed section skeleton lives in
[[homepage-structure]]; this ADR records the technical realization of it.

Chirpy is installed as a gem, so the theme's `_layouts/`, `_includes/`, and
`_sass/` are not vendored in the repo. Any customization must be layered on top
of the theme by adding files locally that Jekyll resolves ahead of the gem.

## Decision

Replace the home feed with a **custom landing page rendered inside the Chirpy
sidebar layout** (not full-width). Concretely:

- `_layouts/landing.html` - a new layout building on the theme, holding the
  landing sections; keeps the Chirpy header, sidebar, and theme chrome.
- `_includes/landing/{hero,manifesto,pillars,blog}.html` - one partial per
  section, for a clean, sectioned source.
- `index.html` - switches its front matter to `layout: landing`.
- `assets/css/landing.scss` - landing styles built on the theme's CSS variables,
  so the page lives in both light and dark modes.
- `_tabs/blog.md` - a new **Blog** tab with `layout: home`, so the post feed is
  not lost but relocated off the home page.

The starting scope ships four sections (Hero, Manifesto, Four pillars, Latest
from blog); deferred sections 4/5/7 keep their IDs for later (see
[[homepage-structure]]).

Decided alongside this: the home Hero's primary CTA points at the GitHub
organization `github.com/alov-ai`, and the placeholder `_config.yml` values
(`title`, `url`, `description`, `github`, `social`) are filled with real Alov
Intelligence data, since they drive the home page's `<title>` and SEO.

## Consequences

- The home page now states "what this is" and offers an action within seconds,
  matching the strategy's visitor goals.
- Sidebar-bound layout means minimal divergence from the theme and visual
  consistency across the whole site; the trade-off is a narrower content column
  than a full-width landing would give.
- Customization is now vendored locally (`_layouts/`, `_includes/`, `assets/css`)
  - these files shadow the gem and must be kept in step with theme upgrades.
- The post feed moved under `/blog/` instead of `/`.

> **Correction (2026-06-26):** moving the feed off root **broke pagination** as a
> side effect. jekyll-paginate only paginates a source named `index.html`; root
> is now `layout: landing` and the feed lives in `_tabs/blog.md`, so the feed page
> has **no `paginator`**. With a nil paginator the theme's `home` layout pushes a
> `nil` post (off-by-one in its pinned-posts loop), rendering an empty card with
> an empty `<a href="">` that also **failed CI** (htmlproofer). Fixed by a local
> `_layouts/home.html` override that drops pagination and lists posts directly
> (pinned first, then normal). Re-introducing paging later would require serving
> the feed from a real `index.html` source. See [[website]].

## Links

- Realizes [[homepage-structure]].
- Builds on [[decision-chirpy-theme]] (the constraints it works within).
- Affects [[website]]; CTA target is [[organization]] on GitHub.
