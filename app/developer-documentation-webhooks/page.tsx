import type { Metadata } from "next";
import {
  Hero,
  EventReferenceAndDeliveryContractSection,
  EventContractAndSanitizedFixturesSection,
  ConditionalWorkspaceAndReplaySection,
  CommonWebhooksQuestionsSection,
} from "@/components/developer-documentation-webhooks";

export const metadata: Metadata = {
  title: "Webhooks | ZoikoAssure Developers & Documentation",
  description:
    "Review supported event notifications and delivery requirements.",
};

export default function WebhooksPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <EventReferenceAndDeliveryContractSection />
      <EventContractAndSanitizedFixturesSection />
      <ConditionalWorkspaceAndReplaySection />
      <CommonWebhooksQuestionsSection />
    </div>
  );
}
