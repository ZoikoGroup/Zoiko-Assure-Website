import { Metadata } from "next";
import {
  ContactHero,
  HelpTopicsGrid,
  EnterpriseEvaluation,
  SupportAndSecurity,
  PrivacyAndAccessibility,
  MediaAndCareers,
  ProcurementAndOffices,
  ContactFaqsAndNextSteps,
  PrivacyGuidanceAndEvidence,
} from "@/components/research-contact";

export const metadata: Metadata = {
  title: "Contact ZoikoAssure | Connect With the Right Team",
  description:
    "Whether you are evaluating ZoikoAssure, need existing-customer assistance, or have a security, privacy, accessibility or media question, choose the pathway that matches your request.",
};

export default function ResearchContactPage() {
  return (
    <main className="w-full">
      <ContactHero />
      <HelpTopicsGrid />
      <EnterpriseEvaluation />
      <SupportAndSecurity />
      <PrivacyAndAccessibility />
      <MediaAndCareers />
      <ProcurementAndOffices />
      <ContactFaqsAndNextSteps />
      <PrivacyGuidanceAndEvidence />
    </main>
  );
}

