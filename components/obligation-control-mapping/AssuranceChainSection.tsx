"use client";

const steps = [
  { label: "Source", active: false },
  { label: "Applicability", active: false },
  { label: "Obligation", active: true },
  { label: "Control", active: true },
  { label: "Evidence", active: false },
  { label: "Assurance", active: false },
];

export default function AssuranceChainSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#172033]">
          Keep every requirement connected to its proof.
        </h2>


        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-2 lg:gap-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`flex h-12 items-center justify-center rounded-lg p-4 text-center text-[14px] leading-[22.4px] transition-all duration-200 ${
                step.active
                  ? "border border-[#006FE8] bg-white font-semibold text-[#006FE8] shadow-[0px_4px_12px_0px_rgba(0,111,232,0.1)]"
                  : "border border-[#D9E2EC] bg-white font-normal text-[#5F6B7A]"
              }`}
            >
              {step.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
