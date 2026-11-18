"use client";

import Link from "next/link";

const faqs = [
  {
    title: "How do I withdraw consent?",
    description:
      "Use the Cookie Settings link to revisit your choices. Withdrawal stops future optional technology activations per approved control.",
  },
  {
    title: "Are all cookies optional?",
    description:
      "No. Strictly necessary cookies are required for the website to function properly. Specific use/categorization is from the register, not an assumed universal exemption.",
  },
  {
    title: "What if I block cookies in my browser?",
    description:
      "This may impact the functionality of the site. See the policy for a non-deceptive explanation of browser-level limitations and effects.",
  },
  {
    title: "Where can I see the list of third parties?",
    description:
      "The technology register lists approved vendor domains, roles and vendor-policy links based on the latest scan reconciliation.",
  },
  {
    title: "How often is this policy updated?",
    description:
      "The notice version and effective date reflect the latest legal review and scan reconciliation. Major changes may trigger a re-prompt as required by the approved change matrix.",
  },
];

export default function CookiePolicyFaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Questions About Cookies
        </h2>

        {/* 5 FAQ Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-bold leading-snug text-[#0A2540]">
                {faq.title}
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] font-normal leading-[21px] text-[#5A6E85]">
                {faq.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/company/about-us#faq"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
