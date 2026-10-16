import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyUngovernedAINotEnoughSection,
  AIAssistsGovernanceOwnsSection,
  InspectSourceSection,
  SourceGroundingSection,
  UncertaintyAndHumanReviewSection,
  PolicyScopeAndDecisionProvenanceSection,
  ModelChangeAndSecurityBoundariesSection,
  TieCapabilitySection,
  RoleOutcomesSection,
  FaqSection,
} from "@/components/governed-ai";

export const metadata: Metadata = {
  title: "Governed AI | ZoikoAssure",
  description:
    "AI assistance built for accountable decisions. Source-grounded approach to assisting regulatory analysis with explicit uncertainty, controlled review and human accountability.",
};

export default function GovernedAIPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyUngovernedAINotEnoughSection />
      <AIAssistsGovernanceOwnsSection />
      <InspectSourceSection />
      <SourceGroundingSection />
      <UncertaintyAndHumanReviewSection />
      <PolicyScopeAndDecisionProvenanceSection />
      <ModelChangeAndSecurityBoundariesSection />
      <TieCapabilitySection />
      <RoleOutcomesSection />
      <FaqSection />
    </div>
  );
}
