import React, { useState } from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  translationServices: "https://www.stepes.com/translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
  document: "https://www.stepes.com/document-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  memory: "https://www.stepes.com/translation-memory/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  aiHuman: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  food: "https://www.stepes.com/food-beverage-translation-services/",
  retail: "https://www.stepes.com/retail-ecommerce-translation-services/",
  training: "https://www.stepes.com/training-translation-services/",
  multimedia: "https://www.stepes.com/multimedia-translation-services/",
};

const services = [
  {
    icon: "document",
    title: "Dutch Document Translation",
    body: "Translate reports, policies, presentations, manuals, procedures, product information, brochures, correspondence, and other professional documents while preserving terminology, structure, and readability.",
    link: LINKS.document,
    label: "Document Translation Services",
  },
  {
    icon: "technical",
    title: "Dutch Technical Translation",
    body: "Localize operating manuals, specifications, installation instructions, maintenance procedures, safety documentation, engineering content, and technical product information with subject-matched linguists.",
    link: LINKS.technical,
    label: "Technical Translation Services",
  },
  {
    icon: "legal",
    title: "Dutch Legal Translation",
    body: "Translate contracts, agreements, corporate policies, compliance materials, intellectual property content, legal correspondence, and litigation-related documents with careful terminology control.",
    link: LINKS.legal,
    label: "Legal Translation Services",
  },
  {
    icon: "certified",
    title: "Certified Dutch Translation",
    body: "Support official, immigration, legal, educational, administrative, and business documents with certification workflows matched to the receiving organization and applicable requirements.",
    link: LINKS.certified,
    label: "Certified Translation Services",
  },
  {
    icon: "medical",
    title: "Dutch Medical & Life Sciences Translation",
    body: "Translate clinical, medical device, pharmaceutical, healthcare, regulatory, scientific, patient-facing, and training content with quality controls suited to specialized and regulated material.",
    link: LINKS.medical,
    label: "Medical Translation Services",
  },
  {
    icon: "financial",
    title: "Dutch Financial Translation",
    body: "Translate reports, banking and investment content, insurance documentation, disclosures, fintech materials, policies, and customer communications with consistent financial terminology.",
    link: LINKS.financial,
    label: "Financial Translation Services",
  },
  {
    icon: "web",
    title: "Dutch Website Translation",
    body: "Localize website copy, navigation, landing pages, product content, metadata, calls to action, help content, and multilingual SEO for natural Dutch-language digital experiences.",
    link: LINKS.website,
    label: "Website Translation Services",
  },
  {
    icon: "software",
    title: "Dutch Software & App Localization",
    body: "Localize interfaces, applications, SaaS products, notifications, structured resource files, help content, and release updates while protecting variables, placeholders, and functional content.",
    link: LINKS.software,
    label: "Software Localization Services",
  },
];

const industries = [
  {
    icon: "chip",
    title: "High Tech, Electronics & Semiconductors",
    body: "Product documentation, engineering specifications, software, manufacturing procedures, technical training, research content, and customer materials for advanced technology organizations.",
  },
  {
    icon: "health",
    title: "Life Sciences & Medical Devices",
    body: "Clinical, regulatory, pharmaceutical, medical device, scientific, patient, and healthcare content supported by specialized terminology and controlled review workflows.",
  },
  {
    icon: "factory",
    title: "Manufacturing & Engineering",
    body: "Specifications, operating procedures, manuals, safety documents, maintenance instructions, quality documentation, training, and customer-facing product information.",
  },
  {
    icon: "logistics",
    title: "Logistics & Transportation",
    body: "Shipping, supply-chain, warehousing, transportation, operations, technical documentation, training, procurement, and international customer communication.",
  },
  {
    icon: "food",
    title: "Food, Agriculture & Horticulture",
    body: "Food labels, packaging, product specifications, agricultural documentation, catalogs, training, marketing, and supply-chain content for Dutch-speaking markets.",
    link: LINKS.food,
    label: "Food & Beverage Translation Services",
  },
  {
    icon: "commerce",
    title: "Financial Services, Retail & Digital Commerce",
    body: "Financial information, product content, customer communications, websites, applications, catalogs, policies, campaigns, and digital experiences across connected channels.",
  },
];

const qualityItems = [
  ["people", "Qualified Linguistic Expertise", "Dutch translators and reviewers are selected by language direction, locale, subject matter, content type, technical complexity, audience, and project requirements."],
  ["domain", "Subject-Matter Matching", "Technical, medical, legal, financial, scientific, software, marketing, and other specialized content can be routed to professionals with relevant domain experience."],
  ["terms", "Terminology & Translation Memory", "Approved glossaries, translation memories, style guidance, references, and project instructions keep validated terminology and language consistent."],
  ["review", "Professional Review", "Projects can include independent linguistic revision, subject-matter review, in-country review, or additional validation according to content risk and quality requirements."],
  ["qa", "Automated Quality Assurance", "Configurable checks help identify measurable issues such as missing content, terminology deviations, number inconsistencies, untranslated text, tag problems, and formatting errors."],
  ["iso", "ISO-Certified Quality Processes", "Stepes quality processes are supported by ISO 9001 for quality management, ISO 17100 for translation services, and ISO 13485 for applicable medical device and life sciences programs."],
];

const workflow = [
  ["Analyze", "Review the source, language direction, target locale, audience, subject matter, files, terminology, deadline, intended use, and quality requirements."],
  ["Prepare", "Organize project instructions, reference content, approved terminology, translation memory, style guidance, file rules, and protected content."],
  ["Translate", "Apply the professional human, AI-assisted, hybrid, or post-editing workflow appropriate to the content and project requirements."],
  ["Review", "Evaluate meaning, terminology, completeness, fluency, consistency, style, locale suitability, and required subject-matter criteria."],
  ["Quality Assurance", "Run automated and professional QA for terminology, numbers, formatting, tags, structure, completeness, and file-level integrity."],
  ["Deliver & Improve", "Deliver final files and retain approved translations, terminology decisions, and relevant reviewer feedback to strengthen future work."],
];

