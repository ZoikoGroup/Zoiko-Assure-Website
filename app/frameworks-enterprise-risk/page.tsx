import type { Metadata } from "next";
import { Hero, ApproachCards, FaqSection } from "@/components/frameworks-enterprise-risk";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Enterprise Risk | Frameworks | ZoikoAssure",
  description:
    "Connect strategic objectives, uncertainty, accountability and evidence in a governed approach to enterprise risk.",
};

const IMG = "/frameworks-enterprise-risk";

const label = "font-semibold text-[#0A2540]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title:
          "Risk ownership, oversight and independent assurance are different responsibilities.",
        description: (
          <>
            <strong className={label}>Governing body:</strong> oversight and accountability.{" "}
            <strong className={label}>Management:</strong> decide, own and respond to risk.{" "}
            <strong className={label}>Internal audit:</strong> independent assurance and advice,
            with role safeguards.
          </>
        ),
      },
      {
        title: "From objective to reviewed risk response",
        description:
          "Risk topics vary by context; categories do not establish legal scope. Portfolio views require consistent methods, validated data and stated limitations.",
      },
    ],
    image: {
      src: `${IMG}/er2.webp`,
      alt: "Glowing shield with a checkmark above a clipboard beside a stack of documents",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Risk appetite is a governance decision, not a system-generated color.",
        description: (
          <>
            Risk ratings require a stated scale, assumptions, time horizon and review. A mapped
            control is not proof of an operating control; evidence requires independent
            assessment.
            <span className="mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13.5px] font-semibold leading-[1.6] text-[#334155]">
              Illustrative record only — not a customer risk assessment or active product feature.
            </span>
            <span className="mt-4 block text-[12px] leading-5 text-[#6B7280]">
              <strong className="font-semibold text-[#334155]">UNCERTAIN</strong> — source,
              assumptions or accountable review outstanding.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/er3.webp`,
      alt: "Hand adjusting a glowing risk slider between low and high",
    },
  },
  {
    blocks: [
      {
        title: "Risk accepted — separate from control testing and assurance.",
        description:
          "Control mapped; implementation and operating effectiveness unverified. Evidence stale or missing — assurance not established. Illustrative appetite threshold exceeded — escalate to authorized owner.",
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/er4.webp`,
      alt: "Digital hand turning a risk management dial from minimum to maximum",
    },
  },
];

export default function FrameworksEnterpriseRiskPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ApproachCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
