import React, { useState } from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  shipbuilding: "https://www.stepes.com/shipbuilding-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  mro: "https://www.stepes.com/mro-translation-services/",
  marineEngineering: "https://www.stepes.com/marine-engineering-translation-services/",
  marineMro: "https://www.stepes.com/marine-mro-translation-services/",
  portTerminal: "https://www.stepes.com/port-terminal-translation-services/",
  maritimeSafety: "https://www.stepes.com/maritime-safety-translation-services/",
  maritimeSoftware: "https://www.stepes.com/maritime-software-localization/",
  logistics: "https://www.stepes.com/logistics-translation-services/",
  oilgas: "https://www.stepes.com/oil-gas-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  esg: "https://www.stepes.com/esg-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  languages: "https://www.stepes.com/translation-languages/",
  solutions: "https://www.stepes.com/maritime-translation-services/#maritime-solutions"
};

const sectors = [
  ["ship", "Commercial Shipping & Fleet Operations", "Container vessels, bulk carriers, tankers, RO-RO ships, specialized carriers, and global fleet organizations."],
  ["build", "Shipbuilding & Shipyards", "Engineering, procurement, construction, system integration, commissioning, sea trials, and vessel handover."],
  ["gear", "Marine Engineering & Equipment", "Propulsion, engines, pumps, electrical systems, hydraulics, deck machinery, HVAC, automation, and auxiliary systems."],
  ["port", "Ports & Marine Terminals", "Port infrastructure, terminal operations, cargo handling, equipment, workforce procedures, and digital port systems."],
  ["cruise", "Cruise & Passenger Shipping", "Passenger communications, onboard operations, safety, crew training, software, hospitality, and destination content."],
  ["energy", "Offshore & Marine Energy", "Offshore vessels, subsea engineering, marine construction, platforms, offshore wind, and supporting technical operations."],
  ["wrench", "Marine Maintenance, Repair & Overhaul", "Inspections, preventive maintenance, repairs, service documentation, dry docking, spare parts, and vessel modernization."],
  ["digital", "Maritime Technology", "Navigation, fleet management, vessel monitoring, remote diagnostics, digital twins, automation, and connected-vessel systems."],
  ["logistics", "Shipping & Maritime Logistics", "Cargo operations, freight documentation, intermodal transportation, customs, tracking, supply chains, and customer communications."],
  ["shield", "Maritime Safety & Compliance", "Safety management, emergency procedures, environmental documentation, audits, inspection materials, and crew training."]
];

const lifecycle = [
  ["01", "Design & Engineering", "Naval architecture, vessel specifications, systems documentation, engineering drawings, and procurement requirements."],
  ["02", "Shipbuilding & Integration", "Construction documentation, supplier content, installation procedures, inspections, and engineering changes."],
  ["03", "Commissioning & Handover", "Testing, sea trials, acceptance records, operating manuals, crew familiarization, and vessel handover."],
  ["04", "Vessel Operations", "Bridge and engine-room procedures, SOPs, cargo instructions, safety content, and fleet policies."],
  ["05", "Maintenance & Repair", "Preventive maintenance, troubleshooting, service bulletins, inspections, dry dock, and spare parts."],
  ["06", "Retrofit & Modernization", "Environmental retrofits, propulsion upgrades, automation, connected equipment, and digital systems."],
  ["07", "Decommissioning & Recycling", "Decommissioning plans, asset records, safety documentation, environmental content, and recycling instructions."]
];

const docs = [
  ["Engineering & Technical Documentation", ["Vessel specifications", "Naval architecture documents", "Engineering drawings and annotations", "System and equipment specifications", "Technical data sheets", "Installation instructions", "Electrical and mechanical documentation", "Engineering change notices", "Inspection and commissioning records"]],
  ["Vessel Operations", ["Operating manuals", "Standard operating procedures", "Bridge and engine-room procedures", "Cargo-handling instructions", "Fleet procedures and checklists", "Emergency procedures", "Work instructions", "Crew communications"]],
  ["Maintenance & Service", ["Maintenance manuals", "Preventive-maintenance procedures", "Repair instructions", "Troubleshooting guides", "Service bulletins", "Inspection procedures", "Maintenance schedules", "Parts catalogs and spare-parts content"]],
  ["Safety & Compliance", ["Safety-management documentation", "Emergency-response procedures", "Risk assessments", "Environmental procedures", "Incident documentation", "Audit and inspection materials", "Corrective-action content", "Pollution-prevention procedures"]],
  ["Training & Workforce Content", ["Seafarer training", "Crew onboarding", "Equipment and maintenance training", "Safety courses", "Instructor materials", "eLearning and simulator content", "Assessments", "Technical video, subtitles, and voice-over"]],
  ["Commercial, Corporate & Digital", ["Contracts and chartering materials", "Procurement and supplier content", "Tenders and proposals", "HR and corporate policies", "Sustainability reports", "Fleet-management platforms", "HMI and bridge interfaces", "Port systems, portals, apps, and knowledge bases"]]
];

const workflow = [
  ["01", "Understand", "Confirm audience, languages, technical complexity, intended use, formats, timing, and quality requirements."],
  ["02", "Prepare", "Apply terminology, translation memory, reference materials, previous translations, and project instructions."],
  ["03", "Configure", "Select the appropriate professional, AI-enabled, hybrid, engineering, review, and QA workflow."],
  ["04", "Translate", "Process documents, software, structured content, training, multimedia, and other maritime materials."],
  ["05", "Review", "Route content to professional linguists, editors, technical specialists, or customer reviewers as required."],
  ["06", "Validate", "Check terminology, completeness, numbers, units, tags, variables, formatting, layout, and file integrity."],
  ["07", "Deliver", "Return production-ready multilingual content in the required document, software, training, or structured format."],
  ["08", "Reuse", "Feed approved translations, corrections, and terminology back into language assets for future updates."]
];

