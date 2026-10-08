export default function PublicCommunicationSection() {
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
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-8
            lg:flex-row
            lg:items-center
            lg:gap-12
          "
        >
          {/* =====================================================
              IMAGE
          ====================================================== */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              lg:w-[560px]
              lg:h-[482px]
              lg:shrink-0
            "
          >
            <img
              src="/images/about-us/image2.png"
              alt="Professional team discussing regulatory assurance"
              className="
                block
                h-auto
                w-full
                object-cover
                lg:h-full
              "
            />
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              lg:w-[672px]
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
                Public communication with discipline.
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
                Zoiko Assure approaches public communication with the same
                discipline expected of its product. Press, analyst and
                industry communications should distinguish implemented
                capabilities from roadmap, verified facts from estimates,
                standards alignment from certification, and AI assistance from
                accountable legal or compliance judgment.
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
                Press inquiries, speaking requests and approved brand assets
                should route through the Press &amp; Media area of the Company
                section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}