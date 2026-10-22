"use client";

import { useState } from "react";

export default function SixStageAIGovernancePath() {
  const [activeStage, setActiveStage] = useState("Assurance");

  const stages = [
    { name: "Regulatory Source" },
    { name: "Applicability" },
    { name: "Obligation" },
    { name: "Control" },
    { name: "Evidence" },
    { name: "Assurance" },
  ];

  return (
    <section id="ai-governance-workflow" className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            The Six-Stage AI Governance Path
          </h2>
        </div>

        {/* Horizontal Chain */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage) => {
            const isSelected = activeStage === stage.name;
            return (
              <button
                key={stage.name}
                type="button"
                onClick={() => setActiveStage(stage.name)}
                className={`flex h-12 items-center justify-center rounded-[8px] bg-white px-4 text-center transition-all duration-200 ${
                  isSelected
                    ? "border border-[#D97637] shadow-[0px_4px_12px_0px_rgba(217,118,55,0.12)]"
                    : "border border-[#D9E2EC] hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <span
                  className={`text-[14px] leading-tight ${
                    isSelected
                      ? "font-semibold text-[#D97637]"
                      : "font-normal text-[#5F6B7A]"
                  }`}
                >
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
