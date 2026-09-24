import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const groups = [
  {
    title: "By Business Need",
    items: [
      {
        label: "Enterprise Translation Management",
        href: "https://www.stepes.com/enterprise-translation-management/",
      },
      {
        label: "Global Content Operations",
        href: "https://www.stepes.com/solutions/global-content-operations/",
      },
      {
        label: "AI Translation & Human Review",
        href: "https://www.stepes.com/ai-human-translation-workflow/",
      },
      {
        label: "AI-Powered Translation Workflows",
        href: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
      },
      {
        label: "Website Localization",
        href: "https://www.stepes.com/website-translation-services/",
      },
      {
        label: "Software & App Localization",
        href: "https://www.stepes.com/software-localization-services/",
      },
      {
        label: "Multimedia Localization",
        href: "https://www.stepes.com/solutions/multimedia-localization/",
      },
      {
        label: "Multilingual Customer Support",
        href: "https://www.stepes.com/solutions/multilingual-customer-support/",
      },
    ],
  },
  {
    title: "By Team",
    items: [
      {
        label: "Localization Teams",
        href: "https://www.stepes.com/solutions/localization-teams/",
      },
      {
        label: "Marketing Teams",
        href: "https://www.stepes.com/marketing-translation-services/",
      },
      {
        label: "Product & Engineering Teams",
        href: "https://www.stepes.com/solutions/product-engineering-localization/",
      },
      {
        label: "Legal Teams",
        href: "https://www.stepes.com/legal-translation-services/",
      },
      {
        label: "Life Sciences Teams",
        href: "https://www.stepes.com/life-sciences-translation-services/",
      },
      {
        label: "Procurement Teams",
        href: "https://www.stepes.com/solutions/procurement-translation-management/",
      },
    ],
  },
  {
    title: "By Content Type",
    items: [
      {
        label: "Documents",
        href: "https://www.stepes.com/document-translation-services/",
      },
      {
        label: "Websites",
        href: "https://www.stepes.com/website-translation-services/",
      },
      {
        label: "Software Strings",
        href: "https://www.stepes.com/software-localization-services/",
      },
      {
        label: "Videos & Subtitles",
        href: "https://www.stepes.com/video-translation-services/",
      },
      {
        label: "Training Content",
        href: "https://www.stepes.com/elearning-translation-services/",
      },
      {
        label: "Legal & Compliance Content",
        href: "https://www.stepes.com/legal-translation-services/",
      },
      {
        label: "Technical Manuals",
        href: "https://www.stepes.com/technical-translation-services/",
      },
    ],
  },
];

function LinkRow({ item }: { item: { label: string; href: string } }) {
  return (
    <a
      href={item.href}
      className="group -mx-2 flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-[#FCF5F8]"
    >
      <span className="text-[14px] font-medium leading-6 text-slate-900">{item.label}</span>
      <ChevronRight className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#C11D63]" />
    </a>
  );
}

function GroupColumn({ group, firstColumn = false }: { group: (typeof groups)[number]; firstColumn?: boolean }) {
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
          Find the Right Translation Workflow
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          AI-powered solutions for global content and multilingual growth.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          From one-time document translation to enterprise localization programs, Stepes helps you choose the right mix of AI-powered workflows, human review, automation, and subject-matter expertise.
        </p>

        <a
          href="https://www.stepes.com/contact-sales/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          Talk to an Expert
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesSolutionsDesktopMegaMenuUpdated() {
  return (
    <div className="text-slate-900">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Solutions
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                Solutions for your business needs, teams, and content.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore how Stepes supports multilingual content across workflows, departments, content types, and AI-powered translation programs.
              </p>
            </div>

            <a
              href="https://www.stepes.com/contact-sales/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1.08fr_0.95fr_0.95fr_0.92fr]">
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[0]} firstColumn />
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
