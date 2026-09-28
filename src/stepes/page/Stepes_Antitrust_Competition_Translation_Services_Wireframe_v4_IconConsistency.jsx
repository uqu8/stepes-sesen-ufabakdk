import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  pinkLight: "#F2A7C6",
  ink: "#18181B",
  text: "#3F3F46",
  muted: "#71717A",
  line: "#E4E4E7",
  soft: "#F7F7F8",
  soft2: "#F2F2F3",
  dark: "#25262A",
  white: "#FFFFFF",
};

const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={open ? "chevron open" : "chevron"}>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LineIcon = ({ type, size = 24 }) => {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    merger: <><rect x="3.5" y="5" width="7" height="14" rx="1.5" {...common}/><rect x="13.5" y="5" width="7" height="14" rx="1.5" {...common}/><path d="M10.5 12h3" {...common}/><path d="m12 10 2 2-2 2" {...common}/></>,
    request: <><path d="M7 3.5h7l4 4V20.5H7z" {...common}/><path d="M14 3.5v4h4" {...common}/><path d="M10 12h5M10 15h5" {...common}/><circle cx="8" cy="8" r="3.2" fill="white" {...common}/><path d="m5.8 8 1.3 1.3 2.7-2.8" {...common}/></>,
    investigation: <><circle cx="10.5" cy="10.5" r="5.5" {...common}/><path d="m14.5 14.5 5 5" {...common}/><path d="M8.2 8.7h4.5M8.2 11.2h3.2" {...common}/></>,
    regulator: <><path d="M4 9h16M6 9V19M10 9V19M14 9V19M18 9V19M3 19h18" {...common}/><path d="m12 3 8 4H4z" {...common}/></>,
    market: <><path d="M4 18V10M10 18V6M16 18v-4M22 18H2" {...common}/><path d="m4 8 6-4 6 6 5-4" {...common}/></>,
    litigation: <><path d="M5 5h14M7 5v14M17 5v14M4 19h16" {...common}/><path d="M12 8v7M9 11h6" {...common}/></>,
    language: <><path d="M4 5h8v10H7l-3 3z" {...common}/><path d="M12 9h8v10h-3l-3 3v-7" {...common}/><path d="M6.5 8h3M6.5 11h2" {...common}/></>,
    speed: <><circle cx="12" cy="12" r="8.5" {...common}/><path d="M12 7v5l4 2" {...common}/></>,
    expertise: <><path d="m12 3 2.7 5.5 6 .9-4.35 4.2 1 6-5.35-2.8-5.35 2.8 1-6L3.3 9.4l6-.9z" {...common}/></>,
    layers: <><path d="m12 4 8 4-8 4-8-4z" {...common}/><path d="m4 12 8 4 8-4M4 16l8 4 8-4" {...common}/></>,
    security: <><path d="M12 3.5 19 6v5.6c0 4.2-2.5 7-7 8.9-4.5-1.9-7-4.7-7-8.9V6z" {...common}/><path d="m9 12 2 2 4-4" {...common}/></>,
    file: <><path d="M6 3.5h8l4 4V20H6z" {...common}/><path d="M14 3.5v4h4M9 12h6M9 15h6" {...common}/></>,
    finance: <><path d="M4 18h16M6 15l4-4 3 2 5-6" {...common}/><circle cx="6" cy="15" r="1" fill="currentColor"/><circle cx="10" cy="11" r="1" fill="currentColor"/><circle cx="13" cy="13" r="1" fill="currentColor"/><circle cx="18" cy="7" r="1" fill="currentColor"/></>,
    commercial: <><path d="M4 8h16v11H4z" {...common}/><path d="M8 8V5h8v3M9 12h6" {...common}/></>,
    technical: <><circle cx="12" cy="12" r="3" {...common}/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...common}/></>,
    legal: <><path d="M6 4h12v16H6z" {...common}/><path d="M9 8h6M9 11h6M9 14h4" {...common}/></>,
    glossary: <><path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" {...common}/><path d="M8 7h7M8 10h5M8 13h6" {...common}/></>,
    people: <><circle cx="9" cy="8" r="3" {...common}/><circle cx="17" cy="10" r="2.5" {...common}/><path d="M3.5 19c.6-4 2.6-6 5.5-6s4.9 2 5.5 6M14 15c2.8 0 4.6 1.3 5.2 4" {...common}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[type] || paths.file}</svg>;
};

const ButtonLink = ({ href, children, secondary = false }) => (
  <a className={secondary ? "btn btn-secondary" : "btn btn-primary"} href={href}>
    <span>{children}</span>
    <ArrowIcon />
  </a>
);

