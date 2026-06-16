# Ch5 sources — Red flags, manipulation & forensics

Retrieved: 2026-06-16

---

## Source List

### 1. Tavakolistructuredfinance.com — "Enron, J.P. Morgan, and Offshore Special Purpose Entities"
URL: https://www.tavakolistructuredfinance.com/enron-jpmorgan/
Case: **Enron / JPMorgan prepay transactions**

- "J.P. Morgan Chase lent Enron around $2.6 billion through seven 'prepay' transactions."
- Enron received "$330 million upfront from Mahonia for a forward gas contract, which it booked as operating revenue rather than a liability."
- Mahonia had "~$15 million market capitalization" — nominal counterparty to hundreds of millions in gas contracts.
- "The two entities shared identical addresses and board members while being controlled by JPMorgan Chase."
- Courts found these were "loans disguised as trades, designed to manipulate Enron's financial statements."
- SEC fined JPMorgan $135 million (2003); Citigroup fined $120 million for the $3.8 billion Fishtail structure.

---

### 2. WSWS.org — "Citigroup, Morgan Chase Fined for Enron Deals" (August 2003)
URL: https://www.wsws.org/en/articles/2003/08/enrn-a05.html
Case: **Enron / Citigroup Fishtail prepay**

- Citigroup total prepay exposure to Enron: $3.8 billion via "Fishtail" structure; JPMorgan: $2.6 billion via Mahonia.
- Enron "got a lump sum of cash and paid it back periodically, plus interest. In ordinary parlance, this is a loan."
- Loans were "disguised as commodity transactions that accrued cash — rather than debt — for Enron."
- Neither bank admitted wrongdoing in their 2003 SEC settlements.

---

### 3. SEC Enforcement — Dynegy Project Alpha
URL (press release): https://www.sec.gov/news/press/2003-72.htm
URL (complaint): https://www.sec.gov/litigation/complaints/comp17744.htm
Case: **Dynegy Project Alpha**

