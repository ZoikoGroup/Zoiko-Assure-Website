const signals = [
  {
    title: "Primary-Source Linked",
    description: "Link to verified authority registry or methodology.",
  },
  {
    title: "Scope-Qualified",
    description: "Identify included sectors, topics and regulation types.",
  },
  {
    title: "Date-Aware",
    description: "Every substantive claim names issue/effective/review semantics.",
  },
  {
    title: "Human Reviewed",
    description: "Authorized reviewer role/date shown only when review occurred.",
  },
];

export default function TrustSignalCards() {
  return (
    <section className="relative z-10 w-full px-4 pt-8 sm:px-6 md:px-8 lg:-mt-[30px] lg:px-0 lg:pb-9 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-start rounded-[8px] border border-t-4 border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {signal.title}
            </h4>
            <p className="pb-6 pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
