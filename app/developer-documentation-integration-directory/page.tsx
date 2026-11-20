import type { Metadata } from "next";
import {
  Hero,
  BrowseBySourceSystemSection,
  VerifiedConnectorDiscoverySection,
  ConnectorDetailAndEvidenceBoundariesSection,
  CommonIntegrationQuestionsSection,
} from "@/components/developer-documentation-integration-directory";

export const metadata: Metadata = {
  title: "Integration Directory | ZoikoAssure Developers & Documentation",
  description:
    "Find source-system categories and review verified integration capabilities when available.",
};

export default function IntegrationDirectoryPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <BrowseBySourceSystemSection />
      <VerifiedConnectorDiscoverySection />
      <ConnectorDetailAndEvidenceBoundariesSection />
      <CommonIntegrationQuestionsSection />
    </div>
  );
}
