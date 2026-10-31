"use client";

import Link from "next/link";

const commitmentCards = [
  {
    title: "Press & Media",
    description:
      "Press communications distinguish implemented capabilities from roadmaps, verified facts from estimates, and AI assistance from legal judgment.",
  },
  {
    title: "Careers",
    description:
      "We seek systems thinkers who value rigor over theater, clarity over noise, and long-term accountability over short-term optics.",
  },
  {
    title: "Our Commitment",
    description:
      "Assurance must be engineered—not improvised. Zoiko Assure does not claim to eliminate compliance risk. We build infrastructure for defensibility.",
  },
];

export default function OurCommitment() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        {/* Heading 2 */}
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Our Commitment
        </h2>

        {/* 3 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {commitmentCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
            >
              <div>
                <h5 className="text-[13.28px] font-semibold leading-[15.94px] text-[#0A2540]">
                  {card.title}
                </h5>
                <p className="pt-4 pb-6 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/company/careers"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
          >
            Explore Careers & Press
          </Link>
        </div>
      </div>
    </section>
  );
}

