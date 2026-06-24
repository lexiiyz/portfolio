import React from 'react';

const CommandExperience: React.FC = () => (
  <div className="space-y-6 text-gray-300 font-mono text-xs md:text-sm">
    <p className="text-[var(--accent)] font-bold">// WORK & ORGANIZATIONAL TIMELINE:</p>
    <div className="space-y-4 pl-2 border-l border-white/10">
      {/* Job 1 */}
      <div>
        <div className="flex justify-between items-start flex-wrap gap-1">
          <span className="text-[var(--accent)] font-bold">⚡ Software Engineer Intern</span>
          <span className="text-gray-500">Jun 2026 – Present</span>
        </div>
        <p className="text-gray-400 text-xs">PT Lautan Natural Krimerindo (MERN Stack Dev)</p>
        <ul className="text-gray-400 text-[11px] list-disc pl-4 mt-1 space-y-0.5">
          <li>Engineered full-stack internal web applications leveraging MongoDB, Express, React, and Node.js.</li>
          <li>Developed dynamic, responsive, and state-driven frontend interfaces using React.js.</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div>
        <div className="flex justify-between items-start flex-wrap gap-1">
          <span className="text-[var(--accent-purple)] font-bold">⚡ Software Developer (Freelance)</span>
          <span className="text-gray-500">Dec 2025 – Present</span>
        </div>
        <p className="text-gray-400 text-xs">Independent (Next.js & Python backend developer)</p>
        <ul className="text-gray-400 text-[11px] list-disc pl-4 mt-1 space-y-0.5">
          <li>Spearheaded custom software delivery for diverse clients.</li>
          <li>Built scalable web apps using Next.js and Python.</li>
        </ul>
      </div>

      {/* Job 3 */}
      <div>
        <div className="flex justify-between items-start flex-wrap gap-1">
          <span className="text-[var(--accent-rose)] font-bold">⚡ IoT Engineer Intern</span>
          <span className="text-gray-500">Sep 2025 – Dec 2025</span>
        </div>
        <p className="text-gray-400 text-xs">PT Javadwipa Duta Mandiri (HVAC automation & ESP32)</p>
        <ul className="text-gray-400 text-[11px] list-disc pl-4 mt-1 space-y-0.5">
          <li>Engineered an IoT-based HVAC automation system using ESP32 and BME280 sensors.</li>
          <li>Developed a custom IR Blaster mechanism to control legacy AC units digitally.</li>
        </ul>
      </div>

      {/* Job 4 */}
      <div>
        <div className="flex justify-between items-start flex-wrap gap-1">
          <span className="text-[var(--accent)] font-bold">⚡ Software Engineer Intern</span>
          <span className="text-gray-500">Jan 2026 – Mar 2026</span>
        </div>
        <p className="text-gray-400 text-xs">Diskominfo Kota Semarang (n8n workflows & RAG integration)</p>
        <ul className="text-gray-400 text-[11px] list-disc pl-4 mt-1 space-y-0.5">
          <li>Engineered automated meeting scheduling systems utilizing n8n workflows.</li>
          <li>Built an Enterprise RAG System integrating OpenAI with Google Calendar and Drive APIs.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default CommandExperience;
