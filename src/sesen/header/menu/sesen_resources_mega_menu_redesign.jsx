import React from "react";

export default function SesenResourcesMegaMenuRedesign() {
  const industryInsights = [
    {
      title: "Blog & Insights",
      desc: "Trends, analysis, and expert perspectives on multilingual life sciences communication.",
      href: "https://www.sesen.com/resources/blog-insights/",
      featured: true,
    },
    {
      title: "AI & Regulatory Insights",
      desc: "Guidance on AI-enabled workflows, validation, terminology, and compliance.",
      href: "https://www.sesen.com/resources/ai-regulatory-insights/",
      badge: "AI",
    },
    {
      title: "Clinical & Regulatory Knowledge",
      desc: "Best practices for clinical trials, submissions, labeling, and global content operations.",
      href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/",
    },
  ];

  const operationalResources = [
    {
      title: "Case Studies & Success Stories",
      desc: "Examples of multilingual workflow support across life sciences organizations.",
      href: "https://www.sesen.com/resources/case-studies/",
    },
    {
      title: "Webinars & Events",
      desc: "On-demand sessions and expert discussions on regulated multilingual operations.",
      href: "https://www.sesen.com/resources/webinars-events/",
    },
    {
      title: "Glossaries & Style Guides",
      desc: "Terminology resources for consistency across multilingual content programs.",
      href: "https://www.sesen.com/resources/glossaries-style-guides/",
    },
  ];

  const strategicResources = [
    {
      title: "White Papers & E-books",
      desc: "Detailed guidance on AI workflows, translation strategy, and global compliance.",
      href: "https://www.sesen.com/resources/white-papers-ebooks/",
    },
    {
      title: "Knowledge Base & FAQs",
      desc: "Answers to operational, regulatory, and localization workflow questions.",
      href: "https://www.sesen.com/resources/knowledge-base-faqs/",
    },
    {
      title: "Resource Center",
      desc: "Browse educational, technical, and customer-facing resources from Sesen.",
      href: "https://www.sesen.com/resources/",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-950">
      <div className="mx-auto max-w-[1460px] overflow-hidden rounded-[28px] border border-[#dbe4f8] bg-white shadow-[0_20px_55px_rgba(30,52,96,0.12)]">
        <div className="flex items-center justify-between border-b border-[#e7edf8] px-8 py-6">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#6f85b8]">Resources</div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[#071631]">
              Insights and knowledge resources for life sciences teams
            </h1>
          </div>

          <a
            href="https://www.sesen.com/resources/"
            className="hidden items-center gap-2 rounded-full border border-[#cfdcff] bg-[#f6f8ff] px-5 py-2.5 text-sm font-semibold text-[#2f66ff] transition duration-200 hover:border-[#9fb7ff] hover:bg-white md:flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2f66ff] shadow-sm">✦</span>
            Explore all resources
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.95fr_1.1fr]">
          <section className="px-8 py-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#3972ff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5.5 4.5H13.5L18.5 9.5V19.5H5.5V4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M13.5 4.8V9.5H18.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.5 13H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.5 16H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Industry Insights</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Expert perspectives on AI, regulatory content, and multilingual life sciences communication.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {industryInsights.map((item) => (
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
                  <path d="M4.5 7.5H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6.5 4.5H17.5C18.6 4.5 19.5 5.4 19.5 6.5V17.5C19.5 18.6 18.6 19.5 17.5 19.5H6.5C5.4 19.5 4.5 18.6 4.5 17.5V6.5C4.5 5.4 5.4 4.5 6.5 4.5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.5 15.5H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Customer & Operational Resources</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Proof points, learning resources, and practical tools for multilingual content programs.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {operationalResources.map((item) => (
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
                  <path d="M5.5 5.5H18.5V18.5H5.5V5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.5 9H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.5 15H12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#071631]">Strategic & Technical Resources</h2>
                <p className="mt-1 text-sm leading-6 text-[#526383]">
                  Decision-support content for AI governance, quality, compliance, and translation strategy.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {strategicResources.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`group block rounded-2xl p-4 transition duration-200 ${
                    item.featured
                      ? "border border-[#cfdcff] bg-white shadow-[0_10px_30px_rgba(30,52,96,0.07)] hover:border-[#9fb7ff] hover:shadow-[0_14px_36px_rgba(47,102,255,0.13)]"
                      : "border border-transparent hover:border-[#dbe4ff] hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[15px] font-semibold leading-6 text-[#071631] group-hover:text-[#245cff]">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">{item.desc}</p>
                    </div>
                    {item.featured && (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3f6ff] text-[#3972ff]">
                        ✦
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-[#cfdcff] bg-white p-5 shadow-[0_10px_30px_rgba(30,52,96,0.06)]">
              <h3 className="text-[15px] font-semibold text-[#071631]">Explore guidance for regulated AI translation workflows</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#263a5f]">
                Explore guidance on validation, terminology, structured content, and multilingual operations for life sciences organizations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
