import type { FeatureSplitSectionProps } from "./FeatureSplitSection";

// Content for the alternating two-column sections, top to bottom.
export const featureSections: FeatureSplitSectionProps[] = [
  {
    id: "lineage",
    blocks: [
      {
        title: "Avoid Last-Minute Reconstruction",
        description:
          "Explain scattered source decisions, differing periods, missing evidence and manual reviewer questions. Prevent scrambled responses by establishing a traceable workflow.",
      },
      {
        title: "Six-Stage Lineage and Audit Placement",
        description:
          "Regulatory Source → Applicability → Obligation → Control → Evidence → Assurance; readiness indexes this chain, never replaces it.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: "/audit-readiness/ar2.webp",
      alt: "Auditor mapping source decisions and checking six-stage lineage",
    },
  },
  {
    id: "request-inventory",
    reversed: true,
    blocks: [
      {
        title: "Illustrative Examination Scope",
        description:
          "Visible legal entity, jurisdiction, reviewing organization, standard/request basis, period under review and as-of. Select valid authorized scope before showing internal request register.",
      },
      {
        title: "Audit Request Inventory",
        description:
          "Requests include purpose, owner, due date, requirement, evidence expectation and status. Search by request ID; filter owner, state, due period, entity; sort labeled.",
      },
    ],
    cta: { label: "Review Request Inventory", href: "#request-inventory" },
    image: {
      src: "/audit-readiness/ar3.webp",
      alt: "Team checking examination scope and tracking audit requests",
    },
  },
  {
    id: "crosswalk",
    blocks: [
      {
        title: "Request-to-Obligation Crosswalk",
        description:
          "Each request references source, applicability outcome, obligation, linked control and relevant effective period. Open authoritative source and versioned relationship, preserve return focus.",
      },
      {
        title: "Evidence Requirement and Collection",
        description:
          "Per request identify evidence type, required period, owner, delivery context and minimum metadata. Assign contributor, add evidence reference, flag missing; actions conditional.",
      },
    ],
    cta: { label: "Explore Crosswalk & Evidence", href: "/platform/obligation-control-mapping" },
    image: {
      src: "/audit-readiness/ar4.webp",
      alt: "Reviewing obligation crosswalks and verifying required evidence",
    },
  },
  {
    id: "provenance",
    reversed: true,
    blocks: [
      {
        title: "Evidence Relevance and Provenance",
        description:
          "Compare object origin, producer, received timestamp, version, period and verification outcome. View approved evidence metadata; inspect chain; request clarification.",
      },
      {
        title: "Freshness and Temporal Integrity",
        description:
          "Separate evidence-period, observed-at, extracted-at, reviewer-as-of and packet-generated-at timestamps. Reveal stale/superseded warning and refresh decision queue.",
      },
    ],
    cta: { label: "Check Freshness & Provenance", href: "/assurance/evidence-provenance" },
    image: {
      src: "/audit-readiness/ar5.webp",
      alt: "Auditing evidence freshness, temporal integrity and provenance",
    },
  },
  {
    id: "triage",
    blocks: [
      {
        title: "Review Triage and Gap Register",
        description:
          "Track missing, stale, disputed, inaccessible and nonconforming evidence with owner, severity policy and due action. Assign, return for clarification, request new artifact or escalate.",
      },
      {
        title: "Reviewer Decisions and Independence",
        description:
          "Show submitter, review status, evidence-specific disposition, rationale and reviewer independence. Accept for package / Return for changes / Reassign / Escalate if authorized.",
      },
    ],
    cta: { label: "Explore Triage & Decisions", href: "#triage" },
    image: {
      src: "/audit-readiness/ar6.webp",
      alt: "Executives triaging gap registers and logging reviewer decisions",
    },
  },
  {
    id: "package",
    reversed: true,
    blocks: [
      {
        title: "Package Builder and Manifest",
        description:
          "Display request coverage, document/reference manifest, exclusions, open gaps, scope, generated-at and manifest version. Select permitted items, preview manifest, request approval for share/export.",
      },
      {
        title: "Secure Sharing and Auditor Access",
        description:
          "Propose recipient-specific purpose, expiry, permitted artifacts, question handling and revocation. Grant/read/revoke only with verified service and policy; read-only specimen otherwise.",
      },
    ],
    cta: { label: "View Manifests & Sharing", href: "#package" },
    image: {
      src: "/audit-readiness/ar7.webp",
      alt: "Building package manifests and establishing secure sharing protocols",
    },
  },
  {
    id: "outcomes",
    blocks: [
      {
        title: "Changes, Findings and Response History",
        description:
          "Compare package snapshot and later source, control, evidence or review changes; note external questions separately. Open change impact, create response task, produce revised manifest if authorized.",
      },
      {
        title: "Role Outcomes and Enterprise Proof",
        description:
          "Explain buyer outcomes for CRO, Compliance, Legal, Internal Audit and procurement. Understand how traceable audit readiness supports defensibility across teams.",
      },
    ],
    cta: { label: "Review Enterprise Outcomes", href: "/roles/internal-audit" },
    image: {
      src: "/audit-readiness/ar8.webp",
      alt: "Evaluating response histories and enterprise proof outcomes",
    },
  },
];
