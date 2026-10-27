import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  EnterpriseSaaSAndPrivateCloudSection,
  HybridAndAirGappedSection,
  DataResidencyAndTransferSection,
  RecoveryArchitectureSection,
  ExternalDependencySection,
  ScopeSourceDateSection,
  FaqSection,
} from "@/components/deployment-residency";

export const metadata: Metadata = {
  title: "Deployment & Residency | ZoikoAssure",
  description:
    "Deployment options and clear data-location responsibilities. Evaluated against architecture, regulatory context, data categories, and contractually supported operating models.",
};

export default function DeploymentResidencyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <EnterpriseSaaSAndPrivateCloudSection />
      <HybridAndAirGappedSection />
      <DataResidencyAndTransferSection />
      <RecoveryArchitectureSection />
      <ExternalDependencySection />
      <ScopeSourceDateSection />
      <FaqSection />
    </div>
  );
}