const faqs = [
  ["What are maritime translation services?", "Maritime translation services translate and localize the technical, operational, safety, engineering, maintenance, training, commercial, regulatory, and digital content used across shipping and marine industries. This can include vessel manuals, shipbuilding documentation, marine engineering specifications, operating procedures, safety materials, maintenance instructions, crew training, port content, maritime software, shipping documentation, and other multilingual content used throughout vessel and maritime operations."],
  ["What types of maritime documents can Stepes translate?", "Stepes translates vessel specifications, engineering documentation, operating manuals, maintenance manuals, SOPs, safety materials, inspection content, repair instructions, service bulletins, training courses, contracts, procurement content, supplier documents, software interfaces, port documentation, environmental content, and many other maritime materials."],
  ["Does Stepes provide shipbuilding translation services?", "Yes. Stepes translates multilingual content throughout the shipbuilding process, including engineering specifications, supplier documentation, construction content, equipment manuals, installation procedures, inspection materials, commissioning documentation, sea-trial content, training, and vessel handover packages."],
  ["Can Stepes translate marine engineering documentation?", "Yes. We support marine engineering translation for mechanical, electrical, hydraulic, control, navigation, propulsion, communications, automation, safety, and other vessel systems. Professional translators and reviewers are selected according to language pair, technical discipline, content type, and project requirements."],
  ["Can you translate vessel operating and maintenance manuals?", "Yes. Stepes translates vessel operating manuals, maintenance manuals, preventive-maintenance procedures, troubleshooting guides, repair instructions, service bulletins, inspection procedures, parts documentation, and other MRO content. Translation memory and terminology management are especially useful for recurring manuals and fleet documentation."],
  ["Do you translate maritime safety and compliance documentation?", "Yes. Stepes translates safety-management content, emergency procedures, risk assessments, environmental materials, inspection and audit documentation, safety training, operating instructions, and other maritime compliance-related content. Higher-impact materials can use specialized professional translation, independent review, terminology validation, automated QA, and customer approval."],
  ["Can Stepes localize maritime software and vessel interfaces?", "Yes. Stepes provides software localization for fleet-management systems, vessel software, HMI interfaces, bridge and navigation applications, monitoring platforms, port systems, connected equipment, mobile applications, dashboards, and other maritime technologies."],
  ["How does Stepes maintain consistent maritime terminology?", "Stepes uses terminology management and translation memory to preserve approved technical language across projects. Customer-specific termbases can govern vessel components, equipment names, engineering concepts, operational terminology, safety language, acronyms, product names, software labels, and other important terms."],
  ["Does Stepes use AI for maritime translation?", "Yes. Stepes uses AI-enabled translation where it provides the right balance of speed, scale, consistency, and quality. The workflow depends on the content: high-impact engineering or safety materials can receive specialized human translation and stronger review, while suitable high-volume or repetitive content can use AI supported by terminology, translation memory, automated QA, and targeted professional validation."],
  ["What maritime languages does Stepes support?", "Stepes provides maritime translation services in 100+ languages, including Chinese, Japanese, Korean, German, Dutch, Norwegian, Danish, Finnish, French, Spanish, Portuguese, Italian, Polish, Greek, Turkish, Arabic, Indonesian, Vietnamese, and many others."]
];

function Icon({ type }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    ship: <><path d="M3 15h18l-2.2 4H5.2L3 15Z"/><path d="M7 15V9h8v6"/><path d="M10 9V6h3v3"/><path d="M5 20c1 .8 2 .8 3 0 1 .8 2 .8 3 0 1 .8 2 .8 3 0 1 .8 2 .8 3 0"/></>,
    build: <><path d="M4 20V8l6-3v15"/><path d="M10 11l10-4v13"/><path d="M7 11h.01M7 15h.01M14 12h.01M17 11h.01M14 16h.01M17 15h.01"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.4 6a8 8 0 0 0-1.5.9l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-1A8 8 0 0 0 10.4 18l.3 2.6h4L15 18a8 8 0 0 0 1.5-.9l2.4 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"/></>,
    port: <><path d="M4 20V5h7v15M11 8h8v12"/><path d="M4 9h7M15 8V4h5M20 4v4M14 13h4M14 17h4"/></>,
    cruise: <><path d="M4 15h16l-2 4H6l-2-4Z"/><path d="M7 15V8h10v7M10 8V5h4v3"/><path d="M8 11h2M12 11h2M16 11h1"/></>,
    energy: <><path d="M12 3v6"/><path d="M12 9l-5 3M12 9l5 3"/><circle cx="12" cy="9" r="1.5"/><path d="M9 20h6M10 20l1-8M14 20l-1-8"/></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z"/></>,
    digital: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9h3l2 3 2-5 3 5"/></>,
    logistics: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.5-2.6 7.6-7 10-4.4-2.4-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/></>
  };
  return <svg {...common}>{paths[type] || paths.ship}</svg>;
}

function ArrowLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function MaritimeHeroArt() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 620 520" role="img" aria-label="Line illustration of a modern commercial vessel, port infrastructure, and connected maritime systems">
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#d9dde3"/></pattern>
      </defs>
      <rect x="18" y="18" width="584" height="484" rx="30" fill="#fafbfc" stroke="#dde1e7"/>
      <rect x="35" y="35" width="550" height="450" rx="24" fill="url(#dots)" opacity=".65"/>
      <path d="M50 410c80-18 160-12 240 2s170 20 280-2" stroke="#9ca4af" strokeWidth="2" fill="none"/>
      <path d="M74 395h420l-46 48H130L74 395Z" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M152 395V280h212v115" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M190 280v-52h108v52" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M218 228v-43h48v43" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M245 184v-24" stroke="#5d6672" strokeWidth="2.4"/>
      <circle cx="245" cy="151" r="7" fill="#C11D63"/>
      <path d="M320 395V319h82v76" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M402 340h58v55" fill="#fff" stroke="#5d6672" strokeWidth="2.4"/>
      <path d="M168 307h28M208 307h28M248 307h28M288 307h28M168 338h28M208 338h28M248 338h28M288 338h28" stroke="#8b949f" strokeWidth="2"/>
      <path d="M350 319v-65h35v65M356 271h23" stroke="#5d6672" strokeWidth="2.4" fill="none"/>
      <path d="M385 253h59l29-76M444 253v-52M473 177h43M507 177v76" stroke="#7b8490" strokeWidth="2.2" fill="none"/>
      <path d="M507 253h38v142" stroke="#7b8490" strokeWidth="2.2" fill="none"/>
      <path d="M475 133c20-27 52-43 87-43" stroke="#C11D63" strokeWidth="2.2" fill="none"/>
      <path d="M490 150c17-19 42-30 69-30" stroke="#C11D63" strokeWidth="2.2" fill="none" opacity=".75"/>
      <circle cx="562" cy="90" r="6" fill="#C11D63"/>
      <circle cx="559" cy="120" r="4" fill="#C11D63" opacity=".72"/>
      <path d="M91 222c24-67 86-115 160-115 42 0 81 16 111 42" stroke="#929ba7" strokeWidth="2" fill="none"/>
      <path d="M106 222c26-48 77-81 135-81 37 0 72 13 99 36" stroke="#929ba7" strokeWidth="2" fill="none"/>
      <path d="M86 222h32M102 205v34" stroke="#C11D63" strokeWidth="2.4"/>
      <rect x="76" y="74" width="164" height="63" rx="14" fill="#fff" stroke="#d6dbe2"/>
      <text x="95" y="101" fontFamily="Arial, sans-serif" fontSize="13" fill="#7b8490">CONNECTED MARITIME</text>
      <text x="95" y="122" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#22252a">Vessel • Port • Fleet</text>
    </svg>
  );
}

function FAQItem({ q, a, open, onClick, id }) {
  const answerId = `maritime-faq-${id}`;
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button type="button" className="faq-question" onClick={onClick} aria-expanded={open} aria-controls={answerId}>
        <span>{q}</span><span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-answer" id={answerId} role="region" aria-label={q}><p>{a}</p></div>}
    </div>
  );
}

