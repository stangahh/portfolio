export interface Project {
  num: string;
  name: string;
  year: string;
  description: string;
  tags: string[];
  github: string;
  status: "active" | "archived";
}

export const projects: Project[] = [
  {
    num: "01",
    name: "Full-Stack Engineering at Scale",
    year: "2024-present",
    description: "Working with enterprises and startups on their most difficult distributed systems and infrastructure challenges. Applying lessons learned from microfrontends, 3D rendering optimization, and OAuth 2.0 architecture to solve problems at scale.",
    tags: ["Distributed Systems", "Full-Stack", "Infrastructure", "AWS", "Kubernetes"],
    github: "",
    status: "active",
  },
  {
    num: "02",
    name: "UX Platform & Component Library",
    year: "2023-2024",
    description: "Microfrontend platform and shared React component library powering multiple product teams at Shell Energy. Built on React, TypeScript, and single-spa. Responsible for extending, maintaining, and supporting the platform while providing technical guidance on design system aspects. Collaborated with many downstream teams to accelerate their workflows.",
    tags: ["React", "TypeScript", "single-spa", "Design Systems", "Microfrontends"],
    github: "",
    status: "active",
  },
  {
    num: "03",
    name: "3D Marketplace Rendering Pipeline",
    year: "Aug 2022-Jan 2023",
    description: "Overhauled the Three.js rendering pipeline for Redbubble's artist marketplace. Introduced dynamic rendering fidelity to dramatically improve performance and responsiveness across mobile, tablet, and desktop. Migrated to React Three Fiber to improve developer productivity and reduce cognitive load. Improved WebGL 2.0 cross-browser compatibility.",
    tags: ["Three.js", "React Three Fiber", "WebGL", "TypeScript", "Performance"],
    github: "",
    status: "active",
  },
  {
    num: "04",
    name: "OAuth 2.0 / OIDC Provider",
    year: "Mar 2021-Feb 2022",
    description: "Architected and deployed an OAuth 2.0 and OpenID Connect Provider (Ory Hydra) to production scale alongside the principal architect at Roubler. Implemented test-driven development on mission-critical business logic for billing, expenses, leave, and timesheets. Improved CI speed by Dockerizing the testing and deployment pipeline to AWS.",
    tags: ["OAuth 2.0", "OIDC", "Kubernetes", "AWS", "Docker", "Identity"],
    github: "",
    status: "active",
  },
  {
    num: "05",
    name: "DevOps & Infrastructure as Code",
    year: "Oct 2020-Mar 2021",
    description: "Implemented secure, repeatable, and scalable solutions for secret management, identity and access management, and DevOps on Kubernetes at Easier. Built and managed complex Dockerized application ecosystems. Orchestrated secure and consistent deployment to AWS with continuous integration and deployment pipelines.",
    tags: ["Kubernetes", "Docker", "AWS", "Infrastructure as Code", "Terraform"],
    github: "",
    status: "active",
  },
  {
    num: "06",
    name: "Shared Component Library & Public Website",
    year: "Mar-Oct 2020",
    description: "Lead developer on a project implementing a shared component library and new Angular 8+ redesigned public-facing website at Canstar. Managed a team of 4, responsible for task creation, estimation, prioritization, delegation, and release. Brought new design to production with high code quality.",
    tags: ["Angular", "Design Systems", "Component Library", "Leadership"],
    github: "",
    status: "archived",
  },
  {
    num: "07",
    name: "GraphQL Federation Platform",
    year: "Jul 2019-Mar 2020",
    description: "Lead developer architecting a GraphQL server stack on Kubernetes using Apollo GraphQL and GraphQL Federation. Researched and designed all AWS infrastructure while maintaining high security and scalability standards. Heavily involved in planning, implementation, and delivery of a production-ready platform.",
    tags: ["GraphQL", "Node.js", "Apollo", "Kubernetes", "AWS"],
    github: "",
    status: "archived",
  },
];
