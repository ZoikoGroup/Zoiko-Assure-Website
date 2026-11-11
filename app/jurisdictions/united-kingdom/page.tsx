import type { Metadata } from "next";
import { Hero, NationContexts, FaqSection } from "@/components/united-kingdom";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "United Kingdom | Jurisdictions | ZoikoAssure",
  description:
    "UK regulatory obligations can depend on where an activity takes place, which authority makes the rule, the provision in force and the facts of an organization.",
};

const IMG = "/jurisdictions-united-kingdom-regulatory-exposure";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Geographical extent is not the same as territorial application.",
        description:
          "Understand who made the rule—and in what form. Reserved and devolved matters require different review paths depending on subject matter and legislating body.",
      },
      {
        title: "From original legislation to amendments and current text.",
        description:
          "Distinguish legislation, Statutory Instruments, devolved instruments, guidance, decisions, and supporting materials. The original publisher, official citation, and in-force version must be verified.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/uk2.webp`,
      alt: "Hand selecting a region on a digital world map displayed on a tablet",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "A law’s date is not one clock.",
        description:
          "Royal Assent / making / publication / commencement / effective / editorial observed are distinct timestamps. Unapplied effects, incomplete historic secondary legislation, and uncertain status must be reviewed carefully.",
      },
      {
        title: "Northern Ireland requires additional context.",
        description:
          "Some EU-derived arrangements may remain relevant to specified areas of Northern Ireland under the Windsor Framework. Whether a rule applies depends on its subject, text, date and entity context; obtain specialist review.",
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/uk3.webp`,
      alt: "Professional reviewing documents at a desk beside archive binders",
    },
  },
  {
    blocks: [
      {
        title: "From UK authority to defensible operating evidence.",
        description:
          "Source → Applicability → Obligation → Control → Evidence → Assurance. Ensure distinct control vs evidence vs assurance semantics. Mapped controls are not tested operations.",
      },
      {
        title: "AI Assistance With Sources—and Human Accountability.",
        description:
          "Source-grounded assistance can support triage, but cannot replace legal analysis, accountable approval or direct source inspection.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/uk4.webp`,
      alt: "Legal professionals reviewing and signing a document beside a gavel and scales of justice",
    },
  },
];

export default function UnitedKingdomPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <NationContexts />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
