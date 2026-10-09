
"use client";

import Image from "next/image";
import Link from "next/link";

type RegulatoryMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

const columns = [
  {
    heading: "INTELLIGENCE",
    items: [
      {
        title: "Regulatory Changes",
        description: "Current and emerging change, source-linked and dated.",
        href: "/regulatory-intelligence/regulatory-changes",
        icon: "refresh-cw",
      },
      {
        title: "Obligations",
        description: "Structured regulatory requirements and provenance.",
        href: "/regulatory-intelligence/obligations",
        icon: "list-checks",
      },
      {
        title: "Enforcement & Guidance",
        description:
          "Relevant supervisory actions, interpretations and guidance.",
        href: "/regulatory-intelligence/enforcement-guidance",
        icon: "scale",
      },
    ],
  },
  {
    heading: "EXPLORE",
    items: [
      {
        title: "Jurisdictions",
        description: "Regulatory intelligence organized geographically.",
        href: "/regulatory-intelligence/jurisdictions",
        icon: "globe",
      },
      {
        title: "Regulatory Library",
        description:
          "Search/browse authoritative intelligence and explainers.",
        href: "/regulatory-intelligence/regulatory-library",
        icon: "library",
      },
      {
        title: "Frameworks",
        description: "Recognized regulatory and governance frameworks.",
        href: "/regulatory-intelligence/frameworks",
        icon: "panels-top-left",
      },
    ],
  },
  {
    heading: "TRANSPARENCY",
    items: [
      {
        title: "Regulatory Sources",
        description: "Source estate and authority model.",
        href: "/regulatory-intelligence/regulatory-sources",
        icon: "files",
      },
      {
        title: "Methodology",
        description:
          "How source, dates, applicability, change and provenance are handled.",
        href: "/regulatory-intelligence/methodology",
        icon: "route",
      },
    ],
  },
];

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M5.5 3.5L10 8L5.5 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5 shrink-0"
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

type RegulatoryItemProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  onLinkClick: () => void;
};

function RegulatoryItem({
  title,
  description,
  icon,
  href,
  onLinkClick,
}: RegulatoryItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block min-w-0 rounded-md outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#E87516] focus-visible:ring-offset-2"
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
          <Image
            src={`/images/RegulatoryMegaMenu/${icon}.png`}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        </span>

        <span className="min-w-0 flex-1 text-[14px] font-semibold leading-5 text-[#15384B] transition-colors duration-200 group-hover:text-[#0B6090]">
          {title}
        </span>

        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#E85D18] transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>

      <p className="mt-1 text-[11.5px] font-normal leading-[18px] text-[#607286]">
        {description}
      </p>
    </Link>
  );
}

function RegulatoryColumn({
  heading,
  items,
  onLinkClick,
}: {
  heading: string;
  items: (typeof columns)[number]["items"];
  onLinkClick: () => void;
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-5 text-[10px] font-normal leading-4 text-[#63788C]">
        {heading}
      </h3>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <RegulatoryItem
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

function RegulatoryFeatureCard({
  onLinkClick,
}: {
  onLinkClick: () => void;
}) {
  return (
    <div className="group flex w-full shrink-0 flex-col overflow-hidden rounded-lg bg-[#EDF6FC] lg:w-[200px] xl:w-[220px]">
      <div className="relative h-[146px] w-full overflow-hidden">
        <Image
          src="/images/RegulatoryMegaMenu/image.png"
          alt="Professionals reviewing regulatory documentation"
          fill
          sizes="220px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start p-4">
        <h3 className="text-[14px] font-medium leading-5 text-[#064B7B]">
          Start with the source
        </h3>

        <p className="mt-2 text-[11.5px] font-normal leading-[18px] text-[#607286]">
          Explore authoritative material and the context behind regulatory
          change.
        </p>

        <Link
          href="/regulatory-intelligence/regulatory-sources"
          onClick={onLinkClick}
          className="group/link mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium leading-5 text-[#064B7B] transition-colors duration-200 hover:text-[#E87516] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87516]"
        >
          Explore Regulatory Sources

          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
            <ExternalArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function RegulatoryMegaMenu({
  isOpen,
  onLinkClick,
}: RegulatoryMegaMenuProps) {
  return (
    <div
      className={`fixed left-1/2 top-[80px] z-[9998] hidden w-[min(1136px,calc(100vw-48px))] -translate-x-1/2 transition-all duration-200 ease-out lg:block ${
        isOpen
          ? "visible translate-y-0 pointer-events-auto opacity-100"
          : "invisible translate-y-2 pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute -top-5 left-0 h-5 w-full" />

      <div className="w-full overflow-hidden rounded-xl border border-[#DCE6EE] bg-white p-7 shadow-[0_8px_32px_rgba(15,44,67,0.10)]">
        <div className="mb-6 flex flex-col items-start gap-2">
          <span className="text-[10px] font-normal uppercase leading-4 text-[#15517C]">
            Regulatory Intelligence
          </span>

          <h2 className="text-[16px] font-semibold leading-6 text-[#064B7B] sm:text-[17px]">
            Authoritative regulatory change connected to operational impact.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_200px] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_220px] xl:gap-8">
          {columns.map((column) => (
            <RegulatoryColumn
              key={column.heading}
              heading={column.heading}
              items={column.items}
              onLinkClick={onLinkClick}
            />
          ))}

          <RegulatoryFeatureCard onLinkClick={onLinkClick} />
        </div>
      </div>
    </div>
  );
}
