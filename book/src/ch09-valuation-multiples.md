# 9. Which Cash-Flow Multiple, When?

Chapter 7 gave you the rigorous way to value a company — a discounted cash flow model built from the
ground up. But analysts and investors reach for something faster a hundred times a day: a **price
multiple**. A multiple is a shortcut that compares what you *pay* (price) to what you *get* (profit or
cash). The catch is that no single multiple works on every business — and using the wrong one is how
people conclude that Amazon was "always too expensive" or that a bank is "cheap" when it isn't. This
chapter is a field guide to picking the right one.

<div class="callout tip">
<span class="callout-title">💡 The one-sentence idea</span>
A multiple answers "how many years of today's profit am I paying for?" The whole skill is choosing the profit measure — earnings, free cash flow, operating cash flow, EBITDA — that most honestly reflects the business in front of you.
</div>

## 9.1 What a price multiple actually says

A price-to-earnings (P/E) ratio of 20 means you are paying **20 times** one year of profit — loosely, 20 years to earn your money back at today's earnings (ignoring growth). The higher the multiple, the more you're paying per dollar of profit, and the more future growth you're counting on.

<div class="formula">P/E = Price per share ÷ Earnings per share = Market cap ÷ Net income</div>
<div class="formula">P/FCF = Market cap ÷ Free cash flow      ·      P/OCF = Market cap ÷ Operating cash flow</div>
<div class="formula">EV/EBITDA = Enterprise value ÷ EBITDA   (EV = market cap + net debt; see Chapter 7)</div>

Every one of these is the same idea — price over a measure of profit. The art is that **"profit" means different things for different businesses**, and the denominator you choose has to match reality.

## 9.2 The multiple toolkit

The table below is the heart of this chapter: which measure of profit to trust, by business type. (The reasoning behind each row follows.)

| Multiple | What's in the denominator | Best used on | Weak / misleading on | Example fits |
|---|---|---|---|---|
| **P/E** | Net income (earnings) | **Banks, insurers, financials**; stable maturing businesses | Heavy non-cash charges; volatile one-offs; growth firms | JPMorgan, Visa |
| **P/FCF** | Free cash flow (OCF − CapEx) | **Mature, asset-light** firms returning cash | Heavy *growth* CapEx; financials | Adobe, Constellation Software, Coca-Cola |
| **P/OCF** | Operating cash flow (before CapEx) | **Growth firms** investing heavily in CapEx | Hides real sustaining CapEx (railroads, utilities) | Amazon, Google |
| **P/OI** | Operating income | Real estate & firms whose net income swings on fair-value gains | Ignores tax & financing costs | MainStreet Equity |
| **EV/EBITDA** | EBITDA (earnings before interest, tax, D&A) | **High-depreciation** utilities, railroads, telecoms | Treated as "profit" — it isn't; ignores CapEx & interest | Utilities, railroads |
| **P/S** | Revenue | *Almost never on its own* | Says nothing about profitability | — |

### Why earnings (P/E) for banks and financials

A bank's "cash flow" lurches by enormous amounts as deposits and loans flow in and out — its operating and free cash flow can swing by hundreds of billions year to year and tell you nothing. For financials, **net income is the steadiest, most representative profit measure**, so P/E (and book-value multiples) win. This is the same reason Chapter 6 warned that banks don't fit the normal cash-flow framework.

### Why free cash flow (P/FCF) for mature, asset-light firms

For a business that isn't pouring money into growth, **free cash flow is the truest profit** — it's what's actually left for owners after the spending needed to keep the lights on. A software roll-up like Constellation Software is a clean case: large non-cash amortization from acquisitions depresses its net income, so P/E makes it look pricier than it is, while P/FCF reflects the real, steady cash it throws off.

### Why operating cash flow (P/OCF) for heavy-growth firms

When a company deliberately spends almost everything on growth CapEx, its free cash flow and earnings can be near zero by *choice* — Amazon for years. P/E or P/FCF then makes a great business look absurdly expensive. **Operating cash flow shows the earning power of the business before the growth spending.**

