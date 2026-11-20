import type { Metadata } from "next";
import { Hero, StatusCards, FaqSection } from "@/components/legal-procurement-subprocessors";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Subprocessors | Legal & Procurement | ZoikoAssure",
  description:
    "Review the approved organizations that may process personal data when delivering the relevant ZoikoAssure services. Details depend on the agreement and service scope.",
};

const IMG = "/legal-procurement-subprocessors";

const lead = "font-semibold text-[#0A2540]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    id: "register",
    blocks: [
      {
        title: "Subprocessor Register",
        description: (
          <>
            <span className="block">
              Search and filters / supplier rows / accessible detail. Legal name, purpose, data
              activity, location scope, status, update date.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Restricted-evidence lane:</span> Route entitlements through
              existing procurement security process, not public PDFs.
            </span>
          </>
        ),
      },
      {
        title: "Supplier detail",
        description:
          "Accessible expansion/page with source and public-safe supporting notes.",
      },
    ],
    image: {
      src: `${IMG}/sp2.webp`,
      alt: "Person typing on a laptop beneath floating compliance checklist and approval icons",
    },
  },
  {
    id: "changes",
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Change log & updates",
        description: (
          <>
            <span className="block">
              <span className={lead}>Current change log:</span> Added/replaced/removed entries,
              publication date and source version.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Upcoming changes:</span> Only approved proposed entries;
              notice dates vs effective dates distinct.
            </span>
          </>
        ),
      },
      {
        title: "Change methodology",
        description: "Explain notice approach in plain terms with DPA qualification.",
      },
    ],
    cta: { label: "Objection / inquiry route", href: "/contact" },
    image: {
      src: `${IMG}/sp3.webp`,
      alt: "Laptop showing bar charts on a boardroom table with printed reports and a city view",
    },
  },
];

export default function SubprocessorsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <StatusCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
