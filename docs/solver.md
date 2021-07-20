---
title: Solver
custom_edit_url: null
---

Tactyc lets you run a solver on any output to solve for what inputs minimize, maximize or get an output to a given level. This is similar to Excel's solver, but with a simpler interface and better optimizations.

To access Solver, click the menu on any chart and select **Solver**

## Solver

![solve](https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solve.png)

This will bring up the Solver modal, where you can mimize, maximize or try to solve for a specific value

![solver-modal](https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-modal.png)

### Inputs 

The top part lets you select what inputs you want to flex and which you want to keep fixed. By default, Solver flexes all numeric inputs, but you can fix any input by selecting **Type** -> **Fixed**. Text inputs have to be fixed.

The **Guess** is the starting value of the input. Because Solver uses a stochastic process, you may want to guide some inputs to be around a certain level. Setting a reasonable Guess value can help you get a reasonable result. But you can always run the solver multiple times and adjust accordingly. The initial Guess values are based on the current inputs values set on your Tactyc.


### Output

The bottom section lets you select the output you're trying to solve for and what you're trying to optimize for. The options for **Optimize** are **Equal**, **Min** or **Max**. Note that min and max are not bound by anything, so if you have a linear model it may give you extreme input values.

The **Value** is the value you're trying to solve for when **Optimize** is set to **Equal**

To run Solver, click Solve. It may take up to a minute to run.

## Solver Results

![solver-modal-complete](https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-modal-complete.png)


### Inputs

Once complete, the top section will show you the inputs to get to your result in the **Solution** column.


### Output

You'll see whether is succeeded or not in the **Success** field. You'll also see a **Score** which tells you how far away you are from the optimal solution.

From here, you can set the values on your dashboard or save the solution as a case. If you choose one of these options, once you close the modal, you'll see your new output result.

![solver-complete](https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-complete.png)

