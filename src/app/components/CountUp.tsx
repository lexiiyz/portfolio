import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "motion/react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number; 
  duration?: number; 
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);


  const motionValue = useMotionValue(direction === "down" ? to : from);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (!startWhen) return;

    if (typeof onStart === "function") {
      onStart();
    }

    const controls = setTimeout(() => {
      animate(
        motionValue,
        direction === "down" ? from : to,
        {
          duration,
          ease: "easeOut",
          onComplete: () => {
            if (typeof onEnd === "function") {
              onEnd();
            }
          },
        }
      );
    }, delay * 1000);

    return () => clearTimeout(controls);
  }, [startWhen, direction, from, to, delay, duration, motionValue, onStart, onEnd]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;

        const options: Intl.NumberFormatOptions = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [motionValue, separator, maxDecimals]);

  return <span className={className} ref={ref} />;
}
