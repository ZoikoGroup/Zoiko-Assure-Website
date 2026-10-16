"use client";

import { useState } from "react";
import Link from "next/link";

const rolesData = [
  {
    id: "cro",
    label: "CRO",
    content:
      "Where scope is contested, view the uncertainty and unresolved review queues tied directly to contextual differences.",
  },
  {
    id: "gc",
    label: "General Counsel",
    content:
      "Track exact regulatory source authorities, jurisdictional applicability boundaries, and defensible audit trails for every cited requirement.",
  },
  {
    id: "cco",
    label: "CCO",
    content:
      "Identify obligations in scope across business units, map responsible control owners, and surface compliance gaps before supervisory review.",
  },
  {
    id: "cfo",
    label: "CFO / Audit Committee",
    content:
      "Gain institutional visibility into continuous assurance posture, residual regulatory risk exposure, and governance oversight metrics.",
  },
];

export default function RoleQuestionsSection() {
  const [activeRole, setActiveRole] = useState("cro");

  const currentRole = rolesData.find((r) => r.id === activeRole) || rolesData[0];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl font-semibold leading-[28.8px] text-[#172033]">
          One evidence base. Different questions for accountable leaders.
        </h2>

        {/* Tab Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-b-2 border-[#D9E2EC] sm:gap-4">
          {rolesData.map((role) => {
            const isActive = activeRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`relative px-4 py-3 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 sm:px-6 sm:py-4 ${
                  isActive
                    ? "text-[#006FE8]"
                    : "text-[#5F6B7A] hover:text-[#172033]"
                }`}
              >
                {role.label}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#006FE8]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Role Content Card */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-[800px] rounded-lg border border-[#D9E2EC] bg-white p-6 sm:p-8 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
            <p className="min-h-[52px] text-center text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              {currentRole.content}
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
