import React from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F2A7C6",
  ink: "#202025",
  body: "#4F4C54",
  muted: "#706C74",
  line: "#E4E0E5",
  soft: "#F7F6F8",
  hero: "#FFFFFF",
  heroPanel: "#EEECEF",
  dark: "#302F34",
  white: "#FFFFFF",
};

const lifecycle = [
  ["Identify", "Identify languages, formats, custodians, source systems, recordings, and other multilingual materials."],
  ["Screen", "Use AI-assisted translation to help counsel understand large document populations and prioritize further review."],
  ["Translate", "Professionally translate selected records, communications, statements, and passages needed for substantive investigation."],
  ["Interview", "Support employee, witness, complainant, and subject interviews with interpreting, transcription, and translation."],
  ["Review", "Apply legal-linguist review, terminology control, completeness checks, and structured quality assurance."],
  ["Escalate", "Move important content into higher-control translation workflows as investigative significance increases."],
  ["Respond", "Translate findings, reports, regulator correspondence, supporting exhibits, and response materials."],
];

const evidenceGroups = [
  ["Complaints & Intake", ["Whistleblower complaints", "Ethics hotline reports", "Employee complaints", "Anonymous allegations", "Incident reports", "Regulatory inquiries"]],
  ["Communications & ESI", ["Email correspondence", "SMS and text messages", "Chat records", "Collaboration-platform content", "Internal correspondence", "Attachments and exports"]],
  ["Interviews & Statements", ["Employee interviews", "Witness interviews", "Complainant interviews", "Subject interviews", "Interview notes", "Recorded statements and transcripts"]],
  ["Corporate & Compliance", ["Policies and procedures", "Codes of conduct", "Compliance documentation", "Internal controls", "Audit findings", "HR and training records"]],
  ["Financial & Business Evidence", ["Accounting records", "Invoices", "Expense documentation", "Transaction records", "Contracts", "Third-party and purchase records"]],
  ["Findings & Response", ["Investigation reports", "Findings and summaries", "Board or executive materials", "Regulator correspondence", "Requests for information", "Supporting exhibits and remediation materials"]],
];

const investigationTypes = [
  ["whistle", "Whistleblower & Ethics Investigations", "Translate hotline reports, complaints, employee communications, interviews, corporate records, and supporting evidence throughout the matter."],
  ["finance", "Fraud & Financial Misconduct", "Support multilingual review of transaction records, expenses, correspondence, audit findings, interviews, and related business evidence."],
  ["shield", "Anti-Bribery & Corruption", "Translate communications, third-party records, contracts, payment information, compliance documentation, interviews, and investigation materials."],
  ["people", "Employment & Workplace Investigations", "Support employee complaints, HR records, workplace communications, policies, interviews, disciplinary records, and related evidence."],
  ["regulator", "Regulatory Investigations", "Translate regulatory requests, correspondence, internal records, interviews, supporting evidence, findings, and response materials."],
  ["lock", "Data Privacy & Security Investigations", "Support multilingual incident communications, policies, technical records, interviews, findings, and regulator-facing documentation."],
];

const riskLevels = [
  ["Level 1", "Initial Understanding", "AI-assisted multilingual screening", "Preliminary screening, email and chat populations, early matter assessment, and rapid content understanding.", "Speed and scale"],
  ["Level 2", "Focused Investigation Review", "Human-validated or professional translation", "Selected communications, priority passages, internal reports, and working materials used for substantive review.", "Efficient substantive review"],
  ["Level 3", "Key Evidence", "Expert professional translation with enhanced review", "Witness statements, material communications, important contracts, financial records, and decision-critical evidence.", "Higher linguistic control"],
  ["Level 4", "Regulatory or External Use", "Enhanced translation and quality control", "Regulator-facing content, formal findings, executive or board materials, and other high-consequence documents.", "Controlled final translation"],
];

const securityRows = [
  ["Controlled Project Access", "Limit access to authorized project professionals and client-designated stakeholders."],
  ["Confidentiality Requirements", "Support matter-specific confidentiality requirements and qualified language-professional assignments."],
  ["Secure File Handling", "Manage sensitive records through controlled translation workflows rather than unmanaged public tools."],
  ["Coordinated Review", "Support defined review and feedback processes involving authorized legal, compliance, and investigation stakeholders."],
  ["Counsel-Directed Requirements", "Work within matter-specific access, processing, delivery, and document-handling requirements established by the client or counsel."],
];

const whyItems = [
  ["spark", "AI + Human Translation", "Combine scalable AI-assisted multilingual screening with professional translation and expert review as investigative importance increases."],
  ["briefcase", "Legal & Subject-Matter Expertise", "Select linguists according to the legal discipline, industry context, evidence type, language pair, and intended use."],
  ["layers", "High-Volume Multilingual Triage", "Gain rapid understanding of large foreign-language document populations without applying the most intensive workflow to every record."],
  ["mic", "Documents + Interviews", "Coordinate written translation, interpreting, transcription, and audio/video language requirements through one provider."],
  ["book", "Matter-Specific Terminology", "Maintain consistency for names, entities, transactions, financial terminology, systems, and recurring investigation concepts."],
  ["shield", "Secure Enterprise Workflows", "Support sensitive investigation content through controlled access, confidentiality requirements, qualified project teams, and coordinated delivery."],
];

const faqs = [
  ["Do we need to professionally translate every foreign-language document in an internal investigation?", "Not necessarily. Large collections may first use language identification and AI-assisted translation for preliminary understanding. Counsel can then select records for professional translation, with additional linguistic review applied to key evidence or externally used materials."],
  ["Can Stepes help screen thousands of multilingual emails and chat messages?", "Yes. Stepes can provide the multilingual language layer for large document populations using language identification, AI-assisted translation, professional translation, and higher-level review as required. Counsel and investigation teams remain responsible for legal decisions involving relevance, privilege, responsiveness, significance, and disclosure."],
  ["Can you translate whistleblower complaints and ethics hotline reports?", "Yes. Stepes translates whistleblower complaints, hotline reports, employee allegations, supporting documents, communications, and related investigation materials across more than 100 languages."],
  ["Do you provide interpreters for investigation interviews?", "Yes. Stepes provides professional interpreting for employee, witness, complainant, subject, and other investigation interviews, including remote and on-site sessions where available."],
  ["Can you translate recorded interviews and transcripts?", "Yes. Stepes can coordinate multilingual transcription, transcript translation, audio/video translation, timestamps, speaker labeling, and professional linguistic review according to project requirements."],
  ["How do you handle confidential investigation materials?", "Stepes supports controlled project access, confidentiality requirements, qualified language-professional assignment, secure file handling, coordinated review, and agreed delivery workflows. Matter-specific requirements should be confirmed before work begins."],
  ["Can Stepes support regulatory investigations involving several countries?", "Yes. Stepes supports more than 100 languages and can coordinate documents, communications, interviews, terminology, and review requirements across multiple jurisdictions."],
  ["Can important investigation documents receive additional review before being sent to a regulator?", "Yes. Key documents can receive independent linguistic review, terminology verification, structured QA, formatting, and certification when required by the receiving authority or requested by counsel."],
];

