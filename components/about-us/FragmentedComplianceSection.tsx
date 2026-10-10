export default function FragmentedComplianceSection() {
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
          gap-8
          sm:gap-10
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
          xl:px-20
          xl:py-20
        "
      >
        {/* =========================================
            SECTION HEADING
        ========================================== */}
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
            From fragmented compliance to governed assurance.
          </h2>
        </div>

        {/* =========================================
            CONTENT
        ========================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-8
            sm:gap-10
            lg:flex-row
            lg:gap-10
            xl:gap-16
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
              lg:flex-1
              xl:max-w-[740px]
            "
          >
            {/* Paragraph 1 */}
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
              The compliance problem is no longer simply access to rules.
              Organizations already invest in legal advice, regulatory
              content, policies, controls, technology and specialist teams.
              The structural problem appears when those elements must be
              connected quickly enough — and with sufficient evidence — to
              answer a harder question: What applies to us, what have we done
              about it, and how can we prove it?
            </p>

            {/* Paragraph 2 */}
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
              Regulatory change arrives from different authorities and takes
              effect on different dates. Applicability depends on facts such
              as jurisdiction, legal entity, activity, product, customer type
              and data. Controls operate across different enterprise systems.
              Evidence is often distributed. Exceptions may be accepted
              without being resolved. AI can accelerate analysis while
              creating new accountability questions.
            </p>
          </div>

          {/* =========================================
              RIGHT CALLOUT
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              border-l-[3px]
              border-amber-600
              pl-5
              pt-2
              sm:pl-6
              lg:w-[320px]
              xl:w-[380px]
              lg:shrink-0
              lg:pl-8
            "
          >
            {/* Callout Heading */}
            <h3
              className="
                m-0
                w-full
                text-2xl
                font-semibold
                leading-9
                text-sky-900
                sm:text-3xl
                sm:leading-10
              "
            >
              What applies to us, what have we done about it, and how can we
              prove it?
            </h3>

            {/* Orange Divider */}
            <div
              className="
                h-[3px]
                w-14
                shrink-0
                bg-amber-600
              "
            />

            {/* Callout Description */}
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
              ZoikoAssure exists to turn that fragmented environment into a
              governed assurance system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}