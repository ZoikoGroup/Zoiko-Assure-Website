import Image from "next/image";
import Link from "next/link";

export default function ObligationsHero() {
  return (
    <section className="w-full bg-[#0A2540] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,709.33fr)_minmax(0,506.67fr)] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1px] text-[#F58220]">
              Regulatory Intelligence / Obligations
            </span>

            <h1 className="max-w-[710px] pt-4 text-[36px] font-semibold leading-[1.1] text-white sm:text-[44px] lg:text-[56px] lg:leading-[61.6px]">
              Understand the obligation. Preserve its authority.
            </h1>

            <p className="max-w-[710px] pt-6 text-[16px] font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Explore structured, source-linked obligations with their original
              authority, effective dates, revision context and review status.
              See what a requirement states—and what must still be assessed
              before it is applied to your organization.
            </p>

            <p className="max-w-[710px] pt-6 text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]">
              A regulatory obligation is a requirement derived from an
              authoritative legal or regulatory source. Its meaning and
              applicability depend on the cited provision, jurisdiction, scope,
              effective period and relevant organizational facts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                href="#why-structured-obligations-matter"
                className="mt-4 inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Explore Obligations
              </Link>
              <Link
                href="/regulatory-sources"
                className="mt-4 inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Regulatory Sources
              </Link>
            </div>

            <p className="pt-6 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
              Source-linked · Provision-specific · Time-aware · Context-dependent
            </p>

            <p className="py-6 text-[10.4px] font-normal leading-[16.64px] text-[#A0AAB2]">
              Illustrative UI — not a regulatory determination.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[506.67px]">
            <div className="w-full overflow-clip rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative h-[348px] w-full">
                <Image
                  src="/images/obligations/hero-obligation-specimen-ui.webp"
                  alt="Illustrative obligation specimen interface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 475px"
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
