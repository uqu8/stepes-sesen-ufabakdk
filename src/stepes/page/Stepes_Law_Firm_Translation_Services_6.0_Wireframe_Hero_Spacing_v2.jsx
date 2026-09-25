import React, { useState } from "react";

const MAGENTA = "#C11D63";
const BURGUNDY = "#7A1542";
const BLUSH = "#FDF2F7";
const DARK = "#242126";
const TEXT = "#2B2730";
const MUTED = "#655F68";
const BORDER = "#E7E2E6";
const SOFT = "#F7F5F6";

const matterServices = [
  {
    title: "Litigation Translation",
    text: "Support civil and commercial disputes with professional translation of pleadings, discovery materials, correspondence, witness statements, deposition materials, exhibits, expert reports, judgments, settlement documents, and other litigation content.",
    href: "https://www.stepes.com/litigation-translation-services/",
    link: "Explore Litigation Translation Services",
  },
  {
    title: "International Arbitration Translation",
    text: "Coordinate multilingual submissions, contracts, witness statements, expert evidence, exhibits, correspondence, hearing materials, procedural documents, and awards while maintaining matter-specific terminology across the proceeding.",
    href: "https://www.stepes.com/arbitration-translation-services/",
    link: "Explore Arbitration Translation Services",
  },
  {
    title: "eDiscovery & Investigations",
    text: "Support language identification, multilingual review, document triage, AI-assisted translation where appropriate, professional translation of selected records, and terminology continuity across large foreign-language collections.",
    href: "https://www.stepes.com/ediscovery-translation-services/",
    link: "Explore eDiscovery Translation Services",
  },
  {
    title: "M&A & Cross-Border Transactions",
    text: "Translate agreements, due-diligence materials, corporate records, disclosures, financial and operational documents, regulatory content, and other materials needed to evaluate and complete international transactions.",
    href: "https://www.stepes.com/merger-acquisition-translation-services/",
    link: "Explore M&A Translation Services",
  },
  {
    title: "Contracts & Commercial Matters",
    text: "Maintain legal meaning, defined terms, and recurring contractual language across master agreements, NDAs, licenses, supplier contracts, employment agreements, amendments, schedules, and statements of work.",
    href: "https://www.stepes.com/contract-translation-services/",
    link: "Explore Contract Translation Services",
  },
  {
    title: "Intellectual Property & Patent Matters",
    text: "Combine legal, linguistic, and technical expertise for patent applications, claims, specifications, prior art, office actions, licensing agreements, technical evidence, and IP disputes.",
    href: "https://www.stepes.com/patent-translation-services/",
    link: "Explore Patent Translation Services",
  },
  {
    title: "Regulatory & Compliance Matters",
    text: "Support regulatory investigations, compliance programs, policies, governance materials, privacy documentation, regulator correspondence, and other legally sensitive content across languages and jurisdictions.",
    href: "https://www.stepes.com/legal-translation-services/",
    link: "Explore Legal Translation Services",
  },
  {
    title: "Court & Official Documents",
    text: "Translate complaints, motions, orders, judgments, affidavits, declarations, summonses, exhibits, certificates, and other court or official documents with careful attention to completeness and submission requirements.",
    href: "https://www.stepes.com/court-document-translation-services/",
    link: "Explore Court Document Translation Services",
  },
];

const builtFor = [
  ["Matter-Based Organization", "Keep related files, instructions, terminology, reference translations, reviewer feedback, and deliveries connected across an ongoing matter."],
  ["Deadline-Driven Production", "Support filing dates, closings, hearings, depositions, regulatory responses, investigations, and other time-sensitive legal work."],
  ["Multiple Attorney and Client Reviewers", "Coordinate feedback from attorneys, clients, experts, local counsel, and other authorized reviewers while preserving approved language."],
  ["Legal + Subject-Matter Expertise", "Match legal language expertise with relevant knowledge in finance, technology, life sciences, engineering, patents, regulatory matters, and other specialized fields."],
  ["Large Document Volumes", "Scale from one urgent agreement or exhibit to thousands of discovery, investigation, due-diligence, or transaction documents."],
  ["Ongoing Matter Support", "Reuse approved translations, glossaries, translation memories, defined terms, and naming conventions as new content arrives."],
];

const translationLevels = [
  {
    n: "01",
    title: "Rapid Multilingual Understanding",
    text: "For large document collections where attorneys need to understand, filter, categorize, or prioritize foreign-language material before deciding what warrants deeper review.",
  },
  {
    n: "02",
    title: "AI-Assisted Translation + Professional Validation",
    text: "For suitable higher-volume or recurring content where AI-enabled translation improves efficiency and a qualified linguist validates meaning, terminology, completeness, and important details.",
  },
  {
    n: "03",
    title: "Expert Human Legal Translation",
    text: "For substantive contracts, evidence, expert materials, important correspondence, transaction content, legal submissions, and other materials where professional legal-linguistic judgment is essential.",
  },
  {
    n: "04",
    title: "Independent Review, Certification & Additional Controls",
    text: "For higher-consequence materials, add independent linguistic review, certification, formatting, or other quality controls based on the document's intended use and applicable requirements.",
  },
];

const terminologyItems = [
  ["Defined Terms", "Maintain contractual and legal definitions consistently across agreements, amendments, schedules, exhibits, and related documents."],
  ["Party & Entity Names", "Standardize names, transliterations, corporate entities, individuals, locations, and recurring references."],
  ["Legal Terminology", "Maintain matter-appropriate terminology across pleadings, evidence, correspondence, opinions, and related content."],
  ["Technical & Industry Terms", "Capture specialized terminology from fields such as technology, finance, life sciences, manufacturing, engineering, telecommunications, and energy."],
  ["Counsel-Approved Language", "Apply translation decisions and wording approved by attorneys or clients to subsequent related material where appropriate."],
  ["Translation Memory", "Reuse previously translated segments across recurring or similar documents to support consistency, efficiency, and continuity."],
];

const industries = [
  ["Life Sciences & Healthcare", "Pharmaceutical, biotechnology, medical-device, clinical, healthcare, product-liability, regulatory, and IP matters."],
  ["Financial Services", "Banking, securities, investment, insurance, financing, regulatory, transaction, and investigation content."],
  ["Technology & Software", "Software licensing, cybersecurity, data privacy, intellectual property, SaaS, digital commerce, and technology disputes."],
  ["Manufacturing & Engineering", "Technical agreements, product documentation, expert evidence, patents, investigations, and engineering disputes."],
  ["Energy", "Transactions, regulatory matters, environmental content, project documentation, commercial agreements, and disputes."],
  ["Telecommunications & Electronics", "Patents, technical evidence, licensing, product documentation, regulatory materials, contracts, and disputes."],
];

const securityItems = [
  ["Controlled Access", "Limit project access to authorized participants and the professionals assigned to the work."],
  ["Secure File Handling", "Manage source documents, translations, and project materials through controlled digital workflows."],
  ["Qualified Project Teams", "Assign translators and reviewers according to the legal, linguistic, subject-matter, and project requirements of the engagement."],
  ["Confidentiality Controls", "Support confidentiality requirements appropriate to sensitive legal and commercial material."],
  ["Reviewer Governance", "Coordinate access and feedback from authorized attorneys, clients, experts, or other stakeholders."],
  ["Controlled Delivery", "Deliver multilingual legal content through established workflows while preserving approved language assets where appropriate."],
];

