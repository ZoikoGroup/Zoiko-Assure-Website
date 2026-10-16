"use client";

const connectionSteps = [
  {
    title: "Evaluate",
    description: "Check source scope.",
  },
  {
    title: "Authorize",
    description: "Least privilege.",
  },
  {
    title: "Validate",
    description: "Test connectivity.",
  },
  {
    title: "Map",
    description: "Link to control.",
  },
  {
    title: "Operate",
    description: "Monitor sync health.",
  },
  {
    title: "Retire",
    description: "Revoke access.",
  },
];

export default function ConnectionLifecycleSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-14 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[26px] font-bold tracking-tight text-[#0A2540]">
          Connection Lifecycle
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-3 lg:gap-4">
          {connectionSteps.map((step) => (
            <div
              key={step.title}
              className="flex min-h-[96px] flex-col justify-start rounded-xl border border-[#D9E2EC] bg-white p-5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] sm:text-[15.5px] font-bold leading-tight text-[#0A2540]">
                {step.title}
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13px] font-normal leading-[18px] text-[#5A6E85]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
