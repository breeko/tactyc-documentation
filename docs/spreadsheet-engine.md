---
title: Tactyc Spreadsheet Engine
---

**We've built the engine to compute spreadsheets on the cloud**

**Spreadsheet logic translated to cloud**

The Tactyc Spreadsheet Engine is a proprietary algorithm that enables complex models to be computed and managed on the cloud. Tactyc follows a similar methodology to Excel's calculation engine to compute cells. Each workbook is parsed and a resulting dependency graph is built for each cell. Every cell value change is then referred back to the dependency graph to query for updated cells. The formula in each cell is then computed to arrive at a final value for each cell. The computation algorithm is highly dependent on the types of formulas in the workbook and Tactyc employs a range of optimization processes in each step to reduce calculation times and enable fast computations.

![Diagram](https://du0bb4gb9kg21.cloudfront.net/documentation/spreadsheet-engine/diagram.png)

**Key Features**

- High-performance calculation engine with minimum dependencies
- [Built-in library of 300+ functions (and growing)](supported-functions)
- Volatile function support (e.g. OFFSET or INDIRECT)
- Iterative and circular models
- Absolute and relative dependencies
- Multiple worksheets
- Complex formulas such as 3D ranges or named ranges
- Automated user warnings for formulas that are unstable or prone to errors
- Convert spreadsheet formulas and values to JSON format

# **Build with Tactyc**

### **API access to the Tactyc Spreadsheet Engine enables anyone to create custom apps powered by spreadsheets**

![API](https://du0bb4gb9kg21.cloudfront.net/documentation/spreadsheet-engine/api.png)

**API engine enables users to:**

- Upload a workbook and create dashboards programmatically
- Change workbook values and run new calculations
- Run powerful multi-variate solver on models
- Leverage cloud computation for complex model logic

**Popular use-cases include:**

- **Embeddable Calculators:** create no-code web-based calculators for landing pages and customer websites
- **Programmatic Access:** Create, manage and share thousands of models with Tactyc visualizations in minutes
- **No-code apps powered by spreadsheets:** API gives you the power to create your own applications that are simply powered by spreadsheets and without a single line of code

# **API Features Highlights**

![API Features](https://du0bb4gb9kg21.cloudfront.net/documentation/spreadsheet-engine/api-features.png)

- **Access:** View and manage all models and associated dashboards
- **Create:** Upload a workbook to create a dashboard in seconds
- **Manage:** View inputs and outputs associated with each model
- **Calculate:** Set the value of inputs to calculate resulting output values
- **Solve:** Run multi-variate goal seek to solve for model assumptions for a specific target output goal
- **Work outside the dashboard context:** Upload, calculate, manage and other endpoints that provide computation services on spreadsheets without the creation of a dashboard

[Please refer to our API documentation for further details](/api)

# **Flexible Hosting Solutions**

### **Clients can use Tactyc's secure cloud for workbook computation or leverage our easy on-premise deployment solution to run the Tactyc Spreadsheet Engine within their firewalls**

**Use the Tactyc Cloud:**

- Powerful AWS T3 Servers that includes multi-core computation, S3 storage services and Postgres SQL database
- Tactyc manages user authorization and login process with secure API keys
- ISO 27001 compliant
- All Tactyc productions servers, networks and applications are monitored 24x7x365 by fully automated monitoring and alerting systems.

**On-premise hosting:**

- Easy Docker-based on-premise hosting solution enables client to install and run the Tactyc spreadsheet engine on their own servers
- Automated periodic maintenance and engine upgrades
- The engine stack is comprised of:
    - Computation server (Tactyc uses a AWS t2.medium instance on an EC2 instance) that exposes a Flask-based API
    - Postgres SQL database (Tactyc cloud uses an AWS Postgres SQL database)
    - Storage server for spreadsheet files and associated Tactyc binaries (Tactyc cloud used AWS S3)
    - Authentication server (Tactyc cloud used [auth0.com](https://auth0.com))
- For further details, please reach out at sales@tactyc.io to get detailed specifications

# FAQs

**What is the Tactyc Calculation Engine?**

The Tactyc Calculation Engine converts spreadsheets to code that can be run outside of Excel. It was built off thousands of real world examples and supports **circular functions** and over **300 of the most popular Excel formulas** with more being added every day. It powers our main Tactyc dashboard app today.

**What can I do with this API?**

The API enables programmatic access to the Tactyc Calculation Engine organized around REST. This allows you to **upload workbooks, extract data, run calculations** or access analytical tools such as **Solver** from anywhere.

You can use this to run analysis, automate Excel workflows and even build apps using your existing spreadsheets.

**What do you mean build apps from spreadsheets?**

With the API, any service that's connected to the internet can access the contents and logic of your spreadsheets.

The Tactyc dashboard app today is just one use case of many that’s possible with the spreadsheet engine. With the API, you can interact with spreadsheets in any form and build on top of it. Some examples are:

- **Automate workflows** such as periodic updates or calculations from a spreadsheet
- Create **custom interactive visualizations** from spreadsheets
- Create **online calculators** in seconds
- Use the spreadsheet as a **database** to power your app
- Build **Slack bots** to enable interactions with spreadsheets

**Is the API just a way to interact with Tactyc?**

It's so much more.

You can use the API to automate things you do on Tactyc, but you can also use it independently outside of the Tactyc framework i.e. computing and accessing spreadsheets on the cloud without no associated Tactyc dashboards.   **How do I use the API?**

You can use the API with any tool that has a connection to the internet.

The [Tactyc API specifications](https://tactyc.us10.list-manage.com/track/click?u=cfb475ec1956d4b952006ee92&id=b149e3c8ab&e=1070ebb93a) will help you understand what the services do and how each service works.

Our API is documented using an industry standard specification format called [OpenAPI](https://tactyc.us10.list-manage.com/track/click?u=cfb475ec1956d4b952006ee92&id=e675dc916a&e=1070ebb93a) (formerly known as Swagger).

**Can I self-host the Tactyc Calculation Engine?**

Yes. We offer self-hosting of the API or just the calculation engine as a python package. Just send an email to [api@tactyc.io](mailto:api@tactyc.io) to discuss.

**Does your API support feature X?**

The Tactyc Calculation Engine has a number of features that are not yet exposed through the API. So there's a good chance we can support your feature. Just send us an email at [api@tactyc.io](mailto:api@tactyc.io)

**Can I use your API for commercial purposes?**

Yes. Just set up a call to discuss licensing terms

**How do I get an API key?**

Head over to [tactyc.io](https://tactyc.us10.list-manage.com/track/click?u=cfb475ec1956d4b952006ee92&id=f4478c9f5b&e=1070ebb93a) and click on *Get API Access* to get started. You can also email us directly at [api@tactyc.io](mailto:api@tactyc.io) to request an API key.