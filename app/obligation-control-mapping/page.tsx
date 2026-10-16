import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  RegulationsOperateSection,
  AssuranceChainSection,
  ApplicabilityDecisionSection,
  ObligationDecompositionSection,
  ControlMappingSection,
  VisibleGapsSection,
  RegulatoryChangeSection,
  ExpectationVsEvidenceSection,
  ControlToProofSection,
  AccountableOwnershipSection,
  RoleResponsibilitiesSection,
  IntegrationsSection,
  ScrutinyTrustSection,
  FaqSection,
} from "@/components/obligation-control-mapping";

export const metadata: Metadata = {
  title: "Obligation & Control Mapping | ZoikoAssure",
  description:
    "Turn applicable requirements into accountable controls. Connect cited requirements to governable obligations, mapped controls and accountable ownership with continuous assurance.",
};

export default function ObligationControlMappingPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <RegulationsOperateSection />
      <AssuranceChainSection />
      <ApplicabilityDecisionSection />
      <ObligationDecompositionSection />
      <ControlMappingSection />
      <VisibleGapsSection />
      <RegulatoryChangeSection />
      <ExpectationVsEvidenceSection />
      <ControlToProofSection />
      <AccountableOwnershipSection />
      <RoleResponsibilitiesSection />
      <IntegrationsSection />
      <ScrutinyTrustSection />
      <FaqSection />
    </div>
  );
}
