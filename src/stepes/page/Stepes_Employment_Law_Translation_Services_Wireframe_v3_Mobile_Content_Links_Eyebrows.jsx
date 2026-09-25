import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushAccent: "#F2A7C6",
  ink: "#202126",
  text: "#494B52",
  muted: "#6D7078",
  line: "#E6E7EA",
  soft: "#F7F7F8",
  dark: "#27272C",
  white: "#FFFFFF",
};

const matterGroups = [
  {
    title: "Employment Agreements & Executive Arrangements",
    icon: "document",
    description:
      "Translate employment agreements and related contractual documents while preserving defined terms, obligations, restrictions, cross-references, and consistent legal language across document families.",
    bullets: [
      "Employment and executive agreements",
      "Amendments, addenda, and offer-related legal documentation",
      "Confidentiality, IP assignment, and restrictive covenants",
      "Non-compete and non-solicitation provisions",
      "Compensation-related and international assignment agreements",
    ],
    link: ["Contract Translation Services", "https://www.stepes.com/contract-translation-services/"],
  },
  {
    title: "Workplace Policies & Employee Relations",
    icon: "policy",
    description:
      "Translate workplace policies where precise wording can affect employee rights, responsibilities, company procedures, and legal interpretation.",
    bullets: [
      "Employee handbooks and codes of conduct",
      "Anti-harassment and anti-discrimination policies",
      "Disciplinary and grievance procedures",
      "Remote, hybrid, leave, and workplace conduct policies",
      "Employee notices, acknowledgments, and compliance policies",
    ],
    link: ["Human Resources Translation Services", "https://www.stepes.com/human-resource-translation-services/"],
  },
  {
    title: "Workplace Investigations",
    icon: "search",
    description:
      "Support multilingual workplace investigations with professional translation of complaints, interviews, evidence, findings, and related employee documentation.",
    bullets: [
      "Employee complaints and whistleblower reports",
      "Witness statements and interview records",
      "Emails, messages, and supporting evidence",
      "Personnel and disciplinary records",
      "Investigation reports, findings, and follow-up materials",
    ],
    link: ["Internal Investigation Translation Services", "https://www.stepes.com/internal-investigation-translation-services/"],
  },
  {
    title: "Termination, Separation & Restructuring",
    icon: "transition",
    description:
      "Translate documents used when individual employees or larger workforces transition out of an organization.",
    bullets: [
      "Termination and redundancy notices",
      "Severance and separation agreements",
      "Release agreements and settlement documents",
      "Restructuring and employee transfer materials",
      "Legally significant offboarding documentation",
    ],
  },
  {
    title: "Employment Disputes & Litigation",
    icon: "scales",
    description:
      "Support counsel handling employment claims, litigation, tribunal proceedings, settlement, and other workplace disputes across languages.",
    bullets: [
      "Discrimination, harassment, retaliation, and wrongful termination matters",
      "Wage and hour disputes",
      "Pleadings, declarations, affidavits, and witness statements",
      "Discovery, evidence, exhibits, and expert materials",
      "Settlement agreements, attorney correspondence, and decisions",
    ],
    link: ["Litigation Translation Services", "https://www.stepes.com/litigation-translation-services/"],
  },
  {
    title: "Collective Bargaining & Labor Relations",
    icon: "people",
    description:
      "Translate collective employment materials requiring consistent terminology across management, employees, unions, representatives, and legal teams.",
    bullets: [
      "Collective bargaining and union agreements",
      "Bargaining proposals and negotiation materials",
      "Labor-management communications",
      "Grievance and labor dispute documentation",
      "Employee representative and consultation materials",
    ],
  },
  {
    title: "Works Councils & Employee Representation",
    icon: "globe",
    description:
      "Support multinational employers and counsel managing multilingual information and consultation processes involving works councils and employee representatives.",
    bullets: [
      "Works council and European Works Council materials",
      "Consultation documentation and meeting materials",
      "Minutes, management presentations, and representative communications",
      "Restructuring and collective consultation documents",
      "Cross-border workforce change communications",
    ],
  },
];

const riskLevels = [
  {
    label: "Internal Review & Triage",
    description:
      "For high-volume content that legal teams initially need to understand, classify, or prioritize, including investigation populations, emails, discovery screening, and multilingual evidence identification.",
    approach: "AI-assisted translation with professional review applied to priority content.",
  },
  {
    label: "Recurring Employment Content",
    description:
      "For repeatable documentation where terminology consistency and efficient language reuse matter, including policies, legal notices, standardized forms, and recurring multi-country updates.",
    approach: "AI-enabled translation, translation memory, approved terminology, and human validation.",
  },
  {
    label: "Material Legal Documents",
    description:
      "For documents defining rights, obligations, restrictions, or separation terms, including employment agreements, restrictive covenants, severance documents, settlements, and formal notices.",
    approach: "Professional legal translation with terminology control, document-level review, and structured QA.",
  },
  {
    label: "High-Consequence & Formal Use",
    description:
      "For court, tribunal, evidentiary, filed, or otherwise formally relied-upon content where additional quality controls or formalities may be required.",
    approach: "Professional human translation with additional review, certification, or project-specific formalities when required.",
  },
];

const processSteps = [
  ["Define the Matter and Intended Use", "Confirm languages, document types, jurisdictions, audience, legal purpose, deadlines, confidentiality requirements, certification needs, and client instructions."],
  ["Review Existing Legal Language", "Incorporate previous translations, templates, counsel-approved language, glossaries, defined terms, policy terminology, party names, and related references."],
  ["Select the Translation Workflow", "Determine the right combination of AI assistance, translation memory, professional human translation, independent review, interpreting, certification, and quality control."],
  ["Translate and Review", "Match translators and reviewers to the language pair, locale, employment-law subject matter, document type, complexity, and intended use."],
  ["Perform Legal-Linguistic QA", "Review completeness, defined terms, employment terminology, entity names, dates, numbers, compensation amounts, cross-references, clause numbering, formatting, and untranslated text."],
  ["Deliver and Reuse Approved Language", "Deliver the agreed files and capture approved terminology, translations, and reviewer feedback for future matters when appropriate."],
];

