import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FeatureSplitSection,
  FaqSection,
  featureSections,
} from "@/components/audit-readiness";

export const metadata: Metadata = {
  title: "Audit Readiness | ZoikoAssure",
  description:
    "Prepare for scrutiny with traceable evidence. Bring regulatory context, obligation and control records, evidence history and outstanding gaps into a reviewable preparation workflow.",
};

export default function AuditReadinessPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      {featureSections.map((section) => (
        <FeatureSplitSection key={section.id} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
