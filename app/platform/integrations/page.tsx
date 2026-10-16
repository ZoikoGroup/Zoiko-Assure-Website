import type { Metadata } from "next";
import {
  Hero,
  ConnectEvidenceSection,
  OperationalSystemsSection,
  WhyGovernanceMattersSection,
  SeeStatusSection,
  SourceSystemsSection,
  ConnectionLifecycleSection,
  EvidenceAndControlSection,
  FailuresAndFreshnessSection,
  SecurityAndJurisdictionSection,
  EvaluationAndGovernedAISection,
  FaqSection,
} from "@/components/integrations";

export const metadata: Metadata = {
  title: "Integrations | ZoikoAssure",
  description:
    "Connect operational systems to defensible assurance. Preserve source context, ownership and review so teams can understand what is available and what can be demonstrated.",
};

export default function IntegrationsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ConnectEvidenceSection />
      <OperationalSystemsSection />
      <WhyGovernanceMattersSection />
      <SeeStatusSection />
      <SourceSystemsSection />
      <ConnectionLifecycleSection />
      <EvidenceAndControlSection />
      <FailuresAndFreshnessSection />
      <SecurityAndJurisdictionSection />
      <EvaluationAndGovernedAISection />
      <FaqSection />
    </div>
  );
}
