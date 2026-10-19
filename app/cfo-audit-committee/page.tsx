import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyBoardOversightSection,
  TraceabilityChainSection,
  ExecutiveExposureSection,
  MaterialityAssuranceSection,
  AccountabilityBoardSection,
  ExceptionsJurisdictionSection,
  ChangeToImpactSection,
  CollaborationScenarioSection,
  TrustPrivacySection,
  FaqSection,
} from "@/components/cfo-audit-committee";

export const metadata: Metadata = {
  title: "CFO & Audit Committee | ZoikoAssure",
  description:
    "Make regulatory exposure clear enough to govern—and evidence strong enough to defend. Connect regulatory change, scoped obligations and operating evidence to board-level visibility.",
};

export default function CfoAuditCommitteePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyBoardOversightSection />
      <TraceabilityChainSection />
      <ExecutiveExposureSection />
      <MaterialityAssuranceSection />
      <AccountabilityBoardSection />
      <ExceptionsJurisdictionSection />
      <ChangeToImpactSection />
      <CollaborationScenarioSection />
      <TrustPrivacySection />
      <FaqSection />
    </div>
  );
}
