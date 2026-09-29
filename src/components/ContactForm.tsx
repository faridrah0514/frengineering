"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

const formCopy = {
  id: {
    name: "Nama",
    namePlaceholder: "Nama Anda",
    company: "Perusahaan / produk",
    optional: "opsional",
    companyPlaceholder: "Nama perusahaan",
    problem: "Apa yang ingin Anda bangun atau perbaiki?",
    problemPlaceholder: "Ceritakan singkat sistem, kendala utama, dan hasil yang Anda harapkan.",
    budget: "Kisaran budget",
    budgets: ["Belum ditentukan", "Di bawah Rp50 juta", "Rp50–100 juta", "Rp100–200 juta", "Di atas Rp200 juta"],
    timeline: "Target waktu",
    timelines: ["Perlu didiskusikan", "Secepatnya", "1–3 bulan", "3–6 bulan", "Lebih dari 6 bulan"],
    submit: "Lanjutkan di WhatsApp",
    note: "Form ini tidak menyimpan data. Pesan akan dibuka langsung di WhatsApp Anda.",
    message: "Halo, saya ingin mendiskusikan kebutuhan software engineering.",
    emptyCompany: "Belum ada",
    messageLabels: ["Nama", "Perusahaan/produk", "Kebutuhan", "Kisaran budget", "Target waktu"],
  },
  en: {
    name: "Name",
    namePlaceholder: "Your name",
    company: "Company / product",
    optional: "optional",
    companyPlaceholder: "Company name",
    problem: "What would you like to build or improve?",
    problemPlaceholder: "Briefly describe the system, main challenge, and the outcome you expect.",
    budget: "Budget range",
    budgets: ["Not decided yet", "Below IDR 50 million", "IDR 50–100 million", "IDR 100–200 million", "Above IDR 200 million"],
    timeline: "Target timeline",
    timelines: ["To be discussed", "As soon as possible", "1–3 months", "3–6 months", "More than 6 months"],
    submit: "Continue on WhatsApp",
    note: "This form does not store your data. Your message will open directly in WhatsApp.",
    message: "Hello, I would like to discuss a software engineering project.",
    emptyCompany: "Not specified",
    messageLabels: ["Name", "Company/product", "Requirement", "Budget range", "Target timeline"],
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = formCopy[locale];
  const fieldStyles = "mb-[18px] flex flex-col gap-2";
  const labelStyles = "text-[0.71rem] font-bold";
  const controlStyles =
    "w-full rounded-md border border-[#dfe3dc] bg-[#f7f8f5] px-[13px] text-body outline-none transition duration-150 placeholder:text-[#9ca49f] focus:border-[#9daa16] focus:bg-white focus:ring-[3px] focus:ring-[#dbea3e]/20";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const company = data.get("company")?.toString().trim();
    const problem = data.get("problem")?.toString().trim();
    const budget = data.get("budget")?.toString();
    const timeline = data.get("timeline")?.toString();
    const [nameLabel, companyLabel, problemLabel, budgetLabel, timelineLabel] =
      copy.messageLabels;

    const message = [
      copy.message,
      "",
      `${nameLabel}: ${name}`,
      `${companyLabel}: ${company || copy.emptyCompany}`,
      `${problemLabel}: ${problem}`,
      `${budgetLabel}: ${budget}`,
      `${timelineLabel}: ${timeline}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="w-full max-w-[680px] rounded-[11px] bg-white p-[38px] text-body shadow-[0_25px_65px_rgba(0,0,0,0.2)] max-sm:-mx-[5px] max-sm:w-[calc(100%+10px)] max-sm:p-[27px_21px]"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className={fieldStyles}>
          <span className={labelStyles}>{copy.name}</span>
          <input className={`${controlStyles} h-[47px]`} autoComplete="name" name="name" placeholder={copy.namePlaceholder} required type="text" />
        </label>

        <label className={fieldStyles}>
          <span className={labelStyles}>{copy.company} <em className="text-[0.64rem] font-medium text-[#929b96] not-italic">{copy.optional}</em></span>
          <input className={`${controlStyles} h-[47px]`} autoComplete="organization" name="company" placeholder={copy.companyPlaceholder} type="text" />
        </label>
      </div>

      <label className={fieldStyles}>
        <span className={labelStyles}>{copy.problem}</span>
        <textarea className={`${controlStyles} min-h-[120px] resize-y py-[13px]`} name="problem" placeholder={copy.problemPlaceholder} required rows={5} />
      </label>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className={fieldStyles}>
          <span className={labelStyles}>{copy.budget}</span>
          <select className={`${controlStyles} h-[47px] cursor-pointer`} defaultValue={copy.budgets[0]} name="budget">
            {copy.budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        </label>

        <label className={fieldStyles}>
          <span className={labelStyles}>{copy.timeline}</span>
          <select className={`${controlStyles} h-[47px] cursor-pointer`} defaultValue={copy.timelines[0]} name="timeline">
            {copy.timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
          </select>
        </label>
      </div>

      <button className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-[13px] rounded-[7px] border-0 bg-lime px-[21px] text-[0.83rem] leading-none font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5ff8c]" type="submit">
        {copy.submit}<span aria-hidden="true">↗</span>
      </button>

      <p className="mt-3 text-center text-[0.64rem] text-[#8a948e]">{copy.note}</p>
    </form>
  );
}
