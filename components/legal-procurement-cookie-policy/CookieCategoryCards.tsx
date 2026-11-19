"use client";

const categoryCards = [
  {
    title: "Strictly necessary",
    description: "Purpose / examples: source-gated.",
  },
  {
    title: "Analytics",
    description: "Default / basis: source-gated.",
  },
  {
    title: "Functional / Marketing",
    description: "Only if verified and approved.",
  },
];

export default function CookieCategoryCards() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-4 sm:pb-6">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categoryCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-bold leading-tight text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-2 text-[13px] sm:text-[13.5px] font-normal leading-[1.6] text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
