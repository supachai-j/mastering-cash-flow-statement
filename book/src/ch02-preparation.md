# 2. Preparing the Statement

Every cash flow statement starts life as a pile of accrual-basis journal entries — and ends as three clean sections that answer one irreducible question: *where did the cash actually go?* The mechanics of getting from one to the other are completely learnable, and once you have internalised the sign conventions, preparing or auditing any cash flow statement becomes a checklist exercise rather than a puzzle. This chapter walks through that checklist from first principle to final tie-out.

> **Standards covered:** IAS 7 *Statement of Cash Flows* (IFRS) and ASC 230 (US GAAP). Material differences between the two are noted explicitly where they affect preparation. Cross-reference with **Chapter 1 — Fundamentals &amp; Structure** for category definitions and with **Chapter 4 — IFRS vs. US GAAP Differences** for the full comparison.

---

## 2.1 The Two Presentation Methods

Both standards permit two ways to present the **operating section** only. The investing and financing sections are prepared identically regardless of which method is chosen.

| Feature | Indirect Method | Direct Method |
|---|---|---|
| Starting point | Net income (accrual) | — |
| Approach | Reconcile net income to cash | List actual cash receipts and payments |
| Data source | Income statement + balance-sheet changes | Cash ledger or adjusted accrual figures |
| Transparency | Shows *why* cash differs from profit | Shows *what* cash moved and where |
| Preferred by standards | Encouraged (IAS 7.19; ASC 230) | Encouraged (IAS 7.19; ASC 230) |
| Used in practice | ~95% of public companies | Rare outside financial institutions |

<div class="callout tip"><span class="callout-title">💡 Tip</span> IAS 7 and ASC 230 both <em>encourage</em> the direct method but <em>permit</em> the indirect. In practice nearly every listed company uses indirect because collecting gross cash-receipt data adds system complexity with no benefit to the operating-section total — which is identical either way (per AnalystPrep CFA Level I).</div>

---

## 2.2 The Indirect Method — Step by Step

The indirect method is best understood as a two-move transformation:

1. **Strip out everything accrual-only** — non-cash charges, non-operating gains/losses, and deferred items.
2. **Put back the real cash timing** — working-capital changes that record when cash actually moved.

### 2.2.1 Ordered Checklist with Signs

| # | Adjustment | Sign | Economic reason |
|---|---|---|---|
| **Start** | Net Income | Base | Accrual profit — our reconciliation anchor |
| 1a | Depreciation &amp; Amortisation | **+** | Expense allocated over time; no cash leaves the company |
| 1b | Impairment losses | **+** | Non-cash write-down of asset carrying value |
| 1c | Stock-based compensation (SBC) | **+** | Equity-settled; no cash leaves the company |
| 1d | Deferred tax expense | **+** | Tax recognised in books, not yet paid to authorities |
| 1e | Amortisation of bond discount | **+** | Reported interest expense exceeds cash coupon paid |
| 1f | Amortisation of bond premium | **−** | Reported interest expense is less than cash coupon paid |
| 2a | Gain on sale of long-term asset | **−** | Full cash proceeds sit in *investing*; remove the income effect here to avoid double-counting |
| 2b | Loss on sale of long-term asset | **+** | Cash paid recorded in *investing*; restore the expense removed from net income |
| 3a | Increase in Accounts Receivable | **−** | Revenue recognised, cash not yet collected — cash "locked up" |
| 3b | Decrease in Accounts Receivable | **+** | More cash collected than revenue recognised this period |
| 3c | Increase in Inventory | **−** | Cash spent to build stock, not yet expensed through COGS |
| 3d | Decrease in Inventory | **+** | Inventory expensed (COGS), but less new cash spent buying it |
| 3e | Increase in Prepaid Expenses | **−** | Cash paid in advance; not yet recognised as expense |
| 3f | Decrease in Prepaid Expenses | **+** | Expense recognised from prior cash payment; no new outflow |
| 3g | Increase in Accounts Payable | **+** | Goods/services received; payment deferred — cash retained |
| 3h | Decrease in Accounts Payable | **−** | Prior obligations settled — cash out |
| 3i | Increase in Accrued Liabilities | **+** | Expense accrued; cash not yet paid |
| 3j | Decrease in Accrued Liabilities | **−** | Settled accruals in cash |
| 3k | Increase in Unearned Revenue | **+** | Cash received before earning it |
| 3l | Decrease in Unearned Revenue | **−** | Revenue earned and recognised; no new cash in |
| 3m | Increase in Income Tax Payable | **+** | Tax owed but not yet remitted |
| 3n | Decrease in Income Tax Payable | **−** | Paid more tax than current-period expense |
| **=** | **Net Cash from Operating Activities** | | Sum of all lines above |

