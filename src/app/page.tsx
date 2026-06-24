'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import DotField from './components/DotField';
import TerminalConsole from './components/TerminalConsole';

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ramUsage, setRamUsage] = useState(41);
  const [ping, setPing] = useState(14);
  const [time, setTime] = useState('');

  // Live Homelab system stats simulator
  useEffect(() => {
    if (!showHome) return;

    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * (22 - 6) + 6));
      setRamUsage((prev) => {
        const drift = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + drift;
        return newVal > 46 ? 44 : newVal < 38 ? 40 : newVal;
      });
      setPing(Math.floor(Math.random() * (22 - 12) + 12));
    }, 3000);

    return () => clearInterval(interval);
  }, [showHome]);

  // Live dynamic local clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-[#040408]">
      {!showHome && <Preloader onFinish={() => setShowHome(true)} />} 

      {/* Background 3D DotField effect optimized for performance */}
      <DotField speed={0.8} />

      <AnimatePresence>
        {showHome && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full flex flex-col justify-between items-center relative z-10 px-4 md:px-8 py-20"
          >

            {/* High-Tech System Status Bar */}
            <div className="w-full max-w-4xl bg-black/40 border border-white/[0.06] rounded-xl px-4 py-2.5 backdrop-blur-xl flex flex-wrap justify-between items-center text-[10px] md:text-xs font-mono text-gray-400 gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="font-bold text-white uppercase tracking-wider">SYSTEM STATUS: ACTIVE</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div>HOST: <span className="text-[var(--accent)] font-bold">rakha-homelab</span></div>
                <div className="hidden sm:inline">PING: <span className="text-gray-200">{ping}ms</span></div>
                <div>CPU: <span className="text-gray-200 font-bold">{cpuUsage}%</span></div>
                <div>RAM: <span className="text-gray-200 font-bold">{ramUsage}%</span></div>
                <div className="text-[var(--accent-rose)] font-bold">{time}</div>
              </div>
            </div>

            {/* Center Console Terminal */}
            <div className="w-full flex-grow flex items-center justify-center">
              <TerminalConsole />
            </div>

            {/* Bottom Footer */}
            <div className="text-center font-mono text-[9px] md:text-xs text-gray-600 mt-4 select-none tracking-widest uppercase">
              <span>RAKHA &copy; {new Date().getFullYear()} // DEVOPS & AI LAB // ALL RIGHTS RESERVED</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
