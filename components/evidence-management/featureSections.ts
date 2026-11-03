import type { FeatureSplitSectionProps } from "@/components/audit-readiness/FeatureSplitSection";

// Content for the alternating two-column sections, top to bottom.
export const featureSections: FeatureSplitSectionProps[] = [
  {
    id: "defensible-evidence",
    blocks: [
      {
        title: "A Stored File Is Not the Same as Defensible Evidence.",
        description:
          "Avoid requests without acceptance criteria, evidence without origin or period, and reviews without accountable rationale. Defensible evidence solves these gaps.",
      },
      {
        title: "From Evidence Requirement to Reviewable Proof.",
        description:
          "Regulatory Source → Applicability → Obligation → Control → Evidence → Assurance. Ensure evidence remains distinct from final assurance conclusions.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: "/evidence-management/em2.webp",
      alt: "Team reviewing an evidence file against compliance requirements",
    },
  },
  {
    id: "evidence-register",
    reversed: true,
    blocks: [
      {
        title: "Evidence Requirement Intake",
        description:
          "Show requirement ID, related obligation/control, expected artifact, test condition, operating period, contributor and reviewer. Make proof expectations explicit.",
      },
      {
        title: "Evidence Request/Register",
        description:
          "Review requests, controls, periods, assigned contributors, reviewers, due dates, sources, collection and review states, and next actions. Filter and sort effectively.",
      },
    ],
    cta: { label: "Review Evidence Register", href: "#evidence-register" },
    image: {
      src: "/evidence-management/em3.webp",
      alt: "Professional working through an evidence request register and intake checklist",
    },
  },
  {
    id: "collection",
    blocks: [
      {
        title: "Contribution and Collection",
        description:
          "Explain the timeline: acknowledge request → identify authorized source → capture with period → validate → send for review. Ensure actions remain accountable.",
      },
      {
        title: "Evidence Object Detail",
        description:
          "View object metadata: version, origin class, period covered, captured-at, classification, related requirement and review state. Ensure access remains transparent.",
      },
    ],
    cta: { label: "View Object Details", href: "#collection" },
    image: {
      src: "/evidence-management/em4.webp",
      alt: "Colleagues reviewing a captured operational report and its evidence record",
    },
  },
  {
    id: "validation",
    reversed: true,
    blocks: [
      {
        title: "Provenance Preview",
        description:
          "Separate operational origin systems from official regulatory sources. Show capture events, object versions, and reviewer links clearly.",
      },
      {
        title: "Know What the Evidence Supports—and What It Does Not.",
        description:
          "Compare requested criteria, supplied observations, reviewer findings, limitations, and decisions. Accepted for stated purpose is not Proven.",
      },
    ],
    cta: { label: "Explore Validation & Sufficiency", href: "/platform/evidence-provenance" },
    image: {
      src: "/evidence-management/em5.webp",
      alt: "Reviewer comparing evidence submissions against requested criteria",
    },
  },
  {
    id: "operating-periods",
    blocks: [
      {
        title: "Owners, Assignments and Rework",
        description:
          "Identify request owners, contributors, independent reviewers, remediation owners, and approval boundaries. Inspect rework reasons and next accountable actions.",
      },
      {
        title: "Operating Period and Freshness",
        description:
          "Distinguish period covered, observed-at, captured-at, reviewed-at, valid-through, and assurance-as-of timestamps.",
      },
    ],
    cta: { label: "View Operating Periods", href: "#operating-periods" },
    image: {
      src: "/evidence-management/em6.webp",
      alt: "Evidence owner and reviewer checking assignments and operating periods",
    },
  },
  {
    id: "retention",
    reversed: true,
    blocks: [
      {
        title: "Version, Correction and Supersession",
        description:
          "Version tables show predecessors, successors, correction reasons, dated reviewer impacts, and immutable-display intents if validated.",
      },
      {
        title: "Confidentiality and Retention",
        description:
          "Classification, masking, tenant scope, export permissions, policy-controlled retention, and legal holds are separate governance concerns.",
      },
    ],
    cta: { label: "Explore Retention & Versions", href: "/trust-center/data-governance" },
    image: {
      src: "/evidence-management/em7.webp",
      alt: "Records specialist reviewing document versions and retention files",
    },
  },
  {
    id: "assurance-handoff",
    blocks: [
      {
        title: "Gaps, Exceptions and Remediation",
        description:
          "Missing, partial, stale and disputed evidence are operational queues. Exception/risk acceptance is separate with owner, rationale, and expiry constraints.",
      },
      {
        title: "Assurance and Audit Handoff",
        description:
          "Reviewed evidence supports independent control evaluations with explicit bases, gaps, reviewers, and evidence-as-of contexts.",
      },
    ],
    cta: { label: "Explore Assurance Boundaries", href: "/assurance/audit-readiness" },
    image: {
      src: "/evidence-management/em8.webp",
      alt: "Handing over a reviewed evidence pack for internal audit",
    },
  },
];
