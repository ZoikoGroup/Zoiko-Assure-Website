"use client";

import React from "react";
import Link from "next/link";

export default function RegulatoryExposureCTA() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-slate-200
      "
    >
      {/* Background image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/home/bg6.png')",
        }}
      />

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[420px]
          w-full
          max-w-[1440px]
          items-center
          justify-center
          px-5
          py-16
          sm:px-8
          md:min-h-[460px]
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        {/* White CTA card */}
        <div
          className="
            w-full
            max-w-[768px]
            rounded-2xl
            border
            border-amber-600/20
            bg-white
            p-7
            shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),0px_10px_15px_-3px_rgba(0,0,0,0.10)]
            sm:p-8
            md:p-10
          "
        >
          {/* Heading */}
          <div className="flex w-full justify-center">
            <h2
              className="
                max-w-[680px]
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
              See Your Regulatory Exposure in 3 Minutes
            </h2>
          </div>

          {/* Description */}
          <div className="mt-5 flex w-full justify-center sm:mt-6">
            <p
              className="
                max-w-[686px]
                text-center
                text-sm
                font-normal
                leading-5
                text-slate-600
              "
            >
              Build an initial, explainable profile based on your operating
              jurisdictions, sector, and evidence maturity. No registration
              required for initial view.
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 flex w-full justify-center">
            <Link
              href="/regulatory-exposure"
              className="
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                rounded-lg
                bg-sky-900
                px-8
                py-3.5
                text-center
                text-sm
                font-semibold
                leading-5
                text-white
                transition-all
                duration-200
                hover:bg-sky-950
                focus:outline-none
                focus:ring-2
                focus:ring-sky-900
                focus:ring-offset-2
              "
            >
              Start 3-Min Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}