import Image from "next/image";

export default function InfrastructureSection() {
  return (
    <section className="w-full overflow-hidden bg-slate-50">
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
            LEFT IMAGE
        ========================================== */}
        <div
          className="
            relative
            h-[260px]
            sm:h-[340px]
            lg:h-[420px]
            w-full
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
          "
        >
          <Image
            src="/images/about-us/image1.png"
            alt="Team working on continuous regulatory assurance"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* =========================================
            RIGHT CONTENT
        ========================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            justify-center
            gap-6
            sm:gap-8
          "
        >
          {/* =========================================
              HEADINGS
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4
              sm:gap-6
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
              Infrastructure for continuous regulatory assurance.
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
              "
            >
              To build the infrastructure layer for continuous regulatory
              assurance.
            </h3>
          </div>

          {/* =========================================
              BODY CONTENT
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4
              sm:gap-6
            "
          >
            {/* Description */}
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
              We are building systems that connect regulatory intelligence to
              operational reality — so obligations can be understood in
              context, controls can be governed, evidence can be preserved, AI
              can be used responsibly, and decision-makers can see what is
              proven and what still requires action.
            </p>

            {/* Mission */}
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
              Our mission is not to simplify regulation into a false
              certainty. It is to operationalize regulatory obligations
              without losing provenance, nuance or accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}