# 7. Cash Flow & Valuation

Every share price is, at its root, a claim on future cash flows. Strip away the noise of earnings management, accounting policy, and sentiment, and what remains is simple: a business is worth the present value of all the cash it will generate for its owners. That principle is the foundation of Discounted Cash Flow (DCF) analysis — the most rigorous, and most demanding, approach to intrinsic valuation.

The cash flows you project for a DCF are not the accounting earnings discussed in Chapter 3, nor the forecasted EBITDA from Chapter 6. They are *free* cash flows — cash that remains after a company has funded its operations, its taxes, and all the capital spending needed to sustain and grow the business. This chapter shows exactly how to build those projections, discount them at the right rate, anchor them with a terminal value, and convert the result into an enterprise value, an equity value, and a per-share price.

<pre class="mermaid">
flowchart LR
  A[Project FCFF<br/>Years 1–5] --&gt; C[Discount each year<br/>at WACC]
  B[Calculate WACC] --&gt; C
  A --&gt; D[Terminal Value<br/>Gordon Growth or Exit Multiple]
  D --&gt; E[Discount TV<br/>to Year 0]
  C --&gt; F[Sum = Enterprise Value]
  E --&gt; F
  F --&gt; G[− Net Debt]
  G --&gt; H[Equity Value]
  H --&gt; I[÷ Diluted Shares<br/>= Per-Share Value]
</pre>

---

## 7.1 Two Definitions of Free Cash Flow

Before discounting anything, you must choose which cash flow to model — and that choice locks in every subsequent step.

### Free Cash Flow to the Firm (FCFF)

FCFF is the cash flow available to *all* providers of capital: equity holders, debt holders, and preferred shareholders. It is calculated *before* financing costs, so it is independent of capital structure. Because FCFF belongs to the entire firm, it is discounted at the **Weighted Average Cost of Capital (WACC)**, which blends the required returns of all capital providers. The result is **Enterprise Value** — the value of the operating business.

Multiple calculation routes exist, depending on your starting point (per CFA Institute, 2026):

<div class="formula">
From Net Income:
  FCFF = NI + NCC + Int×(1−t) − FCInv − WCInv

From Cash Flow from Operations:
  FCFF = CFO + Int×(1−t) − FCInv

From EBIT:
  FCFF = EBIT×(1−t) + Dep − FCInv − WCInv

From EBITDA:
  FCFF = EBITDA×(1−t) + Dep×t − FCInv − WCInv

Where:
  NCC    = Non-cash charges (D&amp;A, impairments, stock-based compensation)
  Int    = Interest expense
  t      = Marginal corporate tax rate
  FCInv  = Net capital expenditure (CapEx − proceeds from asset disposals)
  WCInv  = Increase in net working capital (a use of cash when positive)
  Dep    = Depreciation &amp; amortisation
</div>

### Free Cash Flow to Equity (FCFE)

FCFE is the cash flow available to *equity holders only*, after meeting all obligations to debt providers — interest payments, net debt repayment or new borrowing. Because FCFE belongs exclusively to shareholders, it is discounted at the **required return on equity (Rₑ)**. The result is **Equity Value** directly, with no bridge calculation needed.

<div class="formula">
From Net Income:
  FCFE = NI + NCC − FCInv − WCInv + Net borrowing

From Cash Flow from Operations:
  FCFE = CFO − FCInv + Net borrowing

Where:
  Net borrowing = New debt issued − Debt repaid
                  (positive = net new debt drawn; increases cash available to equity)
</div>

<div class="callout tip">
<span class="callout-title">💡 Choosing FCFF vs FCFE</span>

Use **FCFF** when the company's leverage is changing (e.g., in a leveraged buyout or restructuring), when you want to separate operating value from financing decisions, or when comparing firms with different capital structures — because FCFF is unaffected by how the business is funded.

Use **FCFE** when leverage is stable and the primary question is what equity is worth. FCFE also represents the theoretical dividend-paying capacity of the firm, making it the bridge to dividend discount models.
</div>

---

