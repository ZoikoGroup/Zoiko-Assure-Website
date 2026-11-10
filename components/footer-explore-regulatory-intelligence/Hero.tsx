import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              Regulatory Intelligence
            </span>

            <h1 className="mt-4 max-w-[710px] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.03]">
              Explore Regulatory Intelligence
            </h1>

            <p className="mt-6 max-w-[710px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              Find the information you need to understand regulatory change, review obligations and
              inspect their authoritative sources.
            </p>

            <div className="mt-8">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
            </div>

            <p className="mt-8 max-w-[710px] text-[14px] leading-6 text-[#D9E2EC]">
              Every regulatory record must be understood in context: issuing authority,
              jurisdiction, document type, version, applicable dates and review status.
            </p>

            <p className="mt-4 max-w-[710px] text-[12px] font-semibold leading-5 text-[#9CA3AF]">
              Available sources and editorial coverage vary by jurisdiction, domain and publication
              rights. This page does not represent complete regulatory coverage or a legal
              applicability decision.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-3 sm:p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/footer-explore-regulatory-intelligence/eri1.webp"
                alt="Executive team reviewing an AI-assisted regulatory compliance overview"
                width={475}
                height={348}
                priority
                sizes="(max-width: 1024px) 100vw, 475px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
