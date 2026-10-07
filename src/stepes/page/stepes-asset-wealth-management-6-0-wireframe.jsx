import React from "react";

const C = {
  challenges: [
    ["Recurring Publications", "Monthly fund factsheets, quarterly commentary, annual reports, prospectus updates, and investor communications follow fixed publishing schedules with little room for delay."],
    ["Regulatory Complexity", "Investment products may be distributed across markets with different disclosure frameworks, terminology, documentation conventions, and investor communication requirements."],
    ["Financial Data Integrity", "NAVs, benchmarks, performance figures, percentages, fees, currencies, dates, risk indicators, fund names, share classes, and security identifiers must remain exact."],
    ["Global Consistency", "Approved investment terminology and disclosures should stay aligned across documents, languages, channels, and successive publication cycles."],
  ],
  coverage: [
    ["Fund & Product Documentation", ["Fund prospectuses and supplements", "Offering memoranda and fund rules", "Key information documents", "Product summaries and disclosures", "Subscription and redemption materials", "Fund registration and share-class documentation"]],
    ["Investor Reporting", ["Fund factsheets", "Monthly and quarterly reports", "Portfolio commentary", "Annual and semiannual reports", "Performance reports", "Investor and shareholder letters"]],
    ["Investment Marketing & Distribution", ["Fund brochures and presentations", "Pitch books", "Distributor communications", "Institutional RFPs", "Investment research", "Thought leadership and campaign content"]],
    ["Wealth Management & Private Banking", ["Investment proposals", "Portfolio reports", "Client correspondence", "Wealth planning materials", "Client onboarding", "Private banking communications"]],
    ["Regulatory & Sustainable Investment", ["UCITS documentation", "PRIIPs KIDs", "SFDR-related content", "Sustainable finance disclosures", "Policies and governance documents", "Risk and compliance communications"]],
    ["Digital Investor Content", ["Fund websites", "Investor portals", "Wealth platforms", "Mobile applications", "Digital factsheets", "Accessible documents and structured content"]],
  ],
  cycle: [
    ["Reuse Approved Content", "Carry forward validated translations, terminology, fund names, disclosures, style guidance, and client preferences."],
    ["Identify What Changed", "Focus linguistic attention on new commentary, revised disclosures, updated financial data, and product changes."],
    ["Translate in Parallel", "Move multiple target languages and documents forward simultaneously instead of sequentially."],
    ["Validate Language & Data", "Check meaning, terminology, completeness, numbers, protected content, formatting, and project requirements."],
    ["Coordinate Review", "Capture central and local-market reviewer feedback through controlled workflows and clear versioning."],
    ["Publish & Reuse", "Return approved translations and reviewer decisions to language assets so the next cycle starts stronger."],
  ],
  ai: [
    ["High-Risk Regulated Content", "Prospectuses, material investor disclosures, regulatory documentation, shareholder notices", "Human-led translation, independent review where required, terminology validation, numeric QA, and final-format checks."],
    ["Recurring Investment Content", "Fund factsheets, portfolio commentary, quarterly reports, product updates", "Approved translation memory and AI assistance paired with professional financial review and data QA."],
    ["Marketing & Digital Content", "Websites, campaigns, product pages, thought leadership, investor portals", "AI-enabled translation with financial, brand, local-market, and publishing review matched to the channel."],
    ["Selected Lower-Risk Content", "High-volume internal or informational material", "Configurable AI translation and review when the intended use and client-defined quality requirements support a streamlined workflow."],
  ],
  regions: [
    ["European Union", "UCITS documentation, PRIIPs KIDs, fund registration content, investor communications, MiFID-related product information, SFDR and sustainable finance content."],
    ["United Kingdom", "Consumer Composite Investment product information, product summaries, applicable transition-period disclosures, investor reporting, fund documentation, and wealth communications."],
    ["Asia-Pacific", "Fund registration materials, product information, institutional reporting, private banking content, investor portals, research, and multilingual distribution across major Asian markets."],
    ["Americas", "Fund and portfolio reporting, investor communications, institutional marketing, wealth management content, regulatory communications, and multilingual investor materials."],
  ],
  programs: [
    ["Recurring Fund Factsheets", "Coordinate monthly or quarterly factsheets across multiple funds and languages while reusing approved translations and focusing review on changed content and updated financial information."],
    ["Prospectus & Product Updates", "Maintain continuity across new prospectuses, supplements, amendments, disclosures, and related product documentation."],
    ["Global Fund Launches", "Translate product documentation, investor communications, marketing materials, websites, and supporting content for coordinated entry into multiple markets."],
    ["Investor Reporting Programs", "Support annual, semiannual, quarterly, and ad hoc investor reporting through repeatable multilingual workflows."],
    ["Private Banking Communications", "Deliver portfolio reporting, proposals, market commentary, onboarding, and digital client content for global wealth-management audiences."],
    ["Investment Marketing Programs", "Localize product communications, thought leadership, presentations, research, campaigns, and digital content while preserving investment terminology and positioning."],
  ],
  reasons: [
    ["Financial Expertise", "Resources selected for investment subject matter, language, audience, and content risk."],
    ["Risk-Matched AI + Human Quality", "Technology accelerates repetitive work while professional judgment stays central where financial language carries greater risk."],
    ["Financial Data Integrity", "Quality controls protect numbers, percentages, benchmarks, identifiers, fund names, and structured references."],
    ["Terminology Governance", "Approved investment vocabulary stays aligned across funds, languages, documents, and publication cycles."],
    ["Recurring-Publication Efficiency", "Translation memory and reviewer decisions become reusable language assets for future updates."],
    ["Enterprise Workflow Control", "Projects, reviewers, approvals, quality requirements, and delivery stay connected in one multilingual operating model."],
  ],
  faqs: [
    ["What asset management documents does Stepes translate?", "Stepes translates fund prospectuses, offering memoranda, PRIIPs KIDs, fund factsheets, annual and semiannual reports, shareholder communications, portfolio commentary, investment research, performance reports, product marketing, institutional RFPs, sustainable investment content, investor portals, and other asset management documentation."],
    ["Can Stepes support recurring monthly and quarterly fund publications?", "Yes. Stepes supports recurring factsheets, portfolio reporting, investment commentary, shareholder communications, and product updates using translation memory, approved terminology, AI-enabled workflows, professional financial review, controlled reviewer feedback, and quality assurance."],
    ["How does Stepes protect financial numbers and data during translation?", "Depending on the project, quality controls can validate percentages, currencies, decimals, negative signs, NAV values, fees, performance figures, dates, benchmarks, fund and share-class names, security identifiers, table relationships, footnotes, and other protected information."],
    ["Does Stepes provide PRIIPs KID and UCITS translation services?", "Yes. Stepes translates EU PRIIPs Key Information Documents and broader UCITS fund documentation together with prospectuses, investor disclosures, product information, fund reporting, and related investment content. Stepes works from client-approved source content and instructions and provides translation services rather than regulatory advice."],
    ["Can Stepes support UK Consumer Composite Investment product information?", "Yes. Stepes can support multilingual product information prepared for the UK's Consumer Composite Investments framework, including product summaries and applicable disclosure documentation during the transition from the previous UK PRIIPs framework."],
    ["Does Stepes provide wealth management and private banking translation?", "Yes. Stepes supports investment proposals, portfolio reports, client statements, market commentary, onboarding content, research, private banking communications, wealth planning materials, digital platforms, and other multilingual client-facing content."],
    ["How does Stepes use AI for financial translation?", "Stepes uses configurable, risk-matched workflows rather than applying the same level of automation to every document. High-risk content can follow a human-led workflow, while recurring or high-volume content can combine AI, translation memory, approved terminology, automated checks, and professional review."],
    ["Can Stepes use our existing translations, terminology, and translation memory?", "Yes. Existing translation memories, glossaries, approved documents, terminology databases, style guides, and reviewer decisions can be incorporated to preserve validated language, reduce repetitive translation, and improve consistency across funds and markets."],
    ["How quickly can Stepes translate asset management content?", "Turnaround depends on document volume, languages, content complexity, formatting, review level, and the amount of approved content available for reuse. For time-sensitive programs, Stepes can process languages and documents in parallel, leverage translation memory, support rolling delivery, and configure workflows around recurring publication deadlines."],
    ["Does Stepes support formatted financial documents?", "Yes. Stepes provides multilingual desktop publishing and document engineering for financial content with tables, charts, graphics, footnotes, complex layouts, and publication-ready formatting. Final-format QA can be integrated with linguistic and financial quality checks."],
  ],
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  financial: "https://www.stepes.com/financial-translation-services/",
  banking: "https://www.stepes.com/financial-translation-services/banking-lending/",
  regulatory: "https://www.stepes.com/regulatory-financial-translation-services/",
  esg: "https://www.stepes.com/esg-translation-services/",
  ai: "https://www.stepes.com/ai-translation-services/",
  etm: "https://www.stepes.com/enterprise-translation-management/",
  tm: "https://www.stepes.com/translation-memory/",
  term: "https://www.stepes.com/terminology-management/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  priipsGuide: "https://www.stepes.com/resources/blog-insights/priips-kids-localization-essentials/",
};

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function MiniIcon({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    repeat: <><path {...common} d="M5 7a6 6 0 0 1 10-2l2 2"/><path {...common} d="M17 3v4h-4M19 13a6 6 0 0 1-10 2l-2-2"/><path {...common} d="M7 17v-4h4"/></>,
    globe: <><circle {...common} cx="12" cy="12" r="8"/><path {...common} d="M4 12h16M12 4c2.2 2.3 3.2 5 3.2 8S14.2 17.7 12 20M12 4C9.8 6.3 8.8 9 8.8 12s1 5.7 3.2 8"/></>,
    data: <><path {...common} d="M5 19V9M10 19V5M15 19v-7M20 19V3"/><path {...common} d="M3 19h19"/></>,
    layers: <><path {...common} d="m12 3 9 5-9 5-9-5 9-5Z"/><path {...common} d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3Z"/><path {...common} d="m9 12 2 2 4-5"/></>,
    doc: <><path {...common} d="M6 3h8l4 4v14H6z"/><path {...common} d="M14 3v5h4M9 12h6M9 16h6"/></>,
  };
  return <svg className="mini-icon" aria-hidden="true" viewBox="0 0 24 24">{paths[type] || paths.doc}</svg>;
}

