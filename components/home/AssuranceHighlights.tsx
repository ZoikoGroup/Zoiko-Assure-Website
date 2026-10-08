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
          min-h-[288px]
          w-full
          max-w-[1440px]
          items-center
          px-6
          py-14
          sm:px-8
          lg:px-12
          lg:py-16
          xl:px-20
          xl:py-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
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