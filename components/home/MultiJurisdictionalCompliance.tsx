"use client";

import Image from "next/image";

const jurisdictions = [
  {
    region: "European Union",
    title: "EU AI Act",
    status: "Applies",
    statusType: "applies",
    source: "EUR-Lex · Regulation (EU) 2024/1689 · Art. 50(1)",
    scope: "AI system interacting directly with natural persons",
    effective: "02 Aug 2026 · transparency requirement",
    description:
      "Modeled scope includes an EU-facing AI support agent. Disclosure obligations are mapped for review.",
  },
  {
    region: "California",
    title: "CCPA / CPRA",
    status: "UNCERTAIN",
    statusType: "uncertain",
    source: "California Legislature · Civil Code §1798.140(d)",
    scope: "Covered business + California personal information",
    effective: "01 Jan 2023 · CPRA amendments",
    description:
      "California customer data is in scope. Business thresholds and applicable exemptions need confirmation.",
  },
  {
    region: "Singapore",
    title: "MAS TRM Guidelines",
    status: "Does not apply",
    statusType: "does-not-apply",
    source: "Monetary Authority of Singapore · TRM Guidelines",
    scope: "MAS-regulated financial institution",
    effective: "18 Jan 2021 · guideline issue date; confirm period",
    description:
      "For this illustration, the Singapore entity is assumed not to be MAS-regulated. Verify entity status before relying on this outcome.",
  },
];

function CheckIcon() {
  return (
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
      <span className="relative block h-4 w-4">
        <span className="absolute left-[3px] top-[6px] h-[2px] w-[10px] rotate-[-45deg] rounded-full bg-amber-600" />
        <span className="absolute left-[8px] top-[3px] h-[2px] w-[7px] rotate-[45deg] rounded-full bg-amber-600" />
      </span>
    </span>
  );
}

function StatusIcon({ type }: { type: string }) {
  if (type === "applies") {
    return (
      <span className="flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-teal-800">
        <span className="h-1 w-1 rounded-full bg-teal-800" />
      </span>
    );
  }

  if (type === "uncertain") {
    return (
      <span className="flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-yellow-800">
        <span className="h-[1.5px] w-1.5 bg-yellow-800" />
      </span>
    );
  }

  return (
    <span className="flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-cyan-900">
      <span className="h-[1.5px] w-1.5 bg-cyan-900" />
    </span>
  );
}

function StatusBadge({
  status,
  type,
}: {
  status: string;
  type: string;
}) {
  const styles = {
    applies: "bg-gray-100 text-teal-800",
    uncertain: "bg-orange-100 text-yellow-800",
    "does-not-apply": "bg-gray-100 text-cyan-900",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ${
        styles[type as keyof typeof styles]
      }`}
    >
      <StatusIcon type={type} />

      <span className="text-xs font-semibold leading-4">
        {status}
      </span>
    </div>
  );
}

function JurisdictionCard({
  region,
  title,
  status,
  statusType,
  source,
  scope,
  effective,
  description,
}: (typeof jurisdictions)[number]) {
  return (
    <article
      className="
        relative
        flex
        min-h-[430px]
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-zinc-200
        bg-white
      "
    >
      {/* Figma card background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/home/bg2.png')",
        }}
      />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Region */}
        <div className="text-xs font-semibold uppercase leading-4 text-cyan-900">
          {region}
        </div>

        {/* Title + Status */}
        <div className="mt-4 flex flex-col items-start gap-3">
          <h3 className="text-2xl font-medium leading-7 text-cyan-950">
            {title}
          </h3>

          <StatusBadge
            status={status}
            type={statusType}
          />
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-zinc-200" />

        {/* Authority */}
        <div className="flex flex-col gap-[5px]">
          <div className="text-xs font-semibold uppercase leading-4 text-slate-600">
            Authority / source
          </div>

          <p className="text-sm font-normal leading-5 text-cyan-950">
            {source}
          </p>
        </div>

        {/* Scope */}
        <div className="mt-5 flex flex-col gap-[5px]">
          <div className="text-xs font-semibold uppercase leading-4 text-slate-600">
            Scope
          </div>

          <p className="text-sm font-normal leading-5 text-cyan-950">
            {scope}
          </p>
        </div>

        {/* Effective period */}
        <div className="mt-5 flex flex-col gap-[5px]">
          <div className="text-xs font-semibold uppercase leading-4 text-slate-600">
            Effective / applicable period
          </div>

          <p className="text-sm font-normal leading-5 text-cyan-950">
            {effective}
          </p>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm font-normal leading-5 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function MultiJurisdictionalCompliance() {
  return (
    <section className="w-full bg-slate-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-14
          sm:px-8
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              TOP CONTENT
          ====================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-8
              lg:grid-cols-[592px_1fr]
              lg:items-start
              lg:gap-8
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex w-full flex-col items-start">
              <h2
                className="
                  max-w-[592px]
                  text-3xl
                  font-bold
                  leading-9
                  tracking-tight
                  text-sky-900
                "
              >
                Multi-Jurisdictional Compliance Starts With Applicability
              </h2>

              <p
                className="
                  mt-6
                  max-w-[592px]
                  text-base
                  font-normal
                  leading-6
                  text-slate-600
                "
              >
                ZoikoAssure evaluates regulatory scope against the facts that
                determine whether an obligation applies — jurisdiction, legal
                entity, activity, product, data, customer type, and effective
                period — while preserving full reasoning.
              </p>

              {/* Feature list */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckIcon />

                  <span className="text-sm font-semibold leading-5 text-slate-700">
                    Contextual Scope Analysis
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckIcon />

                  <span className="text-sm font-semibold leading-5 text-slate-700">
                    Canonical UNCERTAIN State Routing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckIcon />

                  <span className="text-sm font-semibold leading-5 text-slate-700">
                    Multi-Region Delta &amp; Conflict View
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                lg:h-[294px]
              "
            >
              <Image
                src="/home/image.png"
                alt="Multi-jurisdictional compliance review"
                width={636}
                height={294}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* =====================================================
              JURISDICTION CARDS
          ====================================================== */}

          <div
            className="
              mt-8
              grid
              w-full
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {jurisdictions.map((jurisdiction) => (
              <JurisdictionCard
                key={jurisdiction.region}
                {...jurisdiction}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}