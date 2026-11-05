import type { Metadata } from "next";
import { Hero, KeyPillarsFloating, FaqSection } from "@/components/internal-audit";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Internal Audit | ZoikoAssure",
  description:
    "Give Internal Audit a traceable basis for independent review. Follow authoritative regulatory sources through applicability, obligations, controls, evidence and assurance.",
};

const IMG = "/internal-audit";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Trace a Requirement From Source to Defensible Evidence.",
        description:
          "Source → Applicability → Obligation → Control → Evidence → Assurance. A mapped control is not the same as an operating control. An evidence record needs source, period and review context before it can support a conclusion.",
      },
      {
        title: "Review the Scope, Period and Basis.",
        description:
          "Understand jurisdiction, entity, effective period, observed-as-of timestamps and contextual exclusions.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/ia2.webp`,
      alt: "Auditors reviewing records in a document archive",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "Distinguish Controls From Independent Testing.",
        description:
          "Keep mapped controls, operating evidence, and auditor-defined testing conceptually distinct. A mapping is not a test of control effectiveness.",
      },
      {
        title: "Evidence Quality Is More Than File Collection.",
        description:
          "Origin, completeness, accuracy, validity, lineage and access limitations shape what an auditor can rely on. Information produced by the entity requires distinct review.",
      },
    ],
    cta: { label: "View Operational Logic", href: "/platform/evidence-provenance" },
    image: {
      src: `${IMG}/ia3.webp`,
      alt: "Hand interacting with a testing and verification interface",
    },
  },
  {
    blocks: [
      {
        title: "Sampling and Population Selection.",
        description:
          "Auditor-selected populations and selection bases are illustrative only; the platform does not automate or enforce statistical methodology.",
      },
      {
        title: "Keep Evidence Gaps, Exceptions and Findings Distinct.",
        description:
          "Maintain clear boundaries between management exceptions, audit observations and audit conclusions with separate ownership and approval pathways.",
      },
    ],
    cta: { label: "Explore Evaluated Outcomes", href: "/continuous-compliance" },
    image: {
      src: `${IMG}/ia4.webp`,
      alt: "Magnifying glass selecting a sample from a crowd",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "Review and Remediation Context.",
        description:
          "Management action and audit validation are different steps; completion of a management task is not independent verification.",
      },
      {
        title: "Accountability Across the Three Lines of Work.",
        description:
          "Internal Audit’s independent lens is preserved against CCO management, CRO enterprise risk and board oversight. The platform structures information for review; independent audit opinions remain the responsibility of authorized auditors.",
      },
    ],
    cta: { label: "Explore Governance Frameworks", href: "/frameworks" },
    image: {
      src: `${IMG}/ia5.webp`,
      alt: "Reviewers discussing remediation charts on a clipboard",
    },
  },
  {
    blocks: [
      {
        title: "AI Assistance With Source Grounding and Human Review.",
        description:
          "Source-grounded assistance can help legal and compliance teams review relevant material. Outputs remain qualified, reviewable and subject to accountable human judgment.",
      },
      {
        title: "Management Assurance and Independent Audit Are Different.",
        description:
          "The platform can organize source, scope, control and evidence context for review; independence, test design and audit conclusions belong to the audit function.",
      },
    ],
    cta: { label: "Review Executive Boundaries", href: "/governed-ai" },
    image: {
      src: `${IMG}/ia6.webp`,
      alt: "AI assistant and analyst working with data on a laptop",
    },
  },
];

export default function InternalAuditPage() {
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
