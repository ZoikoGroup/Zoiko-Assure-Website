import Link from "next/link";

const faqs = [
  {
    question: "Is UK law the same in all four nations?",
    answer:
      "No. Some law is enacted at the UK level, and Scotland, Wales and Northern Ireland have devolved legislative responsibilities. The scope of any particular provision depends on its authority, legal extent, application, subject and relevant dates.",
  },
  {
    question: "Does geographical extent mean a rule applies to my company?",
    answer:
      "Not necessarily. Extent identifies a legal jurisdiction, whereas whether a requirement applies to a particular activity or organization can depend on narrower territorial application and factual conditions. A competent reviewer must verify the text and context.",
  },
  {
    question: "Does Royal Assent mean every section of an Act is in force?",
    answer:
      "No. An Act may contain provisions that commence at different times or through separate commencement orders. Check the official provision and its commencement information.",
  },
  {
    question: "Is the revised text on legislation.gov.uk always fully up to date?",
    answer:
      "The National Archives maintains revised legislation and provides warnings about effects that have not yet been applied. Check the page's as-of context, annotations and outstanding effects rather than assuming every displayed provision is fully current.",
  },
  {
    question: "What is the difference between an Act, a statutory instrument and guidance?",
    answer:
      "Acts are forms of primary legislation. Statutory Instruments are a major form of secondary legislation made under conferred powers. Guidance may assist understanding but its legal effect must be assessed according to its authority, type and context.",
  },
  {
    question: "Does EU law still apply in Northern Ireland?",
    answer:
      "Some EU rules may remain relevant to particular areas under the Windsor Framework and related arrangements. Application is specific to the legal instrument, subject matter, date and facts. This page does not establish that any individual EU rule applies.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common questions about UK regulatory sources
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
          className="mt-10 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220] hover:text-white"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}
