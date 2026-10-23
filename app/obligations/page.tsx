import type { Metadata } from "next";
import {
  ObligationsHero,
  ObligationTrustCards,
  WhyStructuredObligationsMatter,
  RoleBasedEvaluationPathways,
  ObligationFAQs,
} from "@/components/obligations";
import { JurisdictionFeatureSection } from "@/components/jurisdictions";

export const metadata: Metadata = {
  title: "Obligations | Regulatory Intelligence | ZoikoAssure",
  description:
    "Explore structured, source-linked regulatory obligations with their original authority, effective dates, revision context and review status.",
};

const IMG = "/images/obligations";

export default function ObligationsPage() {
  return (
    <>
      <ObligationsHero />
      <ObligationTrustCards />
      <WhyStructuredObligationsMatter />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "Obligation Anatomy Showcase",
          description:
            "Explore a canonical public object and annotated specimen. Understand the stable public identifier, reviewed succinct summary, and original URL.",
        }}
        secondary={{
          title: "Explore Verified Obligations",
          description:
            'Explore source-linked requirements. Render only approved real records; no fabricated "Latest" examples.',
        }}
        cta={{ label: "Explore Obligations", href: "#" }}
        image={{
          src: `${IMG}/obligation-anatomy-showcase-ui.webp`,
          alt: "Obligation anatomy showcase interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        imageLeft
        primary={{
          title: "Search, Filters & Sort",
          description:
            "Search indexed requirement title, provision number, issuer and reviewed summary. Filter by Jurisdiction, Authority, Requirement category, Domain, Effective period, and Source/version state.",
        }}
        secondary={{
          title: "Regulatory Obligation Record",
          description:
            "Access complete public details and original citation. View the verified obligation title, reference, issuer, jurisdiction, and status text.",
        }}
        cta={{ label: "View Record Detail", href: "#" }}
        image={{
          src: `${IMG}/search-obligation-record-ui.webp`,
          alt: "Search and obligation record interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "Jurisdiction, Scope & Legal Timing",
          description:
            "Understand explicit constraints and effective dates. Clarify that platform observation date is not the legal effective date.",
        }}
        secondary={{
          title: "Original Text, Summary & Classification",
          description:
            "Review source-excerpt rights and separate interpretation. Differentiate between binding, nonbinding guidance, proposed, or withdrawn status.",
        }}
        cta={{ label: "Inspect Scope & Text", href: "/jurisdictions" }}
        image={{
          src: `${IMG}/jurisdiction-original-text-summary.webp`,
          alt: "Jurisdiction and original text summary",
          height: 331,
        }}
      />

      <JurisdictionFeatureSection
        imageLeft
        primary={{
          title: "Versions, Amendments & Supersession",
          description:
            "Track temporal change lineage. View original source, amendment events, current vs historical views, and superseded notices.",
        }}
        secondary={{
          title: "Applicability Is Contextual",
          description:
            "Applicability depends on jurisdiction, legal entity, activities, products, customers, data and effective time. Downstream review may be UNCERTAIN.",
        }}
        cta={{ label: "Explore Applicability", href: "/applicability-engine" }}
        image={{
          src: `${IMG}/versions-applicability-context.webp`,
          alt: "Versions and applicability context",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "From Obligation to Control",
          description:
            "Understand the transition from a legal text to a business response. Mapping is not evidence that a control operated.",
        }}
        secondary={{
          title: "Provenance, Methodology & Human Review",
          description:
            "Examine publication quality and evidence of editorial care. Understand how requirements are extracted, versioned, reviewed and corrected.",
        }}
        cta={{
          label: "Explore Methodology",
          href: "/regulatory-intelligence/methodology",
        }}
        image={{
          src: `${IMG}/obligation-control-methodology.webp`,
          alt: "Obligation to control and methodology",
          height: 456,
        }}
      />

      <RoleBasedEvaluationPathways />
      <ObligationFAQs />
    </>
  );
}
