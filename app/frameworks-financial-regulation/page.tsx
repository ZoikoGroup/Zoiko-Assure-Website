import type { Metadata } from "next";
import { Hero, PrincipleCards, FaqSection } from "@/components/frameworks-financial-regulation";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Financial Regulation | Frameworks | ZoikoAssure",
  description:
    "Understand how international financial standards connect with binding rules, institution types and accountable compliance processes.",
};

const IMG = "/frameworks-financial-regulation";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Binding regulatory requirements vary by jurisdiction.",
        description: (
          <>
            EU CRR rules require instrument- and provision-level application review for affected
            entities.
            <span className="mt-6 block">
              Consult the FCA Handbook and, where applicable, the PRA Rulebook for current UK
              obligations.
            </span>
          </>
        ),
      },
      {
        title: "Financial reporting and disclosure",
        description:
          "Accounting-standard requirements depend on local adoption and licensing arrangements. Source information is summarized and linked subject to publisher rights and current review.",
      },
    ],
    image: {
      src: `${IMG}/fr2.webp`,
      alt: "Professional reviewing legal documents beside a gavel and scales of justice",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Applicability is an assessment, not an assumption.",
        description: (
          <>
            <strong className="font-semibold text-[#0A2540]">UNCERTAIN</strong> — sector, legal
            entity or governing instrument needs review.
            <span className="mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13.5px] font-semibold leading-[1.6] text-[#334155]">
              Illustrative only — not customer data or verified product coverage.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/fr3.webp`,
      alt: "Team meeting around a table in front of a screen showing financial charts",
    },
  },
  {
    blocks: [
      {
        title: "From source to evidence-backed assurance",
        description:
          "A mapping is not proof of an operating control. Accepted exception — not a compliant or assured control.",
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/fr4.webp`,
      alt: "Professional working on a laptop with digital checkmarks and an approval seal overlay",
    },
  },
];

export default function FrameworksFinancialRegulationPage() {
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
