import React from 'react';

const CommandHelp: React.FC = () => (
  <div className="space-y-2 text-gray-300 font-mono text-xs md:text-sm">
    <p className="text-[var(--accent)] font-bold">{`// AVAILABLE COMMANDS:`}</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-4">
      <div><span className="text-[var(--accent-purple)] font-bold">about</span> - Biography & profile info</div>
      <div><span className="text-[var(--accent-purple)] font-bold">skills</span> - Tech stack & arsenal</div>
      <div><span className="text-[var(--accent-purple)] font-bold">experience</span> - Career timeline & organizations</div>
      <div><span className="text-[var(--accent-purple)] font-bold">projects</span> - Selected portfolio projects</div>
      <div><span className="text-[var(--accent-purple)] font-bold">contact</span> - Contact channels & instant form</div>
      <div><span className="text-[var(--accent-purple)] font-bold">help</span> - Display this help menu</div>
      <div><span className="text-[var(--accent-purple)] font-bold">clear</span> - Clear the terminal screen</div>
    </div>
    <p className="text-gray-500 mt-2 italic">* You can also click the quick access buttons below the terminal.</p>
  </div>
);

export default CommandHelp;
