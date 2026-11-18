import Link from "next/link";

const faqs = [
  {
    question: "What is Zoiko Tech Inc.?",
    answer:
      "Zoiko Tech Inc. is the technology company behind ZoikoAssure and develops enterprise and digital platforms. Further corporate information is available on the Zoiko Tech website. Confirm the latest corporate descriptor before publication.",
  },
  {
    question: "How is ZoikoAssure related to Zoiko Tech?",
    answer:
      "ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company. The platform has its own compliance intelligence and assurance proposition; it is not a separate legal company merely because it has a distinct product brand.",
  },
  {
    question: "Is Zoiko Tech the same as Zoiko Group?",
    answer:
      "No. They have different roles in the published organizational description. The exact legal ownership structure and group entities require Corporate/Legal verification where relevant.",
  },
  {
    question: "Does this page establish certifications or regulatory approval?",
    answer:
      "No. This page explains corporate and platform context. Certification, attestation, residency, security and contractual representations require separately approved, current, scoped evidence.",
  },
  {
    question: "Where can I learn about ZoikoAssure governance?",
    answer:
      "Use the approved ZoikoAssure About page, Trust Center and applicable product methodology pages. AI-supported outputs do not replace professional review or legal determinations.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common Questions
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
