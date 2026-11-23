import type { Metadata } from "next";
import {
  Hero,
  DomainCards,
  FaqSection,
} from "@/components/developer-documentation-integration-security";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Integration Security | Developers & Integrations | ZoikoAssure",
  description:
    "Understand the access, data and operational boundaries that matter when evaluating a ZoikoAssure integration. A working connection does not establish compliance.",
};

const IMG = "/developer-documentation-integration-security";

const lead = "font-semibold text-[#0A2540]";

const noteCase =
  "mt-6 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Access, data & event boundaries",
        description: (
          <>
            <span className="block">
              <span className={lead}>Shared responsibility:</span> Platform owners validate
              implemented controls; customer owners validate lawful scope and authorization; source
              providers document supported permission models. Contract and deployment determine
              actual allocation.
            </span>
            <span className="mt-4 block">
              <span className={lead}>API &amp; webhook boundaries:</span> Contract-specific
              identity, scopes, bounded pagination and signature/replay design principles apply
              only where verified technical documentation is published.
            </span>
            <span className={noteCase}>
              Transport and storage summaries are owner-gated; no algorithm, key location or
              encryption claim is asserted without verified evidence.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Visit Trust Center", href: "/trust-center" },
    image: {
      src: `${IMG}/is2.webp`,
      alt: "Engineer typing code on a laptop in front of a wall of monitoring screens",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Integration lifecycle & operations",
        description: (
          <>
            <span className="block">
              <span className={lead}>Six-stage lifecycle:</span> Evaluate scope → Authorize access →
              Validate connectivity → Map records → Operate with review → Retire access when no
              longer required.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Failure &amp; escalation:</span> Treat revoked permissions,
              stale evidence and source unavailability as conditions requiring review rather than
              positive assurance.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Deployment &amp; residency:</span> Do not infer hosting regions
              or transfer mechanisms from a connection. Review owner-approved deployment and privacy
              disclosures.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Integrations", href: "/integrations" },
    image: {
      src: `${IMG}/is3.webp`,
      alt: "Team meeting in a boardroom beneath an illustrated workflow of gears, people and puzzle pieces",
    },
  },
];

export default function IntegrationSecurityPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <DomainCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
