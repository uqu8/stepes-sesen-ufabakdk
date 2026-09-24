import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "AI Translation Platform", href: "https://www.stepes.com/ai-translation-platform/" },
      { label: "Enterprise Translation Management", href: "https://www.stepes.com/enterprise-translation-management/" },
      { label: "Translation API", href: "https://www.stepes.com/translation-api/" },
      { label: "Customer Translation Portal", href: "https://www.stepes.com/translation-management-portal/" },
      { label: "Translation Memory", href: "https://www.stepes.com/translation-memory/" },
      { label: "Terminology Management", href: "https://www.stepes.com/terminology-management/" },
      { label: "Workflow Automation", href: "https://www.stepes.com/translation-workflow-automation/" },
      { label: "Security & Compliance", href: "https://www.stepes.com/security-compliance/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Translation Services", href: "https://www.stepes.com/translation-services/" },
      { label: "Certified Translation", href: "https://www.stepes.com/certified-translation-services/" },
      { label: "Technical Translation", href: "https://www.stepes.com/technical-translation-services/" },
      { label: "Legal Translation", href: "https://www.stepes.com/legal-translation-services/" },
      { label: "Medical Translation", href: "https://www.stepes.com/medical-translation-services/" },
      { label: "Financial Translation", href: "https://www.stepes.com/financial-translation-services/" },
      { label: "Website Localization", href: "https://www.stepes.com/website-localization-services/" },
      { label: "Software Localization", href: "https://www.stepes.com/software-localization-services/" },
      { label: "Interpreting Services", href: "https://www.stepes.com/interpretation-services/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Life Sciences", href: "https://www.stepes.com/life-sciences-translation-services/" },
      { label: "Healthcare", href: "https://www.stepes.com/healthcare-translation-services/" },
      { label: "Medical Devices", href: "https://www.stepes.com/medical-device-translation-services/" },
      { label: "Legal", href: "https://www.stepes.com/legal-translation-services/" },
      { label: "Financial Services", href: "https://www.stepes.com/financial-translation-services/" },
      { label: "Manufacturing", href: "https://www.stepes.com/manufacturing-translation-services/" },
      { label: "Software & SaaS", href: "https://www.stepes.com/software-translation-services/" },
      { label: "Retail & E-commerce", href: "https://www.stepes.com/ecommerce-translation-services/" },
      { label: "Government", href: "https://www.stepes.com/government-translation-services/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "https://www.stepes.com/resources/" },
      { label: "Translation Guides", href: "https://www.stepes.com/resources/translation-guides/" },
      { label: "Localization Guides", href: "https://www.stepes.com/resources/localization-guides/" },
      { label: "AI Translation Insights", href: "https://www.stepes.com/resources/ai-translation-insights/" },
      { label: "Case Studies", href: "https://www.stepes.com/resources/case-studies/" },
      { label: "Languages", href: "https://www.stepes.com/translation-languages/" },
      { label: "File Formats", href: "https://www.stepes.com/resources/file-formats/" },
      { label: "API Documentation", href: "https://www.stepes.com/developers/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Stepes", href: "https://www.stepes.com/about/" },
      { label: "Why Stepes", href: "https://www.stepes.com/why-stepes/" },
      { label: "Our Team", href: "https://www.stepes.com/our-team/" },
      { label: "Our Linguists", href: "https://www.stepes.com/our-linguists/" },
      { label: "Careers", href: "https://www.stepes.com/careers/" },
      { label: "Contact Us", href: "https://www.stepes.com/contact-us/" },
    ],
  },
];

const portalLinks = [
  { label: "Customer Login", href: "https://www.stepes.com/customer-login/" },
  { label: "Translator Login", href: "https://www.stepes.com/translator-login/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://www.stepes.com/privacy-policy/" },
  { label: "Terms of Use", href: "https://www.stepes.com/terms-of-use/" },
  { label: "Security", href: "https://www.stepes.com/security/" },
  { label: "Accessibility", href: "https://www.stepes.com/accessibility/" },
  { label: "Sitemap", href: "https://www.stepes.com/sitemap/" },
];

function DesktopFooter() {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-5 gap-x-10 gap-y-10 pb-14 pt-14 xl:gap-x-12">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C493A8]">
              {column.title}
            </h3>
            <div className="mt-5 space-y-2.5">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group -mx-2 flex items-center rounded-xl px-2 py-1.5 text-[14px] leading-6 text-[#E7E0E4] transition-all duration-200 hover:bg-[#24161D] hover:text-white"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-[1px]">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileFooter() {
  const [open, setOpen] = useState(footerColumns[0].title);

  return (
    <div className="lg:hidden pb-8 pt-8">
      <div className="space-y-3">
        {footerColumns.map((column) => {
          const isOpen = open === column.title;
          return (
            <div key={column.title} className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.025]">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? "" : column.title)}
                className="flex w-full items-center justify-between px-4 py-4 text-left"
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C493A8]">
                  {column.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-[#9E9299] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-white/10 px-4 py-3">
                  <div className="space-y-1">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block rounded-xl px-2 py-2 text-[14px] text-[#E7E0E4] transition-colors duration-200 hover:bg-[#24161D] hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function StepesFooterWireframe() {
  return (
    <footer className="relative overflow-hidden bg-[#141316] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C11D63]/55 to-transparent" />
      <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-[#C11D63]/10 blur-3xl" />
      <div className="absolute right-[-140px] bottom-[-180px] h-[320px] w-[320px] rounded-full bg-[#7A1542]/10 blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="border-b border-white/10 pb-10 pt-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C11D63] text-white shadow-[0_10px_24px_rgba(193,29,99,0.22)]">
                <span className="text-[2rem] font-semibold tracking-[-0.03em]">S</span>
              </div>
              <span className="text-[1.8rem] font-semibold text-white">Stepes</span>
            </div>

            <h2 className="mt-7 max-w-3xl text-[2rem] font-semibold leading-tight text-white sm:text-[2rem]">
              Enterprise translation, localization, and multilingual content operations.
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#C1B7BD]">
              Stepes helps companies translate, localize, and manage multilingual content across global markets with AI-powered workflows and professional human expertise.
            </p>
          </div>
        </div>

        <DesktopFooter />
        <MobileFooter />

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {portalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[13px] font-medium text-[#E7E0E4] transition-all duration-200 hover:bg-[#24161D] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-[#B7ACB3] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-[13px] text-[#988E95]">© 2026 Stepes. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}