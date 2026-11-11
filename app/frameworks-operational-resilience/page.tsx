import type { Metadata } from "next";
import { Hero, ReferenceCards, FaqSection } from "@/components/frameworks-operational-resilience";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Operational Resilience | Frameworks | ZoikoAssure",
  description:
    "Keep important operations deliverable through disruption—with accountable decisions, tested dependencies and evidence-backed learning.",
};

const IMG = "/frameworks-operational-resilience";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Start with the important service, not the system.",
        description:
          "Map dependencies that could fail together across people, processes, technology, data, premises, and third parties.",
      },
      {
        title: "Define the harm you cannot exceed.",
        description:
          "An impact tolerance is not automatically a recovery time objective or recovery point objective. Tolerance defines the maximum acceptable disruption measured in business outcomes.",
      },
    ],
    image: {
      src: `${IMG}/or2.webp`,
      alt: "Team mapping service dependencies together at a glass conference table",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Exercise severe but plausible disruption.",
        description: (
          <>
            Plan, execute, observe, sign off, and remediate. Compare measured service disruption
            against defined tolerances.
            <span className="mt-6 block">
              A completed exercise is not evidence of effective recovery unless results, limitations
              and reviewers support the conclusion.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/or3.webp`,
      alt: "Colleagues reviewing disruption exercise notes and sticky notes around a table",
    },
  },
  {
    blocks: [
      {
        title: "From source to evidence-backed assurance",
        description:
          "Identify the source, review the business context, understand a possible obligation, map a control, evaluate evidence and preserve the accountable assurance conclusion. Linking an obligation to a control does not establish that the control operated; proof needs relevant, valid evidence.",
      },
      {
        title: "Record who decided, what was observed and what remains open.",
        description: (
          <>
            Exception accepted for review; assurance remains unresolved. Risk acceptance and
            documented exceptions remain distinct from evidence-backed assurance.
            <span className="mt-5 block border-l-4 border-[#F58220] bg-[#F8FAFC] px-4 py-3 text-[13.5px] font-semibold leading-[1.6] text-[#334155]">
              Illustrative applicability: UNCERTAIN — requires authorized review. If the legal
              basis, entity or activity is unresolved, the state is UNCERTAIN and requires
              review—not &ldquo;noncompliant&rdquo; or &ldquo;approved.&rdquo;
            </span>
            <span className="mt-4 block text-[12px] leading-5 text-[#6B7280]">
              All illustrative service, supplier, evidence and timeline values are synthetic.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/or4.webp`,
      alt: "Laptop showing a performance chart beside documents and magnifying glasses",
    },
  },
];

export default function FrameworksOperationalResiliencePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ReferenceCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
