const RIBBON_ITEMS = [
  {
    title: "Source Context",
    description: "Traceable authoritative material.",
  },
  {
    title: "Scope & Jurisdiction",
    description: "Where and who is affected.",
  },
  {
    title: "As-of Date",
    description: "Clear timing and review context.",
  },
  {
    title: "Human Accountability",
    description: "Reviewed, non-autonomous decisions.",
  },
];

export default function AccountabilityRibbon() {
  return (
    <section className="relative z-10 w-full bg-white">
      {/* Pulling up the ribbon slightly or placing it as designed */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="relative -mt-[30px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RIBBON_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] border-t-[4px] border-t-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
            >
              <h4
                className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.title}
              </h4>
              <p
                className="pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

