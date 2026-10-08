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
          items-end
          justify-center
          gap-10
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:px-20
          lg:py-20
        "
      >
        {/* =====================================================
            CONTENT ROW
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-start
            gap-8
            lg:flex-row
            lg:items-center
            lg:gap-12
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
              lg:w-[616px]
              lg:shrink-0
            "
          >
            {/* Heading */}
            <div className="flex w-full flex-col items-start gap-3.5">
              <h2
                className="
                  m-0
                  w-full
                  text-3xl
                  font-bold
                  leading-9
                  text-sky-900
                  sm:text-4xl
                  sm:leading-10
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
              w-full
              overflow-hidden
              rounded-xl
              lg:h-[520px]
              lg:w-[616px]
              lg:shrink-0
            "
          >
            <img
              src="/images/about-us/image3.png"
              alt="Zoiko Assure team collaborating on institutional assurance"
              className="
                block
                h-auto
                w-full
                object-cover
                lg:h-full
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}