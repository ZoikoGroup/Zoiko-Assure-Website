import type { Metadata } from "next";
import { Hero, SubjectCards, FaqSection } from "@/components/frameworks-view-all-frameworks";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "View All Frameworks | Frameworks | ZoikoAssure",
  description:
    "Explore the governance and regulatory topics that shape accountable operations, from AI governance and data protection to enterprise risk and compliance management.",
};

const IMG = "/frameworks-view-all-frameworks";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Understand the difference between frameworks and law",
        description: (
          <>
            Management-system standards describe specified requirements or guidance; certification,
            when possible, is separate and scoped.
            <span className="mt-6 block">
              Laws and regulatory rules may be binding only where they apply to the entity, activity
              and period in question. International recommendations and professional guidance are
              not automatically domestic legal duties.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/vaf-team.webp`,
      alt: "Team of professionals reviewing regulatory documents and charts around a conference table",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "From source to evidence-backed review",
        description: (
          <>
            Trace source and version, determine applicability, identify obligations, assign
            controls, examine dated evidence and preserve accountable review.
            <span className="mt-6 block">
              External source editions, licenses and applicable legal authority must be verified
              independently.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Regulatory Sources", href: "/footer-regulatory-sources" },
    image: {
      src: `${IMG}/vaf-review.webp`,
      alt: "Magnifying glass resting on open notebooks and source documents on a desk",
    },
  },
];

export default function FrameworksViewAllFrameworksPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SubjectCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
