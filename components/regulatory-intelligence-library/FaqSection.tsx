import Link from "next/link";

const faqs = [
  {
    question: "What is a regulatory library?",
    answer:
      "A regulatory library is an organized collection of regulatory materials and related explanations. A useful entry identifies its issuing authority, jurisdiction, document type, version and primary source where these are verified.",
  },
  {
    question: "Does finding a regulation mean it applies to my company?",
    answer:
      "No. Search results show a content match within the available collection. Applicability depends on jurisdiction, legal entity, activities and effective period and may require qualified review.",
  },
  {
    question: "Are all jurisdictions and regulators included?",
    answer:
      "No completeness claim is made. Any published coverage statements must describe the jurisdictions, content types and review period actually verified by the content owner.",
  },
  {
    question: "Why can dates differ for the same document?",
    answer:
      "A document may be published, become legally effective, be amended and be reviewed in the library at different times. Each date needs its own clear label.",
  },
  {
    question: "Can I download or reuse any document I find?",
    answer:
      "Not necessarily. Access and reuse depend on the relevant source and content rights. Where full text cannot be provided, the library may offer bibliographic metadata and a link to the official publisher.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Regulatory Library: Common Questions
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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

        <div className="mt-10">
          <Link
            href="/company/about-us#faq"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
