import type { Metadata } from "next";
import { Hero, OversightCards, FaqSection } from "@/components/ai-data-governance-human-oversight";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Human Oversight | AI & Data Governance | ZoikoAssure",
  description:
    "Design review thresholds, escalation paths and accountable decisions around AI-assisted regulatory work—while keeping source evidence and uncertainty visible.",
};

const IMG = "/ai-data-governance-human-oversight";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const small = "mt-4 block text-[12.5px] leading-5 text-[#6B7280]";
const lead = "font-semibold text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Know When a Human Must Review",
        description: (
          <>
            Explain policy-defined triggers; not universal legal thresholds.
            <span className="mt-5 block">
              <strong className={lead}>Preserve the Reasoning and the Review:</strong> Concise
              explanation, not hidden model chain-of-thought.
            </span>
            <span className="mt-5 block">
              <strong className={lead}>Give the Right People the Right Decisions:</strong> No
              claim of universal two-person verification.
            </span>
            <span className={noteCase}>
              Illustrative interface — synthetic data, not a live platform screenshot
            </span>
            <span className={small}>
              Reviewer rationale: Explain the basis and material limits. Do not expose hidden
              model reasoning.
            </span>
          </>
        ),
      },
    ],
    image: {
      src: `${IMG}/aho2.webp`,
      alt: "Reviewer assessing uncertainty on a laptop with notes at a desk",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "From AI Recommendation to Accountable Decision",
        description: (
          <>
            Records what is known, disputed, accepted, changed.
            <span className="mt-5 block">
              No numerical confidence that has not been calibrated.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/aho3.webp`,
      alt: "Two colleagues discussing a recommendation over a laptop and documents",
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
              <strong className={lead}>Reviewer rationale:</strong> Explain the basis and material
              limits. Do not expose hidden model reasoning.
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
      src: `${IMG}/aho4.webp`,
      alt: "Three colleagues at a meeting table escalating a decision for review",
    },
  },
];

export default function HumanOversightPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <OversightCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