<div class="callout tip"><span class="callout-title">💡 Tip</span> The universal memory rule: <strong>asset ↑ = cash ↓ (subtract); liability ↑ = cash ↑ (add).</strong> Flip for decreases. This works for every working-capital account without exception.</div>

### 2.2.2 Why Each Adjustment Has That Sign

**Non-cash charges (rows 1a–1f):** These items reduced (or increased) net income on the income statement but involved no movement of cash. Adding them back restores the income statement to a cash basis. As Corporate Finance Institute explains, depreciation "reduced net income but did not use cash" — the asset's cost was spent in a prior period when the PP&amp;E was originally purchased.

The same logic applies to stock-based compensation ("expense related to employee compensation paid in shares and is not a cash outflow" — Corporate Finance Institute) and to deferred tax expense ("tax expenses recognised in accounting but not yet paid in cash" — Corporate Finance Institute). Impairment losses are equally non-cash: "a non-cash expense due to reduction in asset value."

**Gain/loss reversals (rows 2a–2b):** When equipment is sold, the *total cash proceeds* are reported as an investing inflow. The gain is also embedded in net income. If it is not reversed in operating, both sections claim the same dollars — the gain in operating and the full proceeds in investing. The fix: subtract the gain from operating; report the *full* sale price (not the gain alone) in investing. As Ryan O'Connell (CFA) states: "report full cash proceeds, not the gain/loss."

**Working capital (rows 3a–3n):** Revenue and expense are recognised when earned or incurred (accrual basis), but cash arrives and departs on a different schedule. Each working-capital line corrects for that timing gap. Accounts receivable rising means you recognised revenue without collecting cash (subtract). Accounts payable rising means you received goods without paying (add).

### 2.2.3 Working Capital Sign Rules — Quick Reference

| Account | ↑ Increase | ↓ Decrease |
|---|---|---|
| Accounts Receivable | − (subtract) | + (add) |
| Inventory | − (subtract) | + (add) |
| Prepaid Expenses | − (subtract) | + (add) |
| Other Current Assets | − (subtract) | + (add) |
| Accounts Payable | + (add) | − (subtract) |
| Accrued Liabilities | + (add) | − (subtract) |
| Unearned Revenue | + (add) | − (subtract) |
| Income Tax Payable | + (add) | − (subtract) |

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span> The two most common sign errors: (1) treating an <strong>AR increase as positive</strong> — it is negative because cash was not collected; (2) treating an <strong>AP decrease as positive</strong> — it is negative because the liability was paid off in cash. When in doubt, trace the actual cash: did cash leave or arrive?</div>

---

## 2.3 The Direct Method — Recipe

The direct method converts each major income-statement line from accrual to cash by adjusting for the related balance-sheet account change. All six steps below produce the same net total as the indirect method — they simply expose the underlying cash flows that the indirect method leaves implicit.

<div class="formula">1. Cash received from customers = Net Revenue − Δ Accounts Receivable (increase) + Δ Accounts Receivable (decrease)</div>

<div class="formula">2. Purchases from suppliers = COGS + Δ Inventory (increase) − Δ Inventory (decrease)
   Cash paid to suppliers = Purchases − Δ Accounts Payable (increase) + Δ Accounts Payable (decrease)</div>

<div class="formula">3. Cash paid to employees = Wages Expense − Δ Wages Payable (increase) + Δ Wages Payable (decrease)</div>

