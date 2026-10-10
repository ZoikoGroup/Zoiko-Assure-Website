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
    <div className="w-full overflow-x-clip">
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
    </div>
  );
}