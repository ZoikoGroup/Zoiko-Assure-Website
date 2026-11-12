import {
  ComplianceManagementHero,
  ComplianceRequirementsGrid,
  CompliancePolicyAndReview,
  ComplianceAccountabilityAndTraining,
  ComplianceEvidenceAndTimeBound,
  ComplianceEnterpriseRiskFaqs,
} from "@/components/compliance-management";

export default function ComplianceManagementPage() {
  return (
    <main>
      <ComplianceManagementHero />
      <ComplianceRequirementsGrid />
      <CompliancePolicyAndReview />
      <ComplianceAccountabilityAndTraining />
      <ComplianceEvidenceAndTimeBound />
      <ComplianceEnterpriseRiskFaqs />
    </main>
  );
}
