
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import PlatformMegaMenu from "./platformmegamenu";
import SolutionMegaMenu from "./SolutionMegaMenu";
import RegulatoryMegaMenu from "./RegulatoryMegaMenu";
import TrustCenterMegaMenu from "./TrustCenterMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

const navItems = [
  { label: "Platform", href: "/platform", dropdown: true },
  { label: "Solutions", href: "/solutions", dropdown: true },
  {
    label: "Regulatory Intelligence",
    href: "/regulatory-intelligence",
    dropdown: true,
  },
  { label: "Trust Center", href: "/trust-center", dropdown: true },
  { label: "Resources", href: "/resources", dropdown: true },
  { label: "Company", href: "/company", dropdown: true },
];

function ChevronDown({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.67 11.33L11.33 4.67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.67 4.67H11.33V9.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return isOpen ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5H17M3 10H17M3 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const platformMobileLinks = [
  ["Platform Overview", "/platform"],
  ["Applicability Engine", "/platform/applicability-engine"],
  ["Obligation & Control Mapping", "/platform/obligation-control-mapping"],
  ["Continuous Assurance", "/platform/continuous-assurance"],
  ["Integrations", "/platform/integrations"],
  ["Evidence & Provenance", "/platform/evidence-provenance"],
  ["Governed AI", "/platform/governed-ai"],
];

const solutionMobileLinks = [
  ["Chief Risk Officer", "/solutions/chief-risk-officer"],
  ["General Counsel", "/solutions/general-counsel"],
  ["Chief Compliance Officer", "/solutions/chief-compliance-officer"],
  ["CFO & Audit Committee", "/solutions/cfo-audit-committee"],
  ["Regulatory Change", "/solutions/regulatory-change"],
  ["New Market / Jurisdiction", "/solutions/new-market-jurisdiction"],
  ["AI Governance", "/solutions/ai-governance"],
  ["Regulatory Examination", "/solutions/regulatory-examination"],
  ["M&A & Transformation", "/solutions/mergers-acquisitions"],
];

const regulatoryMobileLinks = [
  ["Regulatory Changes", "/regulatory-intelligence/regulatory-changes"],
  ["Obligations", "/regulatory-intelligence/obligations"],
  [
    "Enforcement & Guidance",
    "/regulatory-intelligence/enforcement-guidance",
  ],
  ["Jurisdictions", "/regulatory-intelligence/jurisdictions"],
  ["Regulatory Library", "/regulatory-intelligence/regulatory-library"],
  ["Frameworks", "/regulatory-intelligence/frameworks"],
  ["Regulatory Sources", "/regulatory-intelligence/regulatory-sources"],
  ["Methodology", "/regulatory-intelligence/methodology"],
];

const trustCenterMobileLinks = [
  ["Security", "/trust-center/security"],
  ["Privacy", "/trust-center/privacy"],
  ["Accessibility", "/trust-center/accessibility"],
  ["Responsible AI", "/trust-center/responsible-ai"],
  ["Data Governance", "/trust-center/data-governance"],
  ["Deployment & Residency", "/trust-center/deployment-residency"],
  ["Reliability", "/trust-center/reliability"],
];

const resourcesMobileLinks = [
  ["Regulatory Guides", "/resources/regulatory-guides"],
  ["Framework Guides", "/resources/framework-guides"],
  ["Regulatory Glossary", "/resources/regulatory-glossary"],
  ["Executive Briefings", "/resources/executive-briefings"],
  ["Insights", "/resources/insights"],
  ["Research", "/resources/research"],
  ["FAQs", "/resources/faqs"],
  ["Documentation", "/resources/documentation"],
];

const companyMobileLinks = [
  ["About ZoikoAssure", "/company/about-us"],
  ["Leadership", "/company/leadership"],
  ["Press & Media", "/company/press-media"],
  ["Careers", "/company/careers"],
  ["Contact", "/company/contact"],
];

function MobileLinks({
  links,
  onLinkClick,
}: {
  links: string[][];
  onLinkClick: () => void;
}) {
  return (
    <div className="pb-4 pl-3">
      {links.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          onClick={onLinkClick}
          className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-zinc-50 hover:text-amber-600"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const closeMenu = () => {
    setOpenMenu(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-zinc-200 bg-white">
      {/* HEADER BAR */}
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-2 px-5 sm:px-8 lg:px-6 xl:gap-4 xl:px-20">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
          aria-label="Zoiko Assure Home"
        >
          <Image
            src="/logos/logo.png"
            alt="Zoiko Assure"
            width={172}
            height={50}
            priority
            className="h-auto w-[145px] object-contain sm:w-[155px] lg:w-[160px] xl:w-[172px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden h-full flex-1 items-center justify-center lg:flex"
        >
          <div className="flex h-full items-center gap-0.5 xl:gap-2">
            {navItems.map((item) => {
              const isOpen = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => {
                    setOpenMenu((current) =>
                      current === item.label ? null : current
                    );
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`relative flex h-11 items-center justify-center gap-1 whitespace-nowrap rounded-md px-1.5 text-xs font-medium transition-colors duration-200 xl:gap-1.5 xl:px-2.5 xl:text-sm ${
                      isOpen
                        ? "text-[#064B7B]"
                        : "text-cyan-950 hover:text-amber-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown isOpen={isOpen} />

                    <span
                      className={`absolute bottom-[-2px] left-2 right-2 h-[2px] rounded-full bg-amber-600 transition-opacity duration-200 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>

                  {/* PLATFORM MEGA MENU */}
                  {item.label === "Platform" && (
                    <PlatformMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}

                  {/* SOLUTIONS MEGA MENU */}
                  {item.label === "Solutions" && (
                    <SolutionMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}

                  {/* REGULATORY INTELLIGENCE MEGA MENU */}
                  {item.label === "Regulatory Intelligence" && (
                    <RegulatoryMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}

                  {/* TRUST CENTER MEGA MENU */}
                  {item.label === "Trust Center" && (
                    <TrustCenterMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}

                  {/* RESOURCES MEGA MENU */}
                  {item.label === "Resources" && (
                    <ResourcesMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}

                  {/* COMPANY MEGA MENU */}
                  {item.label === "Company" && (
                    <CompanyMegaMenu
                      isOpen={isOpen}
                      onLinkClick={closeMenu}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-6">
          <Link
            href="/sign-in"
            onClick={closeMenu}
            className="whitespace-nowrap text-xs font-medium text-cyan-950 transition-colors hover:text-amber-600 xl:text-sm"
          >
            Sign In
          </Link>

          <Link
            href="/request-demo"
            onClick={closeMenu}
            className="flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg bg-amber-600 px-3 text-xs font-semibold text-white transition-colors hover:bg-amber-700 xl:h-10 xl:gap-3 xl:px-4 xl:text-sm"
          >
            <span>Request A Demo</span>
            <ArrowUpRight />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen((previous) => !previous);
            setOpenMenu(null);
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-cyan-950 transition-colors hover:bg-zinc-50 lg:hidden"
        >
          <MenuIcon isOpen={mobileMenuOpen} />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-zinc-200 bg-white lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-3 sm:px-8"
          >
            {navItems.map((item) => {
              const isOpen = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="border-b border-zinc-100"
                >
                  <div className="flex min-h-12 items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex min-h-12 flex-1 items-center pr-3 text-sm font-medium text-cyan-950 transition-colors hover:text-amber-600"
                    >
                      {item.label}
                    </Link>

                    {item.dropdown && (
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => toggleMenu(item.label)}
                        className="flex h-10 w-10 items-center justify-center rounded-md text-cyan-950 hover:bg-zinc-50"
                      >
                        <ChevronDown isOpen={isOpen} />
                      </button>
                    )}
                  </div>

                  {/* MOBILE PLATFORM LINKS */}
                  {item.label === "Platform" && isOpen && (
                    <MobileLinks
                      links={platformMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}

                  {/* MOBILE SOLUTIONS LINKS */}
                  {item.label === "Solutions" && isOpen && (
                    <MobileLinks
                      links={solutionMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}

                  {/* MOBILE REGULATORY INTELLIGENCE LINKS */}
                  {item.label === "Regulatory Intelligence" && isOpen && (
                    <MobileLinks
                      links={regulatoryMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}

                  {/* MOBILE TRUST CENTER LINKS */}
                  {item.label === "Trust Center" && isOpen && (
                    <MobileLinks
                      links={trustCenterMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}

                  {/* MOBILE RESOURCES LINKS */}
                  {item.label === "Resources" && isOpen && (
                    <MobileLinks
                      links={resourcesMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}

                  {/* MOBILE COMPANY LINKS */}
                  {item.label === "Company" && isOpen && (
                    <MobileLinks
                      links={companyMobileLinks}
                      onLinkClick={closeMobileMenu}
                    />
                  )}
                </div>
              );
            })}

            {/* MOBILE ACTIONS */}
            <div className="mt-4 flex flex-col gap-3 pb-2">
              <Link
                href="/sign-in"
                onClick={closeMobileMenu}
                className="flex h-11 items-center justify-center rounded-lg border border-zinc-200 text-sm font-medium text-cyan-950 transition-colors hover:bg-zinc-50"
              >
                Sign In
              </Link>

              <Link
                href="/request-demo"
                onClick={closeMobileMenu}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-amber-600 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <span>Request A Demo</span>
                <ArrowUpRight />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
