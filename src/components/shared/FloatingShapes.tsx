"use client";

import { motion, useReducedMotion } from "framer-motion";

const shapes = [
  { color: "bg-gradient-orange", size: "h-16 w-16", top: "15%", left: "8%", rotate: -6, delay: 0 },
  { color: "bg-gradient-pink", size: "h-12 w-12", top: "25%", right: "12%", rotate: 8, delay: 0.5 },
  { color: "bg-gradient-blue", size: "h-20 w-20", bottom: "20%", left: "15%", rotate: -4, delay: 1 },
  { color: "bg-gradient-green", size: "h-14 w-14", bottom: "30%", right: "8%", rotate: 6, delay: 1.5 },
  { color: "bg-gradient-orange", size: "h-10 w-10", top: "45%", left: "45%", rotate: -8, delay: 0.8 },
  { color: "bg-gradient-pink", size: "h-8 w-8", top: "60%", right: "25%", rotate: 12, delay: 1.2 },
];

export function FloatingShapes() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.color} rounded-2xl opacity-60 shadow-soft`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
            rotate: [shape.rotate, shape.rotate + 5, shape.rotate],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
