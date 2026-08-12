import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBERS } from "@/lib/constants";

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
                    Kid&apos;s Palace Preschool, After Tivim Industrial Estate,
                    <br />
                    Near forest check post Damadem Karaswada, North Goa,403526
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-palace-orange" />
                  <div className="flex flex-col gap-1">
                    {PHONE_NUMBERS.map((phone) => (
                      <a key={phone.href} href={phone.href} className="hover:text-white">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-palace-orange" />
                  <a href="mailto:kidspalacegoa@gmail.com" className="hover:text-white">
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
  );
}
