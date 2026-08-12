"use client";

import {
  Baby,
  Blocks,
  BookOpen,
  Pencil,
  GraduationCap,
  Home,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROGRAMS, COLOR_MAP, type AccentColor } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Baby,
  Blocks,
  BookOpen,
  Pencil,
  GraduationCap,
  Home,
  Sun,
};

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-palace-warm">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Programs"
            title="Programs Offered"
            subtitle="Age-appropriate curriculum designed to nurture development at every stage."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROGRAMS.map((program, i) => {
            const Icon = iconMap[program.icon];
            const colors = COLOR_MAP[program.color as AccentColor];

            return (
              <ScrollReveal key={program.title} delay={i * 0.06}>
                <Card className="group h-full overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
                  <div className={`h-1.5 ${colors.gradient}`} />
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.light} transition-transform duration-500 group-hover:rotate-3`}
                      >
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <Badge variant={program.color}>{program.age}</Badge>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-palace-charcoal">
                      {program.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
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
