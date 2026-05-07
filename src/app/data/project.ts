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
    description: "Enterprise-grade home server built on Proxmox VE, running multiple VMs and LXC containers. Hosts local LLMs with NVIDIA GPU passthrough via Ollama, real-time system monitoring with Grafana, container orchestration with Docker, and public tunnel exposure through Cloudflare. Powers several personal projects as a fully self-managed private cloud.",
    tech: ["proxmox", "docker", "ubuntu", "linux", "cloudflare", "grafana", "nvidia"],
    imageUrl: "/server.png",
    category: 'DevOps',
  },
  {
    id: 2,
    title: "Sakai Chatbot",
    description: "Final Year Project — a RAG-based WhatsApp chatbot running on a self-hosted Proxmox homelab. Powered by local LLMs via Ollama with pgvector for semantic search and Redis for session memory. Built entirely on n8n with two workflows: a chatbot pipeline and a document ingestion pipeline with a ReactJS frontend. Uses GOWA as the WhatsApp gateway.",
    tech: ["n8n", "whatsapp", "ollama", "redis", "pgvector", "react", "proxmox", "docker"],
    imageUrl: "/sakai.png",
    category: 'AI',
  },
  {
    id: 3,
    title: "AWS EC2 Self-Hosted Server",
    description: "Personal cloud server built on AWS EC2 with a full self-hosted stack — Nginx as reverse proxy, Portainer for container management, and Grafana for real-time monitoring and dashboards.",
    tech: ["aws", "nginx", "portainer", "grafana", "docker", "ubuntu", "linux"],
    imageUrl: "/ec2.png",
    category: 'DevOps',
  },
  {
    id: 4,
    title: "AskInfo",
    description: "AI-powered chatbot for scheduling events via Google Calendar, with Google Drive integration as a dynamic knowledge base — upload files to Drive and the bot instantly uses them to answer questions.",
    tech: ["n8n", "react", "google-calendar", "google-drive", "supabase", "groq", "gpt", "pinecone"],
    imageUrl: "/botlender.png",
    category: 'AI',
    githubUrl: "https://github.com/lexiiyz/diskominfo-widget",
    demoUrl: "https://diskominfo-widget.vercel.app/",
  },
  {
    id: 5,
    title: "SwimMate",
    description: "Mobile application for tracking swimming performance and stats.",
    tech: ["flutter", "dart", "figma"],
    imageUrl: "/swimmate.jpeg", 
    githubUrl: "https://github.com/Eeja07/Swimate",
    category: 'Mobile',
  },
  {
    id: 6,
    title: "Sentinel",
    description: "Safety gear detection system for industrial environments.",
    tech: ["python", "react", "fastapi", "expressjs", "postgresql", "typescript", "tailwindcss", "figma", "nodejs", "postman"],
    imageUrl: "/sentinel.png",
    githubUrl: "https://github.com/lexiiyz/Protel",
    category: 'AI',
  },
  {
    id: 7,
    title: "Pos App",
    description: "Point of Sale application for retail businesses, complete with Stock Management, and Admin Dashboard.",
    tech: ["flutter", "dart", "supabase"],
    imageUrl: "/posapp.png",
    githubUrl: "https://github.com/lexiiyz/pos-app",
    category: 'Mobile',
  },
  {
    id: 8,
    title: "Literae",
    description: "FrontEnd Bookstore Website Using Google BooksAPI, built with React.js, Typescript, and TailwindCSS",
    tech: ["reactjs", "typescript", "tailwindcss", "postman"],
    imageUrl : "/literae.png",
    githubUrl : "https://github.com/lexiiyz/minilemon-test",
    demoUrl : "https://minilemon-test-liard.vercel.app/",
    category: 'Web',
  },
  {
    id: 9,
    title: "ClassSpace",
    description: "Classroom platform for lecturers (UI/UX + Frontend).",
    tech: ["figma", "react", "tailwindcss"],
    imageUrl: "/classpace.png",
    githubUrl:"https://github.com/Eeja07/course-webapp-project",
    category: 'Web',
  },
  {
    id: 10,
    title: "My Portfolio",
    description: "Personal portfolio built with Next.js and TypeScript.",
    tech: ["nextjs", "typescript", "tailwindcss"],
    imageUrl: "/myportofolio.png",
    githubUrl: "https://github.com/lexiiyz/portfolio",
    category: 'Web',
  },
  {
    id: 11,
    title: "BookITS",
    description: "Full-stack e-commerce book platform built with MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["react", "nodejs", "mongodb", "expressjs", "postman"],
    imageUrl: "/bookits.png",
    githubUrl: "https://github.com/lexiiyz/bookITS",
    category: 'Web',
  },
  {
    id: 12,
    title: "Cravory",
    description: "Food recipe website built with MERN stack.",
    tech: ["react", "nodejs", "mongodb", "expressjs", "tailwindcss"],
    imageUrl: "/cravory.png",
    githubUrl: "https://github.com/lexiiyz/cravory",
    category: 'Web',
  },
  {
    id: 13,
    title: "IoT HVAC Control",
    description: "Smart HVAC control and monitoring system using ESP32 and MQTT, with a Laravel dashboard.",
    tech: ["arduino", "mqtt", "laravel", "c++"],
    imageUrl: "",
    githubUrl: "",
    category: 'IoT',
  }
];