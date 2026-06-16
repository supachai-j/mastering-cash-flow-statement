# 4. Standards: IFRS (IAS 7) vs US GAAP (ASC 230)

Two companies. Identical business models. Identical economic cash flows. Yet one reports operating cash flow of $800 million; the other reports $650 million. No accounting fraud. No error. Just two different frameworks governing how the cash flow statement is constructed — IFRS's **IAS 7 Statement of Cash Flows** and the US GAAP equivalent, **ASC 230 Statement of Cash Flows**.

For analysts comparing companies across borders, or for accountants preparing statements under both standards, these differences are not academic. They affect headline figures, credit metrics, and investment decisions. This chapter maps every significant difference with precision — classification rules, method preferences, definitions, and the wave of recent amendments that are reshaping both frameworks.

> As a foundation, recall from **Chapter 1 — Fundamentals &amp; Structure** that the statement of cash flows divides all cash activity into three sections: Operating, Investing, and Financing. Everything in this chapter is about how the two frameworks decide *which section* a particular cash flow belongs in.

---

## 4.1 The Core Philosophy: Choice vs. Prescription

The deepest structural difference between IAS 7 and ASC 230 is philosophical.

**IAS 7** is built on a *nature-of-activity* principle: classify a cash flow according to the nature of the transaction that generated it. Where transactions can reasonably be classified as operating or investing (interest received, for instance), IAS 7 grants entities an explicit **accounting policy choice** — as long as that choice is applied consistently from period to period and disclosed to users.

**ASC 230** is largely *prescriptive*: Congress and the FASB have specified where most items go, and entities have limited discretion. The classification of an item often follows how the related asset or liability is classified on the balance sheet, and the standard provides granular, rule-based guidance (especially post-ASU 2016-15) for items that previously generated diversity in practice.

This philosophical divide explains almost every specific difference covered below.

---

## 4.2 Classification Differences: The Full Picture

### Interest Paid, Interest Received, Dividends Paid, Dividends Received

These four items are where the divergence is most consequential and most visible. IAS 7 paragraphs 31–34 acknowledge that there is "no consensus" on their classification and therefore grant entities a choice. ASC 230 does not.

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span>
This is the single most impactful source of non-comparability between IFRS and US GAAP cash flow statements. An IFRS company that classifies interest paid as Financing and interest received as Investing will show a materially higher operating cash flow than an identical US GAAP company — purely due to classification rules, not economic reality. Always check the accounting policy note before comparing operating cash flows across frameworks.
</div>

**IAS 7.31–33:** Interest paid may be classified as either **Operating** or **Financing**. Interest received and dividends received may be classified as either **Operating** or **Investing**. The rationale is symmetrical: interest paid enters into the determination of profit or loss (supporting an operating classification) *or* represents the cost of obtaining financing (supporting a financing classification). Similarly, interest received is either a return on an investment (investing) or part of operating returns (operating).

**IAS 7.34:** Dividends paid may be classified as **Operating** (helping users assess the ability to pay dividends from operating cash flows) or **Financing** (representing a cost of obtaining equity capital).

**ASC 230-10-45:** Under US GAAP, classifications are fixed — interest paid is **Operating** (except amounts capitalized as part of a qualifying asset, which are Investing); interest received is **Operating**; dividends received are **Operating**; dividends paid are **Financing**.

<div class="callout tip"><span class="callout-title">💡 Tip</span>
For financial institutions under IAS 7, interest paid, interest received, and dividends received are typically classified as **Operating activities**, because these flows arise from the entity's principal revenue-generating activities. IAS 7 explicitly acknowledges this practice. Under IFRS 18 (effective 2027), financial institutions with "specified main business activities" will classify these flows based on how the related income or expense appears in profit or loss — preserving the operating classification for most banks and insurers.
</div>

### Income Taxes Paid

**IAS 7.35–36:** Cash flows from income taxes are classified as **Operating activities**, *unless* they can be specifically identified with a financing or investing transaction. In principle, the tax cash flow attributable to the gain on a sale of a subsidiary could be allocated to Investing activities. In practice, entities rarely allocate taxes to non-operating sections because the specific identification is operationally difficult.

**ASC 230:** Taxes paid are **always Operating**. No exception exists to allocate tax payments to Investing or Financing activities. The practical outcome is the same as IFRS in the vast majority of cases, but the rule is more rigid under US GAAP.

