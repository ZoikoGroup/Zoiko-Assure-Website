"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExplainableAnswerSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              Understand the answer, not just the result.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              An explainable applicability view brings together the cited source, relevant organizational facts, temporal scope, assessment state and accountable next step.
            </p>
            <div className="mt-6">
              <Link
                href="#why-panel"
                className="inline-flex items-center justify-center rounded-[4px] px-[26px] py-3 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 hover:bg-[#EB8D2C]/5"
                style={{
                  color: "rgba(235, 141, 44, 1)",
                  border: "1px solid rgba(235, 141, 44, 1)",
                }}
              >
                Open Why panel
              </Link>
            </div>
          </div>

          {/* Right Column: UI Graphic */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/409.91] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/applicability-workspace-ui.png"
                alt="Applicability Workspace UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
