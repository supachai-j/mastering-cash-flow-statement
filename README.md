# Mastering the Cash Flow Statement

A comprehensive, bilingual (English / ไทย) analysis guide to the statement of cash flows —
from preparation and standards to forensic red-flags and DCF valuation.

**📖 Read it live:** https://supachai-j.github.io/mastering-cash-flow-statement/
**🇹🇭 อ่านฉบับภาษาไทย:** https://supachai-j.github.io/mastering-cash-flow-statement/th/

## Contents

1. Fundamentals & Structure
2. Preparing the Statement
3. Analysis & Interpretation
4. Standards: IFRS (IAS 7) vs US GAAP (ASC 230)
5. Red Flags, Manipulation & Forensics
6. Application & Forecasting
7. Cash Flow & Valuation

Plus a formula sheet, glossary, and sourced further-reading list.

## How it's built

- **[mdBook](https://rust-lang.github.io/mdBook/)** — two books: `book/` (English) and `book-th/` (Thai).
- **GitHub Actions** (`.github/workflows/book.yml`) builds both, serves Thai under `/th/`, generates
  print-quality PDFs, and deploys to GitHub Pages.
- Research is captured and synthesized in `wiki/` (an LLM Wiki) with per-claim source citations.

### Build locally

```bash
mdbook serve book      # English, http://localhost:3000
mdbook serve book-th   # Thai
```

## License & disclaimer

Educational content. Worked examples use simplified figures to illustrate mechanics and are not
accounting, investment, or tax advice. Consult the current accounting standards and a qualified
professional for real-world decisions.
