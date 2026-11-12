"use client";

const complianceSources = [
  {
    title: "ISO 37301:2021 — Compliance management systems",
    description:
      "A management-system requirements standard with guidance for organizations. Adoption or a mapped control does not itself establish accredited certification.",
  },
  {
    title: "ISO 37001:2025 — Anti-bribery management",
    description:
      "Addresses anti-bribery controls as a distinct management-system scope.",
  },
  {
    title: "How U.S. authorities evaluate program effectiveness",
    description:
      "The U.S. Department of Justice considers program design, resourcing and real-world operation in case-specific contexts.",
  },
  {
    title: "U.S. organizational sentencing guidance",
    description:
      "Guideline §8B2.1 describes elements of an effective compliance and ethics program in its specified U.S. sentencing context.",
  },
  {
    title: "Good practice for anti-bribery controls",
    description:
      "OECD guidance supports risk-based controls and ethical conduct; it is not universal domestic law.",
  },
  {
    title: "UK anti-bribery legal and guidance context",
    description:
      "The Bribery Act and accompanying government guidance are distinct; no procedure guarantees the outcome of a legal defense.",
  },
];

export default function ComplianceRequirementsGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Understand what each source actually requires
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {complianceSources.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#0066FF]/40 border-t-[3px] border-t-[#0066FF] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
