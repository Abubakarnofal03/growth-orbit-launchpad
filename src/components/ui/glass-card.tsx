import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "glow" | "glow-violet";
  hover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseClasses = "rounded-2xl backdrop-blur-[20px] border transition-all duration-300";
    
    const variantClasses = {
      default: "bg-[rgba(255,255,255,0.05)] border-[rgba(0,217,255,0.2)]",
      strong: "bg-[rgba(255,255,255,0.08)] border-[rgba(0,217,255,0.3)]",
      glow: "bg-[rgba(255,255,255,0.05)] border-[rgba(0,217,255,0.3)] shadow-[0_0_40px_rgba(0,217,255,0.4)]",
      "glow-violet": "bg-[rgba(255,255,255,0.05)] border-[rgba(157,78,221,0.3)] shadow-[0_0_40px_rgba(157,78,221,0.4)]"
    };

    const hoverClasses = hover 
      ? "hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(0,217,255,0.4)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] hover:-translate-y-1" 
      : "";

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}
        whileHover={hover ? { scale: 1.02 } : {}}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
