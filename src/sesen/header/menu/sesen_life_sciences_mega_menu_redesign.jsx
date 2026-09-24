import React from "react";

export default function SesenLifeSciencesMegaMenuRedesign() {
  const coreSectors = [
    {
      title: "Pharmaceuticals",
      desc: "Clinical, regulatory, labeling, safety, and commercialization support for global drug programs.",
      href: "https://www.sesen.com/pharmaceuticals-translation-services/",
      featured: true,
    },
    {
      title: "Biotechnology",
      desc: "Translation for research, genomics, gene therapy, biosimilars, and emerging therapeutics.",
      href: "https://www.sesen.com/biotechnology-translation-services/",
    },
    {
      title: "Medical Devices",
      desc: "IFUs, labeling, software, technical documentation, and device compliance content.",
      href: "https://www.sesen.com/medical-device-translation-services/",
    },
    {
      title: "CROs",
      desc: "Multilingual support for clinical study operations, recruitment, sites, and trial documentation.",
      href: "https://www.sesen.com/clinical-research-organizations-cros/",
    },
  ];

  const healthcarePublic = [
    {
      title: "Healthcare & Hospitals",
      desc: "Patient-facing content, EHR documentation, telehealth, and multilingual care communication.",
      href: "https://www.sesen.com/healthcare-hospital-translation-services/",
    },
    {
      title: "Regulatory & Government",
      desc: "Public health, health authority, policy, and compliance-driven multilingual communication.",
      href: "https://www.sesen.com/regulatory-government-translation-services/",
    },
    {
      title: "Public Health & Policy",
      desc: "Translation support for public health programs, policy documents, and global health initiatives.",
      href: "https://www.sesen.com/public-health-policy-document-translations/",
    },
    {
      title: "Digital Health & Healthcare Technology",
      desc: "Localization for digital health platforms, patient portals, eCOA, and clinical software.",
      href: "https://www.sesen.com/ehealth-mhealth-localization/",
    },
  ];

  const domainExpertise = [
    {
      title: "Clinical Development",
      desc: "Language support across study startup, patient materials, clinical documentation, and global trials.",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
    },
    {
      title: "Regulatory Affairs",
      desc: "Multilingual support for submissions, labeling updates, safety documents, and compliance workflows.",
      href: "https://www.sesen.com/regulatory-translation-services/",
    },
    {
      title: "Medical Affairs",
      desc: "Translation for scientific exchange, publications, training, and medical communications.",
      href: "https://www.sesen.com/medical-affairs-translation-services/",
    },
    {
      title: "Product Lifecycle & Market Access",
      desc: "Support for labeling, packaging, launch materials, updates, and global commercialization.",
      href: "https://www.sesen.com/life-sciences-marketing/",
    },
  ];

  const trustItems = [
    "ISO 17100, ISO 9001, and ISO 13485 certified",
    "Professional native medical linguists",
    "AI-enabled workflows with expert human review",
    "AWS-hosted infrastructure",
    "Support across 150+ languages",
  ];

  const SectionHeader = ({ icon, title, desc }) => (
    <div className="mb-7 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
        {icon}
      </div>
      <div>
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#071631]">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-[#526383]">{desc}</p>
      </div>
    </div>
  );

  const MenuCard = ({ item }) => (
    <a
      href={item.href}
      className={`group block rounded-2xl p-4 transition duration-200 ${
        item.featured
          ? "border border-[#cfdcff] bg-[#f5f8ff] shadow-[0_8px_24px_rgba(47,102,255,0.12)]"
          : "border border-transparent hover:border-[#dbe4ff] hover:bg-[#f8faff]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold leading-6 text-[#071631] group-hover:text-[#245cff]">{item.title}</h3>
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
  );

  return (
    <div className="min-h-screen font-sans text-slate-950">
      <div className="mx-auto max-w-[1540px] overflow-hidden rounded-[28px] border border-[#dbe4f8] bg-white shadow-[0_20px_55px_rgba(30,52,96,0.12)]">
        <div className="flex items-center justify-between border-b border-[#e7edf8] px-8 py-6">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f85b8]">Life Sciences</div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#071631]">
              Specialized multilingual support across the life sciences ecosystem
            </h1>
          </div>

          <a
            href="https://www.sesen.com/life-sciences-translation-services/"
            className="hidden items-center gap-2 rounded-full border border-[#cfdcff] bg-[#f6f8ff] px-5 py-2.5 text-sm font-semibold text-[#2f66ff] transition duration-200 hover:border-[#9fb7ff] hover:bg-white md:flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2f66ff] shadow-sm">✦</span>
            Explore life sciences expertise
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.08fr]">
          <section className="px-7 py-8">
            <SectionHeader
              title="Core Life Sciences Sectors"
              desc="Domain specialization across the organizations and content environments Sesen supports."
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8.2 15.8C9.7 14.4 11.2 13.5 12.9 13.1C14.5 12.7 16.2 12.9 18 13.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6.2 10.7C8.3 11.5 10.2 11.7 11.9 11.2C13.6 10.7 15.1 9.7 16.4 8.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
            <div className="space-y-3">
              {coreSectors.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] px-7 py-8 lg:border-l lg:border-t-0">
            <SectionHeader
              title="Healthcare & Public Sector"
              desc="Support for healthcare systems, public health programs, and digital care environments."
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.5 20H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6.5 20V9.5L12 5L17.5 9.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M10 13H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 11V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
            <div className="space-y-3">
              {healthcarePublic.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-7 py-8 xl:border-l xl:border-t-0">
            <SectionHeader
              title="Specialized Domain Expertise"
              desc="Language support aligned with how life sciences teams manage global content."
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3.5L19.5 7.2V12.2C19.5 16.8 16.4 20.2 12 21C7.6 20.2 4.5 16.8 4.5 12.2V7.2L12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.8 12.2L11.2 14.6L15.7 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <div className="space-y-3">
              {domainExpertise.map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-7 py-8 xl:border-l xl:border-t-0">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3.5L19.5 7.2V12.2C19.5 16.8 16.4 20.2 12 21C7.6 20.2 4.5 16.8 4.5 12.2V7.2L12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.7 12.2L11.1 14.6L15.6 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#071631]">Trust & Compliance</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Built for regulated life sciences content, enterprise quality, and multilingual scale.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#cfdcff] bg-white p-6 shadow-[0_10px_30px_rgba(30,52,96,0.07)]">
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#071631]">Built for regulated life sciences content</h3>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13px] font-medium leading-6 text-[#263a5f]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#3972ff]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M6.5 12.5L10 16L17.5 8.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <a href="https://www.sesen.com/contact-sales/" className="mt-5 flex items-center justify-between rounded-3xl border border-[#dbe4ff] bg-white p-5 transition duration-200 hover:border-[#9fb7ff] hover:shadow-[0_14px_36px_rgba(47,102,255,0.13)]">
              <div>
                <h3 className="text-[15px] font-semibold text-[#071631]">Discuss Your Life Sciences Translation Program</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">Connect with Sesen to review clinical, regulatory, labeling, or AI-enabled workflow needs.</p>
              </div>
              <div className="ml-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f3f6ff] text-[#3972ff]">
                ✦
              </div>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
