'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Beams from './Beams';

type Props = { onFinish?: () => void };

export default function Preloader({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("SYSTEM LOADING...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setText("SYSTEM READY");
          setTimeout(() => onFinish?.(), 800); 
          return 100;
        }
        return prev + 2; 
      });
    }, 20); 

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div 
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#00f0ff"
          speed={4}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 w-64 md:w-96 space-y-4 text-center">
        <h2 className={`text-2xl font-bold tracking-widest glitch-text ${progress === 100 ? 'text-[var(--secondary-neon)]' : 'text-[var(--primary-neon)]'}`}>
          {text}
        </h2>
        
        <div className="w-full h-2 bg-gray-900 border border-[var(--primary-neon)]/30 relative overflow-hidden">
          <motion.div
            className={`h-full shadow-[0_0_15px_var(--primary-neon)] ${progress === 100 ? 'bg-[var(--secondary-neon)]' : 'bg-[var(--primary-neon)]'}`}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between text-xs text-[var(--text-primary)] font-mono">
          <span>INITIALIZING CORE</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}