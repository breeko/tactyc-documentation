---
title: Creating a Tactyc from Excel
custom_edit_url: null
---

**Note: Please make sure you are using Chrome or Safari on a desktop or laptop browser when using Tactyc.** 

Please also make sure you have reviewed the model guidelines specified [here](suitable-models)


<iframe width="675" height="380" src="https://tactyc-assets.s3-us-west-1.amazonaws.com/createVideo.mp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**A Tactyc dashboard is an interactive dashboard with inputs and outputs from your model. You can flex your inputs to see changes to your model outputs from the browser. It's important to understand what is an input and output before proceeding further.**

### What is an Output?

Outputs are metrics from your model that you want to track as inputs or assumptions are changed. For. e.g. in a valuation model these could be Share Price or Enterprise Value - or for an operating model, these could Revenue or EBITDA. These are typically ***calculated cells*.**

Each output is assigned a **category** (for e.g. Revenue or EBITDA), and if a category has multiple cells, each cell is also assigned a **label** (for e.g. Year 1, Year 2). All cells within the same category should have the same *units*. For example. all cells under a Net Profit category would be in some currency units.

**Outputs are shown in  charts in the center of the Live Dashboard**

![Live dashboard](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/outputs.png)

### What is an Input?

Inputs are typically ***hard-codes that are assumptions*** underlying a model. Tactyc will sensitize the input cell over a range to compute the entire solution space of outputs

Inputs are shown in a slider panel on the right of the Live Dashboard. Inputs can be grouped by specifying the **Group** when creating an input 

# Step 1:  **Upload the Excel file**

- Once logged into Tactyc, click on **New Tactyc**
- In the dialog that pops up, give your dashboard a name
- Click on **Upload Excel Model** and navigate to the file directory on your computer to select the Excel file.  Click **OK** once the file is selected.

    ![Upload](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/upload.png)

    - Ensure your Excel file meets Tactyc's specifications (click to expand)
- Tactyc will now start processing your file and open your file in your browser

# Step 2: Input / Output Selection Methods

The next step is to select inputs and outputs for Tactyc. There are 2 options: 

- **Option A:** [Select the inputs and outputs from the browser view of your spreadsheet](tactyc-from-excel#option-a-select-inputs--outputs-in-browser)
- **Option B:** [Include a Tactyc Configuration tab in your Excel model](tactyc-from-excel#option-b--tactyc-configuration-tab)  (recommended)

We recommend the second option as it is repeatable in case you make future changes to your model and will save you from having to reselect inputs/outputs if you make large changes to your model in the future

### Option A: Select inputs / outputs in browser

- Click on the sheet in the browser to select your output cells.
- Give these selected outputs a **Name** and click **OK**
    - If you want inputs to be grouped together, specify the Group. Inputs with the same group will be grouped together when presented to the user
- If your output had multiple cells, you will now be asked to assign **Labels** for these cells. Labels can be either **typed directly** into the Text Field for each cell, or if your spreadsheet already has text cells that are suitable labels, you can just **click those text cells.** Click **OK** to continue
- Repeat the above steps for all your output categories. To save you time on categories that have the same labels, make sure to use the **Copy Prior Labels** option.
- Once all your outputs have been defined, click on **Go to Inputs**

#### **Select Inputs**

- Click on the input cell in your sheet and give your input a name
- **Customize Input Range (if needed):** By default, Tactyc will calculate **5 steps** for each input between a lower bound (90% of the current value) and upper bound (110% of the current value in the model). Both the bounds and numbers of steps can be customized as per your requirements
- Repeat the above steps until all your required inputs have been defined. Tactyc allows a maximum of 6 inputs per dashboard.
- Click **Calculate Dashboard.** Tactyc will now start calculating the entire solution space. You will be automatically taken to your home screen while the model is being computed. Depending on the number of inputs, number of steps, your model's logic etc. this process could take up to a few minutes. Once completed, the Tactyc status will change from **Loading** to **Completed.**
- That's it! Click on **Completed** to open your Tactyc dashboard. Congrats on creating your first Tactyc!

### Option B:  Tactyc Configuration Tab

The Tactyc configuration tab is a worksheet that you can include in your model to make input/output selection easier. This worksheet is a "form" that you will fill in to define your inputs and outputs. When this form is completed, you can simply upload your model, and check the **This model has a Tactyc configuration tab** option. Tactyc will automatically read this tab and be able to calculate and create your dashboard from here on.

See a sample configuration tab here: 

[S&P500ValueNov1_TACTYC_v3.xlsx](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/S%26P500ValueNov1_TACTYC_v3.xlsx)

- **Step 1:** Download the Tactyc configuration tab ****and make sure to include it in your model (you can copy this tab into your Excel file). It may be easier to start off with the sample above so you can see how the *TACTYC* config tab was populated for that model as an example.

    [Tactyc Config Tab v5.xlsx](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/Tactyc+Config+Tab+v5.xlsx)

- **Step 2:**  Fill the information in the tab for inputs and outputs. You'll be defining names for each and linking to cells in your model. Instructions for filling this form are included in the file [(see an example of a filled out Tactyc Configuration Tab here)](https://tactyc-assets.s3-us-west-1.amazonaws.com/AppleAug20_config.xlsx)

![Config Tab](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/config-tab.png)

- **Step 3:**  You're set! Upload your model and make sure you click the **This model has a Tactyc configuration tab** option while uploading

![Config Tab Checkbox](https://du0bb4gb9kg21.cloudfront.net/documentation/tactyc-from-excel/config-tab-checkbox.png)

- Once uploaded, Tactyc will start analyzing the model. You will be automatically taken to your home screen while the model is being computed. Depending on the number of inputs, number of steps, your model's logic etc. this process could take up to a few minutes

    Once completed, the Tactyc status will change from **Analyzing** to **Completed.** That's it! Click on **Open** to open your Tactyc dashboard. Congrats on creating your first Tactyc!