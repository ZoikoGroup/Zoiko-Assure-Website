import Image from "next/image";

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
          {/* =====================================================
              IMAGE
          ====================================================== */}
          <div
            className="
              relative
              w-full
              aspect-[4/3]
              sm:aspect-[16/10]
              lg:aspect-auto
              lg:h-[440px]
              xl:h-[482px]
              overflow-hidden
              rounded-xl
            "
          >
            <Image
              src="/images/about-us/image2.png"
              alt="Professional team discussing regulatory assurance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
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