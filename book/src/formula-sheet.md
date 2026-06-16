# Formula Sheet

A consolidated, exam-ready reference for every formula used in this book. Notation follows the
Preface: **Δ** = change over the period; **OCF/CFO** = operating cash flow; **CapEx** = capital
expenditure; **t** = tax rate; inflows positive, outflows negative.

## 1. Structure & articulation

<div class="formula">Net change in cash = CFO + CFI + CFF</div>
<div class="formula">Ending cash = Beginning cash + Net change in cash</div>
<div class="formula">Ending cash (CFS) = Cash &amp; equivalents on the Balance Sheet</div>

## 2. Operating cash flow — indirect method

<div class="formula">CFO = Net income + Non-cash items − Gains (+ Losses) − ΔNWC*</div>
<div class="formula">Non-cash add-backs = Depreciation + Amortization + Impairments + Stock-based comp + Δ Deferred tax</div>

\*ΔNWC = change in non-cash working capital. **Sign rules** (operating items):

| Account changes… | Effect on cash |
|---|---|
| Asset **up** (↑AR, ↑Inventory, ↑Prepaid) | **−** outflow |
| Asset **down** | **+** inflow |
| Liability **up** (↑AP, ↑Accrued, ↑Deferred rev.) | **+** inflow |
| Liability **down** | **−** outflow |

Mnemonic: *Assets and cash move opposite; liabilities and cash move together.*

## 3. Direct-method operating lines

<div class="formula">Cash from customers = Revenue − ΔAR (+ Δ Deferred revenue)</div>
<div class="formula">Cash to suppliers = − COGS − ΔInventory + ΔAP</div>
<div class="formula">Cash for operating expenses = − OpEx + ΔPrepaid − ΔAccrued liabilities</div>

## 4. Free cash flow

<div class="formula">FCF (to firm, simple) = CFO − CapEx</div>
<div class="formula">FCFF = EBIT × (1 − t) + D&amp;A − CapEx − ΔNWC</div>
<div class="formula">FCFF = Net income + Non-cash + Interest × (1 − t) − CapEx − ΔNWC</div>
<div class="formula">FCFF = CFO + Interest × (1 − t) − CapEx</div>
<div class="formula">FCFE = FCFF − Interest × (1 − t) + Net borrowing</div>
<div class="formula">FCFE = Net income + D&amp;A − CapEx − ΔNWC + Net borrowing</div>

## 5. Cash-flow ratios

| Ratio | Formula | Reads as |
|---|---|---|
| Operating cash flow ratio | `CFO ÷ Current liabilities` | Short-term liquidity from operations |
| Cash flow margin | `CFO ÷ Revenue` | Cash generated per unit of sales |
| Cash flow to debt | `CFO ÷ Total debt` | Years of cash to repay all debt |
| Cash interest coverage | `(CFO + Interest paid + Taxes paid) ÷ Interest paid` | Cushion to service interest |
| Free cash flow yield | `FCF ÷ Market cap` (or `FCFF ÷ EV`) | Cash return to investors |
| CapEx ratio (reinvestment) | `CFO ÷ CapEx` | >1 = self-funds its investment |
| Dividend coverage (cash) | `FCFE ÷ Dividends paid` | Are dividends covered by cash? |
| Earnings quality (accruals) | `CFO ÷ Net income` | >1 healthy; persistently <1 = warning |

## 6. Earnings quality & forensic signals

<div class="formula">Balance-sheet accruals ratio = (NOA_end − NOA_begin) ÷ Average NOA</div>
<div class="formula">Cash-flow accruals ratio = (NI − CFO − CFI) ÷ Average NOA</div>
<div class="formula">Cash realization = CFO ÷ Net income   (sustained &lt; 1 ⇒ scrutinize)</div>

*NOA = net operating assets. Higher accruals = lower earnings quality.*

## 7. Forecasting drivers (working-capital days)

<div class="formula">DSO = (Accounts receivable ÷ Revenue) × 365</div>
<div class="formula">DIO = (Inventory ÷ COGS) × 365</div>
<div class="formula">DPO = (Accounts payable ÷ COGS) × 365</div>
<div class="formula">Cash Conversion Cycle = DSO + DIO − DPO</div>

## 8. Discounting & valuation

<div class="formula">PV = CFₜ ÷ (1 + r)ᵗ</div>
<div class="formula">WACC = (E ÷ V) × Rₑ + (D ÷ V) × R_d × (1 − t)</div>

**Terminal value** (at the end of the explicit forecast, year N):

<div class="formula">TV (Gordon growth) = FCF_(N+1) ÷ (WACC − g) = FCF_N × (1 + g) ÷ (WACC − g)</div>
<div class="formula">TV (exit multiple) = Metric_N × Exit multiple   (e.g. EBITDA_N × EV/EBITDA)</div>

**Enterprise → equity bridge:**

<div class="formula">Enterprise value = Σ PV(FCFF) + PV(Terminal value)</div>
<div class="formula">Equity value = Enterprise value − Net debt (− minority interest − preferred + investments)</div>
<div class="formula">Value per share = Equity value ÷ Shares outstanding</div>

<div class="callout tip">
<span class="callout-title">💡 Pairing rule</span>
Always pair the cash flow with the matching discount rate: <strong>FCFF with WACC</strong> (→ enterprise value); <strong>FCFE with cost of equity</strong> (→ equity value directly). Mixing them is the most common DCF error — see Chapter 7.
</div>
