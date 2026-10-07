import React from "react";

const MAGENTA = "#C11D63";

const valueChain = [
  { title: "Bauxite & Alumina", text: "Mining, ore processing, material handling, alumina refining, laboratory analysis, safety, and environmental documentation." },
  { title: "Primary Aluminum", text: "Smelting, electrolysis, anode production, potroom operations, casthouse processes, molten-metal handling, and plant maintenance." },
  { title: "Casting & Alloying", text: "Alloy preparation, billet and slab casting, foundry operations, heat treatment, metallurgical control, inspection, and testing." },
  { title: "Rolling & Extrusion", text: "Hot and cold rolling, sheet, plate, coil, foil, extrusion presses, dies, profiles, drawing, forming, and dimensional control." },
  { title: "Fabrication & Manufacturing", text: "Cutting, machining, forming, welding, joining, assembly, anodizing, coating, finishing, and downstream production." },
  { title: "Recycling & Secondary Aluminum", text: "Scrap collection, sorting, remelting, recycled-content documentation, material traceability, and circular manufacturing." },
];

const upstream = [
  ["Bauxite mining", "Geological information, mining plans, equipment manuals, inspection procedures, environmental materials, and workforce training."],
  ["Alumina refining", "Refinery procedures, Bayer process documentation, digestion, clarification, precipitation, calcination, process control, and laboratory content."],
  ["Smelting & casthouse", "Electrolysis, potroom operations, anode handling, furnaces, degassing, filtration, alloy preparation, casting, automation, and EHS content."],
];

const manufacturing = [
  ["Casting", "Direct chill and continuous casting, ingot, billet and slab production, foundry operations, melt treatment, tooling, inspection, and quality."],
  ["Rolling", "Hot and cold rolling, sheet and plate, coil processing, foil rolling, thickness control, annealing, finishing, and inspection."],
  ["Extrusion", "Presses, billet preparation, dies and tooling, profile manufacturing, quenching, stretching, aging, cutting, and dimensional inspection."],
  ["Fabrication", "CNC machining, milling, turning, cutting, stamping, bending, forging, welding, brazing, bonding, and mechanical joining."],
  ["Finishing", "Heat treatment, anodizing, conversion coatings, painting, powder coating, polishing, surface preparation, and corrosion protection."],
];

const technicalDocs = [
  { title: "Engineering & Product", items: ["Material and product specifications", "Technical datasheets", "Engineering drawings and drawing notes", "Bills of materials", "Design and process specifications", "Installation instructions and technical reports"] },
  { title: "Production & Operations", items: ["SOPs and work instructions", "Production procedures", "Machine setup instructions", "Process-control documentation", "Plant procedures and operator guides", "Process-change documentation"] },
  { title: "Quality & Laboratory", items: ["Quality manuals and plans", "Mill test certificates", "Certificates of analysis", "Inspection and test reports", "Laboratory and sampling procedures", "Supplier quality requirements"] },
  { title: "Maintenance, Safety & EHS", items: ["Preventive maintenance and repair", "Troubleshooting and service bulletins", "Safety procedures and equipment warnings", "Safety Data Sheets (SDS) and chemical-handling information", "Emergency procedures", "Environmental and compliance content"] },
  { title: "Product, Sales & Training", items: ["Product catalogs and brochures", "Customer specifications", "RFQs, RFPs, and proposals", "Websites and application guides", "Operator and maintenance training", "eLearning and onboarding content"] },
];

const industries = [
  { title: "Automotive & EV", text: "Body structures, chassis systems, battery enclosures, thermal-management components, castings, extrusions, and supplier documentation.", href: "https://www.stepes.com/automotive-translation-services/", linkLabel: "Automotive Translation Services" },
  { title: "Aerospace & Aviation", text: "Aerospace alloys, structural components, manufacturing procedures, inspection criteria, maintenance information, and supplier quality content.", href: "https://www.stepes.com/aviation-translation-services/", linkLabel: "Aerospace & Aviation Translation Services" },
  { title: "Construction & Architecture", text: "Extrusions, curtain-wall systems, facades, windows and doors, roofing, structural components, installation instructions, and specifications." },
  { title: "Packaging", text: "Beverage cans, food containers, closures, foil, flexible packaging, pharmaceutical packaging, machinery, and recycling programs." },
  { title: "Electrical & Energy", text: "Conductors, cables, busbars, transmission systems, renewable-energy components, grid equipment, and power infrastructure.", href: "https://www.stepes.com/energy-translation-services/", linkLabel: "Energy Translation Services" },
  { title: "Electronics & Technology", text: "Electronic housings, heat sinks, thermal-management systems, device enclosures, precision components, and manufacturing systems." },
  { title: "Industrial Equipment", text: "Industrial machinery, automation, material handling, process equipment, robotics, machine tools, and factory systems.", href: "https://www.stepes.com/industrial-translation-services/", linkLabel: "Industrial Translation Services" },
  { title: "Rail, Marine & Transport", text: "Railcars, commercial vehicles, marine structures, specialty vehicles, mobility systems, and transportation infrastructure." },
];

const nonFerrous = [
  ["Copper", "Electrical systems, energy, electronics, construction, tubing, alloys, and industrial products."],
  ["Nickel", "Specialty alloys, batteries, energy storage, corrosion-resistant materials, and chemical processing."],
  ["Zinc", "Galvanizing, coatings, die casting, alloys, batteries, construction, and corrosion protection."],
  ["Titanium", "Aerospace, medical devices, chemical processing, energy, and high-performance engineering."],
  ["Magnesium", "Lightweight structures, die-cast components, automotive, aerospace, electronics, and specialty manufacturing."],
];

const workflowModes = [
  { title: "Expert-Led Translation", fit: "Technically complex, safety-sensitive, regulatory, novel, or high-value customer content.", flow: "Technical translator → Professional review → QA → Customer approval" },
  { title: "AI + Expert Review", fit: "Large, repetitive, or frequently updated content where approved terminology and translation memory increase efficiency.", flow: "AI + translation memory → Technical post-editing → QA → Approval" },
  { title: "High-Volume Operational Translation", fit: "Fast-moving operational information where review requirements can be aligned with business risk.", flow: "Controlled AI workflow → Automated QA → Targeted human review" },
];

