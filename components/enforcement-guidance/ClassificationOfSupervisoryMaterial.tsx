"use client";

const items = [
  {
    title: "Enforcement / Decision",
    description:
      "Official notice, order, judgment, sanction, or public supervisory determination.",
  },
  {
    title: "Consent / Settlement",
    description:
      "Negotiated resolution or consent order with specific operative text and admissions/non-admissions.",
  },
  {
    title: "Guidance / Expectations",
    description:
      "Circular, supervisory statement, interpretive bulletin, Q&A or other official communication.",
  },
  {
    title: "Consultation / Proposal",
    description: "Draft rule, paper or proposed guidance seeking response.",
  },
  {
    title: "Speech / Commentary",
    description:
      "Published remarks or thematic communications from authorized body.",
  },
  {
    title: "Withdrawal / Supersession",
    description:
      "Officially retracted, amended, replaced or disapplied instrument.",
  },
];

export default function ClassificationOfSupervisoryMaterial() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Classification of Supervisory Material
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
