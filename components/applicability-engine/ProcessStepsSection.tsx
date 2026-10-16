"use client";

const processSteps = [
  {
    step: "1. Locate source",
    description: "Find cited requirement.",
    isActive: false,
  },
  {
    step: "2. Establish context",
    description: "Map organizational facts.",
    isActive: true,
  },
  {
    step: "3. Evaluate scope",
    description: "Assess rule period.",
    isActive: false,
  },
  {
    step: "4. Outcome & Why",
    description: "Applies / Does not apply / UNCERTAIN.",
    isActive: false,
  },
  {
    step: "5. Accountable review",
    description: "Route for decision.",
    isActive: false,
  },
];

export default function ProcessStepsSection() {
  return (
    <section id="evaluation-model" className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
          From source context to a reviewable decision.
        </h2>

        {/* Process Step Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className={`flex h-[121px] flex-col items-center justify-center rounded-lg bg-white p-6 text-center transition-all duration-200 ${
                item.isActive
                  ? "border border-[#006FE8] shadow-[0px_4px_12px_0px_rgba(0,111,232,0.1)]"
                  : "border border-[#D9E2EC] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
              }`}
            >
              <h5
                className={`text-[13.28px] font-semibold leading-[15.94px] text-center ${
                  item.isActive ? "text-[#006FE8]" : "text-[#172033]"
                }`}
              >
                {item.step}
              </h5>
              <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
