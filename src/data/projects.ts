export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Major Bank — Mandate Management Platform",
    year: "2025-present",
    description: "Performed lead-level delivery on the enterprise mandate management platform at a major Australian bank. Pioneered AI-accelerated engineering practices with custom Claude agents and MCP configurations, multiplying team throughput. Owned end-to-end epic delivery of multiple mandate lifecycle workstreams. Subject matter expert in Temporal workflow orchestration for complex async processes.",
    tags: ["TypeScript", "Node.js", "Express", "AWS", "Docker", "PostgreSQL", "CI/CD", "Temporal", "AI-Accelerated Development", "Enterprise", "Leadership"],
  },
  {
    name: "Agentic AI Platform — Vera & PixieOps",
    year: "2025-present",
    description: "Engineer on Versent's internal agentic AI platform, building AWS-native AI agents and Slack-integrated tools while mentoring junior engineers. Stack includes AWS Bedrock and AWS Strands for agent orchestration. Implemented observability layer for AI/ML systems: OpenTelemetry instrumentation, Jaeger for distributed tracing, and Arize Phoenix for ML model monitoring and evaluation.",
    tags: ["AWS Bedrock", "AWS Strands", "AWS", "Node.js", "TypeScript", "Slack", "OpenTelemetry", "Jaeger", "Arize Phoenix", "Agentic AI", "Mentoring"],
  },
  {
    name: "Klir Skin AI Platform",
    year: "2024-2025",
    description: "Lead technical consultant architecting complete NestJS microservices platform for skincare AI startup. Designed AWS infrastructure (ECS, RDS, S3) with Sceptre/CloudFormation handling 100k concurrent users. Implemented Playwright-based data scraping service with BrightData CDP integration. Established CI/CD via GitHub Actions with comprehensive documentation and knowledge transfer.",
    tags: ["NestJS", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker", "Playwright", "CI/CD", "Infrastructure as Code", "Monorepo", "Leadership"],
  },
  {
    name: "UX Platform & Component Library",
    year: "2023-2024",
    description: "Senior engineer extending and maintaining microfrontend platform and shared React component library at Shell Energy. Built on React, TypeScript, and single-spa. Provided technical guidance on design system aspects and component APIs. Collaborated with multiple downstream teams to accelerate delivery and maintain platform reliability.",
    tags: ["React", "TypeScript", "Node.js", "Docker", "CI/CD", "single-spa", "Storybook", "Design Systems", "Microfrontends", "Leadership", "Mentoring"],
  },
  {
    name: "State Government OpenData Platform",
    year: "2024",
    description: "Backend engineer on government open data platform using CKAN OData extension for an Australian state government agency. Delivered three critical features: user API token management UI, file download security improvements, and hard-delete user purge API with compliance controls. Contributed effectively despite limited system access, demonstrating ability to deliver on unfamiliar platforms.",
    tags: ["CKAN", "OData", "Python", "PostgreSQL", "Azure", "Government Compliance", "API Design"],
  },
  {
    name: "3D Marketplace Rendering Pipeline",
    year: "2022-2023",
    description: "Optimised Three.js rendering pipeline for Redbubble's artist marketplace. Introduced dynamic rendering fidelity to improve performance across mobile, tablet, and desktop devices. Implemented improved coordinate system for accurate artwork placement. Migrated to React Three Fiber for improved developer productivity and reduced cognitive load.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "Three.js", "React Three Fiber", "WebGL 2.0", "Storybook", "Docker", "CI/CD", "Monorepo", "Performance"],
  },
  {
    name: "OAuth 2.0 / OIDC Provider",
    year: "2021-2022",
    description: "Architected Roubler's in-house authentication system, replacing Auth0 with ORY Hydra — an OIDC-certified OAuth 2.0 server. Built the surrounding auth service in Express/TypeScript: custom login, consent, logout, MFA (email, SMS, TOTP via otplib), and PKCE authorization code flows. Integrated JWT validation (jsonwebtoken, jwks-rsa) across GraphQL and REST API layers. Taken from ADR and design document through MVP to production scale in partnership with the company architect.",
    tags: ["ORY Hydra", "OAuth 2.0", "OIDC", "Express", "Node.js", "TypeScript", "GraphQL", "AWS", "Docker", "CI/CD", "Monorepo", "MFA", "JWT", "PostgreSQL"],
  },
  {
    name: "Workforce Platform — Mission-Critical Systems",
    year: "2021-2022",
    description: "Implemented test-driven development across Roubler's mission-critical workforce management systems — billing, expenses, leave, and timesheets. Built on a Node.js/TypeScript monorepo with PostgreSQL. Established rigorous TDD practices where correctness is non-negotiable. Dockerised the full development and CI environment via Docker Compose and CircleCI, significantly improving feedback speed and deployment reliability.",
    tags: ["Node.js", "TypeScript", "TDD", "PostgreSQL", "Docker", "CI/CD", "Monorepo", "CircleCI"],
  },
  {
    name: "GraphQL Federation Platform",
    year: "2020",
    description: "Lead architect on GraphQL federation platform built on Kubernetes at Canstar. Researched and documented the full system architecture, led a team of 8, and integrated Apollo Server across multiple backend services. Brought the platform from design through production deployment.",
    tags: ["GraphQL", "Apollo", "Hasura", "MongoDB", "Node.js", "TypeScript", "Docker", "Kubernetes", "AWS", "CI/CD", "Monorepo", "Leadership"],
  },
  {
    name: "Ad-blocker Monetisation Feature",
    year: "2019-2020",
    description: "Designed and built a UX workaround for ad-blocked users at Canstar, recovering revenue lost to ad blockers. Required deep research into ad-blocking behaviour, creative front-end engineering, and close collaboration with product and commercial stakeholders. Feature was directly attributed to $550k AUD in recovered annual revenue.",
    tags: ["Angular", "TypeScript", "RxJS", "UX Engineering", "Revenue Impact"],
  },
  {
    name: "Angular SPA & Component Libraries",
    year: "2018-2019",
    description: "Led the Full Site Release epic at Canstar — migrating all non-Angular pages to Angular, converting the website to a full SPA with lazy loading and server-side rendering. Built and maintained shared component libraries (CNSU, cnsu-animations, cnsui-presentation) used across all Canstar products.",
    tags: ["Angular", "TypeScript", "Node.js", "RxJS", "SSR", "Component Libraries", "Design Systems", "Leadership"],
  },
];
