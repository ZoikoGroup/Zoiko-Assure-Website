"use client";

import Link from "next/link";

const faqs = [
  {
    question: "Is European Union law the same as national law?",
    answer:
      "No. EU law operates alongside national implementation and enforcement structures. In particular, directives typically require national transposition, and a national measure can be important to understanding a specific requirement.",
  },
  {
    question: "Are EU regulations binding in every circumstance?",
    answer:
      "Regulations are binding in their entirety and directly applicable under EU law, but their provisions still have defined subject matter, territory, addressees, start dates and possible transitional rules. An organization's actual scope requires review.",
  },
  {
    question: "Does an EU directive apply in the same way as a regulation?",
    answer:
      "Not generally. Directives bind Member States as to the result to be achieved and ordinarily require national transposition measures. Review the directive together with relevant country measures and legal dates.",
  },
  {
    question: "Are European Commission proposals already enforceable rules?",
    answer:
      "A proposal is a step in lawmaking, not the same as an adopted binding act. The adoption stage, publication, entry into force and application provisions must be verified individually.",
  },
  {
    question:
      "What is the difference between the Official Journal and a consolidated EUR-Lex text?",
    answer:
      "The authentic Official Journal publishes official EU legal acts. Consolidated EUR-Lex versions combine amendments to help users read a text at a given point in time; they are documentation tools, not independent legal acts.",
  },
  {
    question: "How do EU Member States affect implementation?",
    answer:
      "Member States may transpose directives and operate national enforcement or supervisory arrangements. Any country-specific statement should cite its official national sources and relevant dates.",
  },
];

export default function EuFaqs() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Common questions about EU regulatory sources
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

        <div className="mt-8">
          <Link
            href="/view-all-faqs"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
