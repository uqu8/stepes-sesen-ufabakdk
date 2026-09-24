import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const groups = [
  {
    title: "About Stepes",
    items: [
      {
        label: "About Us",
        href: "https://www.stepes.com/about/",
      },
      {
        label: "Why Stepes",
        href: "https://www.stepes.com/why-stepes/",
      },
      {
        label: "Our Team",
        href: "https://www.stepes.com/our-team/",
      },
      {
        label: "Our Linguists",
        href: "https://www.stepes.com/our-linguists/",
      },
      {
        label: "Careers",
        href: "https://www.stepes.com/careers/",
      },
      {
        label: "Contact Us",
        href: "https://www.stepes.com/contact-us/",
      },
    ],
  },
  {
    title: "Trust",
    items: [
      {
        label: "Quality System",
        href: "https://www.stepes.com/translation-quality-system/",
      },
      {
        label: "ISO Certifications",
        href: "https://www.stepes.com/iso-certified-translation-services/",
      },
      {
        label: "Security",
        href: "https://www.stepes.com/security/",
      },
      {
        label: "Enterprise Support",
        href: "https://www.stepes.com/enterprise-support/",
      },
      {
        label: "Customer Success",
        href: "https://www.stepes.com/customer-success/",
      },
    ],
  },
  {
    title: "For Linguists",
    items: [
      {
        label: "Become a Translator",
        href: "https://www.stepes.com/become-a-translator/",
      },
      {
        label: "Translator Login",
        href: "https://www.stepes.com/translator-login/",
      },
      {
        label: "Translator Resources",
        href: "https://www.stepes.com/translator-resources/",
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
          Global Scale. Enterprise Quality.
        </div>

        <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
          A trusted translation partner for global business and regulated content.
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Stepes helps companies translate faster and better with AI, automation, professional linguists, and secure enterprise workflows.
        </p>

        <a
          href="https://www.stepes.com/about/"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C11D63] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(193,29,99,0.18)] transition-all hover:bg-[#A71954]"
        >
          About Stepes
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function StepesCompanyDesktopMegaMenu() {
  return (
    <div className="text-slate-900">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 px-7 py-5">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8F4C68]">
                Company
              </div>
              <h1 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950">
                Company information, trust signals, and ways to connect with Stepes.
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Explore who Stepes is, why global companies trust us, and how buyers, teams, and linguists can engage with the company.
              </p>
            </div>

            <a
              href="https://www.stepes.com/about/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              About Stepes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid items-start grid-cols-[1fr_0.92fr_0.82fr_0.92fr]">
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
