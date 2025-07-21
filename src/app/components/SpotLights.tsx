'use client';

import React, { useRef, useState } from 'react';
import { Project } from '../data/project';
import { techLogos } from '../data/techLogos';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  project: Project; 
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  project,
  children, 
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleCardClick = () => {
    if (project.demoUrl && project.demoUrl !== '#') {
      window.open(project.demoUrl, '_blank');
    } else if (project.githubUrl && project.githubUrl !== '#') {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick} 
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {project.imageUrl && ( 
          <div className="mb-4">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-cover rounded-md" 
            />
          </div>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((techName) => {
            if (typeof techName !== 'string' || !techName) {
              return null;
            }
            const logoUrl = techLogos[techName.toLowerCase()];
            if (logoUrl) {
              return (
                <img
                  key={techName}
                  src={logoUrl}
                  alt={`${techName} logo`}
                  className="h-7 w-7 object-contain"
                />
              );
            }
            return null;
          })}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-gray-300 flex-grow">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm rounded-md transition duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;