export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string; //
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BookITS",
    description: "Full-stack e-commerce book platform built with MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["react", "nodejs", "mongodb", "expressjs", "postman"],
    imageUrl: "/bookits.png",
    githubUrl: "https://github.com/lexiiyz/bookITS",
  },
  {
    id: 2,
    title: "ClassSpace",
    description: "Classroom platform for lecturers (UI/UX + Frontend).",
    tech: ["figma", "react", "tailwindcss"],
    imageUrl: "/classpace.png",
    githubUrl:"https://github.com/Eeja07/course-webapp-project",
  },
  {
    id: 3,
    title: "Cravory",
    description: "Food recipe website built with MERN stack.",
    tech: ["react", "nodejs", "mongodb", "expressjs", "tailwindcss"],
    imageUrl: "/cravory.png",
    githubUrl: "https://github.com/lexiiyz/cravory",
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "Personal portfolio built with Next.js and TypeScript.",
    tech: ["nextjs", "typescript", "tailwindcss"],
    imageUrl: "/myportofolio.png",
    githubUrl: "https://github.com/lexiiyz/portfolio",
  },
];