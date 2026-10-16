"use client";

import Image from "next/image";
import Link from "next/link";

export default function GovernedAISection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: UI Graphic */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/421.44] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/governed-ai-interface.png"
                alt="Governed AI Interface"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              AI can assist. It cannot own the legal decision.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Where AI assists analysis, outputs should be source-grounded, uncertainty-aware and reviewable by an accountable person.
            </p>
            <div className="mt-6">
              <Link
                href="/platform/governed-ai"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#B66C18] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#B66C18] transition-colors duration-200 hover:bg-[#B66C18]/5"
              >
                Explore Governed AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
