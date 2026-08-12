"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { AmbientShapes } from "@/components/shared/AmbientShapes";

export function FAQ() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <AmbientShapes variant="orange" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="FAQ"
            title="Questions from Parents"
            subtitle="Everything you need to know before taking the next step."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto max-w-3xl rounded-2xl bg-palace-cream p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
