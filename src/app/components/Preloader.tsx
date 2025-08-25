'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Beams from './Beams';
import CountUp from './CountUp';
import SplitText from './SplitText';

type Props = { onFinish?: () => void };

export default function Preloader({ onFinish }: Props) {
  const [textIdx, setTextIdx] = useState<number | null>(null);
  const texts = ["Hello !!",
    <>
      <span className="block sm:hidden">
        Welcome to <br /> My Portfolio
      </span><span className="hidden sm:block">
        Welcome to My Portfolio
      </span>
    </>];
  const animationCompletedRef = useRef(false);

  const handleCountUpEnd = () => {
    setTextIdx(0);
    animationCompletedRef.current = false;
  };

  const handleTextEnd = () => {
    if (!animationCompletedRef.current) {
      animationCompletedRef.current = true;
      
      setTimeout(() => {
        setTextIdx(prev => {
          if (prev === null) return null;
          
          if (prev < texts.length - 1) {
            return prev + 1;
          } else {
            setTimeout(() => {
              onFinish?.();
            }, 800); 
            return prev;
          }
        });
      }, 800); 
    }
  };
  
  useEffect(() => {
    animationCompletedRef.current = false;
  }, [textIdx]);

  return (
    <motion.div 
      key="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (!textIdx) return; 
        if (textIdx === texts.length - 1) {
          onFinish?.();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Beams
          beamWidth={4}
          beamHeight={15}
          beamNumber={16}
          lightColor="rgba(132, 0, 255, 0.25)"
          speed={4}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center p-4 text-center">
        <AnimatePresence mode="wait">
          {textIdx === null ? (
            <motion.div
              key="countup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CountUp
                from={0}
                to={100}
                duration={3}
                className="text-blue-300 text-3xl font-bold sm:text-4xl"
                onEnd={handleCountUpEnd}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`text-${textIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SplitText
                text={texts[textIdx]}
                className="text-2xl font-semibold text-center text-blue-300 sm:text-4xl"
                delay={100}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={handleTextEnd}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}