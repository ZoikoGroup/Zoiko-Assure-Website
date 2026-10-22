"use client";

const items = [
  {
    title: "Binding Instrument",
    description: "Where verified as legally binding regulation or legislation.",
  },
  {
    title: "Voluntary Standard",
    description: "Recognized best practices and opt-in frameworks.",
  },
  {
    title: "Official Guidance",
    description: "Interpretive guidance from regulatory bodies.",
  },
  {
    title: "Governance Methodology",
    description: "Structured approaches for managing organizational risk.",
  },
];

export default function FrameworkTypesAndBindingStatus() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Framework Types &amp; Binding Status
        </h2>
        <p className="mt-3 max-w-[768px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
          Different references carry different authority. Legal status varies
          with adoption/incorporation, jurisdiction and effective date.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
