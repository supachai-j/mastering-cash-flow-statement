# Introduction: Why Cash Is King

> *"Revenue is vanity. Profit is sanity. But cash is reality."*

A company can be wildly profitable on paper and still collapse. It happens more often than most people think, and it always happens the same way: the income statement looks fine, right up until the moment there is no cash to make payroll, pay a supplier, or service a loan. Profit is an *accounting opinion* shaped by judgment and timing. Cash is a *fact* — it is either in the account or it is not.

This book is about learning to read, build, interrogate, and use the one financial statement built entirely on that fact: the **statement of cash flows**.

## The trap of profit

Under accrual accounting — the basis of essentially all modern financial reporting — revenue is recognized when it is *earned*, not when cash arrives, and expenses are matched to that revenue, not to when cash leaves. This is the right way to measure economic performance over a period. But it opens a gap between **reported profit** and **cash in the bank**, and that gap is where companies get into trouble.

Consider the classic failure mode of a fast-growing business:

<div class="callout example">
<span class="callout-title">🧮 The "growing broke" trap</span>
A distributor doubles its sales every quarter. Each sale is profitable. But customers pay in 90 days, while the distributor must pay suppliers in 30 and buy ever-larger amounts of inventory to feed the growth. On the income statement: rising revenue, healthy profit. In the bank account: a widening hole, because cash goes out (inventory, suppliers) long before it comes back (customer payments). The faster it grows, the faster it runs out of cash. Profitable — and insolvent.
</div>

The income statement cannot warn you about this. The cash flow statement screams it on the first page: operating cash flow deeply negative even as net income is positive. **Profit tells you whether the business model works in theory; cash flow tells you whether the business survives in practice.**

## Where it sits among the three statements

Financial reporting rests on three primary statements, and they are not independent — they *articulate*, each one constraining the others:

| Statement | Question it answers | Basis |
|-----------|--------------------|-------|
| **Income Statement** | Was the company *profitable* this period? | Accrual |
| **Balance Sheet** | What does it *own and owe* at a point in time? | Accrual (snapshot) |
| **Cash Flow Statement** | Where did the *cash* come from and go? | Cash |

The cash flow statement is the bridge between the other two. It begins with profit (from the income statement) and, by unwinding every non-cash and timing effect captured on the balance sheet, arrives at the change in cash — which must exactly equal the difference between this year's and last year's cash on the balance sheet. That tie-out is the discipline that makes cash flow so hard to fake.

<pre class="mermaid">
flowchart LR
  IS["Income Statement<br/>Net Income"] --> CFS["Cash Flow Statement<br/>reconciles profit to cash"]
  BS1["Balance Sheet<br/>(start of year)"] --> CFS
  CFS --> BS2["Balance Sheet<br/>(end of year)"]
  CFS -. "Δ in working capital,<br/>non-cash items" .- BS1
</pre>

## The three questions the statement answers

Every cash flow statement splits cash movements into three activities, and reading them together tells a story:

- **Operating (CFO):** Does the core business *generate* cash, or *consume* it? This is the engine.
- **Investing (CFI):** Is the company *building* for the future (buying assets) or *harvesting* the past (selling them)?
- **Financing (CFF):** Is it *raising* outside money (debt, equity) or *returning* it (repayments, dividends, buybacks)?

A mature, healthy company typically shows **positive** operating cash flow funding **negative** investing (it reinvests) and **negative** financing (it pays down debt and rewards shareholders). A young company often shows the opposite. Neither is "good" or "bad" in isolation — context is everything, and Chapter 3 turns these sign patterns into a diagnostic tool.

## What you will be able to do

By the end of this book you will be able to:

1. **Map** any cash flow statement into its three sections and explain the direct and indirect methods *(Chapter 1)*.
2. **Build** a complete cash flow statement from an income statement and two balance sheets *(Chapter 2)*.
3. **Analyze** it — compute free cash flow and cash-flow ratios, and read the eight cash-flow patterns *(Chapter 3)*.
4. **Classify** items correctly under both IFRS (IAS 7) and US GAAP (ASC 230) *(Chapter 4)*.
5. **Detect** inflated operating cash flow and classification games before they cost you *(Chapter 5)*.
6. **Forecast** cash across industries, from a 13-week liquidity model to a long-range plan *(Chapter 6)*.
7. **Value** a company from its cash flows with a defensible DCF *(Chapter 7)*.

<div class="callout key">
<span class="callout-title">🔑 Key Takeaways</span>
<ul>
<li>Accrual <strong>profit</strong> and <strong>cash</strong> are different things; the gap between them is where businesses fail and where analysts find the truth.</li>
<li>The cash flow statement is the hardest statement to manipulate because it must tie out to the change in the balance-sheet cash balance.</li>
<li>Its three sections — Operating, Investing, Financing — read together tell you whether a company's engine works, where it is in its life cycle, and how it is funded.</li>
<li>Master this statement and you can do what the income statement alone never lets you do: tell whether a business will still be standing next year.</li>
</ul>
</div>
