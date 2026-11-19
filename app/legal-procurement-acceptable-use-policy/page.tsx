import type { Metadata } from "next";
import Link from "next/link";
import {
  Hero,
  PolicyCards,
  FaqSection,
} from "@/components/legal-procurement-acceptable-use-policy";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Legal & Procurement | ZoikoAssure",
  description:
    "Read the current ZoikoAssure Acceptable Use Policy governing approved use of services within its stated scope.",
};

const IMG = "/legal-procurement-acceptable-use-policy";

const docLink = "transition-colors hover:text-[#F58220] hover:underline";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "POLICY SECTIONS — LEGAL-APPROVED COPY ONLY",
        description: (
          <>
            Use boundaries / authorized activity
            <span className="mt-6 block">Proposed topic areas — not enforceable clauses</span>
          </>
        ),
      },
      {
        title: "Reporting, escalation and review process",
        description: "[Approved legal remedies and escalation ladder]",
      },
    ],
    image: {
      src: `${IMG}/aup2.webp`,
      alt: "Professional working at a secure workstation with analytics on screen",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "CROSS-POLICY RAIL",
        description: (
          <>
            <Link href="/legal-procurement-terms-of-use" className={docLink}>
              Terms of Use
            </Link>{" "}
            •{" "}
            <Link href="/legal-procurement-privacy-policy" className={docLink}>
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link href="/responsible-disclosure" className={docLink}>
              Responsible Disclosure
            </Link>{" "}
            •{" "}
            <Link href="/contact" className={docLink}>
              Contact
            </Link>{" "}
            (owner-verified routes)
          </>
        ),
      },
      {
        title: "SPECIMEN WIREFRAME",
        description:
          "Not evidence of a live policy, approved restrictions or reporting service",
      },
    ],
    cta: { label: "Report a concern — if verified", href: "/responsible-disclosure" },
    image: {
      src: `${IMG}/aup3.webp`,
      alt: "Two colleagues reviewing a security concern on a laptop",
    },
  },
];

export default function AcceptableUsePolicyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <PolicyCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