## 7.2 The Pairing Rule: Never Mix Cash Flow and Discount Rate

This is the single most important conceptual rule in DCF analysis. Violate it and your output is meaningless regardless of how carefully everything else is constructed.

| Cash Flow | Discount Rate | Output |
|-----------|--------------|--------|
| FCFF | WACC | Enterprise Value |
| FCFE | Cost of Equity (Rₑ) | Equity Value |

Discounting FCFF at the cost of equity ignores the cheaper, tax-shielded cost of debt — the enterprise value is understated. Discounting FCFE at WACC double-counts the debt tax shield — equity value is overstated. Both errors are endemic in practice (Wall Street Prep). As Aswath Damodaran states plainly: "A DCF first principle is that your cash flows have to be defined in the same terms and unit as your discount rate."

---

## 7.3 WACC: The Cost of Invested Capital

WACC is the blended required return across all sources of capital, weighted by their share of total financing. It represents the minimum return the firm must earn on its asset base to satisfy all capital providers.

<div class="formula">
WACC = (E/V) × Rₑ + (D/V) × Rd × (1−t)

Where:
  E   = Market value of equity (market capitalisation)
  D   = Market value of debt (use market value, not book value)
  V   = E + D  (total invested capital)
  Rₑ  = Cost of equity (see CAPM below)
  Rd  = Cost of debt — yield-to-maturity on the firm's outstanding debt
  t   = Marginal corporate tax rate
</div>

**Cost of Equity — CAPM:**

<div class="formula">
Rₑ = Rf + β × ERP

Where:
  Rf  = Risk-free rate (10-year government bond yield)
  β   = Levered beta — sensitivity of stock returns to broad market returns
  ERP = Equity Risk Premium (~4–6% for developed markets)
</div>

**Practical beta note:** A single stock's historical beta is noisy. The industry-beta approach is more reliable (Wall Street Prep): collect betas for comparable public companies, unlever each to strip out capital-structure effects (`βu = βL / [1 + (1−t)×(D/E)]`), take the median unlevered beta, then relever it for the target company's own D/E ratio. This produces "a beta that is usually more reliable" than relying on any one regression.

**Tax shield on debt:** Interest expense is tax-deductible, reducing the effective cost of debt from `Rd` to `Rd×(1−t)`. Preferred dividends, paid from after-tax income, carry no such deduction.

<div class="callout tip">
<span class="callout-title">💡 Weights: Market Value, Not Book Value</span>
Use current market capitalisation for equity and mark-to-market (or par for investment-grade) for debt. Book equity is a historical accounting residual that bears little relation to the return shareholders currently demand. Using book values systematically distorts WACC — usually downwards, inflating the implied enterprise value.
</div>

---

## 7.4 Forecasting Free Cash Flows (Stage 1)

The explicit forecast period is typically **5–10 years** — long enough to capture near-term competitive dynamics, short enough that projections remain credible. The building blocks, grounded in the analysis techniques of Chapter 3 and the forecasting framework of Chapter 6, are:

1. **Revenue:** Build from underlying drivers — volume × price, subscriber growth, market-share trajectory — rather than extrapolating historical rates mechanically.
2. **EBIT margin:** Be honest with history. Global data shows average net profit margins across all industries are approximately 5.5% (Valuation Masterclass). Projecting 15–20% requires explicit, evidenced competitive advantages.
3. **Tax:** Apply the marginal statutory rate. Temporary deferred-tax effects net out over a full business cycle.
4. **CapEx:** Distinguish maintenance CapEx (sustaining existing assets) from growth CapEx (building incremental capacity). In the terminal year, the model must assume CapEx normalises to roughly equal depreciation.
5. **Working capital:** Model ΔNWC as a percentage of the change in revenue. Fast-growing businesses consume cash through receivables and inventory build — a real cost invisible to earnings-based analysis.

---

## 7.5 Terminal Value: The Long Tail of Value

Even after a 5-year explicit forecast, the vast majority of enterprise value lies in years six and beyond. **Terminal value (TV)** captures this in a single number appended to the last explicit forecast year. It is the model's centre of gravity — and its most sensitive assumption.

