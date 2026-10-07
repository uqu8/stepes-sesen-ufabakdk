import React, { useState } from "react";

const links = {
  quote: "https://www.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  industrial: "https://www.stepes.com/industrial-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  mining: "https://www.stepes.com/mining-translation-services/",
  supplyChain: "https://www.stepes.com/supply-chain-translation/",
  steel: "https://www.stepes.com/steel-translation-services/",
  aluminum: "https://www.stepes.com/aluminum-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  safety: "https://www.stepes.com/safety-document-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  heavyEquipment: "https://www.stepes.com/heavy-equipment-translation-services/",
  mro: "https://www.stepes.com/mro-translation-services/",
  automation: "https://www.stepes.com/industrial-automation-translation/",
  industry40: "https://www.stepes.com/manufacturing-translation-services/industry-4-0-translation/",
  esg: "https://www.stepes.com/esg-translation-services/",
  ai: "https://www.stepes.com/ai-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  languages: "https://www.stepes.com/translation-languages/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
};

const valueChain = [
  ["01", "Raw Materials & Feedstock", "Ores, concentrates, bauxite, scrap, recycled metals, ferroalloys, raw-material specifications, supplier requirements, procurement documentation, quality information, and logistics content."],
  ["02", "Smelting & Refining", "Furnace operations, melting and reduction, refining procedures, melt handling, casting operations, process controls, equipment documentation, maintenance, safety, and operator training."],
  ["03", "Alloying & Metallurgy", "Chemical composition, alloy development, metallurgical properties, microstructure, heat treatment, material performance, and quality requirements."],
  ["04", "Forming & Processing", "Rolling, extrusion, drawing, forging, stamping, heat treatment, coating, finishing, and the production information used to control these processes."],
  ["05", "Fabrication & Machining", "Cutting, bending, forming, welding, machining, CNC processes, assembly, joining, grinding, finishing, and surface treatment."],
  ["06", "Quality & Testing", "Inspection documentation, laboratory methods, mechanical testing, metallography, non-destructive testing, material certificates, QA/QC procedures, and supplier quality content."],
  ["07", "Distribution & Global Trade", "Product specifications, order documentation, certificates, commercial materials, logistics information, customer requirements, export/import content, and international sales communications."],
  ["08", "Recycling & Circularity", "Scrap collection, sorting, processing, recovery, recycled-content data, material traceability, lifecycle information, and circular-economy programs."],
];

const materialGroups = [
  ["Ferrous Metals", ["Carbon steel", "Stainless steel", "Alloy steel", "Tool steel", "Electrical steel", "Specialty steels", "Cast iron", "Other iron-based materials"]],
  ["Aluminum & Light Metals", ["Primary aluminum", "Aluminum alloys", "Wrought aluminum", "Cast aluminum", "Magnesium", "Titanium", "Lightweight engineered metals"]],
  ["Base & Non-Ferrous Metals", ["Copper", "Nickel", "Zinc", "Tin", "Lead", "Other non-ferrous metals"]],
  ["Specialty Metals & Alloys", ["Nickel-based alloys", "Titanium alloys", "Superalloys", "Ferroalloys", "Heat-resistant alloys", "Corrosion-resistant alloys", "Engineered metallic materials"]],
  ["Precious Metals", ["Gold", "Silver", "Platinum", "Palladium", "Other platinum-group metals"]],
];

const contentTypes = [
  {
    icon: "doc",
    title: "Technical & Engineering Documentation",
    text: "Translate the information used to specify materials, engineer processes, design equipment, manufacture products, and communicate technical performance.",
    items: ["Engineering specifications", "Material specifications", "Technical datasheets", "Engineering reports", "Product specifications", "Bills of materials", "Drawings and annotations", "Schematics", "Test specifications", "Design documentation", "Equipment documentation", "Technical proposals"],
    link: ["Engineering Translation Services", links.engineering],
  },
  {
    icon: "gear",
    title: "Production & Operations Content",
    text: "Give operators and production teams clear multilingual procedures for manufacturing and processing activities.",
    items: ["Standard operating procedures", "Work instructions", "Process sheets", "Production procedures", "Operating instructions", "Setup and changeover procedures", "Process-control documentation", "Plant procedures", "Equipment instructions", "Production checklists", "Shift documentation", "Operational reference materials"],
  },
  {
    icon: "check",
    title: "Quality & Materials Documentation",
    text: "Support quality organizations with accurate translation of documents containing material identities, measured values, acceptance criteria, and traceability information.",
    items: ["Material test reports", "Mill test reports", "Mill certificates", "Certificates of analysis", "Inspection reports", "Laboratory reports", "Test methods", "Quality manuals", "Inspection procedures", "Supplier quality requirements", "Nonconformance documentation", "Corrective and preventive action content"],
  },
  {
    icon: "shield",
    title: "Safety & Environmental Content",
    text: "Provide multilingual workers, contractors, technicians, and plant personnel with clear safety and environmental information.",
    items: ["Safety procedures", "Equipment warnings", "Hazard communications", "Safety Data Sheets", "Lockout/tagout procedures", "PPE instructions", "Emergency procedures", "Environmental procedures", "Incident documentation", "Contractor safety requirements", "Safety training", "Workplace signage"],
    link: ["Safety Document Translation Services", links.safety],
  },
  {
    icon: "chain",
    title: "Commercial & Supply Chain Content",
    text: "Translate the information that connects global suppliers, operations, customers, distributors, and markets.",
    items: ["Requests for quotation", "Supplier specifications", "Purchase documentation", "Customer specifications", "Product catalogs", "Sales literature", "Technical marketing content", "Distributor materials", "Logistics instructions", "Import/export documentation", "Procurement content", "Customer communications"],
  },
  {
    icon: "play",
    title: "Training & Workforce Content",
    text: "Create multilingual training experiences for operators, technicians, engineers, service personnel, contractors, distributors, and other global employees.",
    items: ["Operator training", "Technician training", "Safety training", "Onboarding programs", "Technical eLearning", "Process training", "Instructor-led materials", "Video and subtitles", "Assessments", "Reference guides", "Multimedia training", "LMS content"],
    link: ["eLearning Translation Services", links.elearning],
  },
];

const metallurgyGroups = [
  ["Composition & Material Properties", ["Alloy composition", "Carbon content", "Trace elements and impurities", "Tensile and yield strength", "Elongation and hardness", "Toughness and ductility", "Fatigue and wear resistance", "Thermal and electrical properties", "Corrosion resistance"]],
  ["Metallurgical Processes", ["Annealing and normalizing", "Quenching and tempering", "Solution treatment", "Age and precipitation hardening", "Case hardening", "Carburizing and nitriding", "Stress relieving", "Other thermal treatments"]],
  ["Structure & Performance", ["Grain and crystal structure", "Metallurgical phases", "Microstructure", "Phase transformation", "Fracture behavior", "Corrosion mechanisms", "Surface properties", "Material failure", "Performance characteristics"]],
  ["Metal Production & Processing", ["Casting", "Rolling", "Forging", "Extrusion", "Drawing", "Stamping", "Machining", "Welding and brazing", "Coating, plating, and finishing"]],
];

const protectedData = ["Material grades", "Alloy designations", "Standard identifiers", "Product codes", "Part numbers", "Heat numbers", "Lot and batch numbers", "Chemical compositions", "Dimensions", "Tolerances", "Temperatures", "Pressures", "Hardness scales", "Mechanical-property values", "Test results", "Units of measurement", "Equations and formulas", "Tables and charts", "Cross-references"];

const equipment = ["Blast furnaces", "Electric arc furnaces", "Ladle furnaces", "Melting and holding furnaces", "Continuous casting systems", "Rolling mills", "Plate mills", "Tube and pipe mills", "Extrusion presses", "Forging presses", "Stamping presses", "CNC machinery", "Cutting equipment", "Welding systems", "Grinding equipment", "Finishing equipment", "Heat-treatment systems", "Pickling and coating lines", "Material handling systems", "Inspection systems", "Laboratory and testing equipment"];
const equipmentContent = ["Installation manuals", "Operator manuals", "Maintenance manuals", "Service documentation", "Troubleshooting guides", "Parts catalogs", "Safety instructions", "Equipment labels", "HMI content", "Alarm and fault messages", "Service bulletins", "Technician training", "Technical specifications", "Commissioning documentation"];

