export default function KnowDemonstrateDefend() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-10
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:px-20
          lg:py-20
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
            justify-center
            gap-8
            lg:w-[580px]
            lg:shrink-0
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
            "
          >
            {/* Main Heading */}
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
              Know. Demonstrate. Defend.
            </h2>

            {/* Secondary Heading */}
            <h3
              className="
                m-0
                w-full
                text-2xl
                font-semibold
                leading-8
                text-sky-900
                sm:text-3xl
                sm:leading-9
              "
            >
              A world in which every regulated organization can know what
              applies, demonstrate what is controlled, and defend its
              decisions with evidence.
            </h3>
          </div>

          {/* Description */}
          <div className="flex w-full flex-col items-start">
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
              Our vision is for regulatory assurance to become a continuous
              organizational capability rather than a periodic reconstruction
              exercise. Regulation will remain complex. The objective is not
              to make that complexity disappear; it is to make the
              organization’s response to it structured, traceable and
              accountable.
            </p>
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-3xl
            lg:flex-1
          "
        >
          <img
            src="/images/about-us/image.png"
            alt="Regulatory assurance team reviewing compliance information"
            className="
              block
              h-auto
              min-h-[280px]
              w-full
              object-cover
              object-center
              sm:min-h-[340px]
              lg:h-[395px]
              lg:min-h-0
            "
          />
        </div>
      </div>
    </section>
  );
}