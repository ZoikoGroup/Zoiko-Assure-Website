import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyAiNeedsGovernanceSection,
  SourceGroundingSection,
  UncertaintyAbstentionSection,
  ModelEvaluationSection,
  HumanAccountabilitySection,
  PolicyPermissionsSection,
  DataProtectionPrivacySection,
  ChangeGovernanceSection,
  IncidentManagementSection,
  EvidenceAuditabilitySection,
  ThirdPartyDeploymentSection,
  ProcurementEvaluationSection,
  AccountabilityMapSection,
  FaqSection,
} from "@/components/responsible-ai";

export const metadata: Metadata = {
  title: "Responsible AI | ZoikoAssure Trust Center",
  description:
    "Responsible AI requires evidence, oversight and accountable decisions. Explore ZoikoAssure's principles: source-grounded assistance, explicit uncertainty, proportionate evaluation, and accountable human review.",
};

export default function ResponsibleAiPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyAiNeedsGovernanceSection />
      <SourceGroundingSection />
      <UncertaintyAbstentionSection />
      <ModelEvaluationSection />
      <HumanAccountabilitySection />
      <PolicyPermissionsSection />
      <DataProtectionPrivacySection />
      <ChangeGovernanceSection />
      <IncidentManagementSection />
      <EvidenceAuditabilitySection />
      <ThirdPartyDeploymentSection />
      <ProcurementEvaluationSection />
      <AccountabilityMapSection />
      <FaqSection />
    </div>
  );
}
