import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  WhyIntegrationCanBreakProof,
  LifecycleSection,
  EntityRegulatoryPerimeterSection,
  JurisdictionAndInheritedObligationsSection,
  ControlOwnershipAndEvidenceSection,
  ExceptionsAndRegulatoryNoticeSection,
  TransformationGovernanceRACISection,
  TrustSecurityImplementationFitSection,
  BuyerFAQs,
  ConversionBand,
} from "@/components/transformation";

export const metadata: Metadata = {
  title: "M&A & Transformation | ZoikoAssure",
  description:
    "Understand inherited obligations before they become control gaps. ZoikoAssure connects regulatory sources, applicability, obligations, controls and evidence across enterprise transitions.",
};

export default function TransformationPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <WhyIntegrationCanBreakProof />
      <LifecycleSection />
      <EntityRegulatoryPerimeterSection />
      <JurisdictionAndInheritedObligationsSection />
      <ControlOwnershipAndEvidenceSection />
      <ExceptionsAndRegulatoryNoticeSection />
      <TransformationGovernanceRACISection />
      <TrustSecurityImplementationFitSection />
      <BuyerFAQs />
      <ConversionBand />
    </div>
  );
}
