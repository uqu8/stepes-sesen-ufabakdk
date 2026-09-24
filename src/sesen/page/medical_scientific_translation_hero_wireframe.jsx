import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
  Languages,
  Sparkles,
  FileText,
  Microscope,
  BookOpen,
  Presentation,
  Beaker,
  HeartPulse,
  Dna,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

export default function MedicalScientificTranslationHeroWireframe() {
  const supportPoints = [
    {
      icon: <Microscope className="h-5 w-5" />,
      text: "Scientific and medical subject-matter expertise",
    },
    {
      icon: <Languages className="h-5 w-5" />,
      text: "Terminology consistency across languages",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      text: "Secure workflows for sensitive life sciences content",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      text: "Human review supported by AI-enabled quality checks",
    },
  ];

  const featuredContent = [
    "Scientific publications",
    "Medical affairs materials",
    "Technical life sciences content",
    "Healthcare education",
  ];

  const translatedContent = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Scientific Publications & Research Content",
      description:
        "Journal manuscripts, abstracts, posters, conference presentations, white papers, research summaries, systematic reviews, and scientific reports.",
    },
    {
      icon: <Presentation className="h-5 w-5" />,
      title: "Medical Affairs & HCP Communication",
      description:
        "Medical education materials, advisory board content, scientific slide decks, disease-state education, HCP training, and field medical content.",
    },
    {
      icon: <Beaker className="h-5 w-5" />,
      title: "Technical Life Sciences Documentation",
      description:
        "Technical manuals, laboratory documentation, R&D materials, process documents, product science content, and scientific operating materials.",
    },
    {
      icon: <HeartPulse className="h-5 w-5" />,
      title: "Healthcare Education & Patient Communication",
      description:
        "Patient education materials, treatment guides, public health content, disease awareness materials, and healthcare communication resources.",
    },
    {
      icon: <Dna className="h-5 w-5" />,
      title: "Biotech, Pharma & MedTech Knowledge Content",
      description:
        "Scientific and technical content for product teams, commercial teams, research teams, medical teams, and global knowledge-sharing programs.",
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Academic & Institutional Medical Content",
      description:
        "Research institution materials, grant-related content, investigator-authored documents, medical center communications, and multilingual academic publications.",
    },
  ];

  const thisServiceSupports = [
    "Medical affairs content",
    "Scientific publications",
    "Research summaries",
    "HCP education",
    "Disease-state materials",
    "Scientific presentations",
    "Technical life sciences documentation",
    "Healthcare education content",
    "R&D and product science materials",
  ];

  const relatedServices = [
    {
      label: "Clinical trial protocols, ICFs, site materials, and patient-reported outcome content",
      service: "Clinical Trial Translation",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
    },
    {
      label: "Regulatory submissions, SOPs, audits, and health authority content",
      service: "Regulatory Translation",
      href: "https://www.sesen.com/regulatory-translation-services/",
    },
    {
      label: "IFUs and device instructions",
      service: "IFU Translation",
      href: "https://www.sesen.com/ifu-translation-services/",
    },
    {
      label: "Medical device labeling, software, and technical device content",
      service: "Medical Device Translation",
      href: "https://www.sesen.com/medical-device-translation-services/",
    },
    {
      label: "AE reports, DSURs, PSURs, and safety narratives",
      service: "Pharmacovigilance Translation",
      href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    },
    {
      label: "COAs, PROs, and patient questionnaires",
      service: "Linguistic Validation",
      href: "https://www.sesen.com/linguistic-validation-services/",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Content Review",
      description:
        "Sesen reviews the subject matter, audience, content type, terminology requirements, formatting needs, and intended use.",
    },
    {
      step: "02",
      title: "Subject-Matter Linguist Assignment",
      description:
        "Projects are assigned to translators and reviewers with relevant medical, scientific, technical, or therapeutic-area experience.",
    },
    {
      step: "03",
      title: "Terminology Preparation",
      description:
        "Key terms, product names, therapeutic-area language, abbreviations, and client-approved terminology are reviewed before translation begins.",
    },
    {
      step: "04",
      title: "Translation & Editing",
      description:
        "Content is translated and edited for accuracy, clarity, consistency, and readability in the target language.",
    },
    {
      step: "05",
      title: "Quality Checks",
      description:
        "Sesen applies quality checks for terminology, numbers, units, references, formatting, completeness, and language-specific consistency.",
    },
    {
      step: "06",
      title: "Delivery & Ongoing Reuse",
      description:
        "Final translations are delivered in the requested format, with terminology and translation memory maintained for future projects when applicable.",
    },
  ];

  const terminologyPractices = [
    "Client glossaries",
    "Translation memory",
    "Therapeutic-area terminology",
    "Product and compound names",
    "Abbreviations and acronyms",
    "Preferred style and tone",
    "Medical terminology consistency",
    "Version-controlled reference materials",
  ];

  const aiSupportFeatures = [
    "Terminology extraction",
    "Translation memory reuse",
    "Consistency checks",
    "Number and unit checks",
    "Formatting and completeness review",
    "Human medical/scientific review",
  ];

  const industriesAndTeams = [
    {
      title: "Medical affairs teams",
      description: "Scientific exchange, medical education, and field-facing content.",
    },
    {
      title: "Scientific communications teams",
      description: "Manuscripts, posters, publications, and presentation materials.",
    },
    {
      title: "Biotech and pharmaceutical companies",
      description: "Global scientific, medical, and product communication programs.",
    },
    {
      title: "Medical device and diagnostics companies",
      description: "Technical, clinical, software, and training-related content.",
    },
    {
      title: "Academic research institutions",
      description: "Research publications, grant materials, and investigator-led communication.",
    },
    {
      title: "Healthcare organizations",
      description: "Patient education, provider communication, and public-facing health content.",
    },
    {
      title: "Scientific publishers and agencies",
      description: "Editorial, publication, and scientific communication support.",
    },
    {
      title: "R&D and product teams",
      description: "Development documentation and scientific knowledge transfer.",
    },
    {
      title: "Training and education teams",
      description: "Multilingual learning, onboarding, and professional education materials.",
    },
    {
      title: "Global marketing and commercial teams",
      description: "Campaign, product, and market-facing life sciences content.",
    },
  ];

  const specializedServiceLinks = [
    {
      title: "Clinical Trial Translation Services",
      description:
        "For protocols, ICFs, site documents, patient materials, and study content.",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
    },
    {
      title: "Regulatory Translation Services",
      description:
        "For submissions, SOPs, audits, regulatory correspondence, and health authority content.",
      href: "https://www.sesen.com/regulatory-translation-services/",
    },
    {
      title: "Medical Device Translation Services",
      description:
        "For device documentation, labeling, technical files, software, and training content.",
      href: "https://www.sesen.com/medical-device-translation-services/",
    },
    {
      title: "IFU Translation Services",
      description:
        "For Instructions for Use and device user documentation.",
      href: "https://www.sesen.com/ifu-translation-services/",
    },
    {
      title: "Pharmacovigilance Translation Services",
      description:
        "For adverse event reports, safety narratives, DSURs, PSURs, and safety communications.",
      href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    },
    {
      title: "Linguistic Validation Services",
      description:
        "For COAs, PROs, patient questionnaires, and validated clinical instruments.",
      href: "https://www.sesen.com/linguistic-validation-services/",
    },
    {
      title: "Life Sciences Marketing Translation",
      description:
        "For brand, commercial, and campaign content in regulated life sciences markets.",
      href: "https://www.sesen.com/life-sciences-marketing/",
    },
  ];

  const whySesenPillars = [
    {
      title: "Life Sciences Specialization",
      description:
        "Sesen focuses on complex life sciences content across medical, scientific, technical, clinical, regulatory, and commercial domains.",
    },
    {
      title: "Expert Linguist Network",
      description:
        "Projects are matched with translators and reviewers who understand medical terminology, scientific context, and life sciences communication.",
    },
    {
      title: "Secure Project Workflows",
      description:
        "Sesen supports confidential handling of sensitive medical, scientific, and business-critical content.",
    },
    {
      title: "Terminology Discipline",
      description:
        "Glossaries, translation memory, and reference materials help maintain consistency across documents and languages.",
    },
    {
      title: "Scalable Global Delivery",
      description:
        "Sesen supports multilingual translation programs for global teams, product launches, publications, research communication, and ongoing content needs.",
    },
    {
      title: "AI-Enabled Quality Support",
      description:
        "AI-assisted checks help improve consistency, efficiency, and quality control while preserving expert human oversight.",
    },
  ];

  const faqs = [
    {
      question: "What is medical and scientific translation?",
      answer:
        "Medical and scientific translation is the translation of specialized healthcare, life sciences, research, medical affairs, technical, and scientific content. It requires accurate terminology, subject-matter understanding, and clear communication for the intended audience.",
    },
    {
      question: "What types of medical and scientific documents does Sesen translate?",
      answer:
        "Sesen translates scientific publications, research summaries, medical affairs materials, HCP education, disease-state content, technical life sciences documentation, patient education materials, and other medical or scientific communication.",
    },
    {
      question: "How is this different from clinical trial translation?",
      answer:
        "Medical and scientific translation covers broader scientific, educational, technical, and research communication. Clinical trial translation focuses specifically on study-related documents such as protocols, informed consent forms, site materials, patient-facing trial content, and clinical outcome assessments.",
    },
    {
      question: "How does Sesen ensure scientific terminology is accurate?",
      answer:
        "Sesen uses subject-matter linguists, client reference materials, terminology review, glossaries, translation memory, editing, and quality checks to support accurate and consistent scientific terminology.",
    },
    {
      question: "Can Sesen translate scientific publications and medical conference materials?",
      answer:
        "Yes. Sesen supports manuscripts, abstracts, posters, presentations, conference materials, research summaries, and related scientific communication for global audiences.",
    },
    {
      question: "Does Sesen use AI for medical and scientific translation?",
      answer:
        "Sesen uses AI-enabled tools to support terminology extraction, translation memory leverage, consistency checks, and quality control. Human medical and scientific linguists remain responsible for translation accuracy and final review.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FD] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,111,216,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(75,111,216,0.10),transparent_24%),linear-gradient(180deg,#F8FAFF_0%,#F6F8FD_100%)]" />
        <div className="relative mx-auto max-w-[1360px] px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="max-w-5xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9E2F7] bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4B6FD8] backdrop-blur-sm">
                <FlaskConical className="h-4 w-4" />
                Medical &amp; Scientific Translation
              </div>

              <h1
                className="text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.5rem]"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                Medical &amp; Scientific Translation Services
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Specialized translation for medical, scientific, technical, and life sciences communication — delivered by expert linguists with subject-matter knowledge, terminology discipline, and quality workflows built for global healthcare audiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.sesen.com/contact/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6FD8] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#3659BB] sm:w-auto"
                >
                  Talk to a Life Sciences Translation Specialist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.sesen.com/life-sciences-translation-services/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C9D7F7] bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-[#3659BB] transition hover:border-[#4B6FD8] hover:text-[#4B6FD8] sm:w-auto"
                >
                  View Related Life Sciences Services
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {supportPoints.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 rounded-2xl border border-[#E5ECFA] bg-white/88 px-4 py-4 shadow-[0_8px_22px_rgba(17,24,39,0.04)] backdrop-blur-sm"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4B6FD8]">
                      {item.icon}
                    </div>
                    <p className="text-sm leading-6 text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex lg:pl-6">
              <div className="flex h-full w-full flex-col rounded-[30px] border border-[#DCE5FA] bg-white/90 p-6 shadow-[0_18px_40px_rgba(75,111,216,0.10)] backdrop-blur-sm lg:p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF3FF] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4B6FD8]">
                  <FileText className="h-4 w-4" />
                  What We Support
                </div>

                <h2
                  className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-900"
                  style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                >
                  Specialized support for global scientific communication
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  From scientific publications and medical affairs materials to technical life sciences documentation and healthcare education, Sesen helps teams communicate clearly across languages.
                </p>

                <div className="mt-6 space-y-3">
                  {featuredContent.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#E8EEFB] bg-[#FBFCFF] px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4B6FD8]" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Accurate Communication for Specialized Life Sciences Content
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Sesen helps life sciences organizations translate specialized medical, scientific, technical, and educational content for global audiences. This includes materials used by medical affairs teams, research organizations, healthcare companies, academic groups, scientific publishers, biotech companies, pharmaceutical teams, and medical technology innovators.
            </p>
            <p>
              These materials often require more than general translation. They require accurate terminology, scientific context, therapeutic-area familiarity, and clear communication across languages so the final content remains credible, usable, and audience-appropriate in every market.
            </p>
            <blockquote className="border-l-4 border-[#4B6FD8] pl-5 text-base leading-8 text-slate-700">
              For highly regulated documents such as clinical trial protocols, regulatory submissions, device labeling, IFUs, pharmacovigilance reports, and linguistic validation projects, Sesen also provides dedicated specialized services.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Medical and Scientific Content We Translate
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              From scientific publications and medical affairs materials to technical documentation and healthcare education, Sesen supports multilingual communication across core life sciences content types.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {translatedContent.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#E3EBFB] bg-white p-6 shadow-[0_10px_24px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:border-[#C9D7F7]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4B6FD8]">
                  {item.icon}
                </div>
                <h3
                  className="mt-5 text-xl font-semibold tracking-[-0.025em] text-slate-900"
                  style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div className="xl:pr-6">
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Choose the Right Service for Your Content
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Medical &amp; Scientific Translation supports broader research, medical affairs, educational, and technical life sciences communication. For clinical trial, regulatory, device, safety, and validated instrument content, Sesen offers dedicated services designed for those content types.
            </p>

            <div className="mt-8">
              <h3
                className="text-lg font-semibold tracking-[-0.02em] text-slate-900"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                Often Used For
              </h3>
              <div className="mt-5 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {thisServiceSupports.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-start gap-3 border-t border-[#E3EBFB] py-4 ${index < 2 ? 'sm:border-t-0 sm:pt-0' : ''}`}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4B6FD8]" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3
              className="text-2xl font-semibold tracking-[-0.025em] text-slate-900"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Related Specialized Services
            </h3>
            <div className="mt-4 border-t border-[#DCE5FA]">
              {relatedServices.map((item) => (
                <a
                  key={item.service}
                  href={item.href}
                  className="group block border-b border-[#DCE5FA] py-5 transition hover:bg-white/80"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm leading-7 text-slate-600">{item.label}</p>
                      <p
                        className="mt-2 text-base font-semibold text-slate-900"
                        style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {item.service}
                      </p>
                    </div>
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#4B6FD8] transition group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              A Translation Workflow Designed for Scientific Accuracy
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Scientific and medical content benefits from a structured workflow that supports terminology accuracy, subject-matter alignment, and consistent delivery across languages.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 lg:grid-cols-2">
            {workflowSteps.map((item, index) => (
              <div key={item.step} className="relative pl-16">
                {index !== workflowSteps.length - 1 && index % 2 === 0 ? (
                  <div className="absolute left-5 top-12 hidden h-[calc(100%+2rem)] w-px bg-[#DCE5FA] lg:block" />
                ) : null}
                <div className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CFE0FF] bg-white text-sm font-semibold text-[#4B6FD8] shadow-[0_6px_16px_rgba(17,24,39,0.04)]">
                  {item.step}
                </div>
                <h3
                  className="text-xl font-semibold tracking-[-0.025em] text-slate-900"
                  style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-3xl">
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Consistent Terminology Across Scientific Communication
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Scientific translation is not just about translating words correctly once. It is about maintaining consistency across documents, languages, departments, and markets so medical and scientific communication stays aligned over time.
            </p>

            <blockquote className="mt-8 border-l-4 border-[#4B6FD8] pl-5 text-lg leading-8 text-slate-700">
              Consistency matters across individual documents and across the broader multilingual communication that supports research, medical, technical, and educational programs.
            </blockquote>
          </div>

          <div className="rounded-[30px] border border-[#E3EBFB] bg-white px-6 py-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)] sm:px-7 sm:py-7">
            <h3
              className="text-2xl font-semibold tracking-[-0.025em] text-slate-900"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              What Sesen Maintains Across Languages
            </h3>

            <div className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {terminologyPractices.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 border-t border-[#E3EBFB] py-4 ${index < 2 ? 'sm:border-t-0 sm:pt-0' : ''}`}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4B6FD8]" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-[#E3EBFB] pt-5">
              <p className="text-sm leading-7 text-slate-600">
                Client-approved terminology, translation memory, and maintained reference materials help support multilingual consistency across related content, teams, and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFF_0%,#EEF3FF_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(75,111,216,0.10),transparent_26%)]" />
        <div className="relative mx-auto max-w-[1360px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <h2
                className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                AI-Enabled Efficiency with Expert Human Review
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Sesen uses AI-enabled tools to support terminology extraction, translation memory leverage, consistency checks, formatting review, and quality control. Every medical and scientific translation is guided by human expertise, with qualified linguists and reviewers responsible for final language quality and subject-matter accuracy.
              </p>

              <blockquote className="mt-8 rounded-[24px] border border-[#DCE5FA] bg-white/80 px-6 py-5 text-base leading-8 text-slate-700 shadow-[0_8px_20px_rgba(17,24,39,0.04)]">
                AI supports the workflow. Qualified human linguists and reviewers remain responsible for the final medical and scientific translation.
              </blockquote>

              <a
                href="https://www.sesen.com/ai-powered-translation/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C9D7F7] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#3659BB] shadow-[0_8px_20px_rgba(17,24,39,0.04)] transition hover:border-[#4B6FD8] hover:text-[#4B6FD8]"
              >
                Explore AI-Enabled Translation Workflows
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {aiSupportFeatures.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 border-t border-[#D6E2FB] py-4 ${index < 2 ? 'sm:border-t-0 sm:pt-0' : ''}`}
                >
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#4B6FD8]" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-5xl">
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
            style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
          >
            Built for Life Sciences Teams That Communicate Globally
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Sesen supports the teams and organizations responsible for multilingual scientific, medical, educational, technical, and market-facing communication across global life sciences programs.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Scientific and medical teams',
              items: industriesAndTeams.slice(0, 4),
            },
            {
              title: 'Organizations and institutions',
              items: industriesAndTeams.slice(4, 7),
            },
            {
              title: 'Global product and commercial teams',
              items: industriesAndTeams.slice(7),
            },
          ].map((group) => (
            <div key={group.title}>
              <h3
                className="text-xl font-semibold tracking-[-0.025em] text-slate-900"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                {group.title}
              </h3>
              <div className="mt-4 space-y-5 border-t border-[#E3EBFB] pt-5">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <p className="text-base font-medium text-slate-800">{item.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2
                className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                Related Life Sciences Translation Services
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                Explore related Sesen services for content types that require more specialized workflows across clinical, regulatory, device, safety, validation, and commercial communication.
              </p>
            </div>

            <div className="border-t border-[#DCE5FA]">
              {specializedServiceLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group block border-b border-[#DCE5FA] py-5 transition hover:bg-white/80"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3
                        className="text-xl font-semibold tracking-[-0.025em] text-slate-900"
                        style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#4B6FD8] transition group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Why Life Sciences Organizations Choose Sesen
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
              Sesen combines life sciences specialization, expert human review, and scalable multilingual workflows to support complex global communication with confidence.
            </p>

            <blockquote className="mt-8 border-l-4 border-[#4B6FD8] pl-5 text-lg leading-8 text-slate-700">
              Built for complex life sciences communication, with the terminology discipline and multilingual consistency global teams depend on.
            </blockquote>
          </div>

          <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {whySesenPillars.map((item, index) => (
              <div
                key={item.title}
                className={`border-t border-[#E3EBFB] py-5 ${index < 2 ? 'sm:border-t-0 sm:pt-0' : ''}`}
              >
                <h3
                  className="text-xl font-semibold tracking-[-0.025em] text-slate-900"
                  style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2
                className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.85rem]"
                style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                Answers to common questions about medical and scientific translation, terminology accuracy, and how this service fits within broader life sciences translation needs.
              </p>
            </div>

            <div className="border-t border-[#DCE5FA]">
              {faqs.map((item) => (
                <div key={item.question} className="border-b border-[#DCE5FA] py-6">
                  <h3
                    className="text-xl font-semibold tracking-[-0.025em] text-slate-900"
                    style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-5xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFF_0%,#EEF3FF_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,111,216,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(75,111,216,0.10),transparent_24%)]" />
        <div className="relative mx-auto max-w-[1360px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <h2
              className="text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl"
              style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
            >
              Translate Medical and Scientific Content with Confidence
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you are preparing scientific publications, medical affairs content, technical life sciences documentation, or healthcare education materials, Sesen helps you communicate accurately across languages.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.sesen.com/contact/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6FD8] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#3659BB] sm:w-auto"
              >
                Talk to a Life Sciences Translation Specialist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.sesen.com/life-sciences-translation-services/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C9D7F7] bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-[#3659BB] transition hover:border-[#4B6FD8] hover:text-[#4B6FD8] sm:w-auto"
              >
                Explore Life Sciences Translation Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
