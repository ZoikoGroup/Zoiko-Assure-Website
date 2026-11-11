import Link from "next/link";

const faqs = [
  {
    question: "Are Singapore Statutes Online (SSO) and the Gazette the same thing?",
    answer:
      "No. AGC provides SSO as a reference display, while authoritative publication and revised editions have distinct legal roles. Check original Gazette material and version status where legally relevant.",
  },
  {
    question: "Why is 9 March 2025 mentioned?",
    answer:
      "The Government Gazette explains that electronic Gazette publications on or after that date have a different evidentiary status and precedence from older Gazette publications.",
  },
  {
    question: "Does a Bill create a duty today?",
    answer:
      "A Bill is a proposal, not an enacted and commenced obligation. Confirm enactment and provision-level commencement before treating a requirement as operative.",
  },
  {
    question: "Are MAS guidelines binding in the same way as MAS notices?",
    answer:
      "Not necessarily. MAS distinguishes legally binding directions/notices from guidelines, codes, practice notes and circulars. Review the particular instrument and its authority.",
  },
  {
    question: "Are PDPC advisory guidelines binding law?",
    answer:
      "PDPC advisory guidelines explain the regulator's interpretation or approach but do not themselves override applicable Acts or regulations; the legal basis must be verified.",
  },
  {
    question: "What does UNCERTAIN mean?",
    answer:
      "It means available source or business facts do not support a defensible applies/does-not-apply conclusion. The next step is human review, not an automatic compliant result.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common questions about Singapore regulatory sources
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
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

        <Link
          href="/company/about-us#faq"
          className="mt-10 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220] hover:text-white"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}