function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 620 620" role="img" aria-label="Illustration of multilingual investment documents, financial data, and global market connections">
      <defs>
        <linearGradient id="soft" x1="0" x2="1"><stop offset="0" stopColor="#FDF2F7"/><stop offset="1" stopColor="#F7F8FA"/></linearGradient>
      </defs>
      <circle cx="315" cy="310" r="235" fill="url(#soft)"/>
      <g fill="none" stroke="#566171" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M119 170c80-73 194-103 296-71 105 33 176 122 188 229" opacity=".5"/>
        <path d="M548 401c-50 80-141 131-239 131-107 0-202-61-247-151" opacity=".5"/>
        <rect x="145" y="150" width="230" height="292" rx="18" fill="#fff"/>
        <path d="M184 205h130M184 228h90"/>
        <path d="M184 275h36v96h-36zM238 310h36v61h-36zM292 242h36v129h-36z"/>
        <path d="M178 390h155M178 407h118" opacity=".75"/>
        <rect x="347" y="238" width="150" height="205" rx="18" fill="#fff"/>
        <circle cx="422" cy="304" r="41"/>
        <path d="M422 263v82M381 304h82M391 282c20 13 41 13 62 0M391 326c20-13 41-13 62 0" opacity=".75"/>
        <path d="M378 379h89M378 400h59"/>
        <path d="M355 188c59-12 113 3 149 40"/>
        <circle cx="518" cy="182" r="15" fill="#fff"/>
        <path d="M523 184h26M550 184l20-22"/>
        <circle cx="574" cy="157" r="12" fill="#fff"/>
        <circle cx="558" cy="250" r="12" fill="#fff"/>
        <path d="M548 194l8 44"/>
        <circle cx="111" cy="449" r="15" fill="#fff"/>
        <path d="M126 446l49-22"/>
        <circle cx="82" cy="356" r="12" fill="#fff"/>
        <path d="M91 365l19 68"/>
      </g>
      <g fill="#C11D63">
        <circle cx="328" cy="242" r="5"/>
        <circle cx="518" cy="182" r="4"/>
        <circle cx="111" cy="449" r="4"/>
      </g>
      <g fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#485162">
        <text x="184" y="188">GLOBAL FUND REPORT</text>
        <text x="376" y="274">INVESTOR VIEW</text>
      </g>
    </svg>
  );
}

function SectionHead({ eyebrow, title, intro, center = false, keepLeft = false }) {
  return <div className={`section-head ${center ? "center" : ""} ${keepLeft ? "keep-left" : ""}`.trim()}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>;
}

