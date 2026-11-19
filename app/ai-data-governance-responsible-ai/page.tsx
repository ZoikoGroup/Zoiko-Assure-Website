import type { Metadata } from "next";
import {
  Hero,
  GovernancePrinciplesCards,
  ResponsibleDecisionRecordSection,
  ReviewerVisibilityAndResponsibilitySection,
  ModelEvaluationAndSyntheticExampleSection,
  ResponsibleAiFaqSection,
} from "@/components/ai-data-governance-responsible-ai";

export const metadata: Metadata = {
  title: "Responsible AI | ZoikoAssure",
  description:
    "AI-assisted decisions. Governed by evidence and people. ZoikoAssure connects source-grounded AI assistance with uncertainty, human judgment and accountable review.",
};

export default function ResponsibleAiPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <GovernancePrinciplesCards />
      <ResponsibleDecisionRecordSection />
      <ReviewerVisibilityAndResponsibilitySection />
      <ModelEvaluationAndSyntheticExampleSection />
      <ResponsibleAiFaqSection />
    </div>
  );
}
