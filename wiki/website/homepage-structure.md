---
title: Homepage Structure
type: concept
tags: [website, homepage, landing, structure, design]
created: 2026-06-26
updated: 2026-06-26
sources: [2026-06-26-repo-snapshot, 2026-06-26-mission-strategy]
---

# Homepage Structure

Agreed section skeleton for the Alov Intelligence homepage. This is the first
document in `wiki/website/` — the place for detailed documentation of the
published site (see also the entity page [[website]]).

## Format decision

The homepage is a **custom landing page**, not the default Chirpy post feed.

Chirpy is a technical-blog theme whose home is a list of posts. For an
organization whose key visitor actions are *understand the mission* and
*join / contribute*, a post feed sells neither — especially while the site has
no posts yet. So the home becomes a landing page, and the post feed moves to a
dedicated **Blog** tab.

> **Implemented (2026-06-26).** The landing is realized and tracked in
> [[decision-landing-page]]: `_layouts/landing.html` (built on Chirpy's `default`,
> so it keeps the sidebar), one partial per section under `_includes/landing/`,
> styles in `assets/css/landing.scss`, and `index.html` set to `layout: landing`.
> The post feed moved to `_tabs/blog.md` (`layout: home`, order 1). The Hero CTA
> points at the GitHub org `github.com/alov-ai`. `_config.yml` placeholders
> (title, url, description, github, social) were filled with real data at the same
> time.

## Sections (current scope)

The starting landing ships four sections. Numbering keeps the original IDs from
the design discussion so deferred sections (4, 5, 7) stay easy to slot in later.

| # | Section | Role |
|---|---------|------|
| 1 | **Hero** | Name + one-line mission + primary CTA (Join / Contribute). First screen states "what this is" and offers an action within seconds. |
| 2 | **Manifesto** | Short "why we exist": bottom-up, open-source first, a self-sustaining ecosystem of talent. Manifesto tone, not corporate copy. |
| 3 | **Four pillars** | The strategy as cards: Community & skills · Open-source products · Inbound · Partnerships. The frame everything else hangs on. |
| 6 | **Latest from blog** | Preview of recent posts — a sign of a living project and the bridge to inbound content. Hidden / "coming soon" while empty. |

### Ordering logic

A funnel: **hook → meaning → structure → freshness**. The visitor descends from
"what is this" (Hero) to the reasoning (Manifesto), to how the work is organized
(Four pillars), to proof the project is alive (Blog). The primary call to action
lives in the Hero.

## Deferred sections

Kept out of the initial scope, retaining their original IDs for later:

- **4 — Directions / products.** Preview of what we're building. Deferred:
  product directions (~11) are intentions, not shipped work. See [[products]].
- **5 — Gamification.** Achievements, badges, leaderboards — the
  differentiator. Deferred pending a decision on how to present pre-launch
  features. See [[gamified-learning]].
- **7 — Final CTA.** A repeat call to action before the footer. For now the
  Hero CTA carries this; a dedicated closing block can be added later.

## Related

- [[website]] — the site entity (stack, repo structure, current state).
- [[overview]] — organization and site at a glance.
- [[inbound-marketing]] — strategy pillar the Blog section feeds.
