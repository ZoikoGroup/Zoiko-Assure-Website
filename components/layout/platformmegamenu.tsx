"use client";

import Image from "next/image";
import Link from "next/link";

type PlatformMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

const platformColumns = [
  {
    heading: "UNDERSTAND",
    items: [
      {
        title: "Platform Overview",
        description:
          "Understand the end-to-end assurance operating model.",
        icon: "/images/platformmegamenu/layers.png",
        href: "/platform",
      },
      {
        title: "Applicability Engine",
        description:
          "Determine what applies by jurisdiction, entity, activity, product, data and effective period.",
        icon: "/images/platformmegamenu/list-filter.png",
        href: "/platform/applicability-engine",
      },
    ],
  },
  {
    heading: "OPERATIONALIZE",
    items: [
      {
        title: "Obligation & Control Mapping",
        description:
          "Translate applicable requirements into governed controls and accountability.",
        icon: "/images/platformmegamenu/workflow.png",
        href: "/platform/obligation-control-mapping",
      },
      {
        title: "Continuous Assurance",
        description:
          "Evaluate evidence-backed control state continuously.",
        icon: "/images/platformmegamenu/activity.png",
        href: "/platform/continuous-assurance",
      },
      {
        title: "Integrations",
        description:
          "Connect systems that operate controls or produce evidence.",
        icon: "/images/platformmegamenu/plug.png",
        href: "/platform/integrations",
      },
    ],
  },
  {
    heading: "PROVE",
    items: [
      {
        title: "Evidence & Provenance",
        description:
          "Preserve evidence source, integrity, lineage, validity and review history.",
        icon: "/images/platformmegamenu/file-check.png",
        href: "/platform/evidence-provenance",
      },
      {
        title: "Governed AI",
        description:
          "Source-grounded assistance with uncertainty, escalation and human accountability.",
        icon: "/images/platformmegamenu/brain-circuit.png",
        href: "/platform/governed-ai",
      },
    ],
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
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

type PlatformItemProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  onLinkClick: () => void;
};

function PlatformItem({
  title,
  description,
  icon,
  href,
  onLinkClick,
}: PlatformItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group block min-w-0 rounded-md outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#E87516] focus-visible:ring-offset-2"
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
          <Image
            src={icon}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        </span>

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

function PlatformColumn({
  heading,
  items,
  onLinkClick,
}: {
  heading: string;
  items: (typeof platformColumns)[number]["items"];
  onLinkClick: () => void;
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-5 text-[10px] font-normal leading-4 text-[#63788C]">
        {heading}
      </h3>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <PlatformItem
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

function ConnectedByDesign({
  onLinkClick,
}: {
  onLinkClick: () => void;
}) {
  return (
    <div className="group flex w-full shrink-0 flex-col overflow-hidden rounded-lg bg-[#EDF6FC] lg:w-[200px] xl:w-[220px]">
      <div className="relative h-[146px] w-full overflow-hidden">
        <Image
          src="/images/platformmegamenu/image.png"
          alt="Connected workspace with monitors and operational dashboards"
          fill
          sizes="220px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start p-4">
        <h3 className="text-[14px] font-medium leading-5 text-[#064B7B]">
          Connected by design
        </h3>

        <p className="mt-2 text-[11.5px] font-normal leading-[18px] text-[#607286]">
          Explore the operating model from applicable requirements to
          evidence-backed assurance.
        </p>

        <Link
          href="/platform"
          onClick={onLinkClick}
          className="group/link mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium leading-5 text-[#064B7B] transition-colors duration-200 hover:text-[#E87516] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87516]"
        >
          Explore the Platform

          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
            <ExternalArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function PlatformMegaMenu({
  isOpen,
  onLinkClick,
}: PlatformMegaMenuProps) {
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
            Platform
          </span>

          <h2 className="text-[16px] font-semibold leading-6 text-[#064B7B] sm:text-[17px]">
            Turn regulatory obligations into continuously governed
            assurance.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_200px] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_220px] xl:gap-8">
          {platformColumns.map((column) => (
            <PlatformColumn
              key={column.heading}
              heading={column.heading}
              items={column.items}
              onLinkClick={onLinkClick}
            />
          ))}

          <ConnectedByDesign onLinkClick={onLinkClick} />
        </div>
      </div>
    </div>
  );
}