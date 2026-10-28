"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[709.33px_506.67px] xl:grid-cols-[1fr_506.67px] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start max-w-[710px]">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              TRUST CENTER / RESPONSIBLE AI
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-[1.1] sm:leading-[1.1] text-white tracking-normal">
              Responsible AI requires<br className="hidden sm:inline" /> evidence, oversight and<br className="hidden sm:inline" /> accountable decisions.
            </h1>

            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              ZoikoAssure approaches AI as a governed capability in a regulated operating<br className="hidden lg:inline" /> environment. Its Responsible AI principles emphasize source-grounded assistance,<br className="hidden lg:inline" /> explicit uncertainty, proportionate evaluation, accountable human review and<br className="hidden lg:inline" /> traceable changes—without treating AI output as an autonomous legal or<br className="hidden lg:inline" /> compliance determination.
            </p>

            <p className="mt-6 text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]">
              Trustworthy AI is not a badge or a confidence score. The relevant question is whether people can inspect<br className="hidden lg:inline" /> the source, scope, limitations, review context and evidence behind a material AI-assisted outcome.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e07519]"
              >
                Request a Demo
              </Link>
              <Link
                href="/governed-ai"
                className="inline-flex items-center justify-center rounded-[4px] border border-white bg-transparent px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Governed AI
              </Link>
            </div>

            {/* Sublink */}
            <div className="mt-6">
              <Link
                href="/ai-governance"
                className="text-[14px] font-normal leading-[22.4px] text-white underline underline-offset-4 transition-colors hover:text-[#D9E2EC]"
              >
                Explore AI Governance
              </Link>
            </div>

            {/* Footnote */}
            <p className="mt-4 sm:mt-6 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
              AI assistance does not replace qualified professional judgment. Public operational guarantees are made only when<br className="hidden lg:inline" /> approved and evidenced.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[506.67px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden rounded">
                <Image
                  src="/responsible-ai/hero.png"
                  alt="Illustrative AI Decision Lineage"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 507px"
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