---

## 4.3 The Master Comparison Table

| Item | IAS 7 (IFRS) | ASC 230 (US GAAP) |
|---|---|---|
| **Interest paid** | Choice: **Operating** or **Financing** (IAS 7.31–33); consistently applied | **Operating** (except capitalized interest → Investing) |
| **Interest received** | Choice: **Operating** or **Investing** (IAS 7.31–33); consistently applied | **Operating** |
| **Dividends paid** | Choice: **Operating** or **Financing** (IAS 7.34); consistently applied | **Financing** (mandatory) |
| **Dividends received** | Choice: **Operating** or **Investing** (IAS 7.34); consistently applied | **Operating** (mandatory) |
| **Income taxes paid** | Generally **Operating**; may allocate to Investing or Financing if specifically identifiable (IAS 7.35–36) | Always **Operating**; no allocation permitted (ASC 230-10-45-17) |
| **Bank overdrafts** | May be included in cash &amp; equivalents if (a) repayable on demand AND (b) integral to cash management (IAS 7.9); netting against positive balances permitted in SCF | **Not** included in cash equivalents; treated as financing liability; changes → Financing activities |
| **Cash equivalents — maturity** | Three months from **acquisition date** (IAS 7.7) | Three months from **original maturity** to the entity (ASC 230-10-20) |
| **Restricted cash** | No specific standard; generally excluded from cash &amp; equivalents; material amounts disclosed (IAS 7.48) | Must be included in opening/closing cash balances (ASU 2016-18); reconciliation to balance sheet required |
| **Method preference** | Both permitted; **direct method encouraged** (IAS 7.19) | Both permitted; indirect dominant in practice; no stated standard preference |
| **Indirect method starting point** | Multiple permitted currently: net income, pre-tax profit, operating profit | **Net income** (post-tax) required |
| **Key disclosures — interest &amp; taxes** | Disclose interest paid, interest received, dividends paid/received, taxes paid (IAS 7.48) | If direct method: disclose interest paid and income taxes paid (ASC 230-10-50-2) |
| **Financing liabilities reconciliation** | Para 44A–44E (added 2016): reconcile all changes (cash and non-cash) in financing liabilities in notes | No equivalent requirement |
| **Supplier finance disclosures** | IAS 7 / IFRS 7 amendment: terms, carrying amounts, amounts paid by financier, payment date ranges, non-cash changes (effective 1 Jan 2024) | ASU 2022-04: key terms, confirmed outstanding amounts, balance sheet location, annual rollforward, interim amounts (effective FY after 15 Dec 2022) |
| **Scope exceptions** | None — all entities must present a statement of cash flows | Certain pension plans and some investment companies are exempt |
| **Cash flow per share** | Permitted to disclose (not required) | Prohibited |

---

## 4.4 Bank Overdrafts and Cash Equivalents

### Cash Equivalents: The Three-Month Clock

Both standards define cash equivalents as short-term, highly liquid investments readily convertible to known amounts of cash and subject to insignificant risk of value changes. The practical threshold is three months — but *measured differently*.

**IAS 7.7:** Three months from the **acquisition date** (the date the entity purchased the investment). A two-year government bond purchased when it has only two months remaining to maturity *qualifies* as a cash equivalent under IAS 7, because the entity acquired it with less than three months to run.

**ASC 230-10-20:** Three months from the **original maturity date** of the instrument to the entity. That same two-year government bond does *not* qualify under US GAAP — its original maturity was two years, regardless of when it was purchased.

<div class="callout example"><span class="callout-title">🧮 Worked Example</span>
A company purchases a 10-year Treasury bond with 10 weeks remaining until maturity.

**Under IAS 7:** The investment is acquired with &lt;3 months to maturity. It qualifies as a cash equivalent. Cash and cash equivalents on the statement of cash flows increase accordingly.

**Under ASC 230:** The original maturity of the instrument was 10 years. It does not qualify as a cash equivalent, regardless of the purchase timing. The cash paid appears as an Investing outflow; the proceeds at maturity appear as an Investing inflow.

Same transaction, different cash flow statement classification — solely due to the definition of the measurement date.
</div>

### Bank Overdrafts: Netting vs. Financing

