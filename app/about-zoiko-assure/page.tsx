import type { Metadata } from "next";
import {
  AboutZoikoAssureHero,
  WhyWeExistAndProblemWeSolve,
  VisionAndMission,
  HowZoikoAssureWorks,
  MultiJurisdictionalAndGovernedAI,
  EvidenceProvenanceAndWhoWeServe,
  GovernanceDoctrineAndSecurity,
  LeadershipAndGlobalPresence,
  OurCommitment,
} from "@/components/about-zoiko-assure";

export const metadata: Metadata = {
  title: "About ZoikoAssure | Compliance Should Be Provable — Not Reconstructed",
  description:
    "Zoiko Assure is a global regulatory intelligence and continuous compliance assurance platform for organizations operating across complex, multi-jurisdictional regulatory environments.",
};

export default function AboutZoikoAssurePage() {
  return (
    <main className="w-full">
      <AboutZoikoAssureHero />
      <WhyWeExistAndProblemWeSolve />
      <VisionAndMission />
      <HowZoikoAssureWorks />
      <MultiJurisdictionalAndGovernedAI />
      <EvidenceProvenanceAndWhoWeServe />
      <GovernanceDoctrineAndSecurity />
      <LeadershipAndGlobalPresence />
      <OurCommitment />
    </main>
  );
}

