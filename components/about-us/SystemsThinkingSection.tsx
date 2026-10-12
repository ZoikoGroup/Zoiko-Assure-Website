import Image from "next/image";

export default function SystemsThinkingSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-center
          gap-8
          px-4
          py-10
          sm:gap-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
          xl:px-20
          xl:py-20
        "
      >
        {/* =====================================================
            CONTENT ROW
        ====================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-2
            lg:gap-10
            xl:gap-14
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
            "
          >
            {/* Heading */}
            <div className="flex w-full flex-col items-start gap-3.5">
              <h2
                className="
                  m-0
                  w-full
                  text-2xl
                  font-bold
                  leading-8
                  text-sky-900
                  sm:text-3xl
                  sm:leading-9
                  lg:text-4xl
                  lg:leading-10
                "
              >
                Systems thinking. Institutional judgment.
              </h2>
            </div>

            {/* =================================================
                TEXT CARD
            ================================================== */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-6
                rounded-xl
                bg-slate-50
                p-6
                sm:p-8
              "
            >
              {/* Main paragraph */}
              <p
                className="
                  m-0
                  w-full
                  text-base
                  font-normal
                  leading-7
                  text-slate-600
                  sm:text-lg
                "
              >
                Zoiko Assure is building infrastructure for a regulator-defined,
                AI-enabled era. We seek people who can combine systems thinking
                with institutional judgment: engineers who understand evidence
                and failure modes; regulatory specialists who can translate
                rules without flattening nuance; security and governance
                professionals who treat accountability as a design requirement.
              </p>

              {/* Highlight paragraph */}
              <p
                className="
                  m-0
                  w-full
                  text-base
                  font-semibold
                  leading-7
                  text-cyan-950
                  sm:text-lg
                "
              >
                We value rigor over theater, clarity over noise, responsible
                speed over uncontrolled automation, and long-term accountability
                over short-term optics.
              </p>
            </div>
          </div>

          {/* ===================================================
              RIGHT IMAGE
          ==================================================== */}
          <div
            className="
              relative
              w-full
              aspect-[4/3]
              sm:aspect-[16/10]
              lg:aspect-auto
              lg:h-[480px]
              xl:h-[520px]
              overflow-hidden
              rounded-xl
            "
          >
            <Image
              src="/images/about-us/image3.png"
              alt="Zoiko Assure team collaborating on institutional assurance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}