const qualityGroups = [
  ["Material Certification", ["Material test reports", "Mill test reports", "Mill certificates", "Certificates of analysis", "Certificates of conformity", "Product certifications", "Material declarations"]],
  ["Testing & Laboratory", ["Chemical analysis", "Tensile testing", "Hardness testing", "Impact testing", "Fatigue testing", "Metallographic analysis", "Corrosion testing", "Dimensional testing", "Laboratory procedures", "Test reports"]],
  ["Inspection & NDT", ["Visual inspection", "Ultrasonic testing", "Radiographic testing", "Magnetic particle testing", "Liquid penetrant testing", "Eddy current testing", "Dimensional inspection", "Inspection plans and reports"]],
  ["Quality Systems", ["Quality manuals", "Inspection procedures", "Supplier quality requirements", "Audit documentation", "Nonconformance reports", "Corrective-action documentation", "Root-cause analysis", "Acceptance criteria"]],
];

const digitalOps = [
  ["HMI & SCADA", "Menus and controls, machine states, process parameters, alarm messages, warnings, operator prompts, setup guidance, maintenance notifications, and troubleshooting content."],
  ["MES & Production Systems", "Production schedules, work queues, process instructions, material status, traceability, quality status, production reporting, and operator workflows."],
  ["Laboratory & Quality Systems", "Laboratory information management systems, inspection systems, testing applications, quality dashboards, and reporting environments."],
  ["ERP & Supply Chain Platforms", "International procurement, materials planning, inventory, logistics, supplier management, customer orders, and commercial workflows."],
  ["IIoT & Predictive Maintenance", "Equipment dashboards, sensor labels, diagnostic messages, condition-monitoring information, maintenance alerts, performance reports, and remote-service interfaces."],
];

const sustainability = [
  ["Climate & Carbon Content", ["Carbon and emissions reporting", "Decarbonization strategies", "Transition plans", "Energy-related information", "Process-emissions documentation", "Product carbon information", "Environmental performance data", "CBAM-related content"]],
  ["Lifecycle & Environmental Information", ["Lifecycle assessments", "Lifecycle inventory information", "Environmental Product Declarations", "Product environmental information", "Resource and energy data", "Environmental reports", "Customer sustainability information"]],
  ["Circularity & Recycling", ["Recycled-content information", "Scrap and recovery programs", "Circular-economy initiatives", "Recycling procedures", "Secondary-material documentation", "Material recovery content", "Reuse and circularity reporting"]],
  ["Responsible Sourcing & Traceability", ["Responsible sourcing policies", "Supplier sustainability information", "Due diligence content", "Chain-of-custody information", "Supplier questionnaires", "Material origin information", "Digital Product Passport-related content", "Customer product-data systems"]],
];

const commerce = [
  ["Supplier & Procurement Content", ["Supplier specifications", "Requests for quotation", "Purchase requirements", "Supplier onboarding", "Quality requirements", "Technical questionnaires", "Procurement communications"]],
  ["Logistics & Distribution", ["Shipping documentation", "Handling instructions", "Warehouse content", "Packaging information", "Inventory documentation", "Logistics instructions", "Distribution materials"]],
  ["Customer & Commercial Content", ["Customer specifications", "Product datasheets", "Sales documentation", "Catalogs", "Distributor communications", "Technical proposals", "Customer support content"]],
  ["International Trade", ["Import/export documentation", "Trade-related correspondence", "Commercial agreements", "Regulatory information", "Market documentation", "Technical trade content"]],
];

const workflows = [
  {
    title: "Expert-Led Translation",
    intro: "For technically complex, safety-sensitive, novel, customer-facing, or business-critical materials where professional linguistic and technical judgment are especially important.",
    suited: ["Metallurgical documentation", "Safety-sensitive procedures", "Novel engineering content", "Critical specifications", "Customer-facing technical content", "Contracts and commercial agreements", "High-visibility product documentation"],
    flow: ["Technical translator", "Professional review", "QA", "Customer approval"],
  },
  {
    title: "AI + Expert Review",
    intro: "For large or recurring technical documentation where approved terminology, translation memory, AI-enabled translation, and technical post-editing can improve efficiency while maintaining controlled quality.",
    suited: ["Recurring manuals", "Standard operating procedures", "Maintenance documentation", "Product families", "Established work instructions", "Technical updates", "Repetitive specifications"],
    flow: ["AI + TM + terminology", "Technical post-editing", "QA", "Approval"],
  },
  {
    title: "High-Volume Operational Translation",
    intro: "For suitable internal, operational, supplier, and knowledge content that benefits from faster multilingual availability with review configured to the intended audience and risk.",
    suited: ["Internal knowledge content", "Routine supplier communications", "Operational updates", "Internal support information", "High-volume reference content"],
    flow: ["Controlled AI translation", "Automated quality checks", "Targeted human review"],
  },
];

const terminologyFlow = ["Material Specification", "Engineering Drawing", "Production Procedure", "HMI / MES", "Work Instruction", "Quality Report", "Training", "Maintenance", "Product Datasheet"];

const fileGroups = [
  ["Business & Technical Documents", ["Microsoft Word", "Microsoft Excel", "PowerPoint", "PDF", "Technical reports", "Specifications", "Data tables"]],
  ["Publishing & Graphics", ["Adobe InDesign", "Adobe Illustrator", "FrameMaker", "Layered graphics", "Diagrams", "Technical illustrations", "Publication layouts"]],
  ["Structured Content", ["XML", "DITA", "HTML", "Content-management exports", "Database exports", "Structured technical content"]],
  ["Engineering Content", ["CAD-exported text", "Drawing annotations", "Schematics", "Tables", "Technical diagrams", "BOMs"]],
  ["Digital & Training Content", ["Software resources", "HMI strings", "SCORM packages", "Multimedia", "Video", "Subtitles", "Courseware"]],
];

const integrityItems = ["Formulas", "Tags", "Variables", "Product codes", "Non-translatable identifiers", "Measurements", "Tables", "Cross-references", "Links", "Layout", "Language-specific formatting"];

const enterprise = [
  ["Centralized Translation Management", "Coordinate files, languages, projects, schedules, stakeholders, and deliverables through one managed environment rather than fragmented local processes."],
  ["Translation Memory", "Reuse approved translations across product families, document revisions, recurring procedures, and future projects."],
  ["Enterprise Terminology", "Maintain approved metallurgical, materials, equipment, quality, safety, product, and commercial language across business units and markets."],
  ["Review & Approval", "Support engineering, quality, technical, regulatory, regional, customer, and business review with structured feedback and consolidated changes."],
  ["Workflow Automation", "Connect recurring translation needs with content-management systems, technical documentation environments, applications, repositories, and enterprise workflows where appropriate."],
  ["Continuous Improvement", "Carry approved reviewer decisions, corrections, terminology updates, and translation memory forward so each project strengthens the next."],
];

const languageGroups = [
  ["Europe", "German · French · Italian · Spanish · Portuguese · Dutch · Polish · Czech · Romanian · Swedish · Danish · Finnish · Norwegian and additional European languages"],
  ["Asia-Pacific", "Simplified Chinese · Traditional Chinese · Japanese · Korean · Vietnamese · Thai · Indonesian · Malay · Hindi and additional regional languages"],
  ["Middle East", "Arabic · Turkish · Hebrew · Persian and additional regional language requirements"],
  ["Americas & Global Markets", "Latin American Spanish · Brazilian Portuguese · Canadian French · English-market adaptation and multilingual programs spanning global operations"],
];

const whyStepes = [
  ["Metals & Engineering Expertise", "Professional linguists and reviewers are matched according to language pair, content type, and relevant technical subject matter."],
  ["ISO-Certified Quality", "Structured translation, review, and quality processes support consistent delivery across individual projects and ongoing enterprise programs."],
  ["AI + Human Workflows", "Apply professional human translation, AI-assisted translation, translation memory, terminology management, and human review according to content complexity and risk."],
  ["Technical Data Protection", "Quality checks help identify issues involving terminology, numbers, units, protected identifiers, tags, variables, formatting, and technical structure."],
  ["Enterprise Language Assets", "Build translation memory and approved terminology that can be reused across specifications, operations, equipment, quality, training, and product content."],
  ["Global Scale", "Support one technical document, a multilingual product launch, or an ongoing translation program spanning plants, suppliers, customers, and more than 100 languages."],
];

