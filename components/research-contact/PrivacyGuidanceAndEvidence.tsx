import Image from "next/image";
import Link from "next/link";

export default function PrivacyGuidanceAndEvidence() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Privacy and Safe Contact Guidance.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Do not enter passwords, payment information, confidential customer records, or vulnerability details into the general contact form. Use the specialist route when your request concerns privacy, security or customer support.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Evaluate With Evidence.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Explore how ZoikoAssure approaches security, privacy, governed AI, data governance, and reliability. Support procurement buyers who need evidence before deciding to contact the company.
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
                src="/images/research-contact/privacy-guidance.png"
                alt="Institutional procurement buyer evaluating trust documentation"
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