**IAS 7.9** contains one of the most consequential IFRS-only provisions: bank overdrafts that are **(a) repayable on demand** and **(b) form an integral part of an entity's cash management** may be included as components of cash and cash equivalents — shown as a reduction of the cash and cash equivalents balance in the statement of cash flows. The hallmark of such arrangements is that the bank account balance regularly fluctuates between positive and overdrawn. If an account is consistently overdrawn, it is more likely financing.

Note: even when classified as cash equivalents in the SCF, overdrafts are still reported as financial liabilities on the statement of financial position. The netting only applies in the cash flow statement.

**ASC 230:** Bank overdrafts are categorically excluded from cash and cash equivalents. They are classified as short-term financing liabilities, and changes in their balance appear in Financing activities.

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span>
An IFRS company with a €50 million qualifying overdraft may present a net cash position of €(50)m — visibly negative operating liquidity — while a US GAAP company in the identical position would show zero cash plus a €50m Financing inflow. The operating cash flow section is unaffected, but opening/closing cash balances and Financing flows differ significantly. Always read the cash and cash equivalents reconciliation note.
</div>

---

## 4.5 Restricted Cash

### US GAAP: ASU 2016-18 Requires Inclusion

Before ASU 2016-18 (effective for public companies in fiscal years beginning after December 15, 2017), entities classified transfers between cash and restricted cash as operating, investing, or financing activities — creating diversity in practice. The FASB eliminated this diversity.

Under ASU 2016-18, the statement of cash flows must explain the change during the period in the **total of cash, cash equivalents, restricted cash, and restricted cash equivalents**. This means restricted amounts are bundled into the opening and closing cash balances shown at the bottom of the statement, and transfers between unrestricted and restricted cash do not appear as operating, investing, or financing activities at all. A separate reconciliation between the cash flow statement totals and the balance sheet cash line items is required — either on the face of the statement or in the notes.

### IFRS: No Specific Standard — Exclusion by Default

IAS 7 contains no equivalent to ASU 2016-18. The general principle is that cash and cash equivalents must be "available for use" — restricted amounts that cannot be applied to meeting short-term cash commitments fail this test and are excluded from cash equivalents. IAS 7.48 requires disclosure if any significant cash and cash equivalent balances held by the entity are unavailable for use by the group (e.g., restricted balances of subsidiaries operating in countries with exchange controls).

The practical result is the opposite of US GAAP: IFRS cash flows look cleaner (restricted amounts hidden in investing or financing activities as they move in and out of restriction), but can obscure the true liquidity position.

---

## 4.6 Direct vs. Indirect Method

Both IAS 7 and ASC 230 permit either the **direct method** (showing major classes of gross operating cash receipts and payments explicitly) or the **indirect method** (starting from a profit figure and adjusting for non-cash items and working capital movements).

In practice, the vast majority of entities use the indirect method globally. However, the two standards treat it differently in important ways.

### IAS 7 Encourages Direct; US GAAP Has No Preference

**IAS 7.19** explicitly states that "entities are encouraged to report cash flows from operating activities using the direct method." The rationale is that the direct method provides information useful for estimating future cash flows that the indirect method cannot — principally, the gross cash collections from customers and gross payments to suppliers and employees.

**ASC 230** contains no equivalent encouragement. The indirect method dominates US practice, partly because ASC 230 historically made the direct method less attractive by *also* requiring an indirect-method reconciliation as a supplemental disclosure (effectively requiring twice the work).

### Different Starting Points Under Indirect Method

Under current **IAS 7**, entities using the indirect method may start the reconciliation from various profit figures: profit or loss after tax, profit or loss before tax, or operating profit. This flexibility contributes to non-comparability between IFRS entities.

Under **ASC 230**, the starting point is always **net income** (profit after tax and after all items).

### Disclosure Requirements Under Direct Method

Under **IAS 7**: if the direct method is used, entities must disclose a reconciliation of the operating cash flows to profit or loss (the indirect approach) — either on the face of the statement or as a note. So direct-method IFRS reporters carry an additional disclosure burden.

Under **ASC 230**: if the direct method is used, entities must separately disclose interest paid and income taxes paid (as supplemental information, ASC 230-10-50-2). The indirect reconciliation is also required in the notes (ASC 230-10-45-29), which historically discouraged direct-method adoption in the US.

