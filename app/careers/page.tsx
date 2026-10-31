import type { Metadata } from "next";
import {
  CareersHero,
  WhyTheWorkMatters,
  CoreProfessionalDisciplines,
  IllustrativeWorkChallenges,
  CurrentOpportunitiesAvailability,
  VerifiedRoleDetailAndApplication,
  RecruitmentProcessAndPrivacy,
  AccessibilityAndRecruitmentSecurity,
  CareersQuestionsAndRelatedLearning,
} from "@/components/careers";

export const metadata: Metadata = {
  title: "Careers at ZoikoAssure | Work on Systems That Must Stand Up to Scrutiny",
  description:
    "Join the thinking behind a platform that connects regulatory sources, applicability, obligations, controls, evidence and assurance. Our work demands judgment, care and technical rigor.",
};

export default function CareersPage() {
  return (
    <main className="w-full">
      <CareersHero />
      <WhyTheWorkMatters />
      <CoreProfessionalDisciplines />
      <IllustrativeWorkChallenges />
      <CurrentOpportunitiesAvailability />
      <VerifiedRoleDetailAndApplication />
      <RecruitmentProcessAndPrivacy />
      <AccessibilityAndRecruitmentSecurity />
      <CareersQuestionsAndRelatedLearning />
    </main>
  );
}

