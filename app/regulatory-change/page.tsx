import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  AlertsNotEnoughSection,
  WorkflowStagesSection,
  ChangeEventSection,
  ChangeImpactSection,
  EvidenceAssuranceSection,
  AccountabilityEscalationSection,
  ExecutiveSummarySection,
  TrustIntegrationSection,
  FaqSection,
} from "@/components/regulatory-change";

export const metadata: Metadata = {
  title: "Regulatory Change | ZoikoAssure",
  description:
    "From regulatory change to an accountable response. Connect source-grounded developments to contextual applicability, impacted obligations, control review and evidence-backed assurance.",
};

export default function RegulatoryChangePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <AlertsNotEnoughSection />
      <WorkflowStagesSection />
      <ChangeEventSection />
      <ChangeImpactSection />
      <EvidenceAssuranceSection />
      <AccountabilityEscalationSection />
      <ExecutiveSummarySection />
      <TrustIntegrationSection />
      <FaqSection />
    </div>
  );
}
