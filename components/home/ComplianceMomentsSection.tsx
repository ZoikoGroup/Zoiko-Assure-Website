"use client";

import React from "react";

const moments = [
  {
    title: "Regulatory Change",
    description:
      "Determine applicability and impacted controls immediately upon regulatory update.",
  },
  {
    title: "New Market Entry",
    description:
      "Understand cross-border requirements before operational expansion.",
  },
  {
    title: "Regulatory Examination",
    description:
      "Assemble source-linked evidence and decision provenance for external auditors.",
  },
];

export default function ComplianceMomentsSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-20 xl:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Heading */}
          <div className="flex w-full justify-center">
            <h2 className="text-center text-2xl font-bold leading-8 tracking-tight text-sky-900 sm:text-3xl sm:leading-9">
              Built for Moments When Compliance Must Be Defensible
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {moments.map((item) => (
              <article
                key={item.title}
                className="relative isolate flex min-h-[150px] w-full flex-col justify-center overflow-hidden rounded-xl border-0 p-5 shadow-none ring-0 outline-none sm:p-6"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  filter: "none",
                }}
              >
                {/* Background image - preserved */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-xl"
                  style={{
                    backgroundImage: "url('/home/bg5.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "none",
                    filter: "none",
                  }}
                />

                {/* Content */}
                <h3 className="text-base font-bold leading-6 text-sky-900">
                  {item.title}
                </h3>

                <p className="mt-3 w-full text-xs font-normal leading-5 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}