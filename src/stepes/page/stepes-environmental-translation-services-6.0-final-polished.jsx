import React from "react";

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  compliance: "https://www.stepes.com/compliance-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  scientific: "https://www.stepes.com/scientific-translation-services/",
  industrial: "https://www.stepes.com/industrial-translation-services/",
  mining: "https://www.stepes.com/mining-translation-services/",
  oilGas: "https://www.stepes.com/oil-gas-translation-services/",
  chemical: "https://www.stepes.com/chemical-translation-services/",
  construction: "https://www.stepes.com/construction-translation-services/",
  climate: "https://www.stepes.com/climate-change-translation-services/",
  renewable: "https://www.stepes.com/renewable-energy-translation-services/",
  esg: "https://www.stepes.com/esg-translation-services/",
  forestry: "https://www.stepes.com/forestry-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  documents: "https://www.stepes.com/document-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
};

const expertise = [
  { icon: "air", title: "Air Quality & Emissions", text: "Air-quality studies, emissions inventories, monitoring, permitting, pollution-control systems, greenhouse-gas documentation, atmospheric studies, and compliance reports." },
  { icon: "water", title: "Water & Wastewater", text: "Drinking water, water quality, wastewater treatment, stormwater, groundwater, hydrology, treatment technologies, and utility documentation." },
  { icon: "recycle", title: "Waste, Recycling & Circularity", text: "Solid and industrial waste, hazardous-waste documentation, recycling, waste characterization, resource recovery, handling procedures, and circular-economy programs." },
  { icon: "soil", title: "Soil, Contamination & Remediation", text: "Site assessments, soil and groundwater studies, contamination investigations, sampling programs, remediation plans, corrective actions, cleanup, and restoration." },
  { icon: "leaf", title: "Biodiversity & Ecosystems", text: "Biodiversity assessments, ecological studies, habitat surveys, wildlife studies, ecosystem management, restoration programs, and conservation initiatives." },
  { icon: "climate", title: "Climate & Natural Resources", text: "Climate mitigation and adaptation, natural-resource management, forestry, land-use planning, watershed management, conservation, and environmental resilience." },
];

const documentGroups = [
  { title: "Assessments & Studies", items: ["Environmental Impact Assessments (EIAs)", "Environmental Impact Statements (EISs)", "Environmental and Social Impact Assessments (ESIAs)", "Baseline and feasibility studies", "Environmental risk and site assessments", "Ecological and biodiversity studies", "Environmental research reports"] },
  { title: "Permitting & Compliance", items: ["Permit applications and environmental licenses", "Regulatory submissions and questionnaires", "Agency correspondence", "Compliance and inspection reports", "Audit findings and corrective actions", "Environmental policies and procedures"] },
  { title: "Engineering & Operations", items: ["Environmental engineering reports", "Technical specifications", "Operating, monitoring, and sampling procedures", "Pollution-control and treatment documentation", "Equipment manuals", "Remediation plans", "Inspection and maintenance content"] },
  { title: "Monitoring & Reporting", items: ["Environmental monitoring reports", "Sampling and laboratory documentation", "Emissions and water-quality data", "Waste and environmental KPI reports", "Data tables, figures, and technical appendices", "Annual and recurring environmental reports"] },
  { title: "Product & Sustainability", items: ["Life Cycle Assessments (LCAs)", "Environmental Product Declarations (EPDs)", "Product carbon-footprint content", "Resource-use documentation", "Environmental performance reports", "Circularity and sustainable-sourcing content"] },
  { title: "Training & Communication", items: ["Environmental training and eLearning", "Employee and contractor procedures", "Stakeholder communications", "Public consultation materials", "Presentations", "Websites and digital content"] },
];

const lifecycle = [
  { n: "01", title: "Assess", text: "Translate scientific and technical information used to understand existing conditions, potential impacts, risks, and project alternatives.", items: ["Impact assessments and baseline studies", "Site investigations and risk assessments", "Alternatives analyses and technical appendices"] },
  { n: "02", title: "Permit & Approve", text: "Support multilingual permitting, licensing, regulatory review, and approval processes.", items: ["Permit applications and environmental licenses", "Supporting studies and agency requests", "Regulatory correspondence and consultation materials"] },
  { n: "03", title: "Implement & Mitigate", text: "Translate the plans, specifications, and procedures used to manage environmental impacts during construction and operation.", items: ["Environmental management and mitigation plans", "Pollution-prevention and waste-management plans", "Contractor requirements and operating procedures"] },
  { n: "04", title: "Monitor & Report", text: "Support recurring environmental monitoring, inspection, compliance, and reporting across sites and markets.", items: ["Monitoring and sampling programs", "Inspection and compliance reports", "Corrective actions and regulatory responses"] },
];

const specialties = [
  { title: "Climate Change Translation", text: "Climate science, mitigation, adaptation, carbon-management, policy, research, and climate communications.", href: URLS.climate, label: "Climate Change Translation Services" },
  { title: "Renewable Energy Translation", text: "Solar, wind, hydropower, geothermal, bioenergy, energy storage, green hydrogen, and other renewable technologies.", href: URLS.renewable, label: "Renewable Energy Translation Services" },
  { title: "ESG & Sustainability Translation", text: "Sustainability reports, disclosures, metrics, governance content, stakeholder communications, and recurring ESG reporting programs.", href: URLS.esg, label: "ESG & Sustainability Translation Services" },
  { title: "Forestry & Natural Resources", text: "Forestry science, forest management, environmental compliance, equipment documentation, logging operations, and sustainability content.", href: URLS.forestry, label: "Forestry Translation Services" },
];

const qa = [
  { icon: "terms", title: "Terminology", text: "Verify approved environmental, scientific, engineering, and regulatory terminology throughout the translation." },
  { icon: "numbers", title: "Numbers & Units", text: "Check measurements, concentrations, percentages, emissions values, dates, ranges, and units against the source." },
  { icon: "science", title: "Scientific Names", text: "Maintain appropriate treatment of species, chemicals, compounds, equipment terminology, and technical nomenclature." },
  { icon: "chart", title: "Tables & Figures", text: "Preserve relationships among translated text, tables, charts, diagrams, captions, legends, and supporting data." },
  { icon: "link", title: "References", text: "Check headings, footnotes, citations, internal references, regulatory references, and document navigation where required." },
  { icon: "check", title: "Completeness", text: "Verify required text, callouts, captions, notes, headers, footers, and embedded content before delivery." },
];

const industries = [
  ["Energy & Renewable Energy", "Assessments, permitting, biodiversity, water, emissions, construction, operations, and sustainability content."],
  ["Manufacturing", "Environmental procedures, waste, emissions, water, compliance, monitoring, employee training, and facility documentation."],
  ["Chemicals", "Environmental risk, emissions, waste, process documentation, regulatory content, pollution prevention, and operating information."],
  ["Construction & Infrastructure", "Environmental assessments, permitting, site-management plans, water and wastewater, mitigation, monitoring, and contractor documentation."],
  ["Mining & Metals", "Site assessments, water management, environmental monitoring, remediation, biodiversity, permitting, and closure documentation."],
  ["Pulp, Paper & Forestry", "Forest management, water, emissions, waste, resource efficiency, environmental compliance, conservation, and operating documentation."],
  ["Utilities & Environmental Infrastructure", "Water and wastewater, waste management, environmental engineering, power generation, distribution, and infrastructure operations."],
  ["Environmental Consulting & Research", "Scientific studies, technical reports, impact assessments, environmental data, regulatory documentation, research, and stakeholder communications."],
];

