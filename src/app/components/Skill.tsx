import React from "react";
import Marquee from "react-fast-marquee";
import { techLogos } from "../data/techLogos";

export default function Skill() {
  
  return (
    <div className="text-white text-center">
      <h1
        className="font-extrabold text-3xl md:text-4xl mb-3 text-purple-300 drop-shadow-lg"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Tech <span className="text-blue-300">Stack</span>
      </h1>
      <h3
        className="text-lg md:text-xl mb-10 text-gray-200"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Tools that I use to make beautiful and intuitive websites
      </h3>

      <Marquee
        autoFill
        direction="right"
        className="py-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {Object.entries(techLogos).slice(0, 6).map(([techName, logoSrc]) => (
          <div
            key={techName}
            className="tech-bubble text-white py-3 px-6 rounded-full mx-4
                       flex flex-col md:flex-row items-center gap-1 md:gap-3 
                       bg-white/10 border border-white/20 hover:bg-white/20
                       transition-colors duration-300 shadow-md backdrop-blur-sm"
          >
            <img src={logoSrc} alt={techName} className="w-4 h-4 md:w-7 md:h-7" />
            <span className="text-sm md:text-lg font-medium"> 
              {techName.replace(/reactjs|html|css|nextjs|js|tailwindcss|expressjs/i, (match) => {
                switch (match.toLowerCase()) {
                  case 'reactjs': return 'React.js';
                  case 'html': return 'HTML';
                  case 'css': return 'CSS';
                  case 'nextjs': return 'Next.js';
                  case 'expressjs': return 'Express.js';
                  case 'tailwindcss': return 'Tailwind CSS';
                  case 'js': return 'JavaScript';
                  default: return match;
                }
              }).replace(/^./, str => str.toUpperCase())}
            </span>
          </div>
        ))}
      </Marquee>

      <Marquee
        autoFill
        direction="left"
        className="mt-8 py-4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {Object.entries(techLogos).slice(6).map(([techName, logoSrc]) => (
          <div
            key={techName}
            className="tech-bubble text-white py-3 px-6 rounded-full mx-4
                       flex flex-col md:flex-row items-center gap-1 md:gap-3
                       bg-white/10 border border-white/20 hover:bg-white/20
                       transition-colors duration-300 shadow-md backdrop-blur-sm"
          >
            <img src={logoSrc} alt={techName} className="w-4 h-4 md:w-7 md:h-7" />
            <span className="text-sm md:text-lg font-medium"> 
              {techName.replace(/nodejs|typescript|figma|mysql|mongodb|github|js/i, (match) => {
                switch (match.toLowerCase()) {
                  case 'nodejs': return 'Node.js';
                  case 'typescript': return 'TypeScript';
                  case 'figma': return 'Figma';
                  case 'mysql': return 'MySQL';
                  case 'mongodb': return 'MongoDB';
                  case 'github': return 'GitHub';
                  case 'js': return 'JavaScript';
                  default: return match;
                }
              }).replace(/^./, str => str.toUpperCase())}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}