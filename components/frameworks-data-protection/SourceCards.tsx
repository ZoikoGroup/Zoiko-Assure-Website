const cards = [
  {
    title: "GDPR",
    description:
      "Binding EU data-protection law where it applies; obligations depend on territorial reach and processing context.",
  },
  {
    title: "NIST Privacy Framework",
    description:
      "A voluntary privacy-risk management framework, not a law or a certification.",
  },
  {
    title: "ISO/IEC 27701:2025",
    description:
      "A privacy information management-system standard. Adopting its approach is not proof of certification or legal compliance.",
  },
  {
    title: "EDPB Guidance",
    description:
      "Regulatory guidance helps explain legal requirements; its status and version must be assessed in context.",
  },
];

export default function SourceCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0A2540] sm:text-[22px]">
          Law, standards and guidance serve different purposes.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border-2 border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
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
