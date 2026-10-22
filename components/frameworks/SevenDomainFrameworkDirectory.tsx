"use client";

import Link from "next/link";

const domains = [
  {
    title: "AI Governance",
    description: "Regulatory and voluntary AI governance references.",
    href: "/frameworks/ai-governance",
  },
  {
    title: "Data Protection",
    description: "Data/privacy governance instruments and standards.",
    href: "/frameworks/data-protection",
  },
  {
    title: "Cybersecurity",
    description: "Cyber risk and security control frameworks.",
    href: "/frameworks/cybersecurity",
  },
  {
    title: "Operational Resilience",
    description: "Business/ICT resilience regulatory and framework material.",
    href: "/frameworks/operational-resilience",
  },
  {
    title: "Financial Regulation",
    description:
      "Financial regulatory framework context relevant to regulated sectors.",
    href: "/frameworks/financial-regulation",
  },
  {
    title: "Enterprise Risk",
    description: "Risk governance reference models and methodologies.",
    href: "/frameworks/enterprise-risk",
  },
  {
    title: "Compliance Management",
    description: "Compliance program governance and management references.",
    href: "/frameworks/compliance-management",
  },
];

export default function SevenDomainFrameworkDirectory() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Seven-Domain Framework Directory
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                  {domain.title}
                </h4>
                <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                  {domain.description}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={domain.href}
                  className="inline-flex items-center text-[14px] font-medium leading-[19.6px] text-[#F58220] transition-colors hover:text-[#e0751a]"
                >
                  Explore <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