const related = [
  ["Industrial Translation Services", "Technical, operational, safety, software, training, maintenance, and business content across global industrial operations.", links.industrial],
  ["Steel Translation Services", "Steelmaking, mills, processing, equipment, quality, technical documentation, steel products, and global steel trade.", links.steel],
  ["Aluminum Translation Services", "Aluminum production, processing, fabrication, product applications, recycling, and international markets.", links.aluminum],
  ["Mining Translation Services", "Mineral exploration, extraction, processing, mining equipment, safety, environmental programs, and mine-to-market operations.", links.mining],
  ["Manufacturing Translation Services", "Engineering, supplier, production, quality, safety, software, training, product, and customer content across the manufacturing lifecycle.", links.manufacturing],
  ["Engineering Translation Services", "Engineering specifications, drawings, reports, test documentation, technical design content, and equipment information.", links.engineering],
  ["Heavy Equipment Translation Services", "Complex industrial machinery used in mining, construction, energy, material handling, and other heavy-duty applications.", links.heavyEquipment],
  ["MRO Translation Services", "Maintenance, repair, operations, spare parts, service documentation, troubleshooting, technician training, and aftermarket content.", links.mro],
];

const faqs = [
  ["What are metal translation services?", "Metal translation services cover the translation and localization of technical, engineering, operational, quality, safety, software, training, commercial, sustainability, and supply-chain content used throughout the metals industry. This can include metallurgical specifications, technical datasheets, operating procedures, equipment manuals, mill test reports, inspection records, production software, work instructions, training courses, product documentation, sustainability reports, supplier content, and customer specifications. Specialized metals translation requires both linguistic expertise and careful handling of technical terminology, material designations, numerical information, units, processes, and engineering context."],
  ["What types of metals content can Stepes translate?", "Stepes translates content across raw materials, metallurgy, smelting, refining, metal production, processing, fabrication, machining, quality control, equipment, maintenance, software, workforce training, supply chains, sustainability, and global trade. Typical documents include engineering specifications, SOPs, work instructions, manuals, drawings, technical reports, material certificates, inspection reports, test documentation, product datasheets, quality materials, training content, software interfaces, supplier requirements, and commercial documents."],
  ["Does Stepes provide steel and aluminum translation services?", "Yes. Stepes supports both steel and aluminum translation as part of our broader metals industry capabilities. Our steel translation services cover ironmaking, steelmaking, continuous casting, rolling, steel processing, mill operations, steel products, equipment, testing, quality, and international trade. Our aluminum translation capabilities span bauxite and alumina through primary production, alloying, casting, rolling, extrusion, fabrication, finishing, recycling, and downstream applications."],
  ["Can Stepes translate metallurgy and materials engineering content?", "Yes. Stepes provides metallurgy translation services for materials engineering content involving alloy composition, mechanical properties, heat treatment, microstructure, corrosion, casting, rolling, forging, extrusion, machining, welding, testing, and other specialized subjects. Professional linguists are selected according to the language pair and technical domain, while terminology management, translation memory, quality assurance, and professional review help maintain consistency across complex technical materials."],
  ["Can Stepes translate mill test reports and material certificates?", "Yes. Stepes translates mill test reports, material test reports, mill certificates, certificates of analysis, test reports, inspection documentation, material declarations, and related quality records. These documents often contain material grades, heat numbers, chemical compositions, mechanical properties, test values, units, and traceability information, so translation workflows can include additional checks for protected technical data and structured content in addition to linguistic quality."],
  ["Can Stepes translate HMI, SCADA, MES, and metals production software?", "Yes. Stepes localizes language-bearing content within HMI, SCADA, MES, laboratory, quality, maintenance, ERP, supply-chain, IIoT, and other industrial software environments. This can include menus, operator prompts, alarms, warnings, machine states, diagnostic messages, maintenance notifications, production workflows, quality information, and reporting interfaces."],
  ["How does Stepes use AI for metals translation?", "Stepes uses AI as part of a controlled translation workflow rather than applying the same level of automation to every document. Technically complex, safety-sensitive, novel, or high-risk content can follow an expert-led professional translation and review process. Large recurring documentation sets may benefit from AI-assisted translation combined with translation memory, approved terminology, technical post-editing, and professional QA. Suitable internal or operational content can use greater automation with a review level aligned to its audience and risk."],
  ["How does Stepes maintain terminology consistency across metals content?", "Stepes combines terminology management and translation memory to help maintain approved language across technical documents, equipment interfaces, production procedures, quality systems, training, maintenance, product information, and other content. Terminology management controls important concepts such as material names, grades, alloys, processes, component names, equipment terms, warnings, and inspection language, while translation memory preserves previously approved bilingual sentences for appropriate reuse."],
  ["Which languages does Stepes support for metal translation?", "Stepes provides metal translation services in more than 100 languages, including German, French, Spanish, Italian, Portuguese, Polish, Czech, Dutch, Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Arabic, Turkish, Brazilian Portuguese, Canadian French, and many others. Language resources are matched according to both the required language pair and the technical subject matter of the project."],
];

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    doc: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2.1-.6a7.8 7.8 0 0 0-.7-1.7l1.1-1.9-2.1-2.1-1.9 1.1a7.8 7.8 0 0 0-1.7-.7L11 2H8l-.6 2.1a7.8 7.8 0 0 0-1.7.7L3.8 3.7 1.7 5.8l1.1 1.9a7.8 7.8 0 0 0-.7 1.7L0 10v3l2.1.6c.2.6.4 1.1.7 1.7l-1.1 1.9 2.1 2.1 1.9-1.1c.5.3 1.1.5 1.7.7L8 21h3l.6-2.1c.6-.2 1.1-.4 1.7-.7l1.9 1.1 2.1-2.1-1.1-1.9c.3-.5.5-1.1.7-1.7z" transform="translate(2 1) scale(.83)"/></>,
    check: <><path d="M4 12l5 5L20 6"/><path d="M4 4h16v16H4z"/></>,
    shield: <><path d="M12 3l7 3v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6z"/><path d="M9 12l2 2 4-5"/></>,
    chain: <><path d="M9 15l6-6"/><path d="M7.5 17.5l-2 2a3.5 3.5 0 1 1-5-5l3-3a3.5 3.5 0 0 1 5 0"/><path d="M16.5 6.5l2-2a3.5 3.5 0 1 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/></>,
  };
  return <svg {...common}>{paths[name] || paths.doc}</svg>;
}

function SectionHead({ eyebrow, title, intro, dark = false, left = false }) {
  return <div className={`section-head ${left ? "section-head-left" : ""}`}>
    {eyebrow && <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</div>}
    <h2>{title}</h2>
    {intro && <p className={`lead ${dark ? "lead-dark" : ""}`}>{intro}</p>}
  </div>;
}

