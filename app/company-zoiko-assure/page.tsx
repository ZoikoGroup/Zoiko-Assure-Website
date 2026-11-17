import type { Metadata } from "next";
import {
  Hero,
  AssuranceLifecycleCards,
  GovernedAiAndLeadershipExposureSection,
  ProofPathsAndTrustEvidenceSection,
  ZoikoAssureFaqSection,
} from "@/components/company-zoiko-assure";

export const metadata: Metadata = {
  title: "About ZoikoAssure | ZoikoAssure",
  description:
    "Know What Applies. Prove What's Controlled. Stay Ready for Scrutiny. ZoikoAssure connects regulatory intelligence to applicability, obligations, controls, evidence, and continuous assurance.",
};

export default function CompanyZoikoAssurePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <AssuranceLifecycleCards />
      <GovernedAiAndLeadershipExposureSection />
      <ProofPathsAndTrustEvidenceSection />
      <ZoikoAssureFaqSection />
    </div>
  );
}
