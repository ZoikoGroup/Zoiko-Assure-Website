"use client";

const problemCards = [
  {
    title: "Orphaned Obligations",
    description: "Requirements without clear control responses.",
  },
  {
    title: "Inconsistent Ownership",
    description: "Unclear separation of duties.",
  },
  {
    title: "Untested Assumptions",
    description: "Mapping assumed as proven compliance.",
  },
];

export default function RegulationsOperateSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex max-w-[800px] flex-col items-start text-left">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
            Regulations do not operate controls. Teams do.
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            A published requirement, an internal policy and a technical control are different objects. Without a governed link among them, teams can lose track of scope, ownership, changes and proof.
          </p>
        </div>


        {/* 3 Problem Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {problemCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold leading-[19.2px] text-[#172033]">
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
