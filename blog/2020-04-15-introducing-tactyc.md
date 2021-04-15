---
slug: introducing-tactyc
title: Introducing Tactyc
author: Anubhav
author_title: Founder and CEO of Tactyc
author_url: https://github.com/tactycHQ
author_image_url: https://du0bb4gb9kg21.cloudfront.net/documentation/blog/anubhav.jpeg?s=400&v=4
tags: [excel, tactyc]
---



> The traditional spreadsheet format was built with a singular purpose — to calculate. But in an analysis-driven world clamoring for insights and “what if scenarios”, we need more than just a calculator.
We need a decision-making platform.

---

Lets get one thing out of the way — I love Excel.

Its usually the shortest path to getting complex analytical logic onto paper. Its simple yet powerful enough. The fact that its been around for more than 3 decades and is used by 800 million users as the primary enterprise tool is no surprise. Most finance professionals even say you’d have to pry Excel out of their cold dead hands

Yes, programmers and data scientists may look down upon Excel compared to Python or R, but that’s false equivalence at its best. Excel enables even the most basic of computer users to build a complex analysis without the hurdle of learning programming concepts and syntax.

As a former investment banker, I’ve spent more time than I care to admit with Excel. But as much as I admire the platform, I have also come to see its shortcomings and the archaic workflow it reinforces.

---

### Stranded by data visualization

The spreadsheet world sits close to the crowded data analytics universe. Tableau, Qlik, Microsoft’s own Power BI platform and many other data visualization platforms are trying to visualize the data analysis experience and extract insights without the user having to jump through building complicated pivot tables and filters in Excel. I view their end goal as simply “generate insights with predictive power from raw data”

In a big data world, this seems like a reasonable problem to tackle — consumers and enterprises are inundated with a flood of data around their business, and the ability to parse and extract insights from it is certainly a problem worth solving for. And Excel simply isn’t scalable enough for very large data processing.

But the fact that Excel is not just a dumb data repository often seems to be overlooked.

Companies store actual enterprise logic in these models. Entire business plans, growth strategies, valuation scenarios, negotiation tactics — these are all encoded in formulas that live within tiny Excel universes.

In the rush to visualize big data, the need to understand (and maybe even help explain) a model’s logic is often overlooked. A model is more than just data. The fact that most if not all of the above mentioned data visualization platforms can process an Excel spreadsheet but cannot understand the formulas and logic within that same spreadsheet highlights this divide.

The end result is that raw unstructured data today enjoys the benefits of data visualization, insight generation and predictive analytics - but ironically, modelled data with logic is still left stranded in the traditional spreadsheet world of the pre-Internet era.

---

### The shortcomings of the traditional spreadsheet format

While Excel is a great model building tool, its not the ideal model consumption tool. That’s understandable as Excel’s primary use case is to be a calculator and the ability to extract insights and engage with users is a distant priority.

If you’ve ever received an Excel model from someone, it usually takes a while to figure out which cells are assumptions vs. outputs or which hard-codes can be changed vs. which ones have no impact. After a journey of drilling into formulas, you’ve finally figured out what the inputs are. Now you start sensitizing these inputs - how do you keep track of output variables and their movements? Which is the most sensitive input? Well let’s build a data table to answer that you may say! OK, which other inputs are also influential in this model? I have more than 20 inputs, which ones should I sensitize this on?

Time to build more data tables.

All that to say, there is usually time spent in learning how a model works before you can start using it. Great Excel wizards know this — and try to built their model in a user friendly way with a clear delineation between “Inputs” and “Outputs”. They have to build cases or scenarios to tie it all together. These techniques work but are not followed by everyone or standardized in any way. They may change within an industry, company or even inside a team. And the end result can sometimes be just as confusing as you muddle your way through an explosion of tabs trying to find blue colored hard-codes.

---

### Missing from the boardroom.

For a tool that is so instrumental in creating materials for a board meeting, Excel is conspicuously missing from the actual boardroom (or any other senior level meeting).

A model is usually distilled down to outputs, transferred into PowerPoint or another presentation tool, before being PDF’ed and printed along the way. Why is that?

> The power of Excel is in its ability to calculate, so why are we happy to part ways with it in a scenario where we need it the most i.e. when someone at a high-level meeting asks “What would happen if input X were increased by 10%?”

Unless you’ve got the spreadsheet discreetly open on the side, or that scenario previously already computed, the answer is usually “Let’s run that scenario and get back to you”.
And thus begins the iterative and inefficient cycle of changing assumptions and bringing new outputs to decision makers.

![Workflow](https://du0bb4gb9kg21.cloudfront.net/documentation/blog/introducing-tactyc/workflow.png)

---

### Wall of numbers

[Human eyes glaze over as they pore over row after row, column after column, and sheet after sheet of numbers and text](https://books.google.com/books?id=5wAWAiTFT7QC&pg=PA277&lpg=PA277&dq=spreadsheet+eyes+glaze+over+effect&source=bl&ots=sLXKl8E0YD&sig=ACfU3U0fO5B0HhmJPySbV_NbmeUTFHNbHA&hl=en&sa=X&ved=2ahUKEwiQ0Ombn_XpAhWK_J4KHcGlDCEQ6AEwCXoECAwQAQ#v=onepage&q=spreadsheet%20eyes%20glaze%20over%20effect&f=false).
The traditional spreadsheet format can simply be overwhelming if you haven’t built the model yourself and know the layout intimately. We’ve resorted to formatting hacks such as coloring hard-codes in blue or outputs in green but the viewer is still subject to the cognitive load of looking at a wall of numbers, constantly trying to triangulate their position inside a spreadsheet.

![Spreadsheet](https://du0bb4gb9kg21.cloudfront.net/documentation/blog/introducing-tactyc/spreadsheet.png)


It’s no wonder senior executives prefer to spend less time in Excel and limit themselves to static screenshots of the model when they need to make decisions …the spreadsheet experience is not a pleasant one and thus relegated to analysts or junior team members. Ironically this end up further reinforcing the iterative and inefficient workflow when an assumption needs to be changed.

### Exploring a solution

So what would this ideal model consumption platform geared towards decision-making look like? Here are a few of the attributes I think should exist:

1. Shortest path to decision making — i.e a platform focused on helping users make decisions from a model without subjecting them to the overhead of the traditional spreadsheet. This means removing the need for someone to understand the mechanics of how a model is built and instead take them directly to using the model and make decisions

2. A platform that can answer the “what if.. ” questions before they were even asked and break the iterative cycle enabling users to make smarter decisions faster

3. Its 2020 and we should be able to share and manipulate a model on the cloud without needing to fire up the PC — or worse, wait for someone else to update the model on their PC and send over a static PDF of it

4. Ideally do all of the above without subjecting users to the cognitive load of the “wall of numbers”. Instead engage with the user visually and capture their attention. Bring Excel into the boardroom.

Its worth noting, Excel is still the best model builder around, even if it may fall short in being an effective decision-making platform. So our ideal platform could build on top of Excel’s model building capability and augment Excel instead of removing Excel from the workflow entirely.

In a later post, I’ll detail how we are trying to solve the above problems at tactyc.io. We think it may look something like this to start off..

![Tactyc](https://du0bb4gb9kg21.cloudfront.net/documentation/blog/introducing-tactyc/tactyc.png)

In the meantime, I’d love to hear your thoughts on your own spreadsheet experience.
