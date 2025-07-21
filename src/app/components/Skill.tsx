import React from "react";
import Marquee from "react-fast-marquee";
import { techLogos } from "../data/techLogos"; // Pastikan path ini benar

export default function Skill() {
;
  return (
      <div className="text-white text-center"> 
        <h1 className="font-extrabold text-3xl md:text-4xl mb-3 text-purple-300 drop-shadow-lg">
          Tech <span className="text-blue-300">Stack</span>
        </h1>
        <h3 className="text-lg md:text-xl mb-10 text-gray-200">
          Tools to make a brilliant website
        </h3>

        <Marquee
          autoFill
          direction="right"
          className="py-4"
        >
          {Object.entries(techLogos).slice(0, 6).map(([techName, logoSrc]) => (
            <div
              key={techName}
              className="tech-bubble text-white py-3 px-6 rounded-full mx-4 flex items-center gap-3
                         bg-white/10 border border-white/20 hover:bg-white/20
                         transition-colors duration-300 shadow-md backdrop-blur-sm"
            >
              <img src={logoSrc} alt={techName} className="w-7 h-7" />
              <span className="text-lg font-medium">{techName.replace(/js|css|html|next|tailwind|node|type|figma|my|mongo|git/i, (match) => {
                  switch (match.toLowerCase()) {
                    case 'reactjs': return 'React JS';
                    case 'html': return 'HTML';
                    case 'css': return 'CSS';
                    case 'nextjs': return 'Next.js';
                    case 'expressjs': return 'Express JS';
                    case 'tailwindcss': return 'Tailwind CSS';
                    default: return match;
                  }
              }).replace(/^./, str => str.toUpperCase())}</span>
            </div>
          ))}
        </Marquee>

        <Marquee
          autoFill
          direction="left"
          className="mt-8 py-4"
        >
          {Object.entries(techLogos).slice(6).map(([techName, logoSrc]) => (
            <div
              key={techName}
              className="tech-bubble text-white py-3 px-6 rounded-full mx-4 flex items-center gap-3
                         bg-white/10 border border-white/20 hover:bg-white/20
                         transition-colors duration-300 shadow-md backdrop-blur-sm"
            >
              <img src={logoSrc} alt={techName} className="w-7 h-7" />
              <span className="text-lg font-medium">{techName.replace(/js|css|html|next|tailwind|node|type|figma|my|mongo|git/i, (match) => {
                  switch (match.toLowerCase()) {
                    case 'nodejs': return 'Node JS';
                    case 'typescript': return 'TypeScript';
                    case 'figma': return 'Figma';
                    case 'mysql': return 'MySQL';
                    case 'mongodb': return 'MongoDB';
                    case 'github': return 'GitHub';
                    case 'js': return 'JavaScript';
                    default: return match;
                  }
              }).replace(/^./, str => str.toUpperCase())}</span>
            </div>
          ))}
        </Marquee>
      </div>
  );
}