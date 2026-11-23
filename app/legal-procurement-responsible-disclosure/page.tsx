import type { Metadata } from "next";
import { Hero, ScopeCards, FaqSection } from "@/components/legal-procurement-responsible-disclosure";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Responsible Disclosure | Legal & Procurement | ZoikoAssure",
  description:
    "Help ZoikoAssure investigate possible security vulnerabilities by using an approved reporting channel. Review the scope and rules before conducting any research.",
};

const IMG = "/legal-procurement-responsible-disclosure";

const lead = "font-semibold text-[#0A2540]";

const noteCase =
  "mt-6 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    id: "report",
    blocks: [
      {
        title: "Report a security issue",
        description: (
          <>
            <span className="block">
              <span className={lead}>Reporter and asset:</span> Optional contact. Affected asset.
              Environment.
            </span>
            <span className="mt-4 block">
              <span className={lead}>Finding and evidence:</span> Description. Impact /
              observations. Attachment optional.
            </span>
            <span className={noteCase}>Security-verified intake; no fake URL</span>
          </>
        ),
      },
    ],
    image: {
      src: `${IMG}/rd2.webp`,
      alt: "Security team reviewing an alert warning on a monitor",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Privacy Notice / Submit / Confirmation / Recovery",
        description: (
          <>
            <span className="block">
              Privacy, data-use purpose, handling notice, link to approved Privacy Policy. Do not
              assert unverified consent or retention basis.
            </span>
            <span className="mt-4 block">
              Review content, Submit report, transport progress, double-click prevention.
              Server-issued receipt only after durable intake success.
            </span>
            <span className="mt-4 block">
              Opaque reference ID, next step and uncertainty-safe wording, copy reference action.
              No assurance that vulnerability is confirmed.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Submit (only when verified)", href: "/contact" },
    image: {
      src: `${IMG}/rd3.webp`,
      alt: "Handshake in front of a laptop beneath a glowing security shield and padlock",
    },
  },
];

export default function ResponsibleDisclosurePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ScopeCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
