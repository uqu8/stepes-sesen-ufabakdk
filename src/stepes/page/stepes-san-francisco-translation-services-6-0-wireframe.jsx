import React, { useState } from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  translation: "https://www.stepes.com/translation-services/",
  document: "https://www.stepes.com/document-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  ai: "https://www.stepes.com/ai-translation-services/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  certified: "https://www.stepes.com/certified-translation-services/",
  interpreting: "https://www.stepes.com/interpretation-services/",
  aiOutput: "https://www.stepes.com/ai-output-review-services/",
  aiReview: "https://www.stepes.com/ai-translation-review/",
  lifeSciences: "https://www.stepes.com/life-sciences-translation-services/",
  medicalDevice: "https://www.stepes.com/medical-device-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  developers: "https://www.stepes.com/developers/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  global: "https://www.stepes.com/global-presence/",
  companyBackground: "https://www.stepes.com/about/company-background/"
};

const services = [
  { icon: "doc", title: "Professional Translation Services", text: "Translate corporate communications, technical materials, marketing content, policies, legal documents, financial information, scientific content, training, and other business-critical materials with professional linguists and subject-matter expertise.", link: LINKS.translation, label: "Professional Translation Services" },
  { icon: "files", title: "Document Translation", text: "Translate reports, manuals, presentations, policies, contracts, technical documentation, marketing materials, training content, and recurring enterprise documents while preserving terminology, formatting, and document structure.", link: LINKS.document, label: "Document Translation Services" },
  { icon: "globe", title: "Website Translation & Localization", text: "Build multilingual digital experiences for international customers across page content, navigation, metadata, forms, help centers, product information, multimedia, multilingual SEO, and ongoing updates.", link: LINKS.website, label: "Website Translation Services" },
  { icon: "code", title: "Software & App Localization", text: "Localize UI strings, dashboards, applications, notifications, help systems, documentation, onboarding flows, mobile apps, and recurring product releases for international markets.", link: LINKS.software, label: "Software Localization Services" },
  { icon: "spark", title: "AI Translation Services", text: "Combine artificial intelligence with translation memory, approved terminology, automated quality checks, and professional human expertise in workflows configured around content purpose and risk.", link: LINKS.ai, label: "AI Translation Services" },
  { icon: "review", title: "Machine Translation Post-Editing", text: "Improve AI- and machine-generated translations through professional linguistic review for accuracy, terminology, fluency, consistency, and business readiness.", link: LINKS.mtpe, label: "Machine Translation Post-Editing" },
  { icon: "seal", title: "Certified Translation Services", text: "Support legal, academic, immigration, corporate, financial, and administrative documents that require formal translation certification.", link: LINKS.certified, label: "Certified Translation Services" },
  { icon: "talk", title: "Interpreting Services", text: "Support multilingual meetings, interviews, training, customer interactions, legal matters, and other live communication requirements with remote and on-site options.", link: LINKS.interpreting, label: "Interpreting Services" }
];

const industries = [
  { title: "Artificial Intelligence & Technology", text: "AI model developers, generative AI companies, software and SaaS platforms, developer tools, product interfaces, technical documentation, multilingual AI outputs, chatbots, AI assistants, and global product launches.", link: LINKS.ai, label: "AI Translation Services" },
  { title: "Life Sciences & Biotechnology", text: "Clinical, regulatory, scientific, technical, patient-facing, medical-device, research, quality, training, and commercialization content across the product lifecycle.", link: LINKS.lifeSciences, label: "Life Sciences Translation Services" },
  { title: "Financial Services & Fintech", text: "Financial reports, investor communications, customer content, disclosures, policies, compliance materials, digital financial products, and business documentation.", link: LINKS.financial, label: "Financial Translation Services" },
  { title: "Legal & Professional Services", text: "Contracts, litigation, arbitration, investigations, intellectual property, employment matters, regulatory documents, compliance content, and corporate transactions.", link: LINKS.legal, label: "Legal Translation Services" },
  { title: "Healthcare & Medical Devices", text: "Patient, clinical, technical, regulatory, software, training, IFU, labeling, quality, and connected-device content for global markets.", link: LINKS.medicalDevice, label: "Medical Device Translation Services" },
  { title: "Global Corporate Communications", text: "Employee communications, HR materials, corporate policies, ESG and sustainability content, training, investor communications, sales materials, marketing, and presentations." }
];

const workflow = [
  { title: "Analyze", text: "Review files, languages, audience, subject matter, terminology, existing language assets, formatting, deadline, and quality expectations." },
  { title: "Prepare", text: "Organize approved terminology, glossaries, style guidance, translation memories, reference content, and do-not-translate instructions." },
  { title: "Translate", text: "Use the right production model: professional human translation, AI-assisted translation, MTPE, translation-memory reuse, or a hybrid workflow." },
  { title: "Review & QA", text: "Validate meaning, terminology, tone, completeness, numbers, formatting, protected content, variables, and repeatable quality risks." },
  { title: "Deliver & Improve", text: "Deliver in the required format and retain approved corrections, terminology, and translation-memory content for future work." }
];

const technology = [
  { title: "Translation Memory", text: "Preserve previously translated and approved content so recurring documents, software releases, product updates, policies, and global communications can reuse validated language." },
  { title: "Terminology Management", text: "Govern product names, technical terms, legal concepts, scientific language, acronyms, and brand phrases across translators, AI workflows, reviewers, and content types.", link: LINKS.terminology, label: "Terminology Management" },
  { title: "Translation Quality Assurance", text: "Build quality into the workflow with terminology, translation memory, automated QA, linguistic evaluation, subject-matter review, approval, and continuous improvement.", link: LINKS.quality, label: "Translation Quality Assurance" },
  { title: "APIs & Integrations", text: "Connect translation with software, websites, applications, and enterprise content systems to reduce manual file exchange and automate recurring multilingual content flows.", link: LINKS.developers, label: "Stepes Developer Platform" },
  { title: "Centralized Multilingual Operations", text: "Coordinate requests, languages, professional resources, reviewers, deadlines, linguistic assets, quality requirements, and delivery through connected digital workflows." }
];

