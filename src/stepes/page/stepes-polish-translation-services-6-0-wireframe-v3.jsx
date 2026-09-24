import React, { useState } from "react";

const STE = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushDark: "#F2A7C6",
  ink: "#252128",
  text: "#4E4852",
  muted: "#716A74",
  line: "#E8E2E6",
  soft: "#F8F6F7",
  white: "#FFFFFF",
  dark: "#241E24",
};

const serviceItems = [
  {
    icon: "document",
    title: "Polish Document Translation",
    text: "Translate reports, manuals, contracts, policies, presentations, and structured business documents while preserving terminology, formatting, and document usability.",
    link: "https://www.stepes.com/polish-document-translation-services/",
    label: "Polish Document Translation",
  },
  {
    icon: "technical",
    title: "Polish Technical Translation",
    text: "Support engineering, manufacturing, service, installation, and product documentation with linguists selected for the relevant technical subject matter.",
    link: "https://www.stepes.com/technical-translation-services/",
    label: "Technical Translation Services",
  },
  {
    icon: "web",
    title: "Polish Website Localization",
    text: "Localize websites, landing pages, product content, metadata, forms, and digital journeys for Polish-speaking customers and search audiences.",
    link: "https://www.stepes.com/website-translation-services/",
    label: "Website Translation Services",
  },
  {
    icon: "software",
    title: "Polish Software & App Localization",
    text: "Translate UI strings, notifications, SaaS experiences, mobile applications, help content, and product resources with context-aware linguistic review.",
    link: "https://www.stepes.com/software-localization-services/",
    label: "Software Localization Services",
  },
  {
    icon: "medical",
    title: "Polish Medical & Regulatory Translation",
    text: "Translate medical, clinical, regulatory, labeling, and patient-facing content through workflows matched to intended use, risk, and review requirements.",
    link: "https://www.stepes.com/medical-translation-services/",
    label: "Medical Translation Services",
  },
  {
    icon: "legal",
    title: "Polish Legal & Compliance Translation",
    text: "Support contracts, policies, corporate legal content, compliance communications, and regulated documentation with controlled terminology and review.",
    link: "https://www.stepes.com/legal-translation-services/",
    label: "Legal Translation Services",
  },
  {
    icon: "learning",
    title: "Polish eLearning & Training Translation",
    text: "Localize training courses, onboarding, compliance learning, presentations, assessments, narration, and LMS-ready content for Polish-speaking learners.",
    link: "https://www.stepes.com/elearning-training-translation-services/",
    label: "eLearning Translation Services",
  },
  {
    icon: "layout",
    title: "Polish Multimedia & Desktop Publishing",
    text: "Prepare brochures, presentations, graphics, PDFs, subtitles, and publication-ready layouts with the typography and production checks Polish content requires.",
    link: "https://www.stepes.com/multilingual-desktop-publishing/",
    label: "Multilingual Desktop Publishing",
  },
];

const complexityItems = [
  {
    title: "Cases and Inflection",
    text: "Polish changes nouns, adjectives, pronouns, and other forms according to grammatical context. Accurate translation therefore depends on the complete sentence, not isolated word substitution.",
  },
  {
    title: "Gender and Agreement",
    text: "Grammatical gender affects surrounding words and can create ambiguity when software strings or content fragments are translated without enough context.",
  },
  {
    title: "Plural Forms and Numerals",
    text: "Polish uses more complex plural behavior than English. Counters, quantities, shopping carts, dashboards, notifications, and dynamic messages need locale-aware language logic.",
  },
  {
    title: "Formal and Informal Address",
    text: "Choices such as Pan, Pani, Państwo, and informal forms shape tone in B2B communication, HR content, customer support, marketing, and user experiences.",
  },
  {
    title: "Diacritics and Typography",
    text: "Characters such as ą, ć, ę, ł, ń, ó, ś, ź, and ż require reliable font support, encoding, search behavior, document production, graphics, and software rendering.",
  },
  {
    title: "Context and Interface Constraints",
    text: "Polish word order, phrase length, grammatical dependencies, and UI fit can differ substantially from English, making screenshots, context, and in-product review especially valuable.",
  },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Engineering",
    text: "Manuals, SOPs, specifications, service instructions, safety content, production documentation, and supplier communications for Polish operations and customers.",
    link: "https://www.stepes.com/manufacturing-translation-services/",
    label: "Manufacturing Translation Services",
  },
  {
    icon: "car",
    title: "Automotive & Mobility",
    text: "Owner and service documentation, HMI strings, diagnostic content, dealer training, product software, supplier materials, and regulatory communications.",
    link: "https://www.stepes.com/automotive-translation-services/",
    label: "Automotive Translation Services",
  },
  {
    icon: "device",
    title: "Medical Devices & Life Sciences",
    text: "IFUs, labeling, software, technical files, clinical and regulatory content, training, and patient information with risk-appropriate linguistic controls.",
    link: "https://www.stepes.com/medical-device-translation-services/",
    label: "Medical Device Translation Services",
  },
  {
    icon: "code",
    title: "Software & Technology",
    text: "Applications, SaaS, mobile interfaces, resource files, documentation, help centers, release content, and customer-facing digital experiences.",
    link: "https://www.stepes.com/software-localization-services/",
    label: "Software Localization Services",
  },
  {
    icon: "scale",
    title: "Legal & Compliance",
    text: "Agreements, policies, governance documentation, regulatory content, corporate materials, investigations, and compliance learning for cross-border business.",
    link: "https://www.stepes.com/legal-translation-services/",
    label: "Legal Translation Services",
  },
  {
    icon: "finance",
    title: "Financial Services",
    text: "Reports, banking and fintech content, policies, disclosures, investment communications, customer materials, and regulated financial documentation.",
    link: "https://www.stepes.com/financial-translation-services/",
    label: "Financial Translation Services",
  },
  {
    icon: "energy",
    title: "Energy, Chemicals & Advanced Materials",
    text: "Operating procedures, safety content, technical datasheets, product specifications, training, quality documentation, and field-service materials.",
    link: "https://www.stepes.com/chemical-translation-services/",
    label: "Chemical & Materials Translation Services",
  },
  {
    icon: "retail",
    title: "Retail & E-commerce",
    text: "Product listings, catalogs, packaging content, websites, applications, promotions, support content, and continuously changing commerce experiences.",
    link: "https://www.stepes.com/retail-ecommerce-translation-services/",
    label: "Retail & E-commerce Translation Services",
  },
];

