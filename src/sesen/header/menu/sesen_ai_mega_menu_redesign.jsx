import React from "react";

export default function SesenAIMegaMenuRedesign() {
  const corePlatform = [
    {
      title: "SesenGPT",
      desc: "AI-assisted translation workflows built for regulated life sciences content.",
      badge: "CORE",
      featured: true,
      href: "https://www.sesen.com/sesengpt/",
    },
    {
      title: "Hybrid Translation Workflows",
      desc: "Human-reviewed AI translation for quality, consistency, and scalability.",
      href: "https://www.sesen.com/hybrid-translation-life-sciences/",
    },
    {
      title: "AI Validation & QA",
      desc: "Automated checks for terminology, numbers, formatting, and compliance.",
      href: "https://www.sesen.com/ai-validation-qa-life-sciences/",
    },
    {
      title: "Terminology Intelligence",
      desc: "AI-assisted term extraction, harmonization, and reuse across global content.",
      href: "https://www.sesen.com/ai-terminology-intelligence/",
    },
    {
      title: "Labeling Workspace",
      desc: "Structured workflows for multilingual labeling translation, review, and validation.",
      badge: "NEW",
      href: "https://www.sesen.com/life-sciences-labeling-workspace/",
    },
  ];

  const operationalAI = [
    {
      title: "Clinical Trial AI Workflows",
      desc: "AI-assisted multilingual support for ICFs, protocols, and patient materials.",
      href: "https://www.sesen.com/ai-for-clinical-trial-translation/",
    },
    {
      title: "Regulatory Content Automation",
      desc: "Structured AI workflows for submissions, labeling, and compliance content.",
      href: "https://www.sesen.com/ai-for-regulatory-compliance/",
    },
    {
      title: "Pharmacovigilance AI Support",
      desc: "AI-enabled workflows for AE reports, DSURs, safety updates, and drug surveillance.",
      href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    },
    {
      title: "Digital Health AI Localization",
      desc: "AI-assisted localization for portals, apps, eCOA, and digital health platforms.",
      href: "https://www.sesen.com/ehealth-mhealth-localization/",
    },
    {
      title: "AI Workflow Orchestration",
      desc: "Coordinated multilingual workflows with AI-assisted routing, validation, terminology control, and human review.",
      href: "https://www.sesen.com/ai-workflow-orchestration/",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-950">
      <div className="mx-auto max-w-[1460px] overflow-hidden rounded-[28px] border border-[#dbe4f8] bg-white shadow-[0_20px_55px_rgba(30,52,96,0.12)]">
        <div className="flex items-center justify-between border-b border-[#e7edf8] px-8 py-6">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f85b8]">AI</div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#071631]">
              AI infrastructure for multilingual life sciences content
            </h1>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#cfdcff] bg-[#f6f8ff] px-5 py-2.5 text-sm font-semibold text-[#2f66ff] md:flex">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2f66ff] shadow-sm">✦</span>
            Powered by SesenGPT workflows
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr]">
          <section className="px-8 py-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3.5L18.5 7.2V14.8L12 18.5L5.5 14.8V7.2L12 3.5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7.4V14.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.9 9.2L12 7.4L15.1 9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Core AI Platform</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Proprietary AI, terminology, validation, and workflow systems for regulated multilingual content.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
              {corePlatform.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`group block rounded-2xl p-4 transition duration-200 ${
                    item.featured
                      ? "border border-[#cfdcff] bg-[#f5f8ff] shadow-[0_8px_24px_rgba(47,102,255,0.12)]"
                      : "border border-transparent hover:border-[#dbe4ff] hover:bg-[#f8faff]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-semibold leading-6 text-[#071631] group-hover:text-[#245cff]">{item.title}</h3>
                        {item.badge && (
                          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#3972ff] ring-1 ring-[#d9e4ff]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">{item.desc}</p>
                    </div>
                    {item.featured && (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#3972ff] shadow-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 12H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M13 8L17 12L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-8 py-8 lg:border-l lg:border-t-0">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.5 18.5V8.5C4.5 7.4 5.4 6.5 6.5 6.5H17.5C18.6 6.5 19.5 7.4 19.5 8.5V18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 6.5V5.5C8 4.7 8.7 4 9.5 4H14.5C15.3 4 16 4.7 16 5.5V6.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3.5 18.5H20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 12H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Operational AI Solutions</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  AI-enabled workflows for clinical, regulatory, safety, and digital health teams.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
              {operationalAI.map((item) => (
                <a key={item.title} href={item.href} className="group flex gap-3 rounded-2xl border border-transparent p-3 transition duration-200 hover:border-[#dbe4ff] hover:bg-white">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#3972ff]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6.5 12.5L10 16L17.5 8.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-6 text-[#071631] group-hover:text-[#245cff]">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            <a href="https://www.sesen.com/contact-sales/" className="mt-8 flex items-center justify-between rounded-3xl border border-[#cfdcff] bg-white p-6 shadow-[0_10px_30px_rgba(30,52,96,0.07)] transition duration-200 hover:border-[#9fb7ff] hover:shadow-[0_14px_36px_rgba(47,102,255,0.13)]">
              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#071631]">Build a controlled AI translation program</h3>
                <p className="mt-2 max-w-[620px] text-[13px] leading-6 text-[#263a5f]">
                  Start with a pilot that combines SesenGPT, professional native medical linguists, terminology control, and validation-driven QA.
                </p>
              </div>
              <div className="ml-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f3f6ff] text-[#3972ff]">
                ✦
              </div>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
