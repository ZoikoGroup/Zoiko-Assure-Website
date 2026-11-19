import type { Metadata } from "next";
import Link from "next/link";
import { Hero, TermsCards, FaqSection } from "@/components/legal-procurement-terms-of-use";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Terms of Use | Legal & Procurement | ZoikoAssure",
  description:
    "Terms of Use for the ZoikoAssure website: scope, applicable agreement boundaries, user obligations and related legal documents.",
};

const IMG = "/legal-procurement-terms-of-use";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const docLink = "transition-colors hover:text-[#F58220] hover:underline";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Scope and applicable terms",
        description:
          "Content slot — Legal-approved clause only. Do not assert that website browsing automatically indicates agreement.",
      },
      {
        title: "Agreement boundaries",
        description:
          "Website / product contract precedence — owner gate. Describe distinctions between website informational access and separately signed/accepted services terms only after approved Legal text.",
      },
    ],
    image: {
      src: `${IMG}/tou2.webp`,
      alt: "Professional signing an agreement beside a laptop in an office",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Further approved terms",
        description:
          "No hidden legal copy in accordions. Long clauses shown directly in document order.",
      },
      {
        title: "Related legal documents",
        description: (
          <>
            <Link href="/legal-procurement-privacy-policy" className={docLink}>
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/legal-procurement-acceptable-use-policy" className={docLink}>
              Acceptable Use Policy
            </Link>{" "}
            |{" "}
            <Link href="/legal-procurement-data-processing-addendum" className={docLink}>
              Data Processing Addendum
            </Link>
            <span className={noteCase}>
              Each href verified and owner-approved; suppress unavailable links.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Privacy Policy", href: "/legal-procurement-privacy-policy" },
    image: {
      src: `${IMG}/tou3.webp`,
      alt: "Professional reviewing legal documents on a desktop monitor",
    },
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <TermsCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
