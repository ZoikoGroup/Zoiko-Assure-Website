"use client";

import Image from "next/image";
import Link from "next/link";

const principleCards = [
  {
    title: "Source authority",
    description: "Official issuer and origin.",
  },
  {
    title: "Version-time",
    description: "Differentiate effective vs publication dates.",
  },
  {
    title: "Contextual review",
    description: "Evaluate entity, activity and limits.",
  },
  {
    title: "Limitations",
    description: "Rights, uncertainty and escalation rules.",
  },
];

export default function MethodologyPrinciplesAndChain() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Top Header & 4-Column Cards Section */}
        <div>
          <p className="max-w-[800px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            We identify where information comes from, distinguish legal status
            from commentary, preserve version and time context, and make
            unresolved questions visible for accountable review.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principleCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-start rounded-[8px] border border-[#006FE81A] border-t-4 border-t-[#006FE81A] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                  {card.title}
                </h4>
                <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Split Feature Section */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                From a source to an evidence-backed conclusion.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Each stage answers a different question. Finding a document or
                mapping a control does not demonstrate control operation. Follow
                the governed chain: Source &rarr; Applicability &rarr;
                Obligation &rarr; Control &rarr; Evidence &rarr; Assurance.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Start with the original authority.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                An issuing body, a publication host and an editorial explanation
                may play different roles. Source type and legal effect must be
                checked before interpretation.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/explore-the-six-stage-method"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Explore the six-stage method
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Strictly no border, radius, shadow, or bg) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/methodology/2.png"
                  alt="From a source to an evidence-backed conclusion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
