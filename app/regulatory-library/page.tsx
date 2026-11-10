import type { Metadata } from "next";
import {
  LibraryHero,
  LibraryTrustCards,
  TrustPrivacyProcurement,
  LibraryFAQs,
} from "@/components/regulatory-library";
import { JurisdictionFeatureSection } from "@/components/jurisdictions";

export const metadata: Metadata = {
  title: "Regulatory Library | Regulatory Intelligence | ZoikoAssure",
  description:
    "Browse verified, source-linked regulatory intelligence by topic, jurisdiction and record type, with citations, versions and review context.",
};

const IMG = "/images/regulatory-library";

export default function RegulatoryLibraryPage() {
  return (
    <>
      <LibraryHero />
      <LibraryTrustCards />

      <div id="library-browse-directory">
        <JurisdictionFeatureSection
          primary={{
            title: "Library Browse Directory",
            description:
              "Explore curated groups: Regulatory Changes, Obligations, Enforcement & Guidance, Frameworks, and Regulatory Guides. Only verified, published records are shown.",
          }}
          secondary={{
            title: "Featured Reviewed Records",
            description:
              "Recent regulatory developments with verified sources, including plain-language summaries and key limitations. Read what changed according to the source.",
          }}
          cta={{ label: "Browse Curated Categories", href: "#" }}
          image={{
            src: `${IMG}/library-browse-featured-records-ui.webp`,
            alt: "Library browse directory and featured reviewed records",
            height: 357,
          }}
        />
      </div>

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Record Types and Legal Status",
          description:
            "Differentiate binding laws, guidance, enforcement actions, and explanatory content. Explicit source class and draft/final/amended/superseded status.",
        }}
        secondary={{
          title: "Source-linked Record Detail",
          description:
            "Canonical ID, content type, approved title, original language, issuer, jurisdiction. Review the official source URL, citation/pinpoint, and legal dates.",
        }}
        cta={{ label: "View Record Detail Anatomy", href: "#" }}
        image={{
          src: `${IMG}/source-linked-record-detail-interface.webp`,
          alt: "Source-linked record detail interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Search and Faceted Results",
          description:
            "Conditional index interface with unambiguous filters for Jurisdiction, Content type, Issuer, Legal status, and Dates. Accessible clear controls and stable sorting.",
        }}
        secondary={{
          title: "Version / Effective-Time Timeline",
          description:
            "Expose updated, amended, superseded and future-effective relationships. Distinct labels for Issued, Published, Effective-from, Observed, and Reviewed timestamps.",
        }}
        cta={{ label: "Explore Search & Timelines", href: "#" }}
        image={{
          src: `${IMG}/faceted-search-timeline-viewer.webp`,
          alt: "Faceted search and timeline viewer",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Jurisdiction and Topic Exploration",
          description:
            "Connect to authoritative geography and topic taxonomy. Country, supranational, subnational and region grouping as separate dimensions.",
        }}
        secondary={{
          title: "Authorities and Methodology",
          description:
            "Show source verification, translations, corrections and limits. Read the published methodology and correction route with accountable reviewers.",
        }}
        cta={{
          label: "Read Methodology",
          href: "/regulatory-intelligence/methodology",
        }}
        image={{
          src: `${IMG}/methodology-authorities-explainer.webp`,
          alt: "Methodology and authorities explainer",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        primary={{
          title: "Regulatory Changes and Obligations",
          description:
            "Cross-link source-derived objects without pretending compliance. Distinguish between a detected change and an applicable change for a specific entity.",
        }}
        secondary={{
          title: "Explanatory Guides and Definitions",
          description: (
            <>
              Provide distinct editorial content and answer-first snippets.
              Short first
              <br className="hidden lg:block" /> paragraph explains issuer,
              content class, jurisdiction, date and significance.
            </>
          ),
        }}
        cta={{ label: "View Linked Guides", href: "/regulatory-changes" }}
        image={{
          src: `${IMG}/changes-explanatory-guides-ui.webp`,
          alt: "Regulatory changes and explanatory guides interface",
          height: 456,
        }}
      />

      <JurisdictionFeatureSection
        muted
        imageLeft
        primary={{
          title: "Governed AI and Human Review",
          description:
            "Explain source-grounded assistance and escalation restrictions. AI summaries require citations, uncertainty, and human-accountable review.",
        }}
        secondary={{
          title: "Research Scenarios",
          description:
            "Role-relevant discovery stories with clear data boundaries for General Counsel, CCO, CRO, Regulatory Analysts, and Internal Audit.",
        }}
        cta={{ label: "Explore Use Cases", href: "#" }}
        image={{
          src: `${IMG}/governed-ai-review-research-paths.webp`,
          alt: "Governed AI review and research paths",
          height: 456,
        }}
      />

      <TrustPrivacyProcurement />
      <LibraryFAQs />
    </>
  );
}
