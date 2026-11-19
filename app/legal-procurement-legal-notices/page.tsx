import type { Metadata } from "next";
import { Hero, NoticeCards, FaqSection } from "@/components/legal-procurement-legal-notices";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Legal Notices | Legal & Procurement | ZoikoAssure",
  description:
    "Review the notices that apply to the ZoikoAssure website and links to governing policy documents.",
};

const IMG = "/legal-procurement-legal-notices";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const lead = "font-semibold text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Corporate Identity & Scope",
        description: (
          <>
            ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company.
            <span className="mt-5 block">
              <strong className={lead}>What these notices cover:</strong> public website and
              published explanatory material; customer terms elsewhere.
            </span>
          </>
        ),
      },
      {
        title: "IP & Rights",
        description: (
          <>
            Trademark use permission and attribution if verified; no fabricated ® or registration
            numbers. Current controlled disclosures for images, regulatory excerpts, library
            sources and embedded tools.
            <span className={noteCase}>
              Regulatory sources remain authoritative; copyright/licensing constraints separate
              from applicability.
            </span>
          </>
        ),
      },
    ],
    image: {
      src: `${IMG}/ln2.webp`,
      alt: "Executive presenting an integration plan to colleagues in a boardroom",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Claims & Qualifications",
        description:
          "AI outputs support review; no autonomous legal determination or guarantee, only approved language. Standards/framework references not equal certification or regulator approval; no decorative badges.",
      },
      {
        title: "Policy Boundaries",
        description:
          "Specific disclosure claims apply only when reviewed for the entity/service/region. Terms of Use and enterprise signed agreements link; no invented priority order.",
      },
    ],
    cta: { label: "Privacy Policy", href: "/legal-procurement-privacy-policy" },
    image: {
      src: `${IMG}/ln3.webp`,
      alt: "Professional holding a magnifying glass over a verified checkmark",
    },
  },
];

export default function LegalNoticesPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <NoticeCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