const qaSteps = [
  ["Content & Risk Assessment", "Review subject matter, audience, complexity, languages, file formats, confidentiality, terminology, and quality requirements."],
  ["Specialized Resource Selection", "Assign linguists and reviewers according to language pair, aluminum or materials knowledge, engineering discipline, and document type."],
  ["Terminology Preparation", "Apply approved glossaries and translation memories, identify material designations, and establish project-specific language rules."],
  ["Translation & Localization", "Use the appropriate combination of professional translation, translation memory, AI assistance, technical post-editing, and specialist review."],
  ["Technical & Linguistic QA", "Check completeness, terminology, numbers, units, alloy and temper designations, values, tables, symbols, references, and formatting."],
  ["Customer Review & Improvement", "Incorporate approved engineering, quality, regional, and business feedback into shared language assets for future projects."],
];

const related = [
  ["Metal Translation Services", "https://www.stepes.com/metal-translation-services/"],
  ["Steel Translation Services", "https://www.stepes.com/steel-translation-services/"],
  ["Mining Translation Services", "https://www.stepes.com/mining-translation-services/"],
  ["Materials Science Translation Services", "https://www.stepes.com/materials-science-translation-services/"],
  ["Manufacturing Translation Services", "https://www.stepes.com/manufacturing-translation-services/"],
  ["MRO Translation Services", "https://www.stepes.com/mro-translation-services/"],
  ["Heavy Equipment Translation Services", "https://www.stepes.com/heavy-equipment-translation-services/"],
  ["ESG & Sustainability Translation Services", "https://www.stepes.com/esg-translation-services/"],
];

const faqs = [
  ["What types of aluminum documents does Stepes translate?", "Stepes translates engineering and material specifications, datasheets, SOPs, work instructions, manuals, drawings, quality documents, mill test certificates, laboratory materials, maintenance procedures, training content, sustainability reports, supplier documentation, catalogs, websites, and other aluminum-industry content."],
  ["Does Stepes translate aluminum alloy and material specifications?", "Yes. We translate alloy specifications, chemical compositions, temper designations, mechanical and physical properties, heat-treatment requirements, dimensional tolerances, test procedures, and other materials-engineering content, with terminology and technical-data checks built into the workflow."],
  ["Can Stepes support rolling mills, extruders, foundries, and fabricators?", "Yes. Stepes supports aluminum producers and processors across casting, rolling, extrusion, forging, drawing, machining, forming, welding, joining, heat treatment, anodizing, coating, finishing, inspection, and downstream fabrication."],
  ["Do you translate content for bauxite mining and alumina refining?", "Yes. Stepes supports upstream operations with translation for bauxite mining, raw-material handling, alumina refining, process engineering, equipment operation, maintenance, laboratory testing, training, safety, environmental documentation, and supplier communications."],
  ["Can Stepes translate sustainability, recycling, and CBAM documentation?", "Yes. We translate sustainability reports, carbon and emissions information, supplier environmental data, responsible sourcing content, recycled-content documentation, chain-of-custody materials, life-cycle information, environmental disclosures, and aluminum-related CBAM documentation. Regulatory calculations, legal interpretations, certifications, and compliance decisions remain with the responsible organizations and qualified authorities."],
  ["How does Stepes maintain consistent aluminum terminology?", "Stepes uses multilingual terminology databases, translation memory, client reference materials, approved glossaries, reviewer feedback, and automated quality checks to maintain consistent language across alloys, tempers, manufacturing processes, equipment, product families, test methods, material properties, safety language, and sustainability terminology."],
  ["Does Stepes use AI for aluminum translations?", "Yes, when appropriate. Stepes combines AI translation, translation memory, professional linguists, technical post-editing, independent review, and automated quality assurance according to the content's complexity, risk, audience, and business purpose."],
  ["Does Stepes translate other non-ferrous metals?", "Yes. In addition to aluminum, Stepes supports copper, nickel, zinc, titanium, magnesium, specialty alloys, and other non-ferrous metal applications across mining, refining, metallurgy, manufacturing, fabrication, energy, electronics, transportation, and construction."],
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function HeroArt() {
  return (
    <svg className="hero-art" aria-hidden="true" viewBox="0 0 620 650" fill="none">
      <g stroke="#697384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M82 511h462"/>
        <path d="M112 498v-153h118v153M142 345v-64h59v64"/>
        <path d="M129 281h84l-14-88h-56l-14 88Z"/>
        <path d="M153 193v-44M189 193v-58"/>
        <path d="M248 498V276h112v222M274 276v-72h60v72"/>
        <path d="M270 204h68l-10-75h-48l-10 75Z"/>
        <path d="M386 498v-119h130v119"/>
        <path d="M403 379v-54h95v54M419 325v-53h63v53"/>
        <path d="M102 411h117M258 359h92M399 426h105"/>
        <path d="M84 541h166c25 0 38 12 38 28s-13 28-38 28H84"/>
        <path d="M106 558h136c11 0 18 4 18 11s-7 11-18 11H106"/>
        <path d="M343 554c17-26 49-44 86-44 56 0 101 37 101 82"/>
        <path d="M520 572l10 20-22 3"/>
        <path d="M389 587c-18-9-31-24-37-43"/>
        <path d="M349 558l3-14 15 4"/>
        <path d="M409 146h77l43 68-43 68h-77l-43-68 43-68Z"/>
        <path d="M397 214h101M447 146v136"/>
        <path d="M439 214h16M447 206v16"/>
        <path d="M75 124c76-47 158-69 244-62" stroke="#C11D63" strokeWidth="3"/>
        <path d="m310 53 12 9-10 12" stroke="#C11D63" strokeWidth="3"/>
      </g>
      <g fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.6">
        <circle cx="113" cy="345" r="9"/><circle cx="248" cy="276" r="9"/><circle cx="386" cy="379" r="9"/><circle cx="530" cy="592" r="9"/>
      </g>
    </svg>
  );
}

function PageLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<Arrow /></a>;
}

