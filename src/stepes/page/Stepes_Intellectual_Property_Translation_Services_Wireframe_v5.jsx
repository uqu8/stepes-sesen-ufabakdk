import React from "react";

const URLS = {
  quote: "https://app.stepes.com/quote/",
  page: "https://www.stepes.com/intellectual-property-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  legalTeams: "https://www.stepes.com/solutions/legal-teams/",
  patent: "https://www.stepes.com/patent-translation-services/",
  trademark: "https://www.stepes.com/trademark-translation-services/",
  contract: "https://www.stepes.com/contract-translation-services/",
  security: "https://www.stepes.com/security/",
  litigation: "https://www.stepes.com/litigation-translation-services/",
  interpreting: "https://www.stepes.com/legal-interpreting-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  aiLegal: "https://www.stepes.com/ai-enabled-legal-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  certified: "https://www.stepes.com/certified-translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
  lawFirm: "https://www.stepes.com/law-firm-translation-services/",
  contactSales: "https://www.stepes.com/contact-sales/",
};

const ipTypes = [
  {
    icon: "patent",
    title: "Patents & Utility Models",
    text: "Translate patent applications, claims, specifications, abstracts, office actions, prior art, prosecution materials, patent-family documents, and litigation content with linguists who understand both technical subject matter and patent-document structure.",
    link: URLS.patent,
    linkLabel: "Patent Translation Services",
  },
  {
    icon: "trademark",
    title: "Trademarks & Brands",
    text: "Support international trademark portfolios with translation of applications, examination correspondence, evidence of use, oppositions, cancellation materials, coexistence agreements, assignments, licensing documents, and enforcement correspondence.",
    link: URLS.trademark,
    linkLabel: "Trademark Translation Services",
  },
  {
    icon: "design",
    title: "Industrial Designs",
    text: "Translate industrial design applications, descriptions, examination materials, supporting documentation, and multilingual portfolio records while maintaining consistent terminology across related filings and products.",
  },
  {
    icon: "copyright",
    title: "Copyright & Digital Assets",
    text: "Support copyright, publishing, software, media, and digital-content matters with professional translation of ownership records, licenses, assignments, agreements, notices, supporting evidence, and related legal documentation.",
  },
  {
    icon: "lock",
    title: "Trade Secrets & Know-How",
    text: "Handle confidential technical and commercial information through controlled translation workflows for invention disclosures, proprietary processes, R&D records, formulas, methods, algorithms, manufacturing information, and protected know-how.",
  },
  {
    icon: "transfer",
    title: "Licensing & Technology Transfer",
    text: "Translate licenses, assignments, research agreements, technology-transfer contracts, joint-development documentation, commercialization agreements, royalty materials, and related technical and commercial content.",
  },
];

const lifecycle = [
  {
    title: "Protect",
    text: "Prepare multilingual IP content for attorney review, filing, prosecution, registration, and portfolio development.",
    items: ["Patent applications and prosecution materials", "Trademark applications and supporting records", "Industrial design documentation", "Invention disclosures"],
  },
  {
    title: "Commercialize",
    text: "Translate the agreements and technical information used to bring intellectual property into partnerships, products, markets, and revenue-generating relationships.",
    items: ["Licensing agreements", "IP assignments", "Technology-transfer agreements", "R&D collaborations"],
  },
  {
    title: "Manage",
    text: "Maintain consistent multilingual information across expanding IP portfolios, related documents, business units, and jurisdictions.",
    items: ["Portfolio records", "Patent and trademark family materials", "Ownership documentation", "Approved terminology"],
  },
  {
    title: "Transact",
    text: "Help legal, investment, and business teams evaluate multilingual IP during transactions and strategic portfolio changes.",
    items: ["IP due diligence", "Chain-of-title records", "License reviews", "Portfolio documentation"],
  },
  {
    title: "Enforce",
    text: "Support attorneys and legal teams handling foreign-language evidence and documentation in IP disputes and proceedings.",
    items: ["Infringement materials", "Oppositions and cancellations", "Discovery documents", "Expert reports and exhibits"],
  },
];

const expertise = [
  { icon: "bio", title: "Biotechnology & Pharmaceuticals", text: "Molecular biology, biologics, pharmaceuticals, diagnostics, formulations, laboratory methods, drug development, therapeutic technologies, and related scientific IP." },
  { icon: "medical", title: "Medical Devices & Diagnostics", text: "Surgical technologies, diagnostic systems, imaging, in vitro diagnostics, connected devices, instruments, digital health, and combination technologies." },
  { icon: "software", title: "Software, AI & Cybersecurity", text: "Artificial intelligence, machine learning, algorithms, software architecture, databases, cloud computing, digital platforms, network systems, and cybersecurity." },
  { icon: "chip", title: "Electronics & Semiconductors", text: "Integrated circuits, semiconductor technologies, sensors, telecommunications, signal processing, electronics, hardware, and connected technologies." },
  { icon: "gear", title: "Engineering & Manufacturing", text: "Mechanical engineering, industrial machinery, robotics, automotive technologies, manufacturing systems, aerospace, materials, and production processes." },
  { icon: "energy", title: "Energy & Advanced Technologies", text: "Battery technologies, energy storage, renewable energy, power systems, environmental technologies, advanced materials, and emerging industrial technologies." },
];

const useCases = [
  {
    title: "Research, Discovery & Screening",
    text: "For large patent collections, technical publications, discovery documents, and portfolio records that first need to be understood and prioritized.",
    items: ["AI-assisted document screening", "Multilingual document triage", "Summary or selected-passage translation", "Human verification of relevant content"],
  },
  {
    title: "Internal Legal & Business Review",
    text: "For licensing, due diligence, portfolio analysis, internal investigations, and business evaluation where dependable professional translation is required.",
    items: ["Professional human translation", "AI-assisted translation with professional review", "Translation-memory leverage", "Terminology control and targeted review"],
  },
  {
    title: "Filing & Formal Submission",
    text: "For documents intended for formal IP processes where greater linguistic control, specialist translation, review, formatting, or certification may be required.",
    items: ["Subject-matter translator assignment", "Controlled terminology", "Independent linguistic review", "Automated and manual QA"],
  },
  {
    title: "Litigation & Evidentiary Use",
    text: "For disputes and formal proceedings where completeness, terminology, source-document structure, certification, and attorney-directed priorities matter.",
    items: ["Matter-specific legal translation", "Technical subject-matter review", "Phased discovery translation", "Certified translation when required"],
  },
];

const workflow = [
  { title: "Define the Matter", text: "Review the IP type, source and target languages, intended use, jurisdictions, confidentiality, file formats, review requirements, certification needs, and delivery schedule." },
  { title: "Match Legal + Technical Expertise", text: "Select language professionals for the required language pair and relevant legal, patent, scientific, engineering, software, or other technical experience." },
  { title: "Prepare Terminology + References", text: "Organize related patents, previous translations, approved terminology, client glossaries, product documentation, licensing language, and reviewer instructions." },
  { title: "Translate", text: "Apply the appropriate professional human, AI-assisted, or hybrid translation workflow based on content, sensitivity, and intended use." },
  { title: "Review + Quality Assurance", text: "Check accuracy, completeness, terminology, defined terms, names, numbers, references, formatting, structural integrity, and project-specific requirements." },
  { title: "Deliver + Reuse Approved Language", text: "Deliver through the agreed workflow and incorporate approved terminology, translations, and reviewer decisions into controlled language assets when appropriate." },
];

const securityItems = [
  { icon: "upload", title: "Secure Content Handling", text: "Upload, process, review, and deliver IP content through controlled project workflows." },
  { icon: "users", title: "Restricted Project Access", text: "Limit project materials to approved project participants and assigned language professionals." },
  { icon: "document", title: "NDA-Covered Resources", text: "Use confidentiality agreements and client-defined handling requirements where appropriate." },
  { icon: "shield", title: "Controlled Technology Use", text: "Configure translation technologies according to content sensitivity and the approved workflow." },
  { icon: "database", title: "Secure Language Assets", text: "Manage translation memory, terminology, and reusable language resources within controlled enterprise workflows." },
  { icon: "manage", title: "Centralized Project Oversight", text: "Coordinate files, languages, deadlines, reviews, and delivery through a managed multilingual process." },
];

const costFactors = [
  ["Language Combination", "Availability and specialization vary by source and target language."],
  ["Technical Complexity", "Highly specialized biotechnology, chemistry, engineering, semiconductor, software, or other technical content may require subject-matter resources."],
  ["Document Type", "A prior-art document being screened for relevance has different requirements from a patent application, license agreement, expert report, or certified evidentiary translation."],
  ["Intended Use", "Research, internal review, filing, transaction support, and litigation can require different levels of translation and review."],
  ["Review Requirements", "Independent linguistic or technical review adds an additional quality-control stage when appropriate."],
  ["File Format & Production", "Scans, complex tables, drawings, PDFs, presentations, and design files may require preparation or formatting."],
  ["Certification", "Certified translation or supporting documentation can be added when required by the receiving organization or project instructions."],
  ["Volume & Repetition", "Related patent families, recurring contracts, and portfolio documents may benefit from translation memory, terminology reuse, and AI-enabled workflow efficiencies."],
  ["Turnaround", "Urgent projects may require expanded resource allocation, parallel workflows, or phased delivery."],
];

