---
title: Frequently Asked Questions
---

**What is a Tactyc?**

Tactyc is an interactive dashboard that allows control and analysis of an Excel model. We call this dashboard and all its accompanying analysis.. simply a Tactyc.

**My Excel model is not in *.xls format, how can I have Tactyc process it?**

Open the Excel file in Excel 2007 or higher, and then save it again as *.xlsx. Tactyc will now be able to process it

**My Excel model is large than 5MB. How can I have Tactyc process it?**

Take a look at if your worksheets have large unused ranges (empty rows or empty columns beyond the last data cell). These can frequently bloat up a spreadsheet. [Here's how to fix this](suitable-models)

**My model was not calculated successfully and had errors. What does this mean?**

Errors during calculation means the Excel file has features or errors in it that are beyond the parameters of what Tactyc can process today. You can click on **View Errors** to see further context. Errors can be:

- **Formula in cells contain errors**: If the Excel spreadsheet at the time of load already contains formulas that are in error state (i.e. #REF!, #N/A, #DIV/0 etc.), Tactyc will stop the calculation process. To be clear, if any error codes occur *during the calculation process as input values are flexed*, Tactyc will successfully manage those errors, but a model in its default load state should not have any error codes.
- **Tactyc is unable to process the formula in this cell**. This can happen if this is a non-standard formula or an Excel feature (such as TABLE or advanced arrays) we haven't supported yet. Try replacing this formula and retrying.
- **Time out:** Tactyc assigns approximately 15 minutes of calculation time for every model. If your model calculation process exceeds this limit, Tactyc will stop the calculation process as this is usually a sign that the model has not yet been optimized for Tactyc - or contains logic or dependency trees that are beyond Tactyc's limits (for now!)

**I received an error that says "Sorry Tactyc is unable to render this tab". What does this mean?**

This error can occur if

- Your Excel file is password protected. To fix this, remove the password protection from the file
- The worksheet / tab has excess unused or empty cells with formatting. [Here's how to fix this](suitable-models#technical-limitations)

**My model was calculated successfully but with Warnings. What does this mean?**

Warnings are not critical but meant to flag for the user issues Tactyc may have come upon during the calculation process. You can click on **View Warnings** to see further context. Warnings can be:

- **Formula not Supported:** This means the model uses an Excel function that Tactyc does not currently support. This may be OK if the cell / function containing that formula is not critical for calculation of the outputs. For e.g. Tactyc does not yet support the TEXT function, as TEXT functions are usually used to format texts inside a cell, but don't usually have a bearing on calculation of numerical outputs
- **Use of Unbounded Range**: Tactyc has encountered formulas that refer to unbounded ranges, for .e.g =SUM(A:A). While Tactyc can work with these, excessive use of such formulas can slow down processing and can make the underlying model prone to errors