function EditorialLink({ href, children, className = "" }) {
  return <a className={`editorial-link ${className}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function BulletList({ items, dark = false, compact = false }) {
  return <ul className={`bullet-list ${dark ? "bullet-list-dark" : ""} ${compact ? "compact" : ""}`}>
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>;
}

function HeroArt() {
  return <svg className="hero-art" viewBox="0 0 520 480" role="img" aria-label="Abstract line illustration of a metal coil, molten metal processing, and material microstructure">
    <g fill="none" stroke="#505965" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 370h450" opacity=".5"/>
      <path d="M64 334h144l18 36H48z"/>
      <circle cx="134" cy="290" r="66"/>
      <circle cx="134" cy="290" r="32"/>
      <path d="M68 290h132M134 224v132" opacity=".42"/>
      <path d="M235 345h104v25H228z"/>
      <path d="M252 147c18-21 50-26 74-11l33 21-47 75-33-20c-27-17-39-43-27-65z"/>
      <path d="M337 194c32 20 56 33 74 40"/>
      <path d="M407 230c7 17 4 37-7 52"/>
      <path d="M398 282c-12 10-25 18-42 25"/>
      <path d="M369 224c-13 28-25 57-33 89" opacity=".75"/>
      <path d="M339 315c-5 17-5 29 2 43"/>
      <path d="M322 370h95l-8-47h-77z"/>
      <path d="M350 323c3-24 6-42 10-53" stroke="#C11D63" strokeWidth="3"/>
      <path d="M358 271c1-7 4-13 8-18" stroke="#C11D63" strokeWidth="3"/>
      <circle cx="417" cy="103" r="23"/>
      <circle cx="461" cy="128" r="17"/>
      <circle cx="390" cy="140" r="15"/>
      <circle cx="447" cy="84" r="11"/>
      <path d="M399 118l21-7M436 103l16-12M432 118l19 7M401 126l-5 12" opacity=".55"/>
      <path d="M79 190c39-56 100-89 170-89" opacity=".32"/>
      <path d="M89 170c31-36 72-57 120-66" opacity=".22"/>
    </g>
    <g fill="#FDF2F7">
      <circle cx="350" cy="323" r="7"/><circle cx="134" cy="290" r="8"/>
    </g>
  </svg>;
}

export default function MetalTranslationServices60() {
  const [openFaq, setOpenFaq] = useState(0);

  return <main className="metals-page">
    <style>{styles}</style>

    <section className="hero section-white">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">METALS &amp; MATERIALS</div>
          <h1>Metal Translation Services for the Global Metals Industry</h1>
          <p className="hero-lead">Translate technical, operational, quality, safety, software, training, sustainability, and commercial content across the metals value chain. Stepes combines professional linguists, metallurgy and engineering expertise, controlled terminology, AI-enabled workflows, and technical quality assurance to help metals companies communicate accurately across global operations and markets.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={links.quote}>Get a Quote</a>
            <a className="btn btn-secondary" href={links.contact}>Contact Sales</a>
          </div>
          <div className="hero-trust" aria-label="Service highlights">
            <span>100+ Languages</span><span>ISO-Certified Quality</span><span>Metals Expertise</span><span>AI + Human Workflows</span>
          </div>
        </div>
        <div className="hero-visual"><HeroArt /></div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell overview-grid">
        <div>
          <h2>Technical Translation Built for the Metals Industry</h2>
        </div>
        <div className="overview-copy">
          <p className="lead">Metals companies create highly specialized content across materials engineering, production, processing, fabrication, testing, equipment operation, supply chains, environmental performance, and international trade. Translating this information accurately requires more than linguistic fluency.</p>
          <p>Material grades, metallurgical properties, process terminology, measurements, test values, equipment names, warnings, and technical specifications must remain consistent across languages and content types.</p>
          <p>Stepes provides specialized <strong>metal translation services</strong> for steelmakers, aluminum producers, processors, fabricators, equipment manufacturers, service centers, suppliers, distributors, engineering teams, and other organizations throughout the global metals industry.</p>
          <p>As part of our broader industrial translation capabilities, Stepes supports multilingual content from raw materials and metallurgy through production, quality, maintenance, logistics, customer support, and product delivery. Professional linguists are matched to the technical subject matter, while translation memory, terminology management, AI-enabled workflows, and structured quality controls help maintain consistency across recurring documentation and global operations.</p>
          <p>Whether you are translating a metallurgical specification, mill test report, operating procedure, HMI interface, equipment manual, training course, customer datasheet, or sustainability report, Stepes configures the translation workflow around the content's purpose, complexity, audience, and quality requirements.</p>
          <div className="link-row"><EditorialLink href={links.industrial}>Industrial Translation Services</EditorialLink><EditorialLink href={links.technical}>Technical Translation Services</EditorialLink></div>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead eyebrow="END-TO-END COVERAGE" title="Translation Across the Metals Value Chain" intro="Metal production connects raw materials, advanced engineering, industrial processing, fabrication, quality systems, logistics, recycling, and global commerce. Stepes supports multilingual communication throughout this complete lifecycle." />
        <div className="sequence-grid">
          {valueChain.map(([num, title, text], idx) => <article className="sequence-item" key={title}>
            <div className="sequence-num">{num}</div>
            <div><h3>{title}</h3><p>{text}</p>{idx === 0 && <EditorialLink href={links.mining}>Mining Translation Services</EditorialLink>}</div>
          </article>)}
        </div>
        <div className="section-action"><EditorialLink href={links.supplyChain}>Supply Chain Translation Services</EditorialLink></div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell">
        <SectionHead title="Translation Expertise Across Metals and Alloys" intro="Metals terminology can vary substantially by material, composition, processing method, standard, application, and market. Stepes supports translation programs across ferrous, non-ferrous, specialty, lightweight, and precious metals." />
        <div className="material-grid">
          {materialGroups.map(([title, items]) => <div className="material-group" key={title}><h3>{title}</h3><BulletList items={items} compact /></div>)}
        </div>
        <div className="section-action two-links"><EditorialLink href={links.steel}>Steel Translation Services</EditorialLink><EditorialLink href={links.aluminum}>Aluminum Translation Services</EditorialLink></div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead eyebrow="MULTILINGUAL CONTENT" title="Translate Technical, Operational, Quality, and Commercial Content" intro="Metals companies manage complex information across engineering, production, quality, workforce, supply chain, and customer operations. Stepes brings these content streams into one coordinated multilingual workflow." />
        <div className="content-grid">
          {contentTypes.map((c) => <article className="content-panel" key={c.title}>
            <div className="icon-box"><Icon name={c.icon}/></div>
            <div className="content-panel-body"><h3>{c.title}</h3><p>{c.text}</p><BulletList items={c.items} compact />{c.link && <EditorialLink href={c.link[1]}>{c.link[0]}</EditorialLink>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="shell dark-grid">
        <div className="dark-intro">
          <div className="eyebrow eyebrow-dark">TECHNICAL PRECISION</div>
          <h2>Precision Translation for Metallurgy and Materials Engineering</h2>
          <p className="lead lead-dark">Metallurgy combines materials science, chemistry, physics, engineering, manufacturing, and quality control. Small differences in terminology can change how engineers interpret material composition, processing conditions, test results, or product performance.</p>
          <p>Stepes provides specialized metallurgy translation services for technical documentation covering metallic materials, alloys, heat treatment, microstructure, mechanical properties, corrosion, processing, testing, and manufacturing.</p>
          <EditorialLink href={links.engineering} className="editorial-link-dark">Engineering Translation Services</EditorialLink>
        </div>
        <div className="metallurgy-grid">
          {metallurgyGroups.map(([title, items]) => <div className="dark-subpanel" key={title}><h3>{title}</h3><BulletList items={items} dark compact /></div>)}
        </div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell data-grid">
        <div>
          <div className="eyebrow">DATA INTEGRITY</div>
          <h2>Protect Material Grades, Standards, Measurements, and Test Data</h2>
          <p className="lead">Metals documentation often contains information that should remain unchanged or be handled differently from ordinary prose. Material designations, numeric values, standards, formulas, heat numbers, tolerances, units, and test results can carry as much technical meaning as the surrounding language.</p>
          <p>Stepes combines linguistic quality assurance with technical checks designed for complex engineering content.</p>
          <div className="standards-box"><div className="standards-label">Content referencing international standards</div><div className="standards-row"><span>ASTM</span><span>ISO</span><span>EN</span><span>DIN</span><span>JIS</span><span>GB</span><span>ASME</span></div><p>The objective is not to determine regulatory or engineering compliance. It is to preserve the identifiers, terminology, values, references, and technical context used by your teams and customers.</p></div>
        </div>
        <div className="data-panel"><h3>Technical data we help protect</h3><div className="data-list">{protectedData.map((item) => <div key={item}>{item}</div>)}</div><div className="data-note">Technical translation should protect both the <strong>language</strong> and the <strong>engineering data behind it</strong>.</div></div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell twin-sector-grid">
        <article className="sector-panel">
          <h2>Steel &amp; Iron Translation Services</h2>
          <p>Steel remains one of the world's most important engineering and construction materials, with highly specialized terminology spanning raw materials, ironmaking, steelmaking, casting, rolling, finishing, fabrication, testing, distribution, and international trade.</p>
          <p>Stepes provides professional steel translation services for steel producers, mills, equipment manufacturers, processors, service centers, fabricators, suppliers, and customers.</p>
          <div className="tag-cloud">{["Ironmaking", "Blast furnaces", "Electric arc furnaces", "Secondary metallurgy", "Continuous casting", "Hot & cold rolling", "Plate", "Sheet & coil", "Bar & rod", "Tube & pipe", "Stainless steel", "Specialty steels", "Coating & finishing", "Steel trade"].map(x => <span key={x}>{x}</span>)}</div>
          <p>We translate mill procedures, steel specifications, technical manuals, production documentation, safety instructions, quality records, equipment interfaces, training programs, product datasheets, customer specifications, commercial content, and more.</p>
          <EditorialLink href={links.steel}>Explore Steel Translation Services</EditorialLink>
        </article>
        <article className="sector-panel sector-panel-alt">
          <h2>Aluminum and Non-Ferrous Metal Translation Services</h2>
          <p>Aluminum and other non-ferrous metals support global industries ranging from transportation and aerospace to construction, packaging, energy, electrical systems, electronics, and industrial equipment.</p>
          <p>Stepes provides specialized aluminum translation services and multilingual support across the broader non-ferrous metals value chain.</p>
          <div className="tag-cloud">{["Bauxite", "Alumina refining", "Primary aluminum", "Smelting", "Alloying", "Casting", "Rolling", "Extrusion", "Sheet & plate", "Foil", "Fabrication", "Machining", "Surface treatment", "Recycling", "Copper", "Nickel", "Zinc", "Titanium", "Magnesium"].map(x => <span key={x}>{x}</span>)}</div>
          <p>From alloy specifications and production procedures to product documentation and sustainability information, our workflows help protect specialized terminology throughout the material lifecycle.</p>
          <EditorialLink href={links.aluminum}>Explore Aluminum Translation Services</EditorialLink>
        </article>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell">
        <SectionHead title="Translation for Metal Processing and Fabrication Equipment" intro="Metals production depends on complex machinery operating under demanding process, temperature, load, safety, and quality conditions. Stepes translates the technical content used to install, operate, maintain, troubleshoot, and support this equipment worldwide." />
        <div className="equipment-grid">
          <div className="equipment-list"><h3>Equipment Coverage</h3><div className="multi-list">{equipment.map(x => <div key={x}>{x}</div>)}</div></div>
          <div className="equipment-content"><h3>Equipment Content We Translate</h3><BulletList items={equipmentContent}/><div className="link-stack"><EditorialLink href={links.heavyEquipment}>Heavy Equipment Translation Services</EditorialLink><EditorialLink href={links.mro}>MRO Translation Services</EditorialLink></div></div>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead eyebrow="QUALITY CONTROL" title="Translate the Records Behind Material Quality" intro="Quality documentation in the metals industry often carries product identity, chemistry, mechanical properties, inspection results, test values, traceability records, and acceptance criteria. These documents require careful handling of both language and structured technical data." />
        <div className="quality-grid">{qualityGroups.map(([title, items]) => <div className="quality-col" key={title}><h3>{title}</h3><BulletList items={items} compact /></div>)}</div>
        <p className="closing-note">The goal is not simply fluent translation. It is multilingual content that preserves material identities, numerical information, technical relationships, and approved terminology so engineering and quality teams can review it confidently.</p>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell digital-layout">
        <div className="digital-intro">
          <div className="eyebrow">DIGITAL OPERATIONS</div>
          <h2>Localize the Digital Systems Behind Modern Metals Production</h2>
          <p className="lead">Modern metals operations increasingly connect machinery, control systems, production data, laboratories, maintenance systems, supply chains, and enterprise software. Stepes localizes the language-bearing content within these digital environments so global teams can operate them effectively.</p>
          <div className="link-stack"><EditorialLink href={links.automation}>Industrial Automation Translation Services</EditorialLink><EditorialLink href={links.industry40}>Industry 4.0 Translation Solutions</EditorialLink></div>
        </div>
        <div className="system-stack">{digitalOps.map(([title, text]) => <article className="system-row" key={title}><div className="system-node" aria-hidden="true"></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section section-soft sustain-section">
      <div className="shell">
        <SectionHead eyebrow="SUSTAINABILITY & TRACEABILITY" title="Multilingual Content for Lower-Carbon and Circular Metals" intro="Sustainability has become closely connected with metals production, sourcing, product data, customer requirements, recycling, and global trade. Stepes translates and localizes the multilingual content used to document, report, and communicate these programs." />
        <div className="sustain-grid">{sustainability.map(([title, items]) => <div className="sustain-group" key={title}><h3>{title}</h3><BulletList items={items} compact /></div>)}</div>
        <div className="disclaimer">Stepes translates the information companies use to communicate environmental performance and product traceability. Regulatory interpretation and compliance determinations remain with the appropriate customer, legal, engineering, or regulatory teams.</div>
        <div className="section-action"><EditorialLink href={links.esg}>ESG Translation Services</EditorialLink></div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell">
        <SectionHead eyebrow="GLOBAL COMMERCE" title="Connect Metals Supply Chains Across Languages" intro="Global metal supply chains connect mines, refiners, smelters, mills, processors, equipment manufacturers, fabricators, service centers, distributors, logistics providers, OEMs, and end customers across multiple countries and languages." />
        <div className="commerce-grid">{commerce.map(([title, items]) => <div className="commerce-col" key={title}><h3>{title}</h3><BulletList items={items} compact /></div>)}</div>
        <p className="closing-note">Consistent terminology becomes especially important when the same material, grade, component, process, or product is described by engineering, procurement, production, suppliers, sales teams, and customers in different languages.</p>
        <div className="section-action"><EditorialLink href={links.supplyChain}>Supply Chain Translation Services</EditorialLink></div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="shell">
        <SectionHead eyebrow="RIGHT WORKFLOW FOR THE CONTENT" title="AI-Enabled Metals Translation With Expert Oversight" intro="Not every metals document should follow the same translation process. Stepes applies the right combination of professional translation, AI, translation memory, terminology management, technical review, automated quality checks, and customer approval according to how the content will be used." dark />
        <div className="workflow-grid">{workflows.map((w) => <article className="workflow-panel" key={w.title}><h3>{w.title}</h3><p>{w.intro}</p><div className="fit-label">Often used for</div><BulletList items={w.suited} dark compact /><div className="workflow-line" aria-label={`${w.title} workflow`}>{w.flow.map((step, i) => <React.Fragment key={step}><span>{step}</span>{i < w.flow.length - 1 && <b aria-hidden="true">→</b>}</React.Fragment>)}</div></article>)}</div>
        <p className="dark-note">The objective is not to automate every translation. It is to apply automation where it creates value while preserving professional expertise where technical context, risk, and final quality require human judgment.</p>
        <div className="section-action"><EditorialLink href={links.ai} className="editorial-link-dark">AI Translation Services</EditorialLink></div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell terminology-layout">
        <div>
          <div className="eyebrow">CONNECTED LANGUAGE ASSETS</div>
          <h2>One Metals Vocabulary Across Every Content Type</h2>
          <p className="lead">A material grade, alloy name, process step, component, warning, or inspection term may appear throughout many different systems and documents. If each content stream is translated independently, terminology can gradually diverge.</p>
          <p>Stepes helps metals organizations establish and reuse approved terminology across their multilingual content ecosystem.</p>
          <h3 className="minor-title">Control the Terms That Carry Technical Meaning</h3>
          <BulletList items={["Material names", "Grades and designations", "Alloy terminology", "Product names", "Production processes", "Component names", "Equipment terminology", "Inspection terminology", "Safety language", "Warnings and cautions", "Acronyms and abbreviations", "Customer terminology", "Approved market-specific language"]} compact />
          <h3 className="minor-title">Translation Memory for Recurring Content</h3>
          <p>Translation memory preserves previously approved bilingual content so recurring sentences, procedures, specifications, and document updates can build on existing translations rather than starting over. Terminology management governs the words and concepts that must remain consistent; translation memory preserves approved sentence-level content.</p>
          <div className="link-row"><EditorialLink href={links.terminology}>Terminology Management</EditorialLink><EditorialLink href={links.tm}>Translation Memory</EditorialLink></div>
        </div>
        <div className="terminology-map" aria-label="Example of terminology flowing across metals content types">
          {terminologyFlow.map((item, idx) => <React.Fragment key={item}><div className="term-node">{item}</div>{idx < terminologyFlow.length - 1 && <div className="term-arrow" aria-hidden="true">↓</div>}</React.Fragment>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead eyebrow="TECHNICAL FILE ENGINEERING" title="Translate Complex Metal Industry Files Without Breaking Their Structure" intro="Technical translation often involves more than text. Metals documentation may contain tables, drawings, layers, formulas, tags, variables, diagrams, measurements, charts, and structured content that must remain usable after translation." />
        <div className="files-grid">
          <div className="file-groups">{fileGroups.map(([title, items]) => <div className="file-row" key={title}><h3>{title}</h3><div>{items.map(x => <span key={x}>{x}</span>)}</div></div>)}</div>
          <aside className="integrity-panel"><h3>Technical file preparation and QA help protect</h3><BulletList items={integrityItems}/><p>The result is multilingual content that is easier for engineering, quality, documentation, and regional teams to review, publish, integrate, and maintain.</p></aside>
        </div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell enterprise-layout">
        <div className="enterprise-intro"><div className="eyebrow">GLOBAL LANGUAGE OPERATIONS</div><h2>Scale Translation Across Plants, Products, Suppliers, and Markets</h2><p className="lead">A global metals organization may need to coordinate multilingual content across multiple mills, plants, products, engineering groups, suppliers, customers, business units, and regional teams.</p><p>Stepes provides the language technology and program controls needed to manage these activities as one connected translation operation.</p></div>
        <div className="enterprise-rows">{enterprise.map(([title, text]) => <div className="enterprise-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead title="Metal Translation Services in 100+ Languages" intro="Stepes supports metals companies across major production regions, supplier markets, manufacturing locations, service networks, and international customer markets in more than 100 languages." />
        <div className="language-grid">{languageGroups.map(([title, text]) => <div className="language-col" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
        <p className="closing-note">Language coverage is combined with subject-matter resource selection so technical metals content is assigned according to both the required language pair and the relevant technical domain.</p>
        <div className="section-action"><EditorialLink href={links.languages}>Explore All Translation Languages</EditorialLink></div>
      </div>
    </section>

    <section className="section section-white">
      <div className="shell">
        <SectionHead eyebrow="WHY STEPES" title="A Translation Partner Built for Technical Global Content" intro="Metals companies need multilingual information that works across engineering, production, quality, equipment, safety, software, sustainability, supply chains, and customer operations. Stepes combines specialized professional expertise with modern translation technology to support these interconnected requirements." />
        <div className="why-grid">{whyStepes.map(([title, text]) => <article className="why-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="shell">
        <SectionHead eyebrow="EXPLORE RELATED EXPERTISE" title="Connected Translation Solutions for Industrial Operations" intro="Metals production intersects with mining, manufacturing, machinery, engineering, maintenance, automation, safety, sustainability, logistics, and global supply chains. Stepes provides specialized translation solutions across this complete industrial ecosystem." />
        <div className="related-grid">{related.map(([title, text, href]) => <article className="related-card" key={title}><h3>{title}</h3><p>{text}</p><EditorialLink href={href}>Explore {title.replace(" Translation Services", "")}</EditorialLink></article>)}</div>
        <div className="also-row"><span>Also explore</span><EditorialLink href={links.automation}>Industrial Automation</EditorialLink><EditorialLink href={links.industry40}>Industry 4.0</EditorialLink><EditorialLink href={links.technical}>Technical Translation</EditorialLink><EditorialLink href={links.safety}>Safety Translation</EditorialLink><EditorialLink href={links.supplyChain}>Supply Chain Translation</EditorialLink><EditorialLink href={links.esg}>ESG Translation</EditorialLink><EditorialLink href={links.elearning}>eLearning Translation</EditorialLink></div>
      </div>
    </section>

    <section className="section section-white faq-section">
      <div className="shell">
        <SectionHead title="Metal Translation Services FAQs" />
        <div className="faq-panel">{faqs.map(([q, a], idx) => <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={q}>
          <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} aria-expanded={openFaq === idx}><span>{q}</span><span className="faq-plus" aria-hidden="true">{openFaq === idx ? "−" : "+"}</span></button>
          <div className="faq-answer" hidden={openFaq !== idx}><p>{a}</p>{idx === 2 && <div className="link-row"><EditorialLink href={links.steel}>Steel Translation Services</EditorialLink><EditorialLink href={links.aluminum}>Aluminum Translation Services</EditorialLink></div>}{idx === 5 && <EditorialLink href={links.automation}>Industrial Automation Translation Services</EditorialLink>}</div>
        </div>)}</div>
      </div>
    </section>

    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div><h2>Make Your Metals Content Ready for Every Market</h2><p>From metallurgy specifications and production procedures to mill documentation, equipment manuals, quality records, industrial software, training, supply-chain content, and sustainability information, Stepes helps metals companies deliver accurate multilingual content across global operations.</p><p>Combine professional technical expertise, AI-enabled workflows, translation memory, terminology control, and enterprise quality processes to keep your metals content consistent from material specification to finished product.</p></div>
        <div className="cta-actions"><a className="btn btn-primary" href={links.quote}>Get a Quote</a><a className="btn btn-secondary" href={links.contact}>Contact Sales</a></div>
      </div>
    </section>
  </main>;
}

const styles = `
:root{--magenta:#C11D63;--magenta-dark:#A71954;--burgundy:#7A1542;--blush:#FDF2F7;--ink:#20252D;--body:#485162;--muted:#697383;--line:#DDE1E6;--soft:#F6F7F9;--white:#FFFFFF;--dark:#20242B;--dark-2:#292E36;--dark-text:#EEF0F4;--eyebrow-dark:#F2A7C6}
*{box-sizing:border-box}.metals-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--body);background:#fff;line-height:1.62}.metals-page *{box-sizing:border-box}.shell{width:min(100%,1392px);max-width:1392px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section-white{background:#fff}.section-soft{background:var(--soft)}.section-blush{background:var(--blush)}.section-dark{background:var(--dark);color:var(--dark-text)}h1,h2,h3{margin:0;color:var(--ink);font-weight:600;letter-spacing:-.025em;line-height:1.12}.section-dark h2,.section-dark h3{color:#fff}h1{font-size:48px;max-width:760px}h2{font-size:36px}h3{font-size:24px;letter-spacing:-.018em}p{font-size:17px;margin:0 0 18px;color:var(--body)}strong{font-weight:600;color:inherit}.lead{font-size:18px;line-height:1.65;color:var(--body)}.lead-dark,.section-dark p{color:#D9DDE4}.eyebrow{font-size:11px!important;font-weight:600!important;line-height:1.2!important;letter-spacing:.14em!important;text-transform:uppercase;color:var(--magenta)!important;margin:0 0 18px!important}.eyebrow-dark{color:var(--eyebrow-dark)!important}.section-head{max-width:850px;margin:0 auto 56px;text-align:center}.section-head .lead{margin:20px auto 0;max-width:820px}.section-head-left{text-align:left;margin-left:0}.hero{padding:104px 0 88px}.hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);gap:72px;align-items:center}.hero-lead{font-size:18px;max-width:740px;margin:26px 0 0;color:var(--body)}.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px}.btn{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 25px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.2s ease;outline-offset:3px}.btn-primary,.btn-primary:visited{background:var(--magenta);color:#fff!important}.btn-primary:hover,.btn-primary:focus-visible{background:var(--magenta-dark);color:#fff!important;transform:translateY(-1px)}.btn-secondary,.btn-secondary:visited{background:#fff;color:var(--ink);border:1px solid #CFD4DB}.btn-secondary:hover,.btn-secondary:focus-visible{border-color:#AEB5BF;background:#FAFAFB}.hero-trust{display:grid;grid-template-columns:repeat(4,1fr);margin-top:44px;padding-top:24px;border-top:1px solid var(--line);gap:0}.hero-trust span{font-size:16px;color:#606A78;padding:0 15px;border-left:1px solid var(--line);line-height:1.35}.hero-trust span:first-child{padding-left:0;border-left:0}.hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}.hero-art{width:100%;max-width:520px;height:auto}.overview-grid{display:grid;grid-template-columns:minmax(280px,.72fr) minmax(0,1.28fr);gap:92px;align-items:start}.overview-copy{max-width:790px}.link-row,.two-links{display:flex;gap:28px;flex-wrap:wrap;align-items:center}.editorial-link,.editorial-link:visited{display:inline-flex;align-items:center;gap:7px;color:var(--magenta);text-decoration:none;font-size:16px;font-weight:600;line-height:1.4;min-height:34px}.editorial-link span{transition:transform .2s ease}.editorial-link:hover span,.editorial-link:focus-visible span{transform:translateX(3px)}.editorial-link:hover,.editorial-link:focus-visible{text-decoration:underline;text-underline-offset:4px}.editorial-link-dark,.editorial-link-dark:visited{color:var(--eyebrow-dark)}.sequence-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.sequence-item{padding:30px 26px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:290px}.sequence-num{font-size:16px;font-weight:600;color:var(--magenta);margin-bottom:22px}.sequence-item h3{font-size:21px;margin-bottom:14px}.sequence-item p{font-size:16px;margin-bottom:15px}.section-action{margin-top:34px;text-align:center}.material-grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.material-group{padding:30px;border-right:1px solid var(--line)}.material-group:nth-child(5){border-right:0}.material-group h3{font-size:21px;margin-bottom:18px}.bullet-list{list-style:none;margin:0;padding:0}.bullet-list li{font-size:17px;color:var(--body);padding:6px 0 6px 18px;position:relative;line-height:1.5}.bullet-list li:before{content:"";width:5px;height:5px;border-radius:50%;background:#929AA6;position:absolute;left:0;top:16px}.bullet-list.compact li{font-size:16px;padding-top:4px;padding-bottom:4px}.bullet-list.compact li:before{top:14px}.bullet-list-dark li{color:#D9DDE4}.bullet-list-dark li:before{background:#B8BEC8}.content-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}.content-panel{display:grid;grid-template-columns:56px 1fr;gap:20px;padding:34px 30px;border-bottom:1px solid var(--line)}.content-panel:nth-child(odd){border-right:1px solid var(--line)}.icon-box{width:44px;height:44px;border-radius:14px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:#4D5662}.content-panel h3{font-size:22px;margin-bottom:12px}.content-panel p{margin-bottom:14px}.content-panel .bullet-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:24px}.content-panel .editorial-link{margin-top:12px}.dark-grid{display:grid;grid-template-columns:minmax(330px,.8fr) minmax(0,1.2fr);gap:72px;align-items:start}.dark-intro h2{margin-bottom:24px}.dark-intro .editorial-link{margin-top:10px}.metallurgy-grid{display:grid;grid-template-columns:repeat(2,1fr);border:1px solid #3B414A;border-radius:28px;overflow:hidden}.dark-subpanel{padding:30px;border-bottom:1px solid #3B414A;border-right:1px solid #3B414A}.dark-subpanel:nth-child(even){border-right:0}.dark-subpanel:nth-child(n+3){border-bottom:0}.dark-subpanel h3{font-size:21px;margin-bottom:16px}.data-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(440px,1.08fr);gap:84px;align-items:start}.data-grid h2{margin-bottom:22px}.standards-box{margin-top:34px;padding:28px;border-radius:24px;background:var(--soft);border:1px solid var(--line)}.standards-label{font-size:16px;font-weight:600;color:var(--ink);margin-bottom:16px}.standards-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}.standards-row span{font-size:16px;font-weight:600;color:#4B5360;background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 12px}.standards-box p{font-size:16px;margin:0}.data-panel{border:1px solid var(--line);border-radius:28px;padding:34px}.data-panel h3{margin-bottom:22px}.data-list{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.data-list div{font-size:16px;padding:11px 13px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);color:var(--body)}.data-note{margin-top:24px;padding:20px;background:var(--blush);border-radius:18px;font-size:17px}.twin-sector-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.sector-panel{background:#fff;border:1px solid var(--line);border-radius:30px;padding:40px}.sector-panel-alt{background:#FCFBFC}.sector-panel h2{font-size:32px;margin-bottom:20px}.tag-cloud{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0}.tag-cloud span{font-size:16px;color:#4E5764;border:1px solid var(--line);border-radius:999px;padding:6px 11px;background:#fff}.equipment-grid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(320px,.8fr);gap:54px;align-items:start}.equipment-list,.equipment-content{border-top:1px solid var(--line);padding-top:26px}.equipment-list h3,.equipment-content h3{margin-bottom:22px}.multi-list{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line)}.multi-list div{font-size:16px;padding:11px 13px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.link-stack{display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin-top:18px}.quality-grid,.commerce-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.quality-col,.commerce-col{padding:30px 26px;border-right:1px solid var(--line)}.quality-col:last-child,.commerce-col:last-child{border-right:0}.quality-col h3,.commerce-col h3{font-size:21px;margin-bottom:18px}.closing-note{max-width:880px;margin:30px auto 0;text-align:center}.digital-layout{display:grid;grid-template-columns:minmax(320px,.78fr) minmax(0,1.22fr);gap:88px;align-items:start}.digital-intro h2{margin-bottom:22px}.system-stack{border-top:1px solid var(--line)}.system-row{display:grid;grid-template-columns:26px 1fr;gap:20px;padding:24px 0;border-bottom:1px solid var(--line)}.system-node{width:12px;height:12px;border-radius:50%;border:2px solid var(--magenta);margin-top:9px;position:relative}.system-row:not(:last-child) .system-node:after{content:"";position:absolute;left:4px;top:12px;width:1px;height:94px;background:var(--line)}.system-row h3{font-size:21px;margin-bottom:8px}.system-row p{margin:0}.sustain-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.sustain-group{padding:30px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.sustain-group h3{font-size:22px;margin-bottom:16px}.disclaimer{max-width:930px;margin:30px auto 0;padding:18px 22px;border-radius:18px;background:#fff;border:1px solid var(--line);font-size:16px;color:var(--body)}.commerce-grid{margin-top:4px}.workflow-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.workflow-panel{border:1px solid #3C424B;border-radius:26px;padding:30px;background:var(--dark-2)}.workflow-panel h3{font-size:22px;margin-bottom:16px}.workflow-panel p{font-size:17px}.fit-label{font-size:14px;text-transform:uppercase;letter-spacing:.1em;font-weight:600;color:var(--eyebrow-dark);margin:22px 0 8px}.workflow-line{display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:24px;padding-top:20px;border-top:1px solid #414750}.workflow-line span{font-size:16px;font-weight:600;color:#fff;background:#333942;border-radius:999px;padding:7px 10px}.workflow-line b{color:#89919D;font-weight:400}.dark-note{max-width:850px;text-align:center;margin:34px auto 0!important}.terminology-layout{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(330px,.62fr);gap:90px;align-items:start}.terminology-layout h2{margin-bottom:22px}.minor-title{font-size:21px;margin:30px 0 12px}.terminology-map{border:1px solid var(--line);border-radius:30px;padding:28px;background:var(--soft)}.term-node{padding:12px 15px;border-radius:14px;background:#fff;border:1px solid var(--line);font-size:16px;font-weight:600;color:#4B5360;text-align:center}.term-arrow{text-align:center;color:var(--magenta);font-size:20px;line-height:1.4}.files-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(320px,.7fr);gap:50px}.file-groups{border-top:1px solid var(--line)}.file-row{display:grid;grid-template-columns:240px 1fr;gap:24px;padding:24px 0;border-bottom:1px solid var(--line)}.file-row h3{font-size:20px}.file-row>div{display:flex;flex-wrap:wrap;gap:8px}.file-row span{font-size:16px;border:1px solid var(--line);border-radius:999px;background:#fff;padding:6px 10px}.integrity-panel{background:#fff;border:1px solid var(--line);border-radius:28px;padding:30px}.integrity-panel h3{font-size:22px;margin-bottom:16px}.integrity-panel p{margin:20px 0 0}.enterprise-layout{display:grid;grid-template-columns:minmax(300px,.72fr) minmax(0,1.28fr);gap:88px}.enterprise-intro h2{margin-bottom:22px}.enterprise-rows{border-top:1px solid var(--line)}.enterprise-row{display:grid;grid-template-columns:260px 1fr;gap:30px;padding:25px 0;border-bottom:1px solid var(--line)}.enterprise-row h3{font-size:20px}.enterprise-row p{margin:0}.language-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.language-col{padding:30px 25px;border-right:1px solid var(--line)}.language-col:last-child{border-right:0}.language-col h3{font-size:21px;margin-bottom:13px}.language-col p{font-size:16px;margin:0}.why-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.why-item{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.why-item h3{font-size:21px;margin-bottom:12px}.why-item p{margin:0}.related-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.related-card{background:transparent;border-right:1px solid var(--line);border-bottom:1px solid var(--line);padding:28px 30px;display:flex;flex-direction:column;min-height:0}.related-card h3{font-size:21px;margin-bottom:12px}.related-card p{font-size:17px;flex:1}.also-row{display:flex;flex-wrap:wrap;gap:10px 20px;align-items:center;margin-top:30px;padding-top:24px;border-top:1px solid var(--line)}.also-row>span{font-size:16px;font-weight:600;color:var(--ink)}.faq-section{padding-bottom:112px}.faq-panel{max-width:980px;margin:0 auto;border-top:1px solid var(--line)}.faq-item{border-bottom:1px solid var(--line)}.faq-question{width:100%;appearance:none;border:0;background:transparent;padding:24px 0;display:flex;justify-content:space-between;align-items:flex-start;gap:24px;text-align:left;font:600 19px/1.35 "Inter Tight",Inter,Arial,sans-serif;color:var(--ink);cursor:pointer}.faq-plus{font-size:25px;color:var(--magenta);font-weight:400;line-height:1}.faq-answer{padding:0 52px 24px 0}.faq-answer p{max-width:840px;margin:0}.final-cta{background:var(--blush);padding:78px 0 82px;border-top:1px solid #F0DAE3}.final-cta-inner{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:64px;align-items:center}.final-cta h2{max-width:760px;margin-bottom:18px}.final-cta p{max-width:820px}.cta-actions{display:flex;flex-direction:column;gap:12px;min-width:180px}.cta-actions .btn{width:100%}
@media(max-width:1199px){.shell{padding-left:40px;padding-right:40px}.hero-grid{gap:44px}.hero-trust{grid-template-columns:repeat(2,1fr);row-gap:14px}.hero-trust span:nth-child(3){border-left:0;padding-left:0}.sequence-grid{grid-template-columns:repeat(2,1fr)}.material-grid{grid-template-columns:repeat(2,1fr)}.material-group{border-bottom:1px solid var(--line)}.material-group:nth-child(2n){border-right:0}.material-group:nth-child(5){grid-column:1 / -1;border-right:0;border-bottom:0}.quality-grid,.commerce-grid,.language-grid{grid-template-columns:repeat(2,1fr)}.quality-col:nth-child(2),.commerce-col:nth-child(2),.language-col:nth-child(2){border-right:0}.quality-col:nth-child(-n+2),.commerce-col:nth-child(-n+2),.language-col:nth-child(-n+2){border-bottom:1px solid var(--line)}}
@media(max-width:900px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}.hero{padding:88px 0 74px}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero-grid,.overview-grid,.dark-grid,.data-grid,.equipment-grid,.digital-layout,.terminology-layout,.files-grid,.enterprise-layout,.final-cta-inner{grid-template-columns:1fr;gap:48px}.hero-copy{text-align:center}.hero-copy h1,.hero-copy .hero-lead{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-trust{text-align:left}.hero-visual{min-height:380px}.hero-art{max-width:470px}.overview-grid>div:first-child{text-align:center}.overview-grid>div:first-child h2{max-width:720px;margin:0 auto}.overview-copy{max-width:none}.content-grid{grid-template-columns:1fr}.content-panel:nth-child(odd){border-right:0}.twin-sector-grid{grid-template-columns:1fr}.workflow-grid{grid-template-columns:1fr}.why-grid{grid-template-columns:repeat(2,1fr)}.terminology-map{max-width:520px;width:100%;margin:0 auto}.file-row{grid-template-columns:1fr;gap:12px}.enterprise-intro{text-align:center}.enterprise-intro .lead{max-width:720px;margin-left:auto;margin-right:auto}.enterprise-rows{max-width:900px;margin:0 auto}.final-cta-inner{text-align:center}.final-cta p{margin-left:auto;margin-right:auto}.cta-actions{flex-direction:row;justify-content:center}.section-head{margin-bottom:48px}.metallurgy-grid{grid-template-columns:1fr}.dark-subpanel{border-right:0}.dark-subpanel:nth-child(n+3){border-bottom:1px solid #3B414A}.dark-subpanel:last-child{border-bottom:0}.dark-intro{text-align:center}.dark-intro .lead,.dark-intro p{max-width:760px;margin-left:auto;margin-right:auto}.digital-intro{text-align:center}.digital-intro .lead{max-width:760px;margin-left:auto;margin-right:auto}.digital-intro .link-stack{align-items:center}.final-cta h2{margin-left:auto;margin-right:auto}}
@media(max-width:767px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.hero{padding:70px 0 64px}h1{font-size:38px}h2{font-size:30px}h3{font-size:20px}p,.lead{font-size:17px}.hero-lead{font-size:18px}.section-head{margin-bottom:40px}.section-head h2,.overview-grid>div:first-child h2,.dark-intro h2,.digital-intro h2,.enterprise-intro h2{text-align:center}.section-head .lead{text-align:center}.hero-actions{display:grid;grid-template-columns:1fr;width:100%}.hero-actions .btn{width:100%}.hero-trust{grid-template-columns:1fr;margin-top:34px}.hero-trust span,.hero-trust span:nth-child(3){border-left:0;padding:9px 0;border-bottom:1px solid var(--line)}.hero-trust span:last-child{border-bottom:0}.hero-visual{min-height:280px}.sequence-grid,.material-grid,.quality-grid,.commerce-grid,.language-grid,.why-grid,.related-grid,.sustain-grid{grid-template-columns:1fr}.sequence-item{min-height:0}.material-group,.material-group:nth-child(5),.quality-col,.commerce-col,.language-col,.why-item{border-right:0!important;border-bottom:1px solid var(--line)}.material-group:nth-child(5){display:block;grid-column:auto}.material-group:last-child,.quality-col:last-child,.commerce-col:last-child,.language-col:last-child,.why-item:last-child{border-bottom:0}.content-panel{grid-template-columns:44px 1fr;padding-left:0;padding-right:0}.content-panel .bullet-list{grid-template-columns:1fr}.icon-box{width:40px;height:40px}.data-list{grid-template-columns:1fr}.sector-panel{padding:28px 22px}.sector-panel h2{font-size:28px}.multi-list{grid-template-columns:1fr}.system-row{grid-template-columns:22px 1fr}.system-row:not(:last-child) .system-node:after{display:none}.sustain-group{border-right:0}.workflow-panel{padding:24px 20px}.workflow-line{align-items:flex-start}.terminology-layout>div:first-child{text-align:left}.file-groups{border-top:1px solid var(--line)}.enterprise-row{grid-template-columns:1fr;gap:8px}.also-row{align-items:flex-start;flex-direction:column}.faq-answer{padding-right:0}.faq-question{font-size:18px}.final-cta{padding:64px 0 68px}.cta-actions{display:grid;grid-template-columns:1fr;width:100%;max-width:420px;margin:0 auto}.link-row,.two-links{gap:8px 22px}.editorial-link{min-height:44px}.closing-note{text-align:left}.section-head .lead{max-width:100%}}
@media(max-width:360px){.shell{padding-left:20px;padding-right:20px}.content-panel{grid-template-columns:1fr}.icon-box{margin-bottom:2px}.standards-row span,.tag-cloud span{font-size:16px}.workflow-line b{display:none}.workflow-line{flex-direction:column}.hero-visual{min-height:240px}}
`;
