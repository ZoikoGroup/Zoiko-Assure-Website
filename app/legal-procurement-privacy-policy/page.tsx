import type { Metadata } from "next";
import Link from "next/link";
import { Hero, PolicyCards, FaqSection } from "@/components/legal-procurement-privacy-policy";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Legal & Procurement | ZoikoAssure",
  description:
    "Review how the ZoikoAssure website handles personal data, related notices and how to make a privacy request.",
};

const IMG = "/legal-procurement-privacy-policy";

const lead = "font-semibold text-[#334155]";
const docLink = "transition-colors hover:text-[#F58220] hover:underline";

const sections: React.ComponentProps<typeof SplitFeatureSection>[] = [
  {
    blocks: [
      {
        title: "Legal clauses",
        description: (
          <>
            Approved policy body; no invented legal copy. Provider/customer/controller/processor
            separation and scope cross-link.
            <span className="mt-5 block">
              <strong className={lead}>AI processing / training:</strong> Input categories, use
              roles, retention, third-party access and model disclosures if in scope. No
              &ldquo;never train&rdquo; or &ldquo;fully private&rdquo; claim unsupported.
            </span>
          </>
        ),
      },
      {
        title: "Legal exceptions and disclosures",
        description:
          "Compelled disclosure, disputes and required legal process where relevant. Counsel approval compulsory.",
      },
    ],
    image: {
      src: `${IMG}/pp2.webp`,
      alt: "Three colleagues reviewing documents spread across a meeting table",
    },
  },
  {
    id: "correction-archive",
    muted: true,
    imageLeft: true,
    blocks: [
      {
        title: "Related notices",
        description: (
          <>
            <Link href="/legal-procurement-data-processing-addendum" className={docLink}>
              Data Processing Addendum
            </Link>{" "}
            •{" "}
            <Link href="/cookie-notice" className={docLink}>
              Cookie Policy
            </Link>{" "}
            •{" "}
            <Link href="/subprocessor-list" className={docLink}>
              Subprocessors
            </Link>{" "}
            •{" "}
            <Link href="/legal-procurement-cookie-settings" className={docLink}>
              Cookie Settings
            </Link>
          </>
        ),
      },
      {
        title: "Correction & archive",
        description: "Current notice • history • material-change control",
      },
    ],
    cta: { label: "Previous versions", href: "/contact" },
    image: {
      src: `${IMG}/pp3.webp`,
      alt: "Hand ticking checkboxes on a printed form with a pen",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <PolicyCards />
      {sections.map((section) => (
        <SplitFeatureSection key={section.blocks[0].title} {...section} />
      ))}
      <FaqSection />
    </div>
  );
}
