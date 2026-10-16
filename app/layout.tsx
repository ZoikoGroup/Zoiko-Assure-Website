import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ZoikoAssure | AI Compliance Intelligence & Continuous Assurance Platform",
  description:
    "ZoikoAssure is an AI-powered compliance intelligence platform enabling regulatory monitoring, governance visibility, and continuous assurance across global compliance frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-full bg-white text-cyan-950 antialiased font-sans`}>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}