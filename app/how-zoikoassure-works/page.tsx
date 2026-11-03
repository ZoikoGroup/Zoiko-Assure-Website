import type { Metadata } from "next";
import {
  Hero,
  FeatureSplitSection,
  FaqSection,
  featureSections,
} from "@/components/how-zoikoassure-works";

export const metadata: Metadata = {
  title: "How ZoikoAssure Works | ZoikoAssure",
  description:
    "Follow six governed stages that connect what regulation says to what applies, what must be controlled, what evidence exists, and what can be defended under review.",
};

export default function HowZoikoAssureWorksPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      {featureSections.map((section) => (
        <FeatureSplitSection key={section.id} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