const enterpriseItems = [
  {
    icon: "manage",
    title: "Enterprise Translation Management",
    text: "Centralize requests, files, language assets, deadlines, reviews, approvals, and delivery across recurring Polish translation programs.",
    link: "https://www.stepes.com/enterprise-translation-management/",
    label: "Enterprise Translation Management",
  },
  {
    icon: "api",
    title: "Translation API",
    text: "Connect applications, repositories, content platforms, and enterprise systems to repeatable translation workflows for structured and recurring content.",
    link: "https://www.stepes.com/developers/translation-api/",
    label: "Translation API",
  },
  {
    icon: "review",
    title: "Customer Review & Approval",
    text: "Bring product owners, subject-matter experts, and in-country reviewers into a controlled review path so approved feedback can strengthen future work.",
    link: "https://www.stepes.com/translation-management-portal/",
    label: "Customer Translation Portal",
  },
  {
    icon: "continuous",
    title: "Continuous Translation",
    text: "Support rolling content updates, new releases, and recurring Polish localization without rebuilding the workflow for every project cycle.",
    link: "https://www.stepes.com/continuous-translation/",
    label: "Continuous Translation",
  },
];

const qualitySteps = [
  ["Assess", "Confirm audience, intended use, content risk, file requirements, references, deadlines, and review expectations."],
  ["Match", "Assign qualified Polish linguists and reviewers according to language direction, industry, content type, and project requirements."],
  ["Prepare", "Apply approved terminology, translation memory, style guidance, product references, and customer instructions before production begins."],
  ["Translate", "Use the agreed professional, AI-assisted, or hybrid workflow while preserving meaning, tone, terminology, variables, and formatting requirements."],
  ["Review", "Validate accuracy, grammar, terminology, consistency, tone, completeness, and audience fit at the level defined for the project."],
  ["Validate", "Run automated checks plus final-format or in-context QA for numbers, tags, formatting, Polish characters, layout, and interface constraints."],
  ["Reuse", "Incorporate approved feedback and retain validated terminology and translation memory so future Polish content starts from stronger language assets."],
];

const faqItems = [
  {
    q: "Do you translate from English to Polish?",
    a: "Yes. Stepes translates English content into Polish for technical documentation, websites, software, medical and regulatory content, legal materials, training, marketing, and other business uses. The workflow is configured around the subject matter, audience, intended use, file format, and review requirements.",
  },
  {
    q: "Do you translate Polish into English?",
    a: "Yes. Stepes supports Polish-to-English translation for technical, engineering, scientific, legal, financial, corporate, supplier, and customer-facing content. Linguists are selected for the target language and subject matter so the English output reads naturally while preserving the Polish source meaning.",
  },
  {
    q: "What is the difference between Polish translation and Polish localization?",
    a: "Translation transfers meaning from one language to another. Localization adapts the wider experience for the target market, including terminology, tone, formats, interface constraints, dates, numbers, layout, customer expectations, and other locale-specific requirements. Digital products often need both.",
  },
  {
    q: "Why is Polish challenging for software localization?",
    a: "Polish is highly inflected and uses grammatical gender, multiple plural patterns, flexible word order, and context-dependent forms. Isolated interface strings can therefore be ambiguous. Screenshots, string descriptions, protected variables, character constraints, and in-context QA help translators make accurate choices.",
  },
  {
    q: "Can Stepes translate Polish technical manuals and structured documentation?",
    a: "Yes. Stepes supports manuals, specifications, service content, installation instructions, DITA, XML, FrameMaker, Microsoft Office files, PDFs, and other technical formats. Translation memory, terminology, file engineering, linguistic review, and multilingual publishing can be combined according to the project.",
  },
  {
    q: "Do you provide Polish medical and regulatory translation?",
    a: "Yes. Stepes supports medical, medical-device, clinical, regulatory, labeling, training, and patient-facing content. The translation and review process is configured around the content's intended use, subject matter, target market, quality requirements, and applicable customer or regulatory controls.",
  },
  {
    q: "Can AI be used for Polish translation?",
    a: "Yes, when it is appropriate for the content. Lower-risk or high-volume material may use AI translation, while customer-facing, technical, medical, legal, regulatory, or brand-sensitive content may require professional human translation, post-editing, independent review, or additional QA. Stepes matches the workflow to purpose and risk rather than applying one method to every project.",
  },
  {
    q: "Can our Polish team review the translation?",
    a: "Yes. Customer reviewers, product owners, subject-matter experts, and in-country teams can be included in the review and approval process. Approved feedback can be incorporated into terminology, translation memory, and project guidance so future work remains aligned with your organization.",
  },
  {
    q: "Do you provide certified Polish translation?",
    a: "Stepes can support certification requirements for Polish translations, but the appropriate certification format depends on the receiving institution, jurisdiction, document type, and intended use. Share those requirements with our team so the translation and certification workflow can be configured correctly.",
  },
  {
    q: "How much does Polish translation cost and how long does it take?",
    a: "Pricing and turnaround depend on language direction, word volume, subject matter, content risk, translation memory leverage, file format, review depth, production requirements, and urgency. Stepes can support standard, expedited, phased, rolling, and continuous delivery models after reviewing the project scope.",
  },
];

function Icon({ name, size = 22 }) {
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
  const icons = {
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h6M9 16h6"/></>,
    technical: <><path d="M4 19l5-5"/><path d="M14.5 4.5l5 5-9.8 9.8a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8z"/><path d="M12 7l5 5"/></>,
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><path d="M9 12l-2 2 2 2M15 12l2 2-2 2"/></>,
    medical: <><path d="M9 3h6v5h5v6h-5v5H9v-5H4V8h5z"/></>,
    legal: <><path d="M12 3v18M5 6h14M7 6l-3 6h6zM17 6l-3 6h6zM8 21h8"/></>,
    learning: <><path d="M3 5h8a3 3 0 0 1 3 3v11H6a3 3 0 0 0-3 3z"/><path d="M21 5h-8a3 3 0 0 0-3 3v11h8a3 3 0 0 1 3 3z"/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M8 10h13M12 14h5M12 17h4"/></>,
    factory: <><path d="M3 21V10l6 3V9l6 3V6l6 3v12z"/><path d="M7 17h2M12 17h2M17 17h2"/></>,
    car: <><path d="M5 16h14l-1-5-2-3H8l-2 3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/><path d="M3 13h2M19 13h2"/></>,
    device: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M10 17h4"/></>,
    code: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>,
    scale: <><path d="M12 3v18M6 6h12M7 6l-3 6h6zM17 6l-3 6h6zM8 21h8"/></>,
    finance: <><path d="M4 20h16M6 17V9M10 17V5M14 17v-6M18 17V7"/></>,
    energy: <><path d="M13 2L5 14h6l-1 8 9-13h-6z"/></>,
    retail: <><path d="M4 9l2-5h12l2 5"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/><path d="M3 9h18"/></>,
    manage: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></>,
    api: <><path d="M8 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3M16 7h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3"/><path d="M9 12h6"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></>,
    review: <><path d="M5 4h14v12H9l-4 4z"/><path d="M9 9l2 2 4-4"/></>,
    continuous: <><path d="M20 7h-5V2"/><path d="M20 7a8 8 0 1 0 1 7"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <><path d="M5 12l4 4L19 6"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    translate: <><path d="M4 5h9M8 3v2M6 5c.5 4 2.4 7 6 9M11 5c-.4 3.4-2.3 6.1-6 8"/><path d="M14 20l3-8 3 8M15 17h4"/></>,
  };
  return <svg {...common}>{icons[name] || icons.document}</svg>;
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={inverse ? "editorial-link inverse" : "editorial-link"} href={href}>
      <span>{children}</span><Icon name="arrow" size={16} />
    </a>
  );
}

