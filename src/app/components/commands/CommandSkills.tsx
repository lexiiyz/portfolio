import React from 'react';

const CommandSkills: React.FC = () => (
  <div className="space-y-4 text-gray-300 font-mono text-xs md:text-sm">
    <p className="text-[var(--accent)] font-bold">// TECHNICAL ARSENAL:</p>
    <div className="space-y-3">
      <div>
        <span className="text-[var(--accent)] font-bold">[FRONTEND]:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Flutter", "Dart", "Figma"].map(s => (
            <span key={s} className="px-2.5 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 rounded text-xs">{s}</span>
          ))}
        </div>
      </div>
      
      <div>
        <span className="text-[var(--accent-purple)] font-bold">[BACKEND & DATABASES]:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "Supabase", "Redis"].map(s => (
            <span key={s} className="px-2.5 py-0.5 bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/30 rounded text-xs">{s}</span>
          ))}
        </div>
      </div>
      
      <div>
        <span className="text-[var(--accent-rose)] font-bold">[DEVOPS & INFRASTRUCTURE]:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Proxmox VE", "Docker", "AWS EC2", "Cloudflare Tunnels", "Nginx", "Portainer", "Grafana", "Prometheus", "Linux/Ubuntu Server", "n8n Automation"].map(s => (
            <span key={s} className="px-2.5 py-0.5 bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] border border-[var(--accent-rose)]/30 rounded text-xs">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CommandSkills;
