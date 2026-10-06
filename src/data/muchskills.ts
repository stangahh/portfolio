// Snapshot of my MuchSkills profile (Versent), recorded Oct 2026.
// Not yet used by the portfolio or the resume.
//
// MuchSkills levels: Expert, Intermediate, or Beginner, each with a sub-level of 3, 2, or 1.
// The profile HTML shows these as `bg-ranks-N` classes, where 1 is the highest.
// I checked this against the text list, for example: Git = Expert (2) = rank 2,
// JIRA = Expert (1) = rank 3, Python = Intermediate (2) = rank 5, and
// Microsoft Azure = Beginner (3) = rank 7.

export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Level = "Expert" | "Intermediate" | "Beginner";

export interface RankedSkill {
  name: string;
  rank: Rank;
}

export interface SkillCategory {
  title: string;
  skills: RankedSkill[];
}

export interface Certification {
  code: string;
  name: string;
  issuer: string;
  credentialId: string;
  issued: string; // ISO date
  expires: string | null; // null = doesn't expire
}

/** Converts a rank into a label such as "Expert (2)". */
export function rankToLevel(rank: Rank): { level: Level; subLevel: 1 | 2 | 3 } {
  const levels: Level[] = ["Expert", "Intermediate", "Beginner"];
  const level = levels[Math.floor((rank - 1) / 3)];
  const subLevel = (3 - ((rank - 1) % 3)) as 1 | 2 | 3;
  return { level, subLevel };
}

function byRank(groups: Partial<Record<Rank, string[]>>): RankedSkill[] {
  return Object.entries(groups).flatMap(([rank, names]) =>
    (names ?? []).map((name) => ({ name, rank: Number(rank) as Rank })),
  );
}

/** The full "Technical skills" list. */
export const technicalSkills: RankedSkill[] = byRank({
  2: ["GitHub", "Git", "JavaScript", "React", "Typescript", "Docker", "GitHub Actions", "NestJS"],
  3: [
    "Node.js", "JIRA", "GitKraken", "express.js", "Jest", "Microservices", "Storybook", "Linux",
    "Amazon Elastic Container Service (ECS)", "Angular 2+", "RxJS", "MonoRepo", "OpenTelemetry",
    "Claude AI", "GraphQL federation", "MCP", "Claude Code",
  ],
  4: [
    "Visual Studio Code", "Bitbucket", "PostgreSQL", "npm", "Amazon Web Services (AWS)", "(R)?ex",
    "Yarn", "Slack", "Confluence", "Kubernetes K8s", "Zsh", "Terminal", "OpenID", "OAuth", "GraphQL",
    "Next.JS", "AWS CloudFormation", "AWS DynamoDB", "AWS Fargate", "AWS Lambda", "GitLabCI", "Redux",
    "AWS IAM", "Amazon S3", "Amazon Elastic Container Registry (ECR)", "HashiCorp Terraform",
    "GNU Bash", "Keycloak", "GitLab Pipelines", "Terraform CDK", "Jira Cloud", "Shell Script",
    "AWS Bedrock", "ESLint", "Vite", "Figma DevMode", "Localstack", "Temporal", "Vitest", "Turborepo",
    "Shadcn UI", "GitLab CI/CD", "pnpm",
  ],
  5: [
    "Python", "GitLab", "Lucidchart", "GNU Bourne Again SHell", "Postman", "Three.js", "Cloudflare",
    "Datadog", "Grafana", "Ubuntu", "Miro", "SAML", "Amazon Route 53", "AWS Amplify", "Prometheus",
    "Pulumi", "GitLab Runners", "Playwright", "Github Copilot", "Cypress", "Styled-Components",
    "PG Vector DB", "Application Load Balancer (ALB)", "Astro", "Ollama", "Pydantic AI",
    "Strands Agents SDK",
  ],
  6: [
    "Notion", "Figma", "SonarQube", "CircleCI", "Amazon CloudWatch", "Testcontainers", "Helm", "SQL",
    "Amazon Virtual Private Cloud (VPC)", "HashiCorp Vault", "Amazon EventBridge", "Cursor",
    "Microsoft Entra ID", "Microsoft Copilot", "Azure AI Foundry",
  ],
  7: ["Microsoft Azure", "OKTA"],
});

