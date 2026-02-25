export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string; 
  demoUrl?: string;
  githubUrl?: string;
  category: 'Web' | 'Mobile' | 'IoT' | 'DevOps' | 'AI'; // Split IoT/AI and added DevOps
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Proxmox AI Homelab",
    description: "Enterprise-grade home server orchestration. Hosting local LLMs with GPU passthrough, Grafana, and automating workflows with self-hosted infrastructure.",
    tech: ["proxmox", "docker", "ubuntu", "linux", "cloudflare"],
    imageUrl: "/server.png",
    category: 'DevOps',
  },
  {
    id: 2,
    title: "BotLender",
    description: "Telegram chatbot for scheduling events, integrated with Google Calendar.",
    tech: ["n8n", "telegram", "google-calendar"], 
    imageUrl: "/botlender.png", 
    category: 'AI',
  },
  {
    id: 3,
    title: "SwimMate",
    description: "Mobile application for tracking swimming performance and stats.",
    tech: ["flutter", "dart", "figma"],
    imageUrl: "/swimmate.jpeg", 
    githubUrl: "https://github.com/Eeja07/Swimate",
    category: 'Mobile',
  },
  {
    id: 4,
    title: "Sentinel",
    description: "Safety gear detection system for industrial environments.",
    tech: ["python", "react", "fastapi", "expressjs", "postgresql", "typescript", "tailwindcss", "figma", "nodejs", "postman"],
    imageUrl: "/sentinel.png",
    githubUrl: "https://github.com/lexiiyz/Protel",
    category: 'AI',
  },
  {
    id: 5,
    title: "Pos App",
    description: "Point of Sale application for retail businesses, complete with Stock Management, and Admin Dashboard.",
    tech: ["flutter", "dart", "supabase"],
    imageUrl: "/posapp.png",
    githubUrl: "https://github.com/lexiiyz/pos-app",
    category: 'Mobile',
  },
  {
    id: 6,
    title: "Literae",
    description: "FrontEnd Bookstore Website Using Google BooksAPI, built with React.js, Typescript, and TailwindCSS",
    tech: ["reactjs", "typescript", "tailwindcss", "postman"],
    imageUrl : "/literae.png",
    githubUrl : "https://github.com/lexiiyz/minilemon-test",
    demoUrl : "https://minilemon-test-liard.vercel.app/",
    category: 'Web',
  },
  {
    id: 7,
    title: "ClassSpace",
    description: "Classroom platform for lecturers (UI/UX + Frontend).",
    tech: ["figma", "react", "tailwindcss"],
    imageUrl: "/classpace.png",
    githubUrl:"https://github.com/Eeja07/course-webapp-project",
    category: 'Web',
  },
  {
    id: 8,
    title: "My Portfolio",
    description: "Personal portfolio built with Next.js and TypeScript.",
    tech: ["nextjs", "typescript", "tailwindcss"],
    imageUrl: "/myportofolio.png",
    githubUrl: "https://github.com/lexiiyz/portfolio",
    category: 'Web',
  },
  {
    id: 9,
    title: "BookITS",
    description: "Full-stack e-commerce book platform built with MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["react", "nodejs", "mongodb", "expressjs", "postman"],
    imageUrl: "/bookits.png",
    githubUrl: "https://github.com/lexiiyz/bookITS",
    category: 'Web',
  },
  {
    id: 10,
    title: "Cravory",
    description: "Food recipe website built with MERN stack.",
    tech: ["react", "nodejs", "mongodb", "expressjs", "tailwindcss"],
    imageUrl: "/cravory.png",
    githubUrl: "https://github.com/lexiiyz/cravory",
    category: 'Web',
  },
  {
    id: 11,
    title: "IoT HVAC Control",
    description: "Smart HVAC control and monitoring system using ESP32 and MQTT, with a Laravel dashboard.",
    tech: ["arduino", "mqtt", "laravel", "c++"],
    imageUrl: "",
    githubUrl: "",
    category: 'IoT',
  }
];