const faqs = [
  ["What are employment law translation services?", "Employment law translation services provide professional translation for documents and communications involving the legal relationship between employers and employees. These can include employment agreements, workplace policies, investigations, disciplinary documents, restrictive covenants, severance agreements, employment disputes, collective bargaining materials, works council documentation, litigation records, and other legally significant workplace content."],
  ["How is employment law translation different from HR translation?", "Employment law translation focuses on content with legal significance, such as employment agreements, restrictive covenants, workplace investigations, disciplinary matters, separations, employee disputes, collective bargaining, and employee-representation documentation. HR translation covers the broader employee experience, including recruiting, onboarding, benefits, training, employee communications, talent programs, HR systems, and everyday workforce information."],
  ["What employment law documents can Stepes translate?", "Stepes translates employment agreements, executive agreements, workplace policies, employee handbooks, restrictive covenants, confidentiality agreements, disciplinary records, investigation documents, severance agreements, termination notices, settlement materials, collective bargaining agreements, union documentation, works council materials, employment litigation records, and many other employment-related legal documents."],
  ["Can Stepes translate employment agreements and restrictive covenants?", "Yes. Stepes translates employment agreements and related documents including amendments, confidentiality provisions, IP assignment clauses, non-solicitation provisions, non-compete clauses, compensation-related agreements, executive arrangements, and international assignment documentation. Terminology management and translation memory can help keep defined terms and recurring contractual language consistent across related agreements and versions."],
  ["Do you translate workplace investigation documents?", "Yes. Stepes supports multilingual workplace investigations involving complaints, witness statements, interview materials, emails, messages, supporting evidence, personnel records, investigation reports, findings, disciplinary materials, and other relevant documentation. Professional interpreting can also be coordinated for multilingual interviews or meetings when required."],
  ["Can you translate severance and separation agreements?", "Yes. Stepes translates severance agreements, separation agreements, release agreements, termination notices, redundancy documentation, settlement terms, employee transfer documents, and related separation materials. The workflow can be configured according to intended use, document significance, language pair, deadline, and review requirements."],
  ["Does Stepes translate collective bargaining agreements and labor relations materials?", "Yes. Stepes translates collective bargaining agreements, bargaining proposals, union agreements, negotiation materials, labor-management communications, grievances, collective employment policies, employee representative documents, and related labor relations content. Terminology management can be especially useful where recurring provisions and concepts appear across agreements, negotiations, amendments, and later communications."],
  ["Can Stepes translate works council and European Works Council documentation?", "Yes. Stepes supports translation of works council agreements, European Works Council materials, consultation documents, meeting materials, presentations, minutes, restructuring communications, employee-representation documents, and related legal content. Multilingual coordination is particularly important when the same materials must be reviewed or distributed across multiple employee populations and jurisdictions."],
  ["Can Stepes support employment disputes and litigation?", "Yes. Stepes supports employment litigation and other disputes involving pleadings, claims, evidence, witness statements, discovery materials, attorney correspondence, expert materials, settlement agreements, court or tribunal documents, and related case content. Workflows can change as the matter develops, from initial document screening to professional translation of priority evidence or formal-use documents."],
  ["How does Stepes handle confidential employee and investigation information?", "Employment matters may contain personal, disciplinary, compensation, investigation, commercial, or other sensitive information. Stepes configures project handling according to the confidentiality, access, workflow, and delivery requirements agreed for the assignment. Clients should identify specific security, access, confidentiality, AI-use, or data-handling requirements when the project begins."],
  ["Can AI be used for employment law translation?", "Yes, when appropriate for the content and project requirements. AI can improve efficiency for large document populations, investigation screening, recurring policy content, repeated contractual language, and other suitable materials. Higher-consequence content may require professional human translation, legal-linguistic review, independent review, or additional quality controls."],
  ["When should an employment-law translation receive independent human review?", "Additional human review may be appropriate for employment agreements, severance documents, settlement materials, evidence, formal notices, court or tribunal submissions, and other content where accuracy has significant legal or business consequences. The appropriate level of review depends on intended use, jurisdiction, document type, client requirements, and the receiving party's expectations."],
  ["Do you provide certified translations for employment law documents?", "Stepes can provide certified translation services when required. Certification, notarization, sworn translation, legalization, and other formal requirements can vary by jurisdiction, institution, and intended use. Clients should confirm the applicable requirement with the receiving court, agency, institution, employer, or qualified legal counsel before translation begins."],
  ["Can Stepes support ongoing multinational employment-law translation programs?", "Yes. Stepes supports recurring employment-law translation across countries, business units, law firms, internal legal teams, and document types. Translation memory, terminology databases, client-approved language, reviewer feedback, and standardized workflows can help improve consistency and efficiency as agreements, policies, investigations, disputes, and workforce requirements evolve."],
  ["Which languages does Stepes support for employment law translation?", "Stepes supports employment law translation across more than 100 languages, including major European, Asian, Middle Eastern, Latin American, and regional languages. Resource selection can consider the language pair, country or locale, legal subject matter, document type, intended audience, professional qualifications, and project-specific requirements."],
];

