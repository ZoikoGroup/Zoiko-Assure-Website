"use client";

const steps = [
  {
    label: "1. Request Intake",
    highlight: false,
  },
  {
    label: "2. Regulatory Source",
    highlight: false,
  },
  {
    label: "3. Applicability",
    highlight: false,
  },
  {
    label: "4. Control Operation",
    highlight: false,
  },
  {
    label: "5. Evidence / Sufficiency",
    highlight: false,
  },
  {
    label: "6. Release Decision",
    highlight: false,
  },
  {
    label: "7. Package / Delivery",
    highlight: true,
  },
];

export default function JourneyStepsSection() {
  return (
    <section id="workflow" className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          The Request-to-Response Journey
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`flex min-h-[79px] items-center justify-center rounded-[8px] bg-white p-4 text-center transition-all duration-200 ${
                step.highlight
                  ? "border border-[#D97637] shadow-[0px_4px_12px_0px_rgba(0,111,232,0.1)]"
                  : "border border-[#D9E2EC]"
              }`}
            >
              <span
                className={`text-[14px] leading-[22.4px] ${
                  step.highlight
                    ? "font-semibold text-[#D97637]"
                    : "font-normal text-[#5F6B7A]"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
