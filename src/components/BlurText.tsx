import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className = "", delay = 0.04 }: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={isVisible ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.5, delay: (wi * 0.1 + ci * delay) }}
            >
              {char}
            </motion.span>
          ))}
          {wi < text.split(" ").length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
