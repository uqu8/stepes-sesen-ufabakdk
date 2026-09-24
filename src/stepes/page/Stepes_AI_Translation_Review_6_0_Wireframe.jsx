import React from "react";

const LINKS = {
  contact: "https://www.stepes.com/contact-sales/",
  aiTranslation: "https://www.stepes.com/ai-translation-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  aiOutputReview: "https://www.stepes.com/multilingual-ai-output-review/",
  llmEvaluation: "https://www.stepes.com/multilingual-llm-evaluation-services/",
  qualityAssurance: "https://www.stepes.com/translation-quality-assurance/",
  languages: "https://www.stepes.com/translation-languages/",
  security: "https://www.stepes.com/security/",
};

const reviewDimensions = [
  {
    icon: "accuracy",
    title: "Accuracy",
    text: "Confirm that the translation communicates the source meaning correctly without mistranslation, distortion, or unintended shifts in meaning.",
  },
  {
    icon: "complete",
    title: "Completeness",
    text: "Identify missing information, untranslated text, unsupported additions, accidental summarization, or other differences between source and target.",
  },
  {
    icon: "terminology",
    title: "Terminology",
    text: "Verify technical terms, product names, industry language, approved terminology, and glossary compliance.",
  },
  {
    icon: "context",
    title: "Context",
    text: "Determine whether ambiguous words, phrases, references, and concepts have been interpreted correctly within the broader document and business context.",
  },
  {
    icon: "language",
    title: "Language Quality",
    text: "Correct grammar, syntax, spelling, punctuation, awkward phrasing, and other linguistic issues that affect readability and professionalism.",
  },
  {
    icon: "tone",
    title: "Tone & Style",
    text: "Align the translation with the audience, content type, communication purpose, brand voice, and appropriate level of formality.",
  },
  {
    icon: "locale",
    title: "Locale Fit",
    text: "Validate regional vocabulary, spelling, date and number formats, currencies, measurements, and other local conventions.",
  },
  {
    icon: "technical",
    title: "Technical Integrity",
    text: "Check numbers, symbols, tags, variables, placeholders, references, protected text, and other non-linguistic elements that must remain accurate.",
  },
];

const workflow = [
  {
    title: "Submit the Source + AI Translation",
    text: "Provide the original source content together with the corresponding AI-generated translation. Include approved glossaries, style guides, reference translations, product terminology, or other linguistic resources when available.",
  },
  {
    title: "Define the Review Requirements",
    text: "Stepes aligns the review scope with your target languages, subject matter, audience, intended use, quality expectations, deliverables, and business risk.",
  },
  {
    title: "Expert Source-to-Target Review",
    text: "A qualified bilingual linguist compares the translation directly against the source for accuracy, completeness, terminology, context, language quality, locale fit, and other project requirements.",
  },
  {
    title: "Correct + Validate",
    text: "Confirmed issues are corrected according to the agreed scope. Specialized content can be routed to reviewers with appropriate subject-matter expertise, with comments or documented findings provided when required.",
  },
  {
    title: "Quality Assurance + Delivery",
    text: "Final checks verify corrections, terminology, numbers, formatting, file integrity, and requested review outputs before the reviewed translation is delivered.",
  },
];

const serviceModes = [
  {
    label: "Existing AI Translation",
    title: "AI Translation Review",
    question: "“Can we trust this AI translation?”",
    text: "You already have an AI-generated translation. The objective is independent source-to-target validation, correction of translation issues, and confirmation that the content is appropriate for its intended use.",
    linkLabel: "You are on this service",
    href: null,
  },
  {
    label: "Production Editing",
    title: "Machine Translation Post-Editing",
    question: "“Can you turn this machine translation into the finished translation we need?”",
    text: "Machine- or AI-generated translation already exists, but it requires systematic production editing to reach an agreed final quality standard.",
    linkLabel: "Machine Translation Post-Editing",
    href: LINKS.mtpe,
  },
  {
    label: "Managed End-to-End Workflow",
    title: "AI Translation + Human Review",
    question: "“Can Stepes manage the complete AI + human translation workflow?”",
    text: "The translation has not yet been produced. Stepes manages translation generation, professional human review, terminology, quality assurance, approvals, and final multilingual delivery.",
    linkLabel: "AI + Human Translation Workflow",
    href: LINKS.aiHuman,
  },
];

const reviewLevels = [
  {
    title: "Focused Quality Review",
    fit: "Lower-risk content",
    text: "A targeted bilingual review designed to identify material translation problems without fully refining every stylistic detail.",
    items: [
      "Clear mistranslations",
      "Significant omissions or additions",
      "Critical terminology",
      "Numbers and units",
      "Major contextual or readability problems",
    ],
  },
  {
    title: "Full Source-to-Target Review",
    fit: "Business-critical content",
    text: "A comprehensive bilingual review for translations that must be accurate, consistent, professional, natural, and appropriate for their intended audience.",
    items: [
      "Accuracy and completeness",
      "Terminology and consistency",
      "Context and intended meaning",
      "Grammar, fluency, tone, and style",
      "Locale and technical integrity",
    ],
  },
  {
    title: "Specialist Validation",
    fit: "Specialized or high-impact content",
    text: "Additional professional controls for materials where translation errors can create meaningful safety, regulatory, legal, financial, technical, operational, or reputational consequences.",
    items: [
      "Domain-qualified reviewers",
      "Approved terminology and references",
      "Additional project-specific QA",
      "Documented findings when required",
      "Additional approval stages where appropriate",
    ],
  },
];

const errorPatterns = [
  {
    title: "Plausible Mistranslation",
    text: "The target sentence reads naturally but changes a relationship, action, condition, qualification, or other part of the original meaning.",
  },
  {
    title: "Missing Information",
    text: "A warning, limitation, condition, reference, exception, or other source element disappears without making the translated sentence appear obviously incomplete.",
  },
  {
    title: "Unsupported Addition",
    text: "The AI introduces plausible wording or information that is not supported by the original source.",
  },
  {
    title: "Terminology Error",
    text: "A translated term is linguistically reasonable but technically incorrect for the customer's industry, product, process, or approved terminology.",
  },
  {
    title: "Contextual Error",
    text: "An ambiguous source word or phrase is interpreted incorrectly because the AI does not apply the appropriate document, product, or business context.",
  },
  {
    title: "Negation or Qualification Error",
    text: "Words such as not, may, must, unless, only, or approximately are omitted, weakened, or translated in a way that materially changes meaning.",
  },
  {
    title: "Inconsistent Language",
    text: "The same source concept, product feature, or technical term is translated differently across files, screens, pages, or releases.",
  },
  {
    title: "Numbers, Dates, and Units",
    text: "Decimals, percentages, dates, currencies, measurements, dosages, model numbers, quantities, and symbols require deliberate verification.",
  },
  {
    title: "Tone or Locale Mismatch",
    text: "The translation may be accurate at sentence level but inappropriate for the intended audience, brand voice, level of formality, country, or regional market.",
  },
];

const industries = [
  {
    icon: "health",
    title: "Life Sciences & Healthcare",
    text: "Clinical, pharmaceutical, medical device, healthcare, patient-facing, scientific, and technical materials where terminology and meaning require careful validation.",
  },
  {
    icon: "legal",
    title: "Legal & Compliance",
    text: "Contracts, policies, corporate documentation, regulatory materials, legal correspondence, disclosures, and litigation-related content.",
  },
  {
    icon: "finance",
    title: "Financial Services",
    text: "Financial reports, banking and insurance communications, investor materials, disclosures, customer information, and other financial content.",
  },
  {
    icon: "engineering",
    title: "Manufacturing & Engineering",
    text: "Technical manuals, specifications, engineering documentation, SOPs, service information, safety content, and product instructions.",
  },
  {
    icon: "software",
    title: "Software & Technology",
    text: "Software interfaces, apps, product experiences, technical documentation, help content, knowledge bases, SaaS content, and release communications.",
  },
  {
    icon: "marketing",
    title: "Marketing & Customer Experience",
    text: "Websites, product content, campaigns, eLearning, customer communications, ecommerce content, and digital experiences requiring accurate and market-appropriate language.",
  },
];

