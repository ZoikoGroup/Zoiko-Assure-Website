const cards = [
  {
    title: "Banking and prudential supervision",
    description:
      "Banking supervisory principles provide a reference point; local prudential law and supervisory requirements govern obligations.",
  },
  {
    title: "Financial crime and AML/CFT",
    description:
      "FATF sets international AML/CFT/CPF standards; institutions must examine applicable national requirements.",
  },
  {
    title: "Securities and market conduct",
    description:
      "Securities principles guide regulatory systems; specific issuer and intermediary duties require local sources.",
  },
  {
    title: "Insurance and policyholder protection",
    description:
      "Insurance supervisory principles guide robust oversight and are not insurer certification.",
  },
  {
    title: "Recovery, resolution and stability",
    description:
      "Resolution standards describe capabilities expected of national resolution regimes.",
  },
];

export default function PrincipleCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0A2540] sm:text-[22px]">
          International frameworks and principles
        </h2>
        <p className="mt-8 max-w-[760px] text-[14px] leading-6 text-[#5A6E85]">
          Browse financial regulatory topics by sector; not every standard creates a legal
          obligation. International standard — confirm local legal implementation.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border-2 border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-5 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
