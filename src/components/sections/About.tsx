"use client";

import Image from "next/image";
import { Shield, Heart, BookOpen, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Counter } from "@/components/shared/Counter";
import { Card, CardContent } from "@/components/ui/card";
import { AmbientShapes } from "@/components/shared/AmbientShapes";

const highlights = [
  {
    icon: Calendar,
    value: 16,
    suffix: "+",
    label: "Years of Excellence",
    color: "text-palace-orange",
    bg: "bg-palace-orange/10",
  },
  {
    icon: BookOpen,
    value: 2009,
    suffix: "",
    label: "Established in 2009",
    color: "text-palace-pink",
    bg: "bg-palace-pink/10",
    isYear: true,
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Safe & Nurturing",
    color: "text-palace-blue",
    bg: "bg-palace-blue/10",
  },
  {
    icon: Heart,
    value: 0,
    suffix: "",
    label: "Play-Based Learning",
    color: "text-palace-green",
    bg: "bg-palace-green/10",
    isText: true,
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <AmbientShapes variant="blue" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="About Us"
            title="Welcome to Kids Palace"
            subtitle="For over sixteen years, we've been Goa's trusted partner in early childhood education — blending warmth, wisdom, and wonder in every classroom."
          />
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                  alt="Children engaged in learning at Kids Palace"
                  fill
                  className="object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl bg-gradient-pink shadow-soft-lg sm:block" />
              <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl bg-gradient-blue shadow-soft sm:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Kids Palace Preschool & Daycare, we believe every child deserves a
                foundation built on love, laughter, and limitless possibility. Our
                thoughtfully designed spaces and passionate educators create an
                environment where children feel safe to explore, create, and grow.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Located in the heart of Goa, we combine international best practices
                with the warmth of a close-knit community. From our youngest toddlers
                to our graduating kindergarteners, every child is seen, heard, and
                celebrated.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item) => (
                  <Card
                    key={item.label}
                    className="border-0 bg-palace-warm shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <CardContent className="p-5">
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}
                      >
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <p className="font-heading text-2xl font-bold text-palace-charcoal">
                        {item.isText ? (
                          "Play"
                        ) : item.isYear ? (
                          "2009"
                        ) : (
                          <Counter value={item.value} suffix={item.suffix} />
                        )}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
