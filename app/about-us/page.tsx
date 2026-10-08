import {
  AssuranceChainSection,
  AssuranceEngineeredSection,
  ClearOwnershipSection,
  DefensibilitySection,
  EvidenceLineageSection,
  FragmentedComplianceSection,
  GovernancePrecedesAutomation,
  GovernedCapabilitySection,
  Hero,
  InfrastructureSection,
  JurisdictionSection,
  KnowDemonstrateDefend,
  LeadershipResponsibilitySection,
  ProblemCardsSection,
  PublicCommunicationSection,
  SystemsThinkingSection,
} from "@/components/about-us";

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />

      <FragmentedComplianceSection />

      <ProblemCardsSection />

      <KnowDemonstrateDefend />

      <InfrastructureSection />

      <AssuranceChainSection />

      <DefensibilitySection />

      <JurisdictionSection />

      <GovernedCapabilitySection />

      <EvidenceLineageSection />

      <LeadershipResponsibilitySection />

      <GovernancePrecedesAutomation />

      <ClearOwnershipSection />

      <PublicCommunicationSection />

      <SystemsThinkingSection />

      <AssuranceEngineeredSection />
    </main>
  );
}