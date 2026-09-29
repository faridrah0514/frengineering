export const content = {
  id: {
    nav: {
      services: "Layanan",
      solutions: "Pengalaman",
      aria: "Navigasi utama",
      brandAria: "FR Engineering, kembali ke atas",
    },
    hero: {
      eyebrow: "Full-stack application · Data engineering",
      title: "Bangun aplikasi dan data platform dari ide hingga",
      highlight: "production.",
      lead: "Layanan software engineering end-to-end untuk web application, internal tools, integrasi sistem, workflow automation, dan data platform.",
      primaryCta: "Konsultasikan proyek",
      secondaryCta: "Lihat layanan",
      capabilities: [
        ["Full-stack", "Web & product engineering"],
        ["Data", "Pipeline & analytics"],
        ["Automation", "Workflow & integration"],
        ["Cloud", "Deploy & operate"],
      ],
    },
    services: {
      kicker: "Layanan",
      title: "Satu partner untuk membangun dan menjalankan sistem digital.",
      intro: "Mulai dari ide baru, pengembangan sistem existing, hingga perbaikan proses dan platform data.",
      items: [
        {
          title: "End-to-end Application Development",
          description: "Pengembangan aplikasi dari perencanaan, desain teknis, implementasi, hingga deployment dan support.",
          deliverables: ["Web application & SaaS", "Internal tools & dashboard", "Customer portal", "Cloud deployment"],
        },
        {
          title: "Data Engineering",
          description: "Data platform yang akurat, scalable, dan siap digunakan untuk analytics maupun kebutuhan operasional.",
          deliverables: ["Data pipeline", "Data warehouse & lakehouse", "Data quality & observability", "Analytics platform"],
        },
        {
          title: "Integration & Automation",
          description: "Menghubungkan sistem dan mengotomatisasi workflow untuk mengurangi pekerjaan manual dan risiko operasional.",
          deliverables: ["Third-party integration", "Workflow automation", "Legacy modernization", "Operational tooling"],
        },
      ],
    },
    solutions: {
      kicker: "Profil & keahlian",
      title: "Membangun aplikasi dan data platform untuk kebutuhan production.",
      items: [
        {
          label: "Application engineering",
          title: "End-to-end application delivery",
          description: "Pengembangan aplikasi dari desain sistem dan implementasi hingga integrasi, deployment, dan production support.",
        },
        {
          label: "Data engineering",
          title: "Batch, real-time, dan analytics platform",
          description: "Data pipeline, workflow orchestration, dan analytics platform untuk kebutuhan batch maupun real-time.",
        },
        {
          label: "Cloud & production",
          title: "Platform delivery dan operations",
          description: "Cloud infrastructure, deployment automation, observability, dan operational readiness untuk sistem production.",
        },
      ],
      metrics: [
        ["13+", "Tahun pengalaman"],
        ["5.000+", "Metrik pada platform"],
        ["10 jt+", "Query per hari"],
        ["100+", "Tabel dimigrasikan"],
      ],
    },
    contact: {
      kicker: "Mulai proyek",
      title: "Ada aplikasi atau data platform yang ingin dibangun?",
      intro: "Kirim ringkasan kebutuhannya untuk mendapatkan pembahasan awal mengenai solusi, scope, dan langkah berikutnya.",
      points: ["Pembahasan langsung dan teknis", "Scope dan estimasi yang transparan", "Fleksibel untuk proyek baru atau sistem existing"],
      directCta: "Langsung melalui WhatsApp",
      whatsappMessage: "Halo, saya ingin mendiskusikan kebutuhan aplikasi atau data engineering.",
    },
    footer: "Full-stack application & data engineering.",
  },
  en: {
    nav: {
      services: "Services",
      solutions: "Experience",
      aria: "Main navigation",
      brandAria: "FR Engineering, back to top",
    },
    hero: {
      eyebrow: "Full-stack application · Data engineering",
      title: "Build applications and data platforms from idea to",
      highlight: "production.",
      lead: "End-to-end software engineering for web applications, internal tools, system integrations, workflow automation, and data platforms.",
      primaryCta: "Discuss your project",
      secondaryCta: "Explore services",
      capabilities: [
        ["Full-stack", "Web & product engineering"],
        ["Data", "Pipeline & analytics"],
        ["Automation", "Workflow & integration"],
        ["Cloud", "Deploy & operate"],
      ],
    },
    services: {
      kicker: "Services",
      title: "One engineering partner to build and operate digital systems.",
      intro: "From new product ideas and existing system development to process improvement and data platforms.",
      items: [
        {
          title: "End-to-end Application Development",
          description: "Application development from planning and technical design through implementation, deployment, and support.",
          deliverables: ["Web applications & SaaS", "Internal tools & dashboards", "Customer portals", "Cloud deployment"],
        },
        {
          title: "Data Engineering",
          description: "Accurate, scalable data platforms ready for analytics and day-to-day operational needs.",
          deliverables: ["Data pipelines", "Data warehouse & lakehouse", "Data quality & observability", "Analytics platforms"],
        },
        {
          title: "Integration & Automation",
          description: "Connect systems and automate workflows to reduce manual work and operational risk.",
          deliverables: ["Third-party integrations", "Workflow automation", "Legacy modernization", "Operational tooling"],
        },
      ],
    },
    solutions: {
      kicker: "Profile & expertise",
      title: "Building applications and data platforms for production.",
      items: [
        {
          label: "Application engineering",
          title: "End-to-end application delivery",
          description: "Application development from system design and implementation through integration, deployment, and production support.",
        },
        {
          label: "Data engineering",
          title: "Batch, real-time, and analytics platforms",
          description: "Data pipelines, workflow orchestration, and analytics platforms for both batch and real-time use cases.",
        },
        {
          label: "Cloud & production",
          title: "Platform delivery and operations",
          description: "Cloud infrastructure, deployment automation, observability, and operational readiness for production systems.",
        },
      ],
      metrics: [
        ["13+", "Years of experience"],
        ["5,000+", "Platform metrics"],
        ["10M+", "Daily queries"],
        ["100+", "Tables migrated"],
      ],
    },
    contact: {
      kicker: "Start a project",
      title: "Have an application or data platform to build?",
      intro: "Share a short brief to start a practical discussion about the solution, scope, and next steps.",
      points: ["Direct, technical discussion", "Transparent scope and estimates", "Flexible for new projects or existing systems"],
      directCta: "Continue on WhatsApp",
      whatsappMessage: "Hello, I would like to discuss an application or data engineering project.",
    },
    footer: "Full-stack application & data engineering.",
  },
} as const;

export type Locale = keyof typeof content;
