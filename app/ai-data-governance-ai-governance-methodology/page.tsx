import type { Metadata } from "next";
import { Hero, SourceCards, FaqSection } from "@/components/ai-data-governance-ai-governance-methodology";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "AI Governance Methodology | AI & Data Governance | ZoikoAssure",
  description:
    "How AI-assisted regulatory work is governed, reviewed, evaluated, and changed.",
};

const IMG = "/ai-data-governance-ai-governance-methodology";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const small = "mt-4 block text-[12.5px] leading-5 text-[#6B7280]";

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
      src: `${IMG}/agm2.webp`,
      alt: "Two colleagues comparing framework documents and a dashboard at a desk",
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
            <span className={noteCase}>Applicability: UNCERTAIN — review required</span>
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
      src: `${IMG}/agm3.webp`,
      alt: "Reviewer examining a printed report beside a colleague with a laptop",
    },
  },
  {
    blocks: [
      {
        title: "AI assists analysis; accountable people decide",
        description: (
          <>
            A model suggestion is a candidate interpretation, not independent legal advice.
            <span className="mt-5 block">
              <strong className="font-semibold text-[#334155]">Reviewer rationale:</strong>{" "}
              Explain the basis and material limits. Do not expose hidden model reasoning.
            </span>
            <span className="mt-5 block">
              An accepted exception is a governance decision, not evidence that a control is
              operating effectively.
            </span>
          </>
        ),
      },
      {
        title: "How the record changed",
        description: (
          <>
            Review versioned events without erasing the original conclusion. CONFLICT REQUIRES
            REVIEW.
            <span className={noteCase}>
              Private record details are available only to authorized users where implemented.
            </span>
            <span className={small}>
              Some source documents may be linked rather than reproduced because of rights
              restrictions.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/agm4.webp`,
      alt: "Reviewer and colleague discussing an oversight record across a desk",
    },
  },
];

export default function AiGovernanceMethodologyPage() {
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