const interpretingItems = [
  ["Depositions", "Support multilingual questioning and testimony with interpreters experienced in formal, terminology-sensitive communication."],
  ["Witness & Investigation Interviews", "Help attorneys communicate effectively with witnesses, employees, claimants, experts, and other participants across languages."],
  ["Attorney-Client Meetings", "Support multilingual communication during consultations, case preparation, negotiations, and other legal discussions."],
  ["Arbitration & Hearing Support", "Provide interpreting for proceedings and meetings requiring accurate real-time communication between multilingual participants."],
  ["Expert Consultations", "Support conversations involving specialized technical, scientific, financial, or industry terminology."],
  ["Negotiations & Settlement Discussions", "Enable clear communication where legal, commercial, and cultural nuances may influence understanding."],
];

const workflow = [
  ["Define the Requirement", "Identify source and target languages, intended use, subject matter, deadline, file format, certification needs, security considerations, and project instructions."],
  ["Assign the Right Expertise", "Select translators, reviewers, and subject-matter specialists based on the legal discipline, language combination, technical content, and quality requirements."],
  ["Establish Matter Terminology", "Review glossaries, prior translations, defined terms, party names, reference documents, counsel-approved language, and other matter-specific resources."],
  ["Apply the Appropriate Translation Workflow", "Use rapid multilingual review, AI-assisted translation with professional validation, expert human translation, independent review, or another fit-for-purpose model."],
  ["Perform Legal-Linguistic QA", "Check meaning, completeness, terminology, names, numbers, dates, defined terms, cross-references, formatting, and other relevant details."],
  ["Incorporate Authorized Review", "Capture approved feedback from attorneys, clients, subject experts, or other authorized reviewers and update relevant language assets where appropriate."],
  ["Deliver and Carry Knowledge Forward", "Provide the completed translation in the required format and preserve approved terminology, translation memory, and reference material for future related work."],
];

const quality = [
  ["Meaning & Linguistic Accuracy", "Ensure the translation communicates the source meaning accurately and appropriately in the target language."],
  ["Defined Terms & Matter Terminology", "Check recurring legal, technical, and matter-specific terms for consistency across documents and related content."],
  ["Names, Dates & Numbers", "Pay close attention to entity names, personal names, dates, amounts, percentages, citations, measurements, and other factual details."],
  ["Completeness", "Verify that relevant source content has been translated, including headings, footnotes, tables, labels, and other document elements."],
  ["References & Structure", "Maintain clause numbering, exhibit references, schedules, section references, and structural elements important to navigation and understanding."],
  ["Additional Review Where Required", "Add independent linguistic review, certification, formatting, or other controls when appropriate to the document's use."],
];

const roles = [
  ["Partners & Attorneys", "Specialized translation for substantive legal documents, important evidence, international transactions, client matters, and deadline-driven work."],
  ["Associates", "Efficient translation support for case preparation, document review, research, transactions, filings, and recurring matter materials."],
  ["Paralegals & Legal Assistants", "Coordinate files, languages, deadlines, formatting, certification requirements, and project deliveries through an organized workflow."],
  ["Litigation Support & eDiscovery Teams", "Process multilingual collections using scalable workflows for language identification, review, prioritization, translation, and terminology management."],
  ["Practice Support & Knowledge Teams", "Build reusable glossaries, reference translations, translation memories, and approved language resources that improve consistency."],
  ["Legal Operations & Vendor Management", "Centralize multilingual requirements through consistent workflows, quality controls, reusable language assets, and scalable translation resources."],
];

const languageRows = [
  ["Arabic", "Legal, commercial, regulatory, energy, financial, and cross-border matters."],
  ["Chinese", "Simplified and Traditional Chinese support for litigation, transactions, IP, corporate, financial, and regulatory work."],
  ["Dutch", "Contracts, corporate records, disputes, compliance, and European business matters."],
  ["French", "International disputes, contracts, transactions, regulatory content, corporate documentation, and Francophone markets."],
  ["German", "Commercial matters, manufacturing, patents, transactions, disputes, and regulatory documentation."],
  ["Italian", "Commercial agreements, corporate records, litigation, transactions, and international business matters."],
  ["Japanese", "Patents, technology, manufacturing, transactions, contracts, disputes, and corporate content."],
  ["Korean", "Technology, electronics, IP, contracts, litigation, transactions, and corporate matters."],
  ["Polish", "Contracts, corporate matters, litigation, regulatory work, and European business."],
  ["Portuguese", "Legal matters involving Brazil, Portugal, and other Portuguese-speaking markets."],
  ["Spanish", "Disputes, transactions, employment matters, investigations, corporate documents, and client communications."],
  ["Additional Languages", "Czech, Danish, Finnish, Greek, Hebrew, Hindi, Indonesian, Norwegian, Romanian, Russian, Swedish, Thai, Turkish, Vietnamese, and many more."],
];

const related = [
  ["Legal Translation Services", "Complete legal translation capabilities across contracts, litigation, corporate governance, compliance, transactions, intellectual property, and official documents.", "https://www.stepes.com/legal-translation-services/"],
  ["Litigation Translation Services", "Multilingual evidence, discovery, pleadings, expert content, witness materials, exhibits, and other litigation documents.", "https://www.stepes.com/litigation-translation-services/"],
  ["International Arbitration Translation", "Multilingual submissions, evidence, witness statements, experts, hearings, contracts, and arbitration materials.", "https://www.stepes.com/arbitration-translation-services/"],
  ["eDiscovery Translation Services", "Understand and prioritize large foreign-language collections before moving selected materials into deeper professional review.", "https://www.stepes.com/ediscovery-translation-services/"],
  ["Court Document Translation Services", "Filings, orders, judgments, affidavits, declarations, exhibits, and other court documents.", "https://www.stepes.com/court-document-translation-services/"],
  ["Contract Translation Services", "Maintain legal meaning and defined terminology across agreements, schedules, amendments, and recurring contractual content.", "https://www.stepes.com/contract-translation-services/"],
  ["M&A Translation Services", "Coordinate multilingual legal, financial, corporate, regulatory, and operational content throughout cross-border transactions.", "https://www.stepes.com/merger-acquisition-translation-services/"],
  ["Patent Translation Services", "Combine technical and linguistic expertise for patent applications, claims, specifications, prior art, and related IP documentation.", "https://www.stepes.com/patent-translation-services/"],
  ["AI-Enabled Legal Translation Services", "AI translation, translation memory, terminology management, professional legal-linguist validation, and structured quality controls.", "https://www.stepes.com/ai-enabled-legal-translation-services/"],
  ["Certified Translation Services", "Professional translation with certification for courts, government agencies, official submissions, and other formal uses.", "https://www.stepes.com/certified-translation-services/"],
];

