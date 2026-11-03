import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  LegalConfidenceAndContextSection,
  JurisdictionAnswersAndDecisionReviewSection,
  DefensibleAssuranceAndControlMappingSection,
  AcceptedRiskAndAiAssistanceSection,
  OperationalAccountabilityAndTrustSection,
  GeneralCounselFaqSection,
} from "@/components/general-counsel";

export const metadata: Metadata = {
  title: "General Counsel | ZoikoAssure",
  description:
    "Know Why a Requirement Applies. Preserve the Basis for Every Decision. Regulatory decisions depend on authoritative sources, organizational facts and effective dates.",
};

export default function GeneralCounselPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <LegalConfidenceAndContextSection />
      <JurisdictionAnswersAndDecisionReviewSection />
      <DefensibleAssuranceAndControlMappingSection />
      <AcceptedRiskAndAiAssistanceSection />
      <OperationalAccountabilityAndTrustSection />
      <GeneralCounselFaqSection />
    </div>
  );
}
