"use client";

const steps = [
  { label: "Regulatory Source", active: false },
  { label: "Applicability", active: false },
  { label: "Obligation", active: false },
  { label: "Control", active: false },
  { label: "Evidence", active: true },
  { label: "Assurance", active: false },
];

export default function AssuranceChainSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-14 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[26px] font-bold tracking-tight text-[#0A2540]">
          Every Record Has a Place in the Assurance Chain.
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-3 lg:gap-4">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`flex h-12 items-center justify-center rounded-lg px-3 py-2 text-center text-[13.5px] sm:text-[14px] leading-snug transition-all duration-200 ${
                step.active
                  ? "border-2 border-[#006FE8] bg-white font-bold text-[#006FE8] shadow-[0px_4px_12px_0px_rgba(0,111,232,0.12)]"
                  : "border border-[#D9E2EC] bg-white font-medium text-[#5F6B7A] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
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
