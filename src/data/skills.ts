export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "TypeScript / JavaScript",
      "React.js / Node.js",
      "Angular",
      "GraphQL / Apollo",
      "NestJS / Express",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "Docker / Kubernetes",
      "AWS (ECS, RDS, S3, Secrets Manager)",
      "Infrastructure as Code (Terraform, Sceptre)",
      "CI/CD (GitHub Actions, CircleCI)",
      "OAuth 2.0 / OIDC",
    ],
  },
  {
    title: "Specialties",
    skills: [
      "Microfrontends (single-spa)",
      "Design Systems & Component Libraries",
      "3D Rendering & Performance (Three.js, WebGL)",
      "Temporal Workflow Orchestration",
      "AI-Accelerated Development (Claude, custom agents, MCP servers)",
    ],
  },
];
