"use client";

import { MapPin, MessageCircle, CheckCircle2, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ADMISSION_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  MessageCircle,
  CheckCircle2,
};

const stepColors = ["bg-gradient-orange", "bg-gradient-pink", "bg-gradient-green"];

export function AdmissionProcess() {
  return (
    <section id="admissions" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Admissions"
            title="Your Journey Starts Here"
            subtitle="Three simple steps to join the Kids Palace family."
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12">
            {ADMISSION_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              const isEven = i % 2 === 0;

              return (
                <ScrollReveal key={step.step} delay={i * 0.15}>
                  <div
                    className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />

                    <div
                      className={`absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full md:left-1/2 md:block ${stepColors[i]}`}
                    />

                    <div className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div
                        className={`relative rounded-2xl bg-palace-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg ${
                          isEven ? "md:ml-auto" : ""
                        }`}
                      >
                        <div
                          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stepColors[i]} ${
                            isEven ? "md:float-right md:ml-4" : ""
                          }`}
                        >
                          <Icon className="h-6 w-6 text-palace-charcoal" />
                        </div>
                        <span className="mb-2 block font-heading text-sm font-semibold uppercase tracking-widest text-palace-orange">
                          Step {step.step}
                        </span>
                        <h3 className="mb-3 font-heading text-xl font-semibold text-palace-charcoal">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-4 md:hidden">
                      <div className={`h-3 w-3 shrink-0 rounded-full ${stepColors[i]}`} />
                      <span className="font-heading text-sm font-semibold text-palace-orange">
                        Step {step.step}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
