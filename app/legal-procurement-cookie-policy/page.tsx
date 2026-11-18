import type { Metadata } from "next";
import {
  Hero,
  CookieCategoryCards,
  CookieRegisterAndThirdPartySection,
} from "@/components/legal-procurement-cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy | ZoikoAssure",
  description:
    "Understand the cookies and related technologies that may be used on this website and where to review your choices.",
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <CookieCategoryCards />
      <CookieRegisterAndThirdPartySection />
    </div>
  );
}