const styles = `
:root{--mag:#C11D63;--magDark:#A71954;--burg:#7A1542;--blush:#FDF2F7;--ink:#17202D;--body:#485162;--muted:#687384;--line:#E3E7EC;--soft:#F7F8FA;--dark:#151A22;--dark2:#202733;--white:#fff;--radius:30px;--radius2:22px;--shadow:0 18px 50px rgba(23,32,45,.08);}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--ink);font-family:Inter,Arial,sans-serif}.awm-page{overflow:hidden;background:#fff}.shell{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section.dense{padding:80px 0}.eyebrow{margin:0 0 14px;font-size:11px!important;line-height:1.3!important;font-weight:600!important;letter-spacing:.12em;text-transform:uppercase;color:var(--mag)!important}.eyebrow.on-dark{color:#F2A7C6!important}.section-head{max-width:790px;margin-bottom:48px}.section-head.center{text-align:center;margin-left:auto;margin-right:auto}.hero h1,.awm-page h2,.awm-page h3{font-family:"Inter Tight",Inter,Arial,sans-serif}.section h2,.awm-page h2{margin:0;font-size:36px;line-height:1.12;letter-spacing:-.025em;font-weight:600}.awm-page h3{margin:0;font-size:24px;line-height:1.2;letter-spacing:-.015em;font-weight:600}.awm-page .section-intro,.awm-page .body-lg{font-size:18px;line-height:1.67;color:var(--body);font-weight:400}.section-intro{margin:18px 0 0;max-width:820px}.body,.awm-page p,.awm-page li{font-size:17px;line-height:1.66;color:var(--body);font-weight:400}.awm-page a{color:inherit}.cta{display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:9px;padding:12px 22px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.18s ease}.cta svg,.text-link svg{width:18px;height:18px;flex:none}.cta.primary,.cta.primary:visited{background:var(--mag);color:#fff!important}.cta.primary *,.cta.primary:visited *{color:#fff!important;stroke:#fff!important}.cta.primary:hover{background:var(--magDark);transform:translateY(-1px)}.cta.secondary{border:1px solid #D4D9E0;background:#fff;color:var(--ink)}.cta.secondary:hover{border-color:#ABB3BE;transform:translateY(-1px)}.cta:focus-visible,.text-link:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.25);outline-offset:3px}.text-link{display:inline-flex;align-items:center;gap:8px;color:var(--mag)!important;text-decoration:none;font-weight:600;font-size:16px;line-height:1.4}.text-link:hover svg{transform:translateX(3px)}.text-link svg{transition:.18s ease}.hero{padding:104px 0 88px;background:#fff}.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(430px,.95fr);gap:64px;align-items:center}.hero h1{font-size:48px;line-height:1.04;letter-spacing:-.035em;font-weight:600;margin:0;max-width:720px}.awm-page .hero-copy{margin:24px 0 30px;max-width:690px;font-size:18px;line-height:1.68;color:var(--body)}.hero-actions{display:flex;gap:12px;flex-wrap:wrap}.hero-note{margin:16px 0 0;font-size:14px!important;color:#687384!important}.hero-visual{min-height:520px;display:flex;align-items:center;justify-content:center}.hero-art{width:100%;max-width:570px;height:auto}.proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-item{padding:24px 24px 24px 0}.proof-item+.proof-item{border-left:1px solid var(--line);padding-left:24px}.proof-title{font-size:17px;font-weight:600;color:var(--ink);margin:0 0 4px}.proof-sub{font-size:14px!important;line-height:1.45!important;color:#687384!important;margin:0}.challenge-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:88px;align-items:start}.challenge-layout .section-head{position:sticky;top:28px;margin:0}.editorial-rows{border-top:1px solid var(--line)}.editorial-row{display:grid;grid-template-columns:56px 1fr;gap:20px;padding:26px 0;border-bottom:1px solid var(--line)}.icon-box{width:48px;height:48px;border-radius:14px;background:#F7F8FA;display:grid;place-items:center;color:#5B6574}.mini-icon{width:24px;height:24px}.editorial-row h3{font-size:20px;margin-bottom:7px}.editorial-row p{margin:0}.coverage-wrap{background:var(--soft)}.coverage-panel{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff}.coverage-grid{display:grid;grid-template-columns:repeat(3,1fr)}.coverage-item{padding:31px 30px}.coverage-item:nth-child(-n+3){border-bottom:1px solid var(--line)}.coverage-item:not(:nth-child(3n+1)){border-left:1px solid var(--line)}.coverage-item h3{font-size:20px;margin-bottom:15px}.coverage-item ul{list-style:none;padding:0;margin:0}.coverage-item li{padding:7px 0 7px 16px;position:relative}.coverage-item li:before{content:"";position:absolute;left:0;top:18px;width:5px;height:5px;border-radius:50%;background:#AEB6C2}.inline-link{margin-top:26px}.link-row{display:flex;gap:24px;align-items:center;flex-wrap:wrap;margin-top:26px}.link-row.center-links{justify-content:center}.fund-layout{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:72px;align-items:start}.fund-copy{max-width:560px}.fund-copy p{margin:20px 0}.doc-stack{border:1px solid var(--line);border-radius:var(--radius);background:#fff;overflow:hidden;box-shadow:var(--shadow)}.doc-group{padding:28px 30px}.doc-group+.doc-group{border-top:1px solid var(--line)}.doc-group h3{font-size:20px;margin-bottom:9px}.doc-group p{margin:0}.cycle-panel{border:1px solid var(--line);border-radius:var(--radius);padding:38px 34px;background:#fff}.cycle-grid{display:grid;grid-template-columns:repeat(6,1fr);position:relative}.cycle-grid:before{content:"";position:absolute;top:19px;left:4%;right:4%;height:1px;background:#D9DEE5}.cycle-step{position:relative;padding:0 14px}.step-num{width:40px;height:40px;border-radius:50%;background:#fff;border:1px solid #CBD2DB;display:grid;place-items:center;font-size:14px;font-weight:600;color:var(--ink);position:relative;z-index:1;margin-bottom:20px}.cycle-step h3{font-size:17px;margin-bottom:8px}.cycle-step p{font-size:16px;line-height:1.55;margin:0}.data-section{background:var(--dark);color:#fff}.data-layout{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:center}.data-copy h2{color:#fff}.data-copy .body-lg{color:#D8DEE7}.data-list{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-top:30px;border-top:1px solid rgba(255,255,255,.12)}.data-list div{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:16px;color:#E3E7ED}.qa-mock{background:#202733;border:1px solid rgba(255,255,255,.12);border-radius:28px;padding:22px;box-shadow:0 24px 60px rgba(0,0,0,.2)}.mock-top{display:flex;align-items:center;justify-content:space-between;padding:4px 4px 18px}.mock-title{font-size:17px;font-weight:600;color:#fff}.status{font-size:13px;font-weight:600;color:#CFE8D8;background:#203C2D;border:1px solid #315642;padding:6px 10px;border-radius:999px}.qa-table{border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden}.qa-row{display:grid;grid-template-columns:1.3fr .8fr .8fr .5fr;gap:12px;padding:15px 16px;align-items:center}.qa-row+.qa-row{border-top:1px solid rgba(255,255,255,.1)}.qa-row.head{background:#252E3B;color:#9DA8B7;font-size:13px;font-weight:600}.qa-row span{font-size:16px;color:#E4E9F0}.qa-row .ok{color:#9FD3AF;font-weight:600}.mock-note{display:flex;gap:12px;align-items:flex-start;margin-top:16px;padding:16px;border-radius:16px;background:#181E27}.mock-note strong{display:block;color:#fff;font-size:16px;margin-bottom:4px}.mock-note p{font-size:16px!important;line-height:1.5!important;color:#C1C9D4!important;margin:0}.ai-layout{display:grid;grid-template-columns:.78fr 1.22fr;gap:78px;align-items:start}.ai-layout .section-head{position:sticky;top:28px;margin:0}.risk-rows{border-top:1px solid var(--line)}.risk-row{display:grid;grid-template-columns:1fr .92fr;gap:34px;padding:28px 0;border-bottom:1px solid var(--line)}.risk-row h3{font-size:20px;margin-bottom:9px}.risk-examples{font-size:16px!important;color:var(--body)!important;margin:0}.risk-method{border-left:2px solid #E2B1C6;padding-left:22px;margin:0}.dual-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff}.dual-side{padding:38px}.dual-side+.dual-side{border-left:1px solid var(--line)}.dual-side h3{font-size:28px;margin-bottom:14px}.dual-side p{margin-top:0}.pill-list{display:flex;flex-wrap:wrap;gap:8px;margin:22px 0 0}.pill-list span{font-size:16px;color:#485162;background:#F6F7F9;border:1px solid #E3E7EC;border-radius:999px;padding:7px 10px}.region-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.region-grid{display:grid;grid-template-columns:repeat(4,1fr)}.region{padding:0 28px}.region:first-child{padding-left:0}.region:last-child{padding-right:0}.region+.region{border-left:1px solid var(--line)}.region h3{font-size:20px;margin-bottom:10px}.region p{margin:0}.esg-panel{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;background:var(--blush);border-radius:var(--radius);padding:46px 48px;align-items:center}.esg-panel h2{font-size:34px}.esg-list{display:grid;grid-template-columns:1fr 1fr;gap:0 24px}.esg-list div{padding:11px 0;border-bottom:1px solid #E8D5DE;color:var(--body);font-size:16px}.digital-layout{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}.portal-mock{border:1px solid var(--line);border-radius:28px;background:#fff;box-shadow:var(--shadow);padding:18px}.portal-top{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding:5px 3px 15px}.portal-brand{font-size:16px;font-weight:600}.portal-lang{font-size:13px;color:#697485}.portal-content{display:grid;grid-template-columns:.72fr 1.28fr;gap:14px;padding-top:14px}.portal-side{background:#F7F8FA;border-radius:16px;padding:15px}.portal-side div{height:10px;border-radius:999px;background:#DDE2E8;margin:10px 0}.portal-side div:nth-child(2){width:75%}.portal-side div:nth-child(3){width:86%}.portal-main{border:1px solid var(--line);border-radius:16px;padding:18px}.portal-label{font-size:13px;color:#768191;margin-bottom:8px}.portal-value{font-size:27px;font-weight:600;color:#19212D}.portal-chart{height:130px;margin-top:20px;position:relative;border-bottom:1px solid var(--line)}.portal-chart svg{width:100%;height:100%}.digital-list{border-top:1px solid var(--line)}.digital-item{padding:18px 0;border-bottom:1px solid var(--line)}.digital-item h3{font-size:18px;margin-bottom:5px}.digital-item p{margin:0}.asset-section{background:var(--soft)}.asset-layout{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:start}.asset-map{border:1px solid var(--line);border-radius:var(--radius);background:#fff;overflow:hidden}.asset-row{display:grid;grid-template-columns:190px 1fr;padding:24px 28px;gap:26px}.asset-row+.asset-row{border-top:1px solid var(--line)}.asset-row h3{font-size:18px}.asset-row p{margin:0}.quality-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}.quality-col{padding:32px}.quality-col+.quality-col{border-left:1px solid var(--line)}.quality-col h3{font-size:22px;margin:14px 0 10px}.quality-lead{margin:0 0 14px}.quality-col ul{padding:0;margin:0;list-style:none}.quality-col li{padding:7px 0}.program-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.program{border:1px solid var(--line);border-radius:22px;padding:26px;background:#fff}.program h3{font-size:19px;margin-bottom:10px}.program p{margin:0}.engage-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}.engage{padding:32px}.engage+.engage{border-left:1px solid var(--line)}.engage h3{font-size:22px;margin-bottom:10px}.engage p{margin-top:0}.engage ul{padding-left:18px;margin-bottom:0}.why-wrap{background:var(--soft)}.why-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}.why-item{display:grid;grid-template-columns:46px 1fr;gap:16px;padding:24px 24px 24px 0;border-bottom:1px solid var(--line)}.why-item:nth-child(2n){padding-left:28px;border-left:1px solid var(--line)}.check{width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid #DCE1E7;display:grid;place-items:center;color:var(--mag);font-weight:600}.why-item h3{font-size:18px;margin-bottom:6px}.why-item p{margin:0}.related{border-top:1px solid var(--line)}.related-row{display:grid;grid-template-columns:1fr auto;gap:24px;padding:22px 0;border-bottom:1px solid var(--line);align-items:center}.related-row h3{font-size:19px;margin-bottom:5px}.related-row p{margin:0}.faq-panel{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}.faq-panel details+details{border-top:1px solid var(--line)}.faq-panel summary{list-style:none;cursor:pointer;padding:23px 28px;font-size:18px;font-weight:600;display:flex;justify-content:space-between;gap:24px;align-items:center}.faq-panel summary::-webkit-details-marker{display:none}.faq-panel summary:after{content:"+";width:30px;height:30px;border-radius:50%;border:1px solid #D6DBE2;display:grid;place-items:center;font-size:19px;color:#566171;flex:none}.faq-panel details[open] summary:after{content:"−"}.faq-answer{padding:0 72px 24px 28px;max-width:930px}.faq-answer p{margin:0}.final-cta{padding:80px 0;background:var(--blush);border-top:1px solid #F0DDE6}.cta-panel{background:transparent;border:0;border-radius:0;padding:0;display:grid;grid-template-columns:1fr auto;gap:52px;align-items:center}.cta-panel h2{font-size:36px;max-width:720px}.cta-panel p{max-width:720px;margin:16px 0 0}.cta-panel>div:last-child{justify-self:end}.cta-panel .hero-actions{justify-content:flex-start}.micro{font-size:14px!important;color:#687384!important;margin-top:12px!important;text-align:left}.disclaimer{font-size:16px!important;line-height:1.6!important;color:var(--body)!important;margin:22px auto 0!important;max-width:980px}
@media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr 430px;gap:40px}.coverage-grid{grid-template-columns:1fr 1fr}.coverage-item:nth-child(-n+3){border-bottom:0}.coverage-item:not(:nth-child(3n+1)){border-left:0}.coverage-item:nth-child(odd){border-right:1px solid var(--line)}.coverage-item:nth-child(-n+4){border-bottom:1px solid var(--line)}.cycle-grid{grid-template-columns:repeat(3,1fr);row-gap:34px}.cycle-grid:before{display:none}.data-layout,.digital-layout,.asset-layout{gap:46px}.region-grid{grid-template-columns:1fr 1fr;row-gap:34px}.region:nth-child(3){padding-left:0;border-left:0}.region:nth-child(3),.region:nth-child(4){padding-top:30px;border-top:1px solid var(--line)}.program-grid{grid-template-columns:1fr 1fr}.quality-grid{grid-template-columns:1fr}.quality-col+.quality-col{border-left:0;border-top:1px solid var(--line)}}
@media(max-width:900px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}.hero{padding:88px 0 72px}.hero h1{font-size:42px}.section h2,.awm-page h2{font-size:32px}.awm-page h3{font-size:22px}.hero-grid,.challenge-layout,.fund-layout,.data-layout,.ai-layout,.digital-layout,.asset-layout{grid-template-columns:1fr}.hero-visual{min-height:0}.hero-art{max-width:520px}.hero-grid>div:first-child{text-align:center}.hero-copy{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-note{text-align:center}.challenge-layout .section-head,.ai-layout .section-head{position:static}.proof-grid{grid-template-columns:1fr 1fr}.proof-item:nth-child(3){border-left:0;padding-left:0;border-top:1px solid var(--line)}.proof-item:nth-child(4){border-top:1px solid var(--line)}.dual-panel{grid-template-columns:1fr}.dual-side+.dual-side{border-left:0;border-top:1px solid var(--line)}.esg-panel{grid-template-columns:1fr}.quality-grid{grid-template-columns:1fr}.engage-grid{grid-template-columns:1fr}.engage+.engage{border-left:0;border-top:1px solid var(--line)}.cta-panel{grid-template-columns:1fr}.cta-panel>div:last-child{justify-self:start}.cta-panel .hero-actions{justify-content:flex-start}.micro{text-align:left}.data-copy{text-align:left}.region-grid{grid-template-columns:1fr 1fr}.asset-row{grid-template-columns:160px 1fr}}
@media(max-width:640px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.section.dense{padding:64px 0}.hero{padding:72px 0 60px}.hero-grid{gap:34px}.hero h1{font-size:38px;line-height:1.08}.awm-page .hero-copy{font-size:17px}.hero-actions{display:grid;grid-template-columns:1fr}.cta{width:100%;min-height:52px}.hero-visual{display:none}.proof-grid{grid-template-columns:1fr}.proof-item,.proof-item+.proof-item{padding:18px 0;border-left:0;border-top:1px solid var(--line)}.proof-item:first-child{border-top:0}.section-head{margin-bottom:36px}.section-head:not(.keep-left){text-align:center;margin-left:auto;margin-right:auto}.section-head:not(.keep-left) .section-intro{margin-left:auto;margin-right:auto}.section h2,.awm-page h2{font-size:30px}.awm-page h3{font-size:20px}.awm-page .section-intro,.awm-page .body-lg{font-size:17px}.body,.awm-page p,.awm-page li{font-size:17px}.editorial-row{grid-template-columns:46px 1fr;gap:14px;padding:22px 0}.icon-box{width:42px;height:42px}.coverage-grid{grid-template-columns:1fr}.coverage-item{padding:26px 24px;border-bottom:1px solid var(--line)!important;border-right:0!important}.coverage-item:last-child{border-bottom:0!important}.fund-layout{gap:38px}.doc-group{padding:24px}.cycle-panel{padding:28px 22px}.cycle-grid{grid-template-columns:1fr;row-gap:0}.cycle-step{display:grid;grid-template-columns:44px 1fr;column-gap:16px;padding:0 0 26px}.step-num{grid-row:1 / span 2;margin:0}.cycle-step p{font-size:17px}.data-list{grid-template-columns:1fr}.qa-mock{padding:15px}.qa-row{grid-template-columns:1.2fr .8fr .55fr;padding:13px 12px}.qa-row span:nth-child(2),.qa-row.head span:nth-child(2){display:none}.qa-row span{font-size:16px}.link-row{flex-direction:column;align-items:flex-start;gap:8px}.link-row.center-links{align-items:center}.link-row .text-link{min-height:44px}.risk-row{grid-template-columns:1fr;gap:14px}.risk-method{padding-left:16px}.dual-side{padding:28px 24px}.dual-side h3{font-size:24px}.region-grid{grid-template-columns:1fr}.region,.region:first-child,.region:last-child,.region:nth-child(3){padding:24px 0;border-left:0;border-top:1px solid var(--line)}.region:first-child{border-top:0;padding-top:0}.esg-panel{padding:34px 24px}.esg-panel h2{font-size:30px}.esg-list{grid-template-columns:1fr}.digital-layout{gap:40px}.portal-content{grid-template-columns:1fr}.portal-side{display:none}.asset-row{grid-template-columns:1fr;gap:8px;padding:22px 24px}.quality-col{padding:26px 24px}.program-grid{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr}.why-item,.why-item:nth-child(2n){padding:22px 0;border-left:0}.related-row{grid-template-columns:1fr}.related-row .text-link{min-height:44px}.faq-panel summary{padding:21px 20px;font-size:17px}.faq-answer{padding:0 20px 22px}.final-cta{padding:68px 0}.cta-panel{padding:0}.cta-panel h2{font-size:30px}}
@media(max-width:360px){.shell{padding-left:20px;padding-right:20px}.hero h1{font-size:36px}.qa-row{grid-template-columns:1fr .65fr}.qa-row span:nth-child(3),.qa-row.head span:nth-child(3){display:none}}
`;

