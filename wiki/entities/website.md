---
title: alov-ai Website
type: entity
tags: [website, jekyll, chirpy, github-pages]
created: 2026-06-26
updated: 2026-06-26
sources: [2026-06-26-repo-snapshot, 2026-06-26-mission-strategy]
---

# alov-ai Website

The organization's published website is the `alov-ai.github.io` repository.

## Stack

- **Generator:** Jekyll (static site).
- **Theme:** [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
  - a minimalist theme for a technical blog. See [[decision-chirpy-theme]].
- **Hosting:** GitHub Pages, deployed through GitHub Actions
  (`.github/workflows/pages-deploy.yml`).
- **Theme static assets:** git submodule `assets/lib` ->
  `github.com/cotes2020/chirpy-static-assets`.

## Repository Structure

| Path | Purpose |
|------|---------|
| `_config.yml` | Main site configuration |
| `_posts/` | Blog posts (**empty** at the starting point) |
| `_tabs/` | Navigation pages: about, archives, categories, tags |
| `_data/` | `contact.yml`, `share.yml` |
| `_plugins/posts-lastmod-hook.rb` | Plugin for automatic post last-modified dates |
| `tools/` | `run.sh` (local run), `test.sh` (html-proofer) |
| `assets/lib` | Submodule with theme static assets |
| `.github/` | CI/CD: build and deploy to Pages |

## Current State

The website is an **untouched Chirpy starter template**. The configuration contains
placeholders:

- `title: Chirpy`, default `tagline`/`description`;
- `url: ""` - not filled in (expected: `https://alov-ai.github.io`);
- `github.username: github_username`, `twitter.username: twitter_username`;
- `social.name: your_full_name`, `email: example@domain.com`;
- `lang: en`, `timezone:` is empty; avatar, analytics, and comments are not configured.

There are no posts and one commit, `Initial commit`.

## Role in the Strategy

The website belongs to [[organization|Alov Intelligence]] and, as a Chirpy blog, is
the natural place for [[inbound-marketing|inbound content]]: articles, case studies,
tutorials, and success stories. This potential is not currently realized: there
are no posts.

## Website TODOs (candidates for decisions/tasks)

- Fill in `url`, `github`/`social`, `title`, `lang`, and `timezone` for Alov Intelligence.
- Define the website concept and first content; connect it to [[inbound-marketing]].
- Initialize the `assets/lib` submodule during local builds.
