import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  RiskAndProofPathSection,
  EvaluatedContextSection,
  ComplexRequirementsAndOwnershipSection,
  AttentionAndDecisionBesideRequirementSection,
  ReviewHistoryAndChangedRuleSection,
  ObligationsAndControlsHandoffSection,
  RoleViewsAndAssistanceSection,
} from "@/components/obligation-management";

export const metadata: Metadata = {
  title: "Obligation Management | ZoikoAssure",
  description:
    "Make Regulatory Obligations Accountable From Day One. Connect source-grounded requirements to named owners, reviewed decisions, and operational control work.",
};

export default function ObligationManagementPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <RiskAndProofPathSection />
      <EvaluatedContextSection />
      <ComplexRequirementsAndOwnershipSection />
      <AttentionAndDecisionBesideRequirementSection />
      <ReviewHistoryAndChangedRuleSection />
      <ObligationsAndControlsHandoffSection />
      <RoleViewsAndAssistanceSection />
    </div>
  );
}
