import React from 'react';
import Link from 'next/link';
import { projects } from '../../data/project';

const CommandProjects: React.FC = () => (
  <div className="space-y-4 text-gray-300 font-mono text-xs md:text-sm">
    <p className="text-[var(--accent)] font-bold">// DEPLOYED PROJECTS ({projects.length}):</p>
    <div className="space-y-4">
      {projects.slice(0, 5).map((p) => (
        <div key={p.id} className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {p.imageUrl && (
            <div className="w-full sm:w-28 h-16 overflow-hidden rounded bg-slate-950/80 border border-white/5 flex-shrink-0">
              <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-white font-bold">{p.title}</span>
              <span className="px-2 py-0.5 text-[9px] bg-white/5 rounded border border-white/10 text-gray-400 font-mono uppercase">{p.category}</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">{p.description}</p>
            <div className="flex gap-4 mt-2">
              {p.githubUrl && p.githubUrl !== '#' && (
                <Link href={p.githubUrl} target="_blank" className="text-[var(--accent)] text-xs underline hover:text-white">GitHub</Link>
              )}
              {p.demoUrl && p.demoUrl !== '#' && (
                <Link href={p.demoUrl} target="_blank" className="text-[var(--accent-purple)] text-xs underline hover:text-white">Live Demo</Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    {projects.length > 5 && (
      <p className="text-gray-500 mt-2 text-xs">Showing top 5 projects. Explore more repositories on my GitHub page.</p>
    )}
  </div>
);

export default CommandProjects;
