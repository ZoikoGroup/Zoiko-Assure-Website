import React from "react";
import Link from "next/link";

export default function FrameworkFaqSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="max-w-[800px]">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Framework Questions, Answered With Context.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
            <div>
              <h5 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Framework Authority
              </h5>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Official issuer, exact edition, and legal character are clearly documented in every guide.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
            <div>
              <h5 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Educational Guidance
              </h5>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                These guides provide practical steps but are not a substitute for a legal compliance conclusion.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
            <div>
              <h5 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Continuous Updates
              </h5>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Guides feature last-reviewed dates and revision timelines to track framework amendments over time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/faqs"
            className="inline-flex h-[51px] w-[144px] items-center justify-center rounded-[4px] border border-[#D58324] text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
