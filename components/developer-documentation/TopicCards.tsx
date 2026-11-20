const topics = [
  {
    title: "Getting started",
    description:
      "Prerequisites, expected result and accountable owner. Open approved task article.",
  },
  {
    title: "Integration lifecycle",
    description: "Verified article list. Omit empty topic; never imply API/SDK availability.",
  },
  {
    title: "Data and evidence",
    description: "Reviewed technical content grouped by task; release and scope visible.",
  },
  {
    title: "Troubleshooting",
    description:
      "Symptom; precondition check; next action; expected observation; escalation. Link relevant guide if approved.",
  },
  {
    title: "Release guidance",
    description: "Release date, change summary, affected scope, required action, impact, links.",
  },
];

export default function TopicCards() {
  return (
    <section id="browse-topics" className="w-full scroll-mt-24 bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Browse topics
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`flex flex-col rounded-lg border border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {topic.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
