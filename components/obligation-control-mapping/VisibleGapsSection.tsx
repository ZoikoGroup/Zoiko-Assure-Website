"use client";

const gapCards = [
  {
    title: "Unmapped Obligation",
    description: "Identify uncovered requirements requiring action.",
  },
  {
    title: "Mapping Gap / Overlap",
    description: "Scope mismatch prompts control redesign.",
  },
  {
    title: "Exception / Accepted Risk",
    description: "Separated governance lane; NOT proof.",
  },
];

export default function VisibleGapsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex max-w-[800px] flex-col items-start text-left">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033] md:text-3xl md:leading-[36px]">
            Make the gaps visible.
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            A missing or partial mapping should prompt review. A documented risk acceptance may be governed, but it does not supply missing control evidence.
          </p>
        </div>


        {/* 3 Gap Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {gapCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-lg border border-t-4 border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
