import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ExecutiveBriefingsHero,
  DecisionsDirectorySection,
  FeaturedBriefingSection,
  MastheadAnswerSection,
  VerifiedContextSection,
  DecisionGridSection,
  UncertaintyLimitationsSection,
  BoardAgendaSection,
  RelatedSolutionsSection,
  ExecutiveBriefingsCta,
} from "@/components/executive-briefings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Briefings | ZoikoAssure",
  description:
    "Source-grounded perspectives on regulatory change, governance, evidence and assurance—structured for the questions boards and executive leaders need management to answer.",
};

export default function ExecutiveBriefingsPage() {
  return (
    <main
      className={`${inter.variable} font-sans`}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <ExecutiveBriefingsHero />
      <DecisionsDirectorySection />
      <FeaturedBriefingSection />
      <MastheadAnswerSection />
      <VerifiedContextSection />
      <DecisionGridSection />
      <UncertaintyLimitationsSection />
      <BoardAgendaSection />
      <RelatedSolutionsSection />
      <ExecutiveBriefingsCta />
    </main>
  );
}
