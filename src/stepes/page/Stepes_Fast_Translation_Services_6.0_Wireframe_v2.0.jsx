import React, { useState } from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#20232A",
  body: "#4E535B",
  muted: "#737981",
  line: "#E4E6E9",
  soft: "#F6F6F7",
  dark: "#25262A",
  white: "#FFFFFF",
};

const quoteUrl = "https://app.stepes.com/quote/";
const contactUrl = "https://www.stepes.com/contact-sales/";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="iconArrow">
    <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="icon20">
    <path d="M4 10.5 8 14l8-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Icon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    clock: <><circle cx="12" cy="12" r="8" {...common}/><path d="M12 7v5l3 2" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="8" {...common}/><path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8S14.2 17.7 12 20M12 4c-2.2 2.3-3.3 5-3.3 8S9.8 17.7 12 20" {...common}/></>,
    spark: <><path d="M12 3l1.3 4.2L17.5 8.5l-4.2 1.3L12 14l-1.3-4.2-4.2-1.3 4.2-1.3L12 3Z" {...common}/><path d="M18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14Z" {...common}/></>,
    shield: <><path d="M12 3 19 6v5.6c0 4.1-2.7 7.4-7 9.4-4.3-2-7-5.3-7-9.4V6l7-3Z" {...common}/><path d="m8.5 12 2.2 2.2 4.6-5" {...common}/></>,
    file: <><path d="M7 3h7l4 4v14H7V3Z" {...common}/><path d="M14 3v5h5M10 12h5M10 16h5" {...common}/></>,
    users: <><circle cx="9" cy="8" r="3" {...common}/><circle cx="17" cy="9" r="2.4" {...common}/><path d="M4 19c.7-3.3 2.3-5 5-5s4.3 1.7 5 5M14 15c2.8-.6 4.7.8 5.8 3.2" {...common}/></>,
    branches: <><path d="M5 4v5c0 1.7 1.3 3 3 3h8" {...common}/><path d="M5 20v-5c0-1.7 1.3-3 3-3" {...common}/><circle cx="5" cy="4" r="1.5" {...common}/><circle cx="5" cy="20" r="1.5" {...common}/><circle cx="18" cy="12" r="1.5" {...common}/></>,
    qa: <><rect x="4" y="4" width="16" height="16" rx="3" {...common}/><path d="m8 12 2.3 2.3L16 8.7" {...common}/></>,
    term: <><path d="M5 5.5c2.5-.8 4.5-.5 7 1.1v12c-2.5-1.6-4.5-1.9-7-1.1v-12ZM19 5.5c-2.5-.8-4.5-.5-7 1.1v12c2.5-1.6 4.5-1.9 7-1.1v-12Z" {...common}/></>,
    money: <><path d="M4 7h16v11H4V7Z" {...common}/><path d="M7 10.5h.01M17 14.5h.01" {...common}/><circle cx="12" cy="12.5" r="2.4" {...common}/></>,
    legal: <><path d="M12 3v18M6 6h12M8 6l-4 7h8L8 6Zm8 0-4 7h8l-4-7ZM8 21h8" {...common}/></>,
    medical: <><path d="M9 4h6v5h5v6h-5v5H9v-5H4V9h5V4Z" {...common}/></>,
    tech: <><rect x="4" y="5" width="16" height="14" rx="2" {...common}/><path d="M8 10 6 12l2 2M16 10l2 2-2 2M10.5 16l3-8" {...common}/></>,
    factory: <><path d="M4 20V9l6 3V9l6 3V5h4v15H4Z" {...common}/><path d="M7 16h2M12 16h2M17 16h2" {...common}/></>,
    megaphone: <><path d="M4 11v3h4l7 4V7l-7 4H4Z" {...common}/><path d="M8 14l1.2 5h3" {...common}/><path d="M18 9.5c1.3 1.2 1.3 3.8 0 5" {...common}/></>,
    building: <><path d="M5 20V7l7-3 7 3v13M9 10h1M14 10h1M9 14h1M14 14h1M9 18h1M14 18h1" {...common}/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="icon24">{paths[name] || paths.file}</svg>;
}

const deadlineCards = [
  { title: "Same Day", copy: "For short, urgent documents and time-sensitive communications when qualified resources can be confirmed quickly.", meta: "Short urgent content", icon: "clock" },
  { title: "24 Hours", copy: "For moderate volumes that need professional translation, coordinated review, and accelerated delivery.", meta: "Moderate-volume projects", icon: "file" },
  { title: "Overnight / Weekend", copy: "For qualifying projects that extend beyond normal working hours and benefit from global time-zone coverage.", meta: "Time-critical releases", icon: "globe" },
  { title: "Custom Rush", copy: "For larger or complex projects with a fixed accelerated deadline and coordinated parallel workflows.", meta: "Large or complex scopes", icon: "branches" },
];

const workflow = [
  ["Upload & Analyze", "Send your source files and target languages. We review word count, file type, subject matter, formatting, terminology, translation memory, and other requirements."],
  ["Confirm the Deadline", "Tell us the exact date and time you need the translation. We evaluate feasibility based on scope, complexity, available resources, and required quality controls."],
  ["Match Qualified Linguists", "Professional translators are selected based on language, subject expertise, project requirements, and availability for the requested schedule."],
  ["Translate & Review", "Translation, terminology management, TM reuse, parallel workflows, automated QA, and human review work together according to the project needs."],
  ["Verify & Deliver", "Completed files are checked for completeness, consistency, formatting, and agreed project requirements before delivery."],
];

const turnaround = [
  { size: "Under ~1,000 words", label: "Short documents", time: "Same day in many cases", copy: "Short documents with straightforward formatting and commonly supported language pairs are often strong candidates for same-day delivery." },
  { size: "~1,000–5,000 words", label: "Medium projects", time: "Same day to 24 hours", copy: "Moderate-volume projects may require additional translation, review, or specialist resources depending on the content." },
  { size: "5,000+ words", label: "Large projects", time: "Custom accelerated schedule", copy: "Larger projects can often move faster through parallel translation, TM reuse, coordinated terminology, automated QA, and managed review." },
];

const aiFeatures = [
  ["Workflow Automation", "Accelerates project intake, file analysis, routing, coordination, tracking, and delivery so less time is spent on repetitive administration.", "spark"],
  ["Translation Memory", "Reuses approved translations and repeated content when appropriate, reducing unnecessary retranslation while supporting consistency.", "branches"],
  ["Terminology Management", "Applies approved product, technical, legal, regulatory, and client-specific terminology across the project.", "term"],
  ["Automated Quality Checks", "Helps identify potential issues involving numbers, missing content, terminology, punctuation, formatting, tags, and other measurable elements.", "qa"],
  ["Professional Linguists", "Human translators and reviewers provide the linguistic judgment required when meaning, tone, technical accuracy, or regulatory significance matters.", "users"],
];

const riskRows = [
  ["Terminology inconsistency", "Translation memory, shared glossaries, approved terminology, and coordinated project resources help keep key terms aligned."],
  ["Multiple translators", "Shared linguistic assets, project instructions, terminology controls, and centralized review help parallel resources work as one team."],
  ["Numbers, units & critical details", "Automated QA and human review can work together to identify potential issues before delivery."],
  ["Complex formatting", "Formatting requirements are evaluated during intake so the delivery schedule reflects both linguistic and production needs."],
  ["Last-minute changes", "Controlled file handling and clear handoffs help teams stay aligned on the current version and the timing impact of changes."],
  ["Unrealistic deadlines", "Feasibility is reviewed before production so the fastest responsible workflow can be confirmed upfront."],
];

const contentTypes = [
  { title: "Business Documents", copy: "Reports, presentations, proposals, executive communications, policies, HR communications, and operational documents.", link: "Document Translation Services", url: "https://www.stepes.com/document-translation-services/", icon: "building" },
  { title: "Legal & Compliance", copy: "Contracts, litigation materials, investigations, regulatory correspondence, policies, disclosures, and court-related content.", link: "Legal Translation Services", url: "https://www.stepes.com/legal-translation-services/", icon: "legal" },
  { title: "Technical Content", copy: "Manuals, specifications, procedures, product documentation, engineering materials, release notes, and technical updates.", link: "Technical Translation Services", url: "https://www.stepes.com/technical-translation-services/", icon: "tech" },
  { title: "Medical & Life Sciences", copy: "Clinical, medical, regulatory, safety, pharmaceutical, healthcare, and patient-facing communications.", link: "Life Sciences Translation Services", url: "https://www.stepes.com/life-sciences-translation-services/", icon: "medical" },
  { title: "Financial Content", copy: "Financial reports, transaction materials, disclosures, investor communications, policies, and other time-sensitive financial documents.", link: "Financial Translation Services", url: "https://www.stepes.com/financial-translation-services/", icon: "money" },
  { title: "Marketing & Digital", copy: "Press releases, campaigns, product launches, web content, customer communications, and global announcements.", link: "Marketing Translation Services", url: "https://www.stepes.com/marketing-translation-services/", icon: "megaphone" },
];

