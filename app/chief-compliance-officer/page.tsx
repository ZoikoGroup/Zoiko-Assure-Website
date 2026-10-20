import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyComplianceProofBreaksDownSection,
  SixStageModelSection,
  ExecutiveComplianceViewSection,
  ControlsAssuranceValidationSection,
  RemediationExaminationPrepSection,
  RegulatoryChangeJurisdictionSection,
  GovernedAiCollaborationSection,
  RegulatoryScenarioWalkthroughSection,
  TrustPrivacySection,
  FaqSection,
} from "@/components/chief-compliance-officer";

export const metadata: Metadata = {
  title: "Chief Compliance Officer | ZoikoAssure",
  description:
    "Make every obligation traceable to action and evidence. ZoikoAssure connects regulatory applicability and obligations to accountable controls, governed evidence, and continuous assurance.",
};

export default function ChiefComplianceOfficerPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyComplianceProofBreaksDownSection />
      <SixStageModelSection />
      <ExecutiveComplianceViewSection />
      <ControlsAssuranceValidationSection />
      <RemediationExaminationPrepSection />
      <RegulatoryChangeJurisdictionSection />
      <GovernedAiCollaborationSection />
      <RegulatoryScenarioWalkthroughSection />
      <TrustPrivacySection />
      <FaqSection />
    </div>
  );
}
