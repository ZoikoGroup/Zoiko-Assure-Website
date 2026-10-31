import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FactsAndSourcesSection,
  ContextChangesAndAnswerBasisSection,
  UncertaintyAndReasoningSection,
  JurisdictionsAndTimelineSection,
  ScopeAndHistorySection,
  AccountableDecisionsAndHandoffSection,
  BoundariesAndMethodologySection,
} from "@/components/regulatory-applicability";

export const metadata: Metadata = {
  title: "Regulatory Applicability | ZoikoAssure",
  description:
    "Know Which Requirements Apply—and Why. Applicability depends on your jurisdiction, legal entity, activities, products, data, and effective period.",
};

export default function RegulatoryApplicabilityPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <FactsAndSourcesSection />
      <ContextChangesAndAnswerBasisSection />
      <UncertaintyAndReasoningSection />
      <JurisdictionsAndTimelineSection />
      <ScopeAndHistorySection />
      <AccountableDecisionsAndHandoffSection />
      <BoundariesAndMethodologySection />
    </div>
  );
}
