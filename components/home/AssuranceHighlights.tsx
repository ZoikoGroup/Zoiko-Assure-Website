"use client";

import Image from "next/image";

const highlights = [
  {
    icon: "/home/icon1.png",
    title: "Evidence lineage",
    description: "Trace proof to its source",
  },
  {
    icon: "/home/icon2.png",
    title: "Governed AI",
    description: "Attribution + accountable review",
  },
  {
    icon: "/home/icon3.png",
    title: "Multi-jurisdiction logic",
    description: "Context before conclusions",
  },
  {
    icon: "/home/icon4.png",
    title: "Audit readiness",
    description: "A reviewable basis for assurance",
  },
];

export default function AssuranceHighlights() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          items-center
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-14
          xl:px-20
          xl:py-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
            xl:gap-8
          "
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-3
                overflow-hidden
                text-center
              "
            >
              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* =================================================
                  TEXT
              ================================================== */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                  gap-1
                "
              >
                <h3
                  className="
                    w-full
                    text-center
                    text-[22px]
                    font-semibold
                    leading-[28px]
                    tracking-[-0.01em]
                    text-cyan-950
                    sm:text-2xl
                    sm:leading-[30px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    w-full
                    text-center
                    text-sm
                    font-normal
                    leading-5
                    text-slate-600
                    sm:text-base
                    sm:leading-6
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}