---
title: Monte Carlo Analysis
---

A Monte Carlo analysis allows you to answer questions such as **"What is the probability that I will  achieve my revenue target of $50 million?"**. 

A Monte Carlo analysis simply summarizes the resulting probability distribution of outputs when each of your inputs have been randomly sampled over a given range. 

## Default Monte Carlo Run at Load

- When you are setting up a Tactyc, during the input selection process, Tactyc had presented you a **Lower Bound and Upper Bound**
- Using this range, at first load, Tactyc computed a Monte Carlo simulation on your model over 500 iterations. Each input is sampled over a normal distribution over the range defined (Lower Bound to Upper Bound)

## Monte Carlo Outputs

**Probability Density Function and Histogram summarizing the results of each output**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36d88818-d9c3-4095-95d5-5058ddeb06a6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36d88818-d9c3-4095-95d5-5058ddeb06a6/Untitled.png)

**Key Metrics Summarizing Probabilities of Cases and Distribution Metrics**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/abd0f921-631a-4aa7-888a-cb8e13a537c0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/abd0f921-631a-4aa7-888a-cb8e13a537c0/Untitled.png)

## Custom Monte Carlo Simulation

Users can customize this Monte Carlo simulation to run their own simulations by selecting

- Number of iterations
- Probability distribution function to be applied to each input. The choices are:
    - Normal
    - Uniform
    - Triangular
    - Lognormal
    - Fixed (no distribution)
- Any parameters associated with the probability distribution (for e.g. mean and standard deviation in the case of Normal Distribution)

## How to use Tactyc's Monte Carlo Configuration

- Open the Monte Carlo configuration panel by clicking on **Monte Carlo Parameters**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4627c39f-a255-48b7-8903-d22c2b3a2d77/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4627c39f-a255-48b7-8903-d22c2b3a2d77/Untitled.png)

- Tactyc then iterations, probability distribution types and associated paramters for each input
- Click **Run** to begin the simulation
- Once Tactyc has finished computing, it will automatically load the results in the output charts
