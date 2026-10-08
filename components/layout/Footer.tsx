import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "PLATFORM",
    links: [
      "Regulatory Intelligence",
      "Applicability Analysis",
      "Obligation Mapping",
      "Control Management",
      "Evidence Vault",
      "Continuous Assurance",
      "Regulatory Monitoring",
      "Audit Readiness",
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      "Regulatory Change",
      "New Market Entry",
      "Regulatory Examination",
      "Compliance Teams",
      "Legal & Operations",
      "Risk & Assurance",
      "Enterprise Compliance",
    ],
  },
  {
    title: "TRUST & GOVERNANCE",
    links: [
      "Security Overview",
      "Privacy Controls",
      "Transparency Center",
      "Responsible AI",
      "Data Retention & Legal Hold",
      "Service Level Agreement",
      "Audit-Grade Evidence",
    ],
  },
  {
    title: "RESOURCES",
    links: [
      "Case Studies",
      "Implementation Guide",
      "Product Documentation",
      "Admin Guide",
      "Help Center",
      "FAQs",
      "Blog & Insights",
      "Request a Demo",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About ZoikoAssure",
      "About Zoiko Tech Inc.",
      "Leadership & Governance",
      "Enterprise Readiness",
      "Partners",
      "Careers",
      "Press & Media",
      "Contact",
    ],
  },
  {
    title: "LEGAL",
    links: [
      "Terms of Service",
      "Subscription Terms",
      "Data Processing Addendum",
      "Privacy Notice",
      "Cookie Notice",
      "Acceptable Use Policy",
      "Subprocessor List",
      "Security Addendum",
      "Service Level Agreement",
      "Data Retention, Deletion & Legal Hold Policy",
    ],
  },
];

const trustBadges = [
  "EU AI ACT",
  "DORA",
  "CCPA / CPRA",
  "ISO 27001",
  "ENTERPRISE ASSURANCE",
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-20">

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="ZoikoAssure home">
            <Image
              src="/logos/logo.png"
              alt="ZoikoAssure"
              width={172}
              height={50}
              className="h-[50px] w-[172px] object-contain"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-800" />

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-5">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-slate-300"
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 pt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-bold tracking-wide text-white">
                {column.title}
              </h3>

              <div className="mb-5 h-px bg-slate-800" />

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm leading-5 text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 ZoikoAssure. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}