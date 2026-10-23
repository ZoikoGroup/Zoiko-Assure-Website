"use client";

const pillars = [
  {
    title: "Source Authority",
    description:
      "Every change begins with an attributable regulatory source and version.",
  },
  {
    title: "Contextual Applicability",
    description:
      "Scope depends on entity, activity, jurisdiction, product, data and time.",
  },
  {
    title: "Operational Ownership",
    description:
      "A change is routed to accountable obligations, controls and review.",
  },
  {
    title: "Evidence Before Conclusion",
    description:
      "Assurance must be tied to operating evidence and evaluation time.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-8 w-full max-w-[1280px] px-4 sm:-mt-10 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col justify-start rounded-lg border border-t-4 border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {pillar.title}
            </h4>
            <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
