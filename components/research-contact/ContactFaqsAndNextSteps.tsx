import Image from "next/image";
import Link from "next/link";

export default function ContactFaqsAndNextSteps() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[608/382] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/research-contact/contact-faqs.png"
                alt="Support team addressing FAQs and processing inquiries"
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
                Common Contact Questions.
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Answer practical contact questions while avoiding unverified service promises. Questions include: How do I request a demo? Where can customers find support? Where can I report a security concern?
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                What Happens Next?
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Your request is submitted. The responsible team reviews the request. Follow-up takes place through the contact details you provided. Set honest expectations and demonstrate what the system actually knows about delivery.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/resources/faqs"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

