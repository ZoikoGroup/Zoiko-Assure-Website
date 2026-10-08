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
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Heading */}
          <div className="flex w-full justify-center">
            <h2
              className="
                text-center
                text-2xl
                font-bold
                leading-8
                tracking-tight
                text-sky-900
                sm:text-3xl
                sm:leading-9
              "
            >
              Built for Moments When Compliance Must Be Defensible
            </h2>
          </div>

          {/* Cards */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:mt-12
              md:grid-cols-3
              md:gap-6
            "
          >
            {moments.map((item) => (
              <div
                key={item.title}
                className="
                  relative
                  min-h-[150px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
                "
              >
                {/* Figma background */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                  "
                  style={{
                    backgroundImage: "url('/home/bg5.png')",
                  }}
                />

                {/* Very subtle white overlay to keep text readable */}
                <div className="absolute inset-0 bg-white/10" />

                {/* Content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    min-h-[150px]
                    flex-col
                    justify-center
                    px-5
                    py-6
                    sm:px-6
                  "
                >
                  <h3
                    className="
                      text-base
                      font-bold
                      leading-6
                      text-sky-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[320px]
                      text-xs
                      font-normal
                      leading-4
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}