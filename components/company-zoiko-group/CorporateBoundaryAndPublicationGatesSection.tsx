"use client";

import Image from "next/image";

export default function CorporateBoundaryAndPublicationGatesSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Company-Zoiko-Group/czg3.jpg"
                alt="Corporate executives discussing technology operator boundaries and publication governance"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Corporate Boundary & Publication Gates */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Product / Corporate Boundary
              </h2>
              <div className="mt-3 space-y-1 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#5A6E85]">
                <p>Product: compliance intelligence / continuous assurance</p>
                <p>Operator: technology &amp; corporate accountability</p>
                <p>External: ZoikoTech corporate website</p>
                <p>No copy-paste portfolio claims from parent site</p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Link &amp; Publication Gates
              </h2>
              <div className="mt-3 space-y-1 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#5A6E85]">
                <p>Current footer target: /company/zoiko-tech [404]</p>
                <p>Choose approved canonical route or external link</p>
                <p>External indicator + equivalent keyboard access</p>
                <p>Address discrepancy: verify 95811 / 95851</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="https://zoikogroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                <span>Explore Zoiko Group</span>
                <span className="text-[17px] leading-none">&nearr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
