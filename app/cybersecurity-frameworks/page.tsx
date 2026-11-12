import {
  CybersecurityHero,
  CybersecurityReferencesGrid,
  CybersecurityBoundariesAndFunctions,
  CybersecurityProfileAndScope,
  CybersecurityAssuranceAndRecovery,
  CybersecurityFaqs,
} from "@/components/cybersecurity-frameworks";

export default function CyberSecurityFrameworksPage() {
  return (
    <main>
      <CybersecurityHero />
      <CybersecurityReferencesGrid />
      <CybersecurityBoundariesAndFunctions />
      <CybersecurityProfileAndScope />
      <CybersecurityAssuranceAndRecovery />
      <CybersecurityFaqs />
    </main>
  );
}
