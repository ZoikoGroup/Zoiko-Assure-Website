"use client";

const integrationPillars = [
  {
    title: "Enterprise Source",
    description: "Source objects subject to approved rights.",
  },
  {
    title: "Integration Control",
    description: "Tenant permission scopes and connection health.",
  },
  {
    title: "Evidence Record",
    description: "Preserved lineage and explicit timestamps.",
  },
  {
    title: "Control Relation",
    description: "Mapped controls and evidence requirements.",
  },
];

export default function ConnectEvidenceSection() {
  return (
    <section id="integration-model" className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Connect the Evidence. Preserve the Context.
        </h2>

        <p className="mt-4 max-w-[880px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
          Operational systems may produce records relevant to controls. ZoikoAssure&apos;s governed integration model is intended to preserve where data came from, how it maps to an obligation/control and what remains to be evaluated.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {integrationPillars.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col justify-start rounded-xl border border-[#006FE8] bg-white p-6 sm:p-7 shadow-[0px_2px_8px_0px_rgba(0,111,232,0.06)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold leading-tight text-[#0A2540]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
