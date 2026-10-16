"use client";

const capabilities = [
  {
    title: "Cross-Border Applicability",
    description:
      "AI outlines possible issues across jurisdictions and flags uncertainty for Counsel review. Not automatic legal resolution.",
  },
  {
    title: "Regulatory Change",
    description:
      "AI assists with affected-obligation summaries so control owners can validate impact. No assurance status is changed by a suggestion.",
  },
  {
    title: "Examination Prep",
    description:
      "Summarize gaps and review evidence lineage to prepare a governed response. No guaranteed examination outcome.",
  },
];

export default function TieCapabilitySection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Tie Capability to Regulatory Work
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col justify-start rounded-xl border border-[#D9E2EC] bg-white p-6 sm:p-7 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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
