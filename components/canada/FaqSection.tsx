const faqs = [
  {
    question: "Is Canadian law the same across all provinces and territories?",
    answer:
      "No. Federal requirements can interact with provincial and territorial rules. The relevant legal authority, regulated activity and time period require review; a country-level selection does not answer applicability.",
  },
  {
    question: "What is the difference between a federal Act and a regulation?",
    answer:
      "An Act is passed by Parliament; regulations are made under delegated authority. Both need source and commencement review. A proposed regulation is not automatically in force.",
  },
  {
    question: "What does the Canada Gazette publish?",
    answer:
      "The Canada Gazette separates proposed rules and notices (Part I), official regulations and related instruments (Part II), and Acts of Parliament (Part III). Publication and commencement may differ.",
  },
  {
    question: "Are Justice Laws consolidated federal texts official?",
    answer:
      "Department of Justice Canada says its consolidated federal Acts and regulations have official status, but a consolidation current-to date and original or amending source context still matter.",
  },
  {
    question: "Does “current to” mean the same as “last amended”?",
    answer:
      "No. “Current to” describes the period reflected in a consolidation; “last amended” identifies a different legislative event. Users should check publisher notes and pending commencement.",
  },
  {
    question: "How should English and French source versions be treated?",
    answer:
      "Language status depends on the publishing jurisdiction and legal instrument. The page should preserve the source language and authority rather than assume that an editorial translation is official.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common questions about Canadian regulatory sources
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
      </div>
    </section>
  );
}
