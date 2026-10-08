"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#071C33]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:px-0
          lg:py-[92px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-12
            lg:flex-row
            lg:items-center
            lg:gap-12
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              lg:w-[720px]
              lg:max-w-[720px]
              lg:shrink-0
            "
          >
            {/* =========================================
                LABEL
            ========================================== */}
            <div
              className="
                inline-flex
                items-center
                overflow-hidden
                rounded-full
                bg-white
                px-3
                py-1.5
                outline
                outline-1
                outline-offset-[-1px]
                outline-zinc-200
              "
            >
              <span
                className="
                  text-xs
                  font-semibold
                  leading-4
                  text-gray-800
                "
              >
                ABOUT ZOIKOASSURE
              </span>
            </div>

            {/* =========================================
                MAIN HEADING
            ========================================== */}
            <h1
              className="
                m-0
                w-full
                text-[40px]
                font-bold
                leading-[48px]
                tracking-[-0.5px]
                sm:text-[44px]
                sm:leading-[53px]
                lg:text-5xl
                lg:leading-[58px]
              "
            >
              <span className="text-white">
                Compliance Should Be
                <br />
                Provable —
                <br />
              </span>

              <span className="text-amber-600">
                Not Reconstructed.
              </span>
            </h1>

            {/* =========================================
                DESCRIPTION 1
            ========================================== */}
            <p
              className="
                m-0
                w-full
                text-base
                font-normal
                leading-7
                text-zinc-300
                sm:text-lg
              "
            >
              Zoiko Assure is a global regulatory intelligence and continuous
              compliance assurance platform for organizations operating across
              complex, multi-jurisdictional regulatory environments.
            </p>

            {/* =========================================
                DESCRIPTION 2
            ========================================== */}
            <p
              className="
                m-0
                w-full
                text-base
                font-normal
                leading-7
                text-zinc-300
                sm:text-lg
              "
            >
              It connects authoritative regulatory sources to applicability,
              obligations, controls, evidence and assurance — helping
              organizations understand what applies, what changed, what is
              controlled, what can be proven, and what still requires
              accountable human review.
            </p>

            {/* =========================================
                SUPPORTING TEXT
            ========================================== */}
            <p
              className="
                m-0
                w-full
                text-lg
                font-semibold
                leading-7
                text-white
                sm:text-xl
              "
            >
              Know What Applies. Prove What’s Controlled. Stay Ready for
              Scrutiny.
            </p>

            {/* =========================================
                CTA BUTTONS
            ========================================== */}
            <div
              className="
                flex
                w-full
                flex-col
                items-stretch
                gap-3
                sm:w-auto
                sm:flex-row
                sm:items-start
                sm:gap-4
              "
            >
              {/* REQUEST A DEMO */}
              <Link
                href="/request-demo"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-lg
                  bg-amber-600
                  px-6
                  text-base
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-amber-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-500
                  focus:ring-offset-2
                  focus:ring-offset-[#071C33]
                "
              >
                <span>Request a Demo</span>

                <span
                  className="
                    text-[16px]
                    leading-none
                    text-white
                  "
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              {/* EXPLORE PLATFORM */}
              <Link
                href="/platform"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-lg
                  border
                  border-zinc-200
                  bg-transparent
                  px-6
                  text-base
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-white/5
                  focus:outline-none
                  focus:ring-2
                  focus:ring-zinc-300
                  focus:ring-offset-2
                  focus:ring-offset-[#071C33]
                "
              >
                <span>Explore the Platform</span>

                <span
                  className="
                    text-[16px]
                    leading-none
                    text-white
                  "
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </div>

            {/* =========================================
                COMPANY DESCRIPTION
            ========================================== */}
            <p
              className="
                m-0
                w-full
                text-sm
                font-normal
                leading-5
                text-zinc-300
              "
            >
              Zoiko Assure is a platform of Zoiko Tech Inc., a Zoiko Group
              company.
            </p>
          </div>

          {/* =========================================
              RIGHT IMAGE
          ========================================== */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-sm
              lg:w-[511px]
              lg:shrink-0
            "
          >
            <Image
              src="/images/about-us/hero.png"
              alt="Zoiko Assure regulatory compliance meeting"
              width={511}
              height={558}
              priority
              className="
                block
                h-auto
                w-full
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}