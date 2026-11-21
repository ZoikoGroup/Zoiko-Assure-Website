import type { Metadata } from "next";
import {
  Hero,
  HowAnIntegrationSupportsEvidenceSection,
  IllustrativeConnectionRecordSection,
  SyncHealthSecuritySection,
  CommonIntegrationsQuestionsSection,
} from "@/components/developer-documentation-integrations";

export const metadata: Metadata = {
  title: "Integrations | ZoikoAssure Platform & Integrations",
  description:
    "Connect operational systems to defensible assurance. Explore how permitted operational records can support governed control and evidence workflows.",
};

export default function IntegrationsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <HowAnIntegrationSupportsEvidenceSection />
      <IllustrativeConnectionRecordSection />
      <SyncHealthSecuritySection />
      <CommonIntegrationsQuestionsSection />
    </div>
  );
}
