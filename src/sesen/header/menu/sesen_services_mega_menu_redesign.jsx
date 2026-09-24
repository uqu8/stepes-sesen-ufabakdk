import React from "react";

export default function SesenServicesMegaMenuRedesign() {
  const regulatoryClinical = [
    {
      title: "Regulatory Translation Services",
      desc: "Submissions, SOPs, audits, and regulated documentation.",
      href: "https://www.sesen.com/regulatory-translation-services/",
      featured: true,
    },
    {
      title: "Clinical Trial Translation",
      desc: "ICFs, protocols, site documents, and patient materials.",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
    },
    {
      title: "Linguistic Validation",
      desc: "COAs, PROs, patient questionnaires, and clinical instruments.",
      href: "https://www.sesen.com/linguistic-validation-services/",
    },
    {
      title: "Medical & Scientific Translation",
      desc: "Medical, scientific, and technical life sciences content.",
      href: "https://www.sesen.com/medical-scientific-translation/",
    },
    {
      title: "Pharmacovigilance Translation",
      desc: "AE reports, DSURs, safety updates, and drug surveillance.",
      href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    },
  ];

  const labelingContent = [
    {
      title: "Drug Labeling & Packaging Translation",
      desc: "Regulated labeling and packaging for global product markets.",
      href: "https://www.sesen.com/drug-labeling-packaging-translation/",
      featured: true,
    },
    {
      title: "IFU Translation",
      desc: "Instructions for Use translation for medical devices.",
      href: "https://www.sesen.com/ifu-translation-services/",
    },
    {
      title: "Medical Device Labeling",
      desc: "Device labeling for safety, compliance, and market access.",
      href: "https://www.sesen.com/medical-device-labeling-translation/",
    },
    {
      title: "Label Review & In-Context QA",
      desc: "In-layout linguistic QA for packaging, IFUs, and labels.",
      href: "https://www.sesen.com/label-review-in-context-qa/",
    },
    {
      title: "Regulatory Submission Formatting",
      desc: "Formatting and layout support for multilingual submissions.",
      href: "https://www.sesen.com/regulatory-submission-formatting/",
    },
  ];

  const aiWorkflows = [
    {
      title: "Hybrid Translation Workflows",
      desc: "Human-reviewed AI translation for regulated content.",
      href: "https://www.sesen.com/hybrid-translation-life-sciences/",
      featured: true,
      badge: "AI",
    },
    {
      title: "AI Validation & QA",
      desc: "Checks for terminology, numbers, formatting, and quality.",
      href: "https://www.sesen.com/ai-validation-qa-life-sciences/",
    },
    {
      title: "Terminology Intelligence",
      desc: "AI-assisted terminology extraction and consistency.",
      href: "https://www.sesen.com/ai-terminology-intelligence/",
    },
    {
      title: "AI Workflow Orchestration",
      desc: "Routing, validation, terminology control, and human review.",
      href: "https://www.sesen.com/ai-workflow-orchestration/",
    },
    {
      title: "MTPE Services",
      desc: "Machine translation post-editing by medical linguists.",
      href: "https://www.sesen.com/machine-translation-post-editing/",
    },
  ];

  const digitalEngagement = [
    {
      title: "Software & App Localization",
      desc: "Clinical, medical, software, and digital health platforms.",
      href: "https://www.sesen.com/clinical-medical-software-localization/",
      featured: true,
    },
    {
      title: "eHealth & mHealth Localization",
      desc: "Digital health apps, portals, and patient tools.",
      href: "https://www.sesen.com/ehealth-mhealth-localization/",
    },
    {
      title: "Multimedia Localization",
      desc: "Video, training, voiceover, subtitling, and audiovisual content.",
      href: "https://www.sesen.com/multimedia-translation-services/",
    },
    {
      title: "Voiceover & Subtitling",
      desc: "Multilingual voiceover and subtitles for training and communications.",
      href: "https://www.sesen.com/voiceover-services-life-sciences/",
    },
    {
      title: "Life Sciences Marketing Translation",
      desc: "Commercial, brand, and campaign translation for global markets.",
      href: "https://www.sesen.com/life-sciences-marketing/",
    },
  ];

  const SectionHeader = ({ icon, title }) => (
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
        {icon}
      </div>
      <h2 className="text-[17px] font-semibold leading-tight tracking-[-0.02em] text-[#071631]">{title}</h2>
    </div>
  );

  const MenuCard = ({ item }) => (
    <a
      href={item.href}
      className={`group block rounded-2xl px-3.5 py-3 transition duration-200 ${
        item.featured
          ? "border border-[#cfdcff] bg-[#f5f8ff] shadow-[0_6px_18px_rgba(47,102,255,0.10)]"
          : "border border-transparent hover:border-[#dbe4ff] hover:bg-[#f8faff]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-[14.5px] font-semibold leading-5 text-[#071631] group-hover:text-[#245cff]">{item.title}</h3>
            {item.badge && (
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#3972ff] ring-1 ring-[#d9e4ff]">
                {item.badge}
              </span>
            )}
          </div>
          {item.desc && <p className="mt-1.5 text-[12.5px] leading-5 text-[#263a5f]">{item.desc}</p>}
        </div>
        {item.featured && (
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#3972ff] shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 12H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M13 8L17 12L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </a>
  );

  return (
    <div className="min-h-screen font-sans text-slate-950">
      <div className="mx-auto max-w-[1540px] overflow-hidden rounded-[28px] border border-[#dbe4f8] bg-white shadow-[0_20px_55px_rgba(30,52,96,0.12)]">
        <div className="flex items-center justify-between border-b border-[#e7edf8] px-7 py-5">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f85b8]">Services</div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#071631]">
              Multilingual services for global life sciences operations
            </h1>
          </div>

          <a
            href="https://www.sesen.com/contact-sales/"
            className="hidden items-center gap-2 rounded-full border border-[#cfdcff] bg-[#f6f8ff] px-5 py-2.5 text-sm font-semibold text-[#2f66ff] transition duration-200 hover:border-[#9fb7ff] hover:bg-white md:flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2f66ff] shadow-sm">✦</span>
            Talk to a life sciences specialist
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <section className="px-6 py-6">
            <SectionHeader
              title="Regulatory & Clinical Translation"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8.5 4.5H15.5C16.3 4.5 17 5.2 17 6V6.8H18.5C19.6 6.8 20.5 7.7 20.5 8.8V18.5C20.5 19.6 19.6 20.5 18.5 20.5H5.5C4.4 20.5 3.5 19.6 3.5 18.5V8.8C3.5 7.7 4.4 6.8 5.5 6.8H7V6C7 5.2 7.7 4.5 8.5 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.2 10.8H15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 9V12.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 16H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
            <div className="space-y-2">
              {regulatoryClinical.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] px-6 py-6 lg:border-l lg:border-t-0">
            <SectionHeader
              title="Labeling & Regulated Content"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.5 4.5H14.5L19.5 9.5V19.5H6.5V4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M14.5 4.8V9.5H19.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 16H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4.5 8.5L2.8 10.2C2.4 10.6 2.4 11.3 2.8 11.7L5.9 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <div className="space-y-2">
              {labelingContent.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-6 py-6 xl:border-l xl:border-t-0">
            <SectionHeader
              title="AI-Enabled Translation Workflows"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4.2L13.8 8.2L17.8 10L13.8 11.8L12 15.8L10.2 11.8L6.2 10L10.2 8.2L12 4.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M18 15.2L18.9 17.1L20.8 18L18.9 18.9L18 20.8L17.1 18.9L15.2 18L17.1 17.1L18 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M6 15.8L6.7 17.3L8.2 18L6.7 18.7L6 20.2L5.3 18.7L3.8 18L5.3 17.3L6 15.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              }
            />
            <div className="space-y-2">
              {aiWorkflows.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-6 py-6 xl:border-l xl:border-t-0">
            <SectionHeader
              title="Digital Health & Global Engagement"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5.5 5.5H18.5C19.6 5.5 20.5 6.4 20.5 7.5V15.5C20.5 16.6 19.6 17.5 18.5 17.5H5.5C4.4 17.5 3.5 16.6 3.5 15.5V7.5C3.5 6.4 4.4 5.5 5.5 5.5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 20H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 17.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 11.5H10.8L12 8.8L14 14.2L15.2 11.5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <div className="space-y-2">
              {digitalEngagement.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
