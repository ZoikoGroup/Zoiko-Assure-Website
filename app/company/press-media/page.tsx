import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  StatementsAndInquiriesSection,
  CompanyAnnouncementsSection,
  TypesOfUpdatesSection,
  UnderstandingZoikoAssureSection,
  BrandResourcesSection,
  SpeakingAndCorrectionsSection,
  InTheMediaAndVerifiedInfoSection,
  QuestionsFromMediaAndAnalystsSection,
} from "@/components/press-media";

export const metadata: Metadata = {
  title: "Press & Media | ZoikoAssure",
  description:
    "Clear Facts. Accountable Communication. ZoikoAssure shares verified company information, product context, and responses to press and industry inquiries through accountable review.",
};

export default function PressMediaPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <StatementsAndInquiriesSection />
      <CompanyAnnouncementsSection />
      <TypesOfUpdatesSection />
      <UnderstandingZoikoAssureSection />
      <BrandResourcesSection />
      <SpeakingAndCorrectionsSection />
      <InTheMediaAndVerifiedInfoSection />
      <QuestionsFromMediaAndAnalystsSection />
    </div>
  );
}