const reasons = [
  ["legal", "Legal + Technical Expertise", "IP content often requires both legal understanding and technical subject knowledge. Stepes matches professionals to the language pair, document type, technical field, and intended use."],
  ["route", "Risk-Based Translation Workflows", "Use the appropriate combination of professional translation, AI assistance, independent review, certification, and QA instead of applying the same process to every document."],
  ["ai", "AI-Enabled Efficiency", "Apply AI where it creates practical value in document screening, terminology extraction, repetitive content, workflow automation, and quality control while retaining human expertise for higher-risk content."],
  ["terms", "Terminology + Translation Memory", "Build reusable multilingual language assets that improve consistency across patents, licenses, litigation, portfolio records, and related documentation."],
  ["shield", "Secure IP Collaboration", "Support sensitive inventions, trade secrets, transactions, and litigation through controlled project access, secure file workflows, and client-defined handling requirements."],
  ["globe", "Global Language Coverage", "Coordinate IP translation across 100+ languages through centralized project management, shared terminology, and consistent workflow controls."],
];

const faq = [
  ["What are intellectual property translation services?", "Intellectual property translation services cover multilingual content related to patents, trademarks, industrial designs, copyright, trade secrets, licensing, technology transfer, IP transactions, litigation, and portfolio management. Because IP documents often combine legal terminology with highly specialized scientific or technical information, the translation workflow should be matched to the IP type, subject matter, intended use, confidentiality requirements, and required level of review."],
  ["What types of intellectual property documents does Stepes translate?", "Stepes translates patent applications, claims, specifications, prior art, office actions, trademark materials, industrial design documentation, licensing agreements, IP assignments, technology-transfer agreements, invention disclosures, trade-secret records, due-diligence documents, litigation evidence, expert reports, portfolio records, and related legal and technical content."],
  ["How is intellectual property translation different from general legal translation?", "Intellectual property translation frequently requires both legal and technical expertise. A patent may describe biotechnology, semiconductor architecture, software, a medical device, or an industrial system. A technology license may combine contractual obligations with detailed technical definitions. IP litigation can involve legal pleadings alongside engineering evidence, prior art, source documentation, and expert analysis."],
  ["Does Stepes translate patent applications and patent claims?", "Yes. Stepes translates patent applications, claims, specifications, abstracts, office actions, prior art, prosecution materials, and related patent content. Our dedicated Patent Translation Services practice provides deeper support for filing and prosecution, prior-art research, patent families, litigation, portfolio work, and other patent-specific requirements."],
  ["Can Stepes translate trademark and brand-related documents?", "Yes. Stepes translates trademark applications, examination correspondence, oppositions, cancellation materials, evidence of use, assignments, coexistence agreements, licensing documentation, portfolio records, enforcement correspondence, and other trademark-related content."],
  ["How does Stepes handle confidential inventions and trade secrets?", "Stepes supports confidential IP projects with controlled file workflows, restricted project access, NDA-covered resources where appropriate, client-defined handling instructions, and technology use configured according to project sensitivity. Clients can specify additional security or confidentiality requirements when requesting a quote."],
  ["Can AI be used for intellectual property translation?", "Yes, when AI is appropriate for the content and intended use. AI can improve efficiency for prior-art screening, large document sets, multilingual research, terminology extraction, repetitive portfolio content, document comparison, and automated QA. Higher-risk content may require specialist human translation and additional review."],
  ["Does Stepes provide certified intellectual property translations?", "Stepes can provide certified translations and supporting documentation when requested. Certification and acceptance requirements vary by document, jurisdiction, proceeding, receiving organization, and instructions provided by the client or its counsel. Clients should confirm specific requirements with the receiving authority before submission."],
  ["How does Stepes maintain terminology consistency across an IP portfolio?", "Stepes can develop and maintain multilingual terminology databases, glossaries, translation memory, and approved language resources for ongoing IP programs. These resources help preserve consistent treatment of defined terms, invention terminology, component names, scientific terms, products, trademarks, licensing language, and other recurring content across documents and languages."],
  ["How quickly can Stepes translate intellectual property documents?", "Turnaround depends on language combination, word count, technical complexity, file format, intended use, review requirements, and project urgency. For large or time-sensitive IP projects, Stepes can use parallel production, translation memory, AI-assisted workflows, multiple qualified linguists, and phased delivery when appropriate."],
];

