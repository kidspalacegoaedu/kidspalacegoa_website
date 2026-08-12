"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffset = {
    up: { y: 18, x: 0 },
    down: { y: -18, x: 0 },
    left: { y: 0, x: 18 },
    right: { y: 0, x: -18 },
    none: { y: 0, x: 0 },
  };

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.985, ...offset }}
      animate={
        reduceMotion || isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, scale: 0.985, ...offset }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
