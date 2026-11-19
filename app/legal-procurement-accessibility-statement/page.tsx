import type { Metadata } from "next";
import {
  Hero,
  StatusCards,
  FeedbackSection,
} from "@/components/legal-procurement-accessibility-statement";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Accessibility Statement | Legal & Procurement | ZoikoAssure",
  description:
    "How ZoikoAssure approaches accessibility, the current assessment scope and how to report accessibility barriers.",
};

const IMG = "/legal-procurement-accessibility-statement";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Scope & standard",
        description:
          "What is tested, what is excluded and what is not yet known. Exact web properties, locales, environments and features with tested/not-tested distinctions.",
      },
      {
        title: "Known barriers & workarounds",
        description:
          "Only observed issues, severity and safe user alternatives. Issue ID, affected path, impact, workaround, remediation state; no fabricated zero-barrier claims.",
      },
    ],
    image: {
      src: `${IMG}/as2.webp`,
      alt: "Team reviewing printed charts and plans spread across a table",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Assessment methodology",
        description:
          "Test matrix, assistive technologies and evidence dates. Document manual keyboard, assistive technology and automated evaluation methodology.",
      },
      {
        title: "Continuous improvement",
        description: "Ownership, follow-up and published version history.",
      },
    ],
    cta: { label: "Report an accessibility issue", href: "/support/accessibility" },
    image: {
      src: `${IMG}/as3.webp`,
      alt: "Hand ticking items on a digital checklist above a tablet",
    },
  },
];

export default function AccessibilityStatementPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <StatusCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FeedbackSection />
    </div>
  );
}
