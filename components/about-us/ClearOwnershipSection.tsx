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
            HEADING
        ====================================================== */}
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
            lg:gap-16
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
              lg:w-[760px]
              lg:shrink-0
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
              lg:flex-1
            "
          >
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