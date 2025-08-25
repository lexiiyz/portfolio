import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string | string[] | React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const refs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !text) return;

    const allEls = refs.current.filter(Boolean);
    let splitters: GSAPSplitText[] = [];

    allEls.forEach((el, idx) => {
      let splitter: GSAPSplitText;
      try {
        splitter = new GSAPSplitText(el, {
          type: splitType,
          linesClass: "split-line",
        });
        splitters.push(splitter);

        let targets: Element[] =
          splitType === "lines"
            ? splitter.lines
            : splitType === "words"
            ? splitter.words
            : splitter.chars;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%+=${rootMargin}`,
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            onLetterAnimationComplete?.();
          },
        });

        tl.set(targets, { ...from, immediateRender: false });
        tl.to(targets, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
        });
      } catch (err) {
        console.error("SplitText failed:", err);
      }
    });

    return () => {
      splitters.forEach((s) => s.revert());
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const texts = Array.isArray(text) ? text : [text];

  return (
    <div style={{ textAlign }}>
      {texts.map((t, i) => (
        <p
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          className={`split-parent overflow-hidden whitespace-normal ${className}`}
          style={{ wordWrap: "break-word" }}
        >
          {t}
        </p>
      ))}
    </div>
  );
};

export default SplitText;
