export default function InfrastructureSection() {
  return (
    <section className="w-full overflow-hidden bg-slate-50">
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
            LEFT IMAGE
        ========================================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-3xl
            lg:w-[560px]
            lg:shrink-0
          "
        >
          <img
            src="/images/about-us/image1.png"
            alt="Team working on continuous regulatory assurance"
            className="
              block
              h-auto
              min-h-[280px]
              w-full
              object-cover
              object-center
              sm:min-h-[360px]
              lg:h-[448px]
              lg:min-h-0
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
            gap-8
            lg:w-[580px]
            lg:shrink-0
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
              gap-6
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