import type { Metadata } from "next";
import {
  SourcesHero,
  SourceTrustCards,
  SourceRegistry,
  SourceFAQs,
} from "@/components/regulatory-sources";
import { JurisdictionFeatureSection } from "@/components/jurisdictions";

export const metadata: Metadata = {
  title: "Regulatory Sources | Regulatory Intelligence | ZoikoAssure",
  description:
    "Explore source authority, jurisdiction, publication channel and verification context behind every piece of regulatory intelligence.",
};

const IMG = "/images/regulatory-sources";

export default function RegulatorySourcesPage() {
  return (
    <>
      <SourcesHero />
      <SourceTrustCards />
      <SourceRegistry />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "Authority and Channel Classification",
          description:
            "Distinguish publisher, official channel, source class, intermediary. Differentiate who has authority from where information is published.",
        }}
        secondary={{
          title: "Canonical Source Profile",
          description:
            "Show complete authoritative source identity and scope. Access original source URL, document identifier, and publisher information safely.",
        }}
        cta={{ label: "View Source Profile", href: "#" }}
        image={{
          src: `${IMG}/source-authority-profile-inspection-ui.webp`,
          alt: "Source authority and profile inspection interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        imageLeft
        primary={{
          title: "Jurisdiction and Coverage Qualification",
          description:
            "Clarify legal geography, supported listings and uncovered areas. Explain geography without implying that source visibility proves a legal obligation applies.",
        }}
        secondary={{
          title: "Verification and Review Lifecycle",
          description:
            "Publish only verified records with an accountable reviewer, traceable source basis and accurate review status. Unverifiable information escalates; no autopublish.",
        }}
        cta={{ label: "View Verification Status", href: "#" }}
        image={{
          src: `${IMG}/jurisdiction-scope-review-lifecycle-ui.webp`,
          alt: "Jurisdiction scope and review lifecycle interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "Date and Version Semantics",
          description: (
            <>
              Maintain issue, effective, observed and reviewed time. Distinguish
              legal/
              <wbr />
              publication time from observation and editorial review time.
            </>
          ),
        }}
        secondary={{
          title: "Typed Links to Intelligence",
          description:
            "Relate source to changes, obligations, library. Explain how sources support downstream intelligence without duplicating each record type or promising completeness.",
        }}
        cta={{ label: "Explore Related Entries", href: "/regulatory-library" }}
        image={{
          src: `${IMG}/date-semantics-typed-links-ui.webp`,
          alt: "Date semantics and typed links to intelligence",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        imageLeft
        primary={{
          title: "Source Outage, Staleness and Corrections",
          description:
            "Build trust by exposing unavailability and dated fallback. A credible regulated platform must admit source failures and show dated fallback behavior instead of false certainty.",
        }}
        secondary={{
          title: "Source-to-Assurance Provenance",
          description:
            "Show what a regulatory source can and cannot establish. Follow the six-stage diagram: Source → Applicability → Obligation → Control → Evidence → Assurance.",
        }}
        cta={{
          label: "Explore Assurance Chain",
          href: "/obligation-control-mapping",
        }}
        image={{
          src: `${IMG}/source-outage-provenance-chain.webp`,
          alt: "Source outage recovery and provenance chain",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        primary={{
          title: "Governed AI Source Use",
          description:
            "Ground AI summaries in reviewed source material and human checks. AI can assist source classification and explanation only under documented governance and responsible human review.",
        }}
        secondary={{
          title: "Rights, Languages and Third Parties",
          description:
            "Respect license, official-language and translation distinctions. Source transparency must not become unauthorized full-text redistribution or mislabel unofficial translations.",
        }}
        cta={{ label: "Read Handling Rules", href: "#" }}
        image={{
          src: `${IMG}/governed-ai-rights-compliance-ui.webp`,
          alt: "Governed AI and rights compliance interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        imageLeft
        primary={{
          title: "Methodology and Editorial Governance",
          description:
            "Give concise method summary and correction route. Explain selection criteria, issuer confirmation, official-domain verification, review roles, dating principles and correction route.",
        }}
        secondary={{
          title: "Enterprise Trust and Procurement",
          description:
            "Answer buyer questions with real controls and qualified disclosures. Buyers want defensible sourcing without unverifiable assurances or architectural data leakage.",
        }}
        cta={{ label: "Visit Trust Center", href: "/trust-center" }}
        image={{
          src: `${IMG}/methodology-enterprise-trust-evaluation.webp`,
          alt: "Methodology and enterprise trust evaluation",
          width: 625,
          height: 383,
        }}
      />

      <SourceFAQs />
    </>
  );
}
