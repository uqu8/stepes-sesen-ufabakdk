import React from "react";

const LINKS = {
  about: "https://www.stepes.com/about/",
  global: "https://www.stepes.com/global-presence/",
  linguists: "https://www.stepes.com/our-linguists/",
  solutions: "https://www.stepes.com/solutions/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationApi: "https://www.stepes.com/developers/translation-api/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  enterpriseManagement: "https://www.stepes.com/enterprise-translation-management/",
  ai: "https://www.stepes.com/ai-translation-services/",
  aiReview: "https://www.stepes.com/ai-translation-review/",
  aiOutput: "https://www.stepes.com/ai-output-review-services/",
  contact: "https://www.stepes.com/contact-sales/",
};

const evolution = [
  {
    title: "Mobile & On-Demand Translation",
    text: "Making professional language expertise easier to access whenever and wherever it was needed.",
  },
  {
    title: "Cloud-Based Translation Workflows",
    text: "Connecting linguists, content, project teams, and language resources through online systems.",
  },
  {
    title: "Continuous Translation",
    text: "Helping multilingual content move alongside faster digital publishing and release cycles.",
  },
  {
    title: "Enterprise Workflow Automation",
    text: "Connecting translation memory, terminology, APIs, quality controls, review, and project management.",
  },
  {
    title: "AI-Enabled Translation",
    text: "Applying artificial intelligence alongside professional linguistic expertise, reusable language assets, enterprise governance, and human validation.",
  },
];

const enterpriseCapabilities = [
  {
    icon: "memory",
    title: "Translation Memory",
    text: "Reuse previously approved translations to improve consistency and efficiency across recurring multilingual content.",
    href: LINKS.translationMemory,
    label: "Translation Memory",
  },
  {
    icon: "term",
    title: "Terminology Management",
    text: "Control important product, technical, corporate, and industry-specific language across teams and markets.",
    href: LINKS.terminology,
    label: "Terminology Management",
  },
  {
    icon: "api",
    title: "APIs & Integrations",
    text: "Connect translation with the systems and digital products where enterprise content is created and managed.",
    href: LINKS.translationApi,
    label: "Translation API",
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    text: "Reduce repetitive project administration and move content more efficiently between teams, linguists, reviewers, and markets.",
    href: LINKS.workflowAutomation,
    label: "Workflow Automation",
  },
  {
    icon: "review",
    title: "Professional Review",
    text: "Apply native-language and subject-matter expertise where context, nuance, cultural fit, regulatory sensitivity, or brand voice matters.",
    href: LINKS.linguists,
    label: "Our Linguists",
  },
  {
    icon: "program",
    title: "Enterprise Translation Management",
    text: "Coordinate languages, files, teams, approvals, quality requirements, and recurring content programs through a connected operating model.",
    href: LINKS.enterpriseManagement,
    label: "Enterprise Translation Management",
  },
];

const principles = [
  {
    title: "Technology Should Remove Friction",
    text: "Translation technology should make multilingual work easier to initiate, manage, review, reuse, and deliver. Automation should reduce unnecessary administrative work so people can focus on decisions that require expertise.",
  },
  {
    title: "Human Expertise Still Matters",
    text: "Languages are shaped by context, culture, audience, subject matter, and intent. Professional linguists provide the judgment required when meaning cannot be reduced to words alone.",
  },
  {
    title: "Quality Should Match Purpose",
    text: "Not every piece of content needs the same translation workflow. Stepes matches automation, professional review, subject-matter expertise, and quality controls to the intended use and business impact of the content.",
  },
  {
    title: "Global Content Should Be Connected",
    text: "Translation works best when it is connected to the content systems, language assets, teams, reviewers, and workflows that support the rest of the organization.",
  },
];

const related = [
  {
    title: "About Stepes",
    text: "Learn more about who we are today, our enterprise translation model, professional linguists, technology, and approach to multilingual content.",
    href: LINKS.about,
    label: "About Stepes",
  },
  {
    title: "Global Presence",
    text: "Explore Stepes locations and our international delivery network across North America, Latin America, Europe, and Asia.",
    href: LINKS.global,
    label: "Global Presence",
  },
  {
    title: "Professional Linguists",
    text: "Meet the global language expertise behind Stepes translation, localization, review, and multilingual content delivery.",
    href: LINKS.linguists,
    label: "Our Linguists",
  },
  {
    title: "Translation Solutions",
    text: "Explore AI-enabled translation solutions designed around content type, audience, quality requirements, and business risk.",
    href: LINKS.solutions,
    label: "Translation Solutions",
  },
];

