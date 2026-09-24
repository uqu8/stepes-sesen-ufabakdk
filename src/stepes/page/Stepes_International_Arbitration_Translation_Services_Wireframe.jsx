import React, { useState } from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-us/";

const links = {
  legal: "https://www.stepes.com/legal-translation-services/",
  litigation: "https://www.stepes.com/litigation-translation-services/",
  court: "https://www.stepes.com/court-document-translation-services/",
  contract: "https://www.stepes.com/contract-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  discovery: "https://www.stepes.com/ediscovery-translation-services/",
  lawFirms: "https://www.stepes.com/law-firm-translation-services/",
  legalTeams: "https://www.stepes.com/solutions/legal-teams/",
  interpreting: "https://www.stepes.com/interpretation-services/",
};

const lifecycle = [
  { label: "Commence", text: "Arbitration agreements, notices, requests, responses, counterclaims, and supporting documents." },
  { label: "Submit", text: "Statements of claim and defense, memorials, replies, rejoinders, written submissions, and procedural correspondence." },
  { label: "Evidence", text: "Contracts, correspondence, financial records, project documentation, technical materials, and exhibits." },
  { label: "Prepare", text: "Witness statements, expert reports, bilingual reference materials, and preparation terminology." },
  { label: "Hear", text: "Hearing materials plus simultaneous or consecutive interpreting for testimony and live proceedings." },
  { label: "Award", text: "Procedural orders, interim decisions, partial awards, final awards, corrections, and related records." },
  { label: "Enforce", text: "Awards, arbitration agreements, court filings, supporting evidence, and recognition or enforcement documentation." },
];

const documentGroups = [
  {
    title: "Commencement & Pleadings",
    icon: "document",
    description: "Support the documents that establish, frame, and advance the arbitration from the initial filing through the principal written submissions.",
    items: ["Arbitration agreements", "Notices and requests for arbitration", "Answers and responses", "Statements of claim and defense", "Counterclaims", "Replies and rejoinders", "Memorials and written submissions", "Procedural correspondence"],
  },
  {
    title: "Documentary Evidence",
    icon: "evidence",
    description: "Translate the commercial, financial, technical, corporate, and project records that form the multilingual evidentiary record.",
    items: ["Commercial contracts and amendments", "Business correspondence and email", "Corporate and financial records", "Regulatory materials", "Technical and project documentation", "Schedules and reports", "Exhibits and document productions"],
  },
  {
    title: "Witness & Expert Evidence",
    icon: "people",
    description: "Preserve factual meaning, specialist terminology, exhibit references, and analytical distinctions across witness and expert materials.",
    items: ["Witness statements", "Affidavits and declarations", "Expert reports", "Technical opinions", "Economic analyses", "Damages and valuation reports", "Accounting reports", "Supporting exhibits and appendices"],
  },
  {
    title: "Hearing Materials & Procedure",
    icon: "hearing",
    description: "Prepare multilingual materials for procedural milestones, hearing preparation, presentations, testimony, and the live proceeding itself.",
    items: ["Procedural orders", "Procedural timetables", "Hearing bundles", "Opening and closing materials", "Hearing presentations", "Demonstratives", "Transcripts", "Witness and expert preparation materials"],
  },
  {
    title: "Awards & Enforcement",
    icon: "award",
    description: "Support the post-hearing record with precise translations for awards, corrections, recognition proceedings, and cross-border enforcement.",
    items: ["Interim, partial, and final awards", "Consent awards", "Corrections and supplementary decisions", "Arbitration agreements", "Recognition and enforcement applications", "Supporting court documents"],
  },
];

const industryRows = [
  { title: "Construction & Infrastructure", icon: "construction", text: "Engineering specifications, project schedules, change orders, site records, delay analyses, technical expert reports, and quantum documentation." },
  { title: "Energy & Natural Resources", icon: "energy", text: "Oil and gas projects, power generation, renewables, concession arrangements, production records, technical reports, and regulatory materials." },
  { title: "Life Sciences", icon: "life", text: "Pharmaceutical, biotechnology, clinical, medical device, manufacturing, quality, regulatory, licensing, and scientific evidence." },
  { title: "Technology", icon: "technology", text: "Software, telecommunications, technology licensing, intellectual property, development agreements, system records, and technical evidence." },
  { title: "Financial & Corporate Disputes", icon: "finance", text: "Financial statements, accounting records, valuation reports, damages models, banking records, transaction documents, and economic analyses." },
];

const evidenceTiers = [
  { label: "Large Evidence Collections", title: "Screen and prioritize multilingual content", text: "Use AI-assisted language identification, terminology extraction, preliminary translation, and document prioritization to understand large foreign-language populations efficiently." },
  { label: "Relevant Supporting Documents", title: "Match translation depth to intended use", text: "Choose machine translation, post-editing, summary translation, selected-passage translation, or full professional translation based on how counsel will use the content." },
  { label: "Decision-Critical Materials", title: "Apply professional legal and subject expertise", text: "Assign qualified linguists to documents central to case strategy, legal analysis, expert review, negotiation, or evidentiary use." },
  { label: "Formal Submissions & Evidence", title: "Add rigorous review where consequences are highest", text: "Use professional human translation with independent review or enhanced QA for witness statements, expert reports, memorials, critical exhibits, hearing materials, awards, and enforcement documents." },
];

const workflow = [
  { title: "Define Requirements", text: "Confirm languages, document types, intended uses, deadlines, hearing dates, confidentiality, formatting, and certification requirements." },
  { title: "Build the Language Team", text: "Match translators, reviewers, interpreters, and subject specialists to the matter and language combination." },
  { title: "Establish Terminology", text: "Incorporate party names, defined terms, prior translations, technical vocabulary, expert terminology, and counsel-approved language." },
  { title: "Translate and Review", text: "Apply the appropriate translation model based on document type, intended use, risk, and quality requirements." },
  { title: "Perform Quality Assurance", text: "Check completeness, terminology, names, dates, numbers, monetary values, cross-references, exhibits, tables, and formatting." },
  { title: "Prepare for the Hearing", text: "Coordinate interpreters, hearing materials, participant names, matter glossaries, and technical vocabulary." },
  { title: "Support the Matter as It Evolves", text: "Process new submissions, evidence, witness materials, expert reports, orders, and hearing documents using established language assets." },
  { title: "Support Awards and Enforcement", text: "Translate awards and related recognition or enforcement documentation according to confirmed jurisdictional requirements." },
];

const relatedServices = [
  { title: "Legal Translation Services", url: links.legal, text: "Professional translation for contracts, disputes, compliance, intellectual property, corporate matters, and official legal documentation." },
  { title: "Litigation Translation Services", url: links.litigation, text: "Multilingual support for discovery, evidence, pleadings, depositions, experts, hearings, and other legal disputes." },
  { title: "Court Document Translation Services", url: links.court, text: "Translation of court-filed, court-issued, and court-submitted documentation for domestic and cross-border proceedings." },
  { title: "Contract Translation Services", url: links.contract, text: "Professional translation for commercial agreements, joint ventures, licensing, distribution, supply, and other cross-border contracts." },
  { title: "eDiscovery Translation Services", url: links.discovery, text: "Multilingual processing, screening, review, summary, and translation for electronically stored information and large evidence populations." },
  { title: "Certified Translation Services", url: links.certified, text: "Certified translation when a signed certification statement is part of confirmed submission requirements." },
];

