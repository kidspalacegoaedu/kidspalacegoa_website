"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          className={cn(
            "container-custom flex h-20 origin-center items-center justify-between px-4 transition-transform duration-500 ease-out sm:px-6 lg:px-8",
            scrolled && "scale-[0.96]"
          )}
        >
          <Link href="#home" className="relative z-50 shrink-0">
            <Image
              src="/logo.png"
              alt="Kids Palace Preschool & Daycare"
              width={140}
              height={70}
              className="h-14 w-auto object-contain sm:h-16"
              priority
            />
          </Link>

          <div
            className={cn(
              "hidden items-center gap-1 rounded-2xl p-1 transition-[background-color,box-shadow,border-color] duration-500 lg:flex",
              scrolled
                ? "border border-transparent"
                : "border border-white/15 bg-palace-charcoal/55 shadow-soft backdrop-blur-md"
            )}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold transition-[transform,background-color,color,box-shadow] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange focus-visible:ring-offset-2",
                  scrolled
                    ? "text-palace-charcoal hover:-translate-y-px hover:bg-palace-warm hover:text-palace-orange"
                    : "text-white hover:-translate-y-px hover:bg-white/15 hover:text-white hover:shadow-soft"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant={scrolled ? "default" : "glass"}
              size="sm"
              className="gap-2"
            >
              <a href={PHONE_HREF}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-50 flex h-11 w-11 items-center justify-center rounded-xl transition-[transform,background-color,color] duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange focus-visible:ring-offset-2 lg:hidden",
              scrolled || mobileOpen
                ? "text-palace-charcoal hover:bg-palace-warm"
                : "bg-palace-charcoal/45 text-white shadow-soft backdrop-blur-md hover:bg-palace-charcoal/65"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-palace-charcoal/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-white px-6 pb-8 pt-24 shadow-soft-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 font-heading text-lg font-medium text-palace-charcoal transition-colors hover:bg-palace-warm hover:text-palace-orange"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <Button asChild className="w-full gap-2">
                  <a href={PHONE_HREF}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
