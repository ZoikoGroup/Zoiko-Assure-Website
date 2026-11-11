import {
  MiddleEastHero,
  MiddleEastCountryGrid,
  MiddleEastAuthorityAndLanguage,
  MiddleEastPublicationAndComparisons,
  MiddleEastApplicabilityAndAssurance,
  MiddleEastSourceAndRights,
  MiddleEastFaqs,
} from "@/components/middle-east";

export default function MiddleEastPage() {
  return (
    <main>
      <MiddleEastHero />
      <MiddleEastCountryGrid />
      <MiddleEastAuthorityAndLanguage />
      <MiddleEastPublicationAndComparisons />
      <MiddleEastApplicabilityAndAssurance />
      <MiddleEastSourceAndRights />
      <MiddleEastFaqs />
    </main>
  );
}
