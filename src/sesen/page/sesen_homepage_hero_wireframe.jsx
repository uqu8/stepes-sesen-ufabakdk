import React from "react";
import { ArrowRight, ShieldCheck, Globe2, Layers3, Sparkles, FileText, ClipboardCheck, PackageCheck, Stethoscope, MonitorSmartphone, GraduationCap, Megaphone, FlaskConical, Dna, HeartPulse, Building2, Landmark, Database, Bot, UserCheck, SearchCheck, CheckCircle2, LockKeyhole, FileBadge, History, UsersRound, BookOpenCheck, ServerCog } from "lucide-react";

export default function SesenHomepageHero() {
  const contentAreas = [
    "Clinical",
    "Regulatory",
    "Labeling",
    "Safety",
    "Medical Device",
    "Commercial",
  ];

  const lifeSciencesSectors = [
    { label: "Pharmaceuticals", href: "https://www.sesen.com/pharmaceuticals/" },
    { label: "Biotechnology", href: "https://www.sesen.com/biotechnology-translation-services/" },
    { label: "Medical Devices", href: "https://www.sesen.com/medical-device-translation-services/" },
    { label: "CROs", href: "https://www.sesen.com/cro-translation-services/" },
    { label: "Healthcare", href: "https://www.sesen.com/healthcare-translation-services/" },
    { label: "Regulatory & Government", href: "https://www.sesen.com/regulatory-government-translation-services/" },
  ];

  const clientLogoMarks = [
    { name: "Clinical Research", width: "w-28" },
    { name: "Pharmaceutical", width: "w-32" },
    { name: "Medical Device", width: "w-28" },
    { name: "Healthcare", width: "w-28" },
    { name: "Biotechnology", width: "w-32" },
    { name: "Regulatory", width: "w-28" },
    { name: "Diagnostics", width: "w-28" },
    { name: "Clinical Technology", width: "w-36" },
  ];

  const serviceLinks = [
    {
      title: "Clinical Trial Translation Services",
      description: "ICFs, protocols, patient materials, study documents, and clinical communication for global trials.",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
      icon: FileText,
    },
    {
      title: "Regulatory Submission Translation Services",
      description: "Regulatory dossiers, agency correspondence, approval documents, and submission workflows.",
      href: "https://www.sesen.com/regulatory-submission-translation-services/",
      icon: ClipboardCheck,
    },
    {
      title: "Drug Labeling & Packaging Translation",
      description: "Prescribing information, packaging, patient leaflets, labeling updates, and product content.",
      href: "https://www.sesen.com/drug-labeling-packaging-translation/",
      icon: PackageCheck,
    },
    {
      title: "IFU Translation Services",
      description: "IFUs, device labeling, user manuals, safety information, and patient-facing device content.",
      href: "https://www.sesen.com/ifu-translation-services/",
      icon: Stethoscope,
    },
    {
      title: "Clinical & Medical Software Localization",
      description: "Software UI, eCOA, digital health, medical device software, and clinical platform localization.",
      href: "https://www.sesen.com/clinical-medical-software-localization/",
      icon: MonitorSmartphone,
    },
    {
      title: "eLearning & Training Translation Services",
      description: "Training, compliance learning, product education, voiceover, subtitles, and course localization.",
      href: "https://www.sesen.com/elearning-training-translation-services/",
      icon: GraduationCap,
    },
    {
      title: "Marketing and Commercial Translation",
      description: "Medical affairs, brand, launch, post-market, and commercial communication for global audiences.",
      href: "https://www.sesen.com/life-sciences-marketing/",
      icon: Megaphone,
    },
  ];

  const sectorCards = [
    {
      title: "Pharmaceuticals",
      description: "Drug development, regulatory submissions, labeling, pharmacovigilance, medical affairs, training, and commercialization.",
      href: "https://www.sesen.com/pharmaceuticals/",
      icon: FlaskConical,
      links: ["Clinical trial content", "Regulatory dossiers", "Drug labeling"],
    },
    {
      title: "Biotechnology",
      description: "Biologics, biosimilars, genomics, gene therapy, clinical development, and global market readiness.",
      href: "https://www.sesen.com/biotechnology-translation-services/",
      icon: Dna,
      links: ["Biopharma content", "Gene therapy", "Scientific materials"],
    },
    {
      title: "Medical Devices",
      description: "IFUs, device labeling, software UI, risk information, training, and post-market communication.",
      href: "https://www.sesen.com/medical-device-translation-services/",
      icon: Stethoscope,
      links: ["IFU translation", "Device software", "Labeling review"],
    },
    {
      title: "CROs",
      description: "Clinical study documentation, patient-facing materials, ethics submissions, site communication, and reviewer coordination.",
      href: "https://www.sesen.com/cro-translation-services/",
      icon: ClipboardCheck,
      links: ["Study startup", "ICF translation", "Site materials"],
    },
    {
      title: "Healthcare & Hospitals",
      description: "Patient education, EHR content, public health communication, clinical training, and multilingual care access.",
      href: "https://www.sesen.com/healthcare-translation-services/",
      icon: HeartPulse,
      links: ["Patient education", "EHR content", "Clinical training"],
    },
    {
      title: "Regulatory & Government",
      description: "Public health programs, policy documents, regulatory communication, compliance materials, and multilingual outreach.",
      href: "https://www.sesen.com/regulatory-government-translation-services/",
      icon: Landmark,
      links: ["Public health", "Policy documents", "Compliance content"],
    },
  ];

  const aiWorkflowSteps = [
    {
      title: "Translation Memory and Terminology Governance",
      description: "Approved terminology, style guidance, prior translations, and content rules are prepared before translation begins.",
      icon: Database,
    },
    {
      title: "SesenGPT-Assisted Draft Translation",
      description: "For suitable content, SesenGPT supports controlled draft translation within life sciences-trained language workflows.",
      icon: Bot,
    },
    {
      title: "Expert Human Editing and Review",
      description: "Professional native translators and subject-matter reviewers refine content for accuracy, context, tone, terminology, and intended use.",
      icon: UserCheck,
    },
    {
      title: "AI-Assisted Validation and Quality Checks",
      description: "Structured QA helps check terminology, numbers, completeness, formatting, consistency, and potential multilingual risk areas.",
      icon: SearchCheck,
    },
    {
      title: "Final Human Validation and Delivery",
      description: "Final review confirms translation quality, client instructions, formatting expectations, and delivery readiness.",
      icon: CheckCircle2,
    },
  ];

  const aiLinks = [
    { label: "SesenGPT Hybrid Translation", href: "https://www.sesen.com/sesengpt-hybrid-translation/" },
    { label: "AI Translation Validation", href: "https://www.sesen.com/ai-translation-validation/" },
    { label: "AI Terminology Intelligence", href: "https://www.sesen.com/ai-terminology-intelligence/" },
    { label: "AI for Clinical Trial Translation", href: "https://www.sesen.com/ai-clinical-trial-translation/" },
    { label: "AI for Regulatory Compliance", href: "https://www.sesen.com/ai-for-regulatory-compliance/" },
  ];

  const qualityPillars = [
    {
      title: "ISO-Certified Quality Processes",
      description: "Translation workflows supported by ISO 17100, ISO 9001, and ISO 13485 quality practices for regulated multilingual content.",
      icon: ShieldCheck,
    },
    {
      title: "Professional Native Translators and Reviewers",
      description: "Life sciences linguists and subject-matter reviewers support clinical, regulatory, labeling, medical device, and safety content.",
      icon: UsersRound,
    },
    {
      title: "Terminology and Translation Memory Governance",
      description: "Approved terms, style rules, and translation memory are managed to improve consistency across products, markets, and document versions.",
      icon: BookOpenCheck,
    },
    {
      title: "Version Control and Reviewer Coordination",
      description: "Structured workflows support content updates, local reviewer input, delta translation, and multilingual change management.",
      icon: History,
    },
    {
      title: "Audit-Ready Project Documentation",
      description: "Project records can support traceability across source files, language scope, review steps, QA checks, delivery versions, and approvals.",
      icon: FileBadge,
    },
    {
      title: "Secure, Controlled Workflows Hosted on AWS",
      description: "Sesen uses controlled translation workflows and AWS-hosted systems to support secure enterprise multilingual operations.",
      icon: ServerCog,
    },
  ];

  const qualityLinks = [
    { label: "Quality, Compliance & Security", href: "https://www.sesen.com/quality-compliance-security/" },
    { label: "Translation Certificate", href: "https://www.sesen.com/translation-certificate/" },
    { label: "Client Support", href: "https://www.sesen.com/client-support/" },
    { label: "Knowledge Base", href: "https://www.sesen.com/resources/knowledge-base/" },
  ];

  const solutionBlocks = [
    {
      title: "Clinical Trial Translation Programs",
      description: "End-to-end support for study startup, informed consent forms, patient-facing materials, ethics submissions, study updates, and multilingual site communication.",
      href: "https://www.sesen.com/clinical-trial-translation-services/",
    },
    {
      title: "Regulatory Submission Readiness",
      description: "Translation workflows for regulatory dossiers, agency correspondence, approval documentation, compliance materials, and global submission timelines.",
      href: "https://www.sesen.com/regulatory-submission-translation-services/",
    },
    {
      title: "Labeling Translation and Review",
      description: "Controlled multilingual support for drug labeling, packaging, IFUs, safety updates, version control, and in-context label review.",
      href: "https://www.sesen.com/label-review-in-context-qa/",
    },
    {
      title: "AI Translation Validation",
      description: "Human-led validation for AI-translated content, including terminology, accuracy, completeness, formatting, consistency, and risk-focused QA.",
      href: "https://www.sesen.com/ai-translation-validation/",
    },
    {
      title: "Terminology Governance",
      description: "Glossaries, style guides, approved term management, translation memory leverage, and terminology intelligence across products and markets.",
      href: "https://www.sesen.com/ai-terminology-intelligence/",
    },
    {
      title: "Multilingual Software and eCOA Localization",
      description: "Localization for clinical platforms, eCOA, medical software, digital health products, UI strings, screenshots, and in-context review workflows.",
      href: "https://www.sesen.com/clinical-medical-software-localization/",
    },
    {
      title: "Global Linguistic Review Services",
      description: "Expert review for client-generated, AI-translated, or locally adapted content before publication, submission, launch, or market use.",
      href: "https://www.sesen.com/global-linguistic-review-services/",
    },
    {
      title: "Modular Submission & Content Reuse",
      description: "Multilingual content reuse strategies for modular submissions, recurring updates, shared source content, terminology consistency, and version control.",
      href: "https://www.sesen.com/modular-submission-translation-content-reuse/",
    },
  ];

  const credibilityStats = [
    { value: "SesenGPT", label: "AI-enabled workflows for regulated life sciences content" },
    { value: "ISO", label: "17100, 9001, and 13485 quality foundation" },
    { value: "150", label: "Languages supported for global programs" },
    { value: "AI-Native", label: "Built around SesenGPT, human validation, and regulated workflows" },
  ];

  const enterpriseProof = [
    "SesenGPT-enabled workflows designed for suitable clinical, regulatory, labeling, safety, software, training, and commercial content",
    "Expert human review and subject-matter oversight remain central to accuracy, context, and final delivery",
    "AI-assisted validation supports terminology, completeness, formatting, consistency, and multilingual quality checks",
    "Terminology intelligence, style guides, and translation memory governance improve consistency across products and markets",
    "Dedicated project management coordinates reviewers, versions, timelines, and recurring multilingual content programs",
    "AI-native operating model built around SesenGPT, human validation, regulated workflows, and enterprise-scale multilingual program support",
  ];

  const resourceLinks = [
    {
      title: "Clinical & Regulatory Knowledge Insights",
      description: "Educational articles and perspectives for clinical, regulatory, labeling, medical device, and quality teams managing regulated multilingual content.",
      href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/",
      icon: BookOpenCheck,
    },
    {
      title: "AI & Regulatory Insights",
      description: "Perspective articles on responsible AI, regulatory translation, validation, terminology, and multilingual quality for life sciences teams.",
      href: "https://www.sesen.com/resources/ai-regulatory-insights/",
      icon: Sparkles,
    },
    {
      title: "Knowledge Base",
      description: "Helpful explanations of life sciences translation concepts, regulated content workflows, terminology, QA, and localization best practices.",
      href: "https://www.sesen.com/resources/knowledge-base/",
      icon: BookOpenCheck,
    },
    {
      title: "Blog & Insights",
      description: "Articles and updates for clinical, regulatory, medical device, healthcare, and commercial content teams managing multilingual programs.",
      href: "https://www.sesen.com/resources/blog-insights/",
      icon: FileText,
    },
    {
      title: "White Papers & E-Books",
      description: "Downloadable resources for enterprise buyers evaluating translation quality, AI-enabled workflows, labeling, validation, and localization strategy.",
      href: "https://www.sesen.com/resources/white-papers-ebooks/",
      icon: ClipboardCheck,
    },
    {
      title: "Case Studies & Success Stories",
      description: "Representative examples of how Sesen supports complex multilingual content programs across regulated life sciences environments.",
      href: "https://www.sesen.com/resources/case-studies-success-stories/",
      icon: CheckCircle2,
    },
    {
      title: "Glossaries & Style Guides",
      description: "Resources for terminology alignment, style guide development, reviewer coordination, and consistent multilingual content governance.",
      href: "https://www.sesen.com/resources/glossaries-style-guides/",
      icon: BookOpenCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f9ff_0%,#ffffff_46%,#edf3ff_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4B6FD8]/40 to-transparent" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#4B6FD8]/10 blur-3xl" />
        <div className="absolute right-[-9rem] top-[-9rem] h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute bottom-[-13rem] left-1/3 h-96 w-96 rounded-full bg-slate-200/45 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-[#4B6FD8]/20 bg-white/85 px-4 py-2 text-sm font-semibold tracking-wide text-[#3659BB] shadow-sm shadow-blue-100/60 backdrop-blur">
              The Life Sciences Translation Company
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl">
              Professional Translation for Regulated Global Content, Enhanced by AI
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              Sesen helps pharmaceutical, biotech, medical device, CRO, and healthcare teams translate clinical, regulatory, labeling, safety, software, training, and commercial content through expert linguists, AI-enabled workflows, terminology governance, and validation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.sesen.com/contact-sales/"
                className="group inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#4B6FD8] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4B6FD8]/25 transition hover:-translate-y-0.5 hover:bg-[#3f61c3] sm:w-auto"
              >
                TALK WITH TEAM SESEN
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://www.sesen.com/life-sciences-translation-services/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4B6FD8]/40 hover:bg-white sm:w-auto"
              >
                EXPLORE LIFE SCIENCES TRANSLATION SERVICES
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-6xl rounded-[2rem] border border-slate-200/80 bg-white/72 px-6 py-6 shadow-lg shadow-slate-200/60 backdrop-blur sm:px-8 sm:py-7">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10">
                  <ShieldCheck className="h-5 w-5 text-[#4B6FD8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Life Sciences Only</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Specialized workflows for regulated clinical, regulatory, labeling, and safety content</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10">
                  <Globe2 className="h-5 w-5 text-[#4B6FD8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">SesenGPT-Enabled</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">AI-supported translation workflows designed for life sciences content</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10">
                  <UserCheck className="h-5 w-5 text-[#4B6FD8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Human-Validated Quality</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Expert human review remains central to accuracy, context, and final quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10">
                  <Sparkles className="h-5 w-5 text-[#4B6FD8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">AI Translation Validation</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Structured QA supports terminology, completeness, consistency, and traceability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-9 max-w-5xl border-t border-slate-200/80 pt-7">
            <p className="text-center text-base font-medium leading-8 text-slate-600">
              Sesen helps pharmaceutical, biotech, medical device, CRO, and healthcare teams translate clinical, regulatory, labeling, safety, software, training, and commercial content through expert linguists, AI-enabled workflows, terminology governance, and validation.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-base font-semibold text-slate-800">
              {contentAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="what-sesen-does-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4B6FD8]">
                What Sesen Does
              </p>
              <h2
                id="what-sesen-does-heading"
                className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
              >
                Specialized Translation and Localization for Life Sciences Organizations
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Sesen supports regulated multilingual content across the life sciences product lifecycle, from clinical development and regulatory submission to labeling, safety, software, training, and commercialization.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Our work brings together SesenGPT-enabled workflows, expert human review, terminology governance, translation memory leverage, and structured QA for content where accuracy and accountability matter.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.sesen.com/services/"
                  className="group inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  EXPLORE ALL SERVICES
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://www.sesen.com/solutions/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 transition hover:-translate-y-0.5 hover:border-[#4B6FD8]/40 hover:text-[#3659BB]"
                >
                  VIEW SOLUTIONS
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceLinks.map((service, index) => {
                const Icon = service.icon;
                const isWide = index === serviceLinks.length - 1;

                return (
                  <a
                    key={service.title}
                    href={service.href}
                    className={`group rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:border-[#4B6FD8]/35 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 ${isWide ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10 text-[#4B6FD8] transition group-hover:bg-[#4B6FD8] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.015em] text-slate-950">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#3659BB]">
                          Explore service
                          <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-10" aria-labelledby="life-sciences-sectors-heading">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#4B6FD8]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                Life Sciences Sectors
              </p>
              <h2
                id="life-sciences-sectors-heading"
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-5xl"
              >
                Serving Life Sciences Organizations Advancing Global Health
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:ml-auto">
              Sesen supports life sciences organizations across research, development, regulatory approval, product launch, patient communication, and post-market operations, using AI-enabled workflows with expert human validation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectorCards.map((sector) => {
              const Icon = sector.icon;

              return (
                <a
                  key={sector.title}
                  href={sector.href}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-blue-200/40 hover:bg-white/[0.085] hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="relative min-h-[10rem] pr-14">
                    <div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-blue-200/10 text-blue-100 transition group-hover:bg-[#4B6FD8] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                      {sector.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {sector.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {sector.links.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-100">
                    Explore {sector.title}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="ai-enabled-human-translation-heading">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_50%,#eef3ff_100%)] p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4B6FD8]">
                  Responsible AI-Enabled Workflows
                </p>
                <h2
                  id="ai-enabled-human-translation-heading"
                  className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
                >
                  AI-Enabled, Human-Validated Translation for Regulated Content
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                  Sesen is built for the AI era of regulated multilingual content. Our SesenGPT-enabled workflows help life sciences teams move faster while keeping expert human review, terminology governance, validation, and quality-controlled delivery at the center of the translation process.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  This approach is designed for clinical, regulatory, labeling, safety, medical device, software, training, and commercial content where speed matters, but accuracy, traceability, clarity, and human accountability remain essential.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-[#4B6FD8]/20 bg-white/75 p-5 shadow-sm shadow-blue-100/60">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                    Built for accuracy, traceability, and clarity
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Sesen’s AI-enabled, human-validated workflow supports regulated content where translated terms, version updates, reviewer input, and quality checks may matter. By combining terminology governance, SesenGPT-assisted drafting, expert human review, and structured validation, Sesen helps life sciences teams improve multilingual consistency while maintaining human accountability.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.sesen.com/sesengpt-hybrid-translation/"
                    className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#4B6FD8] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4B6FD8]/25 transition hover:-translate-y-0.5 hover:bg-[#5b7be0]"
                  >
                    EXPLORE LIFE SCIENCES TRANSLATION SERVICES
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://www.sesen.com/ai-translation-validation/"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 transition hover:-translate-y-0.5 hover:border-[#4B6FD8]/40 hover:text-[#3659BB]"
                  >
                    AI TRANSLATION VALIDATION
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-lg shadow-slate-200/60 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Controlled workflow</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                      From SesenGPT-assisted drafting to final human validation
                    </h3>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10 text-[#4B6FD8] sm:flex">
                    <BookOpenCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {aiWorkflowSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div key={step.title} className="relative flex gap-4 rounded-[1.35rem] bg-slate-50/85 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10 text-[#4B6FD8]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-slate-950">{step.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="quality-compliance-security-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4B6FD8]">
              Quality, Compliance, and Security
            </p>
            <h2
              id="quality-compliance-security-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
            >
              Quality-Controlled Workflows for Regulated Multilingual Content
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Enterprise life sciences translation in the AI era requires more than linguistic accuracy. Sesen supports regulated multilingual programs with ISO-certified quality processes, SesenGPT-enabled workflows, professional native translators, subject-matter review, terminology governance, version control, audit-ready documentation, and secure workflow management.
            </p>
          </div>

          <div className="mt-12 rounded-[2.25rem] border border-slate-200 bg-white px-6 py-8 shadow-sm shadow-slate-200/70 sm:px-8 lg:px-10">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {qualityPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4B6FD8]/10 text-[#4B6FD8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.015em] text-slate-950">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl shadow-slate-300/70">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                  Quality Systems for Regulated Multilingual Programs
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Sesen combines ISO-certified quality processes, terminology governance, reviewer coordination, AI-assisted validation, and controlled technology workflows to help life sciences teams manage multilingual content with transparency, consistency, and confidence.
                </p>
              </div>

              <div className="border-t border-white/10 bg-white/[0.04] px-6 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.sesen.com/quality-compliance-security/"
                    className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#4B6FD8] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4B6FD8]/25 transition hover:-translate-y-0.5 hover:bg-[#5b7be0]"
                  >
                    QUALITY, COMPLIANCE & SECURITY
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://www.sesen.com/client-support/"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-blue-200/25 bg-white/[0.04] px-6 py-3 text-sm font-semibold tracking-wide text-blue-100 transition hover:-translate-y-0.5 hover:border-blue-200/45 hover:bg-white/[0.08]"
                  >
                    CLIENT SUPPORT
                  </a>
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-slate-400">
                    Supporting resources
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    <a
                      href="https://www.sesen.com/translation-certificate/"
                      className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
                    >
                      Translation Certificate
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://www.sesen.com/resources/knowledge-base/"
                      className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
                    >
                      Knowledge Base
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4B6FD8]">
                AI-Enabled Enterprise Solutions
              </p>
              <h2
                id="solutions-heading"
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
              >
                Solutions for Complex Life Sciences Translation Programs
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 lg:ml-auto">
              Sesen helps enterprise life sciences teams manage multilingual content as a coordinated AI-enabled program, not a series of disconnected translation requests. Our solutions connect clinical, regulatory, labeling, software, AI translation validation, terminology intelligence, and expert human review workflows across teams, markets, and content lifecycles.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-50/80 shadow-sm shadow-slate-200/70">
            <div className="grid lg:grid-cols-2">
              {solutionBlocks.map((solution, index) => (
                <a
                  key={solution.title}
                  href={solution.href}
                  className={`group flex gap-5 border-slate-200 bg-white/55 p-6 transition hover:bg-white sm:p-7 ${
                    index % 2 === 0 ? "lg:border-r" : ""
                  } ${index < solutionBlocks.length - 2 ? "border-b" : index < solutionBlocks.length - 1 ? "border-b lg:border-b-0" : ""}`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4B6FD8]/20 bg-[#4B6FD8]/10 text-sm font-semibold text-[#3659BB]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {solution.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#3659BB]">
                      Explore solution
                      <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[2rem] bg-[linear-gradient(135deg,#f4f7ff_0%,#ffffff_100%)] px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                Connect SesenGPT, expert review, quality, and multilingual operations into one translation program
              </h3>
              <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
                Explore Sesen solutions for teams managing high-volume, regulated, recurring, or multi-stakeholder life sciences content with AI-enabled workflows and human-validated delivery.
              </p>
            </div>
            <a
              href="https://www.sesen.com/solutions/"
              className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#4B6FD8] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4B6FD8]/20 transition hover:-translate-y-0.5 hover:bg-[#5b7be0] lg:shrink-0"
            >
              VIEW ALL SOLUTIONS
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#4B6FD8] px-6 py-20 text-white sm:px-8 lg:px-10" aria-labelledby="client-logo-section-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="client-logo-section-heading"
              className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-5xl"
            >
              Trusted by Leading Life Sciences Organizations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50/90">
              Representative clients across clinical, regulatory, medical device, and healthcare content programs.
            </p>
          </div>

          <div className="relative mt-12 space-y-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#4B6FD8] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#4B6FD8] to-transparent" />

            <div className="flex overflow-hidden">
              <div className="flex min-w-full shrink-0 animate-[logoScroll_34s_linear_infinite] items-center gap-4 pr-4">
                {[...clientLogoMarks, ...clientLogoMarks].map((logo, index) => (
                  <div
                    key={`${logo.name}-row-one-${index}`}
                    className="flex min-h-20 min-w-[11rem] items-center justify-center rounded-[1.15rem] border border-white/18 bg-white/[0.08] px-5"
                    aria-label={logo.name}
                  >
                    <div className="flex flex-col items-center gap-2 opacity-90">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full border border-white/80" />
                        <span className={`h-2.5 rounded-full bg-white/85 ${logo.width}`} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-10 rounded-full bg-white/55" />
                        <span className="h-2 w-6 rounded-full bg-white/45" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex overflow-hidden">
              <div className="flex min-w-full shrink-0 animate-[logoScrollReverse_38s_linear_infinite] items-center gap-4 pr-4">
                {[...clientLogoMarks.slice().reverse(), ...clientLogoMarks.slice().reverse()].map((logo, index) => (
                  <div
                    key={`${logo.name}-row-two-${index}`}
                    className="flex min-h-20 min-w-[11rem] items-center justify-center rounded-[1.15rem] border border-white/18 bg-white/[0.08] px-5"
                    aria-label={logo.name}
                  >
                    <div className="flex flex-col items-center gap-2 opacity-90">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full border border-white/80" />
                        <span className={`h-2.5 rounded-full bg-white/85 ${logo.width}`} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-10 rounded-full bg-white/55" />
                        <span className="h-2 w-6 rounded-full bg-white/45" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes logoScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes logoScrollReverse {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}</style>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="enterprise-proof-heading">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_54%,#eef3ff_100%)] shadow-sm shadow-slate-200/70">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
              <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
                <h2
                  id="enterprise-proof-heading"
                  className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
                >
                  Built for Enterprise Life Sciences Teams
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                  Sesen gives enterprise clinical, regulatory, medical device, safety, training, and commercial teams a modern AI-enabled translation model built around SesenGPT, expert human validation, terminology governance, and quality-controlled multilingual delivery.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  This model is designed for the next generation of life sciences translation, where AI accelerates suitable workflows while professional native translators, subject-matter reviewers, ISO-certified processes, and structured validation support accuracy, traceability, clarity, and human accountability.
                </p>
              </div>

              <div className="border-t border-slate-200 bg-white/65 px-6 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                <div className="grid gap-3 sm:grid-cols-2">
                  {credibilityStats.map((stat) => (
                    <div
                      key={stat.value}
                      className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-5 shadow-sm shadow-slate-200/60"
                    >
                      <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[1.75rem] bg-slate-950 px-5 py-6 text-white sm:px-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">
                    AI-Enabled Program Support
                  </p>
                  <div className="mt-5 grid gap-4">
                    {enterpriseProof.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                        <p className="text-base leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="resources-heading"
              className="text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-5xl"
            >
              Insights for Global Life Sciences Content Teams
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Explore practical resources for clinical, regulatory, labeling, medical device, healthcare, and commercial teams managing multilingual content in the AI era, including responsible AI workflows, terminology intelligence, human validation, localization strategy, and regulated content readiness.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <a
                href="https://www.sesen.com/resources/clinical-regulatory-knowledge/"
                className="group relative isolate overflow-hidden bg-slate-950 p-7 text-white sm:p-8 lg:p-10"
              >
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#4B6FD8]/35 blur-3xl" />
                <div className="absolute -bottom-20 left-12 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-blue-100">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Clinical & Regulatory Resource Hub
                  </p>
                  <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                    Clinical & Regulatory Knowledge Insights
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                    Educational articles and perspectives for clinical, regulatory, labeling, medical device, and quality teams managing regulated multilingual content across global life sciences programs.
                  </p>
                  <div className="mt-7 flex flex-col gap-3">
                    <span className="inline-flex items-center text-sm font-semibold text-blue-100">
                      Explore Clinical & Regulatory Knowledge Insights
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition group-hover:border-white/25 group-hover:text-white">
                      View all resources
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>

              <div className="divide-y divide-slate-200">
                {resourceLinks.slice(1).map((resource) => {
                  const Icon = resource.icon;

                  return (
                    <a
                      key={resource.title}
                      href={resource.href}
                      className="group grid gap-4 p-6 transition hover:bg-slate-50 sm:grid-cols-[2.75rem_1fr_auto] sm:items-start sm:p-7"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4B6FD8]/10 text-[#4B6FD8] transition group-hover:bg-[#4B6FD8] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                          {resource.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-slate-600">
                          {resource.description}
                        </p>
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#4B6FD8] sm:mt-1 sm:block" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-20 text-center text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28" aria-labelledby="final-cta-heading">
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-[#4B6FD8]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent" />

        <div className="relative mx-auto max-w-5xl">
          <h2
            id="final-cta-heading"
            className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-5xl"
          >
            Work With an AI-Enabled Life Sciences Translation Partner
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sesen helps life sciences organizations manage multilingual clinical, regulatory, labeling, safety, software, training, and commercial content with SesenGPT-enabled workflows, expert human validation, terminology governance, and quality-controlled delivery.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.sesen.com/contact-sales/"
              className="group inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#4B6FD8] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4B6FD8]/25 transition hover:-translate-y-0.5 hover:bg-[#5b7be0] sm:w-auto"
            >
              TALK WITH TEAM SESEN
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.sesen.com/get-a-quote/"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-blue-200/25 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold tracking-wide text-blue-100 transition hover:-translate-y-0.5 hover:border-blue-200/45 hover:bg-white/[0.09] sm:w-auto"
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