export default function MaritimeTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{`
        :root{--magenta:#C11D63;--burgundy:#7A1542;--blush:#FDF2F7;--body:#485162;--ink:#1a1c20;--muted:#697384;--line:#dde1e7;--soft:#f6f7f9;--dark:#1b1d22;--dark2:#24272d;--darkText:#f5f6f8;--darkEyebrow:#F2A7C6}
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0}
        .stepes-page{font-family:"Inter Tight","Inter",Arial,sans-serif;color:var(--ink);background:#fff;overflow:hidden}.stepes-page h1,.stepes-page h2,.stepes-page h3,.stepes-page p,.stepes-page li,.stepes-page a{overflow-wrap:break-word}
        .shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}.section.dense{padding:80px 0}.soft{background:var(--soft)}.blush{background:var(--blush)}.dark{background:var(--dark);color:var(--darkText)}
        h1,h2,h3,p{margin-top:0} h1,h2,h3{font-weight:600;letter-spacing:-.026em;color:var(--ink)}
        .dark h1,.dark h2,.dark h3{color:#fff}
        h1{font-size:48px;line-height:1.07;margin-bottom:24px;max-width:720px}
        h2{font-size:36px;line-height:1.13;margin-bottom:20px;max-width:820px}
        h3{font-size:24px;line-height:1.22;margin-bottom:12px}
        p{font-size:17px;line-height:1.68;color:var(--body);font-weight:400;margin-bottom:18px}
        .lead{font-size:18px;line-height:1.68;max-width:810px}.dark p{color:#d9dde3}.dark .lead{color:#eef0f3}
        .eyebrow{display:block;color:var(--magenta);font-size:11px!important;line-height:1.2!important;font-weight:600!important;letter-spacing:.14em!important;text-transform:uppercase;margin:0 0 14px!important}
        .dark .eyebrow{color:var(--darkEyebrow)!important}
        .center-head{text-align:center;margin-left:auto;margin-right:auto}.center-head h2,.center-head .lead{margin-left:auto;margin-right:auto}.center-head .lead{max-width:780px}
        .btn-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 22px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.2s ease;outline-offset:3px}.btn.primary,.btn.primary:visited,.btn.primary:hover,.btn.primary:active,.btn.primary:focus,.btn.primary:focus-visible{color:#fff!important}.btn.primary{background:var(--magenta);border:1px solid var(--magenta)}.btn.primary:hover,.btn.primary:focus-visible{background:#A71954;transform:translateY(-1px)}.btn.primary *{color:#fff!important;stroke:#fff!important;fill:#fff!important}.btn.secondary,.btn.secondary:visited{background:#fff;color:var(--ink);border:1px solid #cfd4dc}.btn.secondary:hover,.btn.secondary:focus-visible{border-color:#9fa7b3;background:#fafafa}
        .editorial-link{display:inline-flex;gap:8px;align-items:center;color:var(--magenta);font-size:16px;font-weight:600;text-decoration:none;min-height:44px}.editorial-link:visited{color:var(--magenta)}.editorial-link:hover{text-decoration:underline;text-underline-offset:4px}.editorial-link:focus-visible{outline:3px solid rgba(193,29,99,.22);outline-offset:3px;border-radius:4px}.editorial-link span{transition:transform .2s}.editorial-link:hover span{transform:translateX(3px)}
        .hero{padding:104px 0 90px;background:#fff}.hero-grid{display:grid;grid-template-columns:1.06fr .94fr;gap:58px;align-items:center}.hero-copy .lead{max-width:710px}.hero-art{min-width:0}.hero-art-svg{width:100%;height:auto;display:block}
        .proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-item{padding:28px 28px 30px 0}.proof-item+.proof-item{padding-left:28px;border-left:1px solid var(--line)}.proof-item h3{font-size:18px;margin-bottom:7px;letter-spacing:-.01em}.proof-item p{font-size:17px;line-height:1.55;margin:0}
        .overview-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:76px;align-items:start}.overview-copy{position:sticky;top:32px}.audience-list{border-top:1px solid var(--line)}.audience-row{display:grid;grid-template-columns:1fr 1.7fr;gap:24px;padding:20px 0;border-bottom:1px solid var(--line)}.audience-row strong{font-size:17px;font-weight:600}.audience-row p{margin:0}
        .sector-grid{display:grid;grid-template-columns:1fr 1fr;column-gap:54px;margin-top:44px;border-top:1px solid var(--line)}.sector-row{display:grid;grid-template-columns:46px 1fr;gap:18px;padding:25px 0;border-bottom:1px solid var(--line);align-items:start}.sector-row:nth-child(odd){padding-right:18px}.sector-row:nth-child(even){padding-left:18px}.icon-box{width:42px;height:42px;border-radius:13px;background:#fff;border:1px solid var(--line);display:grid;place-items:center;color:#4d5662}.sector-row h3{font-size:20px;margin:1px 0 7px}.sector-row p{margin:0;font-size:17px}
        .lifecycle-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:48px;border-top:1px solid #3c4049;border-left:1px solid #3c4049}.life-step{padding:26px 24px 30px;border-right:1px solid #3c4049;border-bottom:1px solid #3c4049;min-height:220px}.life-num{font-size:13px;letter-spacing:.12em;font-weight:600;color:var(--darkEyebrow);margin-bottom:28px}.life-step h3{font-size:20px;margin-bottom:10px}.life-step p{font-size:17px;margin:0;color:#d9dde3}
        .docs-panel{margin-top:44px;background:#fff;border:1px solid var(--line);border-radius:28px;padding:12px 34px}.docs-grid{display:grid;grid-template-columns:repeat(3,1fr);column-gap:34px}.doc-group{padding:28px 0}.doc-group:nth-child(n+4){border-top:1px solid var(--line)}.doc-group h3{font-size:20px;margin-bottom:16px}.clean-list{list-style:none;margin:0;padding:0}.clean-list li{position:relative;padding:8px 0 8px 18px;font-size:16px;line-height:1.45;color:var(--body)}.clean-list li:before{content:"";position:absolute;left:0;top:17px;width:7px;height:1.5px;background:#8d95a1}
        .paired-editorial{display:grid;grid-template-columns:1fr 1fr;gap:54px;margin-top:44px}.editorial-block{border-top:2px solid var(--magenta);padding-top:24px}.editorial-block h3{font-size:26px}.editorial-block .mini-list{display:grid;grid-template-columns:1fr 1fr;gap:8px 22px;margin:20px 0 18px}.mini-list span{font-size:16px;color:var(--body);padding:7px 0;border-bottom:1px solid var(--line)}
        .mro-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:start}.mro-rail{border-top:1px solid var(--line)}.mro-item{padding:20px 0;border-bottom:1px solid var(--line)}.mro-item h3{font-size:19px;margin-bottom:7px}.mro-item p{margin:0;font-size:17px}
        .safety-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:start}.dark-panel{background:var(--dark2);border:1px solid #3a3e46;border-radius:28px;padding:32px}.frameworks{display:grid;grid-template-columns:1fr 1fr;gap:0 34px}.framework-item{padding:15px 0;border-bottom:1px solid #3a3e46;font-size:16px;color:#e4e7eb}.framework-item strong{display:block;color:#fff;margin-bottom:4px;font-weight:600}
        .port-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:start}.service-rows{border-top:1px solid var(--line)}.service-row{display:grid;grid-template-columns:180px 1fr;gap:22px;padding:21px 0;border-bottom:1px solid var(--line)}.service-row strong{font-size:17px;font-weight:600}.service-row p{margin:0}
        .digital-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:68px;align-items:center}.tech-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 28px;margin-top:22px}.tech-list div{padding:10px 0;border-bottom:1px solid var(--line);font-size:16px;color:var(--body)}
        .localization-console{border:1px solid var(--line);border-radius:28px;background:#fff;box-shadow:0 16px 42px rgba(28,31,36,.08);overflow:hidden}.console-head{display:flex;justify-content:space-between;gap:20px;padding:18px 22px;background:#f7f8fa;border-bottom:1px solid var(--line);font-size:14px;color:#68717e}.console-body{padding:24px}.status-dot{width:8px;height:8px;border-radius:50%;background:var(--magenta);display:inline-block;margin-right:7px}.string-card{border:1px solid var(--line);border-radius:18px;padding:18px;margin-bottom:14px}.string-label{font-size:14px;color:#747d89;margin-bottom:8px}.string-source{font-size:17px;font-weight:600;color:#202329;margin-bottom:10px}.string-target{font-size:17px;color:var(--body)}.term-check{display:flex;gap:11px;align-items:flex-start;padding:13px 14px;background:var(--blush);border-radius:14px;margin-top:14px}.term-check svg{flex:0 0 auto;color:var(--magenta);margin-top:1px}.term-check div{font-size:17px;line-height:1.5;color:#5b6471}.locale-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}.locale{border:1px solid var(--line);border-radius:13px;padding:13px;text-align:center}.locale b{display:block;font-size:15px}.locale span{font-size:13px;color:#7b8490}
        .future-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px}.future-block{padding-top:24px;border-top:1px solid var(--line)}.future-block h3{font-size:25px}.future-list{margin-top:18px}.future-list div{font-size:16px;color:var(--body);padding:10px 0;border-bottom:1px solid var(--line)}
        .dual-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;margin-top:42px}.dual-panel{padding:32px;border:1px solid var(--line);border-radius:28px;background:#fff}.dual-panel h3{font-size:25px}.dual-panel .clean-list li{font-size:16px}
        .risk-grid{display:grid;grid-template-columns:repeat(3,1fr);margin-top:42px;border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}.risk-col{padding:30px 28px}.risk-col+.risk-col{border-left:1px solid var(--line)}.risk-kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--magenta);margin-bottom:14px}.risk-col h3{font-size:21px}.risk-col p{font-size:17px}.risk-col li{font-size:16px}.risk-flow{margin-top:20px;padding-top:18px;border-top:1px solid var(--line);font-size:16px;color:#5f6875;line-height:1.55}
        .term-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:72px;align-items:center}.term-chain{border:1px solid var(--line);border-radius:28px;padding:26px;background:#fff}.chain-row{display:grid;grid-template-columns:180px 1fr;gap:20px;padding:14px 0;border-bottom:1px solid var(--line);align-items:center}.chain-row:last-child{border-bottom:0}.chain-row strong{font-size:16px}.approved-term{display:flex;align-items:center;gap:10px;color:var(--body);font-size:16px}.approved-term:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--magenta);flex:0 0 auto}
        .workflow-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:42px;border-top:1px solid var(--line);border-left:1px solid var(--line)}.work-step{padding:24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:208px}.work-num{font-size:12px;font-weight:600;color:var(--magenta);letter-spacing:.12em;margin-bottom:24px}.work-step h3{font-size:20px;margin-bottom:9px}.work-step p{font-size:17px;margin:0}
        .continuous-band{display:grid;grid-template-columns:repeat(4,1fr);margin-top:38px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.continuous-item{padding:24px 22px}.continuous-item+.continuous-item{border-left:1px solid var(--line)}.continuous-item h3{font-size:18px;margin-bottom:8px}.continuous-item p{font-size:17px;margin:0}
        .language-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:40px}.language-region{padding:26px;border:1px solid var(--line);border-radius:22px;background:#fff}.language-region h3{font-size:20px}.language-region p{font-size:17px;margin:0}
        .quality-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}.quality-list{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.quality-item{padding:20px 18px 20px 0;border-bottom:1px solid var(--line)}.quality-item:nth-child(even){padding-left:22px;border-left:1px solid var(--line)}.quality-item h3{font-size:18px;margin-bottom:7px}.quality-item p{font-size:17px;margin:0}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);margin-top:42px;border-top:1px solid var(--line)}.why-item{padding:26px 26px 26px 0;border-bottom:1px solid var(--line)}.why-item:nth-child(3n+2),.why-item:nth-child(3n+3){padding-left:26px;border-left:1px solid var(--line)}.why-item h3{font-size:19px}.why-item p{font-size:17px;margin:0}
        .related-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:36px;border-top:1px solid var(--line);border-left:1px solid var(--line)}.related-item{display:flex;flex-direction:column;gap:9px;padding:24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);text-decoration:none;min-height:164px;background:#fff}.related-item:visited{text-decoration:none}.related-item strong{font-size:18px;color:var(--ink);font-weight:600}.related-item span{font-size:17px;line-height:1.52;color:var(--body)}.related-item em{font-size:16px;color:var(--magenta);font-style:normal;font-weight:600;margin-top:auto}.related-item:hover{background:#fafafb}.related-item:focus-visible{outline:3px solid rgba(193,29,99,.22);outline-offset:3px;position:relative;z-index:1}
        .faq-wrap{max-width:980px;margin:42px auto 0;border-top:1px solid var(--line)}.faq-item{border-bottom:1px solid var(--line)}.faq-question{width:100%;border:0;background:transparent;padding:24px 0;display:flex;justify-content:space-between;gap:24px;text-align:left;font:600 18px/1.35 "Inter Tight","Inter",Arial,sans-serif;color:var(--ink);cursor:pointer}.faq-question:focus-visible{outline:3px solid rgba(193,29,99,.25);outline-offset:3px}.faq-plus{width:32px;height:32px;flex:0 0 32px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;color:var(--magenta);font-size:20px}.faq-answer{padding:0 54px 22px 0}.faq-answer p{max-width:840px;margin:0}
        .final-cta{padding:80px 0;background:var(--blush)}.cta-box{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center}.cta-box h2{margin-bottom:12px}.cta-box p{max-width:760px;margin-bottom:0}.cta-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
        @media(max-width:1180px){.shell{padding-left:40px;padding-right:40px}.lifecycle-grid{grid-template-columns:repeat(3,1fr)}.docs-grid{grid-template-columns:repeat(2,1fr)}.doc-group:nth-child(n+3){border-top:1px solid var(--line)}.doc-group:nth-child(4){border-top:1px solid var(--line)}.language-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:900px){.shell{padding-left:24px;padding-right:24px}.section{padding:82px 0}.section.dense{padding:72px 0}.hero{padding:88px 0 76px}h1{font-size:42px}h2{font-size:32px}.hero-grid,.overview-grid,.mro-grid,.safety-grid,.port-grid,.digital-grid,.term-grid,.quality-grid{grid-template-columns:1fr;gap:44px}.hero-copy{text-align:left}.hero-copy .eyebrow,.hero-copy h1{text-align:center}.hero-copy h1,.hero-copy .lead{margin-left:auto;margin-right:auto}.hero-copy .lead{text-align:center}.hero-copy .btn-row{justify-content:center}.hero-art{max-width:650px;margin:0 auto}.overview-copy{position:static;text-align:center}.overview-copy h2,.overview-copy .lead{margin-left:auto;margin-right:auto}.proof-grid{grid-template-columns:repeat(2,1fr)}.proof-item:nth-child(3){border-left:0;border-top:1px solid var(--line);padding-left:0}.proof-item:nth-child(4){border-top:1px solid var(--line)}.sector-grid{grid-template-columns:1fr}.sector-row:nth-child(even),.sector-row:nth-child(odd){padding-left:0;padding-right:0}.lifecycle-grid{grid-template-columns:repeat(2,1fr)}.paired-editorial,.future-grid,.dual-grid{grid-template-columns:1fr}.risk-grid{grid-template-columns:1fr}.risk-col+.risk-col{border-left:0;border-top:1px solid var(--line)}.workflow-grid{grid-template-columns:repeat(2,1fr)}.continuous-band{grid-template-columns:repeat(2,1fr)}.continuous-item:nth-child(3){border-left:0;border-top:1px solid var(--line)}.continuous-item:nth-child(4){border-top:1px solid var(--line)}.why-grid{grid-template-columns:repeat(2,1fr)}.why-item:nth-child(3n+2),.why-item:nth-child(3n+3){padding-left:0;border-left:0}.why-item:nth-child(even){padding-left:24px;border-left:1px solid var(--line)}.related-grid{grid-template-columns:repeat(2,1fr)}.cta-box{grid-template-columns:1fr;text-align:center}.cta-box h2,.cta-box p{margin-left:auto;margin-right:auto}.cta-actions{justify-content:center}}
        @media(max-width:600px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.section.dense{padding:64px 0}.hero{padding:72px 0 62px}h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}p,.lead{font-size:17px}.hero-copy .btn-row{display:grid;grid-template-columns:1fr;width:100%}.btn{width:100%;min-height:50px}.proof-grid{grid-template-columns:1fr}.proof-item,.proof-item+.proof-item,.proof-item:nth-child(3){padding:20px 0;border-left:0;border-top:1px solid var(--line)}.proof-item:first-child{border-top:0}.center-head,.overview-copy{text-align:center}.center-head .lead,.overview-copy .lead{max-width:100%}.audience-row{grid-template-columns:1fr;gap:7px}.sector-row{grid-template-columns:42px 1fr;gap:14px}.lifecycle-grid{grid-template-columns:1fr}.life-step{min-height:0}.docs-panel{padding:6px 20px;border-radius:24px}.docs-grid{grid-template-columns:1fr}.doc-group,.doc-group:nth-child(n+3){border-top:1px solid var(--line)}.doc-group:first-child{border-top:0}.paired-editorial{gap:38px}.editorial-block .mini-list{grid-template-columns:1fr}.frameworks{grid-template-columns:1fr}.service-row{grid-template-columns:1fr;gap:7px}.tech-list{grid-template-columns:1fr}.localization-console{border-radius:22px}.console-head{flex-direction:column;align-items:flex-start;gap:6px}.console-body{padding:18px}.locale-row{grid-template-columns:1fr}.future-grid,.dual-grid{gap:38px}.dual-panel{padding:24px;border-radius:24px}.risk-grid{border-radius:24px}.risk-col{padding:24px 22px}.chain-row{grid-template-columns:1fr;gap:6px}.workflow-grid{grid-template-columns:1fr}.work-step{min-height:0}.continuous-band{grid-template-columns:1fr}.continuous-item,.continuous-item+.continuous-item,.continuous-item:nth-child(3){border-left:0;border-top:1px solid var(--line)}.continuous-item:first-child{border-top:0}.language-grid{grid-template-columns:1fr}.quality-list{grid-template-columns:1fr}.quality-item,.quality-item:nth-child(even){padding:19px 0;border-left:0}.why-grid{grid-template-columns:1fr}.why-item,.why-item:nth-child(even),.why-item:nth-child(3n+2),.why-item:nth-child(3n+3){padding:22px 0;border-left:0}.related-grid{grid-template-columns:1fr}.related-item{min-height:0}.faq-question{font-size:17px;padding:21px 0}.faq-answer{padding-right:0}.final-cta{padding:64px 0}.cta-actions{display:grid;grid-template-columns:1fr;width:100%}}
        @media(max-width:360px){.hero-art{display:none}.sector-row{grid-template-columns:1fr}.icon-box{margin-bottom:2px}.shell{padding-left:20px;padding-right:20px}}
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Technical, Operational & Digital</span>
            <h1>Maritime Translation Services for Global Shipping & Marine Operations</h1>
            <p className="lead">Stepes provides professional maritime translation services for shipowners, fleet operators, shipbuilders, marine engineering companies, equipment manufacturers, ports, logistics providers, offshore organizations, and maritime technology companies worldwide.</p>
            <p>From vessel specifications and operating manuals to safety procedures, crew training, fleet software, and maintenance documentation, we combine maritime-specialized linguists, AI-enabled translation workflows, terminology management, translation memory, and rigorous quality assurance to deliver accurate multilingual content at scale.</p>
            <div className="btn-row">
              <a className="btn primary" href={LINKS.quote}>Get a Maritime Translation Quote <span aria-hidden="true">→</span></a>
              <a className="btn secondary" href={LINKS.solutions}>Explore Maritime Solutions</a>
            </div>
          </div>
          <div className="hero-art"><MaritimeHeroArt /></div>
        </div>
      </section>

      <div className="proof-band">
        <div className="shell proof-grid">
          <div className="proof-item"><h3>100+ Languages</h3><p>Global coverage for maritime operations, crews, suppliers, partners, and customers.</p></div>
          <div className="proof-item"><h3>Maritime-Specialized Linguists</h3><p>Professional translators matched to technical, operational, safety, commercial, and digital content.</p></div>
          <div className="proof-item"><h3>AI + Human Workflows</h3><p>Translation models configured around content scale, complexity, audience, quality requirements, and risk.</p></div>
          <div className="proof-item"><h3>Terminology + Translation Memory</h3><p>Reusable language assets that improve consistency across vessels, systems, documentation, and updates.</p></div>
        </div>
      </div>

      <section className="section" id="maritime-solutions">
        <div className="shell overview-grid">
          <div className="overview-copy">
            <span className="eyebrow">End-to-End Coverage</span>
            <h2>Translation Across the Global Marine Ecosystem</h2>
            <p className="lead">Modern maritime operations connect engineering teams, shipyards, equipment manufacturers, vessel operators, ports, suppliers, logistics networks, crews, service organizations, and digital platforms across countries and languages.</p>
            <p>Reliable maritime translation requires more than converting individual documents. It requires keeping technical meaning, terminology, and operational intent aligned across the entire content lifecycle.</p>
          </div>
          <div className="audience-list">
            {[
              ["Shipowners & Fleet Operators", "Vessel operations, maintenance, training, safety, fleet policies, software, and recurring technical documentation."],
              ["Shipbuilders & Shipyards", "Engineering, construction, procurement, system integration, commissioning, sea trials, and vessel handover."],
              ["Marine Equipment Manufacturers", "Manuals, specifications, interfaces, training, product documentation, service content, and global sales materials."],
              ["Ports & Terminal Operators", "Operating procedures, terminal systems, cargo-handling content, equipment documentation, workforce training, and safety materials."],
              ["Offshore & Marine Energy Companies", "Technical, operational, safety, engineering, maintenance, environmental, and project documentation."],
              ["Maritime Technology Companies", "Fleet platforms, navigation systems, connected-vessel technologies, remote operations, and maritime data applications."]
            ].map(([a,b]) => <div className="audience-row" key={a}><strong>{a}</strong><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="center-head">
            <h2>Maritime Sectors We Support</h2>
            <p className="lead">Maritime translation extends far beyond ships themselves. Stepes supports multilingual content throughout the wider marine economy.</p>
          </div>
          <div className="sector-grid">
            {sectors.map(([icon,title,copy]) => <div className="sector-row" key={title}><div className="icon-box"><Icon type={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell">
          <h2>Maritime Translation From Design Through Decommissioning</h2>
          <p className="lead">Maritime content changes as a vessel moves from concept to operation. Stepes supports multilingual documentation at every stage, helping organizations preserve approved terminology and technical knowledge throughout the vessel lifecycle.</p>
          <div className="lifecycle-grid">
            {lifecycle.map(([n,t,c]) => <div className="life-step" key={n}><div className="life-num">{n}</div><h3>{t}</h3><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="center-head">
            <h2>Maritime Documents and Content We Translate</h2>
            <p className="lead">Maritime organizations generate complex multilingual content across engineering, operations, maintenance, training, safety, technology, and commercial functions. Stepes supports both individual projects and ongoing enterprise maritime programs.</p>
          </div>
          <div className="docs-panel">
            <div className="docs-grid">
              {docs.map(([title,items]) => <div className="doc-group" key={title}><h3>{title}</h3><ul className="clean-list">{items.map(i=><li key={i}>{i}</li>)}</ul></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Marine Engineering and Shipbuilding Translation</h2>
          <p className="lead">A modern vessel combines mechanical, electrical, electronic, hydraulic, digital, and control systems supplied by organizations around the world. Accurate translation depends on both language expertise and disciplined technical terminology.</p>
          <div className="paired-editorial">
            <div className="editorial-block">
              <h3>Marine Engineering Translation Built Around Technical Accuracy</h3>
              <p>Stepes matches professional translators and reviewers to the language pair, technical subject matter, content type, audience, and quality requirements of each project.</p>
              <div className="mini-list"><span>Propulsion & power systems</span><span>Electrical distribution</span><span>Hydraulics & pneumatics</span><span>Deck machinery</span><span>Navigation & communications</span><span>Automation & controls</span><span>Cargo-handling equipment</span><span>Safety & environmental systems</span></div>
              <ArrowLink href={LINKS.marineEngineering}>Marine Engineering Translation Services</ArrowLink>
            </div>
            <div className="editorial-block">
              <h3>Shipbuilding Translation From Engineering Through Vessel Delivery</h3>
              <p>Shipbuilding programs coordinate naval architects, engineering teams, shipyards, equipment suppliers, owners, commissioning teams, and crews across international markets.</p>
              <div className="mini-list"><span>Design specifications</span><span>Supplier documentation</span><span>Construction instructions</span><span>Inspection records</span><span>System integration</span><span>Testing & commissioning</span><span>Sea-trial materials</span><span>Handover packages</span></div>
              <ArrowLink href={LINKS.shipbuilding}>Shipbuilding Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell mro-grid">
          <div>
            <span className="eyebrow">Fleet Lifecycle Support</span>
            <h2>Vessel Operations, Maintenance & Marine MRO Translation</h2>
            <p className="lead">Once a vessel enters service, multilingual requirements continue throughout its operational life.</p>
            <p>Fleet operators may manage ships built in different countries, equipment from numerous manufacturers, continuously updated service information, and multinational crews. Documentation must remain understandable and consistent even as vessels are repaired, upgraded, transferred, or operated across different regions.</p>
            <ArrowLink href={LINKS.marineMro}>Marine MRO Translation Services</ArrowLink>
          </div>
          <div className="mro-rail">
            {[
              ["Planned & Preventive Maintenance", "Maintenance schedules, procedures, inspections, equipment checks, lubrication requirements, and recurring service documentation."],
              ["Troubleshooting & Repair", "Diagnostic information, repair procedures, work instructions, technical bulletins, and corrective actions."],
              ["Dry Dock & Major Overhaul", "Repair scopes, engineering documentation, inspection records, contractor instructions, and equipment replacement."],
              ["Spare Parts & Service Content", "Parts catalogs, component descriptions, ordering information, service documentation, and supplier instructions."],
              ["Retrofit & Modernization", "Equipment upgrades, propulsion changes, automation projects, environmental systems, and digital modernization."]
            ].map(([t,c]) => <div className="mro-item" key={t}><h3>{t}</h3><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell safety-grid">
          <div>
            <span className="eyebrow">Safety & Operational Clarity</span>
            <h2>Maritime Safety and Compliance Translation</h2>
            <p className="lead">Maritime safety depends on people being able to understand procedures, instructions, responsibilities, warnings, and emergency information in context.</p>
            <p>Stepes translates multilingual documentation supporting international and local safety, environmental, training, and operational requirements. We help organizations communicate approved technical and compliance content accurately across languages while preserving terminology, meaning, formatting, and document structure.</p>
            <p>For higher-impact content, workflows can include specialized professional translation, independent review, terminology validation, automated QA, and controlled customer approval.</p>
            <ArrowLink href={LINKS.maritimeSafety}>Maritime Safety Translation Services</ArrowLink>
          </div>
          <div className="dark-panel">
            <div className="frameworks">
              <div className="framework-item"><strong>SOLAS</strong>Safety-related manuals, procedures, emergency content, and operational documentation.</div>
              <div className="framework-item"><strong>MARPOL</strong>Environmental procedures, pollution-prevention materials, and supporting operational content.</div>
              <div className="framework-item"><strong>ISM Code</strong>Safety-management-system documentation, audits, corrective actions, and fleet procedures.</div>
              <div className="framework-item"><strong>STCW</strong>Training, competence, familiarization, and seafarer learning content.</div>
              <div className="framework-item"><strong>Inspection & Audit</strong>Inspection materials, findings, incident documentation, and compliance communications.</div>
              <div className="framework-item"><strong>Environmental Performance</strong>Energy-efficiency procedures, operational plans, environmental reporting, and crew guidance.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell port-grid">
          <div>
            <span className="eyebrow">Shore-Side Operations</span>
            <h2>Ports, Terminals & Maritime Logistics Translation</h2>
            <p className="lead">Ships are one part of a much larger global transportation network. Ports and terminals connect vessel operations with cargo handling, customs, warehousing, inland transportation, freight systems, government authorities, and international customers.</p>
            <div style={{display:"flex",gap:22,flexWrap:"wrap"}}><ArrowLink href={LINKS.portTerminal}>Port & Terminal Translation Services</ArrowLink><ArrowLink href={LINKS.logistics}>Logistics Translation Services</ArrowLink></div>
          </div>
          <div className="service-rows">
            {[
              ["Port & Terminal Operations", "Operating procedures, berth and vessel coordination content, cargo-handling procedures, terminal policies, and workforce communications."],
              ["Equipment & Infrastructure", "Manuals and technical documentation for cranes, cargo systems, conveyors, automation, electrical systems, and other port infrastructure."],
              ["Safety & Workforce Training", "Multilingual safety procedures, onboarding, equipment training, eLearning, emergency content, and operational training."],
              ["Digital Port Systems", "Terminal operating systems, port community platforms, Maritime Single Window-related applications, dashboards, portals, and user documentation."],
              ["Cargo & Logistics", "Freight, customs, shipment, cargo, tracking, warehousing, intermodal, customer-service, and supply-chain content."]
            ].map(([t,c]) => <div className="service-row" key={t}><strong>{t}</strong><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell digital-grid">
          <div>
            <h2>Digital Maritime & Connected Vessel Localization</h2>
            <p className="lead">Digital technologies are changing how vessels are designed, operated, monitored, maintained, and connected with shoreside teams.</p>
            <p>Stepes helps maritime technology providers and vessel operators localize digital products and supporting content for international users.</p>
            <div className="tech-list"><div>Fleet-management platforms</div><div>Bridge & navigation systems</div><div>Connected equipment & vessel IoT</div><div>Remote monitoring & diagnostics</div><div>Digital twins & predictive maintenance</div><div>Port & terminal technology</div></div>
            <div style={{marginTop:20}}><ArrowLink href={LINKS.maritimeSoftware}>Maritime Software Localization</ArrowLink></div>
          </div>
          <div className="localization-console" aria-label="Illustrative maritime localization workspace">
            <div className="console-head"><span><span className="status-dot"></span>Maritime localization workspace</span><span>Terminology applied</span></div>
            <div className="console-body">
              <div className="string-card"><div className="string-label">SOURCE • ENGLISH</div><div className="string-source">Main engine cooling water pressure low</div><div className="string-label">TARGET • GERMAN</div><div className="string-target">Kühlwasserdruck des Hauptmotors niedrig</div><div className="term-check"><Icon type="shield"/><div><strong>Approved terminology matched.</strong><br/>“Main engine” and “cooling water” follow the vessel termbase.</div></div></div>
              <div className="locale-row"><div className="locale"><b>DE</b><span>Reviewed</span></div><div className="locale"><b>KO</b><span>In review</span></div><div className="locale"><b>ES</b><span>QA ready</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head">
            <span className="eyebrow">Next-Generation Maritime</span>
            <h2>Autonomous Operations and Maritime Cybersecurity</h2>
            <p className="lead">As vessels, ports, equipment, and shoreside systems become more connected, multilingual content increasingly spans autonomous operations, remote-control environments, software, safety, and cyber-risk management.</p>
          </div>
          <div className="future-grid" style={{marginTop:42}}>
            <div className="future-block"><h3>Autonomous & Remotely Operated Maritime Systems</h3><p>Support engineering and operational teams with translation and localization for autonomous navigation, remote operations, human-machine interfaces, shore-control content, safety procedures, connectivity documentation, training, and technical support.</p><div className="future-list"><div>Autonomous navigation documentation</div><div>Remote operations center content</div><div>Human-machine interfaces</div><div>Safety and fallback procedures</div><div>Software interfaces and alerts</div></div></div>
            <div className="future-block"><h3>Maritime Cybersecurity Translation</h3><p>Connected maritime environments bring cybersecurity into vessel operations, business continuity, safety, information technology, and operational technology. Stepes helps keep multilingual security terminology clear across technical teams, vessel personnel, suppliers, and management.</p><div className="future-list"><div>Cyber-risk policies & procedures</div><div>IT and OT documentation</div><div>Incident-response plans</div><div>Crew cybersecurity training</div><div>Remote-access and supplier-security content</div></div></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="center-head">
            <span className="eyebrow">People & Environmental Performance</span>
            <h2>Sustainable Shipping & Multinational Crew Training</h2>
            <p className="lead">Maritime transformation is changing both vessel technology and the skills required to operate it. Stepes supports multilingual environmental, sustainability, safety, and training content across global marine operations.</p>
          </div>
          <div className="dual-grid">
          <div className="dual-panel">
            <h3>Environmental & Sustainability Translation</h3>
            <p>Decarbonization, energy efficiency, environmental performance, new fuels, and changing vessel technologies are creating new multilingual documentation requirements across the maritime sector.</p>
            <ul className="clean-list"><li>Vessel energy efficiency and emissions</li><li>Alternative and lower-carbon fuels</li><li>Environmental management and pollution prevention</li><li>Sustainability reporting and climate strategies</li><li>Engineering documentation for environmental retrofits</li><li>Offshore wind and marine energy</li></ul>
            <ArrowLink href={LINKS.esg}>ESG & Sustainability Translation Services</ArrowLink>
          </div>
          <div className="dual-panel">
            <h3>Crew Training & eLearning Translation</h3>
            <p>Global maritime operations depend on people from many linguistic and cultural backgrounds working with the same equipment, procedures, and safety systems.</p>
            <ul className="clean-list"><li>Crew onboarding and safety training</li><li>Equipment and maintenance training</li><li>Emergency-response and compliance courses</li><li>eLearning and simulator materials</li><li>Assessments, videos, subtitles, and voice-over</li><li>LMS content and multilingual course engineering</li></ul>
            <ArrowLink href={LINKS.elearning}>eLearning Translation Services</ArrowLink>
          </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head">
            <span className="eyebrow">Risk-Matched Translation</span>
            <h2>AI-Enabled Maritime Translation With Professional Human Expertise</h2>
            <p className="lead">A safety procedure should not necessarily follow the same workflow as a large enterprise knowledge base, and a fleet software update may require a different process from an engineering specification.</p>
          </div>
          <div className="risk-grid">
            <div className="risk-col"><div className="risk-kicker">High-impact technical & safety</div><h3>Specialized Professional Translation & Review</h3><p>Stronger review controls for content where technical meaning, operational interpretation, or safety implications require additional assurance.</p><ul className="clean-list"><li>Safety procedures</li><li>Emergency instructions</li><li>Engineering specifications</li><li>Critical maintenance procedures</li></ul><div className="risk-flow">Terminology + Translation Memory → Specialized Translation → Independent Review → QA → Approval</div></div>
            <div className="risk-col"><div className="risk-kicker">Operational & customer content</div><h3>AI-Assisted Professional Translation</h3><p>Combine professional translation, AI-assisted productivity, terminology controls, and linguistic review for content that must be clear, consistent, and ready for broad use.</p><ul className="clean-list"><li>Training</li><li>Standard operating procedures</li><li>Product information</li><li>Port and logistics content</li></ul><div className="risk-flow">Language Assets + AI Assistance → Professional Review → QA → Delivery</div></div>
            <div className="risk-col"><div className="risk-kicker">High-volume & frequently updated</div><h3>AI-Enabled Translation & Targeted Validation</h3><p>For appropriate lower-risk or repetitive content, use AI-enabled translation with approved terminology, translation memory, automated QA, and targeted human validation.</p><ul className="clean-list"><li>Knowledge bases</li><li>Routine documentation updates</li><li>Software content</li><li>Recurring fleet communications</li></ul><div className="risk-flow">Translation Memory + Terminology + AI → Automated QA → Targeted Validation</div></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell term-grid">
          <div>
            <h2>One Maritime Vocabulary Across Engineering, Operations & Maintenance</h2>
            <p className="lead">Maritime terminology should not change simply because content moves from one department or system to another.</p>
            <p>Stepes helps maritime organizations build and govern multilingual terminology for vessel components, equipment names, system functions, engineering concepts, alarms, warnings, operating commands, maintenance language, safety terms, acronyms, fleet-specific language, and manufacturer terminology.</p>
            <div style={{display:"flex",gap:22,flexWrap:"wrap"}}><ArrowLink href={LINKS.terminology}>Terminology Management</ArrowLink><ArrowLink href={LINKS.tm}>Translation Memory</ArrowLink></div>
          </div>
          <div className="term-chain">
            {[["Engineering specification","Main engine cooling water"],["Supplier documentation","Main engine cooling water"],["Vessel HMI","Main engine cooling water"],["Operating manual","Main engine cooling water"],["Crew training","Main engine cooling water"],["Maintenance procedure","Main engine cooling water"],["Service bulletin","Main engine cooling water"]].map(([a,b])=><div className="chain-row" key={a}><strong>{a}</strong><div className="approved-term">{b}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head">
            <h2>A Translation Workflow Built for Global Maritime Programs</h2>
            <p className="lead">Successful maritime localization connects content, terminology, subject-matter expertise, technology, quality review, and recurring updates in one managed process.</p>
          </div>
          <div className="workflow-grid">
            {workflow.map(([n,t,c])=><div className="work-step" key={n}><div className="work-num">{n}</div><h3>{t}</h3><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dense soft">
        <div className="shell">
          <div className="center-head"><span className="eyebrow">Continuous Localization</span><h2>Keep Fleets, Products & Maritime Systems Synchronized</h2><p className="lead">Equipment changes. Manuals are revised. Service bulletins are issued. Software releases continue. Safety procedures evolve. New markets and languages are added.</p></div>
          <div className="continuous-band">
            <div className="continuous-item"><h3>Reuse Approved Translations</h3><p>Translation memory helps recurring content begin with previously validated language where context remains applicable.</p></div>
            <div className="continuous-item"><h3>Keep Terminology Controlled</h3><p>Central terminology keeps technical and operational language aligned across engineering, vessels, software, training, and maintenance.</p></div>
            <div className="continuous-item"><h3>Translate What Changed</h3><p>Change-based workflows can focus translation and review on new or modified content instead of repeatedly processing unchanged material.</p></div>
            <div className="continuous-item"><h3>Build Language Knowledge</h3><p>Approved translations, corrections, and terminology decisions can strengthen future maritime projects and releases.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head"><h2>Maritime Translation in 100+ Languages</h2><p className="lead">Global shipping connects shipyards, manufacturers, owners, ports, suppliers, crews, customers, and authorities across nearly every major commercial region.</p></div>
          <div className="language-grid">
            <div className="language-region"><h3>Europe</h3><p>German, Dutch, Norwegian, Danish, Swedish, Finnish, French, Spanish, Italian, Portuguese, Polish, Greek, Romanian, Czech, Turkish, and more.</p></div>
            <div className="language-region"><h3>Asia-Pacific</h3><p>Chinese, Japanese, Korean, Vietnamese, Indonesian, Malay, Thai, Hindi, Tagalog, and other regional languages.</p></div>
            <div className="language-region"><h3>Middle East & Africa</h3><p>Arabic, Hebrew, Turkish, and additional languages serving shipping, port, energy, and industrial markets.</p></div>
            <div className="language-region"><h3>Americas</h3><p>English, Spanish, Brazilian Portuguese, French Canadian, and additional languages serving North and South American operations.</p></div>
          </div>
          <div style={{textAlign:"center",marginTop:24}}><ArrowLink href={LINKS.languages}>Explore All Translation Languages</ArrowLink></div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell quality-grid">
          <div>
            <span className="eyebrow">Quality for Technical Maritime Content</span>
            <h2>Quality From Source File to Final Deliverable</h2>
            <p className="lead">Translation quality is not created by one proofreading step at the end of a project. It depends on preparing the right terminology, assigning qualified resources, choosing the appropriate workflow, validating measurable content, reviewing meaning in context, and carrying approved decisions forward.</p>
            <ArrowLink href={LINKS.qa}>Translation Quality Assurance</ArrowLink>
          </div>
          <div className="quality-list">
            {[
              ["Subject-Matter Expertise", "Match translators and reviewers to language pair, maritime subject matter, content type, complexity, and audience."],
              ["Controlled Terminology", "Maintain approved language for vessel systems, equipment, operations, safety, maintenance, software, and company-specific concepts."],
              ["Translation Memory", "Reuse validated multilingual content across revisions, vessel families, equipment lines, recurring projects, and software releases."],
              ["Automated Quality Checks", "Identify potential issues involving missing content, terminology, numbers, measurements, tags, variables, and formatting."],
              ["Professional Human Review", "Apply linguistic or technical review according to the purpose, complexity, visibility, and potential impact of the content."],
              ["In-Context & Final-Format QA", "Review software interfaces, formatted documents, training courses, diagrams, multimedia, and other deliverables in context."]
            ].map(([t,c])=><div className="quality-item" key={t}><h3>{t}</h3><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head"><span className="eyebrow">Why Stepes</span><h2>Built for Global Maritime Content</h2><p className="lead">From individual technical manuals to ongoing fleet, software, and enterprise translation programs, Stepes combines professional expertise with scalable language technology.</p></div>
          <div className="why-grid">
            {[
              ["Maritime & Technical Expertise", "Professional linguists are selected around the language pair, subject matter, content type, technical complexity, and audience."],
              ["AI-Enabled Efficiency", "Modern AI-enabled workflows help enterprises scale multilingual content while preserving terminology, review controls, and human expertise."],
              ["Human Review Where It Matters", "Apply professional linguistic and specialist review according to the risk, purpose, and quality requirements of the content."],
              ["Consistent Maritime Terminology", "Keep vessel, equipment, engineering, operations, training, maintenance, and software terminology aligned."],
              ["100+ Languages", "Support global maritime programs across major shipping, shipbuilding, port, engineering, and commercial markets."],
              ["Enterprise Scalability", "Manage everything from one manual to ongoing multilingual fleets, product portfolios, software releases, and global content programs."]
            ].map(([t,c])=><div className="why-item" key={t}><h3>{t}</h3><p>{c}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="center-head"><h2>Translation Solutions for the Maritime Industry</h2><p className="lead">Build a connected maritime content program with specialized solutions for shipbuilding, marine engineering, fleet maintenance, ports, safety, digital systems, logistics, and offshore energy.</p></div>
          <div className="related-grid">
            {[
              [LINKS.shipbuilding,"Shipbuilding Translation Services","Vessel design, construction, commissioning, trials, and handover."],
              [LINKS.marineEngineering,"Marine Engineering Translation Services","Propulsion, electrical, mechanical, hydraulic, navigation, automation, and vessel-system content."],
              [LINKS.marineMro,"Marine MRO Translation Services","Fleet maintenance, inspections, repair, dry docking, service, parts, retrofit, and lifecycle support."],
              [LINKS.portTerminal,"Port & Terminal Translation Services","Terminal operations, cargo handling, port technology, equipment, safety, and workforce content."],
              [LINKS.maritimeSafety,"Maritime Safety Translation Services","Safety-management, emergency, environmental, inspection, audit, and crew-training documentation."],
              [LINKS.maritimeSoftware,"Maritime Software Localization","Fleet platforms, vessel interfaces, navigation systems, connected equipment, and recurring software releases."],
              [LINKS.logistics,"Logistics Translation Services","Freight, cargo, customs, supply chains, warehousing, tracking, and intermodal transportation."],
              [LINKS.oilgas,"Oil & Gas Translation Services","Technical, operational, safety, and business translation for offshore and marine energy operations."]
            ].map(([href,t,c])=><a className="related-item" href={href} key={t}><strong>{t}</strong><span>{c}</span><em>Explore service →</em></a>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-head"><h2>Questions About Maritime Translation Services</h2><p className="lead">Answers to common questions about maritime documents, engineering content, vessel operations, software localization, terminology, AI workflows, and global language coverage.</p></div>
          <div className="faq-wrap">{faqs.map(([q,a],i)=><FAQItem key={q} q={q} a={a} id={i} open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i ? -1 : i)}/>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell cta-box">
          <div><h2>Translate Your Maritime Content With Confidence</h2><p>From vessel engineering and shipbuilding to fleet operations, safety, maintenance, port systems, crew training, and digital maritime technology, Stepes helps global maritime organizations keep multilingual content accurate, consistent, and ready for use.</p></div>
          <div className="cta-actions"><a className="btn primary" href={LINKS.quote}>Get a Maritime Translation Quote <span aria-hidden="true">→</span></a><a className="btn secondary" href={LINKS.contact}>Contact Stepes</a></div>
        </div>
      </section>
    </main>
  );
}
