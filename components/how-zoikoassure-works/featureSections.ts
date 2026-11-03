import type { FeatureSplitSectionProps } from "@/components/audit-readiness/FeatureSplitSection";

const img = (n: number) => `/how-zoikoAssure-works/hw${n}.webp`;

// Content for the alternating two-column sections, top to bottom.
export const featureSections: FeatureSplitSectionProps[] = [
  {
    id: "six-stages",
    blocks: [
      {
        title: "The Six-Stage Assurance Explorer",
        description:
          "Explore our interactive Source → Assurance journey. Follow the exact six-stage ordering: Regulatory Source → Applicability → Obligation → Control → Evidence → Assurance.",
      },
      {
        title: "Regulatory Source",
        description:
          "Where did this come from? Authority, citation, version, jurisdiction, publication, and effective-time context. View source details and original publications securely.",
      },
    ],
    cta: { label: "Explore Regulatory Sources", href: "/regulatory-sources" },
    image: { src: img(2), alt: "Team reviewing regulatory sources together" },
  },
  {
    id: "applicability",
    reversed: true,
    blocks: [
      {
        title: "Applicability",
        description:
          "Does it apply here? View entity/activity/product/data scope, and the outcome: Applies, Does not apply, or UNCERTAIN. Review human rationales behind these determinations.",
      },
      {
        title: "Obligation",
        description:
          "What must we do? Access the atomic requirement, dependencies, ownership, legal validity, and change links. Obligations require accountable owners and clear governance.",
      },
    ],
    cta: { label: "View Obligations", href: "/obligations" },
    image: { src: img(3), alt: "Professional evaluating applicability on a tablet with compliance icons" },
  },
  {
    id: "controls-evidence",
    blocks: [
      {
        title: "Control",
        description:
          "How is it operationalized? Mapped owner, cadence, system, and test expectations. Remember: mapped controls do not mean proven compliance.",
      },
      {
        title: "Evidence",
        description:
          "Can operation be supported? Inspect records, originating systems, capture/validity/lineage, and integrity status where implemented. Identify collected artifacts vs sufficient proof.",
      },
    ],
    cta: { label: "Explore Controls & Evidence", href: "/assurance/evidence-management" },
    image: { src: img(4), alt: "Reviewing control and evidence dashboards on a tablet" },
  },
  {
    id: "assurance",
    reversed: true,
    blocks: [
      {
        title: "Assurance",
        description:
          "What is defensible now? Evidence-backed basis, evaluated-at timestamps, unresolved gaps, reviewers, and review-required states. Assurance is evaluated Proven, Not proven, or Requires review.",
      },
      {
        title: "What Happens When Regulation Changes",
        description:
          "Before/after legal version impacts are linked to affected objects, preventing automatic determinations. Understand how scope reconsiderations affect obligations, controls, evidence, and assurance.",
      },
    ],
    cta: { label: "Review Assurance Logic", href: "/platform/continuous-assurance" },
    image: { src: img(5), alt: "Team agreeing on an assurance decision" },
  },
  {
    id: "time-exceptions",
    blocks: [
      {
        title: "Time, Status & Confidence",
        description:
          "Disentangle temporal confusion: Effective, observed, captured, as-of, and evaluated times each carry unique semantic meanings and track distinct compliance realities.",
      },
      {
        title: "Exceptions & Risk Acceptance",
        description:
          "Separate governed records, owners, rationales, and expiries. Exceptions are managed independently and are never counted as proven controls or assurance.",
      },
    ],
    cta: { label: "Explore Exceptions", href: "/assurance/exceptions-risk-acceptance" },
    image: { src: img(6), alt: "Executive climbing steps toward an upward arrow" },
  },
  {
    id: "governed-ai",
    reversed: true,
    blocks: [
      {
        title: "Governed AI & Human Review",
        description:
          "AI provides citation-backed assistance with clearly visible uncertainty. It respects approval thresholds and override records; it never executes autonomous legal rulings.",
      },
      {
        title: "Connecting Operating Systems",
        description:
          "Understand conditional integrations, permission boundaries, and sync/failure examples. Learn how system integration supports the evidence gathering process securely.",
      },
    ],
    cta: { label: "View Governed AI Context", href: "/platform/governed-ai" },
    image: { src: img(7), alt: "Professional reviewing AI-assisted analysis" },
  },
  {
    id: "roles-trust",
    blocks: [
      {
        title: "Executive Role View",
        description:
          "CRO, GC, CCO, and CFO emphasis lenses on shared, traceable objects. Understand exceptions, material exposure, and evidence-backed postures clearly for each role.",
      },
      {
        title: "Trust & Procurement Evidence",
        description:
          "Access verified security, privacy, residency, and reliability links. Evaluate source systems, integrity, and restricted data boundaries securely through the Trust Center.",
      },
    ],
    cta: { label: "Explore Trust Center", href: "/trust-center" },
    image: { src: img(8), alt: "Executive team discussing shared compliance posture" },
  },
];
