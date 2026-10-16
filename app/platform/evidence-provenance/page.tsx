import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyEvidenceFailsSection,
  AssuranceChainSection,
  OpenTheRecordSection,
  EvidenceLifecycleSection,
  OriginSourceAuthoritySection,
  ReconstructAndFreshnessSection,
  EvidenceQualitySufficiencySection,
  MappingAndReviewSection,
  IntegritySecuritySection,
  ExaminationAndGovernedAISection,
  FaqSection,
} from "@/components/evidence-provenance";

export const metadata: Metadata = {
  title: "Evidence & Provenance | ZoikoAssure",
  description:
    "Know the origin of every assurance claim. Connect each evidence record to its source, control, obligation, relevant dates and accountable review.",
};

export default function EvidenceProvenancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyEvidenceFailsSection />
      <AssuranceChainSection />
      <OpenTheRecordSection />
      <EvidenceLifecycleSection />
      <OriginSourceAuthoritySection />
      <ReconstructAndFreshnessSection />
      <EvidenceQualitySufficiencySection />
      <MappingAndReviewSection />
      <IntegritySecuritySection />
      <ExaminationAndGovernedAISection />
      <FaqSection />
    </div>
  );
}
