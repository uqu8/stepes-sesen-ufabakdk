import React from "react";

const brand = {
  primary: "#C11D63",
  primaryDark: "#9F1D55",
  primaryDeep: "#7A1542",
  primarySoft: "#FDF2F7",
  neutralBg: "#F6F6F7",
  border: "#E5E7EB",
};

function IconBase({ children, className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </IconBase>
);

const ShieldCheck = (props) => (
  <IconBase {...props}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
    <path d="m9.5 12 1.8 1.8 3.7-3.8" />
  </IconBase>
);

const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
    <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
  </IconBase>
);

const Layers3 = (props) => (
  <IconBase {...props}>
    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
    <path d="m4 12 8 4 8-4" />
    <path d="m4 16 8 4 8-4" />
  </IconBase>
);

const Languages = (props) => (
  <IconBase {...props}>
    <path d="M4 5h8" />
    <path d="M8 5c0 5-2 8-5 10" />
    <path d="M6 10c1.5 1.8 3 3 5 4" />
    <path d="M15 7h5" />
    <path d="m17.5 7-3 10" />
    <path d="M13.8 14h5.8" />
  </IconBase>
);

const Quote = (props) => (
  <IconBase {...props}>
    <path d="M9 10H6a2 2 0 0 0-2 2v4h5v-6Z" />
    <path d="M20 10h-3a2 2 0 0 0-2 2v4h5v-6Z" />
    <path d="M9 10V8a3 3 0 0 0-3-3" />
    <path d="M20 10V8a3 3 0 0 0-3-3" />
  </IconBase>
);

const Database = (props) => (
  <IconBase {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </IconBase>
);

const BookMarked = (props) => (
  <IconBase {...props}>
    <path d="M20 13l-7 7-9-9V4h7l9 9Z" />
    <path d="M7 7h.01" />
  </IconBase>
);

const FolderKanban = (props) => (
  <IconBase {...props}>
    <path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    <path d="M8 12v4" />
    <path d="M12 11v5" />
    <path d="M16 13v3" />
  </IconBase>
);

const PlugZap = (props) => (
  <IconBase {...props}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 12h6" />
    <path d="M16.5 7.5 12 10.5" />
    <path d="M16.5 16.5 12 13.5" />
  </IconBase>
);

const Cpu = (props) => (
  <IconBase {...props}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </IconBase>
);

const Gauge = (props) => (
  <IconBase {...props}>
    <path d="M4 15a8 8 0 1 1 16 0" />
    <path d="m12 12 4-4" />
    <path d="M12 12v.01" />
  </IconBase>
);

const UserCheck = (props) => (
  <IconBase {...props}>
    <circle cx="9" cy="8" r="3" />
    <path d="M4 19a5 5 0 0 1 10 0" />
    <path d="m16 11 2 2 4-4" />
  </IconBase>
);

const BadgeCheck = (props) => (
  <IconBase {...props}>
    <path d="M12 3l2.2 1.2 2.5-.2 1 2.3 2 1.5-.7 2.4.7 2.4-2 1.5-1 2.3-2.5-.2L12 21l-2.2-1.2-2.5.2-1-2.3-2-1.5.7-2.4-.7-2.4 2-1.5 1-2.3 2.5.2L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

const Workflow = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="6" height="6" rx="1" />
    <rect x="15" y="4" width="6" height="6" rx="1" />
    <rect x="9" y="14" width="6" height="6" rx="1" />
    <path d="M9 7h6M12 10v4" />
  </IconBase>
);

const HeartPulse = (props) => (
  <IconBase {...props}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    <path d="M7 12h2l1.2-2.5L13 15l1.2-3H17" />
  </IconBase>
);

const Scale = (props) => (
  <IconBase {...props}>
    <path d="M12 4v16" />
    <path d="M6 8h12" />
    <path d="m7 8-3 6h6L7 8Zm10 0-3 6h6l-3-6Z" />
    <path d="M9 20h6" />
  </IconBase>
);

const Landmark = (props) => (
  <IconBase {...props}>
    <path d="M3 10h18" />
    <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
    <path d="M2 20h20" />
    <path d="m12 4 8 4H4l8-4Z" />
  </IconBase>
);

const Building2 = (props) => (
  <IconBase {...props}>
    <path d="M4 20V6l8-3 8 3v14" />
    <path d="M9 20v-4h6v4" />
    <path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01" />
  </IconBase>
);

const Store = (props) => (
  <IconBase {...props}>
    <path d="M4 8h16l-1 4a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2L4 8Z" />
    <path d="M6 8V5h12v3" />
    <path d="M6 14v6h12v-6" />
  </IconBase>
);

const GraduationCap = (props) => (
  <IconBase {...props}>
    <path d="m3 10 9-5 9 5-9 5-9-5Z" />
    <path d="M7 12v4c3 2 7 2 10 0v-4" />
    <path d="M21 10v5" />
  </IconBase>
);

const Hotel = (props) => (
  <IconBase {...props}>
    <path d="M4 20V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
    <path d="M4 14h16" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
    <path d="M8 20v-3h8v3" />
  </IconBase>
);

const BarChart3 = (props) => (
  <IconBase {...props}>
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-7" />
    <path d="M22 20H2" />
  </IconBase>
);

const Braces = (props) => (
  <IconBase {...props}>
    <path d="M8 4C6 4 6 6 6 7.5S5 10 3.5 10c1.5 0 2.5 1 2.5 2.5S6 16 8 16" />
    <path d="M16 4c2 0 2 2 2 3.5S19 10 20.5 10c-1.5 0-2.5 1-2.5 2.5S18 16 16 16" />
  </IconBase>
);

const Globe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </IconBase>
);

