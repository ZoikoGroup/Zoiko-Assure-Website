export default function ClearOwnershipSection() {
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
            HEADING
        ====================================================== */}
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
            Clear ownership of consequential decisions.
          </h2>
        </div>

        {/* =====================================================
            CONTENT ROW
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-8
            lg:flex-row
            lg:items-start
            lg:gap-10
            xl:gap-16
          "
        >
          {/* ===================================================
              LEFT TEXT
          ==================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              lg:flex-1
              xl:max-w-[760px]
            "
          >
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
              Zoiko Assure is governed as institutional infrastructure.
              Leadership responsibility spans product architecture, regulatory
              intelligence, security, privacy, AI governance, operational
              resilience and customer accountability.
            </p>

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
              The leadership model is intended to preserve clear ownership of
              consequential decisions rather than diffuse responsibility across
              automation. Public leadership profiles should identify accountable
              executives only when names, titles and biographies are approved
              for publication.
            </p>
          </div>

          {/* ===================================================
              RIGHT CALLOUT
          ==================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              rounded-xl
              border
              border-orange-400
              bg-white
              p-6
              sm:p-8
              lg:w-[340px]
              lg:shrink-0
              xl:w-[420px]
            "
          >
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
              Institutional credibility is prioritized over marketing
              visibility.
            </h3>

            <p
              className="
                m-0
                w-full
                text-base
                font-normal
                leading-6
                text-slate-600
              "
            >
              Architecture · Regulatory intelligence · Security · Privacy · AI
              governance · Resilience · Customer accountability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}