const relatedSolutions = [
  ["Legal Translation Services", "Professional translation for contracts, litigation, corporate governance, compliance, employment, intellectual property, investigations, and other legal content.", "https://www.stepes.com/legal-translation-services/"],
  ["Human Resources Translation Services", "Multilingual support for recruiting, onboarding, benefits, workforce communications, training, HR technology, talent programs, and employee experiences.", "https://www.stepes.com/human-resource-translation-services/"],
  ["Internal Investigation Translation Services", "Translation support for complaints, interviews, evidence, investigation reports, whistleblower matters, disciplinary records, and other sensitive investigation content.", "https://www.stepes.com/internal-investigation-translation-services/"],
  ["Litigation Translation Services", "Translation for discovery, evidence, pleadings, witness materials, expert reports, court documents, settlements, and multilingual disputes.", "https://www.stepes.com/litigation-translation-services/"],
  ["Contract Translation Services", "Professional translation of agreements, defined terms, amendments, exhibits, recurring clauses, and related contract families.", "https://www.stepes.com/contract-translation-services/"],
  ["Translation Services for Law Firms", "Multilingual legal support for attorneys, paralegals, legal operations teams, and law firms across practice areas.", "https://www.stepes.com/law-firm-translation-services/"],
  ["Solutions for Corporate Legal Teams", "Centralized multilingual support for in-house counsel handling contracts, compliance, investigations, litigation, employment, privacy, corporate matters, and cross-border legal operations.", "https://www.stepes.com/solutions/legal-teams/"],
  ["AI-Enabled Legal Translation Services", "Combine DomainAI, translation memory, terminology management, professional legal review, and structured QA for scalable legal translation.", "https://www.stepes.com/ai-enabled-legal-translation-services/"],
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
    "aria-hidden": true,
  };

  switch (name) {
    case "document":
      return <svg {...common}><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M9.5 12h5M9.5 16h5"/></svg>;
    case "policy":
      return <svg {...common}><path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h3"/><path d="m15.5 15 1.2 1.2 2.3-2.7"/></svg>;
    case "search":
      return <svg {...common}><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5M8.5 9.5h4M10.5 7.5v4"/></svg>;
    case "transition":
      return <svg {...common}><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3"/></svg>;
    case "scales":
      return <svg {...common}><path d="M12 3v18M6 6h12M5 6 2.5 12h5zM19 6l-2.5 6h5zM8 21h8"/></svg>;
    case "people":
      return <svg {...common}><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-4 2.4-6 5-6s4.5 2 5 6M14 15c2.8-.5 5.3 1.2 6 4"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"/></svg>;
    case "lock":
      return <svg {...common}><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></svg>;
    case "brain":
      return <svg {...common}><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2.5 4.8A3.2 3.2 0 0 0 10 20V4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2.5 4.8A3.2 3.2 0 0 1 14 20V4zM8 9h2M14 9h2M8 14h2M14 14h2"/></svg>;
    case "check":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></svg>;
    case "building":
      return <svg {...common}><path d="M5 21V5l7-2v18M12 8h7v13M8 8h1M8 12h1M8 16h1M15 11h1M15 15h1M15 19h1M3 21h18"/></svg>;
    case "briefcase":
      return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2"/></svg>;
    case "layers":
      return <svg {...common}><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>;
    case "language":
      return <svg {...common}><path d="M4 5h10M9 3v2M6 5c.7 3.5 2.6 6.2 6 8M12 5c-.8 3.3-2.7 5.9-6 8M14 21l4-10 4 10M15.5 17h5"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>;
  }
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function ArrowLink({ href, children, light = false }) {
  return <a className={`arrow-link${light ? " arrow-link-light" : ""}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function CheckLine({ children, light = false }) {
  return <li className={light ? "check-line check-line-light" : "check-line"}><span className="check-dot"><Icon name="check" size={18}/></span><span>{children}</span></li>;
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="img">
        <defs>
          <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF"/>
            <stop offset="1" stopColor="#F4F4F6"/>
          </linearGradient>
        </defs>
        <circle cx="420" cy="235" r="176" fill="#FDF2F7"/>
        <circle cx="488" cy="128" r="68" fill="#F8E1EB"/>
        <rect x="166" y="92" width="286" height="348" rx="26" fill="url(#paper)" stroke="#DADCE1" strokeWidth="2"/>
        <rect x="196" y="128" width="120" height="12" rx="6" fill="#C11D63" opacity=".16"/>
        <rect x="196" y="158" width="216" height="9" rx="4.5" fill="#BFC1C7"/>
        <rect x="196" y="178" width="194" height="9" rx="4.5" fill="#D4D5D9"/>
        <rect x="196" y="198" width="205" height="9" rx="4.5" fill="#D4D5D9"/>
        <path d="M196 242h208M196 264h172M196 286h198" stroke="#C9CBD0" strokeWidth="8" strokeLinecap="round"/>
        <rect x="196" y="326" width="112" height="52" rx="10" fill="#FDF2F7" stroke="#E5C2D2"/>
        <path d="M216 345h69M216 360h49" stroke="#9F1D55" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
        <circle cx="420" cy="344" r="56" fill="#292A30"/>
        <path d="M395 349c10-25 40-25 50 0M420 314v22M393 373h54" stroke="#F6F6F8" strokeWidth="4" strokeLinecap="round"/>
        <path d="M420 304v-28" stroke="#C11D63" strokeWidth="4"/>
        <circle cx="420" cy="266" r="9" fill="#C11D63"/>
        <rect x="62" y="286" width="170" height="130" rx="22" fill="#FFFFFF" stroke="#DADCE1" strokeWidth="2"/>
        <path d="M92 320h103M92 343h78M92 366h92" stroke="#BFC1C7" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="86" cy="237" r="42" fill="#303137"/>
        <path d="M69 239c7-16 27-16 34 0M86 214v14M68 259h36" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M128 237h68" stroke="#C11D63" strokeWidth="3" strokeDasharray="7 8"/>
        <circle cx="210" cy="237" r="6" fill="#C11D63"/>
        <g transform="translate(456 382)">
          <circle cx="46" cy="46" r="44" fill="#FFFFFF" stroke="#DADCE1" strokeWidth="2"/>
          <path d="M17 46h58M46 17c13 15 13 43 0 58M46 17c-13 15-13 43 0 58" stroke="#9F1D55" strokeWidth="3" fill="none"/>
          <circle cx="46" cy="46" r="29" fill="none" stroke="#9F1D55" strokeWidth="3"/>
        </g>
      </svg>
    </div>
  );
}

export default function EmploymentLawTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <style>{`
        :root {
          color-scheme: light;
          font-family: "Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: ${COLORS.ink};
          background: #fff;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; color: ${COLORS.ink}; }
        a { color: inherit; }
        button, a { -webkit-tap-highlight-color: transparent; }
        .page { width: 100%; overflow-x: clip; background: #fff; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding-inline: 56px; }
        .section { padding-block: 96px; }
        .section-dense { padding-block: 80px; }
        .soft-section { background: ${COLORS.soft}; }
        .blush-section { background: ${COLORS.blush}; }
        .dark-section { background: ${COLORS.dark}; color: #fff; }
        .section-head { max-width: 800px; margin-bottom: 48px; }
        .section-head.center { margin-inline: auto; text-align: center; }
        .section-head.center p { margin-inline: auto; }
        .eyebrow { color: ${COLORS.magenta}; font-size: 11px; line-height: 1.35; letter-spacing: .13em; text-transform: uppercase; font-weight: 600; margin-bottom: 14px; }
        .eyebrow-dark { color: ${COLORS.blushAccent}; }
        h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: ${COLORS.ink}; }
        .dark-section h1, .dark-section h2, .dark-section h3 { color: #fff; }
        h1 { font-size: 48px; line-height: 1.06; }
        h2 { font-size: 36px; line-height: 1.12; }
        h3 { font-size: 24px; line-height: 1.18; }
        p { margin: 0; font-size: 16px; line-height: 1.72; color: ${COLORS.text}; }
        .dark-section p { color: #D7D8DC; }
        .lead { font-size: 18px; line-height: 1.68; max-width: 760px; }
        .muted { color: ${COLORS.muted}; }
        .hero { padding-block: 104px 96px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, .98fr); gap: 76px; align-items: center; }
        .hero-copy { max-width: 680px; }
        .hero h1 { max-width: 640px; }
        .hero .lead { margin-top: 24px; max-width: 650px; }
        .hero-actions { display: flex; gap: 14px; margin-top: 34px; flex-wrap: wrap; }
        .btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 999px; padding: 13px 23px; text-decoration: none; font-size: 16px; font-weight: 600; transition: .2s ease; border: 1px solid transparent; }
        .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible { background: ${COLORS.magenta}; color: #fff !important; }
        .btn-primary:hover { background: ${COLORS.magentaDark}; transform: translateY(-1px); }
        .btn-secondary, .btn-secondary:visited { background: #fff; color: ${COLORS.ink}; border-color: #CFD1D6; }
        .btn-secondary:hover { border-color: #9FA2AA; transform: translateY(-1px); }
        .btn:focus-visible, .arrow-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .hero-art { width: 100%; max-width: 590px; margin-left: auto; }
        .hero-art svg { display: block; width: 100%; height: auto; }
        .proof-band { border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; background: #fff; }
        .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .proof-item { padding: 24px 20px; min-height: 90px; display: flex; align-items: center; justify-content: center; text-align: center; border-right: 1px solid ${COLORS.line}; font-size: 16px; line-height: 1.35; font-weight: 600; color: #3B3C42; }
        .proof-item:last-child { border-right: 0; }
        .overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 74px; align-items: start; }
        .overview-copy .lead { margin-top: 22px; }
        .compare-panel { border-radius: 28px; overflow: hidden; border: 1px solid #E9D8E1; background: #fff; box-shadow: 0 18px 42px rgba(47,35,41,.06); }
        .compare-row { display: grid; grid-template-columns: 1fr 1fr; }
        .compare-col { padding: 32px; background: #fff; }
        .compare-col:first-child { background: #FFF9FB; }
        .compare-col + .compare-col { border-left: 1px solid #E9D8E1; }
        .compare-label { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: ${COLORS.magentaDark}; font-weight: 600; font-size: 18px; }
        .compare-col p { font-size: 16px; }
        .compare-action { padding: 20px 32px 24px; border-top: 1px solid #E9D8E1; background: #fff; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
        .compare-action p { max-width: 700px; }
        .arrow-link { display: inline-flex; align-items: center; gap: 8px; color: ${COLORS.magenta}; text-decoration: none; font-weight: 600; font-size: 16px; line-height: 1.4; }
        .arrow-link span { transition: transform .2s ease; }
        .arrow-link:hover span { transform: translateX(3px); }
        .arrow-link-light { color: ${COLORS.blushAccent}; }
        .matter-list { border-top: 1px solid ${COLORS.line}; }
        .matter-row { display: grid; grid-template-columns: 56px minmax(240px, .72fr) minmax(0, 1.28fr); column-gap: 28px; padding: 34px 0; border-bottom: 1px solid ${COLORS.line}; align-items: start; }
        .matter-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: ${COLORS.magentaDark}; background: ${COLORS.blush}; border: 1px solid #F0D8E3; }
        .matter-title h3 { margin-bottom: 10px; }
        .matter-title p { max-width: 420px; }
        .matter-detail { display: grid; grid-template-columns: 1fr auto; gap: 28px; align-items: center; }
        .matter-bullets { margin: 0; padding: 0; list-style: none; display: grid; gap: 9px; }
        .matter-bullets li { position: relative; padding-left: 18px; font-size: 16px; line-height: 1.5; color: ${COLORS.text}; }
        .matter-bullets li::before { content: ""; position: absolute; top: .66em; left: 0; width: 6px; height: 6px; border-radius: 999px; background: #B7B8BE; }
        .matter-link { min-width: 170px; justify-self: end; }
        .cross-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 72px; align-items: center; }
        .cross-copy .lead { color: #ECEDEF; margin-top: 22px; }
        .cross-copy p + p { margin-top: 18px; }
        .concept-board { border: 1px solid #47484F; border-radius: 28px; overflow: hidden; background: #2D2E34; }
        .concept-top { padding: 28px 30px; border-bottom: 1px solid #47484F; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .concept-title { font-size: 18px; font-weight: 600; color: #fff; }
        .concept-badge { color: ${COLORS.blushAccent}; font-size: 14px; }
        .concept-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .concept-item { padding: 26px 30px; border-right: 1px solid #47484F; border-bottom: 1px solid #47484F; }
        .concept-item:nth-child(even) { border-right: 0; }
        .concept-item:nth-last-child(-n+2) { border-bottom: 0; }
        .concept-item strong { display: block; color: #fff; font-size: 16px; margin-bottom: 7px; }
        .concept-item span { display: block; color: #BFC1C7; font-size: 16px; line-height: 1.55; }
        .legal-note { margin-top: 28px; border-left: 3px solid ${COLORS.blushAccent}; padding: 6px 0 6px 20px; }
        .legal-note strong { display: block; color: #fff; font-size: 16px; margin-bottom: 6px; }
        .agreement-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 76px; align-items: center; }
        .agreement-copy .lead { margin-top: 20px; }
        .document-flow { position: relative; display: grid; gap: 14px; }
        .document-flow::before { content: ""; position: absolute; left: 35px; top: 36px; bottom: 36px; width: 2px; background: #E0E1E5; }
        .doc-node { position: relative; display: grid; grid-template-columns: 52px 1fr; gap: 18px; align-items: center; min-height: 72px; padding: 14px 18px; border: 1px solid ${COLORS.line}; border-radius: 18px; background: #fff; }
        .doc-node-icon { width: 36px; height: 36px; border-radius: 12px; background: ${COLORS.blush}; color: ${COLORS.magentaDark}; display: flex; align-items: center; justify-content: center; z-index: 1; }
        .doc-node strong { display: block; font-size: 17px; }
        .doc-node span { font-size: 16px; color: ${COLORS.muted}; line-height: 1.5; }
        .term-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; background: #fff; }
        .term-item { padding: 30px; min-height: 205px; border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
        .term-item:nth-child(3n) { border-right: 0; }
        .term-item:nth-last-child(-n+3) { border-bottom: 0; }
        .term-index { width: 36px; height: 4px; border-radius: 99px; background: ${COLORS.magenta}; margin-bottom: 22px; }
        .term-item h3 { font-size: 20px; margin-bottom: 10px; }
        .risk-wrap { border: 1px solid #E2D0D9; border-radius: 30px; overflow: hidden; background: #fff; }
        .risk-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .risk-item { padding: 32px 26px 30px; border-right: 1px solid #E7DAE0; position: relative; }
        .risk-item:last-child { border-right: 0; }
        .risk-number { color: ${COLORS.magenta}; font-size: 16px; font-weight: 600; letter-spacing: .08em; margin-bottom: 22px; }
        .risk-item h3 { font-size: 20px; margin-bottom: 12px; }
        .risk-item p { font-size: 16px; }
        .risk-approach { margin-top: 18px; padding-top: 18px; border-top: 1px solid ${COLORS.line}; color: #3B3C42; font-weight: 600; font-size: 16px; line-height: 1.5; }
        .ai-grid { display: grid; grid-template-columns: 1fr 76px 1fr; gap: 0; align-items: stretch; }
        .ai-panel { padding: 36px; border: 1px solid ${COLORS.line}; background: #fff; }
        .ai-panel:first-child { border-radius: 28px 0 0 28px; }
        .ai-panel:last-child { border-radius: 0 28px 28px 0; }
        .ai-panel h3 { margin: 14px 0 20px; }
        .ai-panel ul { padding: 0; margin: 0; list-style: none; display: grid; gap: 12px; }
        .ai-bridge { background: #2E2F34; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; text-align: center; padding: 16px 8px; }
        .ai-bridge span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
        .ai-summary { max-width: 860px; margin: 26px auto 0; text-align: center; }
        .ai-summary p { font-size: 16px; }
        .ai-note { margin-top: 16px; text-align: center; }
        .security-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
        .security-copy .lead { margin-top: 20px; color: #E6E7EA; }
        .security-matrix { border: 1px solid #47484F; border-radius: 26px; overflow: hidden; }
        .security-row { display: grid; grid-template-columns: 54px 190px 1fr; gap: 16px; padding: 24px 26px; border-bottom: 1px solid #47484F; align-items: start; }
        .security-row:last-child { border-bottom: 0; }
        .security-row .icon-wrap { color: ${COLORS.blushAccent}; padding-top: 2px; }
        .security-row strong { color: #fff; font-size: 16px; }
        .security-row p { font-size: 16px; }
        .investigation-flow { display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 42px; border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
        .investigation-step { position: relative; padding: 30px 24px; min-height: 210px; border-right: 1px solid ${COLORS.line}; }
        .investigation-step:last-child { border-right: 0; }
        .investigation-step::before { content: ""; width: 10px; height: 10px; border-radius: 999px; background: ${COLORS.magenta}; display: block; margin-bottom: 20px; }
        .investigation-step h3 { font-size: 20px; margin-bottom: 10px; }
        .investigation-note { max-width: 900px; margin-top: 26px; }
        .investigation-actions { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 20px; }
        .collective-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .collective-panel { padding: 32px; border-radius: 24px; border: 1px solid ${COLORS.line}; background: #fff; }
        .collective-panel .icon-wrap { color: ${COLORS.magentaDark}; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border-radius: 13px; background: ${COLORS.blush}; margin-bottom: 20px; }
        .collective-panel h3 { font-size: 20px; margin-bottom: 10px; }
        .audience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .audience-panel { border-radius: 28px; padding: 36px; border: 1px solid ${COLORS.line}; background: #fff; }
        .audience-panel h3 { margin: 18px 0 12px; }
        .audience-list { margin: 24px 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 11px 20px; }
        .audience-list li { font-size: 16px; line-height: 1.45; color: ${COLORS.text}; position: relative; padding-left: 15px; }
        .audience-list li::before { content: ""; width: 5px; height: 5px; background: #B2B4B9; border-radius: 50%; position: absolute; left: 0; top: .62em; }
        .scale-grid { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
        .scale-item { padding: 30px 24px; border-right: 1px solid ${COLORS.line}; }
        .scale-item:last-child { border-right: 0; }
        .scale-item strong { display: block; font-size: 18px; margin-bottom: 10px; }
        .formats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 38px; }
        .format-chip { min-height: 66px; padding: 16px 18px; border: 1px solid ${COLORS.line}; border-radius: 16px; display: flex; align-items: center; gap: 12px; background: #fff; font-size: 16px; color: #3D3E44; }
        .format-chip svg { color: ${COLORS.magentaDark}; flex: 0 0 auto; }
        .process-grid { border-top: 1px solid ${COLORS.line}; }
        .process-row { display: grid; grid-template-columns: 86px .72fr 1.28fr; gap: 28px; padding: 29px 0; border-bottom: 1px solid ${COLORS.line}; align-items: center; }
        .process-number { color: ${COLORS.magenta}; font-size: 18px; font-weight: 600; letter-spacing: .08em; }
        .process-row h3 { font-size: 20px; }
        .languages-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; }
        .language-col { border-top: 3px solid ${COLORS.magenta}; padding-top: 22px; }
        .language-col h3 { font-size: 20px; margin-bottom: 12px; }
        .language-col p { font-size: 16px; }
        .language-note { margin-top: 34px; padding: 26px 30px; border-radius: 20px; background: #fff; border: 1px solid ${COLORS.line}; display: grid; grid-template-columns: 48px 1fr; gap: 18px; align-items: center; }
        .language-note .icon-wrap { color: ${COLORS.magentaDark}; }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; }
        .why-item { min-height: 210px; padding: 30px; border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
        .why-item:nth-child(3n) { border-right: 0; }
        .why-item:nth-last-child(-n+3) { border-bottom: 0; }
        .why-item .icon-wrap { color: ${COLORS.magentaDark}; margin-bottom: 18px; }
        .why-item h3 { font-size: 20px; margin-bottom: 10px; }
        .related-list { border-top: 1px solid ${COLORS.line}; }
        .related-row { display: grid; grid-template-columns: .64fr 1fr auto; gap: 36px; padding: 27px 0; border-bottom: 1px solid ${COLORS.line}; align-items: center; }
        .related-row strong { font-size: 18px; }
        .guidance-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .guidance-item { min-height: 230px; padding: 26px; border-radius: 22px; border: 1px solid ${COLORS.line}; background: #fff; }
        .guidance-item::before { content: ""; display: block; width: 36px; height: 3px; border-radius: 99px; background: ${COLORS.magenta}; margin-bottom: 20px; }
        .guidance-item h3 { font-size: 19px; margin-bottom: 10px; }
        .faq-panel { border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; background: #fff; }
        .faq-item + .faq-item { border-top: 1px solid ${COLORS.line}; }
        .faq-button { width: 100%; appearance: none; border: 0; background: #fff; padding: 25px 28px; display: grid; grid-template-columns: 1fr 32px; gap: 18px; align-items: center; text-align: left; cursor: pointer; font: inherit; color: ${COLORS.ink}; }
        .faq-question { font-size: 18px; line-height: 1.4; font-weight: 600; }
        .faq-toggle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${COLORS.magenta}; border: 1px solid #E4CAD6; font-size: 20px; line-height: 1; }
        .faq-answer { padding: 0 72px 26px 28px; max-width: 900px; }
        .faq-answer p { font-size: 16px; }
        .final-cta { background: ${COLORS.burgundy}; color: #fff; padding-block: 84px; }
        .final-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) auto; gap: 50px; align-items: center; }
        .final-cta h2 { color: #fff; max-width: 770px; }
        .final-cta p { color: #F5DDE7; margin-top: 18px; max-width: 760px; }
        .final-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
        .final-cta .btn-primary, .final-cta .btn-primary:visited, .final-cta .btn-primary:hover, .final-cta .btn-primary:active, .final-cta .btn-primary:focus, .final-cta .btn-primary:focus-visible { background: #fff; color: ${COLORS.burgundy} !important; }
        .final-cta .btn-secondary { color: #fff; border-color: rgba(255,255,255,.46); background: transparent; }
        .final-cta .btn-secondary:hover { border-color: #fff; }
        .check-line { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: start; font-size: 16px; line-height: 1.5; color: ${COLORS.text}; }
        .check-line-light { color: #D8D9DE; }
        .check-dot { color: ${COLORS.magenta}; display: flex; padding-top: 1px; }

        @media (max-width: 1100px) {
          .shell { padding-inline: 40px; }
          .hero-grid { gap: 48px; grid-template-columns: minmax(0, 1fr) minmax(360px, .82fr); }
          .proof-grid { grid-template-columns: repeat(5, 1fr); }
          .matter-detail { grid-template-columns: 1fr; }
          .matter-link { justify-self: start; min-width: 0; }
          .risk-grid { grid-template-columns: repeat(2, 1fr); }
          .risk-item:nth-child(2) { border-right: 0; }
          .risk-item:nth-child(-n+2) { border-bottom: 1px solid #E7DAE0; }
          .formats-grid { grid-template-columns: repeat(3, 1fr); }
          .guidance-grid { grid-template-columns: repeat(3, 1fr); }
          .scale-grid { grid-template-columns: repeat(3, 1fr); }
          .scale-item:nth-child(3) { border-right: 0; }
          .scale-item:nth-child(-n+3) { border-bottom: 1px solid ${COLORS.line}; }
        }

        @media (max-width: 860px) {
          .shell { padding-inline: 24px; }
          .section { padding-block: 80px; }
          .section-dense { padding-block: 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding-block: 88px; }
          .hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-copy { max-width: 760px; text-align: center; margin-inline: auto; }
          .hero h1, .hero .lead { margin-inline: auto; }
          .hero-actions { justify-content: center; }
          .hero-art { max-width: 520px; margin-inline: auto; }
          .proof-grid { grid-template-columns: repeat(3, 1fr); }
          .proof-item:nth-child(3) { border-right: 0; }
          .proof-item:nth-child(-n+3) { border-bottom: 1px solid ${COLORS.line}; }
          .proof-item:nth-child(4), .proof-item:nth-child(5) { border-bottom: 0; }
          .overview-grid, .cross-grid, .agreement-grid, .security-grid { grid-template-columns: 1fr; gap: 44px; }
          .overview-copy, .agreement-copy, .security-copy { max-width: 760px; }
          .tablet-center { text-align: center; margin-inline: auto; }
          .tablet-center p { margin-inline: auto; }
          .compare-row { grid-template-columns: 1fr; }
          .compare-col + .compare-col { border-left: 0; border-top: 1px solid #E9D8E1; }
          .matter-row { grid-template-columns: 52px 1fr; row-gap: 24px; }
          .matter-detail { grid-column: 2; }
          .term-grid, .why-grid { grid-template-columns: repeat(2, 1fr); }
          .term-item:nth-child(3n), .why-item:nth-child(3n) { border-right: 1px solid ${COLORS.line}; }
          .term-item:nth-child(2n), .why-item:nth-child(2n) { border-right: 0; }
          .term-item:nth-last-child(-n+3), .why-item:nth-last-child(-n+3) { border-bottom: 1px solid ${COLORS.line}; }
          .term-item:nth-last-child(-n+2), .why-item:nth-last-child(-n+2) { border-bottom: 0; }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-panel:first-child { border-radius: 28px 28px 0 0; }
          .ai-panel:last-child { border-radius: 0 0 28px 28px; }
          .ai-bridge { min-height: 58px; }
          .ai-bridge span { writing-mode: horizontal-tb; transform: none; }
          .security-row { grid-template-columns: 44px 160px 1fr; }
          .investigation-flow { grid-template-columns: 1fr; }
          .investigation-step { border-right: 0; border-bottom: 1px solid ${COLORS.line}; min-height: 0; }
          .investigation-step:last-child { border-bottom: 0; }
          .collective-grid { grid-template-columns: 1fr; }
          .audience-grid { grid-template-columns: 1fr; }
          .formats-grid { grid-template-columns: repeat(2, 1fr); }
          .scale-grid { grid-template-columns: repeat(2, 1fr); }
          .scale-item, .scale-item:nth-child(3), .scale-item:nth-child(-n+3) { border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
          .scale-item:nth-child(2n) { border-right: 0; }
          .scale-item:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .process-row { grid-template-columns: 72px 1fr; row-gap: 10px; align-items: start; }
          .process-row p { grid-column: 2; }
          .languages-grid { grid-template-columns: 1fr; }
          .related-row { grid-template-columns: .72fr 1.28fr; }
          .related-row .arrow-link { grid-column: 2; justify-self: start; }
          .guidance-grid { grid-template-columns: repeat(2, 1fr); }
          .guidance-item:last-child:nth-child(odd) { grid-column: 1 / -1; }
          .final-grid { grid-template-columns: 1fr; }
          .final-actions { justify-content: flex-start; }
          .section-head.center-tablet { margin-inline: auto; text-align: center; }
        }

        @media (max-width: 620px) {
          .shell { padding-inline: 20px; }
          .section { padding-block: 68px; }
          .section-dense { padding-block: 64px; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          p, .matter-bullets li, .risk-item p, .term-item p, .collective-panel p, .guidance-item p, .faq-answer p { font-size: 16px; }
          .lead { font-size: 18px; }
          .hero { padding-block: 72px 68px; }
          .hero-grid { gap: 36px; }
          .hero-copy { text-align: center; }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions .btn { width: 100%; }
          .proof-grid { grid-template-columns: 1fr 1fr; }
          .proof-item { border-bottom: 1px solid ${COLORS.line}; min-height: 82px; }
          .proof-item:nth-child(odd) { border-right: 1px solid ${COLORS.line}; }
          .proof-item:nth-child(even) { border-right: 0; }
          .proof-item:nth-child(3) { border-right: 1px solid ${COLORS.line}; }
          .proof-item:nth-child(-n+3), .proof-item:nth-child(4) { border-bottom: 1px solid ${COLORS.line}; }
          .proof-item:last-child { grid-column: 1 / -1; border-bottom: 0; border-right: 0; }
          .section-head { margin-bottom: 38px; }
          .mobile-center { text-align: center; margin-inline: auto; }
          .mobile-center p { margin-inline: auto; }
          .compare-col, .compare-action { padding-inline: 24px; }
          .compare-action { flex-direction: column; align-items: flex-start; }
          .matter-row { grid-template-columns: 1fr; padding: 30px 0; }
          .matter-icon { margin-bottom: 0; }
          .matter-detail { grid-column: 1; }
          .matter-title p { max-width: none; }
          .concept-grid { grid-template-columns: 1fr; }
          .concept-item, .concept-item:nth-child(even), .concept-item:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid #47484F; }
          .concept-item:last-child { border-bottom: 0; }
          .concept-top { align-items: flex-start; flex-direction: column; }
          .term-grid, .why-grid, .risk-grid { grid-template-columns: 1fr; }
          .term-item, .term-item:nth-child(2n), .term-item:nth-child(3n), .term-item:nth-last-child(-n+2), .term-item:nth-last-child(-n+3),
          .why-item, .why-item:nth-child(2n), .why-item:nth-child(3n), .why-item:nth-last-child(-n+2), .why-item:nth-last-child(-n+3) { border-right: 0; border-bottom: 1px solid ${COLORS.line}; }
          .term-item:last-child, .why-item:last-child { border-bottom: 0; }
          .risk-item, .risk-item:nth-child(2) { border-right: 0; border-bottom: 1px solid #E7DAE0; }
          .risk-item:last-child { border-bottom: 0; }
          .ai-panel { padding: 28px 24px; }
          .security-row { grid-template-columns: 38px 1fr; gap: 12px 14px; }
          .security-row p { grid-column: 2; }
          .audience-panel { padding: 28px 24px; }
          .audience-list { grid-template-columns: 1fr; }
          .scale-grid { grid-template-columns: 1fr; }
          .scale-item, .scale-item:nth-child(2n), .scale-item:nth-child(3), .scale-item:nth-child(-n+3) { grid-column: auto; border-right: 0; border-bottom: 1px solid ${COLORS.line}; }
          .scale-item:last-child { grid-column: auto; border-bottom: 0; }
          .formats-grid { grid-template-columns: 1fr; }
          .process-row { grid-template-columns: 54px 1fr; gap: 16px; padding: 26px 0; }
          .language-note { grid-template-columns: 1fr; }
          .related-row { grid-template-columns: 1fr; gap: 10px; }
          .related-row .arrow-link { grid-column: 1; margin-top: 4px; min-height: 44px; align-items: center; }
          .matter-link .arrow-link, .investigation-actions .arrow-link, .ai-note .arrow-link { min-height: 44px; align-items: center; }
          .guidance-grid { grid-template-columns: 1fr; }
          .guidance-item, .guidance-item:last-child:nth-child(odd) { grid-column: auto; min-height: 0; }
          .faq-button { padding: 23px 20px; }
          .faq-answer { padding: 0 20px 24px; }
          .final-cta { padding-block: 68px; }
          .final-actions { flex-direction: column; }
          .final-actions .btn { width: 100%; }
          .section-head.center, .mobile-center { text-align: center; }
          .section-head.center p, .mobile-center p { margin-inline: auto; }
        }

        @media (max-width: 340px) {
          .shell { padding-inline: 20px; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item, .proof-item:nth-child(odd), .proof-item:nth-child(even), .proof-item:nth-child(3), .proof-item:nth-child(-n+3), .proof-item:nth-child(4) { border-right: 0; border-bottom: 1px solid ${COLORS.line}; }
          .proof-item:last-child { grid-column: auto; border-bottom: 0; }
        }
      `}</style>

      <main className="page">
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <Eyebrow>Legal Translation for Global Employment Matters</Eyebrow>
              <h1>Employment Law Translation Services</h1>
              <p className="lead">
                Professional translation for employment agreements, workplace policies, investigations, disciplinary matters, labor relations, severance documentation, and employment disputes across global workforces.
              </p>
              <p style={{ marginTop: 18 }}>
                Stepes helps law firms, in-house counsel, corporate legal teams, and multinational employers manage legally sensitive employment content across more than 100 languages with legal translation expertise, terminology control, AI-enabled efficiency, professional human review, and structured quality assurance.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get an Instant Quote <span aria-hidden="true">→</span></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Contact Us</a>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </section>

        <section className="proof-band" aria-label="Employment law translation capabilities">
          <div className="shell proof-grid">
            {["ISO 17100 Translation Processes", "ISO 9001 Quality Management", "100+ Languages", "AI + Expert Human Review", "Secure Enterprise Workflows"].map((item) => (
              <div className="proof-item" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="section blush-section">
          <div className="shell overview-grid">
            <div className="overview-copy mobile-center tablet-center">
              <Eyebrow>Employment & Workplace Legal Content</Eyebrow>
              <h2>Legal Translation for the Employment Relationship</h2>
              <p className="lead">
                Employment-related content ranges from everyday workforce communications to documents that establish legal rights, obligations, restrictions, claims, and remedies. Those materials should not all be translated the same way.
              </p>
            </div>
            <div className="compare-panel">
              <div className="compare-row">
                <div className="compare-col">
                  <div className="compare-label"><Icon name="scales"/> Employment Law Translation</div>
                  <p>For legally significant workplace content involving rights, obligations, disputes, investigations, employee representation, termination, and formal employment relationships.</p>
                </div>
                <div className="compare-col">
                  <div className="compare-label"><Icon name="people"/> Human Resources Translation</div>
                  <p>For recruiting, onboarding, benefits, training, employee engagement, HR systems, talent programs, and everyday workforce communications.</p>
                </div>
              </div>
              <div className="compare-action">
                <p>Some content, including employee handbooks and workplace policies, can involve both areas. The appropriate workflow depends on the document's purpose, legal significance, audience, and intended use.</p>
                <ArrowLink href="https://www.stepes.com/human-resource-translation-services/">Explore Human Resources Translation Services</ArrowLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>Employment & Labor Matters</Eyebrow>
              <h2>Translation Across the Employment Law Lifecycle</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Stepes supports employment and labor law matters from establishing the employment relationship through policy management, investigations, collective employment matters, separations, and disputes.
              </p>
            </div>
            <div className="matter-list">
              {matterGroups.map((item) => (
                <article className="matter-row" key={item.title}>
                  <div className="matter-icon"><Icon name={item.icon}/></div>
                  <div className="matter-title">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="matter-detail">
                    <ul className="matter-bullets">
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    {item.link && <div className="matter-link"><ArrowLink href={item.link[1]}>{item.link[0]}</ArrowLink></div>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="shell cross-grid">
            <div className="cross-copy">
              <Eyebrow dark>Cross-Border Employment</Eyebrow>
              <h2>Employment Law Across Languages and Legal Systems</h2>
              <p className="lead">
                Employment relationships operate within different legal, regulatory, and cultural environments. Concepts that appear similar in two languages may not have identical legal meaning, and employment terminology can vary significantly across jurisdictions.
              </p>
              <p>
                Stepes matches translators and reviewers according to the language pair, target locale, legal subject matter, document type, and intended use, while applying client glossaries, previous translations, approved templates, and counsel-provided terminology where available.
              </p>
              <div className="legal-note">
                <strong>Translation expertise and legal advice serve different roles.</strong>
                <p>Stepes provides linguistic and legal-translation expertise. Client counsel or qualified local counsel remains responsible for determining applicable law, enforceability, statutory requirements, filing requirements, and legal strategy.</p>
              </div>
            </div>
            <div className="concept-board">
              <div className="concept-top">
                <div className="concept-title">One matter. Different legal-language contexts.</div>
                <div className="concept-badge">Locale-aware translation</div>
              </div>
              <div className="concept-grid">
                <div className="concept-item"><strong>Termination</strong><span>Dismissal · redundancy · separation</span></div>
                <div className="concept-item"><strong>Employee Representation</strong><span>Works councils · unions · collective consultation</span></div>
                <div className="concept-item"><strong>Contractual Restrictions</strong><span>Confidentiality · non-solicitation · restrictive covenants</span></div>
                <div className="concept-item"><strong>Employment Status</strong><span>Worker classifications · statutory terminology · local concepts</span></div>
                <div className="concept-item"><strong>Collective Employment</strong><span>Bargaining · grievances · labor-management relations</span></div>
                <div className="concept-item"><strong>Workplace Rights</strong><span>Policies · leave · conduct · employee protections</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell agreement-grid">
            <div className="agreement-copy mobile-center tablet-center">
              <h2>Preserve Meaning Across Employment Agreements and Related Documents</h2>
              <p className="lead">
                Employment agreements rarely exist in isolation. Stepes helps maintain continuity as approved language moves across offers, agreements, policies, investigations, amendments, and separation documents.
              </p>
              <div style={{ marginTop: 26 }}><ArrowLink href="https://www.stepes.com/contract-translation-services/">Explore Contract Translation Services</ArrowLink></div>
            </div>
            <div className="document-flow">
              {[
                ["Employment Agreement", "Defined terms, rights, obligations, compensation, restrictions"],
                ["Amendment", "Changed provisions and updated contractual language"],
                ["Workplace Policy", "Aligned employee-facing and counsel-approved terminology"],
                ["Investigation", "Consistent matter terminology across complaints and evidence"],
                ["Separation Agreement", "Carry relevant defined language into exit documentation"],
              ].map(([title, text]) => (
                <div className="doc-node" key={title}>
                  <div className="doc-node-icon"><Icon name="document" size={20}/></div>
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>Legal Terminology</Eyebrow>
              <h2>Maintain Consistent Employment-Law Language Across Matters</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment-law terminology often repeats across agreements, policies, investigations, employee notices, dispute materials, and communications with outside counsel. Stepes combines professional legal linguists with terminology management and translation memory to create continuity across projects.
              </p>
            </div>
            <div className="term-grid">
              {[
                ["Matter-Specific Glossaries", "Maintain recurring legal terms, party names, organizational terminology, abbreviations, employment concepts, and client-preferred language."],
                ["Counsel-Approved Language", "Incorporate previously approved translations, agreement language, policy terminology, reviewer decisions, and legal-team preferences."],
                ["Defined-Term Control", "Track defined employment terms so the same source concept remains consistent throughout individual documents and related document sets."],
                ["Translation Memory", "Reuse validated bilingual content when templates, clauses, policies, notices, or other recurring language appears in later projects."],
                ["Cross-Language Harmonization", "Coordinate equivalent concepts across multiple target languages while allowing each translation to read naturally in its locale."],
                ["Reviewer Feedback", "Capture approved corrections and terminology decisions so client and outside-counsel feedback improves future translations."],
              ].map(([title, text]) => (
                <div className="term-item" key={title}><div className="term-index"/><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section blush-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>Workflow by Intended Use</Eyebrow>
              <h2>Apply the Right Translation Control to Each Employment Matter</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                An internal investigation containing thousands of emails does not require the same workflow as an executive employment agreement that will be signed or a document prepared for formal proceedings. Stepes configures translation around purpose, sensitivity, complexity, scale, and consequence.
              </p>
            </div>
            <div className="risk-wrap">
              <div className="risk-grid">
                {riskLevels.map((item, index) => (
                  <article className="risk-item" key={item.label}>
                    <div className="risk-number">0{index + 1}</div>
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <div className="risk-approach">{item.approach}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>AI Where It Adds Efficiency. Human Judgment Where It Matters.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                AI can accelerate multilingual legal work, but employment content can contain contractual language, allegations, confidential employee information, defined terms, jurisdiction-specific concepts, and material facts that require professional judgment.
              </p>
            </div>
            <div className="ai-grid">
              <div className="ai-panel">
                <div style={{ color: COLORS.magentaDark }}><Icon name="brain" size={30}/></div>
                <h3>AI Can Support</h3>
                <ul>
                  {["Initial multilingual document understanding", "High-volume investigation screening", "Large employment document populations", "Recurring policy content", "Repeated contractual language", "Translation memory leverage and terminology application", "Automated linguistic QA"].map((item) => <CheckLine key={item}>{item}</CheckLine>)}
                </ul>
              </div>
              <div className="ai-bridge"><span>One Controlled Workflow</span></div>
              <div className="ai-panel">
                <div style={{ color: COLORS.magentaDark }}><Icon name="scales" size={30}/></div>
                <h3>Professional Human Expertise Supports</h3>
                <ul>
                  {["Legal meaning and context", "Defined terms and ambiguous source language", "Contractual rights and obligations", "Material employment documents", "Jurisdiction-sensitive terminology", "Formal-use content", "Final linguistic quality"].map((item) => <CheckLine key={item}>{item}</CheckLine>)}
                </ul>
              </div>
            </div>
            <div className="ai-summary">
              <p>Stepes brings DomainAI, translation memory, terminology management, professional legal linguists, automated quality checks, and final human review into one coordinated workflow. AI improves efficiency where appropriate; professional review remains central wherever meaning, context, consequence, or final quality requires human judgment.</p>
            </div>
            <div className="ai-note"><ArrowLink href="https://www.stepes.com/ai-enabled-legal-translation-services/">Explore AI-Enabled Legal Translation Services</ArrowLink></div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="shell security-grid">
            <div className="security-copy">
              <Eyebrow dark>Confidentiality & Control</Eyebrow>
              <h2>Protect Sensitive Employment Information Across Languages</h2>
              <p className="lead">
                Employment matters can involve some of an organization's most sensitive information, including investigation allegations, compensation data, disciplinary records, separation terms, employee communications, personal information, and legal strategy.
              </p>
              <div style={{ marginTop: 24 }}><ArrowLink light href="https://www.stepes.com/contact-us/">Discuss Your Security Requirements</ArrowLink></div>
            </div>
            <div className="security-matrix">
              {[
                ["lock", "Sensitive Employee Information", "Translate employee records, compensation information, workplace complaints, disciplinary documentation, investigation evidence, and other sensitive workforce materials using workflows appropriate to the project."],
                ["people", "Controlled Access", "Limit project participation to the translators, reviewers, project professionals, and authorized stakeholders required for the assignment."],
                ["document", "Confidential Legal Content", "Support confidential agreements, disputes, investigations, settlements, and attorney-directed materials through managed translation workflows."],
                ["brain", "Project-Specific AI Requirements", "Align AI use with client requirements, content sensitivity, and the agreed workflow rather than applying it indiscriminately to every employment document."],
                ["check", "Secure Delivery", "Coordinate source files, translated documents, reviewer feedback, and final deliverables through defined project processes."],
              ].map(([icon, title, text]) => (
                <div className="security-row" key={title}>
                  <div className="icon-wrap"><Icon name={icon}/></div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>Multilingual Support for Workplace Investigations</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Workplace investigations can combine legal, employment, compliance, and human considerations within a single matter. Stepes translates written investigation materials and can coordinate interpreting for multilingual interviews and meetings when required.
              </p>
            </div>
            <div className="investigation-flow">
              {[
                ["Complaint", "Employee complaints, hotline reports, whistleblower submissions, allegations, and initial case documentation."],
                ["Interviews", "Interview questions, notes, transcripts, witness statements, declarations, and supporting materials."],
                ["Evidence", "Emails, chat messages, documents, personnel records, policies, photographs containing text, and relevant records."],
                ["Findings", "Investigation reports, factual findings, recommendations, management responses, and related legal documentation."],
                ["Follow-Up", "Disciplinary materials, employee notices, corrective actions, settlement documents, and other post-investigation content."],
              ].map(([title, text]) => <div className="investigation-step" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <p className="investigation-note">Matter-specific terminology can be maintained across complaints, interviews, evidence, reports, and subsequent legal proceedings so investigators and counsel work from consistent multilingual language.</p>
            <div className="investigation-actions">
              <ArrowLink href="https://www.stepes.com/internal-investigation-translation-services/">Explore Internal Investigation Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/legal-interpreting-services/">Legal Interpreting Services</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>International Employment Matters</Eyebrow>
              <h2>Support Collective Employment and Employee Representation Across Languages</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Multinational employers may need to communicate with unions, employee representatives, works councils, and other workforce bodies across multiple countries and languages. Stepes provides coordinated multilingual support for negotiation, consultation, organizational change, recurring meetings, and legally significant documentation.
              </p>
            </div>
            <div className="collective-grid">
              {[
                ["people", "Collective Bargaining & Labor Relations", "Translate collective bargaining agreements, proposals, counterproposals, negotiation materials, memoranda, grievance materials, and labor-management communications."],
                ["globe", "Works Councils & European Works Councils", "Coordinate multilingual agreements, meeting materials, presentations, minutes, consultation documents, and recurring employee-representation communications."],
                ["transition", "Restructuring & Organizational Change", "Support consultation documents, workforce change materials, management presentations, employee notices, and related legal content across jurisdictions."],
              ].map(([icon, title, text]) => (
                <article className="collective-panel" key={title}>
                  <div className="icon-wrap"><Icon name={icon}/></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>Built for Law Firms and In-House Employment Counsel</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment law translation requirements can originate with outside counsel, corporate legal departments, legal operations, compliance functions, regional counsel, or HR legal stakeholders. Stepes provides one multilingual workflow that can support the professionals involved.
              </p>
            </div>
            <div className="audience-grid">
              <article className="audience-panel">
                <div style={{ color: COLORS.magentaDark }}><Icon name="briefcase" size={30}/></div>
                <h3>Translation Services for Employment Law Firms</h3>
                <p>Help employment attorneys work efficiently across languages during advisory matters, investigations, negotiations, disputes, and litigation.</p>
                <ul className="audience-list">
                  {["Employment agreements", "Executive matters", "Restrictive covenants", "Workplace investigations", "Employee disputes", "Collective bargaining", "Employment litigation", "Cross-border issues"].map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ArrowLink href="https://www.stepes.com/law-firm-translation-services/">Explore Translation Services for Law Firms</ArrowLink>
              </article>
              <article className="audience-panel">
                <div style={{ color: COLORS.magentaDark }}><Icon name="building" size={30}/></div>
                <h3>Translation Solutions for In-House Employment Counsel</h3>
                <p>Support recurring employment requirements across subsidiaries, countries, business units, regional teams, and outside law firms.</p>
                <ul className="audience-list">
                  {["Recurring agreements", "Global policy rollouts", "Employee investigations", "Disciplinary matters", "Separation documentation", "Works council matters", "Outside-counsel translations", "Restructuring documentation"].map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ArrowLink href="https://www.stepes.com/solutions/legal-teams/">Explore Solutions for Corporate Legal Teams</ArrowLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section blush-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>Enterprise Scale</Eyebrow>
              <h2>From One Employment Agreement to Global Employment Programs</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment law translation needs can begin with one urgent agreement and expand into recurring multilingual support across regions, business units, document types, and legal matters.
              </p>
            </div>
            <div className="scale-grid">
              {[
                ["Individual Matters", "Translate one agreement, severance document, complaint, investigation report, or other high-priority legal document."],
                ["Multi-Language Rollouts", "Translate agreements, policies, notices, consultation materials, or other legal content across multiple workforce markets."],
                ["Recurring Employment Content", "Maintain reusable terminology and approved translations as agreements, policies, notices, and workplace requirements evolve."],
                ["Global Legal Programs", "Create repeatable multilingual workflows across corporate legal, HR, compliance, regional counsel, and outside law firms."],
                ["Centralized Language Assets", "Build translation memories, glossaries, approved terms, and reviewer decisions that support future employment matters."],
              ].map(([title, text]) => <div className="scale-item" key={title}><strong>{title}</strong><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section-dense">
          <div className="shell">
            <div className="section-head mobile-center tablet-center">
              <h2>Translate Employment Legal Content in the Formats Your Teams Use</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment matters can involve agreements, evidence, policies, presentations, spreadsheets, portals, scanned records, email, and multimedia. Stepes coordinates translation, formatting, quality review, and related language services so legal teams receive usable deliverables.
              </p>
            </div>
            <div className="formats-grid">
              {["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "PDF", "Scanned Documents", "Adobe Files", "Email Content", "Chat & Communication Exports", "Web & Employee Portal Content", "Structured Files", "Images & Graphics", "Audio & Video Content"].map((item) => <div className="format-chip" key={item}><Icon name="document" size={20}/><span>{item}</span></div>)}
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 26 }}>
              <ArrowLink href="https://www.stepes.com/document-translation-services/">Document Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/pdf-translation-services/">PDF Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/legal-interpreting-services/">Legal Interpreting Services</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>A Translation Workflow Built Around the Employment Matter</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Every employment matter has its own combination of languages, deadlines, legal significance, confidentiality, document types, and review requirements. Stepes configures the workflow around those realities.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map(([title, text], index) => (
                <div className="process-row" key={title}>
                  <div className="process-number">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>Employment Law Translation in 100+ Languages</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                A multinational organization may require agreements in one set of languages, investigation support in another, and works council or restructuring documentation across an entire regional workforce.
              </p>
            </div>
            <div className="languages-grid">
              <div className="language-col"><h3>European Languages</h3><p>Spanish, French, German, Italian, Portuguese, Dutch, Polish, Czech, Romanian, Hungarian, Swedish, Danish, Norwegian, Finnish, Greek, Bulgarian, Slovak, Slovenian, Croatian, Serbian, Ukrainian, and more.</p></div>
              <div className="language-col"><h3>Asian Languages</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Tagalog, and additional Asian languages.</p></div>
              <div className="language-col"><h3>Middle Eastern & South Asian Languages</h3><p>Arabic, Hebrew, Turkish, Persian, Hindi, Bengali, Urdu, and other regional languages.</p></div>
            </div>
            <div className="language-note">
              <div className="icon-wrap"><Icon name="language" size={30}/></div>
              <p><strong style={{ color: COLORS.ink }}>Regional language expertise matters.</strong> Employment translation assignments can consider country, region, legal context, audience, document purpose, terminology, and reviewer requirements in addition to the language pair.</p>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <h2>Why Legal Teams Choose Stepes for Employment Law Translation</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment legal work combines language, law, people, confidentiality, deadlines, and business risk. Stepes brings linguistic expertise and translation technology together in one coordinated solution.
              </p>
            </div>
            <div className="why-grid">
              {[
                ["scales", "Employment-Law Expertise", "Match translators and reviewers to legal subject matter, employment terminology, document type, language, and intended use."],
                ["brain", "AI + Human Workflows", "Use automation where it improves speed and scalability while applying professional human judgment where meaning and consequence require it."],
                ["layers", "Legal Terminology Governance", "Maintain defined terms, counsel-approved language, employee terminology, party names, and recurring legal expressions across related documents."],
                ["lock", "Secure Enterprise Workflows", "Support sensitive employee, investigation, dispute, contractual, and corporate information through controlled project processes."],
                ["building", "Enterprise Scalability", "Translate one urgent agreement or coordinate recurring multilingual employment content across multiple regions and business units."],
                ["globe", "100+ Languages", "Centralize employment-law translation across major global markets, regional languages, and multilingual workforce requirements."],
              ].map(([icon, title, text]) => <div className="why-item" key={title}><div className="icon-wrap"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head mobile-center">
              <h2>Related Employment & Legal Translation Solutions</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Employment matters often intersect with contracts, investigations, litigation, HR operations, and broader corporate legal requirements. Stepes connects these services through coordinated multilingual workflows and reusable language assets.
              </p>
            </div>
            <div className="related-list">
              {relatedSolutions.map(([title, text, href]) => (
                <div className="related-row" key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                  <ArrowLink href={href}>{`Explore ${title}`}</ArrowLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section blush-section">
          <div className="shell">
            <div className="section-head center mobile-center">
              <Eyebrow>Employment Law Translation Guidance</Eyebrow>
              <h2>Build Better Multilingual Employment Workflows</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Strong employment-law translation begins before the first document is translated. Preparing terminology, clarifying intended use, identifying related documents, and planning review can improve consistency across the entire matter.
              </p>
            </div>
            <div className="guidance-grid">
              {[
                ["Employment Agreements Across Languages", "Plan for defined terms, recurring clauses, related agreements, amendments, and counsel-approved language before multilingual production begins."],
                ["Workplace Investigations", "Coordinate confidentiality, interviews, evidence, terminology, large document sets, and investigation reporting across languages."],
                ["Severance & Separation Agreements", "Preserve defined obligations, payment terminology, release provisions, dates, conditions, and related employment terms."],
                ["Collective Bargaining Agreements", "Maintain recurring terminology across complex collective-employment documents, negotiations, amendments, and related communications."],
                ["Works Council Documentation", "Coordinate agreements, meeting materials, consultation documents, presentations, minutes, and recurring employee-representation communications."],
              ].map(([title, text]) => <div className="guidance-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head">
              <h2>Employment Law Translation Services FAQs</h2>
            </div>
            <div className="faq-panel">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={question}>
                    <button
                      className="faq-button"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="faq-question">{question}</span>
                      <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && <div className="faq-answer" id={`faq-answer-${index}`}><p>{answer}</p></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-grid">
            <div>
              <h2>Translate Employment Matters with Confidence Across Languages</h2>
              <p>
                Whether you need one employment agreement translated urgently or ongoing multilingual support across policies, investigations, labor relations, severance documents, and employment disputes, Stepes can build the translation workflow around your legal matter. Tell us about your documents, languages, jurisdictions, intended use, deadlines, review requirements, and confidentiality needs.
              </p>
            </div>
            <div className="final-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get an Instant Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
