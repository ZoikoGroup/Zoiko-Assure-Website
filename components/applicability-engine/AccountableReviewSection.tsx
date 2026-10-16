"use client";

import Image from "next/image";
import Link from "next/link";

export default function AccountableReviewSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: UI Graphic */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/384] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/human-review-ui.png"
                alt="Human Review UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              The final judgment remains accountable.
            </h2>
            <p
              className="mt-4 text-[16px] font-normal leading-[25.6px]"
              style={{ color: "rgba(95, 107, 122, 1)" }}
            >
              Source-grounded assistance supports review, but material uncertainty, contested scope and consequential decisions require an authorized human owner, explanation and documented next step.
            </p>
            <div className="mt-6">
              <Link
                href="#review-example"
                className="inline-flex items-center justify-center rounded-[4px] px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 hover:bg-[#EB8D2C]/5"
                style={{
                  color: "rgba(235, 141, 44, 1)",
                  border: "1px solid rgba(235, 141, 44, 1)",
                }}
              >
                View review example
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
