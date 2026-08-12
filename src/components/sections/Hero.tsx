"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "@/components/shared/FloatingShapes";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&q=80"
          alt="Happy children learning and playing at preschool"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <FloatingShapes />

      <div className="container-custom relative z-10 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-palace-orange" />
              Premium Preschool in Goa
            </span>
          </motion.div>

          <motion.h1
            className="heading-display mb-6 text-balance text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Home Away{" "}
            <span className="relative">
              From Home
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-orange"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where little hearts grow through play, curiosity, and care. Kids Palace
            offers a nurturing environment where every child discovers the joy of
            learning.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild variant="gradient" size="lg" className="group">
              <Link href="#admissions">
                Admissions Open
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
              <div className="h-2 w-full rounded-full bg-white/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