const linguists = [
  ["Professional Translators", "Native-language professionals translate content with subject-matter expertise and market awareness."],
  ["Editors & Reviewers", "Independent reviewers compare source and target content and improve accuracy, terminology, fluency, consistency, and style."],
  ["Subject-Matter Linguists", "Specialists support technology, life sciences, legal, financial, manufacturing, engineering, and other technical fields."],
  ["MT Post-Editors", "Qualified linguists evaluate and correct machine- and AI-generated translations against defined quality requirements."],
  ["AI Output Evaluators", "Reviewers assess multilingual LLM, chatbot, conversational AI, and generative outputs for real-world quality."],
  ["Localization Specialists", "Language and technical specialists address software, website, file, layout, locale, and in-context requirements."]
];

const why = [
  ["AI + Human Expertise", "Use AI where it improves speed and scalability while applying professional linguistic judgment where context, nuance, accuracy, or business risk requires human expertise."],
  ["Industry Specialization", "Match translators, reviewers, and subject-matter linguists to your industry, content, language pair, audience, and project requirements."],
  ["Global Scale", "Support multilingual content across 100+ languages, from individual projects to enterprise programs spanning markets, departments, and recurring releases."],
  ["Enterprise Translation Technology", "Connect AI, translation memory, terminology management, automated QA, workflow automation, APIs, and professional review within one operating model."],
  ["Flexible Translation Models", "Choose professional human translation, AI-assisted translation, MTPE, independent review, or higher-control specialist workflows according to the content."],
  ["Quality by Design", "Define quality before translation begins and apply terminology, qualified resources, review, automated checks, final-format validation, and approval according to intended use."]
];

const faqs = [
  ["What types of translation services does Stepes provide in San Francisco?", "Stepes provides professional translation, document translation, website translation, software and app localization, AI translation, machine translation post-editing, certified translation, legal translation, life sciences translation, financial translation, and interpreting services. We support both individual projects and recurring enterprise multilingual programs."],
  ["Does Stepes provide translation services throughout the Bay Area?", "Yes. Stepes supports organizations throughout San Francisco, Silicon Valley, the Peninsula, Oakland and the East Bay, and the broader Bay Area. Most translation and localization projects can be managed digitally, giving Bay Area teams access to professional linguists and multilingual resources around the world."],
  ["How many languages does Stepes support?", "Stepes supports translation and localization in more than 100 languages and regional variants across major European, Asian, Latin American, Middle Eastern, and African markets. Multinational projects can coordinate multiple languages through one centralized workflow while retaining market-specific linguistic expertise."],
  ["Does Stepes use AI or professional human translators?", "Both, depending on the content. Stepes selects the appropriate combination of AI translation, translation memory, professional human translation, machine translation post-editing, specialist review, and quality assurance according to purpose, audience, complexity, quality expectations, and business risk."],
  ["Can Stepes localize software and SaaS products?", "Yes. Stepes localizes SaaS platforms, web applications, mobile apps, enterprise software, dashboards, user interfaces, product documentation, help centers, onboarding content, notifications, and recurring software releases. API-connected and continuous localization workflows are also available for frequently updated products."],
  ["Does Stepes support multilingual AI and LLM products?", "Yes. Stepes supports multilingual AI products, LLM-powered applications, chatbots, AI assistants, and generative content workflows through AI translation, localization, terminology management, professional linguistic review, and multilingual AI output evaluation. Workflows can be configured for static product content as well as dynamically generated outputs that require human quality validation across markets."],
  ["Can Stepes review translations created by ChatGPT or other AI systems?", "Yes. Stepes provides professional AI translation review and multilingual AI output evaluation for translations and content generated by large language models, machine translation systems, enterprise AI platforms, and other automated tools. Review can cover source-to-target accuracy, terminology, fluency, completeness, context, tone, and suitability for the intended audience."],
  ["Does Stepes provide legal and life sciences translation services?", "Yes. Stepes provides specialized translation for legal, medical, pharmaceutical, biotechnology, medical-device, healthcare, financial, technical, and other professional fields. Professional linguists and reviewers are selected according to subject matter, language, target market, intended use, and required quality controls."],
  ["Does Stepes provide certified translations in San Francisco?", "Yes. Stepes provides certified translation services for legal, immigration, academic, corporate, financial, and administrative documents when a formal certification is required. Share how the translation will be used and any receiving-organization requirements so the appropriate delivery format can be recommended."],
  ["How can I get a quote for translation services?", "Upload your files through the Stepes online quote system and select your source and target languages. For complex projects, recurring multilingual programs, software localization, AI translation, interpreting, or enterprise requirements, contact our sales team for a workflow recommendation based on scope, intended use, quality requirements, timeline, and languages."]
];

function Icon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    doc: <><path {...common} d="M7 3h7l4 4v14H7z"/><path {...common} d="M14 3v5h5M10 12h6M10 16h6"/></>,
    files: <><path {...common} d="M8 6h10v15H8z"/><path {...common} d="M5 3h10v3M5 3v15h3"/></>,
    globe: <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    code: <><path {...common} d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14"/></>,
    spark: <><path {...common} d="M12 3l1.4 4.1L18 9l-4.6 1.9L12 15l-1.4-4.1L6 9l4.6-1.9z"/><path {...common} d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/></>,
    review: <><path {...common} d="M4 5h16v12H8l-4 4z"/><path {...common} d="m8 11 2.4 2.4L16 8"/></>,
    seal: <><circle {...common} cx="12" cy="10" r="6"/><path {...common} d="m8.5 15-1 6 4.5-2 4.5 2-1-6"/><path {...common} d="m9.5 10 1.6 1.6 3.4-3.4"/></>,
    talk: <><path {...common} d="M4 5h12v10H9l-5 4z"/><path {...common} d="M16 9h4v8h-3l-3 3v-5"/></>
  };
  return <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.doc}</svg>;
}

