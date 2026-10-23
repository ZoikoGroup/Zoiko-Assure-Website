"use client";

import { useState } from "react";

const stages = [
  "Regulatory Source",
  "Applicability",
  "Obligation",
  "Control",
  "Evidence",
  "Assurance",
];

export default function WorkflowStagesSection() {
  const [activeStage, setActiveStage] = useState(1); // Default to index 1 ("Applicability") based on the image

  return (
    <section
      id="workflow"
      className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          The Six-Stage Expansion Readiness Chain
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stages.map((label, index) => {
            const isActive = activeStage === index;
            return (
              <button
                type="button"
                key={label}
                onClick={() => setActiveStage(index)}
                className={`flex min-h-[79px] cursor-pointer items-center justify-center rounded-[8px] bg-white p-4 text-center transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "border border-[#D97637] shadow-[0px_4px_12px_0px_rgba(0,111,232,0.1)]"
                    : "border border-[#D9E2EC] hover:border-[#D97637]/50"
                }`}
              >
                <span
                  className={`text-[14px] leading-[22.4px] transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-[#D97637]"
                      : "font-normal text-[#5F6B7A] hover:text-[#D97637]"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer note/disclaimer matching the image layout */}
        <div className="mt-8 text-center">
          <p className="text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
            An applicability decision does not grant market-entry authorization
            or regulatory licensing.
          </p>
        </div>
      </div>
    </section>
  );
}
