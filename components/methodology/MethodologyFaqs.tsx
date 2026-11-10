"use client";

import Link from "next/link";

const faqs = [
  {
    question: "What is regulatory intelligence methodology?",
    answer:
      "The stated method for selecting, interpreting, reviewing and maintaining regulatory sources and associated explanations, with documented provenance, limits and human accountability.",
  },
  {
    question:
      "Does a source appearing in the library mean it applies to my organization?",
    answer:
      "No. Applicability depends on jurisdiction, entity, activity, products, customer or data facts, and effective time; qualified human review may be needed.",
  },
  {
    question: "Is regulatory content checked in real time?",
    answer:
      "A public page should state only verified observation and review practices. Publication, legal effect, observation and editorial review are separate events; a live-check claim requires evidence.",
  },
  {
    question: "Why can regulatory information be missing?",
    answer:
      "Source access, licensing, geography, language, content type, review status or technical issues may constrain what can be displayed. Absence is not proof that no requirement exists.",
  },
  {
    question: "How are official sources distinguished from summaries?",
    answer:
      "By identifying the issuing authority, document type, original citation and publication context; summaries and translations are labeled with their separate status.",
  },
  {
    question: "What does UNCERTAIN mean?",
    answer:
      "The available facts or legal basis are insufficient or contested for a reliable applicability conclusion, requiring accountable further review rather than a guessed answer.",
  },
];

export default function MethodologyFaqs() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Common Questions from Methodology Teams.
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
