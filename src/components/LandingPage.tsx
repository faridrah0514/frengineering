import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { content, type Locale } from "@/lib/content";
import { siteConfig, whatsappUrl } from "@/lib/site";

const container = "mx-auto w-full max-w-[1208px] px-6 max-sm:px-4";
const buttonBase =
  "inline-flex min-h-[50px] items-center justify-center gap-[13px] rounded-[7px] border px-[21px] text-[0.83rem] font-bold leading-none transition duration-200 hover:-translate-y-0.5";
const arrowStyles =
  "w-[17px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]";
const kickerStyles =
  "mb-[19px] flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.15em] uppercase before:h-0.5 before:w-[23px] before:bg-lime before:content-['']";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className={arrowStyles} viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 fill-none stroke-[#889500] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]"
      viewBox="0 0 18 18"
    >
      <path d="m4 9 3 3 7-7" />
    </svg>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const directWhatsappUrl = whatsappUrl(copy.contact.whatsappMessage);

  return (
    <main lang={locale}>
      <header className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-ink/80 text-white backdrop-blur-2xl">
        <div className={`${container} flex min-h-20 items-center justify-between`}>
          <a className="inline-flex items-center gap-3" href="#top" aria-label={copy.nav.brandAria}>
            <span className="grid size-[38px] place-items-center rounded-md bg-lime text-[0.82rem] font-black tracking-[-0.04em] text-ink" aria-hidden="true">
              FR<span className="text-[#778300]">/</span>
            </span>
            <span className="text-[0.84rem] font-bold max-sm:hidden">FR Engineering</span>
          </a>

          <nav className="hidden items-center gap-9 min-[821px]:flex" aria-label={copy.nav.aria}>
            <a className="text-[0.78rem] font-semibold text-[#aeb7bf] transition-colors hover:text-white" href="#services">{copy.nav.services}</a>
            <a className="text-[0.78rem] font-semibold text-[#aeb7bf] transition-colors hover:text-white" href="#experience">{copy.nav.solutions}</a>
          </nav>

          <div className="flex items-center gap-[22px] max-sm:gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[0.66rem] font-bold text-[#65717b]" aria-label="Language">
              <Link className="px-0.5 py-1.5 text-[#7e8a94] transition-colors hover:text-lime aria-[current=page]:text-lime" href="/" aria-current={locale === "id" ? "page" : undefined}>ID</Link>
              <span>/</span>
              <Link className="px-0.5 py-1.5 text-[#7e8a94] transition-colors hover:text-lime aria-[current=page]:text-lime" href="/en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-ink pt-[164px] text-white [background-image:linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] [background-size:72px_72px] max-sm:pt-[120px] max-sm:[background-size:52px_52px]"
        id="top"
      >
        <div className="pointer-events-none absolute -top-[180px] left-[45%] size-[500px] rounded-full bg-lime/10 blur-[120px]" aria-hidden="true" />
        <div className={`${container} relative pb-20 min-[900px]:pb-[100px]`}>
          <div className="max-w-[920px]">
            <p className={`${kickerStyles} text-[#8d99a3]`}>{copy.hero.eyebrow}</p>
            <h1 className="m-0 max-w-[920px] text-[clamp(3.5rem,6vw,5.7rem)] leading-[1.04] font-semibold tracking-[-0.045em] max-sm:text-[clamp(2.85rem,13.5vw,4rem)] max-sm:leading-[1.06] max-sm:tracking-[-0.035em]">
              {copy.hero.title} <span className="text-lime">{copy.hero.highlight}</span>
            </h1>
            <p className="mt-[30px] max-w-[720px] text-[1.06rem] leading-[1.72] text-[#aeb8c0] max-sm:text-[0.96rem]">{copy.hero.lead}</p>
            <div className="mt-[37px] flex items-center gap-[30px] max-sm:flex-col max-sm:items-stretch max-sm:gap-3.5">
              <a className={`${buttonBase} border-transparent bg-lime text-ink hover:bg-[#f5ff8c]`} href="#contact">
                {copy.hero.primaryCta} <ArrowIcon />
              </a>
              <a className="border-b border-[#7c878f] px-0 py-2 text-[0.82rem] font-bold text-[#d7dee3] max-sm:self-start" href="#services">{copy.hero.secondaryCta}</a>
            </div>
          </div>
        </div>

        <div className={`${container} grid grid-cols-2 border-t border-white/10 min-[821px]:grid-cols-4`}>
          {copy.hero.capabilities.map(([title, description], index) => (
            <div
              className={`flex flex-col gap-1 px-7 py-[29px] ${index % 2 === 0 ? "border-r border-white/10 pl-0" : ""} ${index < 2 ? "border-b border-white/10 min-[821px]:border-b-0" : ""} ${index === 1 || index === 2 ? "min-[821px]:border-r min-[821px]:border-white/10" : ""} max-sm:px-[15px] max-sm:py-[23px]`}
              key={title}
            >
              <strong className="text-[0.87rem] font-semibold">{title}</strong>
              <span className="text-[0.65rem] text-[#78858f]">{description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-[108px] max-[820px]:py-[84px] max-sm:py-[72px]" id="services">
        <div className={container}>
          <div className="mb-[57px] grid items-end gap-5 min-[821px]:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.55fr)] min-[821px]:gap-[70px]">
            <p className={`${kickerStyles} text-[#6f7a73] min-[821px]:col-span-2 min-[821px]:mb-[-45px]`}>{copy.services.kicker}</p>
            <h2 className="m-0 text-[clamp(2.18rem,4vw,3.8rem)] leading-[1.12] font-semibold tracking-[-0.04em]">{copy.services.title}</h2>
            <p className="mb-1 max-w-[590px] text-[0.93rem] text-muted">{copy.services.intro}</p>
          </div>

          <div className="grid gap-3.5 min-[821px]:grid-cols-3">
            {copy.services.items.map((service, index) => (
              <article className="flex min-h-[460px] flex-col rounded-[10px] border border-line bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-[#c9cec6] hover:shadow-[0_18px_45px_rgba(10,18,25,0.06)] max-[820px]:min-h-[410px] max-sm:min-h-[420px] max-sm:p-[27px]" key={service.title}>
                <span className="mb-[45px] grid size-[38px] place-items-center rounded-full bg-lime-soft font-mono text-[0.62rem] text-[#6d7900]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-[15px] text-[1.28rem] leading-[1.35] font-semibold tracking-[-0.018em]">{service.title}</h3>
                <p className="m-0 text-[0.86rem] text-muted">{service.description}</p>
                <ul className="mt-auto flex list-none flex-col gap-[11px] border-t border-line pt-[23px]">
                  {service.deliverables.map((item) => (
                    <li className="grid grid-cols-[17px_1fr] items-center gap-2 text-[0.75rem] text-[#58645e]" key={item}><CheckIcon />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-[108px] max-[820px]:py-[84px] max-sm:py-[72px]" id="experience">
        <div className={container}>
          <div className="mb-[57px] max-w-[700px]">
            <p className={`${kickerStyles} text-[#6f7a73]`}>{copy.solutions.kicker}</p>
            <h2 className="m-0 text-[clamp(2.18rem,4vw,3.8rem)] leading-[1.12] font-semibold tracking-[-0.04em]">{copy.solutions.title}</h2>
          </div>

          <div className="grid border-y border-[#ced3cd] min-[821px]:grid-cols-3">
            {copy.solutions.items.map((solution) => (
              <article className="min-h-[240px] border-b border-[#ced3cd] px-[34px] py-[33px] last:border-b-0 min-[821px]:min-h-[280px] min-[821px]:border-r min-[821px]:border-b-0 min-[821px]:last:border-r-0 max-sm:px-[25px] max-sm:py-[29px]" key={solution.title}>
                <span className="text-[0.64rem] font-bold tracking-[0.11em] text-[#7b8700] uppercase">{solution.label}</span>
                <h3 className="mt-[38px] mb-[13px] text-[1.22rem] leading-[1.38] font-semibold tracking-[-0.018em] min-[821px]:mt-[55px]">{solution.title}</h3>
                <p className="m-0 text-[0.82rem] text-muted">{solution.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px border-y border-line bg-line min-[821px]:grid-cols-4">
            {copy.solutions.metrics.map(([value, label]) => (
              <div className="flex min-h-[110px] flex-col justify-center bg-white px-5 py-4" key={label}>
                <strong className="text-[2rem] leading-none font-semibold tracking-[-0.05em] text-body">{value}</strong>
                <span className="mt-2 text-[0.62rem] font-bold tracking-[0.08em] text-muted uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-soft py-[108px] text-white max-[820px]:py-[84px] max-sm:py-[72px]" id="contact">
        <div className={`${container} grid items-start gap-[55px] min-[900px]:grid-cols-[minmax(320px,0.85fr)_minmax(500px,1.15fr)] min-[900px]:gap-[105px]`}>
          <div className="max-w-[680px] pt-4">
            <p className={`${kickerStyles} text-[#8a96a0]`}>{copy.contact.kicker}</p>
            <h2 className="m-0 text-[clamp(2.18rem,4vw,3.8rem)] leading-[1.12] font-semibold tracking-[-0.04em]">{copy.contact.title}</h2>
            <p className="mt-6 text-[#9aa6af]">{copy.contact.intro}</p>

            <div className="mt-[34px] flex flex-col gap-3.5">
              {copy.contact.points.map((point) => (
                <div className="grid grid-cols-[18px_1fr] gap-[9px] text-[0.78rem] text-[#a4afb7] [&_svg]:stroke-lime" key={point}><CheckIcon /><span>{point}</span></div>
              ))}
            </div>

            <a className="mt-[38px] inline-flex items-center gap-2.5 border-b border-lime/55 pb-[5px] text-[0.8rem] font-bold text-lime" href={directWhatsappUrl} target="_blank" rel="noreferrer">
              {copy.contact.directCta} <ArrowIcon />
            </a>
          </div>

          <ContactForm locale={locale} />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#090f15] pt-[52px] pb-6 text-white">
        <div className={`${container} grid items-center gap-[18px] pb-12 min-[581px]:grid-cols-[auto_1fr] min-[581px]:gap-[34px] min-[821px]:grid-cols-[auto_1fr_auto]`}>
          <a className="inline-flex items-center gap-3" href="#top">
            <span className="grid size-[38px] place-items-center rounded-md bg-lime text-[0.82rem] font-black tracking-[-0.04em] text-ink" aria-hidden="true">FR<span className="text-[#778300]">/</span></span>
            <span className="text-[0.84rem] font-bold">FR Engineering</span>
          </a>
          <p className="m-0 text-[0.75rem] text-[#78848e]">{copy.footer}</p>
          <div className="flex gap-6 max-[580px]:flex-col max-[580px]:items-start max-[580px]:gap-2 min-[581px]:col-span-2 min-[821px]:col-span-1">
            <a className="text-[0.7rem] text-[#a6b0b8] hover:text-lime" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a className="text-[0.7rem] text-[#a6b0b8] hover:text-lime" href={directWhatsappUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
        <div className={`${container} flex justify-between border-t border-white/10 pt-[22px] text-[0.63rem] text-[#5d6973] max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
          <span>© {new Date().getFullYear()} FR Engineering</span>
          <span>Jakarta · Indonesia · APAC</span>
        </div>
      </footer>
    </main>
  );
}
