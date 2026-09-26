import React, { useRef, useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushAccent: "#F2A7C6",
  ink: "#17171A",
  charcoal: "#25252A",
  muted: "#66666E",
  line: "#E6E5E8",
  soft: "#F7F7F8",
  white: "#FFFFFF",
};

const links = {
  page: "https://www.stepes.com/online-translation-services/",
  quote: "https://www.stepes.com/online-translation-services/#quote",
  how: "https://www.stepes.com/online-translation-services/#how-it-works",
  workflow: "https://www.stepes.com/online-translation-services/#translation-workflows",
  pricing: "https://www.stepes.com/online-translation-services/#pricing",
  costGuide: "https://www.stepes.com/resources/translation-cost-guide/",
  document: "https://www.stepes.com/document-translation-services/",
  pdf: "https://www.stepes.com/pdf-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  contact: "https://www.stepes.com/contact-sales/",
  fast: "https://www.stepes.com/fast-translation-services/",
  powerpoint: "https://www.stepes.com/powerpoint-translation-services/",
  excel: "https://www.stepes.com/excel-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  hr: "https://www.stepes.com/human-resource-translation-services/",
};

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 23 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    upload: <><path d="M12 16V5" {...common}/><path d="M8 9l4-4 4 4" {...common}/><path d="M5 15v4h14v-4" {...common}/></>,
    language: <><circle cx="12" cy="12" r="8" {...common}/><path d="M4.5 12h15M12 4c2.2 2.2 3.4 4.9 3.4 8S14.2 17.8 12 20M12 4C9.8 6.2 8.6 8.9 8.6 12S9.8 17.8 12 20" {...common}/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" {...common}/><path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" {...common}/></>,
    review: <><rect x="2.5" y="5" width="8" height="8" rx="2" {...common}/><path d="M6.5 3v2M6.5 13v2M.5 9h2M10.5 9h2" {...common}/><path d="M11.8 10h2.4M13 8.8v2.4" {...common}/><circle cx="18" cy="7.5" r="2.4" {...common}/><path d="M13.8 19c.5-3.3 2-5 4.2-5s3.7 1.7 4.2 5" {...common}/></>,
    human: <><circle cx="12" cy="8" r="3" {...common}/><path d="M5.5 20c.8-4 3-6 6.5-6s5.7 2 6.5 6" {...common}/></>,
    pdf: <><path d="M6 3h8l4 4v14H6z" {...common}/><path d="M14 3v5h5" {...common}/><path d="M8.5 15h7M8.5 18h5" {...common}/></>,
    word: <><rect x="4" y="4" width="16" height="16" rx="2" {...common}/><path d="M7.5 8l2 8 2.5-6 2.5 6 2-8" {...common}/></>,
    ppt: <><rect x="4" y="4" width="16" height="16" rx="2" {...common}/><path d="M8 16V8h4.2a2.7 2.7 0 010 5.4H8M16 8v8" {...common}/></>,
    sheet: <><rect x="4" y="4" width="16" height="16" rx="2" {...common}/><path d="M8 8l8 8M16 8l-8 8" {...common}/></>,
    design: <><path d="M4 17l7-12 3 5 2-1 4 8H4z" {...common}/><circle cx="16.5" cy="6.5" r="1.5" {...common}/></>,
    code: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" {...common}/></>,
    legal: <><path d="M12 4v16M6 7h12M8 7l-3 6h6L8 7zM16 7l-3 6h6l-3-6z" {...common}/></>,
    medical: <><rect x="5" y="5" width="14" height="14" rx="4" {...common}/><path d="M12 8v8M8 12h8" {...common}/></>,
    technical: <><path d="M8 6l8 12M16 6L8 18M5 12h14" {...common}/><circle cx="12" cy="12" r="8" {...common}/></>,
    finance: <><path d="M5 19V9M10 19V5M15 19v-7M20 19V8" {...common}/><path d="M4 19h17" {...common}/></>,
    marketing: <><path d="M5 14l11-5v10L5 14zM5 14v5M16 11l3-2v10l-3-2" {...common}/></>,
    hr: <><circle cx="9" cy="9" r="3" {...common}/><circle cx="17" cy="10" r="2.2" {...common}/><path d="M4 20c.7-4 2.7-6 5-6s4.3 2 5 6M14 15c2.6.2 4.3 1.8 5 5" {...common}/></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="3" {...common}/><path d="M9 9h6M9 12h6M9 15h4" {...common}/></>,
    terms: <><path d="M5 5h10a3 3 0 013 3v11H8a3 3 0 01-3-3V5z" {...common}/><path d="M8 8h7M8 11h5" {...common}/></>,
    qa: <><path d="M12 3l7 3v5c0 4.6-2.8 8.1-7 10-4.2-1.9-7-5.4-7-10V6l7-3z" {...common}/><path d="M8.5 12l2.2 2.2 4.8-5" {...common}/></>,
    secure: <><rect x="6" y="10" width="12" height="10" rx="2" {...common}/><path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" {...common}/></>,
    scale: <><path d="M5 18V9M12 18V5M19 18v-6" {...common}/><path d="M3 20h18" {...common}/></>,
    speed: <><circle cx="12" cy="12" r="8" {...common}/><path d="M12 8v4l3 2" {...common}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[name] || paths.qa}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function SectionHead({ eyebrow, title, intro, dark = false, align = "center", id }) {
  return (
    <div className={`section-head ${align === "left" ? "section-head-left" : "section-head-center"}`} id={id}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`text-link ${dark ? "text-link-dark" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

const workflowSteps = [
  ["Upload Your Files", "Submit one file or multiple documents through a secure online workflow."],
  ["Choose Your Languages", "Confirm the source language and select one or more target languages for the same project."],
  ["Select Your Workflow", "Choose AI translation, AI plus professional review, or professional human translation."],
  ["Review Pricing & Timing", "Review project requirements, pricing, and delivery timing, then confirm your order online."],
  ["Receive Your Translation", "Stepes manages translation, quality checks, formatting, and organized online delivery."],
];

const translationModels = [
  {
    icon: "ai",
    title: "AI Translation",
    kicker: "Speed and scale",
    text: "A rapid, economical option for suitable high-volume or lower-risk content where professional human validation is not required.",
    bullets: ["High-volume content", "Internal or informational material", "Time-sensitive translation at scale"],
  },
  {
    icon: "review",
    title: "AI + Professional Human Review",
    kicker: "Efficiency with linguistic judgment",
    text: "AI acceleration combined with professional linguist review for meaning, terminology, grammar, fluency, tone, and context.",
    bullets: ["Business communications", "Product and technical content", "Recurring multilingual content"],
    featured: true,
  },
  {
    icon: "human",
    title: "Professional Human Translation",
    kicker: "Expert-led quality",
    text: "Qualified linguists matched to the language pair, subject matter, content type, and intended audience for high-impact or specialized content.",
    bullets: ["Legal and regulated documents", "Customer-facing content", "Technical, financial, and medical materials"],
  },
];

const fileTypes = [
  ["pdf", "PDF Translation", "Reports, manuals, brochures, forms, contracts, and product literature with multilingual formatting support where needed.", links.pdf, "PDF Translation Services"],
  ["word", "Microsoft Word", "Policies, agreements, reports, procedures, proposals, manuals, and other editable business documents.", links.document, "Document Translation Services"],
  ["ppt", "PowerPoint", "Sales presentations, training decks, executive communications, product presentations, and investor materials.", links.powerpoint, "PowerPoint Translation Services"],
  ["sheet", "Excel", "Product information, catalogs, tables, structured business content, terminology, and multilingual data fields.", links.excel, "Excel Translation Services"],
  ["design", "Adobe & Design Files", "Brochures, publications, marketing collateral, and professionally designed content that requires multilingual production.", links.dtp, "Multilingual Desktop Publishing"],
  ["code", "Web & Localization Files", "HTML, XML, JSON, XLIFF, resource files, and structured content for websites, software, and digital experiences.", links.website, "Website Translation Services"],
];

const expertise = [
  ["legal", "Legal Translation", "Contracts, agreements, policies, compliance documentation, litigation materials, and corporate legal communications.", links.legal, "Legal Translation Services"],
  ["medical", "Medical & Life Sciences", "Healthcare, pharmaceutical, clinical, medical device, scientific, and patient-facing content.", links.medical, "Medical Translation Services"],
  ["technical", "Technical Translation", "Manuals, specifications, engineering documents, product documentation, instructions, and technical training.", links.technical, "Technical Translation Services"],
  ["finance", "Financial Translation", "Reports, disclosures, insurance content, banking materials, investor communications, and finance documentation.", links.financial, "Financial Translation Services"],
  ["marketing", "Marketing Translation", "Websites, campaigns, product messaging, sales collateral, brand communications, and promotional content.", links.marketing, "Marketing Translation Services"],
  ["hr", "Corporate & HR Translation", "Policies, training, onboarding content, employee communications, benefits information, and corporate documentation.", links.hr, "HR Translation Services"],
];

const pricingFactors = [
  ["Language Pair", "Rates vary by source and target language, resource availability, and specialization."],
  ["Word Count", "The amount of translatable content remains one of the primary pricing factors."],
  ["Translation Workflow", "AI, human review, and professional human translation require different levels of linguistic work."],
  ["Subject Matter", "Specialized legal, medical, technical, scientific, or financial content may require domain expertise."],
  ["Translation Memory", "Previously approved translations can reduce unnecessary retranslation and improve consistency."],
  ["Formatting & Turnaround", "Complex production or accelerated delivery can change project effort and scheduling."],
];

const consistencyItems = [
  ["memory", "Translation Memory", "Reuse approved sentence-level translations when the same or similar content appears again, helping reduce unnecessary retranslation and improve consistency."],
  ["terms", "Terminology Management", "Define approved product names, technical terms, legal expressions, and company-specific language for consistent multilingual use."],
  ["review", "Professional Linguistic Review", "Add contextual human judgment for meaning, terminology, grammar, fluency, style, completeness, and target-market suitability."],
  ["qa", "Quality Assurance", "Use structured linguistic and technical checks to identify inconsistencies, omissions, formatting issues, and terminology errors before delivery."],
];

const faqItems = [
  ["What are online translation services?", "Online translation services let you submit content, select languages, provide project requirements, obtain pricing, manage translation, and receive completed files through a digital workflow. Professional online translation adds capabilities such as qualified linguists, human review, subject-matter expertise, terminology management, translation memory, quality assurance, and file formatting."],
  ["How do I order professional translation online?", "Upload your source files, select your languages, and provide information about the content, quality level, deadline, and any other project requirements. Stepes then uses these details to determine the appropriate workflow, pricing, and schedule before managing translation through delivery."],
  ["Can I get an instant translation quote?", "Stepes provides an online quote workflow designed to make pricing faster and easier to obtain. Upload your files and specify your language and project requirements so the content can be analyzed. Projects with unusual formats, specialized content, or complex production requirements may need additional review before final pricing is confirmed."],
  ["Do I need to create an account before getting a quote?", "You can begin the online quote process by submitting your files and project requirements without going through a lengthy account setup first. Project and account information can then be established as needed for order management and delivery."],
  ["How much does online translation cost?", "Pricing depends on the source and target languages, word count, translation workflow, subject matter, file format, formatting requirements, translation memory leverage, and turnaround. Submitting the actual source files provides a more accurate basis than estimating from page count alone."],
  ["What file formats can Stepes translate?", "Stepes supports a broad range of common business and localization formats, including PDF, Microsoft Word, PowerPoint, Excel, Adobe files, web and structured content, and localization files. Less common formats can be submitted for workflow review."],
  ["Can Stepes translate a PDF and preserve the formatting?", "Yes. Stepes supports professional PDF translation for reports, brochures, manuals, contracts, forms, and product documentation. Editable source files provide the greatest flexibility, while scanned, image-based, or highly designed PDFs may require additional file preparation or multilingual desktop publishing."],
  ["Can I translate one document into multiple languages?", "Yes. A single source document can be translated into multiple target languages within the same multilingual project, helping coordinate terminology, schedules, quality requirements, and delivery across markets."],
  ["Can I choose between AI and human translation?", "Yes. Stepes supports AI translation for suitable lower-risk requirements, AI-assisted translation with professional human review, and professional human translation for specialized and high-impact content. The appropriate model depends on subject matter, audience, risk, quality expectations, volume, budget, and deadline."],
  ["How fast can Stepes complete an online translation?", "Turnaround depends on content volume, language pair, subject matter, file type, required quality level, formatting complexity, and number of target languages. Both normal and accelerated workflows are available for suitable projects."],
  ["Does Stepes offer rush or same-day translation?", "Rush translation may be available for qualifying projects. Same-day or accelerated delivery depends on project size, language, subject matter, file preparation, review level, and qualified resource availability."],
  ["Are my uploaded translation files confidential?", "Stepes supports professional and enterprise translation projects where confidentiality and controlled handling of business content are important. Organizations with specific confidentiality, vendor security, procurement, or compliance requirements can discuss those requirements before starting a project."],
  ["Does Stepes use translation memory?", "Yes. Translation memory stores previously translated sentence segments and their approved target-language equivalents so repeated or similar content can be identified in future projects. This can improve consistency and reduce unnecessary retranslation for recurring content."],
  ["How does Stepes maintain terminology consistency?", "Stepes can use terminology glossaries and translation memory to help maintain approved product names, technical terms, legal expressions, corporate terminology, and other language that needs to remain consistent across documents and projects."],
  ["What happens if I need changes after delivery?", "If you identify a translation issue or need clarification after delivery, share the relevant file, passage, and requested change with the Stepes project team. The team can review the feedback, determine the appropriate update, and incorporate approved terminology or translation changes into future work where applicable."],
  ["Can Stepes support recurring online translation projects?", "Yes. Stepes supports both one-time orders and ongoing multilingual programs. Organizations can build on previous projects with translation memory, terminology resources, workflow preferences, and professional language resources that improve consistency over time."],
];

function QuoteMockup({ compact = false }) {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [handoffReady, setHandoffReady] = useState(false);

  const formatSize = (bytes) => {
    if (!bytes && bytes !== 0) return "";
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(bytes < 10 * 1024 * 1024 ? 1 : 0)} MB`;
  };

  const fileExtension = (name = "") => {
    const parts = name.split(".");
    return parts.length > 1 ? parts.pop().toUpperCase().slice(0, 5) : "FILE";
  };

  const mergeFiles = (incoming) => {
    const next = Array.from(incoming || []);
    if (!next.length) return;
    setFiles((current) => {
      const seen = new Set(current.map((file) => `${file.name}-${file.size}-${file.lastModified}`));
      const merged = [...current];
      next.forEach((file) => {
        const key = `${file.name}-${file.size}-${file.lastModified}`;
        if (!seen.has(key)) {
          seen.add(key);
          merged.push(file);
        }
      });
      return merged;
    });
    setHandoffReady(false);
  };

  const removeFile = (index) => {
    setFiles((current) => current.filter((_, i) => i !== index));
    setHandoffReady(false);
  };

  const openPicker = () => inputRef.current?.click();

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    mergeFiles(event.dataTransfer.files);
  };

  const handleContinue = () => {
    if (!files.length) {
      openPicker();
      return;
    }
    // Production implementation: persist the selected files to a temporary secure
    // quote session, then hand that session into the Stepes pricing workflow so
    // the customer never has to upload the same files twice.
    setHandoffReady(true);
  };

  if (compact) {
    const hasFiles = files.length > 0;
    return (
      <div className="quote-mockup quote-mockup-compact quote-uploader">
        <input
          ref={inputRef}
          className="visually-hidden-file"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.xml,.xlf,.xliff,.rtf,.txt,.html,.htm"
          onChange={(event) => {
            mergeFiles(event.target.files);
            event.target.value = "";
          }}
        />
        <div className="quote-title-row">
          <div>
            <div className="ui-kicker">GET AN INSTANT TRANSLATION QUOTE</div>
            <div className="quote-title">Start with your files</div>
          </div>
          <div className="secure-chip"><Icon name="secure" size={17}/> Secure</div>
        </div>

        {!hasFiles ? (
          <button
            type="button"
            className={`drop-zone drop-zone-button ${dragActive ? "is-dragging" : ""}`}
            onClick={openPicker}
            onDragEnter={(event) => { event.preventDefault(); setDragActive(true); }}
            onDragOver={(event) => { event.preventDefault(); setDragActive(true); }}
            onDragLeave={(event) => { event.preventDefault(); setDragActive(false); }}
            onDrop={handleDrop}
          >
            <div className="drop-icon"><Icon name="upload" size={25}/></div>
            <div className="drop-zone-copy">
              <strong className="drop-desktop-copy">Drag & drop files here</strong>
              <strong className="drop-mobile-copy">Choose files to translate</strong>
              <span>or click to browse</span>
              <span className="file-format-hint">PDF · DOCX · PPTX · XLSX · XML · More</span>
            </div>
          </button>
        ) : (
          <div className="selected-files" aria-live="polite">
            {files.map((file, index) => (
              <div className="selected-file-row" key={`${file.name}-${file.size}-${file.lastModified}-${index}`}>
                <div className="selected-file-type" aria-hidden="true">{fileExtension(file.name)}</div>
                <div className="selected-file-copy">
                  <strong>{file.name}</strong>
                  <span>{formatSize(file.size)} · Ready</span>
                </div>
                <button
                  type="button"
                  className="remove-file"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                >
                  ×
                </button>
              </div>
            ))}
            <button type="button" className="add-files" onClick={openPicker}>
              <span aria-hidden="true">+</span> Add more files
            </button>
          </div>
        )}

        <button type="button" className="btn btn-primary btn-block" onClick={handleContinue}>
          {hasFiles ? <>Continue to Pricing <ArrowIcon /></> : <>Choose Files</>}
        </button>

        {handoffReady ? (
          <div className="quote-handoff" role="status">
            <strong>Files ready</strong>
            <span>Your files will continue with you into the secure pricing workflow.</span>
          </div>
        ) : (
          <div className="quote-note">No account required to begin your quote</div>
        )}
      </div>
    );
  }

  return (
    <div className="quote-mockup quote-preview" aria-label="Example of the Stepes online quote experience">
      <div className="quote-title-row">
        <div>
          <div className="ui-kicker">ONLINE QUOTE EXPERIENCE</div>
          <div className="quote-title">Start with your files</div>
        </div>
        <div className="secure-chip"><Icon name="secure" size={17}/> Secure</div>
      </div>
      <div className="drop-zone quote-preview-upload" aria-hidden="true">
        <div className="drop-icon"><Icon name="upload" size={25}/></div>
        <div>
          <strong>Upload your files</strong>
          <span>PDF · DOCX · PPTX · XLSX · XML · More</span>
        </div>
      </div>
      <div className="example-project-label">Example project</div>
      <div className="file-chip-row">
        <div className="file-chip-icon"><Icon name="pdf" size={20}/></div>
        <div className="file-chip-copy">
          <strong>Annual_Report_2026.pdf</strong>
          <span>12,480 words</span>
        </div>
        <span className="file-ready">Ready</span>
      </div>
      <div className="quote-fields">
        <div className="mock-field"><span>From</span><strong>English</strong></div>
        <div className="mock-field"><span>To</span><strong>Japanese</strong></div>
      </div>
      <div className="mock-field mock-field-wide"><span>Translation workflow</span><strong>Professional Human Translation</strong></div>
      <div className="quote-meta-row">
        <span>Estimated turnaround</span>
        <strong>2 business days</strong>
      </div>
      <a className="btn btn-primary btn-block" href={links.quote}>Upload Files & See Pricing <ArrowIcon /></a>
      <div className="quote-note">No account required to begin your quote</div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-panel">
      {faqItems.map(([q, a], i) => {
        const expanded = open === i;
        return (
          <div className="faq-item" key={q}>
            <button
              className="faq-button"
              onClick={() => setOpen(expanded ? -1 : i)}
              aria-expanded={expanded}
              aria-controls={`faq-panel-${i}`}
            >
              <span>{q}</span>
              <span className="faq-plus" aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <div id={`faq-panel-${i}`} className={`faq-answer ${expanded ? "is-open" : ""}`}>
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StepesOnlineTranslationServices60() {
  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --blush-accent: ${COLORS.blushAccent};
          --ink: ${COLORS.ink};
          --charcoal: ${COLORS.charcoal};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --soft: ${COLORS.soft};
          --white: ${COLORS.white};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .stepes-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--ink);
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
        }
        .stepes-page a { color: inherit; text-decoration: none; }
        .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        .soft-section { background: var(--soft); }
        .blush-section { background: var(--blush); }
        .dark-section { background: #202025; color: #fff; }
        h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: inherit; }
        h1 { font-size: 48px; line-height: 1.08; }
        h2 { font-size: 36px; line-height: 1.16; }
        h3 { font-size: 24px; line-height: 1.25; }
        p { margin: 0; color: var(--muted); }
        .dark-section p { color: #CFCFD4; }
        .eyebrow {
          display: block;
          margin-bottom: 14px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .13em;
          text-transform: uppercase;
        }
        .eyebrow-dark { color: var(--blush-accent); }
        .section-head { margin-bottom: 48px; }
        .section-head-center { max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
        .section-head-left { max-width: 780px; text-align: left; }
        .section-head p { margin-top: 18px; font-size: 18px; line-height: 1.62; }
        .section-head-center p { margin-left: auto; margin-right: auto; }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-weight: 600;
          line-height: 1.2;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn-primary,
        .btn-primary:visited,
        .btn-primary span,
        .btn-primary svg { color: #fff !important; stroke: currentColor; }
        .btn-primary { background: var(--magenta); box-shadow: 0 8px 24px rgba(193,29,99,.16); }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .btn-primary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
        .btn-secondary { background: #fff; color: var(--ink); border-color: #D8D7DB; }
        .btn-secondary:hover { border-color: #BEBCC2; transform: translateY(-1px); }
        .btn-block { width: 100%; }
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-weight: 600;
          line-height: 1.25;
        }
        .text-link svg { transition: transform .18s ease; }
        .text-link:hover svg { transform: translateX(3px); }
        .text-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .text-link-dark { color: var(--blush-accent) !important; }
        .hero {
          position: relative;
          background: #FFFFFF;
          padding: 104px 0 96px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(430px, .82fr);
          gap: 72px;
          align-items: center;
        }
        .hero-copy { max-width: 690px; }
        .hero-copy h1 { max-width: 670px; }
        .hero-copy .lead {
          margin-top: 24px;
          max-width: 650px;
          font-size: 18px;
          line-height: 1.65;
          color: #54545B;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .hero-trust { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-top: 28px; }
        .hero-trust span { display: inline-flex; align-items: center; gap: 7px; color: #54545B; font-size: 14px; }
        .hero-trust span:before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }
        .quote-mockup {
          position: relative;
          z-index: 2;
          background: #fff;
          border: 1px solid #DEDEE2;
          border-radius: 30px;
          padding: 28px;
          box-shadow: 0 22px 58px rgba(31,31,36,.10);
        }
        .quote-title-row { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; margin-bottom: 22px; }
        .ui-kicker { color: var(--magenta); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .11em; }
        .quote-title { margin-top: 7px; font-size: 24px; line-height: 1.25; font-weight: 600; letter-spacing: -.02em; }
        .secure-chip { display: inline-flex; align-items: center; gap: 5px; padding: 7px 10px; border-radius: 999px; background: #F5F5F6; color: #55555D; font-size: 14px; line-height: 1; white-space: nowrap; }
        .drop-zone { display: flex; gap: 14px; align-items: center; border: 1px dashed #C7C5CB; border-radius: 20px; padding: 19px; background: #FAFAFB; }
        .drop-icon { width: 44px; height: 44px; flex: 0 0 44px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta); }
        .drop-zone strong { display: block; font-size: 16px; font-weight: 600; line-height: 1.3; }
        .drop-zone span { display: block; margin-top: 4px; color: #777780; font-size: 14px; line-height: 1.35; }
        .quote-preview .quote-preview-upload { cursor: default; }
        .example-project-label { margin: 15px 2px -4px; color: #777780; font-size: 14px; line-height: 1.4; font-weight: 600; }
        .file-chip-row { display: flex; gap: 12px; align-items: center; margin-top: 14px; padding: 13px 14px; border: 1px solid var(--line); border-radius: 16px; }
        .file-chip-icon { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 11px; background: var(--blush); color: var(--magenta); }
        .file-chip-copy { flex: 1; min-width: 0; }
        .file-chip-copy strong, .file-chip-copy span { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .file-chip-copy strong { font-size: 15px; font-weight: 600; }
        .file-chip-copy span { color: #777780; font-size: 14px; }
        .file-ready { color: #66666E; font-size: 14px; }
        .quote-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
        .mock-field { padding: 13px 14px; border: 1px solid var(--line); border-radius: 14px; }
        .mock-field span, .mock-field strong { display: block; }
        .mock-field span { color: #777780; font-size: 14px; line-height: 1.2; }
        .mock-field strong { margin-top: 5px; font-size: 16px; font-weight: 600; line-height: 1.3; }
        .mock-field-wide { margin-top: 12px; }
        .quote-meta-row { display: flex; justify-content: space-between; gap: 15px; margin: 15px 0; padding: 14px 0 0; border-top: 1px solid var(--line); font-size: 14px; }
        .quote-meta-row span { color: #777780; }
        .quote-meta-row strong { font-weight: 600; }
        .quote-note { margin-top: 10px; text-align: center; color: #777780; font-size: 14px; }
        .visually-hidden-file { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
        .drop-zone-button { width: 100%; text-align: left; cursor: pointer; font: inherit; color: inherit; transition: border-color .18s ease, background .18s ease, box-shadow .18s ease; }
        .drop-zone-button:hover, .drop-zone-button:focus-visible { border-color: var(--magenta); background: #FFFDFE; outline: none; box-shadow: 0 0 0 3px rgba(193,29,99,.08); }
        .drop-zone-button.is-dragging { border-color: var(--magenta); background: var(--blush); box-shadow: inset 0 0 0 1px rgba(193,29,99,.10); }
        .drop-zone-copy { min-width: 0; }
        .drop-mobile-copy { display: none !important; }
        .file-format-hint { margin-top: 6px !important; }
        .selected-files { margin-bottom: 16px; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: #fff; }
        .selected-file-row { display: grid; grid-template-columns: 48px minmax(0,1fr) 44px; gap: 12px; align-items: center; padding: 13px 12px 13px 14px; border-bottom: 1px solid var(--line); }
        .selected-file-type { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 12px; background: var(--blush); color: var(--magenta); font-size: 11px; line-height: 1; font-weight: 600; letter-spacing: .04em; }
        .selected-file-copy { min-width: 0; }
        .selected-file-copy strong, .selected-file-copy span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .selected-file-copy strong { font-size: 16px; line-height: 1.35; font-weight: 600; }
        .selected-file-copy span { margin-top: 3px; color: #777780; font-size: 14px; line-height: 1.3; }
        .remove-file { width: 44px; height: 44px; display: grid; place-items: center; border: 0; border-radius: 50%; background: transparent; color: #66666E; font-size: 24px; line-height: 1; cursor: pointer; }
        .remove-file:hover, .remove-file:focus-visible { background: #F5F5F6; color: var(--ink); outline: none; }
        .add-files { min-height: 44px; display: inline-flex; align-items: center; gap: 8px; margin: 5px 10px 7px; padding: 7px 8px; border: 0; background: transparent; color: var(--magenta); font-size: 16px; font-weight: 600; cursor: pointer; }
        .add-files:hover, .add-files:focus-visible { text-decoration: underline; text-underline-offset: 3px; outline: none; }
        .add-files span { font-size: 20px; line-height: 1; }
        .quote-uploader .btn { margin-top: 16px; }
        .quote-handoff { margin-top: 12px; padding: 12px 14px; border-radius: 14px; background: #F7F7F8; text-align: center; }
        .quote-handoff strong, .quote-handoff span { display: block; }
        .quote-handoff strong { font-size: 16px; font-weight: 600; }
        .quote-handoff span { margin-top: 3px; color: #66666E; font-size: 14px; line-height: 1.4; }
        .proof-band { background: #FAFAFB; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .proof-item { padding: 27px 26px; border-left: 1px solid var(--line); }
        .proof-item:first-child { border-left: 0; }
        .proof-item strong { display: block; font-size: 17px; line-height: 1.25; font-weight: 600; }
        .proof-item span { display: block; margin-top: 5px; color: #777780; font-size: 14px; line-height: 1.4; }
        .overview-grid { display: grid; grid-template-columns: .76fr 1.24fr; gap: 90px; align-items: start; }
        .overview-copy p { font-size: 17px; line-height: 1.75; margin-bottom: 20px; }
        .overview-copy p:last-of-type { margin-bottom: 10px; }
        .workflow-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); border-top: 1px solid #3B3B42; border-bottom: 1px solid #3B3B42; }
        .workflow-step { position: relative; padding: 30px 25px 34px; border-left: 1px solid #3B3B42; }
        .workflow-step:first-child { border-left: 0; }
        .workflow-number { color: var(--blush-accent); font-size: 14px; font-weight: 600; letter-spacing: .08em; }
        .workflow-step h3 { margin-top: 18px; font-size: 20px; }
        .workflow-step p { margin-top: 12px; font-size: 16px; line-height: 1.62; }
        .workflow-action { margin-top: 30px; text-align: center; }
        .translation-model-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; align-items: stretch; }
        .model-card { position: relative; border: 1px solid var(--line); border-radius: 26px; padding: 30px; background: #fff; }
        .model-card.featured { background: var(--blush); border-color: #EBC7D7; }
        .model-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; background: #F3F3F5; color: #44444B; }
        .model-card.featured .model-icon { background: #fff; color: var(--magenta); }
        .model-kicker { margin-top: 22px; color: var(--magenta); font-size: 14px; line-height: 1.3; font-weight: 600; }
        .model-card h3 { margin-top: 6px; }
        .model-card > p { margin-top: 15px; font-size: 16px; line-height: 1.68; }
        .model-list { margin: 22px 0 0; padding: 18px 0 0; list-style: none; border-top: 1px solid var(--line); }
        .model-list li { display: flex; gap: 10px; align-items: flex-start; margin-top: 9px; font-size: 16px; line-height: 1.45; color: #4F4F56; }
        .model-list li:first-child { margin-top: 0; }
        .model-list li:before { content: ""; width: 6px; height: 6px; flex: 0 0 6px; margin-top: .56em; border-radius: 50%; background: var(--magenta); }
        .model-footer { margin-top: 28px; text-align: center; }
        .model-footer p { max-width: 780px; margin: 0 auto 12px; font-size: 16px; line-height: 1.65; }
        .file-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 74px; align-items: start; }
        .file-intro { position: sticky; top: 24px; }
        .file-intro p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .file-list { border-top: 1px solid var(--line); }
        .file-row { display: grid; grid-template-columns: 54px 1fr auto; gap: 18px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .icon-box { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta); }
        .file-row h3 { font-size: 20px; }
        .file-row p { margin-top: 7px; max-width: 650px; font-size: 16px; line-height: 1.62; }
        .document-panel { display: grid; grid-template-columns: 1.02fr .98fr; border: 1px solid var(--line); border-radius: 30px; overflow: hidden; }
        .document-copy { padding: 48px; }
        .document-copy p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .document-copy .text-link { margin-top: 18px; }
        .document-visual { display: grid; place-items: center; min-height: 400px; padding: 42px 38px; background: #25252A; }
        .doc-stack { position: relative; width: 100%; max-width: 430px; padding: 4px 0 8px; }
        .doc-card { position: relative; z-index: 2; background: #fff; border-radius: 18px; padding: 18px 20px; box-shadow: 0 14px 34px rgba(0,0,0,.14); }
        .doc-source { width: calc(100% - 34px); padding: 22px 22px 20px; border: 1px solid rgba(193,29,99,.16); box-shadow: 0 18px 42px rgba(0,0,0,.18); }
        .doc-target { width: calc(100% - 38px); }
        .doc-target-one { margin-top: 18px; margin-left: 28px; }
        .doc-target-two { margin-top: -8px; margin-left: 50px; }
        .doc-card-top { display: flex; align-items: center; gap: 10px; }
        .doc-dot { width: 9px; height: 9px; flex: 0 0 9px; border-radius: 50%; background: var(--magenta); }
        .doc-card strong { font-size: 16px; line-height: 1.35; font-weight: 600; }
        .doc-lines { margin-top: 14px; }
        .doc-lines span { display: block; height: 7px; margin-top: 7px; border-radius: 99px; background: #ECECEF; }
        .doc-lines span:first-child { margin-top: 0; }
        .doc-flow { position: absolute; z-index: 1; inset: 68px auto 56px 11px; width: 52px; pointer-events: none; }
        .doc-flow::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: rgba(242,167,198,.72); }
        .doc-flow-branch { position: absolute; left: 0; width: 42px; height: 2px; background: rgba(242,167,198,.72); }
        .doc-flow-branch::after { content: ""; position: absolute; right: -2px; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #F2A7C6; }
        .doc-flow-branch.one { top: 51%; }
        .doc-flow-branch.two { top: calc(100% - 2px); }
        .expertise-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; border-top: 1px solid var(--line); }
        .expertise-row { display: grid; grid-template-columns: 46px 1fr; gap: 17px; padding: 29px 0; border-bottom: 1px solid var(--line); }
        .expertise-row h3 { font-size: 20px; }
        .expertise-row p { margin-top: 7px; font-size: 16px; line-height: 1.62; }
        .expertise-row .text-link { margin-top: 7px; }
        .pricing-grid { display: grid; grid-template-columns: .74fr 1.26fr; gap: 70px; align-items: start; }
        .pricing-copy p { margin-top: 19px; font-size: 17px; line-height: 1.72; }
        .pricing-copy .btn { margin-top: 26px; }
        .pricing-copy .text-link { margin-top: 12px; }
        .pricing-factors { border-top: 1px solid #3B3B42; }
        .pricing-row { display: grid; grid-template-columns: 180px 1fr; gap: 28px; padding: 22px 0; border-bottom: 1px solid #3B3B42; }
        .pricing-row strong { font-size: 16px; font-weight: 600; }
        .pricing-row p { font-size: 16px; line-height: 1.58; }
        .turnaround-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
        .turnaround-col { padding: 32px; border-left: 1px solid var(--line); background: #fff; }
        .turnaround-col:first-child { border-left: 0; }
        .turnaround-label { color: var(--magenta); font-size: 14px; font-weight: 600; }
        .turnaround-col h3 { margin-top: 6px; }
        .turnaround-col p { margin-top: 14px; font-size: 16px; line-height: 1.66; }
        .turnaround-note { max-width: 820px; margin: 24px auto 0; text-align: center; font-size: 16px; line-height: 1.65; }
        .turnaround-action { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px 24px; margin-top: 16px; text-align: center; }
        .comparison-wrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 24px; background: #fff; }
        .comparison-table { width: 100%; border-collapse: collapse; min-width: 760px; }
        .comparison-table th, .comparison-table td { padding: 17px 20px; border-bottom: 1px solid var(--line); text-align: left; font-size: 16px; line-height: 1.4; }
        .comparison-table th { background: #F7F7F8; font-weight: 600; color: var(--ink); }
        .comparison-table th:not(:first-child), .comparison-table td:not(:first-child) { text-align: center; width: 24%; }
        .comparison-table tr:last-child td { border-bottom: 0; }
        .check { color: var(--magenta); font-weight: 600; }
        .muted-cell { color: #8A8990; }
        .comparison-after { max-width: 900px; margin: 28px auto 0; text-align: center; }
        .comparison-after h3 { font-size: 24px; }
        .comparison-after p { margin-top: 10px; font-size: 16px; line-height: 1.65; }
        .consistency-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 70px; align-items: start; }
        .consistency-intro p { margin-top: 17px; font-size: 17px; line-height: 1.72; }
        .consistency-list { border-top: 1px solid var(--line); }
        .consistency-row { display: grid; grid-template-columns: 46px 1fr; gap: 17px; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .consistency-row h3 { font-size: 20px; }
        .consistency-row p { margin-top: 6px; font-size: 16px; line-height: 1.62; }
        .security-layout { display: grid; grid-template-columns: .86fr 1.14fr; gap: 76px; align-items: start; }
        .security-copy p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .security-matrix { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #3B3B42; border-left: 1px solid #3B3B42; }
        .security-item { padding: 28px; border-right: 1px solid #3B3B42; border-bottom: 1px solid #3B3B42; }
        .security-icon { color: var(--blush-accent); }
        .security-item h3 { margin-top: 16px; font-size: 20px; }
        .security-item p { margin-top: 9px; font-size: 16px; line-height: 1.6; }
        .language-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 76px; align-items: start; }
        .language-intro p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .language-groups { display: grid; grid-template-columns: 1fr 1fr; gap: 0 44px; border-top: 1px solid var(--line); }
        .language-group { padding: 24px 0; border-bottom: 1px solid var(--line); }
        .language-group h3 { font-size: 20px; }
        .language-group p { margin-top: 7px; font-size: 16px; line-height: 1.62; }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 34px; border-top: 1px solid var(--line); }
        .why-item { padding: 28px 0; border-bottom: 1px solid var(--line); }
        .why-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta); }
        .why-item h3 { margin-top: 18px; font-size: 20px; }
        .why-item p { margin-top: 8px; font-size: 16px; line-height: 1.62; }
        .growth-panel { display: grid; grid-template-columns: 1.1fr .9fr; border-radius: 30px; overflow: hidden; background: var(--blush); border: 1px solid #F0D4DF; }
        .growth-copy { padding: 48px; }
        .growth-copy p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .growth-copy .text-link { margin-top: 18px; }
        .growth-side { padding: 44px; background: #fff; border-left: 1px solid #F0D4DF; }
        .growth-side h3 { font-size: 20px; }
        .growth-list { margin: 18px 0 0; padding: 0; list-style: none; }
        .growth-list li { padding: 13px 0; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.45; }
        .growth-list li:last-child { border-bottom: 0; }
        .faq-panel { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-button {
          width: 100%;
          min-height: 72px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--ink);
          font: inherit;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }
        .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 4px; border-radius: 6px; }
        .faq-plus { width: 34px; height: 34px; flex: 0 0 34px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--magenta); font-size: 22px; font-weight: 400; }
        .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .22s ease; }
        .faq-answer > p { min-height: 0; overflow: hidden; max-width: 840px; padding-right: 54px; font-size: 16px; line-height: 1.72; }
        .faq-answer.is-open { grid-template-rows: 1fr; }
        .faq-answer.is-open > p { padding-bottom: 24px; }
        .final-cta { padding: 84px 0; background: var(--blush); }
        .final-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
        .final-copy h2 { max-width: 560px; }
        .final-copy p { margin-top: 19px; max-width: 590px; font-size: 18px; line-height: 1.68; }
        .final-copy .cta-proof { margin-top: 22px; color: #6A5A61; font-size: 16px; line-height: 1.55; }
        .quote-mockup-compact { box-shadow: 0 20px 55px rgba(78,25,49,.09); }
        .quote-mockup-compact .drop-zone { margin-bottom: 15px; }
        @media (max-width: 1100px) {
          .shell { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: 1fr 430px; gap: 45px; }
          .proof-grid { grid-template-columns: repeat(5, 1fr); }
          .proof-item { padding: 23px 15px; }
          .proof-item strong { font-size: 16px; }
          .overview-grid, .file-layout, .pricing-grid, .consistency-layout, .security-layout, .language-layout { gap: 52px; }
          .workflow-step { padding-left: 18px; padding-right: 18px; }
        }
        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-copy { max-width: 760px; }
          .hero-copy, .hero-copy h1 { margin-left: auto; margin-right: auto; text-align: center; }
          .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-actions, .hero-trust { justify-content: center; }
          .quote-mockup { max-width: 620px; margin: 0 auto; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item { border-left: 0; border-top: 1px solid var(--line); }
          .proof-item:nth-child(1), .proof-item:nth-child(2) { border-top: 0; }
          .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
          .proof-item:nth-child(5) { grid-column: 1 / -1; text-align: center; }
          .overview-grid, .file-layout, .pricing-grid, .consistency-layout, .security-layout, .language-layout, .final-grid { grid-template-columns: 1fr; gap: 42px; }
          .overview-grid > .section-head, .file-intro, .consistency-intro, .language-intro { text-align: center; max-width: 780px; margin: 0 auto; position: static; }
          .overview-grid > .section-head .eyebrow, .file-intro .eyebrow, .consistency-intro .eyebrow, .language-intro .eyebrow { text-align: center; }
          .overview-copy p, .consistency-intro p, .file-intro p, .language-intro p { text-align: left; }
          .workflow-grid { grid-template-columns: 1fr; border-bottom: 0; }
          .workflow-step { display: grid; grid-template-columns: 52px 1fr; gap: 0 18px; padding: 24px 0; border-left: 0; border-bottom: 1px solid #3B3B42; }
          .workflow-number { grid-row: 1 / 3; margin-top: 4px; font-size: 16px; }
          .workflow-step h3 { margin-top: 0; }
          .workflow-step p { grid-column: 2; }
          .translation-model-grid { grid-template-columns: 1fr; max-width: 720px; margin: 0 auto; }
          .file-row { grid-template-columns: 54px 1fr; }
          .file-row .text-link { grid-column: 2; justify-self: start; margin-top: -6px; }
          .document-panel { grid-template-columns: 1fr; }
          .document-visual { min-height: 340px; }
          .expertise-grid { grid-template-columns: 1fr; gap: 0; }
          .pricing-copy { max-width: 760px; margin: 0 auto; text-align: center; }
          .pricing-copy p { text-align: left; }
          .turnaround-grid { grid-template-columns: 1fr; }
          .turnaround-col { border-left: 0; border-top: 1px solid var(--line); }
          .turnaround-col:first-child { border-top: 0; }
          .comparison-wrap { overflow: visible; border: 0; border-radius: 0; background: transparent; }
          .comparison-table { display: block; min-width: 0; }
          .comparison-table thead { display: none; }
          .comparison-table tbody { display: grid; gap: 12px; }
          .comparison-table tr { display: grid; grid-template-columns: 1fr 1fr; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
          .comparison-table td { display: block; width: auto !important; padding: 12px 14px; border-bottom: 0; text-align: left !important; }
          .comparison-table td:first-child { grid-column: 1 / -1; padding: 14px; border-bottom: 1px solid var(--line); background: #F7F7F8; font-weight: 600; }
          .comparison-table td:nth-child(2) { border-right: 1px solid var(--line); }
          .comparison-table td:nth-child(2)::before, .comparison-table td:nth-child(3)::before { display: block; margin-bottom: 3px; color: #777780; font-size: 14px; line-height: 1.3; font-weight: 400; }
          .comparison-table td:nth-child(2)::before { content: "Free AI tools"; }
          .comparison-table td:nth-child(3)::before { content: "Stepes"; }
          .comparison-after p { text-align: left; }
          .security-copy { max-width: 760px; margin: 0 auto; text-align: center; }
          .security-copy p { text-align: left; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .growth-panel { grid-template-columns: 1fr; }
          .growth-side { border-left: 0; border-top: 1px solid #F0D4DF; }
          .final-copy { text-align: center; }
          .final-copy h2, .final-copy p { margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .section-dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .hero { padding: 72px 0 68px; }
          .hero-copy .lead { font-size: 18px; }
          .hero-actions { flex-direction: column; }
          .hero-actions .btn { width: 100%; }
          .hero-trust { gap: 8px 14px; }
          .quote-mockup { padding: 20px; border-radius: 24px; }
          .quote-title-row { flex-direction: column; }
          .secure-chip { align-self: flex-start; }
          .drop-zone { align-items: flex-start; }
          .quote-fields { grid-template-columns: 1fr; }
          .quote-meta-row { flex-direction: column; gap: 4px; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item, .proof-item:nth-child(even) { border-left: 0; border-top: 1px solid var(--line); text-align: left; }
          .proof-item:first-child { border-top: 0; }
          .proof-item:nth-child(5) { grid-column: auto; text-align: left; }
          .section-head { margin-bottom: 36px; }
          .section-head-center { text-align: center; }
          .section-head p { font-size: 17px; }
          .workflow-step { grid-template-columns: 42px 1fr; gap: 0 12px; }
          .model-card { padding: 24px; border-radius: 22px; }
          .file-row { grid-template-columns: 46px 1fr; gap: 14px; padding: 23px 0; }
          .icon-box { width: 42px; height: 42px; }
          .document-copy, .growth-copy, .growth-side { padding: 30px 24px; }
          .document-visual { min-height: 320px; padding: 30px 20px; }
          .quote-uploader .quote-title-row { align-items: center; }
          .quote-uploader .drop-zone { padding: 17px 16px; }
          .quote-uploader .drop-desktop-copy { display: none !important; }
          .quote-uploader .drop-mobile-copy { display: block !important; }
          .selected-file-row { grid-template-columns: 44px minmax(0,1fr) 44px; gap: 10px; padding-left: 10px; padding-right: 6px; }
          .selected-file-type { width: 40px; height: 40px; }
          .quote-uploader .btn { width: 100%; min-height: 48px; }
          .doc-source { width: calc(100% - 18px); }
          .doc-target { width: calc(100% - 24px); }
          .doc-target-one { margin-left: 14px; }
          .doc-target-two { margin-left: 24px; }
          .doc-flow { left: 5px; width: 28px; }
          .doc-flow-branch { width: 24px; }
          .expertise-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .pricing-row { grid-template-columns: 1fr; gap: 7px; }
          .turnaround-col { padding: 26px 24px; }
          .turnaround-action { flex-direction: column; align-items: center; gap: 2px; }
          .consistency-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .security-matrix { grid-template-columns: 1fr; border-left: 0; }
          .security-item { border-left: 1px solid #3B3B42; }
          .language-groups { grid-template-columns: 1fr; gap: 0; }
          .why-grid { grid-template-columns: 1fr; }
          .faq-button { font-size: 17px; min-height: 68px; }
          .faq-answer > p { padding-right: 0; }
          .final-cta { padding: 68px 0; }
        }
        @media (max-width: 360px) {
          .shell { width: calc(100% - 40px); }
          h1 { font-size: 38px; }
          .quote-title { font-size: 22px; }
          .drop-zone { padding: 16px; }
          .file-chip-row { align-items: flex-start; }
          .file-ready { display: none; }
          .text-link, .btn { overflow-wrap: anywhere; }
          .model-card { padding-left: 22px; padding-right: 22px; }
          .comparison-table td { padding-left: 12px; padding-right: 12px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Online Translation Services for Documents, PDFs, and Business Content</h1>
              <p className="lead">Upload your files, get a fast translation quote, and translate business content in 100+ languages with professional linguists and flexible AI-enabled workflows.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={links.quote}>Upload Files & Get a Quote <ArrowIcon /></a>
                <a className="btn btn-secondary" href={links.how}>How Online Translation Works <ArrowIcon /></a>
              </div>
              <div className="hero-trust" aria-label="Service highlights">
                <span>Secure online workflow</span>
                <span>100+ languages</span>
                <span>AI + human workflows</span>
              </div>
            </div>
            <QuoteMockup />
          </div>
        </section>

        <section className="proof-band" aria-label="Stepes service proof points">
          <div className="shell proof-grid">
            <div className="proof-item"><strong>100+ Languages</strong><span>Global language and locale coverage</span></div>
            <div className="proof-item"><strong>10,000+ Linguists</strong><span>Professional global language network</span></div>
            <div className="proof-item"><strong>2,000+ Enterprise Clients</strong><span>Experience across industries and content</span></div>
            <div className="proof-item"><strong>AI + Human Workflows</strong><span>Flexible quality models by use case</span></div>
            <div className="proof-item"><strong>ISO-Certified Quality</strong><span>Structured professional processes</span></div>
          </div>
        </section>

        <section className="section">
          <div className="shell overview-grid">
            <SectionHead
              title="Professional Translation, Ordered Entirely Online"
              align="left"
            />
            <div className="overview-copy">
              <p>Professional translation should not require a long chain of emails just to get started. Stepes combines the convenience of an online translation platform with the linguistic expertise, terminology control, quality assurance, and professional accountability businesses need for important multilingual content.</p>
              <p>Upload your source files, select your target languages, choose the translation workflow that fits your content, review your project requirements, and move directly into translation. Whether you need one document translated today or ongoing multilingual support across your organization, Stepes provides a simpler way to manage professional translation online.</p>
              <p>Unlike free translation tools designed primarily for instant text conversion, Stepes supports complete business files, specialized subject matter, professional human review, translation memory, terminology management, multilingual formatting, and scalable project delivery.</p>
              <TextLink href={links.quote}>Upload Your Files</TextLink>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="how-it-works">
          <div className="shell">
            <SectionHead
              title="From File Upload to Finished Translation in Five Simple Steps"
              intro="A streamlined online workflow keeps your files, languages, requirements, pricing, and delivery organized from the first upload through completion."
              dark
            />
            <div className="workflow-grid">
              {workflowSteps.map(([title, text], i) => (
                <div className="workflow-step" key={title}>
                  <div className="workflow-number">0{i + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="workflow-action"><TextLink href={links.quote} dark>Start Your Translation</TextLink></div>
          </div>
        </section>

        <section className="section" id="translation-workflows">
          <div className="shell">
            <SectionHead
              eyebrow="Flexible Quality Models"
              title="Choose the Translation Workflow That Fits Your Content"
              intro="Not every document requires the same translation process. Stepes combines AI, professional linguists, translation technology, and structured quality controls so you can apply the right workflow to each content type."
            />
            <div className="translation-model-grid">
              {translationModels.map((item) => (
                <div className={`model-card ${item.featured ? "featured" : ""}`} key={item.title}>
                  <div className="model-icon"><Icon name={item.icon}/></div>
                  <div className="model-kicker">{item.kicker}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="model-list">
                    {item.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="model-footer">
              <p>Not sure which workflow you need? Upload your files and Stepes can help determine the appropriate approach for your content, audience, deadline, and quality requirements.</p>
              <TextLink href={links.quote}>Upload Your Files to Compare Options</TextLink>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell file-layout">
            <div className="file-intro">
              <h2>Translate Business Files Online Without Rebuilding Your Content</h2>
              <p>Professional document translation involves more than replacing one language with another. Stepes supports the business and digital file formats organizations already use, helping preserve structure, formatting, and usability wherever the source format allows.</p>
            </div>
            <div className="file-list">
              {fileTypes.map(([icon, title, text, href, label]) => (
                <div className="file-row" key={title}>
                  <div className="icon-box"><Icon name={icon}/></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  {href ? <TextLink href={href}>{label}</TextLink> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dense">
          <div className="shell">
            <div className="document-panel">
              <div className="document-copy">
                <h2>Professional Document Translation Online</h2>
                <p>From a single business document to large batches of multilingual content, Stepes makes professional document translation accessible through one online workflow.</p>
                <p>Translate contracts, reports, manuals, policies, presentations, forms, technical documents, financial materials, corporate communications, and marketing collateral into one or multiple languages while using terminology management, translation memory, human review, formatting, and multilingual quality assurance as needed.</p>
                <TextLink href={links.document}>Explore Document Translation Services</TextLink>
              </div>
              <div className="document-visual" aria-label="One English source document translated into German and Japanese">
                <div className="doc-stack">
                  <div className="doc-flow" aria-hidden="true">
                    <span className="doc-flow-branch one"></span>
                    <span className="doc-flow-branch two"></span>
                  </div>
                  {[
                    { label: "Source document · English", className: "doc-source", widths: ["100%", "79%", "63%"] },
                    { label: "Translated document · German", className: "doc-target doc-target-one", widths: ["100%", "83%", "68%"] },
                    { label: "Translated document · Japanese", className: "doc-target doc-target-two", widths: ["100%", "80%", "61%"] },
                  ].map((doc) => (
                    <div className={`doc-card ${doc.className}`} key={doc.label}>
                      <div className="doc-card-top"><span className="doc-dot"></span><strong>{doc.label}</strong></div>
                      <div className="doc-lines">
                        {doc.widths.map((width, index) => <span key={index} style={{ width }}></span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHead
              title="Translation Expertise for the Content Your Business Depends On"
              intro="Professional online translation becomes especially valuable when content requires more than general language fluency. Stepes supports technical, regulated, commercial, and corporate subject matter with professional language expertise."
            />
            <div className="expertise-grid">
              {expertise.map(([icon, title, text, href, label]) => (
                <div className="expertise-row" key={title}>
                  <div className="icon-box"><Icon name={icon}/></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {href ? <TextLink href={href}>{label}</TextLink> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section" id="pricing">
          <div className="shell pricing-grid">
            <div className="pricing-copy">
              <Eyebrow dark>Transparent Project Factors</Eyebrow>
              <h2>How Much Does Online Translation Cost?</h2>
              <p>There is no single price that accurately represents every professional translation project. Your cost depends on the language pair, amount of content, translation workflow, subject matter, reusable translation memory, formatting, and turnaround.</p>
              <p>Instead of estimating from a generic rate, upload your source content and tell Stepes which languages and delivery schedule you need.</p>
              <a className="btn btn-primary" href={links.quote}>Upload Files & Get a Quote <ArrowIcon /></a>
              <TextLink href={links.costGuide} dark>Translation Cost Guide</TextLink>
            </div>
            <div className="pricing-factors">
              {pricingFactors.map(([title, text]) => (
                <div className="pricing-row" key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <SectionHead
              title="Translation Turnaround Built Around Your Deadline"
              intro="Translation speed depends on volume, language pair, subject matter, file complexity, review level, and resource availability. Stepes supports both planned and accelerated delivery models for suitable projects."
            />
            <div className="turnaround-grid">
              <div className="turnaround-col">
                <div className="turnaround-label">STANDARD</div>
                <h3>Reliable Delivery for Planned Projects</h3>
                <p>Balanced schedules for professional translation, review, quality assurance, and production when there is no immediate deadline pressure.</p>
              </div>
              <div className="turnaround-col">
                <div className="turnaround-label">PRIORITY</div>
                <h3>Accelerated Delivery When Content Must Move Faster</h3>
                <p>Shorter timelines using accelerated scheduling and resource allocation for launches, business deadlines, and time-sensitive communications.</p>
              </div>
              <div className="turnaround-col">
                <div className="turnaround-label">RUSH</div>
                <h3>Fast-Track Support for Urgent Requirements</h3>
                <p>Where feasible, qualified linguists, parallel production, and optimized workflows can help compress delivery for urgent projects.</p>
              </div>
            </div>
            <p className="turnaround-note">Have a deadline? Upload your files and include your required delivery date so Stepes can evaluate the most appropriate workflow.</p>
            <div className="turnaround-action">
              <TextLink href={links.quote}>Get Pricing & Check Turnaround</TextLink>
              <TextLink href={links.fast}>Fast Translation Services</TextLink>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHead
              title="When Do You Need a Professional Online Translation Service?"
              intro="Free AI translation can be useful for understanding the general meaning of text. Business content often requires stronger controls over accuracy, terminology, tone, formatting, quality, and professional accountability."
            />
            <div className="comparison-wrap" role="region" aria-label="Comparison of free AI translation tools and Stepes online translation" tabIndex="0">
              <table className="comparison-table">
                <thead>
                  <tr><th>Capability</th><th>Free AI Translation Tools</th><th>Stepes Online Translation</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Quick understanding of text", "Yes", "Yes"],
                    ["Complete business document workflows", "Limited", "Yes"],
                    ["Professional file handling", "Limited", "Yes"],
                    ["Subject-matter linguists", "—", "Yes"],
                    ["Professional human review", "—", "Yes"],
                    ["Terminology management", "Limited", "Yes"],
                    ["Translation memory", "Limited", "Yes"],
                    ["Multilingual project management", "Limited", "Yes"],
                    ["Formatting and production support", "Limited", "Yes"],
                    ["Structured quality assurance", "Limited", "Yes"],
                  ].map(([cap, free, stepes]) => (
                    <tr key={cap}>
                      <td>{cap}</td>
                      <td className={free === "Yes" ? "check" : "muted-cell"}>{free}</td>
                      <td className="check">{stepes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="comparison-after">
              <h3>Use AI for Understanding. Use Professional Translation When the Content Has to Work.</h3>
              <p>A rough translation may be enough when you simply need to understand what something says. Professional translation becomes important when content must represent your organization, guide a user, support a product, satisfy a business requirement, or be trusted by the people receiving it.</p>
              <TextLink href={links.workflow}>Choose Your Translation Workflow</TextLink>
            </div>
          </div>
        </section>

        <section className="section blush-section">
          <div className="shell consistency-layout">
            <div className="consistency-intro">
              <Eyebrow>Language Assets</Eyebrow>
              <h2>Consistent Translation Across Every Project</h2>
              <p>For organizations that translate repeatedly, approved terminology, previous translations, style decisions, and project knowledge become valuable language assets. Stepes helps preserve that value from one project to the next.</p>
              <TextLink href={links.quality}>Translation Quality Assurance</TextLink>
            </div>
            <div className="consistency-list">
              {consistencyItems.map(([icon, title, text]) => (
                <div className="consistency-row" key={title}>
                  <div className="icon-box"><Icon name={icon}/></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="shell security-layout">
            <div className="security-copy">
              <Eyebrow dark>Confidential Business Content</Eyebrow>
              <h2>Secure Online Translation From Upload to Delivery</h2>
              <p>Translation files often contain legal agreements, product documentation, employee communications, financial materials, technical specifications, medical information, unreleased marketing content, and other proprietary information.</p>
              <p>Stepes combines online convenience with professional workflows designed for business content and can support organizations with formal confidentiality, procurement, vendor management, and enterprise requirements.</p>
              <TextLink href={links.contact} dark>Discuss Enterprise Requirements</TextLink>
            </div>
            <div className="security-matrix">
              {[
                ["secure", "Secure Online Workflow", "Project files are submitted, managed, and delivered through a structured online translation environment."],
                ["human", "Controlled Project Access", "Content is handled by the professional resources assigned to the translation, review, and production workflow."],
                ["qa", "Professional Confidentiality", "Enterprise translation engagements can accommodate project-specific confidentiality and information-handling requirements."],
                ["scale", "Enterprise-Ready Processes", "Stepes can support formal procurement, vendor qualification, security reviews, and scalable multilingual programs."],
              ].map(([icon, title, text]) => (
                <div className="security-item" key={title}>
                  <div className="security-icon"><Icon name={icon}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell language-layout">
            <div className="language-intro">
              <h2>Online Translation Services in 100+ Languages</h2>
              <p>Support customers, employees, partners, products, and operations worldwide with professional translation across major languages and regional variants.</p>
              <TextLink href={links.languages}>Explore All Translation Languages</TextLink>
            </div>
            <div className="language-groups">
              <div className="language-group"><h3>European Languages</h3><p>Spanish, French, German, Italian, Dutch, Portuguese, Polish, Swedish, Danish, Norwegian, Finnish, Czech, Hungarian, Romanian, and more.</p></div>
              <div className="language-group"><h3>Asian Languages</h3><p>Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and additional regional languages.</p></div>
              <div className="language-group"><h3>Middle Eastern Languages</h3><p>Arabic, Hebrew, Turkish, Persian, and other languages used across the region.</p></div>
              <div className="language-group"><h3>Regional Language Variants</h3><p>Brazilian and European Portuguese, Canadian and European French, Latin American and European Spanish, Simplified and Traditional Chinese, and other locale-specific requirements.</p></div>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <SectionHead
              title="Why Businesses Use Stepes for Online Translation"
              intro="Stepes combines digital ordering with professional language expertise, translation technology, and the ability to scale from individual files to recurring multilingual programs."
            />
            <div className="why-grid">
              {[
                ["upload", "Easy Online Ordering", "Upload source files, choose languages, define project requirements, and start professional translation without unnecessary administrative steps."],
                ["ai", "Flexible AI + Human Workflows", "Apply AI translation, professional review, or expert human translation according to quality, risk, speed, and business purpose."],
                ["human", "10,000+ Professional Linguists", "Access translators, editors, reviewers, localization specialists, and subject-matter experts covering more than 100 languages."],
                ["technical", "Specialized Subject Expertise", "Match professional language resources to technical, legal, financial, medical, corporate, marketing, software, and other specialized content."],
                ["memory", "Translation Technology", "Use translation memory, terminology management, workflow automation, AI-enabled translation, and quality controls to improve efficiency and consistency."],
                ["scale", "Enterprise Scalability", "Start with a single online translation and expand into recurring multilingual programs without replacing your translation partner as requirements grow."],
              ].map(([icon, title, text]) => (
                <div className="why-item" key={title}>
                  <div className="why-icon"><Icon name={icon}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dense">
          <div className="shell">
            <div className="growth-panel">
              <div className="growth-copy">
                <h2>One Document Today. A Global Translation Program Tomorrow.</h2>
                <p>Your first need may be a report in German, a manual in Japanese, a presentation in Spanish, or a PDF in several languages before an important deadline. Stepes makes it easy to begin with that project.</p>
                <p>As requirements grow, the same workflow can expand across recurring documents, departments, terminology, translation memory, websites, software, training, technical documentation, regulated content, and global content operations.</p>
                <TextLink href={links.quote}>Start With Your First File</TextLink>
              </div>
              <div className="growth-side">
                <h3>Scale the same workflow across:</h3>
                <ul className="growth-list">
                  <li>Recurring document translation</li>
                  <li>Multiple business departments</li>
                  <li>Many target languages and locales</li>
                  <li>Translation memory and terminology</li>
                  <li>Websites, software, and digital content</li>
                  <li>Enterprise multilingual operations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHead
              title="Online Translation Services FAQ"
              intro="Answers to common questions about professional online translation, pricing, file formats, AI and human workflows, turnaround, confidentiality, and recurring projects."
              align="left"
            />
            <FAQ />
          </div>
        </section>

        <section className="final-cta" id="quote">
          <div className="shell final-grid">
            <div className="final-copy">
              <h2>Ready to Translate Your Files?</h2>
              <p>Upload your documents and tell us which languages you need. Stepes combines simple online ordering with professional linguists, AI-enabled workflows, terminology management, translation memory, quality assurance, and support for more than 100 languages.</p>
              <div className="cta-proof">100+ languages · 10,000+ professional linguists · AI + human workflows · ISO-certified quality processes</div>
            </div>
            <QuoteMockup compact />
          </div>
        </section>
      </main>
    </div>
  );
}