const faqs = [
  {
    q: "What are international arbitration translation services?",
    a: "International arbitration translation services provide professional translation of documents and language support used in cross-border arbitral proceedings. Materials can include arbitration agreements, requests for arbitration, statements of claim and defense, memorials, contracts, evidence, witness statements, expert reports, exhibits, procedural orders, hearing materials, awards, and recognition or enforcement documents. International arbitration matters may also require professional interpreting for witnesses, experts, counsel, clients, and hearings.",
  },
  {
    q: "What types of arbitration documents can Stepes translate?",
    a: "Stepes translates documents across the arbitration lifecycle, from arbitration agreements, requests, responses, memorials, contracts, correspondence, financial and technical evidence, exhibits, witness statements, and expert reports through procedural orders, hearing materials, awards, and recognition or enforcement documentation. Projects can range from a single high-priority document to large multilingual matter files involving several document types and languages.",
  },
  {
    q: "Can Stepes provide both arbitration translation and hearing interpretation?",
    a: "Yes. Written translation and professional interpreting can be coordinated within the same arbitration matter. Stepes can support submissions, evidence, witness statements, expert reports, hearing documents, and awards while also supporting live language requirements for witness preparation, expert preparation, attorney-client communication, testimony, and hearings.",
  },
  {
    q: "How does Stepes maintain terminology consistency across a long-running arbitration?",
    a: "Stepes can establish matter-specific terminology resources covering party names, corporate entities, defined terms, disputed contractual language, technical vocabulary, abbreviations, and other recurring concepts. Approved language can be maintained through glossaries, translation memory, project instructions, and reviewer feedback, then reused across later documents and procedural stages.",
  },
  {
    q: "Can Stepes translate witness statements and expert reports?",
    a: "Yes. Stepes supports witness statements, affidavits, declarations, expert reports, technical opinions, damages analyses, valuation reports, economic reports, and supporting exhibits. Assignments can be matched by language pair and subject matter, including engineering, construction, energy, finance, technology, life sciences, manufacturing, and other specialized fields.",
  },
  {
    q: "Can Stepes support arbitration matters involving several languages?",
    a: "Yes. Stepes supports translation across more than 100 languages and can coordinate multiple language combinations within the same arbitration matter. A centralized workflow can help manage language teams, terminology, party names, document structures, translation assets, reviewer feedback, and quality controls across the multilingual record.",
  },
  {
    q: "Can Stepes support ICC, ICSID, UNCITRAL, LCIA, ICDR, SIAC, and HKIAC arbitration matters?",
    a: "Stepes provides translation and interpreting services for international arbitration documents and proceedings that may be conducted under a range of institutional and ad hoc frameworks, including ICC, ICSID, UNCITRAL, LCIA, ICDR/AAA, SIAC, and HKIAC rules. Precise language, translation, interpreting, certification, and filing requirements vary by proceeding and should be confirmed from the applicable rules, tribunal directions, counsel instructions, and receiving authorities. References to institutions describe procedural contexts only and do not imply affiliation or endorsement.",
  },
  {
    q: "How can Stepes handle large volumes of foreign-language arbitration evidence?",
    a: "Large evidence populations can use tiered language workflows based on intended use, relevance, volume, and counsel instructions. Options can include language identification, AI-assisted preliminary translation, document screening, summary translation, selected-passage translation, machine translation post-editing, full professional translation, and independent linguistic review.",
  },
  {
    q: "Do arbitral awards always require certified translation?",
    a: "No. Translation and certification requirements depend on the intended use of the award, applicable jurisdiction, receiving court or authority, relevant procedural rules, and other circumstances. When an award is submitted for recognition or enforcement in another jurisdiction, formal translation requirements may apply. Counsel should confirm the current requirements of the receiving authority before translation begins.",
  },
  {
    q: "Can Stepes translate documents for recognition and enforcement of an arbitral award?",
    a: "Yes. Stepes can translate arbitral awards, arbitration agreements, court applications, supporting evidence, foreign judgments, corporate records, and related materials used in recognition and enforcement proceedings. Because formal requirements vary by jurisdiction and receiving authority, certification, sworn-translation, notarization, or other requirements should be established before the project begins.",
  },
  {
    q: "How does Stepes protect confidential arbitration materials?",
    a: "Stepes uses controlled project workflows for sensitive legal content, with project access, linguist assignment, file handling, terminology resources, review, and delivery managed according to project requirements. Confidentiality instructions and agreements can be incorporated where required, and workflows can be configured around the sensitivity, document type, intended use, and security requirements of the matter.",
  },
];

function Icon({ name, size = 24 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  switch (name) {
    case "document":
      return <svg {...common}><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M10 12h5M10 16h5"/></svg>;
    case "evidence":
      return <svg {...common}><path d="M4 6h16v13H4z"/><path d="M8 6V4h8v2"/><path d="M8 11h8M8 15h5"/></svg>;
    case "people":
      return <svg {...common}><circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9.5" r="2.5"/><path d="M3.5 19c.4-3.4 2.4-5.2 5.5-5.2s5.1 1.8 5.5 5.2"/><path d="M14 14.5c3.5-.6 5.7 1 6.3 4.5"/></svg>;
    case "hearing":
      return <svg {...common}><path d="M5 20h14"/><path d="M8 20v-8h8v8"/><path d="M6 8h12"/><path d="M9 5h6"/><path d="M12 3v2"/></svg>;
    case "award":
      return <svg {...common}><circle cx="12" cy="9" r="5"/><path d="M9 13.2 8 21l4-2.2 4 2.2-1-7.8"/><path d="m10.3 9 1.2 1.2L14 7.7"/></svg>;
    case "translation":
      return <svg {...common}><path d="M4 5h9v10H8l-4 4z"/><path d="M11 9h9v10h-4l-3 2v-6"/><path d="M7 9h3M8.5 7.5v3"/><path d="m15 12 2 4m2-4-2 4m-1.2-1h2.4"/></svg>;
    case "interpret":
      return <svg {...common}><path d="M5 14a7 7 0 0 1 14 0"/><path d="M5 14v4h3v-5H5M19 14v4h-3v-5h3"/><path d="M9 20h6"/></svg>;
    case "glossary":
      return <svg {...common}><path d="M5 4h6a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M19 4h-5a3 3 0 0 0-3 3v13h5a3 3 0 0 0 3-3z"/><path d="M8 9h3M14 9h2"/></svg>;
    case "construction":
      return <svg {...common}><path d="M3 20h18"/><path d="M5 20V9h7v11"/><path d="M12 6h7v14"/><path d="M7.5 12h2M7.5 15h2M15 10h2M15 14h2"/></svg>;
    case "energy":
      return <svg {...common}><path d="m13 2-7 11h6l-1 9 7-12h-6z"/></svg>;
    case "life":
      return <svg {...common}><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/></svg>;
    case "technology":
      return <svg {...common}><rect x="4" y="5" width="16" height="11" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m8 10 2 2-2 2M13 14h3"/></svg>;
    case "finance":
      return <svg {...common}><path d="M4 20h16"/><path d="M6 17v-5M10 17V8M14 17v-3M18 17V5"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "scale":
      return <svg {...common}><path d="M12 3v18M6 6h12M8 6l-4 7h8zM16 6l-4 7h8zM8 21h8"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3"/></svg>;
    case "team":
      return <svg {...common}><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M2.5 19c.5-3.8 2.4-5.8 5.5-5.8s5 2 5.5 5.8"/><path d="M14 14.4c3.5-.7 6 1 6.5 4.6"/></svg>;
    case "ai":
      return <svg {...common}><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3M2 8h3M2 12h3M2 16h3M19 8h3M19 12h3M19 16h3"/></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4 10-10"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8"/></svg>;
  }
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>;
}

function SectionHeader({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`section-heading ${align === "left" ? "heading-left" : "heading-center"} ${dark ? "section-heading-dark" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children, dark = false }) {
  return (
    <a className={`editorial-link ${dark ? "editorial-link-dark" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={18} />
    </a>
  );
}

function ArbitrationHeroArt() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 620 500" role="img" aria-label="International arbitration workflow connecting written submissions, evidence, hearing interpretation, and an arbitral award">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect x="40" y="50" width="540" height="390" rx="34" fill="#F7F8F9" stroke="#D8DBE0" />
      <path d="M150 153 C225 92, 330 90, 405 146" stroke="#C11D63" strokeWidth="2.5" fill="none" />
      <path d="M440 178 C505 234, 502 319, 438 360" stroke="#AEB4BC" strokeWidth="2" fill="none" />
      <path d="M395 380 C310 424, 210 405, 157 345" stroke="#C11D63" strokeWidth="2.5" fill="none" />
      <path d="M120 315 C78 254, 88 200, 126 168" stroke="#AEB4BC" strokeWidth="2" fill="none" />

      <g filter="url(#softShadow)">
        <rect x="100" y="105" width="135" height="118" rx="20" fill="#FFFFFF" stroke="#D6D9DE" />
        <path d="M130 133h74M130 154h55M130 175h63" stroke="#5B6169" strokeWidth="5" strokeLinecap="round" />
        <path d="M118 102h57l18 18h42" stroke="#C11D63" strokeWidth="3" fill="none" />
        <text x="118" y="205" fontSize="13" fill="#656B73" fontFamily="Arial, sans-serif">SUBMISSIONS</text>
      </g>

      <g filter="url(#softShadow)">
        <rect x="386" y="110" width="130" height="118" rx="20" fill="#FFFFFF" stroke="#D6D9DE" />
        <rect x="409" y="137" width="42" height="42" rx="8" fill="#FDF2F7" stroke="#C11D63" />
        <path d="M421 158h18M430 149v18" stroke="#C11D63" strokeWidth="2" />
        <path d="M465 143h28M465 158h23M465 173h20" stroke="#656B73" strokeWidth="4" strokeLinecap="round" />
        <text x="405" y="207" fontSize="13" fill="#656B73" fontFamily="Arial, sans-serif">EVIDENCE</text>
      </g>

      <g filter="url(#softShadow)">
        <rect x="388" y="292" width="128" height="106" rx="20" fill="#FFFFFF" stroke="#D6D9DE" />
        <circle cx="426" cy="330" r="16" fill="#FDF2F7" stroke="#C11D63" />
        <path d="M416 330h20M426 320v20" stroke="#C11D63" strokeWidth="2" />
        <path d="M458 320h31M458 336h23M458 352h28" stroke="#656B73" strokeWidth="4" strokeLinecap="round" />
        <text x="407" y="381" fontSize="13" fill="#656B73" fontFamily="Arial, sans-serif">AWARD</text>
      </g>

      <g filter="url(#softShadow)">
        <rect x="98" y="280" width="142" height="118" rx="20" fill="#FFFFFF" stroke="#D6D9DE" />
        <path d="M130 343a28 28 0 0 1 56 0" stroke="#C11D63" strokeWidth="3" fill="none" />
        <rect x="125" y="338" width="13" height="26" rx="4" fill="#FDF2F7" stroke="#C11D63" />
        <rect x="178" y="338" width="13" height="26" rx="4" fill="#FDF2F7" stroke="#C11D63" />
        <path d="M144 370h28" stroke="#656B73" strokeWidth="4" strokeLinecap="round" />
        <text x="124" y="384" fontSize="13" fill="#656B73" fontFamily="Arial, sans-serif">HEARING</text>
      </g>

      <g>
        <circle cx="310" cy="252" r="71" fill="#202126" />
        <path d="M310 208v88M273 252h74" stroke="#F2A7C6" strokeWidth="2" />
        <circle cx="310" cy="252" r="50" fill="none" stroke="#5A5D65" />
        <text x="310" y="245" textAnchor="middle" fontSize="12" fill="#F2A7C6" fontWeight="600" fontFamily="Arial, sans-serif">ONE MATTER</text>
        <text x="310" y="266" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontWeight="600" fontFamily="Arial, sans-serif">LANGUAGE WORKFLOW</text>
      </g>

      <circle cx="151" cy="153" r="7" fill="#C11D63" />
      <circle cx="440" cy="178" r="7" fill="#AEB4BC" />
      <circle cx="438" cy="360" r="7" fill="#C11D63" />
      <circle cx="120" cy="315" r="7" fill="#AEB4BC" />
    </svg>
  );
}

