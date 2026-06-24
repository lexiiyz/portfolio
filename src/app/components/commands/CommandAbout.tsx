import React from 'react';

const CommandAbout: React.FC = () => (
  <div className="space-y-3 text-gray-300 font-mono text-xs md:text-sm leading-relaxed max-w-3xl">
    <p className="text-[var(--accent)] font-bold">// USER PROFILE DATA:</p>
    <p>
      <span className="text-[var(--accent-purple)]">Name:</span> Rakha Renanda
    </p>
    <p>
      <span className="text-[var(--accent-purple)]">Education:</span> Computer Engineering Undergraduate at Institut Teknologi Sepuluh Nopember (ITS).
    </p>
    <p>
      <span className="text-[var(--accent-purple)]">Focus:</span> Full Stack Web Development, DevOps & Infrastructure, AI Automation.
    </p>
    <p>
      Obsessed with efficiency and automating workflows. Passionate about self-hosting, cloud orchestration, building seamless digital experiences, and AI-powered solutions (RAG systems, local LLMs running on a Proxmox homelab).
    </p>
  </div>
);

export default CommandAbout;
