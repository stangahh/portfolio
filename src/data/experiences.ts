export interface Experience {
  num: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  dateDisplay: string;
  type: "now" | "prev" | "edu";
  canstarGroup?: boolean;
  description: string;
}

export const experiences: Experience[] = [
  {
    num: "now",
    title: "Senior Software Engineer",
    company: "Versent",
    startDate: "2024-10-01",
    endDate: null,
    dateDisplay: "Oct 2024 —",
    type: "now",
    description: "Consulting engineer solving complex technical challenges across startups and enterprises. Leading architecture design, building microservices platforms (NestJS, AWS), and pioneering AI-accelerated development practices. Recent clients: Klir Skin AI (startup platform), Australian state government agency (open data platform), Major Australian bank (enterprise payment systems).",
  },
  {
    num: "prev",
    title: "Senior Software Engineer — UX Platform",
    company: "Shell Energy Australia",
    startDate: "2023-07-01",
    endDate: "2024-08-01",
    dateDisplay: "Jul 2023 — Aug 2024",
    type: "prev",
    description: "Extended and maintained a Microfrontends platform and React component library (TypeScript, single-spa), delivering Design System guidance and translating Figma designs into reusable components. Designed architecture for new systems and features independently across the full SDLC. Supported and enabled downstream teams building on the platform.",
  },
  {
    num: "prev",
    title: "Software Engineer — Artist Experience",
    company: "Redbubble",
    startDate: "2022-08-01",
    endDate: "2023-01-01",
    dateDisplay: "Aug 2022 — Jan 2023",
    type: "prev",
    description: "Joined the Artist Experience team building a next-generation artwork placement platform for Redbubble's marketplace. Introduced dynamic rendering fidelity to the Three.js pipeline, improving performance and responsiveness across all devices. Implemented a coordinate system that significantly improved artwork placement accuracy, directly improving product fulfilment quality. Improved cross-browser WebGL 2.0 compatibility and introduced React Three Fiber to reduce complexity and boost developer productivity. Role made redundant.",
  },
  {
    num: "prev",
    title: "Career Break",
    company: "Health and well-being",
    startDate: "2022-02-01",
    endDate: "2022-08-01",
    dateDisplay: "Feb 2022 — Aug 2022",
    type: "prev",
    description: "",
  },
  {
    num: "prev",
    title: "Senior Full Stack Developer",
    company: "Roubler",
    startDate: "2021-03-01",
    endDate: "2022-02-01",
    dateDisplay: "Mar 2021 — Feb 2022",
    type: "prev",
    description: "Created design doc and MVP for OAuth 2.0 and OpenID Connect Provider, following through to production scale deployment alongside Roubler's Architect, deprecating the less configurable and extremely expensive Auth0. Test driven development on highly specific business logic pertaining to mission critical systems such as billing, expenses, leave, timesheets, and more for the in-house custom rules engine. Improved developer experience and stability by orchestrating the startup of applications via Docker Compose. Improved Continuous Integration speed and reliability by Docker-ising the testing and deployment of the application stack to AWS.",
  },
  {
    num: "prev",
    title: "Senior Software Developer",
    company: "Easier Australia",
    startDate: "2020-10-01",
    endDate: "2021-03-01",
    dateDisplay: "Oct 2020 — Mar 2021",
    type: "prev",
    description: "Led development efforts across the team, breaking work into deliverable slices and shipping consistently. Built secure, scalable solutions for secret management, IAM, and Kubernetes-based DevOps using infrastructure and configuration as code. Maintained Dockerised application ecosystems with streamlined docker-compose tooling and CI/CD pipelines to AWS. Collaborated closely with Product and Design for tight feedback loops. Company collapsed due to founder fraud.",
  },
  {
    num: "prev",
    title: "Senior Developer",
    company: "Canstar",
    startDate: "2020-03-01",
    endDate: "2020-10-01",
    dateDisplay: "Mar 2020 — Oct 2020",
    type: "prev",
    canstarGroup: true,
    description: "Lead developer on a project that implemented a Shared Component Library and new implementation of redesigned Canstar public facing website, all Angular 8+. Managing a team of 4. Responsible for task creation, estimation, prioritisation, delegation, implementation, and release. Also lead developer on a project implementing a GraphQL Server stack, Kubernetes infrastructure integration, Apollo Server, Apollo Federation, high security, scalability, and availability. Managing a team of 8. Responsible for researching and documenting entire architecture and heavily involved in implementation.",
  },
  {
    num: "prev",
    title: "Developer (Intermediate)",
    company: "Canstar",
    startDate: "2019-07-01",
    endDate: "2020-03-01",
    dateDisplay: "Jul 2019 — Mar 2020",
    type: "prev",
    canstarGroup: true,
    description: "Overhauled the team's release process and CI/CD workflow, enabling feature branch isolation and ensuring epics stay in sync with upstream before merge — reducing untested code reaching production and cutting wasted review cycles. Co-delivered an ad-blocker resilience epic in TypeScript/Angular that generated AUD $550K in new revenue within six months, while improving UX for blocked resources, increasing conversion opportunities, and adding visibility into ad-blocker usage. Mentored junior developers through code review, pair programming, and ongoing technical support.",
  },
  {
    num: "prev",
    title: "Developer",
    company: "Canstar",
    startDate: "2019-02-01",
    endDate: "2019-07-01",
    dateDisplay: "Feb 2019 — Jul 2019",
    type: "prev",
    canstarGroup: true,
    description: "Led frontend delivery of the Full Site Release epic, migrating all remaining non-Angular pages to Angular and converting the app to a fully lazy-loaded SPA. Resolved deep routing bugs across link parsing, URL fragments, i18n handling, and server/browser redirection. Delivered major site speed improvements and near-instant client-side navigation across the entire site.",
  },
  {
    num: "prev",
    title: "Graduate Developer",
    company: "Canstar",
    startDate: "2018-05-01",
    endDate: "2019-02-01",
    dateDisplay: "May 2018 — Feb 2019",
    type: "prev",
    canstarGroup: true,
    description: "Implemented progressive loading of product information in an internal Angular app designed for managing product data. This progressive loading allowed the Product Data team to manage verticals whose data sets were so large that it would max out the RAM on their laptops. This also has the side effect of making the app entirely more responsive while editing data as only the products you need to load are rendered.",
  },
  {
    num: "edu",
    title: "Bachelor of Business / Bachelor of Information Technology",
    company: "Queensland University of Technology",
    startDate: "2014-01-01",
    endDate: "2017-12-01",
    dateDisplay: "2014 — 2017",
    type: "edu",
    description: "Majoring in Marketing and Computer Science. Built a foundation in systems thinking, design, and the intersection of technology and business. Activities: STIMulate, QUT IT Club, CODE Network.",
  },
];
