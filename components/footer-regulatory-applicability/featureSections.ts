import type { FeatureSplitSectionProps } from "@/components/audit-readiness/FeatureSplitSection";

const img = (n: number) => `/footer-regulatory-applicability/fra${n}.webp`;

// Content for the alternating two-column sections, top to bottom.
export const featureSections: FeatureSplitSectionProps[] = [
  {
    id: "facts-and-source",
    blocks: [
      {
        title: "Applicability Depends on the Facts.",
        description:
          "Dimensions include jurisdiction, legal entity, regulated activity, product/service, data, customer/counterparty type, and effective period. Show what can change applicability.",
      },
      {
        title: "Start With the Source, Not a Score.",
        description:
          "Illustrative record: issuer, instrument, citation, jurisdiction, publication, effective-from, version and last-reviewed. Ensure official source links open securely with descriptive titles.",
      },
    ],
    cta: { label: "Explore Factors & Source", href: "/regulatory-sources" },
    image: { src: img(2), alt: "Professional verifying applicability facts with a magnifying glass" },
  },
  {
    id: "walkthrough",
    reversed: true,
    blocks: [
      {
        title: "See How Context Changes the Question.",
        description:
          "Public-safe scenario compares one regulatory source with two hypothetical entities and changed activities. Explain source-to-context evaluation without providing legal advice.",
      },
      {
        title: "An Answer Must Show Its Basis.",
        description:
          "Differentiate positive, negative and uncertainty. Outcomes: Applies, Does not apply, UNCERTAIN. Review matched scope facts, source bases, and excluded exact scopes.",
      },
    ],
    cta: { label: "View Walkthrough & Outcomes", href: "#walkthrough" },
    image: { src: img(3), alt: "Busy office team working through open applicability questions" },
  },
  {
    id: "uncertainty",
    blocks: [
      {
        title: "Uncertainty Is a Governed State.",
        description:
          "The interface shows what remains unresolved and who needs to decide. Panel fields include case reference, conflicting/missing fact, citation, scope, and escalation status.",
      },
      {
        title: "Show the Reasoning You Can Review.",
        description:
          "“Why” drawer separates source text, contextual evidence, assumptions, alternative readings and limitations. Show why and missing context without legal advice.",
      },
    ],
    cta: { label: "Explore Uncertainty & Reasoning", href: "#uncertainty" },
    image: {
      src: img(4),
      alt: "Executives discussing unresolved review questions",
      aspect: "aspect-[632/406]",
    },
  },
  {
    id: "jurisdictions",
    reversed: true,
    blocks: [
      {
        title: "One Business, Different Obligations.",
        description:
          "Compare same activity/entity profile across reviewed jurisdictions. Expose entity and jurisdiction variation using filters for jurisdiction, entity, requirement family and review state.",
      },
      {
        title: "Effective When Is Different From Observed When.",
        description:
          "Timeline distinguishes publication date, effective-from/to, source observed-at, evaluated-at, and reviewed-at. Separate effective, seen and reviewed times clearly.",
      },
    ],
    cta: { label: "Compare Jurisdictions & Timeline", href: "/jurisdictions" },
    image: { src: img(5), alt: "Two executives comparing jurisdiction documents at a table" },
  },
  {
    id: "scope-history",
    blocks: [
      {
        title: "Scope Is a Defined Set of Facts.",
        description:
          "Separate identity, legal entity, activity, product, data flows, customer category and jurisdictional operation. Represent legal entity, activity, product and data facts accurately.",
      },
      {
        title: "When Sources or Facts Change, Review Must Follow.",
        description:
          "Before/after record shows source version and organizational context revisions. Explain when a prior result must be revisited with observed changes and scope impacts.",
      },
    ],
    cta: { label: "Inspect Scope & History", href: "#scope-history" },
    image: { src: img(6), alt: "Magnifying glass over a digital globe representing scope analysis" },
  },
  {
    id: "handoff",
    reversed: true,
    blocks: [
      {
        title: "Accountable People Own Consequential Decisions.",
        description:
          "Show reviewer role, rationale, date, version and escalation path. Review-history rows track event ID, actor role, prior/new value, timestamp, rationale and evidence link.",
      },
      {
        title: "From Applicability to Governed Obligations.",
        description:
          "Connect reviewed applicability to what must be operationalized. Step visual: applicability basis → versioned obligation → mapped control owner → evidence requirement → future assurance review.",
      },
    ],
    cta: { label: "View Provenance & Handoff", href: "/platform/evidence-provenance" },
    image: { src: img(7), alt: "Team reviewing a decision record together" },
  },
  {
    id: "boundaries",
    blocks: [
      {
        title: "Apply Rules Carefully. Prove Controls Separately.",
        description:
          "AI may assist finding, extracting and explaining source-grounded material. Three boundaries remain visible: applicability ≠ permission; control mapped ≠ control operated; risk accepted ≠ assurance.",
      },
      {
        title: "Explore the Method Behind the Decision.",
        description:
          "Answer procurement questions and limitations. Genuine Q&As and durable links to Regulatory Sources, Methodology, Applicability Engine and Trust Center.",
      },
    ],
    cta: { label: "Explore Boundaries & FAQs", href: "/methodology" },
    image: { src: img(8), alt: "Team reviewing applicability results on a tablet" },
  },
];
