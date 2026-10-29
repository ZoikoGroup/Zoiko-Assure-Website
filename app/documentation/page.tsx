import {
  DocumentationHero,
  DocumentationFloatingCards,
  StartWithTopicAndAssurance,
  EvaluateOrganizationAndGuidance,
  QuestionToReviewAndSearch,
  ArticleGuidelinesAndPrerequisites,
  SequenceAndVerification,
  IncompleteDataAndIntegrationBoundaries,
  ReleaseNotesAndAuthoritativePages,
  DocumentationFeedback,
} from "@/components/documentation";

export default function DocumentationPage() {
  return (
    <main>
      <DocumentationHero />
      <DocumentationFloatingCards />
      <StartWithTopicAndAssurance />
      <EvaluateOrganizationAndGuidance />
      <QuestionToReviewAndSearch />
      <ArticleGuidelinesAndPrerequisites />
      <SequenceAndVerification />
      <IncompleteDataAndIntegrationBoundaries />
      <ReleaseNotesAndAuthoritativePages />
      <DocumentationFeedback />
    </main>
  );
}
