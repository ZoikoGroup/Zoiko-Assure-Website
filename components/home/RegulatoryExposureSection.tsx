"use client";

import React from "react";

type StatusType = "source" | "uncertain" | "mapped" | "missing" | "review";

interface ExposureRow {
  lens: string;
  subject: string;
  status: string;
  statusType: StatusType;
  basis: string;
  accountability: string;
}

const exposureRows: ExposureRow[] = [
  {
    lens: "Material regulatory changes",
    subject: "EU AI Act transparency",
    status: "Source-linked",
    statusType: "source",
    basis: "EUR-Lex · Art. 50(1) · effective 02 Aug 2026",
    accountability: "Legal operations",
  },
  {
    lens: "Applicability requiring review",
    subject: "California privacy scope",
    status: "UNCERTAIN",
    statusType: "uncertain",
    basis: "Confirm business thresholds and exemptions",
    accountability: "Privacy counsel",
  },
  {
    lens: "Control coverage",
    subject: "AI interaction disclosure",
    status: "Mapped",
    statusType: "mapped",
    basis: "Obligation → CTRL-AI-014; not effectiveness",
    accountability: "Product compliance",
  },
  {
    lens: "Evidence gaps",
    subject: "Localized disclosure test",
    status: "Missing / stale / invalid",
    statusType: "missing",
    basis: "Missing test capture; validate existing artifact",
    accountability: "Control owner",
  },
  {
    lens: "Assurance posture",
    subject: "EU / AI transparency",
    status: "Requires review",
    statusType: "review",
    basis: "As-of 06 Oct 2026 · test basis incomplete",
    accountability: "CCO review",
  },
  {
    lens: "Exceptions & risk acceptance",
    subject: "Localized-flow deferral",
    status: "Separate queue",
    statusType: "mapped",
    basis: "EXP-009 · approval pending · expires 31 Oct 2026",
    accountability: "Product lead",
  },
];

const tabs = [
  "CRO",
  "General Counsel",
  "CCO",
  "CFO / Audit Committee",
];

function StatusBadge({
  status,
  type,
}: {
  status: string;
  type: StatusType;
}) {
  const isWarning =
    type === "uncertain" || type === "review";

  return (
    <span
      className={[
        "inline-flex",
        "items-center",
        "gap-1.5",
        "rounded-lg",
        "px-2.5",
        "py-1.5",
        "text-xs",
        "font-semibold",
        "leading-4",
        "whitespace-nowrap",
        isWarning
          ? "bg-orange-100 text-yellow-800"
          : "bg-gray-100 text-cyan-900",
      ].join(" ")}
    >
      <span
        className={[
          "relative",
          "flex",
          "h-3",
          "w-3",
          "shrink-0",
          "items-center",
          "justify-center",
          "rounded-full",
          "border-[1.5px]",
          isWarning
            ? "border-yellow-800"
            : "border-cyan-900",
        ].join(" ")}
      >
        <span className="h-1 w-1 rounded-full bg-current" />
      </span>

      {status}
    </span>
  );
}

