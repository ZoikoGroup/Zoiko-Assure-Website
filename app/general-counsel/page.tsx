import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyConnectedLegalAssuranceSection,
  SixStageModelSection,
  ProductUiShowcaseSection,
  SourceAuthoritySection,
  JurisdictionComparisonSection,
  DecisionProvenanceSection,
  EvidenceAssuranceSection,
  StakeholderCollaborationSection,
  TrustPrivacySection,
  FaqSection,
} from "@/components/general-counsel";

export const metadata: Metadata = {
  title: "General Counsel | ZoikoAssure",
  description:
    "Make regulatory decisions traceable to their sources. ZoikoAssure helps General Counsel connect authoritative regulatory sources to jurisdiction-specific applicability, governed obligations, operational controls, evidence and accountable assurance review.",
};

export default function GeneralCounselPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyConnectedLegalAssuranceSection />
      <SixStageModelSection />
      <ProductUiShowcaseSection />
      <SourceAuthoritySection />
      <JurisdictionComparisonSection />
      <DecisionProvenanceSection />
      <EvidenceAssuranceSection />
      <StakeholderCollaborationSection />
      <TrustPrivacySection />
      <FaqSection />
    </div>
  );
}
