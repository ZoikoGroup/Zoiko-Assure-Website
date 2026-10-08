import Image from "next/image";
import Link from "next/link";

type FooterItem = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  items: FooterItem[];
};

/* =========================================================
   FOOTER DATA
========================================================= */

const platformItems: FooterItem[] = [
  {
    label: "Platform Overview",
    href: "/platform",
  },
  {
    label: "Applicability Engine",
    href: "/platform/applicability-engine",
  },
  {
    label: "Obligation & Control Mapping",
    href: "/platform/obligation-control-mapping",
  },
  {
    label: "Continuous Assurance",
    href: "/platform/continuous-assurance",
  },
  {
    label: "Evidence & Provenance",
    href: "/platform/evidence-provenance",
  },
  {
    label: "Governed AI",
    href: "/platform/governed-ai",
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "How ZoikoAssure Works →",
    href: "/how-zoikoassure-works",
  },
];

const assuranceItems: FooterItem[] = [
  {
    label: "Regulatory Applicability",
    href: "/assurance/regulatory-applicability",
  },
  {
    label: "Obligation Management",
    href: "/assurance/obligation-management",
  },
  {
    label: "Control Management",
    href: "/assurance/control-management",
  },
  {
    label: "Evidence Management",
    href: "/assurance/evidence-management",
  },
  {
    label: "Evidence Provenance",
    href: "/assurance/evidence-provenance",
  },
  {
    label: "Assurance Monitoring",
    href: "/assurance/assurance-monitoring",
  },
  {
    label: "Exceptions & Risk Acceptance",
    href: "/assurance/exceptions-risk-acceptance",
  },
  {
    label: "Audit Readiness",
    href: "/assurance/audit-readiness",
  },
];

const solutionsItems: FooterItem[] = [
  {
    label: "Regulatory Change",
    href: "/solutions/regulatory-change",
  },
  {
    label: "New Market & Jurisdiction",
    href: "/solutions/new-market-jurisdiction",
  },
  {
    label: "AI Governance",
    href: "/solutions/ai-governance",
  },
  {
    label: "Regulatory Examination",
    href: "/solutions/regulatory-examination",
  },
  {
    label: "M&A & Transformation",
    href: "/solutions/ma-transformation",
  },
  {
    label: "Continuous Compliance",
    href: "/solutions/continuous-compliance",
  },
  {
    label: "View All Solutions →",
    href: "/solutions",
  },
];

const roleItems: FooterItem[] = [
  {
    label: "Chief Risk Officer",
    href: "/roles/chief-risk-officer",
  },
  {
    label: "General Counsel",
    href: "/roles/general-counsel",
  },
  {
    label: "Chief Compliance Officer",
    href: "/roles/chief-compliance-officer",
  },
  {
    label: "CFO",
    href: "/roles/cfo",
  },
  {
    label: "Audit & Risk Committee",
    href: "/roles/audit-risk-committee",
  },
  {
    label: "Internal Audit",
    href: "/roles/internal-audit",
  },
  {
    label: "Compliance Operations",
    href: "/roles/compliance-operations",
  },
  {
    label: "Risk & Governance Teams",
    href: "/roles/risk-governance-teams",
  },
];

const regulatoryIntelligenceItems: FooterItem[] = [
  {
    label: "Regulatory Changes",
    href: "/regulatory-intelligence/regulatory-changes",
  },
  {
    label: "Obligations",
    href: "/regulatory-intelligence/obligations",
  },
  {
    label: "Enforcement & Guidance",
    href: "/regulatory-intelligence/enforcement-guidance",
  },
  {
    label: "Regulatory Sources",
    href: "/regulatory-intelligence/regulatory-sources",
  },
  {
    label: "Regulatory Library",
    href: "/regulatory-intelligence/regulatory-library",
  },
  {
    label: "Methodology",
    href: "/regulatory-intelligence/methodology",
  },
  {
    label: "Explore Regulatory Intelligence →",
    href: "/regulatory-intelligence",
  },
];

