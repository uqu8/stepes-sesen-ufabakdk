import React from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushDeep: "#F8E3ED",
  ink: "#202633",
  body: "#485162",
  line: "#DDE1E7",
  soft: "#F7F8FA",
  dark: "#2B1C25",
  white: "#FFFFFF",
};

const Icon = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.86 2.86-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.4v-.08A1.7 1.7 0 0 0 8 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.86-2.86.06-.06A1.7 1.7 0 0 0 3.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H1.8V9.4h.08A1.7 1.7 0 0 0 3.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06L6.06 3.2l.06.06A1.7 1.7 0 0 0 8 3.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V1.8h4.2v.08A1.7 1.7 0 0 0 15 3.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.86 2.86-.06.06A1.7 1.7 0 0 0 19.4 8c.11.38.32.73.6 1 .3.27.68.41 1.1.4h.1v4.2h-.08A1.7 1.7 0 0 0 19.4 15Z"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></>,
    spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="3"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></>,
    play: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m10 9 5 3-5 3V9Z"/></>,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z"/><path d="M6 18c3-4 6-7 11-10"/></>,
    translate: <><path d="M4 5h8M8 3v2M6 5c.4 3 2 5.4 5 7M10 5c-.7 3.4-2.8 6.2-6 8"/><path d="M14 20l3-8 3 8M15 17h4"/></>,
    sync: <><path d="M20 7h-5V2"/><path d="M20 7a8 8 0 0 0-13.7-2.7L4 7M4 17h5v5"/><path d="M4 17a8 8 0 0 0 13.7 2.7L20 17"/></>,
    file: <><path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    machineGuard: <><rect x="3" y="8" width="12" height="9" rx="2"/><path d="M7 8V5h4v3M15 12h3l3 3v2h-6"/><path d="M17.5 4.5a2.5 2.5 0 0 1 0 5"/><path d="M18.5 16.5v-5"/></>,
    lockTagout: <><rect x="4" y="11" width="10" height="9" rx="2"/><path d="M7 11V8a2 2 0 1 1 4 0v3"/><path d="M14 13h6l-2 2 2 2h-6"/></>,
    chemical: <><path d="M10 3v4l-5.5 9.5A3 3 0 0 0 7.1 21h9.8a3 3 0 0 0 2.6-4.5L14 7V3"/><path d="M8.5 12h7"/><path d="M9.5 15h5"/></>,
    confinedSpace: <><path d="M4 5h7v14H4z"/><path d="M16 4v16"/><path d="M16 8h4M16 12h4M16 16h4"/><circle cx="8" cy="12" r="1.2"/></>,
    electrical: <><path d="M13 2 5 14h5l-1 8 8-12h-5l1-8Z"/></>,
    ppe: <><path d="M5 12a7 7 0 0 1 14 0"/><path d="M7 12v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/><path d="M9 16v2M15 16v2"/></>,
    emergency: <><path d="M8 14h8l2 6H6l2-6Z"/><path d="M10 14V7a2 2 0 0 1 4 0v7"/><path d="M7 20h10"/></>,
    maintenanceSafety: <><path d="M14 6.5a3 3 0 0 0 3.7 3.7l-5.5 5.5a2 2 0 0 1-2.8 0l-1.1-1.1a2 2 0 0 1 0-2.8l5.5-5.5A3 3 0 0 0 14 6.5Z"/><path d="M16.5 4.5l3 3"/></>,
    hazardComms: <><path d="M12 3 3 19h18L12 3Z"/><path d="M12 9v4"/><path d="M12 16h.01"/></>,
    contractorSafety: <><path d="M5 11a7 7 0 0 1 14 0"/><path d="M7 11v1.5A1.5 1.5 0 0 0 8.5 14h7a1.5 1.5 0 0 0 1.5-1.5V11"/><path d="M4 20v-1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1"/></>,
    training: <><path d="M3 9l9-5 9 5-9 5-9-5Z"/><path d="M7 11v4c0 1.4 2.2 3 5 3s5-1.6 5-3v-4"/></>,
    signage: <><path d="M6 3v18"/><path d="M6 5h11l-2 3 2 3H6"/><path d="M6 13h9l-2 3 2 3H6"/></>,
  };
  return <svg {...common}>{paths[name] || paths.file}</svg>;
};

