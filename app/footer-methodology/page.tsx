import {
  MethodologyHero,
  MethodologyPrinciplesAndChain,
  MethodologyDatesAndUnknowns,
  MethodologyContextAndAssistance,
  MethodologyCorrectionsAndProvenance,
  MethodologyFaqs,
} from "@/components/methodology";

export default function MethodologyPage() {
  return (
    <main>
      <MethodologyHero />
      <MethodologyPrinciplesAndChain />
      <MethodologyDatesAndUnknowns />
      <MethodologyContextAndAssistance />
      <MethodologyCorrectionsAndProvenance />
      <MethodologyFaqs />
    </main>
  );
}
