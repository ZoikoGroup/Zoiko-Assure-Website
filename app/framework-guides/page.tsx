import type { Metadata } from "next";
import {
  FrameworkGuidesHero,
  GuideDirectorySection,
  FeaturedPracticalGuidanceSection,
  FrameworkDesignAddressSection,
  FrameworkAdoptionSection,
  FrameworkApplicabilitySection,
  EvidenceReadinessSection,
  RolePlaybooksSection,
  FrameworkFaqSection,
  FrameworkGuidesCta,
} from "@/components/framework-guides";

export const metadata: Metadata = {
  title: "Framework Guides | ZoikoAssure",
  description:
    "Practical framework guidance for risk, compliance, legal and governance teams. Understand a framework's purpose, status, edition and principal control themes.",
};

export default function FrameworkGuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FrameworkGuidesHero />
      <GuideDirectorySection />
      <FeaturedPracticalGuidanceSection />
      <FrameworkDesignAddressSection />
      <FrameworkAdoptionSection />
      <FrameworkApplicabilitySection />
      <EvidenceReadinessSection />
      <RolePlaybooksSection />
      <FrameworkFaqSection />
      <FrameworkGuidesCta />
    </main>
  );
}
