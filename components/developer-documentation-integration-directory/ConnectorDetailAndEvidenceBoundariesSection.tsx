"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConnectorDetailAndEvidenceBoundariesSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Column: Image Card */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Developer-Documentation-Integration-Directory/di3.png"
                alt="Hands interacting with secure verified connector and evidence documents on laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Title, Explanations & CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
              Connector detail &amp; evidence boundaries
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">What a verified listing covers:</strong>{" "}
                Approved objects, data direction (read, write, or bidirectional), collection modes, verified prerequisites, permissions, deployment compatibility and known unsupported uses.
              </p>

              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Source context &amp; evidence:</strong>{" "}
                Every connector detail distinguishes the source object, collection observation, timestamps, mapping and accountable review. An active connection does not establish control effectiveness.
              </p>

              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Technical documentation:</strong>{" "}
                Links to Developer Documentation, API Documentation and Webhooks appear only when the corresponding service and documentation are independently verified.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/security"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-5 py-2.5 text-[14px] font-medium text-[#F58220] transition-colors duration-200 hover:bg-[#F58220] hover:text-white"
              >
                Review integration security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