const jurisdictionItems: FooterItem[] = [
  {
    label: "United States",
    href: "/jurisdictions/united-states",
  },
  {
    label: "European Union",
    href: "/jurisdictions/european-union",
  },
  {
    label: "United Kingdom",
    href: "/jurisdictions/united-kingdom",
  },
  {
    label: "Canada",
    href: "/jurisdictions/canada",
  },
  {
    label: "Australia",
    href: "/jurisdictions/australia",
  },
  {
    label: "Singapore",
    href: "/jurisdictions/singapore",
  },
  {
    label: "Middle East",
    href: "/jurisdictions/middle-east",
  },
  {
    label: "Explore All Jurisdictions →",
    href: "/jurisdictions",
  },
];

const frameworkItems: FooterItem[] = [
  {
    label: "AI Governance",
    href: "/frameworks/ai-governance",
  },
  {
    label: "Data Protection",
    href: "/frameworks/data-protection",
  },
  {
    label: "Cybersecurity",
    href: "/frameworks/cybersecurity",
  },
  {
    label: "Operational Resilience",
    href: "/frameworks/operational-resilience",
  },
  {
    label: "Financial Regulation",
    href: "/frameworks/financial-regulation",
  },
  {
    label: "Enterprise Risk",
    href: "/frameworks/enterprise-risk",
  },
  {
    label: "Compliance Management",
    href: "/frameworks/compliance-management",
  },
  {
    label: "View All Frameworks →",
    href: "/frameworks",
  },
];

const trustCenterItems: FooterItem[] = [
  {
    label: "Trust Center Overview",
    href: "/trust-center",
  },
  {
    label: "Security",
    href: "/trust-center/security",
  },
  {
    label: "Privacy",
    href: "/privacy-notice",
  },
  {
    label: "Accessibility",
    href: "/trust-center/accessibility",
  },
  {
    label: "Deployment & Residency",
    href: "/trust-center/deployment-residency",
  },
  {
    label: "Reliability",
    href: "/trust-center/reliability",
  },
  {
    label: "Responsible Disclosure",
    href: "/responsible-disclosure",
  },
];

const aiGovernanceItems: FooterItem[] = [
  {
    label: "Responsible AI",
    href: "/ai-governance/responsible-ai",
  },
  {
    label: "Governed AI",
    href: "/ai-governance/governed-ai",
  },
  {
    label: "AI Decision Provenance",
    href: "/ai-governance/ai-decision-provenance",
  },
  {
    label: "Human Oversight",
    href: "/ai-governance/human-oversight",
  },
  {
    label: "Data Governance",
    href: "/ai-governance/data-governance",
  },
  {
    label: "Data Residency",
    href: "/ai-governance/data-residency",
  },
  {
    label: "AI Governance Methodology",
    href: "/ai-governance/methodology",
  },
];

const resourcesItems: FooterItem[] = [
  {
    label: "Regulatory Guides",
    href: "/resources/regulatory-guides",
  },
  {
    label: "Framework Guides",
    href: "/resources/framework-guides",
  },
  {
    label: "Regulatory Glossary",
    href: "/resources/regulatory-glossary",
  },
  {
    label: "Executive Briefings",
    href: "/resources/executive-briefings",
  },
  {
    label: "Insights",
    href: "/resources/insights",
  },
  {
    label: "Research",
    href: "/resources/research",
  },
  {
    label: "FAQs",
    href: "/resources/faqs",
  },
  {
    label: "Documentation",
    href: "/documentation",
  },
  {
    label: "Explore Resources →",
    href: "/resources",
  },
];

const developerItems: FooterItem[] = [
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Integration Directory",
    href: "/integrations/directory",
  },
  {
    label: "Developer Documentation",
    href: "/developers",
  },
  {
    label: "API Documentation",
    href: "/developers/api",
  },
  {
    label: "Webhooks",
    href: "/developers/webhooks",
  },
  {
    label: "Integration Security",
    href: "/developers/security",
  },
];