const reasons = [
  ["Environmental Subject-Matter Expertise", "Professional linguists matched to scientific, engineering, regulatory, operational, and sustainability content."],
  ["AI + Human Translation Workflows", "Use the right combination of AI-enabled translation, professional linguists, review, and QA based on content purpose and risk."],
  ["Terminology Governance", "Approved environmental terminology helps maintain consistency across documents, departments, facilities, and reporting cycles."],
  ["Translation Memory & Reuse", "Previously approved content can be reused across document updates, recurring reports, procedures, and long-term programs."],
  ["Structured Quality Control", "Quality workflows can address terminology, numbers, units, scientific nomenclature, completeness, formatting, and final-file presentation."],
  ["Complex File Expertise", "Translate reports, spreadsheets, technical files, diagrams, and publication-ready environmental materials without fragmenting production."],
  ["Enterprise Scalability", "Support individual documents, multi-language projects, recurring environmental content, and ongoing global programs."],
  ["100+ Languages", "Communicate environmental information across major global and regional markets with centralized multilingual support."],
];

const faqs = [
  ["What is environmental translation?", "Environmental translation is the specialized translation of scientific, technical, engineering, regulatory, operational, and sustainability content related to the environment. It can include environmental impact assessments, permits, environmental studies, engineering reports, monitoring data, compliance documentation, biodiversity reports, waste and water content, training, environmental policies, and sustainability communications. Because this content often combines specialized terminology with measurements, scientific concepts, technical systems, regulations, and data, professional environmental translation typically requires subject-matter expertise in addition to linguistic fluency."],
  ["What types of environmental documents does Stepes translate?", "Stepes translates environmental impact assessments, environmental impact statements, environmental and social impact assessments, permit applications, regulatory submissions, environmental studies, engineering reports, monitoring reports, sampling plans, remediation documentation, environmental policies, operating procedures, training materials, sustainability content, Life Cycle Assessments, Environmental Product Declarations, and many other environmental documents."],
  ["Can Stepes translate environmental impact assessments, EISs, and ESIAs?", "Yes. Stepes translates EIAs, EISs, ESIAs, baseline studies, technical appendices, mitigation plans, environmental management plans, biodiversity studies, supporting reports, and related consultation or regulatory content. Workflows can be configured around the subject matter, target languages, schedule, terminology, document complexity, review requirements, and intended audience."],
  ["Does Stepes translate environmental permitting and regulatory documentation?", "Yes. We translate permit applications, environmental licenses, regulatory submissions, compliance reports, inspection documentation, audit findings, corrective actions, agency correspondence, supporting studies, and related environmental regulatory content. Stepes provides language services rather than legal, regulatory, environmental, or engineering advice."],
  ["Do Stepes translators have environmental science or engineering expertise?", "Stepes matches linguists and reviewers to the content being translated. Environmental projects can require knowledge of ecology, hydrology, chemistry, geology, environmental engineering, water and wastewater treatment, emissions, remediation, energy, industrial operations, sustainability, or other specialized fields. The required subject-matter expertise and review workflow are matched to the document type, audience, technical complexity, and consequences of an error."],
  ["How does Stepes use AI for environmental translation?", "Stepes uses AI within managed translation workflows rather than as a one-size-fits-all replacement for professional expertise. AI-assisted translation can improve efficiency for appropriate high-volume or recurring content, while professional linguists provide review and validation according to project requirements. Technical, regulatory, safety-sensitive, scientific, and high-visibility content can use more expert-led workflows and additional quality controls."],
  ["How do you maintain consistent environmental terminology?", "Stepes can incorporate client glossaries, previous translations, reference materials, style guidance, and approved terminology into the workflow. Multilingual termbases can cover environmental processes, pollutants, equipment, chemicals, species, KPIs, regulatory terms, measurement terminology, and organization-specific language, then be reused across future projects and updates."],
  ["Can Stepes translate environmental reports with tables, charts, maps, and diagrams?", "Yes. Environmental documents frequently contain complex formatting, including tables, charts, maps, technical diagrams, figures, legends, captions, appendices, footnotes, and embedded graphics. Stepes can combine translation with multilingual desktop publishing and final-format review to produce complete target-language files."],
  ["Can Stepes support recurring environmental reporting and monitoring programs?", "Yes. Translation memory, terminology management, change-based workflows, and centralized project management are particularly valuable for recurring content such as monitoring reports, operating procedures, permits, policies, annual reports, regulatory submissions, and environmental plans. Previously approved content can be reused while translation and review focus on new or changed information."],
  ["Can Stepes support both environmental documentation and ESG reporting?", "Yes. Environmental teams may produce emissions, water, waste, energy, biodiversity, resource-use, and environmental-impact information that later contributes to sustainability reports and corporate disclosures. Stepes can translate the underlying technical environmental content while dedicated ESG translation services support reporting, governance, disclosure, stakeholder communication, and publication workflows."],
  ["What languages does Stepes support for environmental translation?", "Stepes supports environmental translation in more than 100 languages across Europe, Asia-Pacific, the Americas, the Middle East, Africa, and other global markets. Enterprise programs can coordinate multiple target languages through shared terminology, translation memory, standardized quality requirements, and centralized project management."],
];

function Icon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    air: <><path d="M3 9h11c2 0 2.5-3 0-3-1.1 0-1.7.5-2 1"/><path d="M3 13h16c2.4 0 2.6 3 0 3-1 0-1.7-.5-2-1"/></>,
    water: <><path d="M12 3s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10Z"/><path d="M9.5 15.2c.7 1.2 2 1.8 3.5 1.6"/></>,
    recycle: <><path d="m8 5 2-2 2 2"/><path d="M10 3v5"/><path d="m17 11 3 1-1 3"/><path d="M20 12l-4 2.5"/><path d="m7 19-3-1 1-3"/><path d="M4 18l4-2.5"/></>,
    soil: <><path d="M4 18h16"/><path d="M6 14c3-1 3-5 6-6 2.5-.8 4 .7 6-1"/><path d="M9 18c0-4 2-5 4-7"/></>,
    leaf: <><path d="M19 4C11 4 6 8 6 14c0 3 2 5 5 5 6 0 9-7 8-15Z"/><path d="M7 18c3-5 6-7 10-10"/></>,
    climate: <><circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2"/><path d="M15 13a5 5 0 1 1-5 6"/><path d="M15 13v4h4"/></>,
    terms: <><path d="M4 5h10M4 10h7M4 15h9"/><path d="M17 7v10M14 12h6"/></>,
    numbers: <><path d="M5 5h4l-4 14h4M13 7h6M13 12h6M13 17h6"/></>,
    science: <><path d="M9 3v5l-4 8a3 3 0 0 0 2.7 4h8.6A3 3 0 0 0 19 16l-4-8V3"/><path d="M8 13h8"/></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/></>,
    link: <><path d="M10 13a4 4 0 0 0 5.7 0l2-2a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 11a4 4 0 0 0-5.7 0l-2 2A4 4 0 0 0 12 18.7l1-1"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>{paths[name] || paths.check}</svg>;
}

function Arrow() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function SectionHeader({ eyebrow, title, intro, align = "center", dark = false }) {
  return <div className={`section-head ${align === "left" ? "section-head--left" : ""} ${dark ? "section-head--dark" : ""}`}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>;
}

function EditorialLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<Arrow /></a>;
}

