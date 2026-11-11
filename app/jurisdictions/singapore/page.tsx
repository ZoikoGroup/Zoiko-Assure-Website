import type { Metadata } from "next";
import { Hero, SourceTypes, FaqSection } from "@/components/singapore";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Singapore | Jurisdictions | ZoikoAssure",
  description:
    "Understand how Singapore statutes, subsidiary legislation, Government Gazette publications and regulator instruments differ—and what source, version and legal timing matter before a compliance conclusion.",
};

const IMG = "/jurisdictions-singapore-regulatory-exposure";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Publication, legal force and guidance are different things.",
        description:
          "An Act, a regulation, a MAS notice and a PDPC advisory guideline do not necessarily impose the same kind of duty. Status must follow each instrument and its issuing authority.",
      },
      {
        title: "Which date matters?",
        description:
          "Keep the date a law was made or assented to, its Gazette publication, the commencement of each provision, its revision/compilation state and the date of review separate. A new revised edition or updated consolidation does not itself establish a new legal requirement.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/sg2.webp`,
      alt: "Professionals around a boardroom table with a glowing scale of justice",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Applicability depends on your actual operating context.",
        description:
          "If the legal basis, entity or activity is unresolved, the state is UNCERTAIN and requires review—not “noncompliant” or “approved.”",
      },
      {
        title: "From source to evidence-backed assurance.",
        description:
          "Identify the source, review the Singapore business context, understand a possible obligation, map a control, evaluate evidence and preserve the accountable assurance conclusion. A cited rule is not a conclusion that it applies; a mapped control is not proof that the control operated.",
      },
    ],
    cta: { label: "Explore Controls & Evidence", href: "/obligation-control-mapping" },
    image: {
      src: `${IMG}/sg3.webp`,
      alt: "Team mapping decision outcomes on a whiteboard during a meeting",
    },
  },
  {
    blocks: [
      {
        title: "A regulatory statement should carry its source and date.",
        description:
          "Identify the official publisher, exact citation, canonical URL, version, effective date, and any specific rights to reproduce or distribute. Source access does not automatically grant rights to reproduce or index government-published content.",
      },
      {
        title: "Coverage, rights and review.",
        description:
          "Content availability, source permissions and review freshness vary. No material on this page should be treated as an automatically complete or current statement of law.",
      },
    ],
    cta: { label: "Report a source issue", href: "/contact" },
    image: {
      src: `${IMG}/sg4.webp`,
      alt: "Professional reviewing certified documents in a binder at a desk",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "AI Assistance With Sources—and Human Accountability.",
        description:
          "Source-grounded analysis can help legal and compliance teams review relevant material. Outputs remain qualified, reviewable and subject to accountable human judgment.",
      },
      {
        title: "Risk acceptance and documented exceptions remain distinct from evidence-backed assurance.",
        description:
          "Accepted exceptions belong to a separate governance lane. Expose rationales, approval authorities, and expiries while ensuring assurance states remain unaffected.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/sg5.webp`,
      alt: "AI assistant working alongside a person reviewing source material",
    },
  },
];

export default function SingaporePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SourceTypes />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