function HeroProofCard({ title, body, icon: Icon }) {
  return (
    <div className="rounded-[24px] border bg-white p-5 shadow-[0_16px_38px_rgba(15,23,42,0.045)]" style={{ borderColor: brand.border }}>
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        <span className="flex h-9 w-9 items-center justify-center rounded-2xl" style={{ backgroundColor: brand.primarySoft }}>
          <Icon className="h-4.5 w-4.5" style={{ color: brand.primaryDark }} />
        </span>
        <span>{title}</span>
      </div>
      <div className="mt-3.5 text-sm leading-6 text-slate-700">{body}</div>
    </div>
  );
}

function StatTile({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[30px] font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
      <div className="mt-1 text-sm leading-6 text-slate-600">{label}</div>
    </div>
  );
}

function LogoMark({ index }) {
  const variants = [
    <React.Fragment key="a"><div className="h-2.5 w-10 rounded-full bg-slate-700/65" /><div className="h-2.5 w-5 rounded-full bg-slate-400/60" /></React.Fragment>,
    <React.Fragment key="b"><div className="h-6 w-6 rounded-full border border-slate-400/60" /><div className="h-2.5 w-9 rounded-full bg-slate-700/65" /></React.Fragment>,
    <React.Fragment key="c"><div className="grid grid-cols-2 gap-1"><div className="h-2.5 w-2.5 rounded-sm bg-slate-700/65" /><div className="h-2.5 w-2.5 rounded-sm bg-slate-400/60" /><div className="h-2.5 w-2.5 rounded-sm bg-slate-400/60" /><div className="h-2.5 w-2.5 rounded-sm bg-slate-700/65" /></div><div className="h-2.5 w-8 rounded-full bg-slate-700/65" /></React.Fragment>,
    <React.Fragment key="d"><div className="h-6 w-6 rotate-45 rounded-[6px] border border-slate-400/60" /><div className="h-2.5 w-9 rounded-full bg-slate-700/65" /></React.Fragment>,
  ];

  return <div className="group flex min-w-[170px] items-center justify-center rounded-[20px] px-6 py-4 transition-all duration-300 hover:bg-slate-50/70"><div className="flex items-center gap-3 opacity-65 transition-opacity duration-300 group-hover:opacity-90">{variants[index % variants.length]}</div></div>;
}

function PlatformFeature({ title, description, icon: Icon, dark = false }) {
  return (
    <div
      className="rounded-[24px] border p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
      style={{
        borderColor: dark ? "rgba(193,29,99,0.26)" : brand.border,
        background: dark ? "linear-gradient(180deg, rgba(10,22,40,0.98) 0%, rgba(12,25,44,0.96) 100%)" : "#FFFFFF",
      }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[18px]"
        style={{
          background: dark ? "linear-gradient(180deg, rgba(193,29,99,0.24) 0%, rgba(122,21,66,0.24) 100%)" : brand.primarySoft,
          boxShadow: dark ? "inset 0 1px 0 rgba(255,255,255,0.06)" : "none",
        }}
      >
        <Icon className="h-5 w-5" style={{ color: dark ? "#F6D6E5" : brand.primaryDark }} />
      </div>
      <h3 className="mt-5 max-w-[20ch] text-[17px] font-semibold leading-6 tracking-[-0.02em]" style={{ color: dark ? "#FFFFFF" : "#0f172a" }}>
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-6" style={{ color: dark ? "#E8EDF5" : "#475569" }}>
        {description}
      </p>
    </div>
  );
}

function AIPillar({ title, description, icon: Icon }) {
  return <div className="rounded-[22px] border bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.03)]" style={{ borderColor: brand.border }}><div className="flex items-start gap-3.5"><div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px]" style={{ backgroundColor: brand.primarySoft }}><Icon className="h-5 w-5" style={{ color: brand.primaryDark }} /></div><div><div className="text-[16px] font-semibold tracking-[-0.01em] text-slate-950">{title}</div><div className="mt-1.5 text-sm leading-6 text-slate-600">{description}</div></div></div></div>;
}

