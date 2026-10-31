import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#0A2540] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[709px_507px] lg:gap-16">
          {/* Left Text Column */}
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              CONTACT ZOIKOASSURE
            </span>

            <h1 className="mt-4 text-[40px] font-semibold leading-[1.1] text-white sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
              Connect With the Right Team.
            </h1>

            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              Whether you are evaluating ZoikoAssure, need existing-customer assistance, or have a security, privacy, accessibility or media question, choose the pathway that matches your request.
            </p>

            <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]">
              Each route is published only when the responsible team and contact method are verified. Find the right team without guessing where a request belongs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="#contact-options"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore contact options
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden rounded">
                <Image
                  src="/images/research-contact/contact-hero.png"
                  alt="Executive team in a meeting discussing enterprise contact and evaluation strategies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 475px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

