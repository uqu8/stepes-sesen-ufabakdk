export default function SesenAiClinicalTranslationRisksWireframe() {
  const headingClass = "[font-family:'Inter_Tight',Inter,'Helvetica_Neue',Arial,sans-serif] tracking-[-0.05em] text-slate-950";
  const headingWeightStyle = { fontWeight: 550 };
  const articleUrl = "https://www.sesen.com/resources/blog-insights/ai-assisted-clinical-translation-risks/";

  const toc = [
    {
      id: "why-clinical-translation-is-different",
      label: "Why clinical translation is different",
    },
    {
      id: "where-ai-assisted-translation-risks-appear",
      label: "Where AI-assisted translation risks appear",
    },
    {
      id: "where-human-review-matters-most",
      label: "Where human review matters most",
    },
    {
      id: "what-controlled-ai-assisted-workflows-should-include",
      label: "What controlled AI-assisted workflows should include",
    },
    {
      id: "sesen-perspective",
      label: "Sesen’s perspective",
    },
    {
      id: "related-resources",
      label: "Related resources",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFDFF] text-slate-900">
      <main className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12 lg:py-14">
        <style>{`
          article h1,
          article h2,
          article .article-display,
          article .article-section-title {
            font-family: 'Inter Tight', Inter, 'Helvetica Neue', Arial, sans-serif;
            font-feature-settings: 'ss01' 1, 'cv01' 1;
            text-rendering: geometricPrecision;
          }
        `}</style>

        <article>
          <header className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#D9E3F8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4B6FD8]">
              AI &amp; Clinical Trials
            </div>

            <h1
              style={headingWeightStyle}
              className={`${headingClass} article-display text-[2.2rem] leading-[0.99] sm:text-[2.55rem] md:text-[3.25rem] lg:text-[3.7rem]`}
            >
              AI-Assisted Clinical Trial Translation Risks: Where Quality, Oversight, and Human Review Matter Most
            </h1>

            <p className="mt-5 text-[1.05rem] leading-8 text-slate-600 sm:mt-6 sm:text-[1.12rem] md:text-[1.22rem]">
              Explore where AI-assisted clinical translation can introduce quality, oversight, and compliance risk—and why expert human review still matters for patient-facing and regulated multilingual content.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 sm:mt-7">
              <span>Updated June 2026</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>7 min read</span>
            </div>
          </header>

          <div className="mx-auto mt-8 grid max-w-6xl gap-10 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="mx-auto w-full max-w-3xl">
              <section className="rounded-[22px] border border-[#DCE5F8] bg-[#F7FAFF] px-5 py-6 sm:px-6 sm:py-7">
                <p
                  style={headingWeightStyle}
                  className={`${headingClass} text-[1.18rem] leading-[1.5] tracking-[-0.03em] text-slate-900 sm:text-[1.28rem] md:text-[1.42rem]`}
                >
                  AI is not the risk by itself; unmanaged AI-assisted translation is the risk.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  The real question is not whether AI appears in the workflow. It is whether the workflow applies the right level of terminology control, review depth, traceability, and human accountability for the content being translated. In clinical trials, that distinction matters because multilingual content influences participant understanding, study execution, regulatory readiness, and audit defensibility.
                </p>
              </section>

              <section className="mt-10 border-t border-[#DCE5F8] pt-7 sm:mt-12 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title text-[1.65rem] leading-tight sm:text-[1.85rem]`}
                >
                  Key takeaways
                </h2>
                <ul className="mt-5 space-y-4 text-[1rem] leading-8 text-slate-700 sm:mt-6 sm:text-[1.02rem]">
                  <li className="flex gap-3">
                    <span className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <span>AI can improve speed and scale, but only when workflow design matches the risk of the content being translated.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <span>Patient-facing and regulated clinical materials still require expert human review to protect meaning, readability, and compliance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <span>Not all clinical content carries the same risk, so review depth should be tiered rather than applied uniformly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <span>Traceability, terminology governance, and final human accountability are what make AI-assisted workflows defensible.</span>
                  </li>
                </ul>
              </section>

              <section id="why-clinical-translation-is-different" className="mt-12 scroll-mt-24 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title mt-3 text-[1.8rem] leading-[1.1] sm:text-[2rem] md:text-[2.2rem]`}
                >
                  Clinical trial content carries higher consequences than general business content
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Clinical translation does more than move language from one locale to another. It supports participant understanding, investigator execution, study consistency, and regulatory review across markets. That raises the quality standard far above what would be acceptable for general marketing or informational content, because the translated material is often used in contexts where clarity, consistency, and documented review all carry real operational consequences.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Informed consent forms, patient diaries, recruitment materials, safety communications, protocol excerpts, investigator-facing instructions, and submission-supporting documents each create different types of exposure if meaning shifts across languages. A patient may misunderstand a key instruction. A site team may interpret terminology inconsistently. A reviewer may question whether required concepts were preserved with enough discipline across locales. In other words, the issue is not only whether the translation reads well. It is whether it performs reliably inside a clinical and regulatory workflow.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  That is why a translation can sound fluent and still fall short. A subtle shift in risk language, a mismatch in approved terminology, or a loss of conceptual precision can create problems even when the sentence appears natural on the surface. Clinical translation depends not only on linguistic quality, but also on controlled review, traceable decisions, and content-specific expertise that can distinguish acceptable wording variation from clinically meaningful drift.
                </p>
              </section>

              <section id="where-ai-assisted-translation-risks-appear" className="mt-12 scroll-mt-24 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title mt-3 text-[1.8rem] leading-[1.1] sm:text-[2rem] md:text-[2.2rem]`}
                >
                  The biggest issues usually come from workflow design, not from AI alone
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  AI-assisted translation can support throughput, consistency, and turnaround time. Risk enters when teams apply it without clearly defining which content types are appropriate, which assets should govern terminology, how review depth should change by document category, and who remains accountable for final multilingual quality. When those decisions are left implicit, the workflow can look efficient while quietly weakening the controls that matter most.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  In practice, risk often shows up in less obvious ways before it becomes visible in a final document. Terms that were harmonized earlier in a program can drift across later files. Context-dependent phrases can be rendered too literally or too generically. Patient-facing language can become technically accurate but less understandable. Submission-oriented wording can lose the precision or consistency that reviewers expect to see across a regulated set of materials.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Traceability is another major issue. If a team cannot clearly explain which source assets informed the output, what type of human review took place, how terminology decisions were controlled, and who approved the final release, then speed becomes hard to defend. The problem is rarely automation by itself. The problem is treating AI output as though it were already ready for release, rather than one component inside a documented multilingual quality process.
                </p>
              </section>

              <section id="where-human-review-matters-most" className="mt-12 scroll-mt-24 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title mt-3 text-[1.8rem] leading-[1.1] sm:text-[2rem] md:text-[2.2rem]`}
                >
                  Human expertise is most critical where language affects patients, safety, or regulatory defensibility
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  The need for human review becomes strongest when content directly influences how participants understand a study, how investigators interpret key instructions, or how regulators assess consistency and completeness. That includes informed consent forms, patient-facing trial materials, COA and eCOA content, protocol-sensitive terminology, safety-related materials, and submission-facing documentation. These are the places where subtle language choices can affect readability, conceptual equivalence, or confidence in the overall process.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Human reviewers add value precisely where generalized output is most likely to fall short. They can judge whether a patient-facing sentence is understandable without becoming oversimplified, whether a clinical term should remain tightly aligned to approved usage, whether a response option preserves the intended concept, and whether localized wording still supports the study’s broader documentation set. That type of judgment is especially important when multiple document streams need to remain consistent over time.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  In these areas, human expertise is not just a final proofreading step. It is the control that protects conceptual meaning, preserves clinical nuance, and ensures the translated content remains reviewable and defensible. AI may support draft generation or consistency support, but qualified human reviewers are what make the workflow trustworthy, particularly when content will be relied on by patients, sites, sponsors, ethics committees, or regulators.
                </p>
              </section>

              <section id="what-controlled-ai-assisted-workflows-should-include" className="mt-14 scroll-mt-24 border-t border-[#DCE5F8] py-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title mt-3 text-[1.8rem] leading-[1.1] sm:text-[2rem] md:text-[2.2rem]`}
                >
                  Stronger workflows combine efficiency with review discipline
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  A controlled AI-assisted workflow begins before any draft is generated. Teams first need to assess content risk, confirm whether AI support is appropriate, and define the level of review required for that specific document type. They also need approved terminology, reference materials, and study context in place before the workflow moves forward. Without that front-end discipline, later review becomes more expensive, less predictable, and harder to defend.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  From there, the workflow should be structured around checkpoints rather than assumptions. The draft should be reviewed by experts with the right clinical and linguistic profile. Key terminology should be validated against approved assets. QA should focus not only on grammar and formatting, but also on consistency, conceptual integrity, and document-to-document alignment. For higher-risk content, the workflow may also need stronger validation or reconciliation steps depending on the use case.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Finally, the process needs a clear approval path with version control, traceable decisions, and accountability for release. That is what turns AI support into a controlled operating model rather than an informal shortcut. The strongest approach is not AI-only translation. It is a governed process in which AI supports productivity while qualified human experts remain responsible for final multilingual quality.
                </p>
              </section>

              <section id="sesen-perspective" className="mt-12 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title text-[2rem] leading-[1.08] md:text-[2.2rem]`}
                >
                  Sesen’s perspective on AI-assisted clinical translation
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Sesen’s view is that AI can be a valuable efficiency layer in clinical translation, but only when it operates inside a governed workflow. The goal should not be to maximize automation for its own sake. The goal should be to match the workflow to the risk of the content, the expectations of the study team, and the level of review required to protect quality, clarity, and compliance.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  That distinction matters because clinical programs rarely rely on just one document type or one moment of review. They depend on ongoing consistency across patient-facing materials, investigator documentation, validated instruments, and submission-related content. A practical AI-assisted model therefore needs to support harmonization, not just speed. It needs to make expert review more efficient without weakening terminology discipline, contextual accuracy, or release accountability.
                </p>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  That is why a controlled approach matters. Study teams need approved terminology, document-level risk assessment, expert human review, and traceable release decisions. In that model, AI helps improve throughput and consistency, while qualified human experts remain responsible for final multilingual quality. For regulated clinical content, that balance is what makes AI-assisted translation practical rather than risky.
                </p>
              </section>

              <section id="related-resources" className="mt-12 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <h2
                  style={headingWeightStyle}
                  className={`${headingClass} article-section-title text-[2rem] leading-[1.08] md:text-[2.2rem]`}
                >
                  Related Sesen resources
                </h2>
                <p className="mt-5 text-[1.04rem] leading-8 text-slate-700">
                  Teams evaluating AI-assisted clinical translation often need adjacent guidance on patient-facing content, linguistic validation, terminology control, and broader multilingual workflow design. These related Sesen pages help extend that evaluation and strengthen the broader decision framework around clinical quality, review methodology, and multilingual governance.
                </p>

                <div className="mt-7 grid gap-x-10 gap-y-4 sm:mt-8 sm:gap-y-5 sm:grid-cols-2">
                  <a
                    href="https://www.sesen.com/clinical-trial-translation-services/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          Clinical Trial Translation Services
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Explore multilingual support for protocols, patient materials, study documents, and regulated trial workflows.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.sesen.com/informed-consent-form-translation-services/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          Informed Consent Form Translation
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Review how patient-facing consent content can be translated for clarity, consistency, and ethics review readiness.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.sesen.com/ecoa-translation-services/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          eCOA / ePRO Translation
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          See how multilingual COA, eCOA, and ePRO workflows support conceptual consistency and patient usability.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.sesen.com/linguistic-validation-services/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          Linguistic Validation
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Understand validation workflows used to protect conceptual equivalence in multilingual clinical outcome content.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.sesen.com/terminology-management-harmonization/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          Terminology Governance
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Learn how terminology harmonization supports multilingual consistency across clinical and regulated content.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.sesen.com/ai-powered-translation/"
                    className="group border-t border-[#DCE5F8] py-4 transition hover:border-[#4B6FD8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[1rem] font-medium text-slate-950 group-hover:text-[#4B6FD8]">
                          AI-Powered Translation
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Explore how Sesen combines AI support, terminology control, human review, and QA in regulated workflows.
                        </p>
                      </div>
                      <span className="pt-0.5 text-[#4B6FD8]">→</span>
                    </div>
                  </a>
                </div>
              </section>

              <section className="mt-12 border-t border-[#DCE5F8] pt-7 sm:mt-14 sm:pt-8">
                <div className="rounded-[24px] border border-[#DCE5F8] bg-[#F7FAFF] px-5 py-6 sm:px-6 sm:py-7">
                  <h2
                    style={headingWeightStyle}
                    className={`${headingClass} article-section-title text-[1.65rem] leading-tight sm:text-[1.85rem]`}
                  >
                    Need a controlled multilingual workflow for clinical trial content?
                  </h2>
                  <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-slate-700">
                    Explore how Sesen supports clinical trial translation with risk-based workflows, expert human review, terminology control, and AI-assisted efficiency where appropriate.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.sesen.com/clinical-trial-translation-services/"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#4B6FD8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3659BB] sm:w-auto"
                    >
                      Explore Clinical Trial Translation Services
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-8 rounded-[18px] border border-[#DCE5F8] bg-[#F8FBFF] px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  In this article
                </div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`${articleUrl}#${item.id}`}
                      className="block rounded-xl px-2 py-1 transition hover:bg-white hover:text-[#4B6FD8]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
