// data/project.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string; // <-- Tambahkan properti ini
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BookITS",
    description: "E-Commerce buku full-stack dengan MERN (MongoDB, Express, React, Node.js).",
    tech: ["react", "nodejs", "mongodb", "expressjs", "postman"],
    imageUrl: "/bookits.png",
    githubUrl: "https://github.com/your-username/bookits", // <-- Ganti dengan URL GitHub sebenarnya
  },
  {
    id: 2,
    title: "ClassSpace",
    description: "Platform classroom untuk dosen (UI/UX + Frontend).",
    tech: ["figma", "react", "tailwindcss"],
    imageUrl: "/classpace.png",
    githubUrl:"https://github.com/Eeja07/course-webapp-project",
  },
  {
    id: 3,
    title: "Cravory",
    description: "Website resep makanan dengan MERN stack.",
    tech: ["react", "nodejs", "mongodb", "expressjs", "tailwindcss"],
    imageUrl: "/images/projects/cravory.png",
    githubUrl: "https://github.com/lexiiyz/cravory",
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "Portfolio pribadi dengan Next.js dan TypeScript.",
    tech: ["nextjs", "typescript", "tailwindcss"],
    imageUrl: "/myportofolio.png",
    githubUrl: "https://github.com/lexiiyz/portfolio",
  },
];