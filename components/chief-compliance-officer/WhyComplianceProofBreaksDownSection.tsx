export default function WhyComplianceProofBreaksDownSection() {
  const cards = [
    {
      title: "Change outpaces response",
      description:
        "A rule can change before affected owners, control mappings or evidence expectations have been reviewed.",
    },
    {
      title: "Ownership fragments",
      description:
        "Obligations and controls often span business units, regions, third parties and technology teams.",
    },
    {
      title: "Evidence gets reconstructed",
      description:
        "A completed control checklist may say little about source, validity or actual operation.",
    },
    {
      title: "Accepted exceptions look green",
      description:
        "Risk acceptance must be governed without being confused with control effectiveness.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Why Compliance Proof Breaks Down
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex min-h-[175px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
