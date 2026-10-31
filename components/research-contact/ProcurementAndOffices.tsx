import Image from "next/image";
import Link from "next/link";

export default function ProcurementAndOffices() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Procurement and Business Inquiries.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                For enterprise due diligence, start with the Trust Center or the verified commercial contact route. Distinguish contracting and enterprise procurement inquiries from hypothetical publicly available partner programs.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Our Offices.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Global Headquarters — Sacramento, California, United States. European Headquarters — London, United Kingdom. Reassure institutional buyers with truthful company relationship and verified HQ geography.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/trust-center"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Explore Trust Center
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/research-contact/procurement-and-offices.png"
                alt="Executive leadership discussing global procurement and offices strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

