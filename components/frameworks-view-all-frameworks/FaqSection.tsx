const faqs = [
  {
    question: "Does this directory list every framework worldwide?",
    answer:
      "No. It provides a curated route to ZoikoAssure's approved and published framework-topic pages. It is not a complete inventory of international standards or laws.",
  },
  {
    question: "Is a framework the same as legislation?",
    answer:
      "No. Frameworks, management-system standards, supervisory guidance, recommendations and binding legislation have different legal authority and scope.",
  },
  {
    question: "Does following a standard mean we are certified?",
    answer:
      "No. Where certification exists, it depends on a verified independent process, the certificate holder, defined scope, validity and issuing body.",
  },
  {
    question: "Why is Financial Regulation listed under Frameworks?",
    answer:
      "It is an editorial learning topic. The sources within it can include applicable laws, supervisory rules and international standards, each with separate authority.",
  },
  {
    question: "Can this directory determine which laws apply to my company?",
    answer:
      "No. That depends on jurisdiction, legal entity, products, activities, effective dates, exemptions and qualified review.",
  },
  {
    question: "Does a mapped control prove it is working?",
    answer:
      "No. Mapping, implementation, dated operating evidence and accountable assurance are distinct steps.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions about frameworks
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {faq.question}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
