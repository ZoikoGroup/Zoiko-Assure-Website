import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  AtoZDiscoveryIndexSection,
  FoundationalConceptsAndMetadataSection,
  ShortDefinitionAndRelationshipsSection,
  TermChainAndDecisionBoundariesSection,
  TimeVocabularyAndEvidenceDistinctionsSection,
  PrimarySourceAndScenariosSection,
  QuestionLedFaqAndCorrectionsSection,
  RelatedResourcesAndNextStepsSection,
} from "@/components/regulatory-glossary";

export const metadata: Metadata = {
  title: "Regulatory Glossary | ZoikoAssure Resources",
  description:
    "Regulatory Language, Explained With Precision. Find clear definitions for regulatory intelligence, applicability, obligations, controls, evidence, and assurance.",
};

export default function RegulatoryGlossaryPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <AtoZDiscoveryIndexSection />
      <FoundationalConceptsAndMetadataSection />
      <ShortDefinitionAndRelationshipsSection />
      <TermChainAndDecisionBoundariesSection />
      <TimeVocabularyAndEvidenceDistinctionsSection />
      <PrimarySourceAndScenariosSection />
      <QuestionLedFaqAndCorrectionsSection />
      <RelatedResourcesAndNextStepsSection />
    </div>
  );
}
