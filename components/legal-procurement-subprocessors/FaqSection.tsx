import Link from "next/link";

const faqs = [
  {
    question: "How do I receive updates?",
    answer:
      "Subscription entry is conditional only with a real service, lawful preferences and evidence. Opt-out does not affect contractual channels.",
  },
  {
    question: "How can I object to a change?",
    answer:
      "Use the conditional DPA-specific channel. We never fabricate deadlines or a “guaranteed objection” outcome.",
  },
  {
    question: "Are these processors located in my region?",
    answer: "Where verified, location filters avoid flags implying storage/localization guarantees.",
  },
  {
    question: "What if a service fails to deliver?",
    answer:
      "Failure and retry states explain safe fallback, prevent duplicate notices and preserve entered content.",
  },
  {
    question: "Where is the Data Processing Addendum?",
    answer:
      "Verified links to the DPA, Privacy Policy, and Data Residency are provided below.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions about subprocessors
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            Contact Legal (verified destination)
          </Link>
        </div>
      </div>
    </section>
  );
}
