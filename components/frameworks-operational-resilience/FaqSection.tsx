import Link from "next/link";

const faqs = [
  {
    question: "What is operational resilience?",
    answer:
      "The capacity to prepare for, respond to, recover from and learn from disruptions while protecting important services. The exact supervisory definition varies by regulator and sector.",
  },
  {
    question: "Is operational resilience the same as disaster recovery?",
    answer:
      "No. Disaster recovery primarily addresses recovery of technology or information systems. Operational resilience also considers critical services, customer harm, people, premises, processes, suppliers and governance.",
  },
  {
    question: "Does DORA apply to every company operating in Europe?",
    answer:
      "No. DORA targets specified financial entities and ICT third-party relationships under its defined scope. An authorized legal reviewer must assess the current instrument and entity facts.",
  },
  {
    question: "Do UK FCA impact tolerances equal RTO or RPO?",
    answer:
      "Not automatically. An impact tolerance is a maximum tolerable disruption to an important business service, while RTO and RPO describe recovery objectives with different meanings and measurement contexts.",
  },
  {
    question: "Do the Basel Committee principles create one universal law?",
    answer:
      "No. They are banking supervisory principles; practical duties depend on the institution and the applicable supervisory or national requirements.",
  },
  {
    question: "Does ISO 22301 certify our resilience automatically?",
    answer:
      "No. ISO 22301 specifies business continuity management system requirements. Certification, where relevant, is a separate independent assessment requiring evidence and verifiable scope.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Operational resilience questions
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
