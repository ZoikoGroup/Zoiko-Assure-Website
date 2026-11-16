"use client";

import Image from "next/image";

export default function ResponsibleDecisionRecordSection() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Decision Record & Boundary Review */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[32px] lg:leading-[1.25]">
              Responsible AI should be visible in the decision record.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
              A responsible approach requires more than a policy statement. It requires known sources, clear limits, reviewable outputs and evidence of what happened at the time.
            </p>

            {/* Source to Assurance Chain */}
            <div className="mt-6">
              <p className="text-[14px] sm:text-[15px] font-semibold text-[#0A2540]">
                From source to assurance, with review at every boundary:{" "}
                <span className="font-normal text-[#5A6E85]">
                  Source &rarr; Applicability &rarr; Obligation &rarr; Control &rarr; Evidence &rarr; Assurance.
                </span>
              </p>
            </div>

            <p className="mt-6 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#5A6E85]">
              Actual legal applicability and control effectiveness require evidence and accountable assessment.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Responsible-AI/dgra2.jpg"
                alt="Governance reviewers validating source-to-assurance records and model boundaries"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
