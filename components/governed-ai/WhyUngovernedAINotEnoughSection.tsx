"use client";

const failureReasons = [
  {
    title: "Source Ambiguity",
    description:
      "Fluent answers are not authoritative sources. A suggestion must preserve citations and dates.",
  },
  {
    title: "Invented Certainty",
    description:
      "Incomplete context cannot become a final determination.",
  },
  {
    title: "Lost Responsibility",
    description:
      "Automation must not obscure who accepted a consequential decision.",
  },
  {
    title: "Silent Drift",
    description:
      "Source updates and model changes can change the basis of an answer.",
  },
];

export default function WhyUngovernedAINotEnoughSection() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Why Ungoverned AI Is Not Enough
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {failureReasons.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-shadow duration-200 hover:shadow-md"
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
