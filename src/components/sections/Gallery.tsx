"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GALLERY_IMAGES } from "@/lib/constants";
import { AmbientShapes } from "@/components/shared/AmbientShapes";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-white">
      <AmbientShapes variant="pink" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Gallery"
            title="Life at Kids Palace"
            subtitle="Glimpses of joy, learning, and discovery — updated regularly."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {GALLERY_IMAGES.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.05}>
              <div
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-palace-warm shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
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