const EditorialLink = ({ href, children, light = false }) => (
  <a className={light ? "editorial-link light" : "editorial-link"} href={href}>
    <span>{children}</span>
    <ArrowIcon size={15} />
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, centered = false, dark = false, className = "" }) => (
  <div className={`section-heading ${centered ? "centered" : ""} ${dark ? "dark-copy" : ""} ${className}`.trim()}>
    {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const HeroVisual = () => (
  <div className="hero-visual" role="img" aria-label="Illustration of multilingual antitrust document review">
    <svg viewBox="0 0 640 540" aria-hidden="true">
      <defs>
        <linearGradient id="accentFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C11D63" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7A1542" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect x="22" y="26" width="596" height="486" rx="38" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="2" />
      <rect x="46" y="50" width="548" height="438" rx="30" fill="#FBFBFC" />
      <circle cx="514" cy="122" r="72" fill="url(#accentFill)" />
      <circle cx="112" cy="414" r="54" fill="#FDF2F7" />
      <path d="M160 154C232 104 311 104 384 153" stroke="#D4D4D8" strokeWidth="2.5" strokeDasharray="7 8" fill="none" />
      <path d="M226 372C316 414 430 392 488 318" stroke="#D4D4D8" strokeWidth="2.5" strokeDasharray="7 8" fill="none" />
      <g transform="translate(86 112)">
        <rect width="190" height="232" rx="22" fill="#FFFFFF" stroke="#D8D8DC" strokeWidth="2" />
        <rect x="22" y="24" width="82" height="10" rx="5" fill="#C11D63" opacity="0.84" />
        <rect x="22" y="52" width="146" height="8" rx="4" fill="#D4D4D8" />
        <rect x="22" y="70" width="124" height="8" rx="4" fill="#E4E4E7" />
        <rect x="22" y="102" width="146" height="52" rx="12" fill="#F7F7F8" />
        <path d="M38 138l22-18 18 10 28-24 28 18" stroke="#71717A" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="138" r="4" fill="#C11D63" />
        <circle cx="60" cy="120" r="4" fill="#A3A3A8" />
        <circle cx="78" cy="130" r="4" fill="#A3A3A8" />
        <circle cx="106" cy="106" r="4" fill="#C11D63" />
        <circle cx="134" cy="124" r="4" fill="#A3A3A8" />
        <rect x="22" y="176" width="60" height="30" rx="15" fill="#FDF2F7" />
        <rect x="94" y="176" width="74" height="30" rx="15" fill="#F2F2F3" />
      </g>
      <g transform="translate(342 92)">
        <rect width="174" height="208" rx="22" fill="#FFFFFF" stroke="#D8D8DC" strokeWidth="2" />
        <rect x="22" y="23" width="70" height="10" rx="5" fill="#7A1542" opacity="0.72" />
        <rect x="22" y="50" width="129" height="8" rx="4" fill="#D4D4D8" />
        <rect x="22" y="68" width="112" height="8" rx="4" fill="#E4E4E7" />
        <rect x="22" y="98" width="130" height="84" rx="14" fill="#F7F7F8" />
        <circle cx="56" cy="140" r="20" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
        <path d="M48 140l6 6 11-13" stroke="#C11D63" strokeWidth="2.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="88" y="122" width="44" height="7" rx="3.5" fill="#A3A3A8" />
        <rect x="88" y="139" width="52" height="7" rx="3.5" fill="#D4D4D8" />
        <rect x="88" y="156" width="38" height="7" rx="3.5" fill="#E4E4E7" />
      </g>
      <g transform="translate(318 338)">
        <rect width="218" height="108" rx="20" fill="#2F3035" />
        <rect x="22" y="22" width="92" height="9" rx="4.5" fill="#F2A7C6" />
        <rect x="22" y="50" width="174" height="7" rx="3.5" fill="#6A6B70" />
        <rect x="22" y="68" width="132" height="7" rx="3.5" fill="#5B5C61" />
        <circle cx="183" cy="72" r="15" fill="#C11D63" />
        <path d="M177 72h12M184 66l6 6-6 6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(206 356)">
        <circle cx="42" cy="42" r="42" fill="#FFFFFF" stroke="#D8D8DC" strokeWidth="2" />
        <path d="M24 45c8-16 28-20 40-7" stroke="#71717A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M27 55c10-8 26-8 35 0" stroke="#C11D63" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <circle cx="33" cy="31" r="5" fill="#D4D4D8" />
        <circle cx="54" cy="27" r="5" fill="#D4D4D8" />
      </g>
    </svg>
  </div>
);

const matterTypes = [
  {
    icon: "merger",
    title: "Merger Control",
    text: "Support cross-border merger review with multilingual translation of transaction descriptions, market information, corporate records, financial evidence, regulatory correspondence, notification materials, and supporting documents.",
    link: "https://www.stepes.com/merger-acquisition-translation-services/",
    linkLabel: "M&A Translation Services",
  },
  {
    icon: "request",
    title: "Second Requests",
    text: "Process high-volume multilingual documents and electronically stored information during detailed U.S. merger review, from language identification and AI-assisted translation through professional validation and enhanced review for selected documents.",
  },
  {
    icon: "investigation",
    title: "Competition Investigations",
    text: "Support internal and government investigations involving alleged anticompetitive conduct, pricing practices, distribution arrangements, market behavior, communications, contracts, and related business evidence.",
    link: "https://www.stepes.com/investigation-translation-services/",
    linkLabel: "Investigation Translation Services",
  },
  {
    icon: "regulator",
    title: "Regulatory Information Requests",
    text: "Translate questions, responses, exhibits, internal documents, supporting evidence, corporate information, financial materials, and other content identified by counsel for submission or regulatory review.",
  },
  {
    icon: "market",
    title: "Market Studies & Competition Inquiries",
    text: "Support multilingual information relating to products, services, competitors, customers, pricing, distribution, market structure, commercial practices, technology, and other areas relevant to market inquiries.",
  },
  {
    icon: "litigation",
    title: "Competition Litigation & Proceedings",
    text: "Translate evidence, pleadings, expert materials, exhibits, correspondence, interview records, hearing materials, and related content for antitrust litigation and other competition proceedings.",
    link: "https://www.stepes.com/litigation-translation-services/",
    linkLabel: "Litigation Translation Services",
  },
];

const secondRequestSteps = [
  { title: "Multilingual Document Population", text: "Receive and organize foreign-language content across supported document types, languages, and workstreams." },
  { title: "Language Identification & Preparation", text: "Identify relevant languages and prepare supported files for multilingual processing, including OCR where appropriate for scanned content." },
  { title: "AI-Assisted Translation & Screening", text: "Use secure AI-assisted translation where approved and appropriate to accelerate initial understanding across large document populations." },
  { title: "Reviewer Prioritization", text: "Enable counsel and authorized review teams to identify documents that require greater attention based on the needs of the matter." },
  { title: "Professional Legal Translation", text: "Move selected materials to qualified legal linguists and subject-matter specialists for higher levels of linguistic review." },
  { title: "Enhanced Review for Key Documents", text: "Apply additional independent review or designated QA to high-consequence documents according to client requirements." },
];

const qualityLevels = [
  {
    n: "01",
    title: "Rapid Understanding & Triage",
    text: "Designed for large-volume content that initially needs to be understood, categorized, or prioritized, including preliminary screening, email collections, internal communications, discovery review, and other attorney-directed triage. Where customer-approved and appropriate, secure AI-assisted translation can provide rapid multilingual understanding before selected content moves to deeper review.",
  },
  {
    n: "02",
    title: "AI + Professional Validation",
    text: "Designed for high-volume content requiring greater confidence than initial AI-assisted screening. Professional linguists validate meaning, terminology, names, numbers, and other important content using approved references and quality controls.",
  },
  {
    n: "03",
    title: "Expert Human Translation",
    text: "Designed for important legal, economic, financial, commercial, and technical documents where context and professional judgment are critical, including significant evidence, interviews, economic analyses, contracts, and key internal records.",
  },
  {
    n: "04",
    title: "Independent Review",
    text: "For customer-designated high-consequence content, Stepes can add an independent linguistic review layer for regulatory submissions, formal responses, key evidentiary materials, expert reports, and other designated documents.",
  },
];

const ediscoveryItems = [
  ["language", "Identify Languages", "Determine languages and regional variants across multilingual document populations."],
  ["layers", "Translate for Review", "Use scalable translation technology and professional language resources to make foreign-language content accessible to authorized review teams."],
  ["market", "Prioritize Important Content", "Support attorney-directed review by providing multilingual output that helps legal teams identify documents requiring further attention."],
  ["expertise", "Escalate Selected Documents", "Move designated materials from initial translation into professional legal review, subject-matter translation, or additional linguistic QA."],
  ["file", "Maintain Document Usability", "Support translations that preserve relevant structure, formatting, tables, and document context where required by the project workflow."],
  ["people", "Coordinate Across Teams", "Work alongside law firms, corporate legal departments, eDiscovery providers, review teams, and other approved stakeholders."],
];

const documentGroups = [
  ["Internal Communications", "Emails, instant messages, chat records, internal memoranda, presentations, meeting materials, executive communications, employee correspondence, and other internal records."],
  ["Commercial & Market Materials", "Pricing documentation, sales reports, competitive analyses, customer information, market research, product strategies, distribution materials, marketing plans, commercial forecasts, and market-share information."],
  ["Contracts & Agreements", "Customer agreements, supplier contracts, distribution agreements, licensing arrangements, joint ventures, partnership agreements, exclusivity provisions, commercial contracts, and related correspondence."],
  ["Corporate & Transaction Records", "Board materials, transaction documents, corporate records, organizational materials, strategic plans, due-diligence files, management presentations, and transaction-related correspondence."],
  ["Financial & Economic Evidence", "Financial statements, budgets, forecasts, pricing analyses, margin information, valuations, economic reports, competition analyses, market studies, datasets, and supporting financial documentation."],
  ["Investigation & Witness Materials", "Interview notes, witness statements, questionnaires, transcripts, investigation reports, meeting records, supporting exhibits, and related evidence."],
  ["Regulatory Materials", "Information requests, responses, notification materials, transaction descriptions, supporting exhibits, corporate information, regulator correspondence, economic evidence, and formal submissions."],
];

const expertise = [
  ["legal", "Legal", "Contracts, regulatory correspondence, investigations, submissions, corporate records, witness materials, evidentiary documents, and legal communications."],
  ["market", "Economic", "Market definitions, competition analyses, market-share studies, econometric materials, economic reports, industry analyses, and expert content."],
  ["finance", "Financial", "Financial statements, forecasts, pricing information, margins, valuations, accounting materials, financial analyses, and supporting data."],
  ["commercial", "Commercial", "Sales strategy, customer information, distribution, product positioning, market research, marketing plans, competitor information, and commercial communications."],
  ["technical", "Technical", "Engineering documentation, software, product specifications, manufacturing information, R&D materials, scientific content, technical reports, and technology-related evidence."],
];

const terminologyItems = [
  ["Matter Glossaries", "Capture approved equivalents for competition terminology, products, companies, markets, business units, technical concepts, and other recurring terms."],
  ["Translation Memory", "Reuse validated translations across related documents to improve consistency and reduce unnecessary rework."],
  ["Defined Terms", "Maintain consistent translations of defined legal, commercial, economic, and transaction terminology across related materials."],
  ["Entity & Product Names", "Standardize references to companies, subsidiaries, competitors, brands, products, services, technologies, and geographic markets."],
  ["Reviewer Feedback", "Incorporate approved client and legal-review feedback into terminology resources so later translations benefit from earlier decisions."],
  ["Reference Materials", "Use approved translations, regulatory materials, contracts, financial reports, style guidance, and other designated references as controlled project resources."],
];

const securityItems = [
  ["security", "Controlled Project Access", "Organize projects around authorized users, teams, and responsibilities so sensitive content moves through the designated workflow."],
  ["people", "Confidentiality Requirements", "Assign translators, reviewers, and project personnel according to applicable confidentiality and project requirements."],
  ["file", "Secure File Workflows", "Support controlled intake, processing, review, and delivery of confidential legal and business information."],
  ["layers", "AI Governance", "Configure AI-assisted translation according to document purpose, customer requirements, approved security controls, and intended use rather than applying AI automatically to every document."],
  ["expertise", "Qualified Resource Assignment", "Route legal, economic, financial, commercial, and technical content to appropriately qualified language specialists."],
  ["glossary", "Controlled Language Assets", "Manage translation memories, glossaries, references, and reviewer feedback as controlled project resources."],
];

const whyStepes = [
  ["Antitrust & Legal Expertise", "Combine experienced legal linguists with specialists in economics, finance, technology, commercial operations, and other disciplines relevant to complex competition matters."],
  ["AI-Assisted Scale", "Use secure AI-assisted translation where appropriate to process large multilingual document populations quickly and efficiently."],
  ["Professional Human Accountability", "Escalate important materials to qualified translators and reviewers when documents require professional linguistic judgment and higher levels of translation control."],
  ["Risk-Based Translation Workflows", "Match rapid screening, professional validation, expert human translation, and independent review to document purpose and intended use."],
  ["Multilingual eDiscovery Support", "Integrate translation into attorney-directed document-review workflows while working alongside legal teams and eDiscovery providers."],
  ["Enterprise Security", "Support confidential merger, investigation, litigation, and regulatory content through controlled enterprise workflows and customer-specific project requirements."],
  ["Terminology Consistency", "Maintain approved legal, economic, financial, commercial, and technical terminology across document populations and languages."],
  ["High-Volume Program Management", "Coordinate multiple languages, large file sets, specialist resources, parallel workstreams, rolling deliveries, and quality controls through one multilingual program."],
];

const relatedServices = [
  ["M&A Translation Services", "Translate due diligence, financial information, transaction documents, regulatory materials, closing content, and post-merger communications across cross-border deals.", "https://www.stepes.com/merger-acquisition-translation-services/"],
  ["Investigation Translation Services", "Support internal, regulatory, compliance, and government investigations involving multilingual evidence and communications.", "https://www.stepes.com/investigation-translation-services/"],
  ["eDiscovery Translation Services", "Process multilingual electronically stored information for attorney-directed discovery and document-review workflows.", "https://www.stepes.com/ediscovery-translation-services/"],
  ["Litigation Translation Services", "Translate discovery materials, evidence, pleadings, expert reports, exhibits, deposition content, and other documents for cross-border disputes.", "https://www.stepes.com/litigation-translation-services/"],
  ["AI-Enabled Legal Translation Services", "Combine secure AI translation with professional legal review to improve multilingual speed, scale, and cost efficiency while applying appropriate human controls.", "https://www.stepes.com/ai-enabled-legal-translation-services/"],
  ["Legal Translation Services", "Access professional legal translation across contracts, corporate matters, litigation, regulatory content, transactions, investigations, and other legal work.", "https://www.stepes.com/legal-translation-services/"],
];

const faqs = [
  ["What are antitrust and competition translation services?", "Antitrust and competition translation services provide multilingual support for merger control, Second Requests, competition investigations, regulatory information requests, market inquiries, antitrust litigation, and related legal matters. Services can include large-volume document translation, AI-assisted screening, professional legal translation, economic and financial translation, multilingual eDiscovery support, terminology management, document formatting, and additional linguistic review for selected high-consequence materials."],
  ["Can Stepes support multilingual Second Requests?", "Yes. Stepes supports multilingual document processing for Second Request matters, including language identification, document preparation, AI-assisted translation where approved and appropriate, professional linguistic validation, expert legal translation, terminology management, formatting, and enhanced review for designated documents. Stepes can work alongside law firms, corporate legal departments, document-review teams, and eDiscovery providers within the broader attorney-directed review workflow."],
  ["How can AI be used for antitrust document translation?", "AI-assisted translation can help legal teams understand and process large foreign-language document populations more quickly, particularly during early-stage screening and prioritization. The appropriate workflow depends on document purpose, content, risk, customer requirements, and intended use. Stepes can combine secure AI-assisted translation with professional validation, expert human translation, or independent review when greater linguistic control is required."],
  ["Do all documents in a Second Request require the same level of translation review?", "Not necessarily. Translation requirements depend on the matter, document purpose, intended use, counsel instructions, applicable requirements, and the level of linguistic confidence needed. Stepes supports tiered workflows so large document populations can be processed efficiently while selected materials receive progressively deeper professional translation and review. Legal counsel remains responsible for determining applicable regulatory and production requirements."],
  ["Can Stepes work with our eDiscovery provider?", "Yes. Stepes can provide the multilingual language-services layer within a broader eDiscovery or document-review workflow and coordinate with approved law firms, corporate legal teams, review providers, and eDiscovery vendors. The legal team and other authorized professionals remain responsible for responsiveness, relevance, privilege, production decisions, legal interpretation, and other legal determinations."],
  ["What antitrust and competition documents can Stepes translate?", "Stepes translates internal correspondence, emails and chat records, contracts, pricing materials, market studies, financial records, economic analyses, presentations, strategic plans, transaction materials, interviews, witness materials, regulatory correspondence, information-request responses, expert content, exhibits, and other legal, commercial, financial, economic, and technical documents."],
  ["Can Stepes translate financial, economic, and technical evidence?", "Yes. Competition matters frequently involve information outside traditional legal documentation. Stepes can assign linguists and reviewers with expertise appropriate to financial statements, pricing analyses, economic reports, market studies, engineering documents, software, product specifications, scientific content, and other specialized materials."],
  ["Can Stepes support merger-control translation outside the United States?", "Yes. Stepes provides multilingual translation services for cross-border merger and competition matters in more than 100 languages. Our services can support documents identified by counsel for merger-control, regulatory information requests, competition investigations, market inquiries, and related proceedings across jurisdictions. Stepes provides translation and linguistic services. Clients and their legal advisors remain responsible for determining applicable laws, filing requirements, deadlines, legal interpretations, and regulatory strategy."],
  ["How does Stepes protect confidential antitrust documents?", "Stepes supports controlled enterprise workflows for sensitive legal and business information, including managed project access, confidentiality requirements, secure file processing, qualified resource assignment, controlled terminology assets, and customer-specific workflow requirements. AI-assisted translation is configured according to project needs, security requirements, content, and intended use rather than being applied automatically to every document."],
];

function FAQItem({ question, answer, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <button
        className="faq-question"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span>{question}</span>
        <ChevronIcon open={open} />
      </button>
      <div
        className="faq-answer"
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function StepesAntitrustCompetitionTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --pink-light: ${COLORS.pinkLight};
          --ink: ${COLORS.ink};
          --text: ${COLORS.text};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --soft: ${COLORS.soft};
          --soft2: ${COLORS.soft2};
          --dark: ${COLORS.dark};
          --white: ${COLORS.white};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          background: var(--white);
          color: var(--text);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .stepes-page h1,
        .stepes-page h2,
        .stepes-page h3,
        .stepes-page .eyebrow,
        .stepes-page .btn,
        .stepes-page .editorial-link,
        .stepes-page .workflow-number,
        .stepes-page .quality-number,
        .stepes-page .proof-title,
        .stepes-page .faq-question {
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .stepes-page h1,
        .stepes-page h2,
        .stepes-page h3 { color: var(--ink); margin: 0; font-weight: 600; letter-spacing: -0.025em; }
        .stepes-page h1 { font-size: 48px; line-height: 1.06; max-width: 650px; }
        .stepes-page h2 { font-size: 36px; line-height: 1.13; }
        .stepes-page h3 { font-size: 24px; line-height: 1.25; }
        .stepes-page p { margin: 0; font-size: 16px; line-height: 1.7; }
        .shell { max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding-top: 96px; padding-bottom: 96px; }
        .section.dense { padding-top: 80px; padding-bottom: 80px; }
        .section.soft { background: var(--soft); }
        .section.blush { background: var(--blush); }
        .section.dark { background: var(--dark); color: #F4F4F5; }
        .section.dark h2, .section.dark h3 { color: #FFFFFF; }
        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-heading .eyebrow,
        .eyebrow {
          color: var(--magenta);
          font-size: 11px !important;
          line-height: 1.25 !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
          margin: 0 0 14px !important;
          opacity: 1 !important;
        }
        .section.dark .eyebrow,
        .dark-copy .eyebrow { color: var(--pink-light); }
        .section-intro { max-width: 800px; margin-top: 18px !important; font-size: 18px !important; line-height: 1.65 !important; color: #55565D; }
        .section-heading.centered .section-intro { margin-left: auto !important; margin-right: auto !important; }
        .section.dark .section-intro { color: #D5D5D8; }

        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 600;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
          border: 1px solid var(--magenta);
        }
        .btn-primary *, .btn-primary svg, .btn-primary path { color: #FFFFFF !important; stroke: currentColor; }
        .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); box-shadow: 0 10px 22px rgba(193,29,99,.16); }
        .btn-secondary,
        .btn-secondary:link,
        .btn-secondary:visited { background: #FFFFFF; color: var(--ink); border: 1px solid #CDCDD1; }
        .btn-secondary:hover { border-color: #A3A3A8; color: var(--ink); }
        .editorial-link { display: inline-flex; align-items: center; gap: 8px; color: var(--magenta); font-weight: 600; font-size: 16px; text-decoration: none; min-height: 44px; }
        .editorial-link:hover { color: var(--magenta-dark); }
        .editorial-link svg { transition: transform .18s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link.light { color: #F7C6D9; }

        .hero {
          background: #FFFFFF;
          padding-top: 104px;
          padding-bottom: 104px;
        }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(420px, .96fr); gap: 54px; align-items: center; }
        .hero-copy { min-width: 0; }
        .hero-copy .eyebrow { margin-bottom: 16px !important; }
        .hero-copy .hero-lede { max-width: 650px; margin-top: 24px; font-size: 18px; line-height: 1.66; color: #47474D; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .hero-visual { min-width: 0; display: flex; justify-content: flex-end; align-items: center; }
        .hero-visual svg { width: min(100%, 590px); height: auto; display: block; }

        .proof-band { background: #FFFFFF; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .proof-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .proof-item { padding: 26px 24px; border-right: 1px solid var(--line); min-width: 0; }
        .proof-item:first-child { padding-left: 0; }
        .proof-item:last-child { border-right: 0; padding-right: 0; }
        .proof-title { font-size: 16px; line-height: 1.35; font-weight: 600; color: var(--ink); }
        .proof-sub { margin-top: 5px; font-size: 16px; line-height: 1.5; color: var(--muted); }

        .challenge-grid { display: grid; grid-template-columns: minmax(300px, .8fr) minmax(0, 1.2fr); gap: 78px; align-items: start; }
        .challenge-heading { position: sticky; top: 32px; }
        .challenge-heading .section-heading { margin-bottom: 0; }
        .challenge-list { border-top: 1px solid var(--line); }
        .challenge-row { display: grid; grid-template-columns: 50px minmax(0, 1fr); gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .challenge-icon { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .challenge-row p { margin-top: 8px; color: #5B5B62; }
        .challenge-callout { margin-top: 28px; padding: 24px 26px; border-radius: 22px; background: var(--blush); color: #3D2B33; font-size: 18px; line-height: 1.55; }

        .matter-list { border-top: 1px solid var(--line); }
        .matter-row { display: grid; grid-template-columns: 58px minmax(190px,.55fr) minmax(0,1.45fr); gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .matter-icon { width: 48px; height: 48px; border-radius: 16px; background: var(--blush); display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .matter-copy p { color: #58585F; }
        .matter-copy .editorial-link { margin-top: 12px; }

        .workflow-panel { background: #2A2B2F; border-radius: 30px; padding: 46px; color: #F4F4F5; }
        .workflow-panel .eyebrow { color: var(--pink-light); }
        .workflow-panel h2 { color: #FFFFFF; max-width: 700px; }
        .workflow-panel > p { margin-top: 18px; max-width: 780px; color: #D3D3D6; font-size: 18px; }
        .workflow-track { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 0; margin-top: 48px; position: relative; }
        .workflow-track:before { content: ""; position: absolute; top: 22px; left: 5%; right: 5%; height: 1px; background: #56575D; }
        .workflow-step { position: relative; padding-right: 20px; min-width: 0; }
        .workflow-number { width: 44px; height: 44px; border-radius: 50%; background: #34353A; border: 1px solid #6B6C72; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; position: relative; z-index: 2; }
        .workflow-label { color: #FFFFFF; font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 18px; line-height: 1.35; font-weight: 600; margin-top: 20px; letter-spacing: -0.015em; }
        .workflow-step p { margin-top: 9px; color: #C7C7CB; line-height: 1.58; }
        .workflow-summary { margin-top: 38px; padding-top: 28px; border-top: 1px solid #525359; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
        .workflow-summary strong { display: block; color: #FFFFFF; font-size: 20px; font-weight: 600; }
        .workflow-summary p { margin-top: 5px; color: #CFCFD2; max-width: 760px; }

        .quality-wrap { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; }
        .quality-intro { position: sticky; top: 32px; }
        .quality-intro .section-heading { margin-bottom: 0; }
        .quality-note { margin-top: 28px; padding: 24px; border-radius: 22px; background: var(--blush); font-size: 18px; color: #422C35; line-height: 1.58; }
        .quality-list { border-top: 1px solid var(--line); }
        .quality-row { display: grid; grid-template-columns: 60px minmax(0,1fr); gap: 20px; padding: 30px 0; border-bottom: 1px solid var(--line); }
        .quality-number { color: var(--magenta); font-size: 18px; line-height: 1.35; font-weight: 600; }
        .quality-row p { margin-top: 9px; color: #595960; }

        .ediscovery-layout { display: grid; grid-template-columns: minmax(0,.86fr) minmax(0,1.14fr); gap: 70px; align-items: start; }
        .ediscovery-copy .section-heading { margin-bottom: 24px; }
        .ediscovery-copy > p { max-width: 660px; color: #57575F; }
        .ediscovery-copy .legal-note { margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--line); color: #64646B; }
        .ediscovery-copy .editorial-link { margin-top: 18px; }
        .ediscovery-grid { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .ediscovery-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 24px; border-bottom: 1px solid var(--line); }
        .ediscovery-item:last-child { border-bottom: 0; }
        .ediscovery-item .icon-box { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .ediscovery-item h3 { letter-spacing: -0.015em; }
        .ediscovery-item p { margin-top: 6px; color: #5F5F66; }

        .documents-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 72px; align-items: start; }
        .documents-intro .section-heading { margin-bottom: 0; }
        .document-list { border-top: 1px solid var(--line); }
        .document-row { display: grid; grid-template-columns: minmax(180px,.55fr) minmax(0,1.45fr); gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .document-row p { color: #5D5D64; }

        .expertise-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 18px; }
        .expertise-item { padding: 24px 20px 26px; border-top: 2px solid #CACACE; background: #FFFFFF; min-height: 250px; }
        .expertise-icon { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); display: flex; align-items: center; justify-content: center; color: var(--magenta-dark); }
        .expertise-item h3 { margin-top: 22px; }
        .expertise-item p { margin-top: 9px; color: #606067; }
        .expertise-summary { margin-top: 34px; max-width: 860px; font-size: 18px; color: #414148; }

        .terminology-panel { display: grid; grid-template-columns: .88fr 1.12fr; gap: 50px; border: 1px solid var(--line); border-radius: 30px; padding: 44px; background: #FFFFFF; }
        .terminology-copy .section-heading { margin-bottom: 0; }
        .terminology-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--line); }
        .term-item { padding: 20px 18px 20px 0; border-bottom: 1px solid var(--line); }
        .term-item:nth-child(odd) { padding-right: 24px; border-right: 1px solid var(--line); }
        .term-item:nth-child(even) { padding-left: 24px; }
        .term-item p { margin-top: 7px; color: #606067; }
        .terminology-summary { grid-column: 1 / -1; padding: 22px 0 2px; font-size: 18px; line-height: 1.55; font-weight: 600; color: #3E2B34; }

        .format-layout { display: grid; grid-template-columns: 1.04fr .96fr; gap: 64px; align-items: center; }
        .format-copy .section-heading { margin-bottom: 26px; }
        .format-copy > p { color: #595960; max-width: 700px; }
        .format-list { margin-top: 30px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 24px; }
        .format-item { padding: 18px 0; border-top: 1px solid var(--line); }
        .format-item p { margin-top: 5px; color: #63636A; }
        .format-visual { border-radius: 28px; background: #E9E9EB; padding: 28px; min-height: 420px; display: flex; align-items: center; justify-content: center; }
        .file-stack { width: 100%; max-width: 440px; position: relative; height: 330px; }
        .file-card { position: absolute; width: 70%; height: 220px; border-radius: 22px; background: #FFFFFF; border: 1px solid #D5D5D9; box-shadow: 0 14px 30px rgba(20,20,25,.06); padding: 24px; }
        .file-card.one { top: 0; left: 2%; transform: rotate(-3deg); }
        .file-card.two { top: 52px; right: 2%; transform: rotate(3deg); }
        .file-card.three { top: 104px; left: 15%; z-index: 3; }
        .file-card .bar { height: 9px; border-radius: 999px; background: #D8D8DC; margin-bottom: 14px; }
        .file-card .bar.magenta { width: 45%; background: #C11D63; opacity: .82; }
        .file-card .bar.short { width: 60%; }
        .file-card .mini-grid { margin-top: 24px; display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
        .file-card .cell { height: 44px; border-radius: 8px; background: #F3F3F4; }

        .security-panel { display: grid; grid-template-columns: .72fr 1.28fr; gap: 56px; align-items: start; }
        .security-copy .section-heading { margin-bottom: 22px; }
        .security-copy > p { color: #D0D0D4; max-width: 620px; }
        .security-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid #55565C; }
        .security-item { padding: 24px 22px 24px 0; border-bottom: 1px solid #55565C; display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 15px; }
        .security-item:nth-child(odd) { border-right: 1px solid #55565C; padding-right: 24px; }
        .security-item:nth-child(even) { padding-left: 24px; }
        .security-item .security-icon { width: 38px; height: 38px; border-radius: 12px; background: #35363B; display: flex; align-items: center; justify-content: center; color: var(--pink-light); }
        .security-item h3 { color: #FFFFFF; }
        .security-item p { margin-top: 6px; color: #C7C7CB; }

        .audience-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
        .audience-panel { border: 1px solid var(--line); border-radius: 28px; padding: 34px; background: #FFFFFF; }
        .audience-label { display: flex; align-items: center; gap: 14px; }
        .audience-label .icon-box { width: 46px; height: 46px; border-radius: 15px; background: var(--blush); display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .audience-panel h3 { font-size: 24px; }
        .audience-panel p { margin-top: 18px; color: #57575F; }
        .audience-panel .fit-list { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--line); display: grid; gap: 10px; }
        .fit-row { display: flex; gap: 10px; align-items: flex-start; color: #4F4F56; }
        .fit-marker { width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); margin-top: .6em; flex: 0 0 auto; }
        .audience-panel .editorial-link { margin-top: 20px; }

        .language-panel { border-radius: 30px; background: #F4F4F5; padding: 46px; }
        .language-top { display: grid; grid-template-columns: .88fr 1.12fr; gap: 56px; align-items: start; }
        .language-top .section-heading { margin-bottom: 0; }
        .language-copy p { font-size: 18px; color: #55555C; }
        .language-list { margin-top: 34px; display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); border-top: 1px solid #D8D8DC; border-left: 1px solid #D8D8DC; }
        .language-list span { padding: 15px 16px; border-right: 1px solid #D8D8DC; border-bottom: 1px solid #D8D8DC; font-size: 16px; color: #414147; background: #FFFFFF; }
        .language-summary { margin-top: 24px; font-size: 18px; color: #3E3E45; }

        .why-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--line); }
        .why-item { padding: 26px 26px 26px 0; border-bottom: 1px solid var(--line); }
        .why-item:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
        .why-item:nth-child(even) { padding-left: 34px; }
        .why-item p { margin-top: 8px; color: #5E5E65; }

        .related-list { border-top: 1px solid var(--line); }
        .related-row { display: grid; grid-template-columns: minmax(220px,.5fr) minmax(0,1fr) auto; gap: 28px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .related-row p { color: #606067; }
        .related-row .editorial-link { white-space: nowrap; }

        .faq-panel { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item:last-child { border-bottom: 0; }
        .faq-question { width: 100%; border: 0; background: transparent; color: var(--ink); font-size: 18px; font-weight: 600; line-height: 1.45; text-align: left; padding: 23px 26px; display: flex; align-items: center; justify-content: space-between; gap: 24px; cursor: pointer; }
        .faq-question:hover { background: #FAFAFA; }
        .faq-question .chevron { flex: 0 0 auto; transition: transform .2s ease; color: #66666D; }
        .faq-question .chevron.open { transform: rotate(180deg); }
        .faq-answer { padding: 0 26px 24px; }
        .faq-answer p { max-width: 840px; color: #5D5D64; }

        .final-cta-wrap { padding-top: 80px; padding-bottom: 80px; background: #FFFFFF; }
        .final-cta { border-radius: 30px; background: var(--burgundy); color: #FFFFFF; padding: 54px; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 46px; align-items: center; }
        .final-cta h2 { color: #FFFFFF; max-width: 780px; }
        .final-cta p { margin-top: 18px; color: #F1DDE6; max-width: 780px; font-size: 18px; }
        .final-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 230px; }
        .final-cta .btn-primary { background: #FFFFFF; color: var(--burgundy) !important; border-color: #FFFFFF; }
        .final-cta .btn-primary *, .final-cta .btn-primary svg, .final-cta .btn-primary path { color: var(--burgundy) !important; stroke: currentColor; }
        .final-cta .btn-primary:hover { background: #F8F2F5; border-color: #F8F2F5; }
        .final-cta .btn-secondary { background: transparent; color: #FFFFFF; border-color: rgba(255,255,255,.45); }
        .final-cta .btn-secondary:hover { border-color: #FFFFFF; color: #FFFFFF; }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(380px,.9fr); gap: 36px; }
          .proof-grid { grid-template-columns: repeat(3, 1fr); }
          .proof-item:nth-child(3) { border-right: 0; }
          .proof-item:nth-child(n+4) { border-top: 1px solid var(--line); }
          .proof-item:nth-child(4) { padding-left: 0; }
          .expertise-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
          .language-list { grid-template-columns: repeat(4, minmax(0,1fr)); }
          .workflow-track { grid-template-columns: repeat(3, minmax(0,1fr)); row-gap: 36px; }
          .workflow-track:before { display: none; }
          .workflow-step { padding-right: 26px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .stepes-page h1 { font-size: 42px; }
          .stepes-page h2 { font-size: 32px; }
          .stepes-page h3 { font-size: 22px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .hero { padding-top: 88px; padding-bottom: 88px; }
          .hero-grid { grid-template-columns: 1fr; gap: 46px; }
          .hero-copy { text-align: center; }
          .hero-copy h1 { margin-left: auto; margin-right: auto; }
          .hero-copy .hero-lede { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-visual { justify-content: center; }
          .hero-visual svg { max-width: 580px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item { border-top: 1px solid var(--line); }
          .proof-item:nth-child(-n+2) { border-top: 0; }
          .proof-item:nth-child(2n) { border-right: 0; padding-right: 0; }
          .proof-item:nth-child(odd) { padding-left: 0; }
          .proof-item:last-child { grid-column: 1 / -1; }
          .challenge-grid,
          .quality-wrap,
          .ediscovery-layout,
          .documents-layout,
          .terminology-panel,
          .format-layout,
          .security-panel,
          .language-top { grid-template-columns: 1fr; gap: 42px; }
          .challenge-heading, .quality-intro { position: static; }
          .challenge-heading .section-heading,
          .documents-intro .section-heading,
          .quality-intro .section-heading,
          .language-top .section-heading {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .challenge-heading .section-intro,
          .documents-intro .section-intro,
          .quality-intro .section-intro,
          .language-top .section-intro { margin-left: auto !important; margin-right: auto !important; }
          .matter-row { grid-template-columns: 52px minmax(0,1fr); gap: 8px 18px; }
          .matter-title { grid-column: 2; align-self: end; }
          .matter-copy { grid-column: 2; }
          .workflow-panel { padding: 38px 30px; }
          .workflow-track { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .expertise-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .expertise-item { min-height: 0; }
          .terminology-panel { padding: 36px; }
          .security-grid { grid-template-columns: 1fr; }
          .security-item:nth-child(odd) { border-right: 0; padding-right: 0; }
          .security-item:nth-child(even) { padding-left: 0; }
          .audience-grid { grid-template-columns: 1fr; }
          .language-list { grid-template-columns: repeat(3, minmax(0,1fr)); }
          .related-row { grid-template-columns: minmax(180px,.5fr) minmax(0,1fr); }
          .related-row .editorial-link { grid-column: 2; justify-self: start; }
          .final-cta { grid-template-columns: 1fr; }
          .final-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .stepes-page h1 { font-size: 38px; line-height: 1.08; }
          .stepes-page h2 { font-size: 30px; line-height: 1.15; }
          .stepes-page h3 { font-size: 20px; }
          .stepes-page p { font-size: 16px; }
          .section, .section.dense { padding-top: 68px; padding-bottom: 68px; }
          .section-heading { margin-bottom: 36px; }
          .section-heading.centered,
          .section-heading.mobile-center { text-align: center; }
          .section-heading.centered .section-intro,
          .section-heading.mobile-center .section-intro { margin-left: auto !important; margin-right: auto !important; }
          .section-intro { font-size: 17px !important; }
          .hero { padding-top: 72px; padding-bottom: 72px; }
          .hero-copy .hero-lede { font-size: 17px; }
          .hero-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
          .hero-actions .btn { width: 100%; min-height: 50px; }
          .hero-visual svg { width: 100%; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item:last-child { grid-column: auto; }
          .proof-item { border-right: 0; border-top: 1px solid var(--line) !important; padding: 18px 0 !important; }
          .proof-item:first-child { border-top: 0 !important; }
          .challenge-heading .section-heading,
          .documents-intro .section-heading,
          .language-top .section-heading { text-align: center; }
          .challenge-list { margin-top: 4px; }
          .challenge-row { grid-template-columns: 44px minmax(0,1fr); gap: 14px; padding: 22px 0; }
          .challenge-icon { width: 40px; height: 40px; }
          .challenge-callout { font-size: 17px; padding: 22px; }
          .matter-row { grid-template-columns: 44px minmax(0,1fr); gap: 14px; padding: 24px 0; }
          .matter-icon { width: 40px; height: 40px; border-radius: 13px; }
          .matter-title { grid-column: 2; align-self: end; }
          .matter-copy { grid-column: 2; }
          .workflow-panel { border-radius: 24px; padding: 30px 22px; }
          .workflow-panel > p { font-size: 17px; }
          .workflow-track { grid-template-columns: 1fr; margin-top: 34px; row-gap: 0; }
          .workflow-step { display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 0 16px; padding: 0 0 26px; }
          .workflow-step:after { content: ""; grid-column: 1; justify-self: center; width: 1px; height: calc(100% - 44px); margin-top: 8px; background: #56575D; }
          .workflow-step:last-child:after { display: none; }
          .workflow-number { grid-column: 1; grid-row: 1; }
          .workflow-label { grid-column: 2; grid-row: 1; margin-top: 0; align-self: center; font-size: 18px; }
          .workflow-step p { grid-column: 2; grid-row: 2; margin-top: 6px; }
          .workflow-summary { display: block; }
          .workflow-summary .editorial-link { margin-top: 14px; }
          .quality-intro .section-heading { text-align: left; }
          .quality-row { grid-template-columns: 46px minmax(0,1fr); gap: 14px; padding: 24px 0; }
          .quality-note { font-size: 17px; }
          .ediscovery-copy .section-heading { text-align: left; }
          .ediscovery-item { grid-template-columns: 42px minmax(0,1fr); gap: 14px; padding: 20px; }
          .documents-layout { gap: 34px; }
          .document-row { grid-template-columns: 1fr; gap: 8px; padding: 20px 0; }
          .expertise-grid { grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--line); }
          .expertise-item { padding: 22px 0; border-top: 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 0 14px; }
          .expertise-icon { grid-column: 1; grid-row: 1; width: 40px; height: 40px; }
          .expertise-item h3 { grid-column: 2; grid-row: 1; margin-top: 0; align-self: center; }
          .expertise-item p { grid-column: 2; grid-row: 2; margin-top: 6px; }
          .terminology-panel { padding: 28px 22px; border-radius: 24px; }
          .terminology-grid { grid-template-columns: 1fr; }
          .term-item, .term-item:nth-child(odd), .term-item:nth-child(even) { padding: 18px 0; border-right: 0; }
          .format-list { grid-template-columns: 1fr; }
          .format-visual { min-height: 350px; padding: 18px; }
          .file-stack { transform: scale(.9); transform-origin: center; }
          .security-grid { grid-template-columns: 1fr; }
          .security-copy .section-heading { text-align: left; }
          .security-item { grid-template-columns: 40px minmax(0,1fr); gap: 12px; padding: 20px 0 !important; }
          .audience-panel { padding: 26px 22px; border-radius: 24px; }
          .language-panel { padding: 28px 22px; border-radius: 24px; }
          .language-copy p { font-size: 17px; }
          .language-list { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .why-grid { grid-template-columns: 1fr; }
          .why-item, .why-item:nth-child(odd), .why-item:nth-child(even) { padding: 22px 0; border-right: 0; }
          .related-row { grid-template-columns: 1fr; gap: 7px; padding: 22px 0; }
          .related-row .editorial-link { grid-column: 1; }
          .faq-question { padding: 21px 20px; font-size: 17px; }
          .faq-answer { padding: 0 20px 22px; }
          .final-cta-wrap { padding-top: 64px; padding-bottom: 64px; }
          .final-cta { padding: 34px 24px; border-radius: 24px; }
          .final-cta p { font-size: 17px; }
          .final-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
          .final-actions .btn { width: 100%; }
        }

        @media (max-width: 360px) {
          .language-list { grid-template-columns: 1fr; }
          .file-stack { transform: scale(.82); }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Antitrust & Competition Translation Services</h1>
              <p className="hero-lede">Scale multilingual merger reviews, competition investigations, Second Requests, regulatory information requests, and related antitrust matters with secure AI-assisted translation, professional legal review, and subject-matter expertise.</p>
              <div className="hero-actions">
                <ButtonLink href="https://app.stepes.com/quote/">Get a Quote</ButtonLink>
                <ButtonLink href="https://www.stepes.com/contact-us/" secondary>Talk to a Legal Translation Expert</ButtonLink>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="proof-band" aria-label="Antitrust translation capabilities">
          <div className="shell proof-grid">
            {[
              ["100+ Languages", "Global multilingual coverage"],
              ["Legal, Financial & Economic Expertise", "Specialists aligned to document content"],
              ["AI-Assisted + Professional Review", "Flexible translation control by intended use"],
              ["High-Volume Document Processing", "Built for large multilingual collections"],
              ["Secure Enterprise Workflows", "Controlled handling for sensitive matters"],
            ].map(([title, sub]) => (
              <div className="proof-item" key={title}>
                <div className="proof-title">{title}</div>
                <div className="proof-sub">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="shell challenge-grid">
            <div className="challenge-heading">
              <SectionHeading
                title="Control Volume, Cost, and Quality Across Competition Matters"
                intro="Antitrust and competition matters can generate vast quantities of multilingual information across legal, financial, economic, commercial, and technical disciplines. Stepes helps law firms and corporate legal teams manage that complexity through one coordinated multilingual workflow."
              />
            </div>
            <div>
              <div className="challenge-list">
                {[
                  ["layers", "Large Multilingual Document Populations", "Competition matters may involve email, chat messages, contracts, presentations, spreadsheets, financial records, market research, pricing information, internal reports, product materials, and other electronically stored information created across countries and languages."],
                  ["speed", "Compressed Matter Timelines", "Merger reviews, investigations, information requests, and litigation schedules can create substantial translation demand within a short period. Parallel production, workflow automation, translation technology, and coordinated project management help keep language work from becoming a bottleneck."],
                  ["expertise", "Multiple Areas of Expertise", "A single matter may move between competition law, economics, accounting, pricing, sales, product strategy, technology, engineering, and corporate governance. Stepes assigns translation resources according to both language and subject matter."],
                  ["request", "Different Documents Require Different Translation Controls", "A document being screened to understand its relevance may not require the same workflow as an economic report, witness statement, regulatory response, or document intended for formal reliance. Stepes helps clients match translation effort to purpose, risk, volume, and intended use."],
                ].map(([icon, title, text]) => (
                  <div className="challenge-row" key={title}>
                    <div className="challenge-icon"><LineIcon type={icon} /></div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <div className="challenge-callout">Large document populations. Multiple disciplines. One controlled translation program.</div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <SectionHeading
              eyebrow="MATTER COVERAGE"
              title="Multilingual Support Across Antitrust & Competition Matters"
              intro="Stepes supports law firms, in-house legal departments, and their advisors across merger review, investigations, regulatory inquiries, and competition proceedings."
              centered
            />
            <div className="matter-list">
              {matterTypes.map((item) => (
                <div className="matter-row" key={item.title}>
                  <div className="matter-icon"><LineIcon type={item.icon} /></div>
                  <div className="matter-title"><h3>{item.title}</h3></div>
                  <div className="matter-copy">
                    <p>{item.text}</p>
                    {item.link ? <EditorialLink href={item.link}>{item.linkLabel}</EditorialLink> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="workflow-panel">
              <div className="eyebrow">HIGH-VOLUME REVIEW</div>
              <h2>Second Request Translation at Scale</h2>
              <p>Large collections may contain foreign-language emails, chats, presentations, spreadsheets, market analyses, contracts, strategic plans, financial information, and other business records that must be understood within an attorney-directed review process. Translating every document through traditional human legal translation can create unnecessary cost and delay, while unreviewed automated translation may not provide the level of confidence required for every use. Stepes uses a tiered workflow to combine scale with progressively deeper linguistic control.</p>
              <div className="workflow-track">
                {secondRequestSteps.map((step, index) => (
                  <div className="workflow-step" key={step.title}>
                    <div className="workflow-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="workflow-label">{step.title}</div>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
              <div className="workflow-summary">
                <div>
                  <strong>From large document populations to the documents that matter most.</strong>
                  <p>Scale multilingual review without treating every document as if it were a final regulatory submission.</p>
                </div>
                <EditorialLink href="https://www.stepes.com/ediscovery-translation-services/" light>eDiscovery Translation Services</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section dense">
          <div className="shell quality-wrap">
            <div className="quality-intro">
              <SectionHeading
                eyebrow="RISK-BASED TRANSLATION"
                title="Match Translation Quality to How Each Document Will Be Used"
                intro="Antitrust document populations contain materials with very different purposes. Stepes offers flexible workflows so clients can apply the appropriate level of linguistic control to each document set."
              />
              <div className="quality-note">Not every document in a large antitrust matter requires the same translation workflow. Apply the right level of translation control at the right stage.</div>
            </div>
            <div className="quality-list">
              {qualityLevels.map((item) => (
                <div className="quality-row" key={item.n}>
                  <div className="quality-number">{item.n}</div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell ediscovery-layout">
            <div className="ediscovery-copy">
              <SectionHeading
                title="Integrate Translation Into the eDiscovery Workflow"
                intro="Multilingual content can create an additional layer of complexity within eDiscovery and document review. Stepes provides the language-services layer that helps authorized teams understand and process foreign-language materials within the broader review workflow."
              />
              <p>We can coordinate with law firms, corporate legal departments, eDiscovery providers, review teams, and other approved stakeholders through one controlled multilingual program.</p>
              <p className="legal-note">Stepes provides translation and linguistic services. Counsel and other authorized legal professionals remain responsible for responsiveness, relevance, privilege, production, legal interpretation, filing requirements, and regulatory strategy.</p>
              <EditorialLink href="https://www.stepes.com/ediscovery-translation-services/">eDiscovery Translation Services</EditorialLink>
            </div>
            <div className="ediscovery-grid">
              {ediscoveryItems.map(([icon, title, text]) => (
                <div className="ediscovery-item" key={title}>
                  <div className="icon-box"><LineIcon type={icon} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell documents-layout">
            <div className="documents-intro">
              <SectionHeading
                title="Antitrust & Competition Documents We Translate"
                intro="Competition matters can involve nearly every type of business information. Stepes combines legal translation expertise with financial, economic, commercial, and technical subject-matter resources."
              />
            </div>
            <div className="document-list">
              {documentGroups.map(([title, text]) => (
                <div className="document-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <SectionHeading
              title="Antitrust Matters Require More Than Legal Translation Expertise"
              intro="Competition matters routinely cross professional disciplines. Stepes builds multilingual teams around the content being translated, matching language expertise with legal matter knowledge, subject matter, document type, and intended use."
              centered
            />
            <div className="expertise-grid">
              {expertise.map(([icon, title, text]) => (
                <div className="expertise-item" key={title}>
                  <div className="expertise-icon"><LineIcon type={icon} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="expertise-summary">Stepes matches language expertise with legal matter knowledge, subject matter, document type, and intended use.</div>
          </div>
        </section>

        <section className="section">
          <div className="shell terminology-panel">
            <div className="terminology-copy">
              <SectionHeading
                eyebrow="TERMINOLOGY CONTROL"
                title="Keep Competition Terminology Consistent Across the Matter"
                intro="Large competition matters can contain thousands of references to the same companies, products, markets, technologies, customer groups, financial concepts, and legal terms. Stepes uses controlled language assets to create a consistent multilingual foundation across the matter."
              />
            </div>
            <div className="terminology-grid">
              {terminologyItems.map(([title, text]) => (
                <div className="term-item" key={title}><h3>{title}</h3><p>{text}</p></div>
              ))}
              <div className="terminology-summary">One matter. One consistent multilingual terminology foundation.</div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell format-layout">
            <div className="format-copy">
              <SectionHeading
                title="Keep Multilingual Documents Usable for Review"
                intro="Antitrust matters frequently involve spreadsheets, presentations, scanned files, PDFs, tables, charts, exported communications, and other formats where structure and document usability can be important to review."
              />
              <p>Stepes supports multilingual file processing across common legal and business formats, with project-specific requirements for output, file treatment, OCR, layout, and review defined during setup.</p>
              <div className="format-list">
                {[
                  ["Microsoft Office Documents", "Translate Word, Excel, and PowerPoint content while preserving usable structure and formatting where required."],
                  ["PDF & Scanned Documents", "Apply document processing and multilingual OCR where appropriate to extract translatable content from PDFs and image-based files."],
                  ["Tables, Charts & Structured Content", "Maintain relationships between translated text, numerical data, labels, tables, and supporting visual information."],
                  ["High-Volume File Sets", "Coordinate large document populations through standardized processing, tracking, quality control, and delivery workflows."],
                ].map(([title, text]) => <div className="format-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
              </div>
            </div>
            <div className="format-visual" aria-hidden="true">
              <div className="file-stack">
                <div className="file-card one"><div className="bar magenta"/><div className="bar"/><div className="bar short"/><div className="mini-grid"><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/></div></div>
                <div className="file-card two"><div className="bar magenta"/><div className="bar"/><div className="bar short"/><div className="bar"/><div className="bar short"/></div>
                <div className="file-card three"><div className="bar magenta"/><div className="bar"/><div className="bar short"/><div className="mini-grid"><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/><div className="cell"/></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="shell security-panel">
            <div className="security-copy">
              <SectionHeading
                eyebrow="CONFIDENTIALITY & SECURITY"
                title="Protect Sensitive Competition and Transaction Information"
                intro="Antitrust and competition matters can involve highly confidential information, including proposed transactions, pricing, customer relationships, strategic plans, product roadmaps, forecasts, internal communications, intellectual property, and investigation records."
                dark
              />
              <p>Additional security, privacy, retention, access, and information-governance requirements can be addressed during project setup.</p>
            </div>
            <div className="security-grid">
              {securityItems.map(([icon, title, text]) => (
                <div className="security-item" key={title}>
                  <div className="security-icon"><LineIcon type={icon} size={21} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              title="Built for the Teams Managing Complex Competition Matters"
              intro="Cross-border antitrust matters involve multiple professional teams. Stepes provides a centralized multilingual workflow that can support internal and external stakeholders throughout the matter."
              centered
            />
            <div className="audience-grid">
              <div className="audience-panel">
                <div className="audience-label"><div className="icon-box"><LineIcon type="people" /></div><h3>Law Firms</h3></div>
                <p>Support antitrust, competition, M&A, investigations, litigation, and regulatory practices with scalable multilingual document processing and expert legal translation.</p>
                <div className="fit-list">
                  {['Rapid matter setup and deadline-driven delivery','Large-volume multilingual processing','Legal and subject-matter linguists','eDiscovery coordination and flexible review levels'].map((x)=><div className="fit-row" key={x}><span className="fit-marker"/><span>{x}</span></div>)}
                </div>
                <EditorialLink href="https://www.stepes.com/law-firm-translation-services/">Translation Services for Law Firms</EditorialLink>
              </div>
              <div className="audience-panel">
                <div className="audience-label"><div className="icon-box"><LineIcon type="legal" /></div><h3>Corporate Legal Teams</h3></div>
                <p>Help in-house competition counsel, general counsel, legal operations, corporate development, compliance, and regulatory teams manage multilingual matters consistently across business units and jurisdictions.</p>
                <div className="fit-list">
                  {['Centralized translation and vendor coordination','Outside-counsel collaboration','Terminology consistency across related matters','Enterprise workflow and recurring program support'].map((x)=><div className="fit-row" key={x}><span className="fit-marker"/><span>{x}</span></div>)}
                </div>
                <EditorialLink href="https://www.stepes.com/solutions/legal-teams/">Translation Solutions for Corporate Legal Teams</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section dense">
          <div className="shell language-panel">
            <div className="language-top">
              <SectionHeading title="Antitrust Translation Services in 100+ Languages" />
              <div className="language-copy"><p>Competition investigations and cross-border merger reviews frequently extend across multiple jurisdictions and source languages. Stepes helps clients coordinate multilingual document review, regulatory materials, evidence, and legal communications through one language partner.</p></div>
            </div>
            <div className="language-list">
              {['Chinese','Japanese','Korean','German','French','Spanish','Portuguese','Italian','Dutch','Polish','Arabic','Czech','Swedish','Turkish','Vietnamese','100+ languages worldwide'].map((language)=><span key={language}>{language}</span>)}
            </div>
            <div className="language-summary">One coordinated multilingual workflow across countries, document types, disciplines, and review teams.</div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <SectionHeading
              title="A Translation Partner Built for High-Volume Competition Matters"
              intro="Combine specialist legal expertise, scalable language technology, professional human accountability, and enterprise workflow controls within one coordinated multilingual program."
              centered
            />
            <div className="why-grid">
              {whyStepes.map(([title, text]) => (
                <div className="why-item" key={title}><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              title="Related Legal Translation Services"
              intro="Complex competition matters often overlap with transactions, investigations, discovery, and litigation. Explore specialized Stepes services across the broader legal lifecycle."
              centered
            />
            <div className="related-list">
              {relatedServices.map(([title, text, href]) => (
                <div className="related-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <EditorialLink href={href}>{title}</EditorialLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <SectionHeading
              title="Antitrust & Competition Translation FAQs"
              intro="Common questions about multilingual merger review, Second Requests, competition investigations, AI-assisted translation, eDiscovery coordination, and document security."
              centered
            />
            <div className="faq-panel">
              {faqs.map(([question, answer], index) => (
                <FAQItem key={question} question={question} answer={answer} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-wrap">
          <div className="shell">
            <div className="final-cta">
              <div>
                <h2>Keep Multilingual Competition Matters Moving</h2>
                <p>From large-scale document screening and Second Requests to competition investigations, merger-control materials, regulatory responses, and high-consequence evidence, Stepes combines scalable language technology with professional legal translation and subject-matter expertise. Process large multilingual document populations efficiently, then apply deeper professional review where it matters most.</p>
              </div>
              <div className="final-actions">
                <ButtonLink href="https://app.stepes.com/quote/">Get a Quote</ButtonLink>
                <ButtonLink href="https://www.stepes.com/contact-us/" secondary>Talk to a Legal Translation Expert</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
