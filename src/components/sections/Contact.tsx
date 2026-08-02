"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  PHONE_NUMBERS,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="section-padding bg-palace-warm">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            badge="Contact"
            title="Get in Touch"
            subtitle="We'd love to welcome you and your little one. Reach out to schedule a visit."
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <Card className="border-0 bg-white shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-5">
                    {[
                      {
                        icon: MapPin,
                        title: "Visit Us",
                        content:
                          "Kid's Palace Preschool, After Tivim Industrial Estate, Near forest check post Damadem Karaswada, North Goa,403526",
                      },
                      {
                        icon: Phone,
                        title: "Call Us",
                        content: null,
                        phoneLinks: PHONE_NUMBERS,
                      },
                      {
                        icon: Mail,
                        title: "Email Us",
                        content: "kidspalacegoa@gmail.com",
                        href: "mailto:kidspalacegoa@gmail.com",
                      },
                      {
                        icon: Clock,
                        title: "Working Hours",
                        content: [
                          "School: 9:00 AM – 12:30 PM",
                          "",
                          "Daycare: 9:00 AM – 6:00 PM",
                          "",
                          "Working Days: Monday to Friday",
                          "",
                          "Saturday: School Closed • Daycare Open",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-palace-orange/10">
                          <item.icon className="h-5 w-5 text-palace-orange" />
                        </div>
                        <div>
                          <p className="font-heading text-sm font-semibold text-palace-charcoal">
                            {item.title}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-palace-orange"
                            >
                              {item.content}
                            </a>
                          ) : item.phoneLinks ? (
                            <div className="flex flex-col gap-1">
                              {item.phoneLinks.map((phone) => (
                                <a
                                  key={phone.href}
                                  href={phone.href}
                                  className="text-sm text-muted-foreground transition-colors hover:text-palace-orange"
                                >
                                  {phone.display}
                                </a>
                              ))}
                            </div>
                          ) : Array.isArray(item.content) ? (
                            <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                              {item.content.map((line) => (
                                <p key={line}>{line}</p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="whatsapp" size="lg" className="w-full gap-2">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>

              <div className="overflow-hidden rounded-2xl shadow-soft">
                <iframe
                  title="Kids Palace Location"
                  src="https://maps.google.com/maps?q=Porvorim,Goa,India&output=embed"
                  className="h-64 w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <Card className="border-0 bg-white shadow-soft-lg">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-palace-green/20">
                      <Send className="h-8 w-8 text-palace-green" />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ve received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child-age">Child&apos;s Age</Label>
                      <Input
                        id="child-age"
                        name="childAge"
                        placeholder="e.g. 3 years"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your inquiry..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2" size="lg">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
