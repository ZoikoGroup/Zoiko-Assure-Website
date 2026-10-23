"use client";

const leftStages = [
  {
    title: "Diligence / Baseline",
    description:
      "Determine current entities, activities, authoritative requirements and available controls.",
  },
  {
    title: "Signing / Pre-Close",
    description:
      "Evaluate change-of-control consequences and source/approval dependencies with counsel.",
  },
  {
    title: "Day-One / Transition",
    description:
      "Assign interim control owners, retain evidence lineage and identify operational gaps.",
  },
];

const rightStages = [
  {
    title: "Post-Close / Integration",
    description:
      "Review actual control operation and compare evidence to the relevant period.",
  },
  {
    title: "Divestiture / Carve-Out",
    description:
      "Identify separation boundaries, retained services and evidence custody.",
  },
];

export default function LifecycleSection() {
  return (
    <section id="transition-lifecycle" className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading, Intro, and Stages 1-3 */}
          <div>
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
              Transaction / Transformation Lifecycle
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Explore the M&A assurance model from diligence to post-close integration.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {leftStages.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-r-lg border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
                >
                  <h5 className="text-[13.3px] font-semibold leading-[16px] text-[#0A2540]">
                    {stage.title}
                  </h5>
                  <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stages 4-5 */}
          <div className="flex flex-col gap-4 lg:pt-[104px]">
            {rightStages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-r-lg border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <h5 className="text-[13.3px] font-semibold leading-[16px] text-[#0A2540]">
                  {stage.title}
                </h5>
                <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
