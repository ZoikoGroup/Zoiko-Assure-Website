"use client";

const frameworks = [
  {
    title: "EU AI Act",
    description: "Regulatory framework example",
  },
  {
    title: "ISO/IEC 42001",
    description: "Management standard example",
  },
  {
    title: "NIST AI RMF",
    description: "Risk management methodology example",
  },
];

export default function AIGovernanceFrameworks() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          AI Governance Frameworks
        </h2>
        <p className="mt-3 max-w-[768px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
          Distinguish AI rules, standards and risk methods. Reference examples
          below are for illustration—verify current legal status before
          publishing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {frameworks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
