---
title: Input Contribution
---

**The input contribution page summarizes which inputs matter the most for your outputs.**

## Overall Methodology

Tactyc determines the relative importance of each input using a "variance-based sensitivity analysis" as follows:

1. Let's say you have defined 6 inputs and each input has a total of 6 steps (or increments) within the lower and upper bound. This means Tactyc would have calculated a total of 6^5 = 15,625 combinations. This is the **solution space** of the output variables
2. Tactyc will then ****compute the **average value of your outputs** at each input step across the entire solution space 
3. Tactyc will then calculate the **average % change in output values** as each input is changed from one step to another. 
4. This allows Tactyc to determine the **average % change in output value for a 1% change in input value**
5. Tactyc can now rank and determine the most influential inputs based on their respective 1% impacts on output values

Each of the steps above is summarized in the input contribution page for further analysis

## Usage

First, set an output variable to analyze from the drop down at the top of the page

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0306792-f1a5-4153-b7f9-988e9e24af9b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0306792-f1a5-4153-b7f9-988e9e24af9b/Untitled.png)

**Module 1** summarizes the results of Step 5 above are summarized up front as follows. This is the relative ranking of all inputs based on their contribution % to the selected output value's variance

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a57aa31a-4135-441a-a1ea-9804dcc4ed9f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a57aa31a-4135-441a-a1ea-9804dcc4ed9f/Untitled.png)

**Module 2** summarizes the results of Step 4 above i.e. the impact on output value for a **1%** **increase in input values**. Tactyc will also present inputs based on whether they are **positively or negatively correlated** with the selected output variable

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6e21578-ec22-4f8d-9f1b-c74b7744846a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6e21578-ec22-4f8d-9f1b-c74b7744846a/Untitled.png)

Finally **Module 3** summarizes the result from **Step 3 above** i.e. the average % change in output values as each input value is changed. Tactyc will try to identify and summarize the trends in the output variable as input values are stepped through over their defined range to find inflection points or peaks and troughs.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddbd8ed8-84a6-4302-a5e1-76ada3ba9f9f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddbd8ed8-84a6-4302-a5e1-76ada3ba9f9f/Untitled.png)