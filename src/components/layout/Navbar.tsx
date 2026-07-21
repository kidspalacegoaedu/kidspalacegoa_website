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
        <nav className="container-custom flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
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

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:text-palace-orange",
                  scrolled ? "text-palace-charcoal" : "text-white/90 hover:text-white"
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
              "relative z-50 flex h-11 w-11 items-center justify-center rounded-xl lg:hidden",
              scrolled || mobileOpen
                ? "text-palace-charcoal"
                : "text-white"
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
