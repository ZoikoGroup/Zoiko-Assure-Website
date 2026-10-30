"use client";

const items = [
  {
    title: "Ownership",
    description: "Accountable functions and reviewers.",
  },
  {
    title: "Scope",
    description: "Applicable platform and environment limits.",
  },
  {
    title: "Currentness",
    description: "Review dates and evidence validity.",
  },
  {
    title: "Proof Distinction",
    description: "Policies vs. implementation evidence.",
  },
];

export default function SecurityFloatingCards() {
  return (
    <section className="relative z-10 mx-auto -mt-8 w-full max-w-[1280px] px-4 sm:-mt-10 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {item.title}
            </h4>
            <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
