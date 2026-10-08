"use client";

import Image from "next/image";
import Link from "next/link";

const trustItems = [
  "Source-grounded",
  "Human-accountable",
  "Evidence-first",
];

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#eef6fc]
        text-slate-900
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          justify-between
          gap-12
          px-5
          py-12
          sm:px-6
          sm:py-14
          md:px-8
          lg:flex-row
          lg:items-center
          lg:gap-8
          lg:px-0
          lg:py-[64px]
        "
      >
        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div
          className="
            flex
            w-full
            max-w-[673px]
            flex-col
            items-start
            lg:min-h-[586px]
            lg:justify-center
          "
        >
          {/* =====================================================
              EYEBROW
          ===================================================== */}
          <div className="w-full">
            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-slate-100
                px-3
                py-1.5
              "
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1.5L12.67 3.33V7.3C12.67 10.27 10.68 12.98 8 14.17C5.32 12.98 3.33 10.27 3.33 7.3V3.33L8 1.5Z"
                    stroke="#D97706"
                    strokeWidth="1.33"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M6 7.33L7.33 8.67L10 6"
                    stroke="#D97706"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.04em]
                  text-sky-900
                  sm:text-xs
                "
              >
                Global Regulatory Intelligence + Continuous Assurance
              </span>
            </div>
          </div>

          {/* =====================================================
              HEADING
          ===================================================== */}
          <div className="w-full pt-8 lg:pt-6">
            <h1
              className="
                text-[36px]
                font-extrabold
                leading-[43px]
                tracking-tight
                text-sky-900
                sm:text-[42px]
                sm:leading-[51px]
                lg:text-5xl
                lg:leading-[58px]
              "
            >
              Know What Applies.
              <br />
              Prove What’s Controlled.
              <br />
              <span className="text-amber-600">
                Stay Ready for Scrutiny.
              </span>
            </h1>
          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <div className="w-full pt-8 lg:pt-6">
            <p
              className="
                w-full
                max-w-[672px]
                text-base
                font-normal
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              ZoikoAssure connects regulatory intelligence to applicability,
              obligations, controls, evidence, and continuous assurance —
              giving compliance leaders a defensible view of what applies,
              what changed, what is proven, and what requires action.
            </p>
          </div>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              pt-8
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="#regulatory-exposure"
              className="
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-sky-900
                px-6
                py-3.5
                text-sm
                font-semibold
                leading-5
                text-white
                shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]
                transition
                hover:bg-sky-950
                focus:outline-none
                focus:ring-2
                focus:ring-sky-900
                focus:ring-offset-2
              "
            >
              <span>Assess Your Regulatory Exposure</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.33 8H12.67"
                  stroke="#D97706"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                />

                <path
                  d="M8 3.33L12.67 8L8 12.67"
                  stroke="#D97706"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="#assurance"
              className="
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                rounded-lg
                border
                border-gray-400
                bg-transparent
                px-6
                py-3.5
                text-sm
                font-semibold
                leading-5
                text-slate-700
                transition
                hover:bg-white/60
                focus:outline-none
                focus:ring-2
                focus:ring-slate-400
                focus:ring-offset-2
              "
            >
              See How Assurance Works
            </Link>
          </div>

          {/* =====================================================
              TRUST ITEMS
          ===================================================== */}
          <div
            className="
              flex
              w-full
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              pt-8
            "
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-1.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6.67"
                    stroke="#059669"
                    strokeWidth="1.33"
                  />

                  <path
                    d="M5.33 8L7.1 9.77L10.67 6.2"
                    stroke="#059669"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-xs font-medium leading-4 text-slate-500">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            RIGHT SIDE — REGULATORY DIAGRAM
        ======================================================= */}
        <div
          className="
            relative
            flex
            w-full
            shrink-0
            items-center
            justify-center
            overflow-visible
            lg:w-[525px]
          "
        >
          <div
            className="
              relative
              h-[600px]
              w-[525px]
              max-w-full
              overflow-visible
            "
          >
            {/* ===================================================
                HERO DIAGRAM IMAGE
            =================================================== */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                h-[562px]
                w-[525px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <Image
                src="/home/hero.png"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* ===================================================
                CENTER GLOBE
            =================================================== */}
            <div
              className="
                absolute
                left-1/2
                top-[51%]
                z-20
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <Image
                src="/home/globe.png"
                alt=""
                width={190}
                height={190}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* ===================================================
                1 — REGULATORY SOURCE
            =================================================== */}
            <div
              className="
                absolute
                left-1/2
                top-[-25px]
                z-30
                w-[230px]
                -translate-x-1/2
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Regulatory Source
              </h3>

              <p className="mt-1 text-[12px] font-normal leading-4 text-slate-600">
                EU AI Act · EUR-Lex · source verified
              </p>

              <p className="text-[12px] font-normal leading-4 text-cyan-900">
                Effective date&nbsp; / &nbsp;02 Aug 2026
              </p>
            </div>

            {/* ===================================================
                6 — ASSURANCE
            =================================================== */}
            <div
              className="
                absolute
                left-[-125px]
                top-[101px]
                z-30
                w-[195px]
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Assurance
              </h3>

              <p className="mt-1 text-[12px] font-normal leading-4 text-slate-600">
                Basis preserved · reviewer accountable
              </p>

              <p className="mt-0.5 text-[12px] font-normal leading-4 text-cyan-900">
                Requires review&nbsp; / &nbsp;Proven
                <br />
                after validation
              </p>
            </div>

            {/* ===================================================
                2 — APPLICABILITY
            =================================================== */}
            <div
              className="
                absolute
                right-[-125px]
                top-[101px]
                z-30
                w-[195px]
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Applicability
              </h3>

              <p className="mt-1 text-[12px] font-normal leading-4 text-slate-600">
                EU entity · AI-enabled
                <br />
                customer support
              </p>

              <p className="mt-0.5 text-[12px] font-normal leading-4 text-cyan-900">
                Applies&nbsp; / &nbsp;UNCERTAIN
                <br />
                requires review
              </p>
            </div>

            {/* ===================================================
                5 — EVIDENCE
                BELOW THE 6 NUMBER
            =================================================== */}
            <div
              className="
                absolute
                left-[-95px]
                top-[500px]
                z-30
                w-[210px]
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Evidence
              </h3>

              <p className="mt-1 text-[12px] font-normal leading-4 text-slate-600">
                Notice capture · linked release record
              </p>

              <p className="mt-0.5 text-[12px] font-normal leading-4 text-cyan-900">
                Captured&nbsp; / &nbsp;05 Oct 2026 ·
                <br />
                as-of 05 Oct
              </p>
            </div>

            {/* ===================================================
                3 — OBLIGATION
                BELOW THE 3 NUMBER
            =================================================== */}
            <div
              className="
                absolute
                right-[-87px]
                top-[490px]
                z-30
                w-[205px]
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Obligation
              </h3>

              <p className="mt-1 text-[11px] font-normal leading-3 text-slate-600">
                Transparency notice · atomic requirement
              </p>

              <p className="mt-0.5 text-[12px] font-normal leading-4 text-cyan-900">
                Version 1.0&nbsp; / &nbsp;Article 50(1)
              </p>
            </div>

            {/* ===================================================
                4 — CONTROL
            =================================================== */}
            <div
              className="
                absolute
                bottom-[-48px]
                left-1/2
                z-30
                w-[220px]
                -translate-x-1/2
                text-center
              "
            >
              <h3 className="text-[16px] font-semibold leading-5 text-cyan-950">
                Control
              </h3>

              <p className="mt-1 text-[12px] font-normal leading-4 text-slate-600">
                AI interaction disclosure
              </p>

              <p className="mt-0.5 text-[12px] font-normal leading-4 text-cyan-900">
                Owner&nbsp; / &nbsp;Product compliance ·
                <br />
                release-based
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}