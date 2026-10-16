"use client";

import Image from "next/image";
import Link from "next/link";

export default function SeeStatusSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading, Description, CTA Button */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.2]">
              See the Status Behind Every Connection.
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Explore an illustrative connection workspace demonstrating source, scope, tenant permission, mapped control, and sync health.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#connection-status"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Inspect illustrative record
              </Link>
            </div>
          </div>

          {/* Right Column: Connection Status Dashboard Graphic */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[600/400] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_14px_35px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Integrations/i2.jpg"
                alt="Connection workspace dashboard showing telemetry and metrics"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