function HeroArt() {
  return <div className="hero-art" aria-hidden="true">
    <svg viewBox="0 0 560 470" role="img">
      <g fill="none" stroke="#596170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 362c66-34 118-29 169-1 44 24 91 25 144-4 56-31 113-31 184 4"/>
        <path d="M38 389c84-22 145-11 192 12 49 24 106 18 154-6 47-24 93-21 136-4"/>
        <path d="M104 316c28-84 68-145 123-180 54-34 112-38 175-12 59 25 96 74 119 144"/>
        <path d="M145 305c41-43 82-66 125-70 48-5 90 10 126 44"/>
        <path d="M182 310 225 205l42 105"/>
        <path d="M347 311V177h62v134"/>
        <path d="M360 177v-34h36v34M374 143v-32M389 143v-23"/>
        <path d="M334 311h91"/>
        <path d="M461 306c0-47 17-81 42-105"/>
        <path d="M491 219c-24 3-37-9-34-31 22-3 36 8 34 31Z"/>
        <path d="M494 257c22-1 34 10 32 30-20 2-33-8-32-30Z"/>
        <path d="M79 341c0-28 12-48 31-63M110 278c-17 2-28-6-27-22 15-2 26 6 27 22Z"/>
        <path d="M110 298c16 0 25 8 24 23-15 1-24-6-24-23Z"/>
        <circle cx="136" cy="114" r="39"/>
        <path d="M136 56v17M136 155v17M78 114h17M177 114h17M95 73l12 12M165 143l12 12M177 73l-12 12M107 143l-12 12"/>
        <path d="M226 363c20-25 45-37 74-37 31 0 57 13 77 38"/>
        <path d="M245 350c16 8 31 10 48 6 17-4 29-12 42-10 12 2 22 9 29 16"/>
      </g>
      <g fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7">
        <circle cx="389" cy="111" r="8"/><circle cx="110" cy="256" r="7"/><circle cx="494" cy="257" r="7"/>
      </g>
      <g fill="#ffffff" stroke="#596170" strokeWidth="1.6">
        <rect x="58" y="394" width="144" height="42" rx="21"/><rect x="347" y="394" width="155" height="42" rx="21"/>
      </g>
      <text x="82" y="420" fill="#485162" fontSize="14" fontFamily="Inter, Arial, sans-serif">SCIENCE + DATA</text>
      <text x="369" y="420" fill="#485162" fontSize="14" fontFamily="Inter, Arial, sans-serif">ENGINEERING + COMPLIANCE</text>
    </svg>
  </div>;
}

