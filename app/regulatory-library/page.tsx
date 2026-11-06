import type { Metadata } from "next";
import {
  Hero,
  CuratedTopics,
  FaqSection,
} from "@/components/regulatory-intelligence-library";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Regulatory Library | Regulatory Intelligence | ZoikoAssure",
  description:
    "Explore source-linked regulatory material by jurisdiction, authority and topic—with clear versions, dates and the limits of human interpretation.",
};

const IMG = "/regulatory-library";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    muted: true,
    blocks: [
      {
        title: "Finding a record does not establish whether it applies to a particular organization.",
        description:
          "Applicability depends on jurisdiction, entity, activity and effective period. Check the official publisher for later amendments or corrections.",
      },
      {
        title: "From Authoritative Requirement to Defensible Assurance",
        description:
          "Follow the sequence: Regulatory Source → Applicability → Obligation → Control → Evidence → Assurance. Each phase connects logic without obscuring the prior basis.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/rl2.webp`,
      alt: "Professional reviewing documents on a laptop to analyze applicability facts",
    },
  },
  {
    imageLeft: true,
    blocks: [
      {
        title: "Effective Time Is Not Observed Time",
        description:
          "Separate publication, legal effective period, discovery, decision and evidence-as-of timestamps. This record reflects the identified source version and dates.",
      },
      {
        title: "Original Language and Content Rights",
        description:
          "Full-text access is governed by source licenses. Use the official source link where permitted. Machine translations are explicitly labeled as non-authoritative.",
      },
    ],
    cta: { label: "Review Source Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/rl3.webp`,
      alt: "Analyst mapping decision outcomes and scenarios on a growth chart",
    },
  },
  {
    muted: true,
    blocks: [
      {
        title: "AI Assistance With Sources—and Human Accountability.",
        description:
          "Source-grounded analysis can help legal and compliance teams review relevant material. Outputs remain qualified, reviewable and subject to accountable human judgment.",
      },
      {
        title: "Human Interpretation Boundary",
        description:
          "ZoikoAssure explainer records are not legal advice. Do not infer organization-specific applicability without professional review.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/rl4.webp`,
      alt: "Human and robotic hand shaking, representing AI assistance with human accountability",
    },
  },
];

export default function RegulatoryIntelligenceLibraryPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <CuratedTopics />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
