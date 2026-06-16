# Ch7 sources — Cash flow & valuation

Retrieved: 2026-06-16

---

## Sources

### 1. CFA Institute — Free Cash Flow Valuation (2026 Refresher Reading)
URL: https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/free-cash-flow-valuation

- "Free cash flows provide an economically sound basis for valuation" — preferred over dividends because FCF is harder to manipulate.
- "86.9% use a discounted free cash flow model" — majority of professional analysts employ DCF.
- FCFF from net income: `FCFF = NI + NCC + Int×(1−t) − FCInv − WCInv`
- FCFF from CFO: `FCFF = CFO + Int×(1−t) − FCInv`
- FCFE from net income: `FCFE = NI + NCC − FCInv − WCInv + Net borrowing`
- FCFE from CFO: `FCFE = CFO − FCInv + Net borrowing`
- Equity Value = Firm Value − Market Value of Debt (the enterprise-to-equity bridge).
- FCFF discounted at WACC → firm/enterprise value; FCFE discounted at required return on equity → equity value directly.

---

### 2. Wall Street Prep — Terminal Value (DCF)
URL: https://www.wallstreetprep.com/knowledge/terminal-value/

- Terminal value "usually contributes around three-quarters (~75%) of the total implied valuation derived from a DCF model."
- Gordon Growth formula: `TV = FCF_n × (1 + g) / (WACC − g)`
- Exit Multiple formula: `TV = EBITDA_n × EV/EBITDA exit multiple`
- PV of terminal value: `PV(TV) = TV / (1 + WACC)^n`
- Danger of g: "the implicit assumption of an excessively high growth rate (i.e., >5%) is that the company is on track to someday outpace the growth of the global economy — which is an unrealistic scenario."
- Recommended perpetuity growth range: 2%–4%, bounded by long-run nominal GDP growth.
- Both methods should be cross-checked: "implied exit multiples and implied growth rates serve as sanity checks when the methods diverge significantly."

---

### 3. Corporate Finance Institute — WACC Formula & Guide
URL: https://corporatefinanceinstitute.com/resources/valuation/what-is-wacc-formula/

- Full formula: `WACC = (E/V × Re) + (D/V × Rd × (1−t))`
- Cost of equity via CAPM: `Re = Rf + β × (Rm − Rf)`; Rf = 10-yr government bond yield; ERP ≈ 4–6% for developed markets.
- "The cost of debt is the yield to maturity on the firm's debt."
- Tax shield: cost of debt multiplied by `(1 − tax rate)` because "interest payments companies make are tax deductible."
- "The purpose of WACC is to determine the cost of each part of the company's capital structure based on the proportion of equity, debt and preferred stock."
- Use market values, not book values, especially for equity weights.

---

### 4. Wall Street Prep — WACC Guide
URL: https://www.wallstreetprep.com/knowledge/wacc/

- For improved accuracy use the industry beta approach: unlever peer betas → median unlevered β → relever for target D/E — produces "a beta that is usually more reliable" than historical regression alone.
- Equity Risk Premium: historical returns above risk-free (typically 4–6% for developed markets).
- For unrated companies, use interest coverage ratio tables to infer credit rating and default spread.
- WACC is the discount rate for unlevered FCF (FCFF); discounting FCFF at WACC yields implied enterprise value.
- EV bridge: `Equity Value = Enterprise Value − Net Debt`; `Net Debt = Total Debt − Cash & Equivalents`.

---

### 5. Wall Street Prep — Mid-Year Convention
URL: https://www.wallstreetprep.com/knowledge/mid-year-convention/

- Mid-year convention treats FCFs "as if they were generated at the midpoint of the period" — more realistic than year-end receipt.
- Adjusted discount factor: `1 / (1 + WACC)^(n − 0.5)`; periods become 0.5, 1.5, 2.5, 3.5, 4.5.
- Effect: "cash flows are received earlier, which leads to higher present values (and implied valuations)."
- Caveat: "may be inappropriate for highly seasonal or cyclical companies where cash flows cluster in specific quarters."

---

### 6. Wall Street Prep — Common Errors in DCF Models
URL: https://www.wallstreetprep.com/knowledge/common-errors-in-dcf-models/

- Mismatched cash flows and discount rates: "Your cash flows have to be defined in the same terms and unit as your discount rate."
- Double-counting: assets/liabilities counted simultaneously in FCF forecasts and in net debt adjustments.
- Terminal value normalization failure: "the relationship between returns on capital, reinvestments and growth all have to be consistent."
- Terminal value exceeding 75% of total value = red flag ("single-number risk").
- Failing to discount terminal value back to present day.
- Investment bankers often use DCF as "a framework to justify market prices rather than establish independent valuations."
- Dep/CapEx ratio must converge to ~1.0× in the terminal year (steady-state assumption).

---

### 7. Corporate Finance Institute — EV/EBITDA
URL: https://corporatefinanceinstitute.com/resources/valuation/ev-ebitda/

- `EV/EBITDA = Enterprise Value / EBITDA` — preferred to P/EBITDA because EBITDA flows to all capital providers.
- Used to calculate terminal value in DCF as exit multiple anchor.
- Key limitation: "May not be a good proxy for cash flow" — omits CapEx and working-capital swings; understates cash needs in capital-heavy industries.
- Industry-specific typical ranges: ~6–12× mature industrials; ~15–25× high-growth tech.

---

### 8. AnalystPrep — FCFF and FCFE Valuation Approaches (CFA Level 2)
URL: https://analystprep.com/study-notes/cfa-level-2/fcff-and-fcfe-valuation-approaches/

- Firm value = `Σ FCFF_t / (1 + WACC)^t` over infinite horizon (truncated in practice to explicit period + TV).
- "Given the firm's value, the value of equity can be computed by subtracting the market value of debt."
- FCFF from EBIT: `FCFF = EBIT×(1−t) + Dep − FCInv − WCInv`
- FCFF from EBITDA: `FCFF = EBITDA×(1−t) + Dep×t − FCInv − WCInv`
- Equity value = `Σ FCFE_t / (1 + r)^t` where r = required return on equity.

---

### 9. Valuation Masterclass — DCF Valuation & How to Build a DCF Model
URLs: https://valuationmasterclass.com/dcf-valuation/ · https://valuationmasterclass.com/how-to-build-a-dcf-model/

- Terminal value typically represents 60–80% of total enterprise value — "the most sensitive assumption."
- Global average net profit margin ≈ 5.5%; "analysts commonly overestimate margins" with 15–20% projections.
- Seven critical mistakes include: unrealistic margins, ignoring maintenance vs. growth CapEx, terminal value >80% of EV, internally contradictory assumptions, neglecting invested capital requirements, no sensitivity analysis.
- g must not exceed long-run GDP growth (2–3% for developed economies): `TV = FCF_n × (1+g) / (WACC−g)`.

---

### Unreachable Sources
- Wall Street Oasis DCF Terminal Value (wallstreetoasis.com) — HTTP 403; content covered by WSP source above.
