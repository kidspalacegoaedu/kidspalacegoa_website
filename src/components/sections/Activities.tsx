"use client";

import Image from "next/image";
import {
  Music,
  Dumbbell,
  BookOpen,
  Palette,
  FlaskConical,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/card";
import { ACTIVITIES, COLOR_MAP, type AccentColor } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Music,
  Dumbbell,
  BookOpen,
  Palette,
  FlaskConical,
  PartyPopper,
};

export function Activities() {
  return (
    <section id="activities" className="section-padding bg-palace-warm">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Activities"
            title="Enriching Experiences"
            subtitle="Beyond the classroom — activities that spark creativity, confidence, and connection."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => {
            const Icon = iconMap[activity.icon];
            const colors = COLOR_MAP[activity.color as AccentColor];

            return (
              <ScrollReveal key={activity.title} delay={i * 0.08}>
                <Card className="group overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-palace-charcoal/70 via-palace-charcoal/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.gradient}`}
                      >
                        <Icon className="h-5 w-5 text-palace-charcoal" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