function SectionHead({ eyebrow = null, title, intro = null, align = "center", dark = false, id }) {
  return (
    <div className={`section-head ${align === "left" ? "left" : "center"} ${dark ? "dark" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function PolishHeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="presentation">
        <defs>
          <linearGradient id="softPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F7F2F5" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#3A3239" floodOpacity="0.10" />
          </filter>
        </defs>
        <rect x="86" y="61" width="440" height="354" rx="30" fill="url(#softPanel)" stroke="#D7D0D5" filter="url(#softShadow)" />
        <rect x="122" y="98" width="146" height="44" rx="22" fill="#FDF2F7" stroke="#E8CAD8" />
        <text x="146" y="126" fontSize="16" fontWeight="600" fill="#8B315A" fontFamily="Arial, sans-serif">ENGLISH · EN</text>
        <rect x="355" y="98" width="134" height="44" rx="22" fill="#F5F3F4" stroke="#DAD4D8" />
        <text x="379" y="126" fontSize="16" fontWeight="600" fill="#4B454C" fontFamily="Arial, sans-serif">POLSKI · PL</text>
        <path d="M279 120h62" stroke="#5B545A" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M329 111l12 9-12 9" stroke="#C11D63" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M291 111l-12 9 12 9" stroke="#777078" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="122" y="174" width="172" height="176" rx="20" fill="#FFFFFF" stroke="#D9D3D7" />
        <path d="M153 206h62M153 225h108M153 244h96M153 263h78" stroke="#777078" strokeWidth="6" strokeLinecap="round" opacity=".55" />
        <rect x="151" y="292" width="114" height="30" rx="8" fill="#FDF2F7" />
        <text x="165" y="312" fontSize="14" fontWeight="600" fill="#9F1D55" fontFamily="Arial, sans-serif">Technical manual</text>

        <rect x="325" y="174" width="164" height="176" rx="20" fill="#2C272D" stroke="#494148" />
        <rect x="347" y="198" width="120" height="16" rx="8" fill="#5B535A" />
        <rect x="347" y="228" width="92" height="12" rx="6" fill="#777078" />
        <rect x="347" y="250" width="110" height="12" rx="6" fill="#777078" />
        <rect x="347" y="287" width="94" height="34" rx="17" fill="#C11D63" />
        <text x="366" y="309" fontSize="14" fontWeight="600" fill="#FFFFFF" fontFamily="Arial, sans-serif">Zatwierdź</text>

        <circle cx="105" cy="386" r="49" fill="#FFFFFF" stroke="#D8D1D5" />
        <text x="78" y="395" fontSize="30" fontWeight="600" fill="#4D464D" fontFamily="Arial, sans-serif">ą ł ż</text>
        <circle cx="508" cy="391" r="56" fill="#7A1542" />
        <path d="M485 391l15 15 31-34" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="465" y="470" fontSize="14" fontWeight="600" fill="#706970" fontFamily="Arial, sans-serif">TERMINOLOGY · REVIEW · QA</text>
        <path d="M206 391h230" stroke="#C9C2C7" strokeWidth="2" strokeDasharray="6 7" />
        <circle cx="241" cy="391" r="7" fill="#C11D63" />
        <circle cx="321" cy="391" r="7" fill="#8A838A" />
        <circle cx="401" cy="391" r="7" fill="#8A838A" />
      </svg>
    </div>
  );
}

function PolishTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: ${STE.magenta};
          --magenta-dark: ${STE.magentaDark};
          --burgundy: ${STE.burgundy};
          --blush: ${STE.blush};
          --blush-dark: ${STE.blushDark};
          --ink: ${STE.ink};
          --text: ${STE.text};
          --muted: ${STE.muted};
          --line: ${STE.line};
          --soft: ${STE.soft};
          --white: ${STE.white};
          --dark: ${STE.dark};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background: #fff;
          font-size: 16px;
          line-height: 1.62;
          overflow-x: hidden;
        }
        .stepes-page a { text-decoration: none; }
        .shell { max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section.soft { background: var(--soft); }
        .section.blush { background: var(--blush); }
        .section.dark { background: var(--dark); color: #f8f5f7; }
        .section-head { margin-bottom: 50px; }
        .section-head.center { text-align: center; max-width: 840px; margin-left: auto; margin-right: auto; }
        .section-head.left { text-align: left; max-width: 760px; }
        .section-head h2 {
          margin: 0;
          color: var(--ink);
          font-size: 36px;
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .section-head.dark h2 { color: #fff; }
        .section-intro {
          margin: 18px auto 0;
          max-width: 790px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.62;
          font-weight: 400;
        }
        .section-head.left .section-intro { margin-left: 0; }
        .section-head.dark .section-intro { color: #d9d1d6; }
        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.25;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .dark .eyebrow, .section-head.dark .eyebrow { color: var(--blush-dark); }

        h1, h2, h3, p { overflow-wrap: anywhere; }
        h3 { color: var(--ink); font-size: 24px; line-height: 1.25; font-weight: 600; margin: 0; }
        p { margin: 0; }

        .hero { padding: 104px 0 82px; background: linear-gradient(180deg, #fff 0%, #fcfafb 100%); }
        .hero-grid { display: grid; grid-template-columns: 1.04fr .96fr; gap: 72px; align-items: center; }
        .hero-copy { max-width: 650px; }
        .hero h1 {
          margin: 0;
          color: var(--ink);
          font-size: 48px;
          line-height: 1.04;
          letter-spacing: -0.035em;
          font-weight: 600;
          max-width: 650px;
        }
        .hero-lead {
          margin-top: 24px;
          font-size: 18px;
          line-height: 1.65;
          max-width: 650px;
          color: var(--text);
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        .btn {
          display: inline-flex;
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }
        .btn-primary svg,
        .btn-primary:visited svg,
        .btn-primary:hover svg,
        .btn-primary:focus svg { stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193,29,99,.16); }
        .btn-secondary { background: #fff; color: var(--ink); border-color: #d9d2d7; }
        .btn-secondary:hover { border-color: #b9b0b6; transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }

        .hero-art { width: 100%; min-width: 0; }
        .hero-art svg { width: 100%; height: auto; display: block; }

        .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .proof-item { padding: 23px 18px; text-align: center; position: relative; }
        .proof-item:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 20%; height: 60%; width: 1px; background: var(--line); }
        .proof-title { color: var(--ink); font-size: 16px; line-height: 1.35; font-weight: 600; }

        .market-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
        .locale-panel { border-radius: 30px; background: var(--soft); border: 1px solid var(--line); padding: 32px; }
        .locale-mark { width: 68px; height: 68px; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: var(--magenta); background: #fff; border: 1px solid #eadfe4; margin-bottom: 24px; }
        .locale-title { color: var(--ink); font-size: 24px; font-weight: 600; margin-bottom: 18px; }
        .locale-list { margin: 0; padding: 0; list-style: none; }
        .locale-list li { display: grid; grid-template-columns: 118px 1fr; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line); font-size: 16px; }
        .locale-list strong { color: var(--ink); font-weight: 600; }
        .market-content h2 { font-size: 36px; color: var(--ink); line-height: 1.12; letter-spacing: -0.025em; font-weight: 600; margin: 0 0 22px; }
        .market-content > p { font-size: 18px; line-height: 1.65; max-width: 760px; }
        .localization-points { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 34px; margin-top: 34px; border-top: 1px solid var(--line); }
        .localization-point { padding: 22px 0; border-bottom: 1px solid var(--line); }
        .localization-point strong { display: block; font-size: 18px; line-height: 1.3; color: var(--ink); font-weight: 600; margin-bottom: 6px; }
        .localization-point span { display: block; font-size: 16px; line-height: 1.55; }

        .services-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; }
        .services-footer-link { text-align: center; margin-top: 34px; }
        .services-footer-link .editorial-link { margin-top: 0; }
        .service-card { border: 1px solid var(--line); border-radius: 24px; padding: 28px; background: #fff; display: flex; flex-direction: column; min-height: 322px; }
        .icon-box { width: 46px; height: 46px; border-radius: 14px; background: var(--blush); color: var(--magenta); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
        .service-card h3 { font-size: 21px; margin-bottom: 12px; }
        .service-card p { font-size: 16px; line-height: 1.58; flex: 1; }
        .editorial-link { display: inline-flex; align-items: center; gap: 7px; color: var(--magenta); text-decoration: none; font-weight: 600; font-size: 16px; line-height: 1.35; margin-top: 20px; align-self: flex-start; }
        .editorial-link svg { flex: 0 0 auto; transition: transform .18s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .editorial-link.inverse { color: #f4c2d7; }

        .direction-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border: 1px solid var(--line); border-radius: 30px; overflow: hidden; background: #fff; }
        .direction-col { padding: 40px; }
        .direction-col + .direction-col { border-left: 1px solid var(--line); }
        .direction-label { font-size: 14px; line-height: 1.2; font-weight: 600; color: var(--magenta); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 14px; }
        .direction-col h3 { font-size: 28px; margin-bottom: 14px; }
        .direction-col > p { font-size: 17px; line-height: 1.6; margin-bottom: 26px; }
        .clean-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .clean-list li { display: grid; grid-template-columns: 18px 1fr; gap: 11px; font-size: 16px; line-height: 1.5; }
        .clean-list .marker { color: var(--magenta); padding-top: 2px; }

        .complexity-wrap { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; align-items: start; }
        .complexity-intro { position: sticky; top: 32px; }
        .complexity-intro h2 { color: #fff; font-size: 36px; line-height: 1.12; letter-spacing: -0.025em; margin: 0 0 20px; font-weight: 600; }
        .complexity-intro p { font-size: 18px; line-height: 1.65; color: #d7cfd4; }
        .alphabet { margin-top: 30px; color: #fff; font-size: 31px; line-height: 1.35; letter-spacing: .08em; font-weight: 600; }
        .complexity-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid #4b4148; }
        .complexity-item { padding: 26px 26px 28px 0; border-bottom: 1px solid #4b4148; }
        .complexity-item:nth-child(even) { padding-left: 28px; border-left: 1px solid #4b4148; }
        .complexity-item h3 { color: #fff; font-size: 21px; margin-bottom: 10px; }
        .complexity-item p { color: #d5cdd2; font-size: 16px; line-height: 1.6; }

        .industry-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 46px; border-top: 1px solid var(--line); }
        .industry-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .industry-icon { width: 42px; height: 42px; border-radius: 13px; background: #f7f3f5; display: flex; align-items: center; justify-content: center; color: #675e65; }
        .industry-row h3 { font-size: 20px; margin-bottom: 8px; }
        .industry-row p { font-size: 16px; line-height: 1.58; }
        .industry-row .editorial-link { margin-top: 12px; }

        .document-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 66px; align-items: center; }
        .document-copy h2 { font-size: 36px; line-height: 1.12; letter-spacing: -0.025em; color: var(--ink); margin: 0 0 20px; font-weight: 600; }
        .document-copy > p { font-size: 18px; line-height: 1.65; max-width: 680px; }
        .document-types { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .type-chip { border: 1px solid var(--line); border-radius: 999px; background: #fff; color: var(--ink); padding: 8px 13px; font-size: 16px; line-height: 1.3; font-weight: 600; }
        .doc-visual { min-height: 420px; border-radius: 30px; background: #fff; border: 1px solid var(--line); padding: 34px; position: relative; overflow: hidden; }
        .doc-sheet { width: 78%; height: 318px; border: 1px solid #d9d3d7; border-radius: 18px; background: #fff; box-shadow: 0 18px 44px rgba(53,44,50,.09); padding: 28px; position: absolute; left: 44px; top: 46px; }
        .doc-sheet.back { left: 96px; top: 72px; background: #f8f5f7; transform: rotate(3deg); }
        .doc-sheet.front { z-index: 2; }
        .doc-line { height: 7px; background: #b8b1b7; opacity: .65; border-radius: 999px; margin-bottom: 12px; }
        .doc-line.short { width: 56%; }
        .doc-line.medium { width: 78%; }
        .doc-callout { margin-top: 27px; border-left: 3px solid var(--magenta); padding: 14px 16px; background: var(--blush); color: #5e5057; font-size: 16px; line-height: 1.5; }
        .doc-badge { position: absolute; right: 28px; bottom: 28px; z-index: 4; width: 112px; height: 112px; border-radius: 50%; background: var(--burgundy); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-size: 14px; line-height: 1.25; font-weight: 600; }
        .doc-badge span { font-size: 26px; line-height: 1; margin-bottom: 6px; }

        .assets-panel { border-radius: 30px; border: 1px solid var(--line); overflow: hidden; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); background: #fff; }
        .asset-col { padding: 40px; }
        .asset-col + .asset-col { border-left: 1px solid var(--line); }
        .asset-col h3 { font-size: 27px; margin-bottom: 14px; }
        .asset-col > p { font-size: 17px; line-height: 1.62; }
        .asset-tags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .asset-tag { background: var(--soft); border: 1px solid var(--line); border-radius: 10px; padding: 9px 11px; color: #5e565d; font-size: 16px; line-height: 1.3; font-weight: 600; }
        .term-demo { margin-top: 28px; border-radius: 18px; background: var(--soft); border: 1px solid var(--line); padding: 18px; }
        .term-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; align-items: center; font-size: 16px; }
        .term-box { background: #fff; border: 1px solid var(--line); border-radius: 11px; padding: 12px; color: var(--ink); font-weight: 600; }
        .term-arrow { color: var(--magenta); }
        .term-note { font-size: 16px; color: var(--muted); margin-top: 12px; line-height: 1.5; }
        .tm-stack { margin-top: 28px; display: grid; gap: 10px; }
        .tm-segment { border: 1px solid var(--line); border-radius: 13px; background: #fff; padding: 13px 15px; display: flex; justify-content: space-between; gap: 18px; font-size: 16px; }
        .tm-segment strong { color: var(--ink); font-weight: 600; }
        .tm-match { color: var(--magenta); font-weight: 600; white-space: nowrap; }

        .workflow { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .workflow-step { padding: 32px 28px; position: relative; }
        .workflow-step + .workflow-step { border-left: 1px solid var(--line); }
        .workflow-step h3 { font-size: 21px; margin-bottom: 10px; }
        .workflow-step p { font-size: 16px; line-height: 1.58; }
        .workflow-link { text-align: center; margin-top: 34px; }

        .enterprise-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 50px; border-top: 1px solid #51464d; }
        .enterprise-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid #51464d; }
        .enterprise-row .industry-icon { background: #312a30; border: 1px solid #4f444c; color: #f2a7c6; }
        .enterprise-row h3 { color: #fff; font-size: 20px; margin-bottom: 8px; }
        .enterprise-row p { color: #d6cfd4; font-size: 16px; line-height: 1.58; }
        .enterprise-row .editorial-link { margin-top: 12px; }

        .quality-grid { display: grid; grid-template-columns: 290px 1fr; gap: 56px; align-items: start; }
        .quality-side h2 { color: var(--ink); font-size: 36px; line-height: 1.12; letter-spacing: -0.025em; font-weight: 600; margin: 0 0 18px; }
        .quality-side p { font-size: 17px; line-height: 1.62; }
        .quality-side .editorial-link { margin-top: 22px; }
        .quality-steps { border-top: 1px solid var(--line); }
        .quality-row { display: grid; grid-template-columns: 56px 124px 1fr; gap: 18px; padding: 23px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .quality-number { width: 34px; height: 34px; border-radius: 50%; background: var(--blush); color: var(--magenta); display: flex; align-items: center; justify-content: center; font-size: 14px; line-height: 1; font-weight: 600; margin-top: 1px; }
        .quality-label { color: var(--ink); font-size: 18px; line-height: 1.4; font-weight: 600; }
        .quality-row p { font-size: 16px; line-height: 1.58; }

        .why-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .why-item { padding: 30px 24px; }
        .why-item + .why-item { border-left: 1px solid var(--line); }
        .why-item h3 { font-size: 19px; margin-bottom: 9px; }
        .why-item p { font-size: 16px; line-height: 1.55; }

        .commercial-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px; }
        .commercial-panel { border: 1px solid var(--line); border-radius: 28px; background: #fff; padding: 36px; }
        .commercial-panel h3 { font-size: 27px; margin-bottom: 14px; }
        .commercial-panel > p { font-size: 17px; line-height: 1.62; margin-bottom: 22px; }
        .factor-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 11px 20px; }
        .factor { display: grid; grid-template-columns: 17px 1fr; gap: 9px; font-size: 16px; line-height: 1.45; }
        .factor svg { color: var(--magenta); margin-top: 2px; }

        .faq-panel { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-button { width: 100%; border: 0; background: transparent; padding: 24px 0; display: grid; grid-template-columns: 1fr 32px; gap: 20px; text-align: left; cursor: pointer; color: var(--ink); font-family: inherit; font-size: 18px; line-height: 1.45; font-weight: 600; align-items: center; }
        .faq-toggle { width: 30px; height: 30px; border-radius: 50%; border: 1px solid #d7d0d5; display: flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 20px; line-height: 1; font-weight: 400; }
        .faq-answer { padding: 0 62px 24px 0; font-size: 16px; line-height: 1.65; max-width: 840px; }

        .final-cta { background: var(--burgundy); color: #fff; padding: 86px 0; }
        .cta-inner { text-align: center; max-width: 850px; margin: 0 auto; }
        .final-cta h2 { color: #fff; font-size: 38px; line-height: 1.12; letter-spacing: -0.025em; font-weight: 600; margin: 0; }
        .final-cta p { margin: 18px auto 0; max-width: 760px; color: #f3e7ed; font-size: 18px; line-height: 1.62; }
        .final-cta .hero-actions { justify-content: center; }
        .final-cta .btn-primary,
        .final-cta .btn-primary:link,
        .final-cta .btn-primary:visited,
        .final-cta .btn-primary:hover,
        .final-cta .btn-primary:focus { background: #fff; color: var(--burgundy) !important; }
        .final-cta .btn-primary svg { stroke: var(--burgundy) !important; }
        .final-cta .btn-secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,.42); }
        .final-cta .btn-secondary:hover { border-color: #fff; }

        @media (max-width: 1280px) {
          .shell { padding-left: 40px; padding-right: 40px; }
        }
        @media (max-width: 1024px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .hero { padding: 92px 0 76px; }
          .services-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .hero-grid { gap: 44px; }
          .hero h1 { font-size: 42px; }
          .section { padding: 88px 0; }
          .section.dense { padding: 76px 0; }
          .section-head h2, .market-content h2, .complexity-intro h2, .document-copy h2, .quality-side h2 { font-size: 32px; }
          .market-grid, .complexity-wrap, .document-grid { gap: 42px; }
          .workflow { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .workflow-step:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .workflow-step:nth-child(4) { border-top: 1px solid var(--line); }
          .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .why-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .why-item:nth-child(4) { border-top: 1px solid var(--line); }
          .quality-grid { grid-template-columns: 250px 1fr; gap: 38px; }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { text-align: center; margin: 0 auto; }
          .hero h1 { margin-left: auto; margin-right: auto; }
          .hero-lead { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-art { max-width: 620px; margin: 0 auto; }
          .proof-grid { grid-template-columns: repeat(6,1fr); }
          .proof-item { grid-column: span 2; }
          .proof-item:nth-child(3)::after { display: none; }
          .proof-item:nth-child(n+4) { border-top: 1px solid var(--line); }
          .proof-item:nth-child(4) { grid-column: 2 / span 2; }
          .proof-item:nth-child(5) { grid-column: 4 / span 2; }
          .market-grid, .document-grid { grid-template-columns: 1fr; }
          .market-grid .locale-panel { max-width: 620px; width: 100%; margin-left: auto; margin-right: auto; }
          .market-content { order: -1; }
          .complexity-wrap { grid-template-columns: 1fr; }
          .complexity-intro { position: static; max-width: 760px; }
          .assets-panel { grid-template-columns: 1fr; }
          .asset-col + .asset-col { border-left: 0; border-top: 1px solid var(--line); }
          .quality-grid { grid-template-columns: 1fr; gap: 30px; }
          .quality-side { max-width: 760px; }
        }
        @media (max-width: 768px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 72px 0; }
          .section.dense { padding: 68px 0; }
          .hero { padding: 76px 0 62px; }
          .hero h1 { font-size: 42px; }
          .section-head { margin-bottom: 38px; }
          .section-head.center, .section-head.left { text-align: center; margin-left: auto; margin-right: auto; }
          .section-head.left .section-intro { margin-left: auto; }
          .section-head h2, .market-content h2, .complexity-intro h2, .document-copy h2, .quality-side h2 { font-size: 32px; }
          .market-content { text-align: center; }
          .market-content > p { margin-left: auto; margin-right: auto; text-align: left; }
          .market-content .localization-points { text-align: left; }
          .document-copy { text-align: center; }
          .document-copy > p { margin-left: auto; margin-right: auto; text-align: left; }
          .document-types { justify-content: center; }
          .document-copy .editorial-link { margin-left: auto; margin-right: auto; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { min-height: 0; }
          .direction-grid { grid-template-columns: 1fr; }
          .direction-col + .direction-col { border-left: 0; border-top: 1px solid var(--line); }
          .complexity-intro { text-align: center; }
          .complexity-intro p { text-align: left; }
          .complexity-list { grid-template-columns: 1fr; }
          .complexity-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .complexity-item { padding-right: 0; }
          .industry-list, .enterprise-grid { grid-template-columns: 1fr; }
          .workflow { grid-template-columns: 1fr; border-bottom: 0; }
          .workflow-step + .workflow-step, .workflow-step:nth-child(3), .workflow-step:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
          .workflow-step:last-child { border-bottom: 1px solid var(--line); }
          .quality-row { grid-template-columns: 50px 110px 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .why-item + .why-item, .why-item:nth-child(3), .why-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
          .commercial-grid { grid-template-columns: 1fr; }
          #polish-translation-faq .section-head.center { text-align: left; margin-left: 0; margin-right: 0; }
          #polish-translation-faq .section-head .section-intro { margin-left: 0; margin-right: 0; }
          .editorial-link { min-height: 44px; }
          .final-cta { padding: 72px 0; }
          .final-cta h2 { font-size: 34px; }
        }
        @media (max-width: 600px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section, .section.dense { padding: 66px 0; }
          .hero { padding: 68px 0 56px; }
          .hero h1 { font-size: 38px; line-height: 1.07; }
          .hero-lead, .section-intro, .market-content > p, .complexity-intro p, .document-copy > p, .final-cta p { font-size: 18px; }
          .section-head h2, .market-content h2, .complexity-intro h2, .document-copy h2, .quality-side h2 { font-size: 30px; }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions .btn { width: 100%; min-height: 50px; }
          .proof-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .proof-item, .proof-item:nth-child(4), .proof-item:nth-child(5) { grid-column: auto; }
          .proof-item:not(:last-child)::after { display: none; }
          .proof-item { padding: 17px 10px; border-top: 1px solid var(--line); }
          .proof-item:nth-child(1), .proof-item:nth-child(2) { border-top: 0; }
          .proof-item:nth-child(odd):not(:last-child) { border-right: 1px solid var(--line); }
          .proof-item:last-child { grid-column: 1 / -1; border-right: 0; }
          .localization-points { grid-template-columns: 1fr; }
          .locale-panel, .service-card, .commercial-panel, .direction-col, .asset-col { padding: 26px 22px; }
          .locale-list li { grid-template-columns: 1fr; gap: 3px; }
          .service-card h3 { font-size: 20px; }
          .direction-col h3, .asset-col h3, .commercial-panel h3 { font-size: 23px; }
          .industry-row, .enterprise-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .doc-visual { min-height: 350px; padding: 20px; }
          .doc-sheet { left: 22px; top: 38px; width: 78%; height: 266px; padding: 22px; }
          .doc-sheet.back { left: 58px; top: 58px; }
          .doc-badge { width: 92px; height: 92px; right: 16px; bottom: 18px; font-size: 14px; }
          .doc-badge span { font-size: 22px; }
          .term-row { grid-template-columns: 1fr; }
          .term-arrow { transform: rotate(90deg); justify-self: center; }
          .tm-segment { flex-direction: column; gap: 4px; }
          .quality-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .quality-row p { grid-column: 2; }
          .quality-label { font-size: 18px; }
          .factor-list { grid-template-columns: 1fr; }
          .faq-button { font-size: 17px; padding: 22px 0; }
          .faq-answer { padding-right: 0; }
          .final-cta h2 { font-size: 32px; }
        }
        @media (max-width: 390px) {
          .hero h1 { font-size: 38px; }
          .hero-art svg { min-width: 0; }
          .alphabet { font-size: 27px; letter-spacing: .055em; }
          .doc-visual { min-height: 330px; }
        }
        @media (max-width: 320px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .hero h1 { font-size: 38px; }
          .btn { padding-left: 18px; padding-right: 18px; }
          .service-card, .commercial-panel, .direction-col, .asset-col, .locale-panel { padding-left: 20px; padding-right: 20px; }
          .industry-row, .enterprise-row { grid-template-columns: 1fr; }
          .industry-icon { margin-bottom: 2px; }
          .quality-row { grid-template-columns: 38px 1fr; }
          .quality-row p { grid-column: 2; }
          .doc-sheet { width: 82%; left: 16px; }
          .doc-sheet.back { left: 38px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Professional Polish Translation Services</h1>
              <p className="hero-lead">Translate technical, medical, legal, digital, and business content between English and Polish with native-language expertise, controlled terminology, flexible AI + human workflows, and quality assurance matched to your content and intended use.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Icon name="arrow" size={17} /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
              </div>
            </div>
            <PolishHeroArt />
          </div>
        </section>

        <div className="proof-band">
          <div className="shell proof-grid">
            {["ISO 17100", "ISO 9001", "ISO 13485", "100+ Languages", "AI + Human Expertise"].map((item) => (
              <div className="proof-item" key={item}><div className="proof-title">{item}</div></div>
            ))}
          </div>
        </div>

        <section className="section" id="polish-market">
          <div className="shell market-grid">
            <div className="locale-panel">
              <div className="locale-mark"><Icon name="globe" size={30} /></div>
              <div className="locale-title">Polish at a Glance</div>
              <ul className="locale-list">
                <li><strong>Language</strong><span>Polish</span></li>
                <li><strong>Primary locale</strong><span>pl-PL</span></li>
                <li><strong>Writing system</strong><span>Latin alphabet with Polish diacritics</span></li>
                <li><strong>EU status</strong><span>One of the European Union’s 24 official languages</span></li>
                <li><strong>Directions</strong><span>English ↔ Polish; other source languages available</span></li>
                <li><strong>Key challenge</strong><span>Highly inflected, context-dependent grammar</span></li>
              </ul>
              <EditorialLink href="https://www.stepes.com/translation-languages/">Explore Translation Languages</EditorialLink>
            </div>
            <div className="market-content">
              <div className="eyebrow">Polish Localization</div>
              <h2>Reach Polish-Speaking Markets With Confidence</h2>
              <p>Polish is the official language of Poland and one of the European Union’s 24 official languages. It is an important European business language for companies selling into, manufacturing in, sourcing from, or supporting customers in Poland. Stepes helps global organizations adapt content for Polish-speaking customers, employees, partners, and regulated audiences with the linguistic and operational controls each use case requires.</p>
              <div className="localization-points">
                <div className="localization-point"><strong>Market-Appropriate Language</strong><span>Adapt tone, formality, terminology, and customer-facing language for the intended Polish audience.</span></div>
                <div className="localization-point"><strong>Locale Conventions</strong><span>Handle dates, numbers, measurements, formatting, institutional references, and other market-specific details consistently.</span></div>
                <div className="localization-point"><strong>Product & Brand Context</strong><span>Preserve product names, approved terminology, brand voice, and business-specific language across Polish content.</span></div>
                <div className="localization-point"><strong>Global Audience Support</strong><span>Support Polish-language content used in Poland as well as multinational organizations and Polish-speaking communities worldwide.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="polish-services">
          <div className="shell">
            <SectionHead title="Polish Translation Services for Every Content Type" intro="From a single document to a connected product ecosystem, Stepes combines Polish linguistic expertise with the right production, review, and technology workflow for each content type." id="services-heading" />
            <div className="services-grid">
              {serviceItems.map((item) => (
                <article className="service-card" key={item.title}>
                  <div className="icon-box"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <EditorialLink href={item.link}>{item.label}</EditorialLink>
                </article>
              ))}
            </div>
            <div className="services-footer-link"><EditorialLink href="https://www.stepes.com/translation-services/">Professional Translation Services</EditorialLink></div>
          </div>
        </section>

        <section className="section" id="translation-directions">
          <div className="shell">
            <SectionHead title="English-to-Polish and Polish-to-English Translation" intro="Support market entry into Poland and bring Polish-source content to international audiences through professional translation in both directions." id="directions-heading" />
            <div className="direction-grid">
              <div className="direction-col">
                <div className="direction-label">English → Polish</div>
                <h3>Localize Content for Polish Audiences</h3>
                <p>Translate English content into natural, accurate Polish that reflects the intended audience, industry, communication purpose, and level of formality.</p>
                <ul className="clean-list">
                  {["Market entry and product launches", "Technical and product documentation", "Websites, e-commerce, and marketing", "Software and digital products", "Medical and regulatory content", "Training, HR, and customer communications"].map((x) => <li key={x}><span className="marker">•</span><span>{x}</span></li>)}
                </ul>
              </div>
              <div className="direction-col">
                <div className="direction-label">Polish → English</div>
                <h3>Bring Polish Content to Global Teams</h3>
                <p>Translate Polish-source materials into clear professional English while preserving technical meaning, specialized terminology, business context, and source-document intent.</p>
                <ul className="clean-list">
                  {["Engineering and supplier documentation", "Scientific and research content", "Legal and compliance materials", "Financial and corporate reporting", "Product and manufacturing information", "International sales and business communications"].map((x) => <li key={x}><span className="marker">•</span><span>{x}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark" id="polish-language-complexity">
          <div className="shell complexity-wrap">
            <div className="complexity-intro">
              <h2>Built for the Linguistic Complexity of Polish</h2>
              <p>Polish grammar, inflection, gender, plurals, formality, and context affect translation choices throughout documents and digital products. Stepes gives linguists the terminology, references, and in-context information needed to make those choices accurately.</p>
              <div className="alphabet">ą ć ę ł ń ó ś ź ż</div>
            </div>
            <div className="complexity-list">
              {complexityItems.map((item) => (
                <article className="complexity-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="polish-industries">
          <div className="shell">
            <SectionHead title="Polish Translation Expertise Across Global Industries" intro="Subject-matter knowledge matters as much as language fluency. Stepes matches Polish translators and reviewers to the terminology, documentation, audience, and risk profile of each industry." id="industries-heading" />
            <div className="industry-list">
              {industries.map((item) => (
                <article className="industry-row" key={item.title}>
                  <div className="industry-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <EditorialLink href={item.link}>{item.label}</EditorialLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section blush" id="polish-document-translation">
          <div className="shell document-grid">
            <div className="document-copy">
              <h2>Professional Polish Document Translation</h2>
              <p>Translate business and technical documents between English and Polish while preserving terminology, structure, formatting, tables, graphics, and the purpose of the finished file. Stepes supports both translation-only delivery and publication-ready multilingual production.</p>
              <div className="document-types">
                {["Microsoft Word", "PowerPoint", "Excel", "PDF", "Adobe InDesign", "FrameMaker", "DITA / XML", "Structured Content"].map((x) => <span className="type-chip" key={x}>{x}</span>)}
              </div>
              <EditorialLink href="https://www.stepes.com/polish-document-translation-services/">Explore Polish Document Translation Services</EditorialLink>
            </div>
            <div className="doc-visual" aria-hidden="true">
              <div className="doc-sheet back"></div>
              <div className="doc-sheet front">
                <div className="doc-line short"></div><div className="doc-line medium"></div><div className="doc-line"></div><div className="doc-line medium"></div><div className="doc-line short"></div>
                <div className="doc-callout">Terminology, layout, and final-format QA stay connected throughout the workflow.</div>
              </div>
              <div className="doc-badge"><span>PL</span>Publication Ready</div>
            </div>
          </div>
        </section>

        <section className="section" id="polish-language-assets">
          <div className="shell">
            <SectionHead eyebrow="Language Assets" title="Control Polish Terminology and Reuse Approved Translation" intro="Enterprise language quality improves when each project builds on approved terminology, translation memory, reviewer decisions, and product context instead of starting from zero." id="assets-heading" />
            <div className="assets-panel">
              <div className="asset-col">
                <h3>Polish Terminology Management</h3>
                <p>Define the words that matter to your business, including approved Polish equivalents, definitions, usage context, product names, abbreviations, prohibited alternatives, and reviewer decisions. Because Polish is highly inflected, the approved base term still needs to appear in the grammatically correct form inside each sentence.</p>
                <div className="asset-tags">
                  {["Approved terms", "Definitions", "Context", "Grammar guidance", "Do-not-translate terms", "Reviewer decisions"].map((x) => <span className="asset-tag" key={x}>{x}</span>)}
                </div>
                <div className="term-demo" aria-hidden="true">
                  <div className="term-row"><div className="term-box">user manual</div><div className="term-arrow"><Icon name="arrow" size={18} /></div><div className="term-box">instrukcja obsługi</div></div>
                  <div className="term-note">The approved concept stays controlled while the correct Polish form changes with sentence context.</div>
                </div>
                <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
              </div>
              <div className="asset-col">
                <h3>Polish Translation Memory</h3>
                <p>Retain approved source and Polish target segments for consistent reuse across documents, product releases, websites, support content, and recurring updates. Translation memory reduces duplicate work while keeping validated language available for professional review when context changes.</p>
                <div className="tm-stack" aria-hidden="true">
                  <div className="tm-segment"><strong>Approved product warning</strong><span className="tm-match">100% match</span></div>
                  <div className="tm-segment"><strong>Updated service procedure</strong><span className="tm-match">92% match</span></div>
                  <div className="tm-segment"><strong>New product content</strong><span className="tm-match">New translation</span></div>
                </div>
                <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="polish-workflows">
          <div className="shell">
            <SectionHead eyebrow="AI + Human Translation" title="The Right Polish Translation Workflow for Every Content Type" intro="Not every project needs the same production model. Stepes matches the level of AI automation, professional translation, human review, and quality assurance to the purpose and risk of the content." id="workflow-heading" />
            <div className="workflow">
              <article className="workflow-step"><h3>AI Translation With Automated Controls</h3><p>For suitable lower-risk, high-volume, or internal content, using approved language assets and automated checks where rapid multilingual understanding is the primary goal.</p></article>
              <article className="workflow-step"><h3>AI + Human Review</h3><p>For repeatable product information, support content, knowledge bases, and frequently updated material that benefits from automation plus professional linguistic validation.</p></article>
              <article className="workflow-step"><h3>Professional Human Translation</h3><p>For technical, medical, legal, regulatory, marketing, and other content where subject expertise, nuance, context, and audience fit are central to the outcome.</p></article>
              <article className="workflow-step"><h3>Independent or Specialist Review</h3><p>For higher-risk, regulated, safety-related, or publication-critical content that requires additional qualified review, subject-matter validation, or expanded QA controls.</p></article>
            </div>
            <div className="workflow-link"><EditorialLink href="https://www.stepes.com/ai-human-translation-workflow/">Explore AI + Human Translation Workflows</EditorialLink></div>
          </div>
        </section>

        <section className="section dark" id="enterprise-polish-translation">
          <div className="shell">
            <SectionHead eyebrow="Enterprise Operations" title="Manage Polish Translation at Enterprise Scale" intro="Connect Polish translation to the systems, reviewers, release cycles, and language assets behind your global content operation instead of managing each project as a disconnected file exchange." dark id="enterprise-heading" />
            <div className="enterprise-grid">
              {enterpriseItems.map((item) => (
                <article className="enterprise-row" key={item.title}>
                  <div className="industry-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <EditorialLink href={item.link} inverse>{item.label}</EditorialLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="polish-quality">
          <div className="shell quality-grid">
            <div className="quality-side">
              <h2>Quality Controls Built Around Your Polish Content</h2>
              <p>Quality starts before translation and continues through linguistic review, automated checks, final-format validation, customer feedback, and reuse of approved language.</p>
              <EditorialLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</EditorialLink>
            </div>
            <div className="quality-steps">
              {qualitySteps.map((step, index) => (
                <div className="quality-row" key={step[0]}>
                  <div className="quality-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="quality-label">{step[0]}</div>
                  <p>{step[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft" id="why-stepes-polish">
          <div className="shell">
            <SectionHead title="Why Enterprises Choose Stepes for Polish Translation" intro="Stepes combines professional language expertise with governed terminology, translation technology, enterprise workflows, and scalable multilingual production." id="why-heading" />
            <div className="why-grid">
              <div className="why-item"><h3>Native Polish Expertise</h3><p>Professional linguists selected for language direction, content type, subject matter, audience, and target-market needs.</p></div>
              <div className="why-item"><h3>Industry Specialization</h3><p>Technical and regulated workflows built around the terminology, documentation, and quality expectations of your industry.</p></div>
              <div className="why-item"><h3>Flexible AI + Human Models</h3><p>Translation methods matched to content purpose, business risk, quality requirements, scale, and delivery priorities.</p></div>
              <div className="why-item"><h3>Enterprise Scale & Governance</h3><p>Centralized workflows, APIs, customer review, continuous translation, and reusable language assets for recurring multilingual programs.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="polish-pricing-turnaround">
          <div className="shell">
            <SectionHead title="Polish Translation Pricing and Turnaround" intro="A useful estimate starts with the content itself. Stepes reviews the language direction, volume, workflow, file requirements, quality controls, and delivery priorities before recommending the appropriate project model." id="pricing-heading" />
            <div className="commercial-grid">
              <div className="commercial-panel">
                <h3>What Shapes Polish Translation Pricing?</h3>
                <p>Pricing varies according to how much new language work, specialist review, engineering, and production the project requires.</p>
                <div className="factor-list">
                  {["Language direction", "Word volume", "Subject matter", "Content risk", "Translation memory leverage", "Review depth", "File engineering", "Desktop publishing", "Certification needs", "Urgency"].map((x) => <div className="factor" key={x}><Icon name="check" size={16} /><span>{x}</span></div>)}
                </div>
                <EditorialLink href="https://www.stepes.com/how-it-works/pricing/">Translation Pricing</EditorialLink>
              </div>
              <div className="commercial-panel">
                <h3>Flexible Delivery for Different Project Models</h3>
                <p>Turnaround depends on volume, complexity, workflow, file preparation, review stages, and the way completed content needs to be released.</p>
                <div className="factor-list">
                  {["Standard delivery", "Expedited projects", "Phased releases", "Rolling delivery", "Parallel linguist teams", "Continuous translation", "Client review cycles", "Publication-ready production"].map((x) => <div className="factor" key={x}><Icon name="check" size={16} /><span>{x}</span></div>)}
                </div>
                <EditorialLink href="https://www.stepes.com/contact-sales/">Discuss Your Polish Translation Project</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="polish-translation-faq">
          <div className="shell">
            <SectionHead title="Polish Translation Services FAQs" intro="Practical answers about language direction, localization, software, technical content, AI workflows, review, certification, pricing, and delivery." id="faq-heading" />
            <div className="faq-panel">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={item.q}>
                    <button className="faq-button" type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.q}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>{item.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell cta-inner">
            <h2>Translate Polish Content With Confidence</h2>
            <p>Bring your English-to-Polish, Polish-to-English, localization, document, software, technical, medical, legal, or ongoing enterprise translation requirements to Stepes. We’ll help you configure the right linguistic resources, workflow, quality controls, and delivery model.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Icon name="arrow" size={17} /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to a Translation Specialist</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PolishTranslationWireframe;
