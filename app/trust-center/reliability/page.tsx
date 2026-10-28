import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  ServiceScopeOwnershipSection,
  AvailabilityContinuitySection,
  RecoveryChangeGovernanceSection,
  DetectionIncidentLifecycleSection,
  OperatingEnvironmentBoundariesSection,
  CustomerSupportEvaluationSection,
  FaqSection,
} from "@/components/reliability";

export const metadata: Metadata = {
  title: "Reliability | ZoikoAssure Trust Center",
  description:
    "Reliability requires clear ownership and verifiable information. Understand how ZoikoAssure approaches governed operations, continuity planning, change controls, and incident communication.",
};

export default function ReliabilityPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      <ServiceScopeOwnershipSection />
      <AvailabilityContinuitySection />
      <RecoveryChangeGovernanceSection />
      <DetectionIncidentLifecycleSection />
      <OperatingEnvironmentBoundariesSection />
      <CustomerSupportEvaluationSection />
      <FaqSection />
    </div>
  );
}
