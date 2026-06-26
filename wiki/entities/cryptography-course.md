---
title: Cryptography Course
type: entity
tags: [course, education, cryptography, collaboration, content]
created: 2026-06-26
updated: 2026-06-26
sources: []
---

# Cryptography Course

An educational course on cryptography created by the
[[bsu-digital-center|BSU Center for Digital Technologies and Applied Research]],
the first concrete piece of collaboration content for
[[organization|Alov Intelligence]].

> Status: materials are now in the repo and a **bilingual course page** is built
> at `/courses/cryptography/` (see [[decision-bilingual-course-page]]). No source
> document in `raw/` yet; facts below are from the files themselves and from
> conversation with the human.

## What we know

- A **course on cryptography**, created by the [[bsu-digital-center]].
- **Free.**
- **Materials:** PDF lecture notes (TeX source kept too) and **Jupyter notebooks**.
- **Language:** Azerbaijani (materials). The on-site page is **bilingual
  Azerbaijani / English** via a language switcher.
- **Scope:** one semester - **17 lectures + 17 practicals**.
- **Alov Intelligence's role:** **hosting and promotion** (not authorship).
- A **one-off collaboration** for now - no further courses planned.

> **Correction (2026-06-26):** an earlier note here (and in
> [[decision-course-file-hosting]]) said roughly **half the course** would be
> published at launch. The repo now contains **all 17 lectures and all 17
> practicals**, so the full set is present, not half.

## Syllabus

Lecture titles are taken from the lecture PDFs themselves; the bilingual page
renders Azerbaijani and English (see `_data/crypto_course.yml`).

1. Introduction to cryptography
2. Classical ciphers
3. Polyalphabetic ciphers and the Vigenere cipher
4. Discrete probability distributions and the birthday paradox
5. Entropy, perfect secrecy, and semantic security
6. Stream ciphers and LFSRs
7. Modern stream ciphers
8. Introduction to block ciphers and the Feistel network
9. DES, 3DES, and their security
10. AES (Advanced Encryption Standard)
11. Block cipher modes of operation
12. CTR, GCM, and modern modes
13. Introduction to hash functions and their properties
14. MD5, SHA-1, SHA-2
15. SHA-3 (Keccak) and the sponge construction
16. MAC (Message Authentication Code)
17. HMAC and Poly1305

> Lecture and practical titles sometimes differ (e.g. lecture 1 is "Introduction
> to cryptography" while practical 1 is on XOR); the syllabus shows the **lecture
> (PDF)** title. The lecture-17 PDF was initially a byte-for-byte **duplicate of
> lecture 16**; the human replaced it with the correct HMAC/Poly1305 file on
> 2026-06-26.

## Role in the strategy

A learning artifact that supports the **community & skills** pillar
([[community-model]] - workshops and learning) and is a candidate for a
[[gamified-learning|gamified learning path]]. As collaboration output, it also
demonstrates the [[partnerships]] pillar in action.

## Placement on the website

Second-level content, not for the homepage (the current [[homepage-structure]]
scope is Hero / Manifesto / Four pillars / Blog). Since this is a **one-off
collaboration**, no full "Courses" catalog is warranted: a **single course page**
is enough, cross-linked to [[bsu-digital-center]]. A broader Courses section can
wait until more courses exist.

**Built:** the page lives at `courses/cryptography.md` -> `/courses/cryptography/`.
The syllabus table is generated from `_data/crypto_course.yml` (per-lecture: AZ/EN
title, PDF link, Colab + nbviewer links). Bilingual switcher, CSS, and JS live in
`assets/css/course.css` and `assets/js/course-lang.js`. See
[[decision-bilingual-course-page]].

**Discoverability:** the page is now reached from a new **Collaborations** nav tab
(`_tabs/collaborations.md`, `/collaborations/`, order 2 - right after Blog), which
introduces partners and links the course under an **Academic** section. The course
page links back to `/collaborations/`. This realizes the "single course page under
a Collaborations / Partners area" placement decided earlier.

## File hosting

Decided: files live **inside the site repo** under `assets/courses/cryptography/`
(pdf/tex/notebooks). PDF is linked for view/download; notebooks are surfaced via
"Open in Colab" / nbviewer rather than rendered by Jekyll. See
[[decision-course-file-hosting]].

## Data gaps

Still to confirm:

- Official **Azerbaijani name** of the course and of the [[bsu-digital-center]]
  (the page uses a tentative translation, flagged with a `TODO` comment).
- An **authoritative course description** (the current page prose was written by
  the agent from known facts).
- Any **certification**, and whether it ties into achievements/badges.
- Whether/where to **link the page** from the nav or landing.
- TeX sources: present as a planned path in [[decision-course-file-hosting]] but
  no `tex/` files are in the repo yet.

## Links

- [[bsu-digital-center]] - the course creator (partner).
- [[decision-bilingual-course-page]] - the bilingual AZ/EN page design.
- [[decision-course-file-hosting]] - where the files live.
- [[community-model]] - skill development this course feeds.
- [[gamified-learning]] - potential learning-path integration.
- [[partnerships]] - collaboration pillar.
