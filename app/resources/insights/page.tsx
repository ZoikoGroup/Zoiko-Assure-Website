import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  GovernanceChangeCloserLookSection,
  TopicFilterAndAnalysisSection,
  ArticleMastheadAndStructureSection,
  EvidenceSupportAndQuestionsSection,
  ApplicabilityAndAssuranceChainSection,
  ProfessionalReviewAndSourcesSection,
  UnderlyingSourcesAndEditorialIssueSection,
} from "@/components/insights";

export const metadata: Metadata = {
  title: "Insights | ZoikoAssure Resources",
  description:
    "Regulatory Change, Explained Through Governance and Evidence. Explore reviewed analysis of regulatory developments, operational accountability, and continuous assurance.",
};

export default function InsightsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <GovernanceChangeCloserLookSection />
      <TopicFilterAndAnalysisSection />
      <ArticleMastheadAndStructureSection />
      <EvidenceSupportAndQuestionsSection />
      <ApplicabilityAndAssuranceChainSection />
      <ProfessionalReviewAndSourcesSection />
      <UnderlyingSourcesAndEditorialIssueSection />
    </div>
  );
}
