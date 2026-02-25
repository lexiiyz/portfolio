import React from "react";
import Marquee from "react-fast-marquee";
import { techLogos } from "../data/techLogos";

export default function Skill() {
  const invertedLogos = ["expressjs", "flask", "vercel", "github"];

  // Categorize keys manually to ensure correct groupings
  const frontend = ["react", "nextjs", "tailwindcss", "figma", "typescript", "flutter", "dart"];
  const backend = ["nodejs", "expressjs", "python", "mongodb", "postman", "laravel", "fastapi", "supabase"];
  const devops = ["proxmox", "docker", "ubuntu", "linux", "cloudflare", "n8n", "arduino", "github"];

  const renderMarquee = (skills: string[], direction: "left" | "right") => (
    <Marquee
      autoFill
      direction={direction}
      className="py-3"
      speed={40}
    >
      {skills.map((key) => {
        const logoSrc = techLogos[key];
        if (!logoSrc) return null;

        return (
          <div
            key={key}
            className="tech-bubble pro-card text-[var(--text-primary)] py-3 px-6 mx-4
                       flex flex-col md:flex-row items-center gap-2 md:gap-3 
                       transition-colors duration-300 hover:border-[var(--accent)]"
          >
            <img 
              src={logoSrc} 
              alt={key} 
              className={`w-6 h-6 md:w-8 md:h-8 ${invertedLogos.includes(key) ? 'invert brightness-0' : ''}`} 
            />
            <span className="text-sm md:text-base font-bold tracking-wide"> 
              {key.replace(/nodejs|nextjs|reactjs|expressjs|tailwindcss|github|mysql|mongodb|typescript|javascript|c\+\+/i, (match) => {
                switch (match.toLowerCase()) {
                  case 'nodejs': return 'Node.js';
                  case 'nextjs': return 'Next.js';
                  case 'reactjs': return 'React';
                  case 'expressjs': return 'Express';
                  case 'tailwindcss': return 'Tailwind';
                  case 'github': return 'GitHub';
                  case 'mysql': return 'MySQL';
                  case 'mongodb': return 'MongoDB';
                  case 'typescript': return 'TypeScript';
                  case 'javascript': return 'JS';
                  case 'c++': return 'C++';
                  default: return match;
                }
              }).replace(/^./, str => str.toUpperCase())}
            </span>
          </div>
        );
      })}
    </Marquee>
  );
  
  return (
    <div className="text-white text-center py-10 relative overflow-hidden">
      <h1
        className="font-extrabold text-4xl md:text-5xl mb-4 text-[var(--text-primary)] tracking-wide"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Technical <span className="text-[var(--accent)]">Arsenal</span>
      </h1>
      <h3
        className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        My deployment modules. A curated stack of <span className="text-[var(--text-secondary)]">modern web technologies</span> and <span className="text-[var(--accent)]">cloud infrastructure</span> tools.
      </h3>

      <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
        {renderMarquee(frontend, "right")}
        {renderMarquee(backend, "left")}
        {renderMarquee(devops, "right")}
      </div>
    </div>
  );
}
