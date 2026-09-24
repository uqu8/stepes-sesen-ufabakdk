import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const groups = [
  {
    title: "Translation Services",
    items: [
      {
        label: "Professional Translation Services",
        href: "https://www.stepes.com/translation-services/",
      },
      {
        label: "Certified Translation Services",
        href: "https://www.stepes.com/certified-translation-services/",
      },
      {
        label: "Technical Translation Services",
        href: "https://www.stepes.com/technical-translation-services/",
      },
      {
        label: "Legal Translation Services",
        href: "https://www.stepes.com/legal-translation-services/",
      },
      {
        label: "Medical Translation Services",
        href: "https://www.stepes.com/medical-translation-services/",
      },
      {
        label: "Financial Translation Services",
        href: "https://www.stepes.com/financial-translation-services/",
      },
      {
        label: "Marketing Translation Services",
        href: "https://www.stepes.com/marketing-translation-services/",
      },
      {
        label: "Patent Translation Services",
        href: "https://www.stepes.com/patent-translation-services/",
      },
    ],
  },
  {
    title: "Localization Services",
    items: [
      {
        label: "Website Localization",
        href: "https://www.stepes.com/website-localization-services/",
      },
      {
        label: "Software Localization",
        href: "https://www.stepes.com/software-localization-services/",
      },
      {
        label: "App Localization",
        href: "https://www.stepes.com/app-localization-services/",
      },
      {
        label: "Game Localization",
        href: "https://www.stepes.com/video-game-translation-services/",
      },
      {
        label: "eLearning Localization",
        href: "https://www.stepes.com/elearning-localization-services/",
      },
      {
        label: "Multimedia Localization",
        href: "https://www.stepes.com/multimedia-translation-services/",
      },
    ],
  },
  {
    title: "AI & Data Services",
    items: [
      {
        label: "AI Translation Services",
        href: "https://www.stepes.com/ai-translation-services/",
      },
      {
        label: "Machine Translation Post-Editing",
        href: "https://www.stepes.com/machine-translation-post-editing/",
      },
      {
        label: "LLM Evaluation Services",
        href: "https://www.stepes.com/multilingual-llm-evaluation-services/",
      },
      {
        label: "Multilingual AI Data Services",
        href: "https://www.stepes.com/multilingual-ai-data-services/",
      },
      {
        label: "Multilingual Text Annotation",
        href: "https://www.stepes.com/multilingual-text-annotation-services/",
      },
      {
        label: "Voice Data Collection",
        href: "https://www.stepes.com/multilingual-voice-conversation-data-collection/",
      },
      {
        label: "AI Output Review",
        href: "https://www.stepes.com/ai-translation-review/",
      },
    ],
  },
  {
    title: "Interpreting",
    items: [
      {
        label: "Remote Interpreting",
        href: "https://www.stepes.com/interpretation-services/",
      },
      {
        label: "Over-the-Phone Interpreting",
        href: "https://www.stepes.com/phone-call-interpretation/",
      },
      {
        label: "Video Remote Interpreting",
        href: "https://www.stepes.com/video-remote-interpreting/",
      },
      {
        label: "On-site Interpreting",
        href: "https://www.stepes.com/book-an-interpreter-online/",
      },
      {
        label: "Conference Interpreting",
        href: "https://www.stepes.com/conference-interpreting-services/",
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
          Need Translation Now?
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          Professional language services for documents, software, media, AI, and interpreting.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Upload documents, choose languages, and get a fast online quote from Stepes.
        </p>

        <a
          href="https://customer.stepes.com/instant-translation-quote/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          Order Online
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesServicesDesktopMegaMenuUpdated() {
  return (
    <div className="text-slate-900">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Services
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                Professional language services for global content and communication.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore Stepes translation, localization, AI data, and interpreting services in one organized service menu.
              </p>
            </div>

            <a
              href="https://customer.stepes.com/instant-translation-quote/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Order Online
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1fr_0.9fr_0.95fr_0.8fr_0.9fr]">
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[0]} firstColumn />
          </div>
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[1]} />
          </div>
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[2]} />
          </div>
          <div className="border-r border-slate-200">
            <GroupColumn group={groups[3]} />
          </div>
          <FeaturedRail />
        </div>
      </div>
    </div>
  );
}