<div class="formula">4. Cash paid for other operating expenses = Other OpEx + Δ Prepaid (increase) − Δ Prepaid (decrease) − Δ Accrued Liabilities (increase) + Δ Accrued Liabilities (decrease)</div>

<div class="formula">5. Cash paid for interest = Interest Expense + Bond Discount Amort. − Bond Premium Amort. − Δ Interest Payable (increase) + Δ Interest Payable (decrease)</div>

<div class="formula">6. Cash paid for taxes = Tax Expense + Δ Tax Payable (decrease) − Δ Tax Payable (increase) − Δ Deferred Tax Liability (increase) + Δ Deferred Tax Liability (decrease)</div>

**Net Cash from Operating = (1) − (2) − (3) − (4) − (5) − (6)**

*(Interest and tax lines are outflows — entered as negatives in the final sum.)*

**Direct-method formula shorthand (per AnalystPrep CFA Level I):**

- Cash from customers = "Revenue less (plus) increase (decrease) in accounts receivable"
- Cash to suppliers = "Cost of goods sold less (plus) decrease (increase) in inventory" → then adjust for AP change

<div class="callout tip"><span class="callout-title">💡 Tip</span> When the direct method is used, IAS 7 and ASC 230 both require a <em>supplemental reconciliation</em> of net income to operating cash flow — the same table as the indirect method. So direct-method preparers end up producing both presentations anyway. That is one reason adoption remains low (per AccountingTools).</div>

---

## 2.4 Preparing the Investing Activities Section

The investing section captures cash flows related to the acquisition and disposal of **long-term assets** (IAS 7). It is prepared the same way under both direct and indirect methods.

| Investing Inflows (+) | Investing Outflows (−) |
|---|---|
| Proceeds from sale of PP&amp;E (full amount) | Purchase of PP&amp;E / capital expenditure |
| Proceeds from sale of intangible assets | Purchase of intangible assets |
| Proceeds from sale of investment securities | Purchase of investment securities (non-trading) |
| Principal collected on loans made | Loans made to third parties |
| Cash received from business disposals (net of cash sold) | Cash paid in acquisitions (net of cash acquired) |

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span> Always report the <strong>full sale proceeds</strong> in investing — never just the net gain. If equipment with book value $10,000 is sold for $18,000, the investing inflow is <strong>$18,000</strong>, not $8,000. The $8,000 gain has already been removed from operating via the gain-reversal adjustment (row 2a in the checklist). Reporting only the gain in investing would understate the section by $10,000.</div>

**Deriving capex when the notes are silent:**

<div class="formula">Capex Paid = Ending PP&amp;E (gross) − Beginning PP&amp;E (gross) + Cost of Assets Disposed</div>

---

## 2.5 Preparing the Financing Activities Section

Financing flows capture changes in the entity's **capital structure** — debt raised or repaid, equity issued or bought back, and distributions to shareholders (IAS 7).

| Financing Inflows (+) | Financing Outflows (−) |
|---|---|
| Proceeds from issuing long-term debt (bonds, notes) | Repayment of long-term debt principal |
| Proceeds from issuing common or preferred stock | Repurchase of treasury stock / share buybacks |
| Proceeds from short-term borrowings (if classified here) | Repayment of short-term borrowings |
| — | Cash dividends paid to shareholders |

**Deriving dividends paid:**

<div class="formula">Dividends Paid = Beginning Retained Earnings + Net Income − Ending Retained Earnings</div>

### IFRS vs. US GAAP Classification Differences

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span> IFRS (IAS 7) gives companies flexibility on four items; US GAAP (ASC 230) prescribes a fixed classification for each. Analysts comparing companies across frameworks must standardise these choices before drawing conclusions about operating cash generation.</div>

| Cash Flow Item | IFRS (IAS 7) | US GAAP (ASC 230) |
|---|---|---|
| Interest paid | Operating **or** Financing | **Operating** only |
| Interest received | Operating **or** Investing | **Operating** only |
| Dividends paid | Operating **or** Financing | **Financing** only |
| Dividends received | Operating **or** Investing | **Operating** only |
| Bank overdrafts | Included in cash &amp; equivalents | **Financing** activity |
| Income taxes | Operating (can allocate portions if identifiable) | **Operating** only |

