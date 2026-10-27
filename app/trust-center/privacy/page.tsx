import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  PrivacyContextSection,
  AccountabilityAndIntakeSection,
  RetentionAndRequestsSection,
  WebsiteTechnologiesAndGeographySection,
  ThirdPartyAndGovernedAiSection,
  PrivacyProtectionAndDisclosuresSection,
  EvaluatePrivacyResponsibilitiesSection,
  FaqSection,
} from "@/components/privacy";

export const metadata: Metadata = {
  title: "Privacy | ZoikoAssure Trust Center",
  description:
    "Privacy begins with clarity and accountable choices. Explore how ZoikoAssure organizes personal-data processing, privacy responsibilities, retention, requests and disclosure pathways.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <PrivacyContextSection />
      <AccountabilityAndIntakeSection />
      <RetentionAndRequestsSection />
      <WebsiteTechnologiesAndGeographySection />
      <ThirdPartyAndGovernedAiSection />
      <PrivacyProtectionAndDisclosuresSection />
      <EvaluatePrivacyResponsibilitiesSection />
      <FaqSection />
    </div>
  );
}
