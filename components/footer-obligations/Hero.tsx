import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              Regulatory Intelligence
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.03]">
              Obligations
            </h1>

            <p className="mt-6 max-w-[620px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              Understand what regulatory sources require—and how those requirements can be traced
              through applicability, controls, evidence and accountable assurance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/how-zoikoassure-works"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore How ZoikoAssure Works
              </Link>
            </div>

            <p className="mt-6 max-w-[620px] text-[14px] leading-6 text-[#D9E2EC]">
              An obligation describes a requirement in a particular legal and factual context. This
              page is an overview, not a determination of what applies to your organization.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <Image
              src="/footer-obligations/ob1.webp"
              alt="Team reviewing regulatory documents to understand their obligations"
              width={547}
              height={420}
              priority
              sizes="(max-width: 1024px) 100vw, 547px"
              className="h-auto w-full max-w-[547px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
