export const resume = `
Michael Estrada\r
\n
michaelxestrada@gmail.com | https://michaelestrada.net\r
\n
Summary\r
-------\r
Software engineer with 15+ years of experience designing, building, and operating developer tools, CI/CD systems, and\r
release infrastructure at scale. Technical lead and core contributor to a large-scale event-driven release platform,\r
building Go microservices, Temporal workflow orchestration, and federated GraphQL infrastructure. Experienced in applying\r
AI to developer workflows through MCP-based tooling and intelligent automation. Deep expertise across the full stack,\r
from Kubernetes orchestration to developer-facing CLIs and dashboards.\r
\n
Skills\r
------\r
Languages: Go, Python, TypeScript, JavaScript, Java, Groovy, C#, SQL, Shell\r
AI / Developer Tooling: Model Context Protocol (MCP), LLM integration (Gemini, Claude, GPT-4), prompt engineering and evaluation, RAG-based knowledge retrieval, AI-assisted code generation and review workflows\r
Infrastructure & Orchestration: Kubernetes, Helm, Containers, Temporal, Harness, Jenkins, Ansible, Pulumi, AWS EKS\r
Data & Messaging: GraphQL (Apollo Federation), NATS, Kafka, CloudEvents, MySQL, PostgreSQL, MSSQL\r
Platforms & Protocols: Linux/UNIX, mTLS/TLS, Git, Artifactory, Vault\r
\n
Professional Experience\r
-----------------------\r
Software Engineer, Apple Inc., Sunnyvale, CA — July 2018 - Present\r
Release Engineering & Developer Infrastructure\r
\n
Technical lead for a developer experience platform, driving the architecture, adoption, and evolution of services and\r
workflows that power the dev-test-release lifecycle for consumer-facing products across four business units.\r
\n
Release Infrastructure & Workflow Orchestration\r
- Led architecture and development of 10+ Go microservices and Temporal workflows powering a content release pipeline serving 9 product categories across 20+ device families, including artifact upload, content distribution, deployment automation, and security scanning.\r
- Technical lead for a Go-based event routing service that dispatches CloudEvents to Temporal workflow namespaces, enabling multi-tenant release orchestration across teams.\r
- Led design and implementation of a high-throughput Go service handling artifact ingestion, validation, and distribution across pre-production and production environments, increasing one team's release cadence from 1-2 per week to multiple daily deployments.\r
- Drove adoption of multi-cluster Kubernetes deployments (AWS EKS), designing release workflows spanning dev, UAT, and production environments using Helm and Harness pipelines.\r
\n
Federated GraphQL & Apollo Router Platform\r
- Led the design and implementation of a GitOps-driven Apollo Router platform, automating schema validation, supergraph recomposition, and router deployment across multiple Kubernetes clusters.\r
- Led development of Go-based workflows for PQL (Persisted Query List) validation and schema composition, integrating with GitHub check runs to provide real-time developer feedback on pull requests.\r
- Designed and deployed an mTLS sidecar proxy for secure service-to-service authentication across federated subgraph services.\r
- Drove federated data graph configuration strategy across environments, enabling safe, incremental schema changes without service disruption.\r
\n
AI-Powered Developer Tools\r
- Led development of MCP (Model Context Protocol) servers integrating LLM-based AI assistants with project management and documentation systems, enabling autonomous CRUD operations, format conversion, and contextual retrieval.\r
- Designed and implemented prompt pipelines and RAG-based knowledge retrieval, integrating LLM APIs (Gemini, Claude, GPT-4) into developer workflows for automated code review, test generation, and release documentation.\r
- Authored domain-specific skills and knowledge bases for an AI agent platform, enabling LLM-driven tools to reason about GitOps configuration patterns, deployment topologies, and release procedures.\r
\n
CI/CD Pipelines & Build Infrastructure\r
- Led long-term ownership of core CI/CD pipeline repositories, spanning Jenkins pipeline definitions, build tooling, and deployment automation across CMS, retail, channel, and interactive properties supporting 9 product categories and 20+ device families -- including 3D modeling and XR content teams.\r
- Built and maintained SVN tooling supporting content repository migrations, handling edge cases in large-scale SCM transitions.\r
- Defined and tracked release health metrics across teams, building a deployment tracking service (TypeScript) and analytics dashboard with API gateway (Node.js) that provided data-driven insights into deployment velocity and pipeline reliability.\r
- Created CLI tools in Node.js and Python utilized within CI pipelines, streamlining development and release workflows.\r
- Automated a previously manual data pipeline -- replacing scripts and hand-managed uploads with an hourly scheduled workflow -- eliminating hours of manual effort per cycle and enabling reliable, repeatable delivery.\r
- Authored reusable Helm charts and Kubernetes configurations adopted across multiple service deployments.\r
- Managed infrastructure updates using Ansible playbooks to ensure systems met internal security standards.\r
\n
Testing Frameworks & Developer Experience (2018-2020)\r
- Led the development of dynamic testing frameworks for consumer-facing products, leveraging Node.js (Mocha, Selenium, TestCafe) with container-based portability.\r
- Developed an authentication library bridging test harnesses with internal identity management environments.\r
- Crafted Jenkins pipelines using Groovy, integrating test harnesses for continuous integration and automated reporting.\r
\n
Prior Experience\r
----------------\r
Consultant, Excelon Development (Remote) | 2018\r
Senior Support Engineer, American Residential Warranty, Boca Raton, FL | 2016-2018\r
QMO Test Engineer, American Airlines, Phoenix, AZ | 2014-2015\r
Senior QA Associate, Publicis.Sapient, Miami, FL | 2007-2012\r
\n
Earlier roles spanning test automation, CI/CD, infrastructure management, and build engineering across enterprise\r
environments. Built testing frameworks (Selenium, C#/.NET, Python), automated server configurations, managed\r
pre-production environments with Ansible, and led build/release processes using Python, PowerShell, and MSBuild.\r
`;
