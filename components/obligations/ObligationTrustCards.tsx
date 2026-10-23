const signals = [
  {
    title: "Authority",
    description: "Original source and provision.",
  },
  {
    title: "Jurisdiction",
    description: "Scope depends on location and legal entity.",
  },
  {
    title: "Legal Timing",
    description: "Published date is not effective date.",
  },
  {
    title: "Context",
    description: "Applicability requires business facts.",
  },
  {
    title: "Reviewer",
    description: "Human-reviewed summaries evidenced.",
  },
  {
    title: "Evidence",
    description: "Obligation is not proof of control performance.",
  },
];

export default function ObligationTrustCards() {
  return (
    <section className="relative z-10 w-full px-4 pt-8 sm:px-6 md:px-8 lg:-mt-[30px] lg:px-0 lg:pb-0 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-start rounded-[8px] border border-t-4 border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {signal.title}
            </h4>
            <p className="pb-6 pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A] lg:w-[150px]">
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