export default function AluminumTranslationServicesWireframe() {
  return (
    <>
      <style>{styles}</style>
      <main className="page-shell">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Aluminum Translation Services</h1>
              <p className="hero-lead">Specialized translation and localization for aluminum producers, processors, fabricators, equipment manufacturers, suppliers, and global organizations across the complete aluminum value chain.</p>
              <p className="hero-support">From bauxite and alumina to smelting, casting, rolling, extrusion, fabrication, finished products, and recycling, Stepes helps aluminum companies communicate complex technical information accurately across languages, facilities, suppliers, customers, and international markets.</p>
              <div className="button-row">
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Arrow /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales <Arrow /></a>
              </div>
              <div className="hero-trust" aria-label="Service highlights">
                <span>100+ languages</span><span>Technical & materials expertise</span><span>AI + expert review</span>
              </div>
            </div>
            <div className="hero-visual"><HeroArt /></div>
          </div>
        </section>

        <section className="proof-band" aria-label="Aluminum translation coverage">
          <div className="container proof-grid">
            <div><strong>Complete Value Chain</strong><span>Upstream through recycling</span></div>
            <div><strong>Technical Accuracy</strong><span>Alloys, specifications & QA</span></div>
            <div><strong>Global Manufacturing</strong><span>Plants, suppliers & customers</span></div>
            <div><strong>Enterprise Delivery</strong><span>Terminology, TM & review</span></div>
          </div>
        </section>

        <section className="section" id="value-chain">
          <div className="container">
            <div className="heading-group centered">
              <p className="eyebrow">FROM BAUXITE TO RECYCLED ALUMINUM</p>
              <h2>Translation Expertise Across the Aluminum Value Chain</h2>
              <p>Aluminum moves through a highly specialized global value chain before becoming an aircraft component, vehicle structure, building system, beverage can, electrical conductor, industrial product, or consumer device. Each stage introduces its own engineering terminology, production processes, quality requirements, and documentation.</p>
            </div>
            <div className="chain-grid">
              {valueChain.map((item, i) => (
                <article className="chain-item" key={item.title}>
                  <div className="chain-marker" aria-hidden="true"><span></span>{i < valueChain.length - 1 && <i></i>}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <p className="section-note">From alloy specifications and production procedures to product documentation and sustainability information, Stepes helps protect specialized aluminum terminology throughout the material lifecycle.</p>
          </div>
        </section>

        <section className="section surface-soft">
          <div className="container editorial-split">
            <div className="sticky-heading">
              <p className="eyebrow">UPSTREAM & PRIMARY PRODUCTION</p>
              <h2>Bauxite, Alumina and Primary Aluminum Translation</h2>
              <p>Global bauxite mining, alumina refining, smelting, and casthouse operations depend on precise communication between engineers, equipment suppliers, plant personnel, contractors, laboratories, regulators, and corporate teams.</p>
              <PageLink href="https://www.stepes.com/mining-translation-services/">Mining Translation Services</PageLink>
            </div>
            <div className="editorial-rows">
              {upstream.map(([title, text]) => <div className="editorial-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
              <div className="context-link-row"><PageLink href="https://www.stepes.com/industrial-translation-services/">Industrial Translation Services</PageLink></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="heading-group">
              <p className="eyebrow">PROCESSING & FABRICATION</p>
              <h2>Aluminum Manufacturing Translation Services</h2>
              <p>Transforming primary aluminum into finished and semi-finished products requires precise control of metallurgy, machinery, process parameters, tolerances, and quality. Stepes supports aluminum mills, extruders, foundries, fabricators, component manufacturers, and equipment companies with multilingual technical content throughout production.</p>
            </div>
            <div className="manufacturing-list">
              {manufacturing.map(([title, text]) => <div className="manufacturing-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <PageLink href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services</PageLink>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <div className="dark-intro">
              <div>
                <p className="eyebrow">MATERIALS & METALLURGY</p>
                <h2>Accurate Translation for Aluminum Alloys and Material Specifications</h2>
              </div>
              <p>Aluminum is not a single material. Performance depends on alloy composition, temper, processing method, heat treatment, product form, and application. Technical translation must preserve the material terminology, values, designations, and engineering relationships that define the product.</p>
            </div>
            <div className="spec-columns">
              <div><h3>Alloy & Metallurgical Terminology</h3><p>Wrought and cast alloys, alloy series, temper designations, chemical composition, alloying elements, microstructure, heat treatment, corrosion behavior, weldability, formability, and machinability.</p></div>
              <div><h3>Mechanical & Physical Properties</h3><p>Tensile and yield strength, elongation, hardness, fatigue performance, thermal and electrical conductivity, density, thermal expansion, and surface characteristics.</p></div>
              <div><h3>Dimensions & Product Requirements</h3><p>Thickness, width, diameter, flatness, straightness, tolerances, surface finish, product condition, inspection criteria, acceptance limits, and test values.</p></div>
            </div>
            <div className="risk-callout"><strong>Technical data integrity matters.</strong><p>An incorrect alloy designation, temper, measurement, tolerance, test parameter, or chemical value can affect the product itself. Stepes builds terminology and technical-data checks into the workflow to help protect linguistic and engineering accuracy.</p></div>
            <PageLink href="https://www.stepes.com/materials-science-translation-services/">Materials Science Translation Services</PageLink>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="heading-group centered">
              <h2>Aluminum Technical Translation Services</h2>
              <p>Aluminum companies create technical information across engineering, production, quality, maintenance, safety, supply chain, sales, and customer support. Stepes translates these content streams through one coordinated multilingual workflow.</p>
            </div>
            <div className="doc-grid">
              {technicalDocs.map((group) => <article className="doc-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
            </div>
            <div className="link-pair">
              <PageLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</PageLink>
              <PageLink href="https://www.stepes.com/mro-translation-services/">MRO Translation Services</PageLink>
            </div>
          </div>
        </section>

        <section className="section surface-soft">
          <div className="container">
            <div className="heading-group centered">
              <p className="eyebrow">DOWNSTREAM APPLICATIONS</p>
              <h2>Aluminum Across Global Industries</h2>
              <p>Aluminum combines low weight, strength, formability, conductivity, corrosion resistance, recyclability, and design flexibility. Stepes helps producers and downstream manufacturers translate specialized content for the industries that depend on these properties.</p>
            </div>
            <div className="industry-grid">
              {industries.map((item) => <article className="industry-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p>{item.href && <PageLink href={item.href}>{item.linkLabel}</PageLink>}</article>)}
            </div>
          </div>
        </section>

        <section className="section sustainability-section">
          <div className="container sustainability-grid">
            <div className="sustainability-main">
              <p className="eyebrow">CIRCULAR ALUMINUM</p>
              <h2>Sustainability and Aluminum Recycling Translation</h2>
              <p className="lead">Sustainability is increasingly connected to how aluminum is produced, sourced, processed, transported, used, recovered, and recycled. Stepes helps global teams communicate environmental information across operations, suppliers, customers, and markets.</p>
              <div className="two-col-lists">
                <div><h3>Recycling & Circularity</h3><p>Post- and pre-consumer scrap, sorting, separation, remelting, secondary aluminum, recycled-content calculations, closed-loop recycling, material recovery, circular manufacturing, and resource efficiency.</p></div>
                <div><h3>Decarbonization & Low-Carbon Aluminum</h3><p>Renewable electricity, smelter decarbonization, energy efficiency, process emissions, emissions reduction, carbon intensity, climate targets, technology development, and carbon accounting.</p></div>
                <div><h3>Responsible Sourcing & Traceability</h3><p>Supplier questionnaires, chain-of-custody documentation, material traceability, supplier declarations, audit materials, due diligence, procurement requirements, and recycled-content information.</p></div>
                <div><h3>ESG & Environmental Reporting</h3><p>Sustainability reports, climate reporting, Scope 1, 2 and 3 content, life-cycle information, environmental product declarations, carbon-footprint documentation, and investor communications.</p></div>
              </div>
              <PageLink href="https://www.stepes.com/esg-translation-services/">ESG & Sustainability Translation Services</PageLink>
            </div>
            <aside className="cbam-panel">
              <h3>CBAM and Aluminum Regulatory Translation</h3>
              <p>Carbon and environmental requirements create multilingual information flows between producers, exporters, suppliers, importers, customers, verification organizations, and regulatory stakeholders.</p>
              <ul>
                <li>Embedded-emissions information</li><li>Supplier emissions data</li><li>Supporting calculations and methodologies</li><li>Facility and production information</li><li>Declarations and verification materials</li><li>Regulatory guidance and compliance procedures</li><li>Importer, supplier, and customer communications</li>
              </ul>
              <p className="disclaimer">Stepes provides translation and localization services for these materials. Regulatory determinations, calculations, certifications, and legal compliance remain with the responsible organizations and qualified authorities.</p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container split-equal">
            <div>
              <p className="eyebrow">GLOBAL OPERATIONS</p>
              <h2>Multilingual Support for Aluminum Supply Chains</h2>
              <p>Aluminum connects mines, refineries, smelters, rolling mills, extruders, foundries, fabricators, equipment manufacturers, logistics providers, distributors, recyclers, OEMs, and customers around the world.</p>
              <div className="quiet-list"><h3>Procurement & Supplier Management</h3><p>RFQs and RFPs, purchase specifications, supplier agreements, onboarding materials, procurement procedures, vendor requirements, supplier quality documentation, and audit content.</p></div>
              <div className="quiet-list"><h3>Logistics & Distribution</h3><p>Packaging specifications, shipping documentation, handling instructions, warehousing procedures, transportation documentation, import/export materials, and customs-related content.</p></div>
              <div className="quiet-list"><h3>Commercial & Customer Requirements</h3><p>Customer specifications, technical quotations, contracts, product documentation, questionnaires, sales materials, and technical correspondence.</p></div>
            </div>
            <div className="nonferrous-panel">
              <p className="eyebrow">BEYOND ALUMINUM</p>
              <h2>Translation Services for Non-Ferrous Metals</h2>
              <p>Stepes also supports specialized technical translation for the broader non-ferrous metals ecosystem.</p>
              <div className="metal-rows">{nonFerrous.map(([title,text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
              <PageLink href="https://www.stepes.com/metal-translation-services/">Metal Translation Services</PageLink>
            </div>
          </div>
        </section>

        <section className="section surface-soft">
          <div className="container">
            <div className="heading-group centered">
              <p className="eyebrow">RIGHT WORKFLOW FOR THE CONTENT</p>
              <h2>AI-Enabled Translation With Expert Technical Review</h2>
              <p>Aluminum companies manage content with different levels of technical risk, repetition, urgency, audience, and publication requirements. Stepes matches the translation method to the content instead of applying one workflow to everything.</p>
            </div>
            <div className="workflow-mode-grid">
              {workflowModes.map((m) => <article className="workflow-mode" key={m.title}><h3>{m.title}</h3><p>{m.fit}</p><div className="workflow-flow">{m.flow}</div></article>)}
            </div>
            <p className="section-note narrow">By applying different workflows to different content streams, Stepes helps aluminum companies balance accuracy, speed, scalability, and translation cost.</p>
          </div>
        </section>

        <section className="section">
          <div className="container terminology-layout">
            <div>
              <p className="eyebrow">LANGUAGE ASSETS</p>
              <h2>Consistent Aluminum Terminology Across Languages</h2>
              <p>The same alloy, process, product, equipment component, or technical concept can appear in specifications, SOPs, machine interfaces, laboratory reports, product catalogs, training, quality documentation, and customer communications. Stepes centralizes approved multilingual terminology so global teams can communicate with greater consistency.</p>
              <div className="term-cloud" aria-label="Terminology categories"><span>Alloys</span><span>Temper designations</span><span>Material grades</span><span>Processes</span><span>Equipment</span><span>Product families</span><span>Test methods</span><span>Safety language</span><span>Sustainability</span></div>
            </div>
            <div className="tm-panel">
              <h3>Translation Memory & Content Reuse</h3>
              <p>Translation memory securely stores previously approved multilingual content for reuse where appropriate. This is especially valuable for recurring product specifications, manuals, SOPs, maintenance procedures, quality documents, catalogs, training, and sustainability materials.</p>
              <div className="mini-flow"><span>Analyze</span><i></i><span>Standardize</span><i></i><span>Translate</span><i></i><span>Review</span><i></i><span>Reuse</span></div>
              <p>Instead of translating unchanged content repeatedly, Stepes can reuse approved language while focusing linguistic attention on new or modified information.</p>
            </div>
          </div>
        </section>

        <section className="section qa-section">
          <div className="container">
            <div className="heading-group">
              <p className="eyebrow">DATA INTEGRITY</p>
              <h2>Quality Assurance for Aluminum Translation</h2>
              <p>Quality for industrial translation extends beyond grammar. Numbers, units, material codes, tables, formatting, cross-references, and controlled terminology can be just as important as the words surrounding them.</p>
            </div>
            <div className="qa-flow">
              {qaSteps.map(([title,text], i) => <article className="qa-step" key={title}><div className="qa-num">{String(i+1).padStart(2,"0")}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section surface-soft">
          <div className="container split-equal">
            <div>
              <p className="eyebrow">FILES & PUBLISHING</p>
              <h2>Translate Complex Aluminum Documentation in Its Original Format</h2>
              <p>Industrial documentation rarely arrives as simple text. Stepes combines translation with localization engineering and multilingual publishing for technical files, structured content, graphics, tables, and publication layouts.</p>
              <div className="file-tags"><span>Word</span><span>Excel</span><span>PowerPoint</span><span>PDF</span><span>InDesign</span><span>Illustrator</span><span>XML</span><span>HTML</span><span>XLIFF</span><span>CSV</span><span>CAD exports</span><span>Graphics & diagrams</span></div>
              <p>Multilingual desktop publishing accounts for language expansion, fonts, tables, graphics, page flow, labels, numerical content, and final visual QA.</p>
            </div>
            <div>
              <h2>Aluminum Translation in 100+ Languages</h2>
              <p>Stepes supports global production, trade, workforce communication, and market expansion with professional translation across major aluminum production and customer markets.</p>
              <p className="language-line">Spanish · French · German · Italian · Portuguese · Dutch · Polish · Czech · Romanian · Turkish · Chinese · Japanese · Korean · Vietnamese · Thai · Indonesian · Arabic · and more</p>
              <p>Known as <strong>aluminum</strong> in American English and <strong>aluminium</strong> across many other English-speaking markets, the terminology may vary by region, but the requirement for technically accurate multilingual communication remains the same.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="heading-group centered">
              <p className="eyebrow">ENTERPRISE DELIVERY</p>
              <h2>Built for Global Aluminum and Manufacturing Programs</h2>
              <p>From an individual datasheet to recurring multilingual programs across plants, products, suppliers, and markets, Stepes combines technical expertise with reusable language assets and coordinated delivery.</p>
            </div>
            <div className="enterprise-grid">
              <div><h3>Technical & Materials Expertise</h3><p>Resources selected for engineering, metallurgy, manufacturing, quality, sustainability, and operational content.</p></div>
              <div><h3>Enterprise Terminology</h3><p>Keep alloy names, material properties, processes, equipment, products, and technical language consistent.</p></div>
              <div><h3>AI + Human Expertise</h3><p>Use AI, translation memory, professional linguists, specialist review, and automated QA in combinations appropriate to the content.</p></div>
              <div><h3>Technical File Engineering</h3><p>Preserve tables, structured content, graphics, technical formatting, and multilingual publication requirements.</p></div>
              <div><h3>Global Scalability</h3><p>Support recurring content across products, plants, suppliers, business units, and international markets.</p></div>
              <div><h3>Secure, Structured Delivery</h3><p>Protect confidential engineering, commercial, operational, supplier, and product information through controlled workflows.</p></div>
            </div>
            <div className="program-panel">
              <div><h2>Connect Translation Across Plants, Products, and Markets</h2></div>
              <div className="program-rows">
                <div><h3>Centralized Program Management</h3><p>Coordinate files, languages, schedules, requirements, business units, and global translation activity.</p></div>
                <div><h3>Cross-Plant Consistency</h3><p>Apply shared terminology, approved translations, and language rules across facilities, product lines, and recurring documentation.</p></div>
                <div><h3>Review & Approval</h3><p>Bring engineering, quality, regulatory, regional, and business stakeholders into controlled multilingual review.</p></div>
                <div><h3>Program Visibility</h3><p>Track multilingual projects, review activity, turnaround, reuse, quality activity, and delivery status.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section related-section">
          <div className="container">
            <div className="heading-group"><h2>Related Metals and Industrial Translation Services</h2><p>Aluminum programs often overlap with mining, metallurgy, manufacturing, industrial equipment, energy, transportation, sustainability, and other materials disciplines.</p></div>
            <div className="related-grid">{related.map(([label, href]) => <a key={label} href={href}><span>{label}</span><Arrow /></a>)}</div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading"><h2>Aluminum Translation Services FAQs</h2><p>Practical answers for aluminum producers, processors, manufacturers, suppliers, and global technical teams.</p></div>
            <div className="faq-panel">{faqs.map(([q,a], i) => <details key={q} open={i===0}><summary><span>{q}</span><b aria-hidden="true">+</b></summary><div className="faq-answer"><p>{a}</p></div></details>)}</div>
          </div>
        </section>

        <section className="final-cta section">
          <div className="container final-cta-inner">
            <div><h2>Translate Your Aluminum Content With Confidence</h2><p>From bauxite, alumina, and primary aluminum to alloy specifications, manufacturing procedures, technical manuals, supplier documentation, sustainability reporting, finished products, and recycling, Stepes helps aluminum companies communicate accurately across languages and markets.</p></div>
            <div className="cta-actions"><a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Arrow /></a><a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales <Arrow /></a><span>Secure and confidential · 100+ languages · Enterprise translation workflows</span></div>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = `
:root{--magenta:#C11D63;--magenta-dark:#A71954;--blush:#FDF2F7;--body:#3F4956;--heading:#1F2733;--soft:#F6F7F9;--line:#DDE1E7;--dark:#202733;--darkBody:#E7EBF0;--darkEyebrow:#F2A7C6;--radius:28px;}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--body);font-family:"Inter Tight",Inter,Arial,sans-serif}.page-shell{overflow-x:clip}.page-shell a,.page-shell p,.page-shell li{overflow-wrap:break-word}.container{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}h1,h2,h3{margin:0;color:var(--heading);font-weight:600;letter-spacing:-.025em}h1{font-size:48px;line-height:1.05;max-width:700px}h2{font-size:36px;line-height:1.12}h3{font-size:24px;line-height:1.18}p,li{font-size:17px;line-height:1.68;font-weight:400}p{margin:0}.eyebrow{font-size:11px!important;line-height:1.2!important;letter-spacing:.14em!important;font-weight:600!important;color:var(--magenta)!important;margin:0 0 16px!important;text-transform:uppercase}.heading-group{max-width:820px;margin-bottom:52px}.heading-group h2{margin-bottom:18px}.heading-group>p:not(.eyebrow){font-size:18px;line-height:1.62}.heading-group.centered{text-align:center;margin-left:auto;margin-right:auto}.heading-group.centered>p:not(.eyebrow){margin-left:auto;margin-right:auto}.surface-soft{background:var(--soft)}
.hero{padding:104px 0 92px}.hero-grid{display:grid;grid-template-columns:1.07fr .93fr;gap:56px;align-items:center}.hero-lead{font-size:18px;line-height:1.62;margin:26px 0 16px;max-width:700px}.hero-support{max-width:690px}.button-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:13px 22px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.2s ease}.btn svg,.editorial-link svg,.related-grid svg{width:18px;height:18px;flex:0 0 18px}.btn-primary,.btn-primary:visited{background:var(--magenta);color:#fff!important;border:1px solid var(--magenta)}.btn-primary:hover,.btn-primary:focus-visible{background:var(--magenta-dark);color:#fff!important;transform:translateY(-1px)}.btn-primary *{color:#fff!important;stroke:#fff!important}.btn-secondary,.btn-secondary:visited{background:#fff;border:1px solid #CBD1D9;color:var(--heading)!important}.btn-secondary:hover,.btn-secondary:focus-visible{border-color:#9EA7B3;background:#FAFAFB}.btn:focus-visible,.editorial-link:focus-visible,.related-grid a:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.22);outline-offset:3px}.hero-trust{display:flex;gap:0;margin-top:28px;flex-wrap:wrap}.hero-trust span{font-size:16px;line-height:1.45;color:#46515E;padding:0 15px;border-left:1px solid var(--line)}.hero-trust span:first-child{padding-left:0;border-left:0}.hero-visual{min-width:0}.hero-art{display:block;width:100%;max-height:570px}.proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-grid>div{padding:24px 28px;border-left:1px solid var(--line)}.proof-grid>div:first-child{border-left:0;padding-left:0}.proof-grid strong{display:block;color:var(--heading);font-size:17px;font-weight:600;margin-bottom:4px}.proof-grid span{font-size:16px;line-height:1.45;color:#46515E}
.chain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:38px 44px}.chain-item{position:relative;padding-left:34px}.chain-item h3{font-size:22px;margin-bottom:10px}.chain-item p{margin:0}.chain-marker{position:absolute;left:0;top:5px;bottom:0;width:16px}.chain-marker span{display:block;width:10px;height:10px;border:2px solid var(--magenta);border-radius:50%;background:#fff}.chain-marker i{position:absolute;top:18px;left:4px;bottom:-28px;width:1px;background:var(--line)}.section-note{max-width:900px;margin:42px auto 0;text-align:center;font-size:18px;line-height:1.62;color:#394351}.section-note.narrow{max-width:760px}.editorial-split{display:grid;grid-template-columns:.86fr 1.14fr;gap:84px;align-items:start}.sticky-heading{position:sticky;top:36px}.sticky-heading h2{margin-bottom:20px}.sticky-heading>p:not(.eyebrow){margin-bottom:22px}.editorial-rows{border-top:1px solid var(--line)}.editorial-row{display:grid;grid-template-columns:190px 1fr;gap:30px;padding:28px 0;border-bottom:1px solid var(--line);align-items:start}.editorial-row h3{font-size:21px}.context-link-row{padding-top:28px}.editorial-link{display:inline-flex;align-items:center;gap:7px;min-height:44px;color:var(--magenta);font-size:16px;font-weight:600;text-decoration:none;margin-top:12px}.editorial-link:hover{text-decoration:underline;text-underline-offset:4px}.manufacturing-list{border-top:1px solid var(--line);margin-bottom:8px}.manufacturing-row{display:grid;grid-template-columns:220px 1fr;gap:48px;padding:25px 0;border-bottom:1px solid var(--line)}.manufacturing-row h3{font-size:22px}
.dark-section{background:var(--dark);color:var(--darkBody)}.dark-section h2,.dark-section h3{color:#fff}.dark-section .eyebrow{color:var(--darkEyebrow)!important}.dark-section .editorial-link{color:var(--darkEyebrow)}.dark-intro{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end;margin-bottom:54px}.dark-intro p:not(.eyebrow){font-size:18px;color:var(--darkBody)}.spec-columns{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.16);border-bottom:1px solid rgba(255,255,255,.16)}.spec-columns>div{padding:34px 30px;border-left:1px solid rgba(255,255,255,.16)}.spec-columns>div:first-child{border-left:0;padding-left:0}.spec-columns h3{font-size:21px;margin-bottom:12px}.spec-columns p{color:var(--darkBody)}.risk-callout{display:grid;grid-template-columns:240px 1fr;gap:32px;margin-top:36px;padding:25px 0 0}.risk-callout strong{font-size:18px;color:#fff}.risk-callout p{color:var(--darkBody)}
.doc-grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.doc-group{padding:28px 22px;border-left:1px solid var(--line)}.doc-group:first-child{border-left:0;padding-left:0}.doc-group h3{font-size:20px;margin-bottom:18px}.doc-group ul{padding:0;margin:0;list-style:none}.doc-group li{font-size:16px;line-height:1.5;padding:8px 0 8px 15px;position:relative}.doc-group li:before{content:"";position:absolute;left:0;top:19px;width:6px;height:1px;background:#8F99A7}.link-pair{display:flex;gap:28px;flex-wrap:wrap;margin-top:24px}.industry-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.industry-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:26px;min-height:265px}.industry-card h3{font-size:21px;margin:0 0 10px}.industry-card p{font-size:17px}.industry-card .editorial-link{font-size:16px;margin-top:16px}
.sustainability-section{background:var(--blush)}.sustainability-grid{display:grid;grid-template-columns:1.42fr .58fr;gap:64px}.sustainability-main h2{margin-bottom:20px}.lead{font-size:18px;max-width:820px}.two-col-lists{display:grid;grid-template-columns:1fr 1fr;gap:0 42px;margin-top:36px;border-top:1px solid #E6C7D4}.two-col-lists>div{padding:26px 0;border-bottom:1px solid #E6C7D4}.two-col-lists h3{font-size:21px;margin-bottom:8px}.cbam-panel{background:#fff;border:1px solid #ECD4DE;border-radius:28px;padding:34px;align-self:start}.cbam-panel h3{font-size:26px;margin-bottom:16px}.cbam-panel ul{padding-left:20px;margin:20px 0}.cbam-panel li{font-size:17px;margin:7px 0}.disclaimer{font-size:17px;line-height:1.55;padding-top:18px;border-top:1px solid var(--line)}.split-equal{display:grid;grid-template-columns:1fr 1fr;gap:78px}.split-equal h2{margin-bottom:20px}.quiet-list{padding:22px 0;border-bottom:1px solid var(--line)}.quiet-list h3{font-size:20px;margin-bottom:7px}.nonferrous-panel{border-left:1px solid var(--line);padding-left:56px}.metal-rows{margin-top:20px;border-top:1px solid var(--line)}.metal-rows>div{display:grid;grid-template-columns:120px 1fr;gap:24px;padding:20px 0;border-bottom:1px solid var(--line)}.metal-rows h3{font-size:20px}.workflow-mode-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.workflow-mode{background:#fff;border:1px solid var(--line);border-radius:24px;padding:30px}.workflow-mode h3{font-size:22px;margin-bottom:13px}.workflow-flow{margin-top:22px;padding-top:18px;border-top:1px solid var(--line);font-size:16px;line-height:1.55;color:#313A47;font-weight:600}.terminology-layout{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}.terminology-layout h2{margin-bottom:20px}.term-cloud{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.term-cloud span,.file-tags span{border:1px solid #D4D9DF;background:#fff;border-radius:999px;padding:9px 13px;font-size:16px;line-height:1.35;color:#3F4956}.tm-panel{border:1px solid var(--line);border-radius:28px;padding:36px}.tm-panel h3{font-size:26px;margin-bottom:14px}.mini-flow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:28px 0}.mini-flow span{font-size:16px;font-weight:600;color:var(--heading)}.mini-flow i{width:20px;height:1px;background:#B7BEC8}.qa-section{border-top:1px solid var(--line)}.qa-flow{border-top:1px solid var(--line)}.qa-step{display:grid;grid-template-columns:78px 1fr;gap:26px;padding:26px 0;border-bottom:1px solid var(--line);align-items:start}.qa-num{font-size:16px;font-weight:600;color:var(--magenta);padding-top:4px}.qa-step h3{font-size:21px;margin-bottom:7px}.file-tags{display:flex;flex-wrap:wrap;gap:9px;margin:26px 0}.language-line{font-size:18px;line-height:1.75;color:#343E4B;margin:24px 0}.enterprise-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.enterprise-grid>div{padding:28px 30px;border-left:1px solid var(--line);border-bottom:1px solid var(--line)}.enterprise-grid>div:nth-child(3n+1){border-left:0}.enterprise-grid>div:nth-child(n+4){border-bottom:0}.enterprise-grid h3{font-size:20px;margin-bottom:9px}.enterprise-grid p{font-size:17px}.program-panel{margin-top:58px;background:#F7F8FA;border-radius:28px;padding:42px;display:grid;grid-template-columns:.8fr 1.2fr;gap:56px}.program-panel h2{font-size:32px}.program-rows{border-top:1px solid var(--line)}.program-rows>div{padding:20px 0;border-bottom:1px solid var(--line)}.program-rows h3{font-size:19px;margin-bottom:5px}.related-section{background:#FAFAFB;border-top:1px solid var(--line)}.related-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.related-grid a{min-height:86px;padding:22px;display:flex;align-items:center;justify-content:space-between;gap:16px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);text-decoration:none;color:var(--heading);font-size:16px;font-weight:600;background:#fff}.related-grid a:hover{color:var(--magenta)}.faq-layout{display:grid;grid-template-columns:.62fr 1.38fr;gap:74px;align-items:start}.faq-heading{position:sticky;top:36px}.faq-heading h2{margin-bottom:18px}.faq-panel{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line)}summary{list-style:none;cursor:pointer;min-height:74px;padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;color:var(--heading);font-size:18px;font-weight:600}summary::-webkit-details-marker{display:none}summary b{font-size:22px;color:var(--magenta);font-weight:400;transition:transform .2s}details[open] summary b{transform:rotate(45deg)}.faq-answer{padding:0 42px 24px 0;max-width:840px}.faq-answer p{font-size:17px}.final-cta{background:var(--blush);border-top:1px solid #EDD6E0;padding:80px 0}.final-cta-inner{display:grid;grid-template-columns:1.25fr .75fr;gap:68px;align-items:center}.final-cta h2{margin-bottom:16px}.final-cta p{font-size:18px}.cta-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start}.cta-actions>span{display:block;width:100%;font-size:16px;line-height:1.45;color:#46515E;margin-top:8px}
@media(max-width:1100px){.container{padding-left:40px;padding-right:40px}.hero-grid{gap:32px}.doc-grid{grid-template-columns:repeat(3,1fr)}.doc-group:nth-child(4){border-left:0}.industry-grid{grid-template-columns:repeat(2,1fr)}.sustainability-grid{grid-template-columns:1fr;gap:40px}.cbam-panel{max-width:760px}.related-grid{grid-template-columns:repeat(2,1fr)}.program-panel{grid-template-columns:1fr}.enterprise-grid{grid-template-columns:repeat(2,1fr)}.enterprise-grid>div:nth-child(3n+1){border-left:1px solid var(--line)}.enterprise-grid>div:nth-child(2n+1){border-left:0}.enterprise-grid>div:nth-child(n+4){border-bottom:1px solid var(--line)}.enterprise-grid>div:nth-last-child(-n+2){border-bottom:0}}
@media(max-width:900px){.container{padding-left:24px;padding-right:24px}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}.hero-grid{grid-template-columns:1fr;gap:28px}.hero-copy{text-align:center;max-width:760px;margin:auto}.hero-copy h1,.hero-lead,.hero-support{margin-left:auto;margin-right:auto}.button-row,.hero-trust{justify-content:center}.hero-visual{max-width:570px;margin:0 auto}.proof-grid{grid-template-columns:repeat(2,1fr)}.proof-grid>div:nth-child(3){border-left:0;border-top:1px solid var(--line);padding-left:0}.proof-grid>div:nth-child(4){border-top:1px solid var(--line)}.chain-grid{grid-template-columns:repeat(2,1fr)}.editorial-split,.split-equal,.terminology-layout,.faq-layout,.final-cta-inner{grid-template-columns:1fr;gap:42px}.sticky-heading,.faq-heading{position:static}.nonferrous-panel{border-left:0;border-top:1px solid var(--line);padding-left:0;padding-top:42px}.dark-intro{grid-template-columns:1fr;gap:24px}.spec-columns{grid-template-columns:1fr}.spec-columns>div,.spec-columns>div:first-child{border-left:0;border-top:1px solid rgba(255,255,255,.16);padding:28px 0}.spec-columns>div:first-child{border-top:0}.doc-grid{grid-template-columns:repeat(2,1fr)}.doc-group{border-bottom:1px solid var(--line)}.doc-group:nth-child(odd){border-left:0}.workflow-mode-grid{grid-template-columns:1fr}.program-panel{padding:32px}.final-cta-inner{text-align:center}.cta-actions{justify-content:center}}
@media(max-width:600px){:root{--body:#35404D}.container{padding-left:20px;padding-right:20px}.section{padding:68px 0}.hero{padding:72px 0 64px}h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}p,li{font-size:17px}.hero-lead{font-size:18px}.hero-copy{text-align:center}.button-row{display:grid;grid-template-columns:1fr;width:100%}.btn{width:100%;min-height:50px}.hero-trust{display:block;margin-top:24px}.hero-trust span{display:block;border-left:0;padding:6px 0;font-size:16px;color:#3F4956}.proof-grid span,.cta-actions>span{color:#3F4956}.hero-visual{margin-top:10px}.proof-grid{grid-template-columns:1fr}.proof-grid>div,.proof-grid>div:first-child,.proof-grid>div:nth-child(3){border-left:0;border-top:1px solid var(--line);padding:18px 0}.proof-grid>div:first-child{border-top:0}.heading-group,.heading-group.centered{margin-bottom:38px;text-align:center}.heading-group>p:not(.eyebrow){font-size:17px}.chain-grid{grid-template-columns:1fr;gap:28px}.chain-marker i{bottom:-18px}.section-note{text-align:left;font-size:17px}.editorial-split .sticky-heading,.sustainability-main,.split-equal>div,.terminology-layout>div,.qa-section .heading-group,.related-section .heading-group{text-align:left}.editorial-split .sticky-heading .eyebrow,.sustainability-main .eyebrow,.split-equal>div>.eyebrow,.terminology-layout>div>.eyebrow,.qa-section .heading-group .eyebrow,.related-section .heading-group .eyebrow{text-align:left}.editorial-row,.manufacturing-row,.risk-callout,.metal-rows>div{grid-template-columns:1fr;gap:8px}.editorial-row{padding:24px 0}.manufacturing-row{gap:9px}.dark-intro{text-align:left}.risk-callout{gap:10px}.doc-grid{grid-template-columns:1fr}.doc-group,.doc-group:first-child,.doc-group:nth-child(odd){border-left:0;padding:24px 0}.industry-grid{grid-template-columns:1fr}.industry-card{min-height:0}.two-col-lists{grid-template-columns:1fr}.cbam-panel{padding:26px 22px}.workflow-mode{padding:24px 22px}.tm-panel{padding:26px 22px}.mini-flow{display:grid;grid-template-columns:1fr;gap:0}.mini-flow i{display:none}.mini-flow span{padding:9px 0;border-bottom:1px solid var(--line)}.mini-flow span:last-of-type{border-bottom:0}.qa-step{grid-template-columns:46px 1fr;gap:16px}.enterprise-grid{grid-template-columns:1fr}.enterprise-grid>div,.enterprise-grid>div:nth-child(3n+1),.enterprise-grid>div:nth-child(2n+1),.enterprise-grid>div:nth-last-child(-n+2){border-left:0;border-bottom:1px solid var(--line);padding:24px 0}.enterprise-grid>div:last-child{border-bottom:0}.program-panel{padding:28px 22px}.related-grid{grid-template-columns:1fr;border-left:0}.related-grid a{border-left:0;border-right:0}.faq-heading{text-align:left}.faq-answer{padding-right:0}.final-cta{padding:68px 0}.final-cta-inner{text-align:center}.cta-actions{display:grid;grid-template-columns:1fr;width:100%}.cta-actions>span{font-size:16px}.language-line{font-size:17px}.hero-art{max-height:430px}}
@media(max-width:390px){.hero-art{max-height:390px}.proof-grid strong{font-size:17px}.proof-grid span{font-size:16px}}
@media(max-width:360px){.container{padding-left:20px;padding-right:20px}.hero{padding-top:64px}h1{font-size:38px}.cbam-panel,.tm-panel,.workflow-mode,.industry-card,.program-panel{border-radius:20px}.mini-flow i{width:12px}.qa-step{grid-template-columns:40px 1fr}}
`;
