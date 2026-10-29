import Image from "next/image";
import Link from "next/link";

export default function DecisionGridSection() {
  return (
    <section id="decision-grid" className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-[64px] lg:grid-cols-[608px_608px]">
          {/* Left Column Content */}
          <div className="flex flex-col">
            {/* Block 1 */}
            <h2
              className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Management Action and Decision Grid
            </h2>
            <p
              className="pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              What the board should ask management. Outlines issue, rationale, owner role, evidence needed, and timing trigger.
            </p>

            {/* Block 2 */}
            <h2
              className="pt-12 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Control, Evidence and Assurance Questions
            </h2>
            <p
              className="pt-4 pb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Which obligation is relevant? Which control owns it? What artifact demonstrates operation? What is the validity window?
            </p>

            {/* Action Link */}
            <div className="pt-4">
              <Link
                href="#methodology"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-[12px] text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors hover:bg-[#D97637] hover:text-white"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Review Decision Grid
              </Link>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/executive-briefings/decision-grid.png"
                alt="Management Decision Grid and Assurance Evidence"
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