<div class="callout tip"><span class="callout-title">💡 Tip</span>
If a company switches between direct and indirect methods, or changes its classification policy for interest or dividends under IAS 7, this requires retrospective restatement and clear disclosure. Inconsistent application is a red flag when analyzing historical cash flow trends.
</div>

---

## 4.7 Recent Amendments: A Framework in Motion

### FASB ASU 2016-15 — Classification of Certain Cash Receipts and Payments

Issued August 2016 (effective for public companies FY beginning after December 15, 2017), ASU 2016-15 addressed eight items where diversity in practice had produced restatements and inconsistent reporting. Key clarifications under ASC 230:

1. **Debt prepayment / extinguishment costs** → **Financing activities** (including premiums and third-party fees)
2. **Zero-coupon bond settlement** → **Bifurcated**: accreted interest portion → Operating; original proceeds portion → Financing
3. **Contingent consideration post-acquisition** → Within 3 months of acquisition: Investing; Beyond 3 months (up to recognized amount): Financing; Excess of recognized amount: Operating
4. **Insurance claim proceeds** → Nature-based: inventory/business interruption losses → Operating; PP&amp;E losses → Investing
5. **Corporate-owned life insurance (COLI) proceeds** → **Investing activities**
6. **Equity method investee distributions** → Policy choice: cumulative-earnings approach (return on investment → Operating) or nature-of-distribution approach (based on the investee's activities)
7. **Beneficial interest in securitization transactions** → Disclosed as a non-cash activity; subsequent cash collections → Investing
8. **Mixed / bifurcated cash flows** → Apply predominance principle: classify by the activity that generates the predominant amount

IAS 7 has no equivalent to most of these specific rules, relying on principles-based judgment. The divergence in practice between IFRS and US GAAP for these items is therefore likely to persist.

### FASB ASU 2016-18 — Restricted Cash (Covered in Section 4.5 above)
Effective for public entities: fiscal years beginning after December 15, 2017.

### IAS 7 / IFRS 7 Amendment — Supplier Finance Arrangements (Effective 1 January 2024)

In May 2023, the IASB issued amendments to both IAS 7 and IFRS 7 requiring enhanced transparency around **supplier finance arrangements** (also known as supply chain finance, reverse factoring, or trade payables finance). These were prompted by investor concerns that such programs — where a finance provider pays suppliers early and the company repays the provider on extended terms — could obscure the true level of financing and liquidity risk.

The amendments require disclosure of:
- Terms and conditions of all supplier finance arrangements
- The carrying amounts of financial liabilities that are the subject of such arrangements, at period-end
- **The carrying amounts for which suppliers have already received early payment from the finance provider** (the most novel requirement — showing how much of the balance has already left the supply chain)
- Ranges of payment due dates for both the supplier finance liabilities and comparable payables outside the arrangements
- Type and effect of non-cash changes in the carrying amounts during the period

**Important limitation:** The amendment is disclosure-only. It does not change how the related liabilities or cash flows are classified or presented. No prior-year comparative is required in the first application year.

### FASB ASU 2022-04 — Supplier Finance Programs (US GAAP Parallel)

The FASB's parallel response, issued September 29, 2022, requires buyers in supplier finance programs to disclose:
- **Key terms**, including payment terms and security/guarantees
- **Outstanding confirmed amounts** at each period-end and balance sheet line item location
- An annual **rollforward**: beginning balance → amounts added → amounts settled → ending balance
- **Interim disclosures** of outstanding confirmed amounts each period

Effective for fiscal years beginning after December 15, 2022 (general disclosures); the rollforward is effective for fiscal years beginning after December 15, 2023. Retrospective application (except for the rollforward, which is prospective).

**IAS 7 vs. ASU 2022-04 comparison:** The IFRS amendment goes further in requiring disclosure of amounts already paid by the finance provider (illuminating the true off-balance-sheet exposure). The US GAAP standard goes further on the mandatory rollforward, which IFRS does not require. Both are disclosure-only; neither changes classification.

### IFRS 18 — Consequential Amendments to IAS 7 (Effective 1 January 2027)

The most significant change on the horizon is not an amendment to IAS 7, but a consequence of the new **IFRS 18 Presentation and Disclosure in Financial Statements** (effective annual and interim periods beginning on or after 1 January 2027, with retrospective restatement of comparatives).

IFRS 18 removes the current accounting policy choices in IAS 7.31–34 for most entities and replaces them with mandatory classifications:

**For entities without Specified Main Business Activities (most non-financial companies):**
- Interest paid → **Financing** (no longer optionally Operating)
- Interest received → **Investing** (no longer optionally Operating)
- Dividends paid → **Financing** (no longer optionally Operating)
- Dividends received → **Investing** (no longer optionally Operating)

**For entities with Specified Main Business Activities (financial institutions, investment entities):**
- Classification follows how the related income or expense is categorized in the statement of profit or loss. Banks whose interest income appears in operating income will continue to show interest received as Operating.

IFRS 18 also requires that the **indirect method starts from "operating profit or loss"** as defined in the new income statement structure, rather than from net income or pre-tax profit. This changes the reconciliation significantly for companies that currently use net income as the starting point.

<div class="callout warn"><span class="callout-title">⚠️ Pitfall</span>
Many IFRS-reporting companies currently classify interest received as Operating. Under IFRS 18, this moves to Investing for non-financial entities — potentially reducing reported operating cash flow significantly. Analysts building DCF models or credit metrics on historical IFRS operating cash flows must restate these figures when IFRS 18 takes effect. Look for early adopters and pro-forma disclosures from 2025/2026 onward.
</div>

---

## 4.8 Post-IFRS 18: Will the Gap Close?

Even after IFRS 18 takes effect in 2027, meaningful differences between IFRS and US GAAP will remain:

| Item | IFRS (post-IFRS 18) | US GAAP (ASC 230) |
|---|---|---|
| Interest paid | Financing (non-financial entities) | Operating |
| Interest received | Investing (non-financial entities) | Operating |
| Dividends paid | Financing | Financing ✓ |
| Dividends received | Investing (non-financial entities) | Operating |
| Bank overdrafts | May still be included in cash equivalents | Still excluded |
| Restricted cash | Still excluded by default | Still included |
| Indirect starting point | Operating profit | Net income |

The gap narrows — particularly on dividends paid, where both frameworks now converge on Financing — but interest items remain classified differently. US GAAP will keep interest received in Operating; IFRS will require it in Investing. This single item can move hundreds of millions of dollars between sections for capital-intensive or cash-rich companies.

---

<div class="callout key"><span class="callout-title">🔑 Key Takeaways</span>
<ul>
<li><strong>IAS 7 grants accounting policy choices; ASC 230 is prescriptive.</strong> Under current IAS 7 (paras 31–34), entities choose — and must consistently apply and disclose — how they classify interest paid, interest received, dividends paid, and dividends received. Under ASC 230, these classifications are largely fixed. The result: two economically identical companies under different frameworks can report materially different operating cash flows.</li>
<li><strong>Bank overdrafts and restricted cash run in opposite directions.</strong> IFRS can net qualifying overdrafts into cash equivalents and excludes restricted cash by default. US GAAP (post-ASU 2016-18) does the opposite: overdrafts are always Financing liabilities, while restricted cash is bundled into the opening/closing cash reconciliation. These differences materially affect apparent liquidity and must be understood when comparing cross-border peers.</li>
<li><strong>Both frameworks now require supplier finance / supply chain finance disclosures.</strong> IAS 7 / IFRS 7 amendment (effective 1 Jan 2024) and ASU 2022-04 (effective FY 2023) represent a convergent global response to "hidden leverage" in reverse factoring programs. Neither changes classification — both are disclosure-only. IFRS goes further on payment date comparisons and amounts already paid by the financier; US GAAP mandates a quantitative rollforward.</li>
<li><strong>IFRS 18 (effective 1 January 2027) is the largest change to cash flow classification in a generation.</strong> It removes all current IAS 7 policy choices for non-financial entities, mandating interest and dividends received in Investing and interest and dividends paid in Financing. This will reduce reported operating cash flow for many IFRS companies. The frameworks will converge on dividends paid (both Financing) but diverge on interest — US GAAP keeps interest received in Operating while IFRS moves it to Investing. Analysts and preparers must plan for restatement of multi-year cash flow comparisons.</li>
</ul>
</div>
