"use client";

const pillars = [
  {
    title: "Authoritative Sources",
    description: "Grounding assistance in verifiable authority.",
  },
  {
    title: "Clear Reasoning",
    description: "Providing source-linked explanatory summaries.",
  },
  {
    title: "Reviewable Uncertainty",
    description: "Making limitations explicit for human review.",
  },
  {
    title: "Accountable Decisions",
    description: "Keeping material choices human-driven.",
  },
  {
    title: "Decision Provenance",
    description: "Tracing evidence to authoritative conclusions.",
  },
  {
    title: "Governed Changes",
    description: "Evaluating policy and model updates responsibly.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-8 md:-mt-10 lg:-mt-12 w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col justify-start rounded-lg border-t-4 border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {pillar.title}
            </h4>
            <p className="pt-4 pb-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
