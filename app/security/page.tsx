import {
  SecurityHero,
  SecurityFloatingCards,
  SecurityEvaluationDirectory,
  DataProtectionAndCryptography,
  SecureEngineeringAndVulnerabilityManagement,
  ThreatDetectionAndResilience,
  SecurityResponsibilities,
  SecurityFAQsAndAnswerHub,
} from "@/components/security";

export default function SecurityPage() {
  return (
    <main>
      <SecurityHero />
      <SecurityFloatingCards />
      <SecurityEvaluationDirectory />
      <DataProtectionAndCryptography />
      <SecureEngineeringAndVulnerabilityManagement />
      <ThreatDetectionAndResilience />
      <SecurityResponsibilities />
      <SecurityFAQsAndAnswerHub />
    </main>
  );
}