const faqs = [
  {
    q: "Do you provide English-to-Dutch and Dutch-to-English translation?",
    a: "Yes. Stepes provides professional English-to-Dutch and Dutch-to-English translation for technical, legal, medical, financial, business, website, software, marketing, training, and other content. Dutch can also be managed as part of multilingual programs spanning more than 100 languages.",
  },
  {
    q: "What is the difference between Netherlands Dutch and Flemish?",
    a: "Dutch is the standard language used in both the Netherlands and Dutch-speaking Belgium. Vocabulary, expressions, terminology, tone, and usage preferences can still differ by market. The Dutch used in Flanders is often referred to as Flemish or Belgian Dutch, so professional localization should account for the intended audience rather than treating every Dutch market as identical.",
  },
  {
    q: "Can Stepes translate specifically for customers in Belgium?",
    a: "Yes. Stepes supports Belgian Dutch / Flemish localization for audiences in Flanders. Projects can account for Belgian terminology, local usage, tone, and locale requirements where they differ from Netherlands Dutch.",
  },
  {
    q: "Does Stepes provide certified Dutch translations?",
    a: "Yes. Stepes provides certified Dutch translation services for applicable official, legal, immigration, educational, business, and administrative documents. Requirements can vary by recipient and jurisdiction, so the certification workflow should be matched to the receiving organization's instructions.",
    link: LINKS.certified,
    label: "Certified Translation Services",
  },
  {
    q: "What types of Dutch content can Stepes translate?",
    a: "Stepes translates business documents, technical manuals, contracts, financial materials, clinical and medical content, websites, software, applications, marketing materials, product catalogs, training content, multimedia, employee communications, regulatory content, and many other professional content types.",
  },
  {
    q: "How does Stepes ensure Dutch translation quality?",
    a: "Quality begins with defining the project requirements and selecting the right linguists and workflow. Stepes combines qualified professional resources with subject-matter matching, terminology management, translation memory, professional review, automated QA, and final validation according to the content's purpose and risk.",
  },
  {
    q: "Can you translate Dutch websites and software?",
    a: "Yes. Stepes provides Dutch website translation and software localization for websites, ecommerce platforms, SaaS products, mobile apps, interfaces, online help, digital customer experiences, and ongoing content updates. Workflows can include multilingual SEO, structured file handling, terminology, translation memory, and automated QA.",
  },
  {
    q: "How much does Dutch translation cost?",
    a: "Pricing depends on factors such as language direction, word volume, subject matter, file format, translation-memory leverage, workflow type, review requirements, formatting, turnaround, and other project specifications. Submit your content to Stepes for pricing based on the actual project requirements.",
    link: LINKS.quote,
    label: "Get a Translation Quote",
  },
  {
    q: "How quickly can Dutch translation be completed?",
    a: "Turnaround depends on content volume, complexity, file format, language direction, review requirements, formatting needs, and available translation-memory leverage. Stepes supports both standard and expedited delivery and can scale resources for larger or ongoing programs where the project allows.",
  },
  {
    q: "Can Stepes support recurring Dutch translation projects?",
    a: "Yes. Ongoing programs can use dedicated terminology, translation memory, established workflows, preferred linguistic resources, automated quality controls, and customer-specific style guidance to improve continuity across future projects and updates.",
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
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
    technical: <><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></>,
    legal: <><path d="M12 3v18M5 6h14M7 6l-3 6h6L7 6Zm10 0-3 6h6l-3-6ZM8 21h8"/></>,
    certified: <><path d="M12 3 9.7 5.1l-3.1.4-.4 3.1L4 11l2.2 2.4.4 3.1 3.1.4L12 19l2.3-2.1 3.1-.4.4-3.1L20 11l-2.2-2.4-.4-3.1-3.1-.4L12 3Z"/><path d="m9.2 11 1.8 1.8 3.8-4"/><path d="m9.5 18-.8 3 3.3-1.3 3.3 1.3-.8-3"/></>,
    medical: <><path d="M9.5 4h5v5h5v5h-5v5h-5v-5h-5V9h5V4Z"/></>,
    financial: <><path d="M4 20V10M10 20V4M16 20v-7M22 20v-4"/><path d="M3 20h20"/></>,
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/><path d="m9 14-2 2 2 2M15 14l2 2-2 2"/></>,
    chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/><path d="M10 10h4v4h-4z"/></>,
    health: <><path d="M12 21s-7-4.2-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.8-7 10-7 10Z"/><path d="M8.5 12h2l1-2 1.2 4 1-2h1.8"/></>,
    factory: <><path d="M3 21V9l6 3V9l6 3V6l6 3v12H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/></>,
    logistics: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    food: <><path d="M12 21V10"/><path d="M12 13c-4 0-7-2.5-7-6 4 0 7 2.5 7 6ZM12 16c4 0 7-2.5 7-6-4 0-7 2.5-7 6Z"/></>,
    commerce: <><path d="M5 9h14l-1 11H6L5 9Z"/><path d="M8 9a4 4 0 0 1 8 0"/><path d="M9 14h6"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20c.4-4 2.5-6 6-6s5.6 2 6 6"/><path d="M16 5a3 3 0 0 1 0 6M18 14c2 .7 3 2.5 3 5"/></>,
    domain: <><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/></>,
    terms: <><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M8 17h7"/></>,
    review: <><path d="M5 4h14v16H5z"/><path d="m8 11 2 2 5-5"/><path d="M8 16h8"/></>,
    qa: <><path d="M12 3 4 6v5c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-3Z"/><path d="m8.5 12 2 2 5-5"/></>,
    iso: <><circle cx="12" cy="12" r="8"/><path d="m9 12 2 2 4-4"/><path d="m7 4-2-2M17 4l2-2M7 20l-2 2M17 20l2 2"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    cycle: <><path d="M20 7h-5V2"/><path d="M20 7a8 8 0 1 0 1 8"/><path d="m4 17 3 3-3 3"/></>,
  };

  return <svg {...common}>{icons[name] || icons.document}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a className={`editorial-link${dark ? " editorial-link-dark" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={17} />
    </a>
  );
}

function HeadingGroup({ eyebrow, title, intro, dark = false, align = "center", className = "" }) {
  return (
    <div className={`heading-group heading-${align} ${className}`.trim()}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function DutchHeroArt() {
  return (
    <div className="hero-art" aria-label="Dutch localization workflow illustration">
      <div className="hero-art-topline">
        <span>GLOBAL CONTENT</span>
        <span className="status-dot">Dutch localization active</span>
      </div>
      <div className="hero-art-main">
        <div className="source-panel">
          <div className="mini-label">SOURCE</div>
          <div className="doc-lines">
            <span className="line w88" />
            <span className="line w72" />
            <span className="line w94" />
            <span className="line w60" />
          </div>
          <div className="source-tag">EN</div>
        </div>
        <div className="flow-node"><Icon name="arrow" size={18} /></div>
        <div className="locale-stack">
          <div className="locale-card active">
            <span className="flag-chip">NL</span>
            <div><strong>Nederlands</strong><small>Netherlands</small></div>
          </div>
          <div className="locale-card">
            <span className="flag-chip soft">BE</span>
            <div><strong>Belgian Dutch</strong><small>Flanders</small></div>
          </div>
        </div>
      </div>
      <div className="hero-art-lower">
        <div className="review-row">
          <span className="review-icon"><Icon name="terms" size={18} /></span>
          <div><strong>Terminology matched</strong><small>Approved product language applied</small></div>
          <span className="review-state">Matched</span>
        </div>
        <div className="review-row">
          <span className="review-icon"><Icon name="qa" size={18} /></span>
          <div><strong>Quality review</strong><small>Locale, numbers, tags, completeness</small></div>
          <span className="review-state">Reviewed</span>
        </div>
      </div>
      <svg className="hero-landmarks" viewBox="0 0 300 110" aria-hidden="true">
        <path d="M14 91h272" />
        <path d="M42 91V58h34v33M45 58l14-19 14 19M92 91V47h35v44M97 47l12-15 13 15M143 91V65h38v26M149 65l13-16 13 16" />
        <path d="M207 91V56m0 0-20 13m20-13 20 13m-20-13V35m0 21-13-17m13 17 13-17" />
        <path d="M234 91h40V72h-40zM239 72l8-14h14l8 14" />
      </svg>
    </div>
  );
}

function FAQItem({ item, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button
        id={buttonId}
        className="faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.a}</p>
        {item.link ? <ArrowLink href={item.link}>{item.label}</ArrowLink> : null}
      </div>
    </div>
  );
}

export default function StepesDutchTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stp-page">
      <style>{styles}</style>

      <section className="hero section-pad">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>DUTCH TRANSLATION SERVICES</Eyebrow>
            <h1>Professional Dutch Translation Services for Global Business</h1>
            <p className="hero-lead">Reach customers, employees, partners, and regulators across Dutch-speaking markets with accurate, natural, and industry-appropriate translations. Stepes combines professional linguists, subject-matter expertise, language technology, and managed quality assurance for every type of global content.</p>
            <div className="locale-line" aria-label="Dutch translation coverage">
              <span>Netherlands Dutch</span><i />
              <span>Belgian Dutch / Flemish</span><i />
              <span>English ↔ Dutch</span><i />
              <span>Multilingual Programs</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-primary" href={LINKS.quote}>Get a Translation Quote <Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href={LINKS.contact}>Contact Sales</a>
            </div>
          </div>
          <DutchHeroArt />
        </div>
      </section>

      <section className="proof-band">
        <div className="shell proof-grid">
          <div className="proof-item"><strong>100+ Languages</strong><span>Global and regional language coverage</span></div>
          <div className="proof-item"><strong>10,000+ Professional Linguists</strong><span>Language and subject-matter expertise</span></div>
          <div className="proof-item"><strong>2,000+ Enterprise Clients</strong><span>Scalable multilingual support</span></div>
          <div className="proof-item"><strong>ISO-Certified Quality Processes</strong><span>Structured translation and QA processes</span></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell overview-grid">
          <div className="sticky-heading">
            <h2>Dutch Translation for International Business</h2>
          </div>
          <div className="overview-copy">
            <p className="body-large">Dutch-speaking markets are deeply connected to international commerce, technology, manufacturing, life sciences, logistics, financial services, agriculture, and digital business. Successful translation therefore requires more than replacing English words with Dutch ones.</p>
            <p>Stepes provides professional Dutch translation for product launches, customer communications, technical documentation, corporate operations, regulated content, websites, software, training, and global marketing. Projects range from individual documents to continuous multilingual content programs.</p>
            <p>Every workflow is configured around the content itself. A legal agreement, engineering manual, medical document, ecommerce site, software interface, and marketing campaign should not automatically follow the same translation process. Stepes combines the appropriate linguistic expertise, technology, review depth, terminology controls, and QA according to the purpose, audience, complexity, visibility, and risk of the content.</p>
            <div className="quiet-points">
              <div><span />One-time documents and recurring content streams</div>
              <div><span />Professional Dutch translation into and from English</div>
              <div><span />Dutch managed alongside European and global languages</div>
            </div>
            <ArrowLink href={LINKS.translationServices}>Professional Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <HeadingGroup
            eyebrow="DUTCH LANGUAGE EXPERTISE"
            title="Dutch for the Netherlands and Belgium"
            intro="Dutch is a shared standard language, but professional localization still needs to reflect the market, audience, terminology, and intended use."
          />
          <div className="locale-compare">
            <article className="locale-column">
              <div className="locale-heading"><span className="locale-code">NL</span><div><h3>Netherlands Dutch</h3><p>For audiences in the Netherlands</p></div></div>
              <ul className="clean-list">
                <li>Netherlands-focused vocabulary and terminology</li>
                <li>Market-appropriate business and marketing tone</li>
                <li>Local digital and locale conventions</li>
                <li>Terminology aligned to the intended industry and audience</li>
              </ul>
            </article>
            <article className="locale-column">
              <div className="locale-heading"><span className="locale-code locale-be">BE</span><div><h3>Belgian Dutch / Flemish</h3><p>For Dutch-speaking audiences in Flanders</p></div></div>
              <ul className="clean-list">
                <li>Belgian terminology and usage preferences</li>
                <li>Natural tone for customers and stakeholders in Flanders</li>
                <li>Market-specific business conventions and locale settings</li>
                <li>Regional choices applied without treating Dutch as two unrelated languages</li>
              </ul>
            </article>
          </div>
          <div className="locale-note">
            <div className="note-icon"><Icon name="globe" /></div>
            <div>
              <h3>One Language, the Right Locale</h3>
              <p>Stepes can define target locales, preferred terminology, style requirements, and reusable language assets before translation begins. For projects involving Suriname or Dutch-language content in the Caribbean, our team can also help determine the appropriate locale and workflow based on the audience and intended use.</p>
            </div>
            <ArrowLink href={LINKS.languages}>Translation Languages</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <HeadingGroup
            title="Professional Dutch Translation and Localization Services"
            intro="Different content types require different linguistic, technical, and quality workflows. Stepes supports Dutch across documents, digital products, specialized industries, and multilingual production."
          />
          <div className="service-editorial-grid">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <div className="service-icon"><Icon name={service.icon} /></div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ArrowLink href={service.link}>{service.label}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <HeadingGroup
            title="Dutch Translation Expertise Across Leading Industries"
            intro="Stepes combines Dutch language expertise with translators and reviewers experienced in specialized content so terminology and meaning remain accurate across markets."
            dark
          />
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-item" key={item.title}>
                <div className="industry-icon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.link ? <ArrowLink href={item.link} dark>{item.label}</ArrowLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <HeadingGroup
            title="English-to-Dutch, Dutch-to-English, and Multilingual Programs"
            intro="Translate in either direction between English and Dutch, or manage Dutch as one market within a coordinated global content program."
          />
          <div className="direction-panel">
            <article>
              <div className="direction-kicker">EN → NL / BE</div>
              <h3>English to Dutch</h3>
              <p>Translate technical documents, websites, software, contracts, marketing, medical content, financial communications, training, and product information for the Netherlands or Dutch-speaking Belgium.</p>
            </article>
            <article>
              <div className="direction-kicker">NL / BE → EN</div>
              <h3>Dutch to English</h3>
              <p>Translate Dutch content for international customers, corporate teams, regulators, partners, and investors, using the relevant U.S., U.K., or customer-defined English conventions.</p>
            </article>
            <article>
              <div className="direction-kicker">DUTCH + 100+ LANGUAGES</div>
              <h3>Multilingual Programs</h3>
              <p>Centralize terminology, translation memory, workflows, QA, project management, and delivery when Dutch is one language within a broader European or global launch.</p>
              <ArrowLink href={LINKS.languages}>Explore Translation Languages</ArrowLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell assets-grid">
          <div className="assets-copy">
            <Eyebrow>LANGUAGE CONSISTENCY</Eyebrow>
            <h2>Consistent Dutch Terminology Across Every Project</h2>
            <p className="body-large">Products, technologies, regulated concepts, brand language, and specialized terms often appear across many documents and channels. Stepes connects terminology management, translation memory, style guidance, professional linguists, and QA so approved Dutch language stays consistent as content evolves.</p>
            <div className="assets-links">
              <ArrowLink href={LINKS.terminology}>Terminology Management</ArrowLink>
              <ArrowLink href={LINKS.memory}>Translation Memory</ArrowLink>
            </div>
          </div>
          <div className="asset-stack" aria-label="Reusable Dutch language assets">
            <div className="asset-card asset-terms">
              <span className="asset-icon"><Icon name="terms" /></span>
              <div><strong>Approved Terminology</strong><small>Product terms · regulated language · preferred variants</small></div>
              <span className="asset-state">Controlled</span>
            </div>
            <div className="asset-card">
              <span className="asset-icon"><Icon name="layers" /></span>
              <div><strong>Translation Memory</strong><small>Previously approved bilingual content reused in context</small></div>
              <span className="asset-state">Reusable</span>
            </div>
            <div className="asset-card">
              <span className="asset-icon"><Icon name="review" /></span>
              <div><strong>Style & Market Guidance</strong><small>Tone · locale preferences · brand conventions</small></div>
              <span className="asset-state">Aligned</span>
            </div>
            <div className="asset-flow">
              <span>Approved language assets</span><Icon name="arrow" size={18} /><span>Dutch translation & review</span><Icon name="arrow" size={18} /><span>Future content</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <HeadingGroup
            eyebrow="FLEXIBLE TRANSLATION WORKFLOWS"
            title="AI-Enabled Dutch Translation With Professional Human Expertise"
            intro="The right translation model depends on the content, audience, visibility, complexity, and impact of an error. Stepes configures the workflow around the content instead of forcing every project into one approach."
          />
          <div className="workflow-models">
            <article className="model-row">
              <div className="model-label"><span>Human-Led</span><strong>Professional Human Translation</strong></div>
              <p>For specialized, regulated, nuanced, creative, high-visibility, or business-critical content where direct professional translation offers the stronger outcome.</p>
            </article>
            <article className="model-row">
              <div className="model-label"><span>Hybrid</span><strong>AI + Professional Human Review</strong></div>
              <p>For appropriate customer-facing and operational content where AI can accelerate initial translation while professional linguists validate meaning, terminology, completeness, fluency, and context.</p>
            </article>
            <article className="model-row">
              <div className="model-label"><span>Scale</span><strong>Machine Translation Post-Editing</strong></div>
              <p>For suitable higher-volume content where professional post-editors correct translation issues, apply approved terminology, improve readability, and validate the output against agreed requirements.</p>
            </article>
            <article className="model-row">
              <div className="model-label"><span>Reuse</span><strong>Translation Memory-Driven Workflows</strong></div>
              <p>For recurring documentation and updates, approved translations are identified and reused so professional attention can focus on new, changed, complex, or higher-risk material.</p>
            </article>
          </div>
          <div className="center-link"><ArrowLink href={LINKS.aiHuman}>AI + Human Translation Workflow</ArrowLink></div>
        </div>
      </section>

      <section className="section section-dark qa-section">
        <div className="shell qa-grid">
          <div className="qa-copy">
            <h2>Professional Dutch Translation Quality Assurance</h2>
            <p className="body-large">Translation quality is not a single check performed after translation. It starts with understanding the content, audience, target locale, terminology, subject matter, quality expectations, and potential impact of an error.</p>
            <p>Automated quality controls help detect objective and repeatable issues, while qualified professionals evaluate meaning, context, terminology, tone, and subject-matter accuracy.</p>
            <p className="qa-iso-line">ISO 9001 · ISO 17100 · ISO 13485</p>
            <ArrowLink href={LINKS.qa} dark>Translation Quality Assurance</ArrowLink>
          </div>
          <div className="qa-matrix">
            {qualityItems.map(([icon, title, body]) => (
              <article className="qa-item" key={title}>
                <span className="qa-icon"><Icon name={icon} /></span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <HeadingGroup
            title="Dutch Localization for Digital Customer Experiences"
            intro="Connect Dutch language across websites, software, ecommerce, training, support, and multimedia so customers receive one coherent experience rather than isolated translations."
          />
          <div className="digital-band">
            <article><span className="digital-icon"><Icon name="web" /></span><h3>Websites & SEO</h3><p>Navigation, landing pages, product content, metadata, calls to action, help content, and multilingual search terminology.</p><ArrowLink href={LINKS.website}>Website Translation</ArrowLink></article>
            <article><span className="digital-icon"><Icon name="software" /></span><h3>Software & Apps</h3><p>Interfaces, messages, help systems, structured resource files, variables, placeholders, releases, and in-context language.</p><ArrowLink href={LINKS.software}>Software Localization</ArrowLink></article>
            <article><span className="digital-icon"><Icon name="commerce" /></span><h3>Ecommerce & Product Content</h3><p>Product names, attributes, specifications, descriptions, catalogs, campaigns, and customer terminology across digital storefronts.</p><ArrowLink href={LINKS.retail}>Retail & E-commerce Translation</ArrowLink></article>
            <article><span className="digital-icon"><Icon name="layers" /></span><h3>Training & Multimedia</h3><p>eLearning, employee training, presentations, video, subtitles, instructional content, and other media used by customers and employees.</p><div className="digital-links"><ArrowLink href={LINKS.training}>Training Translation</ArrowLink><ArrowLink href={LINKS.multimedia}>Multimedia Localization</ArrowLink></div></article>
          </div>
          <div className="digital-note">Localization can also account for differences between audiences in the Netherlands and Flanders when vocabulary, tone, terminology, or commercial conventions need to be market-specific.</div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <HeadingGroup
            title="A Streamlined Dutch Translation Workflow"
            intro="Stepes manages Dutch translation from initial requirements through final delivery while keeping linguistic resources, language assets, technology, review, and quality controls connected."
          />
          <div className="process" aria-label="Six-step Dutch translation workflow">
            {workflow.map(([title, body], idx) => (
              <article className="process-step" key={title}>
                <div className="process-number">{String(idx + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="process-cta"><a className="btn btn-primary" href={LINKS.quote}>Get a Dutch Translation Quote <Icon name="arrow" size={18} /></a></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell enterprise-grid">
          <div className="enterprise-copy">
            <Eyebrow>BUILT TO SCALE</Eyebrow>
            <h2>Dutch Translation for Ongoing Global Content</h2>
            <p className="body-large">Translation increasingly happens as a continuous business process rather than a one-time project. Product documentation changes, software releases continue, websites evolve, regulations are updated, catalogs grow, and customer communication never stops.</p>
            <p>Stepes helps enterprises reuse approved translation memory, terminology, style guidance, project instructions, reviewer decisions, and established linguistic resources so each new project starts with the knowledge built during previous work.</p>
            <p>For multilingual programs, Dutch can remain part of the same centralized workflow as other target languages, with coordinated project management, quality requirements, approvals, and reporting.</p>
          </div>
          <div className="enterprise-flow" aria-label="Ongoing Dutch translation program illustration">
            <div className="flow-sources">
              <span>Product releases</span><span>Web content</span><span>Technical docs</span><span>Training</span><span>Regulatory updates</span><span>Customer content</span>
            </div>
            <div className="flow-center">
              <div className="flow-brand"><Icon name="cycle" /><strong>Connected Stepes Workflow</strong><small>Terminology · TM · QA · Review · Approvals</small></div>
            </div>
            <div className="flow-output">
              <div><span>NL</span><strong>Netherlands Dutch</strong></div>
              <div><span>BE</span><strong>Belgian Dutch</strong></div>
              <div><span>100+</span><strong>Global Languages</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft faq-section">
        <div className="shell faq-shell">
          <div className="faq-heading">
            <h2>Frequently Asked Questions About Dutch Translation Services</h2>
            <p>Common questions about Dutch locales, translation quality, certified documents, digital localization, pricing, turnaround, and ongoing programs.</p>
          </div>
          <div className="faq-panel">
            {faqs.map((item, idx) => (
              <FAQItem
                key={item.q}
                item={item}
                index={idx}
                open={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section related-section section-white">
        <div className="shell related-grid">
          <div>
            <h2>Translation Services in 100+ Languages</h2>
            <p>Dutch is often one part of a larger international content strategy. Stepes supports professional translation and localization across major global languages and regional variants for technical, regulated, digital, corporate, and customer-facing content.</p>
            <ArrowLink href={LINKS.languages}>Explore All Translation Languages</ArrowLink>
          </div>
          <div className="related-links" aria-label="Related Dutch translation services">
            <span className="related-label">RELATED SERVICES</span>
            <a href={LINKS.technical}>Technical Translation <Icon name="arrow" size={17} /></a>
            <a href={LINKS.legal}>Legal Translation <Icon name="arrow" size={17} /></a>
            <a href={LINKS.medical}>Medical Translation <Icon name="arrow" size={17} /></a>
            <a href={LINKS.website}>Website Translation <Icon name="arrow" size={17} /></a>
            <a href={LINKS.software}>Software Localization <Icon name="arrow" size={17} /></a>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2>Ready to Translate Your Content Into Dutch?</h2>
              <p>Translate for the Netherlands, Dutch-speaking Belgium, or global audiences with professional Dutch linguists, controlled terminology, flexible AI + human workflows, and managed quality assurance.</p>
            </div>
            <div className="final-actions">
              <a className="btn btn-light" href={LINKS.quote}>Get a Translation Quote <Icon name="arrow" size={18} /></a>
              <a className="text-action" href={LINKS.contact}>Contact Stepes <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #17171A;
    --ink-2: #2A2A2F;
    --muted: #62636B;
    --line: #E6E4E7;
    --soft: #F7F7F8;
    --dark: #202024;
    --dark-2: #29292E;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stp-page {
    width: 100%;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }
  .stp-page a { color: inherit; text-decoration: none; }

  .stp-page a, .stp-page button, .stp-page strong, .stp-page span, .stp-page p, .stp-page h1, .stp-page h2, .stp-page h3 { overflow-wrap: anywhere; }
  .stp-page p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.72; }
  .stp-page h1, .stp-page h2, .stp-page h3 { margin: 0; color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
  .stp-page h1 { font-size: 48px; line-height: 1.06; }
  .stp-page h2 { font-size: 36px; line-height: 1.14; }
  .stp-page h3 { font-size: 24px; line-height: 1.24; }
  .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  .section-pad { padding-top: 104px; padding-bottom: 104px; }
  .section-white { background: var(--white); }
  .section-soft { background: var(--soft); }
  .section-blush { background: var(--blush); }
  .section-dark { background: var(--dark); color: var(--white); }
  .section-dark h2, .section-dark h3 { color: var(--white); }
  .section-dark p { color: #D3D2D6; }

  .eyebrow {
    margin-bottom: 16px;
    color: var(--magenta);
    font-size: 11px !important;
    line-height: 1.25 !important;
    font-weight: 600 !important;
    letter-spacing: .16em;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--pink-light) !important; }
  .heading-group { max-width: 820px; margin-bottom: 56px; }
  .heading-center { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-left { text-align: left; }
  .heading-group .section-intro { max-width: 780px; margin: 18px auto 0; font-size: 18px; line-height: 1.68; }
  .heading-left .section-intro { margin-left: 0; }
  .body-large { font-size: 18px !important; line-height: 1.72 !important; color: #45464D !important; }
  .section-dark .body-large { color: #E3E2E5 !important; }

  .hero {
    position: relative;
    background:
      radial-gradient(circle at 82% 18%, rgba(193,29,99,.08), transparent 30%),
      linear-gradient(180deg, #FFF 0%, #FCFAFB 100%);
  }
  .hero-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 64px; align-items: center; }
  .hero-copy { max-width: 680px; }
  .hero-copy h1 { max-width: 660px; }
  .hero-lead { margin-top: 24px !important; max-width: 660px; font-size: 18px !important; line-height: 1.7 !important; }
  .locale-line { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin-top: 24px; color: #4F5057; font-size: 16px; font-weight: 600; }
  .locale-line i { width: 4px; height: 4px; border-radius: 50%; background: #B9B7BC; display: inline-block; }
  .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .btn {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible, .editorial-link:focus-visible, .text-action:focus-visible, .related-links a:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
  .btn-primary, .btn-primary:link, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible {
    background: var(--magenta);
    color: #FFF !important;
  }
  .btn-primary svg, .btn-primary span, .btn-primary:visited svg { color: #FFF !important; stroke: #FFF !important; }
  .btn-primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 24px rgba(167,25,84,.18); }
  .btn-secondary { background: #FFF; color: var(--ink); border-color: #D9D6DA; }
  .btn-secondary:hover { border-color: #BDB9BF; background: #FCFBFC; }
  .btn-light, .btn-light:link, .btn-light:visited, .btn-light:hover, .btn-light:active, .btn-light:focus, .btn-light:focus-visible { background: #FFF; color: var(--burgundy) !important; }
  .btn-light svg { stroke: var(--burgundy) !important; }
  .btn-light:hover { box-shadow: 0 10px 26px rgba(0,0,0,.15); }

  .hero-art {
    position: relative;
    min-height: 500px;
    border: 1px solid #E1DEE2;
    border-radius: 30px;
    background: rgba(255,255,255,.94);
    box-shadow: 0 24px 60px rgba(34,25,31,.09);
    padding: 24px;
    overflow: hidden;
  }
  .hero-art-topline { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 18px; border-bottom: 1px solid var(--line); color: #7A787E; font-size: 12px; font-weight: 600; letter-spacing: .09em; }
  .status-dot { display: flex; align-items: center; gap: 8px; letter-spacing: 0; text-transform: none; color: #55565D; }
  .status-dot:before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); box-shadow: 0 0 0 4px rgba(193,29,99,.1); }
  .hero-art-main { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 34px 1fr; align-items: center; gap: 12px; padding: 36px 0 26px; }
  .source-panel { position: relative; border: 1px solid #E5E2E6; background: #FAF9FA; border-radius: 20px; padding: 22px; min-height: 180px; }
  .mini-label { color: #8B898F; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .13em; }
  .doc-lines { display: grid; gap: 12px; margin-top: 22px; }
  .line { height: 7px; border-radius: 999px; background: #D9D6DA; display: block; }
  .line:nth-child(2) { background: #E8E6E8; }
  .w88 { width: 88%; } .w72 { width: 72%; } .w94 { width: 94%; } .w60 { width: 60%; }
  .source-tag { position: absolute; right: 14px; bottom: 14px; min-width: 38px; height: 30px; display: grid; place-items: center; border-radius: 999px; background: #EFEDEF; color: #55545A; font-size: 12px; font-weight: 600; }
  .flow-node { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; color: var(--magenta); background: var(--blush); }
  .locale-stack { display: grid; gap: 12px; }
  .locale-card { display: flex; align-items: center; gap: 12px; min-height: 78px; padding: 14px; border: 1px solid #E4E1E4; border-radius: 18px; background: #FFF; }
  .locale-card.active { border-color: rgba(193,29,99,.32); box-shadow: inset 3px 0 0 var(--magenta); }
  .flag-chip { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; background: var(--magenta); color: #FFF; font-size: 12px; font-weight: 600; }
  .flag-chip.soft { background: #EFE5EA; color: var(--burgundy); }
  .locale-card strong { display: block; font-size: 16px; line-height: 1.3; }
  .locale-card small { display: block; color: #77767C; font-size: 14px; margin-top: 3px; }
  .hero-art-lower { position: relative; z-index: 2; display: grid; gap: 10px; }
  .review-row { min-height: 62px; display: grid; grid-template-columns: 36px minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #E9E7E9; border-radius: 16px; background: rgba(255,255,255,.9); }
  .review-icon { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; color: var(--magenta); background: var(--blush); }
  .review-row strong { display: block; font-size: 16px; }
  .review-row small { display: block; margin-top: 2px; color: #7A797E; font-size: 14px; }
  .review-state { overflow-wrap: normal; color: var(--burgundy); background: #F5E9EE; border-radius: 999px; padding: 5px 8px; font-size: 11px; line-height: 1.2; font-weight: 600; }
  .hero-landmarks { position: absolute; z-index: 1; right: -20px; bottom: -3px; width: 68%; height: auto; fill: none; stroke: #D4D0D4; stroke-width: 1.6; opacity: .66; }

  .proof-band { background: #FFF; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .proof-item { padding: 26px 24px; min-height: 100px; display: flex; flex-direction: column; justify-content: center; border-left: 1px solid var(--line); }
  .proof-item:first-child { border-left: 0; padding-left: 0; }
  .proof-item:last-child { padding-right: 0; }
  .proof-item strong { display: block; font-size: 17px; line-height: 1.3; font-weight: 600; }
  .proof-item span { display: block; margin-top: 5px; color: #77767C; font-size: 16px; line-height: 1.45; }

  .overview-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 80px; align-items: start; }
  .sticky-heading { max-width: 430px; }
  .overview-copy { max-width: 760px; }
  .overview-copy > p + p { margin-top: 20px; }
  .quiet-points { display: grid; gap: 11px; margin: 28px 0; color: #404147; font-size: 16px; }
  .quiet-points div { display: grid; grid-template-columns: 14px 1fr; gap: 10px; align-items: start; }
  .quiet-points span { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); margin-top: 9px; }

  .editorial-link { min-height: 44px; display: inline-flex; align-items: center; gap: 7px; color: var(--magenta) !important; font-size: 16px; line-height: 1.4; font-weight: 600; margin-top: 12px; }
  .editorial-link svg { flex: 0 0 auto; transition: transform .2s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link-dark { color: var(--pink-light) !important; }

  .locale-compare { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #E5D9DF; border-radius: 30px; overflow: hidden; background: #FFF; }
  .locale-column { padding: 38px; }
  .locale-column + .locale-column { border-left: 1px solid #E5D9DF; }
  .locale-heading { display: flex; gap: 16px; align-items: center; padding-bottom: 26px; border-bottom: 1px solid var(--line); }
  .locale-heading h3 { font-size: 25px; }
  .locale-heading p { margin-top: 3px; }
  .locale-code { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: var(--magenta); color: #FFF; font-size: 14px; font-weight: 600; }
  .locale-be { background: #EFE4E9; color: var(--burgundy); }
  .clean-list { margin: 26px 0 0; padding: 0; list-style: none; display: grid; gap: 15px; }
  .clean-list li { position: relative; padding-left: 22px; color: #55565D; font-size: 16px; line-height: 1.62; }
  .clean-list li:before { content: ""; position: absolute; left: 0; top: .63em; width: 8px; height: 8px; border-radius: 50%; background: #D9B0C2; }
  .locale-note { margin-top: 22px; padding: 28px; display: grid; grid-template-columns: 48px 1fr auto; gap: 18px; align-items: center; border: 1px solid #E7DCE1; border-radius: 24px; background: rgba(255,255,255,.68); }
  .note-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: #FFF; color: var(--magenta); border: 1px solid #E8E0E4; }
  .locale-note h3 { font-size: 20px; }
  .locale-note p { margin-top: 6px; }
  .locale-note .editorial-link { margin-top: 0; white-space: nowrap; }

  .service-editorial-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 52px; border-top: 1px solid var(--line); }
  .service-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 32px 0; border-bottom: 1px solid var(--line); }
  .service-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); }
  .service-content h3 { font-size: 21px; }
  .service-content p { margin-top: 9px; }
  .service-content .editorial-link { margin-top: 12px; font-size: 16px; }

  .industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 8px; border-top: 1px solid #3A3A40; }
  .industry-item { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 34px 30px; border-bottom: 1px solid #3A3A40; border-right: 1px solid #3A3A40; }
  .industry-item:nth-child(3n) { border-right: 0; }
  .industry-item:nth-child(3n+1) { padding-left: 0; }
  .industry-icon { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px; color: var(--pink-light); background: #2F2F34; }
  .industry-item h3 { font-size: 21px; }
  .industry-item p { margin-top: 10px; }
  .industry-item .editorial-link { font-size: 16px; }

  .direction-panel { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
  .direction-panel article { min-height: 320px; padding: 34px; background: #FFF; }
  .direction-panel article + article { border-left: 1px solid var(--line); }
  .direction-panel article:last-child { background: #FCF6F9; }
  .direction-kicker { min-height: 34px; display: inline-flex; align-items: center; padding: 6px 11px; border-radius: 999px; background: #F1EFF1; color: #66666C; font-size: 12px; line-height: 1.2; font-weight: 600; letter-spacing: .06em; }
  .direction-panel article:last-child .direction-kicker { color: var(--burgundy); background: #F4E4EB; }
  .direction-panel h3 { margin-top: 22px; }
  .direction-panel p { margin-top: 14px; }

  .assets-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
  .assets-copy { max-width: 520px; }
  .assets-copy p { margin-top: 20px; }
  .assets-links { display: flex; flex-wrap: wrap; column-gap: 24px; row-gap: 4px; margin-top: 8px; }
  .asset-stack { padding: 28px; border: 1px solid #E1E0E3; border-radius: 28px; background: #FFF; box-shadow: 0 18px 48px rgba(30,25,29,.06); }
  .asset-card { display: grid; grid-template-columns: 44px 1fr auto; align-items: center; gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .asset-card:first-child { padding-top: 0; }
  .asset-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 13px; color: var(--magenta); background: var(--blush); }
  .asset-card strong { display: block; font-size: 16px; }
  .asset-card small { display: block; margin-top: 3px; color: #77777D; font-size: 16px; line-height: 1.45; }
  .asset-state { overflow-wrap: normal; padding: 5px 9px; border-radius: 999px; background: #F0EEF0; color: #68686E; font-size: 11px; font-weight: 600; }
  .asset-terms { box-shadow: inset 3px 0 0 var(--magenta); padding-left: 14px; }
  .asset-flow { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 9px; padding-top: 20px; color: #77767C; font-size: 16px; font-weight: 600; }
  .asset-flow svg { color: var(--magenta); }

  .workflow-models { border-top: 1px solid var(--line); }
  .model-row { display: grid; grid-template-columns: .8fr 1.2fr; gap: 54px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .model-label { display: grid; grid-template-columns: 88px 1fr; gap: 18px; align-items: center; }
  .model-label span { color: var(--magenta); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
  .model-label strong { font-size: 20px; font-weight: 600; line-height: 1.35; }
  .center-link { display: flex; justify-content: center; margin-top: 14px; }

  .qa-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
  .qa-copy { max-width: 470px; }
  .qa-copy p { margin-top: 20px; }
  .qa-copy .qa-iso-line { color: var(--pink-light); font-size: 16px; line-height: 1.5; font-weight: 600; letter-spacing: .01em; }
  .qa-copy .editorial-link { margin-top: 22px; }
  .qa-matrix { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #3D3D43; }
  .qa-item { display: grid; grid-template-columns: 40px 1fr; gap: 14px; padding: 28px 24px; border-bottom: 1px solid #3D3D43; }
  .qa-item:nth-child(odd) { padding-left: 0; border-right: 1px solid #3D3D43; }
  .qa-item h3 { font-size: 19px; }
  .qa-item p { margin-top: 7px; }
  .qa-icon { width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; color: var(--pink-light); background: #2D2D32; }

  .digital-band { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .digital-band article { padding: 30px 26px; border-right: 1px solid var(--line); }
  .digital-band article:first-child { padding-left: 0; }
  .digital-band article:last-child { border-right: 0; padding-right: 0; }
  .digital-icon { width: 42px; height: 42px; border-radius: 13px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); margin-bottom: 18px; }
  .digital-band h3 { font-size: 20px; }
  .digital-band p { margin-top: 10px; }
  .digital-band .editorial-link { font-size: 16px; }
  .digital-links { display: grid; justify-items: start; }
  .digital-links .editorial-link + .editorial-link { margin-top: 8px; }
  .digital-note { max-width: 850px; margin: 28px auto 0; text-align: center; color: #5F6066; font-size: 16px; line-height: 1.65; }

  .process { display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid #E0D6DB; }
  .process-step { position: relative; padding: 30px 22px 0; min-height: 320px; border-right: 1px solid #E0D6DB; }
  .process-step:first-child { padding-left: 0; }
  .process-step:last-child { border-right: 0; padding-right: 0; }
  .process-number { color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .08em; margin-bottom: 18px; }
  .process-step h3 { font-size: 19px; }
  .process-step p { margin-top: 10px; }
  .process-cta { display: flex; justify-content: center; margin-top: 40px; }

  .enterprise-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
  .enterprise-copy { max-width: 540px; }
  .enterprise-copy p { margin-top: 20px; }
  .enterprise-flow { display: grid; grid-template-columns: .78fr .86fr .9fr; align-items: stretch; gap: 14px; min-height: 410px; }
  .flow-sources { display: grid; align-content: center; gap: 10px; }
  .flow-sources span { padding: 12px 14px; border: 1px solid #E6E3E6; border-radius: 14px; background: #FAF9FA; color: #5B5B61; font-size: 16px; font-weight: 600; }
  .flow-center { display: grid; place-items: center; }
  .flow-brand { min-height: 190px; width: 100%; border-radius: 26px; background: var(--burgundy); color: #FFF; padding: 26px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 20px 44px rgba(122,21,66,.2); }
  .flow-brand svg { margin-bottom: 15px; color: var(--pink-light); }
  .flow-brand strong { font-size: 20px; line-height: 1.3; }
  .flow-brand small { margin-top: 8px; color: #F2D7E3; font-size: 16px; line-height: 1.5; }
  .flow-output { display: grid; align-content: center; gap: 12px; }
  .flow-output div { display: grid; grid-template-columns: 42px 1fr; align-items: center; gap: 10px; padding: 13px; border: 1px solid #E5E2E5; border-radius: 14px; background: #FFF; }
  .flow-output span { width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-size: 11px; font-weight: 600; }
  .flow-output strong { font-size: 16px; line-height: 1.3; }

  .faq-shell { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
  .faq-heading { max-width: 430px; }
  .faq-heading p { margin-top: 18px; }
  .faq-panel { border-top: 1px solid #DDDBDE; }
  .faq-item { border-bottom: 1px solid #DDDBDE; }
  .faq-question { width: 100%; min-height: 72px; padding: 20px 0; display: grid; grid-template-columns: 1fr 32px; gap: 20px; align-items: center; border: 0; background: transparent; color: var(--ink); text-align: left; font-family: inherit; font-size: 18px; line-height: 1.45; font-weight: 600; cursor: pointer; }
  .faq-plus { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: #FFF; border: 1px solid #DAD7DA; color: var(--magenta); font-size: 20px; line-height: 1; }
  .faq-answer { padding: 0 52px 24px 0; }
  .faq-answer p { max-width: 840px; }
  .faq-answer .editorial-link { font-size: 16px; margin-top: 12px; }

  .related-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 72px; align-items: start; }
  .related-grid > div:first-child { max-width: 650px; }
  .related-grid p { margin-top: 18px; }
  .related-links { display: grid; border-top: 1px solid var(--line); }
  .related-label { padding: 16px 0 12px; color: var(--magenta); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .15em; }
  .related-links a { min-height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--line); color: #38393F; font-size: 16px; font-weight: 600; }
  .related-links a svg { color: var(--magenta); transition: transform .2s ease; }
  .related-links a:hover svg { transform: translateX(3px); }

  .final-cta-section { padding: 28px 0 72px; background: #FFF; }
  .final-cta { min-height: 300px; border-radius: 30px; background: var(--burgundy); color: #FFF; padding: 54px 58px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 56px; align-items: center; overflow: hidden; position: relative; }
  .final-cta:after { content: ""; position: absolute; width: 360px; height: 360px; border: 1px solid rgba(255,255,255,.13); border-radius: 50%; right: -150px; top: -170px; }
  .final-cta h2 { color: #FFF; max-width: 650px; }
  .final-cta p { color: #F2DCE5; margin-top: 18px; max-width: 680px; font-size: 18px; line-height: 1.66; }
  .final-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; position: relative; z-index: 2; }
  .text-action { display: inline-flex; align-items: center; gap: 7px; color: #FFF !important; font-size: 16px; font-weight: 600; }
  .text-action svg { color: #FFF; }

  @media (max-width: 1279px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-grid { gap: 44px; }
    .hero-art { min-height: 470px; }
    .industry-item { padding-left: 24px; padding-right: 24px; }
    .industry-item:nth-child(3n+1) { padding-left: 0; }
    .process-step { padding-left: 16px; padding-right: 16px; }
    .process-step:first-child { padding-left: 0; }
    .process-step:last-child { padding-right: 0; }
  }

  @media (max-width: 980px) {
    .stp-page h1 { font-size: 42px; }
    .stp-page h2 { font-size: 32px; }
    .stp-page h3 { font-size: 22px; }
    .shell { padding-left: 24px; padding-right: 24px; }
    .section, .section-pad { padding-top: 80px; padding-bottom: 80px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; margin-left: auto; margin-right: auto; text-align: center; }
    .hero-copy .eyebrow { text-align: center; }
    .hero-copy h1, .hero-lead { margin-left: auto; margin-right: auto; }
    .locale-line { justify-content: center; }
    .cta-row { justify-content: center; }
    .hero-art { max-width: 720px; min-height: 460px; margin-left: auto; margin-right: auto; }
    .proof-grid { grid-template-columns: 1fr 1fr; }
    .proof-item { border-bottom: 1px solid var(--line); }
    .proof-item:nth-child(odd) { border-left: 0; padding-left: 0; }
    .proof-item:nth-child(even) { padding-right: 0; }
    .proof-item:nth-child(3), .proof-item:nth-child(4) { border-bottom: 0; }
    .overview-grid, .assets-grid, .qa-grid, .enterprise-grid, .faq-shell, .related-grid { grid-template-columns: 1fr; gap: 48px; }
    .overview-grid .sticky-heading, .assets-copy, .qa-copy, .enterprise-copy, .faq-heading { max-width: 760px; }
    .overview-grid .sticky-heading, .assets-copy, .qa-copy, .enterprise-copy { margin-left: auto; margin-right: auto; }
    .overview-grid .sticky-heading, .assets-copy .eyebrow, .assets-copy h2, .qa-copy .eyebrow, .qa-copy h2, .enterprise-copy .eyebrow, .enterprise-copy h2 { text-align: center; }
    .assets-copy > p, .qa-copy > p, .enterprise-copy > p { text-align: left; }
    .assets-links { justify-content: center; }
    .qa-copy .editorial-link { justify-content: center; }
    .service-editorial-grid { column-gap: 36px; }
    .industry-grid { grid-template-columns: 1fr 1fr; }
    .industry-item, .industry-item:nth-child(3n+1) { padding-left: 22px; padding-right: 22px; }
    .industry-item:nth-child(2n+1) { padding-left: 0; border-right: 1px solid #3A3A40; }
    .industry-item:nth-child(2n) { border-right: 0; padding-right: 0; }
    .direction-panel { grid-template-columns: 1fr; }
    .direction-panel article { min-height: auto; }
    .direction-panel article + article { border-left: 0; border-top: 1px solid var(--line); }
    .process { grid-template-columns: 1fr 1fr; }
    .process-step { min-height: 250px; border-bottom: 1px solid #E0D6DB; }
    .process-step:nth-child(2n) { border-right: 0; padding-right: 0; }
    .process-step:nth-child(2n+1) { padding-left: 0; }
    .process-step:nth-child(5), .process-step:nth-child(6) { border-bottom: 0; }
    .digital-band { grid-template-columns: 1fr 1fr; }
    .digital-band article { border-bottom: 1px solid var(--line); }
    .digital-band article:nth-child(2n) { border-right: 0; padding-right: 0; }
    .digital-band article:nth-child(2n+1) { padding-left: 0; }
    .digital-band article:nth-child(3), .digital-band article:nth-child(4) { border-bottom: 0; }
    .enterprise-flow { max-width: 780px; }
    .related-grid > div:first-child { max-width: 720px; margin-left: auto; margin-right: auto; text-align: center; }
    .related-grid > div:first-child p { text-align: left; }
    .related-grid > div:first-child .editorial-link { justify-content: center; }
    .final-cta { grid-template-columns: 1fr; gap: 30px; text-align: center; }
    .final-cta h2, .final-cta p { margin-left: auto; margin-right: auto; }
    .final-actions { flex-direction: row; align-items: center; justify-content: center; }
  }

  @media (max-width: 767px) {
    .stp-page h1 { font-size: 38px; line-height: 1.08; }
    .stp-page h2 { font-size: 30px; line-height: 1.18; }
    .stp-page h3 { font-size: 20px; }
    .shell { padding-left: 20px; padding-right: 20px; }
    .section, .section-pad { padding-top: 68px; padding-bottom: 68px; }
    .heading-group { margin-bottom: 42px; }
    .heading-group, .heading-group .section-intro { text-align: center; }
    .hero-copy { text-align: center; margin: 0 auto; }
    .hero-copy .eyebrow { text-align: center; }
    .hero-copy h1, .hero-lead { margin-left: auto; margin-right: auto; }
    .hero-lead { margin-top: 20px !important; }
    .locale-line { justify-content: center; row-gap: 8px; }
    .cta-row { flex-direction: column; }
    .cta-row .btn { width: 100%; }
    .hero-art { min-height: 450px; padding: 18px; }
    .hero-art-topline { align-items: flex-start; flex-direction: column; }
    .hero-art-main { grid-template-columns: 1fr; padding: 24px 0 18px; }
    .flow-node { transform: rotate(90deg); margin: 0 auto; }
    .source-panel { min-height: 142px; }
    .hero-landmarks { width: 88%; opacity: .4; }
    .proof-grid { grid-template-columns: 1fr; }
    .proof-item, .proof-item:nth-child(odd), .proof-item:nth-child(even) { padding: 21px 0; border-left: 0; border-bottom: 1px solid var(--line); }
    .proof-item:last-child { border-bottom: 0; }
    .overview-grid { gap: 32px; }
    .sticky-heading { text-align: center; max-width: 600px; margin: 0 auto; }
    .overview-copy, .overview-copy p, .quiet-points { text-align: left; }
    .overview-copy .editorial-link { margin-top: 18px; }
    .locale-compare { grid-template-columns: 1fr; }
    .locale-column { padding: 28px 22px; }
    .locale-column + .locale-column { border-left: 0; border-top: 1px solid #E5D9DF; }
    .locale-note { grid-template-columns: 44px 1fr; align-items: start; padding: 22px; }
    .locale-note .editorial-link { grid-column: 2; margin-top: 4px; white-space: normal; }
    .service-editorial-grid { grid-template-columns: 1fr; }
    .service-row { grid-template-columns: 44px 1fr; padding: 26px 0; }
    .industry-grid { grid-template-columns: 1fr; }
    .industry-item, .industry-item:nth-child(3n+1), .industry-item:nth-child(2n+1), .industry-item:nth-child(2n) { padding: 26px 0; border-right: 0; }
    .direction-panel article { padding: 28px 22px; }
    .assets-grid { gap: 34px; }
    .assets-copy { text-align: left; }
    .assets-copy .eyebrow, .assets-copy h2 { text-align: center; }
    .assets-copy .body-large { text-align: left; }
    .assets-links { display: grid; }
    .asset-stack { padding: 22px 18px; }
    .asset-card { grid-template-columns: 40px 1fr; }
    .asset-state { grid-column: 2; justify-self: start; }
    .asset-flow { justify-content: flex-start; }
    .model-row { grid-template-columns: 1fr; gap: 12px; padding: 24px 0; }
    .model-label { grid-template-columns: 76px 1fr; }
    .center-link { justify-content: flex-start; }
    .qa-grid { gap: 34px; }
    .qa-copy { text-align: left; }
    .qa-copy .eyebrow, .qa-copy h2 { text-align: center; }
    .qa-copy p { text-align: left; }
    .qa-matrix { grid-template-columns: 1fr; }
    .qa-item, .qa-item:nth-child(odd) { padding: 24px 0; border-right: 0; }
    .digital-band { grid-template-columns: 1fr; }
    .digital-band article, .digital-band article:first-child, .digital-band article:nth-child(2n), .digital-band article:nth-child(2n+1), .digital-band article:last-child { padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .digital-band article:last-child { border-bottom: 0; }
    .digital-note { text-align: left; }
    .process { grid-template-columns: 1fr; border-top: 0; }
    .process-step, .process-step:first-child, .process-step:nth-child(3n+1), .process-step:nth-child(n+4), .process-step:last-child { min-height: auto; padding: 24px 0; border-right: 0; border-bottom: 1px solid #E0D6DB; display: grid; grid-template-columns: 52px 1fr; column-gap: 16px; }
    .process-step:last-child { border-bottom: 0; }
    .process-number { grid-column: 1; grid-row: 1; margin-bottom: 0; padding-top: 4px; }
    .process-step h3 { grid-column: 2; grid-row: 1; }
    .process-step p { grid-column: 2; grid-row: 2; margin-top: 8px; }
    .process-cta .btn { width: 100%; }
    .enterprise-grid { gap: 36px; }
    .enterprise-copy { text-align: left; }
    .enterprise-copy .eyebrow, .enterprise-copy h2 { text-align: center; }
    .enterprise-flow { grid-template-columns: 1fr; min-height: 0; }
    .flow-sources { grid-template-columns: 1fr 1fr; }
    .flow-brand { min-height: 165px; }
    .flow-output { grid-template-columns: 1fr; }
    .faq-shell { gap: 32px; }
    .faq-heading { text-align: left; max-width: 680px; }
    .faq-heading .eyebrow, .faq-heading h2, .faq-heading p { text-align: left; }
    .faq-question { font-size: 17px; }
    .faq-answer { padding-right: 0; }
    .related-grid { gap: 36px; }
    .related-grid > div:first-child { text-align: center; }
    .related-grid > div:first-child p { text-align: left; }
    .related-grid > div:first-child .editorial-link { justify-content: center; }
    .final-cta-section { padding: 20px 0 64px; }
    .final-cta { padding: 38px 24px; border-radius: 26px; }
    .final-cta h2, .final-cta p { text-align: center; }
    .final-actions { width: 100%; flex-direction: column; }
    .final-actions .btn { width: 100%; }
    .text-action { min-height: 44px; }
  }

  @media (max-width: 390px) {
    .hero-art { min-height: 465px; }
    .locale-line i { display: none; }
    .locale-line { flex-direction: column; }
    .service-row { grid-template-columns: 40px 1fr; gap: 14px; }
    .service-icon { width: 40px; height: 40px; }
    .locale-heading { align-items: flex-start; }
    .locale-code { width: 46px; height: 46px; border-radius: 14px; }
    .flow-sources { grid-template-columns: 1fr; }
  }

  @media (max-width: 320px) {
    .hero-art { padding: 16px; }
    .hero-art-topline { font-size: 11px; }
    .status-dot { flex-wrap: wrap; }
    .locale-card { align-items: flex-start; }
    .locale-card > div { min-width: 0; }
    .review-row { grid-template-columns: 32px minmax(0,1fr); align-items: start; }
    .review-state { grid-column: 2; justify-self: start; margin-top: 2px; }
    .review-icon { width: 32px; height: 32px; }
    .locale-note { grid-template-columns: 1fr; }
    .locale-note .editorial-link { grid-column: 1; }
    .model-label { grid-template-columns: 1fr; gap: 5px; }
    .asset-card { grid-template-columns: 1fr; }
    .asset-state { grid-column: 1; }
    .process-step, .process-step:first-child, .process-step:nth-child(3n+1), .process-step:nth-child(n+4), .process-step:last-child { grid-template-columns: 44px 1fr; }
  }
`;
