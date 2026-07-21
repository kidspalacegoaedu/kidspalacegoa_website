import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const socialIcons = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-palace-charcoal text-white">
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5">
              <Image
                src="/logo.png"
                alt="Kids Palace"
                width={160}
                height={80}
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-sm leading-relaxed text-white/70">
                Nurturing young minds in Goa since 2009. A premium preschool where
                every child discovers joy in learning.
              </p>
              <div className="flex gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-palace-orange"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-palace-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em]">
                Contact
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-palace-orange" />
                  <span>
                    Kids Palace Preschool & Daycare
                    <br />
                    Porvorim, North Goa, India — 403521
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-palace-orange" />
                  <a href={PHONE_HREF} className="hover:text-white">
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-palace-orange" />
                  <a href="mailto:info@kidspalacegoa.com" className="hover:text-white">
                    info@kidspalacegoa.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em]">
                Hours
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Mon – Sat: 8:30 AM – 3:30 PM</li>
                <li>Daycare: Until 6:30 PM</li>
                <li>Sunday: Closed</li>
              </ul>
              <div className="mt-6 flex gap-2">
                <span className="h-3 w-3 rounded-md bg-palace-orange" />
                <span className="h-3 w-3 rounded-md bg-palace-pink" />
                <span className="h-3 w-3 rounded-md bg-palace-blue" />
                <span className="h-3 w-3 rounded-md bg-palace-green" />
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Kids Palace Preschool & Daycare. All rights
              reserved.
            </p>
            <p className="text-xs text-white/50">
              Crafted with care in Goa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