export default function InternationalArbitrationTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page-shell">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-deep: #9F1D55;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #202126;
          --body: #44484F;
          --muted: #686D75;
          --line: #DFE2E6;
          --line-dark: #3A3C42;
          --soft: #F5F6F7;
          --dark: #232429;
          --white: #FFFFFF;
          --radius-lg: 30px;
          --radius-md: 22px;
          font-synthesis: none;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; }
        .page-shell {
          width: 100%;
          overflow-x: clip;
          color: var(--body);
          background: var(--white);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        .section-soft { background: var(--soft); }
        .section-blush { background: var(--blush); }
        .section-dark { background: var(--dark); color: #F4F5F6; }
        h1, h2, h3 { color: var(--ink); margin: 0; font-weight: 600; letter-spacing: -0.02em; }
        h1 { font-size: 48px; line-height: 1.06; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.12; }
        h3 { font-size: 24px; line-height: 1.22; }
        p { margin: 0; font-size: 16px; line-height: 1.68; }
        .body-large { font-size: 18px; line-height: 1.62; }
        .section-heading { margin-bottom: 48px; }
        .section-heading h2 { max-width: 820px; }
        .section-intro { margin-top: 18px; max-width: 800px; font-size: 18px; line-height: 1.65; }
        .heading-center { text-align: center; margin-left: auto; margin-right: auto; }
        .heading-center h2, .heading-center .section-intro { margin-left: auto; margin-right: auto; }
        .heading-left { text-align: left; }
        .section-heading-dark h2 { color: #FFFFFF; }
        .section-heading-dark .section-intro { color: #D4D6DA; }
        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-dark { color: var(--pink-light); }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          transition: 160ms ease;
          border: 1px solid transparent;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
        }
        .btn-primary svg { color: #FFFFFF !important; stroke: #FFFFFF !important; }
        .btn-primary:hover { background: var(--magenta-deep); transform: translateY(-1px); }
        .btn-secondary { background: #FFFFFF; color: var(--ink); border-color: #C9CDD3; }
        .btn-secondary:hover { border-color: #9CA1AA; transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.22); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          text-decoration: none;
          min-height: 44px;
        }
        .editorial-link svg { transition: transform 160ms ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link-dark { color: var(--pink-light); }

        .hero {
          padding: 104px 0 92px;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
        }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(480px, 0.98fr); gap: 44px; align-items: center; }
        .hero-copy { position: relative; z-index: 2; }
        .hero-copy .body-large { max-width: 710px; margin: 24px 0 30px; color: #4C5057; }
        .hero-note { margin-top: 24px; font-size: 16px; color: #61666E; max-width: 700px; }
        .hero-visual { min-height: 490px; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; }
        .hero-art-svg { width: 100%; height: auto; max-width: 620px; }

        .proof-band { background: #FFFFFF; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .proof-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); }
        .proof-item { padding: 28px 24px; min-width: 0; }
        .proof-item + .proof-item { border-left: 1px solid var(--line); }
        .proof-item strong { display: block; color: var(--ink); font-size: 17px; line-height: 1.35; font-weight: 600; margin-bottom: 5px; }
        .proof-item span { display: block; font-size: 16px; line-height: 1.45; color: var(--muted); }

        .lifecycle-wrap { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .lifecycle-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); }
        .life-stage { padding: 28px 20px 30px; position: relative; }
        .life-stage + .life-stage { border-left: 1px solid var(--line); }
        .life-number { color: var(--magenta); font-size: 13px; line-height: 1; font-weight: 600; margin-bottom: 18px; }
        .life-stage h3 { font-size: 20px; margin-bottom: 11px; }
        .life-stage p { color: var(--muted); }

        .documents-layout { display: grid; grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.3fr); gap: 72px; align-items: start; }
        .documents-sticky { position: sticky; top: 28px; }
        .documents-sticky .body-large { margin-top: 22px; max-width: 450px; }
        .documents-sticky .editorial-link { margin-top: 22px; }
        .documents-proof { margin-top: 28px; max-width: 430px; padding: 3px 0 3px 18px; border-left: 3px solid var(--magenta); }
        .documents-proof strong { display: block; color: var(--ink); font-size: 17px; line-height: 1.45; font-weight: 600; }
        .documents-proof span { display: block; margin-top: 5px; color: var(--muted); font-size: 16px; line-height: 1.55; }
        .document-rows { display: grid; gap: 16px; }
        .document-row { background: #FFFFFF; border: 1px solid #DFE2E6; border-radius: 22px; padding: 28px 30px 26px; }
        .icon-box { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); }
        .document-row-head { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 17px; align-items: start; }
        .document-title-group h3 { font-size: 21px; margin: 1px 0 7px; }
        .document-title-group p { color: #5A5E66; font-size: 16px; line-height: 1.6; max-width: 720px; }
        .document-items { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 30px; margin-top: 22px; padding-top: 20px; border-top: 1px solid #E7E9EC; }
        .document-item { position: relative; padding-left: 15px; color: #4F535A; font-size: 16px; line-height: 1.5; }
        .document-item:before { content: ""; position: absolute; left: 0; top: 10px; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); }

        .dual-workflow { background: var(--dark); color: #F3F4F5; }
        .dual-head { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: 84px; margin-bottom: 50px; align-items: end; }
        .dual-head h2 { color: #FFFFFF; }
        .dual-head .body-large { color: #D2D4D8; max-width: 690px; }
        .dual-grid { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line-dark); border-radius: var(--radius-lg); overflow: hidden; }
        .dual-panel { padding: 38px 38px 34px; }
        .dual-panel + .dual-panel { border-left: 1px solid var(--line-dark); }
        .dual-title { display: flex; align-items: center; gap: 15px; margin-bottom: 24px; }
        .dual-title .icon-box { background: rgba(242, 167, 198, 0.08); color: var(--pink-light); }
        .dual-title h3 { color: #FFFFFF; }
        .dark-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
        .dark-list li { display: flex; gap: 11px; align-items: flex-start; color: #D7D9DD; font-size: 16px; }
        .dark-list li:before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--pink-light); margin-top: 10px; flex: 0 0 auto; }
        .shared-strip { margin-top: 24px; border-radius: 22px; border: 1px solid var(--line-dark); padding: 22px 28px; display: grid; grid-template-columns: 220px 1fr; gap: 28px; align-items: center; }
        .shared-strip strong { color: #FFFFFF; font-size: 18px; font-weight: 600; }
        .shared-assets { display: flex; flex-wrap: wrap; gap: 10px; }
        .shared-assets span { border: 1px solid #4A4D54; padding: 7px 10px; border-radius: 999px; font-size: 16px; color: #D9DBDF; }

        .witness-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .editorial-block h3 { margin-bottom: 14px; }
        .editorial-block p + p { margin-top: 14px; }
        .preserve-panel { margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line); }
        .preserve-panel strong { display: block; color: var(--ink); font-size: 17px; margin-bottom: 13px; }
        .compact-list { columns: 2; column-gap: 28px; margin: 0; padding: 0; list-style: none; }
        .compact-list li { break-inside: avoid; margin-bottom: 9px; padding-left: 16px; position: relative; font-size: 16px; }
        .compact-list li:before { content: ""; position: absolute; left: 0; top: 10px; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); }
        .expert-panel { padding: 34px; border-radius: var(--radius-lg); background: var(--soft); border: 1px solid #E3E5E8; }
        .expert-panel h3 { margin-bottom: 14px; }
        .expert-tags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .expert-tag { background: #FFFFFF; border: 1px solid #DDE0E4; border-radius: 999px; padding: 7px 11px; font-size: 16px; }

        .terminology-panel { border-radius: var(--radius-lg); background: #FFFFFF; border: 1px solid var(--line); overflow: hidden; }
        .term-top { position: relative; display: grid; grid-template-columns: 0.9fr 1.1fr; min-height: 320px; }
        .term-copy { padding: 44px; }
        .term-copy h3 { margin-bottom: 16px; }
        .term-copy p { max-width: 520px; }
        .term-assets { padding: 38px; border-left: 1px solid var(--line); background: var(--blush); display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .term-asset { background: #FFFFFF; border: 1px solid #DFE2E6; border-radius: 18px; padding: 18px; }
        .term-asset strong { display: block; color: var(--ink); font-weight: 600; margin-bottom: 6px; font-size: 16px; }
        .term-asset span { font-size: 16px; color: var(--muted); line-height: 1.5; }
        .term-flow { border-top: 1px solid var(--line); padding: 28px 32px; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); align-items: center; }
        .term-node { position: relative; text-align: center; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.3; padding: 0 10px; }
        .term-node:not(:last-child):after { content: "→"; position: absolute; right: -7px; top: 50%; transform: translateY(-50%); color: #A2A7AF; font-weight: 400; }

        .matter-types { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .matter-panel { border-radius: var(--radius-lg); border: 1px solid var(--line); padding: 34px; background: #FFFFFF; }
        .matter-panel h3 { margin-bottom: 14px; }
        .matter-panel p { color: #575B63; }
        .matter-list { margin: 22px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .matter-list li { font-size: 16px; padding-left: 15px; position: relative; }
        .matter-list li:before { content: ""; position: absolute; left: 0; top: 10px; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); }
        .framework-note { margin-top: 28px; padding: 26px 30px; border-left: 3px solid var(--magenta); background: var(--blush); border-radius: 0 18px 18px 0; }
        .framework-note strong { display: block; font-size: 17px; color: var(--ink); margin-bottom: 6px; }

        .industry-rows { border-top: 1px solid var(--line); }
        .industry-row { display: grid; grid-template-columns: 58px 310px 1fr; gap: 24px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .industry-row h3 { font-size: 20px; }
        .industry-row p { color: #5C6067; }

        .evidence-grid { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: 68px; align-items: start; }
        .evidence-sticky { position: sticky; top: 28px; }
        .evidence-sticky p { margin-top: 20px; max-width: 450px; }
        .tier-list { border-top: 1px solid #DADDE2; }
        .tier-row { padding: 27px 0; border-bottom: 1px solid #DADDE2; display: grid; grid-template-columns: 170px 1fr; gap: 28px; }
        .tier-label { font-size: 16px; line-height: 1.35; font-weight: 600; color: var(--magenta); text-transform: uppercase; letter-spacing: 0.05em; }
        .tier-row h3 { font-size: 20px; margin-bottom: 8px; }
        .tier-row p { color: #575B62; }
        .tier-principle { margin-top: 30px; border-radius: 22px; background: var(--dark); padding: 24px 28px; color: #FFFFFF; }
        .tier-principle strong { display: block; font-size: 18px; font-weight: 600; }
        .tier-principle p { margin-top: 6px; color: #D2D4D8; }

        .interpret-grid { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 72px; align-items: start; }
        .interpret-copy .body-large { margin-top: 20px; max-width: 480px; }
        .interpret-copy .editorial-link { margin-top: 20px; }
        .interpret-rows { border-top: 1px solid var(--line); }
        .interpret-row { padding: 24px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 48px 1fr; gap: 18px; }
        .interpret-row h3 { font-size: 20px; margin-bottom: 7px; }
        .interpret-row p { color: #5D6169; }
        .interpreter-prep { margin-top: 26px; padding: 26px 28px; background: var(--soft); border-radius: 22px; }
        .interpreter-prep strong { color: var(--ink); font-size: 17px; font-weight: 600; display: block; margin-bottom: 11px; }
        .prep-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .prep-tags span { font-size: 16px; border-radius: 999px; border: 1px solid #DADDE1; background: #FFFFFF; padding: 7px 10px; }

        .enforcement-grid { display: grid; grid-template-columns: 1fr 0.9fr; gap: 62px; align-items: start; }
        .enforcement-copy h2 { margin-bottom: 20px; }
        .enforcement-copy p + p { margin-top: 14px; }
        .enforcement-copy .editorial-link { margin-top: 18px; margin-right: 18px; }
        .enforcement-panel { background: #FFFFFF; border: 1px solid #ECD7E1; border-radius: var(--radius-lg); padding: 32px; }
        .enforcement-panel h3 { font-size: 20px; margin-bottom: 16px; }
        .enforcement-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
        .enforcement-list li { display: flex; gap: 11px; align-items: flex-start; font-size: 16px; }
        .enforcement-list svg { color: var(--magenta); margin-top: 3px; flex: 0 0 auto; }
        .legal-note { margin-top: 22px; padding-top: 20px; border-top: 1px solid #E8D7DF; color: #62666D; font-size: 16px; }

        .security-grid { display: grid; grid-template-columns: 0.78fr 1.22fr; gap: 68px; align-items: start; }
        .security-copy .body-large { margin-top: 20px; color: #D0D3D7; max-width: 460px; }
        .security-matrix { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line-dark); border-radius: var(--radius-lg); overflow: hidden; }
        .security-item { padding: 26px; min-height: 180px; }
        .security-item:nth-child(odd) { border-right: 1px solid var(--line-dark); }
        .security-item:nth-child(-n+4) { border-bottom: 1px solid var(--line-dark); }
        .security-item .icon-box { background: rgba(242, 167, 198, 0.08); color: var(--pink-light); margin-bottom: 18px; }
        .security-item h3 { font-size: 19px; color: #FFFFFF; margin-bottom: 8px; }
        .security-item p { color: #CFD2D6; }

        .audience-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .audience-item { padding: 34px 30px 30px; }
        .audience-item + .audience-item { border-left: 1px solid var(--line); }
        .audience-item .icon-box { margin-bottom: 20px; }
        .audience-item h3 { margin-bottom: 12px; }
        .audience-item p { color: #5E626A; }
        .audience-item .editorial-link { margin-top: 16px; }

        .languages-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 72px; align-items: start; }
        .languages-copy .body-large { margin-top: 20px; color: #565B63; max-width: 470px; }
        .language-groups { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
        .language-group { padding: 26px 0; border-bottom: 1px solid var(--line); }
        .language-group:nth-child(odd) { padding-right: 28px; }
        .language-group:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
        .language-group h3 { color: var(--ink); font-size: 19px; margin-bottom: 10px; }
        .language-group p { color: #5D6168; }
        .coordination-note { grid-column: 1 / -1; margin-top: 24px; border-radius: 20px; border: 1px solid var(--line); background: #FFFFFF; padding: 22px 26px; color: #5D6168; }
        .coordination-note strong { color: var(--ink); }

        .workflow-list { border-top: 1px solid var(--line); }
        .workflow-row { display: grid; grid-template-columns: 76px 280px 1fr; gap: 28px; padding: 25px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .workflow-number { color: var(--magenta); font-size: 16px; line-height: 1.4; font-weight: 600; padding-top: 3px; }
        .workflow-row h3 { font-size: 20px; }
        .workflow-row p { color: #5B5F67; }

        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
        .why-item { padding: 30px; min-height: 220px; }
        .why-item:nth-child(1), .why-item:nth-child(2), .why-item:nth-child(4), .why-item:nth-child(5) { border-right: 1px solid var(--line); }
        .why-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .why-item .icon-box { margin-bottom: 18px; }
        .why-item h3 { font-size: 20px; margin-bottom: 9px; }
        .why-item p { color: #5A5E65; }

        .related-list { border-top: 1px solid var(--line); }
        .related-row { display: grid; grid-template-columns: 310px 1fr auto; gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: center; }
        .related-row h3 { font-size: 19px; }
        .related-row p { color: #5D6168; }
        .related-row .editorial-link { white-space: nowrap; }

        .planning-grid { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: 70px; align-items: start; }
        .planning-copy .body-large { margin-top: 20px; max-width: 440px; }
        .planning-copy .btn-row { margin-top: 26px; }
        .planning-items { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
        .planning-item { padding: 24px 0; border-bottom: 1px solid var(--line); }
        .planning-item:nth-child(odd) { padding-right: 28px; }
        .planning-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
        .planning-item h3 { font-size: 19px; margin-bottom: 8px; }
        .planning-item p { color: #5D6168; }

        .faq-panel { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .faq-item + .faq-item { border-top: 1px solid var(--line); }
        .faq-button { width: 100%; background: none; border: 0; padding: 24px 0; min-height: 72px; display: grid; grid-template-columns: 1fr 36px; gap: 24px; align-items: center; text-align: left; color: var(--ink); font: inherit; cursor: pointer; }
        .faq-button span:first-child { font-size: 18px; line-height: 1.4; font-weight: 600; }
        .faq-symbol { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #D7DADE; display: grid; place-items: center; color: var(--magenta); font-size: 22px; line-height: 1; transition: 160ms ease; }
        .faq-answer { max-width: 840px; padding: 0 52px 25px 0; color: #575B62; font-size: 16px; line-height: 1.7; }

        .final-cta { background: var(--burgundy); color: #FFFFFF; padding: 86px 0; }
        .cta-grid { display: grid; grid-template-columns: 1fr auto; gap: 56px; align-items: center; }
        .cta-grid h2 { color: #FFFFFF; max-width: 790px; }
        .cta-grid p { margin-top: 18px; max-width: 820px; color: #F2DEE7; font-size: 18px; }
        .cta-actions { display: grid; gap: 12px; justify-items: stretch; min-width: 220px; }
        .final-cta .btn-primary,
        .final-cta .btn-primary:link,
        .final-cta .btn-primary:visited,
        .final-cta .btn-primary:hover,
        .final-cta .btn-primary:active,
        .final-cta .btn-primary:focus,
        .final-cta .btn-primary:focus-visible { background: #FFFFFF; color: var(--burgundy) !important; }
        .final-cta .btn-secondary { background: transparent; color: #FFFFFF; border-color: rgba(255,255,255,0.52); }
        .final-cta .btn-secondary:hover { border-color: #FFFFFF; }

        @media (max-width: 1180px) {
          .container { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: 1fr 0.9fr; }
          .hero-visual { min-height: 430px; }
          .proof-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .proof-item { padding: 25px 16px; }
          .proof-item:nth-child(4) { border-left: none; }
          .proof-item:nth-child(n+4) { border-top: 1px solid var(--line); }
          .lifecycle-grid { grid-template-columns: repeat(4, 1fr); }
          .life-stage:nth-child(5) { border-left: none; border-top: 1px solid var(--line); }
          .life-stage:nth-child(n+6) { border-top: 1px solid var(--line); }
          .industry-row { grid-template-columns: 58px 260px 1fr; }
        }

        @media (max-width: 900px) {
          .container { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 72px; }
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-copy { text-align: center; }
          .hero-copy h1, .hero-copy .body-large, .hero-note { margin-left: auto; margin-right: auto; }
          .hero-copy .btn-row { justify-content: center; }
          .hero-visual { min-height: auto; }
          .hero-art-svg { max-width: 590px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item { border-top: 1px solid var(--line); border-bottom: 0; }
          .proof-item:nth-child(-n+2) { border-top: none; }
          .proof-item:nth-child(odd) { border-left: none; }
          .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
          .hero-art-svg text { font-size: 14px; }
          .lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
          .life-stage { border-top: 1px solid var(--line); }
          .life-stage:nth-child(-n+2) { border-top: none; }
          .life-stage:nth-child(odd) { border-left: none; }
          .documents-layout, .evidence-grid, .interpret-grid, .security-grid, .languages-grid, .planning-grid { grid-template-columns: 1fr; gap: 44px; }
          .documents-sticky, .evidence-sticky { position: static; }
          .documents-sticky .section-heading, .evidence-sticky .section-heading, .interpret-copy .section-heading, .security-copy .section-heading, .languages-copy .section-heading, .planning-copy .section-heading { text-align: center; }
          .documents-sticky .section-heading h2, .documents-sticky .body-large, .evidence-sticky .section-heading h2, .evidence-sticky p, .interpret-copy .section-heading h2, .interpret-copy .body-large, .security-copy .section-heading h2, .security-copy .body-large, .languages-copy .section-heading h2, .languages-copy .body-large, .planning-copy .section-heading h2, .planning-copy .body-large { margin-left: auto; margin-right: auto; }
          .documents-sticky .editorial-link, .interpret-copy .editorial-link { margin-left: auto; margin-right: auto; width: max-content; }
          .dual-head { grid-template-columns: 1fr; gap: 22px; }
          .dual-head .section-heading { margin-bottom: 0; text-align: center; }
          .dual-head .section-heading h2 { margin-left: auto; margin-right: auto; }
          .dual-head .body-large { margin: 0 auto; text-align: center; }
          .dual-grid { grid-template-columns: 1fr; }
          .dual-panel + .dual-panel { border-left: none; border-top: 1px solid var(--line-dark); }
          .shared-strip { grid-template-columns: 1fr; }
          .witness-grid, .term-top, .matter-types, .enforcement-grid { grid-template-columns: 1fr; }
          .term-assets { border-left: none; border-top: 1px solid var(--line); }
          .term-flow { grid-template-columns: repeat(4, 1fr); gap: 18px 0; }
          .term-node:nth-child(4):after { display: none; }
          .term-node:nth-child(n+5) { margin-top: 8px; }
          .industry-row { grid-template-columns: 58px 220px 1fr; }
          .audience-grid, .why-grid { grid-template-columns: 1fr; }
          .audience-item + .audience-item { border-left: none; border-top: 1px solid var(--line); }
          .why-item { min-height: 0; }
          .why-item:nth-child(n) { border-right: none; border-bottom: 1px solid var(--line); }
          .why-item:last-child { border-bottom: none; }
          .related-row { grid-template-columns: 240px 1fr; }
          .related-row .editorial-link { grid-column: 2; justify-self: start; }
          .cta-grid { grid-template-columns: 1fr; text-align: center; }
          .cta-grid h2, .cta-grid p { margin-left: auto; margin-right: auto; }
          .cta-actions { min-width: 0; width: min(360px, 100%); margin: 0 auto; }
        }

        @media (max-width: 620px) {
          .container { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .section-dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; line-height: 1.14; }
          h3 { font-size: 20px; }
          .body-large, .section-intro { font-size: 18px; }
          .section-heading { margin-bottom: 36px; }
          .hero { padding: 72px 0 62px; }
          .hero-copy .btn-row { display: grid; width: 100%; }
          .hero-copy .btn { width: 100%; }
          .hero-note { text-align: center; }
          .hero-visual { margin-top: -5px; }
          .hero-art-svg text { display: none; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item { border-left: none !important; border-top: 1px solid var(--line) !important; border-bottom: 0; text-align: center; }
          .proof-item:first-child { border-top: none !important; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .life-stage { border-left: none !important; border-top: 1px solid var(--line) !important; padding: 24px 0; }
          .life-stage:first-child { border-top: none !important; }
          .life-number { margin-bottom: 10px; }
          .documents-sticky .editorial-link { margin-left: 0; margin-right: 0; }
          .documents-proof { max-width: none; }
          .document-row { padding: 24px 20px 22px; border-radius: 20px; }
          .document-row-head { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .document-row .icon-box { width: 44px; height: 44px; border-radius: 13px; }
          .document-title-group h3 { font-size: 20px; margin-top: 0; }
          .document-items { grid-template-columns: 1fr; gap: 9px; margin-top: 18px; padding-top: 18px; }
          .dual-panel { padding: 28px 22px; }
          .shared-strip { padding: 22px; }
          .witness-grid { gap: 34px; }
          .compact-list { columns: 1; }
          .expert-panel { padding: 26px 22px; }
          .term-copy, .term-assets { padding: 26px 22px; }
          .term-assets { grid-template-columns: 1fr; }
          .term-flow { grid-template-columns: 1fr; padding: 22px; gap: 0; }
          .term-node { text-align: left; padding: 14px 0; border-bottom: 1px solid var(--line); }
          .term-node:last-child { border-bottom: 0; }
          .term-node:not(:last-child):after { content: "↓"; display: block; right: 2px; top: 50%; }
          .matter-panel { padding: 26px 22px; }
          .matter-list { grid-template-columns: 1fr; }
          .framework-note { padding: 22px; }
          .industry-row { grid-template-columns: 48px 1fr; gap: 14px 16px; align-items: start; }
          .industry-row p { grid-column: 1 / -1; }
          .tier-row { grid-template-columns: 1fr; gap: 10px; }
          .interpret-row { grid-template-columns: 42px 1fr; }
          .enforcement-panel { padding: 26px 22px; }
          .security-matrix { grid-template-columns: 1fr; }
          .security-item:nth-child(n) { border-right: none; border-bottom: 1px solid var(--line-dark); }
          .security-item:last-child { border-bottom: none; }
          .language-groups, .planning-items { grid-template-columns: 1fr; }
          .language-group:nth-child(n), .planning-item:nth-child(n) { padding: 22px 0; border-left: none; }
          .workflow-row { grid-template-columns: 50px 1fr; gap: 16px; }
          .workflow-row p { grid-column: 1 / -1; }
          .why-item { padding: 26px 22px; }
          .related-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .related-row .editorial-link { grid-column: auto; justify-self: start; }
          .planning-copy .btn-row { display: grid; }
          .planning-copy .btn { width: 100%; }
          .faq-button { grid-template-columns: 1fr 34px; gap: 14px; padding: 22px 0; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 70px 0; }
          .cta-actions { width: 100%; }
          .cta-actions .btn { width: 100%; }
          .heading-center { text-align: center; }
          .heading-left { text-align: left; }
          .heading-center .section-intro { text-align: center; }
          .documents-sticky .body-large, .evidence-sticky p, .interpret-copy .body-large, .security-copy .body-large, .languages-copy .body-large, .planning-copy .body-large { text-align: left; }
        }

        @media (max-width: 340px) {
          .container { width: calc(100% - 40px); }
          .btn { padding-left: 16px; padding-right: 16px; }
        }
      `}</style>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>International Legal Language Services</Eyebrow>
            <h1>International Arbitration Translation Services</h1>
            <p className="body-large">Manage multilingual arbitration content from the initial request through evidence, witnesses, experts, hearings, awards, and enforcement with professional legal translation and interpreting coordinated through one secure workflow.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={QUOTE_URL}>Request a Quote</a>
              <a className="btn btn-secondary" href={CONTACT_URL}>Discuss an Arbitration Matter</a>
            </div>
            <p className="hero-note">Legal linguists, subject-matter specialists, interpreters, terminology workflows, and language technology aligned around the same matter.</p>
          </div>
          <div className="hero-visual">
            <ArbitrationHeroArt />
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="International arbitration translation capabilities">
        <div className="container proof-grid">
          <div className="proof-item"><strong>100+ Languages</strong><span>Global and regional language coverage</span></div>
          <div className="proof-item"><strong>ISO 17100</strong><span>Structured translation processes</span></div>
          <div className="proof-item"><strong>ISO 9001</strong><span>Quality management framework</span></div>
          <div className="proof-item"><strong>Translation + Interpreting</strong><span>Written and live language support</span></div>
          <div className="proof-item"><strong>Legal + Subject Expertise</strong><span>Specialists matched to the matter</span></div>
          <div className="proof-item"><strong>Secure Workflows</strong><span>Controlled handling for sensitive legal content</span></div>
        </div>
      </section>

      <section className="section" id="arbitration-lifecycle">
        <div className="container">
          <SectionHeader
            title="Language Support Across the International Arbitration Lifecycle"
            intro="International arbitration rarely involves a single document or a single language requirement. Stepes supports the complete multilingual matter as it develops from commencement through recognition and enforcement."
          />
          <div className="lifecycle-wrap">
            <div className="lifecycle-grid">
              {lifecycle.map((item, index) => (
                <article className="life-stage" key={item.label}>
                  <div className="life-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="documents">
        <div className="container documents-layout">
          <div className="documents-sticky">
            <div className="section-heading heading-left">
              <h2>International Arbitration Documents We Translate</h2>
            </div>
            <p className="body-large">From commencement documents and memorials to witness evidence, hearing bundles, awards, and enforcement materials, Stepes supports the full multilingual arbitration record with consistent terminology and matter-wide coordination.</p>
            <div className="documents-proof">
              <strong>Structured for high-priority filings and large matter records</strong>
              <span>Use one coordinated language workflow as documents, evidence, and procedural requirements evolve throughout the arbitration.</span>
            </div>
            <EditorialLink href={links.litigation}>Litigation Translation Services</EditorialLink>
          </div>
          <div className="document-rows">
            {documentGroups.map((group) => (
              <article className="document-row" key={group.title}>
                <div className="document-row-head">
                  <div className="icon-box"><Icon name={group.icon} /></div>
                  <div className="document-title-group">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <div className="document-items">
                  {group.items.map((item) => <div className="document-item" key={item}>{item}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dual-workflow" id="translation-and-interpreting">
        <div className="container">
          <div className="dual-head">
            <div className="section-heading heading-left section-heading-dark">
              <h2>Translation and Interpreting in One Arbitration Workflow</h2>
            </div>
            <p className="body-large">Written translation and live interpreting solve different language requirements, but in international arbitration they often depend on the same evidence, terminology, people, and procedural context. Coordinating them helps preserve continuity as the matter moves from documents to testimony.</p>
          </div>
          <div className="dual-grid">
            <article className="dual-panel">
              <div className="dual-title"><div className="icon-box"><Icon name="translation" /></div><h3>The Written Arbitration Record</h3></div>
              <ul className="dark-list">
                <li>Requests, pleadings, memorials, and written submissions</li>
                <li>Contracts, evidence, exhibits, and documentary productions</li>
                <li>Witness statements and expert reports</li>
                <li>Procedural orders and hearing bundles</li>
                <li>Interim, partial, and final awards</li>
              </ul>
            </article>
            <article className="dual-panel">
              <div className="dual-title"><div className="icon-box"><Icon name="interpret" /></div><h3>Live Arbitration Proceedings</h3></div>
              <ul className="dark-list">
                <li>Witness and expert preparation</li>
                <li>Attorney-client and case preparation meetings</li>
                <li>Witness and expert testimony</li>
                <li>Remote, hybrid, and on-site hearings</li>
                <li>Simultaneous and consecutive interpreting</li>
              </ul>
            </article>
          </div>
          <div className="shared-strip">
            <strong>Shared Matter Knowledge</strong>
            <div className="shared-assets">
              <span>Matter glossaries</span><span>Approved party names</span><span>Defined terms</span><span>Technical terminology</span><span>Prior translations</span><span>Counsel-approved language</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="witness-expert-evidence">
        <div className="container">
          <SectionHeader
            title="Accurate Translation for Witnesses and Experts"
            intro="Witness and expert evidence can be among the most consequential multilingual content in an arbitration. Translation must preserve meaning without introducing, omitting, or unintentionally changing material distinctions."
          />
          <div className="witness-grid">
            <article className="editorial-block">
              <h3>Witness Statement Translation</h3>
              <p>Witness statements often combine factual chronology, personal recollection, contractual terminology, project-specific language, names, dates, and exhibit references. Stepes focuses on preserving the evidence as it moves across languages and revised drafts.</p>
              <div className="preserve-panel">
                <strong>Preserve the details that matter</strong>
                <ul className="compact-list">
                  <li>Factual meaning</li><li>Chronology</li><li>Tone and level of certainty</li><li>Names and entities</li><li>Dates and monetary values</li><li>Defined terms</li><li>Exhibit references</li><li>Cross-references</li>
                </ul>
              </div>
            </article>
            <article className="expert-panel">
              <h3>Expert Report Translation</h3>
              <p>International arbitration frequently involves highly specialized experts. Stepes can match linguists to both the legal context and the subject matter, including tables, appendices, captions, footnotes, calculations, and supporting exhibits.</p>
              <div className="expert-tags">
                {['Engineering','Construction','Energy','Economics','Accounting','Valuation','Damages','Finance','Technology','Telecommunications','Pharmaceuticals','Medical Devices','Manufacturing'].map((item) => <span className="expert-tag" key={item}>{item}</span>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="terminology-management">
        <div className="container">
          <SectionHeader
            eyebrow="Matter-Wide Consistency"
            title="One Arbitration. One Controlled Multilingual Vocabulary."
            intro="Terminology decisions made early in a proceeding can reappear throughout the evidentiary record and ultimately in hearings and awards. Centralized language assets help keep those decisions aligned."
          />
          <div className="terminology-panel">
            <div className="term-top">
              <div className="term-copy">
                <h3>Build a reusable language foundation for the matter</h3>
                <p>Stepes can establish and maintain terminology resources around party names, entities, defined contractual terms, disputed provisions, technical concepts, financial language, abbreviations, and reviewer preferences.</p>
              </div>
              <div className="term-assets">
                <div className="term-asset"><strong>Matter Glossary</strong><span>Approved names, terms, abbreviations, and technical vocabulary.</span></div>
                <div className="term-asset"><strong>Translation Memory</strong><span>Previously approved language reused where appropriate across related documents.</span></div>
                <div className="term-asset"><strong>Counsel-Approved Language</strong><span>Terminology decisions incorporated from counsel, clients, experts, and reviewers.</span></div>
                <div className="term-asset"><strong>Cross-Language Coordination</strong><span>Equivalent concepts coordinated across multiple target languages without forcing unnatural phrasing.</span></div>
              </div>
            </div>
            <div className="term-flow" aria-label="Terminology consistency across the arbitration record">
              {['Contracts','Evidence','Witness Statements','Expert Reports','Memorials','Hearings','Awards'].map((item) => <div className="term-node" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="commercial-investor-state">
        <div className="container">
          <SectionHeader
            title="Language Support for Complex International Arbitration Matters"
            intro="International arbitration can involve commercial relationships, investments, government measures, technical projects, and financial claims. The underlying subject matter can be as important to translation quality as the legal terminology itself."
          />
          <div className="matter-types">
            <article className="matter-panel">
              <h3>International Commercial Arbitration</h3>
              <p>Support for disputes arising from cross-border contracts, transactions, projects, joint ventures, licensing arrangements, supply relationships, and other international business activities.</p>
              <ul className="matter-list">
                {['Construction and infrastructure','Energy and natural resources','Technology','Manufacturing','Life sciences','Financial services','Joint ventures','Licensing and distribution','Supply and procurement','M&A-related disputes'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="matter-panel">
              <h3>Investor-State Arbitration</h3>
              <p>Multilingual support for records that may combine legal, governmental, commercial, economic, and technical content across several jurisdictions and languages.</p>
              <ul className="matter-list">
                {['Treaties and investment agreements','Concession agreements','Government records','Legislation and regulation','Contracts and correspondence','Corporate documentation','Economic and financial evidence','Witness statements','Expert reports','Awards and enforcement documents'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
          <div className="framework-note">
            <strong>Institutional and ad hoc frameworks</strong>
            <p>International arbitrations may be conducted under frameworks such as ICC, ICSID, UNCITRAL, ICDR/AAA, LCIA, SIAC, or HKIAC rules. Language, translation, interpreting, filing, and procedural requirements depend on the applicable rules, tribunal directions, party agreements, and circumstances of the proceeding. References describe procedural contexts only and do not imply institutional affiliation or endorsement.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="subject-matter-expertise">
        <div className="container">
          <SectionHeader
            eyebrow="Technical Disputes"
            title="Legal Translation Backed by Subject-Matter Expertise"
            intro="Many international arbitrations sit at the intersection of law and highly specialized technical or commercial subject matter. Stepes can align legal-linguistic capability with the underlying discipline of the dispute."
          />
          <div className="industry-rows">
            {industryRows.map((item) => (
              <article className="industry-row" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="evidence-at-scale">
        <div className="container evidence-grid">
          <div className="evidence-sticky">
            <div className="section-heading heading-left">
              <Eyebrow>AI + Professional Expertise</Eyebrow>
              <h2>Scale Multilingual Evidence Without Treating Every Document the Same</h2>
            </div>
            <p className="body-large">A document being screened for relevance does not necessarily require the same translation workflow as a witness statement, expert report, memorial, or final award. Stepes can match language processing to intended use, relevance, risk, volume, and counsel instructions.</p>
          </div>
          <div>
            <div className="tier-list">
              {evidenceTiers.map((tier) => (
                <article className="tier-row" key={tier.label}>
                  <div className="tier-label">{tier.label}</div>
                  <div><h3>{tier.title}</h3><p>{tier.text}</p></div>
                </article>
              ))}
            </div>
            <div className="tier-principle">
              <strong>The right language workflow should follow the intended use of the content.</strong>
              <p>Use AI where it improves speed and scale, and professional human judgment where legal context, nuance, terminology, evidentiary significance, and final quality require it.</p>
            </div>
            <div style={{ marginTop: 18 }}><EditorialLink href={links.discovery}>eDiscovery Translation Services</EditorialLink></div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="hearing-interpretation">
        <div className="container interpret-grid">
          <div className="interpret-copy">
            <div className="section-heading heading-left">
              <h2>Professional Interpreting for Arbitration Hearings</h2>
            </div>
            <p className="body-large">Support real-time communication among counsel, clients, witnesses, experts, and other participants who do not share the same working language.</p>
            <EditorialLink href={links.interpreting}>Professional Interpreting Services</EditorialLink>
          </div>
          <div>
            <div className="interpret-rows">
              <article className="interpret-row"><div className="icon-box"><Icon name="interpret" /></div><div><h3>Simultaneous Interpretation</h3><p>Continuous real-time language support when participants need to follow spoken content without interrupting the proceeding.</p></div></article>
              <article className="interpret-row"><div className="icon-box"><Icon name="people" /></div><div><h3>Consecutive Interpretation</h3><p>Support for witness interviews, preparation meetings, attorney-client discussions, expert sessions, and proceedings where speakers pause for interpretation.</p></div></article>
              <article className="interpret-row"><div className="icon-box"><Icon name="hearing" /></div><div><h3>Witness and Expert Testimony</h3><p>Prepare interpreters with relevant matter terminology, participant names, exhibits, technical vocabulary, and other approved reference materials.</p></div></article>
              <article className="interpret-row"><div className="icon-box"><Icon name="globe" /></div><div><h3>Remote, Hybrid, and On-Site Proceedings</h3><p>Coordinate language support around the hearing format, locations, participants, languages, and scheduling requirements of the matter.</p></div></article>
            </div>
            <div className="interpreter-prep">
              <strong>Interpreter preparation can include</strong>
              <div className="prep-tags"><span>Matter glossaries</span><span>Participant names</span><span>Technical terminology</span><span>Relevant exhibits</span><span>Abbreviations</span><span>Prior translated materials</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush" id="awards-enforcement">
        <div className="container enforcement-grid">
          <div className="enforcement-copy">
            <h2>Arbitral Award Translation for Recognition and Enforcement</h2>
            <p className="body-large">An international arbitration does not necessarily end when the tribunal issues its award. Cross-border recognition, challenge, or enforcement can create additional translation requirements depending on the jurisdiction, receiving court, language of the original materials, and procedural circumstances.</p>
            <p>Stepes supports arbitration teams with translation of awards, arbitration agreements, recognition and enforcement applications, supporting court filings, foreign judgments, corporate records, evidentiary materials, and related correspondence.</p>
            <EditorialLink href={links.certified}>Certified Translation Services</EditorialLink>
            <EditorialLink href={links.court}>Court Document Translation Services</EditorialLink>
          </div>
          <aside className="enforcement-panel">
            <h3>Confirm formal requirements before translation begins</h3>
            <ul className="enforcement-list">
              {['Receiving jurisdiction and authority','Language of the award and arbitration agreement','Court or filing instructions','Certification or sworn-translation requirements','Notarization or other formalities when applicable','Required formatting and supporting documentation'].map((item) => <li key={item}><Icon name="check" size={20} /><span>{item}</span></li>)}
            </ul>
            <p className="legal-note">Stepes provides language services, not legal advice. Courts, tribunals, institutions, and other receiving authorities determine their own procedural, filing, certification, and acceptance requirements.</p>
          </aside>
        </div>
      </section>

      <section className="section section-dark" id="security">
        <div className="container security-grid">
          <div className="security-copy">
            <div className="section-heading heading-left section-heading-dark">
              <h2>Secure Language Workflows for Confidential Arbitration Matters</h2>
            </div>
            <p className="body-large">International arbitration materials can contain commercially sensitive, legally privileged, personal, financial, technical, and strategic information. Stepes uses controlled workflows designed to protect sensitive content throughout the project lifecycle.</p>
          </div>
          <div className="security-matrix">
            <article className="security-item"><div className="icon-box"><Icon name="shield" /></div><h3>Controlled Project Access</h3><p>Limit access to team members and linguistic resources assigned to the matter.</p></article>
            <article className="security-item"><div className="icon-box"><Icon name="document" /></div><h3>Secure File Handling</h3><p>Manage source files, translations, reference materials, and deliverables through controlled project workflows.</p></article>
            <article className="security-item"><div className="icon-box"><Icon name="team" /></div><h3>Qualified Linguist Assignment</h3><p>Select translators, reviewers, and interpreters according to language, subject matter, legal context, and project requirements.</p></article>
            <article className="security-item"><div className="icon-box"><Icon name="glossary" /></div><h3>Centralized Project Coordination</h3><p>Keep files, terminology, feedback, language assets, and delivery requirements organized through a managed workflow.</p></article>
            <article className="security-item"><div className="icon-box"><Icon name="scale" /></div><h3>Confidentiality Requirements</h3><p>Incorporate project-specific confidentiality instructions and agreements where required.</p></article>
            <article className="security-item"><div className="icon-box"><Icon name="check" /></div><h3>Quality Management</h3><p>Use structured ISO 17100 translation processes and an ISO 9001 quality management framework for repeatable project execution.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="audiences">
        <div className="container">
          <SectionHeader
            title="Built for International Arbitration Teams"
            intro="A centralized language workflow can support the different stakeholders responsible for documents, evidence, testimony, expert analysis, hearings, and enforcement."
          />
          <div className="audience-grid">
            <article className="audience-item"><div className="icon-box"><Icon name="scale" /></div><h3>Law Firms</h3><p>Support arbitration partners, associates, paralegals, case managers, and litigation-support professionals across submissions, evidence, witnesses, experts, hearings, awards, and enforcement.</p><EditorialLink href={links.lawFirms}>Translation Services for Law Firms</EditorialLink></article>
            <article className="audience-item"><div className="icon-box"><Icon name="team" /></div><h3>Corporate Legal Teams</h3><p>Support general counsel, disputes counsel, legal operations, and regional legal teams coordinating internal stakeholders, outside counsel, business units, and international offices.</p><EditorialLink href={links.legalTeams}>Solutions for Corporate Legal Teams</EditorialLink></article>
            <article className="audience-item"><div className="icon-box"><Icon name="technology" /></div><h3>Experts and Consultants</h3><p>Support economic, engineering, accounting, damages, valuation, scientific, technical, and industry experts working with foreign-language evidence or preparing reports and testimony.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="languages">
        <div className="container languages-grid">
          <div className="languages-copy">
            <div className="section-heading heading-left">
              <h2>International Arbitration Translation in 100+ Languages</h2>
            </div>
            <p className="body-large">Cross-border arbitration can involve source documents created in several countries, witnesses who speak different languages, bilingual contracts, and proceedings conducted in one or more procedural languages. Stepes can coordinate the multilingual record through one language-services partner.</p>
          </div>
          <div className="language-groups">
            <article className="language-group"><h3>European Languages</h3><p>French, German, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Ukrainian, Russian, Swedish, Danish, Norwegian, Finnish, Romanian, Greek, and more.</p></article>
            <article className="language-group"><h3>Asian Languages</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and additional Asian languages.</p></article>
            <article className="language-group"><h3>Middle Eastern Languages</h3><p>Arabic, Hebrew, Turkish, Persian, and additional regional languages.</p></article>
            <article className="language-group"><h3>Regional Variants</h3><p>Coordinate locale, dialect, legal terminology, and regional language preferences where the matter requires more than a generic language label.</p></article>
            <div className="coordination-note"><strong>Central coordination matters.</strong> Language teams, matter instructions, party names, defined terms, glossaries, translation memories, reviewer feedback, quality controls, and delivery requirements can be managed across the multilingual record.</div>
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="container">
          <SectionHeader
            title="A Coordinated Workflow for International Arbitration Translation"
            intro="Language requirements can change quickly as evidence appears, submissions evolve, experts revise reports, and hearing deadlines approach. A structured workflow helps the translation program adapt without losing matter knowledge."
            align="left"
          />
          <div className="workflow-list">
            {workflow.map((item, index) => (
              <article className="workflow-row" key={item.title}>
                <div className="workflow-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="container">
          <SectionHeader
            eyebrow="Why Stepes"
            title="One Language Partner Across the Arbitration Matter"
            intro="International arbitration requires more than isolated document translation. Stepes combines people, technology, process, and global linguistic capacity to support complex multilingual matters over time."
          />
          <div className="why-grid">
            <article className="why-item"><div className="icon-box"><Icon name="scale" /></div><h3>Legal + Subject-Matter Expertise</h3><p>Match professional linguists to both the legal context and the technical or commercial subject matter of the dispute.</p></article>
            <article className="why-item"><div className="icon-box"><Icon name="interpret" /></div><h3>Translation + Interpreting</h3><p>Coordinate written translations and real-time language support within the broader arbitration workflow.</p></article>
            <article className="why-item"><div className="icon-box"><Icon name="glossary" /></div><h3>Matter-Wide Terminology Control</h3><p>Maintain approved names, defined terms, technical vocabulary, and recurring language across related documents and stages.</p></article>
            <article className="why-item"><div className="icon-box"><Icon name="ai" /></div><h3>Scalable AI + Human Workflows</h3><p>Use AI-assisted processing where speed and scale matter and professional human expertise where legal significance and final quality require judgment.</p></article>
            <article className="why-item"><div className="icon-box"><Icon name="globe" /></div><h3>100+ Language Coverage</h3><p>Coordinate major world languages, regional variants, and multilingual proceedings through one language-services partner.</p></article>
            <article className="why-item"><div className="icon-box"><Icon name="shield" /></div><h3>Structured Quality and Security</h3><p>Use controlled workflows and ISO-based quality processes for sensitive legal, financial, commercial, and technical content.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="related-services">
        <div className="container">
          <SectionHeader
            eyebrow="Related Legal Services"
            title="Connect Arbitration With the Rest of the Legal Language Workflow"
            intro="International arbitration often intersects with litigation, court proceedings, contracts, discovery, certified translation, and other legal-language requirements."
            align="left"
          />
          <div className="related-list">
            {relatedServices.map((service) => (
              <article className="related-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <EditorialLink href={service.url}>View {service.title}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="plan-project">
        <div className="container planning-grid">
          <div className="planning-copy">
            <div className="section-heading heading-left">
              <h2>Plan an International Arbitration Translation Project</h2>
            </div>
            <p className="body-large">The earlier language requirements are defined, the easier it is to establish terminology, assemble the right team, and maintain consistency as the arbitration develops.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={QUOTE_URL}>Request a Quote</a>
              <a className="btn btn-secondary" href={CONTACT_URL}>Discuss Requirements</a>
            </div>
          </div>
          <div className="planning-items">
            <article className="planning-item"><h3>Source Files</h3><p>Share available submissions, evidence, witness materials, expert reports, contracts, exhibits, and expected future batches where possible.</p></article>
            <article className="planning-item"><h3>Languages</h3><p>Identify source and target languages, regional variants, multilingual source files, and any expected procedural languages.</p></article>
            <article className="planning-item"><h3>Intended Use</h3><p>Clarify whether content is for screening, attorney review, expert analysis, witness preparation, formal submission, hearing use, enforcement, certification, or another purpose.</p></article>
            <article className="planning-item"><h3>Arbitration Context</h3><p>Provide applicable procedural information, document conventions, counsel instructions, and confirmed language requirements where relevant.</p></article>
            <article className="planning-item"><h3>Key Deadlines</h3><p>Identify filing dates, hearing dates, expert and witness deadlines, procedural milestones, internal review dates, and enforcement deadlines.</p></article>
            <article className="planning-item"><h3>Reference Materials</h3><p>Provide existing translations, glossaries, party names, defined terms, contracts, prior submissions, expert terminology, and technical references.</p></article>
            <article className="planning-item"><h3>Hearing Requirements</h3><p>Share languages, dates, location, remote or on-site format, participants, witness or expert requirements, and interpreting format.</p></article>
            <article className="planning-item"><h3>Delivery Requirements</h3><p>Confirm file formats, bilingual output, formatting, naming conventions, certification instructions, reference numbering, and security requirements.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="container">
          <SectionHeader
            title="International Arbitration Translation Services FAQs"
            intro="Practical answers about multilingual arbitration documents, hearings, terminology, large evidence populations, awards, and enforcement."
            align="left"
          />
          <div className="faq-panel">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className="faq-item" key={faq.q}>
                  <button className="faq-button" type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{faq.q}</span>
                    <span className="faq-symbol" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <div className="faq-answer" id={`faq-answer-${index}`}>{faq.a}</div> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container cta-grid">
          <div>
            <h2>Manage the Entire Multilingual Arbitration Matter Through One Language Workflow</h2>
            <p>From the request for arbitration and documentary evidence through witness statements, expert reports, hearing interpretation, final awards, and cross-border enforcement, Stepes can build a language workflow around your documents, deadlines, participants, hearing requirements, and intended use.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={QUOTE_URL}>Request a Quote</a>
            <a className="btn btn-secondary" href={CONTACT_URL}>Discuss an Arbitration Matter</a>
          </div>
        </div>
      </section>
    </main>
  );
}
