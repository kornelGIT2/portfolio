export const links = [
  {
    name: "home",
    path: "hero",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "projects",
    path: "projects",
  },
  { name: "contact", path: "contact" },
] as const;

export const skills = [
  { name: "JavaScript", icon: "assets/icons/javascript.svg" },
  { name: "TypeScript", icon: "assets/icons/typescript.svg" },
  { name: "React", icon: "assets/icons/react.svg" },
  { name: "Next.js", icon: "assets/icons/next-js.svg" },
  { name: "CSS3", icon: "assets/icons/css-3.svg" },
  { name: "HTML5", icon: "assets/icons/html-1.svg" },
  { name: "Tailwind", icon: "assets/icons/tailwind.svg" },
  { name: "Node.js", icon: "assets/icons/node.svg" },
  { name: "Git", icon: "assets/icons/git.svg" },
  { name: "Docker", icon: "assets/icons/docker.svg" },
  { name: "Redux", icon: "assets/icons/redux.svg" },
  { name: "GraphQL", icon: "assets/icons/graphql.svg" },
  { name: "Prisma", icon: "assets/icons/prisma-3.svg" },
  { name: "MySQL", icon: "assets/icons/mysql-logo.svg" },
  { name: "PostgreSQL", icon: "assets/icons/postgresql.svg" },
];

export const projects = [
  {
    title: "AIograph",
    description:
      "AIograph is clound-based platform that leverages AI technologies to provide a range of services and capabilities. Featuring robust authentication and authorization solution, image restoration, background and object removal, generative fill and more.",
    sourceCode: "https://github.com/kornelGIT2/aIograph",
    techStack: [
      skills[1],
      skills[2],
      skills[3],
      skills[6],

      { name: "Cloudinary", icon: "assets/icons/cloudinary-2.svg" },
      { name: "MongoDB", icon: "assets/icons/mongodb.svg" },
    ],
    imageUrl: "aiograph_light.png",
  },
  {
    title: "Finance Tracker",
    description:
      "The Finance Tracker App is a comprehensive and responsive financial management tool designed to empower individuals to take control of their finances.",
    sourceCode: "https://github.com/kornelGIT2/Finance-Tracker",
    techStack: [
      skills[1],
      skills[2],
      skills[3],
      skills[6],
      skills[12],
      skills[14],
    ],
    imageUrl: "smartwally.png",
  },
];
