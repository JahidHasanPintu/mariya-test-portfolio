import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jannatul Islam Mariya — Developer & Digital Strategist",
  description:
    "Portfolio of Jannatul Islam Mariya — MERN stack developer, WordPress specialist, content writer, and SEO-driven digital marketer.",
  keywords: [
    "Jannatul Islam Mariya",
    "MERN Stack Developer",
    "WordPress Developer",
    "SEO Specialist",
    "Content Writer",
    "Digital Marketing",
  ],
  authors: [{ name: "Jannatul Islam Mariya" }],
  openGraph: {
    title: "Jannatul Islam Mariya — Developer & Digital Strategist",
    description:
      "Building fast, beautiful digital experiences — from full-stack applications to content that ranks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrument.variable} grain antialiased`}>
        {children}
      </body>
    </html>
  );
}