const ArrowLink = ({ href, children, light = false }) => (
  <a className={`editorial-link${light ? " light" : ""}`} href={href}>
    <span>{children}</span><span className="arrow" aria-hidden="true">→</span>
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, centered = true, light = false }) => (
  <div className={`section-heading${centered ? " centered" : ""}${light ? " light" : ""}`}>
    {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const PaperMillIllustration = () => (
  <div className="hero-art" aria-label="Illustration of a modern paper manufacturing line">
    <svg viewBox="0 0 720 520" role="img" aria-labelledby="paperArtTitle paperArtDesc">
      <title id="paperArtTitle">Modern pulp and paper manufacturing line</title>
      <desc id="paperArtDesc">Technical line illustration showing stock preparation, paper machine rollers, drying, controls, and a finished paper reel.</desc>
      <defs>
        <linearGradient id="sheetFade" x1="0" x2="1">
          <stop offset="0" stopColor="#FDF2F7"/>
          <stop offset="1" stopColor="#FFFFFF"/>
        </linearGradient>
      </defs>
      <rect x="46" y="104" width="628" height="308" rx="34" fill="#FBFBFC" stroke="#CCD1D8" strokeWidth="2"/>
      <path d="M76 361H645" stroke="#9FA7B2" strokeWidth="4" strokeLinecap="round"/>
      <path d="M112 343V374M199 343V374M286 343V374M373 343V374M460 343V374M547 343V374M620 343V374" stroke="#AEB5BE" strokeWidth="3"/>

      <g transform="translate(78 158)">
        <path d="M0 136V36h96v100" fill="#FFFFFF" stroke="#7E8794" strokeWidth="3"/>
        <path d="M20 36 34 4h30l14 32" fill="none" stroke="#7E8794" strokeWidth="3"/>
        <path d="M22 78h52M22 102h52" stroke="#A9B0B9" strokeWidth="3"/>
        <circle cx="20" cy="140" r="10" fill="#FFFFFF" stroke="#7E8794" strokeWidth="3"/>
        <circle cx="76" cy="140" r="10" fill="#FFFFFF" stroke="#7E8794" strokeWidth="3"/>
      </g>

      <path d="M164 279C200 260 225 251 256 250" fill="none" stroke="#C11D63" strokeWidth="7" strokeLinecap="round"/>

      <g transform="translate(236 191)">
        <circle cx="44" cy="65" r="36" fill="#FFFFFF" stroke="#747E8B" strokeWidth="4"/>
        <circle cx="128" cy="65" r="36" fill="#FFFFFF" stroke="#747E8B" strokeWidth="4"/>
        <circle cx="212" cy="65" r="36" fill="#FFFFFF" stroke="#747E8B" strokeWidth="4"/>
        <circle cx="296" cy="65" r="36" fill="#FFFFFF" stroke="#747E8B" strokeWidth="4"/>
        <path d="M7 65h326" stroke="#C11D63" strokeWidth="6" strokeLinecap="round"/>
        <path d="M44 101v46M128 101v46M212 101v46M296 101v46" stroke="#7E8794" strokeWidth="3"/>
        <path d="M20 147h300" stroke="#7E8794" strokeWidth="3"/>
      </g>

      <g transform="translate(566 186)">
        <circle cx="42" cy="75" r="57" fill="url(#sheetFade)" stroke="#C11D63" strokeWidth="5"/>
        <circle cx="42" cy="75" r="20" fill="#FFFFFF" stroke="#7E8794" strokeWidth="3"/>
        <path d="M-8 75h30" stroke="#C11D63" strokeWidth="6" strokeLinecap="round"/>
      </g>

      <g transform="translate(456 122)">
        <rect x="0" y="0" width="138" height="66" rx="14" fill="#FFFFFF" stroke="#C7CCD3" strokeWidth="2"/>
        <path d="M20 45 42 27l20 10 25-20 27 11" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="45" r="3" fill="#C11D63"/>
        <circle cx="42" cy="27" r="3" fill="#C11D63"/>
        <circle cx="62" cy="37" r="3" fill="#C11D63"/>
        <circle cx="87" cy="17" r="3" fill="#C11D63"/>
        <circle cx="114" cy="28" r="3" fill="#C11D63"/>
      </g>

      <g fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#485162">
        <text x="84" y="139">STOCK PREP</text>
        <text x="257" y="139">PAPER MACHINE</text>
        <text x="472" y="108">PROCESS CONTROL</text>
        <text x="572" y="330">FINISHED REEL</text>
      </g>

      <g transform="translate(88 438)">
        <rect x="0" y="0" width="148" height="44" rx="22" fill="#FDF2F7" stroke="#E8BDD0"/>
        <circle cx="24" cy="22" r="7" fill="#C11D63"/>
        <text x="42" y="27" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="600" fill="#485162">Manuals & SOPs</text>
      </g>
      <g transform="translate(250 438)">
        <rect x="0" y="0" width="142" height="44" rx="22" fill="#FFFFFF" stroke="#D8DDE3"/>
        <circle cx="24" cy="22" r="7" fill="#7E8794"/>
        <text x="42" y="27" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="600" fill="#485162">HMI & Software</text>
      </g>
      <g transform="translate(406 438)">
        <rect x="0" y="0" width="148" height="44" rx="22" fill="#FFFFFF" stroke="#D8DDE3"/>
        <circle cx="24" cy="22" r="7" fill="#7E8794"/>
        <text x="42" y="27" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="600" fill="#485162">Training & Safety</text>
      </g>
    </svg>
  </div>
);

const lifecycle = [
  { title: "Fiber & Pulp Production", text: "Wood preparation, recycled fiber, chemical and mechanical pulping, digesters, washing, screening, bleaching, recovery processes, and supporting systems." },
  { title: "Stock Preparation", text: "Pulpers, refiners, cleaners, screens, pumps, agitators, stock consistency, additives, approach-flow systems, and furnish preparation." },
  { title: "Papermaking", text: "Headboxes, forming sections, press sections, dryers, sizing, coating, calendering, reels, machine controls, and quality systems." },
  { title: "Finishing & Converting", text: "Winding, rewinding, slitting, sheeting, coating, laminating, printing, converting, tissue finishing, and packaging processes." },
  { title: "Finished Paper & Board", text: "Printing and writing paper, tissue, paperboard, containerboard, packaging grades, specialty papers, and fiber-based products." },
];

const equipmentGroups = [
  { title: "Stock Preparation Equipment", items: ["Pulpers", "Refiners", "Screens and cleaners", "Pumps and agitators", "Stock chests", "Approach-flow systems", "Recycled-fiber processing"] },
  { title: "Paper Machine Systems", items: ["Headboxes", "Forming sections", "Press and shoe presses", "Dryer sections", "Size presses and coaters", "Calenders", "Reels and machine clothing"] },
  { title: "Finishing & Converting", items: ["Winders and rewinders", "Slitters and sheeters", "Coating systems", "Laminating equipment", "Tissue converting lines", "Printing systems", "Packaging equipment"] },
  { title: "Pulp Mill & Controls", items: ["Digesters and washing", "Bleaching systems", "Evaporators and recovery", "DCS and QCS", "PLC interfaces and HMIs", "Sensors and instrumentation", "Drives and machine controls"] },
];

const trainingItems = [
  { icon: "gear", title: "Operator Training", text: "Paper machines, stock preparation, converting equipment, process controls, equipment setup, and routine production procedures." },
  { icon: "book", title: "Maintenance Training", text: "Preventive maintenance, inspections, troubleshooting, shutdown maintenance, equipment servicing, and technician development." },
  { icon: "shield", title: "Safety Training", text: "Machine guarding, lockout/tagout, chemical safety, PPE, confined spaces, emergency response, and mill-specific safety programs." },
  { icon: "layers", title: "Process & Quality Training", text: "SOP training, quality procedures, inspection programs, process controls, production standards, and continuous improvement." },
];

const safetyItems = [
  { icon: "machineGuard", text: "Machine safety and guarding" },
  { icon: "lockTagout", text: "Lockout/tagout procedures" },
  { icon: "chemical", text: "Chemical handling and SDS content" },
  { icon: "confinedSpace", text: "Confined-space procedures" },
  { icon: "electrical", text: "Electrical safety information" },
  { icon: "ppe", text: "PPE requirements" },
  { icon: "emergency", text: "Emergency response procedures" },
  { icon: "maintenanceSafety", text: "Maintenance safety instructions" },
  { icon: "hazardComms", text: "Hazard communication" },
  { icon: "contractorSafety", text: "Contractor safety materials" },
  { icon: "training", text: "EHS training" },
  { icon: "signage", text: "Mill-specific safety programs and signage" },
];

const termNodes = [
  { label: "Technical Manuals", className: "node-1" },
  { label: "SOPs", className: "node-2 node-small" },
  { label: "HMI & Software", className: "node-3 node-wide" },
  { label: "Training", className: "node-4" },
  { label: "Safety", className: "node-5 node-small" },
  { label: "Service Content", className: "node-6 node-wide" },
];

const relatedServices = [
  ["Manufacturing Translation Services", "Engineering, operations, quality, supplier, software, safety, and training content.", "https://www.stepes.com/manufacturing-translation-services/"],
  ["Technical Translation Services", "Engineering and technical documentation with controlled terminology and subject expertise.", "https://www.stepes.com/technical-translation-services/"],
  ["Technical Manual Translation Services", "Installation, operation, maintenance, troubleshooting, and service manuals.", "https://www.stepes.com/manufacturing-translation-services/technical-manuals/"],
  ["Training Translation Services", "Instructor-led training, workbooks, job aids, assessments, and workforce development.", "https://www.stepes.com/training-translation-services/"],
  ["eLearning Translation Services", "Storyline, Rise, Captivate, SCORM/xAPI, multimedia, and LMS-ready courses.", "https://www.stepes.com/elearning-training-translation-services/"],
  ["Software Localization Services", "HMI content, industrial applications, interfaces, resource files, and connected software.", "https://www.stepes.com/software-localization-services/"],
  ["Forestry Translation Services", "Equipment, operations, environmental, safety, and technical content across forestry applications.", "https://www.stepes.com/forestry-translation-services/"],
  ["Packaging Translation Services", "Packaging, labels, technical documentation, production equipment, and global operations.", "https://www.stepes.com/packaging-translation-services/"],
];

const faqs = [
  ["What are pulp and paper translation services?", "Pulp and paper translation services provide multilingual support for technical, operational, safety, training, software, commercial, and environmental content used throughout pulp production, papermaking, paper converting, and related equipment industries. Projects may include paper-machine manuals, SOPs, work instructions, safety procedures, operator training, eLearning, HMI interfaces, engineering documentation, parts catalogs, sustainability materials, and customer communications."],
  ["Does Stepes translate paper machine manuals?", "Yes. Stepes translates operating, installation, maintenance, service, and troubleshooting manuals for paper machines and related equipment, including stock preparation systems, headboxes, forming sections, press sections, dryers, coaters, calenders, reels, winders, converting equipment, automation systems, and supporting technologies."],
  ["Can Stepes translate paper mill SOPs and work instructions?", "Yes. We translate standard operating procedures, work instructions, startup and shutdown procedures, inspection materials, maintenance instructions, process documentation, quality procedures, production checklists, and related operational content. Translation memory and terminology management help keep recurring technical language consistent across revisions."],
  ["Do you translate safety training for pulp and paper mills?", "Yes. Stepes supports multilingual machine-safety training, lockout/tagout materials, chemical-safety content, confined-space procedures, emergency-response training, PPE instructions, EHS programs, equipment-safety documentation, and other workforce safety materials. Review workflows can be adjusted to the risk and intended use of the content."],
  ["Can you localize Articulate Storyline, Rise, and Captivate courses?", "Yes. Stepes provides eLearning localization for Articulate Storyline, Articulate Rise, Adobe Captivate, SCORM and xAPI content. Services can include translation, voiceover, subtitles, graphics, assessments, course engineering, linguistic QA, functional testing, and LMS-ready delivery."],
  ["Can Stepes translate HMI and paper-machine software interfaces?", "Yes. Stepes localizes human-machine interfaces, operator panels, process dashboards, quality-control interfaces, equipment software, alarms, diagnostic messages, help content, and other industrial software. Localization can include resource-file engineering, terminology control, in-context review, and multilingual interface testing."],
  ["How do you maintain consistent papermaking terminology across languages?", "Stepes uses multilingual terminology databases, client glossaries, translation memory, project instructions, previously approved content, and reviewer feedback to help keep technical terminology consistent across manuals, SOPs, software, safety content, training, eLearning, service documentation, and future revisions."],
  ["Do you support pulp and paper equipment manufacturers selling globally?", "Yes. Stepes supports equipment manufacturers and technology suppliers with multilingual product documentation, installation and commissioning materials, operating and maintenance manuals, HMI/software localization, technician training, eLearning, sales content, parts catalogs, service documentation, and customer-support materials across 100+ languages."],
  ["What pulp and paper sectors does Stepes support?", "We support pulp production, paper manufacturing, paperboard and containerboard, tissue manufacturing, specialty papers, paper converting, recycled-fiber operations, packaging-related production, papermaking machinery, automation and process technology, forestry-related content, and supporting industrial services."],
  ["What languages does Stepes support for pulp and paper translation?", "Stepes provides professional translation and localization in more than 100 languages, including Spanish, Portuguese, French, German, Italian, Dutch, Finnish, Swedish, Polish, Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Arabic, and many others."],
];

export default function PulpPaperTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-white">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">PULP &amp; PAPER</div>
            <h1>Pulp and Paper Translation Services</h1>
            <p className="hero-lede">Translate paper-machine documentation, operating procedures, safety content, workforce training, eLearning, industrial software, and business communications for global pulp and paper operations.</p>
            <p>Our pulp and paper manufacturing translation services combine professional linguists, industry-specific terminology, AI-enabled workflows, and multilingual production expertise to help paper manufacturers, mills, equipment OEMs, and technology suppliers communicate accurately in 100+ languages.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote</a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to Our Team</a>
            </div>
          </div>
          <PaperMillIllustration />
        </div>
      </section>

      <section className="proof-band" aria-label="Service highlights">
        <div className="shell proof-grid">
          {[
            ["globe", "100+ Languages", "Global pulp and paper coverage"],
            ["gear", "Technical Expertise", "Papermaking, machinery, and controls"],
            ["spark", "AI + Human Workflows", "Risk-matched translation and review"],
            ["layers", "Complete Content Support", "Documents, learning, software, media"],
          ].map(([icon, title, text]) => (
            <div className="proof-item" key={title}>
              <div className="proof-icon"><Icon name={icon} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading
            title="Translation Across the Pulp and Paper Manufacturing Lifecycle"
            intro="Pulp and paper production connects specialized materials, equipment, process controls, engineering documentation, operating procedures, workforce training, and safety information. Stepes supports multilingual content from fiber preparation through finished paper and board products."
          />
          <div className="lifecycle-flow">
            {lifecycle.map((item, index) => (
              <div className="life-stage" key={item.title}>
                <div className="life-top"><span className="life-dot"/><span className="life-index">0{index + 1}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split-editorial">
          <div className="sticky-title">
            <div className="eyebrow">TECHNICAL CONTENT</div>
            <h2>Technical Translation for Paper Mills and Equipment Manufacturers</h2>
            <p className="body-large">Modern pulp and paper operations depend on precise information to install, operate, maintain, troubleshoot, and upgrade complex equipment.</p>
            <p>Stepes helps paper mills, engineering teams, equipment manufacturers, technology suppliers, and field-service organizations make that information available across languages without losing the terminology and technical context that give it meaning.</p>
            <div className="link-stack">
              <ArrowLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services</ArrowLink>
            </div>
          </div>
          <div className="editorial-list two-col-list">
            {[
              "Equipment operating manuals", "Installation and commissioning manuals", "Maintenance and service documentation", "Engineering specifications", "Technical datasheets", "Parts catalogs", "Troubleshooting guides", "Process documentation", "Electrical and controls documentation", "Inspection procedures", "Maintenance schedules", "Equipment warnings", "Technical bulletins", "Customer support materials", "Software and HMI content", "Technical publishing files"
            ].map((item) => <div className="list-row" key={item}><span className="text-marker"/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <SectionHeading
            title="Papermaking Equipment and Machinery Translation"
            intro="Translate documentation for individual machines, machine sections, complete production lines, mill upgrades, and supporting technologies while keeping equipment terminology aligned across manuals, controls, training, service documentation, and customer support."
          />
          <div className="equipment-grid">
            {equipmentGroups.map((group, i) => (
              <div className="equipment-group" key={group.title}>
                <div className="equipment-head"><Icon name={["gear", "layers", "sync", "monitor"][i]} /><h3>{group.title}</h3></div>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="equipment-note">
            <div className="equipment-note-icon"><Icon name="translate" size={28}/></div>
            <p><strong>Terminology matters.</strong> A headbox, press section, dryer, calender, QCS screen, and maintenance procedure should use the same approved terminology wherever employees and customers encounter it.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split-editorial reverse-on-mobile">
          <div className="sop-panel">
            <div className="panel-title"><Icon name="file" size={26}/><h3>Operational Content We Translate</h3></div>
            <div className="sop-list">
              {[
                "Standard operating procedures", "Work instructions", "Startup and shutdown procedures", "Machine changeover procedures", "Cleaning instructions", "Inspection procedures", "Preventive maintenance instructions", "Troubleshooting procedures", "Quality procedures", "Production checklists", "Process-control instructions", "Equipment setup procedures", "Shift and operator reference materials"
              ].map(item => <div className="sop-item" key={item}><span>{item}</span><span aria-hidden="true">→</span></div>)}
            </div>
          </div>
          <div className="sticky-title">
            <div className="eyebrow">MILL OPERATIONS</div>
            <h2>Multilingual SOPs, Work Instructions and Operating Procedures</h2>
            <p className="body-large">The documents employees use every day are often among the most important content in a manufacturing operation.</p>
            <p>Procedures need to be easy to follow, terminology should match the equipment employees see on the production floor, and updates should remain synchronized across languages. Managing SOPs, manuals, terminology, training, and software as connected multilingual content helps reduce terminology drift and makes future revisions easier to maintain.</p>
          </div>
        </div>
      </section>

      <section className="section safety-section">
        <div className="shell safety-grid">
          <div className="safety-copy">
            <h2>Safety and EHS Translation for Pulp and Paper Operations</h2>
            <p className="body-large">Paper mills combine large rotating machinery, high temperatures, pressure systems, chemicals, electrical equipment, mobile equipment, and maintenance activity. Safety information requires particular attention to meaning, terminology, consistency, and intended use.</p>
            <p>Quality workflows can be configured according to the risk and purpose of the content, combining professional translation, terminology controls, human review, automated QA, and additional validation where appropriate.</p>
          </div>
          <div className="safety-list">
            {safetyItems.map((item) => (
              <div className="safety-row" key={item.text}>
                <Icon name={item.icon} size={20}/>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            title="Multilingual Training for Pulp and Paper Workforces"
            intro="Give operators, technicians, maintenance personnel, contractors, and supervisors consistent access to the operational knowledge they need across languages and locations."
          />
          <div className="training-grid">
            {trainingItems.map((item) => (
              <div className="training-row" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            ))}
          </div>
          <div className="center-link"><ArrowLink href="https://www.stepes.com/training-translation-services/">Training Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="section elearning-section">
        <div className="shell elearning-grid">
          <div>
            <h2>eLearning Localization for Pulp and Paper Training Programs</h2>
            <p className="body-large">As pulp and paper manufacturers digitize workforce development, operator, maintenance, safety, process, and compliance training increasingly moves online.</p>
            <p>Stepes supports Articulate Storyline, Articulate Rise, Adobe Captivate, SCORM, xAPI, LMS-ready courses, interactive assessments, knowledge checks, training video, voiceover, subtitles, captions, and downloadable learner resources.</p>
            <ArrowLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation &amp; Localization Services</ArrowLink>
          </div>
          <div className="workflow-panel">
            <div className="workflow-kicker">COMPLETE COURSE LOCALIZATION</div>
            <div className="workflow">
              {["Source Review", "Translation", "Linguistic Review", "Multimedia", "Course Engineering", "QA", "LMS-Ready Delivery"].map((step, index) => (
                <div className="workflow-step" key={step}>
                  <div className="step-num">{index + 1}</div>
                  <div className="step-copy"><strong>{step}</strong>{index < 6 ? <span className="step-line"/> : null}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell hmi-grid">
          <div className="hmi-copy">
            <h2>HMI, Controls and Industrial Software Localization</h2>
            <p className="body-large">A modern paper machine is both a mechanical production system and a digital operating environment. Operators interact with controls, dashboards, alarms, diagnostics, quality systems, and process interfaces throughout production.</p>
            <p>Stepes localizes industrial software and equipment interfaces so operators can use both the physical machinery and its digital controls in their preferred language.</p>
            <ArrowLink light href="https://www.stepes.com/software-localization-services/">Software Localization Services</ArrowLink>
          </div>
          <div className="hmi-mockup" aria-label="Industrial HMI localization example">
            <div className="mockup-top"><span>Paper Machine 3</span><span className="status">RUNNING</span></div>
            <div className="mockup-body">
              <div className="mockup-chart">
                <div className="chart-title">Dryer Section</div>
                <svg viewBox="0 0 420 120" aria-hidden="true">
                  <path d="M12 92 C52 70,70 76,104 59 S160 72,194 43 S250 55,284 38 S338 48,407 18" fill="none" stroke="#F2A7C6" strokeWidth="4"/>
                  <path d="M12 104H408M12 76H408M12 48H408M12 20H408" stroke="#FFFFFF" opacity=".12"/>
                </svg>
              </div>
              <div className="mockup-stats">
                <div><span>Web Speed</span><strong>1,245 m/min</strong></div>
                <div><span>Moisture</span><strong>5.2%</strong></div>
                <div><span>Basis Weight</span><strong>82 g/m²</strong></div>
              </div>
              <div className="mockup-alert"><span className="alert-dot"/><div><strong>Localized alert</strong><p>Check dryer steam pressure before increasing machine speed.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="PAPER &amp; BOARD MARKETS"
            title="Translation for Paperboard, Tissue, Packaging and Converting"
            intro="Support technical, operational, training, software, marketing, and customer content across a broad range of paper and fiber-based products."
          />
          <div className="market-rows">
            {[
              ["Paperboard & Containerboard", "Paperboard, boxboard, linerboard, containerboard, corrugated-material, and packaging-paper operations."],
              ["Tissue Manufacturing", "Tissue production and converting, including machine documentation, operator training, maintenance instructions, safety, and quality procedures."],
              ["Specialty Papers", "Coated papers, technical papers, industrial paper products, and applications requiring specialized production processes."],
              ["Converting Operations", "Winding, slitting, sheeting, printing, coating, laminating, tissue converting, packaging, and downstream operations."],
            ].map(([title, text]) => (
              <div className="market-row" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
          <div className="center-link"><ArrowLink href="https://www.stepes.com/packaging-translation-services/">Packaging Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell twin-editorial">
          <div className="twin-block">
            <div className="icon-box"><Icon name="leaf" /></div>
            <h2>Pulp, Fiber and Forestry Translation</h2>
            <p>Papermaking begins well before stock reaches the paper machine. Stepes translates content connecting forestry and fiber production with downstream pulp and paper manufacturing, including forestry equipment documentation, fiber sourcing materials, wood-handling procedures, pulp production content, recycled-fiber processing, safety procedures, training, and environmental documentation.</p>
            <ArrowLink href="https://www.stepes.com/forestry-translation-services/">Forestry Translation Services</ArrowLink>
          </div>
          <div className="twin-block">
            <div className="icon-box"><Icon name="globe" /></div>
            <h2>Environmental and Sustainability Translation for Pulp and Paper</h2>
            <p>Translate sustainability reports, environmental policies, responsible sourcing documentation, water-management procedures, energy-efficiency programs, waste and recycling documentation, environmental training, supplier sustainability materials, and public sustainability communications.</p>
            <p>Terminology management helps keep environmental, operational, and corporate language aligned across reports, policies, training, websites, and supporting documentation. For broader corporate sustainability reporting, climate disclosures, supplier ESG programs, and governance content, connect this industry expertise with Stepes’ ESG translation capabilities.</p>
            <ArrowLink href="https://www.stepes.com/esg-translation-services/">ESG &amp; Sustainability Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white ai-section">
        <div className="shell">
          <SectionHeading
            eyebrow="AI + HUMAN EXPERTISE"
            title="Match the Translation Workflow to the Content"
            intro="Pulp and paper organizations generate large volumes of multilingual content, but not every document carries the same audience, complexity, visibility, or risk. Stepes combines AI-enabled translation technologies with professional linguists, translation memory, terminology management, automated QA, technical review, and multilingual production."
          />
          <div className="risk-grid">
            <div className="risk-column"><div className="risk-label">HIGH-VOLUME CONTENT</div><h3>Operational & Internal</h3><p>Use AI-enabled workflows to accelerate recurring or high-volume content, with professional review and QA matched to the intended use.</p><div className="risk-flow"><span>AI translation</span><span>→</span><span>Linguistic QA / review</span></div></div>
            <div className="risk-column"><div className="risk-label">TECHNICAL CONTENT</div><h3>Manuals & Engineering</h3><p>Combine AI efficiency with technical linguist review, approved terminology, translation memory, and structured quality checks.</p><div className="risk-flow"><span>AI + TM</span><span>→</span><span>Technical review</span></div></div>
            <div className="risk-column"><div className="risk-label">HIGHER-RISK CONTENT</div><h3>Safety & Critical Instructions</h3><p>Apply increased human review, terminology control, and validation based on project requirements and content risk.</p><div className="risk-flow"><span>Professional workflow</span><span>→</span><span>Enhanced QA</span></div></div>
          </div>
        </div>
      </section>

      <section className="section terminology-section">
        <div className="shell terminology-grid">
          <div>
            <h2>Keep Pulp and Paper Terminology Consistent Everywhere</h2>
            <p className="body-large">The same machine component or process term may appear in an operating manual, HMI screen, maintenance procedure, safety instruction, eLearning course, parts catalog, service bulletin, and customer-support article.</p>
            <p>Stepes uses approved terminology databases, client glossaries, translation memory, product and machine terminology, style guidance, previously approved translations, and reviewer feedback to create a shared multilingual language foundation.</p>
          </div>
          <div className="term-network" aria-label="Terminology reuse across content types">
            <div className="term-center">
              <div className="term-center-icon"><Icon name="translate" size={24}/></div>
              <strong>Approved<br/>Terminology</strong>
            </div>
            {termNodes.map((item) => <div className={`term-node ${item.className}`} key={item.label}>{item.label}</div>)}
            <svg viewBox="0 0 560 390" aria-hidden="true">
              <g stroke="#CBD1D8" strokeWidth="2.5" strokeLinecap="round">
                <path d="M280 195 176 105"/>
                <path d="M280 195 384 105"/>
                <path d="M280 195 430 195"/>
                <path d="M280 195 384 285"/>
                <path d="M280 195 176 285"/>
                <path d="M280 195 130 195"/>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell twin-editorial compact-twins">
          <div className="twin-block no-card">
            <div className="eyebrow">CONTINUOUS UPDATES</div>
            <h2>Keep Multilingual Technical Content Current</h2>
            <p>Paper machines are upgraded, procedures change, software is revised, training evolves, and documentation is republished throughout the equipment lifecycle. Translation memory can identify previously translated material while separating new or modified content for translation and review.</p>
            <p>Stepes supports manual revisions, machine upgrades, new models, updated SOPs, recurring safety training, eLearning updates, software releases, new plant rollouts, additional target languages, and ongoing technical publishing.</p>
            <ArrowLink href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">Technical Manual Translation Services</ArrowLink>
          </div>
          <div className="twin-block no-card">
            <h2>Video, Voice and Multimedia Localization</h2>
            <p>Technical knowledge increasingly reaches operators, technicians, customers, and sales teams through video, animation, narrated presentations, and interactive media as well as conventional documents.</p>
            <p>Services include training video translation, voiceover, subtitling, captions, transcription, on-screen text, technical animation localization, equipment demonstrations, safety videos, and multilingual audio production.</p>
          </div>
        </div>
      </section>

      <section className="section languages-section">
        <div className="shell languages-grid">
          <div>
            <h2>100+ Languages for Global Pulp and Paper Operations</h2>
            <p className="body-large">Support international plant networks, equipment customers, engineering teams, suppliers, service organizations, and multilingual workforces with consistent language resources.</p>
            <p>Whether you are localizing one technical manual or coordinating content across multiple plants and languages, Stepes can build the terminology assets and workflows needed for ongoing delivery.</p>
          </div>
          <div className="language-cloud">
            {[
              "Spanish", "Brazilian Portuguese", "French", "Canadian French", "German", "Italian", "Dutch", "Finnish", "Swedish", "Polish", "Czech", "Chinese", "Japanese", "Korean", "Vietnamese", "Thai", "Indonesian", "Arabic"
            ].map(lang => <span key={lang}>{lang}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-white content-lifecycle">
        <div className="shell">
          <SectionHeading
            eyebrow="CONNECTED CONTENT"
            title="One Translation Workflow Across the Content Lifecycle"
            intro="Global manufacturing content becomes more valuable when the language assets behind it are connected. Shared translation memory, approved terminology, AI-enabled workflows, professional linguists, review, and QA help keep content aligned across the complete lifecycle."
          />
          <div className="connected-flow">
            {["Engineering", "Documentation", "Operations", "Safety", "Training", "Service & Support"].map((item, index) => (
              <React.Fragment key={item}>
                <div className="connected-node">{item}</div>
                {index < 5 ? <div className="connected-arrow" aria-hidden="true">→</div> : null}
              </React.Fragment>
            ))}
          </div>
          <div className="connected-base"><span>Terminology</span><span>Translation Memory</span><span>AI-Enabled Workflow</span><span>Professional Review</span><span>QA</span></div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <SectionHeading title="Why Pulp and Paper Companies Choose Stepes" intro="A connected localization model for complex technical content, global workforces, and ongoing manufacturing programs." />
          <div className="why-grid">
            {[
              ["gear", "Technical & Manufacturing Expertise", "Translate complex papermaking, machinery, engineering, process, and operational content with workflows matched to the subject matter."],
              ["spark", "AI-Enabled Efficiency", "Use modern translation technologies, workflow automation, translation memory, and automated QA to scale multilingual content efficiently."],
              ["users", "Professional Human Review", "Match professional linguistic and technical review to the audience, complexity, visibility, and risk of each project."],
              ["translate", "Terminology Consistency", "Keep approved paper-machine, process, equipment, safety, and corporate terminology aligned across content types."],
              ["layers", "Complete Content Localization", "Support technical publishing, software, HMI content, training, eLearning, video, graphics, voice, and other multilingual assets."],
              ["globe", "Global Language Coverage", "Support international mills, equipment customers, workforce programs, and manufacturing networks in 100+ languages."],
            ].map(([icon, title, text]) => <div className="why-item" key={title}><div className="icon-box"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-white related-section">
        <div className="shell">
          <SectionHeading title="Related Translation Services" intro="Connect pulp and paper programs with Stepes expertise across manufacturing, technical documentation, workforce learning, software, forestry, and packaging." />
          <div className="related-list">
            {relatedServices.map(([title, text, href]) => (
              <a className="related-row" href={href} key={title}>
                <div><h3>{title}</h3><p>{text}</p></div><span className="related-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-shell">
          <div className="faq-title">
            <h2>Pulp and Paper Translation Services FAQs</h2>
            <p>Answers to common questions about paper-machine documentation, mill operations, workforce training, eLearning, industrial software, and multilingual terminology.</p>
          </div>
          <div className="faq-panel">
            {faqs.map(([q, a], index) => (
              <details key={q} open={index === 0}>
                <summary><span>{q}</span><span className="plus" aria-hidden="true">+</span></summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Take Your Pulp and Paper Content Global</h2>
            <p>From paper-machine manuals and operating procedures to safety training, eLearning, software, sustainability content, and global service documentation, Stepes helps pulp and paper organizations manage multilingual content across the complete manufacturing lifecycle.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote</a>
            <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Discuss Your Project</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root{--magenta:${COLORS.magenta};--magenta-dark:${COLORS.magentaDark};--burgundy:${COLORS.burgundy};--blush:${COLORS.blush};--ink:${COLORS.ink};--body:${COLORS.body};--line:${COLORS.line};--soft:${COLORS.soft};--dark:${COLORS.dark};}
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0}
  .stepes-page{font-family:"Inter Tight","Inter",Arial,sans-serif;color:var(--body);background:#fff;line-height:1.68;font-size:17px;overflow:hidden}
  .stepes-page *{box-sizing:border-box}
  .stepes-page a{color:inherit}
  .shell{width:min(1280px,calc(100% - 112px));margin:0 auto}
  .section{padding:96px 0}
  .section-white{background:#fff}
  .section-soft{background:#F7F8FA}
  .section-blush{background:#FDF2F7}
  h1,h2,h3,p{margin-top:0}
  h1,h2,h3{color:var(--ink);font-weight:600;letter-spacing:-.025em;line-height:1.12}
  h1{font-size:48px;margin-bottom:24px;max-width:700px}
  h2{font-size:36px;margin-bottom:22px}
  h3{font-size:24px;margin-bottom:10px}
  p{font-size:17px;color:var(--body);font-weight:400;margin-bottom:18px}
  .body-large,.hero-lede,.section-intro{font-size:18px;line-height:1.62}
  .eyebrow{font-size:11px!important;line-height:1.4!important;letter-spacing:.14em!important;font-weight:600!important;color:#C11D63!important;text-transform:uppercase;margin-bottom:16px;opacity:1!important}
  .section-heading{max-width:830px;margin-bottom:52px}
  .section-heading.centered{text-align:center;margin-left:auto;margin-right:auto}
  .section-heading h2{max-width:820px;margin-left:auto;margin-right:auto}
  .section-intro{max-width:810px;margin:0 auto;color:var(--body)}
  .section-heading.light h2{color:#fff}.section-heading.light .section-intro{color:#F2F4F7}.section-heading.light .eyebrow{color:#F2A7C6!important}

  .hero{padding:104px 0 92px}
  .hero-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(520px,1.08fr);gap:54px;align-items:center}
  .hero-copy{max-width:650px}
  .hero-copy>p:not(.hero-lede){max-width:620px}
  .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
  .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 24px;border-radius:999px;text-decoration:none;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent;line-height:1.2}
  .btn-primary,.btn-primary:link,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:#C11D63;color:#fff!important;border-color:#C11D63}
  .btn-primary:hover{background:#A71954;border-color:#A71954;transform:translateY(-1px)}
  .btn-primary:focus-visible,.btn-secondary:focus-visible,.editorial-link:focus-visible,.related-row:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:3px}
  .btn-secondary{background:#fff;color:#252B36;border-color:#C9CED6}
  .btn-secondary:hover{border-color:#9EA6B1;transform:translateY(-1px)}
  .hero-art{width:100%;max-width:700px;justify-self:end}
  .hero-art svg{display:block;width:100%;height:auto}

  .proof-band{background:#fff;border-top:1px solid #E6E9ED;border-bottom:1px solid #E6E9ED}
  .proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}
  .proof-item{display:flex;gap:14px;align-items:center;min-height:126px;padding:24px 26px;border-right:1px solid #E6E9ED}
  .proof-item:last-child{border-right:0}
  .proof-icon{width:44px;height:44px;border-radius:14px;background:#FDF2F7;color:#C11D63;display:grid;place-items:center;flex:none}
  .proof-item h3{font-size:18px;margin:0 0 4px;letter-spacing:-.01em}
  .proof-item p{font-size:16px;margin:0;line-height:1.48;color:#485162}

  .lifecycle-flow{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #D7DCE2}
  .life-stage{padding:26px 26px 8px;border-right:1px solid #D7DCE2;min-width:0}
  .life-stage:last-child{border-right:0}
  .life-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
  .life-dot{width:12px;height:12px;border-radius:50%;background:#C11D63;box-shadow:0 0 0 6px #F3D8E4}
  .life-index{font-size:14px;color:#8B94A1;font-weight:600;letter-spacing:.08em}
  .life-stage h3{font-size:20px;margin-bottom:12px}
  .life-stage p{font-size:16px;line-height:1.6;margin:0}

  .split-editorial{display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:84px;align-items:start}
  .sticky-title{max-width:520px;position:sticky;top:40px}
  .sticky-title h2{max-width:500px}
  .link-stack{display:flex;flex-direction:column;gap:12px;margin-top:26px;align-items:flex-start}
  .editorial-link{display:inline-flex;align-items:center;gap:9px;color:#C11D63!important;text-decoration:none;font-weight:600;font-size:16px;min-height:38px}
  .editorial-link .arrow{transition:transform .2s ease}
  .editorial-link:hover .arrow{transform:translateX(4px)}
  .editorial-link.light{color:#F7C6DA!important}
  .two-col-list{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #DDE1E7}
  .list-row{display:flex;gap:13px;align-items:flex-start;padding:17px 18px 17px 0;border-bottom:1px solid #DDE1E7;font-size:17px;line-height:1.5}
  .list-row:nth-child(odd){padding-right:28px}
  .list-row:nth-child(even){padding-left:28px;border-left:1px solid #DDE1E7}
  .text-marker{width:7px;height:7px;border-radius:50%;background:#C11D63;flex:none;margin-top:.57em}

  .equipment-grid{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border:1px solid #E3D7DC;border-radius:28px;overflow:hidden}
  .equipment-group{padding:30px 28px;border-right:1px solid #E3D7DC}
  .equipment-group:last-child{border-right:0}
  .equipment-head{display:flex;gap:12px;align-items:flex-start;color:#C11D63;margin-bottom:20px}
  .equipment-head h3{font-size:20px;margin:1px 0 0;color:#252A35}
  .equipment-group ul{list-style:none;margin:0;padding:0}
  .equipment-group li{padding:10px 0;border-bottom:1px solid #ECE6E9;font-size:16px;line-height:1.45;color:#485162}
  .equipment-group li:last-child{border-bottom:0}
  .equipment-note{display:flex;gap:18px;align-items:flex-start;margin:28px auto 0;max-width:900px;padding:22px 26px;background:#fff;border:1px solid #E3D7DC;border-radius:20px}
  .equipment-note-icon{color:#C11D63;flex:none;margin-top:2px}.equipment-note p{margin:0}

  .sop-panel{background:#F7F8FA;border:1px solid #E0E4E9;border-radius:28px;padding:30px 32px}
  .panel-title{display:flex;align-items:center;gap:12px;color:#C11D63;padding-bottom:18px;border-bottom:1px solid #DDE1E7}
  .panel-title h3{margin:0;color:#252A35;font-size:22px}
  .sop-list{display:grid;grid-template-columns:1fr 1fr}
  .sop-item{display:flex;justify-content:space-between;gap:12px;padding:14px 4px;border-bottom:1px solid #E0E4E9;font-size:16px;line-height:1.45}
  .sop-item:nth-child(odd){padding-right:24px}.sop-item:nth-child(even){padding-left:24px;border-left:1px solid #E0E4E9}
  .sop-item>span:last-child{color:#C11D63}

  .safety-section{background:#FFF8FB;border-top:1px solid #F0D9E3;border-bottom:1px solid #F0D9E3}
  .safety-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:78px;align-items:start}
  .safety-copy{max-width:560px}
  .safety-list{display:grid;grid-template-columns:1fr 1fr;background:#fff;border:1px solid #EADCE2;border-radius:28px;padding:12px 30px}
  .safety-row{display:flex;align-items:flex-start;gap:12px;padding:17px 8px;border-bottom:1px solid #ECE5E8;font-size:16px;line-height:1.5;color:#485162}
  .safety-row:nth-last-child(-n+2){border-bottom:0}.safety-row svg{color:#C11D63;flex:none;margin-top:2px}

  .training-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #DDE1E7;border-bottom:1px solid #DDE1E7}
  .training-row{display:grid;grid-template-columns:54px 1fr;gap:20px;padding:30px 30px 30px 0;border-bottom:1px solid #DDE1E7;align-items:start}
  .training-row:nth-child(even){padding-left:30px;border-left:1px solid #DDE1E7}
  .training-row:nth-last-child(-n+2){border-bottom:0}
  .icon-box{width:52px;height:52px;border-radius:16px;background:#F7F8FA;border:1px solid #E3E6EA;color:#C11D63;display:grid;place-items:center;flex:none}
  .training-row h3{font-size:22px;margin-bottom:9px}.training-row p{margin:0}
  .center-link{display:flex;justify-content:center;margin-top:28px}

  .elearning-section{background:#F7F8FA}
  .elearning-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:80px;align-items:center}
  .workflow-panel{background:#fff;border:1px solid #E1E5EA;border-radius:28px;padding:30px 32px;box-shadow:0 16px 40px rgba(31,40,52,.05)}
  .workflow-kicker{font-size:14px;letter-spacing:.08em;font-weight:600;color:#687282;margin-bottom:16px}
  .workflow-step{display:grid;grid-template-columns:38px 1fr;gap:15px;align-items:start;min-height:62px}
  .step-num{width:34px;height:34px;border-radius:50%;background:#FDF2F7;color:#C11D63;display:grid;place-items:center;font-size:14px;font-weight:600}
  .step-copy{display:flex;align-items:center;gap:16px;padding-top:5px;font-size:17px;color:#2A303B}
  .step-line{height:1px;background:#D8DDE3;flex:1}

  .dark-section{background:#2B1C25;color:#fff}
  .dark-section .eyebrow{color:#F2A7C6!important}
  .dark-section h2,.dark-section h3{color:#fff}.dark-section p{color:#F0EDF0}
  .hmi-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:center}
  .hmi-copy{max-width:560px}
  .hmi-mockup{background:#352632;border:1px solid rgba(255,255,255,.16);border-radius:28px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.18)}
  .mockup-top{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;border-bottom:1px solid rgba(255,255,255,.12);font-size:15px;font-weight:600;color:#fff}
  .status{font-size:12px;letter-spacing:.08em;color:#F2A7C6}
  .mockup-body{padding:24px}
  .mockup-chart{background:#2F222C;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:18px}
  .chart-title{font-size:15px;font-weight:600;color:#fff;margin-bottom:8px}
  .mockup-chart svg{width:100%;height:auto;display:block}
  .mockup-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}
  .mockup-stats>div{background:#2F222C;border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:15px}
  .mockup-stats span{display:block;font-size:13px;color:#CFC7CC;margin-bottom:5px}.mockup-stats strong{font-size:17px;color:#fff}
  .mockup-alert{display:flex;gap:12px;margin-top:14px;background:#432735;border:1px solid rgba(242,167,198,.25);border-radius:16px;padding:15px}
  .alert-dot{width:9px;height:9px;background:#F2A7C6;border-radius:50%;margin-top:7px;flex:none}.mockup-alert strong{font-size:16px;color:#fff}.mockup-alert p{font-size:16px;margin:3px 0 0;color:#F2EEF1}

  .market-rows{max-width:1040px;margin:0 auto;border-top:1px solid #DDE1E7}
  .market-row{display:grid;grid-template-columns:300px 1fr;gap:48px;padding:25px 0;border-bottom:1px solid #DDE1E7;align-items:start}
  .market-row h3{font-size:21px;margin:0}.market-row p{margin:0}

  .twin-editorial{display:grid;grid-template-columns:1fr 1fr;gap:32px}
  .twin-block{background:#fff;border:1px solid #E0E4E9;border-radius:28px;padding:36px}
  .twin-block h2{font-size:30px;margin-top:24px}.twin-block p:last-of-type{margin-bottom:22px}
  .compact-twins{gap:70px}.compact-twins .twin-block.no-card{border:0;border-radius:0;padding:0;background:transparent}.compact-twins .twin-block h2{font-size:32px;margin-top:0}

  .risk-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #DDE1E7;border-radius:28px;overflow:hidden}
  .risk-column{padding:32px;border-right:1px solid #DDE1E7;background:#fff}.risk-column:last-child{border-right:0}
  .risk-label{font-size:11px;font-weight:600;letter-spacing:.12em;color:#C11D63;margin-bottom:14px}
  .risk-column h3{font-size:22px}.risk-flow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:20px;font-size:16px;font-weight:600;color:#5F6875}.risk-flow span:nth-child(2){color:#C11D63}

  .terminology-section{background:#F7F8FA}
  .terminology-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}
  .term-network{height:410px;position:relative;max-width:600px;margin-left:auto;width:100%}
  .term-network svg{position:absolute;inset:10px 0 0;width:100%;height:390px}
  .term-center{position:absolute;z-index:2;left:50%;top:50%;transform:translate(-50%,-50%);width:154px;height:154px;border-radius:50%;background:#C11D63;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;box-shadow:0 10px 24px rgba(193,29,99,.14)}
  .term-center-icon{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18)}
  .term-center strong{font-size:16px;line-height:1.25}
  .term-node{position:absolute;z-index:2;background:#fff;border:1px solid #D9DEE5;border-radius:999px;padding:14px 20px;font-size:16px;font-weight:600;color:#485162;white-space:nowrap;min-width:142px;text-align:center;box-shadow:0 6px 18px rgba(32,38,51,.04)}
  .node-small{min-width:92px}
  .node-wide{min-width:176px}
  .node-1{left:6%;top:6%}.node-2{right:5%;top:6%}.node-3{right:1%;top:41%}.node-4{right:6%;bottom:8%}.node-5{left:7%;bottom:8%}.node-6{left:2%;top:41%}

  .languages-section{background:#FFF8FB;border-top:1px solid #F0DCE5;border-bottom:1px solid #F0DCE5}
  .languages-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
  .language-cloud{display:flex;flex-wrap:wrap;gap:12px;align-content:center}
  .language-cloud span{padding:10px 14px;border-radius:999px;background:#fff;border:1px solid #E4D9DE;font-size:16px;color:#485162}

  .connected-flow{display:grid;grid-template-columns:repeat(11,auto);align-items:center;justify-content:center;gap:13px;margin-top:34px}
  .connected-node{padding:16px 18px;border:1px solid #DDE1E7;border-radius:18px;background:#fff;font-size:16px;font-weight:600;color:#313742;text-align:center;min-width:130px}
  .connected-arrow{color:#C11D63;font-size:24px}
  .connected-base{margin:26px auto 0;max-width:930px;display:flex;justify-content:center;flex-wrap:wrap;gap:8px;padding:16px;border-radius:18px;background:#F7F8FA;border:1px solid #E1E4E8}
  .connected-base span{font-size:14px;font-weight:600;color:#66707D;padding:4px 10px;border-right:1px solid #CDD2D8}.connected-base span:last-child{border-right:0}

  .why-section{background:#F7F8FA}
  .why-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #DDE1E7;border-left:1px solid #DDE1E7}
  .why-item{padding:30px;border-right:1px solid #DDE1E7;border-bottom:1px solid #DDE1E7;background:#fff}
  .why-item h3{font-size:21px;margin:18px 0 10px}.why-item p{margin:0;font-size:17px}

  .related-list{max-width:1080px;margin:0 auto;border-top:1px solid #DDE1E7}
  .related-row{display:grid;grid-template-columns:1fr 48px;gap:24px;padding:24px 4px;border-bottom:1px solid #DDE1E7;text-decoration:none;align-items:center;transition:.2s ease}
  .related-row:hover{padding-left:12px;background:#FAFAFB}.related-row h3{font-size:20px;margin:0 0 6px}.related-row p{margin:0;font-size:17px}.related-arrow{font-size:24px;color:#C11D63;text-align:center}

  .faq-section{background:#F7F8FA}
  .faq-shell{display:grid;grid-template-columns:340px 1fr;gap:72px;align-items:start}
  .faq-title{position:sticky;top:40px}.faq-title h2{font-size:34px}.faq-title p{margin-bottom:0}
  .faq-panel{background:#fff;border:1px solid #E0E4E9;border-radius:28px;padding:0 30px}
  details{border-bottom:1px solid #E0E4E9}details:last-child{border-bottom:0}
  summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:24px;align-items:center;padding:24px 0;font-size:18px;font-weight:600;color:#252B36;line-height:1.4}
  summary::-webkit-details-marker{display:none}.plus{font-size:24px;color:#C11D63;transition:transform .2s ease;flex:none}details[open] .plus{transform:rotate(45deg)}
  .faq-answer{padding:0 44px 24px 0}.faq-answer p{font-size:17px;line-height:1.65;margin:0;max-width:820px}

  .final-cta{background:#FDF2F7;padding:84px 0;border-top:1px solid #F0D9E3}
  .final-cta-inner{display:grid;grid-template-columns:1fr auto;gap:70px;align-items:center}
  .final-cta h2{font-size:38px;margin-bottom:16px;max-width:700px}.final-cta p{max-width:780px;margin:0}
  .final-actions{display:flex;flex-direction:column;gap:12px;min-width:220px}

  @media (max-width:1180px){
    .shell{width:min(1280px,calc(100% - 80px))}
    .hero-grid{grid-template-columns:1fr 1fr;gap:34px}.hero-art{min-width:0}
    .lifecycle-flow{grid-template-columns:repeat(3,1fr)}.life-stage{border-bottom:1px solid #D7DCE2}.life-stage:nth-child(3){border-right:0}.life-stage:nth-child(4),.life-stage:nth-child(5){border-bottom:0}
    .equipment-grid{grid-template-columns:1fr 1fr}.equipment-group{border-bottom:1px solid #E3D7DC}.equipment-group:nth-child(2){border-right:0}.equipment-group:nth-child(n+3){border-bottom:0}
    .connected-flow{grid-template-columns:repeat(5,auto)}.connected-node{min-width:0}.connected-arrow:nth-of-type(5){display:none}
  }

  @media (max-width:900px){
    .shell{width:calc(100% - 48px)}
    .section{padding:80px 0}.hero{padding:88px 0 76px}
    h1{font-size:42px}h2{font-size:32px}.section-heading{margin-bottom:44px}
    .hero-grid,.split-editorial,.safety-grid,.elearning-grid,.hmi-grid,.terminology-grid,.languages-grid,.final-cta-inner{grid-template-columns:1fr}
    .hero-copy{max-width:760px}.hero-art{justify-self:center;max-width:680px}.sticky-title,.faq-title{position:static;max-width:760px}.split-editorial{gap:46px}.reverse-on-mobile .sop-panel{order:2}
    .twin-block{min-width:0}.hmi-mockup,.workflow-panel,.sop-panel,.safety-list,.equipment-grid,.faq-panel{max-width:100%}
    .proof-grid{grid-template-columns:1fr 1fr}.proof-item:nth-child(2){border-right:0}.proof-item:nth-child(-n+2){border-bottom:1px solid #E6E9ED}
    .equipment-grid{grid-template-columns:1fr 1fr}.training-grid{grid-template-columns:1fr}.training-row{border-left:0!important;padding-left:0!important;padding-right:0!important}.training-row:nth-child(3){border-bottom:1px solid #DDE1E7}
    .safety-grid,.elearning-grid,.hmi-grid,.terminology-grid,.languages-grid{gap:46px}
    .twin-editorial{grid-template-columns:1fr}.compact-twins{gap:50px}.risk-grid{grid-template-columns:1fr}.risk-column{border-right:0;border-bottom:1px solid #DDE1E7}.risk-column:last-child{border-bottom:0}
    .why-grid{grid-template-columns:1fr 1fr}.faq-shell{grid-template-columns:1fr;gap:38px}
    .final-actions{flex-direction:row;min-width:0}.final-cta-inner{gap:34px}
    .term-network{margin:0 auto}
    .connected-flow{display:flex;flex-wrap:wrap}.connected-arrow{display:block!important}
  }

  @media (max-width:640px){
    .shell{width:calc(100% - 40px)}
    .section{padding:68px 0}.hero{padding:72px 0 64px}
    h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}
    p{font-size:17px}.hero-lede,.body-large,.section-intro{font-size:18px}
    .hero-copy{text-align:center}.hero-copy>p{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-actions .btn{width:100%}
    .sticky-title h2,.safety-copy h2,.hmi-copy h2,.twin-block h2,.languages-grid h2,.terminology-grid h2{max-width:100%}
    .equipment-note{padding:20px 20px}.sop-panel{padding:26px 24px}
    .hero-art{margin-top:10px}.hero-art svg text{display:none}
    .section-heading.centered{text-align:center}.section-heading{margin-bottom:36px}.section-intro{max-width:100%}
    .proof-grid{grid-template-columns:1fr}.proof-item{border-right:0;border-bottom:1px solid #E6E9ED!important;min-height:auto;padding:20px 4px}.proof-item:last-child{border-bottom:0!important}.proof-item p{font-size:16px}
    .lifecycle-flow{grid-template-columns:1fr;border-top:1px solid #D7DCE2}.life-stage{border-right:0!important;border-bottom:1px solid #D7DCE2!important;padding:24px 4px}.life-stage:last-child{border-bottom:0!important}.life-stage p{font-size:17px}
    .two-col-list,.sop-list,.safety-list,.equipment-grid{grid-template-columns:1fr}.list-row,.list-row:nth-child(odd),.list-row:nth-child(even),.sop-item,.sop-item:nth-child(odd),.sop-item:nth-child(even){padding-left:0;padding-right:0;border-left:0}.equipment-group{border-right:0!important;border-bottom:1px solid #E3D7DC!important}.equipment-group:last-child{border-bottom:0!important}.equipment-group li,.sop-item,.safety-row{font-size:17px}
    .safety-list{padding:10px 24px}.safety-row:nth-last-child(2){border-bottom:1px solid #ECE5E8}
    .training-row{grid-template-columns:48px 1fr;gap:16px;padding:24px 0}.training-row p{font-size:17px}
    .workflow-panel{padding:26px 22px}.step-copy{font-size:16px}.step-line{display:none}
    .mockup-stats{grid-template-columns:1fr}.mockup-alert p{font-size:16px}.mockup-top{padding:16px 18px}.mockup-body{padding:18px}.mockup-chart{padding:15px}
    .market-row{grid-template-columns:1fr;gap:8px;padding:22px 0}.market-row p{font-size:17px}
    .twin-block{padding:28px 24px}.twin-block h2,.compact-twins .twin-block h2{font-size:30px}
    .why-grid{grid-template-columns:1fr;border-left:0}.why-item{border-left:1px solid #DDE1E7}.why-item p,.related-row p{font-size:17px}
    .risk-column{padding:28px 24px}
    .term-network{height:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px}.term-network svg{display:none}.term-center{position:static;transform:none;grid-column:1/-1;width:100%;height:auto;border-radius:20px;padding:20px;flex-direction:row}.term-node{position:static!important;white-space:normal;text-align:center;border-radius:16px;display:flex;align-items:center;justify-content:center;min-height:58px;font-size:16px}
    .language-cloud{gap:9px}.language-cloud span{font-size:16px;padding:9px 12px}
    .connected-flow{display:grid;grid-template-columns:1fr 30px;justify-content:stretch;gap:10px}.connected-node{width:100%;text-align:left}.connected-arrow{transform:rotate(90deg);text-align:center}.connected-arrow:last-of-type{display:none!important}.connected-base{justify-content:flex-start}.connected-base span{font-size:14px;border-right:0;border-bottom:1px solid #CDD2D8;width:100%;padding:7px 4px}.connected-base span:last-child{border-bottom:0}
    .related-row{grid-template-columns:1fr 32px;gap:12px;padding:21px 0}.related-row:hover{padding-left:0}.faq-panel{padding:0 22px}.faq-title{text-align:left}.faq-title h2{font-size:30px}summary{font-size:17px;padding:21px 0}.faq-answer{padding-right:0}.faq-answer p{font-size:17px}
    .final-cta{text-align:center;padding:68px 0}.final-cta h2{font-size:32px}.final-actions{flex-direction:column}.final-actions .btn{width:100%}
  }

  @media (max-width:360px){
    .shell{width:calc(100% - 40px)}
    h1{font-size:36px}.hero-actions{gap:10px}.btn{padding-left:18px;padding-right:18px}
    .training-row{grid-template-columns:1fr}.icon-box{width:48px;height:48px}
    .term-network{grid-template-columns:1fr}.term-center{grid-column:1}
    .equipment-note{display:block}.equipment-note-icon{margin:0 0 10px}
    .workflow-panel,.sop-panel,.faq-panel,.twin-block{border-radius:22px}
    .language-cloud span{max-width:100%;white-space:normal}
  }
`;
