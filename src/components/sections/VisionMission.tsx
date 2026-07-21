"use client";

import { Eye, Target } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export function VisionMission() {
  return (
    <section className="section-padding bg-palace-warm">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Our Purpose"
            title="Vision & Mission"
            subtitle="Guiding principles that shape every moment at Kids Palace."
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <Card className="group h-full overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
              <div className="h-2 bg-gradient-orange" />
              <CardContent className="p-8 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-palace-orange/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                  <Eye className="h-7 w-7 text-palace-orange" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-semibold tracking-wide text-palace-charcoal">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To be Goa&apos;s most trusted early childhood institution — where
                  every child discovers their unique potential in a world-class,
                  nurturing environment that celebrates curiosity, creativity, and
                  compassion.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="group h-full overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
              <div className="h-2 bg-gradient-pink" />
              <CardContent className="p-8 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-palace-pink/10 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
                  <Target className="h-7 w-7 text-palace-pink" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-semibold tracking-wide text-palace-charcoal">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To provide a safe, joyful, and stimulating environment where children
                  learn through play. We partner with families to nurture confident,
                  kind, and curious learners who are ready for life&apos;s beautiful
                  journey ahead.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