function TranslationTextBlock({ title, description, href }) {
  return <a href={href} className="group block border-t pt-5 transition-colors duration-200 hover:text-slate-950" style={{ borderColor: brand.border }}><div className="flex items-start justify-between gap-4"><h3 className="max-w-[16ch] text-[18px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">{title}</h3><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" /></div><p className="mt-3 max-w-[30ch] text-sm leading-7 text-slate-600">{description}</p></a>;
}

function ServiceHubCard({ title, description, href }) {
  return <a href={href} className="group flex h-full min-h-[158px] flex-col rounded-[24px] border bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50/50" style={{ borderColor: brand.border }}><div className="flex items-start justify-between gap-4"><h3 className="text-[16px] font-semibold leading-6 tracking-[-0.01em] text-slate-950">{title}</h3><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" /></div><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></a>;
}

function IndustryCard({ title, description, href, icon: Icon }) {
  return <a href={href} className="group flex h-full flex-col rounded-[26px] border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50/50" style={{ borderColor: brand.border }}><div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: brand.primarySoft }}><Icon className="h-5 w-5" style={{ color: brand.primaryDark }} /></div><div className="mt-5 flex items-start justify-between gap-4"><h3 className="text-[18px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">{title}</h3><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" /></div><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></a>;
}

function QualityTextBlock({ title, description }) {
  return <div className="border-t pt-5" style={{ borderColor: brand.border }}><h3 className="text-[17px] font-semibold tracking-[-0.01em] text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>;
}

function WorkflowStage({ label }) {
  return <div className="flex items-center justify-center rounded-[20px] border bg-white px-4 py-4 text-center text-sm font-medium text-slate-900" style={{ borderColor: brand.border }}>{label}</div>;
}

function IndustryLink({ title, href, dark = false }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-t pt-4 transition-colors duration-200"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.08)" : brand.border,
        color: dark ? "#F1E3EB" : "#334155",
      }}
    >
      <span className="text-[16px] font-medium">{title}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" style={{ color: dark ? "#E3C9D7" : "#94a3b8" }} />
    </a>
  );
}

function OutcomeCard({ title, description, icon: Icon }) {
  return <div className="rounded-[24px] border bg-white p-6" style={{ borderColor: brand.border }}><div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: brand.primarySoft }}><Icon className="h-5 w-5" style={{ color: brand.primaryDark }} /></div><h3 className="mt-5 text-[18px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></div>;
}

function LanguageChip({ label }) {
  return <div className="rounded-full border bg-white px-4 py-2.5 text-sm font-medium text-slate-700" style={{ borderColor: brand.border }}>{label}</div>;
}

