"use client";

import { motion, useReducedMotion } from "framer-motion";

type AmbientShapesProps = { variant?: "orange" | "pink" | "blue" };

const palettes = {
  orange: ["bg-gradient-orange", "bg-gradient-blue"],
  pink: ["bg-gradient-pink", "bg-gradient-green"],
  blue: ["bg-gradient-blue", "bg-gradient-orange"],
};

export function AmbientShapes({ variant = "orange" }: AmbientShapesProps) {
  const reduceMotion = useReducedMotion();
  const [primary, secondary] = palettes[variant];

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
      <motion.div
        className={`absolute -left-10 top-24 h-24 w-24 rounded-[2rem] ${primary} opacity-20 shadow-[inset_8px_8px_16px_rgba(255,255,255,0.35),10px_14px_24px_rgba(26,26,27,0.10)]`}
        initial={{ rotate: -14, rotateX: 12, rotateY: -8 }}
        animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [-14, -6, -14], rotateX: [12, 18, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-8 bottom-20 h-16 w-16 rounded-full ${secondary} opacity-25 shadow-[inset_6px_6px_12px_rgba(255,255,255,0.4),8px_12px_20px_rgba(26,26,27,0.10)]`}
        initial={{ rotateX: 20, rotateY: 20 }}
        animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, 18, 0], rotateY: [20, -12, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}
