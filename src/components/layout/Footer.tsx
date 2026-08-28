"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBERS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const socialIcons = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Kids+Palace+Preschool%2C+Near+Tivim+Industrial+Estate%2C+Damadem%2C+Karaswad+Road%2C+Mumbai+Goa+Highway%2C+Acoi+Village%2C+Goa+403526";

export function Footer() {
  return (
    <ScrollReveal>
    <footer className="bg-palace-charcoal text-white">
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5">
              <Image
                src="/logo.png"
                alt="Kids Palace"
                width={160}
                height={107}
                sizes="(max-width: 640px) 140px, 160px"
                className="h-auto w-full max-w-[160px]"
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-palace-orange"
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
                      className="text-sm text-white/70 transition-colors duration-300 hover:text-palace-orange"
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
                <li>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/address flex items-start gap-3 rounded-lg -m-1 p-1 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-palace-orange transition-transform duration-300 group-hover/address:-translate-y-0.5" />
                    <span>
                      Kids Palace Preschool, After Tivim Industrial Estate,
                      <br />
                      Near forest check post, Damadem Karaswada, North Goa, 403526
                      <ExternalLink className="ml-1 inline h-3 w-3 opacity-0 transition-opacity duration-300 group-hover/address:opacity-100" />
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-palace-orange" />
                  <div className="flex flex-col gap-1">
                    {PHONE_NUMBERS.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="rounded transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-palace-orange" />
                  <a
                    href="mailto:kidspalacegoa@gmail.com"
                    className="rounded transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange"
                  >
                    kidspalacegoa@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em]">
                Hours
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>School: 9:00 AM – 12:30 PM</li>
                <li>Daycare: Up to 6:00 PM</li>
                <li>Working Days: Monday to Friday</li>
                <li>Saturday: Only Daycare</li>
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
    </ScrollReveal>
  );
}
