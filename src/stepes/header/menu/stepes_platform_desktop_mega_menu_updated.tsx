import React from "react";

// 使用内联 SVG 替代 lucide-react
const ArrowRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const ChevronRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const groups = [
  {
    title: "Stepes Platform",
    items: [
      {
        label: "AI Translation Platform",
        href: "https://www.stepes.com/ai-translation-platform/",
      },
      {
        label: "Enterprise Translation Management",
        href: "https://www.stepes.com/enterprise-translation-management/",
      },
      {
        label: "Customer Translation Portal",
        href: "https://www.stepes.com/translation-management-portal/",
      },
      {
        label: "AI + Human Translation Workflow",
        href: "https://www.stepes.com/ai-human-translation-workflow/",
      },
      {
        label: "Translation Memory",
        href: "https://www.stepes.com/translation-memory/",
      },
      {
        label: "Terminology Management",
        href: "https://www.stepes.com/terminology-management/",
      },
      {
        label: "Translation Quality Assurance",
        href: "https://www.stepes.com/translation-quality-assurance/",
      },
    ],
  },
  {
    title: "Developers & Integrations",
    items: [
      {
        label: "Translation API",
        href: "https://www.stepes.com/translation-api/",
      },
      {
        label: "Website Translation Proxy",
        href: "https://www.stepes.com/website-translation-proxy/",
      },
      {
        label: "Software Localization API",
        href: "https://www.stepes.com/software-localization-api/",
      },
      {
        label: "Integrations",
        href: "https://www.stepes.com/translation-integrations/",
      },
      {
        label: "Developer Documentation",
        href: "https://www.stepes.com/developers/",
      },
    ],
  },
  {
    title: "Enterprise Controls",
    items: [
      {
        label: "Security & Compliance",
        href: "https://www.stepes.com/security-compliance/",
      },
      {
        label: "Workflow Automation",
        href: "https://www.stepes.com/translation-workflow-automation/",
      },
      {
        label: "Reporting & Analytics",
        href: "https://www.stepes.com/translation-reporting-analytics/",
      },
      {
        label: "User Roles & Approvals",
        href: "https://www.stepes.com/enterprise-translation-approvals/",
      },
    ],
  },
];

function LinkRow({ item }) {
  return (
    <a
      href={item.href}
      className="group -mx-2 flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-[#FCF5F8]"
    >
      <span className="text-[14px] font-medium leading-6 text-slate-900">
        {item.label}
      </span>
      <ChevronRight className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#C11D63]" />
    </a>
  );
}

function GroupColumn({ group, firstColumn = false }) {
  return (
    <div className={firstColumn ? "pl-7 pr-6 py-5" : "px-6 py-5"}>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {group.title}
      </div>
      <div className="space-y-1">
        {group.items.map((item) => (
          <LinkRow key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

function FeaturedRail() {
  return (
    <div className="px-6 py-5">
      <div className="rounded-[24px] border border-[#EBD7E0] bg-[#FFF9FC] p-5">
        <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
          Explore Platform
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          AI translation platform for enterprise teams.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Manage translation, localization, terminology, automation, and quality
          review in one connected platform.
        </p>

        <a
          href="https://www.stepes.com/ai-translation-platform/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          Explore Platform
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesPlatformDesktopMegaMenuUpdated() {
  return (
    <div
      className="text-slate-900"
      style={{ position: "relative", zIndex: 9999 }}
    >
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Platform
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                AI translation platform for enterprise language operations.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore Stepes automation, APIs, terminology, quality controls,
                and reporting tools for enterprise translation programs.
              </p>
            </div>

            <a
              href="https://www.stepes.com/ai-translation-platform/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1.12fr_1.04fr_0.92fr_0.92fr]">
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[0]} firstColumn={true} />
          </div>
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[1]} />
          </div>
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[2]} />
          </div>
          <FeaturedRail />
        </div>
      </div>
    </div>
  );
}