const faqs = [
  ["What types of documents does Stepes translate for law firms?", "Stepes translates contracts, pleadings, discovery materials, correspondence, witness statements, expert reports, exhibits, court documents, corporate records, transaction materials, patents, regulatory documents, investigation records, policies, certificates, and other multilingual legal content. We can also assign subject-matter specialists when the underlying content requires additional technical, financial, scientific, or industry expertise."],
  ["Can Stepes handle urgent legal translation requests?", "Yes. Legal work frequently involves filing dates, closings, hearings, depositions, regulatory deadlines, and other time-sensitive requirements. Stepes can scope translation resources and workflows around urgent deadlines based on the language pair, file format, document volume, subject matter, and level of review required."],
  ["Can Stepes support large multilingual discovery or investigation collections?", "Yes. Stepes can support language identification, rapid multilingual understanding, document prioritization, AI-assisted workflows where appropriate, and professional translation of selected material requiring deeper legal review or evidentiary use. This helps legal teams focus higher levels of translation effort on the documents that matter most."],
  ["How does Stepes maintain terminology consistency throughout a legal matter?", "Stepes can build and maintain matter-specific glossaries, translation memories, reference translations, defined terms, naming conventions, and other language resources. Attorney- or client-approved terminology can be incorporated into these resources and reused across subsequent related work where appropriate."],
  ["Does Stepes provide certified translations for courts and official use?", "Yes. Stepes provides certified translation services when requested for court, government, corporate, academic, and other official purposes. Requirements can differ by jurisdiction, court, agency, institution, or receiving authority, so clients should confirm the applicable submission requirements."],
  ["How does Stepes use AI for legal translation?", "Stepes uses AI as part of a fit-for-purpose translation model rather than as a universal replacement for professional legal linguists. For appropriate content, AI can accelerate multilingual review or provide a scalable translation foundation. Qualified linguists can then validate or fully translate content depending on the document's purpose, importance, risk, and quality requirements."],
  ["Can our attorneys or clients review translations?", "Yes. Attorney, client, subject-matter expert, and other authorized reviewer feedback can be incorporated into the translation workflow. Approved changes can also be reflected in matter terminology and translation resources where appropriate so future related content remains consistent."],
  ["Does Stepes provide legal interpreting?", "Yes. Stepes provides professional interpreting services for depositions, witness interviews, attorney-client meetings, investigations, hearings, arbitration proceedings, expert consultations, negotiations, and other multilingual legal communication."],
  ["How does Stepes handle confidential legal documents?", "Stepes uses secure enterprise workflows and controlled project access for confidential business and legal content. Project teams can be assigned according to the linguistic, legal, subject-matter, confidentiality, and workflow requirements of the engagement. Specific client or matter requirements should be communicated during project setup so the workflow can be aligned accordingly."],
];

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`text-link ${className}`} href={href}>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <path d="M4 10h11M11 6l4 4-4 4" />
      </svg>
    </a>
  );
}

