"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="section-padding overflow-hidden bg-palace-warm">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Testimonials"
            title="What Parents Say"
            subtitle="Real stories from families who trust Kids Palace with their most precious gift."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="min-w-0 flex-[0_0_100%] px-4"
                  >
                    <Card className="border-0 bg-white shadow-soft-lg">
                      <CardContent className="p-8 sm:p-12">
                        <Quote className="mb-6 h-10 w-10 text-palace-orange/30" />
                        <p className="mb-8 text-lg leading-relaxed text-palace-charcoal sm:text-xl">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-heading font-semibold text-palace-charcoal">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-palace-orange text-palace-orange"
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === selectedIndex
                        ? "w-8 bg-palace-orange"
                        : "w-2 bg-palace-charcoal/20"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
