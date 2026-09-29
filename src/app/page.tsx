import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Pengembangan Aplikasi & Data Engineering",
  description:
    "Layanan software engineering end-to-end untuk aplikasi, data platform, integrasi sistem, dan workflow automation.",
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/", "en-US": "/en" },
  },
};

export default function Home() {
  return <LandingPage locale="id" />;
}
