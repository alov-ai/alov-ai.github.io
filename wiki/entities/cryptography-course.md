---
title: Cryptography Course
type: entity
tags: [course, education, cryptography, collaboration, content]
created: 2026-06-26
updated: 2026-07-31
sources: []
---

# Cryptography Course

An educational course on cryptography created by the
[[bsu-digital-center|BSU Center for Digital Technologies and Applied Research]],
the first concrete piece of collaboration content for
[[organization|Alov Intelligence]].

> Status: all materials are in the repo and a **bilingual course page** is built
> at `/courses/cryptography/` (see [[decision-bilingual-course-page]]). No source
> document in `raw/` yet; facts below are from the files themselves and from
> conversation with the human.

## What we know

- A **course on cryptography**, created by the [[bsu-digital-center]].
- **Free**, released under
  [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- **Materials:** PDF lecture notes and **Jupyter notebooks**.
- **Language:** Azerbaijani (materials). The on-site page is **bilingual
  Azerbaijani / English** via a language switcher.
- **Scope:** **two semesters** - **30 lectures + 33 practicals** (30 main
  practicals plus 3 supplementary ones), and **6 course-wide reference PDFs**
  (a glossary in short/full versions, a short history, and three mathematical
  foundations documents).
- **Alov Intelligence's role:** **hosting and promotion** (not authorship).
- A **one-off collaboration** for now - no further courses planned.

### Authorship and credits

Recorded from the human on 2026-07-31 and published on both the course page and
[[partnerships|the Collaborations page]]:

- **Course materials written by:** Kave Babai (Kaveh Babai), Lalə İbadullayeva
  (Lala Ibadullayeva), Güman Qarayev (Guman Garayev), Qərib Mürşüdov
  (Garib Murshudov).
- **Website and course page built by:** Cavid Qafarzadə (Javid Gafar-zada) and
  Kave Babai (Kaveh Babai) - credited in an *Acknowledgements* subsection.

Both names are given in Azerbaijani and English, following the page's bilingual
pattern. Kaveh Babai is both an author and the **feedback contact** for the
course (`kaveh.babai@bsu.edu.az`, wired to a feedback button on the page).

> **Correction (2026-07-31):** the scope recorded here was **one semester,
> 15 lectures + 17 practicals**. The human added a **second semester**
> (lectures 16-30, practicals AS-18…AS-32), so the course is now **two semesters,
> 30 lectures + 33 practicals**, and the "Part 1 / Part 2 in preparation" status
> that was on the site since 2026-06-28 has been **removed** - both parts exist.

> **Correction (2026-06-28, recorded late):** the earlier figure of **17 lectures
> + 17 practicals** stopped being true when the human **renumbered the course and
> dropped two lectures** (old #12 "CTR, GCM" and old #17 "HMAC, Poly1305"),
> leaving **15 lectures**. Their practicals were kept and re-attached as second
> notebooks to lectures 12 and 15 (`Məşğələ 12b` / `15b`). That change, plus the
> CC BY-NC-SA license, the supplementary materials, and the feedback section, was
> made directly by the human and is only being written into the wiki now.

## Syllabus

Lecture titles are taken from the lecture PDFs themselves; the bilingual page
renders Azerbaijani and English (see `_data/crypto_course.yml`, one row per
lecture with a `semester` field driving a divider row in the table).

**Semester 1**

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
12. Introduction to hash functions and their properties *(+ `12b`: CTR, GCM and
    modern modes - the dropped lecture's practical)*
13. MD5, SHA-1, SHA-2
14. SHA-3 (Keccak) and the sponge construction
15. MAC (Message Authentication Code) *(+ `15b`: HMAC and Poly1305 - the dropped
    lecture's practical)*

**Semester 2**

16. Introduction to asymmetric cryptography
17. Modular arithmetic, the Euclidean algorithm, and square-and-multiply
18. Euler's totient function, the Chinese Remainder Theorem, and primality tests
19. RSA cryptosystem
20. Diffie-Hellman and ElGamal
21. Introduction to elliptic curves - Part I
22. Elliptic curves - Part II
23. Digital signature schemes *(+ `23b`: digital signatures and DSA -
    supplementary)*
24. Key management and PKI
25. TLS/SSL protocol
26. IPsec and VPN
27. Cryptanalysis and side-channel attacks
28. Post-quantum cryptography I - lattice-based systems
29. Post-quantum cryptography II - code, hash, and multivariate families
30. Modern privacy technologies and future trends

> Lecture and practical titles sometimes differ (e.g. lecture 1 is "Introduction
> to cryptography" while practical 1 is on XOR); the syllabus shows the **lecture
> (PDF)** title. The lecture-20 PDF titles itself "Diffi-Hellman"; the site uses
> the correct spelling **Diffie-Hellman**.

### Practical numbering

The second-semester practicals arrived under the author's own numbering
(**AS-18 … AS-32**) which was **two ahead** of the lecture numbers, plus one
supplementary notebook (**AS-18-1**). On 2026-07-31 they were renamed to match
the lectures they belong to (`Məşğələ_16` … `Məşğələ_30`), and AS-18-1 became
`Məşğələ_23b`, following the existing `12b` / `15b` convention. The numbers
*inside* each notebook (title heading, Colab name in `metadata.colab.name`, and
`AS-N` labels in code such as HKDF salts and test payloads) were renamed too, so
the internal number always matches the filename.

**Unicode caveat:** the new notebooks arrived with **NFD** filenames
(`s`+U+0327, `g`+U+0306) while the repo and the percent-encoded URLs in
`_data/crypto_course.yml` use **NFC** (`ş` U+015F, `ğ` U+011F). The two look
identical in a file listing but the site links only resolve for NFC, so incoming
files have to be normalized. This is the same normalization family of problem
that killed the nbviewer link (see [[decision-course-file-hosting]]).

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
The syllabus table is generated from `_data/crypto_course.yml` (per lecture:
`n`, `semester`, AZ/EN title, PDF link, one or more Colab links with an `extra`
flag for supplementary notebooks). Bilingual switcher, CSS, and JS live in
`assets/css/course.css` and `assets/js/course-lang.js`. See
[[decision-bilingual-course-page]].

Page sections, in order: intro and scope, facts list, provider, syllabus (with
semester dividers), supplementary materials, **authors and acknowledgements**,
feedback (mailto button), how to run the notebooks, license.

**Discoverability:** the page is reached from the **Collaborations** nav tab
(`_tabs/collaborations.md`, `/collaborations/`, order 2 - right after Blog), which
introduces partners and links the course under an **Academic** section. The course
page links back to `/collaborations/`. The Collaborations blurb carries the same
scope figures and credits as the course page, so the two must be updated together.

## File hosting

Decided: files live **inside the site repo** under `assets/courses/cryptography/`
(pdf/notebooks). PDF is linked for view/download; notebooks are surfaced via
"Open in Colab" only - the nbviewer link was dropped because nbviewer can't
resolve the non-ASCII notebook filenames. See [[decision-course-file-hosting]].

## Data gaps

Still to confirm:

- Official **Azerbaijani name** of the course and of the [[bsu-digital-center]]
  (the page uses a tentative translation, flagged with a `TODO` comment).
- An **authoritative course description** (the current page prose was written by
  the agent from known facts).
- Any **certification**, and whether it ties into achievements/badges.
- **Who did what** among the four authors, and the affiliation of each.
Closed on 2026-07-31: the **TeX sources** gap. There are no `tex/` files in the
repo and the human chose to drop the promise rather than publish them, so the
course page's help note now lists only the lecture PDFs and Jupyter notebooks.
Lectures are published as **PDF only**; see [[decision-course-file-hosting]].

## Links

- [[bsu-digital-center]] - the course creator (partner).
- [[decision-bilingual-course-page]] - the bilingual AZ/EN page design.
- [[decision-course-file-hosting]] - where the files live.
- [[community-model]] - skill development this course feeds.
- [[gamified-learning]] - potential learning-path integration.
- [[partnerships]] - collaboration pillar.
