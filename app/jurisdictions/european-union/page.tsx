import {
  EuHero,
  EuInstrumentsAndImplementation,
  EuReviewableRequirementsAndControls,
  EuSourceLanguageAndCoverage,
  EuAiAssistanceAndEvaluation,
  EuFaqs,
} from "@/components/european-union";

export default function EuropianPage() {
  return (
    <main>
      <EuHero />
      <EuInstrumentsAndImplementation />
      <EuReviewableRequirementsAndControls />
      <EuSourceLanguageAndCoverage />
      <EuAiAssistanceAndEvaluation />
      <EuFaqs />
    </main>
  );
}
