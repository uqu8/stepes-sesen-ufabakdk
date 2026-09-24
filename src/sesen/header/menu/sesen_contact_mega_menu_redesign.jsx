import React from "react";

export default function SesenContactMegaMenuRedesign() {
  const startProject = [
    {
      title: "Request a Translation Quote",
      desc: "Get pricing and turnaround estimates for regulated multilingual content.",
      href: "https://www.sesen.com/get-a-quote/",
      featured: true,
    },
    {
      title: "Schedule a Consultation",
      desc: "Speak with our team about clinical, regulatory, labeling, or AI-enabled workflows.",
      href: "https://www.sesen.com/contact-sales/",
    },
    {
      title: "Start an AI Pilot Program",
      desc: "Evaluate SesenGPT workflows for multilingual regulated content.",
      href: "https://www.sesen.com/sesengpt/pilot/",
      badge: "AI",
    },
  ];

  const enterpriseEngagement = [
    {
      title: "Contact Sales",
      desc: "Connect with our life sciences solutions team.",
      href: "https://www.sesen.com/contact-sales/",
    },
    {
      title: "Partnership & Collaboration",
      desc: "Discuss strategic partnerships, technology integrations, and enterprise programs.",
      href: "https://www.sesen.com/partnerships/",
    },
    {
      title: "Global Client Support",
      desc: "Support for existing projects, workflows, and multilingual operations.",
      href: "https://www.sesen.com/client-support/",
    },
  ];

  const trustItems = [
    "Clinical trial translation",
    "Regulatory submissions",
    "Labeling workflows",
    "Pharmacovigilance support",
    "AI-enabled multilingual operations",
  ];

  return (
    <div className="min-h-screen font-sans text-slate-950">
      <div className="mx-auto max-w-[1460px] overflow-hidden rounded-[28px] border border-[#dbe4f8] bg-white shadow-[0_20px_55px_rgba(30,52,96,0.12)]">
        <div className="flex items-center justify-between border-b border-[#e7edf8] px-8 py-6">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f85b8]">Contact</div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#071631]">
              Connect with Sesen’s life sciences translation team
            </h1>
          </div>

          <a
            href="https://www.sesen.com/contact-sales/"
            className="hidden items-center gap-2 rounded-full border border-[#cfdcff] bg-[#f6f8ff] px-5 py-2.5 text-sm font-semibold text-[#2f66ff] transition duration-200 hover:border-[#9fb7ff] hover:bg-white md:flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2f66ff] shadow-sm">✦</span>
            Talk with our team
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.95fr_1.1fr]">
          <section className="px-8 py-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.5 20H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Start a Project</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Choose the right path for a new translation, localization, or AI-enabled workflow.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {startProject.map((item) => (
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

          <section className="border-t border-[#e7edf8] px-8 py-8 lg:border-l lg:border-t-0">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7.5 10.5H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M7.5 14H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M5.5 5.5H18.5C19.6 5.5 20.5 6.4 20.5 7.5V16.5C20.5 17.6 19.6 18.5 18.5 18.5H10L5.5 21V18.5C4.4 18.5 3.5 17.6 3.5 16.5V7.5C3.5 6.4 4.4 5.5 5.5 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Enterprise Engagement</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Connect with Sesen for enterprise programs, partnerships, and ongoing support.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {enterpriseEngagement.map((item) => (
                <a key={item.title} href={item.href} className="group flex gap-3 rounded-2xl border border-transparent p-3 transition duration-200 hover:border-[#dbe4ff] hover:bg-[#f8faff]">
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
          </section>

          <section className="border-t border-[#e7edf8] bg-[#f8faff] px-8 py-8 lg:border-l lg:border-t-0">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3.5L19.5 7.2V12.2C19.5 16.8 16.4 20.2 12 21C7.6 20.2 4.5 16.8 4.5 12.2V7.2L12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.8 12.2L11.2 14.6L15.7 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Why Organizations Contact Sesen</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Specialized support for global life sciences teams managing regulated multilingual content.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#cfdcff] bg-white p-6 shadow-[0_10px_30px_rgba(30,52,96,0.07)]">
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#071631]">
                Trusted for clinical, regulatory, and product content
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[13px] font-medium text-[#263a5f]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#3972ff]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M6.5 12.5L10 16L17.5 8.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#f5f8ff] p-4 text-[13px] leading-6 text-[#263a5f]">
                ISO 17100, ISO 9001, and ISO 13485 certified language services with AWS-hosted infrastructure and multilingual support across 150+ languages.
              </div>
            </div>

            <a href="https://www.sesen.com/contact/" className="mt-5 flex items-center justify-between rounded-3xl border border-[#dbe4ff] bg-white p-5 transition duration-200 hover:border-[#9fb7ff] hover:shadow-[0_14px_36px_rgba(47,102,255,0.13)]">
              <div>
                <h3 className="text-[15px] font-semibold text-[#071631]">General Contact Information</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">For general inquiries, support, and company information.</p>
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
