"use client";

const faqs = [
  {
    question: "Does Explore All Jurisdictions cover every country?",
    answer:
      "No. It is a curated directory of published, reviewed ZoikoAssure jurisdiction and regional guides. Listing a guide does not mean comprehensive legal coverage.",
  },
  {
    question: "Is the European Union a country in this directory?",
    answer:
      "No. The European Union is described separately as a supranational framework. Member State law and implementation may require additional jurisdiction-specific review.",
  },
  {
    question: "Is the Middle East a single legal jurisdiction?",
    answer:
      "No. Middle East is a regional term. Countries, authorities, legal instruments and effective dates must be evaluated individually.",
  },
  {
    question: "Why is a country missing from the directory?",
    answer:
      "A public guide may not yet be available or approved. That absence does not establish that a country has no legal requirements or that ZoikoAssure supports or includes it.",
  },
  {
    question: "Do the pages decide which laws apply to my business?",
    answer:
      "No. Applicability depends on jurisdiction, entity, activity, product, data, customers and relevant dates; material decisions need accountable review.",
  },
  {
    question: "Are all sources current in real time?",
    answer:
      "No such general promise is made. Authoritative source versions, publication/effective dates and editorial review dates must be verified in relevant context.",
  },
];

export default function AllJurisdictionsFaqs() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Questions about jurisdiction coverage
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
                {faq.question}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
