"use client";

import Image from "next/image";
import Link from "next/link";

export default function DetectionIncidentLifecycleSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/reliability/detection-incident-lifecycle.png"
                alt="Detection, Escalation, and Incident Lifecycle"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col items-start max-w-[608px] order-1 lg:order-2">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Detection Is Useful Only When It Leads to Accountable Action.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Describe general response logic, not a simulated monitoring center. Follow the flow from signal to triage, impact assessment, and communication.
            </p>

            <h2 className="mt-8 md:mt-10 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Incident Communication Should Be Timely, Accurate, and Scoped.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Explain incident stages and public vs private communication. Review how incidents are assessed, contained, updated, resolved, and reviewed.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Incident Workflow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
