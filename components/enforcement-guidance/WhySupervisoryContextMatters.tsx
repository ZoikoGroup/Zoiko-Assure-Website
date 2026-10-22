"use client";

const items = [
  {
    title: "Supervisory context is not self-evident",
    description:
      "Actions can concern particular facts, entities, legal provisions and periods. Without provenance, a case can be overgeneralized.",
  },
  {
    title: "Guidance may not equal binding law",
    description:
      "Official guidance and interpretive commentary can inform expectations without independently creating a universal statutory duty.",
  },
  {
    title: "Dates change practical meaning",
    description:
      "Publication, effect, appeal and supersession may occur at different times.",
  },
  {
    title: "Operational response needs context",
    description:
      "Organizations still need contextual applicability review, mapped controls, proof and accountable decisions.",
  },
];

export default function WhySupervisoryContextMatters() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Why Supervisory Context Matters
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal italic leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
