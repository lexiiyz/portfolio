'use client';

import React, { useEffect, useRef } from 'react';

interface DotFieldProps {
  className?: string;
  dotColor?: string;
  accentColor?: string;
  speed?: number;
  density?: number;
}

export default function DotField({
  className,
  dotColor = 'rgba(255, 255, 255, 0.15)',
  accentColor = 'rgba(0, 242, 254, 0.8)',
  density = 1.0
}: DotFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const spacing = 30 / density;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const onPointerLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const rows = Math.ceil(height / spacing);
      const cols = Math.ceil(width / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Interactive effect: dots near mouse grow and change color
          const maxDist = 150;
          let radius = 1.2;
          let color = dotColor;

          if (dist < maxDist) {
            const intensity = 1 - dist / maxDist;
            radius = 1.2 + intensity * 2.5; // Grow slightly
            
            // Interpolate color for highlight
            if (intensity > 0.1) {
               color = accentColor;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [density, dotColor, accentColor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${className ?? ''}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
