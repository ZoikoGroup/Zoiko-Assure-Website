import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Platform",
    href: "#",
  },
  {
    label: "Solutions",
    href: "#",
  },
  {
    label: "Regulatory Intelligence",
    href: "#",
  },
  {
    label: "Trust Center",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "Company",
    href: "#",
  },
];

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.67 11.33L11.33 4.67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.67 4.67H11.33V9.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-zinc-200">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          aria-label="ZoikoAssure Home"
        >
          <Image
            src="/logos/logo.png"
            alt="ZoikoAssure"
            width={172}
            height={50}
            priority
            className="h-[50px] w-[172px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-cyan-950 transition-colors hover:text-amber-600"
            >
              <span>{item.label}</span>
              <ChevronDown />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/sign-in"
            className="whitespace-nowrap text-xs font-medium text-cyan-950 transition-colors hover:text-amber-600"
          >
            Sign In
          </Link>

          <Link
            href="/request-demo"
            className="flex h-10 items-center gap-3 rounded-lg bg-amber-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-amber-700"
          >
            <span>Request A Demo</span>
            <ArrowUpRight />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-cyan-950 lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 10H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 15H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}