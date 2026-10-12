import Image from "next/image";

export default function KnowDemonstrateDefend() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-8
          sm:gap-10
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:grid-cols-2
          lg:items-center
          lg:gap-10
          lg:px-8
          lg:py-16
          xl:gap-16
          xl:px-20
          xl:py-20
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================== */}
        <div className="flex w-full flex-col items-start justify-center gap-6 sm:gap-8">
          <div className="flex w-full flex-col items-start gap-4 sm:gap-6">
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
                text-xl
                font-semibold
                leading-7
                text-sky-900
                sm:text-2xl
                sm:leading-8
                lg:text-3xl
                lg:leading-9
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
            h-[260px]
            sm:h-[340px]
            lg:h-[395px]
            w-full
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
          "
        >
          <Image
            src="/images/about-us/image.png"
            alt="Regulatory assurance team reviewing compliance information"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              object-center
            "
          />
        </div>
      </div>
    </section>
  );
}