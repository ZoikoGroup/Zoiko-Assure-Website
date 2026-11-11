import Link from "next/link";

const subjects = [
  {
    title: "AI Governance",
    description:
      "Explore accountable oversight of AI systems, source-grounded decisions and human review.",
    href: "/frameworks/ai-governance",
  },
  {
    title: "Data Protection",
    description:
      "Understand privacy management, legal authority, rights and evidence with jurisdiction-specific context.",
    href: "/frameworks/data-protection",
  },
  {
    title: "Cybersecurity",
    description:
      "Explore cybersecurity risk, safeguard ownership and evidence without assuming a certified security posture.",
    href: "/frameworks/cybersecurity",
  },
  {
    title: "Operational Resilience",
    description:
      "See how continuity, service impact, recovery, dependencies and testing fit a governed resilience approach.",
    href: "/frameworks/operational-resilience",
  },
  {
    title: "Financial Regulation",
    description:
      "Orient to banking, financial crime, securities, insurance and related regulatory domains; local legal requirements vary.",
    href: "/frameworks/financial-regulation",
  },
  {
    title: "Enterprise Risk",
    description:
      "Explore risk appetite, ownership, assessment, response and independent review across the enterprise.",
    href: "/frameworks/enterprise-risk",
  },
];

export default function SubjectCards() {
  return (
    <section id="explore-by-subject" className="w-full scroll-mt-24 bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Explore by subject
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="flex flex-col rounded-lg border-2 border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[17px] font-semibold leading-tight text-[#0A2540]">
                {subject.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] font-normal leading-6 text-[#6B7280]">
                {subject.description}
              </p>
              <div className="mt-6">
                <Link
                  href={subject.href}
                  aria-label={`Explore ${subject.title} topic`}
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-5 py-2.5 text-[14px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
                >
                  Explore topic
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
