"use client";

import Image from "next/image";
import Link from "next/link";

export default function LeadershipAndGlobalPresence() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Content */}
          <div className="flex w-full max-w-[608px] flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Leadership & Accountability
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Zoiko Assure is governed as institutional infrastructure.
                Leadership responsibility spans product architecture,
                regulatory intelligence, security, privacy, AI governance,
                operational resilience and customer accountability.
                Institutional credibility is prioritized over marketing
                visibility.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Company & Global Presence
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Zoiko Assure is a platform of Zoiko Tech Inc., a Zoiko Group
                company. Zoiko Tech develops digital infrastructure and
                enterprise platforms with an emphasis on governed systems,
                operational accountability and long-term resilience. Operating
                globally with headquarters in Sacramento and London.
              </p>
            </div>

            <div>
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[608/413] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/about-zoiko-assure/corporate-leadership-meeting.png"
                alt="Corporate leadership meeting in global headquarters"
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

