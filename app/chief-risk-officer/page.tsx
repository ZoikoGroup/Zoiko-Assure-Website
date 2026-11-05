import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  DefensibleAssuranceAndExposureSection,
  MappedControlAndRiskAcceptanceSection,
  EmergingRisksAndAiAccountabilitySection,
  ExecutiveBasisAndConnectedDecisionsSection,
  ChiefRiskOfficerFaqSection,
} from "@/components/chief-risk-officer";

export const metadata: Metadata = {
  title: "Chief Risk Officer | ZoikoAssure",
  description:
    "See changing regulatory exposure. Know what you can defend. ZoikoAssure is designed to connect regulatory change and contextual applicability to obligations, controls, evidence and accountable assurance.",
};

export default function ChiefRiskOfficerPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <DefensibleAssuranceAndExposureSection />
      <MappedControlAndRiskAcceptanceSection />
      <EmergingRisksAndAiAccountabilitySection />
      <ExecutiveBasisAndConnectedDecisionsSection />
      <ChiefRiskOfficerFaqSection />
    </div>
  );
}