<div class="callout warn">
<span class="callout-title">⚠️ Pitfall — OCF and EBITDA are not "profit"</span>
Operating cash flow ignores the real, recurring CapEx a business needs just to <em>sustain</em> itself; EBITDA ignores both that CapEx and interest. For a railroad or a utility, sustaining CapEx is enormous, so OCF and EBITDA can sit far above the company's true profit. Use them to compare a firm to its <em>own history</em>, not to pretend the business is more profitable than it is.
</div>

## 9.3 Choosing in 20 seconds

<pre class="mermaid">
flowchart TD
  A[Which multiple?] --> B{Is it a bank,<br/>insurer, or lender?}
  B -- Yes --> PE[Use P/E<br/>cash flow is distorted]
  B -- No --> C{Investing heavily<br/>in growth CapEx?}
  C -- Yes --> POCF[Use P/OCF<br/>FCF is near zero by choice]
  C -- No --> D{Big non-cash<br/>depreciation/amortization?}
  D -- Yes --> EV[Use EV/EBITDA or P/FCF<br/>vs the firm's own history]
  D -- No --> PFCF[Use P/FCF<br/>the cleanest owner profit]
</pre>

## 9.4 Two professional habits

**1. When a company reports its *own* profit metric, audit it.** Some firms publish "adjusted EBITDA," funds from operations (FFO, common in REITs), or cash available for distribution (CAFD). Open the filing and read exactly what was added back and removed. If a cannabis company's "adjusted EBITDA" quietly strips out real, recurring costs, ignore it. If a well-run REIT's FFO genuinely reflects its economics, prefer it. The skill from Chapter 5 — *trace every number back to cash* — applies directly.

**2. Compare a multiple to the same company's history, not just to peers.** A utility on 9× EV/EBITDA might be cheap or dear depending on whether it has traded at 7× or 12× over the past decade. The most useful multiple is often the one that has been the *most consistent* for that specific business.

<div class="callout example">
<span class="callout-title">🧮 Worked Example — same company, three multiples, three stories</span>
Suppose "Acquirer Co." reports Net income $300M, Operating cash flow $900M, CapEx $50M (so FCF = $850M), and trades at a $17B market cap.
<ul>
<li><strong>P/E</strong> = 17,000 ÷ 300 = <strong>57×</strong> → looks wildly expensive.</li>
<li><strong>P/FCF</strong> = 17,000 ÷ 850 = <strong>20×</strong> → reasonable for a steady compounder.</li>
</ul>
The $600M gap between net income and cash flow is non-cash amortization from acquisitions. Judging this business on P/E alone would make you wrongly reject it; P/FCF tells the truer story. <em>Always check why earnings and cash flow disagree (Chapter 3).</em>
</div>

## 9.5 Multiples vs. the DCF

A multiple is a *compressed* DCF: it bakes growth, risk, and reinvestment into a single number. That makes it fast and great for sanity-checks and peer comparison — but it hides its assumptions. The discounted cash flow model from **Chapter 7** makes those assumptions explicit (growth rate, WACC, terminal value). Use multiples to screen and to cross-check; use a DCF when the decision is big enough to demand showing your work. The best analysts run both and worry when they disagree.

<div class="callout key">
<span class="callout-title">🔑 Key Takeaways</span>
<ul>
<li><strong>A multiple is a price tag on profit — pick the profit measure that fits the business.</strong> There is no one-size-fits-all ratio.</li>
<li><strong>P/E for financials; P/FCF for mature asset-light firms; P/OCF for heavy-growth investors; EV/EBITDA for high-depreciation utilities.</strong> P/S almost never stands alone.</li>
<li><strong>OCF and EBITDA are not true profit</strong> — they ignore sustaining CapEx (and, for EBITDA, interest and tax). Treat them as comparison tools, not profit.</li>
<li><strong>Audit company-defined metrics</strong> (adjusted EBITDA, FFO, CAFD) and compare multiples to a firm's own history. A multiple is only as honest as the cash behind it — which is what Chapters 1–8 taught you to verify.</li>
</ul>
</div>
