import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FR Engineering — Application & Data Engineering",
    template: "%s | FR Engineering",
  },
  description:
    "Layanan software engineering end-to-end untuk aplikasi, data platform, integrasi sistem, dan workflow automation.",
  keywords: [
    "software engineer Jakarta",
    "full stack developer Indonesia",
    "data engineering consultant",
    "Go developer Indonesia",
    "cloud migration consultant",
    "workflow automation",
  ],
  authors: [{ name: "FR Engineering" }],
  creator: "FR Engineering",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: "FR Engineering — Application & Data Engineering",
    description:
      "Pengembangan aplikasi end-to-end dan data engineering untuk sistem yang scalable dan mudah dioperasikan.",
    siteName: "FR Engineering",
  },
  twitter: {
    card: "summary",
    title: "FR Engineering — Application & Data Engineering",
    description:
      "Pengembangan aplikasi end-to-end, data engineering, integrasi sistem, dan workflow automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1118",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FR Engineering",
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  areaServed: ["Indonesia", "Asia Pacific"],
  serviceType: [
    "Full-stack Application Development",
    "Data Platform Engineering",
    "Workflow Automation",
    "Cloud Modernization",
  ],
  email: siteConfig.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </html>
  );
}
