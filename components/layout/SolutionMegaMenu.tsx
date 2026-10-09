"use client";

import Image from "next/image";
import Link from "next/link";

type SolutionMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

const solutionColumns = [
  {
    heading: "BY ROLE",
    items: [
      {
        title: "Chief Risk Officer",
        description:
          "Regulatory exposure, assurance posture, exceptions and emerging risk.",
        icon: "/images/SolutionMegaMenu/chart-no-axes-combined.png",
        href: "/solutions/chief-risk-officer",
      },
      {
        title: "General Counsel",
        description:
          "Applicability, legal provenance, jurisdictional change and defensible decisions.",
        icon: "/images/SolutionMegaMenu/scale.png",
        href: "/solutions/general-counsel",
      },
      {
        title: "Chief Compliance Officer",
        description:
          "Obligations, controls, evidence, remediation and examination readiness.",
        icon: "/images/SolutionMegaMenu/clipboard-check.png",
        href: "/solutions/chief-compliance-officer",
      },
      {
        title: "CFO & Audit Committee",
        description:
          "Material exposure, assurance state, accountability and board oversight.",
        icon: "/images/SolutionMegaMenu/landmark.png",
        href: "/solutions/cfo-audit-committee",
      },
    ],
  },
  {
    heading: "BY BUSINESS TRIGGER",
    items: [
      {
        title: "Regulatory Change",
        description:
          "Move from change detection to applicability and operational impact.",
        icon: "/images/SolutionMegaMenu/refresh-cw.png",
        href: "/solutions/regulatory-change",
      },
      {
        title: "New Market / Jurisdiction",
        description:
          "Understand regulatory requirements before expansion.",
        icon: "/images/SolutionMegaMenu/globe.png",
        href: "/solutions/new-market-jurisdiction",
      },
      {
        title: "AI Governance",
        description:
          "Connect AI obligations to controls, evidence and accountable review.",
        icon: "/images/SolutionMegaMenu/brain-circuit.png",
        href: "/solutions/ai-governance",
      },
      {
        title: "Regulatory Examination",
        description:
          "Assemble source-linked evidence and decision provenance.",
        icon: "/images/SolutionMegaMenu/file-search.png",
        href: "/solutions/regulatory-examination",
      },
      {
        title: "M&A & Transformation",
        description:
          "Identify inherited obligations, control gaps and exceptions.",
        icon: "/images/SolutionMegaMenu/git-merge.png",
        href: "/solutions/mergers-acquisitions",
      },
    ],
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.5 3.5L10 8L5.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 12L12 4M5 4H12V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SolutionItemProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  onLinkClick: () => void;
};

function SolutionItem({
  title,
  description,
  icon,
  href,
  onLinkClick,
}: SolutionItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block min-w-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
    >
      <div className="flex min-w-0 items-center gap-2">
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain"
        />

        <span className="min-w-0 flex-1 text-[14px] font-semibold leading-5 text-[#15384B] transition-colors duration-200 group-hover:text-[#0B6090]">
          {title}
        </span>

        <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-[#E85D18] transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>

      <p className="mt-1 text-[11.5px] font-normal leading-[18px] text-[#607286]">
        {description}
      </p>
    </Link>
  );
}

function SolutionColumn({
  heading,
  items,
  onLinkClick,
}: {
  heading: string;
  items: (typeof solutionColumns)[number]["items"];
  onLinkClick: () => void;
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-5 text-[10px] font-normal leading-4 text-[#63788C]">
        {heading}
      </h3>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <SolutionItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            onLinkClick={onLinkClick}
          />
        ))}
      </div>
    </div>
  );
}

function SolutionFeatureCard({
  onLinkClick,
}: {
  onLinkClick: () => void;
}) {
  return (
    <div className="group flex w-full shrink-0 flex-col overflow-hidden rounded-lg bg-[#EDF6FC] lg:w-[200px] xl:w-[220px]">
      <div className="relative h-[202px] w-full overflow-hidden">
        <Image
          src="/images/SolutionMegaMenu/image.png"
          alt="Business leaders discussing regulatory decisions"
          fill
          sizes="220px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start p-4">
        <h3 className="text-[14px] font-medium leading-5 text-[#064B7B]">
          Context for every decision
        </h3>

        <p className="mt-2 text-[11.5px] font-normal leading-[18px] text-[#607286]">
          Bring role, regulatory context and business change into the same
          conversation.
        </p>

        <Link
          href="/solutions"
          onClick={onLinkClick}
          className="group/link mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium leading-5 text-[#064B7B] transition-colors duration-200 hover:text-[#E87516]"
        >
          Explore by Role

          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
            <ExternalArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function SolutionMegaMenu({
  isOpen,
  onLinkClick,
}: SolutionMegaMenuProps) {
  return (
    <div
      className={`fixed left-1/2 top-[80px] z-[9998] hidden w-[min(1120px,calc(100vw-48px))] -translate-x-1/2 transition-all duration-200 ease-out lg:block ${
        isOpen
          ? "visible translate-y-0 pointer-events-auto opacity-100"
          : "invisible translate-y-2 pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute -top-5 left-0 h-5 w-full" />

      <div className="w-full overflow-hidden rounded-xl border border-[#DCE6EE] bg-white p-7 shadow-[0_8px_32px_rgba(15,44,67,0.10)]">
        <div className="mb-6 flex flex-col items-start gap-2">
          <span className="text-[10px] font-normal uppercase leading-4 text-[#15517C]">
            Solutions
          </span>

          <h2 className="text-[16px] font-semibold leading-6 text-[#064B7B] sm:text-[17px]">
            Regulatory assurance for the people accountable — and the moments
            that matter.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_200px] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px]">
          {solutionColumns.map((column) => (
            <SolutionColumn
              key={column.heading}
              heading={column.heading}
              items={column.items}
              onLinkClick={onLinkClick}
            />
          ))}

          <SolutionFeatureCard onLinkClick={onLinkClick} />
        </div>
      </div>
    </div>
  );
}