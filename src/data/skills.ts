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
      "Angular / Angular2",
      "GraphQL / RxJS",
      "Go / Bash",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "Docker / Kubernetes",
      "AWS / Linux",
      "Infrastructure as Code",
      "Helm / Skaffold",
      "OAuth 2.0 / OIDC",
    ],
  },
  {
    title: "Specialties",
    skills: [
      "Microfrontends",
      "Design Systems",
      "Component Libraries",
      "3D Rendering (Three.js)",
      "Continuous Integration",
    ],
  },
];
