"use client";

import Image from "next/image";
import Link from "next/link";

export default function SyncHealthSecuritySection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Column: Title, Explanations & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
              Sync health, security &amp; human review
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Failure &amp; freshness:</strong>{" "}
                Revocation, timeout, mapping drift and source retirement surface explicit next actions rather than assuming positive assurance. Observed, captured and last-success timestamps remain separate.
              </p>

              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Security &amp; data governance:</strong>{" "}
                Least-privilege access and tenant scope govern permitted data classes. Processing purpose, residency and retention are qualified against approved agreements.
              </p>

              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Human review:</strong>{" "}
                AI may assist in identifying candidate relationships where supported, but accountable human review is required before any mapping or assurance conclusion.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/trust-center"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-5 py-2.5 text-[14px] font-medium text-[#F58220] transition-colors duration-200 hover:bg-[#F58220] hover:text-white"
              >
                Visit Trust Center
              </Link>
            </div>
          </div>

          {/* Right Column: Image Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Developer-Documentation-Integrations/i3.jpg"
                alt="Engineers and compliance reviewers evaluating data pipelines and integration sync health"
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
