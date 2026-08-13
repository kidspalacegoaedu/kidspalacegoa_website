"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<(typeof TESTIMONIALS)[number] | null>(null);

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
                    <Card className="min-h-[340px] border-0 bg-white shadow-soft-lg sm:h-[360px]">
                      <CardContent className="flex min-h-[340px] flex-col p-8 sm:h-full sm:p-12">
                        <Quote className="mb-6 h-10 w-10 text-palace-orange/30" />
                        <div className="min-h-0 sm:flex-1">
                          <p className="text-lg leading-relaxed text-palace-charcoal sm:text-xl">
                            &ldquo;{getReviewExcerpt(testimonial.content)}&rdquo;
                          </p>
                          {isLongReview(testimonial.content) && (
                            <button
                              type="button"
                              onClick={() => setSelectedReview(testimonial)}
                              className="mt-3 font-heading text-sm font-semibold text-palace-orange transition-colors duration-300 hover:text-palace-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palace-orange focus-visible:ring-offset-2"
                            >
                              Read full review
                            </button>
                          )}
                        </div>
                        <div className="mt-6 flex items-center justify-between">
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

      <Dialog.Root
        open={selectedReview !== null}
        onOpenChange={(open) => !open && setSelectedReview(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-palace-charcoal/55 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[80vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-white p-6 shadow-soft-lg outline-none sm:p-10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-300">
            <Dialog.Title className="font-heading text-2xl font-semibold text-palace-charcoal">
              Parent Review
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Shared by {selectedReview?.name}
            </Dialog.Description>
            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-palace-charcoal sm:text-lg">
              &ldquo;{selectedReview?.content}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
              <div>
                <p className="font-heading font-semibold text-palace-charcoal">
                  {selectedReview?.name}
                </p>
                <p className="text-sm text-muted-foreground">{selectedReview?.role}</p>
              </div>
              <Dialog.Close asChild>
                <Button variant="outline" size="sm">Close</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

const REVIEW_EXCERPT_LENGTH = 230;

function isLongReview(content: string) {
  return content.length > REVIEW_EXCERPT_LENGTH;
}

function getReviewExcerpt(content: string) {
  return isLongReview(content)
    ? `${content.slice(0, REVIEW_EXCERPT_LENGTH).trimEnd()}…`
    : content;
}
