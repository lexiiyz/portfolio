'use client';

import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; 
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
                  bg-black transition-opacity duration-500
                  ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <h1 className="text-4xl font-bold text-white animate-pulse">
        Welcome to My Portfolio
      </h1>
    </div>
  );
}