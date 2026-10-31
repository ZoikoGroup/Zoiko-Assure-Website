import Image from "next/image";
import Link from "next/link";

export default function MediaAndCareers() {
  return (
    <section id="media" className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/research-contact/media-and-careers.png"
                alt="Corporate team holding media briefing and careers discussions"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 flex flex-col lg:order-2">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Press and Media Inquiries.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Find verified company information, approved brand resources, and the appropriate press inquiry route. Keep editorial inquiries with Communications and avoid sales capture.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Careers at ZoikoAssure.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Explore the people and disciplines behind regulatory assurance infrastructure. Send candidates to verified hiring resources rather than receiving applications into a general-purpose company form.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

