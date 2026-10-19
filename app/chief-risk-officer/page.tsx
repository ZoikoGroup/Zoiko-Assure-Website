import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyConnectedAssuranceSection,
  OperatingModelSection,
  CommandOversightSection,
  JurisdictionDeltaSection,
  ObligationsAssuranceSection,
  EmergingRiskSection,
  BoardBriefingSection,
  EnterpriseDataSection,
  ExecutiveEvaluationSection,
  SecurityTrustSection,
  FaqSection,
} from "@/components/chief-risk-officer";

export const metadata: Metadata = {
  title: "Chief Risk Officer | ZoikoAssure",
  description:
    "See what changed. Know what remains exposed. ZoikoAssure helps Chief Risk Officers connect regulatory changes to enterprise applicability, governed obligations, controls, evidence and an explainable assurance view.",
};

export default function ChiefRiskOfficerPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyConnectedAssuranceSection />
      <OperatingModelSection />
      <CommandOversightSection />
      <JurisdictionDeltaSection />
      <ObligationsAssuranceSection />
      <EmergingRiskSection />
      <BoardBriefingSection />
      <EnterpriseDataSection />
      <ExecutiveEvaluationSection />
      <SecurityTrustSection />
      <FaqSection />
    </div>
  );
}
