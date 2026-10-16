import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  ContextMattersSection,
  ProcessStepsSection,
  ExplainableAnswerSection,
  FactsDefineScopeSection,
  SourceAuthoritySection,
  DecisionStateSection,
  JurisdictionTemporalSection,
  AccountableReviewSection,
  OperationalQuestionSection,
  GovernedAISection,
  RoleQuestionsSection,
  TrustCenterControlsSection,
  FaqSection,
} from "@/components/applicability-engine";

export const metadata: Metadata = {
  title: "Applicability Engine | ZoikoAssure",
  description:
    "Determine what applies by jurisdiction, entity, activity, product, data and effective period with source-grounded analysis and human-accountable review.",
};

export default function ApplicabilityEnginePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <ContextMattersSection />
      <ProcessStepsSection />
      <ExplainableAnswerSection />
      <FactsDefineScopeSection />
      <SourceAuthoritySection />
      <DecisionStateSection />
      <JurisdictionTemporalSection />
      <AccountableReviewSection />
      <OperationalQuestionSection />
      <GovernedAISection />
      <RoleQuestionsSection />
      <TrustCenterControlsSection />
      <FaqSection />
    </div>
  );
}
