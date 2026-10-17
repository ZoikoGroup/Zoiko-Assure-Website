export default function EnterpriseDataSection() {
  const cards = [
    {
      title: "Regulatory Source",
      description: (
        <>
          Authority and source registry, timestamps,
          <br />
          versions.
        </>
      ),
    },
    {
      title: "Identity Context",
      description: (
        <>
          Entities, jurisdictions, activities, data classes,
          <br />
          access scope.
        </>
      ),
    },
    {
      title: "Control Evidence Systems",
      description: (
        <>
          Origin, connector state, missing permissions,
          <br />
          schema mapping.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Enterprise Data &amp; Integrations
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-sm"
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