function LineIcon({ type = "document" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    document: (
      <>
        <path {...common} d="M7 3.5h7l4 4V20.5H7z" />
        <path {...common} d="M14 3.5v4h4M10 12h5M10 16h5" />
      </>
    ),
    clock: (
      <>
        <circle {...common} cx="12" cy="12" r="8.5" />
        <path {...common} d="M12 7.5V12l3.2 2" />
      </>
    ),
    people: (
      <>
        <circle {...common} cx="9" cy="9" r="3" />
        <circle {...common} cx="17" cy="10" r="2.4" />
        <path {...common} d="M3.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6M14.5 15.5c2.8.2 4.7 1.7 5.3 4.5" />
      </>
    ),
    scale: (
      <>
        <path {...common} d="M12 3v18M6 6h12M7 6 4 12h6L7 6Zm10 0-3 6h6l-3-6Z" />
        <path {...common} d="M4 12c.5 2 1.5 3 3 3s2.5-1 3-3M14 12c.5 2 1.5 3 3 3s2.5-1 3-3M8 21h8" />
      </>
    ),
    stack: (
      <>
        <path {...common} d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path {...common} d="m4 12 8 4 8-4M4 17l8 4 8-4" />
      </>
    ),
    refresh: (
      <>
        <path {...common} d="M5 8a8 8 0 0 1 13-2l2 2M19 3v5h-5" />
        <path {...common} d="M19 16a8 8 0 0 1-13 2l-2-2M5 21v-5h5" />
      </>
    ),
    lock: (
      <>
        <rect {...common} x="5" y="10" width="14" height="11" rx="2" />
        <path {...common} d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    shield: (
      <>
        <path {...common} d="M12 3.5 19 6v5.4c0 4.4-2.7 7.6-7 9.1-4.3-1.5-7-4.7-7-9.1V6l7-2.5Z" />
        <path {...common} d="m9 12 2 2 4-4" />
      </>
    ),
    review: (
      <>
        <path {...common} d="M6 4h9l3 3v13H6z" />
        <path {...common} d="M15 4v4h3M9 11h6M9 15h3" />
        <path {...common} d="m14.5 16.5 1.5 1.5 3-3" />
      </>
    ),
    send: (
      <>
        <path {...common} d="m3.5 11 16-7-6 16-2.5-6.5L3.5 11Z" />
        <path {...common} d="m11 13.5 8.5-9.5" />
      </>
    ),
    globe: (
      <>
        <circle {...common} cx="12" cy="12" r="9" />
        <path {...common} d="M3 12h18M12 3c2.6 2.4 4 5.4 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.4-4-9s1.4-6.6 4-9Z" />
      </>
    ),
  };
  return <svg className="line-icon" aria-hidden="true" viewBox="0 0 24 24">{paths[type] || paths.document}</svg>;
}

function SectionHead({ eyebrow, title, intro, align = "center", dark = false, id }) {
  return (
    <div id={id} className={`section-head ${align === "left" ? "left" : "center"} ${dark ? "dark-head" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520">
        <rect x="50" y="44" width="520" height="420" rx="34" fill="#FFF9FB" stroke="#E7E2E6" />
        <circle cx="310" cy="252" r="94" fill="#fff" stroke="#D9D2D8" strokeWidth="2" />
        <rect x="250" y="160" width="120" height="154" rx="14" fill="#fff" stroke="#3C363E" strokeWidth="2" />
        <path d="M338 160v34h32" fill="none" stroke="#3C363E" strokeWidth="2" />
        <path d="M276 220h68M276 244h68M276 268h46" fill="none" stroke="#A8A0A7" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="310" cy="329" r="29" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
        <path d="M297 324h24m-5-5 5 5-5 5M323 334h-24m5-5-5 5 5 5" fill="none" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <g fill="#fff" stroke="#5B535C" strokeWidth="2">
          <rect x="92" y="94" width="130" height="82" rx="14" />
          <rect x="398" y="88" width="126" height="82" rx="14" />
          <rect x="92" y="334" width="142" height="90" rx="14" />
          <rect x="394" y="340" width="136" height="84" rx="14" />
        </g>
        <g fill="none" stroke="#A79FA6" strokeWidth="2.5" strokeLinecap="round">
          <path d="M222 136h48l23 35" />
          <path d="M398 130h-48l-20 35" />
          <path d="M234 378h42l28-41" />
          <path d="M394 382h-43l-28-43" />
        </g>
        <g fontFamily="Inter, Arial, sans-serif" fontSize="15" fill="#4D454E">
          <text x="112" y="126">DISCOVERY</text>
          <text x="112" y="151">Evidence & records</text>
          <text x="418" y="120">TRANSACTIONS</text>
          <text x="418" y="145">Agreements & diligence</text>
          <text x="112" y="370">PROCEEDINGS</text>
          <text x="112" y="395">Filings & testimony</text>
          <text x="414" y="374">COUNSEL REVIEW</text>
          <text x="414" y="399">Approved terminology</text>
        </g>
        <circle cx="222" cy="136" r="5" fill="#C11D63" />
        <circle cx="398" cy="130" r="5" fill="#C11D63" />
        <circle cx="234" cy="378" r="5" fill="#C11D63" />
        <circle cx="394" cy="382" r="5" fill="#C11D63" />
      </svg>
    </div>
  );
}

function FAQItem({ item, open, onClick, index }) {
  const [q, a] = item;
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        onClick={onClick}
      >
        <span>{q}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={`faq-answer-${index}`} className="faq-answer" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function LawFirmTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-law-page">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; color: ${TEXT}; }
        .stepes-law-page {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          color: ${TEXT};
          background: #fff;
          overflow: hidden;
        }
        .stepes-law-page h1,
        .stepes-law-page h2,
        .stepes-law-page h3,
        .stepes-law-page p { margin-top: 0; }
        .stepes-law-page h1,
        .stepes-law-page h2,
        .stepes-law-page h3 { color: #272229; font-weight: 600; letter-spacing: -0.025em; }
        .stepes-law-page h1 { font-size: 48px; line-height: 1.07; margin-bottom: 24px; }
        .stepes-law-page h2 { font-size: 36px; line-height: 1.14; margin-bottom: 20px; }
        .stepes-law-page h3 { font-size: 24px; line-height: 1.24; margin-bottom: 12px; }
        .stepes-law-page p { font-size: 16px; line-height: 1.72; color: ${MUTED}; margin-bottom: 0; }
        .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding-top: 96px; padding-bottom: 96px; }
        .section.dense { padding-top: 80px; padding-bottom: 80px; }
        .section.soft { background: ${SOFT}; }
        .section.blush { background: ${BLUSH}; }
        .section.dark { background: ${DARK}; color: #fff; }
        .section-head { margin-bottom: 48px; }
        .section-head.center { text-align: center; max-width: 900px; margin-left: auto; margin-right: auto; }
        .section-head.left { max-width: 820px; }
        .section-head .section-intro { font-size: 18px; line-height: 1.7; max-width: 820px; }
        .section-head.center .section-intro { margin-left: auto; margin-right: auto; }
        .eyebrow {
          color: ${MAGENTA};
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .dark .eyebrow,
        .dark-head .eyebrow { color: #F2A7C6; }
        .dark h2,
        .dark h3,
        .dark-head h2,
        .dark-head h3 { color: #fff; }
        .dark p,
        .dark-head .section-intro { color: #D8D3D7; }
        .hero {
          background: #fff;
          padding: 104px 0 96px;
          position: relative;
        }
        .hero::after {
          content: "";
          position: absolute;
          right: -160px;
          top: -130px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1px solid rgba(193,29,99,.12);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(430px, .95fr);
          gap: 64px;
          align-items: center;
        }
        .hero-copy { max-width: 690px; }
        .hero-copy .lead {
          font-size: 18px;
          line-height: 1.7;
          color: #514B53;
          max-width: 690px;
          margin-bottom: 16px;
        }
        .hero-note {
          font-size: 16px;
          line-height: 1.65;
          color: ${MUTED};
          max-width: 650px;
          margin-bottom: 0;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 44px;
        }
        .btn {
          min-height: 48px;
          border-radius: 999px;
          padding: 12px 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
          border: 1px solid transparent;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus {
          background: ${MAGENTA};
          color: #fff !important;
        }
        .btn-primary:hover { background: #A71954; box-shadow: 0 8px 22px rgba(122,21,66,.18); }
        .btn-secondary { color: #352F36; background: #fff; border-color: #D7D0D5; }
        .btn-secondary:hover { border-color: #BEB6BC; }
        .hero-art {
          width: 100%;
          max-width: 570px;
          margin-left: auto;
        }
        .hero-art svg { display: block; width: 100%; height: auto; }
        .hero-grid > *,
        .overview-grid > *,
        .terminology-layout > *,
        .ediscovery-layout > *,
        .cta-inner > *,
        .level-row > *,
        .process-row > *,
        .term-row > *,
        .role-row > *,
        .language-row > *,
        .related-row > * { min-width: 0; }
        .stepes-law-page h1,
        .stepes-law-page h2,
        .stepes-law-page h3,
        .stepes-law-page p,
        .text-link span { overflow-wrap: break-word; }
        .proof-wrap { background: #fff; border-top: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
        .proof-bar {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          align-items: stretch;
        }
        .proof-item {
          padding: 28px 22px;
          border-right: 1px solid ${BORDER};
        }
        .proof-item:first-child { padding-left: 0; }
        .proof-item:last-child { border-right: 0; padding-right: 0; }
        .proof-title { font-size: 17px; line-height: 1.35; font-weight: 600; color: #302A31; margin-bottom: 4px; }
        .proof-sub { font-size: 16px; color: ${MUTED}; line-height: 1.45; }
        .overview-grid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 84px;
          align-items: start;
        }
        .overview-copy p { font-size: 18px; margin-bottom: 20px; }
        .ecosystem {
          background: #fff;
          border: 1px solid ${BORDER};
          border-radius: 30px;
          padding: 34px;
        }
        .ecosystem-core {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 130px;
          border-radius: 24px;
          background: #2D282E;
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 18px;
        }
        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .ecosystem-chip {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          text-align: center;
          border: 1px solid ${BORDER};
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          color: #514B53;
          background: #FAF9FA;
        }
        .matter-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid ${BORDER};
        }
        .matter-item {
          padding: 34px 34px 36px 0;
          border-bottom: 1px solid ${BORDER};
          min-width: 0;
        }
        .matter-item:nth-child(even) {
          padding-left: 34px;
          padding-right: 0;
          border-left: 1px solid ${BORDER};
        }
        .matter-item p { margin-bottom: 18px; }
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${MAGENTA};
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          min-height: 44px;
        }
        .text-link svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform .18s ease;
          flex: 0 0 auto;
        }
        .text-link:hover svg { transform: translateX(3px); }
        .text-link:hover { color: #9F1D55; text-decoration: underline; text-underline-offset: 5px; }
        .workflow-panel {
          background: #302A31;
          border-radius: 30px;
          padding: 46px;
        }
        .workflow-panel .section-head { margin-bottom: 40px; }
        .workflow-horizontal {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid rgba(255,255,255,.18);
          border-bottom: 1px solid rgba(255,255,255,.18);
        }
        .workflow-node {
          min-height: 158px;
          padding: 28px 18px;
          border-right: 1px solid rgba(255,255,255,.16);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .workflow-node:last-child { border-right: 0; }
        .workflow-node .node-index {
          color: #F2A7C6;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .08em;
        }
        .workflow-node h3 { font-size: 20px; margin: 0; color: #fff; letter-spacing: -0.015em; }
        .workflow-support {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .workflow-support span {
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          color: #D8D3D7;
          font-size: 16px;
          text-align: center;
        }
        .icon-rows {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid ${BORDER};
        }
        .icon-row {
          display: grid;
          grid-template-columns: 54px 1fr;
          gap: 18px;
          padding: 30px 30px 30px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .icon-row:nth-child(even) {
          padding-left: 30px;
          padding-right: 0;
          border-left: 1px solid ${BORDER};
        }
        .icon-box {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: ${BLUSH};
          color: ${MAGENTA};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .line-icon { width: 24px; height: 24px; }
        .icon-row h3 { font-size: 20px; margin-bottom: 8px; }
        .levels {
          max-width: 1040px;
          margin: 0 auto;
          border-top: 1px solid ${BORDER};
        }
        .level-row {
          display: grid;
          grid-template-columns: 72px 330px 1fr;
          gap: 28px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .level-n {
          font-size: 17px;
          font-weight: 600;
          color: ${MAGENTA};
          line-height: 1.5;
        }
        .level-row h3 { font-size: 21px; margin: 0; }
        .terminology-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 64px;
          align-items: stretch;
        }
        .term-list { border-top: 1px solid ${BORDER}; }
        .term-row {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 28px;
          padding: 22px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .term-row strong { font-size: 17px; font-weight: 600; color: #342E35; }
        .term-output {
          background: ${BURGUNDY};
          border-radius: 30px;
          padding: 36px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .term-output .eyebrow { color: #F2A7C6; }
        .term-output h3 { color: #fff; font-size: 28px; margin-bottom: 16px; }
        .term-output p { color: #F1E8ED; }
        .term-tags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .term-tags span {
          border: 1px solid rgba(255,255,255,.24);
          border-radius: 999px;
          padding: 8px 11px;
          font-size: 16px;
          color: #fff;
        }
        .ediscovery-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }
        .ediscovery-copy p { font-size: 18px; margin-bottom: 24px; }
        .ediscovery-steps {
          border: 1px solid ${BORDER};
          border-radius: 28px;
          background: #fff;
          padding: 8px 28px;
        }
        .ediscovery-step {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          align-items: start;
          padding: 22px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .ediscovery-step:last-child { border-bottom: 0; }
        .step-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #D6CED4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${MAGENTA};
          font-size: 14px;
          font-weight: 600;
        }
        .ediscovery-step h3 { font-size: 19px; margin-bottom: 6px; }
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .industry-item {
          border: 1px solid ${BORDER};
          border-radius: 22px;
          padding: 28px;
          background: #fff;
        }
        .industry-item h3 { font-size: 20px; }
        .security-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,.03);
        }
        .security-cell {
          padding: 30px;
          border-right: 1px solid rgba(255,255,255,.13);
          border-bottom: 1px solid rgba(255,255,255,.13);
        }
        .security-cell:nth-child(3n) { border-right: 0; }
        .security-cell:nth-last-child(-n+3) { border-bottom: 0; }
        .security-cell .icon-box { background: rgba(242,167,198,.10); color: #F2A7C6; }
        .security-cell h3 { font-size: 20px; margin-top: 18px; }
        .security-cell p { color: #D9D3D8; }
        .security-footer { margin-top: 34px; display: flex; justify-content: space-between; align-items: center; gap: 26px; }
        .security-footer p { max-width: 760px; }
        .security-footer .text-link { color: #F2A7C6; flex: 0 0 auto; }
        .interpret-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid ${BORDER};
        }
        .interpret-item {
          padding: 28px 30px 28px 0;
          border-bottom: 1px solid ${BORDER};
          min-height: 184px;
        }
        .interpret-item:not(:nth-child(3n+1)) { border-left: 1px solid ${BORDER}; padding-left: 30px; }
        .interpret-item h3 { font-size: 20px; }
        .scale-band {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid ${BORDER};
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .scale-item {
          padding: 32px;
          min-height: 208px;
          border-right: 1px solid ${BORDER};
          position: relative;
        }
        .scale-item:last-child { border-right: 0; }
        .scale-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${MAGENTA};
          transform: scaleX(.45);
          transform-origin: left;
          opacity: .8;
        }
        .scale-item:nth-child(2)::before { transform: scaleX(.62); }
        .scale-item:nth-child(3)::before { transform: scaleX(.78); }
        .scale-item:nth-child(4)::before { transform: scaleX(1); }
        .scale-item h3 { font-size: 20px; }
        .process {
          max-width: 1040px;
          margin: 0 auto;
          border-top: 1px solid ${BORDER};
        }
        .process-row {
          display: grid;
          grid-template-columns: 70px 300px 1fr;
          gap: 30px;
          padding: 28px 0;
          border-bottom: 1px solid ${BORDER};
          align-items: start;
        }
        .process-n { color: ${MAGENTA}; font-size: 17px; font-weight: 600; }
        .process-row h3 { font-size: 20px; margin: 0; }
        .quality-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .quality-item {
          background: #fff;
          border: 1px solid ${BORDER};
          border-radius: 22px;
          padding: 26px;
        }
        .quality-item h3 { font-size: 19px; }
        .role-rows {
          border-top: 1px solid ${BORDER};
        }
        .role-row {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 38px;
          padding: 24px 0;
          border-bottom: 1px solid ${BORDER};
          align-items: start;
        }
        .role-row h3 { font-size: 20px; margin: 0; }
        .language-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid ${BORDER};
        }
        .language-row {
          display: grid;
          grid-template-columns: 118px 1fr;
          gap: 18px;
          padding: 18px 24px 18px 0;
          border-bottom: 1px solid ${BORDER};
        }
        .language-row:nth-child(even) {
          border-left: 1px solid ${BORDER};
          padding-left: 24px;
        }
        .language-row strong { color: #302A31; font-size: 16px; }
        .related-list {
          border-top: 1px solid ${BORDER};
        }
        .related-row {
          display: grid;
          grid-template-columns: 280px 1fr 220px;
          gap: 30px;
          padding: 24px 0;
          border-bottom: 1px solid ${BORDER};
          align-items: center;
        }
        .related-row h3 { font-size: 19px; margin: 0; }
        .related-row .text-link { justify-self: end; text-align: right; }
        .audience-switch {
          margin-top: 36px;
          padding: 28px 30px;
          border-radius: 22px;
          background: ${BLUSH};
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        .audience-switch strong {
          display: block;
          color: #302A31;
          font-size: 18px;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .audience-switch p { max-width: 760px; }
        .audience-switch .text-link { flex: 0 0 auto; }
        .faq-panel {
          border: 1px solid ${BORDER};
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .faq-item { border-bottom: 1px solid ${BORDER}; }
        .faq-item:last-child { border-bottom: 0; }
        .faq-question {
          width: 100%;
          background: transparent;
          border: 0;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #2D282E;
          font: inherit;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }
        .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: -3px; }
        .faq-plus {
          color: ${MAGENTA};
          font-size: 26px;
          font-weight: 400;
          line-height: 1;
          flex: 0 0 auto;
        }
        .faq-answer { padding: 0 70px 24px 28px; }
        .faq-answer p { max-width: 840px; }
        .final-cta { background: ${BURGUNDY}; color: #fff; padding: 84px 0; }
        .cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
        }
        .final-cta h2 { color: #fff; margin-bottom: 18px; }
        .final-cta p { color: #F3E9EE; font-size: 18px; max-width: 820px; }
        .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
        .final-cta .btn-secondary { background: transparent; border-color: rgba(255,255,255,.42); color: #fff; }
        .final-cta .btn-secondary:hover { border-color: #fff; }
        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1.05fr) minmax(390px, .95fr); gap: 42px; }
          .proof-bar { grid-template-columns: repeat(3, 1fr); }
          .proof-item { padding: 24px 20px; border-bottom: 1px solid ${BORDER}; }
          .proof-item:nth-child(3n) { border-right: 0; }
          .proof-item:nth-last-child(-n+3) { border-bottom: 0; }
          .proof-item:first-child { padding-left: 20px; }
          .proof-item:last-child { padding-right: 20px; }
          .workflow-horizontal { grid-template-columns: repeat(3, 1fr); }
          .workflow-node:nth-child(3) { border-right: 0; }
          .workflow-node:nth-child(-n+3) { border-bottom: 1px solid rgba(255,255,255,.16); }
          .workflow-node:nth-child(4),
          .workflow-node:nth-child(5) { border-right: 1px solid rgba(255,255,255,.16); }
          .workflow-support { grid-template-columns: repeat(2, 1fr); }
          .related-row { grid-template-columns: 250px 1fr 190px; gap: 24px; }
        }
        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .hero { padding: 90px 0 82px; }
          .stepes-law-page h1 { font-size: 42px; }
          .stepes-law-page h2 { font-size: 32px; }
          .hero-grid,
          .overview-grid,
          .terminology-layout,
          .ediscovery-layout,
          .cta-inner { grid-template-columns: 1fr; }
          .hero-copy { max-width: 760px; text-align: center; margin: 0 auto; }
          .hero-copy .lead,
          .hero-copy .hero-note { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; margin-top: 38px; }
          .hero-art { margin: 22px auto 0; max-width: 610px; }
          .section-head.center-mobile,
          .section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
          .overview-copy .section-head,
          .scan-left .section-head { text-align: left; margin-left: 0; margin-right: 0; }
          .overview-copy .section-head + p,
          .overview-copy > p { text-align: left; }
          .matter-grid { grid-template-columns: 1fr; }
          .matter-item,
          .matter-item:nth-child(even) { padding: 28px 0; border-left: 0; }
          .icon-rows { grid-template-columns: 1fr; }
          .icon-row,
          .icon-row:nth-child(even) { padding: 26px 0; border-left: 0; }
          .level-row { grid-template-columns: 56px minmax(220px, .8fr) minmax(0, 1.2fr); gap: 20px; }
          .term-output { min-height: 300px; }
          .industry-grid,
          .security-matrix,
          .interpret-grid,
          .quality-grid { grid-template-columns: repeat(2, 1fr); }
          .security-cell,
          .security-cell:nth-child(3n) { border-right: 1px solid rgba(255,255,255,.13); border-bottom: 1px solid rgba(255,255,255,.13); }
          .security-cell:nth-child(even) { border-right: 0; }
          .security-cell:nth-last-child(-n+2) { border-bottom: 0; }
          .interpret-item,
          .interpret-item:not(:nth-child(3n+1)) { padding: 26px 24px 26px 0; border-left: 0; }
          .interpret-item:nth-child(even) { border-left: 1px solid ${BORDER}; padding-left: 24px; }
          .scale-band { grid-template-columns: repeat(2, 1fr); }
          .scale-item:nth-child(2) { border-right: 0; }
          .scale-item:nth-child(-n+2) { border-bottom: 1px solid ${BORDER}; }
          .process-row { grid-template-columns: 56px minmax(210px, .78fr) minmax(0, 1.22fr); gap: 22px; }
          .related-row { grid-template-columns: 220px 1fr; }
          .related-row .text-link { grid-column: 2; justify-self: start; text-align: left; }
          .cta-actions { justify-content: flex-start; }
        }
        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding-top: 68px; padding-bottom: 68px; }
          .section.dense { padding-top: 64px; padding-bottom: 64px; }
          .hero { padding: 76px 0 70px; }
          .stepes-law-page h1 { font-size: 38px; line-height: 1.08; }
          .stepes-law-page h2 { font-size: 30px; line-height: 1.16; }
          .stepes-law-page h3 { font-size: 20px; }
          .hero-copy .lead,
          .section-head .section-intro,
          .ediscovery-copy p,
          .final-cta p { font-size: 18px; }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            margin-top: 32px;
          }
          .btn { width: 100%; min-height: 50px; }
          .hero-art { margin-top: 28px; max-width: 520px; }
          .proof-bar { grid-template-columns: 1fr; }
          .proof-item,
          .proof-item:nth-child(3n),
          .proof-item:nth-last-child(-n+3) {
            padding: 20px 0;
            border-right: 0;
            border-bottom: 1px solid ${BORDER};
          }
          .proof-item:first-child,
          .proof-item:last-child { padding-left: 0; padding-right: 0; }
          .proof-item:last-child { border-bottom: 0; }
          .section-head {
            margin-bottom: 38px;
          }
          .section-head.center,
          .section-head.center-mobile,
          .mobile-center-head {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .scan-left,
          .scan-left .section-head,
          .scan-left.section-head { text-align: left !important; }
          .ecosystem { padding: 22px; border-radius: 24px; }
          .ecosystem-core { min-height: 108px; font-size: 22px; }
          .ecosystem-grid { grid-template-columns: repeat(2, 1fr); }
          .ecosystem-chip { min-height: 64px; font-size: 16px; }
          .matter-item,
          .matter-item:nth-child(even) { padding: 25px 0; }
          .workflow-panel { padding: 32px 20px; border-radius: 24px; margin-left: -4px; margin-right: -4px; }
          .workflow-horizontal { grid-template-columns: 1fr; border-top: 1px solid rgba(255,255,255,.18); }
          .workflow-node,
          .workflow-node:nth-child(3),
          .workflow-node:nth-child(4),
          .workflow-node:nth-child(5) {
            min-height: auto;
            padding: 22px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.16);
          }
          .workflow-node:last-child { border-bottom: 0; }
          .workflow-support { grid-template-columns: 1fr 1fr; }
          .workflow-support span { font-size: 16px; }
          .icon-row { grid-template-columns: 46px 1fr; gap: 14px; }
          .level-row,
          .process-row {
            grid-template-columns: 42px 1fr;
            gap: 14px;
          }
          .level-row h3,
          .process-row h3 { grid-column: 2; }
          .level-row p,
          .process-row p { grid-column: 2; }
          .term-row { grid-template-columns: 1fr; gap: 8px; padding: 20px 0; }
          .term-output { padding: 28px; border-radius: 24px; min-height: 0; }
          .term-output h3 { font-size: 24px; }
          .term-tags { gap: 8px; }
          .term-tags span { padding: 7px 10px; }
          .ediscovery-steps { padding: 4px 20px; border-radius: 24px; }
          .industry-grid,
          .security-matrix,
          .interpret-grid,
          .quality-grid,
          .scale-band,
          .language-list { grid-template-columns: 1fr; }
          .industry-item { padding: 24px; }
          .security-cell,
          .security-cell:nth-child(3n),
          .security-cell:nth-child(even),
          .security-cell:nth-last-child(-n+2) {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.13);
          }
          .security-cell:last-child { border-bottom: 0; }
          .security-footer { flex-direction: column; align-items: flex-start; }
          .interpret-item,
          .interpret-item:not(:nth-child(3n+1)),
          .interpret-item:nth-child(even) {
            padding: 24px 0;
            border-left: 0;
          }
          .scale-item,
          .scale-item:nth-child(2) {
            min-height: 0;
            padding: 26px;
            border-right: 0;
            border-bottom: 1px solid ${BORDER};
          }
          .scale-item:last-child { border-bottom: 0; }
          .role-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .language-row,
          .language-row:nth-child(even) {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 18px 0;
            border-left: 0;
          }
          .related-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 22px 0;
          }
          .related-row .text-link { grid-column: 1; justify-self: start; margin-top: 4px; }
          .audience-switch { flex-direction: column; align-items: flex-start; padding: 24px; gap: 14px; }
          .audience-switch .text-link { flex: none; }
          .faq-question { padding: 22px 20px; font-size: 17px; }
          .faq-answer { padding: 0 20px 22px 20px; }
          .final-cta { padding: 70px 0; }
          .cta-actions { flex-direction: column; width: 100%; }
        }
        @media (max-width: 360px) {
          .ecosystem-grid,
          .workflow-support { grid-template-columns: 1fr; }
          .workflow-panel { margin-left: 0; margin-right: 0; padding-left: 18px; padding-right: 18px; }
          .hero::after { display: none; }
        }
      `}</style>

      <section className="hero">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">For Law Firms</div>
              <h1>Translation Services for Law Firms</h1>
              <p className="lead">
                Support multilingual litigation, arbitration, investigations, transactions, eDiscovery, intellectual property, regulatory matters, and international client work with specialized legal linguists, subject-matter expertise, secure workflows, and the right combination of AI-enabled efficiency and professional human review.
              </p>
              <p className="hero-note">
                From one urgent document to complex matters spanning multiple languages and jurisdictions, Stepes helps law firms maintain accuracy, consistency, responsiveness, and control.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">Request a Quote</a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/#contact-form">Discuss Your Legal Matter</a>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </div>
      </section>

      <div className="proof-wrap">
        <div className="shell">
          <div className="proof-bar" aria-label="Law firm translation capabilities">
            {[
              ["ISO 17100", "Translation processes"],
              ["ISO 9001", "Quality management"],
              ["100+ Languages", "Global matter support"],
              ["Legal + Subject Expertise", "Specialized linguists"],
              ["Secure Workflows", "Confidential legal content"],
              ["AI + Human Review", "Fit-for-purpose translation"],
            ].map(([title, sub]) => (
              <div className="proof-item" key={title}>
                <div className="proof-title">{title}</div>
                <div className="proof-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <div className="overview-grid">
            <div className="overview-copy">
              <SectionHead
                align="left"
                title="Multilingual Legal Matters Require More Than Document Translation"
              />
              <p>
                Legal matters rarely stay confined to a single document, language, or workflow. A cross-border dispute may begin with foreign-language emails and contracts, expand into discovery and witness evidence, and later require professionally translated exhibits, expert reports, court documents, or interpreting for depositions and hearings.
              </p>
              <p>
                Each type of content can carry a different purpose, deadline, risk, and level of importance. Stepes helps law firms coordinate languages, documents, legal and technical expertise, terminology, deadlines, reviewer feedback, interpreting, and ongoing matter requirements without treating every request as an isolated translation project.
              </p>
            </div>
            <div className="ecosystem">
              <div className="ecosystem-core">One Multilingual Legal Matter</div>
              <div className="ecosystem-grid">
                {["Discovery", "Evidence", "Contracts", "Witnesses", "Experts", "Courts", "Transactions", "Regulators", "IP"].map((x) => (
                  <div className="ecosystem-chip" key={x}>{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHead
            title="Translation Across the Matters Law Firms Handle"
            intro="Stepes provides legal translation services for law firms across contentious, transactional, regulatory, intellectual-property, and corporate matters, scaling from a single time-sensitive document to complex multilingual matters."
          />
          <div className="matter-grid">
            {matterServices.map((item) => (
              <article className="matter-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowLink href={item.href}>{item.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="workflow-panel">
            <SectionHead
              dark
              eyebrow="Connected Matter Workflow"
              title="One Matter. Multiple Languages. One Coordinated Workflow."
              intro="As a legal matter evolves, Stepes can carry approved terminology, translation memory, reference documents, reviewer decisions, names, defined terms, and formatting conventions forward into new work."
            />
            <div className="workflow-horizontal">
              {["Assess", "Prioritize", "Translate", "Review", "Deliver", "Continue"].map((label, i) => (
                <div className="workflow-node" key={label}>
                  <span className="node-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{label}</h3>
                </div>
              ))}
            </div>
            <div className="workflow-support" aria-label="Coordinated matter elements">
              {["Files & Languages", "Legal + Subject Expertise", "Terminology & Reviewers", "Deadlines & Delivery"].map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section scan-left">
        <div className="shell">
          <SectionHead
            title="Translation Services Built Around How Law Firms Work"
            intro="Law firms need multilingual support that fits the way attorneys, paralegals, litigation teams, experts, clients, and other stakeholders actually work."
          />
          <div className="icon-rows">
            {builtFor.map(([title, text], i) => (
              <div className="icon-row" key={title}>
                <div className="icon-box">
                  <LineIcon type={["document", "clock", "people", "scale", "stack", "refresh"][i]} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush scan-left">
        <div className="shell">
          <SectionHead
            eyebrow="Fit-for-Purpose Translation"
            title="Match Translation Depth to How Each Document Will Be Used"
            intro="Not every foreign-language document in a legal matter requires the same translation process. Stepes helps law firms select a workflow based on intended use, importance, volume, subject matter, timeline, and quality requirements."
          />
          <div className="levels">
            {translationLevels.map((item) => (
              <div className="level-row" key={item.n}>
                <div className="level-n">{item.n}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <ArrowLink href="https://www.stepes.com/ai-enabled-legal-translation-services/">Explore AI-Enabled Legal Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section scan-left">
        <div className="shell">
          <SectionHead
            title="One Matter Vocabulary Across Every Document and Language"
            intro="Glossaries, translation memories, reference documents, and reviewer decisions create reusable matter-specific language assets that become more valuable as multilingual work continues."
          />
          <div className="terminology-layout">
            <div className="term-list">
              {terminologyItems.map(([title, text]) => (
                <div className="term-row" key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <aside className="term-output">
              <div className="eyebrow">Matter Language Assets</div>
              <h3>Keep Approved Language Working Across the Matter</h3>
              <p>
                Corrections or preferences approved early in the matter should not need to be rediscovered document by document.
              </p>
              <div className="term-tags">
                <span>Glossary</span>
                <span>Translation Memory</span>
                <span>Defined Terms</span>
                <span>Reviewer Decisions</span>
                <span>Reference Translations</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="ediscovery-layout">
            <div className="ediscovery-copy">
              <div className="eyebrow">Multilingual eDiscovery</div>
              <h2>Understand Large Foreign-Language Document Collections Without Translating Everything the Same Way</h2>
              <p>
                Discovery, investigations, and due diligence can produce large collections of foreign-language emails, attachments, contracts, presentations, spreadsheets, scanned records, correspondence, and other files.
              </p>
              <p>
                The challenge is often not simply translating the documents. It is determining what they say, which ones matter, and which require professional translation.
              </p>
              <ArrowLink href="https://www.stepes.com/ediscovery-translation-services/">Explore eDiscovery Translation Services</ArrowLink>
            </div>
            <div className="ediscovery-steps">
              {[
                ["Identify", "Determine the languages present and organize multilingual content for further processing."],
                ["Understand", "Use appropriate translation workflows to give legal teams faster access to the substance of foreign-language material."],
                ["Prioritize", "Focus attorney attention on records that warrant closer legal review."],
                ["Select", "Identify documents or passages requiring professional translation, specialist expertise, or additional quality controls."],
                ["Translate", "Prepare selected content using qualified linguists and matter terminology appropriate to its intended use."],
              ].map(([title, text], i) => (
                <div className="ediscovery-step" key={title}>
                  <div className="step-dot">{i + 1}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="Legal Translation Requires Understanding the Subject Behind the Law"
            intro="Stepes combines legal-linguistic expertise with subject-matter knowledge for complex legal content where technical meaning, industry terminology, and legal analysis intersect."
          />
          <div className="industry-grid">
            {industries.map(([title, text]) => (
              <article className="industry-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark scan-left">
        <div className="shell">
          <SectionHead
            dark
            title="Secure Translation for Confidential Legal Matters"
            intro="Law firms routinely work with commercially sensitive, personal, transaction-related, investigative, proprietary, and potentially privileged information. Multilingual workflows should provide appropriate controls throughout translation, review, and delivery."
          />
          <div className="security-matrix">
            {securityItems.map(([title, text], i) => (
              <div className="security-cell" key={title}>
                <div className="icon-box"><LineIcon type={["lock", "document", "people", "shield", "review", "send"][i]} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="security-footer">
            <p>Security requirements can vary by client, matter, and content type. Stepes works with law firms to align the translation workflow with applicable project requirements.</p>
            <ArrowLink href="https://www.stepes.com/security/">Explore Stepes Security</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="Legal Interpreting for Depositions, Hearings, Interviews, and Client Meetings"
            intro="Stepes provides professional interpreting for situations where attorneys, clients, witnesses, experts, and other participants need to communicate accurately across languages."
          />
          <div className="interpret-grid">
            {interpretingItems.map(([title, text]) => (
              <article className="interpret-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <ArrowLink href="https://www.stepes.com/interpretation-services/">Explore Interpreting Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell">
          <SectionHead
            eyebrow="Scalable Legal Support"
            title="From One Urgent Document to a Global Legal Translation Program"
            intro="Stepes provides a scalable model that can grow with the work, without forcing law firms to change providers as multilingual requirements become more complex."
          />
          <div className="scale-band">
            {[
              ["One Document", "Translate an urgent contract, filing, exhibit, certificate, expert report, or other legal document."],
              ["One Matter", "Coordinate terminology, translators, reviewers, deadlines, and multilingual content across an active case or transaction."],
              ["Multiple Matters", "Reuse approved language assets and standardized workflows across recurring work for a practice group or client."],
              ["Firm-Wide Programs", "Support multilingual operations across practice areas, offices, teams, and languages with reusable linguistic resources and enterprise workflows."],
            ].map(([title, text]) => (
              <div className="scale-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section scan-left">
        <div className="shell">
          <SectionHead
            eyebrow="Quality from Intake to Delivery"
            title="From Incoming File to Matter-Ready Translation"
            intro="A reliable legal translation process begins before the first sentence is translated. Stepes establishes the context, expertise, terminology, workflow, and quality controls needed for the intended use of the content."
          />
          <div className="process">
            {workflow.map(([title, text], i) => (
              <div className="process-row" key={title}>
                <div className="process-n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHead
            title="Quality Controls for High-Stakes Legal Content"
            intro="Legal translation quality involves more than fluent writing. Important details can appear in a defined term, limitation, date, cross-reference, technical phrase, exhibit label, or seemingly minor wording distinction."
          />
          <div className="quality-grid">
            {quality.map(([title, text]) => (
              <article className="quality-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section scan-left">
        <div className="shell">
          <SectionHead
            title="Multilingual Support for the People Who Keep Legal Matters Moving"
            intro="Translation requests can originate throughout a law firm. Stepes supports the teams involved in sourcing, reviewing, coordinating, and using multilingual legal content."
          />
          <div className="role-rows">
            {roles.map(([title, text]) => (
              <div className="role-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft scan-left">
        <div className="shell">
          <SectionHead
            title="100+ Languages for International Legal Matters"
            intro="Cross-border disputes, transactions, investigations, intellectual-property portfolios, and international client work can bring documents and participants from many jurisdictions into the same legal matter."
          />
          <div className="language-list">
            {languageRows.map(([lang, text]) => (
              <div className="language-row" key={lang}>
                <strong>{lang}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26, textAlign: "center" }}>
            <ArrowLink href="https://www.stepes.com/languages/">Explore All Languages</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section scan-left">
        <div className="shell">
          <SectionHead
            title="More Ways Stepes Supports Multilingual Legal Work"
            intro="Explore specialized legal translation services for the matter types, document sets, and quality requirements most relevant to your work."
          />
          <div className="related-list">
            {related.map(([title, text, href]) => (
              <div className="related-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowLink href={href}>Explore {title.replace(" Services", "")}</ArrowLink>
              </div>
            ))}
          </div>
          <div className="audience-switch">
            <div>
              <strong>Looking for support for an in-house legal department?</strong>
              <p>Explore Stepes solutions for corporate legal teams managing contracts, compliance, governance, investigations, privacy, and recurring enterprise legal content.</p>
            </div>
            <ArrowLink href="https://www.stepes.com/solutions/legal-teams/">Explore Solutions for Corporate Legal Teams</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section soft scan-left">
        <div className="shell">
          <SectionHead
            align="left"
            eyebrow="Law Firm Translation FAQ"
            title="Frequently Asked Questions"
            intro="Answers to common questions about legal translation workflows, large multilingual matters, terminology, AI, certified translation, interpreting, and confidential content."
          />
          <div className="faq-panel">
            {faqs.map((item, i) => (
              <FAQItem
                key={item[0]}
                item={item}
                index={i}
                open={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-inner">
            <div>
              <h2>Need Translation Support for a Multilingual Legal Matter?</h2>
              <p>
                Whether you need one urgent legal document, translation support for major litigation or arbitration, multilingual due diligence, large-scale document review, specialized patent translation, or an ongoing language program for your firm, Stepes can help you select the right workflow, expertise, and quality controls.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">Request a Quote</a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/#contact-form">Discuss Your Legal Matter</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
