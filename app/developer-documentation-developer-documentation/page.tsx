import type { Metadata } from "next";
import { Hero, TopicCards, FaqSection } from "@/components/developer-documentation";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Developer Documentation | ZoikoAssure",
  description:
    "Technical guidance for verified ZoikoAssure integrations, scoped to the approved release and access shown. Integration does not establish assurance.",
};

const IMG = "/developer-documentation-developer-documentation";

const lead = "font-semibold text-[#0A2540]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Article reader — illustrative",
        description: (
          <>
            <span className="block">
              <span className={lead}>Task guidance:</span> Purpose, prerequisites, permissions, step
              sequence, expected result, verification, recovery, limitations. Read sequentially;
              hyperlinks to verified reference.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Example / code panel:</span> Language label, Example only or
              Tested for [approved release], safe fixture. Selectable text; no execution; local
              horizontal overflow if necessary.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Copy code", href: "#browse-topics" },
    image: {
      src: `${IMG}/dd2.webp`,
      alt: "Laptop showing analytics charts on a desk with hand-drawn workflow sketches overlaid",
    },
  },
  {
    id: "release-guidance",
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Provenance and limitations",
        description:
          "Public-safe review date, owning function and source reference. Internal evidence citations and hashes not exposed unless approved.",
      },
      {
        title: "Superseded / retired banner",
        description:
          "This guidance is superseded. Review the replacement before using it. Link approved replacement; archived date if verified.",
      },
    ],
    cta: { label: "Browse selected release", href: "#browse-topics" },
    image: {
      src: `${IMG}/dd3.webp`,
      alt: "Person in glasses reading a technical book surrounded by stacks of books in a library",
    },
  },
];

export default function DeveloperDocumentationPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <TopicCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