const companyItems: FooterItem[] = [
  {
    label: "About ZoikoAssure",
    href: "/about-us",
  },
  {
    label: "Leadership",
    href: "/company/leadership",
  },
  {
    label: "Press & Media",
    href: "/company/press-media",
  },
  {
    label: "Careers",
    href: "/company/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Zoiko Tech",
    href: "/company/zoiko-tech",
  },
  {
    label: "ZoikoAssure",
    href: "/",
  },
  {
    label: "Zoiko Group",
    href: "/company/zoiko-group",
  },
];

const supportItems: FooterItem[] = [
  {
    label: "Help Center",
    href: "/support/help-center",
  },
  {
    label: "Documentation",
    href: "/documentation",
  },
  {
    label: "Contact Support",
    href: "/support/contact",
  },
  {
    label: "Accessibility Support",
    href: "/support/accessibility",
  },
  {
    label: "Security Contact",
    href: "/support/security",
  },
  {
    label: "Customer Portal",
    href: "/customer-portal",
  },
];

const legalItems: FooterItem[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-notice",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-notice",
  },
  {
    label: "Cookie Settings",
    href: "/cookie-settings",
  },
  {
    label: "Acceptable Use Policy",
    href: "/acceptable-use-policy",
  },
  {
    label: "Data Processing Addendum",
    href: "/data-processing-addendum",
  },
  {
    label: "Subprocessors",
    href: "/subprocessor-list",
  },
  {
    label: "Responsible Disclosure",
    href: "/responsible-disclosure",
  },
  {
    label: "Accessibility Statement",
    href: "/accessibility-statement",
  },
  {
    label: "Legal Notices",
    href: "/legal-notices",
  },
  {
    label: "Modern Slavery Statement",
    href: "/modern-slavery-statement",
  },
];

