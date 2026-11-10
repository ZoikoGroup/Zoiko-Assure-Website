import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FaqSection,
} from "@/components/footer-obligations";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Obligations | Regulatory Intelligence | ZoikoAssure",
  description:
    "Understand what regulatory sources require—and how those requirements can be traced through applicability, controls, evidence and accountable assurance.",
};

const IMG = "/footer-obligations";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Applicability Is a Decision, Not a Default",
        description:
          "Context matters. Where the available facts cannot support a conclusion, the appropriate state is UNCERTAIN and accountable review remains necessary.",
      },
      {
        title: "A Regulatory Change in Operational Context",
        description:
          "Review the normative clause, actor/subject, action, conditions, deadlines, source citation and version to properly interpret requirements.",
      },
    ],
    note: [
      "ILLUSTRATIVE RECORD — NOT LEGAL ADVICE",
      "Example requirement: documented review of a defined operational process",
    ],
    cta: { label: "Review Methodology", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/ob2.webp`,
      alt: "Risk management interface connecting regulatory applicability factors",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "Mapping Is Not Proof",
        description:
          "A mapped control describes how an obligation may be addressed. It does not establish that the control operated or that evidence is sufficient.",
      },
      {
        title: "Evidence Has a Source, a Validity Period and a Review Context.",
        description:
          "Evidence requires provenance, validity, capture context and accountable review before it supports an assurance conclusion.",
      },
    ],
    cta: { label: "Explore Controls & Evidence", href: "/obligation-control-mapping" },
    image: {
      src: `${IMG}/ob3.webp`,
      alt: "Security shield over a compliance evidence dashboard",
    },
  },
  {
    blocks: [
      {
        title: "Accepted Risk Is Not an Assurance Conclusion.",
        description:
          "An accepted exception or risk decision remains separate from whether a control is proven. Exceptions do not override evidence truth.",
      },
      {
        title: "Review the Source, Version and Methodology",
        description:
          "Access the approved methodology covering source selection, granularity, review standards, version control and uncertainty guidelines.",
      },
    ],
    cta: { label: "View Governance & Exceptions", href: "/assurance/exceptions-risk-acceptance" },
    image: {
      src: `${IMG}/ob4.webp`,
      alt: "Executive approving a governed decision on a secure interface",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "AI Assistance With Sources—and Human Accountability.",
        description:
          "AI-assisted analysis can help structure source-grounded questions; consequential applicability or legal decisions require qualified human review. There are no autonomous legal determinations.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/ob5.webp`,
      alt: "Analyst using AI-assisted analytics on a laptop",
    },
  },
];

export default function FooterObligationsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