Under IFRS, whichever classification a company selects "must use a consistent classification each year" (AnalystPrep CFA Level I). Two companies with identical economics can report meaningfully different operating cash flows simply due to this policy choice — a critical point for cross-border analysis.

---

## 2.6 Complete Worked Example — Meridian Manufacturing Corp.

<div class="callout example"><span class="callout-title">🧮 Worked Example</span>

Work through the data below before reading the solution. The goal is a complete three-section cash flow statement that ties ending cash to the balance sheet.

### Input: Income Statement (Year 20X2, selected lines)

| Line | Amount |
|---|---|
| Net Income | $162,000 |
| *(included above)* Depreciation Expense | $25,000 |
| *(included above)* Gain on Sale of Equipment | $8,000 |

### Input: Comparative Balance Sheet

| Account | End 20X2 | End 20X1 | Change |
|---|---|---|---|
| **Cash** | $62,000 | $35,000 | **+$27,000** |
| Accounts Receivable | $88,000 | $72,000 | +$16,000 |
| Inventory | $94,000 | $110,000 | −$16,000 |
| Prepaid Expenses | $6,000 | $4,000 | +$2,000 |
| PP&amp;E (gross) | $620,000 | $500,000 | +$120,000 |
| Accumulated Depreciation | ($185,000) | ($160,000) | +$25,000 |
| Accounts Payable | $54,000 | $48,000 | +$6,000 |
| Accrued Liabilities | $18,000 | $22,000 | −$4,000 |
| Long-term Bonds | $150,000 | $200,000 | −$50,000 |
| Common Stock | $280,000 | $240,000 | +$40,000 |
| Retained Earnings | $183,000 | $51,000 | +$132,000 |

**Additional information:**
- Equipment with original cost $10,000 (book value $10,000, zero accumulated depreciation) was sold for $18,000 → gain = $8,000.
- New PP&amp;E purchases: $500,000 − $10,000 (disposed at cost) + **X** = $620,000 → **X = $130,000 capex**.
- Dividends paid: $51,000 + $162,000 − $183,000 = **$30,000**.

### Solution: Statement of Cash Flows (Indirect Method)

**MERIDIAN MANUFACTURING CORP.**
*Statement of Cash Flows — Year Ended December 31, 20X2*

| Section / Line Item | Note | Amount |
|---|---|---|
| **OPERATING ACTIVITIES** | | |
| Net income | given | $162,000 |
| + Depreciation | non-cash; row 1a | +$25,000 |
| − Gain on equipment sale | remove; cash is in investing; row 2a | −$8,000 |
| − Increase in accounts receivable | AR ↑ = cash locked up; row 3a | −$16,000 |
| + Decrease in inventory | inventory ↓ = cash released; row 3d | +$16,000 |
| − Increase in prepaid expenses | cash paid in advance; row 3e | −$2,000 |
| + Increase in accounts payable | AP ↑ = not yet paid; row 3g | +$6,000 |
| − Decrease in accrued liabilities | settled obligations; row 3j | −$4,000 |
| **Net cash from operating activities** | | **$179,000** |
| | | |
| **INVESTING ACTIVITIES** | | |
| Proceeds from equipment sale | full proceeds: BV $10k + gain $8k = $18k | +$18,000 |
| Purchase of PP&amp;E | derived from BS analysis | −$130,000 |
| **Net cash used in investing activities** | | **($112,000)** |
| | | |
| **FINANCING ACTIVITIES** | | |
| Issuance of common stock | BS: $240k → $280k | +$40,000 |
| Redemption of bonds payable | BS: $200k → $150k | −$50,000 |
| Dividends paid | RE rollforward above | −$30,000 |
| **Net cash used in financing activities** | | **($40,000)** |
| | | |
| **NET INCREASE IN CASH** | $179,000 − $112,000 − $40,000 | **$27,000** |
| Cash at beginning of year | | $35,000 |
| **Cash at end of year** | | **$62,000 ✓** |

### Tie-Out Checks

