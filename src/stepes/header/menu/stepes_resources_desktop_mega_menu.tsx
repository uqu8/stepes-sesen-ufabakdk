import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const groups = [
  {
    title: "Learn",
    items: [
      {
        label: "Resource Center",
        href: "https://www.stepes.com/resources/",
      },
      {
        label: "Translation Guides",
        href: "https://www.stepes.com/resources/translation-guides/",
      },
      {
        label: "Localization Guides",
        href: "https://www.stepes.com/resources/localization-guides/",
      },
      {
        label: "AI Translation Insights",
        href: "https://www.stepes.com/resources/ai-translation-insights/",
      },
      {
        label: "Enterprise Localization Articles",
        href: "https://www.stepes.com/resources/enterprise-localization/",
      },
      {
        label: "Translation Quality Resources",
        href: "https://www.stepes.com/resources/translation-quality/",
      },
    ],
  },
  {
    title: "Tools & Reference",
    items: [
      {
        label: "Languages",
        href: "https://www.stepes.com/translation-languages/",
      },
      {
        label: "Translation Cost Guide",
        href: "https://www.stepes.com/resources/translation-cost-guide/",
      },
      {
        label: "File Format Support",
        href: "https://www.stepes.com/resources/file-formats/",
      },
      {
        label: "Translation Glossary",
        href: "https://www.stepes.com/resources/translation-glossary/",
      },
      {
        label: "API Documentation",
        href: "https://www.stepes.com/developers/",
      },
      {
        label: "Security & Compliance",
        href: "https://www.stepes.com/security-compliance/",
      },
    ],
  },
  {
    title: "Proof & Education",
    items: [
      {
        label: "Case Studies",
        href: "https://www.stepes.com/resources/case-studies/",
      },
      {
        label: "White Papers",
        href: "https://www.stepes.com/resources/white-papers/",
      },
      {
        label: "Webinars",
        href: "https://www.stepes.com/resources/webinars/",
      },
      {
        label: "Customer Stories",
        href: "https://www.stepes.com/resources/customer-stories/",
      },
      {
        label: "News & Press",
        href: "https://www.stepes.com/news/",
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
          Explore Translation and Localization Insights
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          Guides, reference tools, and practical resources for global content teams.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Read practical guides on AI translation, enterprise localization, terminology, quality, and multilingual content operations.
        </p>

        <a
          href="https://www.stepes.com/resources/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          Visit Resources
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesResourcesDesktopMegaMenu() {
  return (
    <div className="text-slate-900">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Resources
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                Resources for translation, localization, and global content strategy.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore guides, reference tools, case studies, and educational content across the Stepes resource hub.
              </p>
            </div>

            <a
              href="https://www.stepes.com/resources/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Visit Resources
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1fr_1fr_0.92fr_0.92fr]">
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
