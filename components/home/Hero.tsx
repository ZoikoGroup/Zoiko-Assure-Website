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
          gap-8
          px-4
          py-6
          sm:gap-12
          sm:px-6
          sm:py-12
          md:px-8
          md:py-14
          xl:flex-row
          xl:items-center
          xl:gap-8
          xl:px-6
          2xl:px-0
          2xl:py-[64px]
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
            xl:max-w-[580px]
            2xl:max-w-[673px]
            xl:min-h-[586px]
            xl:justify-center
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
                gap-1.5
                rounded-full
                border
                border-slate-200
                bg-slate-100
                px-2.5
                py-1
                min-[360px]:gap-2
                min-[360px]:px-3
                min-[360px]:py-1.5
              "
            >
              <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center min-[360px]:h-4 min-[360px]:w-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 min-[360px]:h-4 min-[360px]:w-4"
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
                  text-[8.5px]
                  font-semibold
                  uppercase
                  leading-tight
                  tracking-[0.03em]
                  text-sky-900
                  min-[360px]:text-[10px]
                  min-[360px]:leading-4
                  min-[360px]:tracking-[0.04em]
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
          <div className="w-full pt-4 min-[360px]:pt-5 sm:pt-8 lg:pt-6">
            <h1
              className="
                text-[26px]
                font-extrabold
                leading-[33px]
                tracking-tight
                text-sky-900
                min-[360px]:text-[30px]
                min-[360px]:leading-[37px]
                min-[410px]:text-[36px]
                min-[410px]:leading-[43px]
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
          <div className="w-full pt-3.5 min-[360px]:pt-4 sm:pt-8 lg:pt-6">
            <p
              className="
                w-full
                max-w-[672px]
                text-[15px]
                font-normal
                leading-[25px]
                text-slate-600
                sm:text-lg
                sm:leading-7
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
              pt-4
              min-[360px]:pt-5
              sm:flex-row
              sm:items-center
              sm:gap-4
              sm:pt-8
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="#regulatory-exposure"
              className="
                inline-flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-sky-900
                px-5
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
                sm:w-auto
                sm:px-6
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
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-gray-400
                bg-transparent
                px-5
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
                sm:w-auto
                sm:px-6
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
              gap-x-5
              gap-y-2.5
              pt-6
              sm:gap-x-6
              sm:gap-y-3
              sm:pt-8
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
            MOBILE DIAGRAM (< md / < 768px):
            Prominent central graphic + 6 readable process cards
        ======================================================= */}
        <div className="flex w-full flex-col items-center md:hidden">
          {/* Centered Graphic (Hexagonal Process Ring + Globe) */}
          <div className="relative mx-auto my-2 h-[260px] w-[260px] min-[360px]:h-[280px] min-[360px]:w-[280px]">
            {/* Hexagon Ring with arrows & markers 1-6 */}
            <div className="absolute inset-0">
              <Image
                src="/home/hero.png"
                alt="Regulatory Continuous Assurance Cycle"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Central Globe */}
            <div className="absolute left-1/2 top-[51%] w-[94px] -translate-x-1/2 -translate-y-1/2 min-[360px]:w-[100px]">
              <Image
                src="/home/globe.png"
                alt=""
                width={100}
                height={100}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* 6 Process Stages (Legible Cards with Number Badges matching 1-6) */}
          <div className="mt-4 grid w-full grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
            {/* 1 — Regulatory Source */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  1
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Regulatory Source
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                EU AI Act · EUR-Lex · source verified
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Effective date&nbsp; / &nbsp;02 Aug 2026
              </p>
            </div>

            {/* 2 — Applicability */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  2
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Applicability
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                EU entity · AI-enabled customer support
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Applies&nbsp; / &nbsp;UNCERTAIN requires review
              </p>
            </div>

            {/* 3 — Obligation */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  3
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Obligation
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                Transparency notice · atomic requirement
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Version 1.0&nbsp; / &nbsp;Article 50(1)
              </p>
            </div>

            {/* 4 — Control */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  4
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Control
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                AI interaction disclosure
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Owner&nbsp; / &nbsp;Product compliance · release-based
              </p>
            </div>

            {/* 5 — Evidence */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  5
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Evidence
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                Notice capture · linked release record
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Captured&nbsp; / &nbsp;05 Oct 2026 · as-of 05 Oct
              </p>
            </div>

            {/* 6 — Assurance */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white shadow-sm">
                  6
                </span>
                <h3 className="text-[13px] font-bold leading-tight text-cyan-950">
                  Assurance
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                Basis preserved · reviewer accountable
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cyan-900">
                Requires review&nbsp; / &nbsp;Proven after validation
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            DESKTOP & TABLET VIEW (md:flex / hidden on mobile):
            The exact untouched diagram layout
        ======================================================= */}
        <div className="hidden md:flex hero-diagram-wrapper">
          <div className="hero-diagram-inner">
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

      <style>{`
        @media (max-width: 767px) {
          .hero-diagram-wrapper {
            display: none !important;
          }
        }

        @media (min-width: 768px) {
          .hero-diagram-wrapper {
            --diagram-scale: 0.90;
            position: relative;
            display: flex;
            width: 100%;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            overflow: visible;
            height: calc(675px * var(--diagram-scale));
            min-height: calc(675px * var(--diagram-scale));
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (min-width: 820px) {
          .hero-diagram-wrapper {
            --diagram-scale: 0.96;
          }
        }

        @media (min-width: 1024px) {
          .hero-diagram-wrapper {
            --diagram-scale: 1;
            height: 600px;
            min-height: 600px;
          }
        }

        @media (min-width: 1280px) {
          .hero-diagram-wrapper {
            --diagram-scale: 0.82;
            width: 525px;
            height: 600px;
            min-height: 600px;
          }
        }

        @media (min-width: 1440px) {
          .hero-diagram-wrapper {
            --diagram-scale: 0.94;
            width: 525px;
            height: 600px;
            min-height: 600px;
          }
        }

        /* CRITICAL: Baseline laptop (1536px) and full desktop (1920px) preservation */
        @media (min-width: 1536px) {
          .hero-diagram-wrapper {
            --diagram-scale: 1;
            width: 525px;
            height: 600px;
            min-height: 600px;
          }
        }

        .hero-diagram-inner {
          position: relative;
          width: 525px;
          height: 600px;
          max-width: none;
          overflow: visible;
          transform-origin: center center;
          transform: scale(var(--diagram-scale, 1));
        }

        @media (min-width: 1536px) {
          .hero-diagram-inner {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}