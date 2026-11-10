import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              United States Regulatory Intelligence
            </span>

            <h1 className="mt-4 max-w-[640px] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
              Understand U.S. regulatory exposure in context.
            </h1>

            <p className="mt-6 max-w-[710px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              U.S. regulatory requirements may arise from federal and state sources and differ by
              organization, activity, location, and effective period. Explore how ZoikoAssure
              connects authoritative source information to governed applicability and
              evidence-backed assurance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/regulatory-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-white bg-transparent px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Regulatory Sources
              </Link>
            </div>

            <p className="mt-8 max-w-[710px] text-[14px] leading-6 text-[#D9E2EC]">
              This page explains an approach; it is not a comprehensive catalog of U.S.
              requirements or a legal determination for your organization.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-3 sm:p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/footer-united-states-regulatory-exposure/us1.webp"
                alt="Regulatory compliance network overlaid on a courtroom with a judge’s gavel"
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
