---
title: Monte Carlo Analysis
custom_edit_url: null
---

A Monte Carlo analysis allows you to answer questions such as **"What is the probability that I will  achieve my revenue target of $50 million?"**. 

A Monte Carlo analysis simply summarizes the resulting probability distribution of outputs when each of your inputs have been randomly sampled over a given range. 

## Default Monte Carlo Run at Load

- When you are setting up a Tactyc, during the input selection process, Tactyc had presented you a **Lower Bound and Upper Bound**
- Using this range, at first load, Tactyc computed a Monte Carlo simulation on your model over 500 iterations. Each input is sampled over a normal distribution over the range defined (Lower Bound to Upper Bound)

## Monte Carlo Outputs

**Probability Density Function and Histogram summarizing the results of each output**

![Monte Carlo](https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/mc.png)

**Key Metrics Summarizing Probabilities of Cases and Distribution Metrics**

![Configuration](https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/config.png)

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

![Metrics](https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/metrics.png)

- Tactyc then iterations, probability distribution types and associated paramters for each input
- Click **Run** to begin the simulation
- Once Tactyc has finished computing, it will automatically load the results in the output charts

## Adding Monte-Carlo to your Live Dashboard

You can also add your monte-carlo distribution on a [live dashboard](live-dashboard) by clicking the **...** on
your live dashboard and selecting the output for which you want to include.

![Live Monte-Carlo](https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/inline-mc.png)

## Monte-Carlo distributions

The Monte-Carlo page allows users to apply a number of distributions to their inputs. The current options are
**Fixed**, **Normal**, **Uniform**, **Triangular** and **Log-Normal**. To run a monte-carlo, at least one distribution has to
be non-fixed.

If you would like to request a new distribution, [contact us](mailto:help@tactyc.io).

### Fixed distribution

A **Fixed** distribution will keep the value constant for every scenario. If an input is text, this is the only
distribution available for monte-carlo.


#### When to use this distribution

Use this distribution when the value cannot change or you want the value to be fixed across all scenarios (e.g.
historical values)

### Normal distribution

A **Normal** (also known as gaussian or bell curve) distribution is one in which values are concentrated around the mean
and become exceedingly rare on either extremes. This distribution is naturally occruring in many natural phenomenon
(e.g. height distribution, measurement errors, IQ). Normal distribution is symmetrical, which means that values
less than the mean are equally as likely as those greater than the mean.

Approximately 68% of the data falls within one standard deviation of the mean (mean +/- 1 standard deviation)

Approximately 95% of the data falls within two standard deviation of the mean (mean +/- 2 standard deviation)

Approximately 99.7% of the data falls within three standard deviation of the mean (mean +/- 3 standard deviation)

![Normal Distribution](https://tactyc-assets.s3.us-west-1.amazonaws.com/documentation/monte-carlo/normal-distribution.png)

#### When to use this distribution

Use this distribution when an input can be above or below a certain value but outliers far away from the expected value
are exceedingly rare (e.g. population, market growth rate)

### Uniform distribution

A **Uniform** distribution is one in which all values within a range are equally as likely all others. For instance,
a uniform distribution between 0 to 10 will result in 10% of the values between 0 and 1.

#### When to use this distribution

Use this distribution when an input is truly random and any value is equally as likely as any other value (e.g. expected
value of a roll of the dice).

### Triangular distribution

A **Triangular** distribution is one in which inputs will be capped at a min and max value and probabilities will be
linearly less likely as they approach the min and max values.

![Triangular Distribution](https://tactyc-assets.s3.us-west-1.amazonaws.com/documentation/monte-carlo/triangular-distribution.png)

#### When to use this distribution

Use this distribution if your input in uncertain but has a natural min or max value (e.g. number of employees, cost of
capital)

### Log-Normal distribution

Similar to the Normal distribution, the **Log-Normal** distribution has values that are increasingly rare as you move
away from the mean. However, log-normal distribution exhibits a "fat" right-hand tail where values greater than
the mean are more likely.

![Log-Normal Distribution](https://tactyc-assets.s3.us-west-1.amazonaws.com/documentation/monte-carlo/log-normal-distribution.png)

#### When to use this distribution

Use this distribution where higher values are more likely than lower values and extremely high values are possible
(e.g. time spent using a product, revenue)

