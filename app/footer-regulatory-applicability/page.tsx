import type { Metadata } from "next";
import {
  Hero,
  KeyPillarsFloating,
  FeatureSplitSection,
  featureSections,
} from "@/components/footer-regulatory-applicability";

export const metadata: Metadata = {
  title: "Regulatory Applicability | ZoikoAssure",
  description:
    "Know which requirements apply—and why. Applicability depends on your jurisdiction, legal entity, activities, products, data, customer context and effective period.",
};

export default function FooterRegulatoryApplicabilityPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <KeyPillarsFloating />
      {featureSections.map((section) => (
        <FeatureSplitSection key={section.id} {...section} />
      ))}
    </div>
  );
}
