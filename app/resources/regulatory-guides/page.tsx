import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  ExploreTopicsAndGuidanceSection,
  SourceLinkedExplanationAndTemplateSection,
  RequirementScopeAndLegalAuthoritySection,
  ReviewVariablesAndTimelineSection,
  OperationalQuestionsAndJurisdictionsSection,
  RuleResponseAndMaintenanceSection,
  RegulationFaqAndContextSection,
} from "@/components/regulatory-guides";

export const metadata: Metadata = {
  title: "Regulatory Guides | ZoikoAssure Resources",
  description:
    "Understand Regulatory Requirements in Context. Explore source-linked explanations of regulatory topics, jurisdictional differences and effective dates.",
};

export default function RegulatoryGuidesPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <ExploreTopicsAndGuidanceSection />
      <SourceLinkedExplanationAndTemplateSection />
      <RequirementScopeAndLegalAuthoritySection />
      <ReviewVariablesAndTimelineSection />
      <OperationalQuestionsAndJurisdictionsSection />
      <RuleResponseAndMaintenanceSection />
      <RegulationFaqAndContextSection />
    </div>
  );
}
