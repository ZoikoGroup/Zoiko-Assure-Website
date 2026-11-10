import type { Metadata } from "next";
import {
  Hero,
  SourceTypes,
  FaqSection,
} from "@/components/footer-united-states-regulatory-exposure";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "United States Regulatory Exposure | Jurisdictions | ZoikoAssure",
  description:
    "Understand U.S. regulatory exposure in context—how federal and state sources connect to governed applicability and evidence-backed assurance.",
};

const IMG = "/footer-united-states-regulatory-exposure";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "State requirements need state-specific review.",
        description:
          "Requirements can differ by state, regulator, activity, legal entity and time. Only validated state entries are displayed here; absence from this directory is not a finding of non-applicability.",
      },
      {
        title: "Not every regulatory document creates the same obligation.",
        description:
          "Understand the difference between a statute, a proposed rule, a final rule, guidance, and an enforcement action.",
      },
    ],
    cta: { label: "Review Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/us2.webp`,
      alt: "Professional checking off compliance documents on a laptop in front of city towers",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Applicability depends on your actual operating context.",
        description:
          "An applicability decision may require legal review of jurisdiction, entity, activities, customers, product, data and the relevant time period. Missing context or source verification yields an UNCERTAIN state.",
      },
      {
        title: "From U.S. source to defensible operational assurance.",
        description: "Source → Applicability → Obligation → Control → Evidence → Assurance.",
      },
    ],
    cta: { label: "Explore Controls & Evidence", href: "/obligation-control-mapping" },
    image: {
      src: `${IMG}/us3.webp`,
      alt: "Team discussing operating context in front of data charts",
    },
  },
  {
    blocks: [
      {
        title: "A regulatory statement should carry its source and date.",
        description:
          "Identify the official publisher, exact citation, canonical URL, version, effective date, and any specific rights to reproduce or distribute.",
      },
      {
        title: "Coverage, rights and review.",
        description:
          "Content availability, source permissions and review freshness vary. No material on this page should be treated as an automatically complete or current statement of law.",
      },
    ],
    cta: { label: "Report a source issue", href: "/contact" },
    image: {
      src: `${IMG}/us4.webp`,
      alt: "Professional reviewing certified documents in a binder at a desk",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "AI Assistance With Sources—and Human Accountability.",
        description:
          "Source-grounded analysis can help legal and compliance teams review relevant material. Outputs remain qualified, reviewable and subject to accountable human judgment.",
      },
      {
        title: "Compare Federal and State Requirements.",
        description:
          "Federal compliance does not guarantee state/provincial compliance, and requirements often overlap. Ensure independent scope review.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/us5.webp`,
      alt: "Hand holding a glowing AI network connected to document and analytics icons",
    },
  },
];

export default function UnitedStatesPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SourceTypes />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
