"use client";

import { useState } from "react";

type RoleLens = {
  id: string;
  label: string;
  question: string;
};

const roleLenses: RoleLens[] = [
  {
    id: "cco",
    label: "CCO",
    question: "Are all applicable regulatory obligations covered by active operational controls, and where are the unmapped gaps?",
  },
  {
    id: "gc",
    label: "General Counsel",
    question: "Can we defend our interpretation, control assignments, and reviewer approvals during formal regulatory inquiries?",
  },
  {
    id: "cro",
    label: "CRO",
    question: "Where are the critical coverage gaps, unmapped residual risks, and operational vulnerabilities across our legal entity boundaries?",
  },
  {
    id: "cfo",
    label: "CFO / Audit Committee",
    question: "Is there demonstrable, audit-ready evidence supporting continuous compliance assurance for financial and operational controls?",
  },
];

export default function RoleResponsibilitiesSection() {
  const [activeTab, setActiveTab] = useState("cco");

  const currentRole = roleLenses.find((r) => r.id === activeTab) || roleLenses[0];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <h2 className="text-center text-2xl font-semibold leading-[28.8px] text-[#172033] md:text-3xl md:leading-[36px]">
          A shared chain, different responsibilities.
        </h2>

        {/* Role Tabs */}
        <div className="mt-8 flex justify-center border-b-2 border-[#D9E2EC]">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {roleLenses.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveTab(role.id)}
                className={`-mb-[2px] pb-4 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 ${
                  activeTab === role.id
                    ? "border-b-2 border-[#006FE8] text-[#006FE8]"
                    : "border-b-2 border-transparent text-[#5F6B7A] hover:text-[#172033]"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Central Card */}
        <div className="mx-auto mt-8 w-full max-w-[800px] rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
          <p className="text-center text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            Reveal common underlying facts through four buyer-specific questions. Select a role lens to shift explanatory emphasis without altering the underlying operational or mapping record.
          </p>
        </div>

      </div>
    </section>
  );
}