function ArrowLink({ href, children, light = false }) {
  return <a className={light ? "editorial-link light" : "editorial-link"} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

function SectionHeading({ eyebrow, title, intro, center = true, dark = false }) {
  return <div className={`section-heading ${center ? "center" : ""} ${dark ? "dark" : ""}`}>
    {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>;
}

function HeroArt() {
  return <div className="hero-art" aria-label="San Francisco, global technology, and multilingual content illustration" role="img">
    <svg viewBox="0 0 620 520" aria-hidden="true">
      <defs>
        <linearGradient id="soft" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#FDF2F7"/><stop offset="1" stopColor="#FFFFFF"/></linearGradient>
      </defs>
      <rect x="22" y="30" width="576" height="454" rx="36" fill="url(#soft)" stroke="#D8DCE2"/>
      <circle cx="488" cy="118" r="58" fill="#F7E4ED"/>
      <path d="M74 394h462" stroke="#8F97A3" strokeWidth="2"/>
      <path d="M103 394V285h48v109M164 394V243h58v151M236 394V308h50v86M303 394V189h51v205M368 394V266h46v128M430 394V319h45v75" fill="none" stroke="#697281" strokeWidth="3"/>
      <path d="M326 189v-42M315 155h22" stroke="#697281" strokeWidth="3"/>
      <path d="M90 344c52-35 102-35 151 0M88 342h155M116 342v52M214 342v52" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
      <path d="M82 342c24-42 47-64 76-79M247 342c-24-42-47-64-76-79" fill="none" stroke="#C11D63" strokeWidth="2" opacity=".78"/>
      <rect x="380" y="76" width="154" height="112" rx="18" fill="#fff" stroke="#CBD1D9"/>
      <rect x="401" y="101" width="84" height="8" rx="4" fill="#7B8491"/>
      <rect x="401" y="121" width="108" height="7" rx="3.5" fill="#C9CED5"/>
      <rect x="401" y="138" width="93" height="7" rx="3.5" fill="#C9CED5"/>
      <rect x="401" y="158" width="55" height="8" rx="4" fill="#C11D63" opacity=".82"/>
      <circle cx="530" cy="282" r="21" fill="#fff" stroke="#C11D63" strokeWidth="2"/>
      <circle cx="480" cy="240" r="10" fill="#fff" stroke="#7B8491" strokeWidth="2"/>
      <circle cx="455" cy="292" r="12" fill="#fff" stroke="#7B8491" strokeWidth="2"/>
      <circle cx="502" cy="337" r="11" fill="#fff" stroke="#7B8491" strokeWidth="2"/>
      <path d="M489 246l27 25M467 289l42-4M496 328l25-29" stroke="#A5ACB6" strokeWidth="2"/>
      <text x="520" y="287" textAnchor="middle" fontSize="12" fontWeight="600" fill="#C11D63">AI</text>
      <text x="480" y="244" textAnchor="middle" fontSize="9" fontWeight="600" fill="#5E6672">EN</text>
      <text x="455" y="296" textAnchor="middle" fontSize="9" fontWeight="600" fill="#5E6672">JA</text>
      <text x="502" y="341" textAnchor="middle" fontSize="9" fontWeight="600" fill="#5E6672">DE</text>
      <rect x="92" y="83" width="210" height="92" rx="18" fill="#fff" stroke="#CBD1D9"/>
      <circle cx="120" cy="112" r="9" fill="#C11D63"/>
      <rect x="140" y="105" width="115" height="8" rx="4" fill="#697281"/>
      <rect x="110" y="132" width="160" height="7" rx="3.5" fill="#CCD1D8"/>
      <rect x="110" y="149" width="126" height="7" rx="3.5" fill="#CCD1D8"/>
      <path d="M278 448c32-10 58-23 84-42" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 7"/>
      <circle cx="368" cy="403" r="4" fill="#C11D63"/>
    </svg>
  </div>;
}

function ProductMockup() {
  return <div className="product-mockup" aria-label="Multilingual product localization workflow example">
    <div className="mock-top"><span className="mock-dot active"/><span className="mock-dot"/><span className="mock-dot"/><span className="mock-title">Global AI Product Release</span><span className="mock-status">Human review</span></div>
    <div className="mock-body">
      <div className="mock-nav">
        <div className="mock-nav-label">CONTENT</div>
        <div className="mock-nav-item active">Assistant settings</div>
        <div className="mock-nav-item">Knowledge base</div>
        <div className="mock-nav-item">Release notes</div>
        <div className="mock-nav-label">LOCALES</div>
        <div className="mock-locale"><span>ES</span><b>Ready</b></div>
        <div className="mock-locale"><span>JA</span><b>Review</b></div>
        <div className="mock-locale"><span>DE</span><b>Ready</b></div>
      </div>
      <div className="mock-main">
        <div className="mock-chip">SOURCE · ENGLISH</div>
        <h4>Connect your AI workspace</h4>
        <p>Select the workspace you want your multilingual assistant to use.</p>
        <div className="mock-divider"/>
        <div className="mock-chip magenta">JAPANESE · REVIEW</div>
        <h4>AIワークスペースを接続</h4>
        <p>多言語アシスタントで使用するワークスペースを選択してください。</p>
        <div className="mock-qa"><span>Terminology</span><b>Applied</b><span>Variables</span><b>Protected</b><span>QA</span><b>Passed</b></div>
      </div>
    </div>
  </div>;
}

export default function StepesSanFranciscoTranslationServices60() {
  const [openFaq, setOpenFaq] = useState(0);
  return <>
    <style>{`
      :root{--ink:#18202B;--body:#485162;--muted:#6F7885;--line:#D9DEE5;--soft:#F6F7F9;--blush:#FDF2F7;--mag:#C11D63;--mag2:#A71954;--burg:#7A1542;--dark:#171B22;--white:#FFFFFF}
      *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}a{color:inherit}.sf-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--ink);background:#fff;overflow:hidden}.container{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.soft{background:var(--soft)}.blush{background:var(--blush)}.dark-section{background:var(--dark);color:white}.eyebrow{font-size:11px;line-height:1.35;letter-spacing:.13em;font-weight:600;text-transform:uppercase;color:var(--mag);margin-bottom:16px}.dark .eyebrow,.dark-section .eyebrow{color:#F2A7C6}.section-heading{max-width:840px;margin-bottom:48px}.section-heading.center{margin-left:auto;margin-right:auto;text-align:center}.section-heading h2{font-size:36px;line-height:1.12;letter-spacing:-.025em;font-weight:600;margin:0}.section-heading .section-intro{font-size:18px;line-height:1.68;color:var(--body);margin:20px auto 0;max-width:820px}.section-heading.dark .section-intro,.dark-section .section-intro{color:#D8DDE4}.body-copy{font-size:17px;line-height:1.72;color:var(--body)}.body-copy p{margin:0 0 18px}.body-copy p:last-child{margin-bottom:0}h3{font-size:24px;line-height:1.24;font-weight:600;letter-spacing:-.015em;margin:0 0 12px}.page-h2{font-size:36px;line-height:1.12;letter-spacing:-.025em;font-weight:600;margin:0}.hero{padding:104px 0 94px;background:#fff}.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(420px,.95fr);gap:56px;align-items:center}.hero h1{font-size:48px;line-height:1.04;letter-spacing:-.038em;font-weight:600;margin:0;max-width:670px}.hero-copy{font-size:18px;line-height:1.68;color:var(--body);max-width:720px;margin:24px 0 0}.hero-copy strong{font-weight:600}.hero-actions{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap}.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 23px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;border:1px solid transparent;transition:.18s ease}.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus{background:var(--mag);color:#fff!important}.btn-primary:hover{background:var(--mag2);transform:translateY(-1px)}.btn-secondary{background:#fff;border-color:#C9CFD7;color:var(--ink)}.btn-secondary:hover{border-color:#9DA5B0}.hero-note{display:flex;align-items:center;gap:10px;margin-top:26px;font-size:16px;color:var(--body)}.hero-note svg{color:var(--mag);flex:0 0 auto}.hero-art{width:100%;max-width:590px;justify-self:end}.hero-art svg{width:100%;height:auto;display:block}.proof-wrap{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-item{padding:25px 28px;border-right:1px solid var(--line)}.proof-item:last-child{border-right:0}.proof-item strong{display:block;font-size:17px;font-weight:600;margin-bottom:5px}.proof-item span{display:block;color:var(--body);font-size:16px;line-height:1.5}.origin-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:76px;align-items:start}.origin-side{position:sticky;top:28px}.origin-card{margin-top:30px;border:1px solid var(--line);border-radius:24px;padding:26px;background:white}.origin-card strong{display:block;font-size:18px;font-weight:600;margin-bottom:8px}.origin-card p{font-size:16px;line-height:1.6;color:var(--body);margin:0}.origin-links{display:flex;gap:22px;flex-wrap:wrap;margin-top:28px}.editorial-link{display:inline-flex;align-items:center;gap:8px;min-height:44px;color:var(--mag);font-size:16px;font-weight:600;text-decoration:none}.editorial-link span{transition:transform .18s ease}.editorial-link:hover span{transform:translate(2px,-2px)}.editorial-link.light{color:#F2A7C6}.service-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}.service-item{padding:32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:265px}.service-item:nth-child(even){border-right:0}.service-item:nth-last-child(-n+2){border-bottom:0}.icon-box{width:46px;height:46px;border-radius:14px;background:#F7F3F5;color:var(--mag);display:flex;align-items:center;justify-content:center;margin-bottom:22px}.service-item p{font-size:17px;line-height:1.65;color:var(--body);margin:0 0 14px}.industry-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #373D47;border-left:1px solid #373D47;border-radius:28px;overflow:hidden}.industry-item{padding:34px;border-right:1px solid #373D47;border-bottom:1px solid #373D47;min-height:240px}.industry-item:nth-child(3n){border-right:0}.industry-item:nth-last-child(-n+3){border-bottom:0}.industry-item h3{color:#fff}.industry-item p{font-size:17px;line-height:1.66;color:#D6DBE2;margin:0 0 14px}.workflow{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.workflow-step{padding:30px 24px 32px;border-right:1px solid var(--line)}.workflow-step:last-child{border-right:0}.step-num{font-size:13px;font-weight:600;color:var(--mag);letter-spacing:.08em;margin-bottom:18px}.workflow-step h3{font-size:20px}.workflow-step p{font-size:16px;line-height:1.62;color:var(--body);margin:0}.workflow-note{max-width:860px;margin:32px auto 0;text-align:center;font-size:17px;line-height:1.7;color:var(--body)}.tech-product-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:60px;align-items:center}.feature-list{margin:28px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:0 26px}.feature-list li{font-size:16px;line-height:1.48;color:var(--body);padding:12px 0;border-bottom:1px solid var(--line)}.product-mockup{border:1px solid #C9CFD7;border-radius:28px;background:#fff;box-shadow:0 18px 45px rgba(20,29,39,.08);overflow:hidden}.mock-top{height:58px;padding:0 20px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--line);font-size:13px;color:var(--muted)}.mock-dot{width:8px;height:8px;border-radius:50%;background:#D3D7DD}.mock-dot.active{background:var(--mag)}.mock-title{font-weight:600;color:var(--ink);margin-left:8px}.mock-status{margin-left:auto;background:#F6EDF1;color:var(--mag);border-radius:999px;padding:6px 10px;font-weight:600}.mock-body{display:grid;grid-template-columns:170px 1fr;min-height:365px}.mock-nav{background:#F7F8FA;padding:20px 14px;border-right:1px solid var(--line)}.mock-nav-label{font-size:11px;font-weight:600;letter-spacing:.1em;color:#818A97;margin:5px 8px 10px}.mock-nav-item{font-size:13px;color:#616A77;padding:9px 9px;border-radius:9px;margin-bottom:3px}.mock-nav-item.active{background:#fff;color:var(--ink);font-weight:600}.mock-locale{display:flex;justify-content:space-between;gap:8px;padding:8px 9px;font-size:12px;color:#626B77}.mock-locale b{font-weight:600;color:#697281}.mock-main{padding:30px}.mock-chip{display:inline-flex;font-size:11px;font-weight:600;letter-spacing:.08em;color:#6D7682;background:#F2F4F6;border-radius:999px;padding:6px 9px}.mock-chip.magenta{background:#FCEAF2;color:var(--mag)}.mock-main h4{font-size:20px;font-weight:600;line-height:1.25;margin:13px 0 8px}.mock-main p{font-size:16px;line-height:1.55;color:var(--body);margin:0}.mock-divider{height:1px;background:var(--line);margin:24px 0}.mock-qa{display:grid;grid-template-columns:1fr auto;gap:8px 18px;margin-top:20px;padding-top:18px;border-top:1px dashed #D5DAE1;font-size:12px;color:#737C88}.mock-qa b{color:#29313B;font-weight:600}.split-regulated{display:grid;grid-template-columns:.9fr 1.1fr;gap:68px;align-items:start}.content-list{margin:22px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:0 28px}.content-list li{position:relative;padding:11px 0 11px 18px;border-bottom:1px solid #E3D7DD;font-size:16px;line-height:1.5;color:var(--body)}.content-list li:before{content:"";position:absolute;left:0;top:20px;width:6px;height:6px;border-radius:50%;background:var(--mag)}.iso-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.iso-tag{border:1px solid #DEC4D0;background:#fff;border-radius:999px;padding:9px 12px;font-size:13px;font-weight:600;color:#744657}.legal-fin-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid #343B45;border-radius:28px;overflow:hidden}.legal-fin-col{padding:38px}.legal-fin-col:first-child{border-right:1px solid #343B45}.legal-fin-col p{font-size:17px;line-height:1.68;color:#D7DCE2}.dark-list{margin:20px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:8px 22px}.dark-list li{font-size:16px;color:#E4E8ED;padding:8px 0;border-bottom:1px solid #323943}.tech-rows{border-top:1px solid var(--line)}.tech-row{display:grid;grid-template-columns:.42fr 1fr auto;gap:36px;align-items:center;padding:28px 0;border-bottom:1px solid var(--line)}.tech-row h3{font-size:20px;margin:0}.tech-row p{font-size:17px;line-height:1.62;color:var(--body);margin:0}.linguist-grid,.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.quiet-card{border:1px solid var(--line);border-radius:22px;padding:26px;background:#fff}.quiet-card h3{font-size:20px}.quiet-card p{font-size:17px;line-height:1.62;color:var(--body);margin:0}.local-grid{display:grid;grid-template-columns:1fr .82fr;gap:58px;align-items:center}.support-list{margin:24px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:8px 28px}.support-list li{font-size:16px;color:var(--body);padding:8px 0;border-bottom:1px solid var(--line)}.office-panel{border-radius:28px;background:var(--dark);color:#fff;padding:34px;position:relative;overflow:hidden}.office-panel:before{content:"";position:absolute;width:220px;height:220px;border:1px solid rgba(242,167,198,.24);border-radius:50%;right:-72px;top:-72px}.office-panel .eyebrow{color:#F2A7C6}.office-panel h3{font-size:28px;margin-bottom:22px}.office-address{font-size:18px;line-height:1.62;color:#F0F2F5;margin-bottom:22px}.office-meta{font-size:16px;line-height:1.6;color:#C9CFD7;border-top:1px solid #39404A;padding-top:20px}.faq-panel{max-width:1000px;margin:0 auto;border-top:1px solid var(--line)}.faq-item{border-bottom:1px solid var(--line)}.faq-button{width:100%;border:0;background:transparent;text-align:left;padding:24px 4px;display:flex;align-items:center;justify-content:space-between;gap:24px;font-family:inherit;color:var(--ink);font-size:18px;font-weight:600;cursor:pointer}.faq-button span:last-child{width:28px;height:28px;border:1px solid #C9CFD7;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:0 0 auto;font-size:20px;line-height:1;color:var(--mag)}.faq-answer{max-width:840px;padding:0 50px 24px 4px;font-size:17px;line-height:1.7;color:var(--body)}.final-cta{padding:88px 0;background:var(--blush)}.cta-box{text-align:center;max-width:900px;margin:0 auto}.cta-box h2{font-size:36px;line-height:1.13;letter-spacing:-.025em;font-weight:600;margin:0}.cta-box p{font-size:18px;line-height:1.68;color:var(--body);max-width:760px;margin:20px auto 0}.cta-actions{display:flex;justify-content:center;gap:12px;margin-top:30px;flex-wrap:wrap}
      @media(max-width:1024px){.container{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr .9fr;gap:36px}.industry-grid{grid-template-columns:1fr 1fr}.industry-item:nth-child(3n){border-right:1px solid #373D47}.industry-item:nth-child(even){border-right:0}.industry-item:nth-last-child(-n+3){border-bottom:1px solid #373D47}.industry-item:nth-last-child(-n+2){border-bottom:0}.workflow{grid-template-columns:1fr 1fr}.workflow-step{border-bottom:1px solid var(--line)}.workflow-step:nth-child(even){border-right:0}.workflow-step:last-child{grid-column:1/-1;border-bottom:0;border-right:0}.tech-product-grid,.split-regulated,.local-grid{grid-template-columns:1fr;gap:46px}.tech-product-grid>div:first-child>.page-h2,.local-grid>div:first-child>.page-h2{text-align:center;max-width:840px;margin-left:auto;margin-right:auto}.product-mockup{max-width:760px}.linguist-grid,.why-grid{grid-template-columns:1fr 1fr}.tech-row{grid-template-columns:.55fr 1fr}.tech-row .editorial-link{grid-column:2}}
      @media(max-width:768px){.container{padding-left:24px;padding-right:24px}.section{padding:72px 0}.hero{padding:78px 0 72px}.hero-grid{grid-template-columns:1fr}.hero-copy{max-width:680px}.hero-art{max-width:560px;justify-self:center}.hero h1{font-size:42px}.section-heading h2,.cta-box h2,.page-h2{font-size:32px}.section-heading.center{max-width:690px}.proof-grid{grid-template-columns:1fr 1fr}.proof-item:nth-child(2){border-right:0}.proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}.origin-grid{grid-template-columns:1fr;gap:34px}.origin-side{position:static}.origin-side .section-heading{text-align:center;margin-left:auto;margin-right:auto}.local-grid>div:first-child>.page-h2{text-align:center}.service-grid{grid-template-columns:1fr}.service-item{border-right:0!important;border-bottom:1px solid var(--line)!important;min-height:auto}.service-item:last-child{border-bottom:0!important}.industry-grid{grid-template-columns:1fr}.industry-item{border-right:0!important;border-bottom:1px solid #373D47!important;min-height:auto}.industry-item:last-child{border-bottom:0!important}.workflow{grid-template-columns:1fr}.workflow-step{border-right:0;border-bottom:1px solid var(--line);padding:26px 8px}.workflow-step:last-child{grid-column:auto}.workflow-step{display:grid;grid-template-columns:46px 1fr;column-gap:16px}.step-num{grid-row:1/3;margin:2px 0 0}.workflow-step h3{margin-bottom:7px}.feature-list,.content-list,.support-list{grid-template-columns:1fr}.legal-fin-grid{grid-template-columns:1fr}.legal-fin-col:first-child{border-right:0;border-bottom:1px solid #343B45}.tech-row{grid-template-columns:1fr;gap:10px;padding:24px 0}.tech-row .editorial-link{grid-column:auto}.linguist-grid,.why-grid{grid-template-columns:1fr 1fr}.mock-body{grid-template-columns:135px 1fr}.mock-nav{padding:16px 10px}.mock-main{padding:24px}.final-cta{padding:72px 0}}
      @media(max-width:560px){.container{padding-left:20px;padding-right:20px}.hero{padding:68px 0 64px}.hero h1{font-size:38px;text-align:center}.hero .eyebrow{text-align:center}.hero-copy{text-align:center;font-size:18px}.hero-actions{flex-direction:column}.hero-actions .btn{width:100%}.hero-note{justify-content:center;text-align:left}.section-heading.center,.origin-side .section-heading{text-align:center}.section-heading h2,.cta-box h2,.page-h2{font-size:30px}.section-heading .section-intro{font-size:17px}.proof-grid{grid-template-columns:1fr}.proof-item{border-right:0!important;border-bottom:1px solid var(--line)!important;padding:20px 4px}.proof-item:last-child{border-bottom:0!important}.service-item,.industry-item,.quiet-card{padding:25px 22px}.linguist-grid,.why-grid{grid-template-columns:1fr}.legal-fin-col{padding:28px 22px}.dark-list{grid-template-columns:1fr}.mock-body{grid-template-columns:1fr}.mock-nav{display:none}.faq-button{font-size:17px;padding:22px 0}.faq-answer{padding:0 0 22px;font-size:17px}.cta-actions{flex-direction:column}.cta-actions .btn{width:100%}.office-panel{padding:28px 24px}.hero-art{margin-top:4px}.hero-art svg{min-width:0}.origin-links{gap:10px 18px}}
      @media(max-width:360px){.hero h1{font-size:36px}.container{padding-left:20px;padding-right:20px}.service-item,.quiet-card{padding:23px 20px}.office-panel{padding:26px 20px}}
    `}</style>
    <main className="sf-page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">San Francisco & Bay Area</div>
            <h1>San Francisco Translation Services</h1>
            <p className="hero-copy">Headquartered in San Francisco at the epicenter of today’s AI economy, Stepes provides professional translation, localization, and multilingual content solutions for Bay Area organizations and global enterprises. We combine expert linguists with AI-enabled translation technology, terminology management, translation memory, and enterprise quality controls to help companies communicate accurately and efficiently across markets.</p>
            <p className="hero-copy">From business documents and regulated content to software, websites, AI applications, and recurring enterprise localization programs, Stepes supports multilingual content in <strong>100+ languages</strong> with workflows matched to your content, audience, quality requirements, and business risk.</p>
            <div className="hero-actions"><a className="btn btn-primary" href={LINKS.quote}>Get a Quote <span aria-hidden="true">→</span></a><a className="btn btn-secondary" href={LINKS.contact}>Contact Sales</a></div>
            <div className="hero-note"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.7 8.1 7 10 4.3-1.9 7-5.5 7-10V6z" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="m9 12 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Secure enterprise workflows · No account required to begin a quote</span></div>
          </div>
          <HeroArt/>
        </div>
      </section>

      <div className="proof-wrap"><div className="container proof-grid">
        <div className="proof-item"><strong>100+ Languages</strong><span>Global and regional language coverage</span></div>
        <div className="proof-item"><strong>10,000+ Professional Linguists</strong><span>Language and subject-matter expertise</span></div>
        <div className="proof-item"><strong>2,000+ Enterprise Clients</strong><span>Multilingual support across industries and markets</span></div>
        <div className="proof-item"><strong>ISO-Certified Quality Processes</strong><span>Structured translation and quality management</span></div>
      </div></div>

      <section className="section">
        <div className="container origin-grid">
          <div className="origin-side">
            <SectionHeading title="Born in San Francisco. Built for Global Business." center={false}/>
            <div className="origin-card"><strong>San Francisco headquarters</strong><p>535 Mission Street, 15th Floor<br/>San Francisco, CA 94105</p></div>
          </div>
          <div className="body-copy">
            <p>Stepes was founded in San Francisco in 2015 with a simple idea: translation should combine professional language expertise with the speed, scalability, and accessibility of modern technology.</p>
            <p>That philosophy continues to shape how we support global companies today. From our San Francisco roots, Stepes has grown into an enterprise language-services company helping organizations translate and localize content across products, departments, languages, and markets.</p>
            <h3 style={{marginTop:30}}>At the Epicenter of the AI Economy</h3>
            <p>Today, San Francisco and the Bay Area sit at the center of the global generative AI boom, bringing together many of the companies, research teams, investors, and product builders shaping large language models, AI assistants, developer platforms, and enterprise AI. For these organizations, multilingual quality is increasingly part of the product itself, from localized interfaces and documentation to AI-generated outputs that must work reliably across languages and markets.</p>
            <p>Our technology connects professional linguists, AI-powered translation, translation memory, terminology management, review, quality assurance, and workflow automation in one coordinated multilingual process so translation can become part of how content moves through the organization rather than a disconnected step at the end.</p>
            <p>Whether you need to translate one important document, localize a software platform, validate AI-generated multilingual content, or manage an ongoing global translation program, Stepes can configure the right combination of technology and professional expertise for the work.</p>
            <div className="origin-links"><ArrowLink href={LINKS.companyBackground}>Company Background</ArrowLink><ArrowLink href={LINKS.global}>Global Presence</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="Translation and Localization Services for San Francisco Businesses" intro="Global organizations create many different types of content, and each requires the right translation workflow. Stepes provides a connected portfolio of professional translation and localization solutions for business, technical, digital, regulated, and customer-facing content."/>
          <div className="service-grid">{services.map((s)=><article className="service-item" key={s.title}><div className="icon-box"><Icon name={s.icon}/></div><h3>{s.title}</h3><p>{s.text}</p><ArrowLink href={s.link}>{s.label}</ArrowLink></article>)}</div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading title="Built for San Francisco’s Global Industries" intro="San Francisco is at the epicenter of the global AI boom and part of a Bay Area economy that also brings together globally connected technology, life sciences, financial, legal, healthcare, and professional organizations. Stepes builds multilingual workflows around the terminology, risk profile, regulatory environment, and content lifecycle of each industry." dark/>
          <div className="industry-grid">{industries.map((x)=><article className="industry-item" key={x.title}><h3>{x.title}</h3><p>{x.text}</p>{x.link?<ArrowLink href={x.link} light>{x.label}</ArrowLink>:null}</article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="AI-Enabled Translation. Professionally Reviewed." intro="Artificial intelligence is changing the economics and speed of multilingual content, but the best translation workflow is not always the one with the most automation. Stepes applies the appropriate combination of AI, translation memory, terminology management, professional translation, post-editing, human review, and quality assurance according to how the content will actually be used."/>
          <div className="workflow">{workflow.map((w,i)=><div className="workflow-step" key={w.title}><div className="step-num">0{i+1}</div><h3>{w.title}</h3><p>{w.text}</p></div>)}</div>
          <p className="workflow-note">A technical manual, software release, internal knowledge article, advertising campaign, legal agreement, and regulated medical document do not carry the same risk. Different content deserves different levels of automation and professional oversight.</p>
          <div style={{textAlign:"center",marginTop:18}}><ArrowLink href={LINKS.aiReview}>AI Translation Review Services</ArrowLink></div>
        </div>
      </section>

      <section className="section soft">
        <div className="container tech-product-grid">
          <div>
            <h2 className="page-h2">AI, Software & SaaS Localization for Global Products</h2>
            <div className="body-copy" style={{marginTop:22}}><p>For San Francisco technology companies, localization is increasingly part of product development rather than a one-time translation project. Software changes continuously, and AI-native products add another layer: prompts, model outputs, assistants, knowledge experiences, and dynamically generated content must also perform across languages.</p><p>Stepes helps product, engineering, and AI teams build repeatable multilingual workflows that can keep pace while preserving product terminology, technical integrity, review control, and market-specific language quality.</p></div>
            <ul className="feature-list"><li>Web and SaaS applications</li><li>Mobile applications</li><li>Enterprise software</li><li>Dashboards and admin consoles</li><li>Product onboarding</li><li>Help centers and knowledge bases</li><li>User and developer documentation</li><li>Release notes and support content</li></ul>
            <div className="origin-links"><ArrowLink href={LINKS.software}>Software Localization Services</ArrowLink><ArrowLink href={LINKS.aiOutput}>Multilingual AI Output Review</ArrowLink><ArrowLink href={LINKS.developers}>Developer Platform & APIs</ArrowLink></div>
          </div>
          <ProductMockup/>
        </div>
      </section>

      <section className="section blush">
        <div className="container split-regulated">
          <div>
            <SectionHeading title="Translation for Life Sciences and Regulated Content" center={false}/>
            <div className="body-copy"><p>San Francisco and the Bay Area are home to biotechnology, pharmaceutical, diagnostics, healthcare, medical-device, and digital-health organizations developing products for global markets.</p><p>For these companies, translation must account for scientific meaning, approved terminology, audience, document purpose, regional requirements, version control, and the consequences of an error.</p><p>Stepes regulated-content workflows can incorporate professional subject-matter linguists, independent review, terminology management, translation memory, automated QA, final-format validation, and secure project handling.</p></div>
            <div className="iso-row"><span className="iso-tag">ISO 17100</span><span className="iso-tag">ISO 9001</span><span className="iso-tag">ISO 13485</span></div>
            <div className="origin-links"><ArrowLink href={LINKS.lifeSciences}>Life Sciences Translation Services</ArrowLink><ArrowLink href={LINKS.medicalDevice}>Medical Device Translation Services</ArrowLink></div>
          </div>
          <div>
            <h3>Specialized multilingual content</h3>
            <ul className="content-list"><li>Clinical research materials</li><li>Regulatory documentation</li><li>Medical-device IFUs and eIFUs</li><li>Product labeling and packaging</li><li>Quality and compliance documents</li><li>SOPs and training</li><li>Scientific publications</li><li>Patient-facing materials</li><li>Healthcare applications and portals</li><li>Medical and device software</li><li>Technical documentation</li><li>Commercial and launch content</li></ul>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading title="Legal and Financial Translation for Global Organizations" intro="Legal and financial content requires more than fluent language. Terminology, defined terms, numbers, qualifications, document structure, confidentiality, and intended use can all affect how translated information is interpreted." dark/>
          <div className="legal-fin-grid">
            <article className="legal-fin-col"><h3>Legal Translation</h3><p>Stepes supports law firms, corporate legal teams, and global organizations with specialized multilingual workflows for complex legal matters and recurring legal content.</p><ul className="dark-list"><li>Agreements and contracts</li><li>Litigation documents</li><li>Arbitration materials</li><li>Internal investigations</li><li>Intellectual property</li><li>Employment matters</li><li>Corporate transactions</li><li>Regulatory submissions</li><li>Policies and compliance</li><li>Legal correspondence</li></ul><div style={{marginTop:18}}><ArrowLink href={LINKS.legal} light>Legal Translation Services</ArrowLink></div></article>
            <article className="legal-fin-col"><h3>Financial Translation</h3><p>Stepes supports financial institutions, fintech companies, investment organizations, insurance providers, and corporate finance teams with multilingual financial and customer content.</p><ul className="dark-list"><li>Annual and financial reports</li><li>Investor communications</li><li>Banking and fintech content</li><li>Financial statements</li><li>Policies and procedures</li><li>Insurance documentation</li><li>Compliance materials</li><li>Corporate disclosures</li><li>Research and market materials</li><li>Financial software</li></ul><div style={{marginTop:18}}><ArrowLink href={LINKS.financial} light>Financial Translation Services</ArrowLink></div></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Technology That Makes Global Content Easier to Manage" intro="Translation technology delivers the greatest value when it connects people, language assets, workflows, and quality rather than simply automating words. Stepes brings the technologies required for modern multilingual content operations into a connected enterprise workflow."/>
          <div className="tech-rows">{technology.map((x)=><div className="tech-row" key={x.title}><h3>{x.title}</h3><p>{x.text}</p>{x.link?<ArrowLink href={x.link}>{x.label}</ArrowLink>:<span/>}</div>)}</div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="Professional Linguists for Specialized Content" intro="AI can accelerate translation, but professional linguistic judgment remains essential wherever context, nuance, technical knowledge, cultural understanding, or business consequences matter. Stepes works with a global network of professional linguists across 100+ languages, with resources selected according to language pair, locale, subject matter, content type, audience, and project requirements."/>
          <div className="linguist-grid">{linguists.map(([t,p])=><article className="quiet-card" key={t}><h3>{t}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container local-grid">
          <div>
            <h2 className="page-h2">Supporting San Francisco and Bay Area Organizations</h2>
            <div className="body-copy" style={{marginTop:22}}><p>From our headquarters at 535 Mission Street in San Francisco, Stepes supports companies across the city, Silicon Valley, the Peninsula, Oakland and the East Bay, and the broader Bay Area while coordinating translation programs for markets worldwide.</p><p>Whether your team is building an AI product for global users, needs an urgent document translated, or manages multilingual content across dozens of countries, Stepes provides one point of access to professional linguists, localization specialists, AI-enabled workflows, technology, and project management.</p></div>
            <ul className="support-list"><li>Translation and localization</li><li>Software and website localization</li><li>Enterprise AI translation</li><li>Multilingual AI review</li><li>Legal and regulated content</li><li>Financial translation</li><li>Life sciences and medical translation</li><li>Certified document translation</li><li>Remote interpreting</li><li>On-site interpreting</li></ul>
          </div>
          <aside className="office-panel"><div className="eyebrow">Stepes San Francisco</div><h3>Global Headquarters</h3><div className="office-address">535 Mission Street, 15th Floor<br/>San Francisco, CA 94105<br/><span style={{display:"inline-block",marginTop:10}}>+1 415 889 8989</span></div><div className="office-meta">Local presence with global delivery across 100+ languages and international markets.</div><div style={{marginTop:24}}><a className="btn btn-primary" href={LINKS.contact}>Contact Sales <span aria-hidden="true">→</span></a></div></aside>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading eyebrow="Why Stepes" title="A Modern Translation Partner for Global Business" intro="Organizations today need translation partners capable of supporting both established business content and the rapidly expanding volume of AI-generated, software-driven, and continuously updated multilingual content. Stepes combines professional language expertise with modern translation technology to help global teams move faster without forcing every project through the same workflow."/>
          <div className="why-grid">{why.map(([t,p])=><article className="quiet-card" key={t}><h3>{t}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="San Francisco Translation Services FAQ" intro="Answers to common questions about Stepes translation, localization, AI, interpreting, and Bay Area support."/>
          <div className="faq-panel">{faqs.map(([q,a],i)=>{const open=openFaq===i;return <div className="faq-item" key={q}><button className="faq-button" type="button" aria-expanded={open} onClick={()=>setOpenFaq(open?-1:i)}><span>{q}</span><span aria-hidden="true">{open?"−":"+"}</span></button>{open?<div className="faq-answer">{a}</div>:null}</div>})}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container"><div className="cta-box"><h2>Ready to Take Your Content Global?</h2><p>Whether you need to translate a single business document, launch software across international markets, validate AI-generated multilingual content, or build a scalable enterprise localization program, Stepes can help. Tell us what you need translated, your target languages, and your requirements.</p><div className="cta-actions"><a className="btn btn-primary" href={LINKS.quote}>Get a Quote <span aria-hidden="true">→</span></a><a className="btn btn-secondary" href={LINKS.contact}>Contact Sales</a></div></div></div>
      </section>
    </main>
  </>;
}