- "Dynegy closed on Project Alpha, a complex web of transactions involving SPEs, to boost its 2001 operating cash flow by $300 million, or 37%."
- "The $300 million was a loan masquerading as operating cash flow."
- Dynegy also engineered "$79 million tax benefit" from the same structure.
- CFO Robert Doty "falsely claimed that Alpha's primary purpose was to ensure a stable supply of gas."
- Dynegy paid $3 million civil penalty (2002); three former executives faced additional SEC enforcement (2007 press release: https://www.sec.gov/news/press/2007/2007-209.htm).

---

### 4. LegalClarity.org — "The WorldCom Accounting Scandal: Fraud and Bankruptcy"
URL: https://legalclarity.org/the-worldcom-accounting-scandal-fraud-and-bankruptcy/
Case: **WorldCom line-cost capitalisation**

- WorldCom illegally reclassified "line costs" — fees paid to other carriers for network access — as capital assets rather than operating expenses.
- "Illegally capitalized $11 billion in expenses" across 1999–2002.
- CFO Scott Sullivan "directed the fraudulent accounting entries"; CEO Ebbers demanded unrealistic results.
- SEC settlement: $750 million ($500M cash + $250M stock). Criminal: Ebbers 25 years; Sullivan plea deal (5 years).

---

### 5. Transparently.ai — "Worst Cases of Improper Expense Recognition: WorldCom, Tesco, AOL"
URL: https://www.transparently.ai/blog/worst-cases-of-improper-expense-recognition
Cases: **WorldCom, Tesco, AOL**

- WorldCom: "improperly capitalizing $11 billion in expenses" between 1999–2002.
- Tesco: "delayed recognising costs like promotional expenses and prematurely booked supplier income."
- AOL: capitalised free-trial CD marketing costs; "over $1 billion in marketing expenses" improperly capitalised; $300 million SEC fine.
- Tesco SFO penalty: £129 million; investor settlement: ~£85 million.

---

### 6. AccountingCPD.net — "The Tesco Accounting Scandal"
URL: https://www.accountingcpd.net/The_Tesco_Accounting_Scandal
Case: **Tesco 2014 supplier-income pull-forward**

- Executives "inflated Tesco's 2014 interim profit forecast by 'pulling forward' or improperly recognising income from suppliers."
- Discovery: internal "legacy paper" prepared by two commercial finance staff (whistleblower mechanism).
- Three executives (Bush, Rogberg, Scouler): "manipulated accounts, bullied and coerced subordinates to falsify figures and lied to auditors."
- Motive: "keep their jobs and lucrative compensation packages, which were worth more than £1m a year" amid falling sales.
- Reported first-half profit £1.1 billion; actual profit £263 million — overstatement of ~£263 million.

---

### 7. SEC Litigation Release — Lucent Technologies
URL: https://www.sec.gov/enforcement-litigation/litigation-releases/lr-20414 (and LR-21551)
Case: **Lucent Technologies channel stuffing / vendor financing**

- SEC charged Lucent and five executives with improperly recognising "$1.148 billion in revenues and $470 million in pre-tax income" in fiscal 2000.
- Channel stuffing: shipping equipment to resellers before actual demand; $125 million in direct improper revenue.
- Revenue restatement: $679 million.
- Lucent committed $8.1 billion in vendor financing to telecom start-ups during the bubble.
- Lucent entered a consent decree without financial penalty.

---

### 8. Blog.Portfolio123.com — "Detecting Financial Fraud: A Close Look at the Beneish M-Score"
URL: https://blog.portfolio123.com/detecting-financial-fraud-a-close-look-at-the-beneish-m-score/

- Full formula: M = −4.84 + 0.92(DSRI) + 0.528(GMI) + 0.404(AQI) + 0.892(SGI) + 0.115(DEPI) − 0.172(SGAI) + 4.679(TATA) − 0.327(LVGI)
- Threshold: M > −1.78 = likely manipulator; −2.00 to −1.78 = possible; < −2.00 = unlikely.
- "TATA = net income minus operating cash flow, divided by total assets" — highest coefficient (4.679).
- "In a 2020 follow-up paper, [Beneish] proved his method had a lower ratio of false-to-true positives than any other method besides a machine-learning-based one."
- ~8.25% of listed companies exceed the manipulation threshold.

---

### 9. SafetyMargin.io — "Sloan Ratio: Spotting Low-Quality Earnings"
URL: https://safetymargin.io/blog/sloan-ratio-accrual-quality

- Formula: Sloan Accruals Ratio = (Net Income − CFO) / Average Total Assets × 100
- ≤10%: high quality; 10–25%: medium (investigate); >25%: "Low Quality (Accrual-Heavy)"
- Sloan (1996, 1962–1991 sample): "companies in the highest accrual decile underperformed those in the lowest decile by approximately 10% per year."
- Two or more consecutive years of NI > OCF = "Zone of Danger."
- Post-2005 research finds the anomaly "has been largely arbitraged away in U.S. large-caps."

---

### 10. WallStreetPrep.com — "Cash Conversion Ratio (CCR)"
URL: https://www.wallstreetprep.com/knowledge/cash-conversion-ratio/

- CCR = Operating Cash Flow ÷ Net Income
- "For each dollar of net income generated, how much remains post-reconciliation in operating cash flow?"
- 1.2× = $1.20 OCF per $1.00 NI; < 1.0× = working capital / liquidity red flag.
- "When net income persistently exceeds cash flow, it signals potential problems with AR collection, inventory buildup, or unsustainable accruals."

---

### 11. AnalystPrep.com — "Evaluating Cash Flow Quality" (CFA Level 2 study notes)
URL: https://analystprep.com/study-notes/cfa-level-2/evaluating-cash-flow-quality-company/

- "Classification shifting can happen when transferring positive cash flow items from investing or financing activities to operating activities."
- IFRS flexibility: interest paid classifiable as operating or financing; dividends paid classifiable as operating or investing.
- "Restatement of prior years' financial statements" is a primary quality warning signal.
- "Improper revenue recognition affects net income, receivables, and inventories" — impacts all three statements simultaneously.

---

### 12. SingletonValuations.com — "Six Checks to Spot Cash Flow Manipulation"
URL: https://www.singletonvaluations.com/resources/six-checks-to-spot-cash-flow-manipulation

- "Selling receivables too early can greatly inflate an average operational performance."
- Factoring/securitization keywords in footnotes: primary detection signal.
- Inconsistency between Δ AR on OCF statement and Δ AR on balance sheet = misclassification flag.
- "Circular transactions can help both companies involved but eventually, come crashing down."
- Rapidly growing "Other Assets" line items = possible capitalised operating costs.

---

### 13. Investing.com — "What is Beneish M-Score?"
URL: https://investing.com/academy/analysis/beneish-m-score-definition

- Thresholds: M ≤ −2.22 = low likelihood of manipulation; M > −2.22 = higher probability of misrepresentation.
- Gained "widespread recognition for its role in uncovering fraud, including its application in identifying financial discrepancies in high-profile cases like Enron."

---

### 14. Internetnews.com — "Lucent Settles SEC Probe"
URL: https://www.internetnews.com/it-management/lucent-settles-sec-probe/
Case: **Lucent Technologies**

- Five former Lucent employees charged including head of North American sales Nina Aversano and SVP William Plunkett.
- Company restated financial results; $679 million revenue reduction in FY2000.
- No monetary penalties in the final SEC settlement.