const related = [
  ["Patent Translation Services", "Translate patent applications, claims, specifications, prior art, prosecution materials, and patent litigation content with specialized technical and legal linguists.", URLS.patent],
  ["Trademark Translation Services", "Support global trademark portfolios with translation for applications, examination, oppositions, licensing, assignments, and enforcement matters.", URLS.trademark],
  ["Legal Translation Services", "Professional translation for contracts, litigation, corporate legal content, regulatory materials, intellectual property, employment law, privacy, and other legal practice areas.", URLS.legal],
  ["Litigation Translation Services", "Translate multilingual discovery, pleadings, evidence, depositions, expert reports, exhibits, and litigation materials through secure, matter-specific workflows.", URLS.litigation],
  ["Contract Translation Services", "Translate licensing agreements, commercial contracts, assignments, technology agreements, and other complex contractual documentation.", URLS.contract],
  ["AI-Enabled Legal Translation Services", "Combine AI-supported translation technology with professional legal linguists, controlled terminology, review, and structured quality assurance.", URLS.aiLegal],
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    patent: <><path d="M7 3.5h7l3 3V20.5H7z"/><path d="M14 3.5v3h3"/><path d="M9.5 10h5M9.5 13h5M9.5 16h3.5"/></>,
    trademark: <><circle cx="12" cy="12" r="8.5"/><path d="M8.5 8.5h7M12 8.5v7"/></>,
    design: <><path d="M4.5 17.5 12 4l7.5 13.5z"/><path d="M8.5 13h7M12 8.5v8"/></>,
    copyright: <><circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2a4 4 0 1 0 0 5.6"/></>,
    lock: <><rect x="5.5" y="10" width="13" height="10" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14v2.5"/></>,
    transfer: <><path d="M4 8h13M14 5l3 3-3 3M20 16H7M10 13l-3 3 3 3"/></>,
    bio: <><path d="M9 3c5 3 1 6 6 9s1 6 0 9"/><path d="M15 3c-5 3-1 6-6 9s-1 6 0 9"/><path d="M8 6h8M8 12h8M8 18h8"/></>,
    medical: <><path d="M9.5 4h5v5h5v5h-5v5h-5v-5h-5V9h5z"/></>,
    software: <><rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="m8.5 9-2 3 2 3M15.5 9l2 3-2 3M13 8l-2 8"/></>,
    chip: <><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 1.5v3M14.5 1.5v3M9.5 19.5v3M14.5 19.5v3M1.5 9.5h3M1.5 14.5h3M19.5 9.5h3M19.5 14.5h3"/><rect x="10" y="10" width="4" height="4"/></>,
    gear: <><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/><circle cx="12" cy="12" r="7.5"/></>,
    energy: <><path d="M13.5 2.5 6.5 13h5l-1 8.5 7-11h-5z"/></>,
    upload: <><path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 14v5h14v-5"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-2a4.5 4.5 0 0 1 9 0v2"/><path d="M15 5.5a3 3 0 0 1 0 5.5M16 13a4.5 4.5 0 0 1 4.5 4.5V19"/></>,
    document: <><path d="M6 3.5h8l4 4V20.5H6z"/><path d="M14 3.5v4h4M9 12h6M9 15.5h6"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.6-2.9 7.7-7 10-4.1-2.3-7-5.4-7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    database: <><ellipse cx="12" cy="5.5" rx="7" ry="3"/><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
    manage: <><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="11" cy="18" r="1.5" fill="currentColor" stroke="none"/></>,
    legal: <><path d="M12 3v18M7 6h10M5.5 8 3 13h5zM18.5 8 16 13h5zM8 19h8"/></>,
    route: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h5a3 3 0 0 1 3 3v8a3 3 0 0 0 3 3"/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5"/></>,
    terms: <><path d="M4 5h16M4 10h10M4 15h16M4 20h10"/><path d="M17 9.5v6M14 12.5h6"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4.5 6 4.5 9S15 18 12 21M12 3c-3 3-4.5 6-4.5 9S9 18 12 21"/></>,
  };

  return <svg {...common}>{paths[name] || paths.document}</svg>;
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a className={`editorial-link${dark ? " editorial-link--dark" : ""}`} href={href}>
      <span>{children}</span><span className="arrow" aria-hidden="true">→</span>
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 600" role="img" aria-label="Intellectual property documents, invention drawings, trademark, licensing, and secure IP illustration">
        <defs>
          <linearGradient id="softFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F8F8FA" />
            <stop offset="1" stopColor="#F0F1F3" />
          </linearGradient>
        </defs>
        <rect x="24" y="26" width="572" height="548" rx="38" fill="url(#softFade)" />
        <circle cx="498" cy="112" r="74" fill="#FDF2F7" />
        <circle cx="118" cy="476" r="56" fill="#F6EEF2" />

        <g fill="#FFFFFF" stroke="#4D5560" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M150 86h220l46 46v292H150z" />
          <path d="M370 86v46h46" />
          <path d="M186 158h128M186 184h164" />
          <path d="M186 236h150M186 262h112M186 288h147" />
          <path d="M187 346h116M187 372h149" />
        </g>

        <g stroke="#C11D63" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M218 314c22-38 52-58 92-60 37-1 72 20 95 57" />
          <path d="M236 314h154" />
          <path d="M264 314v-36M310 314v-60M356 314v-35" />
          <circle cx="218" cy="314" r="6" fill="#C11D63" stroke="none" />
          <circle cx="405" cy="311" r="6" fill="#C11D63" stroke="none" />
        </g>

        <g transform="translate(386 302)">
          <rect width="154" height="188" rx="24" fill="#FFFFFF" stroke="#4D5560" strokeWidth="2.5" />
          <path d="M24 40h72M24 64h105M24 88h82M24 134h70" stroke="#4D5560" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="116" cy="138" r="21" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.5" />
          <path d="m106 138 7 7 13-15" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(78 172)">
          <circle cx="70" cy="70" r="66" fill="#FFFFFF" stroke="#4D5560" strokeWidth="2.5" />
          <circle cx="70" cy="70" r="50" fill="none" stroke="#C11D63" strokeWidth="2.5" />
          <path d="M43 47h54M70 47v54" stroke="#4D5560" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(74 384)" fill="#FFFFFF" stroke="#4D5560" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M56 0 108 21v37c0 35-21 62-52 80C25 120 4 93 4 58V21z" />
          <path d="m33 64 16 16 31-36" stroke="#C11D63" strokeWidth="4" />
        </g>

        <g stroke="#4D5560" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M448 196h69" />
          <path d="M482 162v69" />
          <circle cx="482" cy="196" r="42" />
        </g>
        <circle cx="482" cy="196" r="5" fill="#C11D63" />
        <path d="M470 184h24M482 184v24" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false, className = "" }) {
  return (
    <div className={`section-heading section-heading--${align}${dark ? " section-heading--dark" : ""} ${className}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function IntellectualPropertyTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --light-magenta: #F2A7C6;
          --ink: #181B20;
          --ink-2: #30353C;
          --body: #485162;
          --muted: #69717C;
          --line: #E4E6EA;
          --panel: #F6F7F8;
          --panel-2: #FAFAFB;
          --dark: #20242A;
          --white: #FFFFFF;
          --shadow: 0 18px 50px rgba(24, 27, 32, 0.07);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .stepes-page {
          color: var(--body);
          background: var(--white);
          font-family: "Inter Tight", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 17px;
          line-height: 1.65;
          overflow-x: hidden;
          overflow-wrap: break-word;
        }

        .stepes-page a { color: inherit; }
        .stepes-page p { margin: 0; font-size: 17px; }
        .stepes-page h1,
        .stepes-page h2,
        .stepes-page h3 { color: var(--ink); margin: 0; font-weight: 600; letter-spacing: -0.025em; }
        .stepes-page h1 { font-size: 48px; line-height: 1.08; }
        .stepes-page h2 { font-size: 36px; line-height: 1.14; }
        .stepes-page h3 { font-size: 24px; line-height: 1.22; }

        .shell {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .section { padding: 96px 0; }
        .section--dense { padding: 80px 0; }
        .section--soft { background: var(--panel-2); }
        .section--blush { background: linear-gradient(180deg, #FFF 0%, #FDF7FA 100%); }
        .section--dark { background: var(--dark); color: #E7E9EC; }
        .section--dark h2,
        .section--dark h3 { color: #FFFFFF; }
        .section--dark p { color: #C7CCD3; }

        .eyebrow {
          color: var(--magenta);
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.25 !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase;
          margin: 0 0 14px !important;
          opacity: 1 !important;
        }

        .section-heading--dark .eyebrow,
        .section--dark .eyebrow,
        .final-cta .eyebrow { color: var(--light-magenta) !important; }

        .section-heading { margin-bottom: 48px; }
        .section-heading--center { text-align: center; margin-left: auto; margin-right: auto; }
        .section-heading--center .section-intro { margin-left: auto; margin-right: auto; }
        .section-heading--left { text-align: left; }
        .section-heading h2 { max-width: 900px; margin-left: auto; margin-right: auto; }
        .section-heading--left h2 { margin-left: 0; }
        .section-intro { margin-top: 20px !important; max-width: 800px; font-size: 18px !important; line-height: 1.62; }

        .btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .btn {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
          max-width: 100%;
          text-align: center;
        }
        .btn:focus-visible,
        .editorial-link:focus-visible,
        .related-link:focus-visible,
        summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .btn:hover { transform: translateY(-1px); }
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
          box-shadow: 0 10px 24px rgba(193,29,99,.14);
        }
        .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); }
        .btn-primary *, .btn-primary svg { color: #FFFFFF !important; stroke: #FFFFFF !important; fill: none; }
        .stepes-page a.btn-secondary,
        .stepes-page a.btn-secondary:link,
        .stepes-page a.btn-secondary:visited,
        .stepes-page a.btn-secondary:hover,
        .stepes-page a.btn-secondary:active,
        .stepes-page a.btn-secondary:focus,
        .stepes-page a.btn-secondary:focus-visible { background: #FFFFFF; color: var(--ink) !important; border: 1px solid #D6D9DE; }
        .stepes-page a.btn-secondary:hover { border-color: #B7BCC4; box-shadow: 0 8px 22px rgba(24,27,32,.05); }
        .stepes-page a.btn-light,
        .stepes-page a.btn-light:link,
        .stepes-page a.btn-light:visited,
        .stepes-page a.btn-light:hover,
        .stepes-page a.btn-light:active,
        .stepes-page a.btn-light:focus,
        .stepes-page a.btn-light:focus-visible { background: #FFFFFF; color: var(--burgundy) !important; border: 1px solid #FFFFFF; }
        .stepes-page a.btn-light:hover { background: #FFF7FA; border-color: #FFF7FA; }
        .stepes-page a.btn-light *, .stepes-page a.btn-light svg { color: var(--burgundy) !important; stroke: currentColor !important; }
        .stepes-page a.btn-outline-light,
        .stepes-page a.btn-outline-light:link,
        .stepes-page a.btn-outline-light:visited,
        .stepes-page a.btn-outline-light:hover,
        .stepes-page a.btn-outline-light:active,
        .stepes-page a.btn-outline-light:focus,
        .stepes-page a.btn-outline-light:focus-visible { background: transparent; color: #FFFFFF !important; border: 1px solid rgba(255,255,255,.42); }
        .stepes-page a.btn-outline-light:hover { border-color: rgba(255,255,255,.72); background: rgba(255,255,255,.05); }

        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          text-decoration: none;
          margin-top: 18px;
        }
        .editorial-link .arrow { transition: transform .18s ease; }
        .editorial-link:hover .arrow { transform: translateX(3px); }
        .editorial-link--dark { color: var(--light-magenta) !important; }

        /* Hero */
        .hero { padding: 104px 0 96px; background: #FFFFFF; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(390px, .97fr); align-items: center; gap: 68px; }
        .hero-copy { max-width: 670px; }
        .hero-copy h1 { max-width: 680px; }
        .hero-lead { margin-top: 24px !important; font-size: 18px !important; line-height: 1.62; max-width: 650px; color: var(--body); }
        .hero-audience { margin-top: 20px !important; color: var(--muted); max-width: 650px; }
        .hero-art { width: 100%; min-width: 0; }
        .hero-art svg { display: block; width: 100%; height: auto; }

        .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FAFAFB; }
        .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .proof-item { padding: 24px 20px; text-align: center; position: relative; }
        .proof-item:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 25%; width: 1px; height: 50%; background: var(--line); }
        .proof-title { color: var(--ink); font-size: 17px; line-height: 1.3; font-weight: 600; }
        .proof-sub { margin-top: 5px !important; color: var(--muted); font-size: 14px !important; line-height: 1.4; }

        /* Intro */
        .overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 88px; align-items: start; }
        .overview-copy { max-width: 760px; }
        .overview-copy p + p { margin-top: 18px; }
        .link-pair { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 22px; }
        .link-pair .editorial-link { margin-top: 0; }
        .audience-band { display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 54px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .audience-item { padding: 24px 22px; min-width: 0; }
        .audience-item + .audience-item { border-left: 1px solid var(--line); }
        .audience-item strong { display: block; color: var(--ink); font-size: 17px; line-height: 1.3; font-weight: 600; }
        .audience-item p { margin-top: 8px; color: var(--body); font-size: 17px; line-height: 1.58; }

        /* IP types */
        .ip-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .ip-card { padding: 34px 32px 36px; min-height: 290px; }
        .ip-card:nth-child(1), .ip-card:nth-child(2), .ip-card:nth-child(4), .ip-card:nth-child(5) { border-right: 1px solid var(--line); }
        .ip-card:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .icon-box { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: #F5F5F7; color: var(--magenta); margin-bottom: 22px; }
        .ip-card h3 { font-size: 22px; }
        .ip-card p { margin-top: 14px; }

        /* Lifecycle */
        .lifecycle-wrap { position: relative; }
        .lifecycle-line { position: absolute; left: 4%; right: 4%; top: 21px; height: 2px; background: #DADDE2; z-index: 0; }
        .lifecycle-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; position: relative; z-index: 1; }
        .life-stage { min-width: 0; }
        .life-node { width: 44px; height: 44px; border-radius: 50%; background: #FFFFFF; border: 2px solid var(--magenta); display: grid; place-items: center; color: var(--magenta); margin-bottom: 22px; }
        .life-node::after { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .life-stage h3 { font-size: 21px; }
        .life-stage > p { margin-top: 12px; }
        .mini-list { list-style: none; padding: 0; margin: 18px 0 0; }
        .mini-list li { display: flex; align-items: flex-start; gap: 9px; font-size: 16px; line-height: 1.45; padding: 6px 0; color: var(--body); }
        .mini-list li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: #9EA4AD; margin-top: .63em; flex: 0 0 auto; }

        /* Split editorial */
        .split { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 72px; align-items: center; }
        .split--reverse .split-copy { order: 2; }
        .split--reverse .split-visual { order: 1; }
        .split-copy > p { margin-top: 20px; max-width: 690px; }
        .split-copy .content-list { margin-top: 22px; }
        .split-visual { min-width: 0; }
        .patent-visual, .trademark-visual, .confidential-visual, .deal-visual {
          border-radius: 28px;
          border: 1px solid var(--line);
          background: #FFFFFF;
          padding: 34px;
          box-shadow: var(--shadow);
        }
        .visual-label { font-size: 11px; font-weight: 700; color: var(--magenta); text-transform: uppercase; letter-spacing: .14em; }
        .document-sheet { margin-top: 18px; border: 1px solid #D0D6DE; border-radius: 20px; padding: 20px; background: linear-gradient(180deg, #FCFCFD 0%, #F7F8FA 100%); }
        .sheet-toolbar { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .workflow-pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 999px; border: 1px solid #D5DBE3; background: #FFFFFF; color: var(--muted); font-size: 13px; font-weight: 600; }
        .workflow-pill::before { content: ""; width: 7px; height: 7px; border-radius: 999px; background: #C7CCD5; }
        .workflow-pill.active { border-color: rgba(193, 29, 99, .28); background: rgba(193, 29, 99, .08); color: #8E1C4E; }
        .workflow-pill.active::before { background: var(--magenta); }
        .sheet-card { border: 1px solid #D0D6DE; border-radius: 18px; padding: 18px; background: rgba(255,255,255,.78); }
        .sheet-card__header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
        .sheet-kicker { display: inline-block; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; color: #8C93A1; margin-bottom: 6px; }
        .sheet-card__header h4 { margin: 0; font-size: 20px; line-height: 1.2; letter-spacing: -.02em; color: var(--ink); }
        .status-badge { display: inline-flex; align-items: center; padding: 7px 11px; border-radius: 999px; background: rgba(193, 29, 99, .1); color: #8E1C4E; font-size: 12px; font-weight: 700; white-space: nowrap; }
        .sheet-progress { height: 8px; border-radius: 999px; background: #D9DDE4; overflow: hidden; margin-bottom: 14px; }
        .sheet-progress > span { display: block; width: 46%; height: 100%; border-radius: 999px; background: linear-gradient(90deg, #C11D63 0%, #D94887 100%); }
        .sheet-line { height: 7px; background: #D2D7DF; border-radius: 999px; margin: 10px 0; }
        .sheet-line.magenta { background: rgba(193, 29, 99, .18); position: relative; width: 84%; }
        .sheet-line.magenta::after { content: ""; position: absolute; inset: 0; width: 44%; border-radius: 999px; background: var(--magenta); }
        .sheet-line.w70 { width: 70%; }
        .sheet-line.w82 { width: 82%; }
        .sheet-line.w58 { width: 58%; }
        .sheet-line.w90 { width: 90%; }
        .sheet-line.w64 { width: 64%; }
        .sheet-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 18px; }
        .meta-chip { border: 1px solid #D4DAE2; border-radius: 16px; padding: 14px 14px 13px; font-size: 14px; color: var(--muted); background: #FFFFFF; box-shadow: 0 8px 24px rgba(17, 24, 39, .04); }
        .meta-chip strong { display: block; color: var(--ink); font-size: 16px; line-height: 1.25; margin-bottom: 4px; }
        .meta-chip span { display: block; }
        .sheet-footnote { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
        .sheet-note { display: inline-flex; align-items: center; padding: 7px 11px; border-radius: 999px; background: #FFFFFF; border: 1px solid #D5DBE3; color: #5C6472; font-size: 12px; font-weight: 600; }

        .content-list { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 26px; }
        .content-list li { break-inside: avoid; padding: 7px 0 7px 18px; position: relative; font-size: 16px; line-height: 1.45; }
        .content-list li::before { content: ""; position: absolute; left: 0; top: 1.02em; width: 6px; height: 2px; background: var(--magenta); }

        .trademark-visual { background: #FFF; }
        .mark-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 18px; }
        .mark-tile { border: 1px solid var(--line); border-radius: 18px; padding: 22px; min-height: 122px; display: flex; flex-direction: column; justify-content: space-between; }
        .mark-symbol { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; border: 2px solid var(--magenta); color: var(--magenta); font-weight: 600; }
        .mark-tile span:last-child { color: var(--ink); font-size: 16px; font-weight: 600; }

        /* Licensing dark */
        .license-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 72px; align-items: start; }
        .license-copy p { margin-top: 20px; max-width: 610px; }
        .license-panel { border: 1px solid rgba(255,255,255,.14); border-radius: 28px; overflow: hidden; background: rgba(255,255,255,.035); }
        .license-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 22px 26px; border-bottom: 1px solid rgba(255,255,255,.1); }
        .license-row:last-child { border-bottom: 0; }
        .license-row span { font-size: 16px; color: #E6E8EB; }
        .license-row span:nth-child(2) { color: #BFC5CC; }

        /* Trade secret */
        .confidential-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .82fr); gap: 72px; align-items: start; }
        .confidential-copy p { margin-top: 20px; max-width: 760px; }
        .security-rail { background: #F7F7F8; border-radius: 28px; padding: 28px; }
        .security-rail-row { display: grid; grid-template-columns: 42px 1fr; gap: 15px; padding: 18px 0; border-bottom: 1px solid var(--line); }
        .security-rail-row:first-child { padding-top: 0; }
        .security-rail-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .security-rail-row .icon-box { width: 42px; height: 42px; margin: 0; border-radius: 12px; background: #FFFFFF; }
        .security-rail-row h3 { font-size: 18px; }
        .security-rail-row p { margin-top: 6px; }

        /* Litigation */
        .litigation-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
        .litigation-copy p { margin-top: 20px; }
        .editorial-rows { border-top: 1px solid var(--line); }
        .editorial-row { display: grid; grid-template-columns: 190px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .editorial-row h3 { font-size: 19px; }
        .editorial-row p { color: var(--body); }

        /* Due diligence */
        .deal-panel { display: grid; grid-template-columns: .95fr 1.05fr; gap: 0; border: 1px solid var(--line); border-radius: 30px; overflow: hidden; background: #FFFFFF; }
        .deal-copy { padding: 46px; }
        .deal-copy p { margin-top: 18px; }
        .deal-list { background: #F7F7F8; padding: 34px 38px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 28px; align-content: center; }
        .deal-item { padding: 15px 0; border-bottom: 1px solid #DDE0E4; font-size: 16px; color: var(--ink-2); }

        /* Expertise */
        .expertise-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .expertise-item { padding: 30px 28px 34px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .expertise-item .icon-box { margin-bottom: 18px; }
        .expertise-item h3 { font-size: 20px; }
        .expertise-item p { margin-top: 10px; }

        /* Intended use */
        .usecase-panel { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
        .usecase-row { display: grid; grid-template-columns: 290px 1fr; gap: 44px; padding: 30px 34px; border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .usecase-row:last-child { border-bottom: 0; }
        .usecase-row h3 { font-size: 20px; }
        .usecase-row p { margin-bottom: 14px; }
        .usecase-items { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px 24px; }
        .usecase-items span { position: relative; padding-left: 16px; font-size: 16px; color: var(--ink-2); }
        .usecase-items span::before { content: ""; position: absolute; left: 0; top: .72em; width: 6px; height: 2px; background: var(--magenta); }
        .legal-note { margin-top: 22px !important; padding: 18px 20px; background: #F7F7F8; border-radius: 16px; color: var(--body); }

        /* AI */
        .ai-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: start; }
        .ai-copy p { margin-top: 20px; max-width: 650px; }
        .ai-panes { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid rgba(255,255,255,.15); border-radius: 28px; overflow: hidden; }
        .ai-pane { padding: 32px 28px; }
        .ai-pane + .ai-pane { border-left: 1px solid rgba(255,255,255,.13); }
        .ai-pane h3 { font-size: 20px; }
        .ai-list { list-style: none; margin: 18px 0 0; padding: 0; }
        .ai-list li { padding: 8px 0 8px 16px; position: relative; color: #D0D4DA; font-size: 16px; }
        .ai-list li::before { content: ""; position: absolute; left: 0; top: 1.08em; width: 6px; height: 2px; background: var(--light-magenta); }

        /* Terminology */
        .term-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 68px; align-items: start; }
        .term-copy p { margin-top: 20px; max-width: 650px; }
        .term-assets { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .term-asset { padding: 30px 32px; }
        .term-asset + .term-asset { border-top: 1px solid var(--line); }
        .term-asset h3 { font-size: 21px; }
        .term-asset p { margin-top: 12px; }
        .term-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
        .term-tag { padding: 7px 11px; border: 1px solid #DDE0E5; border-radius: 999px; background: #FAFAFB; color: var(--ink-2); font-size: 14px; }

        /* Workflow */
        .workflow { position: relative; }
        .workflow::before { content: ""; position: absolute; top: 25px; left: 5%; right: 5%; height: 1px; background: #D9DCE1; }
        .workflow-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 18px; position: relative; }
        .workflow-step { min-width: 0; }
        .workflow-num { width: 50px; height: 50px; border-radius: 50%; display: grid; place-items: center; background: #FFFFFF; border: 1px solid #D3D7DC; color: var(--magenta); font-size: 15px; font-weight: 600; position: relative; z-index: 1; margin-bottom: 20px; }
        .workflow-step h3 { font-size: 18px; }
        .workflow-step p { margin-top: 10px; }

        /* Security matrix */
        .security-matrix { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
        .security-item { padding: 30px 28px 32px; background: #FFFFFF; }
        .security-item:nth-child(1), .security-item:nth-child(2), .security-item:nth-child(4), .security-item:nth-child(5) { border-right: 1px solid var(--line); }
        .security-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .security-item .icon-box { margin-bottom: 18px; }
        .security-item h3 { font-size: 19px; }
        .security-item p { margin-top: 10px; }

        /* Languages */
        .language-panel { border-radius: 30px; background: #F5F5F7; padding: 50px; display: grid; grid-template-columns: .78fr 1.22fr; gap: 70px; align-items: center; }
        .language-copy p { margin-top: 18px; max-width: 560px; }
        .language-cloud { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .language-pill { background: #FFFFFF; border: 1px solid #E1E3E7; border-radius: 16px; min-height: 52px; display: flex; align-items: center; justify-content: center; padding: 10px 14px; color: var(--ink-2); font-size: 16px; font-weight: 600; }

        /* Cost */
        .cost-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 54px; border-top: 1px solid var(--line); }
        .cost-row { display: grid; grid-template-columns: 160px 1fr; gap: 22px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .cost-row strong { color: var(--ink); font-size: 16px; font-weight: 600; }

        /* Quote needs */
        .quote-panel { border-radius: 30px; background: var(--blush); padding: 54px; display: grid; grid-template-columns: .82fr 1.18fr; gap: 62px; align-items: start; }
        .quote-copy p { margin-top: 18px; }
        .quote-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px 24px; }
        .quote-list div { font-size: 16px; color: var(--ink-2); padding: 10px 0 10px 18px; position: relative; border-bottom: 1px solid rgba(122,21,66,.11); }
        .quote-list div::before { content: ""; position: absolute; left: 0; top: 1.15em; width: 6px; height: 2px; background: var(--magenta); }

        /* Why */
        .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 60px; border-top: 1px solid var(--line); }
        .why-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .why-item .icon-box { width: 48px; height: 48px; margin: 0; }
        .why-item h3 { font-size: 20px; }
        .why-item p { margin-top: 8px; }

        /* FAQ */
        .faq-panel { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .faq-item + .faq-item { border-top: 1px solid var(--line); }
        .faq-item summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: 1fr 34px; gap: 20px; align-items: center; padding: 24px 28px; color: var(--ink); font-size: 18px; font-weight: 600; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 30px; height: 30px; border-radius: 50%; border: 1px solid #D8DCE1; display: grid; place-items: center; color: var(--magenta); font-size: 20px; font-weight: 400; line-height: 1; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-answer { padding: 0 70px 26px 28px; max-width: 900px; }
        .faq-answer p { font-size: 17px; }
        .faq-answer .editorial-link { margin-top: 12px; }

        /* Related */
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .related-link { min-height: 220px; display: flex; flex-direction: column; padding: 28px; border: 1px solid var(--line); border-radius: 22px; text-decoration: none; background: #FFFFFF; transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease; }
        .related-link:hover { transform: translateY(-2px); border-color: #CED1D6; box-shadow: 0 12px 28px rgba(24,27,32,.05); }
        .related-link h3 { font-size: 20px; }
        .related-link p { margin-top: 12px; flex: 1; }
        .related-action { margin-top: 22px; color: var(--magenta); font-size: 16px; font-weight: 600; }

        /* Final CTA */
        .final-cta { padding: 88px 0; background: var(--burgundy); color: #FFFFFF; }
        .final-cta-grid { display: grid; grid-template-columns: 1fr auto; gap: 54px; align-items: center; }
        .final-cta h2 { color: #FFFFFF; max-width: 720px; }
        .final-cta p { margin-top: 18px; color: #F5E9EF; max-width: 760px; font-size: 18px; }
        .final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 240px; }

        .overview-grid > *, .split > *, .license-grid > *, .confidential-layout > *, .litigation-grid > *,
        .deal-panel > *, .term-grid > *, .ai-grid > *, .language-panel > *, .quote-panel > *, .final-cta-grid > * { min-width: 0; }

        @media (max-width: 1180px) {
          .shell { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr); gap: 44px; }
          .ip-card { padding: 30px 26px 32px; }
          .lifecycle-grid { gap: 18px; }
          .workflow-grid { grid-template-columns: repeat(3, 1fr); row-gap: 36px; }
          .workflow::before { display: none; }
          .workflow-step { border-top: 1px solid var(--line); padding-top: 20px; }
          .workflow-num { margin-top: -46px; }
        }

        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section--dense { padding: 72px 0; }
          .stepes-page h1 { font-size: 42px; }
          .stepes-page h2 { font-size: 32px; }
          .stepes-page h3 { font-size: 22px; }

          .hero { padding: 88px 0 80px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-copy { max-width: 780px; }
          .hero-art { max-width: 640px; margin: 0 auto; }

          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item::after { display: none !important; }
          .proof-item:nth-child(-n+4) { border-bottom: 1px solid var(--line); }
          .proof-item:nth-child(odd) { border-right: 1px solid var(--line); }
          .proof-item:last-child { grid-column: 1 / -1; border-bottom: 0; border-right: 0; }

          .overview-grid, .split, .license-grid, .confidential-layout, .litigation-grid, .deal-panel, .term-grid, .ai-grid, .language-panel, .quote-panel { grid-template-columns: 1fr; gap: 44px; }
          .audience-band { grid-template-columns: 1fr; margin-top: 44px; }
          .audience-item { padding: 20px 0; }
          .audience-item + .audience-item { border-left: 0; border-top: 1px solid var(--line); }
          .split--reverse .split-copy, .split--reverse .split-visual { order: initial; }
          .overview-grid .section-heading, .split-copy .section-heading, .license-copy .section-heading, .confidential-copy .section-heading, .litigation-copy .section-heading, .term-copy .section-heading, .ai-copy .section-heading, .language-copy .section-heading, .quote-copy .section-heading { text-align: center; }
          .overview-grid .section-heading h2, .split-copy .section-heading h2, .license-copy .section-heading h2, .confidential-copy .section-heading h2, .litigation-copy .section-heading h2, .term-copy .section-heading h2, .ai-copy .section-heading h2, .language-copy .section-heading h2, .quote-copy .section-heading h2 { margin-left: auto; margin-right: auto; }
          .overview-grid .section-heading .section-intro, .split-copy .section-heading .section-intro, .license-copy .section-heading .section-intro, .confidential-copy .section-heading .section-intro, .litigation-copy .section-heading .section-intro, .term-copy .section-heading .section-intro, .ai-copy .section-heading .section-intro, .language-copy .section-heading .section-intro, .quote-copy .section-heading .section-intro { margin-left: auto; margin-right: auto; }
          .language-copy h2 { text-align: center; margin-left: auto; margin-right: auto; }

          .ip-grid { grid-template-columns: repeat(2, 1fr); }
          .ip-card { border-bottom: 1px solid var(--line) !important; border-right: 1px solid var(--line) !important; }
          .ip-card:nth-child(2n) { border-right: 0 !important; }
          .ip-card:nth-last-child(-n+2) { border-bottom: 0 !important; }

          .lifecycle-line { display: none; }
          .lifecycle-grid { grid-template-columns: 1fr; gap: 0; border-left: 1px solid #DADDE2; margin-left: 21px; }
          .life-stage { padding: 0 0 32px 42px; position: relative; }
          .life-stage:last-child { padding-bottom: 0; }
          .life-node { position: absolute; left: -22px; top: 0; margin: 0; }

          .expertise-grid, .security-matrix { grid-template-columns: repeat(2, 1fr); }
          .expertise-item { border-right: 1px solid var(--line); }
          .expertise-item:nth-child(2n) { border-right: 1px solid var(--line); }
          .security-item { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
          .security-item:nth-child(2n) { border-right: 0 !important; }
          .security-item:nth-last-child(-n+2) { border-bottom: 0 !important; }

          .usecase-row { grid-template-columns: 240px 1fr; gap: 30px; padding: 28px; }
          .usecase-items { grid-template-columns: 1fr; }

          .ai-panes { grid-template-columns: 1fr; }
          .ai-pane + .ai-pane { border-left: 0; border-top: 1px solid rgba(255,255,255,.13); }

          .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .language-panel { padding: 42px; }
          .cost-grid, .why-grid { grid-template-columns: 1fr; gap: 0; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .final-cta-grid { grid-template-columns: 1fr; }
          .final-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }
          .section, .section--dense { padding: 68px 0; }
          .stepes-page h1 { font-size: 38px; line-height: 1.1; }
          .stepes-page h2 { font-size: 30px; line-height: 1.16; }
          .stepes-page h3 { font-size: 20px; }
          .stepes-page p { font-size: 17px; }
          .content-list li, .mini-list li, .license-row span, .usecase-items span, .ai-list li, .cost-row strong, .quote-list div { font-size: 16px; }
          .hero { padding: 72px 0 68px; }
          .hero-copy { text-align: center; margin: 0 auto; }
          .hero-copy h1 { margin: 0 auto; }
          .hero-lead, .hero-audience { margin-left: auto !important; margin-right: auto !important; }
          .hero .eyebrow { text-align: center; }
          .hero .btn-row { justify-content: center; }
          .hero .btn { width: 100%; }
          .hero-art { margin-top: 6px; }

          .proof-item { padding: 20px 12px; }

          .section-heading { margin-bottom: 38px; }
          .section-heading--left:not(.section-heading--scan) { text-align: center; }
          .section-heading--left:not(.section-heading--scan) h2,
          .section-heading--left:not(.section-heading--scan) .section-intro { margin-left: auto; margin-right: auto; }
          .section-intro { font-size: 17px !important; }

          .overview-grid { gap: 32px; }
          .audience-band { margin-top: 36px; }
          .audience-item { padding: 18px 0; }
          .overview-copy, .split-copy, .license-copy, .confidential-copy, .litigation-copy, .term-copy, .ai-copy, .language-copy, .quote-copy { text-align: left; }
          .overview-grid .section-heading, .split-copy .section-heading, .license-copy .section-heading, .confidential-copy .section-heading, .litigation-copy .section-heading, .term-copy .section-heading, .ai-copy .section-heading, .language-copy .section-heading, .quote-copy .section-heading { text-align: center; }

          .link-pair { flex-direction: column; gap: 8px; }
          .editorial-link { min-height: 44px; align-items: center; }

          .ip-grid { grid-template-columns: 1fr; border-radius: 24px; }
          .ip-card { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; min-height: 0; padding: 28px 24px; }
          .ip-card:last-child { border-bottom: 0 !important; }

          .lifecycle-grid { margin-left: 17px; }
          .life-stage { padding-left: 36px; }
          .life-node { left: -18px; width: 36px; height: 36px; }

          .split, .license-grid, .confidential-layout, .litigation-grid, .term-grid, .ai-grid, .language-panel, .quote-panel { gap: 34px; }
          .patent-visual, .trademark-visual, .confidential-visual, .deal-visual { padding: 24px; border-radius: 24px; }
          .sheet-meta { grid-template-columns: 1fr; }
          .content-list { columns: 1; }
          .mark-grid { grid-template-columns: 1fr; }

          .license-panel { border-radius: 24px; }
          .license-row { grid-template-columns: 1fr; gap: 6px; padding: 20px 22px; }

          .security-rail { padding: 22px; border-radius: 24px; }
          .security-rail-row { grid-template-columns: 40px 1fr; }

          .editorial-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .deal-panel { border-radius: 24px; }
          .deal-copy { padding: 30px 24px; }
          .deal-list { grid-template-columns: 1fr; padding: 24px; }

          .expertise-grid, .security-matrix { grid-template-columns: 1fr; border-radius: 24px; overflow: hidden; border: 1px solid var(--line); }
          .expertise-item, .security-item { border-right: 0 !important; border-left: 0 !important; border-top: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .expertise-item:last-child, .security-item:last-child { border-bottom: 0 !important; }

          .usecase-panel { border-radius: 24px; }
          .usecase-row { grid-template-columns: 1fr; gap: 12px; padding: 24px; }
          .usecase-row h3 { font-size: 20px; }

          .ai-panes { border-radius: 24px; }
          .ai-pane { padding: 26px 22px; }

          .term-assets { border-radius: 24px; }
          .term-asset { padding: 26px 22px; }

          .workflow-grid { grid-template-columns: 1fr; gap: 0; border-left: 1px solid #DADDE2; margin-left: 18px; }
          .workflow-step { border-top: 0; padding: 0 0 30px 38px; position: relative; }
          .workflow-step:last-child { padding-bottom: 0; }
          .workflow-num { position: absolute; left: -19px; top: 0; width: 38px; height: 38px; margin: 0; }

          .language-panel { padding: 30px 24px; border-radius: 24px; }
          .language-cloud { grid-template-columns: repeat(2, 1fr); }
          .language-pill { min-height: 48px; }

          .cost-row { grid-template-columns: 1fr; gap: 6px; padding: 20px 0; }
          .quote-panel { padding: 32px 24px; border-radius: 24px; }
          .quote-list { grid-template-columns: 1fr; gap: 0; }
          .why-item { grid-template-columns: 44px 1fr; gap: 14px; }
          .why-item .icon-box { width: 44px; height: 44px; }

          .faq-panel { border-radius: 24px; }
          .faq-item summary { padding: 21px 20px; grid-template-columns: 1fr 30px; font-size: 17px; }
          .faq-answer { padding: 0 20px 24px; }

          .related-grid { grid-template-columns: 1fr; }
          .related-link { min-height: 0; padding: 24px; }

          .final-cta { padding: 68px 0; }
          .final-cta-grid { text-align: center; }
          .final-cta p { margin-left: auto; margin-right: auto; }
          .final-actions { flex-direction: column; }
          .final-actions .btn { width: 100%; }
        }

        @media (max-width: 340px) {
          .shell { width: calc(100% - 40px); }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .proof-item:last-child { grid-column: auto; border-bottom: 0 !important; }
          .language-cloud { grid-template-columns: 1fr; }
          .btn { padding-left: 18px; padding-right: 18px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Intellectual Property Translation Services for Global Innovation</h1>
            <p className="hero-lead">Translate patents, trademarks, licensing agreements, trade secrets, IP litigation materials, and other intellectual property content with specialized legal and technical linguists.</p>
            <p className="hero-audience">Stepes supports law firms, corporate IP teams, R&amp;D organizations, technology-transfer groups, and global businesses with secure, professional intellectual property translation services in 100+ languages.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={URLS.quote}>Get a Translation Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href={`${URLS.page}#project-quote`}>Discuss Your IP Project</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="proof-band" aria-label="Stepes intellectual property translation capabilities">
        <div className="shell proof-grid">
          <div className="proof-item"><div className="proof-title">ISO 17100</div><p className="proof-sub">Translation process standard</p></div>
          <div className="proof-item"><div className="proof-title">ISO 9001</div><p className="proof-sub">Quality management</p></div>
          <div className="proof-item"><div className="proof-title">100+ Languages</div><p className="proof-sub">Global IP coverage</p></div>
          <div className="proof-item"><div className="proof-title">Legal + Technical</div><p className="proof-sub">Subject-matter expertise</p></div>
          <div className="proof-item"><div className="proof-title">Secure Workflows</div><p className="proof-sub">Confidential IP handling</p></div>
        </div>
      </section>

      <section className="section">
        <div className="shell overview-grid">
          <SectionHeading eyebrow="Global IP Operations" title="Translation Across the Intellectual Property Lifecycle" align="left" />
          <div className="overview-copy">
            <p>Intellectual property moves across borders long before a product reaches the global market. An invention may begin with confidential R&amp;D records, develop into patent applications, enter licensing or technology-transfer negotiations, become part of an international IP portfolio, and later support a transaction, investigation, or dispute.</p>
            <p>Each stage creates different translation requirements. Stepes helps intellectual property law firms, patent and trademark professionals, corporate legal teams, innovators, universities, research organizations, and technology companies manage complex legal and technical content across languages.</p>
            <p>Our intellectual property translation services combine professional linguists, subject-matter expertise, terminology management, translation memory, AI-enabled workflows, secure collaboration, and quality review configured around each document's intended use.</p>
            <div className="link-pair">
              <ArrowLink href={URLS.legal}>Legal Translation Services</ArrowLink>
              <ArrowLink href={URLS.lawFirm}>Law Firm Translation Services</ArrowLink>
              <ArrowLink href={URLS.legalTeams}>Solutions for Legal Teams</ArrowLink>
            </div>
          </div>
        </div>
        <div className="shell audience-band" aria-label="Teams supported by Stepes intellectual property translation services">
          {[
            ["IP Law Firms & Counsel", "International filing, prosecution, portfolio work, disputes, and enforcement."],
            ["Corporate Legal & IP Teams", "Portfolio management, licensing, transactions, investigations, and global operations."],
            ["R&D & Innovation Teams", "Invention disclosures, research records, technical references, and commercialization content."],
            ["Technology Transfer & Licensing", "Research collaborations, assignments, licenses, and cross-border technology agreements."],
            ["Litigation Counsel", "Foreign-language evidence and technical content for IP disputes and formal proceedings."],
          ].map(([title,text]) => (
            <div className="audience-item" key={title}><strong>{title}</strong><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            title="Intellectual Property Translation Across Core IP Categories"
            intro="Different forms of intellectual property require different legal, technical, and linguistic expertise. Stepes supports multilingual content through workflows designed around subject matter, purpose, confidentiality, and review requirements."
          />
          <div className="ip-grid">
            {ipTypes.map((item) => (
              <article className="ip-card" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link ? <ArrowLink href={item.link}>{item.linkLabel}</ArrowLink> : null}
              </article>
            ))}
          </div>
          <div style={{textAlign: "center", marginTop: 30}}>
            <a className="btn btn-primary" href={URLS.quote}>Get an IP Translation Quote <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Multilingual Support Across the IP Lifecycle"
            intro="Intellectual property translation extends beyond filing documents. Global IP teams work with multilingual information from the earliest stages of innovation through commercialization, portfolio management, transactions, and enforcement."
          />
          <div className="lifecycle-wrap">
            <div className="lifecycle-line" aria-hidden="true" />
            <div className="lifecycle-grid">
              {lifecycle.map((stage) => (
                <article className="life-stage" key={stage.title}>
                  <div className="life-node" aria-hidden="true" />
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                  <ul className="mini-list">
                    {stage.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split">
          <div className="split-copy">
            <SectionHeading title="Patent Translation for Global Filing, Research, and IP Strategy" align="left" />
            <p>Patent translation sits at the intersection of language, technology, and law. Patent applications, claims, specifications, prior art, office actions, and related materials require careful handling of defined terms, technical relationships, references, numbers, units, and recurring terminology.</p>
            <p>Stepes provides specialized patent translation services for international filing and prosecution, prior-art research, patent-family management, portfolio analysis, licensing, due diligence, and patent litigation.</p>
            <ul className="content-list">
              {[
                "Patent applications, claims, and specifications", "PCT and national-phase materials", "Office actions, responses, and amendments", "Prior-art screening and research", "Patent-family translation", "Translation support for freedom-to-operate and invalidity research", "Patent litigation and evidentiary documents", "Certified patent translation when required"
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ArrowLink href={URLS.patent}>Explore Patent Translation Services</ArrowLink>
          </div>
          <div className="split-visual patent-visual">
            <div className="visual-label">Patent Translation Workflow</div>
            <div className="document-sheet" role="img" aria-label="Illustrative patent translation workflow panel showing claims, prior art, and quality assurance checkpoints.">
              <div className="sheet-toolbar" aria-hidden="true">
                <span className="workflow-pill active">Claims</span>
                <span className="workflow-pill">Prior Art</span>
                <span className="workflow-pill">QA Review</span>
              </div>
              <div className="sheet-card">
                <div className="sheet-card__header">
                  <div>
                    <span className="sheet-kicker">Source Set</span>
                    <h4>Patent Application Review</h4>
                  </div>
                  <div className="status-badge">In review</div>
                </div>
                <div className="sheet-progress" aria-hidden="true"><span /></div>
                <div className="sheet-line magenta" />
                <div className="sheet-line w82" />
                <div className="sheet-line w70" />
                <div className="sheet-line w90" />
                <div className="sheet-line w58" />
                <div className="sheet-line w64" />
                <div className="sheet-meta">
                  <div className="meta-chip"><strong>Claims</strong><span>Defined terminology</span></div>
                  <div className="meta-chip"><strong>Prior Art</strong><span>Research support</span></div>
                  <div className="meta-chip"><strong>QA</strong><span>Numbers + references</span></div>
                </div>
              </div>
              <div className="sheet-footnote" aria-hidden="true">
                <span className="sheet-note">Specialist translation</span>
                <span className="sheet-note">Independent review</span>
                <span className="sheet-note">Terminology control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell split split--reverse">
          <div className="split-copy">
            <SectionHeading title="Trademark Translation for Global Brand Portfolios" align="left" />
            <p>International trademarks generate multilingual legal content throughout registration, portfolio management, licensing, commercialization, opposition, and enforcement.</p>
            <p>Stepes helps trademark attorneys, law firms, brand owners, and corporate IP teams translate documentation for cross-border trademark matters while maintaining consistent treatment of names, products, goods and services descriptions, defined terminology, and related portfolio information.</p>
            <ul className="content-list">
              {["Trademark applications", "Examination correspondence", "Office actions and responses", "Evidence of use", "Oppositions", "Cancellation proceedings", "Assignments", "Coexistence agreements", "Trademark licensing", "Portfolio documentation", "Enforcement correspondence", "Litigation and arbitration materials"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ArrowLink href={URLS.trademark}>Explore Trademark Translation Services</ArrowLink>
          </div>
          <div className="split-visual trademark-visual">
            <div className="visual-label">Global Brand Portfolio</div>
            <div className="mark-grid">
              <div className="mark-tile"><span className="mark-symbol">T</span><span>Applications</span></div>
              <div className="mark-tile"><span className="mark-symbol">R</span><span>Portfolio Records</span></div>
              <div className="mark-tile"><span className="mark-symbol">L</span><span>Licensing</span></div>
              <div className="mark-tile"><span className="mark-symbol">E</span><span>Enforcement</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell license-grid">
          <div className="license-copy">
            <SectionHeading eyebrow="Commercialization" title="IP Licensing, Assignments, and Technology Transfer Across Languages" align="left" dark />
            <p>Intellectual property often moves from invention to commercial use through licensing, assignment, research collaboration, technology transfer, and other contractual relationships.</p>
            <p>These documents can be especially challenging because they combine legal obligations with detailed technical and commercial concepts. Definitions, fields of use, territories, products, technologies, payment terms, confidentiality provisions, ownership language, and technical references may all need to remain consistent across related agreements.</p>
            <ArrowLink href={URLS.contract} dark>Contract Translation Services</ArrowLink>
          </div>
          <div className="license-panel" aria-label="Examples of intellectual property commercialization documents">
            {[
              ["Patent & Technology Licenses", "Rights, fields of use, territories, obligations"],
              ["Trademark & Copyright Licenses", "Brand, media, software, and digital rights"],
              ["IP Assignments", "Ownership transfers and supporting schedules"],
              ["Technology Transfer", "Know-how, research, and commercialization"],
              ["R&D Collaboration", "Joint research and development documentation"],
              ["Royalty Documentation", "Commercial terms and payment-related records"],
            ].map(([a,b]) => <div className="license-row" key={a}><span>{a}</span><span>{b}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell confidential-layout">
          <div className="confidential-copy">
            <SectionHeading title="Secure Translation for Trade Secrets and Confidential IP" align="left" />
            <p>Some of the most valuable intellectual property never appears in a public filing. Unpublished inventions, proprietary processes, formulas, algorithms, manufacturing methods, R&amp;D results, product roadmaps, confidential business strategies, technical know-how, and other trade-secret information require careful handling throughout the translation process.</p>
            <p>Stepes supports secure multilingual workflows for invention disclosures, R&amp;D reports, proprietary manufacturing processes, formulas, software and algorithm documentation, engineering specifications, product-development records, internal IP investigations, confidential licensing materials, and trade-secret litigation documents.</p>
            <p>Translation technology should also be appropriate for the sensitivity of the information. Stepes evaluates AI-enabled and other language technologies according to project requirements rather than routing confidential IP content through uncontrolled public translation tools.</p>
            <ArrowLink href={URLS.security}>Learn About Stepes Security</ArrowLink>
          </div>
          <aside className="security-rail">
            {[
              ["shield", "Controlled Access", "Project access aligned with approved participants and assigned language professionals."],
              ["document", "Confidentiality Controls", "NDA-covered resources and client-defined handling instructions where appropriate."],
              ["upload", "Secure File Flow", "Controlled intake, translation, review, and delivery across the project lifecycle."],
              ["ai", "Approved Technology Routing", "Translation technology configured according to content sensitivity and project requirements."],
            ].map(([icon,title,text]) => (
              <div className="security-rail-row" key={title}>
                <div className="icon-box"><Icon name={icon} size={21} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell litigation-grid">
          <div className="litigation-copy">
            <SectionHeading title="IP Litigation and Enforcement Translation" align="left" />
            <p>Intellectual property disputes frequently combine complex legal arguments with highly technical evidence. Stepes helps litigation teams work with foreign-language documents throughout investigation, discovery, expert analysis, proceedings, and resolution.</p>
            <ArrowLink href={URLS.litigation}>Litigation Translation Services</ArrowLink>
            <ArrowLink href={URLS.interpreting}>Legal Interpreting Services</ArrowLink>
          </div>
          <div className="editorial-rows">
            {[
              ["Patent & Trademark Disputes", "Patent infringement, trademark disputes, oppositions, cancellations, prior art, claim charts, and supporting technical records."],
              ["Trade Secret & Copyright Matters", "Confidential business information, protected know-how, copyright evidence, software materials, and related dispute documentation."],
              ["Discovery & Evidence", "Discovery and eDiscovery documents, depositions, expert reports, technical exhibits, licensing records, and evidentiary materials."],
              ["Proceedings & Resolution", "Cease-and-desist correspondence, arbitration materials, settlement documentation, judgments, and enforcement documents."],
            ].map(([title,text]) => <div className="editorial-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="deal-panel">
            <div className="deal-copy">
              <h2>IP Translation for Due Diligence and Corporate Transactions</h2>
              <p>Intellectual property can represent a substantial part of the information reviewed during mergers, acquisitions, investments, licensing deals, technology transfers, joint ventures, portfolio purchases, and divestitures.</p>
              <p>When relevant IP records exist in multiple languages, legal and business teams need efficient access to the underlying information without applying the same translation workflow to every document. Large document sets can be screened and prioritized before full translation so counsel and transaction teams can focus professional human review on the content most relevant to the deal.</p>
              <ArrowLink href={URLS.legal}>Legal Translation Services</ArrowLink>
            </div>
            <div className="deal-list">
              {["Patent and trademark portfolios", "IP ownership records", "Assignments and licenses", "Chain-of-title documentation", "Invention records", "R&D documentation", "Technology agreements", "Litigation histories", "Technical reports", "Commercialization records"].map((item) => <div className="deal-item" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Subject-Matter Expertise"
            title="IP Translation Requires Both Legal and Technical Expertise"
            intro="Intellectual property documents often describe advanced science, engineering, software, products, manufacturing methods, or emerging technologies. Stepes matches language professionals according to the language pair, IP category, technical subject, document type, intended use, and required review level."
          />
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div style={{textAlign: "center", marginTop: 26}}><ArrowLink href={URLS.technical}>Technical Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Intended Use"
            title="The Right Translation Workflow for Every IP Use Case"
            intro="Not every intellectual property document needs the same translation process. Stepes configures the workflow according to the document's purpose, risk, complexity, confidentiality, audience, and required level of review."
          />
          <div className="usecase-panel">
            {useCases.map((item) => (
              <article className="usecase-row" key={item.title}>
                <h3>{item.title}</h3>
                <div>
                  <p>{item.text}</p>
                  <div className="usecase-items">{item.items.map((x) => <span key={x}>{x}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="legal-note">Stepes provides translation support according to project instructions. Jurisdiction-specific legal interpretation, filing strategy, filing requirements, deadlines, and final submission decisions remain the responsibility of the client, its counsel, or its filing representative.</p>
          <div style={{textAlign: "center", marginTop: 20}}><ArrowLink href={`${URLS.page}#project-quote`}>Discuss the Right Workflow for Your IP Content</ArrowLink></div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell ai-grid">
          <div className="ai-copy">
            <SectionHeading title="AI-Enabled IP Translation With Expert Human Oversight" align="left" dark />
            <p>Artificial intelligence is changing how global IP teams process large volumes of multilingual information. Used appropriately, AI can improve speed, document visibility, terminology management, and translation efficiency.</p>
            <p>The right role for AI depends on what the document is, how sensitive it is, and how the translated content will be used. Stepes combines AI with professional legal and technical linguists rather than applying one translation method to every document.</p>
            <ArrowLink href={URLS.aiLegal} dark>AI-Enabled Legal Translation Services</ArrowLink>
          </div>
          <div className="ai-panes">
            <div className="ai-pane">
              <h3>Where AI Can Add Efficiency</h3>
              <ul className="ai-list">
                {['Prior-art screening','Multilingual document triage','Large-volume research','Terminology extraction','Document classification','Version comparison','Repetitive portfolio content','Translation-memory optimization','Automated quality checks'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="ai-pane">
              <h3>Where Human Expertise Remains Central</h3>
              <ul className="ai-list">
                {['Patent claims and specifications for formal use','Complex prosecution materials','Licensing and technology-transfer agreements','Sensitive unpublished inventions','Litigation evidence','Expert reports','Certified translations','Documents requiring nuanced legal or technical interpretation'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell term-grid">
          <div className="term-copy">
            <SectionHeading eyebrow="Language Assets" title="Consistent IP Terminology Across Languages and Documents" align="left" />
            <p>Intellectual property terminology develops over time. An invention may first appear in research records, then in patent applications, licensing agreements, product documentation, portfolio records, litigation materials, and future generations of related IP.</p>
            <p>Stepes helps organizations build and maintain multilingual terminology resources covering defined patent terms, invention terminology, technical components, chemical and biological terminology, product names, software terms, trademarks, licensing definitions, party names, abbreviations, approved translations, terms that must remain untranslated, and reviewer decisions.</p>
          </div>
          <div className="term-assets">
            <div className="term-asset">
              <h3>Terminology Management</h3>
              <p>Client-approved multilingual termbases help translators and reviewers apply preferred terminology consistently across projects and related IP documents.</p>
              <div className="term-tags"><span className="term-tag">Defined terms</span><span className="term-tag">Product names</span><span className="term-tag">Patent terminology</span><span className="term-tag">Approved equivalents</span></div>
              <ArrowLink href={URLS.terminology}>Terminology Management</ArrowLink>
            </div>
            <div className="term-asset">
              <h3>Translation Memory</h3>
              <p>Translation memory preserves previously translated and approved content so related patents, agreements, portfolio documents, and recurring legal language can build on existing work instead of starting over.</p>
              <div className="term-tags"><span className="term-tag">Approved bilingual content</span><span className="term-tag">Related documents</span><span className="term-tag">Recurring clauses</span><span className="term-tag">Contextual reuse</span></div>
              <ArrowLink href={URLS.translationMemory}>Translation Memory</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            title="A Controlled Workflow for Complex Intellectual Property Content"
            intro="Every IP project is different. Stepes configures its translation workflow around the content, subject matter, intended use, language pair, confidentiality level, deadline, and client requirements."
          />
          <div className="workflow">
            <div className="workflow-grid">
              {workflow.map((step, index) => (
                <article className="workflow-step" key={step.title}>
                  <div className="workflow-num">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Security & Governance"
            title="Protecting Confidential IP Throughout the Translation Process"
            intro="Intellectual property translation can expose highly sensitive information before it becomes public. Stepes supports confidential IP projects through controlled multilingual workflows designed around client requirements."
          />
          <div className="security-matrix">
            {securityItems.map((item) => (
              <article className="security-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div style={{textAlign: "center", marginTop: 26}}><ArrowLink href={URLS.security}>Explore Stepes Translation Security</ArrowLink></div>
        </div>
      </section>

      <section className="section section--dense section--soft">
        <div className="shell language-panel">
          <div className="language-copy">
            <h2>Intellectual Property Translation in 100+ Languages</h2>
            <p>Global IP portfolios often span multiple filing markets, business regions, research centers, manufacturing locations, counterparties, and legal jurisdictions. Stepes coordinates multilingual IP programs through shared terminology, translation memory, project instructions, and centralized quality controls.</p>
            <ArrowLink href={URLS.languages}>Explore All Translation Languages</ArrowLink>
          </div>
          <div className="language-cloud" aria-label="Frequently requested intellectual property translation languages">
            {['Chinese','Japanese','Korean','German','French','Spanish','Italian','Portuguese','Dutch','Polish','Arabic','Swedish'].map((lang) => <div className="language-pill" key={lang}>{lang}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="What Determines IP Translation Cost and Turnaround?"
            intro="Intellectual property translation pricing and delivery schedules depend on more than word count. Stepes evaluates the content, intended use, workflow, and delivery requirements together when preparing a project quote."
          />
          <div className="cost-grid">
            {costFactors.map(([title,text]) => <div className="cost-row" key={title}><strong>{title}</strong><p>{text}</p></div>)}
          </div>
          <div style={{textAlign: "center", marginTop: 24}}><ArrowLink href={`${URLS.page}#project-quote`}>See What to Send for an IP Translation Quote</ArrowLink></div>
        </div>
      </section>

      <section className="section section--dense" id="project-quote">
        <div className="shell quote-panel">
          <div className="quote-copy">
            <div className="eyebrow">Project Scoping</div>
            <h2>What We Need to Prepare an Accurate Quote</h2>
            <p>Providing a few project details helps us recommend the right intellectual property translation workflow and prepare a more accurate quote.</p>
            <p>Not sure which workflow you need? Send us the documents and intended use, and our team can help determine an appropriate translation and review approach.</p>
            <div className="btn-row"><a className="btn btn-primary" href={URLS.quote}>Upload Files for a Quote <span aria-hidden="true">→</span></a></div>
          </div>
          <div className="quote-list">
            {['Source files','Source and target languages','Type of IP content','Intended use','Relevant jurisdictions','Required delivery date','Certification requirements','Formatting requirements','Related patents or portfolio documents','Existing translations','Approved terminology or glossaries','Attorney or reviewer instructions','Confidentiality or security requirements'].map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading title="Why Global IP Teams Choose Stepes" />
          <div className="why-grid">
            {reasons.map(([icon,title,text]) => (
              <article className="why-item" key={title}>
                <div className="icon-box"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Intellectual Property Translation FAQs" />
          <div className="faq-panel">
            {faq.map(([q,a], index) => (
              <details className="faq-item" key={q}>
                <summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
                <div className="faq-answer">
                  <p>{a}</p>
                  {index === 3 ? <ArrowLink href={URLS.patent}>Patent Translation Services</ArrowLink> : null}
                  {index === 4 ? <ArrowLink href={URLS.trademark}>Trademark Translation Services</ArrowLink> : null}
                  {index === 7 ? <ArrowLink href={URLS.certified}>Certified Translation Services</ArrowLink> : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            title="Related Legal and Intellectual Property Translation Services"
            intro="Explore specialist Stepes services that connect intellectual property translation with patent work, litigation, contracts, legal operations, and AI-enabled legal workflows."
          />
          <div className="related-grid">
            {related.map(([title,text,href]) => (
              <a className="related-link" href={href} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="related-action">Explore service <span aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-grid">
          <div>
            <h2>Translate Your Intellectual Property With Confidence</h2>
            <p>From patents and trademarks to licensing, trade secrets, transactions, and IP litigation, Stepes helps global legal and innovation teams work across languages through secure translation workflows matched to the subject matter and intended use of every document.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-light" href={URLS.quote}>Get a Translation Quote <span aria-hidden="true">→</span></a>
            <a className="btn btn-outline-light" href={URLS.contactSales}>Talk to an IP Translation Specialist</a>
          </div>
        </div>
      </section>
    </main>
  );
}
