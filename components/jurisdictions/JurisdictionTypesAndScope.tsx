const types = [
  {
    title: "Country Jurisdiction",
    description:
      "A sovereign state may issue national rules while subnational bodies exercise distinct authority within its territory.",
  },
  {
    title: "Subnational Jurisdiction",
    description:
      "State, province, constituent nation or other subnational legal unit may modify territorial rules.",
  },
  {
    title: "Supranational Regime",
    description:
      "An instrument or institution may operate across member states, with national implementation differences.",
  },
  {
    title: "Editorial Region",
    description:
      "A site grouping improves navigation but does not itself create a legal authority or single governing law.",
  },
  {
    title: "Extraterritorial Reach",
    description:
      "A regulation can have cross-border effects tied to activities, products, establishments or affected persons.",
  },
  {
    title: "Effective Period",
    description:
      "Legal force and territorial reach can change over time; show dates/versions and review requirement.",
  },
];

export default function JurisdictionTypesAndScope() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Understanding Jurisdiction Types and Territorial Scope
        </h2>
        <p className="max-w-[800px] pt-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
          Explain state vs supranational regime vs regional grouping.
        </p>

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {types.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.936px] text-[#0A2540]">
                {item.title}
              </h5>
              <p className="pb-6 pt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
