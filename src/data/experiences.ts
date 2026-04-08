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
    company: "Versent · Hybrid",
    startDate: "2024-10-01",
    endDate: null,
    dateDisplay: "Oct 2024 —",
    type: "now",
    description: "Consulting engineer solving complex technical challenges across startups and enterprises. Leading architecture design, building microservices platforms (NestJS, AWS), and pioneering AI-accelerated development practices. Recent clients: Klir Skin AI (startup platform), Australian state government agency (open data platform), Major Australian bank (enterprise systems).",
  },
  {
    num: "prev",
    title: "Senior Software Engineer — UX Platform",
    company: "Shell Energy Australia · Hybrid",
    startDate: "2023-07-01",
    endDate: "2024-08-01",
    dateDisplay: "Jul 2023 — Aug 2024",
    type: "prev",
    description: "Responsible for extending, maintaining, and supporting a microfrontend platform and component library, built using React, TypeScript, single-spa stack. Providing technical guidance on Design System aspects and bringing Figma designs to life, delivering through a React component library. Independently create architectural designs for new systems and features, involved throughout the entire SDLC. Collaborating with many downstream teams that depend on the microfrontend platform, providing support and guidance, as well as implementing features to accelerate their workloads.",
  },
  {
    num: "prev",
    title: "Software Engineer — Artist Experience",
    company: "Redbubble",
    startDate: "2022-08-01",
    endDate: "2023-01-01",
    dateDisplay: "Aug 2022 — Jan 2023",
    type: "prev",
    description: "Role made redundant. Joined Redbubble in the Artist Experience team, working to provide Artists on the Redbubble marketplace with features and tooling that enable them to create and sell high quality products. Worked with a cross-functional highly performant team on a bleeding edge platform designed to improve the artist experience of adding works to the marketplace. Established new best practices, collaborating with Product and Design to build robust and highly intuitive experiences. Introduced dynamic rendering fidelity to the Three.js rendering pipeline, greatly improving performance and responsiveness across all devices; mobile, tablet, and desktop. Implemented a coordinate system that greatly improved the accuracy of recording the artists' artwork placement intentions compared to the previous system (accurate recording of placement is imperative to accurate product fulfilment). Improved cross-browser compatibility of the WebGL 2.0 rendering implementation. Refactored aspects of the Three.js implementation and introduced React Three Fiber (React based Three.js superset) to the stack to improve developer productivity, reduce mental load, and improve performance.",
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
    description: "Company collapsed due to founder fraud. Leading the development efforts of the team. Micro and macro productivity by organising tasks into deliverable slices, and delivering on them consistently. Implemented secure, repeatable and scalable solutions for secret management, identity and access management, and DevOps on Kubernetes. All created with infrastructure as code and configuration as code tooling. Build and work with complex Dockerised application ecosystems, easy to use development tooling via docker-compose. Orchestrate secure and consistent deployment to AWS. Continuous integration and deployment. Tight collaboration with Product and Design teams for immediate feedback loops, edge case handling, prioritisation, and effective delivery.",
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
    description: "Designed, documented, implemented, and supported the team through a Release Process and Development Workflow overhaul, enabling the team to work in isolation in their features and epics, in addition to enabling valid testing to be done on epics such that they are up to date with upstream branches. This allows for less untested code to make it to production, and less testing effort and peer review effort to be wasted on code that is not ready for release. Investigated, estimated, lead, developed, and delivered an epic designed to make the website more accessible to Ad Blocking users, with one of my peer developers. This led to many major benefits to the business such as bringing in an extra AUD$550,000 in revenue in the first 6 months after release, providing a quality user experience when resources are blocked, improving brand perception, allowing more users to use the site in general, enabling more users to convert, enabling tracking of how many users are using ad blockers versus not, and adding ability to detect when an ad blocking user has converted through a monetised link. Mentored and supported junior developers through peer review, pair programming, tech support, etc.",
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
    description: "Developed and delivered most of the frontend aspects of the 'Full Site Release' epic, where I ensured all previously non-Angular pages of the Canstar website were migrated to Angular, converted the Angular app to a Single Page App (SPA), converted all modules to properly utilise Angular Router and lazy loading, and fixed countless bugs surrounding link parsing, URL fragment handling, i18n language handling, innerHTML link interception, and redirection behaviour in server and browser app. This resulted in major site speed improvements for all pages that had now become Angular frontend, and massive user experience improvements as navigation around the website became near instant.",
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