import type { Metadata } from "next";
import { Hero, PrincipleCards, FaqSection } from "@/components/ai-data-governance-governed-ai";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Governed AI | AI & Data Governance | ZoikoAssure",
  description:
    "Explore how source context, reviewable suggestions, visible uncertainty and governed evidence can support accountable compliance operations.",
};

const IMG = "/ai-data-governance-governed-ai";

const note =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold uppercase leading-[1.6] text-[#334155]";
const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const small = "mt-4 block text-[12.5px] leading-5 text-[#6B7280]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "From regulatory source to evidence-backed assurance.",
        description: (
          <>
            Source → Applicability → Obligation → Control → Evidence → Assurance
            <span className="mt-5 block">
              The workflow is a conceptual model. Product availability depends on the approved
              deployment and market scope.
            </span>
            <span className={note}>Synthetic example — not live customer data</span>
            <span className={small}>A suggestion that still requires judgment and evidence.</span>
          </>
        ),
      },
      {
        title: "Know which authority and version informed a suggestion.",
        description:
          "Retain issuer, instrument, edition, legal effective date where relevant and review time.",
      },
    ],
    image: {
      src: `${IMG}/aga2.webp`,
      alt: "Two colleagues tracing a regulatory source through printed reports and a dashboard",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Unknown is not a compliance status.",
        description:
          "An applicability decision depends on the relevant entity, activity, jurisdiction and effective period. UNCERTAIN requires review.",
      },
      {
        title: "Human decisions remain accountable.",
        description:
          "A governed review path can include assignment, rationale, correction, approval, rejection and auditable override where implemented.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/aga3.webp`,
      alt: "Two reviewers examining a bound source document and taking notes",
    },
  },
  {
    blocks: [
      {
        title: "Evidence has a date, custodian and scope.",
        description: (
          <>
            A document or control mapping is not proof that the control operated as required.
            <span className="mt-5 block">
              <strong className="font-semibold text-[#334155]">
                Material changes can invalidate prior conclusions:
              </strong>{" "}
              Model, prompt, retrieval-source or policy changes should be assessed for affected
              outcomes and controls.
            </span>
          </>
        ),
      },
      {
        title: "Frameworks, standards and legislation serve different purposes.",
        description: (
          <>
            NIST AI RMF 1.0: voluntary AI risk-management guidance; revision underway. ISO/IEC
            42001:2023: AI management-system requirements; certification not asserted. EU AI Act:
            binding law where applicable; dates and duty vary by provision and role.
            <span className={noteCase}>
              Private record details are available only to authorized users where implemented.
            </span>
            <span className={small}>
              Some source documents may be linked rather than reproduced because of rights
              restrictions.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/aga4.webp`,
      alt: "Two colleagues assessing evidence custody and changes beside archive binders",
    },
  },
];

export default function GovernedAiPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <PrincipleCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
