import type { Metadata } from "next";
import { Hero, SourceQuestions, FaqSection } from "@/components/footer-regulatory-sources";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Regulatory Sources | Regulatory Intelligence | ZoikoAssure",
  description:
    "Understand the authoritative documents, issuing bodies, versions and review context behind regulatory intelligence.",
};

const IMG = "/footer-regulatory-sources";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "A Source Is More Than a Link",
        description:
          "Check authority, instrument type, official citation, jurisdiction, document version, dates, source language and original text.",
      },
      {
        title: "How We Distinguish Source Types",
        description:
          "Official issuers, government repositories and third-party material are not interchangeable. Treat legal force as instrument- and jurisdiction-specific.",
      },
    ],
    cta: { label: "Explore More", href: "/footer-regulatory-library" },
    image: {
      src: `${IMG}/rs2.webp`,
      alt: "Stack of regulatory documents refracted through a prism into structured source records",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Keep Time and Versions Separate",
        description:
          "Issued, published, amended, effective, observed and reviewed dates answer different questions. Legal effective time differs from discovery and editorial review time.",
      },
      {
        title: "Use Sources Responsibly",
        description:
          "Full text, excerpts, translations and cached copies may have different reuse conditions. Follow the verified publication rights for each source.",
      },
    ],
    cta: { label: "Explore More", href: "/regulatory-changes" },
    image: {
      src: `${IMG}/rs3.webp`,
      alt: "Team reviewing compliance charts and regulatory timelines together",
    },
  },
  {
    blocks: [
      {
        title: "From Source to Defensible Assurance",
        description:
          "Source → Applicability → Obligation → Control → Evidence → Assurance. A source record or control mapping does not prove a control operated. Assurance depends on evidence and review.",
      },
      {
        title: "How Source Review Is Governed",
        description:
          "Collect → verify → classify → version → review → publish/update. Explore the methodology behind our rigorous source validation process.",
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/rs4.webp`,
      alt: "Professionals reviewing financial analysis and source records at a desk",
    },
  },
];

export default function FooterRegulatorySourcesPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SourceQuestions />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
