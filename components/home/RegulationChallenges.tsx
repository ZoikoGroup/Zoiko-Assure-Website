"use client";

import type { ReactNode } from "react";

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

function ContextIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5.5L12 2.5L20 5.5L12 8.5L4 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 10L12 13L20 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 14.5L12 17.5L20 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 5V10C5 11.66 8.13 13 12 13C15.87 13 19 11.66 19 10V5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 10V15C5 16.66 8.13 18 12 18C15.87 18 19 16.66 19 15V10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 15V19C5 20.66 8.13 22 12 22C15.87 22 19 20.66 19 19V15"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M2.5 20C2.5 16.96 4.96 14.5 8 14.5C10.1 14.5 11.94 15.67 12.87 17.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="18"
        cy="10"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M15 21C15 18.51 17.01 16.5 19.5 16.5C20.38 16.5 21.2 16.75 21.89 17.18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cards: Card[] = [
  {
    title: "What Applies is Contextual",
    description:
      "Jurisdiction, entity, activity, product, data, customer type, and effective dates continuously alter legal obligations.",
    icon: <ContextIcon />,
  },
  {
    title: "Evidence is Fragmented",
    description:
      "Controls operate across scattered IAM, HRIS, ERP, security, and cloud tools — making audit proof hard to reconstruct.",
    icon: <EvidenceIcon />,
  },
  {
    title: "Accountability Stays Human",
    description:
      "AI can accelerate analysis, but regulated decisions require source grounding, explicit uncertainty handling, and accountable human review.",
    icon: <HumanIcon />,
  },
];

export default function RegulationChallenges() {
  return (
    <section
      className="
        w-full
        bg-slate-50
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-6
          py-16
          sm:px-8
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        {/* =====================================================
            CONTENT WRAPPER
        ====================================================== */}

        <div
          className="
            flex
            w-full
            max-w-[1280px]
            flex-col
            self-center
          "
        >
          {/* ===================================================
              HEADING + DESCRIPTION
          ==================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-4
              "
            >
              <h2
                className="
                  w-full
                  text-3xl
                  font-bold
                  leading-10
                  tracking-[-0.02em]
                  text-sky-900
                  sm:text-4xl
                  sm:leading-10
                "
              >
                Regulation Changes Continuously. Your Proof Cannot Be
                Periodic.
              </h2>

              <div className="w-full pt-1 sm:pt-2 lg:pt-4">
                <p
                  className="
                    max-w-[947px]
                    text-sm
                    font-normal
                    leading-6
                    text-slate-600
                    sm:text-base
                  "
                >
                  Enterprises do not fail assurance because they lack
                  policies. They fail when regulatory change, applicability,
                  controls, evidence, and accountability become disconnected.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              CARDS
          ==================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-6
              sm:mt-14
              md:grid-cols-2
              lg:mt-16
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {cards.map((card) => (
              <article
                key={card.title}
                className="
                  relative
                  min-h-[300px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
                "
              >
                {/* =================================================
                    FIGMA CARD BACKGROUND
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white
                    bg-cover
                    bg-center
                    bg-no-repeat
                  "
                  style={{
                    backgroundImage: "url('/home/bg.png')",
                  }}
                />

                {/* Very subtle overlay to keep text readable */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/10
                  "
                />

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[300px]
                    flex-col
                    items-start
                    p-6
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* =================================================
                      ICON BOX
                  ================================================== */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-amber-600/25
                      text-amber-600
                    "
                  >
                    {card.icon}
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <div className="pt-3">
                    <h3
                      className="
                        text-lg
                        font-bold
                        leading-7
                        text-sky-900
                      "
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <div className="pt-3">
                    <p
                      className="
                        max-w-[320px]
                        text-sm
                        font-normal
                        leading-6
                        text-slate-600
                      "
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}