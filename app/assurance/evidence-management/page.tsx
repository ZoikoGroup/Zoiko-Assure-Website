import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FeatureSplitSection,
  FaqSection,
  featureSections,
} from "@/components/evidence-management";

export const metadata: Metadata = {
  title: "Evidence Management | ZoikoAssure",
  description:
    "Manage the evidence behind every assurance decision. Turn defined control evidence requirements into accountable requests, reviewable records and clear follow-up.",
};

export default function EvidenceManagementPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      {featureSections.map((section) => (
        <FeatureSplitSection key={section.id} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
