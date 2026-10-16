"use client";

import Link from "next/link";

const integrationCategories = [
  "IAM / ERP",
  "HRIS",
  "Ticketing",
  "Storage",
];

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              <span className="sm:whitespace-nowrap">Connect control systems without losing</span>
              <br />
              accountability.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              <span className="sm:whitespace-nowrap">Where supported, organizations can link operational systems and governed</span>
              <br />
              <span className="sm:whitespace-nowrap">evidence sources to the controls they manage; the mapping retains</span>
              <br />
              <span className="sm:whitespace-nowrap">ownership, source reference and review status.</span>
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
              >
                Discuss Integrations
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of System Cards */}
          <div className="grid grid-cols-2 gap-4">
            {integrationCategories.map((system) => (
              <div
                key={system}
                className="flex h-[76px] items-center justify-center rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <span className="text-[16px] font-normal text-[#172033]">
                  {system}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
