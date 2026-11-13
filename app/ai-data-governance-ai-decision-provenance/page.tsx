import type { Metadata } from "next";
import { Hero, PrincipleCards, FaqSection } from "@/components/ai-data-governance-ai-decision-provenance";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "AI Decision Provenance | AI & Data Governance | ZoikoAssure",
  description:
    "Understand the source, context, review and evidence behind an AI-assisted decision.",
};

const IMG = "/ai-data-governance-ai-decision-provenance";

const note =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold uppercase leading-[1.6] text-[#334155]";
const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const small = "mt-4 block text-[12.5px] leading-5 text-[#6B7280]";

const steps = [
  ["Step 1:", "Authoritative source"],
  ["Step 2:", "Applicability context"],
  ["Step 3:", "AI-assisted suggestion"],
  ["Step 4:", "Human review and outcome"],
];

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "From a source to a governed disposition",
        description: (
          <>
            {steps.map(([label, text]) => (
              <span key={label} className="mt-3 block first:mt-0">
                <strong className="font-semibold text-[#334155]">{label}</strong> {text}
              </span>
            ))}
            <span className={note}>Synthetic example — not customer data</span>
            <span className={small}>
              ADP-SAMPLE-001 | REVIEW REQUIRED | UNCERTAIN — additional entity-scope evidence
              needed
            </span>
            <span className={small}>
              STALE — last observation cannot support a current assurance conclusion
            </span>
          </>
        ),
      },
    ],
    image: {
      src: `${IMG}/adp2.webp`,
      alt: "Professional reviewing evidence on a laptop with notes in an office",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "What source was used?",
        description: "Look for the issuer, specific instrument, edition, provision and date.",
      },
      {
        title: "Two clocks matter",
        description:
          "A legal requirement becomes effective at a legal date; evidence is observed and reviewed at different times.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/adp3.webp`,
      alt: "Reviewer annotating printed source documents beside a laptop",
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
      src: `${IMG}/adp4.webp`,
      alt: "Two executives reviewing a decision record together at a desk",
    },
  },
];

export default function AiDecisionProvenancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <PrincipleCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