export default function RegulatoryExposureSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-14
          sm:px-8
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mb-12 w-full">
          <div className="max-w-[760px]">
            <h2
              className="
                text-3xl
                font-bold
                leading-9
                tracking-tight
                text-sky-900
                sm:text-4xl
              "
            >
              A Board-Defensible View of Regulatory Exposure.
            </h2>

            <p
              className="
                mt-4
                max-w-[860px]
                text-base
                font-normal
                leading-6
                text-slate-600
              "
            >
              Explain what changed, where judgment is needed and why
              assurance is — or is not — supported. No opaque compliance
              score. No false precision.
            </p>
          </div>
        </div>

        {/* =====================================================
            LEADERSHIP VIEW CARD
        ====================================================== */}

        <div
          className="
            w-full
            overflow-hidden
            rounded-xl
            border
            border-zinc-200
            bg-white
          "
        >
          {/* ===================================================
              CARD HEADER
          ==================================================== */}

          <div
            className="
              flex
              flex-col
              gap-3
              px-5
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >
            <h3
              className="
                text-xl
                font-medium
                text-cyan-950
              "
            >
              Regulatory exposure / leadership view
            </h3>

            <p
              className="
                text-xs
                font-normal
                text-slate-600
              "
            >
              Sanitized illustration · evidence-as-of 06 Oct 2026
            </p>
          </div>

          {/* ===================================================
              TABS
          ==================================================== */}

          <div
            className="
              overflow-x-auto
              border-b
              border-zinc-200
            "
          >
            <div
              className="
                flex
                min-w-max
                px-3
                sm:px-6
              "
            >
              {tabs.map((tab) => {
                const active = tab === "CCO";

                return (
                  <button
                    key={tab}
                    type="button"
                    className={[
                      "px-4",
                      "py-4",
                      "border-b-[3px]",
                      "text-xs",
                      "font-normal",
                      "whitespace-nowrap",
                      "transition-colors",
                      "sm:px-6",
                      active
                        ? "border-amber-600 text-cyan-900 font-semibold"
                        : "border-transparent text-slate-600",
                    ].join(" ")}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              DESKTOP TABLE
          ==================================================== */}

          <div className="hidden w-full lg:block">
            {/* Header */}
            <div
              className="
                grid
                grid-cols-[1.35fr_1.15fr_1fr_1.65fr_.8fr]
                gap-6
                bg-gray-100
                px-6
                py-4
              "
            >
              <TableHeader>Decision lens</TableHeader>
              <TableHeader>Scope / subject</TableHeader>
              <TableHeader>State</TableHeader>
              <TableHeader>Explainable basis</TableHeader>
              <TableHeader>Accountability</TableHeader>
            </div>

            {/* Rows */}
            {exposureRows.map((row) => (
              <div
                key={row.lens}
                className="
                  grid
                  grid-cols-[1.35fr_1.15fr_1fr_1.65fr_.8fr]
                  items-center
                  gap-6
                  border-b
                  border-zinc-200
                  px-6
                  py-5
                "
              >
                <div
                  className="
                    text-sm
                    font-medium
                    leading-5
                    text-cyan-950
                  "
                >
                  {row.lens}
                </div>

                <div
                  className="
                    text-xs
                    font-normal
                    leading-5
                    text-slate-600
                  "
                >
                  {row.subject}
                </div>

                <div className="min-w-0">
                  <StatusBadge
                    status={row.status}
                    type={row.statusType}
                  />
                </div>

                <div
                  className="
                    text-xs
                    font-normal
                    leading-4
                    text-slate-600
                  "
                >
                  {row.basis}
                </div>

                <div
                  className="
                    text-xs
                    font-normal
                    leading-4
                    text-cyan-950
                  "
                >
                  {row.accountability}
                </div>
              </div>
            ))}
          </div>

          {/* ===================================================
              MOBILE / TABLET CARDS
          ==================================================== */}

          <div className="block lg:hidden">
            {exposureRows.map((row) => (
              <div
                key={row.lens}
                className="
                  border-b
                  border-zinc-200
                  p-5
                  sm:p-6
                "
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Decision lens */}
                  <div>
                    <TableHeader>Decision lens</TableHeader>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-medium
                        leading-5
                        text-cyan-950
                      "
                    >
                      {row.lens}
                    </p>
                  </div>

                  {/* Scope */}
                  <div>
                    <TableHeader>Scope / subject</TableHeader>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
                      {row.subject}
                    </p>
                  </div>

                  {/* State */}
                  <div>
                    <TableHeader>State</TableHeader>

                    <div className="mt-2">
                      <StatusBadge
                        status={row.status}
                        type={row.statusType}
                      />
                    </div>
                  </div>

                  {/* Accountability */}
                  <div>
                    <TableHeader>Accountability</TableHeader>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-normal
                        leading-4
                        text-cyan-950
                      "
                    >
                      {row.accountability}
                    </p>
                  </div>

                  {/* Explainable basis */}
                  <div className="sm:col-span-2">
                    <TableHeader>Explainable basis</TableHeader>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-normal
                        leading-4
                        text-slate-600
                      "
                    >
                      {row.basis}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===================================================
              FOOTNOTE
          ==================================================== */}

          <div className="px-5 py-5 sm:px-6">
            <p
              className="
                text-xs
                font-normal
                leading-4
                text-slate-600
              "
            >
              Mapping is not effectiveness. Exceptions are not Proven.
              Assurance posture remains explainable by jurisdiction,
              domain and as-of date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   TABLE HEADER
============================================================= */

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        text-[10px]
        font-semibold
        uppercase
        leading-4
        text-slate-600
      "
    >
      {children}
    </div>
  );
}