import type { Metadata } from "next";
import {
  JurisdictionsHero,
  TrustSignalCards,
  GeographicDiscoveryDirectory,
  JurisdictionTypesAndScope,
  JurisdictionFeatureSection,
  BuyerScenarios,
  JurisdictionFAQs,
} from "@/components/jurisdictions";

export const metadata: Metadata = {
  title: "Jurisdictions | Regulatory Intelligence | ZoikoAssure",
  description:
    "Explore regulation by jurisdiction and preserve the context behind every requirement with source-linked, scope-qualified and date-aware jurisdiction profiles.",
};

const IMG = "/images/jurisdictions";

export default function JurisdictionsPage() {
  return (
    <>
      <JurisdictionsHero />
      <TrustSignalCards />
      <GeographicDiscoveryDirectory />
      <JurisdictionTypesAndScope />

      <JurisdictionFeatureSection
        primary={{
          title: "Jurisdiction Profile Preview",
          description:
            "Primary source, authorities, reviewed topics, and as-of context. Evaluate what applies to your organization.",
        }}
        secondary={{
          title: "Territory / Regime Detail Template",
          description:
            "Approved destination template, institutional summary, territorial hierarchy, and coverage panel.",
        }}
        cta={{
          label: "Evaluate Applicability",
          href: "/applicability-engine",
        }}
        image={{
          src: `${IMG}/jurisdiction-profile-detail-interface.webp`,
          alt: "Jurisdiction profile and detail interface",
          height: 331.56,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Topic and Regulatory-Domain Browsing",
          description:
            "Drill into verified themes without false completeness. Facets populated from truly published and rights-cleared records.",
        }}
        secondary={{
          title: "Authorities, Sources and Provenance",
          description:
            "Primary publisher registry and citation handoff. Authority legal competence is source-verified. Primary vs secondary reference visibly separated.",
        }}
        cta={{
          label: "Explore Topics & Sources",
          href: "/regulatory-sources",
        }}
        image={{
          src: `${IMG}/topic-browsing-authority-sourcing.webp`,
          alt: "Topic browsing and authority sourcing",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Regulatory Change and Currentness",
          description:
            "Effective periods, reviewed updates, stale and superseded warnings. Technical timestamp is not legal effectiveness.",
        }}
        secondary={{
          title: "Cross-Border Comparison",
          description:
            "Side-by-side source-grounded differences; no inferred equivalence. Regulatory conflicts are surfaced, not automatically reconciled.",
        }}
        cta={{ label: "Compare Contexts", href: "/regulatory-change" }}
        image={{
          src: `${IMG}/regulatory-change-jurisdiction-comparison.webp`,
          alt: "Regulatory change and jurisdiction comparison",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "From Jurisdiction to Applicability",
          description:
            "UNCERTAIN and accountable enterprise assessment. Geographic selection does not grant regulator authorization or IAM access.",
        }}
        secondary={{
          title: "Obligations and Assurance Chain",
          description:
            "Show where jurisdiction discovery hands off. Obligation, Control, Evidence, Assurance are managed distinctly downstream.",
        }}
        cta={{
          label: "Explore Assurance Chain",
          href: "/obligation-control-mapping",
        }}
        image={{
          src: `${IMG}/applicability-assurance-lineage.webp`,
          alt: "Applicability and assurance lineage",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Research and Editorial Governance",
          description:
            "Correction, language, scope, rights, and review. Authorized reviewers confirm issuer and document authenticity.",
        }}
        secondary={{
          title: "Trust / Procurement Proof",
          description:
            "Methodology, privacy, security, and sourcing pathways. Support procurement due diligence without false badge theater.",
        }}
        cta={{ label: "Visit Trust Center", href: "/trust-center" }}
        image={{
          src: `${IMG}/governance-trust-evaluation.webp`,
          alt: "Governance and trust evaluation",
          width: 628,
          height: 332,
        }}
      />

      <BuyerScenarios />
      <JurisdictionFAQs />
    </>
  );
}