const related = [
  ["Legal Translation Services", "Professional translation across contracts, disputes, investigations, compliance, corporate legal content, and official submissions.", "https://www.stepes.com/legal-translation-services/"],
  ["Litigation Translation Services", "Support cross-border disputes with translation for discovery, evidence, depositions, witness materials, and proceedings.", "https://www.stepes.com/litigation-translation-services/"],
  ["eDiscovery Translation Services", "Understand multilingual ESI at scale through language identification, document screening, translation, and review.", "https://www.stepes.com/ediscovery-translation-services/"],
  ["Compliance Translation Services", "Translate policies, controls, audit documentation, compliance communications, and regulatory materials.", "https://www.stepes.com/compliance-translation-services/"],
  ["Translation Services for Law Firms", "Support multilingual work across investigations, transactions, disputes, compliance, and client communication.", "https://www.stepes.com/law-firm-translation-services/"],
  ["Solutions for Corporate Legal Teams", "Centralize recurring legal translation across contracts, compliance, investigations, governance, privacy, and disputes.", "https://www.stepes.com/solutions/legal-teams/"],
];

function Icon({ name, size = 23 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const icons = {
    whistle: <><path d="M6 8h7l5-3v14l-5-3H6Z"/><path d="M6 11H3v2h3"/><path d="M9 16v4"/></>,
    finance: <><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/></>,
    shield: <><path d="M12 3 19 6v6c0 4.5-2.8 7.7-7 9-4.2-1.3-7-4.5-7-9V6Z"/><path d="m9 12 2 2 4-5"/></>,
    people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.4-4 2.3-6 5-6s4.6 2 5 6"/><path d="M14 15c2.8.2 4.6 1.8 5 5"/></>,
    regulator: <><path d="M3 21h18"/><path d="M5 21V9h14v12"/><path d="M2 9 12 3l10 6"/><path d="M8 12v5M12 12v5M16 12v5"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/></>,
    spark: <><path d="m12 3 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"/><path d="m18 13 .7 2.1 2.1.7-2.1.7L18 19l-.7-2.5-2.1-.7 2.1-.7Z"/><path d="M5 14.5 6 17l2.5.8-2.5.8L5 21l-.8-2.4-2.4-.8L4.2 17Z"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/><path d="M9 21h6"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z"/></>,
    doc: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    chat: <><path d="M4 5h16v11H9l-5 4Z"/><path d="M8 9h8M8 12h5"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4 10-10"/>,
  };
  return <svg {...common}>{icons[name] || icons.doc}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function ArrowLink({ href, children, dark = false }) {
  return <a className={dark ? "arrow-link arrow-link-dark" : "arrow-link"} href={href}><span>{children}</span><Icon name="arrow" size={17}/></a>;
}

function FunnelConnector() {
  return (
    <div className="funnel-connector" aria-hidden="true">
      <svg viewBox="0 0 18 30" focusable="false">
        <path d="M9 2v20" />
        <path d="m5 18 4 5 4-5" />
      </svg>
    </div>
  );
}

function HeroArtwork() {
  return (
    <svg className="hero-art" viewBox="0 0 620 500" role="img" aria-label="Multilingual investigation content moving through screening, translation, and review toward priority evidence">
      <defs>
        <filter id="heroShadow"><feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#5B555F" floodOpacity=".12"/></filter>
      </defs>
      <rect x="82" y="34" width="454" height="428" rx="34" fill="#E8E5E9" stroke="#BFBAC2"/>
      <rect x="142" y="78" width="338" height="336" rx="26" fill="#FFFFFF" stroke="#CCC7CE" filter="url(#heroShadow)"/>
      <text x="172" y="116" fill="#C11D63" fontSize="12" fontWeight="700" letterSpacing="1.4">INVESTIGATION WORKSPACE</text>
      <text x="172" y="145" fill="#27252B" fontSize="20" fontWeight="600">Multilingual matter review</text>
      <line x1="172" x2="450" y1="164" y2="164" stroke="#DDD9DE"/>
      <g transform="translate(170 192)">
        <rect width="118" height="62" rx="12" fill="#F7F6F8" stroke="#D2CED4"/>
        <path d="M16 17h26m-26 9h79m-79 9h56" stroke="#77717A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="98" cy="17" r="6" fill="#C11D63"/>
        <text x="16" y="53" fill="#5E5961" fontSize="10">Email · German</text>
      </g>
      <g transform="translate(316 192)">
        <rect width="134" height="62" rx="12" fill="#F7F6F8" stroke="#D2CED4"/>
        <path d="M16 17h42m-42 9h87m-87 9h66" stroke="#77717A" strokeWidth="2" strokeLinecap="round"/>
        <text x="16" y="53" fill="#5E5961" fontSize="10">Chat · Chinese</text>
      </g>
      <g transform="translate(170 278)">
        <rect width="132" height="62" rx="12" fill="#F7F6F8" stroke="#D2CED4"/>
        <path d="M16 21h92m-92 9h61" stroke="#77717A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 46c8-12 14 12 22 0s14 12 22 0 14 12 22 0 14 12 22 0" stroke="#C11D63" strokeWidth="2" fill="none"/>
        <text x="16" y="57" fill="#5E5961" fontSize="9">Interview audio</text>
      </g>
      <g transform="translate(330 278)">
        <rect width="120" height="62" rx="12" fill="#FDF2F7" stroke="#E7B6CB"/>
        <text x="16" y="20" fill="#9F1D55" fontSize="10" fontWeight="700">PRIORITY EVIDENCE</text>
        <path d="M16 31h82m-82 9h56" stroke="#77717A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="101" cy="46" r="7" fill="#C11D63"/>
        <path d="m98 46 2 2 4-5" stroke="#fff" strokeWidth="1.5" fill="none"/>
      </g>
      <line x1="170" x2="450" y1="362" y2="362" stroke="#DDD9DE"/>
      <g transform="translate(174 383)">
        <circle cx="7" cy="7" r="7" fill="#C11D63"/><text x="20" y="11" fill="#4F4A53" fontSize="11">Screen</text>
        <circle cx="91" cy="7" r="7" fill="#F2A7C6"/><text x="104" y="11" fill="#4F4A53" fontSize="11">Translate</text>
        <circle cx="205" cy="7" r="7" fill="#77717A"/><text x="218" y="11" fill="#4F4A53" fontSize="11">Review</text>
      </g>
      <g fill="none" stroke="#948E97" strokeWidth="1.6">
        <path d="M45 128h66c18 0 24 13 24 28v20"/>
        <path d="M45 228h66c18 0 24 13 24 28v10"/>
        <path d="M45 332h66c18 0 24-13 24-28v-12"/>
        <path d="M486 228h75"/>
        <path d="M486 332h75"/>
      </g>
      <circle cx="28" cy="128" r="22" fill="#F7F6F8" stroke="#BEB8C1"/><g transform="translate(17 117)" stroke="#9F1D55" fill="none" strokeWidth="1.8"><rect width="22" height="16" rx="2"/><path d="m1 2 10 7 10-7"/></g>
      <circle cx="28" cy="228" r="22" fill="#F7F6F8" stroke="#BEB8C1"/><g transform="translate(17 219)" stroke="#9F1D55" fill="none" strokeWidth="1.8"><path d="M1 1h20v13H8l-5 4v-4H1Z"/><path d="M5 6h12M5 9h8"/></g>
      <circle cx="28" cy="332" r="22" fill="#F7F6F8" stroke="#BEB8C1"/><g transform="translate(19 320)" stroke="#9F1D55" fill="none" strokeWidth="1.8"><path d="M2 1h12l4 4v18H2Z"/><path d="M14 1v5h5"/></g>
      <circle cx="579" cy="228" r="22" fill="#FDF2F7" stroke="#E7B6CB"/><path d="m569 228 7 7 13-15" fill="none" stroke="#9F1D55" strokeWidth="2"/>
      <circle cx="579" cy="332" r="22" fill="#F7F6F8" stroke="#BEB8C1"/><path d="M569 326h20m-20 7h14" fill="none" stroke="#9F1D55" strokeWidth="1.8"/>
    </svg>
  );
}

export default function InternalRegulatoryInvestigationWireframe() {
  return (
    <main className="stepes-page">
      <style>{`
        :root{--magenta:${C.magenta};--magenta-dark:${C.magentaDark};--burgundy:${C.burgundy};--blush:${C.blush};--blush-strong:${C.blushStrong};--ink:${C.ink};--body:${C.body};--muted:${C.muted};--line:${C.line};--soft:${C.soft};--hero:${C.hero};--dark:${C.dark};--white:${C.white};}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        .stepes-page{font-family:"Inter Tight","Inter",Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.55;overflow-x:hidden}
        .container{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section-dense{padding:80px 0}
        .bg-soft{background:var(--soft)}
        .bg-blush{background:var(--blush)}
        .bg-dark{background:var(--dark);color:#fff}
        h1,h2,h3,p{margin-top:0}
        h1,h2,h3{font-weight:600;letter-spacing:-.028em;line-height:1.08}
        h1{font-size:48px;max-width:760px;margin-bottom:24px}
        h2{font-size:36px;max-width:820px;margin-bottom:20px}
        h3{font-size:24px;margin-bottom:12px}
        p{font-size:16px;color:var(--body);margin-bottom:18px}
        .intro{font-size:18px;line-height:1.65;max-width:800px}
        .dark-copy{color:#DBD8DE}
        .eyebrow{font-size:11px;line-height:1.2;letter-spacing:.15em;text-transform:uppercase;font-weight:600;color:var(--magenta);margin-bottom:16px}
        .eyebrow-dark{color:var(--blush-strong)}
        .section-head{margin-bottom:48px}
        .section-head.center{text-align:center;margin-left:auto;margin-right:auto}
        .section-head.center h2,.section-head.center .intro{margin-left:auto;margin-right:auto}
        .pill{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:12px 24px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;border:1px solid transparent;transition:.2s ease}
        .pill-primary,.pill-primary:link,.pill-primary:visited,.pill-primary:hover,.pill-primary:active,.pill-primary:focus,.pill-primary:focus-visible{color:#fff!important}
        .pill-primary,.pill-primary:link,.pill-primary:visited{background:var(--magenta)}
        .pill-primary:hover,.pill-primary:active,.pill-primary:focus,.pill-primary:focus-visible{background:var(--magenta-dark);transform:translateY(-1px)}
        .pill-secondary,.pill-secondary:visited{background:#fff;color:var(--ink);border-color:#C8C3CA}
        .pill-secondary:hover,.pill-secondary:focus-visible{border-color:#9E98A1;color:var(--ink);transform:translateY(-1px)}
        .pill:focus-visible,.arrow-link:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
        .arrow-link{display:inline-flex;align-items:center;gap:8px;max-width:100%;color:var(--magenta);text-decoration:none;font-size:16px;font-weight:600;line-height:1.45;min-height:44px;text-align:left}
        .arrow-link span{min-width:0;overflow-wrap:break-word}
        .arrow-link svg{width:17px;height:17px;flex:0 0 17px;overflow:visible;transition:.2s ease}
        .arrow-link:hover svg{transform:translateX(3px)}
        .arrow-link-dark{color:var(--blush-strong)}
        .icon-box{width:46px;height:46px;border-radius:14px;background:#F3F0F3;border:1px solid #DEDADF;color:var(--magenta);display:flex;align-items:center;justify-content:center;flex:0 0 auto}

        .hero{background:var(--hero);padding:104px 0 92px;position:relative;border-bottom:1px solid var(--line);overflow:hidden}
        .hero::after{content:"";position:absolute;right:-170px;top:-190px;width:430px;height:430px;border:1px solid rgba(193,29,99,.14);border-radius:50%;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(430px,.96fr);gap:66px;align-items:center;position:relative;z-index:1}
        .hero .lead{font-size:18px;line-height:1.65;color:#4A464E;max-width:720px;margin-bottom:30px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:38px}
        .hero-proof{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #B9B4BD;padding-top:26px}
        .proof{padding-right:18px;margin-right:18px;border-right:1px solid #B9B4BD}
        .proof:last-child{border-right:0;margin-right:0}
        .proof strong{display:block;font-size:16px;margin-bottom:4px;color:var(--ink)}
        .proof span{display:block;font-size:16px;line-height:1.45;color:#5D5961}
        .hero-art{width:100%;height:auto;display:block}

        .overview-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:86px;align-items:start}
        .challenge-list{border-top:1px solid var(--line)}
        .challenge-row{display:grid;grid-template-columns:180px 1fr;gap:26px;padding:25px 0;border-bottom:1px solid var(--line)}
        .challenge-row strong{font-size:18px;font-weight:600}
        .challenge-row p{margin:0}
        .overview-note{margin-top:28px;padding:22px 24px;background:var(--blush);border-left:3px solid var(--magenta);border-radius:0 18px 18px 0;font-size:18px;line-height:1.55;color:#403B43}

        .lifecycle-head{display:grid;grid-template-columns:.82fr 1.18fr;gap:64px;align-items:end;margin-bottom:46px}
        .lifecycle-head h2{color:#fff;margin-bottom:0}
        .lifecycle-head p{margin:0;color:#DAD6DC}
        .lifecycle-track{display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid #5A585F;border-bottom:1px solid #5A585F}
        .life-step{position:relative;padding:30px 18px 32px 0;margin-right:18px}
        .life-step:not(:last-child)::after{content:"";position:absolute;right:0;top:26px;bottom:26px;width:1px;background:#5A585F}
        .life-num{font-size:16px;font-weight:600;color:var(--blush-strong);margin-bottom:18px}
        .life-step h3{font-size:20px;color:#fff;margin-bottom:10px}
        .life-step p{font-size:16px;color:#D5D1D8;margin:0}

        .triage-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:76px;align-items:center}
        .triage-panel{background:#fff;border:1px solid var(--line);border-radius:28px;padding:38px;box-shadow:0 14px 34px rgba(48,44,52,.06)}
        .funnel{display:flex;flex-direction:column;align-items:center;max-width:560px;margin:0 auto}
        .funnel-stage{display:flex;align-items:baseline;justify-content:center;gap:6px;flex-wrap:wrap;margin-left:auto;margin-right:auto;text-align:center;border:1px solid var(--line);background:#F8F7F9;padding:16px 20px;border-radius:16px;color:#403C44;line-height:1.45;min-height:58px}
        .funnel-stage .funnel-value{font-size:19px;font-weight:600;color:var(--ink);letter-spacing:-.01em}
        .funnel-stage .funnel-label{font-size:16px;color:#403C44}
        .funnel-stage-1{width:100%}
        .funnel-stage-2{width:88%}
        .funnel-stage-3{width:76%}
        .funnel-stage-4{width:64%;background:#FFF5F9;border-color:#E8BCD0}
        .funnel-stage-5{width:52%;background:#F8E6EE;border-color:#DF9FB9}
        .funnel-connector{height:30px;width:18px;display:flex;align-items:center;justify-content:center;color:var(--magenta);flex:0 0 30px}
        .funnel-connector svg{display:block;width:18px;height:30px;overflow:visible}
        .funnel-connector path{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
        .triage-points{display:grid;grid-template-columns:1fr 1fr;gap:24px 34px;margin-top:28px}
        .triage-point{border-top:1px solid var(--line);padding-top:18px}
        .triage-point strong{display:block;font-size:18px;margin-bottom:7px}
        .triage-point p{margin:0}
        .legal-note{margin-top:30px;padding:20px 22px;background:var(--blush);border-radius:18px;font-size:16px;color:#4A4147}

        .evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 56px;border-top:1px solid var(--line)}
        .evidence-row{display:grid;grid-template-columns:185px 1fr;gap:24px;padding:28px 0;border-bottom:1px solid var(--line)}
        .evidence-row h3{font-size:20px;margin:0}
        .evidence-row ul{list-style:none;margin:0;padding:0;columns:2;column-gap:24px}
        .evidence-row li{font-size:16px;color:var(--body);break-inside:avoid;padding:0 0 8px 14px;position:relative}
        .evidence-row li::before{content:"";position:absolute;left:0;top:.7em;width:5px;height:5px;border-radius:50%;background:var(--magenta)}

        .type-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .type-item{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .type-item .icon-box{margin-bottom:22px}
        .type-item h3{font-size:21px}
        .type-item p{margin-bottom:0}
        .type-foot{max-width:900px;margin-top:28px}

        .spoken-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
        .spoken-panel{background:#fff;border:1px solid var(--line);border-radius:28px;padding:34px}
        .spoken-panel .icon-box{margin-bottom:22px}
        .spoken-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;margin:22px 0 24px}
        .spoken-list span{font-size:16px;color:var(--body);padding-left:14px;position:relative}
        .spoken-list span::before{content:"";position:absolute;left:0;top:.68em;width:5px;height:5px;border-radius:50%;background:var(--magenta)}
        .audio-flow{margin-top:24px;padding:22px;background:var(--soft);border-radius:20px}
        .audio-flow-label{font-size:11px;line-height:1.2;letter-spacing:.13em;text-transform:uppercase;font-weight:600;color:var(--magenta);margin-bottom:14px}
        .audio-flow-line{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
        .audio-flow-line span{font-size:16px;font-weight:600}
        .audio-flow-line b{color:var(--magenta);font-weight:600}

        .risk-table{border-top:1px solid var(--line)}
        .risk-row{display:grid;grid-template-columns:110px 245px 1fr 180px;gap:28px;padding:28px 0;border-bottom:1px solid var(--line);align-items:start}
        .risk-level{font-size:16px;font-weight:600;color:var(--magenta)}
        .risk-title h3{font-size:21px;margin-bottom:6px}
        .risk-title span{font-size:16px;color:var(--muted)}
        .risk-body p{margin:0}
        .risk-objective{font-size:16px;font-weight:600;color:#514A52;background:var(--blush);border-radius:16px;padding:14px 16px}
        .risk-callout{margin-top:28px;padding:24px 26px;border-radius:20px;background:var(--blush);border-left:3px solid var(--magenta);font-size:18px;color:#403B43}

        .ediscovery-grid{display:grid;grid-template-columns:.84fr 1.16fr;gap:74px;align-items:start}
        .ediscovery-list{border-top:1px solid #E5CCD7}
        .ediscovery-row{display:grid;grid-template-columns:190px 1fr;gap:24px;padding:24px 0;border-bottom:1px solid #E5CCD7}
        .ediscovery-row strong{font-size:18px}
        .ediscovery-row p{margin:0}

        .security-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:76px;align-items:start}
        .security-panel{background:#fff;border:1px solid #E8CFDA;border-radius:28px;padding:30px}
        .security-row{display:grid;grid-template-columns:48px 1fr;gap:18px;padding:20px 0;border-bottom:1px solid var(--line)}
        .security-row:first-child{padding-top:0}
        .security-row:last-child{border-bottom:0;padding-bottom:0}
        .security-row .icon-box{width:40px;height:40px;border-radius:12px}
        .security-row strong{display:block;font-size:18px;margin-bottom:5px}
        .security-row p{margin:0}
        .privilege-note{margin-top:26px;font-size:16px;color:#51474D}

        .audience-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
        .audience-panel{border:1px solid var(--line);border-radius:28px;padding:34px;background:#fff}
        .audience-panel h3{font-size:24px}
        .audience-panel ul{list-style:none;padding:0;margin:22px 0}
        .audience-panel li{font-size:16px;color:var(--body);padding:8px 0 8px 20px;border-bottom:1px solid var(--line);position:relative}
        .audience-panel li::before{content:"";position:absolute;left:0;top:1.1em;width:6px;height:6px;border-radius:50%;background:var(--magenta)}

        .language-band{display:grid;grid-template-columns:.92fr 1.08fr;gap:76px;align-items:start}
        .region-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .region{padding:26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .region strong{display:block;font-size:18px;margin-bottom:8px}
        .region p{margin:0}

        .term-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:74px;align-items:start}
        .term-rows{border-top:1px solid #E5CCD7}
        .term-row{display:grid;grid-template-columns:190px 1fr;gap:24px;padding:24px 0;border-bottom:1px solid #E5CCD7}
        .term-row strong{font-size:18px}
        .term-row p{margin:0}

        .quality-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:76px;align-items:start}
        .quality-statement{padding:24px 26px;border-radius:22px;background:var(--blush);border-left:3px solid var(--magenta);font-size:18px;color:#403B43;margin-top:24px}
        .quality-list{border-top:1px solid var(--line)}
        .quality-row{display:grid;grid-template-columns:230px 1fr;gap:24px;padding:24px 0;border-bottom:1px solid var(--line)}
        .quality-row strong{font-size:18px}
        .quality-row span{font-size:16px;color:var(--body)}

        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 56px;border-top:1px solid var(--line)}
        .why-item{display:grid;grid-template-columns:50px 1fr;gap:18px;padding:26px 0;border-bottom:1px solid var(--line)}
        .why-item h3{font-size:20px;margin-bottom:7px}
        .why-item p{margin:0}

        .start-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:76px;align-items:start}
        .start-list{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line);margin-bottom:24px}
        .start-item{font-size:16px;color:var(--body);padding:14px 16px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .service-strip{display:flex;flex-wrap:wrap;gap:10px}
        .service-chip{font-size:16px;color:#4A4147;background:var(--blush);border:1px solid #E8BCD0;border-radius:999px;padding:9px 13px}

        .faq-panel{border-top:1px solid var(--line)}
        details{border-bottom:1px solid var(--line);padding:0}
        summary{cursor:pointer;list-style:none;font-size:18px;font-weight:600;padding:22px 48px 22px 0;position:relative;color:var(--ink)}
        summary::-webkit-details-marker{display:none}
        summary::after{content:"+";position:absolute;right:0;top:19px;font-size:24px;font-weight:400;color:var(--magenta)}
        details[open] summary::after{content:"–"}
        details p{max-width:840px;padding:0 52px 22px 0;margin:0}

        .related-list{border-top:1px solid var(--line)}
        .related-item{display:grid;grid-template-columns:minmax(0,1fr) minmax(250px,320px);gap:40px;align-items:center;padding:24px 0;border-bottom:1px solid var(--line)}
        .related-item h3{font-size:20px;margin-bottom:6px}
        .related-item p{margin:0;max-width:760px}
        .related-item .arrow-link{justify-self:end;max-width:100%;text-align:left}

        .final-cta{background:var(--burgundy);padding:82px 0;color:#fff}
        .final-grid{display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center}
        .final-grid h2{color:#fff;margin-bottom:16px}
        .final-grid p{font-size:18px;color:#F1DCE5;max-width:760px;margin:0}
        .final-cta .pill-primary,.final-cta .pill-primary:link,.final-cta .pill-primary:visited{background:#fff;color:var(--burgundy)!important}
        .final-cta .pill-primary:hover,.final-cta .pill-primary:active,.final-cta .pill-primary:focus,.final-cta .pill-primary:focus-visible{background:#FDF2F7;color:var(--burgundy)!important}

        @media (max-width:1100px){
          .container{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:1fr 430px;gap:40px}
          .hero-proof{grid-template-columns:1fr 1fr;gap:18px 0}
          .proof:nth-child(2){border-right:0}
          .proof:nth-child(3),.proof:nth-child(4){padding-top:18px;border-top:1px solid #B9B4BD}
          .lifecycle-track{grid-template-columns:repeat(4,1fr)}
          .life-step:nth-child(4)::after{display:none}
          .life-step:nth-child(n+5){border-top:1px solid #5A585F}
          .risk-row{grid-template-columns:95px 210px 1fr}
          .risk-objective{grid-column:3}
          .evidence-grid{grid-template-columns:1fr}
        }

        @media (max-width:900px){
          .container{padding-left:24px;padding-right:24px}
          h1{font-size:42px}
          h2{font-size:32px}
          h3{font-size:22px}
          .hero{padding:92px 0 78px}
          .hero-grid,.overview-grid,.triage-grid,.ediscovery-grid,.security-grid,.language-band,.term-grid,.quality-grid,.start-grid{grid-template-columns:1fr;gap:48px}
          .hero-art{max-width:560px;margin:0 auto}
          .hero-proof{margin-top:6px}
          .lifecycle-head{grid-template-columns:1fr;gap:18px}
          .lifecycle-track{grid-template-columns:repeat(2,1fr)}
          .life-step:nth-child(2n)::after{display:none}
          .life-step:nth-child(n+3){border-top:1px solid #5A585F}
          .type-grid{grid-template-columns:1fr 1fr}
          .spoken-grid,.audience-grid{grid-template-columns:1fr}
          .risk-row{grid-template-columns:92px 1fr;gap:20px}
          .risk-body,.risk-objective{grid-column:2}
          .final-grid{grid-template-columns:1fr;gap:28px}
          .related-item{grid-template-columns:1fr;gap:8px}
          .related-item .arrow-link{justify-self:start;max-width:100%;text-align:left}
          .mobile-center{text-align:center}
          .mobile-center h2,.mobile-center .intro{margin-left:auto;margin-right:auto}
        }

        @media (max-width:620px){
          .container{padding-left:20px;padding-right:20px}
          .section{padding:68px 0}
          .section-dense{padding:64px 0}
          h1{font-size:38px}
          h2{font-size:30px}
          h3{font-size:20px}
          p,.proof span,.challenge-row p,.evidence-row li,.spoken-list span,.risk-level,.risk-title span,.risk-objective,.security-row p,.audience-panel li,.region p,.term-row p,.quality-row span,.start-item,.service-chip{font-size:16px}
          .hero{padding:72px 0 66px;text-align:center}
          .hero h1{margin-left:auto;margin-right:auto}
          .hero .lead{margin-left:auto;margin-right:auto}
          .hero-actions{justify-content:center}
          .hero-actions .pill{width:100%}
          .hero-art{margin-top:4px}
          .hero-proof{grid-template-columns:1fr;margin-top:18px;text-align:left}
          .proof,.proof:nth-child(2),.proof:nth-child(3),.proof:nth-child(4){margin:0;padding:16px 0;border-right:0;border-top:1px solid #B9B4BD}
          .proof:first-child{border-top:0}
          .section-head.center,.mobile-center{text-align:center}
          .section-head.center h2,.section-head.center .intro,.mobile-center h2,.mobile-center .intro{margin-left:auto;margin-right:auto}
          .overview-grid,.triage-grid,.spoken-grid,.audience-grid,.ediscovery-grid,.security-grid,.language-band,.term-grid,.quality-grid,.start-grid{gap:36px}
          .challenge-row,.evidence-row,.ediscovery-row,.term-row,.quality-row{grid-template-columns:1fr;gap:8px}
          .challenge-row{padding:22px 0}
          .overview-note{font-size:17px}
          .lifecycle-head{text-align:left}
          .lifecycle-track{grid-template-columns:1fr}
          .life-step{margin-right:0;padding:24px 0;border-top:1px solid #5A585F}
          .life-step:first-child{border-top:0}
          .life-step::after{display:none!important}
          .triage-panel{padding:24px 18px;border-radius:22px}
          .triage-points{grid-template-columns:1fr}
          .funnel-stage-1,.funnel-stage-2,.funnel-stage-3,.funnel-stage-4,.funnel-stage-5{width:100%;min-width:0;padding:15px 14px}
          .funnel-stage .funnel-value{font-size:18px}
          .funnel-connector{height:26px;flex-basis:26px}
          .funnel-connector svg{height:26px}
          .evidence-row ul{columns:1}
          .type-grid{grid-template-columns:1fr}
          .type-item{padding:26px 22px}
          .spoken-panel{padding:26px 22px;border-radius:22px}
          .spoken-list{grid-template-columns:1fr}
          .audio-flow-line{align-items:flex-start}
          .risk-row{grid-template-columns:1fr;gap:10px;padding:24px 0}
          .risk-body,.risk-objective{grid-column:auto}
          .risk-level{color:var(--magenta)}
          .security-panel{padding:24px 20px}
          .security-row{grid-template-columns:42px 1fr}
          .audience-panel{padding:28px 22px;border-radius:22px}
          .region-grid,.start-list{grid-template-columns:1fr}
          .why-grid{grid-template-columns:1fr;gap:0}
          .final-cta{padding:66px 0}
          .final-grid{text-align:center}
          .final-grid h2{margin-left:auto;margin-right:auto}
          .final-grid p{margin-left:auto;margin-right:auto}
          .final-grid .pill{width:100%}
          .related-item .arrow-link{width:auto;max-width:100%;justify-self:start}
          .related-item .arrow-link svg{flex-basis:17px}
          summary{font-size:17px;padding-right:38px}
          details p{padding-right:0}
        }

        @media (max-width:360px){
          .container{padding-left:20px;padding-right:20px}
          .hero-art{width:100%;margin-left:0}
          .funnel-stage{padding-left:10px;padding-right:10px}
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Eyebrow>Cross-Border Legal Investigations</Eyebrow>
            <h1>Internal &amp; Regulatory Investigation Translation Services</h1>
            <p className="lead">Investigate across languages with secure, scalable translation support for whistleblower matters, internal investigations, regulatory inquiries, compliance investigations, and other cross-border legal matters.</p>
            <div className="hero-actions">
              <a className="pill pill-primary" href="https://www.stepes.com/contact-sales/">Get a Translation Quote</a>
              <a className="pill pill-secondary" href="https://www.stepes.com/contact-sales/">Discuss an Investigation</a>
            </div>
            <div className="hero-proof">
              <div className="proof"><strong>100+ Languages</strong><span>Coordinate investigation materials across major global languages and regional variants.</span></div>
              <div className="proof"><strong>AI-Assisted Triage</strong><span>Understand large foreign-language document populations before escalating priority content.</span></div>
              <div className="proof"><strong>Legal-Linguistic Expertise</strong><span>Match language professionals to legal subject matter, document type, and intended use.</span></div>
              <div className="proof"><strong>Integrated Support</strong><span>Combine translation, interpreting, transcription, terminology, and quality review.</span></div>
            </div>
          </div>
          <HeroArtwork/>
        </div>
      </section>

      <section className="section">
        <div className="container overview-grid">
          <div className="mobile-center">
            <Eyebrow>Cross-Border Complexity</Eyebrow>
            <h2>When Investigations Cross Languages, Translation Becomes Part of the Workflow</h2>
            <p className="intro">A single complaint can expand into emails, chat records, financial documents, policies, interviews, employee records, and regulator correspondence across several countries.</p>
          </div>
          <div>
            <div className="challenge-list">
              <div className="challenge-row"><strong>Volume</strong><p>Investigations can involve thousands of multilingual records. Applying full professional translation to every item may be unnecessary and inefficient.</p></div>
              <div className="challenge-row"><strong>Jurisdictions</strong><p>Employees, subsidiaries, third parties, records, and regulators may operate in different languages and regional contexts.</p></div>
              <div className="challenge-row"><strong>Risk</strong><p>Content used for initial understanding does not necessarily require the same translation controls as key evidence or regulator-facing materials.</p></div>
            </div>
            <div className="overview-note">The goal is not to translate everything the same way. It is to apply the right language workflow to the right content at the right point in the investigation.</div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="lifecycle-head">
            <div><Eyebrow dark>Investigation Lifecycle</Eyebrow><h2>Multilingual Support as the Matter Develops</h2></div>
            <p className="intro dark-copy">Move from rapid understanding to professional translation, interviews, higher-control review, and regulatory response as investigative importance increases.</p>
          </div>
          <div className="lifecycle-track">
            {lifecycle.map(([title,body],i)=><div className="life-step" key={title}><div className="life-num">{String(i+1).padStart(2,"0")}</div><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container triage-grid">
          <div>
            <Eyebrow>Multilingual Document Triage</Eyebrow>
            <h2>Find the Information That Matters Before Translating Everything</h2>
            <p className="intro">Large investigations often contain far more foreign-language material than counsel ultimately needs to translate at the highest quality level.</p>
            <div className="triage-points">
              <div className="triage-point"><strong>Screen at Scale</strong><p>Use AI-assisted translation for rapid initial understanding of large multilingual collections.</p></div>
              <div className="triage-point"><strong>Focus Human Review</strong><p>Direct professional translation resources toward materials selected for substantive investigation.</p></div>
              <div className="triage-point"><strong>Escalate Key Evidence</strong><p>Apply more rigorous translation, independent review, and QA as the consequence of error increases.</p></div>
              <div className="triage-point"><strong>Keep Counsel in Control</strong><p>Legal teams retain responsibility for relevance, privilege, responsiveness, and investigative conclusions.</p></div>
            </div>
          </div>
          <div className="triage-panel">
            <div className="funnel" role="group" aria-label="Illustrative multilingual investigation triage workflow">
              <div className="funnel-stage funnel-stage-1"><span className="funnel-value">12,500</span><span className="funnel-label">records collected</span></div>
              <FunnelConnector/>
              <div className="funnel-stage funnel-stage-2"><span className="funnel-value">3,800</span><span className="funnel-label">foreign-language records identified</span></div>
              <FunnelConnector/>
              <div className="funnel-stage funnel-stage-3"><span className="funnel-value">650</span><span className="funnel-label">records prioritized for substantive review</span></div>
              <FunnelConnector/>
              <div className="funnel-stage funnel-stage-4"><span className="funnel-value">90</span><span className="funnel-label">documents professionally translated</span></div>
              <FunnelConnector/>
              <div className="funnel-stage funnel-stage-5"><span className="funnel-value">25</span><span className="funnel-label">key evidence documents receive enhanced review</span></div>
            </div>
            <div className="legal-note">Illustrative example only. Actual workflows depend on the matter, document population, languages, legal requirements, and instructions from counsel.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center mobile-center">
            <h2>Translation Across the Full Investigation Record</h2>
            <p className="intro">Support the complaints, communications, interviews, corporate records, financial evidence, findings, and response materials that develop throughout a cross-border matter.</p>
          </div>
          <div className="evidence-grid">
            {evidenceGroups.map(([title,items])=><div className="evidence-row" key={title}><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center mobile-center">
            <h2>Support for Internal, Compliance, and Regulatory Investigations</h2>
            <p className="intro">Every matter has its own facts, stakeholders, legal framework, and document population. Stepes supports multilingual language requirements across a broad range of investigations.</p>
          </div>
          <div className="type-grid">
            {investigationTypes.map(([icon,title,body])=><div className="type-item" key={title}><div className="icon-box"><Icon name={icon}/></div><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <p className="type-foot">Stepes can also support language requirements associated with antitrust and competition matters, third-party investigations, product and quality investigations, internal audits, and other cross-border fact-finding engagements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head mobile-center">
            <Eyebrow>Documents + Interviews</Eyebrow>
            <h2>One Multilingual Workflow for Written and Spoken Evidence</h2>
            <p className="intro">Documents tell only part of the story. Coordinate professional translation, interpreting, transcription, and audio/video translation within the same investigation.</p>
          </div>
          <div className="spoken-grid">
            <div className="spoken-panel">
              <div className="icon-box"><Icon name="mic"/></div>
              <h3>Investigation Interview Interpreting</h3>
              <p>Professional interpreters can support sensitive interviews according to language, regional variety, subject matter, engagement format, requested qualifications, and scheduling requirements.</p>
              <div className="spoken-list"><span>Employee interviews</span><span>Witness interviews</span><span>Complainant interviews</span><span>Subject interviews</span><span>Counsel consultations</span><span>Remote or on-site sessions</span></div>
              <ArrowLink href="https://www.stepes.com/interpretation-services/">Explore Interpreting Services</ArrowLink>
            </div>
            <div className="spoken-panel">
              <div className="icon-box"><Icon name="doc"/></div>
              <h3>Investigation Transcription &amp; Translation</h3>
              <p>Recorded interviews and other audio or video content can be transcribed, translated, reviewed, and formatted according to matter requirements.</p>
              <div className="audio-flow"><div className="audio-flow-label">Coordinated Language Flow</div><div className="audio-flow-line"><span>Audio / Video</span><b>→</b><span>Transcription</span><b>→</b><span>Translation</span><b>→</b><span>Review</span></div></div>
              <div style={{marginTop:22}}><ArrowLink href="https://www.stepes.com/transcription-services/">Explore Transcription Services</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-blush">
        <div className="container">
          <div className="section-head">
            <Eyebrow>Risk-Based Translation</Eyebrow>
            <h2>Use the Right Translation Level for Each Stage of the Investigation</h2>
            <p className="intro">A document being screened for initial understanding and a document being presented to a regulator do not serve the same purpose. Translation depth can be aligned with intended use and consequence of error.</p>
          </div>
          <div className="risk-table">
            {riskLevels.map(([level,title,subtitle,body,objective])=><div className="risk-row" key={level}>
              <div className="risk-level">{level}</div>
              <div className="risk-title"><h3>{title}</h3><span>{subtitle}</span></div>
              <div className="risk-body"><p>{body}</p></div>
              <div className="risk-objective">Objective: {objective}</div>
            </div>)}
          </div>
          <div className="risk-callout">A large document collection should not automatically receive the same treatment as the small set of records ultimately relied upon in investigation findings. Match translation effort to intended use so professional review is concentrated where linguistic accuracy matters most.</div>
        </div>
      </section>

      <section className="section">
        <div className="container ediscovery-grid">
          <div>
            <Eyebrow>Electronic Evidence</Eyebrow>
            <h2>Multilingual eDiscovery for Investigation Records</h2>
            <p className="intro">Email, messaging platforms, collaboration tools, shared files, text messages, attachments, and other electronically stored information can create large multilingual populations that must be understood before counsel decides what requires closer examination.</p>
            <ArrowLink href="https://www.stepes.com/ediscovery-translation-services/">Explore eDiscovery Translation Services</ArrowLink>
          </div>
          <div className="ediscovery-list">
            <div className="ediscovery-row"><strong>Identify Languages</strong><p>Determine which records contain foreign-language content and route them into the appropriate review workflow.</p></div>
            <div className="ediscovery-row"><strong>Screen Multilingual ESI</strong><p>Use scalable translation methods to help authorized reviewers gain initial understanding of emails, messages, attachments, and other electronic records.</p></div>
            <div className="ediscovery-row"><strong>Translate Selected Records</strong><p>Professionally translate the documents or passages selected for substantive investigation.</p></div>
            <div className="ediscovery-row"><strong>Escalate Important Evidence</strong><p>Apply additional linguistic review and quality controls when electronic records become key evidence or regulator-facing material.</p></div>
          </div>
        </div>
      </section>

      <section className="section bg-blush">
        <div className="container security-grid">
          <div>
            <Eyebrow>Confidentiality &amp; Control</Eyebrow>
            <h2>Secure Translation Workflows for Sensitive Investigation Materials</h2>
            <p className="intro">Internal investigations can involve alleged misconduct, employee records, personal data, confidential business information, financial records, potential litigation, and matters that have not been publicly disclosed.</p>
            <p className="privilege-note">Stepes can work within counsel-directed confidentiality and document-handling requirements. Counsel remains responsible for privilege, work-product treatment, disclosure obligations, preservation, and other legal determinations.</p>
            <ArrowLink href="https://www.stepes.com/resources/security-and-compliance/">View Security &amp; Compliance</ArrowLink>
          </div>
          <div className="security-panel">
            {securityRows.map(([title,body],i)=><div className="security-row" key={title}><div className="icon-box"><Icon name={i===0?"lock":i===1?"shield":i===2?"doc":i===3?"people":"briefcase"} size={21}/></div><div><strong>{title}</strong><p>{body}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center mobile-center">
            <h2>Built for Outside Counsel and Corporate Legal Teams</h2>
            <p className="intro">Provide a centralized language resource across the stakeholders involved in a cross-border matter while legal and investigative decisions remain with the professionals responsible for the investigation.</p>
          </div>
          <div className="audience-grid">
            <div className="audience-panel"><Eyebrow>Law Firms &amp; Outside Counsel</Eyebrow><h3>Scale Language Support Across a Cross-Border Matter</h3><p>Support fast-moving multilingual investigations without creating a fragmented translation process across offices and jurisdictions.</p><ul><li>Cross-border fact finding</li><li>Large multilingual record sets</li><li>Attorney-directed review</li><li>Employee and witness interviews</li><li>Regulatory inquiries</li><li>Investigation reports</li><li>Supporting evidence</li><li>Urgent translation needs</li></ul><ArrowLink href="https://www.stepes.com/law-firm-translation-services/">Translation Services for Law Firms</ArrowLink></div>
            <div className="audience-panel"><Eyebrow>Corporate Legal &amp; Compliance</Eyebrow><h3>Support Investigations Across Global Operations</h3><p>Give in-house teams a scalable language workflow for matters arising across business units, regions, employees, and regulatory environments.</p><ul><li>Whistleblower matters</li><li>Ethics investigations</li><li>Compliance investigations</li><li>Employee complaints</li><li>Internal audit findings</li><li>Workplace investigations</li><li>Regional business records</li><li>Outside-counsel collaboration</li></ul><ArrowLink href="https://www.stepes.com/solutions/legal-teams/">Solutions for Corporate Legal Teams</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container language-band">
          <div>
            <Eyebrow>100+ Languages</Eyebrow>
            <h2>One Investigation. Multiple Jurisdictions. Consistent Language Support.</h2>
            <p className="intro">Coordinate multilingual evidence, interviews, and response materials across major global languages and regional variants with centralized project management and language resources.</p>
            <ArrowLink href="https://www.stepes.com/translation-languages/">Explore Translation Languages</ArrowLink>
          </div>
          <div className="region-grid">
            <div className="region"><strong>Europe</strong><p>French, German, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Nordic languages, Ukrainian, and more.</p></div>
            <div className="region"><strong>Asia-Pacific</strong><p>Simplified and Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and more.</p></div>
            <div className="region"><strong>Middle East &amp; Africa</strong><p>Arabic, Hebrew, Turkish, Persian, and additional regional language requirements.</p></div>
            <div className="region"><strong>Americas</strong><p>Spanish, Latin American Spanish, Brazilian Portuguese, Canadian French, and other regional variants.</p></div>
          </div>
        </div>
      </section>

      <section className="section bg-blush">
        <div className="container term-grid">
          <div>
            <Eyebrow>Terminology Governance</Eyebrow>
            <h2>Maintain Consistency Across Evidence, Interviews, and Findings</h2>
            <p className="intro">Investigations may refer repeatedly to the same people, entities, transactions, products, systems, legal concepts, accounting terms, and allegations across thousands of pages.</p>
          </div>
          <div className="term-rows">
            <div className="term-row"><strong>Names &amp; Corporate Entities</strong><p>Maintain consistent treatment of personal names, company names, subsidiaries, departments, job titles, and organizational structures.</p></div>
            <div className="term-row"><strong>Financial Terminology</strong><p>Control recurring language involving payments, accounts, invoices, expenses, transaction types, and financial concepts.</p></div>
            <div className="term-row"><strong>Legal &amp; Compliance Terms</strong><p>Maintain consistent translations for defined legal, compliance, regulatory, and investigation-specific concepts.</p></div>
            <div className="term-row"><strong>Investigation Glossaries</strong><p>Build matter-specific terminology resources and reuse previously translated and approved language where appropriate.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quality-grid">
          <div>
            <Eyebrow>AI + Professional Expertise</Eyebrow>
            <h2>AI Is Part of the Investigation Workflow, Not the Final Authority</h2>
            <p className="intro">The most effective workflow is not simply AI or human translation. It is deciding where each belongs, then increasing linguistic control as the content becomes more important.</p>
            <div className="quality-statement">AI-powered efficiency. Human linguistic accountability. Counsel-directed legal judgment.</div>
          </div>
          <div className="quality-list">
            <div className="quality-row"><strong>Use AI Where Scale Matters</strong><span>Rapidly understand large volumes of content during screening and preliminary review.</span></div>
            <div className="quality-row"><strong>Use Professional Linguists Where Judgment Matters</strong><span>Escalate selected documents when nuance, context, terminology, or investigative importance requires greater control.</span></div>
            <div className="quality-row"><strong>Add Review Where Consequences Increase</strong><span>Apply independent linguistic review and additional QA for key evidence, formal findings, external communications, and regulator-facing material.</span></div>
            <div className="quality-row"><strong>ISO-Certified Quality Processes</strong><span>Support professional translation through ISO 9001 and ISO 17100-certified quality processes, qualified language resources, terminology management, review, and structured QA.</span></div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center mobile-center"><h2>Why Legal Teams Choose Stepes for Multilingual Investigations</h2><p className="intro">Move quickly at the beginning of a matter, scale with document volume, and increase linguistic control as important evidence emerges.</p></div>
          <div className="why-grid">{whyItems.map(([icon,title,body])=><div className="why-item" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container start-grid">
          <div>
            <Eyebrow>Getting Started</Eyebrow>
            <h2>You Don’t Need to Fully Scope the Language Work Before Contacting Us</h2>
            <p className="intro">Investigations develop quickly. At the beginning of a matter, legal teams may not yet know how many foreign-language documents exist, which records will become important, or what level of translation each one will ultimately require.</p>
            <p>Send Stepes what you know, and the language-services workflow can evolve with the matter.</p>
            <a className="pill pill-primary" href="https://www.stepes.com/contact-sales/">Discuss an Investigation</a>
          </div>
          <div>
            <h3>Useful Information to Share</h3>
            <div className="start-list">{["Document samples","Approximate record volume","Known languages","Countries or regions","File types","Email or chat exports","Audio/video content","Interview requirements","Priority documents","Investigation deadlines","Intended use","Regulatory submission needs","Existing glossaries","Security requirements"].map(x=><div className="start-item" key={x}>{x}</div>)}</div>
            <div className="service-strip">{["AI-Assisted Screening","Professional Translation","Independent Review","Interpreting","Transcription","Terminology Management","Formatting & Certification"].map(x=><span className="service-chip" key={x}>{x}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head"><h2>Frequently Asked Questions About Investigation Translation</h2></div>
          <div className="faq-panel">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="section section-dense">
        <div className="container">
          <div className="section-head mobile-center"><h2>Connected Translation Services for Complex Legal Matters</h2><p className="intro">Cross-border investigations often connect with litigation, eDiscovery, compliance, and broader corporate legal workflows.</p></div>
          <div className="related-list">{related.map(([title,body,href])=><div className="related-item" key={title}><div><h3>{title}</h3><p>{body}</p></div><ArrowLink href={href}>{`Explore ${title}`}</ArrowLink></div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-grid">
          <div>
            <h2>Investigating Across Languages? Start With the Content You Have.</h2>
            <p>Whether the matter begins with one foreign-language complaint, one employee interview, or thousands of emails and messages, Stepes can help build the appropriate multilingual workflow around the investigation.</p>
          </div>
          <div><a className="pill pill-primary" href="https://www.stepes.com/contact-sales/">Get a Translation Quote</a></div>
        </div>
      </section>
    </main>
  );
}
