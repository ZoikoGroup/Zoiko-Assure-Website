import type { Metadata } from "next";
import { Hero, KeyPillarsFloating, FaqSection } from "@/components/risk-governance-teams";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Risk & Governance Teams | ZoikoAssure",
  description:
    "Know what applies. Show what is controlled. Prove what still needs work. ZoikoAssure connects regulatory sources and applicability decisions to governed obligations, controls, evidence and assurance.",
};

const IMG = "/risk-governance-teams";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "From Regulatory Source to Defensible Assurance.",
        description:
          "Follow the sequence: Regulatory Source → Applicability → Obligation → Control → Evidence → Assurance. Each stage connects logic without obscuring the prior basis.",
      },
      {
        title: "Map Only With Context and Review.",
        description:
          "Understand mapping vs operation vs proof. Ensure provenance fields and evidence gaps are fully exposed, as control mapping is never treated as operating proof.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/rgt2.webp`,
      alt: "Professionals reviewing documents to analyze applicability facts",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "A Mapped Control Is the Start—Not the Proof.",
        description:
          "Control operations specify the intended response. Assign control owners, cadence, and test expectations, keeping design separate from operational proof.",
      },
      {
        title: "Evidence Has a Source, a Validity Period and a Review Context.",
        description:
          "Identify evidence references, artifacts, source systems, capture times, and validity periods. Distinguish missing, stale, invalid, and insufficient evidence statuses.",
      },
    ],
    cta: { label: "View Control & Evidence Lifecycles", href: "/assurance/evidence-management" },
    image: {
      src: `${IMG}/rgt3.webp`,
      alt: "Analyst monitoring control and evidence dashboards across multiple screens",
    },
  },
  {
    blocks: [
      {
        title: "Show the Basis for Every Assurance State.",
        description:
          "Assurance is evaluated Proven / Not proven / Requires review. Discover scoped conclusions with evidence bases, evaluated-at dates, and required next steps.",
      },
      {
        title: "Make Open Gaps Accountable and Traceable.",
        description:
          "Expose missing evidence, exceptions, and unresolved control tests as clear gap remediation tasks. Monitor missing pieces with responsible owners and action dates.",
      },
    ],
    cta: { label: "Explore Evaluated Outcomes", href: "/continuous-compliance" },
    image: {
      src: `${IMG}/rgt4.webp`,
      alt: "Executives discussing human-review protocols around a governance command table",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "Accepted Risk Does Not Mean a Control Is Proven.",
        description:
          "Accepted exceptions belong to a separate governance lane. Expose rationales, approval authorities, and expiries while ensuring assurance states remain unaffected.",
      },
      {
        title: "When Requirements Change, Review the Downstream Response.",
        description:
          "Regulatory updates and organizational changes prompt reassessments. Connect source version changes to obligation, control, and evidence evaluations.",
      },
    ],
    cta: { label: "Explore Governance Frameworks", href: "/frameworks" },
    image: {
      src: `${IMG}/rgt5.webp`,
      alt: "Professional comparing multi-jurisdictional compliance trends over time",
    },
  },
  {
    blocks: [
      {
        title: "Prepare for Examination Before Evidence Must Be Reconstructed.",
        description:
          "Chain inspection, evidence currency, and gap transparency ensure readiness. An audit trail should be accessible without asserting successful regulatory inspection.",
      },
      {
        title: "Use AI to Assist Review—Not Replace Accountability.",
        description:
          "Source-grounded assistance can help legal and compliance teams review relevant material. Outputs remain qualified, reviewable and subject to accountable human judgment.",
      },
    ],
    cta: { label: "Review Executive Boundaries", href: "/governed-ai" },
    image: {
      src: `${IMG}/rgt6.webp`,
      alt: "Compliance guidelines and examination documents on a desk",
    },
  },
  {
    reversed: true,
    blocks: [
      {
        title: "One Operating Model. Defined Responsibilities.",
        description:
          "Define the operational handoffs between CCO, GC, CRO, Audit, and Security. Ensure independent assessments are kept functionally distinct from management testing.",
      },
      {
        title: "Handle Legal and Regulatory Context With Governance.",
        description:
          "Trust claims must be verifiable. Security, privacy, data residency, and reliability claims are clearly connected to approved authoritative trust center documents.",
      },
    ],
    cta: { label: "Explore Trust Center", href: "/trust-center" },
    image: {
      src: `${IMG}/rgt7.webp`,
      alt: "Team reviewing accountability, provenance and obligation handoffs in a presentation",
    },
  },
];

export default function RiskGovernanceTeamsPage() {
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
