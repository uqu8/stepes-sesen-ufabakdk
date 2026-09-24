import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const groups = [
  {
    title: "Regulated Industries",
    items: [
      {
        label: "Life Sciences",
        href: "https://www.stepes.com/life-sciences-translation-services/",
      },
      {
        label: "Healthcare",
        href: "https://www.stepes.com/healthcare-translation-services/",
      },
      {
        label: "Medical Devices",
        href: "https://www.stepes.com/medical-device-translation-services/",
      },
      {
        label: "Legal",
        href: "https://www.stepes.com/legal-translation-services/",
      },
      {
        label: "Financial Services",
        href: "https://www.stepes.com/financial-translation-services/",
      },
      {
        label: "Insurance",
        href: "https://www.stepes.com/insurance-translation-services/",
      },
      {
        label: "Government",
        href: "https://www.stepes.com/government-translation-services/",
      },
    ],
  },
  {
    title: "Technology & Manufacturing",
    items: [
      {
        label: "Software & SaaS",
        href: "https://www.stepes.com/software-translation-services/",
      },
      {
        label: "AI & Machine Learning",
        href: "https://www.stepes.com/ai-data-translation-services/",
      },
      {
        label: "Manufacturing",
        href: "https://www.stepes.com/manufacturing-translation-services/",
      },
      {
        label: "Automotive",
        href: "https://www.stepes.com/automotive-translation-services/",
      },
      {
        label: "Electronics",
        href: "https://www.stepes.com/electronics-translation-services/",
      },
      {
        label: "Telecommunications",
        href: "https://www.stepes.com/telecommunications-translation-services/",
      },
    ],
  },
  {
    title: "Global Business",
    items: [
      {
        label: "Retail & E-commerce",
        href: "https://www.stepes.com/ecommerce-translation-services/",
      },
      {
        label: "Travel & Hospitality",
        href: "https://www.stepes.com/travel-hospitality-translation-services/",
      },
      {
        label: "Media & Entertainment",
        href: "https://www.stepes.com/media-entertainment-translation-services/",
      },
      {
        label: "Education & eLearning",
        href: "https://www.stepes.com/education-translation-services/",
      },
      {
        label: "Gaming",
        href: "https://www.stepes.com/gaming-translation-services/",
      },
      {
        label: "Energy",
        href: "https://www.stepes.com/energy-translation-services/",
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
          Translation Expertise by Industry
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          Industry knowledge for regulated, technical, and global business content.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Stepes combines AI-powered workflows with professional translators who understand your subject matter, terminology, documentation, and regulatory expectations.
        </p>

        <a
          href="https://www.stepes.com/industries/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          View Industries
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesIndustriesDesktopMegaMenu() {
  return (
    <div className="text-slate-900">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Industries
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                Industry-specific translation expertise for global business.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore Stepes language solutions for regulated industries, technical sectors, and global commercial markets.
              </p>
            </div>

            <a
              href="https://www.stepes.com/industries/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              View Industries
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1fr_1fr_1fr_0.92fr]">
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
