"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { motion, useReducedMotion } from "framer-motion";

export function MotionShell({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

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
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
