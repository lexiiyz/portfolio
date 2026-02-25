'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { onFinish?: () => void };

export default function Preloader({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Loading...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setText("Ready");
          setTimeout(() => onFinish?.(), 400); 
          return 100;
        }
        return prev + 5; 
      });
    }, 15); 

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div 
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)]"
    >

      <div className="relative z-10 w-64 md:w-96 space-y-4 text-center">
        <h2 className={`text-2xl font-bold tracking-widest text-[var(--accent)] transition-colors`}>
          {text}
        </h2>
        
        <div className="w-full h-1 bg-[var(--border-color)] relative overflow-hidden rounded-full">
          <motion.div
            className={`h-full bg-[var(--accent)]`}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider">
          <span>Initializing</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
