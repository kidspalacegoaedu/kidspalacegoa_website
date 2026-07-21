"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Gallery"
            title="Life at Kids Palace"
            subtitle="Glimpses of joy, learning, and discovery — updated regularly."
          />
        </ScrollReveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
          {GALLERY_IMAGES.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.05}>
              <div
                className={`group relative mb-4 overflow-hidden rounded-2xl shadow-soft lg:mb-6 ${
                  image.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-palace-charcoal/0 transition-colors duration-500 group-hover:bg-palace-charcoal/20" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
