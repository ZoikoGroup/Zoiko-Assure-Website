import Image from "next/image";
import Link from "next/link";

export default function PrivacyAndAccessibility() {
  return (
    <section id="privacy" className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Privacy and Data Requests.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Learn how information is handled and find the appropriate route for questions or requests concerning your data. Direct users to published privacy notices and appropriate verified contact or rights pathways.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Accessibility Assistance.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Find accessibility information and the supported route for reporting a barrier or requesting assistance. Offer inclusive assistance without making accessibility inquiries conditional on a purchase or an account.
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
                src="/images/research-contact/privacy-and-accessibility.png"
                alt="Compliance professional reviewing privacy and accessibility documentation"
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

