"use client";

import Image from "next/image";
import Link from "next/link";

export default function CookieRegisterAndThirdPartySection() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Cookie & Storage Register + Third-Party Providers */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
                Cookie and storage register
              </h2>
              <p className="mt-3 text-[14px] sm:text-[14.5px] font-medium text-[#5A6E85]">
                Name | Provider | Category | Purpose | Duration | Scope
              </p>
              <p className="mt-4 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#5A6E85]">
                The technologies shown reflect the approved register for this scope and review date. Rows appear only when verified by scan + owner reconciliation.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
                Third-party providers
              </h2>
              <p className="mt-4 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#5A6E85]">
                Approved vendor domains, roles and vendor-policy links.
              </p>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/cookie-settings"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
                >
                  Review Cookie Settings
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Legal-Procuxrement-Cookie-Policy/cp2.jpg"
                alt="Compliance officer reviewing cookie and third-party storage registers"
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
