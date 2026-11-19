import type { Metadata } from "next";
import { Hero, CategoryCards, FaqSection } from "@/components/legal-procurement-cookie-settings";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Cookie Settings | Legal & Procurement | ZoikoAssure",
  description:
    "Choose how optional cookies and similar technologies are used on the ZoikoAssure website, and revisit or withdraw your choices.",
};

const IMG = "/legal-procurement-cookie-settings";

const noteCase =
  "mt-5 block border-l-4 border-[#F58220] px-4 py-1 text-[13px] font-semibold leading-[1.6] text-[#334155]";
const small = "mt-4 block text-[12.5px] leading-5 text-[#6B7280]";
const outlineBtn =
  "inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-5 py-2.5 text-[14px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5";
const solidBtn =
  "inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-[#F58220] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    id: "manage-choices",
    blocks: [
      {
        title: "Manage or Revisit Your Choices",
        description: (
          <>
            Equal-access revisit path where legally required and implemented.
            <span className="mt-6 flex flex-wrap gap-3">
              <button type="button" className={outlineBtn}>
                Accept all optional
              </button>
              <button type="button" className={outlineBtn}>
                Reject optional
              </button>
              <button type="button" className={solidBtn}>
                Save choices
              </button>
            </span>
            <span className={small}>
              No &ldquo;saved&rdquo; state until CMP acknowledgement and read-back.
            </span>
          </>
        ),
      },
      {
        title: "Cookie Policy",
        description:
          "Read the Cookie Policy [separate] • Retry if save fails • Return to settings for withdrawal.",
      },
    ],
    image: {
      src: `${IMG}/cs2.webp`,
      alt: "Person adjusting cookie preference toggles on a laptop",
    },
  },
  {
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Vendor and technology details",
        description:
          "Accordion/drawer listing verified provider, storage, lifetime and category. Only signed durations and host/domain scope from technology register.",
      },
      {
        title: "Browser Privacy Signals",
        description: (
          <>
            Show only supported legally approved signal information.
            <span className={noteCase}>
              Non-deceptive explanation of browser-level limitations and effects.
            </span>
          </>
        ),
      },
    ],
    cta: { label: "Privacy Policy", href: "/legal-procurement-privacy-policy" },
    image: {
      src: `${IMG}/cs3.webp`,
      alt: "Two colleagues reviewing technology details on a laptop at a meeting table",
    },
  },
];

export default function CookieSettingsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <CategoryCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