export default function EnvironmentalTranslationServicesPage() {
  return <>
    <style>{styles}</style>
    <main className="stepes-page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Environmental Translation Services</h1>
            <p className="hero-lead">Translate environmental, scientific, engineering, and regulatory content with specialized linguistic expertise, AI-enabled workflows, terminology control, and professional quality assurance in 100+ languages.</p>
            <p>From environmental impact assessments and permitting documentation to engineering reports, monitoring programs, sustainability content, and global environmental operations, Stepes helps organizations communicate complex environmental information accurately across languages and markets.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={URLS.quote}>Get a Translation Quote <Arrow /></a>
              <a className="btn btn-secondary" href={URLS.contact}>Contact Stepes <Arrow /></a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="proof-band" aria-label="Environmental translation capabilities">
        <div className="container proof-grid">
          {[['100+ Languages','Global and regional environmental coverage'],['Environmental Expertise','Scientific, technical, and regulatory linguists'],['AI + Human Workflows','Translation aligned with content purpose and risk'],['Terminology + Translation Memory','Consistent language across projects and updates'],['ISO-Certified Processes','Structured quality management for enterprise translation']].map(([title,text]) => <div className="proof-item" key={title}><strong>{title}</strong><span>{text}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="container split-overview">
          <div className="sticky-head">
            <h2>Translate Complex Environmental Content With Confidence</h2>
          </div>
          <div className="overview-copy">
            <p className="lead">Environmental translation brings together science, engineering, regulation, operations, data, and public communication. A single project may contain technical studies, permits, sampling results, engineering specifications, mitigation plans, regulatory correspondence, training, and stakeholder communications.</p>
            <p>Each requires more than fluent translation. Environmental terminology must remain technically correct. Measurements and units must retain their intended meaning. Chemical and species names require careful handling. Regulatory language must stay aligned with the source, while tables, figures, maps, and references remain connected to the information they describe.</p>
            <div className="principles">
              {[['Scientific Accuracy','Preserve specialized concepts, methods, findings, and technical terminology.'],['Technical Precision','Keep processes, equipment, measurements, and operating information clear.'],['Regulatory Context','Translate environmental compliance and permitting content with appropriate care.'],['Terminology Consistency','Maintain approved environmental language across documents, teams, and reporting cycles.'],['Global Delivery','Coordinate multilingual content across projects, markets, facilities, and stakeholders.']].map(([t,d]) => <div className="principle" key={t}><span></span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container">
          <SectionHeader title="Environmental Expertise Across Air, Water, Land, and Natural Resources" intro="Stepes supports the scientific, technical, regulatory, and operational content organizations use to understand environmental impacts, manage resources, reduce risk, and communicate with stakeholders." />
          <div className="expertise-grid">
            {expertise.map(x => <article className="expertise-card" key={x.title}><div className="icon-box"><Icon name={x.icon}/></div><h3>{x.title}</h3><p>{x.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Environmental Documents and Content We Translate" intro="Support individual documents or ongoing multilingual programs involving multiple content types, languages, business units, and markets." />
          <div className="document-matrix">
            {documentGroups.map(g => <article className="document-group" key={g.title}><h3>{g.title}</h3><ul>{g.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="section surface-soft" id="permitting">
        <div className="container">
          <SectionHeader eyebrow="REGULATORY ENVIRONMENTAL CONTENT" title="Environmental Impact, Permitting, and Compliance Translation" intro="Environmental projects move through a continuous cycle of assessment, authorization, implementation, monitoring, and reporting. Stepes supports multilingual content throughout that lifecycle." />
          <div className="workflow">
            {lifecycle.map(step => <article className="workflow-step" key={step.n}><div className="step-number">{step.n}</div><h3>{step.title}</h3><p>{step.text}</p><ul>{step.items.map(i => <li key={i}>{i}</li>)}</ul></article>)}
          </div>
          <p className="section-note">Connect environmental projects with specialized <a href={URLS.compliance}>compliance translation services</a>, <a href={URLS.legal}>legal translation services</a>, and <a href={URLS.engineering}>engineering translation services</a> when content spans technical and regulatory disciplines.</p>
          <p className="disclaimer">Stepes provides translation and localization services and does not provide legal, environmental, regulatory, or engineering advice.</p>
        </div>
      </section>

      <section className="section">
        <div className="container science-grid">
          <div>
            <h2>Environmental Science Translation by Subject-Matter Experts</h2>
            <p className="lead">Environmental science depends on precise terminology, scientific methods, numerical data, technical relationships, and conclusions that must retain their meaning across languages.</p>
            <p>Stepes matches linguistic resources to the subject matter and intended audience so scientific content can be communicated clearly among researchers, environmental professionals, regulators, project teams, customers, and international stakeholders.</p>
            <EditorialLink href={URLS.scientific}>Scientific Translation Services</EditorialLink>
          </div>
          <div className="science-panel">
            <div className="science-panel-col"><h3>Environmental Disciplines</h3>{["Ecology", "Hydrology", "Biology", "Environmental chemistry", "Geology", "Soil science", "Atmospheric science", "Marine science", "Toxicology", "Conservation science", "Environmental health", "Environmental modeling", "Climate science"].map(x => <span className="tag" key={x}>{x}</span>)}</div>
            <div className="science-panel-col"><h3>Scientific Content</h3><ul>{["Research papers and publications","Scientific and field reports","Laboratory documentation","Research protocols and sampling methods","Monitoring results and data tables","Charts, figures, and technical findings","Conference and institutional research"].map(x => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container engineering-grid">
          <div>
            <h2>Environmental Engineering Translation for Global Projects</h2>
            <p className="lead">Environmental engineering combines science with practical systems for managing water, air, waste, contamination, infrastructure, and industrial environmental performance.</p>
            <p>Stepes translates the documentation engineers, equipment manufacturers, consultants, developers, utilities, contractors, and facility operators use to design, build, operate, maintain, and improve these systems.</p>
            <div className="dark-links"><EditorialLink href={URLS.engineering}>Engineering Translation Services</EditorialLink><EditorialLink href={URLS.technical}>Technical Translation Services</EditorialLink></div>
          </div>
          <div className="engineering-panel">
            <div><h3>Applications</h3><ul>{["Water and wastewater treatment","Air and emissions control","Waste processing and recycling","Environmental monitoring systems","Remediation technologies","Groundwater and stormwater","Environmental instrumentation","Industrial environmental controls"].map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><h3>Engineering Content</h3><ul>{["Engineering reports","Technical specifications","Design documentation","Equipment manuals","Installation and operating instructions","Maintenance and inspection procedures","Technical drawings and annotations","Testing and commissioning content"].map(x => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container industrial-grid">
          <div>
            <h2>Environmental Translation for Manufacturing and Industrial Operations</h2>
            <p className="lead">Environmental responsibilities continue long after a facility or project receives approval. Industrial organizations generate ongoing documentation for daily operations, workforce training, monitoring, inspections, maintenance, and compliance.</p><p>Stepes helps global industrial teams keep operational environmental content understandable and consistent across facilities, contractors, and languages.</p>
          </div>
          <div className="editorial-list">
            {["Environmental operating procedures", "Waste-handling and spill-response instructions", "Emissions-control and water-management procedures", "Sampling, monitoring, and inspection content", "Site environmental policies and contractor requirements", "Incident, corrective-action, and employee training materials"].map(x => <div className="editorial-row" key={x}><span></span><p>{x}</p></div>)}
            <div className="industry-links"><a href={URLS.industrial}>Industrial Translation</a><a href={URLS.mining}>Mining Translation</a><a href={URLS.oilGas}>Oil & Gas Translation</a><a href={URLS.chemical}>Chemical Translation</a><a href={URLS.construction}>Construction Translation</a></div>
          </div>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container">
          <SectionHeader eyebrow="ENVIRONMENTAL INFRASTRUCTURE" title="Water, Waste, Pollution, and Remediation Translation" intro="Support environmental infrastructure and industrial programs from scientific assessment and engineering design through operation, monitoring, reporting, and remediation." />
          <div className="quadrants">
            {[
              ['Water','Translate treatment specifications, discharge permits, monitoring plans, sampling procedures, water-quality reports, and utility documentation across municipal and industrial systems.'],
              ['Waste','Support waste characterization, handling procedures, regulated documentation, treatment and disposal content, recycling programs, and resource-recovery operations.'],
              ['Pollution Control','Translate emissions inventories, monitoring protocols, control-system documentation, discharge requirements, pollution-prevention plans, and recurring performance reporting.'],
              ['Remediation','Support site investigation and cleanup with sampling plans, remediation designs, contractor instructions, monitoring results, corrective actions, closure reports, and restoration documentation.']
            ].map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container biodiversity-grid">
          <div className="biodiversity-art" aria-hidden="true">
            <svg viewBox="0 0 420 360"><g fill="none" stroke="#596170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M45 294h330"/><path d="M82 294c15-85 45-133 89-177 41 48 64 97 73 177"/><path d="M218 294c20-91 53-145 96-187 29 41 48 92 59 187"/><path d="M161 294v-86M151 238c-24-2-38-16-36-41 24-2 39 12 36 41ZM170 219c21-2 34-14 33-35-21-2-34 11-33 35Z"/><path d="M285 294v-99M276 229c-28-1-44-17-42-45 28-2 44 15 42 45ZM294 210c24-2 39-15 38-39-24-2-39 14-38 39Z"/><path d="M49 314c73-20 121-12 162 4 50 19 100 16 158-5"/></g><g fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7"><circle cx="103" cy="134" r="8"/><circle cx="334" cy="96" r="8"/></g></svg>
          </div>
          <div>
            <h2>Biodiversity, Conservation, and Natural Resource Translation</h2>
            <p className="lead">Environmental communication increasingly extends beyond pollution control and compliance to biodiversity, ecosystems, habitat management, natural resources, and environmental restoration.</p><p>Stepes translates scientific, technical, operational, regulatory, and stakeholder content for organizations working to understand and manage natural environments across regions.</p>
            <div className="triple-list"><div><h3>Biodiversity & Habitat</h3><p>Biodiversity assessments, habitat surveys, ecological impact studies, species documentation, habitat-management plans, and restoration programs.</p></div><div><h3>Conservation</h3><p>Conservation plans, protected-area content, wildlife programs, ecosystem-management materials, community initiatives, and research content.</p></div><div><h3>Land, Forests & Resources</h3><p>Forest-management content, land-use plans, watershed documentation, resource inventories, restoration projects, and sustainable resource programs.</p></div></div>
            <EditorialLink href={URLS.forestry}>Forestry Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section related-section">
        <div className="container">
          <SectionHeader title="Specialized Translation Across Environmental and Sustainability Programs" intro="Environmental content overlaps with climate, energy, ESG, natural resources, and other specialized disciplines. Dedicated services help organizations use the right subject-matter resources for each content stream." />
          <div className="related-rows">
            {specialties.map(s => <article className="related-row" key={s.title}><div><h3>{s.title}</h3><p>{s.text}</p></div><EditorialLink href={s.href}>{s.label}</EditorialLink></article>)}
          </div>
        </div>
      </section>

      <section className="section blush-section">
        <div className="container esg-grid">
          <div><h2>Connect Environmental Performance With Global ESG Reporting</h2><p className="lead">Environmental teams generate much of the information organizations use to explain environmental performance. Emissions, energy, water, waste, biodiversity, resource use, climate initiatives, and remediation activities may begin as technical data and later become part of sustainability disclosures or stakeholder communications.</p><p>Stepes helps organizations keep terminology and approved language consistent as technical environmental information moves into corporate sustainability communication.</p><EditorialLink href={URLS.esg}>ESG & Sustainability Translation Services</EditorialLink></div>
          <div className="esg-flow"><div><h3>Technical Environmental Content</h3><p>Environmental studies, monitoring data, permit and compliance documentation, engineering reports, management plans, and operational information.</p></div><span className="flow-arrow">→</span><div><h3>Corporate Sustainability Content</h3><p>ESG and sustainability reports, environmental performance disclosures, climate content, KPI narratives, stakeholder communication, and presentations.</p></div></div>
        </div>
      </section>

      <section className="section dark-section ai-section">
        <div className="container">
          <SectionHeader title="AI-Powered Environmental Translation With Expert Human Review" intro="A regulatory filing, environmental impact assessment, operating procedure, recurring monitoring report, and internal knowledge article should not automatically follow the same translation workflow. Stepes configures AI, professional linguists, review, and QA according to content purpose, complexity, audience, volume, visibility, and the consequences of an error." dark />
          <div className="ai-grid">
            <article><div className="ai-label">EXPERT-LED</div><h3>For complex, high-visibility, or higher-risk content</h3><p>Professional subject-matter linguists and structured review support technically novel, regulatory, safety-sensitive, and public-facing environmental communication.</p><ul>{["Environmental impact assessments","Permit applications and regulatory submissions","Scientific conclusions","Environmental policies and public commitments","Engineering content","Safety-sensitive procedures"].map(x => <li key={x}>{x}</li>)}</ul></article>
            <article><div className="ai-label">AI-ASSISTED + REVIEW</div><h3>For suitable high-volume and recurring content</h3><p>AI-enabled workflows can improve scalability and turnaround while professional linguists validate terminology, meaning, fluency, and technical context.</p><ul>{["Large document collections","Recurring monitoring reports","Internal operational documentation","Environmental knowledge bases","Repetitive technical content","Updated reports and procedures"].map(x => <li key={x}>{x}</li>)}</ul></article>
          </div>
          <div className="ai-footer"><strong>Change-based translation and content reuse</strong><span>For recurring documents, Stepes can identify existing approved translations, focus effort on changed content, and reuse validated terminology across versions.</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container terminology-grid">
          <div>
            <div className="eyebrow">TERMINOLOGY + REUSE</div>
            <h2>Build Consistent Environmental Language Across Every Project</h2>
            <p className="lead">The same pollutants, treatment processes, equipment names, species, measurements, KPIs, and defined terms may appear in engineering documents, permits, monitoring reports, training, ESG reporting, and public communications.</p>
            <p>Stepes combines terminology management and translation memory to turn approved language into reusable enterprise assets.</p>
            <div className="link-stack"><EditorialLink href={URLS.terminology}>Terminology Management</EditorialLink><EditorialLink href={URLS.tm}>Translation Memory</EditorialLink></div>
          </div>
          <div className="term-mockup">
            <div className="mockup-top"><span>Environmental Termbase</span><span>Approved terminology</span></div>
            {[['volatile organic compound','VOC','compound terminology'],['groundwater remediation','approved target term','engineering'],['particulate matter','PM2.5 / PM10','air quality'],['biodiversity net gain','approved target term','ecology']].map(([src,target,cat]) => <div className="term-row" key={src}><div><small>SOURCE TERM</small><strong>{src}</strong></div><div className="term-arrow">→</div><div><small>{cat.toUpperCase()}</small><strong>{target}</strong></div><span className="approved">Approved</span></div>)}
            <div className="mockup-note">Approved terminology and translation memory can be reused across translators, reviewers, projects, departments, and reporting cycles to speed up updates, reduce repeated translation, and lower reviewer effort.</div>
          </div>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container">
          <SectionHeader eyebrow="QUALITY CONTROL" title="Protect Technical Meaning, Environmental Data, and Terminology" intro="Environmental translation quality extends beyond grammar and fluency. Technical data, terminology, references, tables, and document structure can all affect how environmental information is understood." />
          <div className="qa-grid">{qa.map(x => <article key={x.title}><div className="qa-icon"><Icon name={x.icon}/></div><div><h3>{x.title}</h3><p>{x.text}</p></div></article>)}</div>
          <div className="final-format"><strong>Final-Format Review</strong><p>Review multilingual files in their intended format to identify layout, typography, overflow, script, or presentation issues before delivery.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container file-grid">
          <div><h2>Translate Complex Environmental Files Without Rebuilding Them</h2><p className="lead">Environmental reports and technical studies may contain large tables, charts, site maps, engineering diagrams, photographs, appendices, cross-references, and embedded text.</p><p>Stepes combines translation with multilingual file production so customers can receive usable target-language deliverables rather than disconnected translated text.</p><div className="link-stack"><EditorialLink href={URLS.documents}>Document Translation Services</EditorialLink><EditorialLink href={URLS.dtp}>Multilingual Desktop Publishing</EditorialLink></div></div>
          <div className="format-panel"><h3>Common File Types</h3><div className="format-cloud">{["Word","Excel","PowerPoint","PDF","InDesign","Illustrator","HTML","XML","Structured content"].map(x => <span key={x}>{x}</span>)}</div><h3>Complex Content Support</h3><div className="format-list">{["Tables and spreadsheets","Charts and graphs","Maps and legends","Technical diagrams","Illustrations","Captions and callouts","Embedded graphics","Footnotes and references","Technical appendices"].map(x => <span key={x}>{x}</span>)}</div></div>
        </div>
      </section>

      <section className="section enterprise-section">
        <div className="container">
          <SectionHeader eyebrow="ENTERPRISE ENVIRONMENTAL PROGRAMS" title="One Multilingual Workflow Across Environmental Teams" intro="Environmental content rarely belongs to only one department. Shared terminology, translation memory, linguistic resources, project management, and quality requirements can reduce duplicate effort and keep approved language aligned." />
          <div className="team-grid">{[['Environmental & Sustainability','Assessments, environmental programs, monitoring, performance information, policies, and reporting.'],['Engineering','Technical studies, treatment systems, specifications, designs, equipment, and remediation content.'],['Legal & Compliance','Permits, regulatory requirements, agency communications, policies, audits, and compliance documentation.'],['Operations','Procedures, inspections, monitoring, contractor documentation, training, and site environmental content.'],['Corporate & Regional Teams','Environmental reports, websites, public communications, stakeholder materials, and local-market implementation.']].map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container industries-grid">
          <div><h2>Environmental Translation Across Global Industries</h2><p className="lead">Environmental requirements affect organizations across resource-intensive, infrastructure, manufacturing, and technical industries. Stepes connects environmental translation with broader industry expertise.</p></div>
          <div className="industries-list">{industries.map(([title,text]) => <div key={title}><span></span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section language-section">
        <div className="container language-grid">
          <div><h2>Environmental Translation in 100+ Languages</h2><p className="lead">Support global organizations, regional teams, international projects, and local stakeholders with multilingual environmental communication across major markets.</p></div>
          <div className="region-grid">{[['Europe','German, French, Italian, Spanish, Portuguese, Dutch, Polish, Czech, Danish, Swedish, Norwegian, Finnish, and additional European languages.'],['Asia-Pacific','Simplified and Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and additional regional languages.'],['Middle East & Africa','Arabic, Hebrew, Turkish, Persian, and additional regional languages across the Middle East and Africa.'],['Americas & Global Markets','Latin American and European Spanish, Brazilian and European Portuguese, Canadian French, English-market adaptation, and coordinated multilingual programs.']].map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="A Translation Partner Built for Complex Environmental Content" intro="Stepes combines environmental subject-matter expertise with enterprise translation technology and professional language services to support both individual projects and ongoing multilingual programs." />
          <div className="reasons-grid">{reasons.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section faq-section surface-soft">
        <div className="container faq-layout">
          <div className="faq-heading"><h2>Environmental Translation FAQs</h2><p>Answers to common questions about environmental, scientific, engineering, and regulatory translation.</p></div>
          <div className="faq-panel">{faqs.map(([q,a],i) => <details key={q} open={i===0}><summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><div className="faq-answer"><p>{a}</p></div></details>)}</div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-inner">
          <div><h2>Translate Your Environmental Content With Confidence</h2><p>From environmental assessments, scientific studies, engineering reports, and regulatory documentation to monitoring programs, operating procedures, sustainability content, and global environmental initiatives, Stepes helps organizations communicate complex environmental information accurately across languages.</p><p className="cta-support">Secure and confidential · 100+ languages · Enterprise translation workflows</p></div>
          <div className="cta-actions"><a className="btn btn-primary" href={URLS.quote}>Get a Translation Quote <Arrow /></a><a className="btn btn-secondary" href={URLS.contact}>Contact Stepes <Arrow /></a></div>
        </div>
      </section>
    </main>
  </>;
}

const styles = `
:root{--magenta:#C11D63;--magenta-dark:#A71954;--burgundy:#7A1542;--blush:#FDF2F7;--body:#485162;--heading:#171B24;--line:#E3E6EB;--soft:#F7F8FA;--dark:#151820;--dark-2:#20242E;--white:#fff;--radius:28px;--radius-sm:22px}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0}
.stepes-page{font-family:"Inter Tight",Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--body);background:#fff;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased}
.stepes-page *{box-sizing:border-box}
.stepes-page a{color:inherit}
.container{width:min(1280px,calc(100% - 112px));margin:0 auto}
.section{padding:96px 0}
.surface-soft{background:var(--soft)}
.blush-section{background:var(--blush)}
.eyebrow{font-size:11px!important;line-height:1.25!important;font-weight:600!important;letter-spacing:.16em!important;text-transform:uppercase!important;color:var(--magenta)!important;margin:0 0 14px!important}
h1,h2,h3{font-weight:600;color:var(--heading);margin:0;letter-spacing:-.025em}
h1{font-size:48px;line-height:1.05;max-width:650px}
h2{font-size:36px;line-height:1.12}
h3{font-size:24px;line-height:1.22}
p{margin:0 0 18px;color:var(--body);font-size:17px;line-height:1.68}
.lead,.section-intro,.hero-lead{font-size:18px;line-height:1.62}
.section-head{max-width:840px;text-align:center;margin:0 auto 52px}
.section-head--left{text-align:left;margin-left:0}
.section-head h2{max-width:780px;margin-left:auto;margin-right:auto}
.section-head--left h2{margin-left:0}
.section-intro{max-width:820px;margin:18px auto 0}
.hero{padding:104px 0 96px;background:#fff;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(440px,.98fr);align-items:center;gap:58px}
.hero-copy>p:not(.hero-lead){max-width:700px}
.hero-lead{max-width:760px;margin-top:24px;color:#343C4A}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:50px;padding:13px 22px;border-radius:999px;text-decoration:none;font-size:16px;font-weight:600;line-height:1.2;transition:.2s ease;border:1px solid transparent}
.btn svg,.editorial-link svg{width:16px;height:16px;flex:0 0 auto}
.btn-primary,.btn-primary:link,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:var(--magenta);color:#fff!important}
.btn-primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
.btn-secondary{background:#fff;border-color:#CDD2DA;color:#252B35;text-decoration:none}
.btn-secondary:hover{border-color:#9EA6B2;transform:translateY(-1px)}
.btn:focus-visible,.editorial-link:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.25);outline-offset:3px}
.hero-art{position:relative;min-height:470px;display:flex;align-items:center;justify-content:center}
.hero-art:before{content:"";position:absolute;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(253,242,247,.95),rgba(253,242,247,0) 72%);z-index:0}
.hero-art svg{position:relative;width:100%;height:auto;max-width:560px;z-index:1}
.proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
.proof-grid{display:grid;grid-template-columns:repeat(5,1fr)}
.proof-item{padding:28px 24px;border-right:1px solid var(--line)}
.proof-item:first-child{padding-left:0}.proof-item:last-child{border-right:0;padding-right:0}
.proof-item strong{display:block;color:var(--heading);font-size:16px;font-weight:600;line-height:1.3;margin-bottom:6px}
.proof-item span{display:block;font-size:16px;line-height:1.5;color:var(--body)}
.split-overview{display:grid;grid-template-columns:.78fr 1.22fr;gap:88px;align-items:start}
.sticky-head{position:sticky;top:36px}.sticky-head h2{max-width:520px}
.overview-copy{max-width:770px}
.principles{border-top:1px solid var(--line);margin-top:36px}
.principle{display:grid;grid-template-columns:12px 1fr;gap:18px;padding:24px 0;border-bottom:1px solid var(--line);align-items:start}
.principle>span{width:8px;height:8px;border-radius:50%;background:var(--magenta);margin-top:9px}
.principle h3{font-size:20px;margin-bottom:5px}.principle p{margin:0}
.expertise-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.expertise-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius-sm);padding:30px;min-height:245px}
.icon-box,.qa-icon{width:42px;height:42px;border-radius:14px;background:var(--blush);display:flex;align-items:center;justify-content:center;color:var(--magenta);margin-bottom:20px}
.icon-box svg,.qa-icon svg{width:23px;height:23px}
.expertise-card h3{font-size:22px;margin-bottom:10px}.expertise-card p{margin:0}
.document-matrix{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.document-group{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.document-group h3{font-size:21px;margin-bottom:15px}.document-group ul,.workflow-step ul,.engineering-panel ul,.ai-grid ul,.science-panel ul{list-style:none;margin:0;padding:0}.document-group li,.workflow-step li,.engineering-panel li,.ai-grid li,.science-panel li{position:relative;padding-left:18px;margin:8px 0;font-size:16px;line-height:1.5;color:var(--body)}
.document-group li:before,.workflow-step li:before,.engineering-panel li:before,.ai-grid li:before,.science-panel li:before{content:"";position:absolute;left:0;top:.72em;width:6px;height:1px;background:#929AA7}
.workflow{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #D8DCE3;border-bottom:1px solid #D8DCE3}
.workflow-step{padding:30px 28px;border-right:1px solid #D8DCE3}.workflow-step:last-child{border-right:0}
.step-number{color:var(--magenta);font-size:14px;font-weight:600;margin-bottom:18px}.workflow-step h3{font-size:22px;margin-bottom:10px}.workflow-step p{font-size:17px}.workflow-step li{font-size:16px}
.section-note{max-width:920px;margin:30px 0 0}.section-note a{color:var(--magenta);font-weight:600;text-decoration:none}.section-note a:hover{text-decoration:underline;text-underline-offset:3px}
.disclaimer{font-size:14px;color:#697181;margin:12px 0 0;max-width:920px}
.science-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:70px;align-items:start}.science-grid>div:first-child h2{margin-bottom:22px}
.editorial-link{display:inline-flex;align-items:center;gap:7px;color:var(--magenta)!important;text-decoration:none;font-weight:600;font-size:16px;line-height:1.4;margin-top:8px}.editorial-link:hover{text-decoration:underline;text-underline-offset:4px}.editorial-link:hover svg{transform:translateX(2px)}
.science-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff}.science-panel-col{padding:32px}.science-panel-col:first-child{border-right:1px solid var(--line)}.science-panel h3{font-size:20px;margin-bottom:18px}.tag{display:inline-block;padding:7px 10px;background:#F5F6F8;border-radius:999px;font-size:16px;line-height:1.2;margin:0 6px 8px 0;color:#444C59}
.dark-section{background:var(--dark);color:#F6F7F9}.dark-section h2,.dark-section h3{color:#fff}.dark-section p,.dark-section li{color:#D8DCE5}.dark-section .eyebrow{color:#F2A7C6!important}.dark-section .editorial-link{color:#F2A7C6!important}
.engineering-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.engineering-grid h2{margin-bottom:22px}.dark-links{display:flex;gap:28px;flex-wrap:wrap;margin-top:18px}
.engineering-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid #343946;border-radius:var(--radius);overflow:hidden;background:var(--dark-2)}.engineering-panel>div{padding:40px 42px}.engineering-panel>div:first-child{border-right:1px solid #343946}.engineering-panel h3{font-size:20px;margin-bottom:16px}.engineering-panel li{color:#D8DCE5}
.industrial-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:88px}.industrial-grid h2{margin-bottom:22px}.editorial-list{border-top:1px solid var(--line)}.editorial-row{display:grid;grid-template-columns:10px 1fr;gap:16px;padding:20px 0;border-bottom:1px solid var(--line);align-items:start}.editorial-row span{width:7px;height:7px;border-radius:50%;background:#AAB1BC;margin-top:10px}.editorial-row p{margin:0}.industry-links{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:24px;align-items:center}.industry-links a{font-size:16px;text-decoration:none;color:var(--magenta);font-weight:600;line-height:1.45}.industry-links a:hover{text-decoration:underline;text-underline-offset:4px}
.quadrants{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff}.quadrants article{padding:34px}.quadrants article:nth-child(odd){border-right:1px solid var(--line)}.quadrants article:nth-child(-n+2){border-bottom:1px solid var(--line)}.quadrants h3{font-size:22px;margin-bottom:10px}.quadrants p{margin:0}
.biodiversity-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:78px;align-items:center}.biodiversity-art{background:var(--soft);border-radius:var(--radius);min-height:390px;display:flex;align-items:center;justify-content:center}.biodiversity-art svg{width:86%;height:auto}.biodiversity-grid h2{margin-bottom:22px}.triple-list{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:30px 0}.triple-list>div{border-top:2px solid #D8DCE2;padding-top:18px}.triple-list h3{font-size:18px;margin-bottom:8px}.triple-list p{font-size:17px;margin:0}
.related-section{border-top:1px solid var(--line);background:#FAFAFB}.related-rows{border-top:1px solid var(--line)}.related-row{display:grid;grid-template-columns:1fr 280px;gap:24px;align-items:center;padding:28px 0;border-bottom:1px solid var(--line)}.related-row h3{font-size:21px;margin-bottom:6px}.related-row p{margin:0}.related-row .editorial-link{justify-self:end;text-align:right;margin:0}
.esg-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}.esg-grid h2{margin-bottom:22px}.esg-flow{display:grid;grid-template-columns:1fr auto 1fr;gap:18px;align-items:center}.esg-flow>div{background:#fff;border:1px solid #EACEDB;border-radius:var(--radius-sm);padding:28px}.esg-flow h3{font-size:20px;margin-bottom:10px}.esg-flow p{margin:0;font-size:17px}.flow-arrow{color:var(--magenta);font-size:28px}
.ai-section .section-head{max-width:920px}.ai-section .section-intro{color:#D8DCE5}.ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.ai-grid article{border:1px solid #343946;border-radius:var(--radius);padding:34px;background:var(--dark-2)}.ai-label{font-size:11px;letter-spacing:.15em;font-weight:600;color:#F2A7C6;margin-bottom:14px}.ai-grid h3{font-size:22px;margin-bottom:12px}.ai-grid p{color:#D8DCE5}.ai-grid li{color:#D8DCE5}.ai-footer{margin-top:22px;border-top:1px solid #343946;border-bottom:1px solid #343946;padding:22px 0;display:grid;grid-template-columns:280px 1fr;gap:24px}.ai-footer strong{color:#fff;font-weight:600}.ai-footer span{color:#D8DCE5}
.terminology-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:74px;align-items:center}.terminology-grid h2{margin-bottom:22px}.link-stack{display:flex;gap:24px;flex-wrap:wrap}.term-mockup{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff;box-shadow:0 12px 34px rgba(30,35,45,.06)}.mockup-top{display:flex;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--line);background:#F7F8FA;font-size:14px;color:#687180}.mockup-top span:first-child{color:var(--heading);font-weight:600}.term-row{display:grid;grid-template-columns:1fr auto 1fr auto;gap:14px;align-items:center;padding:18px 22px;border-bottom:1px solid var(--line)}.term-row div{min-width:0}.term-row small{display:block;font-size:11px;letter-spacing:.08em;color:#7B8492;margin-bottom:4px}.term-row strong{display:block;color:#2A303A;font-size:16px;font-weight:600;white-space:normal}.term-arrow{color:#9CA3AE}.approved{font-size:12px;font-weight:600;color:#6F2449;background:var(--blush);padding:5px 8px;border-radius:999px}.mockup-note{padding:17px 22px;font-size:17px;color:#687180;background:#FBFBFC}
.qa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line);background:#fff}.qa-grid article{display:flex;gap:16px;padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.qa-icon{flex:0 0 42px;margin:0}.qa-grid h3{font-size:19px;margin-bottom:7px}.qa-grid p{font-size:17px;margin:0}.final-format{margin-top:24px;padding:22px 28px;border-radius:18px;background:#fff;border:1px solid var(--line);display:grid;grid-template-columns:190px 1fr;gap:20px}.final-format strong{color:var(--heading);font-weight:600}.final-format p{margin:0}
.file-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:72px;align-items:start}.file-grid h2{margin-bottom:22px}.format-panel{border:1px solid var(--line);border-radius:var(--radius);padding:32px}.format-panel h3{font-size:19px;margin-bottom:14px}.format-panel h3:nth-of-type(2){margin-top:28px}.format-cloud{display:flex;flex-wrap:wrap;gap:8px}.format-cloud span{padding:8px 12px;border-radius:999px;background:#F5F6F8;font-size:16px;color:#3E4652}.format-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px}.format-list span{position:relative;padding-left:16px;font-size:16px}.format-list span:before{content:"";position:absolute;left:0;top:.76em;width:6px;height:1px;background:#969DA8}
.enterprise-section{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.team-grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line)}.team-grid article{padding:24px 20px;border-right:1px solid var(--line)}.team-grid article:first-child{padding-left:0}.team-grid article:last-child{border-right:0;padding-right:0}.team-grid h3{font-size:18px;margin-bottom:8px}.team-grid p{font-size:17px;margin:0}
.industries-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:84px}.industries-grid h2{margin-bottom:22px}.industries-list{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff}.industries-list>div{padding:34px 36px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;gap:14px;align-items:flex-start}.industries-list>div:nth-child(even){border-right:0}.industries-list>div:nth-last-child(-n+2){border-bottom:0}.industries-list span{width:7px;height:7px;border-radius:50%;background:var(--magenta);margin-top:9px;flex:0 0 auto}.industries-list strong{display:block;color:#2B313B;font-weight:600;font-size:18px;line-height:1.35;margin-bottom:9px}.industries-list p{font-size:17px;line-height:1.55;margin:0;color:var(--body)}
.language-section{background:#FAFAFB}.language-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px}.language-grid h2{margin-bottom:22px}.region-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.region-grid article{padding-top:18px;border-top:2px solid #D5D9E0}.region-grid h3{font-size:19px;margin-bottom:8px}.region-grid p{font-size:17px;margin:0}
.reasons-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:#fff}.reasons-grid article{padding:28px 30px;border-bottom:1px solid var(--line)}.reasons-grid article:nth-child(odd){border-right:1px solid var(--line)}.reasons-grid article:nth-last-child(-n+2){border-bottom:0}.reasons-grid h3{font-size:19px;margin-bottom:8px}.reasons-grid p{margin:0;font-size:17px}
.faq-layout{display:grid;grid-template-columns:.66fr 1.34fr;gap:72px;align-items:start}.faq-heading{position:sticky;top:36px}.faq-heading h2{margin-bottom:18px}.faq-heading p{max-width:390px}.faq-panel{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line)}summary{display:flex;justify-content:space-between;gap:24px;align-items:center;cursor:pointer;list-style:none;padding:22px 0;color:var(--heading);font-weight:600;font-size:18px;line-height:1.35}summary::-webkit-details-marker{display:none}.faq-plus{font-size:24px;font-weight:400;color:#7A828F;transition:.2s ease}details[open] .faq-plus{transform:rotate(45deg);color:var(--magenta)}.faq-answer{padding:0 48px 22px 0;max-width:840px}.faq-answer p{margin:0;font-size:17px}
.final-cta{background:var(--blush);padding:88px 0}.cta-inner{display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center}.cta-inner h2{max-width:760px;margin-bottom:18px}.cta-inner p{max-width:820px}.cta-support{font-size:14px!important;color:#6B7482;margin:22px 0 0!important}.cta-actions{display:flex;flex-direction:column;gap:12px;min-width:230px}.cta-actions .btn{width:100%}
@media (max-width:1100px){.container{width:min(1280px,calc(100% - 80px))}.hero-grid{grid-template-columns:1fr .9fr;gap:38px}.hero-art{min-height:400px}.proof-grid{grid-template-columns:repeat(3,1fr)}.proof-item{border-bottom:1px solid var(--line)}.proof-item:nth-child(3){border-right:0}.proof-item:nth-child(4),.proof-item:nth-child(5){border-bottom:0}.split-overview,.industrial-grid,.terminology-grid,.industries-grid{gap:54px}.expertise-grid{grid-template-columns:repeat(2,1fr)}.document-matrix{grid-template-columns:repeat(2,1fr)}.workflow{grid-template-columns:repeat(2,1fr)}.workflow-step:nth-child(2){border-right:0}.workflow-step:nth-child(-n+2){border-bottom:1px solid #D8DCE3}.science-grid,.engineering-grid,.biodiversity-grid,.esg-grid,.file-grid,.language-grid{gap:48px}.team-grid{grid-template-columns:repeat(3,1fr)}.team-grid article{border-bottom:1px solid var(--line)}.team-grid article:nth-child(3){border-right:0}.team-grid article:nth-child(4),.team-grid article:nth-child(5){border-bottom:0}.related-row{grid-template-columns:1fr 240px}.cta-inner{grid-template-columns:1fr}.cta-actions{flex-direction:row;min-width:0}.cta-actions .btn{width:auto}}
@media (max-width:768px){.container{width:calc(100% - 48px)}.section{padding:72px 0}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero{padding:84px 0 72px}.hero-grid,.split-overview,.science-grid,.engineering-grid,.industrial-grid,.biodiversity-grid,.esg-grid,.terminology-grid,.file-grid,.industries-grid,.language-grid,.faq-layout{grid-template-columns:1fr}.engineering-grid,.industries-grid{gap:42px}.hero-copy{text-align:center}.hero-copy .eyebrow{margin-left:auto!important;margin-right:auto!important}.hero-copy h1,.hero-copy>p{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-art{min-height:340px;margin-top:8px}.hero-art svg{max-width:500px}.proof-grid{grid-template-columns:repeat(2,1fr)}.proof-item{padding:22px 18px;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important}.proof-item:nth-child(even){border-right:0!important}.proof-item:last-child{grid-column:1/-1;border-bottom:0!important;padding-right:18px}.sticky-head,.faq-heading{position:static}.sticky-head{text-align:center}.sticky-head h2{margin-left:auto;margin-right:auto}.overview-copy{max-width:none}.section-head:not(.section-head--left){text-align:center}.expertise-grid,.document-matrix,.qa-grid,.reasons-grid{grid-template-columns:1fr 1fr}.workflow{grid-template-columns:1fr}.workflow-step{border-right:0;border-bottom:1px solid #D8DCE3!important}.workflow-step:last-child{border-bottom:0!important}.science-panel,.engineering-panel{grid-template-columns:1fr}.science-panel-col:first-child,.engineering-panel>div:first-child{border-right:0;border-bottom:1px solid var(--line)}.dark-section .engineering-panel>div:first-child{border-bottom-color:#343946}.engineering-panel>div{padding:34px 36px}.industries-list>div{padding:30px 32px}.biodiversity-art{max-width:520px;margin:0 auto}.triple-list{grid-template-columns:1fr}.related-row{grid-template-columns:1fr}.related-row .editorial-link{grid-column:1;justify-self:start;text-align:left}.esg-flow{grid-template-columns:1fr}.flow-arrow{transform:rotate(90deg);text-align:center}.ai-grid{grid-template-columns:1fr}.ai-footer{grid-template-columns:1fr}.term-mockup{overflow:hidden}.term-row{min-width:650px}.team-grid{grid-template-columns:1fr 1fr}.team-grid article{padding:22px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)!important}.team-grid article:nth-child(even){border-right:0}.team-grid article:last-child{grid-column:1/-1;border-bottom:0!important;border-right:0}.region-grid{grid-template-columns:1fr 1fr}.faq-heading{text-align:center}.faq-heading p{margin-left:auto;margin-right:auto}.faq-panel{max-width:900px;margin:0 auto}.cta-inner{text-align:center}.cta-inner p{margin-left:auto;margin-right:auto}.cta-actions{justify-content:center}.cta-support{text-align:center}}
@media (max-width:560px){.container{width:calc(100% - 40px)}.section{padding:68px 0}.hero{padding:72px 0 66px}.hero-grid{gap:28px}h1{font-size:38px}h2{font-size:30px}h3{font-size:20px}.hero-lead,.lead,.section-intro{font-size:18px}.hero-copy p{font-size:17px}.hero-actions{flex-direction:column}.hero-actions .btn{width:100%}.hero-art{min-height:285px}.proof-grid{grid-template-columns:1fr}.proof-item,.proof-item:nth-child(even){border-right:0!important;border-bottom:1px solid var(--line)!important;padding:20px 0}.proof-item:last-child{grid-column:auto;border-bottom:0!important;padding:20px 0}.section-head{margin-bottom:38px}.section-head h2{max-width:100%}.section-intro{text-align:center}.split-overview{gap:34px}.principle{grid-template-columns:10px 1fr}.expertise-grid,.document-matrix,.qa-grid,.reasons-grid{grid-template-columns:1fr}.expertise-card{padding:26px;min-height:0}.document-group{padding:26px}.workflow-step{padding:26px 0}.science-panel{border-radius:22px}.science-panel-col{padding:25px}.engineering-panel{border-radius:22px}.engineering-panel>div{padding:30px 28px}.industrial-grid{gap:34px}.quadrants{grid-template-columns:1fr}.quadrants article{padding:26px;border-right:0!important;border-bottom:1px solid var(--line)!important}.quadrants article:last-child{border-bottom:0!important}.biodiversity-grid{gap:34px}.biodiversity-art{min-height:300px}.related-row{grid-template-columns:1fr;gap:14px}.related-row{padding:24px 0}.esg-grid{gap:34px}.esg-flow>div{padding:24px}.ai-grid article{padding:26px}.dark-links,.link-stack{flex-direction:column;align-items:flex-start;gap:8px}.term-mockup{margin-top:4px}.term-row{min-width:0;grid-template-columns:1fr}.term-arrow{transform:rotate(90deg);justify-self:start}.approved{justify-self:start}.qa-grid article{padding:24px}.final-format{grid-template-columns:1fr;padding:22px}.format-panel{padding:26px}.format-list{grid-template-columns:1fr}.team-grid{grid-template-columns:1fr}.team-grid article,.team-grid article:nth-child(even),.team-grid article:last-child{grid-column:auto;border-right:0;border-bottom:1px solid var(--line)!important;padding:22px 0}.team-grid article:last-child{border-bottom:0!important}.industries-list{grid-template-columns:1fr}.industries-list>div,.industries-list>div:nth-child(even),.industries-list>div:nth-last-child(-n+2){border-right:0;border-bottom:1px solid var(--line);padding:28px}.industries-list>div:last-child{border-bottom:0}.region-grid{grid-template-columns:1fr}.reasons-grid article,.reasons-grid article:nth-child(odd),.reasons-grid article:nth-last-child(-n+2){border-right:0;border-bottom:1px solid var(--line)}.reasons-grid article:last-child{border-bottom:0}.faq-layout{gap:32px}.faq-heading{text-align:center}summary{font-size:17px;padding:20px 0}.faq-answer{padding-right:0}.cta-actions{flex-direction:column}.cta-actions .btn{width:100%}.final-cta{padding:72px 0}}
@media (max-width:360px){.container{width:calc(100% - 40px)}.hero-art{min-height:250px}.expertise-card,.document-group,.ai-grid article,.format-panel{padding-left:22px;padding-right:22px}.tag{font-size:16px}.term-row{min-width:0}}
@media (min-width:769px){.stepes-page h3{font-size:24px}}
@media (max-width:768px) and (min-width:561px){.stepes-page h3{font-size:22px}}
@media (max-width:560px){.stepes-page h3{font-size:20px}}
`;
