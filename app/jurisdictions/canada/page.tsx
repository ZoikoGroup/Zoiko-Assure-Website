import type { Metadata } from "next";
import { Hero, LegalAuthoritySources, FaqSection } from "@/components/canada";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Canada | Jurisdictions | ZoikoAssure",
  description:
    "Understand the differences between Canadian federal, provincial and territorial requirements—and how authoritative sources may connect to obligations, controls and evidence.",
};

const IMG = "/canada";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Explore Canadian jurisdictions with source context.",
        description:
          "Ten provinces and three territories. Listings do not claim complete regulatory coverage. English and French source versions and translations should be clearly identified, with applicable legal authority and language verified for each publisher.",
      },
      {
        title: "Not every regulatory document creates the same obligation.",
        description:
          "Where sources are approved for publication, show the issuer, citation, language, status, relevant dates and authoritative link. Separate proposal from enforceable text. Legal commencement and source currency are different questions.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/ca2.webp`,
      alt: "Canadian flag flying in front of a downtown Toronto skyline",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Applicability depends on your actual operating context.",
        description: (
          <>
            The example below is illustrative. An applicability decision may require legal review
            of jurisdiction, entity, activities, customers, product, data and the relevant time
            period.
            <span className="mt-4 block">
              <strong className="font-semibold text-[#0A2540]">UNCERTAIN — review required.</strong>{" "}
              Missing context or source verification prevents a supported conclusion.
            </span>
          </>
        ),
      },
      {
        title: "From Canadian source to defensible assurance.",
        description:
          "A cited rule is not a conclusion that it applies; a mapped control is not proof that the control operated. Preserve uncertainty, review and evidence lineage.",
      },
    ],
    cta: { label: "Explore Controls & Evidence", href: "/obligation-control-mapping" },
    image: {
      src: `${IMG}/ca3.webp`,
      alt: "Two professionals reviewing operating context on a tablet",
    },
  },
  {
    blocks: [
      {
        title: "A regulatory statement should carry its source and date.",
        description:
          "Identify the official publisher, exact citation, canonical URL, version, effective date, and any specific rights to reproduce or distribute.",
      },
      {
        title: "Coverage, rights and review",
        description:
          "Content availability, source permissions and review freshness vary. No material on this page should be treated as an automatically complete or current statement of law.",
      },
    ],
    cta: { label: "Report a source issue", href: "/contact" },
    image: {
      src: `${IMG}/ca4.webp`,
      alt: "Professional reviewing a printed regulatory document outdoors",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Risk acceptance and documented exceptions remain distinct from evidence-backed assurance.",
        description:
          "Accepted exceptions belong to a separate governance lane. Expose rationales, approval authorities, and expiries while ensuring assurance states remain unaffected.",
      },
      {
        title: "Source listings, jurisdiction options and examples are not claims of exhaustive legal or regulator coverage.",
        description:
          "Comparison preserves regulatory independence, territorial overlap, and local conflicts. Federal applicability does not guarantee state/provincial compliance.",
      },
    ],
    cta: { label: "Explore Responsible AI", href: "/trust-center/responsible-ai" },
    image: {
      src: `${IMG}/ca5.webp`,
      alt: "Team comparing multi-jurisdictional compliance charts and timelines",
    },
  },
];

export default function CanadaPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <LegalAuthoritySources />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
