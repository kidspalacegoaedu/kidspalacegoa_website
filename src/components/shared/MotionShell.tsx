"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { motion, useReducedMotion } from "framer-motion";

export function MotionShell({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: 88, lock: true },
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return (
    <motion.div
      // Keep server-rendered content visible if JavaScript is delayed or fails.
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={
        !hasMounted || reduceMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
