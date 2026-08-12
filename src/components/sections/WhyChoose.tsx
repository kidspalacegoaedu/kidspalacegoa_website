"use client";

import {
  Sparkles,
  Gamepad2,
  HeartHandshake,
  ShieldCheck,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { AmbientShapes } from "@/components/shared/AmbientShapes";
import { WHY_CHOOSE, COLOR_MAP, type AccentColor } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Gamepad2,
  HeartHandshake,
  ShieldCheck,
  Users,
  Rocket,
};

export function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <AmbientShapes variant="orange" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Why Kids Palace"
            title="Why Parents Choose Us"
            subtitle="A premium experience rooted in care, quality, and a genuine love for children."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[item.icon];
            const colors = COLOR_MAP[item.color as AccentColor];

            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="group h-full border-0 bg-palace-cream transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
                  <CardContent className="p-8">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.light} transition-transform duration-500 group-hover:rotate-2 group-hover:scale-110`}
                    >
                      <Icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-semibold text-palace-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div
                      className={`mt-6 h-1 w-12 rounded-full ${colors.gradient} transition-all duration-500 group-hover:w-20`}
                    />
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
