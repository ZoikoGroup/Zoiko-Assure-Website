import Image from "next/image";
import Link from "next/link";
import { ZOIKO_TECH_URL } from "./links";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              About Zoiko Tech
            </span>

            <h1 className="mt-4 max-w-[710px] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.07]">
              The Technology Company Behind ZoikoAssure
            </h1>

            <p className="mt-6 max-w-[710px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company. Zoiko Tech
              develops enterprise technology and digital platforms with a focus on governed
              systems, operational accountability, and long-term resilience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={ZOIKO_TECH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Explore Zoiko Tech
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link
                href="/about-zoiko-assure"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                About ZoikoAssure
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-3 sm:p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/company-zoiko-tech/zt1.webp"
                alt="Engineering team collaborating around a monitor in an enterprise office"
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
