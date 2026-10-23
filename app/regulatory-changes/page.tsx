import type { Metadata } from "next";
import {
  RegulatoryChangesHero,
  ChangeTrustCards,
  ChangeFAQs,
} from "@/components/regulatory-changes";
import { JurisdictionFeatureSection } from "@/components/jurisdictions";

export const metadata: Metadata = {
  title: "Regulatory Changes | Regulatory Intelligence | ZoikoAssure",
  description:
    "Explore source-linked regulatory developments with clear authority, legal timing and review context.",
};

const IMG = "/images/regulatory-changes";

export default function RegulatoryChangesPage() {
  return (
    <>
      <RegulatoryChangesHero />
      <ChangeTrustCards />

      <div id="latest-verified-developments">
        <JurisdictionFeatureSection
          primary={{
            title: "Latest Verified Developments",
            description:
              "Explore recent regulatory developments with verified sources, including plain-language summaries and key limitations.",
          }}
          secondary={{
            title: "Browse & Discovery Controls",
            description:
              "Search and filter scoped content by jurisdiction, topic, development type, and effective period. No matches does not equal no relevant regulations.",
          }}
          cta={{ label: "Apply Filters & Explore", href: "#" }}
          image={{
            src: `${IMG}/discovery-controls-verified-developments-ui.webp`,
            alt: "Discovery controls and verified developments interface",
            height: 456,
          }}
        />
      </div>

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Regulatory Change Listing",
          description:
            "Review authoritative titles, issuing bodies, jurisdictions, development class, and distinct published/effective dates.",
        }}
        secondary={{
          title: "Record Detail Anatomy",
          description:
            "Expose authority, version, dates, and official source. Read reviewed editorial paraphrasing that separates interpretation from the exact original quote.",
        }}
        cta={{ label: "View Record Detail", href: "#" }}
        image={{
          src: `${IMG}/change-listing-record-detail.webp`,
          alt: "Regulatory change listing and record detail",
          height: 332,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Status & Date Interpretation",
          description:
            "Explain lifecycle and time semantics. Understand the distinction between announced, published, legally effective, and superseded dates.",
        }}
        secondary={{
          title: "Regulatory Topics",
          description:
            "Browse governed topical taxonomy. Find source-linked changes related to AI governance, privacy, operational resilience, and financial regulation.",
        }}
        cta={{ label: "Browse Topics", href: "/frameworks" }}
        image={{
          src: `${IMG}/status-interpretation-regulatory-topics-ui.webp`,
          alt: "Status interpretation and regulatory topics interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Jurisdiction Discovery",
          description:
            "Browse by region and source scope. Explore cross-border differences without merging incompatible regimes.",
        }}
        secondary={{
          title: "Version & Correction History",
          description:
            "Show supersession, edits and notices. Follow the lineage from original publication through amendments to the current effective version.",
        }}
        cta={{
          label: "Explore Jurisdictions & History",
          href: "/jurisdictions",
        }}
        image={{
          src: `${IMG}/jurisdiction-discovery-version-history.webp`,
          alt: "Jurisdiction discovery and version history",
          height: 332,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Editorial Review & Methodology",
          description:
            "Explain what verified / unverified means. Review how source materials are extracted, verified, and updated by authorized legal reviewers.",
        }}
        secondary={{
          title: "Related Obligations & Guidance",
          description:
            "Clearly separate downstream objects. Understand the distinction between a regulatory change event and a governed compliance obligation.",
        }}
        cta={{
          label: "View Methodology",
          href: "/regulatory-intelligence/methodology",
        }}
        image={{
          src: `${IMG}/editorial-methodology-obligations-ui.webp`,
          alt: "Editorial methodology and obligations interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "From Intelligence to Action",
          description:
            "See how an organization assesses the impact of a regulatory change. A change record does not authorize an action or automatically map to an organizational control.",
        }}
        secondary={{
          title: "Research & Procurement Trust",
          description:
            "Surface access/licensing and security limits. Discuss data governance, API integrations, and how source reliability is maintained.",
        }}
        cta={{ label: "Visit Trust Center", href: "/trust-center" }}
        image={{
          src: `${IMG}/intelligence-to-action-trust-verification.webp`,
          alt: "Intelligence to action and trust verification",
          height: 456,
        }}
      />

      <ChangeFAQs />
    </>
  );
}