const enterpriseUses = [
  {
    title: "Validate Internally Generated AI Translations",
    text: "Review content produced directly by employees or business teams before external publication or higher-impact use.",
  },
  {
    title: "Validate Enterprise AI Translations",
    text: "Apply professional source-to-target validation to translations generated through enterprise LLMs, internal applications, or integrated AI workflows.",
  },
  {
    title: "Independently Validate Vendor Deliverables",
    text: "Evaluate AI-generated translations supplied by an external provider before accepting or deploying the content.",
  },
  {
    title: "Establish Risk-Based Review Controls",
    text: "Define which content can move through streamlined workflows and which content should receive professional bilingual or specialist review.",
  },
  {
    title: "Centralize Multilingual Quality",
    text: "Create a consistent review framework across business units, markets, languages, content types, and AI technologies.",
  },
  {
    title: "Scale Human Expertise Selectively",
    text: "Apply professional review where context, subject matter, audience, or business risk makes human judgment most valuable.",
  },
];

const qualityInsights = [
  {
    title: "Error Classification",
    text: "Group findings into practical categories such as accuracy, omission, addition, terminology, language quality, locale, consistency, or technical integrity.",
  },
  {
    title: "Severity Assessment",
    text: "Differentiate minor linguistic issues from errors that materially affect meaning, usability, safety, compliance, or business impact.",
  },
  {
    title: "Quality Sampling",
    text: "Review representative portions of large multilingual datasets when the objective is to understand quality without correcting every word.",
  },
  {
    title: "Review Thresholds",
    text: "Apply project-specific criteria to help determine whether translated content requires additional professional intervention.",
  },
  {
    title: "Recurring Error Analysis",
    text: "Identify patterns that can improve terminology, source-content preparation, translation instructions, routing rules, or future review workflows.",
  },
];

const deliverables = [
  {
    title: "Clean Corrected Translation",
    text: "A professionally reviewed version incorporating approved corrections and ready for the next stage of your workflow.",
  },
  {
    title: "Tracked Changes",
    text: "A visible record of changes made to the original AI-generated translation when supported by the file format and workflow.",
  },
  {
    title: "Reviewer Comments",
    text: "Contextual explanations for selected translation issues, terminology decisions, source ambiguities, or other items requiring additional visibility.",
  },
  {
    title: "Error Findings",
    text: "Structured identification of quality issues for internal analysis, vendor feedback, workflow improvement, or quality documentation.",
  },
  {
    title: "Terminology Feedback",
    text: "Identification of incorrect, inconsistent, or unapproved terminology that can strengthen glossaries and future multilingual production.",
  },
  {
    title: "Structured Quality Evaluation",
    text: "Review findings organized according to defined categories, severity levels, sampling requirements, or customer-specific acceptance criteria.",
  },
];

const contentFormats = [
  {
    title: "Business Documents",
    text: "Word documents, presentations, spreadsheets, PDFs, reports, correspondence, policies, and everyday business materials.",
  },
  {
    title: "Technical & Structured Content",
    text: "Technical manuals, specifications, XML, HTML, JSON, localization files, structured documentation, tags, variables, and protected content.",
  },
  {
    title: "Websites & Digital Content",
    text: "Web pages, landing pages, product information, knowledge content, ecommerce content, and multilingual digital experiences.",
  },
  {
    title: "Software & App Content",
    text: "UI strings, menus, buttons, messages, prompts, help content, release text, and localization resources where language may need product context.",
  },
  {
    title: "Publishing Files",
    text: "InDesign and other publication formats requiring both linguistic review and multilingual production support.",
  },
  {
    title: "High-Volume Enterprise Content",
    text: "Catalogs, product databases, knowledge bases, support content, training materials, and continuously updated multilingual repositories.",
  },
];

const scenarios = [
  {
    quote: "The AI translation sounds good, but we need to know whether it is actually accurate.",
    text: "A bilingual reviewer checks the translated content against its source before it is published, submitted, distributed, or relied upon.",
  },
  {
    quote: "Our team used ChatGPT, Gemini, Claude, or another LLM to translate content.",
    text: "Stepes can independently validate the translation without requiring your organization to recreate it through another system.",
  },
  {
    quote: "Another provider delivered AI-generated translations.",
    text: "Obtain an independent source-to-target review before accepting, publishing, or deploying the translated content.",
  },
  {
    quote: "We have too much AI-translated content to review everything equally.",
    text: "Apply focused review, sampling, or risk-based routing so professional expertise is concentrated on the content where it creates the greatest value.",
  },
];

const whyStepes = [
  {
    icon: "linguist",
    title: "Professional Native Linguists",
    text: "Qualified language professionals evaluate meaning, context, terminology, fluency, and target-market expectations.",
  },
  {
    icon: "compare",
    title: "Source-to-Target Validation",
    text: "Reviewers compare the translation directly with the original content to identify accuracy problems that target-language proofreading alone may not reveal.",
  },
  {
    icon: "expert",
    title: "Subject-Matter Expertise",
    text: "Specialized reviewers can be matched to technical, medical, legal, financial, software, manufacturing, and other domain-specific content.",
  },
  {
    icon: "agnostic",
    title: "AI-Agnostic Review",
    text: "Validate translations from the AI model, machine translation engine, TMS, enterprise platform, internal solution, or external provider you already use.",
  },
  {
    icon: "flexible",
    title: "Flexible Review Models",
    text: "Choose focused review, comprehensive bilingual review, specialist validation, sampling, or structured quality evaluation according to the project.",
  },
  {
    icon: "globe",
    title: "Enterprise Multilingual Scale",
    text: "Coordinate AI translation review across 100+ languages, multiple markets, different content types, and ongoing global programs through one translation partner.",
  },
];

const securityItems = [
  "Confidential content handling",
  "Controlled reviewer access",
  "Project-specific review instructions",
  "Approved terminology and linguistic resources",
  "Defined reviewer and approval roles",
  "Secure enterprise file exchange and delivery",
  "Documented review findings when required",
  "Quality assurance before final delivery",
];

const relatedServices = [
  {
    tag: "END-TO-END",
    title: "AI Translation & Human Review",
    text: "Need Stepes to generate the translation as well as professionally validate it? Use a managed workflow covering translation, terminology, review, QA, approvals, and delivery.",
    href: LINKS.aiHuman,
    link: "AI + Human Translation Workflow",
  },
  {
    tag: "PRODUCTION EDITING",
    title: "Machine Translation Post-Editing",
    text: "Already have machine- or AI-generated translations that need systematic editing into final-quality multilingual content?",
    href: LINKS.mtpe,
    link: "Machine Translation Post-Editing",
  },
  {
    tag: "BROADER AI CONTENT",
    title: "Multilingual AI Output Review",
    text: "Need human review of LLM responses, chatbot conversations, voice AI, RAG outputs, or other AI-generated content rather than a source-to-target translation?",
    href: LINKS.aiOutputReview,
    link: "Multilingual AI Output Review",
  },
  {
    tag: "MODEL EVALUATION",
    title: "Multilingual LLM Evaluation",
    text: "Need to benchmark models, evaluate prompts and responses, compare model versions, or systematically measure multilingual AI performance?",
    href: LINKS.llmEvaluation,
    link: "Multilingual LLM Evaluation Services",
  },
];

