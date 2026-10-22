import {
  Hero,
  KeyPillarsFloating,
  ExpansionChangesExposureSection,
  WorkflowStagesSection,
  ExpansionScenarioContext,
  SourcesVersionsAndEffectiveTime,
  ApplicabilityReviewAndObligations,
  EvidenceAndDecisionGovernance,
  RegulatoryExposureDiagnostic,
  SecurityPrivacyImplementationFit,
  BuyerFAQs,
} from "@/components/new-market-jurisdiction";

export default function NewmarketPage() {
  return (
    <main>
      <Hero />
      <KeyPillarsFloating />
      <ExpansionChangesExposureSection />
      <WorkflowStagesSection />
      <ExpansionScenarioContext />
      <SourcesVersionsAndEffectiveTime />
      <ApplicabilityReviewAndObligations />
      <EvidenceAndDecisionGovernance />
      <RegulatoryExposureDiagnostic />
      <SecurityPrivacyImplementationFit />
      <BuyerFAQs />
    </main>
  );
}
