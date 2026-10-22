"use client";

const items = [
  {
    title: "Authority",
    description:
      "Issued by the identified official regulator, supervisory agency, or authorized public body.",
  },
  {
    title: "Instrument Type",
    description:
      "Enforcement action, final decision, settlement, supervisory guidance, or consultation.",
  },
  {
    title: "Procedural State",
    description:
      "Proposed, pending, final, stayed, appealed, withdrawn, or superseded.",
  },
  {
    title: "Timing",
    description:
      "Issued on, published on, operative/effective from, last reviewed and platform observed-at.",
  },
  {
    title: "Interpretation",
    description:
      "Reviewed summary supports research; primary source and qualified human legal analysis govern.",
  },
];

export default function SupervisoryFloatingCards() {
  return (
    <section className="relative z-10 mx-auto -mt-8 w-full max-w-[1280px] px-4 sm:-mt-10 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4">
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