function ArrowLink({ href, children, light = false }) {
  return (
    <a className={`editorial-link${light ? " light" : ""}`} href={href}>
      {children}<span aria-hidden="true">→</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, center = true, dark = false }) {
  return (
    <div className={`section-heading${center ? " center" : ""}${dark ? " dark" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    memory: <><path d="M7 4h10a2 2 0 0 1 2 2v12H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M9 8h6M9 12h5M9 16h4"/></>,
    term: <><path d="M5 5h14M8 5c0 7-2 10-4 12M8 11c1.3 2.6 3.2 4.7 5.7 6.2"/><path d="m15 9 4 10M16.1 16h5.1"/></>,
    api: <><path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    workflow: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.2 7.5l3.6 8.5M16.8 7.5 13.2 16"/></>,
    review: <><path d="M4 5h16v12H9l-5 3Z"/><path d="m8 11 2.3 2.2L16 8"/></>,
    program: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h4M8 16h7"/></>,
  };
  return <svg {...common}>{paths[name] || paths.workflow}</svg>;
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520">
        <defs>
          <linearGradient id="softWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDF2F7" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="34" y="32" width="552" height="456" rx="36" fill="url(#softWash)" stroke="#D9DEE5" />
        <path d="M83 372h180" stroke="#B7BFC9" strokeWidth="2" />
        <path d="M100 372V254l38-35v153M149 372V188l28-24v208M191 372V274l32-29v127M233 372V224l23-20v168" stroke="#596373" strokeWidth="3" fill="none" />
        <path d="M92 254h18M154 218h19M197 288h17M237 246h16" stroke="#C11D63" strokeWidth="3" />
        <path d="M294 262c45-65 112-104 188-107" stroke="#8B96A5" strokeWidth="2.4" strokeDasharray="7 9" fill="none" />
        <circle cx="297" cy="262" r="6" fill="#C11D63" />
        <circle cx="482" cy="155" r="6" fill="#C11D63" />
        <circle cx="396" cy="201" r="5" fill="#8B96A5" />
        <circle cx="444" cy="179" r="5" fill="#8B96A5" />
        <circle cx="348" cy="229" r="5" fill="#8B96A5" />
        <circle cx="433" cy="318" r="86" fill="#FFFFFF" stroke="#9AA4B2" strokeWidth="2.5" />
        <ellipse cx="433" cy="318" rx="48" ry="86" fill="none" stroke="#B5BDC7" strokeWidth="2" />
        <path d="M347 318h172M363 278h140M363 358h140" stroke="#B5BDC7" strokeWidth="2" />
        <path d="M433 232c-19 22-29 51-29 86 0 34 10 63 29 86M433 232c19 22 29 51 29 86 0 34-10 63-29 86" stroke="#B5BDC7" strokeWidth="2" fill="none" />
        <rect x="306" y="73" width="197" height="72" rx="18" fill="#FFFFFF" stroke="#C7CED7" />
        <circle cx="334" cy="109" r="10" fill="#C11D63" />
        <path d="M355 98h111M355 113h93M355 128h65" stroke="#667181" strokeWidth="7" strokeLinecap="round" />
                <path d="M278 399c50 31 115 43 176 31" stroke="#C11D63" strokeWidth="2.3" strokeDasharray="5 7" fill="none" />
        <circle cx="278" cy="399" r="5" fill="#C11D63" />
      </svg>
    </div>
  );
}

function GlobalArt() {
  return (
    <svg className="global-art" viewBox="0 0 620 360" aria-hidden="true">
      <rect x="18" y="18" width="584" height="324" rx="30" fill="#FBFCFD" stroke="#D6DCE3" />
      <path d="M84 186c46-53 101-68 151-42 35 18 65 16 96-7 47-35 94-33 140-5 30 18 57 20 91 8" stroke="#B1BAC5" strokeWidth="2" fill="none" />
      <path d="M88 189c45 31 88 31 128 3 37-25 70-25 105 0 36 26 77 27 119 2 41-24 77-23 112 2" stroke="#CDD3DB" strokeWidth="2" fill="none" />
      <path d="M96 205c58-59 119-88 184-84 64 4 121 31 171 81" stroke="#C11D63" strokeWidth="2.3" strokeDasharray="7 8" fill="none" />
      <circle cx="96" cy="205" r="9" fill="#C11D63" />
      <circle cx="202" cy="156" r="6" fill="#808B99" />
      <circle cx="304" cy="126" r="6" fill="#808B99" />
      <circle cx="404" cy="157" r="6" fill="#808B99" />
      <circle cx="516" cy="209" r="6" fill="#808B99" />
      <rect x="58" y="246" width="132" height="56" rx="16" fill="#FFFFFF" stroke="#CAD1D9" />
      <text x="124" y="270" textAnchor="middle" fontSize="14" fontWeight="600" fill="#4F5968">SAN FRANCISCO</text>
      <text x="124" y="288" textAnchor="middle" fontSize="14" fill="#7A8491">GLOBAL HQ</text>
      <rect x="365" y="56" width="186" height="64" rx="16" fill="#FFFFFF" stroke="#CAD1D9" />
      <text x="458" y="82" textAnchor="middle" fontSize="14" fontWeight="600" fill="#4F5968">GLOBAL DELIVERY</text>
      <text x="458" y="101" textAnchor="middle" fontSize="14" fill="#7A8491">LANGUAGES · REGIONS · TIME ZONES</text>
    </svg>
  );
}

export default function StepesCompanyBackgroundHistory60() {
  return (
    <>
      <style>{`
        :root{--mag:#C11D63;--mag-dark:#A71954;--burgundy:#7A1542;--blush:#FDF2F7;--ink:#202936;--body:#485162;--muted:#667181;--line:#D8DEE6;--soft:#F7F9FB;--dark:#1E242D;--dark2:#252D38;--white:#FFFFFF;--eyebrow-dark:#F2A7C6}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        .cb-page{font-family:"Inter Tight",Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:#fff;overflow:hidden}
        .cb-page a{color:inherit;text-decoration:none}
        .container{width:100%;max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section.dense{padding:80px 0}
        .soft{background:var(--soft)}
        .blush{background:var(--blush)}
        .dark-section{background:var(--dark);color:#fff}
        .eyebrow{font-size:11px;line-height:1.2;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--mag);margin-bottom:14px}
        .dark-section .eyebrow,.section-heading.dark .eyebrow{color:var(--eyebrow-dark)}
        h1,h2,h3,p{margin-top:0}
        h1,h2,h3{font-weight:600;letter-spacing:-.025em;color:var(--ink)}
        h1{font-size:48px;line-height:1.04;margin-bottom:24px;max-width:720px}
        h2{font-size:36px;line-height:1.12;margin-bottom:22px}
        h3{font-size:24px;line-height:1.2;margin-bottom:10px}
        p{font-size:17px;line-height:1.72;color:var(--body);font-weight:400}
        .dark-section h2,.dark-section h3{color:#fff}
        .dark-section p{color:#E5E9EE}
        .section-heading{max-width:820px;margin-bottom:48px}
        .section-heading.center{text-align:center;margin-left:auto;margin-right:auto}
        .section-heading .section-intro{font-size:18px;line-height:1.65;max-width:800px;margin:0 auto;color:var(--body)}
        .section-heading.dark .section-intro{color:#E5E9EE}
        .hero{padding:104px 0 96px;background:#fff}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(430px,.92fr);gap:62px;align-items:center}
        .hero-copy{font-size:18px;line-height:1.7;max-width:720px;margin-bottom:18px}
        .hero-links{display:flex;flex-wrap:wrap;gap:12px 26px;margin-top:30px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:13px 22px;border-radius:999px;font-size:16px;font-weight:600;transition:.18s ease;border:1px solid transparent}
        .btn-primary,.btn-primary:visited{background:var(--mag);color:#fff!important}
        .btn-primary *,.btn-primary:visited *{color:#fff!important;fill:currentColor;stroke:currentColor}
        .btn-primary:hover,.btn-primary:focus-visible{background:var(--mag-dark);color:#fff!important;transform:translateY(-1px)}
        .btn-secondary{background:#fff;border-color:#C8D0D9;color:var(--ink)}
        .btn-secondary:hover,.btn-secondary:focus-visible{border-color:#8F99A7;background:#FAFBFC}
        .btn:focus-visible,.editorial-link:focus-visible{outline:3px solid rgba(193,29,99,.2);outline-offset:3px}
        .hero-art svg{display:block;width:100%;height:auto;max-height:520px}
        .origin-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:80px;align-items:start}
        .origin-grid .section-heading{margin-bottom:0}
        .origin-copy{max-width:760px}
        .origin-copy p{margin-bottom:19px}
        .fact-row{display:grid;grid-template-columns:repeat(3,1fr);margin-top:34px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .fact{padding:22px 18px 22px 0;border-right:1px solid var(--line)}
        .fact+.fact{padding-left:22px}
        .fact:last-child{border-right:0}
        .fact strong{display:block;font-size:20px;line-height:1.2;font-weight:600;color:var(--ink);margin-bottom:5px}
        .fact span{font-size:16px;line-height:1.45;color:var(--body)}
        .timeline-intro{max-width:900px;margin:0 auto 50px;text-align:left;font-size:18px;color:#E5E9EE}
        .evolution{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #46505D;border-bottom:1px solid #46505D}
        .evo-item{padding:30px 24px 30px 0;position:relative}
        .evo-item+.evo-item{padding-left:24px;border-left:1px solid #46505D}
        .evo-dot{width:10px;height:10px;border-radius:50%;background:var(--eyebrow-dark);margin-bottom:22px}
        .evo-item h3{font-size:24px;margin-bottom:10px;color:#fff}
        .evo-item p{font-size:16px;line-height:1.62;margin:0;color:#DDE2E8}
        .enterprise-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:72px;align-items:start}
        .enterprise-copy{position:sticky;top:28px}
        .enterprise-copy p{max-width:560px}
        .capability-list{border-top:1px solid var(--line)}
        .capability-row{display:grid;grid-template-columns:52px minmax(0,1fr);gap:18px;padding:24px 0;border-bottom:1px solid var(--line)}
        .icon-box{width:44px;height:44px;border-radius:14px;background:#F7F8FA;border:1px solid #DDE2E8;display:flex;align-items:center;justify-content:center;color:#596474}
        .capability-row h3{font-size:24px;margin-bottom:7px}
        .capability-row p{margin:0}.capability-row .editorial-link{margin-top:8px}
        .name-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:72px;align-items:center}
        .name-copy{max-width:680px}
        .name-mark{min-height:320px;border:1px solid #E6CED9;border-radius:28px;background:#fff;padding:40px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
        .name-mark:before{content:"";position:absolute;width:250px;height:250px;border:1px solid #E7D4DD;border-radius:50%;right:-74px;top:-78px}
        .name-mark:after{content:"";position:absolute;width:170px;height:170px;border:1px solid #EEDCE4;border-radius:50%;right:-22px;bottom:-85px}
        .name-word{font-size:62px;line-height:1;font-weight:600;letter-spacing:-.04em;color:var(--ink);position:relative;z-index:1}
        .name-pronounce{font-size:17px;color:var(--mag);font-weight:600;margin-top:9px;position:relative;z-index:1}
        .steppe-path{margin-top:42px;height:44px;position:relative;z-index:1}
        .steppe-path:before{content:"";position:absolute;left:0;right:0;top:20px;height:2px;background:#C8CFD8}
        .steppe-path:after{content:"";position:absolute;left:25%;right:18%;top:20px;height:2px;background:var(--mag)}
        .steppe-labels{display:flex;justify-content:space-between;position:relative;z-index:2;font-size:14px;color:#5F6978}
        .steppe-labels span{background:#fff;padding:11px 8px 0}
        .global-layout{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:center}
        .global-art{width:100%;height:auto;display:block}
        .global-copy p{max-width:650px}
        .editorial-link{display:inline-flex;align-items:center;gap:7px;color:var(--mag)!important;font-size:16px;font-weight:600;min-height:44px}
        .editorial-link span{transition:transform .18s ease}
        .editorial-link:hover span{transform:translateX(3px)}
        .editorial-link.light{color:#F5B4D0!important}
        .today-copy{max-width:900px;margin:0 auto 50px;text-align:left}
        .today-copy p{font-size:18px;line-height:1.68;margin-bottom:18px}.today-copy p:last-child{margin-bottom:0}
        .proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:grid;grid-template-columns:repeat(4,1fr)}
        .proof-item{padding:28px 24px;border-right:1px solid var(--line)}
        .proof-item:first-child{padding-left:0}
        .proof-item:last-child{border-right:0;padding-right:0}
        .proof-item strong{display:block;font-size:24px;line-height:1.2;font-weight:600;color:var(--ink);margin-bottom:7px}
        .proof-item span{font-size:16px;line-height:1.48;color:var(--body)}
        .ai-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:72px;align-items:start}
        .ai-copy p{max-width:720px}
        .ai-copy .section-heading{margin-bottom:28px}
        .ai-model{border:1px solid #48515E;border-radius:28px;background:var(--dark2);padding:28px}
        .ai-model-label{font-size:11px;line-height:1.2;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--eyebrow-dark);margin-bottom:20px}
        .ai-layer{padding:20px 0;border-top:1px solid #48515E}
        .ai-model-label + .ai-layer{border-top:0;padding-top:0}
        .ai-layer strong{display:block;color:#fff;font-size:18px;font-weight:600;margin-bottom:6px}
        .ai-layer span{font-size:16px;line-height:1.55;color:#DDE2E8}
        .ai-links{display:flex;flex-wrap:wrap;gap:12px 24px;margin-top:24px}
        .goal-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:72px;align-items:start}
        .goal-copy{max-width:760px}
        .goal-copy p{margin-bottom:18px}
        .principle-list{margin-top:40px;border-top:1px solid var(--line)}
        .principle-row{display:grid;grid-template-columns:260px minmax(0,1fr);gap:36px;padding:25px 0;border-bottom:1px solid var(--line)}
        .principle-row h3{font-size:24px;margin:0}
        .principle-row p{margin:0}
        .future-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:72px;align-items:start}
        .future-quote{font-size:29px;line-height:1.35;font-weight:600;color:var(--ink);letter-spacing:-.02em;border-left:3px solid var(--mag);padding-left:24px}
        .future-copy p{max-width:760px}
        .related-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .related-item{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .related-item h3{font-size:24px;margin-bottom:9px}
        .related-item p{margin-bottom:12px}
        .final-cta{padding:88px 0;background:var(--blush)}
        .cta-box{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center}
        .cta-copy{max-width:820px}
        .cta-box h2{font-size:36px;margin-bottom:15px}
        .cta-box p{font-size:18px;margin:0}.cta-copy p+p{margin-top:12px}
        .cta-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
        @media(max-width:1100px){
          .container{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:1fr 440px;gap:40px}
          .origin-grid,.enterprise-layout,.name-layout,.global-layout,.ai-layout,.goal-layout,.future-layout{gap:48px}
          .evolution{grid-template-columns:repeat(3,1fr)}
          .evo-item:nth-child(4){border-left:0;border-top:1px solid #46505D;padding-left:0}
          .evo-item:nth-child(5){border-top:1px solid #46505D}
          .proof-item strong{font-size:22px}
        }
        @media(max-width:900px){
          .container{padding-left:24px;padding-right:24px}
          .section{padding:80px 0}.section.dense{padding:72px 0}.hero{padding:88px 0 82px}
          h1{font-size:42px}.section-heading h2,.cta-box h2{font-size:32px}
          h3,.evo-item h3,.capability-row h3,.principle-row h3,.related-item h3{font-size:22px}.hero-grid{grid-template-columns:1fr;gap:44px}.hero-art{max-width:650px;margin:0 auto}
          .origin-grid,.enterprise-layout,.name-layout,.global-layout,.ai-layout,.goal-layout,.future-layout{grid-template-columns:1fr}
          .enterprise-copy{position:static}
          .global-copy{order:1}.global-art{order:2}
          .origin-grid .section-heading,.enterprise-copy .section-heading,.name-copy .section-heading,.global-copy .section-heading,.ai-copy .section-heading,.goal-layout .section-heading,.future-layout .section-heading{max-width:760px;text-align:center;margin-left:auto;margin-right:auto}
          .proof-band{grid-template-columns:repeat(2,1fr)}
          .proof-item:nth-child(2){border-right:0}.proof-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .proof-item:nth-child(3){padding-left:0}
          .evolution{grid-template-columns:1fr 1fr}
          .evo-item:nth-child(3),.evo-item:nth-child(5){border-left:0;padding-left:0}
          .evo-item:nth-child(n+3){border-top:1px solid #46505D}
          .evo-item:nth-child(4){border-left:1px solid #46505D;padding-left:24px}
          .cta-box{grid-template-columns:1fr}.cta-actions{justify-content:flex-start}
        }
        @media(max-width:560px){
          .container{padding-left:20px;padding-right:20px}
          .section{padding:68px 0}.section.dense{padding:64px 0}.hero{padding:72px 0 68px}
          h1{font-size:38px;text-align:center;max-width:none}.hero .eyebrow{text-align:center}.hero-copy{text-align:center;font-size:18px}.hero-links{justify-content:center}
          .section-heading.center,.origin-grid .section-heading,.enterprise-copy .section-heading,.name-copy .section-heading,.global-copy .section-heading,.ai-copy .section-heading,.goal-layout .section-heading,.future-layout .section-heading{text-align:center;margin-left:auto;margin-right:auto}
          .section-heading h2,.cta-box h2{font-size:30px}h3,.evo-item h3,.capability-row h3,.principle-row h3,.related-item h3{font-size:20px}.section-heading .section-intro{font-size:17px}
          .origin-copy,.enterprise-copy p,.name-copy,.global-copy p,.ai-copy,.goal-copy,.future-copy{text-align:left}
          .fact-row{grid-template-columns:1fr}.fact{border-right:0;border-bottom:1px solid var(--line);padding:19px 0}.fact+.fact{padding-left:0}.fact:last-child{border-bottom:0}
          .evolution{grid-template-columns:1fr}.evo-item,.evo-item+.evo-item,.evo-item:nth-child(4){padding:24px 0;border-left:0;border-top:1px solid #46505D}.evo-item:first-child{border-top:0}
          .capability-row{grid-template-columns:44px minmax(0,1fr);gap:10px 14px}.capability-row>div:last-child{display:contents}.capability-row h3{grid-column:2;align-self:center;margin:0}.capability-row p{grid-column:1/-1}.capability-row .editorial-link{grid-column:1/-1;justify-self:start;margin-top:0}
          .name-mark{padding:30px 24px;min-height:280px}.name-word{font-size:52px}.global-art{display:none}
          .proof-band{grid-template-columns:1fr}.proof-item,.proof-item:nth-child(3){padding:20px 0;border-right:0;border-bottom:1px solid var(--line)}.proof-item:last-child{border-bottom:0}
          .ai-model{padding:24px 20px}.ai-links{flex-direction:column;align-items:flex-start;gap:4px}
          .principle-row{grid-template-columns:1fr;gap:8px;padding:22px 0}
          .future-quote{font-size:24px}
          .related-grid{grid-template-columns:1fr}.related-item{padding:25px 22px}
          .cta-box{text-align:left}.cta-box h2{text-align:center}.cta-actions{flex-direction:column}.cta-actions .btn{width:100%}
          .hero-art svg{min-width:0}
        }
        @media(max-width:360px){
          .container{padding-left:20px;padding-right:20px}.name-word{font-size:46px}.name-mark{padding:28px 20px}
        }
      `}</style>

      <main className="cb-page">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">About Stepes</div>
              <h1>Stepes Company Background &amp; History</h1>
              <p className="hero-copy">Founded in San Francisco in 2015, Stepes was created around a simple idea: translation should combine professional language expertise with the speed, accessibility, and scalability of modern technology.</p>
              <p className="hero-copy">What began with mobile and on-demand translation has evolved into a connected enterprise translation model that brings together professional linguists, AI-powered translation, translation memory, terminology management, workflow automation, quality assurance, and enterprise translation management. Today, Stepes helps global organizations translate, localize, and manage content across languages, markets, platforms, and business functions.</p>
              <div className="hero-links">
                <ArrowLink href={LINKS.about}>About Stepes</ArrowLink>
                <ArrowLink href={LINKS.global}>Global Presence</ArrowLink>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="section">
          <div className="container origin-grid">
            <SectionHeading title="Born in San Francisco. Built for Global Business." center={false} />
            <div className="origin-copy">
              <p>Stepes was founded in San Francisco in 2015 at a time when the way companies created and distributed content was changing rapidly. Software releases were becoming more frequent. Websites and digital products were continuously updated. Global teams were producing more content across more channels, while traditional translation workflows often remained fragmented, manual, and difficult to scale.</p>
              <p><strong>Stepes was created to rethink that model.</strong></p>
              <p>From the beginning, the goal was to make professional translation easier to access, faster to deliver, and better connected to the digital workflows global organizations increasingly relied on. Mobile technology, cloud computing, APIs, and online collaboration created an opportunity to move translation beyond traditional desktop-based processes and closer to the people, content, and systems that needed it.</p>
              <p>That technology-first philosophy continues to shape Stepes today. The tools have changed significantly since 2015, but the underlying objective has remained consistent: use technology to remove unnecessary friction from multilingual communication while preserving the professional language expertise required for accurate, effective, and culturally appropriate content.</p>
              <div className="fact-row">
                <div className="fact"><strong>2015</strong><span>Founded</span></div>
                <div className="fact"><strong>San Francisco</strong><span>Company origins</span></div>
                <div className="fact"><strong>Global HQ</strong><span>San Francisco, California</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <SectionHeading eyebrow="Translation Technology Evolution" title="Rethinking How Translation Gets Done" intro="Stepes began by exploring a question that remains relevant today: How can technology make high-quality translation more responsive to the speed of global business?" dark />
            <p className="timeline-intro">Early Stepes technology brought translation to mobile devices through an intuitive, chat-based experience. Professional translators could receive work, translate content, and participate in multilingual workflows from virtually anywhere. The model helped reduce the distance between translation demand and available language expertise. As digital publishing accelerated, Stepes expanded this approach with just-in-time and continuous translation models designed for content that could not wait for long, batch-oriented localization cycles.</p>
            <div className="evolution">
              {evolution.map((item) => (
                <article className="evo-item" key={item.title}>
                  <div className="evo-dot" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container enterprise-layout">
            <div className="enterprise-copy">
              <SectionHeading title="From On-Demand Translation to Enterprise Language Operations" center={false} />
              <p>As global content grew more complex, so did the translation challenges organizations needed to solve. Translation was no longer limited to occasional documents. Global companies increasingly needed to manage multilingual software, websites, technical documentation, product information, legal and compliance materials, regulated content, training, multimedia, customer communications, and continuously updated digital experiences.</p>
              <p>Stepes evolved with these requirements, connecting language technology and professional expertise into a broader enterprise operating model that can support both individual projects and ongoing multilingual content programs.</p>
            </div>
            <div className="capability-list">
              {enterpriseCapabilities.map((item) => (
                <article className="capability-row" key={item.title}>
                  <div className="icon-box"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.href ? <ArrowLink href={item.href}>{item.label}</ArrowLink> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section blush">
          <div className="container name-layout">
            <div className="name-copy">
              <SectionHeading title="The Story Behind the Stepes Name" center={false} />
              <p><strong>Stepes is pronounced “steps.”</strong></p>
              <p>The name was inspired by the steppes, the vast grasslands stretching across Eurasia. For centuries, these regions connected peoples, cultures, migration routes, commerce, and communities across Europe and Asia.</p>
              <p>That idea of connection reflects what language makes possible. Stepes helps organizations cross linguistic and cultural boundaries so information, products, ideas, and experiences can reach people in the languages they understand best. From a single document to an international content program, each translation is another step toward making communication more accessible across markets.</p>
            </div>
            <div className="name-mark" aria-hidden="true">
              <div className="name-word">Stepes</div>
              <div className="name-pronounce">pronounced “steps”</div>
              <div className="steppe-path">
                <div className="steppe-labels"><span>Europe</span><span>Eurasian Steppe</span><span>Asia</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container global-layout">
            <GlobalArt />
            <div className="global-copy">
              <SectionHeading title="From San Francisco to Global Delivery" center={false} />
              <p>Stepes began in San Francisco, but professional translation has always depended on expertise that is fundamentally global.</p>
              <p>As customer requirements expanded across languages, regions, industries, and time zones, Stepes developed an international delivery model supported by professional translators, editors, reviewers, subject-matter specialists, localization professionals, and operational teams around the world.</p>
              <p>Today, Stepes maintains its global headquarters in San Francisco while supporting customers through an international presence across North America, Latin America, Europe, and Asia. This model combines centralized technology and program management with native-language expertise close to the markets where multilingual content will ultimately be used.</p>
              <ArrowLink href={LINKS.global}>Explore Our Global Presence</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <SectionHeading eyebrow="Stepes Today" title="Enterprise Translation for a New Era of Global Content" intro="Today, Stepes helps global organizations manage translation, localization, and multilingual content with a connected model built around both technology and professional expertise." />
            <div className="today-copy">
              <p>Our enterprise workflows can combine AI-powered translation, machine translation, translation memory, approved terminology, workflow automation, professional linguists, subject-matter specialists, quality assurance, stakeholder review, and centralized project management according to the purpose and risk of the content.</p>
              <p>Rather than applying one translation process to every project, Stepes helps organizations select the appropriate level of automation, professional translation, review, and quality control for how the content will actually be used.</p><p>A technical manual, corporate website, software interface, clinical document, legal agreement, internal knowledge article, and high-volume product catalog do not carry the same communication requirements or business risk. Modern enterprise translation should recognize those differences.</p>
            </div>
            <div className="proof-band">
              <div className="proof-item"><strong>100+ Languages</strong><span>Global and regional language coverage for international business.</span></div>
              <div className="proof-item"><strong>10,000+ Professional Linguists</strong><span>Translators, editors, reviewers, localization specialists, and subject-matter experts.</span></div>
              <div className="proof-item"><strong>2,000+ Enterprise Clients</strong><span>Experience supporting multilingual content across industries, business functions, and global markets.</span></div>
              <div className="proof-item"><strong>ISO-Certified Quality Processes</strong><span>Structured translation and quality management for professional and enterprise content.</span></div>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container ai-layout">
            <div className="ai-copy">
              <SectionHeading title="AI Is Changing Translation Again" center={false} dark />
              <p>Generative AI, large language models, neural machine translation, and increasingly capable language technologies are changing how multilingual content can be produced, reviewed, and maintained. Organizations can translate more content, more quickly, than traditional translation models alone could economically support.</p>
              <p>But greater automation also creates new questions. Which content can be translated primarily with AI? When should professional linguists review AI-generated translations? How should approved terminology and translation memory be incorporated? How should confidential or regulated information be handled? What level of validation is appropriate for customer-facing, technical, legal, medical, or other higher-impact content?</p>
              <p>Stepes approaches these questions using the same principle that shaped the company from the beginning: <strong>technology should improve the translation process without losing sight of the purpose of the content.</strong></p><p>For suitable content, AI can dramatically improve speed, scalability, and cost efficiency. For business-critical content, professional linguists can validate meaning, terminology, context, tone, cultural fit, and final usability. Translation memory and terminology help preserve approved language, while automated quality checks and structured review add additional controls.</p>
              <div className="ai-links">
                <ArrowLink href={LINKS.ai} light>AI Translation Services</ArrowLink>
                <ArrowLink href={LINKS.aiReview} light>AI Translation Review</ArrowLink>
                <ArrowLink href={LINKS.aiOutput} light>Multilingual AI Output Review</ArrowLink>
              </div>
            </div>
            <aside className="ai-model">
              <div className="ai-model-label">Flexible Enterprise Model</div>
              <div className="ai-layer"><strong>AI & Machine Translation</strong><span>Speed and scalable multilingual access for suitable content.</span></div>
              <div className="ai-layer"><strong>Translation Memory & Terminology</strong><span>Approved language assets help preserve consistency and organizational knowledge.</span></div>
              <div className="ai-layer"><strong>Professional Linguists</strong><span>Human judgment for meaning, terminology, context, tone, cultural fit, and higher-impact content.</span></div>
              <div className="ai-layer"><strong>Quality & Governance</strong><span>Automated checks, structured review, validation, and enterprise workflow controls matched to intended use.</span></div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container goal-layout">
            <SectionHeading title="Technology Changes. The Goal Doesn't." center={false} />
            <div className="goal-copy">
              <p>From mobile translation and cloud workflows to automation and artificial intelligence, the technologies available to translation teams have changed substantially since Stepes was founded.</p>
              <p>The fundamentals of successful global communication have not. Organizations still need multilingual content that preserves meaning, reaches the intended audience, uses the right terminology, reflects the appropriate tone, and is fit for its business purpose.</p>
              <p>That is why Stepes does not view technology and professional linguists as competing approaches. Technology is most valuable when it helps eliminate repetitive work, improve reuse, increase consistency, accelerate delivery, and give global teams greater visibility and control. Professional language expertise remains essential when translation requires judgment, context, subject knowledge, cultural understanding, creativity, or a higher level of assurance.</p>
              <div className="principle-list">
                {principles.map((item) => (
                  <article className="principle-row" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container future-layout">
            <div>
              <SectionHeading title="Built for What Comes Next" center={false} />
              <div className="future-quote">Our role is not simply to translate more words. It is to help organizations build multilingual workflows that make effective use of technology while preserving the expertise and judgment required for communication across languages and cultures.</div>
            </div>
            <div className="future-copy">
              <p>The way organizations create content will continue to change.</p>
              <p>AI is already accelerating writing, software development, knowledge creation, customer support, product experiences, and global communication. As the volume of content grows, companies will need better ways to determine what should be translated, how quickly it should move, which technology should be used, where professional review adds value, and how multilingual quality can remain consistent at scale.</p>
              <p>Stepes continues to develop around that challenge. It is the same challenge Stepes set out to address in San Francisco in 2015, now at a much larger scale.</p>
            </div>
          </div>
        </section>

        <section className="section dense">
          <div className="container">
            <SectionHeading title="Learn More About Stepes" intro="Explore the people, global presence, and translation solutions behind Stepes today." />
            <div className="related-grid">
              {related.map((item) => (
                <article className="related-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowLink href={item.href}>{item.label}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-box">
            <div className="cta-copy">
              <h2>Helping Global Organizations Communicate Across Languages</h2>
              <p>From our beginnings in San Francisco to today's AI-enabled enterprise translation workflows, Stepes has continued to evolve around one objective: make multilingual communication more efficient, scalable, and effective without losing the professional expertise that gives language its meaning.</p><p>Whether you are translating a critical document, launching products internationally, managing recurring multilingual content, modernizing an existing localization program, or exploring how AI can improve translation at scale, Stepes can help build the right combination of technology, professional expertise, and quality control for your organization.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href={LINKS.contact}>Contact Sales <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href={LINKS.about}>About Stepes</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
