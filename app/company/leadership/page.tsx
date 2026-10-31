import type { Metadata } from "next";
import {
  Hero,
  GovernanceAndAccountabilitySection,
  RegulatoryIntelligenceAndApplicabilitySection,
  ObligationsAndProvenanceSection,
  RiskAcceptanceAndResponsibleAiSection,
  SecurityPrivacyAndReliabilitySection,
  EscalationAndSeparationSection,
  GovernanceInPracticeSection,
} from "@/components/leadership";

export const metadata: Metadata = {
  title: "Leadership & Accountability | ZoikoAssure",
  description:
    "Accountability Behind Continuous Regulatory Assurance. ZoikoAssure is governed as institutional infrastructure across architecture, intelligence, security, privacy, and AI governance.",
};

export default function LeadershipPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <GovernanceAndAccountabilitySection />
      <RegulatoryIntelligenceAndApplicabilitySection />
      <ObligationsAndProvenanceSection />
      <RiskAcceptanceAndResponsibleAiSection />
      <SecurityPrivacyAndReliabilitySection />
      <EscalationAndSeparationSection />
      <GovernanceInPracticeSection />
    </div>
  );
}
