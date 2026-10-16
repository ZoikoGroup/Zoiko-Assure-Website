"use client";

import Image from "next/image";
import Link from "next/link";

export default function OperationalQuestionSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              Once applicable, a requirement becomes an operational question.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              An applicability determination can inform which obligations need ownership and control mapping. Mapping is not evidence that a control operated, and the later assurance conclusion remains separate.
            </p>
            <div className="mt-6">
              <Link
                href="/obligation-control-mapping"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D65A2C] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D65A2C] transition-colors duration-200 hover:bg-[#D65A2C]/5"
              >

                Explore Obligation & Control Mapping
              </Link>
            </div>
          </div>

          {/* Right Column: UI Graphic */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/383.04] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/obligation-handoff.png"
                alt="Obligation Handoff"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