const faqs = [
  {
    q: "What is AI translation review?",
    a: "AI translation review is the professional evaluation of an existing AI-generated translation against its original source. A qualified bilingual linguist verifies whether the translation accurately preserves meaning and meets agreed requirements for completeness, terminology, language quality, context, consistency, locale, and intended use. Depending on the project, Stepes can correct the translation, provide tracked changes or reviewer comments, document quality findings, or perform a structured evaluation.",
  },
  {
    q: "Can Stepes review translations generated by ChatGPT, Gemini, Claude, or DeepL?",
    a: "Yes. Stepes can review translations produced by general-purpose LLMs, AI translation tools, commercial machine translation engines, enterprise AI systems, translation management systems, private models, internal applications, and output supplied by external providers. For source-to-target accuracy review, the original source content and corresponding translation should normally be provided.",
  },
  {
    q: "Do I need to provide the original source content?",
    a: "Yes, when the objective is true translation accuracy validation. The source allows professional reviewers to detect mistranslations, omissions, unsupported additions, altered meaning, terminology problems, and contextual errors that cannot reliably be identified by reading the target language alone.",
  },
  {
    q: "Is AI translation review the same as proofreading?",
    a: "No. Proofreading primarily evaluates the quality of the target-language text, including spelling, grammar, punctuation, style, and readability. AI translation review is bilingual. The reviewer compares the translated content against the original source, allowing Stepes to identify accuracy, completeness, terminology, and meaning-related issues that a monolingual proofreading process may miss.",
  },
  {
    q: "What is the difference between AI translation review and machine translation post-editing?",
    a: "AI Translation Review is centered on validation: determining whether an existing AI-generated translation accurately represents the source and is appropriate for its intended use. Machine Translation Post-Editing is centered on production editing: systematically editing machine- or AI-generated output to achieve an agreed final translation quality level. The right service depends on why the translation is being reviewed and what final deliverable you need.",
  },
  {
    q: "What is the difference between AI translation review and AI Translation & Human Review?",
    a: "AI Translation Review begins after an AI translation already exists. AI Translation & Human Review begins before the translation is generated and provides a complete managed workflow that can include AI translation, terminology, professional review, quality assurance, approvals, and final delivery.",
  },
  {
    q: "How is AI translation review different from AI output review?",
    a: "AI Translation Review evaluates a translated target text against its corresponding source content. AI Output Review addresses broader AI-generated content such as LLM responses, chatbot conversations, RAG output, voice AI, and other generative AI content where the evaluation may focus on factuality, relevance, clarity, conversational quality, cultural fit, or usability rather than translation fidelity alone.",
  },
  {
    q: "Can Stepes review legal, medical, financial, or technical AI translations?",
    a: "Yes. Stepes supports specialized translation review across life sciences, healthcare, medical devices, legal services, financial services, manufacturing, engineering, software, technology, and other technical fields. Reviewer qualifications, terminology resources, quality controls, and review depth can be aligned with the subject matter and requirements of the project.",
  },
  {
    q: "Can you correct the AI translation as part of the review?",
    a: "Yes. Depending on the requested scope, Stepes can provide a clean corrected translation, tracked changes, reviewer comments, terminology feedback, structured error findings, or a combination of these deliverables.",
  },
  {
    q: "Can Stepes evaluate AI translation quality without correcting every sentence?",
    a: "Yes. When the objective is quality evaluation rather than production, Stepes can review representative content or selected portions of a multilingual dataset and document the findings without necessarily performing full editing of every translated sentence. This can be useful for quality sampling, workflow decisions, vendor assessment, or determining where additional human review is needed.",
  },
  {
    q: "How is AI translation review different from general translation review?",
    a: "AI Translation Review is specifically designed for translations generated by AI or machine translation systems and emphasizes source fidelity, AI-specific error patterns, terminology, completeness, and fit for use. General translation review can apply to human- or vendor-produced translations as well as broader proofreading, linguistic QA, and in-country review workflows.",
  },
  {
    q: "Can AI automatically review another AI translation?",
    a: "Automated QA and AI-assisted evaluation can help identify patterns, flag potential issues, screen large volumes, and prioritize content for closer examination. However, where accuracy depends on nuanced source meaning, specialized terminology, context, regional usage, or high-impact decisions, qualified bilingual human reviewers provide an independent layer of professional judgment.",
  },
  {
    q: "Can Stepes compare translations from different AI models?",
    a: "Stepes can provide linguistic analysis of translation outputs when a project requires it. However, when the primary goal is systematic model benchmarking, prompt testing, comparative model evaluation, or measurement of multilingual LLM performance across defined criteria, Multilingual LLM Evaluation Services provide the more appropriate evaluation framework.",
  },
  {
    q: "How many languages does Stepes support for AI translation review?",
    a: "Stepes supports professional translation and localization programs across more than 100 languages and regional variants. Reviewer availability for highly specialized subject matter can vary by language and domain, so provide your target locales and content requirements when requesting a project.",
  },
  {
    q: "How do I get started with an AI translation review?",
    a: "Send us the original source content, the existing AI-generated translations, target languages, intended use, and any relevant glossaries, style guides, terminology, or reference materials. Stepes will help determine the appropriate review scope, professional resources, deliverables, and workflow for your content.",
  },
];

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    accuracy: <><circle cx="12" cy="12" r="8"/><path d="m8.8 12.2 2.1 2.1 4.7-5"/></>,
    complete: <><path d="M7 4.5h7l3 3v12H7z"/><path d="M14 4.5v3h3"/><path d="M9.5 11h5M9.5 14h5"/><path d="m9.2 17 1.4 1.4 2.8-2.8"/></>,
    terminology: <><path d="M4.5 6.5c1.6-.7 3.2-1 4.8-1h2.2v11H9.3c-1.4 0-2.8.2-4.8 1z"/><path d="M19.5 6.5c-1.6-.7-3.2-1-4.8-1h-2.2v11h2.2c1.4 0 2.8.2 4.8 1z"/><path d="M12 5.5v11"/><path d="M6.8 9.2h2.2M6.8 11.8h2.2M14.8 9.2H17M14.8 11.8H17"/></>,
    context: <><path d="M4 5h11v10H8l-4 4z"/><path d="M9 8.5h3M9 11.5h5"/></>,
    language: <><path d="M5.5 18 9 6l3.5 12"/><path d="M6.7 14h4.6"/><path d="m14.5 16.5 2 2 4-5"/></>,
    tone: <><path d="M4 17c2.5-5.5 5.4-8.8 9-10"/><path d="M13 7h5v5"/><path d="M7 18h10"/></>,
    locale: <><circle cx="12" cy="12" r="8"/><path d="M4.5 12h15M12 4c2.2 2.2 3.4 4.9 3.4 8S14.2 17.8 12 20M12 4C9.8 6.2 8.6 8.9 8.6 12S9.8 17.8 12 20"/></>,
    technical: <><path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h2M13 12h2M9 16h6"/></>,
    health: <><path d="M9.5 4h5v5h5v5h-5v5h-5v-5h-5V9h5z"/></>,
    legal: <><path d="M12 4v16M7 7h10"/><path d="m7 7-3 5h6zm10 0-3 5h6zM8 20h8"/></>,
    finance: <><path d="M4 19h16M6 16V9M10 16V5M14 16v-4M18 16V7"/></>,
    engineering: <><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></>,
    software: <><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m9 10-2 2 2 2M15 10l2 2-2 2M13 9l-2 6"/></>,
    marketing: <><path d="M4 15V9l11-4v14L4 15z"/><path d="M15 9c3 0 5 1.3 5 3s-2 3-5 3M7 16l1.5 4h3"/></>,
    linguist: <><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-4 2.7-6 5.5-6s5 2 5.5 6"/><path d="M15 6h6M18 4v4M15.5 12h5"/></>,
    compare: <><path d="M7 5h11M15 2l3 3-3 3M17 19H6M9 16l-3 3 3 3"/></>,
    expert: <><circle cx="12" cy="9" r="4"/><path d="M5.5 21c.7-4.3 3-6.5 6.5-6.5s5.8 2.2 6.5 6.5"/><path d="m16.5 4.5 1 1 2-2"/></>,
    agnostic: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16"/><path d="m6.5 6.5 11 11"/></>,
    flexible: <><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3"/></>,
    globe: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.2 3.5 4.8 3.5 8S14.2 17.8 12 20M12 4C9.8 6.2 8.5 8.8 8.5 12S9.8 17.8 12 20"/></>,
    arrow: <><path d="M5 12h13M14 7l5 5-5 5"/></>,
    check: <><path d="m5 12 4 4 10-10"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  };

  return <svg {...common}>{icons[name] || icons.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrowDark" : ""}`}>{children}</div>;
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a className={`arrowLink ${dark ? "arrowLinkDark" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function HeroReviewVisual() {
  return (
    <div className="heroVisual" aria-label="Illustration showing source content and an AI translation moving through professional human validation">
      <div className="heroVisualTopline">
        <span className="statusDot" />
        <span>Professional Review</span>
        <span className="heroVisualMeta">Source-to-target validation</span>
      </div>
      <div className="reviewGrid">
        <div className="reviewDoc">
          <div className="reviewDocLabel">SOURCE</div>
          <div className="reviewLine lineLong" />
          <div className="reviewLine lineMid" />
          <div className="reviewLine lineLong" />
          <div className="reviewLine lineShort" />
          <div className="reviewTextBlock">
            <div className="reviewTextTitle">Meaning + context</div>
            <div className="reviewTextSmall">Original language content</div>
          </div>
        </div>
        <div className="reviewConnector" aria-hidden="true">
          <span />
          <Icon name="arrow" size={20} />
        </div>
        <div className="reviewDoc aiDoc">
          <div className="reviewDocLabel">AI TRANSLATION</div>
          <div className="reviewLine lineLong" />
          <div className="reviewLine lineMid issueLine" />
          <div className="reviewLine lineLong" />
          <div className="reviewLine lineShort" />
          <div className="reviewIssue"><span>!</span> Meaning shift</div>
        </div>
      </div>
      <div className="validationRail">
        <div className="validationBadge"><Icon name="check" size={17} /> Human validated</div>
        <div className="validationItems">
          <span>Accuracy</span>
          <span>Terminology</span>
          <span>Completeness</span>
          <span>Locale</span>
        </div>
      </div>
    </div>
  );
}

function ReviewExampleVisual() {
  return (
    <div className="exampleVisual" aria-label="Example of an AI translation issue identified during bilingual review">
      <div className="exampleHeader">
        <div>
          <div className="exampleLabel">REVIEW FINDING</div>
          <div className="exampleTitle">Fluent language. Incorrect meaning.</div>
        </div>
        <span className="severity">Material</span>
      </div>
      <div className="exampleRows">
        <div className="exampleRow">
          <span className="rowLabel">Source</span>
          <p>“The system may be restarted after the indicator stops flashing.”</p>
        </div>
        <div className="exampleRow flagged">
          <span className="rowLabel">Spanish AI output</span>
          <p>“Reinicie el sistema después de que el indicador deje de parpadear.”</p>
        </div>
        <div className="exampleRow corrected">
          <span className="rowLabel">Reviewed Spanish</span>
          <p>“El sistema puede reiniciarse después de que el indicador deje de parpadear.”</p>
        </div>
      </div>
      <div className="exampleNote">
        <Icon name="check" size={18} />
        <span>The AI output turned a permitted action into a direct instruction. The Spanish remained fluent, but the source qualification was lost.</span>
      </div>
    </div>
  );
}

export default function StepesAITranslationReviewWireframe() {
  return (
    <main className="page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-deep: #9F1D55;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --blush-2: #FAE8F0;
          --pink-light: #F2A7C6;
          --ink: #1D2028;
          --ink-2: #343945;
          --body: #505662;
          --muted: #707783;
          --line: #E4E6EA;
          --line-dark: rgba(255,255,255,.14);
          --surface: #F7F8FA;
          --surface-2: #F1F3F5;
          --dark: #242730;
          --white: #FFFFFF;
          --shadow: 0 18px 55px rgba(24, 26, 33, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .page {
          margin: 0;
          overflow-x: clip;
          overflow-y: visible;
          background: var(--white);
          color: var(--ink);
          font-family: "Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .section { padding: 96px 0; }
        .sectionDense { padding: 80px 0; }
        .surface { background: var(--surface); }
        .blush { background: var(--blush); }
        .darkSection { background: var(--dark); color: var(--white); }
        .eyebrow {
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .13em;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .eyebrowDark { color: var(--pink-light); }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; color: var(--ink); }
        h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -.035em;
          max-width: 680px;
        }
        h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -.028em;
        }
        h3 {
          margin-bottom: 10px;
          font-size: 24px;
          line-height: 1.25;
          letter-spacing: -.016em;
        }
        .darkSection h2, .darkSection h3 { color: var(--white); }
        p, li {
          font-size: 16px;
          line-height: 1.72;
          color: var(--body);
        }
        .darkSection p, .darkSection li { color: #D6D9DF; }
        .largeCopy {
          font-size: 18px;
          line-height: 1.7;
          color: var(--body);
        }
        .darkSection .largeCopy { color: #D6D9DF; }
        .sectionHeading {
          max-width: 820px;
          margin-bottom: 48px;
        }
        .sectionHeading.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .sectionHeading p { max-width: 790px; margin-bottom: 0; }
        .sectionHeading.center p { margin-left: auto; margin-right: auto; }
        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: .2s ease;
        }
        .btnPrimary,
        .btnPrimary:link,
        .btnPrimary:visited,
        .btnPrimary:hover,
        .btnPrimary:active,
        .btnPrimary:focus,
        .btnPrimary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }
        .btnPrimary svg { color: #fff !important; stroke: #fff !important; }
        .btnPrimary:hover { background: var(--magenta-deep); transform: translateY(-1px); }
        .btnSecondary {
          background: #fff;
          border: 1px solid #D8DCE1;
          color: var(--ink);
        }
        .btnSecondary:hover { border-color: #B8BDC5; transform: translateY(-1px); }
        .btn:focus-visible,
        .arrowLink:focus-visible,
        summary:focus-visible {
          outline: 3px solid rgba(193,29,99,.22);
          outline-offset: 3px;
        }
        .arrowLink {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta);
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          min-height: 44px;
        }
        .arrowLink:hover svg { transform: translateX(3px); }
        .arrowLink svg { transition: transform .2s ease; }
        .arrowLinkDark { color: #FFD2E4; }

        /* Hero */
        .hero {
          padding: 104px 0 94px;
          background:
            radial-gradient(circle at 86% 14%, rgba(193,29,99,.075), transparent 34%),
            linear-gradient(180deg, #fff 0%, #FCFCFD 100%);
        }
        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(470px, .98fr);
          gap: 64px;
          align-items: center;
        }
        .heroCopy { max-width: 700px; }
        .heroCopy .largeCopy { max-width: 680px; margin-bottom: 0; }
        .heroVisual {
          border: 1px solid var(--line);
          background: #fff;
          border-radius: 30px;
          box-shadow: var(--shadow);
          padding: 26px;
          position: relative;
        }
        .heroVisualTopline {
          display: flex;
          align-items: center;
          gap: 9px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
          font-size: 15px;
          font-weight: 600;
          color: var(--ink-2);
        }
        .statusDot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .heroVisualMeta { margin-left: auto; color: var(--muted); font-weight: 400; font-size: 14px; }
        .reviewGrid {
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          gap: 12px;
          align-items: center;
          padding: 26px 0;
        }
        .reviewDoc {
          min-height: 246px;
          border: 1px solid #E2E4E8;
          border-radius: 20px;
          padding: 20px;
          background: #FCFCFD;
        }
        .aiDoc { background: #FFFBFD; }
        .reviewDocLabel {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .11em;
          color: #747B86;
          margin-bottom: 22px;
        }
        .reviewLine { height: 8px; border-radius: 5px; background: #CED2D8; margin-bottom: 13px; }
        .lineLong { width: 94%; }
        .lineMid { width: 76%; }
        .lineShort { width: 54%; }
        .issueLine { background: #E6A8C3; box-shadow: 0 0 0 4px rgba(193,29,99,.06); }
        .reviewTextBlock { margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--line); }
        .reviewTextTitle { font-size: 16px; font-weight: 600; color: var(--ink-2); }
        .reviewTextSmall { margin-top: 4px; color: var(--muted); font-size: 14px; }
        .reviewIssue {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 30px;
          font-size: 14px;
          color: #8F1648;
          font-weight: 600;
        }
        .reviewIssue span {
          width: 23px;
          height: 23px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--blush-2);
        }
        .reviewConnector { color: var(--magenta); display: flex; align-items: center; gap: 4px; }
        .reviewConnector span { height: 1px; flex: 1; background: #D8A8BD; }
        .validationRail {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid var(--line);
        }
        .validationBadge {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          background: var(--blush);
          color: var(--magenta-deep);
          font-size: 14px;
          font-weight: 600;
        }
        .validationItems { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px 14px; }
        .validationItems span { font-size: 14px; color: var(--muted); }

        /* Proof bar */
        .proofBand { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .proofGrid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .proofItem { padding: 28px 28px; border-right: 1px solid var(--line); }
        .proofItem:first-child { padding-left: 0; }
        .proofItem:last-child { border-right: 0; padding-right: 0; }
        .proofTitle { font-size: 20px; font-weight: 600; color: var(--ink); margin-bottom: 5px; }
        .proofText { color: var(--muted); font-size: 16px; line-height: 1.5; }

        /* Editorial */
        .splitEditorial { display: grid; grid-template-columns: .84fr 1.16fr; gap: 86px; align-items: start; }
        .splitEditorial.reverse { grid-template-columns: 1.08fr .92fr; }
        .introSticky { position: sticky; top: 30px; }
        .editorialList { border-top: 1px solid var(--line); }
        .editorialRow {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }
        .iconBox {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--blush);
          color: var(--magenta-deep);
        }
        .editorialRow h3 { font-size: 20px; margin-bottom: 7px; }
        .editorialRow p { margin-bottom: 0; }
        .relatedNote {
          margin-top: 28px;
          padding: 22px 24px;
          background: var(--blush);
          border-radius: 20px;
        }
        .relatedNote p { margin-bottom: 8px; }

        /* Platform */
        .platformPanel {
          border-radius: 30px;
          border: 1px solid var(--line);
          padding: 48px;
          background: #fff;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 54px;
          align-items: center;
        }
        .platformPanel p { margin-bottom: 0; }
        .platformCloud { display: flex; flex-wrap: wrap; gap: 10px; }
        .platformPill {
          padding: 11px 14px;
          border-radius: 999px;
          border: 1px solid #DFE2E7;
          background: #FBFBFC;
          font-size: 15px;
          color: var(--ink-2);
          font-weight: 600;
        }
        .platformPill.emphasis { border-color: #E9B5CB; background: var(--blush); color: var(--magenta-deep); }

        /* Workflow */
        .workflowRail { position: relative; margin-top: 12px; }
        .workflowRail::before {
          content: "";
          position: absolute;
          left: 28px;
          right: 28px;
          top: 27px;
          height: 1px;
          background: #D5D8DE;
        }
        .workflowGrid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; position: relative; }
        .workflowStep { position: relative; padding-top: 64px; }
        .stepNum {
          position: absolute;
          top: 0;
          left: 0;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #DADDE2;
          color: var(--magenta);
          font-size: 15px;
          font-weight: 600;
          z-index: 1;
        }
        .workflowStep h3 { font-size: 19px; }
        .workflowStep p { margin-bottom: 0; }
        .workflowResult {
          margin-top: 42px;
          padding: 24px 28px;
          border-radius: 20px;
          background: var(--blush);
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .workflowResult svg { flex: 0 0 auto; color: var(--magenta); margin-top: 3px; }
        .workflowResult p { margin: 0; color: var(--ink-2); }

        /* Comparison */
        .comparisonGrid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
        .serviceMode { padding: 34px; border-right: 1px solid var(--line); }
        .serviceMode:last-child { border-right: 0; }
        .serviceMode.current { background: linear-gradient(180deg, var(--blush) 0%, #fff 70%); }
        .modeLabel { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 16px; }
        .modeQuestion { font-size: 17px; font-weight: 600; line-height: 1.5; color: var(--ink-2); margin-bottom: 14px; }
        .serviceMode p { margin-bottom: 18px; }
        .currentLabel { color: var(--muted); font-size: 15px; font-weight: 600; min-height: 44px; display: inline-flex; align-items: center; }

        /* Review levels */
        .reviewLevelGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .reviewLevel {
          border-top: 3px solid #D8DADF;
          padding: 30px 26px 8px;
        }
        .reviewLevel:nth-child(2) { border-top-color: #C681A1; }
        .reviewLevel:nth-child(3) { border-top-color: var(--magenta); }
        .fitLabel { font-size: 16px; font-weight: 600; color: var(--magenta); margin-bottom: 14px; }
        .reviewLevel ul { list-style: none; padding: 0; margin: 20px 0 0; }
        .reviewLevel li { position: relative; padding-left: 22px; margin: 8px 0; }
        .reviewLevel li::before { content: ""; position: absolute; left: 0; top: .72em; width: 8px; height: 1px; background: var(--magenta); }

        /* Errors */
        .errorLayout { display: grid; grid-template-columns: .94fr 1.06fr; gap: 64px; align-items: start; }
        .errorList { border-top: 1px solid var(--line-dark); }
        .errorRow { display: grid; grid-template-columns: 180px 1fr; gap: 22px; padding: 19px 0; border-bottom: 1px solid var(--line-dark); }
        .errorRow h3 { font-size: 18px; margin: 0; color: #fff; }
        .errorRow p { margin: 0; }
        .exampleVisual { border-radius: 28px; background: #fff; color: var(--ink); padding: 26px; position: sticky; top: 30px; }
        .exampleHeader { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
        .exampleLabel { font-size: 11px; letter-spacing: .1em; font-weight: 600; color: var(--magenta); margin-bottom: 8px; }
        .exampleTitle { font-size: 20px; font-weight: 600; color: var(--ink); }
        .severity { padding: 7px 10px; border-radius: 999px; background: var(--blush); color: var(--magenta-deep); font-size: 13px; font-weight: 600; }
        .exampleRows { padding: 9px 0; }
        .exampleRow { padding: 17px 0; border-bottom: 1px solid var(--line); }
        .exampleRow:last-child { border-bottom: 0; }
        .rowLabel { display: block; margin-bottom: 7px; font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
        .exampleRow p { color: var(--ink-2); margin: 0; line-height: 1.6; }
        .exampleRow.flagged p { color: #8C284F; text-decoration: line-through; text-decoration-color: #D590AD; text-decoration-thickness: 1px; }
        .exampleRow.corrected { margin-top: 8px; padding: 17px; border-radius: 14px; background: #F8F9FA; border-bottom: 0; }
        .exampleNote { display: flex; align-items: flex-start; gap: 10px; margin-top: 18px; padding: 16px; border-radius: 14px; background: var(--blush); color: var(--ink-2); font-size: 16px; line-height: 1.55; }
        .exampleNote svg { flex: 0 0 auto; color: var(--magenta); margin-top: 2px; }

        /* Industries */
        .industryGrid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .industryItem { display: grid; grid-template-columns: 46px 1fr; gap: 16px; padding: 26px 30px 26px 0; border-bottom: 1px solid var(--line); }
        .industryItem:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
        .industryItem:nth-child(even) { padding-left: 34px; }
        .industryItem h3 { font-size: 20px; }
        .industryItem p { margin: 0; }

        /* Enterprise */
        .enterpriseGrid { display: grid; grid-template-columns: .84fr 1.16fr; gap: 64px; }
        .enterpriseList { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line-dark); }
        .enterpriseItem { padding: 24px 24px 24px 0; border-bottom: 1px solid var(--line-dark); }
        .enterpriseItem:nth-child(odd) { border-right: 1px solid var(--line-dark); padding-right: 28px; }
        .enterpriseItem:nth-child(even) { padding-left: 28px; }
        .enterpriseItem h3 { font-size: 19px; margin-bottom: 7px; }
        .enterpriseItem p { margin: 0; }

        /* Quality insights */
        .insightPanel { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .insightRows { border-top: 1px solid var(--line); }
        .insightRow { padding: 22px 0; border-bottom: 1px solid var(--line); }
        .insightRow h3 { font-size: 20px; margin-bottom: 6px; }
        .insightRow p { margin: 0; }
        .llmBridge {
          padding: 30px;
          border-radius: 24px;
          background: var(--blush);
          position: sticky;
          top: 30px;
        }
        .llmBridge h3 { font-size: 23px; }
        .llmBridge p { margin-bottom: 14px; }

        /* Deliverables */
        .deliverableGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .deliverableItem { padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .deliverableItem h3 { font-size: 20px; }
        .deliverableItem p { margin: 0; }

        /* Formats */
        .formatGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--line); }
        .formatItem { padding: 28px 30px 28px 0; border-bottom: 1px solid var(--line); }
        .formatItem:nth-child(3n+2), .formatItem:nth-child(3n+3) { padding-left: 30px; border-left: 1px solid var(--line); }
        .formatItem h3 { font-size: 20px; }
        .formatItem p { margin: 0; }

        /* Languages */
        .languageBand {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 56px;
          padding: 48px;
          border-radius: 28px;
          background: var(--blush);
          align-items: center;
        }
        .languageBand h2 { margin-bottom: 14px; }
        .languageBullets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 13px 28px; }
        .languageBullet { display: flex; align-items: flex-start; gap: 10px; color: var(--ink-2); font-size: 16px; line-height: 1.55; }
        .languageBullet svg { flex: 0 0 auto; color: var(--magenta); margin-top: 2px; }

        /* Scenarios */
        .scenarioRows { border-top: 1px solid var(--line); }
        .scenarioRow { display: grid; grid-template-columns: .93fr 1.07fr; gap: 48px; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .scenarioQuote { font-size: 18px; font-weight: 600; color: var(--ink); line-height: 1.45; }
        .scenarioRow p { margin: 0; }

        /* Why */
        .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .whyItem { padding: 26px; border-radius: 22px; border: 1px solid var(--line); background: #fff; }
        .whyIcon { margin-bottom: 18px; color: var(--magenta-deep); }
        .whyItem h3 { font-size: 20px; }
        .whyItem p { margin: 0; }
        .qualityLink { margin-top: 28px; text-align: center; }

        /* Security */
        .securityPanel {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 54px;
          padding: 50px;
          border-radius: 30px;
          border: 1px solid #DFE1E6;
          background: #fff;
        }
        .securityLead { max-width: 520px; }
        .securityIcon {
          width: 48px; height: 48px; border-radius: 14px; background: var(--blush); color: var(--magenta-deep); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 22px;
        }
        .securityList { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 24px; border-top: 1px solid var(--line); }
        .securityListItem { display: flex; align-items: flex-start; gap: 10px; padding: 17px 0; border-bottom: 1px solid var(--line); color: var(--ink-2); font-size: 16px; line-height: 1.55; }
        .securityListItem svg { flex: 0 0 auto; color: var(--magenta); margin-top: 2px; }

        /* Related */
        .relatedRows { border-top: 1px solid var(--line); }
        .relatedService { display: grid; grid-template-columns: 180px 1fr 235px; gap: 28px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--line); }
        .relatedTag { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
        .relatedService h3 { font-size: 21px; margin-bottom: 6px; }
        .relatedService p { margin: 0; }
        .relatedService .arrowLink { justify-self: end; text-align: right; }

        /* FAQ */
        .faqLayout { display: grid; grid-template-columns: 320px 1fr; gap: 68px; align-items: start; }
        .faqIntro { position: sticky; top: 30px; }
        .faqPanel { border-top: 1px solid var(--line); }
        details { border-bottom: 1px solid var(--line); }
        summary {
          list-style: none;
          cursor: pointer;
          min-height: 72px;
          padding: 21px 48px 21px 0;
          position: relative;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
          color: var(--ink);
        }
        summary::-webkit-details-marker { display: none; }
        summary::after {
          content: "+";
          position: absolute;
          right: 2px;
          top: 17px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--magenta);
          font-size: 24px;
          font-weight: 400;
        }
        details[open] summary::after { content: "−"; }
        .faqAnswer { max-width: 840px; padding: 0 48px 22px 0; }
        .faqAnswer p { margin: 0; }

        /* CTA */
        .finalSection { padding: 88px 0; background: var(--burgundy); color: #fff; }
        .finalGrid { display: grid; grid-template-columns: 1fr auto; gap: 54px; align-items: center; }
        .finalCopy { max-width: 780px; }
        .finalSection h2 { color: #fff; margin-bottom: 16px; }
        .finalSection p { color: #F5DCE7; margin-bottom: 0; }
        .finalSection .eyebrow { color: var(--pink-light); }
        .finalSection .btnPrimary,
        .finalSection .btnPrimary:link,
        .finalSection .btnPrimary:visited,
        .finalSection .btnPrimary:hover,
        .finalSection .btnPrimary:active,
        .finalSection .btnPrimary:focus,
        .finalSection .btnPrimary:focus-visible { background: #fff; color: var(--burgundy) !important; }
        .finalSection .btnPrimary svg { color: var(--burgundy) !important; stroke: var(--burgundy) !important; }
        .finalSection .btnPrimary:hover { background: #FDF2F7; }
        .finalActions { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .finalTextLink { color: #FFD6E6; font-size: 16px; font-weight: 600; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center; }
        .finalTextLink:hover { text-decoration: underline; text-underline-offset: 4px; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: 1fr 470px; gap: 42px; }
          .workflowGrid { gap: 14px; }
          .workflowStep h3 { font-size: 18px; }
          .relatedService { grid-template-columns: 150px 1fr 220px; }
        }

        @media (max-width: 980px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 90px 0 84px; }
          .heroGrid { grid-template-columns: 1fr; gap: 46px; }
          .heroCopy { max-width: 820px; text-align: center; margin: 0 auto; }
          .heroCopy h1, .heroCopy .largeCopy { margin-left: auto; margin-right: auto; }
          .heroCopy .ctaRow { justify-content: center; }
          .heroVisual { max-width: 720px; width: 100%; margin: 0 auto; }
          .proofGrid { grid-template-columns: repeat(2, 1fr); }
          .proofItem { border-bottom: 1px solid var(--line); }
          .proofItem:nth-child(2) { border-right: 0; padding-right: 0; }
          .proofItem:nth-child(3) { padding-left: 0; border-bottom: 0; }
          .proofItem:nth-child(4) { border-bottom: 0; }
          .splitEditorial, .splitEditorial.reverse, .platformPanel, .errorLayout, .enterpriseGrid, .insightPanel, .languageBand, .securityPanel { grid-template-columns: 1fr; gap: 42px; }
          .introSticky, .exampleVisual, .llmBridge, .faqIntro { position: static; }
          .platformPanel, .securityPanel, .languageBand { padding: 38px; }
          .platformPanel > div:first-child .eyebrow, .platformPanel > div:first-child h2, .languageBand > div:first-child .eyebrow, .languageBand > div:first-child h2 { text-align: center; }
          .workflowRail::before { display: none; }
          .workflowGrid { grid-template-columns: 1fr; gap: 0; }
          .workflowStep { padding: 0 0 30px 76px; min-height: 104px; }
          .workflowStep::before { content: ""; position: absolute; top: 54px; bottom: 0; left: 27px; width: 1px; background: #D5D8DE; }
          .workflowStep:last-child::before { display: none; }
          .comparisonGrid { grid-template-columns: 1fr; }
          .serviceMode { border-right: 0; border-bottom: 1px solid var(--line); }
          .serviceMode:last-child { border-bottom: 0; }
          .reviewLevelGrid { grid-template-columns: 1fr; }
          .reviewLevel { padding-bottom: 28px; }
          .industryGrid { grid-template-columns: 1fr; }
          .industryItem:nth-child(odd) { border-right: 0; padding-right: 0; }
          .industryItem:nth-child(even) { padding-left: 0; }
          .enterpriseList { grid-template-columns: 1fr; }
          .enterpriseItem:nth-child(odd) { border-right: 0; padding-right: 0; }
          .enterpriseItem:nth-child(even) { padding-left: 0; }
          .deliverableGrid { grid-template-columns: repeat(2, 1fr); }
          .formatGrid { grid-template-columns: repeat(2, 1fr); }
          .formatItem:nth-child(n) { padding: 26px 28px 26px 0; border-left: 0; }
          .formatItem:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
          .languageBullets { grid-template-columns: repeat(2, 1fr); }
          .whyGrid { grid-template-columns: repeat(2, 1fr); }
          .relatedService { grid-template-columns: 140px 1fr; }
          .relatedService .arrowLink { grid-column: 2; justify-self: start; text-align: left; margin-top: -8px; }
          .faqLayout { grid-template-columns: 1fr; gap: 28px; }
          .finalGrid { grid-template-columns: 1fr; gap: 30px; }
          .finalActions { flex-direction: row; flex-wrap: wrap; align-items: center; }
        }

        @media (max-width: 700px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .sectionDense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          p, li, .arrowLink, .btn { font-size: 16px; }
          .largeCopy { font-size: 18px; }
          .hero { padding: 72px 0 66px; }
          .heroCopy h1 { max-width: 100%; }
          .heroCopy .ctaRow { flex-direction: column; width: 100%; }
          .heroCopy .btn { width: 100%; }
          .heroVisual { padding: 20px; border-radius: 24px; }
          .heroVisualMeta { display: none; }
          .reviewGrid { grid-template-columns: 1fr; gap: 14px; }
          .reviewDoc { min-height: 190px; }
          .reviewConnector { justify-content: center; flex-direction: column; transform: none; height: 34px; width: 100%; gap: 2px; }
          .reviewConnector span { width: 1px; height: 12px; flex: 0 0 12px; max-width: none; }
          .reviewConnector svg { transform: rotate(90deg); }
          .validationRail { align-items: flex-start; flex-direction: column; }
          .validationItems { justify-content: flex-start; }
          .proofGrid { grid-template-columns: 1fr; }
          .proofItem, .proofItem:first-child, .proofItem:nth-child(2), .proofItem:nth-child(3), .proofItem:nth-child(4) { padding: 20px 0; border-right: 0; border-bottom: 1px solid var(--line); }
          .proofItem:last-child { border-bottom: 0; }
          .sectionHeading:not(.scan) { text-align: center; margin-left: auto; margin-right: auto; }
          .sectionHeading:not(.scan) p { margin-left: auto; margin-right: auto; }
          .sectionHeading.scan { text-align: left; }
          .splitEditorial > .introSticky:not(.scan) { text-align: left; }
          .editorialRow { grid-template-columns: 42px 1fr; gap: 14px; }
          .iconBox { width: 38px; height: 38px; }
          .platformPanel, .securityPanel, .languageBand { padding: 28px 22px; border-radius: 24px; }
          .platformPanel > div:first-child .eyebrow, .platformPanel > div:first-child h2 { text-align: center; }
          .platformCloud { justify-content: center; }
          .workflowStep { padding-left: 66px; }
          .stepNum { width: 48px; height: 48px; }
          .workflowStep::before { left: 23px; top: 48px; }
          .workflowResult { padding: 20px; }
          .serviceMode { padding: 28px 22px; }
          .reviewLevel { padding-left: 0; padding-right: 0; }
          .errorLayout { gap: 34px; }
          .errorRow { grid-template-columns: 1fr; gap: 6px; }
          .exampleVisual { padding: 20px; }
          .exampleHeader { align-items: flex-start; }
          .industryItem { grid-template-columns: 42px 1fr; gap: 14px; }
          .enterpriseGrid > div:first-child { text-align: left; }
          .enterpriseItem { padding-right: 0; }
          .insightPanel > div:first-child { text-align: left; }
          .deliverableGrid { grid-template-columns: 1fr; border-left: 0; }
          .deliverableItem { padding: 24px 0; border-right: 0; }
          .formatGrid { grid-template-columns: 1fr; }
          .formatItem:nth-child(n) { padding: 24px 0; border-left: 0; }
          .languageBand > div:first-child .eyebrow, .languageBand > div:first-child h2 { text-align: center; }
          .languageBullets { grid-template-columns: 1fr; }
          .scenarioRow { grid-template-columns: 1fr; gap: 10px; }
          .whyGrid { grid-template-columns: 1fr; }
          .whyItem { padding: 24px 22px; }
          .securityLead { text-align: left; margin: 0; }
          .securityList { grid-template-columns: 1fr; }
          .relatedService { grid-template-columns: 1fr; gap: 8px; padding: 24px 0; }
          .relatedService .arrowLink { grid-column: 1; margin-top: 2px; }
          summary { font-size: 17px; padding-right: 44px; }
          .faqAnswer { padding-right: 0; }
          .finalSection { padding: 72px 0; text-align: center; }
          .finalActions { justify-content: center; flex-direction: column; }
          .finalSection .btn { width: 100%; }
        }

        @media (max-width: 350px) {
          .heroVisual { padding: 16px; }
          .platformPill { width: 100%; text-align: center; }
          .exampleHeader { flex-direction: column; }
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <Eyebrow>AI Translation Quality</Eyebrow>
            <h1>AI Translation Review Services</h1>
            <p className="largeCopy">
              Professional human validation for AI-generated translations. Stepes compares existing AI translations against the original source to verify accuracy, completeness, terminology, context, and real-world usability before multilingual content is published, submitted, deployed, or relied upon.
            </p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href={LINKS.contact}>
                <span>Request a Review Quote</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btnSecondary" href={LINKS.aiHuman}>
                AI + Human Translation Workflow
              </a>
            </div>
          </div>
          <HeroReviewVisual />
        </div>
      </section>

      <section className="proofBand" aria-label="AI translation review proof points">
        <div className="shell proofGrid">
          <div className="proofItem">
            <div className="proofTitle">100+ Languages</div>
            <div className="proofText">Coordinated review across global languages and locales</div>
          </div>
          <div className="proofItem">
            <div className="proofTitle">Professional Native Linguists</div>
            <div className="proofText">Human judgment for meaning, context, terminology, and audience</div>
          </div>
          <div className="proofItem">
            <div className="proofTitle">Source-to-Target Validation</div>
            <div className="proofText">Bilingual verification against the original source content</div>
          </div>
          <div className="proofItem">
            <div className="proofTitle">Any AI Platform</div>
            <div className="proofText">Independent review of translations from the systems you already use</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell splitEditorial">
          <div className="introSticky">
            <h2>When AI Translation Needs Professional Human Review</h2>
            <p className="largeCopy">
              Modern AI systems can generate remarkably fluent translations, but fluent output is not always accurate output.
            </p>
            <p>
              Errors can be surrounded by polished, convincing language, making them difficult to detect when the translation is read without the original source.
            </p>
          </div>
          <div className="editorialList">
            {[
              ["Customer-Facing & Published Content", "Use professional review when AI-translated content will be seen by customers, partners, employees, regulators, or the public and needs to represent the source reliably."],
              ["Technical & Terminology-Intensive Content", "Validate manuals, specifications, product documentation, and other specialized materials where the wrong term or subtle meaning shift can reduce usability or accuracy."],
              ["Regulated & High-Impact Content", "Apply stronger bilingual and subject-matter review where errors can create legal, financial, medical, safety, compliance, or reputational consequences."],
              ["Product, Software & Operational Content", "Review UI strings, help content, procedures, training, and operational materials where translation quality affects how people use a product, system, or process."],
              ["High-Volume Enterprise Translation", "Add a professional quality layer when employees, departments, vendors, or enterprise AI systems generate multilingual content at a scale that makes uniform manual review impractical."],
            ].map(([title, text], i) => (
              <div className="editorialRow" key={title}>
                <div className="iconBox"><Icon name={["marketing","terminology","legal","software","globe"][i]} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell splitEditorial reverse">
          <div>
            <div className="sectionHeading scan">
              <Eyebrow>Source-to-Target Validation</Eyebrow>
              <h2>What Is AI Translation Review?</h2>
              <p className="largeCopy">
                AI translation review is the professional bilingual evaluation of an existing AI-generated translation against its original source.
              </p>
              <p>
                Unlike target-language proofreading, source-to-target review determines whether the translation actually preserves the meaning, information, terminology, and intent of the original content.
              </p>
            </div>
            <div className="relatedNote">
              <p><strong>Need Stepes to create the translation as well?</strong> Use a managed AI + human workflow that begins before translation generation.</p>
              <ArrowLink href={LINKS.aiHuman}>AI Translation & Human Review</ArrowLink>
            </div>
          </div>
          <div className="editorialList">
            {reviewDimensions.map((item) => (
              <div className="editorialRow" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionDense">
        <div className="shell">
          <div className="platformPanel">
            <div>
              <Eyebrow>Platform-Agnostic Review</Eyebrow>
              <h2>Review AI Translations From Any Platform</h2>
              <p className="largeCopy">
                Keep the AI technology that already works for your organization. Stepes provides an independent multilingual quality layer around translations generated by your employees, vendors, enterprise systems, or preferred AI tools.
              </p>
            </div>
            <div className="platformCloud" aria-label="Examples of AI platforms and systems">
              {["ChatGPT / OpenAI","Google Gemini","Anthropic Claude","DeepL","Google Translate","Microsoft","Amazon Translate","Neural MT","Enterprise LLMs","Private Models","Translation Management Systems","Internal AI Solutions"].map((label, i) => (
                <span className={`platformPill ${i < 4 ? "emphasis" : ""}`} key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <div className="sectionHeading scan">
            <h2>How AI Translation Review Works</h2>
            <p className="largeCopy">
              The right review process depends on what you have already translated, how the content will be used, and the consequences of an unresolved translation error.
            </p>
          </div>
          <div className="workflowRail">
            <div className="workflowGrid">
              {workflow.map((item, i) => (
                <div className="workflowStep" key={item.title}>
                  <div className="stepNum">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="workflowResult">
            <Icon name="check" size={22} />
            <p><strong>The result is not simply a translation that sounds better.</strong> It is multilingual content that has been professionally checked against the information it was intended to communicate.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading center">
            <h2>AI Translation Review, MTPE, or AI + Human Translation?</h2>
            <p className="largeCopy">
              Similar terminology can describe very different workflows. The simplest way to choose the right service is to look at where your project begins and what outcome you need.
            </p>
          </div>
          <div className="comparisonGrid">
            {serviceModes.map((mode, i) => (
              <div className={`serviceMode ${i === 0 ? "current" : ""}`} key={mode.title}>
                <div className="modeLabel">{mode.label}</div>
                <h3>{mode.title}</h3>
                <div className="modeQuestion">{mode.question}</div>
                <p>{mode.text}</p>
                {mode.href ? <ArrowLink href={mode.href}>{mode.linkLabel}</ArrowLink> : <div className="currentLabel">For existing AI translations</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell">
          <div className="sectionHeading center">
            <Eyebrow>Fit-for-Purpose Review</Eyebrow>
            <h2>Match the Review Scope to the Content</h2>
            <p className="largeCopy">
              Not every AI-generated translation requires the same level of human review. Stepes can align review depth with audience, subject matter, visibility, quality requirements, and the potential consequences of an unresolved error.
            </p>
          </div>
          <div className="reviewLevelGrid">
            {reviewLevels.map((level) => (
              <div className="reviewLevel" key={level.title}>
                <div className="fitLabel">{level.fit}</div>
                <h3>{level.title}</h3>
                <p>{level.text}</p>
                <ul>
                  {level.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell errorLayout">
          <div>
            <div className="sectionHeading scan">
              <Eyebrow dark>Accuracy Beyond Fluency</Eyebrow>
              <h2>AI Translation Errors That Can Hide Behind Fluent Language</h2>
              <p className="largeCopy">
                One of the defining characteristics of modern AI translation is that an error does not necessarily look like an error. Professional bilingual reviewers look beyond surface fluency to verify whether the translation faithfully represents the source.
              </p>
            </div>
            <div className="errorList">
              {errorPatterns.map((item) => (
                <div className="errorRow" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <ReviewExampleVisual />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading center">
            <h2>Expert Review for Specialized and High-Impact AI Translations</h2>
            <p className="largeCopy">
              Translation expertise matters most when the content itself requires expertise. Stepes can match reviewers not only by language pair but also by subject matter, terminology requirements, audience, content type, and the practical consequences of an error.
            </p>
          </div>
          <div className="industryGrid">
            {industries.map((item) => (
              <div className="industryItem" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell enterpriseGrid">
          <div>
            <h2>An Independent Quality Layer for Enterprise AI Translation</h2>
            <p className="largeCopy">
              AI is making multilingual content generation available to more people across the enterprise. Stepes can provide a professional validation layer around the AI environment your organization already uses without requiring you to replace the underlying technology.
            </p>
            <p>
              This lets global teams scale AI translation while maintaining an independent mechanism for validating the multilingual content that matters most.
            </p>
          </div>
          <div className="enterpriseList">
            {enterpriseUses.map((item) => (
              <div className="enterpriseItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell insightPanel">
          <div>
            <div className="sectionHeading scan">
              <h2>Turn Review Findings Into Better AI Translation Quality</h2>
              <p className="largeCopy">
                A review can do more than correct one translation. When useful, Stepes can structure reviewer findings so your organization can understand recurring quality issues and improve future multilingual workflows.
              </p>
            </div>
            <div className="insightRows">
              {qualityInsights.map((item) => (
                <div className="insightRow" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="llmBridge">
            <Eyebrow>Model-Level Evaluation</Eyebrow>
            <h3>Need to benchmark models rather than validate a translation?</h3>
            <p>
              When the primary objective is to compare models, evaluate prompts or model versions, or systematically measure multilingual LLM performance, use Stepes Multilingual LLM Evaluation Services.
            </p>
            <ArrowLink href={LINKS.llmEvaluation}>Multilingual LLM Evaluation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading center">
            <h2>Choose the AI Translation Review Deliverables You Need</h2>
            <p className="largeCopy">
              Some organizations simply need a professionally corrected translation. Others need visibility into what changed, documented quality findings, or terminology feedback that can improve future AI translation.
            </p>
          </div>
          <div className="deliverableGrid">
            {deliverables.map((item) => (
              <div className="deliverableItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <div className="sectionHeading center">
            <h2>Review AI Translations Across Your Content Ecosystem</h2>
            <p className="largeCopy">
              AI-generated translation is no longer limited to conventional documents. Stepes supports review workflows designed around the context in which multilingual content will ultimately be used.
            </p>
          </div>
          <div className="formatGrid">
            {contentFormats.map((item) => (
              <div className="formatItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionDense">
        <div className="shell">
          <div className="languageBand">
            <div>
              <h2>Scale AI Translation Review Across 100+ Languages</h2>
              <p>
                AI translation performance can vary by language, locale, subject matter, content type, and use case. Stepes helps global organizations apply a coordinated review framework while maintaining native-language and market expertise for each target locale.
              </p>
              <ArrowLink href={LINKS.languages}>Translation Languages</ArrowLink>
            </div>
            <div className="languageBullets">
              {["Major international business languages","Regional language variants","European and Asian languages","Middle Eastern and African languages","Specialized language and domain combinations","Multi-country translation programs","Ongoing enterprise AI review workflows","Shared quality criteria with market-level expertise"].map((item) => (
                <div className="languageBullet" key={item}><Icon name="check" size={18} /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading scan">
            <h2>Common AI Translation Review Scenarios</h2>
            <p className="largeCopy">
              AI translation review is particularly useful when multilingual content already exists but your organization needs greater confidence before deciding what happens next.
            </p>
          </div>
          <div className="scenarioRows">
            {scenarios.map((item) => (
              <div className="scenarioRow" key={item.quote}>
                <div className="scenarioQuote">“{item.quote}”</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <div className="sectionHeading center">
            <h2>Why Choose Stepes for AI Translation Review?</h2>
            <p className="largeCopy">
              AI translation quality requires more than another automated check. Stepes combines professional language expertise, subject-matter knowledge, structured quality workflows, and global scale to independently validate AI-generated translations.
            </p>
          </div>
          <div className="whyGrid">
            {whyStepes.map((item) => (
              <div className="whyItem" key={item.title}>
                <div className="whyIcon"><Icon name={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="qualityLink">
            <ArrowLink href={LINKS.qualityAssurance}>Translation Quality Assurance</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="securityPanel">
            <div className="securityLead">
              <div className="securityIcon"><Icon name="lock" size={24} /></div>
              <h2>Secure Review for Confidential and Business-Critical Content</h2>
              <p className="largeCopy">
                AI-translated materials can contain confidential, proprietary, regulated, or otherwise sensitive business information. Stepes review workflows can be configured around the access, reviewer qualification, terminology, handling, and approval requirements of the engagement.
              </p>
              <ArrowLink href={LINKS.security}>Security & Compliance</ArrowLink>
            </div>
            <div className="securityList">
              {securityItems.map((item) => (
                <div className="securityListItem" key={item}><Icon name="check" size={18} /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <div className="sectionHeading scan">
            <h2>Related AI Translation & Quality Services</h2>
            <p className="largeCopy">
              Choose the service that matches where your content begins: translation generation, production editing, translation validation, broader AI content review, or model-level evaluation.
            </p>
          </div>
          <div className="relatedRows">
            {relatedServices.map((item) => (
              <div className="relatedService" key={item.title}>
                <div className="relatedTag">{item.tag}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowLink href={item.href}>{item.link}</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faqLayout">
          <div className="faqIntro">
            <h2>AI Translation Review FAQs</h2>
            <p>
              Common questions about source-to-target validation, human review, review scope, deliverables, AI platforms, and multilingual quality.
            </p>
          </div>
          <div className="faqPanel">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <div className="faqAnswer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalSection">
        <div className="shell finalGrid">
          <div className="finalCopy">
            <Eyebrow dark>Professional Human Validation</Eyebrow>
            <h2>Validate Your AI Translations With Professional Human Expertise</h2>
            <p className="largeCopy">
              Already using AI to generate multilingual content? Stepes adds the bilingual expertise needed to verify source accuracy, identify hidden translation problems, correct critical issues, and prepare multilingual content for confident real-world use.
            </p>
          </div>
          <div className="finalActions">
            <a className="btn btnPrimary" href={LINKS.contact}>
              <span>Request a Review Quote</span>
              <Icon name="arrow" size={18} />
            </a>
            <a className="finalTextLink" href={LINKS.aiTranslation}>Explore AI Translation Services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
