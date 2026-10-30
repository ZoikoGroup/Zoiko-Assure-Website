import Image from "next/image";
import Link from "next/link";

export default function VerifiedContextSection() {
  return (
    <section id="context" className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-[64px] lg:grid-cols-[608px_608px]">
          {/* Left Column Image */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/executive-briefings/verified-context.png"
                alt="Regulatory Context and Applicability Boundaries"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="order-1 flex flex-col lg:order-2">
            {/* Block 1 */}
            <h2
              className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Verified Regulatory and Operating Context
            </h2>
            <p
              className="pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              What changed—and what did not. Dated developments, authority, legal status, effective/observation times, and decision implications.
            </p>

            {/* Block 2 */}
            <h2
              className="pt-12 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Applicability and Relevance Boundaries
            </h2>
            <p
              className="pt-4 pb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Who might be affected; what remains unassessed. Relevance depends on your organization’s facts and accountable review.
            </p>

            {/* Action Link */}
            <div className="pt-4">
              <Link
                href="#decision-grid"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-[12px] text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors hover:bg-[#D97637] hover:text-white"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Explore Verified Context
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

