---
title: Decision - Bilingual (Azerbaijani / English) Course Page
type: decision
tags: [website, course, i18n, bilingual, design]
created: 2026-06-26
updated: 2026-07-31
sources: []
---

# Decision - Bilingual (Azerbaijani / English) Course Page

**Status:** accepted (chosen by the human on 2026-06-26; implemented).

## Context

The [[cryptography-course]] materials are in **Azerbaijani**, but the site itself
is in **English** (`lang: en`) and the human wanted the course page available in
**two languages**. Options weighed for which two languages: AZ + Russian, AZ +
English, or RU + English. Options weighed for presentation: a **language
switcher**, two side-by-side columns, stacked one-below-the-other, or two
separate pages.

## Decision

A **single page** at `/courses/cryptography/`, **bilingual Azerbaijani / English**,
with an in-page **language switcher** (no separate per-language URLs).

- **Languages:** Azerbaijani + English (English matches the rest of the site;
  Azerbaijani matches the materials).
- **Mechanism:** every translatable element is duplicated as `.lang.az` and
  `.lang.en`; a `data-lang` attribute on the `.course-page` container drives
  CSS that hides the inactive language. A small script
  (`assets/js/course-lang.js`) toggles `data-lang` and remembers the choice in
  `localStorage`. Default language: **Azerbaijani**.
- **Syllabus as data:** the table is generated from `_data/crypto_course.yml`
  (per lecture: `n`, `semester`, `az`, `en`, `pdf`, and a `notebooks` list whose
  entries may carry `extra: true`), so titles/links live in one place, not in
  markup. (The `nbviewer` field was dropped on 2026-06-27 - see
  [[decision-course-file-hosting]].) It held 17 rows at launch, 15 after the
  2026-06-28 renumbering, and **30 rows since 2026-07-31**, when the second
  semester was added.
- **Semester dividers (2026-07-31):** with 30 rows the table needed structure, so
  each lecture carries a `semester` field and the template emits a divider row
  (`tr.course-sem`) whenever the value changes. Bilingual like everything else
  ("1-ci semestr" / "Semester 1"). Adding a third grouping level later means one
  more field, not a template rewrite.
- **Credits block (2026-07-31):** the page carries an *Authors* list and an
  *Acknowledgements* line, both bilingual through the same `.lang.az`/`.lang.en`
  pattern - author names are written in Azerbaijani and English rather than
  transliterated once. See [[cryptography-course]] -> Authorship and credits.
- **Lecture titles** come from the **lecture PDFs themselves**, written in proper
  Azerbaijani Latin orthography, with English translations.
- **File links** are pre-percent-encoded from the real filenames, which contain
  non-ASCII characters (`ə` U+0259 in notebooks, `ә` U+04D9 in PDFs) and spaces;
  encoding is generated from the actual bytes so htmlproofer (CI) can resolve the
  internal PDF links. **Caveat (2026-06-27):** these non-ASCII notebook names broke
  the planned nbviewer link (nbviewer fails to match the name in its directory
  listing); the Colab link, which fetches the file directly, is unaffected. See
  [[decision-course-file-hosting]].

## Consequences

- One URL to share; SEO/index sees both languages on one page (acceptable for a
  single course page).
- Content must be authored twice (AZ + EN); the prose description was written by
  the agent and still needs an authoritative version (see [[cryptography-course]]
  Data gaps).
- Adding a lecture = one entry in `_data/crypto_course.yml` (or regenerate it from
  the files); the page template loops automatically.
- The bilingual pattern (`.lang.xx` + `data-lang` switch) is reusable if more
  course pages appear later.
- Not yet linked from nav/landing - discoverability is a follow-up.

## Links

- [[cryptography-course]] - the course this page presents.
- [[decision-course-file-hosting]] - where the linked files live.
- [[bsu-digital-center]] - the partner that authored the course.
- [[website]] - the site this page is part of.
