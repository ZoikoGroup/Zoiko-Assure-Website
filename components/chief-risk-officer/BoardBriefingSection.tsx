import Image from "next/image";
import Link from "next/link";

export default function BoardBriefingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Ownership, Escalation &amp; Action
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Give accountable follow-through. Easily assign applicability reviews, request evidence reviews, challenge conclusions, and document confirmation events.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Board &amp; Committee Briefing
              </h2>
              <p className="mt-4 pb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                An executive summary that can be challenged. Provide board-defensible reporting contexts, material change narratives, assurance summaries, and exception appendices.
              </p>
              <div>
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
                >
                  Request Sample Brief
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Specimen Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/chief-risk-officer/board-briefing-ui-v2.jpg"
                alt="Board Committee Briefing Specimen"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
