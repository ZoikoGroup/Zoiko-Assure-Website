import type { Metadata } from "next";
import {
  Hero,
  ExploreIntentCards,
  Destinations,
  FaqSection,
} from "@/components/explore-regulatory-intelligence";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Explore Regulatory Intelligence | ZoikoAssure",
  description:
    "Find the information you need to understand regulatory change, review obligations and inspect their authoritative sources.",
};

const IMG = "/explore-regulatory-intelligence";

export default function ExploreRegulatoryIntelligencePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ExploreIntentCards />
      <Destinations />

      <SplitFeatureSection
        muted
        blocks={[
          {
            title: "From authoritative source to defensible assurance",
            description:
              "A source informs applicability; an applicable obligation can be mapped to controls; proof of operation requires evidence and accountable review. These stages are not interchangeable.",
          },
          {
            title: "What counts as source-grounded intelligence?",
            description:
              "Look for the original publisher, citation, jurisdiction, publication and effective dates, document status and version. Some information requires legal or regulatory specialist review.",
          },
        ]}
        image={{
          src: `${IMG}/eri2.webp`,
          alt: "Hand presenting a digital shield with verification icons",
        }}
      />

      <SplitFeatureSection
        imageLeft
        blocks={[
          {
            title: "Where the answer is uncertain, review matters",
            description:
              "If the available record or organizational facts are insufficient, an applicability outcome may remain UNCERTAIN until an accountable reviewer assesses it.",
          },
          {
            title: "Turn regulatory intelligence into an accountable enterprise process",
            description:
              "Discuss how ZoikoAssure can connect regulatory intelligence to obligations, controls, evidence and human assurance review for your organization.",
          },
        ]}
        cta={{ label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" }}
        image={{
          src: `${IMG}/eri3.webp`,
          alt: "Professional studying legal texts beneath a network of regulatory concepts",
        }}
      />

      <FaqSection />
    </div>
  );
}
