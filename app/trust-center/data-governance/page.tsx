import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  DataScopeClassificationSection,
  ProvenanceTimeTrackingSection,
  DataLifecycleAccessSection,
  DataRetentionTransfersSection,
  IntegrationAiReviewSection,
  ExceptionsEvidenceSection,
  AccountabilityMapSection,
  FaqSection,
} from "@/components/data-governance";

export const metadata: Metadata = {
  title: "Data Governance | ZoikoAssure Trust Center",
  description:
    "Data governance should be traceable, not assumed. Understand how information is categorized, accessed, used, retained, reviewed and linked to defensible evidence lineage.",
};

export default function DataGovernancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <DataScopeClassificationSection />
      <ProvenanceTimeTrackingSection />
      <DataLifecycleAccessSection />
      <DataRetentionTransfersSection />
      <IntegrationAiReviewSection />
      <ExceptionsEvidenceSection />
      <AccountabilityMapSection />
      <FaqSection />
    </div>
  );
}
