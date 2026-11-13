import type { Metadata } from "next";
import { Hero, SourceCards, FaqSection } from "@/components/frameworks-ai-governance";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "AI Governance | Frameworks | ZoikoAssure",
  description:
    "Govern AI systems with a clearer path from authoritative guidance and applicable rules to accountable controls, review and evidence.",
};

const IMG = "/frameworks-ai-governance";

const note =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13.5px] font-semibold leading-[1.6] text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Useful alignment does not make sources legally equivalent",
        description: "Definitions and applicable dates differ; no “one-click crosswalk.”",
      },
      {
        title: "From AI inventory to accountable oversight",
        description:
          "Record a system’s purpose and context, assess its risks, establish control ownership, gather evidence, and revisit decisions when the facts change.",
      },
    ],
    image: {
      src: `${IMG}/ag2.webp`,
      alt: "Colleagues smiling and collaborating around a laptop in a meeting",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Link governance intentions to evidence",
        description: (
          <>
            Design/mapping/operation/proof are separate outcomes.
            <span className={note}>Applicability: UNCERTAIN — review required</span>
            <span className="mt-5 block">
              Evidence missing / stale / under review / evidence available. Cannot derive proven
              state from mere attachment.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/ag3.webp`,
      alt: "Hand holding a glowing scales-of-justice icon surrounded by AI and security symbols",
    },
  },
  {
    blocks: [
      {
        title: "AI assists analysis; accountable people decide",
        description: (
          <>
            Source-linked summaries and uncertainty can aid review, but cannot replace
            professional judgment or independently determine compliance.
            <span className="mt-5 block">
              Risk acceptance is recorded separately from assurance. Never present acceptance as
              proof of control operation.
            </span>
          </>
        ),
      },
      {
        title: "See the publisher, version, legal effect and rights",
        description:
          "Where applicable legislation governs, legal interpretation requires facts, dates, jurisdictions and professional review.",
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/ag4.webp`,
      alt: "AI figure beside a digital scale of justice, law books and a gavel",
    },
  },
];

export default function AiGovernanceFrameworksPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SourceCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
