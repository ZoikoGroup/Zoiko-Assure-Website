import type { Metadata } from "next";
import { Hero, SourceCards, ProcessSteps } from "@/components/frameworks-data-protection";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Data Protection | Frameworks | ZoikoAssure",
  description:
    "Understand how privacy rules, management-system practices and evidence connect—without losing the distinctions between legal obligations, risk and proof.",
};

const IMG = "/frameworks-data-protection";

const note =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13.5px] font-semibold leading-[1.6] text-[#334155]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Data protection starts with knowing the processing context.",
        description: (
          <>
            Identify who acts as controller or processor, what information is involved, why it is
            used, where it moves and what decisions require qualified review.
            <span className={note}>
              Illustrative processing record. Not a real customer inventory or populated
              ZoikoAssure workspace.
            </span>
          </>
        ),
      },
      {
        title: "Risk-based assessment, not a universal checkbox.",
        description:
          "Some processing requires a data protection impact assessment; the trigger and required review depend on law and facts.",
      },
    ],
    image: {
      src: `${IMG}/dp2.webp`,
      alt: "Illustration of a laptop with a padlock and connected security interface panels",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Follow the data flow, then test the legal transfer mechanism.",
        description:
          "An adequacy decision, safeguard or exception must be evaluated for the specific transfer; a selected mechanism is not a compliance badge.",
      },
      {
        title: "People’s rights require a real, secure response path.",
        description:
          "Use the organization’s verified privacy notice and request channel; this illustrative page does not receive requests or personal information.",
      },
    ],
    cta: { label: "Explore How ZoikoAssure Works", href: "/how-zoikoassure-works" },
    image: {
      src: `${IMG}/dp3.webp`,
      alt: "Person at a laptop with holographic data dashboards floating above the desk",
    },
  },
  {
    blocks: [
      {
        title: "From source to evidence-backed assurance.",
        description: (
          <>
            A control mapping does not prove effectiveness. Evidence needs source, period, lineage,
            validity and accountable review.
            <span className="mt-5 block">
              An approved exception may record accepted risk; it is not evidence that the
              underlying control is effective.
            </span>
            <span className={note}>UNCERTAIN — additional facts or legal review required.</span>
          </>
        ),
      },
    ],
    cta: { label: "Explore Methodology", href: "/regulatory-intelligence/methodology" },
    image: {
      src: `${IMG}/dp4.webp`,
      alt: "Business team meeting around a table with a glowing city model and rising arrow",
    },
  },
];

export default function FrameworksDataProtectionPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <SourceCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <ProcessSteps />
    </div>
  );
}