/* =========================================================
   SOCIAL ICONS
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.94 8.5H3.27V20.73H6.94V8.5ZM5.1 3.27C3.93 3.27 3 4.2 3 5.37C3 6.54 3.93 7.47 5.1 7.47C6.27 7.47 7.2 6.54 7.2 5.37C7.2 4.2 6.27 3.27 5.1 3.27ZM20.73 13.72C20.73 10.04 18.77 8.3 16.16 8.3C14.05 8.3 13.1 9.46 12.57 10.27V8.5H8.9V20.73H12.57V14.67C12.57 13.07 12.87 11.52 14.77 11.52C16.65 11.52 16.67 13.34 16.67 14.77V20.73H20.34L20.73 13.72Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18.244 2.25H21.5L14.387 10.38L22.75 21.75H16.205L11.079 14.933L5.219 21.75H1.96L9.57 13.05L1.55 2.25H8.258L12.891 8.476L18.244 2.25ZM17.101 19.75H18.905L7.283 4.145H5.347L17.101 19.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23.5 6.5C23.25 5.5 22.46 4.71 21.46 4.46C19.65 4 12 4 12 4C12 4 4.35 4 2.54 4.46C1.54 4.71 0.75 5.5 0.5 6.5C0 8.31 0 12 0 12C0 12 0 15.69 0.5 17.5C0.75 18.5 1.54 19.29 2.54 19.54C4.35 20 12 20 12 20C12 20 19.65 20 21.46 19.54C22.46 19.29 23.25 18.5 23.5 17.5C24 15.69 24 12 24 12C24 12 24 8.31 23.5 6.5ZM9.6 15.43V8.57L15.84 12L9.6 15.43Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="12"
        r="4.1"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17.6"
        cy="6.6"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 21V13.1H16.15L16.55 10H13.5V8.02C13.5 7.12 13.93 6.25 15.3 6.25H16.67V3.52C16.67 3.52 15.43 3.3 14.25 3.3C11.78 3.3 10.17 4.8 10.17 7.52V10H7.5V13.1H10.17V21H13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  items,
}: FooterColumnProps) {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <h3 className="h-10 text-xs font-semibold leading-5 text-white">
        {title}
      </h3>

      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-normal leading-5 text-slate-300 transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialIcon({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3158] text-white transition-colors duration-200 hover:bg-[#123D68]"
    >
      {children}
    </Link>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="w-full bg-[#071C33] font-sans text-white">

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="border-b border-white/10 bg-[#071C33] bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer/bg1.png')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 px-6 py-12 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-14">

          <div className="w-full max-w-[690px]">
            <h2 className="text-3xl font-semibold leading-10 text-white sm:text-4xl">
              Make Compliance Defensible Before You Need to Defend It.
            </h2>

            <p className="mt-5 text-base font-normal leading-6 text-slate-300">
              See how ZoikoAssure connects regulatory intelligence,
              applicability, controls, evidence and continuous assurance
              across jurisdictions.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:flex-1">

            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-demo"
                className="flex h-12 items-center justify-center rounded-lg bg-amber-600 px-5 text-sm font-semibold text-white outline outline-1 outline-amber-600 transition-colors duration-200 hover:bg-amber-500"
              >
                Request a Demo
              </Link>

              <Link
                href="/regulatory-exposure"
                className="flex h-12 items-center justify-center rounded-lg bg-[#071C33] px-5 text-sm font-semibold text-white outline outline-1 outline-slate-400 transition-colors duration-200 hover:bg-white/5"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/platform"
                className="text-sm font-normal text-slate-300 transition-colors hover:text-white"
              >
                Explore the Platform →
              </Link>

              <Link
                href="/trust-center"
                className="text-sm font-normal text-slate-300 transition-colors hover:text-white"
              >
                Visit the Trust Center →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND + SOCIAL
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1440px] px-6 pt-10 sm:px-8 md:px-12 lg:px-20 lg:pb-8">
        <div className="flex flex-col justify-between gap-8 border-b border-neutral-700 pb-10 lg:flex-row lg:items-center">

          <div className="flex w-full max-w-[740px] flex-col gap-6">

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">

              <div className="flex h-[50px] shrink-0 items-center rounded-lg bg-white px-3 py-2.5">
                <Image
                  src="/logos/logo.png"
                  alt="ZoikoAssure"
                  width={172}
                  height={50}
                  priority
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="text-base font-semibold text-white">
                  Global Regulatory Intelligence &amp; Continuous Compliance
                  Assurance
                </p>

                <p className="text-sm font-normal leading-5 text-slate-300">
                  Know what applies. Prove what’s controlled. Stay ready for
                  scrutiny.
                </p>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-300">
              Source&nbsp;&nbsp; → &nbsp;&nbsp;Applicability&nbsp;&nbsp; →
              &nbsp;&nbsp;Obligation&nbsp;&nbsp; → &nbsp;&nbsp;Control&nbsp;&nbsp;
              → &nbsp;&nbsp;Evidence&nbsp;&nbsp; → &nbsp;&nbsp;Assurance
            </p>
          </div>

          <div className="w-full lg:w-72">
            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-white">
              Follow us
            </p>

            <div className="mt-4 flex items-center gap-3">

              <SocialIcon
                label="LinkedIn"
                href="https://www.linkedin.com/"
              >
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon
                label="X"
                href="https://x.com/"
              >
                <XIcon />
              </SocialIcon>

              <SocialIcon
                label="YouTube"
                href="https://www.youtube.com/"
              >
                <YouTubeIcon />
              </SocialIcon>

              <SocialIcon
                label="Instagram"
                href="https://www.instagram.com/"
              >
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon
                label="Facebook"
                href="https://www.facebook.com/"
              >
                <FacebookIcon />
              </SocialIcon>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIRST NAVIGATION ROW
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-2 sm:px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

          <FooterColumn
            title="Platform"
            items={platformItems}
          />

          <FooterColumn
            title="Assurance"
            items={assuranceItems}
          />

          <FooterColumn
            title="Solutions"
            items={solutionsItems}
          />

          <FooterColumn
            title="By Role"
            items={roleItems}
          />

          <FooterColumn
            title="Regulatory Intelligence"
            items={regulatoryIntelligenceItems}
          />

          <FooterColumn
            title="Jurisdictions"
            items={jurisdictionItems}
          />

          <FooterColumn
            title="Frameworks"
            items={frameworkItems}
          />

        </div>

        <div className="my-10 h-px bg-white/10" />

        {/* ===================================================
            SECOND NAVIGATION ROW
        =================================================== */}

        <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

          <FooterColumn
            title="Trust Center"
            items={trustCenterItems}
          />

          <FooterColumn
            title="AI & Data Governance"
            items={aiGovernanceItems}
          />

          <FooterColumn
            title="Resources"
            items={resourcesItems}
          />

          <FooterColumn
            title="Developers & Integrations"
            items={developerItems}
          />

          <FooterColumn
            title="Company"
            items={companyItems}
          />

          <FooterColumn
            title="Support"
            items={supportItems}
          />

          {/* =================================================
              LEGAL
          ================================================= */}

          <div className="flex min-w-0 flex-col gap-4">

            <h3 className="h-10 text-xs font-semibold leading-5 text-white">
              Legal &amp; Procurement
            </h3>

            <div className="flex flex-col gap-2.5">

              {legalItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-normal leading-5 text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-1.5">
                <Link
                  href="/gated-access"
                  className="flex items-center gap-[5px] text-xs font-normal text-slate-300 transition-colors hover:text-white"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 5V3.75C3.5 2.36929 4.61929 1.25 6 1.25C7.38071 1.25 8.5 2.36929 8.5 3.75V5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />

                    <rect
                      x="1.75"
                      y="4.75"
                      width="8.5"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>

                  <span>Gated access</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          GLOBAL PRESENCE
      ===================================================== */}

      <section
        className="w-full bg-[#071C33] bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer/bg2.png')",
        }}
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 py-10 sm:px-8 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:px-20">

          <div>
            <h3 className="text-xl font-medium text-white">
              Global presence
            </h3>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xs font-semibold text-white">
              Global Headquarters
            </h4>

            <p className="text-sm font-normal leading-6 text-slate-300">
              Zoiko Tech Inc.
              <br />
              Sacramento, California
              <br />
              United States
            </p>

            <Link
              href="/contact"
              className="text-sm font-medium text-white transition-colors hover:text-slate-300"
            >
              Contact →
            </Link>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xs font-semibold text-white">
              European Headquarters
            </h4>

            <p className="text-sm font-normal leading-6 text-slate-300">
              Zoiko Tech Inc.
              <br />
              167–169 Great Portland Street
              <br />
              5th Floor
              <br />
              London W1W 5PF
              <br />
              United Kingdom
            </p>

            <Link
              href="/contact"
              className="text-sm font-medium text-white transition-colors hover:text-slate-300"
            >
              Contact →
            </Link>
          </div>

          <div className="flex w-full max-w-60 flex-col items-start gap-4">
            <h4 className="text-xs font-semibold leading-5 text-white">
              Connect with ZoikoAssure
            </h4>

            <Link
              href="/contact"
              className="text-sm font-normal text-white transition-colors hover:text-slate-300"
            >
              Contact →
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <section className="w-full bg-[#071C33]">

        <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 md:px-12 lg:px-20">

          <div className="flex flex-col gap-3">

            <p className="text-xs font-normal leading-5 text-slate-300">
              ZoikoAssure provides technology and regulatory intelligence to
              support compliance and assurance processes. Platform outputs,
              including AI-assisted outputs and Regulatory Exposure Profiles,
              do not constitute legal advice or an independent determination
              of regulatory compliance. Organizations remain responsible for
              their regulatory obligations, decisions, controls and
              professional advice.
            </p>

            <p className="text-xs font-normal leading-5 text-slate-300">
              References to regulations, standards and frameworks describe
              supported capabilities, mappings or alignment and do not, by
              themselves, represent certification, regulatory approval or
              assurance of an organization’s compliance.
            </p>

          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">

            <p className="text-xs font-normal leading-5 text-slate-300">
              ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group
              company.
            </p>

            <p className="text-xs font-normal leading-5 text-slate-300">
              © 2026 Zoiko Tech Inc. All rights reserved.
            </p>

          </div>
        </div>
      </section>

    </footer>
  );
}