import Link from "next/link";

const faqs = [
  {
    question: "AI Assistance Limits",
    answer:
      "AI may suggest classifications and missing data with citations and uncertainty. Final decisions remain strictly human-accountable.",
  },
  {
    question: "Evidence vs Control",
    answer:
      "Evidence accepted for a stated review purpose does not, by itself, prove that a control operated effectively or that an organization is compliant.",
  },
  {
    question: "Accountability Reviews",
    answer:
      "Ownership is a governance decision. Explore deep links to Trust Center, Methodology, and FAQ resources for precise qualifications.",
  },
];

export default function FaqSection() {
  return (
    <section id="faqs" className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-7 text-[#0A2540]">
          Governed AI &amp; Common Questions
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-sm font-semibold leading-5 text-[#0A2540]">
                {faq.question}
              </h3>
              <p className="mt-4 text-[13px] leading-5 text-[#5A6E85]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/resources/faqs"
          className="mt-12 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-base font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
        >
          Explore All FAQs
        </Link>
      </div>
    </section>
  );
}
