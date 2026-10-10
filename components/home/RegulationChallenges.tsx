"use client";

import type { ReactNode } from "react";

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

function ContextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5L12 2.5L20 5.5L12 8.5L4 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 10L12 13L20 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 14.5L12 17.5L20 14.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
      <path d="M5 5V10C5 11.66 8.13 13 12 13C15.87 13 19 11.66 19 10V5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 10V15C5 16.66 8.13 18 12 18C15.87 18 19 16.66 19 15V10" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15V19C5 20.66 8.13 22 12 22C15.87 22 19 20.66 19 19V15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M2.5 20C2.5 16.96 4.96 14.5 8 14.5C10.1 14.5 11.94 15.67 12.87 17.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M15 21C15 18.51 17.01 16.5 19.5 16.5C20.38 16.5 21.2 16.75 21.89 17.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
    <section className="w-full bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-20 xl:py-20">
        <div className="flex w-full max-w-[1280px] flex-col self-center">
          {/* Heading and description */}
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="w-full text-2xl font-bold leading-8 tracking-[-0.02em] text-sky-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
                Regulation Changes Continuously. Your Proof Cannot Be
                Periodic.
              </h2>

              <div className="w-full pt-1 sm:pt-2">
                <p className="max-w-[947px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
                  Enterprises do not fail assurance because they lack
                  policies. They fail when regulatory change, applicability,
                  controls, evidence, and accountability become disconnected.
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className="relative isolate min-h-[260px] sm:min-h-[280px] overflow-hidden rounded-xl border-0 bg-transparent shadow-none outline-none"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  filter: "none",
                }}
              >
                {/* Background image preserved */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/home/bg.png')",
                    boxShadow: "none",
                    filter: "none",
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 flex min-h-[260px] sm:min-h-[280px] h-full flex-col items-start p-5 sm:p-6 lg:p-7">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-600/25 text-amber-600">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <div className="pt-3">
                    <h3 className="text-lg font-bold leading-7 text-sky-900">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="pt-2">
                    <p className="w-full text-sm font-normal leading-6 text-slate-600">
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