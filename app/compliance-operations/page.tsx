import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FourQuestionsSection,
  EvidenceBackedAssuranceSection,
  ProofVsProgressAndControlSection,
  EvidenceValidityAndUncertaintySection,
  GapRemediationAndRiskSeparationSection,
  RequirementsChangeAndExamPrepSection,
  AiAssistanceAndOperatingModelSection,
  ComplianceOperationsFaqSection,
} from "@/components/compliance-operations";

export const metadata: Metadata = {
  title: "Compliance Operations | ZoikoAssure",
  description:
    "Turn Regulatory Change Into Accountable Action. Compliance work becomes more defensible when every change can be traced to a source, a scoped obligation, an accountable control, relevant evidence and a reviewable assurance conclusion.",
};

export default function ComplianceOperationsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <FourQuestionsSection />
      <EvidenceBackedAssuranceSection />
      <ProofVsProgressAndControlSection />
      <EvidenceValidityAndUncertaintySection />
      <GapRemediationAndRiskSeparationSection />
      <RequirementsChangeAndExamPrepSection />
      <AiAssistanceAndOperatingModelSection />
      <ComplianceOperationsFaqSection />
    </div>
  );
}
