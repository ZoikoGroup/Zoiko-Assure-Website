import type { Metadata } from "next";
import {
  Hero,
  CorporateStructureCards,
  NavigationProtocolAndGovernanceSection,
  CorporateBoundaryAndPublicationGatesSection,
  ZoikoGroupFaqSection,
} from "@/components/company-zoiko-group";

export const metadata: Metadata = {
  title: "Zoiko Group Relationship | ZoikoAssure",
  description:
    "Part of Zoiko Group. Connected through Zoiko Tech Inc. ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company.",
};

export default function ZoikoGroupPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <CorporateStructureCards />
      <NavigationProtocolAndGovernanceSection />
      <CorporateBoundaryAndPublicationGatesSection />
      <ZoikoGroupFaqSection />
    </div>
  );
}
