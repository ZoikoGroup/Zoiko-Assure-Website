import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyGapsRequireDecisionSection,
  TaxonomyAndIntakeSection,
  ExposureAndTreatmentSection,
  DecisionRightsAndWorkflowSection,
  TimeLimitsAndDistinctionsSection,
  RegisterAndEscalationSection,
  AuditHistoryAndBuyerRolesSection,
  GovernedAiAndFaqSection,
} from "@/components/exceptions-risk-acceptance";

export const metadata: Metadata = {
  title: "Exceptions & Risk Acceptance | ZoikoAssure",
  description:
    "Make exceptions visible. Keep risk decisions accountable. Define a gap, understand its exposure, record who decides, and revisit before conditions change.",
};

export default function ExceptionsRiskAcceptancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyGapsRequireDecisionSection />
      <TaxonomyAndIntakeSection />
      <ExposureAndTreatmentSection />
      <DecisionRightsAndWorkflowSection />
      <TimeLimitsAndDistinctionsSection />
      <RegisterAndEscalationSection />
      <AuditHistoryAndBuyerRolesSection />
      <GovernedAiAndFaqSection />
    </div>
  );
}