| Check | Calculation | Result |
|---|---|---|
| Ending cash matches balance sheet | $35,000 + $27,000 | $62,000 ✓ |
| Dividends paid | $51,000 + $162,000 − $183,000 | $30,000 ✓ |
| PP&amp;E gross | $500,000 − $10,000 + $130,000 | $620,000 ✓ |
| Accumulated depreciation | $160,000 − $0 + $25,000 | $185,000 ✓ |
| Three-section sum | $179,000 − $112,000 − $40,000 | $27,000 ✓ |

**Observe how the gain reversal works:** The $8,000 gain was subtracted from operating (row 2a). The full $18,000 proceeds appear in investing. Together they account for exactly what happened: $10,000 of pre-existing book value converted to cash + $8,000 of additional value created — total $18,000 cash received, classified entirely in investing.

</div>

---

## 2.7 Common Preparation Errors

| # | Error | Consequence | Fix |
|---|---|---|---|
| 1 | Forgetting to add back depreciation | Operating cash flow understated by full D&amp;A | Always open the non-cash block with D&amp;A |
| 2 | Wrong sign on working-capital item | Operating misstated either way | Apply "asset ↑ = subtract, liability ↑ = add" |
| 3 | Omitting the gain/loss reversal | Operating inflated (gain) or deflated (loss); double-count in investing | Every income-statement gain/loss on a long-term asset needs a reversal row |
| 4 | Reporting net gain instead of full proceeds in investing | Investing section understated | Report total sale price; the operating reversal handles the rest |
| 5 | Placing capex in operating | Operating understated; investing absent | PP&amp;E purchases always belong in investing |
| 6 | Treating non-cash transactions as cash flows | All three sections potentially misstated | Equipment acquired with a note payable: zero cash effect; disclose separately |
| 7 | Omitting stock-based compensation add-back | Operating understated by SBC | SBC is a non-cash equity expense — add back like depreciation |
| 8 | Omitting deferred tax adjustment | Operating under- or overstated | Deferred tax expense is non-cash; same treatment as depreciation |
| 9 | Missing interest/tax supplemental disclosure | Non-compliance with IAS 7 / ASC 230 | Disclose cash paid for interest and income taxes on the face or in notes |
| 10 | No final tie-out | Error remains undetected | Ending cash on CFS must equal ending cash on the balance sheet — always verify |

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span> Error #6 is surprisingly common: <strong>buying equipment by issuing a note payable involves zero cash.</strong> It must not appear in the cash flow statement body. Disclose it separately as a "significant non-cash investing and financing activity" in the notes or a supplemental schedule (IAS 7.43; ASC 230-10-50-3). Showing it as both an investing outflow and a financing inflow inflates the statement artificially.</div>

---

<div class="callout key"><span class="callout-title">🔑 Key Takeaways</span><ul><li><strong>The indirect method is a reconciliation, not a re-measurement.</strong> It starts from accrual net income and mechanically removes every non-cash, non-operating, and timing distortion until only real operating cash flows remain.</li><li><strong>Sign discipline on working capital is rule-based and symmetric.</strong> Asset accounts up = subtract (cash tied up); liability accounts up = add (cash deferred). Memorise one half and flip for the other.</li><li><strong>The investing and financing sections are source-driven.</strong> Investing flows come from non-current asset accounts; financing flows come from non-current liability and equity accounts plus the retained-earnings rollforward for dividends. Know the source, eliminate classification errors.</li><li><strong>Report investing proceeds gross, never net of gain.</strong> The full sale price appears in investing; the operating gain-reversal handles the income-statement effect — both sections stay accurate with no double-count.</li><li><strong>IFRS gives flexibility; US GAAP does not.</strong> Under IAS 7, interest paid and dividends paid each have two permitted homes. Under ASC 230 they are fixed. Analysts comparing cross-framework companies must standardise these classifications before drawing conclusions about operating cash generation.</li><li><strong>Always tie out.</strong> Ending cash on the statement of cash flows must equal ending cash on the balance sheet. A mismatch means a sign error, a classification error, or a missing line — find it before filing.</li></ul></div>
