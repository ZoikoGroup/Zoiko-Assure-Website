import type { Metadata } from "next";
import {
  Hero,
  AnnexCards,
  FaqSection,
} from "@/components/legal-procurement-data-processing-addendum";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Data Processing Addendum | Legal & Procurement | ZoikoAssure",
  description:
    "Review information about the data processing terms that may apply to an eligible ZoikoAssure service relationship.",
};

const IMG = "/legal-procurement-data-processing-addendum";

const line = "block";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Plain-language orientation",
        description:
          "What a DPA covers; what it does NOT replace (service agreement / privacy notice). The applicable signed agreement and its schedules govern the parties' obligations.",
      },
      {
        title: "Document panel",
        description:
          "Status + version + owner. Annex inventory and availability. No inert download or fake signing.",
      },
    ],
    cta: { label: "View authorized copy", href: "/contact" },
    image: {
      src: `${IMG}/dpa2.webp`,
      alt: "Professional reviewing an agreement and its schedules at a desk",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Cross-references",
        description: (
          <>
            <span className={line}>Subprocessors → verified register</span>
            <span className={line}>Data Residency → trust statement</span>
            <span className={line}>Security evidence → gated route</span>
            <span className={line}>Transfers: contract-specific instrument</span>
          </>
        ),
      },
      {
        title: "Transfer and residency boundary",
        description: "Do not conflate host geography with transfer instruments.",
      },
    ],
    cta: { label: "Subprocessor List", href: "/subprocessor-list" },
    image: {
      src: `${IMG}/dpa3.webp`,
      alt: "Infrastructure specialist checking a tablet in a secure data center aisle",
    },
  },
];

export default function DataProcessingAddendumPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <AnnexCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
