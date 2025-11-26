import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = children.split(" ");

  return (
    <p ref={element} className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // Each word fades in based on scroll position
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }} className="relative">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};