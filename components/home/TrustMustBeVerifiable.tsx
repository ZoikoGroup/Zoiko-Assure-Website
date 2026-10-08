import Image from "next/image";

const trustItems = [
  {
    icon: "/home/icon5.png",
    title: "Security",
    description: "Enterprise Encryption & Isolation",
  },
  {
    icon: "/home/icon6.png",
    title: "Privacy",
    description: "Zero Data Leakage",
  },
  {
    icon: "/home/icon7.png",
    title: "Responsible AI",
    description: "Source-Grounded Models",
  },
  {
    icon: "/home/icon8.png",
    title: "Deployment",
    description: "SaaS, Private Cloud, Air-Gapped",
  },
];

export default function TrustMustBeVerifiable() {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-start
          px-5
          py-14
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-20
        "
      >
        <div className="flex w-full flex-col items-start justify-center">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start">
            {/* Heading */}
            <div className="flex w-full flex-col items-start">
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-8
                  tracking-tight
                  text-sky-900
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Trust Must Be Verifiable
              </h2>
            </div>

            {/* Trust items */}
            <div className="mt-10 w-full sm:mt-12">
              <div
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-4
                  lg:gap-0
                "
              >
                {trustItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      min-h-[112px]
                      w-full
                      flex-col
                      items-center
                      justify-start
                      rounded-xl
                      p-6
                    "
                  >
                    {/* Icon + title */}
                    <div className="flex w-full flex-col items-center justify-center gap-2">
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>

                      <h3
                        className="
                          text-center
                          text-xl
                          font-bold
                          leading-5
                          text-sky-900
                        "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="mt-2 flex w-full justify-center">
                      <p
                        className="
                          w-full
                          max-w-[240px]
                          text-center
                          text-xs
                          font-normal
                          leading-4
                          text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}