<div class="callout warn">
<span class="callout-title">⚠️ Terminal Value Dominance</span>
Terminal value typically represents <strong>65–80% of total enterprise value</strong> in a standard 5-year DCF (Wall Street Prep; Valuation Masterclass). In the worked example below it accounts for 74%. This is not a modelling flaw — it is a mathematical consequence of the time value of money applied over long horizons. It means terminal value assumptions deserve at least as much scrutiny as the explicit-period projections.
</div>

### Method 1 — Gordon Growth (Perpetuity Growth Model)

Assumes the business reaches a steady state by year *n* and grows its free cash flows at a constant rate *g* in perpetuity. Theoretically the cleaner method.

<div class="formula">
TV_n  =  FCFF_n × (1 + g)  /  (WACC − g)

PV(TV) = TV_n / (1 + WACC)^n

Constraints:
  g &lt; WACC            (otherwise denominator is negative → infinite or undefined value)
  g ≤ long-run nominal GDP growth  (~2–3% for developed markets)
</div>

The constraint on *g* is both mathematical and economic. No company can grow faster than the entire economy *forever* — it would eventually exceed global GDP. As Wall Street Prep warns: "the implicit assumption of an excessively high growth rate (i.e., >5%) is that the company is on track to someday outpace the growth of the global economy — which is an unrealistic scenario." Damodaran further recommends anchoring *g* at or below the long-run risk-free rate as a conservative cross-check.

### Method 2 — Exit Multiple Method

Applies a market-observed multiple to a final-year operating metric, most commonly EBITDA. Grounded in what real market participants currently pay for comparable businesses.

<div class="formula">
TV_n  =  EBITDA_n × EV/EBITDA_exit

PV(TV) = TV_n / (1 + WACC)^n

Where:
  EV/EBITDA_exit = Current trading multiple of comparable public companies
                   (typical ranges: 6–12× mature industrials; 15–25× high-growth tech)
</div>

**Cross-checking both methods:** Compute the Gordon Growth TV, then derive the *implied* EV/EBITDA multiple — if it is 35× when peers trade at 9×, the growth assumption is carrying enormous hidden optimism. Conversely, derive the *implied g* from the Exit Multiple TV — if it is negative, the multiple undervalues the business. Convergence within ~10–15% signals well-calibrated assumptions; divergence demands explanation before the model is presented.

---

## 7.6 Discounting to Enterprise Value

With Stage 1 FCFF projections and a terminal value, discount everything back to the present.

<div class="formula">
Enterprise Value = Σ [ FCFF_t / (1 + WACC)^t ]  +  TV_n / (1 + WACC)^n

(summation for t = 1 to n)
</div>

**Mid-year convention (briefly):** Standard DCF assumes each year's cash arrives on December 31. In reality, cash accrues throughout the year. The mid-year convention adjusts the exponent from *t* to *(t − 0.5)*, assuming cash is received at mid-year. The discount factor becomes `1 / (1 + WACC)^(t−0.5)`, producing year-period sequence 0.5, 1.5, 2.5 … rather than 1, 2, 3 … This increases present values slightly (Wall Street Prep). The adjustment matters most at high discount rates and is inappropriate for highly seasonal businesses where cash concentrates in one quarter.

---

## 7.7 The Bridge: Enterprise Value → Equity Value → Per Share

Enterprise Value belongs to all capital providers. To isolate the equity holders' claim, subtract every obligation ranking ahead of equity.

<div class="formula">
Net Debt     =  Total Financial Debt − Cash &amp; Cash Equivalents

Equity Value =  Enterprise Value − Net Debt

Per-Share    =  Equity Value / Diluted Shares Outstanding

Notes on bridge adjustments:
  − Subtract underfunded pension obligations (net of plan assets)
  − Subtract operating lease liabilities (if not already in EV)
  + Add non-operating assets not in the cash flow model (associates, surplus property)
  ÷ Diluted share count includes in-the-money options, convertibles, restricted stock
</div>

