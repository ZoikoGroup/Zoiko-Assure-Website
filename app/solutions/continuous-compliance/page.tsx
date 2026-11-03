import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  PolicyAndAssuranceRecordSection,
  ScopeAndChangeIntakeSection,
  ApplicabilityHandoffAndObligationsSection,
  ControlCoverageAndEvidenceSection,
  EvidenceEvaluationAndAcceptedExposureSection,
  TeamRhythmAndOperatingSystemsSection,
  UnresolvedDecisionsAndTrustEvidenceSection,
  GovernanceQuestionsAndFaqSection,
} from "@/components/continuous-compliance";

export const metadata: Metadata = {
  title: "Continuous Compliance | ZoikoAssure",
  description:
    "Build a continuous compliance practice around accountable evidence. Connect regulatory changes to owners, controls and evidence—while keeping uncertainty and review visible.",
};

export default function ContinuousCompliancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <PolicyAndAssuranceRecordSection />
      <ScopeAndChangeIntakeSection />
      <ApplicabilityHandoffAndObligationsSection />
      <ControlCoverageAndEvidenceSection />
      <EvidenceEvaluationAndAcceptedExposureSection />
      <TeamRhythmAndOperatingSystemsSection />
      <UnresolvedDecisionsAndTrustEvidenceSection />
      <GovernanceQuestionsAndFaqSection />
    </div>
  );
}
