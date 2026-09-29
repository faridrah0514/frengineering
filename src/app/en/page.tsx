import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Application Development & Data Engineering",
  description:
    "End-to-end software engineering for applications, data platforms, system integrations, and workflow automation.",
  alternates: {
    canonical: "/en",
    languages: { "id-ID": "/", "en-US": "/en" },
  },
};

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