The equity value produced by an FCFF DCF should approximately equal the equity value from a correctly specified FCFE DCF. Material divergence almost always signals an inconsistency in leverage assumptions between the two models.

---

## 7.8 Worked Example: Alpha Corp

<div class="callout example">
<span class="callout-title">📊 Worked Example — Alpha Corp DCF</span>

**Assumptions:**
- WACC = 10% | Perpetuity growth rate *g* = 3%
- Net Debt = $50M | Diluted shares outstanding = 20M

**Stage 1 — FCFF Projection and Discounting (5 years):**

| Year | FCFF ($M) | Discount Factor            | PV of FCFF ($M) |
|:----:|:---------:|:--------------------------:|:---------------:|
|  1   |   10.00   | 1 ÷ 1.10¹ = 0.9091        |      9.09       |
|  2   |   11.00   | 1 ÷ 1.10² = 0.8264        |      9.09       |
|  3   |   12.00   | 1 ÷ 1.10³ = 0.7513        |      9.02       |
|  4   |   13.00   | 1 ÷ 1.10⁴ = 0.6830        |      8.88       |
|  5   |   14.00   | 1 ÷ 1.10⁵ = 0.6209        |      8.69       |
|      |           | **Σ Stage 1 PV**           |    **44.77**    |

**Stage 2 — Terminal Value (Gordon Growth Method):**

```
TV₅  =  14.00 × (1 + 0.03) / (0.10 − 0.03)
      =  14.42 / 0.07
      =  $205.71M   (as of end of Year 5)

PV(TV) = 205.71 / (1.10)⁵
        = 205.71 / 1.6105
        = $127.73M   (discounted to today)
```

**Terminal value = 127.73 / 172.50 = 74.1% of Enterprise Value** — a textbook illustration of TV dominance.

**Enterprise Value:**
```
EV = $44.77M (Stage 1) + $127.73M (PV of TV) = $172.50M
```

**Bridge to Equity Value and Per-Share Price:**
```
Equity Value  =  $172.50M − $50.00M (Net Debt)  =  $122.50M
Per Share     =  $122.50M ÷ 20M shares           =  $6.13 per share
```

**Exit-multiple sanity check:** If comparable companies trade at 10× EBITDA and Alpha's Year 5 EBITDA ≈ $20M, then Exit Multiple TV ≈ $200M → PV(TV) ≈ $124M → EV ≈ $169M. The two methods converge within ~2%, confirming the assumptions are internally consistent.
</div>

---

## 7.9 EV Multiples as Sanity Checks

A DCF output should always be tested against observable market multiples. Two are standard:

**EV/EBITDA** (`Enterprise Value ÷ EBITDA`): The most widely used enterprise-level multiple, preferred over P/EBITDA because EBITDA is pre-interest and thus flows to *all* capital providers — consistent with EV (per CFI). Fast to compute and comparable across different capital structures. Its limitation: it omits CapEx and working-capital changes, potentially flattering capital-intensive businesses by ignoring ongoing maintenance spend.

**EV/FCF** (`Enterprise Value ÷ FCFF`): Stricter than EV/EBITDA because free cash flow already reflects CapEx and working-capital swings. EV/FCF > EV/EBITDA (which is typical) signals that the company converts EBITDA to cash less efficiently — worth understanding before accepting any valuation.

**How to apply:** After computing enterprise value, back out both implied multiples and compare to peer trading multiples. A divergence >20–30% from the peer median is not automatically an error — but it requires a clear narrative for why the premium or discount is warranted.

---

## 7.10 Common DCF Pitfalls

<div class="callout warn">
<span class="callout-title">⚠️ Ten Pitfalls to Avoid</span>

1. **Garbage-in assumptions.** Projecting 15–20% net margins when the global industry average is ~5.5% produces a flattering narrative, not a valuation. Anchor to observed comparable-company margins.

2. **Mismatched cash flow and discount rate.** FCFF discounted at cost of equity, or FCFE discounted at WACC, violates the fundamental pairing rule and produces wrong values in *both* directions.

