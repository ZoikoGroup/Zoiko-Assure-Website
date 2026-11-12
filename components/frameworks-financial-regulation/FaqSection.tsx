import Link from "next/link";

const faqs = [
  {
    question: "What is financial regulation?",
    answer:
      "It comprises laws, regulator rules and supervisory practices governing financial activities and firms. International frameworks can inform how systems are designed, but whether a specific requirement applies depends on the legal instrument, activity, entity and jurisdiction.",
  },
  {
    question: "Are Basel standards binding law?",
    answer:
      "The Basel Committee publishes international banking standards and supervisory principles. Legal force for a particular institution depends on implementation and rules in the relevant jurisdiction.",
  },
  {
    question: "Do FATF Recommendations apply directly to every company?",
    answer:
      "No. They are international AML/CFT/CPF standards for countries to implement. Firms should evaluate applicable local laws and regulator requirements with qualified reviewers.",
  },
  {
    question: "Are IOSCO and IAIS principles certifications?",
    answer:
      "No. They provide internationally recognized securities and insurance supervisory frameworks, not company certifications or automatic evidence of compliance.",
  },
  {
    question: "Does this page confirm that my institution is regulated?",
    answer:
      "No. A firm's regulated status depends on entity structure, activities, licensing, jurisdiction, effective rules and authoritative review.",
  },
  {
    question: "Does adopting a framework prove financial compliance?",
    answer:
      "No. Demonstrating compliance can require binding-law analysis, appropriately designed and operated controls, evidence, review and regulator-specific obligations. Exception acceptance is not assurance.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common questions about financial regulation and governance
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

        <div className="mt-10">
          <Link
            href="/resources/faqs"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