const heroProof = [
  { title: "Built for Scale", body: "Documents, software, websites, video, training, and multilingual programs.", icon: Layers3 },
  { title: "AI + Human Quality", body: "AI automation, translation memory, terminology control, and expert human review.", icon: Sparkles },
  { title: "Enterprise Ready", body: "Secure workflows, project visibility, and managed delivery for global teams.", icon: ShieldCheck },
];
const trustStats = [
  { value: "100+", label: "languages supported" },
  { value: "10,000+", label: "professional linguists" },
  { value: "2,000+", label: "enterprise clients" },
  { value: "AI-enabled", label: "translation workflows" },
];
const contentCoverageLinks = [
  { title: "Document Translation", href: "https://www.stepes.com/document-translation-services/" },
  { title: "Website Localization", href: "https://www.stepes.com/website-translation-services/" },
  { title: "Software Localization", href: "https://www.stepes.com/software-localization-services/" },
  { title: "Video Translation", href: "https://www.stepes.com/video-translation-services/" },
  { title: "eLearning Translation", href: "https://www.stepes.com/elearning-translation-services/" },
  { title: "Technical Translation", href: "https://www.stepes.com/technical-translation-services/" },
  { title: "Legal Translation", href: "https://www.stepes.com/legal-translation-services/" },
  { title: "Medical Translation", href: "https://www.stepes.com/medical-translation-services/" },
  { title: "Financial Translation", href: "https://www.stepes.com/financial-translation-services/" },
  { title: "Marketing Translation", href: "https://www.stepes.com/marketing-translation-services/" },
];
const enterpriseLogos = Array.from({ length: 14 }, (_, i) => i);
const platformFeatures = [
  { title: "DomainAI Workflow Automation", description: "DomainAI helps accelerate intake, file analysis, routing, and multilingual production within managed enterprise workflows.", icon: Sparkles },
  { title: "Consistency Across Teams", description: "Translation memory and terminology management help keep approved language aligned across products, documents, and markets.", icon: Database },
  { title: "Project Visibility and Review", description: "Project tracking and multilingual review help teams coordinate stakeholders, approvals, and delivery with more control.", icon: FolderKanban },
];
const aiPillars = [
  { title: "AI Workflow Acceleration", description: "Use AI and automation to move recurring multilingual content through translation workflows faster.", icon: Gauge },
  { title: "MTPE for Scalable Quality", description: "Combine machine translation with professional post-editing to improve speed, cost efficiency, and consistency.", icon: Cpu },
  { title: "Professional Translation for Critical Content", description: "Use experienced linguists and subject-matter experts where accuracy, nuance, and business risk matter most.", icon: UserCheck },
  { title: "Terminology and QA Control", description: "Keep multilingual content aligned with approved terminology, brand language, and structured quality review.", icon: BadgeCheck },
  { title: "Workflow Automation and Routing", description: "Support higher volume with more consistent intake, routing, handoffs, and delivery oversight.", icon: Workflow },
];
const translationServiceCards = [
  { title: "Document Translation Services", description: "Translate reports, manuals, presentations, and business documents for global operations.", href: "https://www.stepes.com/document-translation-services/" },
  { title: "Certified Translation Services", description: "Provide certified translations for official submissions, HR, legal, and compliance needs.", href: "https://www.stepes.com/certified-translation-services/" },
  { title: "Technical Translation Services", description: "Translate manuals, specifications, and engineering content with subject-matter accuracy.", href: "https://www.stepes.com/technical-translation-services/" },
  { title: "Legal Translation Services", description: "Support contracts, policies, investigations, and compliance content with controlled terminology.", href: "https://www.stepes.com/legal-translation-services/" },
  { title: "Medical Translation Services", description: "Handle healthcare, clinical, and life sciences content with specialized linguistic review.", href: "https://www.stepes.com/medical-translation-services/" },
];
const localizationServiceCards = [
  { title: "Website Localization", description: "Adapt website structure, messaging, and content for international audiences.", href: "https://www.stepes.com/website-translation-services/" },
  { title: "Software Localization", description: "Localize software interfaces, resource files, and product experiences for global users.", href: "https://www.stepes.com/software-localization-services/" },
  { title: "App Localization", description: "Support multilingual mobile app launches with localized UI, messaging, and store content.", href: "https://www.stepes.com/app-localization-services/" },
  { title: "Game Localization", description: "Adapt in-game text, player-facing content, and creative context for international markets.", href: "https://www.stepes.com/game-localization-services/" },
  { title: "eLearning Localization", description: "Localize training content, course interfaces, and learning experiences across regions.", href: "https://www.stepes.com/elearning-localization-services/" },
  { title: "Multimedia Localization", description: "Support subtitles, captions, voice, and multimedia adaptation for global communication.", href: "https://www.stepes.com/multimedia-localization-services/" },
  { title: "SEO Translation", description: "Translate and localize digital content for better multilingual search visibility.", href: "https://www.stepes.com/seo-translation-services/" },
  { title: "Multilingual Content Localization", description: "Align UX, terminology, visuals, and messaging for more effective international engagement.", href: "https://www.stepes.com/multilingual-content-localization/" },
];
const industryCards = [
  { title: "Life Sciences & Healthcare", description: "Support clinical, regulatory, medical, and patient-facing content where accuracy, compliance, and subject expertise matter.", href: "https://www.stepes.com/life-sciences-translation-services/", icon: HeartPulse },
  { title: "Legal & Compliance", description: "Translate agreements, policies, investigations, and compliance materials with controlled terminology and disciplined review.", href: "https://www.stepes.com/legal-translation-services/", icon: Scale },
  { title: "Financial Services", description: "Support investor, regulatory, banking, and corporate finance communication across multilingual markets.", href: "https://www.stepes.com/financial-translation-services/", icon: Landmark },
  { title: "Technology & Software", description: "Localize product interfaces, software strings, support content, and release workflows for global users.", href: "https://www.stepes.com/software-localization-services/", icon: Braces },
  { title: "Manufacturing & Engineering", description: "Translate technical documentation, safety content, specifications, and operations materials with stronger consistency across facilities.", href: "https://www.stepes.com/manufacturing-translation-services/", icon: Cpu },
  { title: "Retail & Ecommerce", description: "Adapt product content, merchandising, checkout flows, and customer communication for international conversion.", href: "https://www.stepes.com/ecommerce-translation-services/", icon: Store },
  { title: "Education & eLearning", description: "Support multilingual learning content, training programs, courseware, and student-facing communication.", href: "https://www.stepes.com/elearning-translation-services/", icon: GraduationCap },
  { title: "Travel & Hospitality", description: "Translate booking journeys, guest communication, service content, and travel experiences across regions.", href: "https://www.stepes.com/travel-translation-services/", icon: Hotel },
  { title: "Government & Public Sector", description: "Support multilingual public communication, service access, official documentation, and community outreach.", href: "https://www.stepes.com/government-translation-services/", icon: Building2 },
];
const qualityBlocks = [
  { title: "Professional translators by subject matter", description: "Assign experienced linguists with the domain knowledge needed for technical, legal, medical, financial, and business content." },
  { title: "Translation memory and terminology control", description: "Reuse approved language, enforce terminology consistency, and improve efficiency across recurring multilingual programs." },
  { title: "Quality review and enterprise oversight", description: "Support structured review workflows, secure file handling, project visibility, and reporting across enterprise translation programs." },
];
const workflowStages = ["Source Content", "AI/MT Support", "Translator Review", "Terminology QA", "Client Review", "Delivery"];
const apiLinks = [
  { title: "Translation API", href: "https://www.stepes.com/translation-api/" },
  { title: "Software Localization", href: "https://www.stepes.com/software-localization-services/" },
  { title: "Website Localization", href: "https://www.stepes.com/website-translation-services/" },
  { title: "App Localization", href: "https://www.stepes.com/app-localization-services/" },
  { title: "AI Translation Services", href: "https://www.stepes.com/ai-translation-services/" },
];
const featuredLanguages = ["Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Portuguese", "Italian", "Dutch", "Arabic", "Hindi", "Vietnamese", "Thai", "Indonesian", "Polish", "Turkish", "Swedish", "Danish", "Norwegian", "Finnish"];
const outcomeCards = [
  { title: "Launch multilingual websites faster", description: "Coordinate multilingual website launches with reusable language assets, clearer workflows, and consistent delivery across markets.", icon: Globe },
  { title: "Translate technical documentation at scale", description: "Manage manuals, specifications, product information, and operations content with stronger terminology control and delivery consistency.", icon: Cpu },
  { title: "Localize software and product content continuously", description: "Support ongoing releases, UI strings, and product updates through connected localization workflows.", icon: Braces },
  { title: "Support international legal and compliance teams", description: "Translate agreements, policies, and regulatory content with disciplined review and approved terminology.", icon: Scale },
  { title: "Deliver multilingual training and eLearning", description: "Adapt courseware, learning content, and internal training for global teams and distributed audiences.", icon: GraduationCap },
  { title: "Manage enterprise translation programs with visibility", description: "Give stakeholders clearer status tracking, review coordination, and operational oversight across multilingual workstreams.", icon: BarChart3 },
];
const resourceCards = [
  { title: "Translation API Guide for Product Teams", description: "A practical introduction to connecting translation workflows with software, websites, and recurring product content.", href: "https://www.stepes.com/resources/translation-api-guide/" },
  { title: "Website Localization Checklist for Global Growth", description: "Key considerations for adapting content, UX, and messaging for international audiences.", href: "https://www.stepes.com/resources/website-localization-checklist/" },
  { title: "Translation Memory and Terminology Best Practices", description: "How enterprises improve consistency, speed, and multilingual quality with reusable language assets.", href: "https://www.stepes.com/resources/translation-memory-terminology-guide/" },
];

