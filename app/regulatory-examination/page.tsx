import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  DifficultExaminationsSection,
  JourneyStepsSection,
  ScopedIntakeSection,
  ApplicabilityControlSection,
  EvidenceInventorySection,
  DisclosureGovernanceSection,
  ExecutiveOversightSection,
  TrustCenterSection,
  FaqSection,
} from "@/components/regulatory-examination";

export const metadata: Metadata = {
  title: "Regulatory Examination | ZoikoAssure",
  description:
    "Prepare for regulatory examination with evidence you can trace. Connect requested scope, applicability, controls, evidence and authorized disclosure through a governed source-to-assurance model.",
};

export default function RegulatoryExaminationPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <DifficultExaminationsSection />
      <JourneyStepsSection />
      <ScopedIntakeSection />
      <ApplicabilityControlSection />
      <EvidenceInventorySection />
      <DisclosureGovernanceSection />
      <ExecutiveOversightSection />
      <TrustCenterSection />
      <FaqSection />
    </div>
  );
}
