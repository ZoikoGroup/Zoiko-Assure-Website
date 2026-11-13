import type { Metadata } from "next";
import {
  Hero,
  LifecycleCardsFloating,
  ClassificationModelSection,
  ProvenanceAndLineageSection,
  RetentionAndSensitiveDataSection,
  DataGovernanceFaqSection,
} from "@/components/ai-data-governance-data-governance";

export const metadata: Metadata = {
  title: "Data Governance | ZoikoAssure",
  description:
    "Govern information through its lifecycle — with ownership, handling rules and provenance. Explore classification models, retention governance and defensible assurance lineage.",
};

export default function AiDataGovernancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <LifecycleCardsFloating />
      <ClassificationModelSection />
      <ProvenanceAndLineageSection />
      <RetentionAndSensitiveDataSection />
      <DataGovernanceFaqSection />
    </div>
  );
}
