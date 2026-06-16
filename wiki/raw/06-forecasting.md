# Ch6 sources — Application & forecasting

Retrieved: 2026-06-16

---

- [Capital Intensity Ratio | Formula + Calculator](https://www.wallstreetprep.com/knowledge/capital-intensity-ratio/) — Wall Street Prep; authoritative reference on how capital intensity shapes cash flow, capex, depreciation, and FCF across industries.
  - "Capital intensity measures how much asset spending is required to generate revenue" — formula: Total Average Assets ÷ Revenue.
  - High-intensity sectors: manufacturing, oil & gas, energy utilities, semiconductors, automobiles, transportation.
  - Low-intensity sectors: software, consulting, legal services, food service, retail.
  - "Capital-heavy businesses have a wider gap between net income and free cash flow."
  - NextEra Energy example: $7.5B net income on $27B revenue, yet *negative* FCF of −$14.8B because CapEx/Revenue > 100%.
  - "All else being equal, companies with higher capital intensity ratios relative to industry peers are more likely to have lower profit margins from greater spending."

- [13-Week Cash Flow Model (TWCF) | Template Example](https://www.wallstreetprep.com/knowledge/demystifying-the-13-week-cash-flow-model-in-excel/) — Wall Street Prep; premier practitioner reference on TWCF structure, direct method mechanics, and supporting schedules.
  - TWCF is "a near-term oriented weekly cash flow forecast used in the context of corporate restructuring."
  - Uses the **direct method**: tracks actual cash receipts and disbursements — no net income adjustments.
  - Key supporting schedules: AR aging/collections, inventory roll-forward (DIOH assumptions), AP roll-forward (DPO), accrued wages.
  - Includes cash-to-EBITDA reconciliation to bridge to management reporting.
  - "A credible 13-week cash flow model can quite literally determine the outcome of an in-Court bankruptcy proceeding."
  - Real example: American Home Products filed TWCF requesting $400,000 DIP revolver (draws identified June 7 and July 5, 2019).

- [13-Week Cash Flow Model (TWCF)](https://www.fe.training/free-resources/restructuring/13-week-cash-flow-model-twcf/) — Financial Edge; restructuring training provider with step-by-step TWCF construction.
  - "13WCF is an internal, weekly cash-based analysis performed over a short period, typically 13 weeks."
  - Structure: (1) operating cash flows (customer receipts; disbursements for merchandise, wages, insurance, rent, taxes, CapEx); (2) non-operating cash flows (financing, professional fees).
  - "Direct method, which distils all activities of a firm down to cash receipts and cash disbursements," converting accrual to cash basis.
  - Construction: gather weekly data from AR aging, AP schedules, payroll files; do not simply use accrual P&L.
  - Primary use cases: bankruptcy proceedings, creditor-lender requests, broken covenant situations.

- [Building a 3-Statement Financial Model: CFO's Guide to Driver-Based Forecasting](https://cfoproanalytics.com/cfo-wiki/fractional-cfo/building-a-3-statement-financial-model-cfos-guide-to-driver-based-forecasting/) — CFO Pro Analytics; integrates DSO/DIO/DPO into 3-statement model logic with worked numerical examples.
  - "Revenue you've earned but haven't collected" creates working capital timing gaps that destroy growth plans.
  - DSO formula link: AR = Revenue × (DSO ÷ 365); 45-day DSO on $3M/mo revenue → $4.5M AR.
  - "A services company growing from $2M to $3M monthly revenue with 45-day DSO: AR increases from $3M to $4.5M, consuming $1.5M in cash."
  - Manufacturer growing $24M→$36M (33% growth), 45 DSO / 60 DIO / 30 DPO → "approximately $1.8M in cash" consumed for WC expansion despite profitability.
  - "Profitable growth can destroy your company through" cash consumption via working capital expansion.

- [Modeling Working Capital: Drivers and Schedules in Three-Statement Models](https://investmentbankinganalysts.com/modeling-working-capital-drivers-and-schedules-in-three-statement-models/) — Investment Banking Analysts; technical treatment of WC driver mechanics linking balance sheet to cash flow statement.
  - "Drive accounts receivable by DSO on sales; inventory by DIO on cost of goods sold; accounts payable by DPO on addressable purchases."
  - CCC = DSO + DIO − DPO; signals liquidity needs.
  - $500M revenue, 60% gross margin, 45-day DSO: reducing DSO by 3 days releases "$4.1M dollars of cash, which is 3 divided by 365 times $500M."
  - At 6% revolver rate, $4.1M released → ~$0.25M annual interest savings.
  - Period-over-period change in NWC flows directly through the operating activities section of the cash flow statement.

- [Negative Working Capital Analysis](https://corporatefinanceinstitute.com/resources/financial-modeling/negative-working-capital-analysis/) — Corporate Finance Institute; explains retail and SaaS negative WC as structural cash flow advantage with comparative example.
  - Retail model: DSO 5 days, DIO 30 days, DPO 60 days → CCC = −25 days (collects customer cash before paying suppliers).
  - "RetailCo" asset turnover: 2.0× vs 1.33× for capital-intensive manufacturers with same revenue; ROE 20% vs lower for comparable companies.
  - "Retail grocers and subscription-based businesses like Amazon and Netflix frequently operate with this structure as a strategic advantage."
  - Red flags: rapid increase in DPO beyond norms = distress signal; consistent DPO + rising inventory turnover = efficiency.

- [Direct Cashflow Forecasts](https://www.cfosecrets.io/p/direct-cashflow-forecasts) — CFO Secrets; practitioner CFO perspective on 13-week direct method, pitfalls, and weekly cadence.
  - Structure: Opening cash + cash receipts − cash payments = closing balance; mirrors a bank statement.
  - "$5M revenue business processes ~$100K weekly receipts and ~$90K supplier payments → a 19:1 transaction ratio that amplifies small timing variations into significant swings."
  - Two critical error types: (1) transaction-to-trading handoff (weeks 1–4 use known AR/AP; weeks 5–13 switch to sales forecasts → double-counting risk); (2) actualization failures (customers paying early/late cascade across multiple weeks).
  - Completion target: end of Tuesday; Monday reconciles prior week bank activity.

- [What is 13-Week Cash Flow Forecasting?](https://treasury.ripple.com/posts/what-is-13-week-cash-flow-forecasting) — GTreasury (Ripple Treasury); treasury practitioner perspective on normal business use beyond restructuring.
  - Four components: opening balance (verified), cash inflows (AR collections, customer payments), cash outflows (payroll, suppliers, debt service, capex, taxes), net cash flow and closing balance.
  - "Direct forecasting draws from actual transaction data rather than projected income statements — more accurate for near-term decisions than budget-derived approaches."
  - AFP 2024 Liquidity Survey: 67% of treasury departments still use spreadsheets; 88% of complex spreadsheets contain ≥1 error; teams spend 50–70% of forecast cycle on manual data gathering.
  - Forecast accuracy: weeks 1–4: ≥95%; weeks 5–8: 85–90%; weeks 9–13: 70–85%.

- [Banking Sector Cash Flow Statement](https://www.analystinterview.com/article/banking-sector-cash-flow-statement) — Analyst Interview; explains structural differences in bank cash flow presentation vs. operating companies.
  - "Unlike manufacturing companies, banks earn from interest margins, fees, and other financial activities" — not product sales.
  - Operating activities for banks: loan issuance (outflow), customer deposits (inflow), interest income/expense, service fees.
  - "For banks, the cash flow statement is not just about understanding profits but evaluating availability of cash to support daily operations."
  - Enterprise value not applicable to banks; equity-based metrics (P/TB, CET1) replace FCF analysis.

- [Working Capital Cycle | Formula + Calculator](https://www.wallstreetprep.com/knowledge/working-capital-cycle/) — Wall Street Prep; seasonality of retail working capital and the CCC linkage to FCF.
  - "Working capital cycle measures efficiency at which a company can convert operating assets into cash." Formula: WCC = DIO + DSO − DPO.
  - "If a company's net working capital (NWC) increases, its free cash flow (FCF) declines."
  - Retail seasonality: "inventory cycles out much quicker around holidays but accumulates afterward; the WC metric should be set on a rolling twelve-month basis to capture at least one entire cycle."

---

## Unreachable sources

- **BPR Global** (https://bprglobal.co/resources/financial-planning-analysis/13-week-cash-flow-forecasting-guide/) — HTTP 403 Forbidden.
- **GTreasury** (https://www.gtreasury.com/posts/what-is-13-week-cash-flow-forecasting) — 301 redirect to treasury.ripple.com; content retrieved successfully from redirect destination.
