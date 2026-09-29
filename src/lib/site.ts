export const siteConfig = {
  name: "FR Engineering",
  role: "Full-stack Application & Data Engineering",
  description:
    "Layanan end-to-end untuk pengembangan aplikasi, data engineering, integrasi sistem, dan workflow automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://faridrahman.dev",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fr.farid.rahman@gmail.com",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281299266009",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