3. **Perpetuity growth rate exceeding GDP.** *g* &gt; WACC breaks the algebra. *g* &gt; long-run nominal GDP (~2–3%) implies the company eventually becomes larger than the global economy. 2–2.5% is a conservative anchor for mature businesses.

4. **Terminal value dominance without sensitivity analysis.** When TV is 75% of EV, a 0.5% change in *g* or WACC can swing equity value 20–40%. Every DCF must include a two-way sensitivity table (*g* vs. WACC) as a core deliverable.

5. **Forgetting to discount the terminal value.** The Gordon Growth formula produces TV *as of year n*. Applying it without discounting back to today inflates EV by `(1 + WACC)^n`.

6. **Double-counting non-operating assets.** Including an associate's equity-accounted income in FCFF *and* adding its market value in the EV bridge counts the same asset twice. Each non-operating asset belongs in the cash flows *or* the bridge — never both.

7. **Terminal year not at steady state.** By year *n*, CapEx should approximately equal depreciation (Dep/CapEx → 1.0×), margins should be stable, and revenue growth should equal *g*. Applying a perpetuity formula to a year still in transition misstates TV.

8. **Contradiction between Stage 1 and terminal assumptions.** If margins are deteriorating in years 1–5 due to competitive pressure, then magically recovering in the terminal year — that is an inconsistency that inflates TV and must be explained or removed.

9. **Beta from regression without industry benchmarking.** Single-stock historical beta is noisy. The unlevered-industry-beta approach (§7.3) produces more stable, defensible estimates.

10. **No relative valuation cross-check.** A DCF implying EV/EBITDA of 35× in a sector trading at 9× is not necessarily wrong — but it requires an explicit explanation. Skipping the comparison leaves the model unanchored and indefensible.
</div>

---

## Bringing It Together

DCF analysis is powerful precisely because it forces transparency: every assumption about growth, margins, capital intensity, and cost of capital must be made explicit — and then defended. There is nowhere to hide optimism inside a present-value calculation without it eventually surfacing in an unrealistic *g*, an implausible margin trajectory, or an implied multiple far outside any observable range.

The FCFF → WACC → Enterprise Value path is the standard route for corporate valuation and M&A analysis. The FCFE → cost-of-equity → Equity Value path is the cleaner choice when leverage is stable. Both paths, properly executed with consistent assumptions, should converge. When they diverge, the gap is information — it reveals an inconsistency in the model that deserves resolution before the analysis is presented or acted upon.

> *"Every valuation starts with a story. A good DCF converts that story into numbers."* — Aswath Damodaran

<div class="callout key">
<span class="callout-title">🔑 Key Takeaways</span>
<ul>
  <li><strong>Two pairings — no exceptions:</strong> FCFF + WACC → Enterprise Value; FCFE + Cost of Equity → Equity Value directly. Mixing the pair destroys the model's internal logic.</li>
  <li><strong>Terminal value dominates:</strong> In a typical 5-year DCF, terminal value represents 65–80% of enterprise value. Sensitivity analysis on <em>g</em> and WACC is not optional — it is the primary output of the model.</li>
  <li><strong>g is bounded by the global economy:</strong> A perpetuity growth rate above long-run nominal GDP (~2–3%) implies the company eventually outgrows the world economy. Anchor at 2–2.5% for mature businesses; justify anything higher with explicit evidence.</li>
  <li><strong>Bridge precisely:</strong> Subtract net debt (total debt minus cash), adjust for off-balance-sheet items and non-operating assets, then divide by diluted shares. Each bridge item can swing per-share value materially.</li>
  <li><strong>Cross-check with multiples:</strong> Compute the EV/EBITDA and EV/FCF implied by your DCF and compare to comparable companies. Significant divergence is a prompt to interrogate assumptions — not to discard the model, but to understand and explain it.</li>
</ul>
</div>

---

*Cross-references: Chapter 3 — Analysis &amp; Interpretation (deriving FCF from the cash flow statement) · Chapter 6 — Application &amp; Forecasting (building the revenue and margin assumptions that feed Stage 1 of the DCF).*