export default function AssetWealthManagementPage() {
  const challengeIcons = ["repeat", "globe", "data", "layers"];
  return <main className="awm-page">
    <style>{styles}</style>

    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Financial Translation Services</p>
          <h1>Asset &amp; Wealth Management Translation Services</h1>
          <p className="hero-copy">Accurate, secure translation for investment products, fund documentation, investor communications, and global wealth management content. Stepes combines financial expertise, AI-enabled workflows, terminology control, and rigorous quality assurance to help investment organizations publish multilingual content faster and more consistently across markets.</p>
          <div className="hero-actions">
            <a className="cta primary" href={links.quote}>Get a Quote <Arrow/></a>
            <a className="cta secondary" href={links.contact}>Contact Sales <Arrow/></a>
          </div>
          <p className="hero-note">Secure and confidential. No account required.</p>
        </div>
        <div className="hero-visual"><HeroArt/></div>
      </div>
    </section>

    <section className="proof-band" aria-label="Service highlights">
      <div className="shell proof-grid">
        <div className="proof-item"><p className="proof-title">100+ Languages</p><p className="proof-sub">Global investment content coverage</p></div>
        <div className="proof-item"><p className="proof-title">Financial Subject-Matter Expertise</p><p className="proof-sub">Asset, fund, and wealth content</p></div>
        <div className="proof-item"><p className="proof-title">ISO Quality Processes</p><p className="proof-sub">Structured review and QA workflows</p></div>
        <div className="proof-item"><p className="proof-title">AI + Financial Linguists</p><p className="proof-sub">Risk-matched multilingual delivery</p></div>
      </div>
    </section>

    <section className="section">
      <div className="shell challenge-layout">
        <SectionHead eyebrow="Global Investment Content" keepLeft title="Investment Content Moves Fast. Every Language Must Keep Up." intro="Asset managers, fund administrators, private banks, and wealth-management organizations operate across markets where multilingual content changes continuously. Reliable financial translation must protect terminology, financial data, approved disclosures, and publication schedules from one cycle to the next. Stepes brings these requirements together through scalable investment management translation workflows." />
        <div className="editorial-rows">
          {C.challenges.map((x,i)=><div className="editorial-row" key={x[0]}><div className="icon-box"><MiniIcon type={challengeIcons[i]}/></div><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}
        </div>
      </div>
    </section>

    <section className="section coverage-wrap">
      <div className="shell">
        <SectionHead title="Translation Across the Investment Content Lifecycle" intro="Stepes supports the complete multilingual investment content lifecycle, from regulated product documentation and recurring investor reporting to wealth communications, marketing, sustainability content, and digital experiences." center />
        <div className="coverage-panel"><div className="coverage-grid">
          {C.coverage.map(x=><div className="coverage-item" key={x[0]}><h3>{x[0]}</h3><ul>{x[1].map(y=><li key={y}>{y}</li>)}</ul></div>)}
        </div></div>
        <div className="inline-link"><a className="text-link" href={links.financial}>Explore Financial Translation Services <Arrow/></a></div>
      </div>
    </section>

    <section className="section">
      <div className="shell fund-layout">
        <div className="fund-copy">
          <p className="eyebrow">Regulated Investment Content</p>
          <h2>Fund &amp; Investment Product Translation for Global Markets</h2>
          <p className="body-lg">Fund documentation combines specialized investment terminology, legally significant language, structured disclosures, financial data, and content that is frequently reused or revised across products and markets.</p>
          <p>Stepes provides specialized fund translation services that help investment organizations keep related documents, successive versions, and multilingual publications aligned throughout the product lifecycle. Translation memory and terminology management preserve approved language while financial linguists focus on new or changed content.</p>
          <div className="link-row"><a className="text-link" href={links.regulatory}>Regulatory Financial Translation Services <Arrow/></a><a className="text-link" href={links.priipsGuide}>PRIIPs &amp; KIDs Localization Guide <Arrow/></a></div>
        </div>
        <div className="doc-stack">
          <div className="doc-group"><h3>Prospectuses &amp; Offering Documents</h3><p>Translate fund prospectuses, supplements, offering memoranda, fund rules, investment policies, subscription documentation, material amendments, and product updates while maintaining continuity across versions.</p></div>
          <div className="doc-group"><h3>Investor &amp; Product Disclosures</h3><p>Translate EU PRIIPs KIDs, UCITS fund documentation, UK Consumer Composite Investment product summaries, risk and performance information, costs and charges, and market-specific investor disclosures with controlled terminology.</p></div>
          <div className="doc-group"><h3>Fund Factsheets &amp; Reporting</h3><p>Support monthly and quarterly factsheets, portfolio commentary, performance updates, market commentary, holdings information, benchmark descriptions, and related disclosures through recurring multilingual publication cycles.</p></div>
          <div className="doc-group"><h3>Shareholder Communications</h3><p>Communicate shareholder notices, investor letters, fund mergers, objective changes, fee updates, corporate actions, distribution notices, regulatory notices, and strategy updates clearly across markets.</p></div>
        </div>
      </div>
    </section>

    <section className="section dense coverage-wrap">
      <div className="shell">
        <SectionHead eyebrow="Continuous Multilingual Publishing" title="Built for Recurring Fund Publication Cycles" intro="Fund content returns every month, quarter, and year. Stepes turns approved translations, reviewer decisions, and terminology into reusable language assets so each publication cycle can become more efficient and consistent." center />
        <div className="cycle-panel"><div className="cycle-grid">
          {C.cycle.map((x,i)=><div className="cycle-step" key={x[0]}><div className="step-num">{String(i+1).padStart(2,"0")}</div><h3>{x[0]}</h3><p>{x[1]}</p></div>)}
        </div></div>
        <div className="link-row center-links"><a className="text-link" href={links.tm}>Translation Memory <Arrow/></a><a className="text-link" href={links.etm}>Enterprise Translation Management <Arrow/></a></div>
      </div>
    </section>

    <section className="section data-section">
      <div className="shell data-layout">
        <div className="data-copy">
          <p className="eyebrow on-dark">Financial Data Integrity</p>
          <h2>Protect Every Number, Name and Reference</h2>
          <p className="body-lg">A financial document can read perfectly and still be wrong. Stepes treats structured financial information as part of translation quality, not as content that sits outside the linguistic workflow.</p>
          <div className="data-list"><div>NAV values &amp; performance figures</div><div>Percentages, fees &amp; currencies</div><div>Fund &amp; share-class names</div><div>ISINs, tickers &amp; benchmarks</div><div>Dates &amp; reporting periods</div><div>Footnotes &amp; cross-references</div><div>Tables, charts &amp; labels</div><div>Final-format validation</div></div>
        </div>
        <div className="qa-mock" aria-label="Example financial data QA view">
          <div className="mock-top"><div className="mock-title">Multilingual Financial QA</div><div className="status">Checks complete</div></div>
          <div className="qa-table">
            <div className="qa-row head"><span>Protected item</span><span>Source</span><span>Target</span><span>Status</span></div>
            <div className="qa-row"><span>Share class</span><span>Class I EUR</span><span>Class I EUR</span><span className="ok">✓</span></div>
            <div className="qa-row"><span>ISIN</span><span>LU1234567890</span><span>LU1234567890</span><span className="ok">✓</span></div>
            <div className="qa-row"><span>Management fee</span><span>0.65%</span><span>0,65%</span><span className="ok">✓</span></div>
            <div className="qa-row"><span>1Y performance</span><span>+8.42%</span><span>+8,42%</span><span className="ok">✓</span></div>
            <div className="qa-row"><span>Benchmark</span><span>MSCI World</span><span>MSCI World</span><span className="ok">✓</span></div>
          </div>
          <div className="mock-note"><MiniIcon type="shield"/><div><strong>Language changes. Financial data should not.</strong><p>Terminology, protected variables, formatting, and structured financial values remain part of the QA scope.</p></div></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell ai-layout">
        <SectionHead eyebrow="Smarter Financial Workflows" keepLeft title="AI-Enabled Financial Translation With Human Accountability" intro="A prospectus, monthly factsheet, marketing page, internal research document, and regulated disclosure should not automatically follow the same workflow. Stepes aligns AI, professional review, terminology controls, and QA with content risk and intended use." />
        <div className="risk-rows">
          {C.ai.map(x=><div className="risk-row" key={x[0]}><div><h3>{x[0]}</h3><p className="risk-examples">{x[1]}</p></div><p className="risk-method">{x[2]}</p></div>)}
          <div className="inline-link"><a className="text-link" href={links.ai}>AI Translation Services <Arrow/></a></div>
        </div>
      </div>
    </section>

    <section className="section dense coverage-wrap">
      <div className="shell">
        <SectionHead title="Specialized Support for Asset Management and Wealth Management" intro="The two disciplines share a financial foundation, but their audiences, content, regulatory context, and communication styles are different. Stepes supports both with workflows matched to how each business communicates." center />
        <div className="dual-panel">
          <div className="dual-side"><p className="eyebrow">Funds &amp; Investment Firms</p><h3>Asset Management Translation Services</h3><p>Support multilingual communication with retail investors, institutions, regulators, distributors, advisers, consultants, shareholders, and internal stakeholders.</p><div className="pill-list"><span>Mutual funds</span><span>ETFs</span><span>UCITS</span><span>Alternative funds</span><span>Institutional investing</span><span>Fund administration</span><span>Cross-border distribution</span></div></div>
          <div className="dual-side"><p className="eyebrow">Private Banks &amp; Advisers</p><h3>Wealth Management Translation Services</h3><p>Our wealth management translation services support financially precise, discreet, and audience-appropriate communication across portfolio reporting, investment proposals, onboarding, research, wealth planning, and digital client experiences.</p><div className="pill-list"><span>Private banking</span><span>Advisory services</span><span>Portfolio management</span><span>Family office support</span><span>HNW communications</span><span>UHNW communications</span><span>Digital wealth platforms</span></div></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHead title="One Global Program. Local Market Precision." intro="Centralize multilingual investment operations without losing the terminology, disclosure language, and communication conventions appropriate to each market." center />
        <div className="region-band"><div className="region-grid">{C.regions.map(x=><div className="region" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div>
        <p className="disclaimer">Regulatory requirements vary by organization, product, audience, and jurisdiction and continue to evolve. Stepes provides translation and localization services and does not provide legal, investment, accounting, or regulatory advice.</p>
      </div>
    </section>

    <section className="section dense">
      <div className="shell esg-panel">
        <div><h2>Translation for Sustainable Investment and ESG Communications</h2><p>Support multilingual sustainable investment content while keeping terminology, policies, metrics, and investor-facing narratives aligned across markets.</p><a className="text-link" href={links.esg}>ESG &amp; Sustainability Translation Services <Arrow/></a></div>
        <div className="esg-list"><div>SFDR-related disclosures</div><div>Sustainability product information</div><div>Responsible investment policies</div><div>Stewardship policies and reports</div><div>ESG and sustainability reports</div><div>Climate-related content</div><div>Sustainable investment strategies</div><div>Investor ESG communications</div></div>
      </div>
    </section>

    <section className="section">
      <div className="shell digital-layout">
        <div className="portal-mock" aria-label="Example multilingual investor portal">
          <div className="portal-top"><div className="portal-brand">Global Investor Portal</div><div className="portal-lang">Deutsch · Investor view</div></div>
          <div className="portal-content"><div className="portal-side"><div></div><div></div><div></div><div></div></div><div className="portal-main"><div className="portal-label">Portfolio value</div><div className="portal-value">€2,481,620</div><div className="portal-chart"><svg viewBox="0 0 300 130" aria-hidden="true"><path d="M4 104 C45 91, 54 100, 88 75 S147 86, 172 57 S227 61, 296 22" fill="none" stroke="#566171" strokeWidth="3"/><path d="M4 104 C45 91, 54 100, 88 75 S147 86, 172 57 S227 61, 296 22" fill="none" stroke="#C11D63" strokeWidth="2" strokeDasharray="1 11" strokeLinecap="round"/></svg></div></div></div>
        </div>
        <div>
          <SectionHead eyebrow="Digital Delivery" title="Multilingual Investor Experiences Across Every Digital Channel" intro="Investor communication extends well beyond documents. Stepes localizes the digital experiences through which investors and wealth clients access information, research, reporting, and service content." />
          <div className="digital-list">
            <div className="digital-item"><h3>Investor Portals</h3><p>Portfolio content, fund information, reporting, navigation, help content, notifications, and investor communications.</p></div>
            <div className="digital-item"><h3>Fund &amp; Investment Websites</h3><p>Product pages, performance information, strategy descriptions, disclosures, market commentary, and supporting digital content.</p></div>
            <div className="digital-item"><h3>Wealth Platforms &amp; Mobile Apps</h3><p>Onboarding, portfolio information, research, account communications, notifications, guidance, and client experiences.</p></div>
            <div className="digital-item"><h3>Digital Documents &amp; Accessibility</h3><p>HTML, XML, office files, PDFs, digital factsheets, multimedia, accessible documents, and structured publishing formats.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section asset-section">
      <div className="shell asset-layout">
        <div>
          <p className="eyebrow">Language Asset Governance</p>
          <h2>Turn Previous Investment Translations Into Reusable Language Assets</h2>
          <p className="body-lg">Investment content repeats by design. Translation memory preserves approved sentence-level content, while terminology management governs the concepts that must remain consistent across new material.</p>
          <p>Used together, these resources give financial linguists, AI workflows, reviewers, and global teams a stronger language foundation for every new publication cycle.</p>
          <p><a className="text-link" href={links.tm}>Translation Memory <Arrow/></a></p><p><a className="text-link" href={links.term}>Terminology Management <Arrow/></a></p>
        </div>
        <div className="asset-map">
          <div className="asset-row"><h3>Reuse Trusted Content</h3><p>Surface previously translated and approved language when identical or similar content appears again.</p></div>
          <div className="asset-row"><h3>Control Investment Terms</h3><p>Govern fund names, strategies, share classes, financial concepts, disclosures, abbreviations, and market-specific variants.</p></div>
          <div className="asset-row"><h3>Focus Review on Change</h3><p>Let translators and internal reviewers spend more time on new commentary, changed disclosures, updated products, and meaningful modifications.</p></div>
          <div className="asset-row"><h3>Capture Reviewer Decisions</h3><p>Turn resolved terminology and translation choices into reusable guidance instead of debating the same issues every cycle.</p></div>
          <div className="asset-row"><h3>Protect Institutional Knowledge</h3><p>Retain approved multilingual language even as teams, reviewers, systems, or external providers change.</p></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHead eyebrow="Enterprise-Grade Controls" title="Quality, Security and Governance for Financial Content" intro="Business-critical investment content may involve confidential product information, performance data, unpublished reports, investor communications, regulatory correspondence, and complex internal approval chains." center />
        <div className="quality-grid">
          <div className="quality-col"><MiniIcon type="shield"/><h3>Financial Expertise &amp; Quality</h3><p className="quality-lead">Translators and reviewers are selected for the language pair, investment subject matter, audience, and content risk.</p><ul><li>Asset and wealth management expertise</li><li>Independent review where required</li><li>Approved terminology and translation memory</li><li>Completeness and numeric checks</li><li>Automated QA and formatting validation</li><li>Final delivery verification</li></ul><p className="inline-link"><a className="text-link" href={links.qa}>Translation Quality Assurance <Arrow/></a></p></div>
          <div className="quality-col"><MiniIcon type="layers"/><h3>Secure Review &amp; Governance</h3><p className="quality-lead">Keep central teams, local-market reviewers, terminology decisions, and approvals connected through controlled multilingual workflows.</p><ul><li>Controlled multilingual content handling</li><li>Structured user and reviewer access</li><li>Centralized comments and approvals</li><li>Clear version and delivery visibility</li><li>Reviewer decisions captured for reuse</li><li>Repeatable program controls</li></ul><p className="inline-link"><a className="text-link" href={links.etm}>Enterprise Translation Management <Arrow/></a></p></div>
          <div className="quality-col"><MiniIcon type="doc"/><h3>Publication-Ready Delivery</h3><p className="quality-lead">Coordinate multilingual layout, document engineering, and final-format validation for complex financial files and publishing channels.</p><ul><li>Tables, charts, and graphics</li><li>Footnotes and cross-references</li><li>Complex multilingual layouts</li><li>In-context and final-format QA</li><li>Print and digital deliverables</li><li>Editable native files when available</li></ul><p className="inline-link"><a className="text-link" href={links.dtp}>Multilingual Desktop Publishing <Arrow/></a></p></div>
        </div>
      </div>
    </section>

    <section className="section dense coverage-wrap">
      <div className="shell">
        <SectionHead title="Built for Real-World Asset &amp; Wealth Management Programs" intro="From a single prospectus to continuous global fund publishing, Stepes can support different program shapes without forcing every project through the same operating model." center />
        <div className="program-grid">{C.programs.map(x=><div className="program" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHead title="Flexible Support for Every Translation Program" intro="Choose focused project support, a recurring publication model, or a managed enterprise program built around your funds, markets, languages, reviewers, and quality requirements." center />
        <div className="engage-grid">
          <div className="engage"><h3>Individual Projects</h3><p>For focused multilingual requirements.</p><ul><li>Prospectuses and reports</li><li>Fund launches</li><li>Regulatory documents</li><li>Investor communications</li><li>Marketing campaigns</li></ul></div>
          <div className="engage"><h3>Recurring Publication Programs</h3><p>For investment content that returns on a fixed cycle.</p><ul><li>Monthly fund factsheets</li><li>Quarterly portfolio reports</li><li>Investment commentary</li><li>Investor communications</li><li>Product and disclosure updates</li></ul></div>
          <div className="engage"><h3>Managed Enterprise Programs</h3><p>For organizations coordinating multilingual operations at scale.</p><ul><li>Multiple funds and strategies</li><li>Numerous languages</li><li>Central terminology and TM</li><li>Internal and regional reviewers</li><li>Workflow automation and governance</li></ul></div>
        </div>
        <div className="inline-link"><a className="text-link" href={links.contact}>Talk to Our Financial Translation Team <Arrow/></a></div>
      </div>
    </section>

    <section className="section why-wrap">
      <div className="shell">
        <SectionHead title="Why Global Investment Organizations Choose Stepes" intro="Financial expertise, governed language assets, scalable technology, and structured review come together in one multilingual operating model." center />
        <div className="why-grid">{C.reasons.map(x=><div className="why-item" key={x[0]}><div className="check">✓</div><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHead title="Explore Related Financial Translation Solutions" intro="Connect asset and wealth management content with related financial, regulatory, sustainability, AI, and enterprise translation capabilities." />
        <div className="related">
          {[
            ["Financial Translation Services","Specialized multilingual support across banking, investment management, capital markets, regulatory content, fintech, insurance, and financial reporting.",links.financial],
            ["Banking & Lending Translation Services","Translation for regulated banking, lending, disclosures, policies, customer communications, and global financial operations.",links.banking],
            ["Regulatory Financial Translation Services","Multilingual regulatory reporting, disclosures, governance, risk, and supervisory communications across jurisdictions.",links.regulatory],
            ["ESG & Sustainability Translation Services","Sustainability reporting, ESG communications, sustainable finance content, terminology, and multilingual data integrity.",links.esg],
            ["AI Translation Services","Risk-matched AI translation with approved terminology, translation memory, quality controls, and professional review.",links.ai],
            ["Enterprise Translation Management","Centralize multilingual requests, workflows, language assets, reviewers, approvals, quality controls, and delivery.",links.etm],
          ].map(x=><div className="related-row" key={x[0]}><div><h3>{x[0]}</h3><p>{x[1]}</p></div><a className="text-link" href={x[2]}>{x[0]} <Arrow/></a></div>)}
        </div>
      </div>
    </section>

    <section className="section dense coverage-wrap">
      <div className="shell">
        <SectionHead title="Asset &amp; Wealth Management Translation FAQs" intro="Answers to common questions about fund documentation, recurring publication, financial data QA, AI-enabled workflows, and wealth management translation." center />
        <div className="faq-panel">{C.faqs.map((x,i)=><details key={x[0]} open={i===0}><summary>{x[0]}</summary><div className="faq-answer"><p>{x[1]}</p></div></details>)}</div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell">
        <div className="cta-panel">
          <div><h2>Take Your Investment Content Global With Confidence</h2><p>From fund launches and prospectus updates to recurring factsheets, investor reporting, digital platforms, and multilingual wealth-management communications, Stepes provides the expertise, technology, quality controls, and scalable workflows to keep global investment content moving.</p></div>
          <div><div className="hero-actions"><a className="cta primary" href={links.quote}>Get a Quote <Arrow/></a><a className="cta secondary" href={links.contact}>Contact Sales <Arrow/></a></div><p className="micro">Secure and confidential. No account required.</p></div>
        </div>
      </div>
    </section>
  </main>;
}
