import Link from "next/link";

interface TopicCard {
  title: string;
  description: string;
  href: string;
}

const topics: TopicCard[] = [
  {
    title: "Explore ZoikoAssure",
    description: "Evaluate the platform with our team.",
    href: "#evaluate",
  },
  {
    title: "Customer Support",
    description: "Existing customer assistance and portals.",
    href: "#support",
  },
  {
    title: "Security Contact",
    description: "Report a security issue or vulnerability.",
    href: "#support",
  },
  {
    title: "Privacy Request",
    description: "Manage your data and privacy rights.",
    href: "#privacy",
  },
  {
    title: "Accessibility Help",
    description: "Get accessibility support or report a barrier.",
    href: "#privacy",
  },
  {
    title: "Press & Media",
    description: "Institutional communications and resources.",
    href: "#media",
  },
  {
    title: "Careers",
    description: "Genuine openings and recruitment contacts.",
    href: "#media",
  },
  {
    title: "General Question",
    description: "For matters outside specialist channels.",
    href: "#evaluate",
  },
];

export default function HelpTopicsGrid() {
  return (
    <section id="contact-options" className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div>
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            What can we help you with?
          </h2>
          <p className="mt-3 max-w-[1280px] text-[16px] font-normal leading-[25.6px] text-[#5F6B7A] xl:whitespace-nowrap">
            Choose the destination that best fits your question. Allow visitors to recognize their task; prevent personal or sensitive data entering the wrong workflow.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="flex min-h-[128px] flex-col justify-between rounded-lg border border-[#4C86FF] border-t-4 border-t-[#4C86FF] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-md"
            >
              <div>
                <h3 className="text-[13.3px] font-semibold leading-[15.94px] text-[#0A2540]">
                  {topic.title}
                </h3>
                <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                  {topic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
