"use client";

import Link from "next/link";

const feedbackCards = [
  {
    title: "Report Documentation Issue",
    description:
      "Accessible link only if staffed intake exists; fallback to verified Contact Support.",
  },
  {
    title: "Data Privacy Constraints",
    description:
      "Block customer secrets in issue reporting. No fake ticket numbers.",
  },
  {
    title: "Support Routing",
    description:
      "When issue intake is not staffed, route to the verified support route.",
  },
];

export default function DocumentationFeedback() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Need clarification or found something outdated?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {feedbackCards.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact-support"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
