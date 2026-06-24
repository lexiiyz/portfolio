'use client';

import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/project';
import Link from 'next/link';

interface LogLine {
  id: string;
  type: 'input' | 'output';
  content: React.ReactNode;
}

// ==========================================
// IMPORT MODULAR COMMAND COMPONENTS
// ==========================================
import CommandHelp from './commands/CommandHelp';
import CommandAbout from './commands/CommandAbout';
import CommandSkills from './commands/CommandSkills';
import CommandExperience from './commands/CommandExperience';
import CommandProjects from './commands/CommandProjects';
import CommandContact from './commands/CommandContact';

// ==========================================
// MAIN TERMINAL COMPONENT
// ==========================================

export default function TerminalConsole() {
  const [history, setHistory] = useState<LogLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusTerminalInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRunCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const commandParts = trimmed.split(' ');
    const primaryCommand = commandParts[0].toLowerCase();

    const inputLine: LogLine = {
      id: Math.random().toString(),
      type: 'input',
      content: `visitor@rakha-homelab:~$ ${trimmed}`,
    };

    let responseContent: React.ReactNode = null;

    switch (primaryCommand) {
      case 'help':
        responseContent = <CommandHelp />;
        break;
      case 'about':
        responseContent = <CommandAbout />;
        break;
      case 'skills':
        responseContent = <CommandSkills />;
        break;
      case 'experience':
        responseContent = <CommandExperience />;
        break;
      case 'projects':
        responseContent = <CommandProjects />;
        break;
      case 'contact':
        responseContent = <CommandContact />;
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        responseContent = (
          <p className="text-red-400 font-mono text-xs md:text-sm">
            bash: command not found: &apos;{primaryCommand}&apos;. Type &apos;help&apos; to show available commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      inputLine,
      { id: Math.random().toString(), type: 'output', content: responseContent }
    ]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputValue(cmdHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  // Welcome banner on mount
  useEffect(() => {
    const welcomeLines: LogLine[] = [
      {
        id: 'w1',
        type: 'output',
        content: (
          <pre className="text-[var(--accent)] font-mono text-[9px] sm:text-xs leading-tight select-none">
{`  ____       _    _           
 |  _ \\ __ _| | _| |__   __ _ 
 | |_) / _\` | |/ / '_ \\ / _\` |
 |  _ < (_| |   <| | | | (_| |
 |_| \\_\\__,_|_|\\_\\_| |_|\\__,_|`}
          </pre>
        ),
      },
      {
        id: 'w2',
        type: 'output',
        content: (
          <div className="text-gray-400 font-mono text-xs md:text-sm mt-2 space-y-1">
            <p>WELCOME TO RAKHA HOMELAB CONSOLE v1.4.2 [ONLINE]</p>
            <p>System status: <span className="text-green-400 font-bold">ACTIVE</span> | Hostname: <span className="text-[var(--accent)]">rakha-homelab</span></p>
            <p>OS: Ubuntu 24.04 LTS (Proxmox Virtual Environment)</p>
            <p className="mt-2 text-white">Please type a command below or click the quick action buttons to interact:</p>
          </div>
        ),
      },
    ];
    setHistory(welcomeLines);
  }, []);

  // Listen to navigation events from navbar
  useEffect(() => {
    const handleTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ command: string }>;
      if (customEvent.detail && customEvent.detail.command) {
        handleRunCommand(customEvent.detail.command);
      }
    };
    window.addEventListener('trigger-terminal-command', handleTrigger);
    return () => window.removeEventListener('trigger-terminal-command', handleTrigger);
  }, [cmdHistory, historyIndex]);

  return (
    <div 
      className="w-full max-w-4xl mx-auto rounded-xl border border-white/[0.08] bg-black/60 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[75vh]"
      onClick={focusTerminalInput}
    >
      {/* Title Bar */}
      <div className="bg-black/80 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between select-none">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs font-bold font-mono text-gray-500 uppercase tracking-widest">
          bash - rakha@homelab
        </span>
        <div className="w-12" /> {/* spacing */}
      </div>

      {/* Terminal Body */}
      <div className="p-4 flex-grow overflow-y-auto space-y-4 custom-scrollbar text-left font-mono">
        {history.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap leading-relaxed">
            {line.content}
          </div>
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center text-xs md:text-sm font-mono text-gray-300">
          <span className="text-green-400 font-bold mr-2">visitor@rakha-homelab:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent border-none outline-none text-white font-mono focus:ring-0 focus:ring-offset-0 p-0 text-xs md:text-sm"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Access Action Buttons Bar */}
      <div className="p-3 bg-black/80 border-t border-white/[0.08] flex flex-wrap gap-2 justify-center select-none z-10">
        {[
          { label: 'ABOUT', cmd: 'about', color: 'text-[var(--accent)] border-[var(--accent)]/30 hover:bg-[var(--accent)]/10' },
          { label: 'SKILLS', cmd: 'skills', color: 'text-[var(--accent)] border-[var(--accent)]/30 hover:bg-[var(--accent)]/10' },
          { label: 'EXPERIENCE', cmd: 'experience', color: 'text-[var(--accent-purple)] border-[var(--accent-purple)]/30 hover:bg-[var(--accent-purple)]/10' },
          { label: 'PROJECTS', cmd: 'projects', color: 'text-[var(--accent-purple)] border-[var(--accent-purple)]/30 hover:bg-[var(--accent-purple)]/10' },
          { label: 'CONTACT', cmd: 'contact', color: 'text-[var(--accent-rose)] border-[var(--accent-rose)]/30 hover:bg-[var(--accent-rose)]/10' },
          { label: 'HELP', cmd: 'help', color: 'text-yellow-400/90 border-yellow-500/30 hover:bg-yellow-500/10' },
          { label: 'CLEAR', cmd: 'clear', color: 'text-gray-500 border-gray-700/50 hover:bg-gray-800/10' }
        ].map((btn) => (
          <button
            key={btn.cmd}
            onClick={(e) => {
              e.stopPropagation();
              handleRunCommand(btn.cmd);
            }}
            className={`px-3 py-1.5 border text-[10px] md:text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-300 bg-black/30 active:scale-95 ${btn.color}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
