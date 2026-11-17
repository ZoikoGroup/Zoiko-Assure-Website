import type { Metadata } from "next";
import { Hero, EntityCards, FaqSection, ZOIKO_TECH_URL } from "@/components/company-zoiko-tech";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Zoiko Tech | Company | ZoikoAssure",
  description:
    "ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company focused on governed systems, operational accountability and long-term resilience.",
};

const IMG = "/company-zoiko-tech";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Technology Built for Governed Operations",
        description:
          "Enterprise platforms, intelligent systems, and security/assurance architecture.",
      },
      {
        title: "Governance Before Automation",
        description:
          "Source grounding, human accountability, evidence model; no certification substitution.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/zt2.webp`,
      alt: "Two colleagues reviewing a secure platform architecture printout beside a monitor",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "What This Means for ZoikoAssure",
        description:
          "Source grounding, uncertainty, accountable review and evidence lineage. Product-specific details remain product-owned.",
      },
      {
        title: "Corporate Context and Verification",
        description: (
          <>
            Promote scope and provenance, not made-up executive biographies or office lists.
            <span className={noteCase}>
              Global presence qualifier: Sacramento, CA, United States
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Zoiko Tech ↗", href: ZOIKO_TECH_URL },
    image: {
      src: `${IMG}/zt3.webp`,
      alt: "Two colleagues reviewing source documents and evidence at a desk",
    },
  },
];

export default function ZoikoTechPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <EntityCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