const industries = [
  ["Legal", "Court dates, transaction deadlines, investigations, discovery, contracts, regulatory matters, and international proceedings.", "Legal Translation Services", "https://www.stepes.com/legal-translation-services/"],
  ["Life Sciences & Healthcare", "Clinical operations, safety communications, regulatory activity, medical documentation, product updates, and patient communications.", "Life Sciences Translation Services", "https://www.stepes.com/life-sciences-translation-services/"],
  ["Financial Services", "Global transactions, financial reporting, regulatory filings, disclosures, investor communications, and governance requirements.", "Financial Translation Services", "https://www.stepes.com/financial-translation-services/"],
  ["Technology", "Product launches, release cycles, security updates, customer communications, UI content, and rapidly changing documentation.", "Software Localization Services", "https://www.stepes.com/software-localization-services/"],
  ["Manufacturing", "Production changes, supplier communications, safety information, technical updates, operating instructions, and supply-chain requirements.", "Manufacturing Translation Services", "https://www.stepes.com/manufacturing-translation-services/"],
  ["Marketing & Communications", "Global campaigns, product announcements, media communications, customer messaging, and coordinated market launches.", "Marketing Translation Services", "https://www.stepes.com/marketing-translation-services/"],
];

const scaleFeatures = [
  ["Parallel Translation", "Large files can be segmented among multiple qualified linguists so work progresses simultaneously rather than sequentially."],
  ["Shared Translation Memory", "Previously translated and repeated content can be reused across the project to reduce unnecessary work and reinforce consistency."],
  ["Centralized Terminology", "Shared glossaries and project-specific terminology help multiple linguists use the same approved language."],
  ["Coordinated Review", "Reviewers work from common project instructions and linguistic assets so feedback remains aligned across files."],
  ["Automated QA", "Technology can identify measurable issues across large amounts of multilingual content efficiently."],
  ["Project-Level Oversight", "Centralized project management coordinates resources, deadlines, queries, changes, and final delivery."],
];

const languages = [
  ["Spanish", "https://www.stepes.com/spanish-translation-services/"],
  ["French", "https://www.stepes.com/french-translation-services/"],
  ["German", "https://www.stepes.com/german-translation-services/"],
  ["Chinese", "https://www.stepes.com/chinese-translation-services/"],
  ["Japanese", "https://www.stepes.com/japanese-translation-services/"],
  ["Korean", "https://www.stepes.com/korean-translation-services/"],
  ["Portuguese", "https://www.stepes.com/portuguese-translation-services/"],
  ["Italian", "https://www.stepes.com/italian-translation-services/"],
  ["Dutch", "https://www.stepes.com/dutch-translation-services/"],
  ["Arabic", "https://www.stepes.com/arabic-translation-services/"],
  ["Polish", "https://www.stepes.com/polish-translation-services/"],
  ["Vietnamese", "https://www.stepes.com/vietnamese-translation-services/"],
];

const pricingFactors = [
  ["Word Count", "Larger projects require more translation capacity and may need multiple linguists working in parallel."],
  ["Language Pair", "Qualified translator availability and market rates vary by language combination."],
  ["Subject Matter", "Legal, medical, financial, engineering, scientific, and other specialized content may require subject-matter expertise."],
  ["Delivery Deadline", "Shorter deadlines can require priority scheduling, additional resources, or accelerated review."],
  ["File Format", "Editable files are generally faster to process than scanned PDFs, images, or files requiring extensive desktop publishing."],
  ["Review & Certification", "Independent review, certification, client review, or additional QA stages can affect schedule and pricing."],
];

const related = [
  ["Same-Day Translation Services", "For qualifying projects that specifically require translation within the same calendar day.", "https://www.stepes.com/same-day-translation-services/"],
  ["On-Demand Translation Services", "For organizations that need recurring access to professional multilingual capacity and scalable translation workflows.", "https://www.stepes.com/on-demand-translation-services/"],
  ["Document Translation Services", "Professional translation of Word files, PDFs, PowerPoint, Excel, reports, manuals, contracts, and other business documents.", "https://www.stepes.com/document-translation-services/"],
  ["Certified Translation Services", "Certified translations for immigration, legal, academic, HR, government, corporate, and official-document requirements.", "https://www.stepes.com/certified-translation-services/"],
  ["Technical Translation Services", "Specialized translation for engineering, manufacturing, product, scientific, and technical documentation.", "https://www.stepes.com/technical-translation-services/"],
  ["Professional Translation Services", "Explore Stepes’ complete portfolio of professional translation services for global businesses.", "https://www.stepes.com/translation-services/"],
];

const faqs = [
  ["What are fast translation services?", "Fast translation services are professional translation workflows designed for shorter-than-standard delivery schedules. They use priority resourcing, workflow automation, translation memory, terminology management, parallel production where appropriate, and coordinated quality controls to accelerate delivery. Fast translation may also be described as urgent, rush, expedited, express, or rapid translation."],
  ["What is the difference between fast, urgent, rush, and expedited translation?", "These terms generally describe the same underlying requirement: professional translation completed on an accelerated schedule. Same-day and 24-hour translation are more specific because they describe an actual delivery window. Stepes evaluates the content and requested deadline and recommends the appropriate workflow."],
  ["What is the difference between same-day and 24-hour translation?", "Same-day translation is completed within the same business day and is best suited to shorter projects with clear requirements. A 24-hour schedule provides more time for coordination and review and can be a better fit for longer, more specialized, or more heavily formatted content. Stepes confirms the appropriate delivery window after reviewing the actual files and project requirements."],
  ["How fast can a professional translation be completed?", "Short, straightforward documents can often be completed the same day. Moderate-volume projects may be completed within the same day or 24 hours, while larger projects generally require a custom accelerated schedule. Actual turnaround depends on language pair, word count, subject matter, file format, review requirements, and resource availability."],
  ["Can Stepes translate a document the same day?", "Yes. Same-day professional translation is available for many qualifying projects, particularly shorter documents in commonly supported language pairs. Send the source file and exact deadline so Stepes can confirm availability and feasibility."],
  ["Do you provide 24-hour translation services?", "Yes. Stepes supports 24-hour translation for qualifying projects across a broad range of business content and languages. Available turnaround depends on volume, complexity, formatting, subject expertise, and language resources."],
  ["Do you offer overnight or weekend translation?", "Overnight and weekend delivery may be available for qualifying projects. Stepes’ global translator network and technology-enabled workflows can help coordinate translation across regions and time zones when appropriate. Availability should be confirmed before production begins."],
  ["How many words can be translated in one day?", "There is no universal daily word-count limit because content complexity and workflow requirements vary significantly. For larger projects, Stepes can use multiple qualified translators working in parallel with shared translation memory and terminology to increase production capacity."],
  ["Can you translate 5,000 words in 24 hours?", "In many cases a project of this size may be feasible within an accelerated schedule, but the answer depends on language pair, subject matter, formatting, translation-memory leverage, review requirements, and available qualified resources. Upload the document and provide your deadline for a project-specific assessment."],
  ["Can large translation projects be expedited?", "Yes. Large projects can often be accelerated by dividing content across multiple qualified translators and coordinating their work through shared translation memory, terminology, project instructions, automated QA, and centralized review."],
  ["How do you maintain quality on rush translation projects?", "Stepes combines professional linguists with translation memory, terminology management, automated QA, project-specific instructions, coordinated review, and final file verification. The exact workflow is adapted to the content, deadline, audience, and required level of quality assurance."],
  ["Does fast translation mean machine translation?", "No. Fast translation describes the turnaround requirement, not a single translation method. Stepes can use AI and automation to accelerate workflow tasks and support appropriate translation processes, while professional human translators and reviewers provide linguistic expertise for business-critical content."],
  ["Can legal, medical, and technical documents be translated urgently?", "Yes, subject to qualified specialist availability and a realistic production schedule. Specialized content may require translators with legal, medical, scientific, engineering, regulatory, or other subject-matter expertise, which is considered when Stepes confirms the deadline."],
  ["Do you provide urgent certified translations?", "Yes. Rush certified translation may be available for qualifying official documents, including immigration, legal, academic, employment, government, and corporate records. Turnaround depends on the document, language pair, certification requirements, formatting, and project volume."],
  ["Can you translate PDF files quickly?", "Yes. Stepes translates PDF documents as well as Word, PowerPoint, Excel, and many other common file formats. Editable files can generally be processed more efficiently. Scanned or highly formatted PDFs may require additional preparation or desktop publishing."],
  ["What languages are available for rush translation?", "Stepes provides translation services across more than 100 languages. Rush availability depends on the specific language pair, subject matter, project volume, and deadline. Common business languages generally provide the broadest immediate resource availability."],
  ["How much does urgent translation cost?", "Pricing depends on word count, language pair, subject matter, delivery deadline, file format, review level, and other project requirements. The most accurate approach is to upload the source files and specify the required deadline."],
  ["What should I send to receive a fast translation quote?", "Provide the source files, source language, target language or locale, and exact delivery deadline. If available, also include previous translations, glossaries, style guides, formatting requirements, certification requirements, and other reference materials."],
  ["Will Stepes confirm the deadline before starting?", "Yes. Stepes evaluates the project requirements and proposed turnaround before production begins. For urgent work, confirming feasibility upfront helps align resources, workflow, quality requirements, and delivery expectations."],
];

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrowDark" : ""}`}>{children}</div>;
}

