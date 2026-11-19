import Link from "next/link";

const faqs = [
  {
    question: "How do I report a security vulnerability?",
    answer:
      "Please use our verified Responsible Disclosure process for any security testing or vulnerability reports.",
  },
  {
    question: "Does this policy govern AI usage?",
    answer:
      "Yes, where applicable. Model/tool use constraints are included when approved by Legal and Security.",
  },
  {
    question: "What happens if I violate the AUP?",
    answer:
      "We follow approved legal remedies and escalation ladders. We do not use automatic sanctions without an approved procedure.",
  },
  {
    question: "Can I get an exception to the AUP?",
    answer:
      "Documented authorized exceptions may exist if a real programme exists. There is no default promise of waiver or appeal.",
  },
  {
    question: "How often is the AUP updated?",
    answer:
      "Updates are made according to our legally approved statement of update process. Prior valid editions are retained in our version history.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions / report intake
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
            Contact (owner-verified routes)
          </Link>
        </div>
      </div>
    </section>
  );
}
