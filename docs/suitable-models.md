---
title: Suitable models
custom_edit_url: null
---

**While Tactyc can work with most Excel models - there are a few guidelines we recommend so your models are optimized for Tactyc and to avoid known issues and errors.**

**Here is what "optimized for Tactyc" means:**

- **Focused on core logic**: Tactyc's strength is its ability to sensitize a model, create the solution space for the model's outputs and derive insights for the user before the user has even asked for it.
    - **Our users get the most value from when they focus their models on just the core logic of an analysis and leave the sensitivity and stress-testing to Tactyc.**
    - Models that are weighed down by their own sensitivity analysis or data tables may result in slower performance of Tactyc's calculation process and confusion on the part of the user when it comes to identifying which outputs they want to sensitize.
- **Logic-focused instead of data-focused**: Tactyc is built for spreadsheets that are primarily formula-driven - not data driven. If most of your Excel file contains only raw hard-coded data, Tactyc will not be able to sensitize it as there may be no input-output relationship to work with.
- **Independent assumptions**: A good Tactyc model is one that has been distilled down to core independent assumptions. By this we mean, when a user changes one assumption, they don't necessarily *have* to to change another assumption in order to operate the model.
- **Simple formulas**: The simpler the formula, the easier it is to debug and understand the logic.
- **Built with the end in mind**: For inputs to be changed i.e. the model builder has thought about some intuitive boundary and edge cases already and has built that logic in their model. (i.e. *Market Capitalization* for a company cannot be negative so a formula computing market cap in an analysis should accommodate for this floor)

## **Technical Limitations**
**From a technical standpoint, the model needs to have the following specifications**
- File must be in *.xlsx or *.xlsm format (i.e Excel 2007 or above)
- File size must be less than 5MB (we are looking to increase this limit in the future)

## Other Limitations

- **Large Worksheets** Excel worksheets that are extremely large i.e. spanning more than 2000 rows or columns are difficult to render on the browser and may slow down performance. We recommend creating a separate control panel tab for assumptions (inputs) and a separate tab for key outputs that can be easily referenced during the input/output selection process in Tactyc
- **TODAY and NOW:** Formulas with TODAY() or NOW() are treated as hard-codes with their values set **at the time of model upload**. If a model needs to be updated for the latest date, users need to re-upload an updated version of the model
- **External Links:** Formulas with external links will be treated as hardcodes. If your model has cells that combine external links *with a computation* such as "=100*'[OTHERFILE.xlsx]Sheet1!A1', please separate the external links into an entirely new row and run the computation in a new row or cell (i.e. the 100x part in this example). This will make sure the external linked cells are correctly treated as hardcodes.

## **Excel Features Not Yet Supported**

- Password-protected models
- Spill over array formulas (Tactyc assumes implicit intersection by default). An exception to this is the TRANSPOSE formula that is fully supported.
- Dynamic arrays or XLOOKUP function
- Explicit intersection for array formulas
- Categorical output variables i.e. outputs must be numbers and not text
- All formulas must be valid formulas and not have errors (such as #N/A, #VALUE, #REF etc.) in them already
- Structured References
- R1C1 References
- Pivot Tables and Table formulas
- Very protected hidden sheets
- Wildcards usage in text identification (Tactyc supports this to a limited extent only)
- All cells linked to an external file will be treated as hardcodes (similar to Excel, which does the same unless the linked file is also open)
- CELL formula with FILENAME argument is not supported
- Formulas that depend on hidden rows for e.g. SUBTOTAL
- Excessive usage of unbounded ranges i.e. =SUM(A:A), This can slowdown Tactyc's processing
- Named ranges that are not continuous i.e. a named range that references multiple other ranges
- Tactyc is built with a focus on quantitative analysis and cells with numbers. Therefore TEXT formulas are generally ignored in calculation as they are typically not used as part of a calculation process