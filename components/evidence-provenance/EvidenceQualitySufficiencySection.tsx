"use client";

const qualityCategories = [
  {
    title: "Missing or Stale",
    description:
      "Evidence falls outside required period or has not been collected.",
  },
  {
    title: "Invalid / Conflict",
    description:
      "Validation issue or missing context requires remediation.",
  },
  {
    title: "Accepted for evaluation",
    description:
      "Confirmed to meet requirements; ready for assurance evaluation.",
  },
];

export default function EvidenceQualitySufficiencySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Evidence Quality and Sufficiency
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {qualityCategories.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col justify-start rounded-xl border border-[#F58220]/40 border-t-[3.5px] border-t-[#F58220] bg-white p-6 sm:p-7 shadow-[0px_4px_16px_0px_rgba(245,130,32,0.03)] transition-shadow duration-200 hover:shadow-md"
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
