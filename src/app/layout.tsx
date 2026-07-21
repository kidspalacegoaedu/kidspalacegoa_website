import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kids Palace Preschool & Daycare | Premium Preschool in Goa",
  description:
    "Kids Palace Preschool & Daycare in Goa — nurturing young minds since 2009 through play-based learning, holistic development, and a safe, welcoming environment.",
  keywords: [
    "preschool Goa",
    "daycare Goa",
    "Kids Palace",
    "playgroup Goa",
    "nursery school Goa",
    "early childhood education",
  ],
  openGraph: {
    title: "Kids Palace Preschool & Daycare",
    description: "A Home Away From Home — Premium Preschool in Goa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
