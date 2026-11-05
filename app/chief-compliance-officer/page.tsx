import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  DefensibleAssuranceAndMappingSection,
  MappedControlAndEvidenceSection,
  AssuranceStateAndGapsSection,
  AcceptedRiskAndChangingRequirementsSection,
  ExaminationPrepAndAiAssistanceSection,
  OperatingModelAndTrustSection,
  ChiefComplianceOfficerFaqSection,
  ObligationToProofCtaSection,
} from "@/components/chief-compliance-officer";

export const metadata: Metadata = {
  title: "Chief Compliance Officer | ZoikoAssure",
  description:
    "Know What Applies. Show What Is Controlled. Prove What Still Needs Work. Connect authoritative regulatory sources and applicability decisions to governed obligations, controls, evidence and assurance.",
};

export default function ChiefComplianceOfficerPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <DefensibleAssuranceAndMappingSection />
      <MappedControlAndEvidenceSection />
      <AssuranceStateAndGapsSection />
      <AcceptedRiskAndChangingRequirementsSection />
      <ExaminationPrepAndAiAssistanceSection />
      <OperatingModelAndTrustSection />
      <ChiefComplianceOfficerFaqSection />
      <ObligationToProofCtaSection />
    </div>
  );
}
