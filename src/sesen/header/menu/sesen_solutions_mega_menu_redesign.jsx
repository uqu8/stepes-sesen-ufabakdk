import React from "react";

const SESEN_BLUE = "#4C7CF3";
const SESEN_BLUE_LIGHT = "#EEF3FF";
const SESEN_BLUE_SOFT = "#F7F9FF";
const SESEN_BORDER = "#D9E3FF";

function Icon({ type, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    flask: (
      <svg {...common}>
        <path d="M10 2v7.3L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3l-5.5-8.7V2" />
        <path d="M8.5 2h7" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    workspace: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h7" />
        <path d="M8 20h8" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      </svg>
    ),
  };

  return icons[type] || icons.flask;
}

const regulatorySolutions = [
  {
    title: "Regulatory Translation & Compliance",
    href: "https://www.sesen.com/regulatory-compliance-translation-services/",
    desc: "Multilingual support for global submissions, labeling, audits, and SOPs.",
  },
  {
    title: "Clinical Trial Enablement",
    href: "https://www.sesen.com/multilingual-clinical-trial-enablement/",
    desc: "Translations for ICFs, protocols, site documents, and patient recruitment.",
  },
  {
    title: "Pharmacovigilance Translation",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    desc: "Specialized translations for AE/SAE reports, DSURs, and safety updates.",
  },
  {
    title: "Label Review & In-Context QA",
    href: "https://www.sesen.com/label-review-in-context-qa/",
    desc: "In-layout linguistic QA for packaging, IFUs, and labeling compliance.",
  },
  {
    title: "Labeling Workspace",
    href: "https://www.sesen.com/life-sciences-labeling-workspace/",
    desc: "Structured multilingual workflows for labeling translation, validation, and approval.",
    featured: true,
    badge: "NEW",
  },
  {
    title: "Modular Submission & Content Reuse",
    href: "https://www.sesen.com/modular-submission-translation-content-reuse/",
    desc: "Component-based translation for IDMP, SPL, and XML content workflows.",
  },
];

const commercialSolutions = [
  {
    title: "Global Product Launch & Market Entry",
    href: "https://www.sesen.com/market-entry-translation-services/",
    desc: "Comprehensive support for launching products in international markets.",
  },
  {
    title: "Patient Engagement & Recruitment",
    href: "https://www.sesen.com/patient-engagement-translation-services/",
    desc: "Culturally adapted outreach and multilingual trial communications.",
  },
  {
    title: "Terminology Management & Harmonization",
    href: "https://www.sesen.com/terminology-management-harmonization/",
    desc: "Consistent scientific and brand language across markets.",
  },
  {
    title: "eLearning & Training Localization",
    href: "https://www.sesen.com/elearning-training-translation-services/",
    desc: "Localized training for internal teams, HCPs, and external stakeholders.",
  },
  {
    title: "Website & Digital Experience Localization",
    href: "https://www.sesen.com/website-digital-experience-localization/",
    desc: "Translation of websites, portals, and mobile health apps.",
  },
];

export default function SesenSolutionsMegaMenu() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1540px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-100 bg-white px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Solutions
              </div>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-950">
                Enterprise solutions for regulated multilingual content
              </h2>
            </div>

            <div
              className="hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium lg:flex"
              style={{ borderColor: SESEN_BORDER, backgroundColor: SESEN_BLUE_SOFT, color: SESEN_BLUE }}
            >
              <Icon type="spark" className="h-4 w-4" />
              Powered by SesenGPT workflows
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-r border-slate-100 p-8">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: SESEN_BLUE_LIGHT, color: SESEN_BLUE }}
              >
                <Icon type="flask" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  Regulatory & Clinical Solutions
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Structured multilingual workflows for regulated life sciences operations.
                </p>
              </div>
            </div>

            <div className="grid gap-3 xl:grid-cols-2">
              {regulatorySolutions.map((item) => (
                <div
                  key={item.title}
                  className={`group rounded-2xl border transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${item.featured ? "bg-white shadow-sm" : "bg-transparent"}`}
                  style={{
                    borderColor: item.featured ? SESEN_BORDER : "transparent",
                    backgroundColor: item.featured ? SESEN_BLUE_SOFT : "transparent",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 p-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <a
                          href={item.href}
                          className="text-[15px] font-semibold leading-5 text-slate-950 transition hover:text-slate-900"
                        >
                          {item.title}
                        </a>

                        {item.badge && (
                          <span
                            className="rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide"
                            style={{ backgroundColor: SESEN_BLUE_LIGHT, color: SESEN_BLUE }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 max-w-2xl text-[13px] leading-5 text-slate-600">
                        {item.desc}
                      </p>
                    </div>

                    {item.featured && (
                      <div
                        className="hidden h-9 w-9 flex-none items-center justify-center rounded-xl lg:flex"
                        style={{ backgroundColor: SESEN_BLUE_LIGHT, color: SESEN_BLUE }}
                      >
                        <Icon type="workspace" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FBFCFE] p-8">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: SESEN_BLUE_LIGHT, color: SESEN_BLUE }}
              >
                <Icon type="globe" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  Commercial & Engagement Solutions
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Global communication and multilingual engagement programs.
                </p>
              </div>
            </div>

            <div className="grid gap-3 xl:grid-cols-2">
              {commercialSolutions.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-transparent p-4 transition duration-300 hover:border-slate-200 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full"
                      style={{ backgroundColor: SESEN_BLUE_LIGHT, color: SESEN_BLUE }}
                    >
                      <Icon type="check" className="h-3.5 w-3.5" />
                    </div>

                    <div>
                      <a
                        href={item.href}
                        className="text-[15px] font-semibold leading-5 text-slate-950 transition hover:text-slate-900"
                      >
                        {item.title}
                      </a>
                      <p className="mt-1.5 text-[13px] leading-5 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-[1.5rem] border p-5"
              style={{ borderColor: SESEN_BORDER, backgroundColor: SESEN_BLUE_SOFT }}
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  

                  <h4 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                    AI-enabled workflows for multilingual regulated content
                  </h4>

                  <p className="mt-2 text-[13px] leading-5 text-slate-600">
                    Sesen combines expert linguists, validation-driven review, and AI-assisted technologies to support global life sciences operations.
                  </p>
                </div>

                <div
                  className="hidden h-11 w-11 flex-none items-center justify-center rounded-xl lg:flex"
                  style={{ backgroundColor: "white", color: SESEN_BLUE }}
                >
                  <Icon type="spark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
