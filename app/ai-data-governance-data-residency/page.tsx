import type { Metadata } from "next";
import {
  Hero,
  ResidencyCardsFloating,
  LookBeyondPrimaryStorageSection,
  ResidencyStatusAndCommitmentSection,
  DataFlowSection,
  DataResidencyFaqSection,
} from "@/components/ai-data-governance-data-residency";

export const metadata: Metadata = {
  title: "Data Residency | ZoikoAssure",
  description:
    "Understanding where data is stored is only part of understanding how it is processed, accessed and protected. Review data residency boundaries, replication, backups and support access.",
};

export default function DataResidencyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ResidencyCardsFloating />
      <LookBeyondPrimaryStorageSection />
      <ResidencyStatusAndCommitmentSection />
      <DataFlowSection />
      <DataResidencyFaqSection />
    </div>
  );
}