/** Skills grouped under the categories the company asks me to fill in. */
export const companyCategories: SkillCategory[] = [
  {
    title: "Core Consulting Skills",
    skills: byRank({
      3: ["Accountability & Ownership"],
      4: ["Problem Solving", "Critical Thinking", "Influence"],
      5: ["Active Listening", "Feedback", "Root Cause Analysis", "Technical Communication"],
      6: ["Communication", "Presentation Skills"],
    }),
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    skills: byRank({
      5: ["AI Design", "AI Experience Design", "AI Implementation", "AI Solution Development"],
    }),
  },
  {
    title: "AI Ops and Observability",
    skills: byRank({
      2: ["Infrastructure as Code (IaC)", "CI/CD (Continuous Integration & Continuous Delivery)", "GitOps"],
      3: ["OpenTelemetry"],
      4: ["DevSecOps"],
      5: ["Datadog", "Grafana", "Prometheus", "Root Cause Analysis", "Platform Engineering", "Monitoring & Observability"],
      6: ["Amazon CloudWatch"],
    }),
  },
  {
    title: "Cloud",
    skills: byRank({
      2: ["Infrastructure as Code (IaC)", "CI/CD (Continuous Integration & Continuous Delivery)", "GitOps"],
      3: ["Application Security", "Agile Methodology"],
      4: ["Teamwork and Collaboration", "DevSecOps", "Cloud Security"],
      5: ["Identity and Access Management (IAM)", "Knowledge Management", "Platform Engineering", "Event-Driven Architecture"],
      6: ["Leadership"],
    }),
  },
  {
    title: "Cloud Tech",
    skills: byRank({
      2: ["GitHub", "Docker", "GitHub Actions"],
      3: ["Amazon Elastic Container Service (ECS)"],
      4: [
        "AWS CloudFormation", "AWS DynamoDB", "AWS Fargate", "AWS IAM",
        "Amazon Elastic Container Registry (ECR)", "HashiCorp Terraform", "AWS Bedrock", "GitLab CI/CD",
      ],
      5: ["GitLab", "Datadog", "Grafana", "Amazon Route 53", "Prometheus", "Pulumi", "Application Load Balancer (ALB)"],
      6: ["SonarQube", "Amazon CloudWatch", "Helm", "HashiCorp Vault", "Microsoft Entra ID", "Azure AI Foundry"],
    }),
  },
  {
    title: "Data and Insights",
    skills: byRank({
      2: ["Infrastructure as Code (IaC)", "CI/CD (Continuous Integration & Continuous Delivery)"],
      3: ["Technical Documentation", "LLM Foundation Models & APIs"],
      4: ["Agent Frameworks & Orchestration"],
      5: [
        "Agent Design Patterns", "Agent Integration & Function Calling", "Agent Workflow Orchestration",
        "Event Streaming", "Monitoring & Observability", "Multi-Agent Systems", "Prompt Engineering & Optimisation",
      ],
      6: ["Fine Tuning & Model Customisation", "LLMOps", "Retrieval & Knowledge Systems (RAG)"],
    }),
  },
  {
    title: "Data and Insights Tech",
    skills: byRank({
      2: ["GitHub"],
      3: ["Claude Code"],
      4: ["Amazon S3", "HashiCorp Terraform"],
      5: ["Python", "GitLab", "Datadog", "Grafana", "Prometheus", "Github Copilot"],
      6: ["SQL", "Cursor", "Microsoft Copilot"],
    }),
  },
  {
    title: "Delivery",
    skills: byRank({
      3: ["JIRA"],
      4: ["Confluence", "Agile delivery", "Backlog management"],
      5: ["Postman", "Miro", "Playwright", "Cypress", "Quality engineering"],
      6: ["Notion", "Non-functional testing"],
    }),
  },
  {
    title: "Digital",
    skills: byRank({
      2: ["Full Stack Development"],
      3: ["Application Security", "API Design and Development", "Microservices Architecture", "Agile Methodology", "AI Integration"],
      4: ["Accessible and Inclusive Design", "Test-Driven Development (TDD)", "Front End Development"],
      5: ["Design Systems", "Event-Driven Architecture", "Multi-Agent System (MAS)", "Responsive Design"],
      6: ["Behavior-Driven Development (BDD)"],
    }),
  },
  {
    title: "Digital tech",
    skills: byRank({
      2: ["GitHub", "Git", "JavaScript", "React", "Typescript", "Docker", "GitHub Actions", "NestJS"],
      3: ["Node.js", "JIRA", "express.js", "Jest", "Claude AI"],
      4: [
        "Visual Studio Code", "Bitbucket", "PostgreSQL", "Confluence", "Kubernetes K8s", "OAuth", "GraphQL",
        "Next.JS", "AWS CloudFormation", "AWS DynamoDB", "AWS Fargate", "AWS IAM", "GNU Bash", "Vite",
        "Vitest", "GitLab CI/CD",
      ],
      5: ["Python", "GitLab", "SAML", "Pulumi", "Github Copilot", "Cypress", "Astro"],
      6: ["Helm", "SQL", "Microsoft Entra ID", "Azure AI Foundry"],
    }),
  },
  {
    title: "Digital Service Management - Skills",
    skills: byRank({
      3: ["Application Lifecycle Management (ALM)"],
      5: ["Knowledge Management", "Root Cause Analysis"],
    }),
  },
  {
    title: "Digital Service Management - Tech",
    skills: byRank({
      2: ["GitHub", "Docker", "GitHub Actions"],
      3: ["JIRA"],
      4: ["Confluence", "AWS CloudFormation", "AWS DynamoDB", "AWS Fargate", "HashiCorp Terraform", "GitLab CI/CD"],
      5: ["GitLab", "Datadog", "Grafana", "Amazon Route 53", "Prometheus", "Pulumi", "Application Load Balancer (ALB)"],
      6: ["SonarQube", "Helm", "Amazon Virtual Private Cloud (VPC)", "HashiCorp Vault", "Microsoft Entra ID", "Azure AI Foundry"],
    }),
  },
  {
    title: "GTM and Presales",
    skills: byRank({
      4: ["AI fluency"],
      5: ["Demo and prototyping"],
    }),
  },
  {
    title: "Product Skills",
    skills: byRank({
      2: ["Infrastructure as Code (IaC)", "CI/CD (Continuous Integration & Continuous Delivery)", "GitOps"],
      3: ["API Design and Development", "Agile Methodology"],
      4: ["DevSecOps"],
      5: ["Knowledge Management", "Root Cause Analysis", "Platform Engineering", "Monitoring & Observability"],
    }),
  },
  {
    title: "Product Tech",
    skills: byRank({
      2: ["GitHub"],
      3: ["JIRA", "OpenTelemetry"],
      4: ["Bitbucket", "Amazon Web Services (AWS)", "Confluence"],
      5: ["Grafana", "Prometheus", "Atlassian Suite"],
      7: ["Microsoft Azure"],
    }),
  },
  {
    title: "Security & Identity",
    skills: byRank({
      3: ["Application Security", "Authentication and Authorization", "Credential and Secrets Management"],
      4: [
        "DevSecOps", "Cloud Security", "AI Agent Management", "AI Security",
        "Customer Identity & Access Management (CIAM)", "Infrastructure Operations",
        "Machine & Non-Human Identity Security",
      ],
      5: ["Identity and Access Management (IAM)", "Certificate Management"],
    }),
  },
  {
    title: "Security & Identity Tech",
    skills: byRank({
      4: ["OAuth"],
      5: ["Cloudflare", "SAML"],
      6: ["Microsoft Entra ID"],
      7: ["OKTA"],
    }),
  },
  {
    title: "Marketing",
    skills: byRank({ 4: ["AI fluency"] }),
  },
  {
    title: "People and Culture",
    skills: byRank({
      4: ["AI fluency"],
      5: ["Employee Onboarding", "Knowledge Management"],
    }),
  },
  { title: "Finance", skills: [] },
  {
    title: "Leadership Skills",
    skills: byRank({
      3: ["Accountability & Ownership"],
      4: ["Emotional Intelligence", "Teamwork and Collaboration", "Influence", "Coaching"],
      5: ["Active Listening", "Empathy", "Feedback", "Delegation"],
      6: ["Leadership", "Communication", "Cultivating Inclusion"],
    }),
  },
  {
    title: "Human Skills",
    skills: byRank({
      1: ["Virtual Collaboration"],
      2: ["Attention to Detail", "Diligence"],
      3: ["Accountability & Ownership", "Systems Thinking", "Self-Awareness & Reflection"],
      4: [
        "Emotional Intelligence", "Problem Solving", "Critical Thinking", "Teamwork and Collaboration",
        "Influence", "Coaching", "Mentoring", "Proactivity",
      ],
      5: ["Active Listening", "Empathy", "Feedback"],
      6: ["Leadership", "Cultivating Inclusion"],
    }),
  },
  {
    title: "Business Skills",
    skills: byRank({
      2: ["Software Engineering"],
      3: ["Writing", "Prompt Engineering", "Formal Research"],
      4: ["Time Management", "Prototyping", "Continuous Improvement"],
      5: ["Facilitation of Meetings", "Employee Onboarding"],
      6: ["Communication", "Presentation Skills"],
    }),
  },
  {
    title: "Methodology & Frameworks",
    skills: byRank({
      3: ["Agile Methodology"],
      4: ["Test-Driven Development (TDD)", "Software Development Lifecycle (SDLC)"],
      5: ["Feature Driven Development (FDD)", "Clean Code"],
      // MuchSkills lists BDD twice, once with each spelling.
      6: ["Behavior-Driven Development (BDD)", "Behaviour Driven Development (BDD)"],
    }),
  },
  {
    title: "Languages",
    skills: byRank({ 1: ["English"] }),
  },
  {
    title: "Strategy & Architecture",
    skills: byRank({
      3: ["Formal Research"],
      6: ["Artificial Intelligence (AI) and Data Ethics"],
    }),
  },
  { title: "Versent Solutions", skills: [] },
];

export const certifications: Certification[] = [
  {
    code: "CCA-F",
    name: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    credentialId: "8994gfnz85bx",
    issued: "2026-05-13",
    expires: "2026-11-07",
  },
  {
    code: "AZ-900",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    credentialId: "DV5A25-F96899",
    issued: "2025-06-26",
    expires: null,
  },
];