function TextLink({ href, children }) {
  return <a className="textLink" href={href}>{children}<Arrow /></a>;
}

function PrimaryButton({ href, children }) {
  return <a className="btn btnPrimary" href={href}>{children}<Arrow /></a>;
}

function SecondaryButton({ href, children, dark = false }) {
  return <a className={`btn btnSecondary ${dark ? "btnSecondaryDark" : ""}`} href={href}>{children}</a>;
}

function SectionHeading({ eyebrow, title, intro, center = true, dark = false, className = "" }) {
  return (
    <div className={`sectionHeading ${center ? "sectionHeadingCenter" : ""} ${dark ? "sectionHeadingDark" : ""} ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className="sectionIntro">{intro}</p>}
    </div>
  );
}

function HeroFlow() {
  const stages = ["Upload", "Analyze", "Match", "Translate", "QA", "Deliver"];
  return (
    <div className="heroVisual" aria-label="Fast translation workflow illustration">
      <div className="heroVisualTop">
        <span>FAST DELIVERY WORKFLOW</span>
        <span className="liveDot"><i />Priority routing</span>
      </div>
      <div className="heroFile">
        <div className="fileIcon"><Icon name="file" /></div>
        <div>
          <strong>Product_Update_EN.docx</strong>
          <span>Business-critical content</span>
        </div>
        <span className="fileDeadline">Due today</span>
      </div>
      <div className="flowTrack">
        <div className="flowLine" />
        {stages.map((stage, i) => (
          <div className="flowStage" key={stage}>
            <span className={`flowNode ${i === 5 ? "flowNodeDone" : ""}`}>{i === 5 ? <Check /> : i + 1}</span>
            <strong>{stage}</strong>
          </div>
        ))}
      </div>
      <div className="heroDeliveryGrid">
        <div><span>SAME DAY</span><strong>Priority</strong></div>
        <div><span>24 HOURS</span><strong>Accelerated</strong></div>
        <div><span>CUSTOM RUSH</span><strong>Scaled</strong></div>
      </div>
      <div className="heroVisualFoot">
        <span><Check /> Professional linguists</span>
        <span><Check /> Quality-controlled delivery</span>
      </div>
    </div>
  );
}

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={`faqItem ${open ? "faqOpen" : ""}`}>
      <button className="faqButton" onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <span className="faqPlus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faqAnswer"><p>{a}</p></div>}
    </div>
  );
}

export default function StepesFastTranslationServicesWireframeV20() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepesPage">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepesPage {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: ${C.ink}; background: ${C.white}; font-size: 16px; line-height: 1.62; overflow-x: hidden;
        }
        .stepesPage a { color: inherit; }
        .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .sectionDense { padding: 80px 0; }
        h1,h2,h3,p { margin-top: 0; }
        h1,h2,h3 { font-weight: 600; letter-spacing: -0.025em; color: ${C.ink}; }
        h1 { font-size: 48px; line-height: 1.04; margin-bottom: 24px; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.22; margin-bottom: 12px; }
        p { font-size: 16px; color: ${C.body}; margin-bottom: 0; }
        .bodyLarge { font-size: 18px; line-height: 1.65; }
        .eyebrow { color: ${C.magenta}; font-size: 11px; line-height: 1.2; letter-spacing: .15em; font-weight: 600; text-transform: uppercase; margin-bottom: 16px; }
        .eyebrowDark { color: ${C.blushText}; }
        .sectionHeading { max-width: 820px; margin-bottom: 48px; }
        .sectionHeadingCenter { text-align: center; margin-left: auto; margin-right: auto; }
        .sectionHeadingDark h2, .sectionHeadingDark .sectionIntro { color: ${C.white}; }
        .sectionIntro { font-size: 18px; line-height: 1.65; max-width: 800px; }
        .sectionHeadingCenter .sectionIntro { margin-left: auto; margin-right: auto; }
        .btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 22px; border-radius: 999px; text-decoration: none; font-size: 16px; line-height: 1.2; font-weight: 600; transition: .2s ease; border: 1px solid transparent; }
        .btnPrimary, .btnPrimary:visited, .btnPrimary:hover, .btnPrimary:focus, .btnPrimary:active { background: ${C.magenta}; color: #fff !important; }
        .btnPrimary:hover { background: ${C.magentaDark}; transform: translateY(-1px); }
        .btnPrimary svg, .btnPrimary svg * { color: #fff !important; stroke: #fff !important; }
        .btnSecondary { background: ${C.white}; border-color: #C9CCD1; color: ${C.ink}; }
        .btnSecondary:hover { border-color: #A4A8AE; transform: translateY(-1px); }
        .btnSecondaryDark { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.32); color: ${C.white}; }
        .btn:focus-visible, .textLink:focus-visible, .faqButton:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .iconArrow { width: 18px; height: 18px; flex: 0 0 auto; }
        .icon20 { width: 20px; height: 20px; }
        .icon24 { width: 24px; height: 24px; }
        .textLink { display: inline-flex; align-items: center; gap: 7px; color: ${C.magenta}; text-decoration: none; font-weight: 600; min-height: 44px; }
        .textLink:hover { color: ${C.magentaDark}; }
        .textLink:hover .iconArrow { transform: translateX(2px); }

        /* HERO */
        .hero { background: ${C.white}; padding: 104px 0 96px; }
        .heroGrid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(480px, .85fr); gap: 72px; align-items: center; }
        .heroCopy .bodyLarge { max-width: 700px; color: #42464D; }
        .heroActions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .heroProof { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 48px; padding-top: 28px; border-top: 1px solid rgba(32,35,42,.18); max-width: 760px; }
        .heroProofItem { padding: 0 20px; border-right: 1px solid rgba(32,35,42,.14); }
        .heroProofItem:first-child { padding-left: 0; }
        .heroProofItem:last-child { border-right: 0; }
        .heroProofItem strong { display: block; font-size: 16px; line-height: 1.3; font-weight: 600; }
        .heroProofItem span { display: block; font-size: 16px; color: #666B72; margin-top: 4px; line-height: 1.35; }
        .heroVisual { background: ${C.white}; border: 1px solid #E6DDE1; border-radius: 30px; padding: 26px; box-shadow: 0 24px 60px rgba(36,38,43,.08); min-height: 460px; }
        .heroVisualTop { display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: 14px; font-weight: 600; letter-spacing: .06em; color: #545961; }
        .liveDot { display: inline-flex; align-items: center; gap: 8px; letter-spacing: 0; text-transform: none; }
        .liveDot i { width: 8px; height: 8px; border-radius: 50%; background: ${C.magenta}; display: inline-block; }
        .heroFile { margin-top: 22px; background: #FFF9FC; border: 1px solid #EADDE3; border-radius: 20px; padding: 18px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; }
        .fileIcon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; background: ${C.blush}; color: ${C.magenta}; }
        .heroFile strong { display: block; font-size: 16px; line-height: 1.3; }
        .heroFile span:not(.fileDeadline) { display: block; font-size: 14px; color: #72767D; margin-top: 3px; }
        .fileDeadline { font-size: 14px; font-weight: 600; color: ${C.magenta}; background: ${C.blush}; padding: 7px 10px; border-radius: 999px; white-space: nowrap; }
        .flowTrack { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; margin: 46px 2px 34px; }
        .flowLine { position: absolute; top: 17px; left: 7%; right: 7%; height: 2px; background: #D9C8D0; }
        .flowStage { position: relative; z-index: 2; text-align: center; }
        .flowNode { margin: 0 auto 10px; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: #EFF0F1; border: 1px solid #BFC2C7; color: #585D64; font-size: 14px; font-weight: 600; }
        .flowNodeDone { background: ${C.magenta}; color: #fff; border-color: ${C.magenta}; }
        .flowNodeDone svg { width: 16px; height: 16px; }
        .flowStage strong { font-size: 16px; line-height: 1.25; font-weight: 600; }
        .heroDeliveryGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .heroDeliveryGrid > div { border: 1px solid #EADDE3; background: #FFF9FC; border-radius: 16px; padding: 15px 14px; }
        .heroDeliveryGrid span { display: block; font-size: 14px; letter-spacing: .08em; font-weight: 600; color: #6E7278; }
        .heroDeliveryGrid strong { display: block; font-size: 16px; margin-top: 3px; }
        .heroVisualFoot { display: flex; gap: 22px; flex-wrap: wrap; border-top: 1px solid rgba(32,35,42,.12); margin-top: 22px; padding-top: 18px; }
        .heroVisualFoot span { display: inline-flex; align-items: center; gap: 7px; font-size: 16px; font-weight: 600; color: #52575E; }
        .heroVisualFoot svg { color: ${C.magenta}; }

        /* Deadline selector */
        .deadlineGrid { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid ${C.line}; border-radius: 28px; overflow: hidden; background: ${C.white}; }
        .deadlineCard { padding: 30px 26px; border-right: 1px solid ${C.line}; min-height: 280px; display: flex; flex-direction: column; }
        .deadlineCard:last-child { border-right: 0; }
        .deadlineIcon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: ${C.blush}; color: ${C.magenta}; margin-bottom: 28px; }
        .deadlineCard h3 { font-size: 22px; }
        .deadlineCard p { flex: 1; }
        .deadlineMeta { margin-top: 24px; padding-top: 18px; border-top: 1px solid ${C.line}; font-size: 16px; color: #6E737A; font-weight: 600; }
        .deadlineCta { margin-top: 28px; background: ${C.soft}; border-radius: 22px; padding: 24px 28px; display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .deadlineCta strong { font-size: 18px; line-height: 1.35; }

        /* Overview */
        .overviewGrid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 88px; align-items: start; }
        .overviewGrid .sectionHeading { position: sticky; top: 32px; margin: 0; }
        .overviewText p { font-size: 18px; margin-bottom: 22px; }
        .overviewBullets { margin-top: 34px; border-top: 1px solid ${C.line}; }
        .overviewBullet { display: grid; grid-template-columns: 22px 1fr; gap: 12px; padding: 16px 0; border-bottom: 1px solid ${C.line}; }
        .overviewBullet svg { color: ${C.magenta}; margin-top: 2px; }
        .overviewBullet strong { font-size: 16px; font-weight: 600; }

        /* Built for speed */
        .speedSection { background: ${C.soft}; }
        .compareGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .comparePanel { border-radius: 28px; padding: 36px; border: 1px solid ${C.line}; background: ${C.white}; }
        .comparePanelStepes { background: ${C.blush}; border-color: #F0CADB; }
        .comparePanel h3 { margin-bottom: 26px; }
        .compareRows { border-top: 1px solid rgba(32,35,42,.12); }
        .compareRow { display: grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 17px 0; border-bottom: 1px solid rgba(32,35,42,.10); align-items: center; }
        .compareRow span { width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; background: #ECEDEF; color: #666B72; font-size: 14px; font-weight: 600; }
        .comparePanelStepes .compareRow span { background: ${C.white}; color: ${C.magenta}; }
        .compareRow strong { font-size: 16px; font-weight: 600; }
        .speedStatement { margin-top: 28px; display: grid; grid-template-columns: auto 1fr; gap: 18px; align-items: start; padding: 26px 0 0; }
        .speedRule { width: 3px; height: 58px; border-radius: 4px; background: ${C.magenta}; }
        .speedStatement p { font-size: 18px; max-width: 900px; }

        /* Workflow */
        .workflowRail { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
        .workflowRail:before { content: ""; position: absolute; top: 23px; left: 7%; right: 7%; height: 1px; background: #D3D6DA; }
        .workflowStep { position: relative; z-index: 1; }
        .workflowNum { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 50%; background: ${C.white}; border: 1px solid #BFC3C8; font-size: 14px; font-weight: 600; margin-bottom: 22px; }
        .workflowStep h3 { font-size: 20px; }
        .workflowStep p { font-size: 16px; }

        /* Turnaround */
        .turnaroundSection { background: #F0F0F1; }
        .turnaroundGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #CBCED2; border-bottom: 1px solid #CBCED2; }
        .turnaroundItem { padding: 32px 32px 34px; border-right: 1px solid #CBCED2; }
        .turnaroundItem:first-child { padding-left: 0; }
        .turnaroundItem:last-child { border-right: 0; padding-right: 0; }
        .turnaroundSize { font-size: 16px; color: #6B7077; font-weight: 600; letter-spacing: .02em; text-transform: uppercase; }
        .turnaroundItem h3 { margin-top: 10px; font-size: 22px; }
        .turnaroundTime { display: inline-block; color: ${C.magenta}; font-weight: 600; margin-bottom: 14px; }
        .factorStrip { display: grid; grid-template-columns: 1fr auto; gap: 28px; align-items: center; margin-top: 32px; }
        .factorList { display: flex; flex-wrap: wrap; gap: 9px; }
        .factorList span { font-size: 16px; font-weight: 600; color: #5F646B; background: ${C.white}; border: 1px solid #D8DADD; border-radius: 999px; padding: 8px 12px; }

        /* AI dark */
        .aiSection { background: ${C.dark}; color: ${C.white}; }
        .aiGrid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 72px; align-items: start; }
        .aiGrid .sectionHeading { margin: 0; position: sticky; top: 32px; }
        .aiStatement { margin-top: 30px; padding-top: 26px; border-top: 1px solid rgba(255,255,255,.18); font-size: 18px; color: #ECECEF; }
        .aiRows { border-top: 1px solid rgba(255,255,255,.16); }
        .aiRow { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.16); }
        .aiIcon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: rgba(242,167,198,.10); color: ${C.blushText}; }
        .aiRow h3 { color: ${C.white}; font-size: 20px; margin-bottom: 8px; }
        .aiRow p { color: #D6D7DA; }

        /* Risks */
        .riskMatrix { border: 1px solid ${C.line}; border-radius: 28px; overflow: hidden; }
        .riskHead, .riskRow { display: grid; grid-template-columns: .85fr 1.65fr; }
        .riskHead { background: ${C.soft}; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: #666B72; font-weight: 600; }
        .riskHead > div, .riskRow > div { padding: 18px 28px; }
        .riskHead > div:first-child, .riskRow > div:first-child { border-right: 1px solid ${C.line}; }
        .riskRow { border-top: 1px solid ${C.line}; }
        .riskRow strong { font-size: 17px; font-weight: 600; }
        .riskRow p { font-size: 16px; }

        /* Content types */
        .contentGrid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid ${C.line}; }
        .contentItem { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 30px 28px 30px 0; border-bottom: 1px solid ${C.line}; }
        .contentItem:nth-child(odd) { border-right: 1px solid ${C.line}; padding-right: 42px; }
        .contentItem:nth-child(even) { padding-left: 42px; }
        .contentIcon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: ${C.soft}; color: ${C.ink}; }
        .contentItem h3 { font-size: 20px; margin-bottom: 7px; }
        .contentItem .textLink { margin-top: 9px; }

        /* Industries */
        .industrySection { background: ${C.soft}; }
        .industryRows { border-top: 1px solid #D8DADD; }
        .industryRow { display: grid; grid-template-columns: 220px 1fr auto; gap: 40px; padding: 24px 0; border-bottom: 1px solid #D8DADD; align-items: center; }
        .industryRow h3 { font-size: 20px; margin: 0; }
        .industryRow p { max-width: 760px; }

        /* Scale */
        .scaleGrid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 64px; align-items: center; }
        .scaleCopy .sectionHeading { margin-bottom: 30px; }
        .scaleList { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; border-top: 1px solid ${C.line}; }
        .scaleFeature { padding: 18px 0; border-bottom: 1px solid ${C.line}; }
        .scaleFeature strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .parallelVisual { background: ${C.soft}; border-radius: 30px; padding: 32px; min-height: 470px; position: relative; overflow: hidden; }
        .parallelSource, .parallelOutput { width: 76%; margin: 0 auto; background: ${C.white}; border: 1px solid ${C.line}; border-radius: 18px; padding: 17px 18px; position: relative; z-index: 2; }
        .parallelSource strong, .parallelOutput strong { display: block; font-size: 16px; }
        .parallelSource span, .parallelOutput span { display: block; font-size: 14px; color: #757A81; margin-top: 3px; }
        .parallelSource { margin-top: 6px; }
        .parallelBranches { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 58px 0; position: relative; }
        .parallelBranches:before { content: ""; position: absolute; height: 34px; width: 65%; border-left: 2px solid #B9BDC2; border-right: 2px solid #B9BDC2; border-top: 2px solid #B9BDC2; left: 17.5%; top: -34px; }
        .parallelBranches:after { content: ""; position: absolute; height: 34px; width: 65%; border-left: 2px solid #B9BDC2; border-right: 2px solid #B9BDC2; border-bottom: 2px solid #B9BDC2; left: 17.5%; bottom: -34px; }
        .parallelBranch { background: ${C.white}; border: 1px solid ${C.line}; border-radius: 16px; padding: 18px 12px; text-align: center; position: relative; z-index: 2; }
        .parallelBranch span { display: block; width: 34px; height: 34px; margin: 0 auto 9px; border-radius: 50%; background: ${C.blush}; color: ${C.magenta}; display: grid; place-items: center; font-size: 14px; font-weight: 600; }
        .parallelBranch strong { font-size: 16px; }
        .parallelOutput { border-color: #E4B8CB; background: ${C.blush}; }
        .visualBadge { position: absolute; right: 24px; top: 24px; background: ${C.white}; border: 1px solid ${C.line}; border-radius: 999px; padding: 8px 12px; font-size: 14px; font-weight: 600; color: ${C.magenta}; }

        /* Certified */
        .certifiedBand { background: ${C.blush}; }
        .certifiedGrid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: center; }
        .certifiedDocs { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #EBC3D4; }
        .certifiedDocs span { padding: 15px 0; border-bottom: 1px solid #EBC3D4; font-size: 16px; color: #4E535B; }
        .certifiedDocs span:nth-child(odd) { border-right: 1px solid #EBC3D4; padding-right: 24px; }
        .certifiedDocs span:nth-child(even) { padding-left: 24px; }

        /* Languages */
        .languageGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid ${C.line}; }
        .languageGrid a { min-height: 64px; padding: 16px 16px 16px 0; border-bottom: 1px solid ${C.line}; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-weight: 600; }
        .languageGrid a:not(:nth-child(4n)) { border-right: 1px solid ${C.line}; padding-right: 24px; }
        .languageGrid a:nth-child(4n+2), .languageGrid a:nth-child(4n+3), .languageGrid a:nth-child(4n+4) { padding-left: 24px; }
        .languageGrid a:hover { color: ${C.magenta}; }
        .languageGrid .iconArrow { width: 16px; height: 16px; }
        .languageFoot { margin-top: 28px; display: flex; justify-content: space-between; gap: 30px; align-items: flex-start; }
        .languageFoot p { max-width: 820px; }

        /* Proof */
        .proofSection { background: ${C.dark}; }
        .proofPanel { border: 1px solid rgba(255,255,255,.16); border-radius: 28px; overflow: hidden; }
        .proofGrid { display: grid; grid-template-columns: 1fr 1.1fr; }
        .proofIntro { padding: 42px; background: rgba(255,255,255,.035); }
        .proofIntro h3 { color: ${C.white}; font-size: 28px; }
        .proofIntro p { color: #D7D8DB; font-size: 18px; }
        .proofStory { padding: 42px; border-left: 1px solid rgba(255,255,255,.16); }
        .proofStory p { color: #D7D8DB; font-size: 16px; margin-bottom: 18px; }
        .proofSteps { margin-top: 26px; border-top: 1px solid rgba(255,255,255,.15); }
        .proofStep { display: grid; grid-template-columns: 26px 1fr; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.15); color: #F1F1F2; }
        .proofStep svg { color: ${C.blushText}; margin-top: 2px; }

        /* Pricing */
        .pricingGrid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
        .pricingGrid .sectionHeading { margin: 0; position: sticky; top: 32px; }
        .pricingRows { border-top: 1px solid ${C.line}; }
        .pricingRow { display: grid; grid-template-columns: 180px 1fr; gap: 30px; padding: 20px 0; border-bottom: 1px solid ${C.line}; }
        .pricingRow strong { font-size: 16px; }
        .tmBox { margin-top: 28px; background: ${C.blush}; border-radius: 22px; padding: 26px; }
        .tmBox h3 { font-size: 20px; margin-bottom: 8px; }
        .tmBox .btn { margin-top: 18px; }

        /* Start */
        .startSection { background: ${C.soft}; }
        .startGrid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
        .startGrid .sectionHeading { margin: 0; }
        .startSteps { border-top: 1px solid #D5D7DA; }
        .startStep { display: grid; grid-template-columns: 48px 230px 1fr; gap: 24px; padding: 20px 0; border-bottom: 1px solid #D5D7DA; align-items: start; }
        .startStepNum { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #BFC3C8; font-size: 14px; font-weight: 600; }
        .startStep strong { font-size: 17px; font-weight: 600; padding-top: 5px; }
        .startStep p { padding-top: 5px; }
        .startTip { margin-top: 28px; padding: 24px 26px; border-radius: 22px; background: ${C.white}; border: 1px solid #DCDDE0; }
        .startTip strong { display: block; margin-bottom: 10px; }
        .tipList { display: flex; flex-wrap: wrap; gap: 8px; }
        .tipList span { font-size: 16px; color: #60656C; border: 1px solid ${C.line}; border-radius: 999px; padding: 7px 10px; }

        /* Related */
        .relatedRows { border-top: 1px solid ${C.line}; }
        .relatedRow { display: grid; grid-template-columns: 300px 1fr auto; gap: 34px; align-items: center; padding: 22px 0; border-bottom: 1px solid ${C.line}; }
        .relatedRow h3 { margin: 0; font-size: 19px; }

        /* FAQ */
        .faqSection { background: ${C.soft}; }
        .faqWrap { max-width: 980px; margin: 0 auto; }
        .faqPanel { background: ${C.white}; border: 1px solid ${C.line}; border-radius: 28px; overflow: hidden; }
        .faqItem + .faqItem { border-top: 1px solid ${C.line}; }
        .faqButton { width: 100%; border: 0; background: transparent; color: ${C.ink}; padding: 23px 26px; display: flex; justify-content: space-between; gap: 24px; align-items: center; text-align: left; font-family: inherit; font-size: 17px; line-height: 1.45; font-weight: 600; cursor: pointer; }
        .faqPlus { width: 28px; height: 28px; border-radius: 50%; border: 1px solid #D2D4D8; display: grid; place-items: center; font-size: 20px; line-height: 1; color: ${C.magenta}; flex: 0 0 auto; }
        .faqAnswer { padding: 0 74px 24px 26px; }
        .faqAnswer p { max-width: 840px; }

        /* Final CTA */
        .finalCta { padding: 80px 0; background: ${C.blush}; color: ${C.ink}; border-top: 1px solid #EBC3D4; }
        .finalGrid { display: grid; grid-template-columns: 1fr auto; gap: 56px; align-items: center; }
        .finalGrid h2 { color: ${C.ink}; max-width: 760px; margin-bottom: 16px; }
        .finalGrid p { color: ${C.body}; font-size: 18px; max-width: 760px; }
        .finalActions { display: flex; flex-direction: column; gap: 10px; min-width: 245px; }
        .finalActions .btnSecondary { background: ${C.white}; border-color: #D8B5C4; color: ${C.ink}; }
        .finalActions .btnSecondary:hover { border-color: #BE8EA3; }
        .finalTrust { display: flex; flex-wrap: wrap; gap: 10px 24px; margin-top: 28px; }
        .finalTrust span { display: inline-flex; gap: 7px; align-items: center; font-size: 16px; font-weight: 600; color: #5A4A51; }
        .finalTrust svg { width: 18px; height: 18px; color: ${C.magenta}; }

        @media (max-width: 1100px) {
          .shell { width: min(1280px, calc(100% - 80px)); }
          .heroGrid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .heroProof { grid-template-columns: repeat(2, 1fr); row-gap: 20px; }
          .heroProofItem:nth-child(2) { border-right: 0; }
          .heroProofItem:nth-child(3) { padding-left: 0; }
          .deadlineGrid { grid-template-columns: repeat(2, 1fr); }
          .deadlineCard:nth-child(2) { border-right: 0; }
          .deadlineCard:nth-child(-n+2) { border-bottom: 1px solid ${C.line}; }
          .workflowRail { grid-template-columns: repeat(5, minmax(0,1fr)); gap: 16px; }
          .workflowStep h3 { font-size: 18px; }
          .industryRow { grid-template-columns: 190px 1fr auto; gap: 24px; }
          .languageGrid { grid-template-columns: repeat(3, 1fr); }
          .languageGrid a { border-right: 1px solid ${C.line} !important; padding-left: 18px !important; padding-right: 18px !important; }
          .languageGrid a:nth-child(3n) { border-right: 0 !important; }
        }

        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .sectionDense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .heroGrid, .overviewGrid, .aiGrid, .scaleGrid, .certifiedGrid, .pricingGrid, .startGrid, .proofGrid, .finalGrid { grid-template-columns: 1fr; }
          .heroGrid { gap: 48px; }
          .heroCopy { text-align: center; }
          .heroCopy h1, .heroCopy .bodyLarge { margin-left: auto; margin-right: auto; }
          .heroActions { justify-content: center; }
          .heroProof { margin-left: auto; margin-right: auto; text-align: left; }
          .overviewGrid .sectionHeading, .aiGrid .sectionHeading { position: static; text-align: center; margin: 0 auto 42px; }
          .overviewGrid .sectionHeading .sectionIntro, .aiGrid .sectionHeading .sectionIntro { margin-left: auto; margin-right: auto; }
          .pricingGrid .sectionHeading { position: static; text-align: left; margin: 0 0 42px; }
          .scaleCopy .sectionHeading, .certifiedGrid .sectionHeading { text-align: center; margin-left: auto; margin-right: auto; }
          .certifiedGrid > div:first-child { text-align: center; }
          .compareGrid { grid-template-columns: 1fr; }
          .workflowRail { grid-template-columns: 1fr; gap: 0; border-top: 1px solid ${C.line}; }
          .workflowRail:before { display: none; }
          .workflowStep { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid ${C.line}; }
          .workflowNum { margin: 0; width: 42px; height: 42px; }
          .turnaroundGrid { grid-template-columns: 1fr; }
          .turnaroundItem, .turnaroundItem:first-child, .turnaroundItem:last-child { padding: 26px 0; border-right: 0; border-bottom: 1px solid #CBCED2; }
          .turnaroundItem:last-child { border-bottom: 0; }
          .factorStrip { grid-template-columns: 1fr; }
          .aiGrid { gap: 0; }
          .contentGrid { grid-template-columns: 1fr; }
          .contentItem, .contentItem:nth-child(odd), .contentItem:nth-child(even) { border-right: 0; padding: 26px 0; }
          .industryRow { grid-template-columns: 1fr auto; }
          .industryRow p { grid-column: 1 / -1; grid-row: 2; }
          .scaleGrid { gap: 44px; }
          .proofStory { border-left: 0; border-top: 1px solid rgba(255,255,255,.16); }
          .languageGrid { grid-template-columns: repeat(3, 1fr); }
          .pricingGrid { gap: 0; }
          .startGrid { gap: 42px; }
          .relatedRow { grid-template-columns: 1fr auto; }
          .relatedRow p { grid-column: 1 / -1; }
          .finalActions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .sectionDense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.06; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .bodyLarge, .sectionIntro { font-size: 17px; }
          .hero { padding: 72px 0 68px; }
          .heroActions { flex-direction: column; width: 100%; }
          .heroActions .btn { width: 100%; }
          .heroProof { grid-template-columns: 1fr 1fr; width: 100%; }
          .heroProofItem { padding: 0 12px; }
          .heroVisual { padding: 20px; min-height: 0; }
          .heroVisualTop { align-items: flex-start; flex-direction: column; gap: 8px; }
          .heroFile { grid-template-columns: auto 1fr; }
          .fileDeadline { grid-column: 2; justify-self: start; }
          .flowTrack { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 24px; margin: 34px 0 28px; }
          .flowLine { display: none; }
          .heroDeliveryGrid { grid-template-columns: 1fr; }
          .heroVisualFoot { flex-direction: column; gap: 8px; }
          .deadlineGrid { grid-template-columns: 1fr; }
          .deadlineCard { min-height: 0; border-right: 0; border-bottom: 1px solid ${C.line}; }
          .deadlineCard:last-child { border-bottom: 0; }
          .deadlineCta { flex-direction: column; align-items: stretch; }
          .deadlineCta .btn { width: 100%; }
          .sectionHeadingCenter { text-align: center; }
          .overviewGrid .sectionHeading, .aiGrid .sectionHeading { text-align: center; }
          .pricingGrid .sectionHeading { text-align: left; }
          .scaleCopy .sectionHeading, .certifiedGrid .sectionHeading { text-align: center; }
          .overviewText p { font-size: 17px; }
          .comparePanel { padding: 26px 22px; }
          .speedStatement { grid-template-columns: 3px 1fr; }
          .workflowStep { grid-template-columns: 44px 1fr; gap: 14px; }
          .factorList { gap: 7px; }
          .aiRow { grid-template-columns: 44px 1fr; gap: 16px; }
          .aiIcon { width: 40px; height: 40px; }
          .riskHead { display: none; }
          .riskRow { grid-template-columns: 1fr; padding: 20px 0; }
          .riskRow > div, .riskRow > div:first-child { padding: 5px 22px; border-right: 0; }
          .riskRow strong:before { content: "RUSH RISK"; display: block; font-size: 14px; line-height: 1.2; letter-spacing: .08em; color: ${C.magenta}; margin-bottom: 6px; }
          .riskRow p:before { content: "STEPES CONTROL"; display: block; font-size: 14px; line-height: 1.2; letter-spacing: .08em; color: ${C.magenta}; font-weight: 600; margin-bottom: 6px; }
          .contentItem { grid-template-columns: 44px 1fr; gap: 16px; }
          .contentIcon { width: 40px; height: 40px; }
          .industryRow { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .industryRow p { grid-column: 1; grid-row: auto; }
          .industryRow .textLink { margin-top: 4px; justify-self: start; }
          .scaleList { grid-template-columns: 1fr; }
          .parallelVisual { padding: 24px 18px; }
          .parallelSource, .parallelOutput { width: 100%; }
          .parallelBranches { gap: 8px; }
          .parallelBranch { padding: 14px 6px; }
          .parallelBranch strong { font-size: 16px; }
          .certifiedDocs { grid-template-columns: 1fr; }
          .certifiedDocs span, .certifiedDocs span:nth-child(odd), .certifiedDocs span:nth-child(even) { border-right: 0; padding: 13px 0; }
          .languageGrid { grid-template-columns: 1fr 1fr; }
          .languageGrid a { border-right: 1px solid ${C.line} !important; padding: 14px 12px 14px 0 !important; }
          .languageGrid a:nth-child(even) { border-right: 0 !important; padding-left: 16px !important; }
          .languageFoot { flex-direction: column; }
          .proofIntro, .proofStory { padding: 28px 22px; }
          .pricingRow { grid-template-columns: 1fr; gap: 7px; }
          .startStep { grid-template-columns: 42px 1fr; gap: 14px; }
          .startStep p { grid-column: 2; padding-top: 0; }
          .relatedRow { grid-template-columns: 1fr; gap: 7px; }
          .relatedRow p { grid-column: 1; }
          .relatedRow .textLink { justify-self: start; }
          .faqButton { padding: 20px; font-size: 16px; }
          .faqAnswer { padding: 0 20px 22px; }
          .finalCta { padding: 68px 0; }
          .finalGrid { text-align: center; }
          .finalGrid p { margin-left: auto; margin-right: auto; }
          .finalActions { flex-direction: column; width: 100%; }
          .finalActions .btn { width: 100%; }
          .finalTrust { justify-content: center; }
          .heroDeliveryGrid > div { padding: 14px 16px; }
        }

        @media (max-width: 350px) {
          .heroProof { grid-template-columns: 1fr; }
          .heroProofItem, .heroProofItem:first-child, .heroProofItem:nth-child(3) { padding: 10px 0; border-right: 0; border-bottom: 1px solid rgba(32,35,42,.14); }
          .heroProofItem:last-child { border-bottom: 0; }
          .languageGrid { grid-template-columns: 1fr; }
          .parallelVisual { padding-left: 14px; padding-right: 14px; }
          .parallelBranches { gap: 5px; }
          .parallelBranch { padding-left: 4px; padding-right: 4px; }
          .languageGrid a, .languageGrid a:nth-child(even) { border-right: 0 !important; padding-left: 0 !important; }
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1>Fast Translation Services for Urgent Deadlines</h1>
            <p className="bodyLarge">Professional translation for same-day, 24-hour, overnight, and custom rush deadlines across 100+ languages. Stepes combines professional linguists, AI-enabled workflow automation, translation memory, terminology management, and quality controls to help businesses move time-sensitive content faster.</p>
            <div className="heroActions">
              <PrimaryButton href={quoteUrl}>Get a Fast Translation Quote</PrimaryButton>
              <SecondaryButton href={contactUrl}>Talk to a Project Manager</SecondaryButton>
            </div>
            <div className="heroProof" aria-label="Fast translation service highlights">
              <div className="heroProofItem"><strong>Same-Day & 24-Hour</strong><span>Options for qualifying projects</span></div>
              <div className="heroProofItem"><strong>100+ Languages</strong><span>Global and regional coverage</span></div>
              <div className="heroProofItem"><strong>AI + Human</strong><span>Technology with professional judgment</span></div>
              <div className="heroProofItem"><strong>ISO-Certified Processes</strong><span>Quality and translation standards</span></div>
            </div>
          </div>
          <HeroFlow />
        </div>
      </section>

      <section className="section" id="turnaround-options">
        <div className="shell">
          <SectionHeading eyebrow="Your Deadline" title="How Fast Do You Need Your Translation?" intro="Deadlines vary. So should the translation workflow. Tell us when you need the finished files, and Stepes will determine the fastest professional delivery option based on your content, languages, volume, complexity, and quality requirements." />
          <div className="deadlineGrid">
            {deadlineCards.map((item) => (
              <article className="deadlineCard" key={item.title}>
                <div className="deadlineIcon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="deadlineMeta">{item.meta}</div>
              </article>
            ))}
          </div>
          <div className="deadlineCta">
            <strong>Have a hard deadline? Upload your files and tell us the exact delivery date and time.</strong>
            <PrimaryButton href={quoteUrl}>Get a Fast Quote</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="sectionDense">
        <div className="shell overviewGrid">
          <SectionHeading title="Professional Translation at Accelerated Speed" center={false} />
          <div className="overviewText">
            <p>Fast translation is not simply a matter of asking translators to work faster. Professional rush translation requires removing unnecessary delays from the process while protecting linguistic quality, terminology consistency, formatting, and the usability of the finished content.</p>
            <p>Stepes accelerates translation through technology-enabled project intake, rapid resource matching, translation memory, terminology management, parallel production, automated quality checks, and coordinated human review.</p>
            <p>For straightforward content, the workflow can move extremely quickly. For legal, medical, technical, regulatory, or other specialized materials, Stepes assigns linguists with the appropriate subject-matter expertise and builds the fastest workflow that is responsible for the content.</p>
            <div className="overviewBullets">
              {["Technology accelerates workflow", "Global linguists accelerate resourcing", "Parallel production accelerates volume", "Translation memory and terminology accelerate reuse", "Quality controls protect the finished content"].map((x) => <div className="overviewBullet" key={x}><Check/><strong>{x}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section speedSection">
        <div className="shell">
          <SectionHeading eyebrow="Built for Speed" title="Why Stepes Can Deliver Translations Faster" intro="Stepes was built around an on-demand translation model that uses technology to reduce administrative delays and connect projects with qualified language resources more efficiently." />
          <div className="compareGrid">
            <article className="comparePanel">
              <h3>Traditional Translation Workflow</h3>
              <div className="compareRows">
                {["Receive files", "Manual analysis", "Manual quote preparation", "Resource sourcing", "Project setup", "Translation & review", "File preparation", "Delivery"].map((x, i) => <div className="compareRow" key={x}><span>{i+1}</span><strong>{x}</strong></div>)}
              </div>
            </article>
            <article className="comparePanel comparePanelStepes">
              <h3>The Stepes Fast Translation Workflow</h3>
              <div className="compareRows">
                {["Upload", "Automated analysis", "Rapid resource matching", "Parallel translation when needed", "AI-enabled QA + human review", "Delivery"].map((x, i) => <div className="compareRow" key={x}><span>{i+1}</span><strong>{x}</strong></div>)}
              </div>
            </article>
          </div>
          <div className="speedStatement"><div className="speedRule"/><p><strong>Speed through better workflow design.</strong> The goal is not to eliminate important quality steps. It is to eliminate unnecessary waiting between them.</p></div>
        </div>
      </section>

      <section className="section" id="how-fast-translation-works">
        <div className="shell">
          <SectionHeading eyebrow="How It Works" title="From File Upload to Delivery Without Unnecessary Delays" intro="Every urgent translation project begins with a clear understanding of what must be translated, how the translation will be used, and when it must be ready." />
          <div className="workflowRail">
            {workflow.map(([title, copy], i) => (
              <article className="workflowStep" key={title}>
                <div className="workflowNum">{String(i + 1).padStart(2,"0")}</div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <div style={{marginTop:32, textAlign:"center"}}><PrimaryButton href={quoteUrl}>Upload Your Files</PrimaryButton></div>
        </div>
      </section>

      <section className="section turnaroundSection">
        <div className="shell">
          <SectionHeading eyebrow="Turnaround" title="How Fast Can We Translate Your Content?" intro="Translation turnaround depends on more than word count, but project size provides a useful starting point when planning urgent delivery." />
          <div className="turnaroundGrid">
            {turnaround.map((item) => <article className="turnaroundItem" key={item.size}><div className="turnaroundSize">{item.size}</div><h3>{item.label}</h3><span className="turnaroundTime">{item.time}</span><p>{item.copy}</p></article>)}
          </div>
          <div className="factorStrip">
            <div className="factorList">{["Language pair","Subject matter","File format","TM leverage","Review level","Number of languages"].map(x => <span key={x}>{x}</span>)}</div>
            <TextLink href={quoteUrl}>Check My Turnaround</TextLink>
          </div>
        </div>
      </section>

      <section className="section aiSection">
        <div className="shell aiGrid">
          <div>
            <SectionHeading title="AI Speed. Professional Human Accountability." intro="Modern translation technology can remove significant friction from urgent multilingual projects. Stepes uses automation where technology creates efficiency and professional linguists where language, context, subject knowledge, and judgment matter." center={false} dark />
            <p className="aiStatement"><strong>AI where it creates efficiency. Human expertise where judgment matters.</strong> Fast translation describes the turnaround requirement, not uncontrolled machine output.</p>
          </div>
          <div className="aiRows">
            {aiFeatures.map(([title, copy, icon]) => <article className="aiRow" key={title}><div className="aiIcon"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Quality Under Pressure" title="Fast Translation Without the Common Rush-Project Risks" intro="Urgent translation introduces risks that do not always appear in projects with flexible schedules. The solution is to manage those risks from the beginning rather than remove the controls designed to catch them." />
          <div className="riskMatrix">
            <div className="riskHead"><div>Rush Risk</div><div>Stepes Control</div></div>
            {riskRows.map(([risk, control]) => <div className="riskRow" key={risk}><div><strong>{risk}</strong></div><div><p>{control}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="sectionDense" id="documents-we-translate">
        <div className="shell">
          <SectionHeading title="Fast Translation for Business-Critical Content" intro="Stepes provides accelerated translation for a wide range of business, technical, legal, regulated, and customer-facing materials." />
          <div className="contentGrid">
            {contentTypes.map(item => <article className="contentItem" key={item.title}><div className="contentIcon"><Icon name={item.icon}/></div><div><h3>{item.title}</h3><p>{item.copy}</p><TextLink href={item.url}>{item.link}</TextLink></div></article>)}
          </div>
        </div>
      </section>

      <section className="section industrySection">
        <div className="shell">
          <SectionHeading title="Fast Translation for Time-Critical Industries" intro="Some industries face deadlines where multilingual content cannot simply wait for a standard production schedule. Stepes builds expedited workflows around the operational realities of these sectors." />
          <div className="industryRows">
            {industries.map(([title, copy, linkLabel, url]) => <article className="industryRow" key={title}><h3>{title}</h3><p>{copy}</p><TextLink href={url}>{linkLabel}</TextLink></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell scaleGrid">
          <div className="scaleCopy">
            <SectionHeading eyebrow="Speed at Scale" title="Need More Than a Few Pages Translated Fast?" intro="Large-volume urgent translation is a different challenge from translating a short document. It requires coordinated production rather than simply asking one translator to work faster." center={false} />
            <div className="scaleList">
              {scaleFeatures.map(([title, copy]) => <div className="scaleFeature" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
            <div style={{marginTop:26}}><TextLink href={contactUrl}>Discuss a Large Rush Project</TextLink></div>
          </div>
          <div className="parallelVisual" aria-label="Parallel translation workflow illustration">
            <div className="visualBadge">Parallel workflow</div>
            <div className="parallelSource"><strong>Large Source Package</strong><span>Files, translation memory, terminology, instructions</span></div>
            <div className="parallelBranches">
              {["Team A","Team B","Team C"].map((x,i)=><div className="parallelBranch" key={x}><span>{i+1}</span><strong>{x}</strong></div>)}
            </div>
            <div className="parallelOutput"><strong>Coordinated Multilingual Delivery</strong><span>Shared terminology · quality checks · coordinated review</span></div>
          </div>
        </div>
      </section>

      <section className="sectionDense certifiedBand">
        <div className="shell certifiedGrid">
          <div>
            <SectionHeading eyebrow="Official Documents" title="Need a Certified Translation Urgently?" intro="Time-sensitive official documents sometimes require both rapid turnaround and formal certification. Rush certified translation may be available for qualifying documents depending on the language pair, source quality, formatting, and certification requirements." center={false}/>
            <TextLink href="https://www.stepes.com/certified-translation-services/">Certified Translation Services</TextLink>
          </div>
          <div className="certifiedDocs">
            {["Birth certificates","Marriage certificates","Academic records","Diplomas","Immigration documents","Court documents","Corporate records","Employment records","Financial documents","Other official materials"].map(x => <span key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Fast Translation Services in 100+ Languages" intro="Stepes supports professional translation across more than 100 languages, helping organizations respond quickly to multilingual requirements across global markets." />
          <div className="languageGrid">
            {languages.map(([name,url]) => <a href={url} key={name}><span>{name}</span><Arrow/></a>)}
          </div>
          <div className="languageFoot"><p>Rush availability varies by language pair, specialization, project size, and required workflow. For recurring programs, established translators, translation memory, terminology resources, and previous project knowledge can further accelerate future turnaround.</p><TextLink href="https://www.stepes.com/translation-languages/">View All Languages</TextLink></div>
        </div>
      </section>

      <section className="section proofSection">
        <div className="shell">
          <SectionHeading eyebrow="Proven Under Deadline" title="When an Unexpected Deadline Becomes a Translation Project" intro="Urgent multilingual requirements are not always planned. The faster the deadline, the more important coordinated resources and quality controls become." dark />
          <div className="proofPanel">
            <div className="proofGrid">
              <div className="proofIntro"><h3>One Coordinated Path From Urgency to Delivery</h3><p>A global organization needed customer-facing communications translated across multiple languages following an unexpected business update. The content had to be released quickly and consistently across markets.</p></div>
              <div className="proofStory">
                <p>Stepes reviewed the files, confirmed the project requirements and delivery feasibility, then coordinated translators and parallel workflows across the required languages.</p>
                <p>The translated communications were completed according to the agreed schedule, allowing the organization to move forward with its international release without waiting for a conventional translation timeline.</p>
                <div className="proofSteps">
                  {["Scope and deadline confirmed upfront","Qualified resources coordinated across languages","Parallel production used where appropriate","Shared terminology and quality controls applied","Delivery completed to the agreed plan"].map(x => <div className="proofStep" key={x}><Check/><span>{x}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="pricing-and-quotes">
        <div className="shell pricingGrid">
          <SectionHeading title="How Much Does Fast Translation Cost?" intro="There is no single rush-translation price that applies to every project. Pricing depends on the resources and workflow required to meet the requested deadline." center={false} />
          <div>
            <div className="pricingRows">
              {pricingFactors.map(([title,copy]) => <div className="pricingRow" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
            <div className="tmBox"><h3>Translation Memory Can Reduce Time and Cost</h3><p>If your files contain repeated content or text previously translated by Stepes, translation memory can identify reusable segments. This can reduce the amount of new translation required while helping maintain consistency with previous projects.</p><PrimaryButton href={quoteUrl}>Upload Files for Pricing</PrimaryButton></div>
          </div>
        </div>
      </section>

      <section className="section startSection">
        <div className="shell startGrid">
          <SectionHeading eyebrow="Get Started" title="Have a Deadline? Here’s What to Send Us." intro="Starting an urgent translation project should be simple. Providing complete project information upfront helps Stepes confirm feasibility and begin work faster." center={false} />
          <div>
            <div className="startSteps">
              {[
                ["Upload Your Files","Send the source documents that need translation."],
                ["Select Your Languages","Tell us the source language and each target language or locale required."],
                ["Give Us the Exact Deadline","Include both the date and time whenever the deadline is fixed."],
                ["Share Important Requirements","Provide terminology, references, previous translations, formatting instructions, certification needs, or other relevant information."],
                ["Receive Pricing & Turnaround Confirmation","Stepes reviews the project and confirms the proposed workflow, pricing, and delivery schedule."],
                ["Approve & Start","Once approved, the project moves into production according to the agreed plan."],
              ].map(([title,copy],i) => <div className="startStep" key={title}><div className="startStepNum">{String(i+1).padStart(2,"0")}</div><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
            <div className="startTip"><strong>Help us move even faster when available:</strong><div className="tipList">{["Editable source files","Final content","Exact target locales","Previous translations","Approved glossaries","Translation memories","Reference materials","Clear review instructions"].map(x=><span key={x}>{x}</span>)}</div></div>
            <div style={{marginTop:24}}><PrimaryButton href={quoteUrl}>Upload Your Files</PrimaryButton></div>
          </div>
        </div>
      </section>

      <section className="sectionDense">
        <div className="shell">
          <SectionHeading title="Related Translation Services" intro="Choose the service that best matches your content, delivery model, and quality requirements." />
          <div className="relatedRows">
            {related.map(([title,copy,url]) => <article className="relatedRow" key={title}><h3>{title}</h3><p>{copy}</p><TextLink href={url}>View {title}</TextLink></article>)}
          </div>
        </div>
      </section>

      <section className="section faqSection" id="frequently-asked-questions">
        <div className="shell faqWrap">
          <SectionHeading title="Frequently Asked Questions" intro="Practical answers about same-day, 24-hour, overnight, rush, urgent, and expedited professional translation." />
          <div className="faqPanel">
            {faqs.map(([q,a],i) => <FAQItem key={q} q={q} a={a} open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalGrid">
          <div>
            <Eyebrow>Need It Fast?</Eyebrow>
            <h2>Tell Us Your Deadline. We’ll Take It From There.</h2>
            <p>Upload your files, select your languages, and provide the required delivery date and time. Stepes will review the project and confirm the fastest available professional turnaround along with clear pricing before work begins.</p>
            <div className="finalTrust">{["100+ Languages","Professional Linguists","AI-Enabled Workflows","Quality-Controlled Delivery","Secure File Handling"].map(x=><span key={x}><Check/>{x}</span>)}</div>
          </div>
          <div className="finalActions">
            <PrimaryButton href={quoteUrl}>Get a Fast Translation Quote</PrimaryButton>
            <SecondaryButton href={contactUrl}>Talk to a Project Manager</SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
