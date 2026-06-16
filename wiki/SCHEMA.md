# LLM Wiki — SCHEMA (constitution)

**Domain:** The Cash Flow Statement — preparation, analysis, standards, forensics, valuation.
**Purpose:** Durable, cited knowledge base backing the ebook *Mastering the Cash Flow Statement*. Knowledge compounds across research runs.
**Created:** 2026-06-16

## Three-layer architecture
1. **raw/** — verbatim captured sources (one file per source, named `NN-slug.md`), with URL + retrieval date at top. Never edited after capture.
2. **pages/** — synthesized wiki pages (one per concept/sub-question). Every claim carries an inline `[src: raw/NN-slug]` marker and a confidence score.
3. **SCHEMA.md** (this file) + **graph.md** (entities/edges) + **index.md** (page list).

## Page format
```
# <Page title>
**Confidence:** 0.0–1.0 (rises when independent sources agree)
**Sources:** [raw/01-..], [raw/02-..]

## Claims
- <claim> [src: raw/NN] (conf: 0.x)
```

## Confidence rubric
- 0.9–1.0 — primary standard/regulator (IAS 7, ASC 230, SEC) or ≥2 independent authoritative sources agree.
- 0.7–0.89 — one authoritative source (CFA, Big-4, academic) or strong educational consensus.
- 0.5–0.69 — single educational source (CFI/Investopedia), or some interpretation.
- <0.5 — weak/contested; flag in "Conflicts".

## Lifecycle rules
- **Supersession, not deletion** — a corrected claim is struck through and replaced with a `(superseded YYYY-MM-DD by …)` note; nothing is erased.
- **Conflicts** — when sources disagree, record both with sources in the page's `## Conflicts` block; do not silently pick one.
- **Decay** — time-sensitive facts (standard amendments, EOL) carry the retrieval date; re-validate before reuse.

## Hard rules (§7)
- No secrets/PII/customer data. This is a public-knowledge topic; everything here is non-secret.
- Never report a claim seen only in a search snippet — the underlying page must be fetched and captured in raw/.

## Source-quality ladder (prefer top)
1. Standards & regulators: IFRS.org / IAS 7, FASB / ASC 230, SEC, IASB/FASB updates.
2. Professional bodies & Big-4: CFA Institute, AICPA, Deloitte/PwC/EY/KPMG.
3. Academic / textbook material.
4. High-quality educational: Corporate Finance Institute, Investopedia, Wall Street Prep, university notes.
