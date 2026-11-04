"use client";

const pillars = [
  {
    title: "Know what changed",
    description: "With source and effective-date context.",
  },
  {
    title: "See what applies",
    description: "Including uncertainty that needs review.",
  },
  {
    title: "Connect actions",
    description: "To controls and governed evidence.",
  },
  {
    title: "Distinguish assurance",
    description: "From open exceptions and gaps.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-10 sm:-mt-12 md:-mt-14 w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
          >
            <h4 className="text-[16px] font-bold leading-tight text-[#0A2540]">
              {pillar.title}
            </h4>
            <p className="mt-2 text-[13px] sm:text-[13.5px] font-normal leading-[20px] text-[#5A6E85]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