export default function StepesHomepageWireframe() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-950">
      <style>{`@keyframes stepesMarquee {0% {transform: translateX(0);}100% {transform: translateX(-1180px);}}`}</style>

      <section className="relative overflow-hidden"><div className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 md:px-8 lg:px-10 lg:pb-24 lg:pt-12"><div className="mx-auto max-w-[1120px] text-center"><div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-700" style={{ borderColor: 'rgba(193,29,99,0.22)', backgroundColor: '#FFFFFF' }}><Languages className="h-3.5 w-3.5" style={{ color: brand.primary }} />Enterprise Language Solutions</div><h1 className="mx-auto mt-6 max-w-[980px] text-[40px] font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-[44px] lg:text-[48px] xl:text-[48px]">Enterprise Translation, Localization, and AI Language Solutions</h1><p className="mx-auto mt-6 max-w-[900px] text-lg leading-8 text-slate-600 md:text-[19px]">Stepes helps global companies translate documents, software, websites, video, training, and specialized content faster, more consistently, and with stronger operational control.</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="https://www.stepes.com/instant-translation-quote/" className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(193,29,99,0.30)] transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: brand.primary }}>Get an Instant Quote<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a><a href="https://www.stepes.com/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-slate-50" style={{ borderColor: brand.border, backgroundColor: '#FFFFFF' }}>Talk to Stepes</a></div><div className="mx-auto mt-12 grid max-w-[1280px] gap-3 text-left sm:grid-cols-3">{heroProof.map((item) => <HeroProofCard key={item.title} {...item} />)}</div></div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1240px] text-center"><h2 className="mx-auto max-w-[760px] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Trusted by Global Enterprises for Multilingual Content at Scale</h2><p className="mx-auto mt-5 max-w-[820px] text-[17px] leading-8 text-slate-600">Stepes helps enterprises centralize multilingual content operations across regions, teams, and content types with the scale, consistency, and visibility modern organizations need.</p><div className="mx-auto mt-14 grid max-w-[980px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{trustStats.map((item) => <StatTile key={item.label} {...item} />)}</div><div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">{featuredLanguages.slice(0,10).map((language) => <LanguageChip key={language} label={language} />)}<a href="https://www.stepes.com/translation-languages/" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-50" style={{ borderColor: brand.border }}>View All Languages<ArrowRight className="h-4 w-4" /></a></div><div className="relative mx-auto mt-16 max-w-[1220px] overflow-hidden py-2"><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/92 to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/92 to-transparent" /><div style={{ display: 'flex', width: 'max-content', gap: '16px', animation: 'stepesMarquee 34s linear infinite' }}>{[...enterpriseLogos, ...enterpriseLogos].map((item, i) => <LogoMark key={`${item}-${i}`} index={item} />)}</div></div></div></section>

      <section className="py-24 md:py-32 lg:py-36" style={{ background: 'radial-gradient(circle at top left, rgba(193,29,99,0.10) 0%, rgba(193,29,99,0.00) 26%), linear-gradient(180deg, #050B16 0%, #07111F 48%, #08101B 100%)' }}><div className="px-6 md:px-8 lg:px-10"><div className="mx-auto max-w-[980px] text-center"><h2 className="mx-auto max-w-[900px] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[38px] lg:text-[42px]">One Platform for Enterprise Translation Management</h2><p className="mx-auto mt-5 max-w-[920px] text-[17px] leading-8 text-[#E8EDF5]">Stepes combines enterprise translation technology, DomainAI automation, translation memory, terminology management, multilingual review, APIs, and managed services in one connected platform.</p></div><div className="mx-auto mt-14 max-w-[1440px]"><div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr] lg:items-stretch"><div className="rounded-[30px] border p-6 lg:p-7" style={{ borderColor: 'rgba(193,29,99,0.30)', background: 'linear-gradient(180deg, rgba(6,16,31,0.98) 0%, rgba(8,18,34,0.96) 100%)', boxShadow: '0 26px 64px rgba(2,6,23,0.42), inset 0 1px 0 rgba(255,255,255,0.03)' }}><div className="flex items-start justify-between gap-4"><div><div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6D6E5]">Enterprise Translation Platform</div><div className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-white">Connected multilingual operations for enterprise teams</div></div><div className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: '#F6D7E5', backgroundColor: 'rgba(193,29,99,0.38)' }}>Stepes Platform + DomainAI</div></div><div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]"><div className="grid gap-5"><div className="rounded-[24px] border px-5 py-5 lg:px-6 lg:py-6" style={{ borderColor: 'rgba(193,29,99,0.40)', background: 'linear-gradient(180deg, rgba(16,34,60,0.99) 0%, rgba(13,28,50,0.97) 100%)', boxShadow: '0 16px 34px rgba(2,6,23,0.22), inset 0 1px 0 rgba(255,255,255,0.05)' }}><div className="text-sm font-semibold text-white">Project setup</div><div className="mt-2 text-sm leading-6 text-[#E8EDF5]">Online ordering, guided intake, instant quotes, and DomainAI-assisted file analysis help teams launch multilingual projects faster with less manual coordination.</div></div><div className="rounded-[24px] border px-5 py-5 lg:px-6 lg:py-6" style={{ borderColor: 'rgba(193,29,99,0.40)', background: 'linear-gradient(180deg, rgba(16,34,60,0.99) 0%, rgba(13,28,50,0.97) 100%)', boxShadow: '0 16px 34px rgba(2,6,23,0.22), inset 0 1px 0 rgba(255,255,255,0.05)' }}><div className="grid gap-3 sm:grid-cols-2">{[["DomainAI Assist", Sparkles], ["Translation memory", Database], ["Terminology", BookMarked], ["Translation API", PlugZap]].map(([label, Icon]) => { const ItemIcon = Icon; return <div key={label} className="flex items-center gap-3 rounded-[18px] border px-4 py-4" style={{ borderColor: 'rgba(193,29,99,0.34)', background: 'linear-gradient(180deg, rgba(22,42,72,0.99) 0%, rgba(17,34,60,0.97) 100%)', boxShadow: '0 10px 24px rgba(2,6,23,0.18), inset 0 1px 0 rgba(255,255,255,0.06)' }}><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(193,29,99,0.16)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}><ItemIcon className="h-4.5 w-4.5" style={{ color: '#F7D5E5' }} /></span><div className="text-sm font-medium text-white">{label}</div></div>; })}</div></div></div><div className="rounded-[24px] border p-5" style={{ borderColor: 'rgba(193,29,99,0.24)', background: 'linear-gradient(180deg, rgba(8,19,37,0.96) 0%, rgba(9,21,39,0.94) 100%)' }}><div className="text-sm font-semibold text-white">Delivery workflow</div><div className="mt-4 grid gap-3">{[["Request confirmed", "Files received and workflow launched"], ["Approved language assets", "Approved language assets applied"], ["Translation and review", "Translation, review, and QA managed"], ["Project delivery", "Progress tracked and multilingual content delivered"]].map(([title, desc]) => <div key={title} className="rounded-[18px] border px-4 py-4" style={{ borderColor: 'rgba(193,29,99,0.22)', background: 'linear-gradient(180deg, rgba(9,22,41,0.98) 0%, rgba(11,24,44,0.96) 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}><div className="text-sm font-medium text-white">{title}</div><div className="mt-1 text-sm leading-6 text-[#E8EDF5]">{desc}</div></div>)}</div></div></div></div><div className="grid gap-4 grid-cols-1">{platformFeatures.map((card) => <PlatformFeature key={card.title} {...card} dark />)}</div></div><div className="mt-6 rounded-[30px] border p-6 lg:p-7" style={{ borderColor: 'rgba(193,29,99,0.30)', background: 'linear-gradient(180deg, rgba(6,16,31,0.98) 0%, rgba(8,18,34,0.96) 100%)', boxShadow: '0 26px 64px rgba(2,6,23,0.42), inset 0 1px 0 rgba(255,255,255,0.03)' }}><div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"><div><div className="text-[18px] font-semibold tracking-[-0.02em] text-white">Built for Continuous Localization</div><p className="mt-3 max-w-[560px] text-sm leading-7 text-[#E8EDF5]">Connect translation workflows to software, websites, apps, product content, and recurring releases through integrated enterprise systems and APIs.</p></div><div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">{apiLinks.map((item) => <IndustryLink key={item.title} title={item.title} href={item.href} dark />)}</div></div></div></div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1400px]"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><h2 className="max-w-[14ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">AI-Accelerated Translation with Professional Human Review</h2><p className="mt-5 max-w-[560px] text-[17px] leading-8 text-slate-600">Stepes applies the right mix of AI automation, machine translation, translation memory, terminology management, professional translation, and human review based on content type, quality requirements, and business risk.</p><div className="mt-8 rounded-[28px] border bg-white px-6 py-6" style={{ borderColor: brand.border }}><div className="text-sm leading-7 text-slate-600">The result is a practical enterprise model that improves speed, consistency, and delivery control without compromising the human judgment required for business-critical content.</div></div></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{aiPillars.map((item) => <AIPillar key={item.title} {...item} />)}</div></div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32" style={{ backgroundColor: '#FAFAFB' }}><div className="mx-auto max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-5 xl:col-span-4"><h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Translation and Localization Services</h2></div><div className="lg:col-span-7 xl:col-span-8"><p className="max-w-[860px] text-[17px] leading-8 text-slate-600 lg:ml-auto">Stepes supports translation and localization across business documents, regulated content, digital products, websites, training, and global customer experiences.</p></div></div><div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]"><div><div className="text-[22px] font-semibold tracking-[-0.02em] text-slate-950">Translation Services</div><div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">{translationServiceCards.map((card) => <TranslationTextBlock key={card.title} {...card} />)}</div></div><div><div className="text-[22px] font-semibold tracking-[-0.02em] text-slate-950">Localization Services</div><div className="mt-6 grid gap-4 sm:grid-cols-2">{localizationServiceCards.slice(0, 4).map((card) => <ServiceHubCard key={card.title} {...card} />)}</div><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{localizationServiceCards.slice(4).map((card) => <IndustryLink key={card.title} title={card.title} href={card.href} />)}</div></div></div><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="https://www.stepes.com/translation-services/" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: brand.primary }}>View All Translation Services<ArrowRight className="h-4 w-4" /></a><a href="https://www.stepes.com/localization-services/" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-slate-50" style={{ borderColor: brand.border, backgroundColor: '#FFFFFF' }}>Explore Localization Services<ArrowRight className="h-4 w-4" /></a></div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-5 xl:col-span-4"><h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Industry-Specialized Translation Expertise</h2></div><div className="lg:col-span-7 xl:col-span-8"><p className="max-w-[860px] text-[17px] leading-8 text-slate-600 lg:ml-auto">Stepes supports industry-specific translation programs for regulated, technical, and customer-facing content where accuracy, terminology control, and review discipline matter.</p></div></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{industryCards.map((card) => <IndustryCard key={card.title} {...card} />)}</div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32" style={{ backgroundColor: '#FAFAFB' }}><div className="mx-auto max-w-[1400px]"><div className="mx-auto max-w-[900px] text-center"><h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Built for Quality, Consistency, and Enterprise Control</h2><p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-8 text-slate-600">Stepes combines subject-matter expertise, approved language assets, structured review, and project visibility to help enterprises improve multilingual quality at scale.</p></div><div className="mx-auto mt-14 max-w-[1280px] rounded-[34px] border bg-white p-6 lg:p-8" style={{ borderColor: brand.border }}><div className="grid gap-3 lg:grid-cols-6">{workflowStages.map((stage) => <WorkflowStage key={stage} label={stage} />)}</div><div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-3">{qualityBlocks.map((block) => <QualityTextBlock key={block.title} {...block} />)}</div></div></div></section>

      <section className="px-6 pt-24 pb-32 md:px-8 lg:px-10 lg:pt-32 lg:pb-40"><div className="mx-auto max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-5 xl:col-span-4"><h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Enterprise Outcomes Across Multilingual Content Operations</h2></div><div className="lg:col-span-7 xl:col-span-8"><p className="max-w-[860px] text-[17px] leading-8 text-slate-600 lg:ml-auto">From website launches and software releases to regulated documentation and recurring product content, Stepes helps teams reduce manual coordination, improve consistency, and move faster across languages.</p></div></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{outcomeCards.map((card) => <OutcomeCard key={card.title} {...card} />)}</div></div></section>

      <section className="px-6 py-24 md:px-8 lg:px-10 lg:py-32" style={{ backgroundColor: '#FAFAFB' }}><div className="mx-auto max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-5 xl:col-span-4"><h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[38px] lg:text-[42px]">Resources and Insights for Global Translation Teams</h2></div><div className="lg:col-span-7 xl:col-span-8"><p className="max-w-[860px] text-[17px] leading-8 text-slate-600 lg:ml-auto">Explore practical guidance on AI translation, localization strategy, translation technology, and multilingual content operations.</p></div></div><div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"><a href="https://www.stepes.com/resources/ai-human-translation-workflows/" className="group rounded-[30px] border bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50/40" style={{ borderColor: brand.border }}><div className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: brand.primaryDark }}>Featured Guide</div><h3 className="mt-4 max-w-[16ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950">How AI and Human Review Work Together in Enterprise Translation</h3><p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-slate-600">Learn how leading teams use AI-enabled workflows, professional review, terminology control, and translation memory to support multilingual content at scale.</p><div className="mt-6 flex flex-wrap gap-2">{['AI translation', 'Human review', 'Workflow automation', 'Terminology control'].map((tag) => <span key={tag} className="rounded-full border px-3 py-1.5 text-sm text-slate-600" style={{ borderColor: brand.border, backgroundColor: '#FFFFFF' }}>{tag}</span>)}</div><div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: brand.primaryDark }}>Read Featured Guide<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></div></a><div className="grid gap-4">{resourceCards.map((item) => <a key={item.title} href={item.href} className="group rounded-[24px] border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50/40" style={{ borderColor: brand.border }}><div className="flex items-start justify-between gap-4"><h3 className="max-w-[24ch] text-[20px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">{item.title}</h3><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" /></div><p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p></a>)}</div></div></div></section>

      <section className="px-6 pb-28 pt-8 md:px-8 lg:px-10 lg:pb-40 lg:pt-12"><div className="mx-auto max-w-[1400px]"><div className="rounded-[40px] border px-6 py-12 text-center md:px-8 lg:px-12 lg:py-16" style={{ borderColor: brand.border, backgroundColor: brand.neutralBg }}><h2 className="mx-auto max-w-[900px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-[42px] lg:text-[48px]">Start Your Next Multilingual Project</h2><p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-8 text-slate-600">From fast document translation quotes to enterprise localization programs, Stepes helps global teams centralize multilingual content operations, reduce manual coordination, improve consistency, and launch content faster across languages.</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="https://www.stepes.com/instant-translation-quote/" className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: brand.primary }}>Get an Instant Quote<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a><a href="https://www.stepes.com/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-white" style={{ borderColor: brand.border, backgroundColor: 'rgba(255,255,255,0.82)' }}>Talk to Stepes</a></div></div></div></section>
    </div>
  );
}
