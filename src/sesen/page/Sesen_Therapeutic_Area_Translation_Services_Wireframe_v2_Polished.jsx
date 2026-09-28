const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const LOCATIONS_URL = "https://www.sesen.com/locations/";

const links = {
  lifeSciences: "https://www.sesen.com/life-sciences-translation-services/",
  services: "https://www.sesen.com/services/",
  industries: "https://www.sesen.com/industries/",
  oncology: "https://www.sesen.com/oncology-translation-services/",
  neurology: "https://www.sesen.com/neurology-translation-services/",
  rareDisease: "https://www.sesen.com/rare-disease-translation-services/",
  cellGene: "https://www.sesen.com/cell-gene-therapy-translation-services/",
  ophthalmicDevice: "https://www.sesen.com/ophthalmic-device-translation-services/",
  clinicalTrial: "https://www.sesen.com/clinical-trial-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  linguisticValidation: "https://www.sesen.com/linguistic-validation-services/",
  ecoa: "https://www.sesen.com/coa-ecoa-translation-solutions/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  pharmaceutical: "https://www.sesen.com/pharmaceutical-translation-services/",
  biotechnology: "https://www.sesen.com/biotechnology-translation-services/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
};

const proofItems = [
  ["150+ Languages", "Global and regional life sciences support"],
  ["Therapeutic-Area Expertise", "Professional medical and scientific linguists"],
  ["ISO-Certified Quality", "ISO 17100 · ISO 9001 · ISO 13485"],
  ["Terminology Control", "Across studies, documents, languages, and versions"],
];

const principles = [
  ["science", "Disease & Scientific Terminology", "Preserve the meaning of indications, mechanisms of disease, anatomy, pathology, biomarkers, genetics, molecular targets, diagnostics, and other specialized scientific concepts."],
  ["clinical", "Clinical Evidence & Endpoints", "Translate study objectives, inclusion and exclusion criteria, endpoints, assessments, scales, laboratory measures, efficacy concepts, safety data, and clinical outcomes with appropriate context."],
  ["therapy", "Treatment & Therapeutic Language", "Maintain accurate terminology across drugs, biologics, devices, procedures, treatment regimens, dosing, administration, mechanisms of action, combination therapies, and emerging modalities."],
  ["patient", "Patient & Caregiver Communication", "Communicate symptoms, study participation, treatment expectations, risks, procedures, outcomes, and instructions in language that remains medically accurate and appropriate for the intended population."],
];

const therapeuticGroups = [
  {
    title: "Oncology & Hematology",
    items: [
      ["Oncology", "Support multilingual oncology content across solid tumors, hematologic malignancies, biomarker-defined populations, tumor-agnostic programs, combination therapies, and emerging treatment modalities.", links.oncology, "Explore Oncology Translation Services"],
      ["Hematology", "Support programs involving leukemia, lymphoma, multiple myeloma, hemophilia, sickle cell disease, and other malignant and nonmalignant blood disorders."],
    ],
  },
  {
    title: "Neurology & CNS",
    items: [
      ["Neurology & Neuroscience", "Support multilingual content for neurodegenerative disease, neurological disorders, neuromuscular conditions, specialized assessments, imaging, digital measures, and patient or caregiver communication.", links.neurology, "Explore Neurology Translation Services"],
      ["Psychiatry & Mental Health", "Support clinical trials, outcome measures, patient questionnaires, behavioral assessments, and healthcare communication across psychiatric and behavioral health programs."],
    ],
  },
  {
    title: "Cardiovascular, Renal & Metabolic",
    items: [
      ["Cardiovascular", "Translate research, clinical, regulatory, patient, device, and Medical Affairs content across heart failure, coronary artery disease, arrhythmias, hypertension, structural heart disease, and vascular disease."],
      ["Endocrinology, Diabetes & Metabolic Disease", "Support long-term disease management, laboratory and biomarker data, digital monitoring, patient-reported information, treatment instructions, and regulatory content."],
      ["Nephrology & Renal Disease", "Support chronic kidney disease, dialysis, transplantation, comorbidities, treatment adherence, outcome assessments, regulatory documentation, and patient communication."],
    ],
  },
  {
    title: "Immunology & Inflammatory Disease",
    items: [
      ["Immunology", "Support autoimmune, inflammatory, and immune-mediated disease programs involving complex mechanisms of action, biologic therapies, biomarkers, clinical outcome measures, and patient-reported symptoms."],
      ["Rheumatology", "Support rheumatoid arthritis, lupus, and other rheumatic or systemic inflammatory conditions across clinical, regulatory, and patient-facing content."],
      ["Dermatology & Allergy", "Support inflammatory skin disease, allergic and immune-mediated conditions, biologics, topical therapies, systemic treatments, outcome measures, and patient communication."],
    ],
  },
  {
    title: "Infectious Diseases & Vaccines",
    items: [
      ["Infectious Diseases", "Support research, treatment, diagnostics, public-health communication, clinical development, safety monitoring, and regulatory content across diverse populations and regions."],
      ["Vaccines & Virology", "Support vaccine research, clinical development, safety, regulatory content, patient information, antiviral therapies, viral diagnostics, and global immunization communication."],
    ],
  },
  {
    title: "Respiratory & Pulmonary Medicine",
    summary: "Support asthma, COPD, pulmonary fibrosis, cystic fibrosis, pulmonary hypertension, and other respiratory programs involving symptom terminology, pulmonary function assessments, PROs, inhaled therapies, devices, and digital monitoring.",
  },
  {
    title: "Rare Diseases",
    summary: "Support rare and ultra-rare disease programs involving specialized genetic and molecular terminology, small patient populations, pediatric participants, geographically distributed sites, caregivers, COA/eCOA, regulatory documentation, and emerging therapies.",
    href: links.rareDisease,
    linkLabel: "Explore Rare Disease Translation Services",
  },
  {
    title: "Gastroenterology & Hepatology",
    summary: "Support inflammatory bowel disease, Crohn's disease, ulcerative colitis, IBS, liver disease, hepatitis, MASH, patient-reported outcomes, biomarkers, and related clinical and regulatory content.",
  },
  {
    title: "Ophthalmology & Vision Science",
    summary: "Support retinal disease, glaucoma, cataracts, corneal disease, dry eye, macular degeneration, visual-function measures, imaging, patient materials, clinical research, regulatory documentation, and scientific communication. For device-specific content such as intraocular lenses, imaging systems, surgical platforms, ophthalmic lasers, software, IFUs, and labeling, Sesen also provides dedicated ophthalmic device translation services.",
    href: links.ophthalmicDevice,
    linkLabel: "Explore Ophthalmic Device Translation Services",
  },
  {
    title: "Women's Health & Reproductive Medicine",
    summary: "Support reproductive health, fertility, contraception, pregnancy, maternal health, menopause, gynecologic disorders, patient communication, clinical research, digital content, and outcome measures.",
  },
  {
    title: "Pediatrics & Special Populations",
    summary: "Support age-appropriate patient communication, assent and parental consent, pediatric COAs, ObsRO instruments, caregiver communication, and pediatric clinical research across therapeutic areas. Workflows can be adapted to developmental stage, intended respondent, and study population.",
  },
  {
    title: "Pain, Musculoskeletal & Orthopedic Conditions",
    summary: "Support acute and chronic pain, musculoskeletal disorders, orthopedic conditions, rehabilitation, functional outcomes, quality-of-life measures, and patient-reported assessments.",
  },
  {
    title: "Additional Medical Specialties",
    summary: "Sesen also supports multilingual content across urology, surgery, critical care, radiology and imaging, rehabilitation, medical diagnostics, and other specialized areas of medicine.",
  },
];

const modalities = [
  ["Cell & Gene Therapy", "Support multilingual communication for cellular therapies, gene replacement, gene editing, viral and nonviral vectors, engineered cells, individualized treatment pathways, clinical development, patient materials, and regulatory documentation.", links.cellGene, "Explore Cell & Gene Therapy Translation Services"],
  ["Biologics", "Translate complex scientific and clinical content associated with monoclonal antibodies, recombinant proteins, biosimilars, immunotherapies, vaccines, and other biologic products."],
  ["Precision Medicine & Biomarkers", "Maintain terminology across genomics, molecular testing, biomarkers, companion diagnostics, patient stratification, targeted therapies, and evidence used to connect biological characteristics with treatment decisions."],
  ["mRNA & Sequence-Based Therapeutics", "Support mRNA vaccines and therapeutics, personalized approaches, neoantigen strategies, nucleic-acid-based technologies, and other sequence-driven platforms."],
  ["Genomics & Molecular Biology", "Translate genomic, genetic, molecular, and biomarker-related concepts as they move from research into clinical development, diagnostics, regulatory documentation, and patient communication."],
  ["Advanced Diagnostics", "Support molecular diagnostics, genomic testing, companion diagnostics, laboratory technologies, imaging, and other diagnostic approaches that influence patient selection and treatment decisions."],
];

const lifecycle = [
  ["01", "Research & Translational Science", "Research reports, preclinical documentation, biomarker content, genomic information, abstracts, publications, presentations, and scientific communication."],
  ["02", "Clinical Development", "Protocols, investigator brochures, informed consent and assent, CRFs/eCRFs, COA/eCOA instruments, patient materials, study manuals, training, and digital content."],
  ["03", "Global Trial Operations", "Multilingual communication across countries, investigators, sites, ethics committees, laboratories, vendors, patients, and caregivers."],
  ["04", "Regulatory Submission", "Submission documents, CTD/eCTD content, clinical summaries, supporting scientific documentation, health authority communication, and responses."],
  ["05", "Approval & Launch", "Product information, labeling, patient education, Medical Affairs, medical information, professional training, and commercialization content."],
  ["06", "Post-Approval & Evidence Generation", "Pharmacovigilance, safety updates, real-world evidence, HEOR, publications, labeling updates, and ongoing patient communication."],
];

const audiences = [
  ["research", "Scientists & Research Teams", "Highly technical terminology for research, translational science, biomarkers, mechanisms of action, preclinical development, and scientific communication."],
  ["regulatory", "Regulators & Clinical Professionals", "Controlled language for protocols, evidence, submissions, clinical reports, safety content, product information, and regulated documentation."],
  ["site", "Investigators & Study Sites", "Clear clinical and operational communication for procedures, study conduct, treatment requirements, patient management, safety updates, and site activities."],
  ["patient", "Patients & Caregivers", "Accurate, understandable language for study participation, symptoms, treatment, assessments, risks, procedures, instructions, and healthcare decisions."],
];

const patientItems = [
  ["consent", "Informed Consent & Assent", "Translate study purpose, procedures, treatment, risks, potential benefits, alternatives, privacy, sample use, genetic information, participation choices, withdrawal, and other consent concepts clearly and accurately."],
  ["outcomes", "Clinical Outcome Assessments", "Support COAs, PROs, ePROs, ObsROs, ClinROs, symptom scales, quality-of-life measures, and other instruments used to capture outcomes that matter within a therapeutic area."],
  ["validation", "Linguistic Validation", "Preserve conceptual equivalence through structured workflows that may include source review, forward translation, reconciliation, back translation, harmonization, cognitive debriefing support, and final documentation.", links.linguisticValidation, "Explore Linguistic Validation Services"],
  ["digital", "Digital Patient Experiences", "Localize eConsent, eCOA, patient portals, mobile applications, reminders, telehealth-related content, connected-device instructions, and other digital touchpoints used in modern clinical research.", links.ecoa, "Explore eCOA Translation Services"],
];

const terminologyItems = [
  ["Study & Product Glossaries", "Establish preferred terminology for diseases, biomarkers, endpoints, treatments, products, study concepts, and recurring technical language."],
  ["Translation Memory", "Reuse previously translated and approved content where appropriate while identifying new or changed text for focused attention."],
  ["Reference Management", "Give linguists and reviewers access to approved source materials, previous translations, product references, study documentation, and other contextual information."],
  ["Version Continuity", "Help distinguish current content from superseded versions and maintain approved terminology across amendments and recurring updates."],
  ["Cross-Document Consistency", "Identify terminology and concepts that appear across protocols, consent forms, clinical assessments, reports, submissions, labeling, and downstream communication."],
  ["Reviewer Knowledge", "Capture validated terminology and review decisions so useful linguistic knowledge can be carried forward rather than rediscovered for every document."],
];

const workflow = [
  ["01", "Content & Therapeutic-Area Assessment", "Review the content type, indication, scientific complexity, intended audience, regulatory context, languages, references, formatting requirements, and project needs."],
  ["02", "Terminology & Reference Preparation", "Prepare relevant glossaries, translation memories, approved translations, study terminology, product information, style guidance, and reference materials."],
  ["03", "Specialized Human Translation", "Assign professional native-language life sciences linguists according to the language, therapeutic area, content type, subject matter, audience, and intended use."],
  ["04", "Independent Review", "Evaluate translation accuracy, completeness, terminology, consistency, readability, scientific meaning, and audience appropriateness according to the required workflow."],
  ["05", "AI-Assisted Quality Assurance", "Use language technology to surface potential terminology inconsistencies, omissions, numerical discrepancies, formatting issues, repetitive-content differences, and other items that merit human attention."],
  ["06", "Final Human Quality Control", "Qualified professionals remain responsible for the final linguistic and contextual assessment before delivery."],
];

const technologySupports = [
  "Terminology matching and approved-language reuse",
  "Translation-memory and reference retrieval",
  "Numerical, consistency, and formatting checks",
  "Version and cross-document comparison",
  "Repetitive-content processing and structured QA",
];

const humansOwn = [
  "Scientific and medical interpretation",
  "Therapeutic-area terminology and clinical context",
  "Patient readability and audience appropriateness",
  "Ambiguity resolution and regulatory nuance",
  "Reviewer judgment and final quality decisions",
];

const regions = [
  ["North America", "Support for U.S., Canadian, and diverse patient populations across clinical research, healthcare, regulatory, and commercial communication."],
  ["Europe", "Multilingual support across EU and EEA markets, the United Kingdom, Switzerland, and other European locations."],
  ["Asia-Pacific", "Translation and localization for major research, regulatory, healthcare, and commercial markets across East Asia, Southeast Asia, South Asia, Australia, and New Zealand."],
  ["Latin America", "Spanish and Portuguese localization adapted to relevant countries, clinical environments, patient populations, and intended uses."],
  ["Middle East & Africa", "Language support for diverse clinical research, healthcare, patient, regulatory, and commercial environments across regional markets."],
];

const organizations = [
  ["Pharmaceutical Companies", "Support drug development from research and clinical trials through regulatory submission, labeling, safety, Medical Affairs, patient communication, commercialization, and post-approval updates."],
  ["Biotechnology Companies", "Translate complex scientific content across biologics, cell and gene therapy, genomics, precision medicine, emerging therapeutic platforms, clinical development, and regulatory programs."],
  ["CROs & Clinical Research Organizations", "Coordinate multilingual study content across countries, sites, investigators, patients, vendors, amendments, safety updates, eCOA programs, and recurring trial operations."],
  ["Medical Device & Diagnostics Companies", "Support devices and diagnostics associated with specialized therapeutic areas, including clinical investigations, software, IFUs, labeling, technical documentation, patient materials, and regulatory content."],
  ["Healthcare & Digital Health Organizations", "Localize patient communication, medical information, digital health experiences, connected technologies, training, and healthcare content across languages and populations."],
  ["Research & Scientific Organizations", "Support multilingual research, publications, scientific communication, education, collaboration, and knowledge sharing across specialized medical fields."],
];

const featured = [
  ["Oncology Translation Services", "Specialized multilingual support across cancer research, precision oncology, clinical development, biomarkers, patient communication, regulatory content, Medical Affairs, and emerging therapies.", links.oncology],
  ["Neurology Translation Services", "Translation for neuroscience, neurological and CNS clinical research, outcome assessments, patient and caregiver communication, regulatory documentation, and medical content.", links.neurology],
  ["Rare Disease Translation Services", "Support for rare and ultra-rare disease programs involving specialized terminology, global studies, pediatric populations, patient communication, COAs, regulatory documentation, and advanced therapies.", links.rareDisease],
];

const reasons = [
  ["Life Sciences Specialization", "Dedicated translation and localization services for pharmaceutical, biotechnology, clinical research, medical device, digital health, healthcare, and scientific organizations."],
  ["Therapeutic-Area Expertise", "Professional linguists and reviewers selected according to language, subject matter, document type, intended audience, and use."],
  ["Terminology Governance", "Glossaries, translation memories, approved terminology, style guidance, references, and reusable language assets help preserve consistency across programs."],
  ["Human-Led Quality", "Qualified professionals remain central to scientific interpretation, clinical context, patient readability, ambiguity resolution, and final quality decisions."],
  ["AI-Enabled Efficiency", "Language technology helps improve reuse, consistency, quality assurance, and scalability while human experts remain responsible for meaning."],
  ["Global Program Scalability", "Support individual documents, complex clinical studies, recurring regulatory content, and multilingual programs spanning countries, languages, teams, and development stages."],
];

const faqs = [
  ["What are therapeutic area translation services?", "Therapeutic area translation services are specialized language services for scientific, clinical, regulatory, medical, safety, and patient-facing content associated with a particular disease area or field of medicine. They require familiarity with disease mechanisms, specialized terminology, clinical endpoints, diagnostic concepts, treatments, outcome assessments, patient experiences, and the ways information is used throughout medical product development."],
  ["Why is therapeutic-area expertise important in life sciences translation?", "The same term can carry different significance depending on the disease, treatment, study design, document, and audience. Clinical context can determine how terminology should be interpreted, how an endpoint is described, how a symptom is communicated to a patient, and how scientific concepts relate across different documents."],
  ["Which therapeutic areas does Sesen support?", "Sesen supports major therapeutic areas including oncology and hematology, neurology and CNS, rare diseases, immunology, cardiovascular medicine, endocrinology and metabolic disease, infectious diseases and vaccines, respiratory medicine, gastroenterology and hepatology, ophthalmology, dermatology, women's health, nephrology, pediatrics, pain, musculoskeletal conditions, and other specialized fields."],
  ["How does Sesen select translators for a specific therapeutic area?", "Linguistic resources are selected according to the target language, therapeutic area, document type, scientific or clinical complexity, audience, intended use, and required workflow. Sesen uses professional native-language life sciences linguists and can incorporate independent review, terminology preparation, reference materials, translation memory, AI-assisted quality assurance, and final human quality control according to project requirements."],
  ["Can Sesen support multilingual clinical trials within specialized therapeutic areas?", "Yes. Sesen supports protocols, investigator brochures, informed consent and assent, patient materials, site documentation, recruitment content, clinical outcome assessments, eCOA and ePRO, safety communications, amendments, clinical study reports, digital trial content, and other study documentation."],
  ["Does Sesen support COA, eCOA, and patient-reported outcome translation?", "Yes. Sesen supports translation and linguistic validation for clinical outcome assessments, patient-reported outcomes, ePRO, eCOA, questionnaires, symptom scales, quality-of-life measures, patient diaries, and related content across multiple therapeutic areas."],
  ["How does Sesen maintain terminology consistency across a therapeutic program?", "Sesen can use study- and product-specific glossaries, translation memories, approved reference materials, previous translations, reviewer decisions, style guidance, and terminology QA to help maintain continuity across related content."],
  ["Can Sesen support emerging therapies such as cell and gene therapy, precision medicine, and mRNA technologies?", "Yes. Sesen supports multilingual content associated with advanced and emerging therapeutic platforms, including cell and gene therapies, biologics, genomics, precision medicine, biomarkers, companion diagnostics, and mRNA and other sequence-based approaches. The workflow can be aligned to both the modality and the therapeutic area in which it is being developed."],
];

function ArrowLink({ href, children }) {
  if (!href) return null;
  return <a className="sta-link" href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function Button({ href, children, secondary = false }) {
  return <a className={`sta-btn ${secondary ? "sta-btn-secondary" : "sta-btn-primary"}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "science":
      return <svg {...common}><path d="M9 2v5l-4.2 8.2A4 4 0 0 0 8.4 21h7.2a4 4 0 0 0 3.6-5.8L15 7V2"/><path d="M8 12h8M9 2h6"/></svg>;
    case "clinical":
      return <svg {...common}><path d="M6 3h12v18H6z"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>;
    case "therapy":
      return <svg {...common}><path d="M7.8 4.8a4 4 0 0 1 5.7 0l5.7 5.7a4 4 0 0 1-5.7 5.7l-5.7-5.7a4 4 0 0 1 0-5.7Z"/><path d="m10 12 4-4"/></svg>;
    case "patient":
      return <svg {...common}><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"/><path d="M12 10v5M9.5 12.5h5"/></svg>;
    case "research":
      return <svg {...common}><circle cx="10.5" cy="10.5" r="5.5"/><path d="m14.5 14.5 5 5M8 10.5h5M10.5 8v5"/></svg>;
    case "regulatory":
      return <svg {...common}><path d="M4 21h16M6 18h12M7 8h10v10H7zM5 8l7-5 7 5"/></svg>;
    case "site":
      return <svg {...common}><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 2v6M16 2v6M8 12h3M13 12h3M8 16h3"/></svg>;
    case "consent":
      return <svg {...common}><path d="M6 3h12v18H6z"/><path d="M9 7h6M9 11h6"/><path d="m9 16 2 2 4-4"/></svg>;
    case "outcomes":
      return <svg {...common}><path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-7"/></svg>;
    case "validation":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>;
    case "digital":
      return <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4M11 18h2"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>;
  }
}

function IconTile({ name }) {
  return <span className="sta-icon" aria-hidden="true"><Icon name={name}/></span>;
}

function Dot() {
  return <span className="sta-dot" aria-hidden="true"/>;
}

function HeroArt() {
  return (
    <div className="sta-hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 520">
        <rect x="54" y="62" width="452" height="376" rx="42" fill="#F5F7FF"/>
        <path d="M116 142h328M116 375h328" stroke="#D4DDF3" strokeWidth="2"/>
        <circle cx="170" cy="258" r="74" fill="#fff" stroke="#B7C5EA" strokeWidth="2.5"/>
        <circle cx="390" cy="258" r="74" fill="#fff" stroke="#B7C5EA" strokeWidth="2.5"/>
        <path d="M244 258h72" stroke="#4B6FD8" strokeWidth="5" strokeLinecap="round"/>
        <path d="m298 245 18 13-18 13" fill="none" stroke="#4B6FD8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="170" cy="226" r="18" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="3"/>
        <path d="M143 275c16-9 38-9 54 0M145 292h50" fill="none" stroke="#253F8F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M362 213h55v89h-55z" fill="#fff" stroke="#253F8F" strokeWidth="3"/>
        <path d="M373 232h33M373 248h33M373 264h24M373 280h29" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="112" cy="118" r="8" fill="#4B6FD8"/>
        <circle cx="448" cy="396" r="8" fill="#4B6FD8"/>
        <path d="M94 321c42 30 76 54 131 64M467 194c-34-36-74-58-128-68" stroke="#9EB0E5" strokeWidth="2" strokeDasharray="7 9"/>
      </svg>
    </div>
  );
}

export default function SesenTherapeuticAreaTranslationServicesWireframe() {
  return (
    <main className="sta-page">
      <style>{styles}</style>

      <section className="sta-hero" aria-labelledby="sta-title">
        <div className="sta-shell sta-hero-grid">
          <div className="sta-hero-copy">
            <p className="sta-eyebrow">Therapeutic Area Expertise</p>
            <h1 id="sta-title">Therapeutic Area Translation Services</h1>
            <p className="sta-lead">Support global research, clinical development, regulatory submissions, patient communication, and commercialization with specialized translation expertise aligned to the science, terminology, and communication requirements of your therapeutic area.</p>
            <p>Sesen provides life sciences translation and localization across major therapeutic areas and emerging treatment modalities. Professional medical and scientific linguists work within controlled terminology, independent review, AI-assisted quality assurance, and final human quality control workflows to help keep multilingual content accurate, consistent, and appropriate for its intended audience.</p>
            <div className="sta-actions"><Button href={QUOTE_URL}>REQUEST A QUOTE</Button><Button href={CONTACT_SALES_URL} secondary>TALK WITH TEAM SESEN</Button></div>
          </div>
          <HeroArt/>
        </div>
      </section>

      <section className="sta-proof" aria-label="Sesen therapeutic area translation capabilities">
        <div className="sta-shell sta-proof-grid">{proofItems.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <header className="sta-head sta-center">
            <p className="sta-eyebrow">Specialized Medical Language</p>
            <h2>Every Therapeutic Area Has Its Own Language</h2>
            <p>Medical terminology does not exist in isolation. Each therapeutic area brings its own disease classifications, anatomy, pathology, biomarkers, clinical endpoints, diagnostic methods, treatment approaches, outcome measures, safety concepts, and patient vocabulary.</p>
            <p className="sta-support-copy">An oncology protocol may depend on molecular biomarkers and tumor-response criteria. A neurology study may rely on disease-specific scales and caregiver observations. A rare disease program may involve highly specialized genetic terminology and small, geographically dispersed patient populations. An ophthalmology study may combine anatomy, imaging, visual-function measures, pharmaceutical terminology, and device-related content.</p>
          </header>
          <div className="sta-quad">{principles.map(([icon,a,b])=><article key={a}><IconTile name={icon}/><h3>{a}</h3><p>{b}</p></article>)}</div>
          <div className="sta-section-link"><ArrowLink href={links.medicalScientific}>Explore Medical & Scientific Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="sta-section sta-soft">
        <div className="sta-shell">
          <header className="sta-head sta-left">
            <p className="sta-eyebrow">Therapeutic Breadth</p>
            <h2>Translation Expertise Across Therapeutic Areas</h2>
            <p>Sesen supports pharmaceutical companies, biotechnology organizations, CROs, medical device companies, healthcare organizations, research teams, and other life sciences organizations across a broad range of therapeutic areas. Multilingual teams and workflows can be aligned according to the indication, scientific complexity, document type, audience, language, and intended use.</p>
          </header>
          <div className="sta-area-list">
            {therapeuticGroups.map((group)=><section className="sta-area-group" key={group.title} aria-label={group.title}>
              <h3 className="sta-area-title">{group.title}</h3>
              <div className="sta-area-content">
                {group.summary ? <div className="sta-area-summary"><p>{group.summary}</p><ArrowLink href={group.href}>{group.linkLabel}</ArrowLink></div> : group.items.map(([a,b,c,d])=><article className="sta-area-item" key={a}><div><h3>{a}</h3><p>{b}</p></div><ArrowLink href={c}>{d}</ArrowLink></article>)}
              </div>
            </section>)}
          </div>
          <div className="sta-inline"><p>If your therapeutic area is not listed, Team Sesen can review the indication, terminology, content types, audiences, target markets, and quality requirements to recommend an appropriate multilingual workflow.</p><ArrowLink href={CONTACT_SALES_URL}>Talk With Team Sesen</ArrowLink></div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <header className="sta-head sta-center">
            <p className="sta-eyebrow">Advanced Life Sciences</p>
            <h2>Emerging Therapies Cross Traditional Therapeutic Boundaries</h2>
            <p>Modern life sciences development increasingly cuts across traditional disease categories. Sesen supports specialized terminology and multilingual content associated with advanced therapeutic platforms while keeping those technologies connected to the clinical and therapeutic context in which they are used.</p>
          </header>
          <div className="sta-context-note"><strong>One modality can span many indications.</strong><p>Cell and gene therapy, biologics, precision medicine, genomics, mRNA, and advanced diagnostics are not limited to a single therapeutic area. Sesen can align language expertise to both the underlying technology and the disease area where it is being developed.</p></div>
          <div className="sta-cards3 sta-modalities">{modalities.map(([a,b,c,d])=><article key={a}><h3>{a}</h3><p>{b}</p><ArrowLink href={c}>{d}</ArrowLink></article>)}</div>
        </div>
      </section>

      <section className="sta-section sta-blue-soft">
        <div className="sta-shell">
          <header className="sta-head sta-left"><p className="sta-eyebrow">Connected Life Sciences Content</p><h2>Therapeutic Expertise Across the Development Lifecycle</h2><p>The language of a therapeutic program evolves as scientific evidence moves from research into clinical development, regulatory review, patient communication, commercialization, and post-approval use. Sesen helps carry terminology and context forward as multilingual content changes purpose, audience, and regulatory significance.</p></header>
          <div className="sta-steps">{lifecycle.map(([n,a,b])=><article key={n}><span>{n}</span><div><h3>{a}</h3><p>{b}</p></div></article>)}</div>
          <div className="sta-links"><ArrowLink href={links.clinicalTrial}>Explore Clinical Trial Translation Services</ArrowLink><ArrowLink href={links.regulatory}>Explore Regulatory Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <div className="sta-split-head"><div><p className="sta-eyebrow">Multiple Audiences. One Scientific Foundation.</p><h2>One Scientific Concept. Different Global Audiences.</h2></div><p>A disease mechanism, biomarker, treatment concept, study endpoint, procedure, risk, or safety finding may need to be communicated to a scientist, regulatory reviewer, investigator, study site, healthcare professional, patient, or caregiver. The scientific meaning must remain stable even when terminology, explanation, context, and readability change.</p></div>
          <div className="sta-quad sta-top-space">{audiences.map(([icon,a,b])=><article key={a}><IconTile name={icon}/><h3>{a}</h3><p>{b}</p></article>)}</div>
        </div>
      </section>

      <section className="sta-section sta-soft">
        <div className="sta-shell">
          <header className="sta-head sta-center"><p className="sta-eyebrow">Patient-Focused Communication</p><h2>Scientific Accuracy Must Still Be Understandable to Patients</h2><p>Patient experiences, symptoms, priorities, treatment burden, quality of life, and preferences increasingly influence how therapies are studied and evaluated. Multilingual patient communication must preserve the intended clinical concept while remaining understandable and appropriate for the people expected to use it.</p></header>
          <div className="sta-cards2 sta-patient-cards">{patientItems.map(([icon,a,b,c,d])=><article key={a}><IconTile name={icon}/><h3>{a}</h3><p>{b}</p><ArrowLink href={c}>{d}</ArrowLink></article>)}</div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell sta-split">
          <div><p className="sta-eyebrow">Program-Level Language Control</p><h2>One Therapeutic Vocabulary Across Every Document and Market</h2><p>A therapeutic program does not consist of isolated documents. Disease terms, biomarkers, endpoints, treatment regimens, procedures, dose descriptions, safety terminology, product names, and study-specific language recur across clinical, regulatory, labeling, Medical Affairs, and patient communication.</p><p>Sesen helps life sciences organizations maintain multilingual continuity with terminology governance and reusable language assets that can evolve with the program.</p></div>
          <div className="sta-list">{terminologyItems.map(([a,b])=><article key={a}><Dot/><div><h3>{a}</h3><p>{b}</p></div></article>)}</div>
        </div>
      </section>

      <section className="sta-section sta-blue-soft">
        <div className="sta-shell">
          <header className="sta-head sta-left"><p className="sta-eyebrow">Human Expertise First</p><h2>Specialized Medical Expertise, Strengthened by Language Technology</h2><p>Therapeutic-area content can be scientifically complex, clinically consequential, patient-facing, and highly regulated. Sesen combines professional human expertise with language technology designed to improve consistency, efficiency, reuse, and quality control.</p></header>
          <div className="sta-steps sta-steps2">{workflow.map(([n,a,b])=><article key={n}><span>{n}</span><div><h3>{a}</h3><p>{b}</p></div></article>)}</div>
          <div className="sta-responsibility-grid">
            <div><h3>Technology Supports the Workflow</h3><ul>{technologySupports.map((item)=><li key={item}>{item}</li>)}</ul></div>
            <div><h3>Humans Remain Responsible for Meaning</h3><ul>{humansOwn.map((item)=><li key={item}>{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <div className="sta-split-head"><div><p className="sta-eyebrow">Global Program Support</p><h2>Therapeutic Area Translation in 150+ Languages</h2></div><div><p>Global therapeutic programs may involve different regulators, clinical sites, investigators, healthcare systems, patient populations, language variants, and local communication requirements. Sesen provides centralized multilingual support in 150+ languages, helping teams maintain shared terminology, references, quality requirements, and program knowledge across markets.</p><ArrowLink href={LOCATIONS_URL}>Explore Sesen Global Locations</ArrowLink></div></div>
          <div className="sta-regions">{regions.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div>
        </div>
      </section>

      <section className="sta-section sta-soft">
        <div className="sta-shell">
          <header className="sta-head sta-center"><p className="sta-eyebrow">Who We Support</p><h2>Built for the Organizations Advancing Global Healthcare</h2><p>Sesen works across the interconnected life sciences ecosystem, adapting multilingual workflows to each organization's content, development stage, audience, and quality requirements.</p></header>
          <div className="sta-org-grid">{organizations.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div>
          <div className="sta-section-link"><ArrowLink href={links.industries}>Explore Sesen Life Sciences Sectors</ArrowLink></div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <header className="sta-head sta-left"><p className="sta-eyebrow">Connected Expertise</p><h2>Explore Dedicated Therapeutic Area Expertise</h2><p>Go deeper into current Sesen resources for therapeutic areas where terminology, scientific context, patient communication, and multilingual development requirements benefit from dedicated guidance.</p></header>
          <div className="sta-featured">{featured.map(([a,b,c])=><article key={a}><div><h3>{a}</h3><p>{b}</p></div><ArrowLink href={c}>Explore {a}</ArrowLink></article>)}</div>
        </div>
      </section>

      <section className="sta-section sta-blue-soft">
        <div className="sta-shell">
          <header className="sta-head sta-left"><h2>Related Life Sciences Translation Services</h2><p>Connect therapeutic-area expertise with specialized content workflows used throughout research, clinical development, regulatory review, medical communication, and commercialization.</p></header>
          <div className="sta-related"><ArrowLink href={links.lifeSciences}>Life Sciences Translation Services</ArrowLink><ArrowLink href={links.medicalScientific}>Medical & Scientific Translation Services</ArrowLink><ArrowLink href={links.clinicalTrial}>Clinical Trial Translation Services</ArrowLink><ArrowLink href={links.pharmaceutical}>Pharmaceutical Translation Services</ArrowLink><ArrowLink href={links.biotechnology}>Biotechnology Translation Services</ArrowLink><ArrowLink href={links.medicalDevice}>Medical Device Translation Services</ArrowLink><ArrowLink href={links.regulatory}>Regulatory Translation Services</ArrowLink><ArrowLink href={links.linguisticValidation}>Linguistic Validation Services</ArrowLink><ArrowLink href={links.ecoa}>COA & eCOA Translation Solutions</ArrowLink><ArrowLink href={links.services}>Explore All Sesen Services</ArrowLink></div>
        </div>
      </section>

      <section className="sta-section">
        <div className="sta-shell">
          <header className="sta-head sta-center"><p className="sta-eyebrow">Why Sesen</p><h2>Why Life Sciences Teams Choose Sesen</h2><p>Therapeutic-area translation requires an approach that brings together medical and scientific expertise, terminology control, global scalability, human judgment, and disciplined quality workflows.</p></header>
          <div className="sta-reasons">{reasons.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div>
          <div className="sta-quality-band"><strong>ISO-Certified Quality Systems</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span><p>Quality-controlled multilingual delivery for life sciences content and programs.</p></div>
        </div>
      </section>

      <section className="sta-section sta-soft">
        <div className="sta-shell sta-faq-grid">
          <div><p className="sta-eyebrow">Frequently Asked Questions</p><h2>Therapeutic Area Translation Services</h2><p>Practical answers about therapeutic-area expertise, multilingual clinical research, patient-facing content, terminology consistency, and emerging therapies.</p></div>
          <div className="sta-faq">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{q}</span><span aria-hidden="true">+</span></summary><div><p>{a}</p></div></details>)}</div>
        </div>
      </section>

      <section className="sta-final">
        <div className="sta-shell sta-final-grid">
          <div><h2>Bring Specialized Language Expertise to Your Global Therapeutic Program</h2><p>Whether you are preparing an early-stage clinical study, expanding a global trial, translating patient outcome measures, managing regulatory submissions, launching an approved therapy, supporting Medical Affairs, or coordinating multilingual content across an entire development program, Sesen can help connect the language to the science behind it.</p><p>Tell us your therapeutic area, content types, target languages, markets, timeline, and available reference materials. Team Sesen will review your requirements and recommend a multilingual workflow aligned with your program.</p></div>
          <div className="sta-final-actions"><Button href={QUOTE_URL}>REQUEST A QUOTE</Button><Button href={CONTACT_SALES_URL} secondary>TALK WITH TEAM SESEN</Button></div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.sta-page{--blue:#4B6FD8;--blue2:#3659BB;--deep:#253F8F;--soft:#EAF0FF;--pale:#F5F7FF;--navy:#17264D;--ink:#111827;--body:#46546D;--muted:#68758B;--line:#DDE4F2;--line2:#E9EEF8;--bg:#F7F9FD;width:100%;background:#fff;color:var(--body);font-family:Inter,"Segoe UI",system-ui,sans-serif}
.sta-page,.sta-page *{box-sizing:border-box}
.sta-page a{overflow-wrap:anywhere}
.sta-page .sta-shell{width:100%;max-width:1280px;margin:0 auto;padding:0 56px}
.sta-page h1,.sta-page h2,.sta-page h3{margin:0;color:var(--navy);font-family:"Inter Tight",Inter,"Segoe UI",system-ui,sans-serif;font-weight:500}
.sta-page h1{font-size:48px;line-height:1.3;letter-spacing:-.5px}
.sta-page h2{font-size:36px;line-height:1.3;letter-spacing:0}
.sta-page h3{font-size:22px;line-height:1.3}
.sta-page p{margin:0;font-size:16px;line-height:1.72}
.sta-page .sta-eyebrow{margin:0 0 15px;font-family:Inter,"Segoe UI",system-ui,sans-serif;font-size:11px;line-height:1.35;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--blue2)}
.sta-page .sta-section{padding:96px 0}
.sta-page .sta-soft{background:var(--bg)}
.sta-page .sta-blue-soft{background:var(--pale)}
.sta-page .sta-head{max-width:860px;margin-bottom:48px}
.sta-page .sta-head h2{margin-bottom:18px}
.sta-page .sta-head>p:not(.sta-eyebrow){font-size:18px;line-height:1.7}
.sta-page .sta-head>p+p{margin-top:14px}
.sta-page .sta-head .sta-support-copy{font-size:16px!important;line-height:1.72!important;color:var(--body)}
.sta-page .sta-center{margin-left:auto;margin-right:auto;text-align:center}
.sta-page .sta-center>p:not(.sta-eyebrow){text-align:left}
.sta-page .sta-left{text-align:left}
.sta-page .sta-hero{padding:96px 0 88px;background:radial-gradient(circle at 88% 10%,rgba(75,111,216,.08),transparent 33%),linear-gradient(180deg,#fff,#fbfcff)}
.sta-page .sta-hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);gap:64px;align-items:center}
.sta-page .sta-hero-copy{min-width:0}
.sta-page .sta-lead{font-size:19px!important;line-height:1.65!important;color:#293954!important;margin-top:24px!important}
.sta-page .sta-hero-copy>p:not(.sta-eyebrow):not(.sta-lead){margin-top:18px}
.sta-page .sta-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
.sta-page .sta-btn{min-height:50px;padding:13px 25px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.035em}
.sta-page .sta-btn-primary{background:var(--blue);color:#fff;border:1px solid var(--blue)}
.sta-page .sta-btn-primary:hover{background:var(--blue2);border-color:var(--blue2)}
.sta-page .sta-btn-secondary{background:#fff;color:var(--ink);border:1px solid var(--line)}
.sta-page .sta-btn-secondary:hover{background:var(--pale)}
.sta-page .sta-btn:focus-visible,.sta-page .sta-link:focus-visible,.sta-page .sta-faq summary:focus-visible{outline:3px solid rgba(75,111,216,.3);outline-offset:3px}
.sta-page .sta-hero-art{display:flex;justify-content:center;min-width:0}
.sta-page .sta-hero-art svg{width:100%;max-width:520px;height:auto;display:block}
.sta-page .sta-proof{border-top:1px solid var(--line2);border-bottom:1px solid var(--line2)}
.sta-page .sta-proof-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}
.sta-page .sta-proof-grid>div{padding:28px 24px;min-width:0}
.sta-page .sta-proof-grid>div+div{border-left:1px solid var(--line2)}
.sta-page .sta-proof strong{display:block;color:var(--navy);font-size:15px;line-height:1.35}
.sta-page .sta-proof span{display:block;margin-top:6px;font-size:14px;color:var(--muted);line-height:1.5}
.sta-page .sta-icon{width:44px;height:44px;border-radius:12px;background:var(--soft);display:inline-flex;align-items:center;justify-content:center;color:var(--blue2);margin-bottom:18px}
.sta-page .sta-icon svg{width:23px;height:23px;display:block}
.sta-page .sta-dot{width:10px;height:10px;border-radius:50%;background:var(--blue);display:block;margin-top:9px;box-shadow:0 0 0 5px var(--soft)}
.sta-page .sta-quad{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.sta-page .sta-quad article{padding:30px 26px;min-width:0}
.sta-page .sta-quad article+article{border-left:1px solid var(--line)}
.sta-page .sta-quad h3,.sta-page .sta-cards3 h3,.sta-page .sta-cards2 h3,.sta-page .sta-reasons h3,.sta-page .sta-regions h3{margin-bottom:10px}
.sta-page .sta-section-link{margin-top:28px}
.sta-page .sta-area-list{border-top:1px solid var(--line)}
.sta-page .sta-area-group{display:grid;grid-template-columns:285px minmax(0,1fr);gap:46px;padding:40px 0;border-bottom:1px solid var(--line)}
.sta-page .sta-area-title{font-size:24px!important}
.sta-page .sta-area-content{min-width:0}
.sta-page .sta-area-summary{max-width:820px}
.sta-page .sta-area-summary .sta-link{margin-top:14px}
.sta-page .sta-area-item{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:start;padding-bottom:26px;min-width:0}
.sta-page .sta-area-item+.sta-area-item{padding-top:26px;border-top:1px solid var(--line2)}
.sta-page .sta-area-item:last-child{padding-bottom:0}
.sta-page .sta-area-item h3{font-size:20px;margin-bottom:8px}
.sta-page .sta-link{display:inline-flex;align-items:center;gap:8px;color:var(--blue2);text-decoration:none;font-size:15px;line-height:1.5;font-weight:700}
.sta-page .sta-link:hover{text-decoration:underline;text-underline-offset:3px}
.sta-page .sta-inline{margin-top:34px;padding-top:26px;display:flex;align-items:center;justify-content:space-between;gap:30px}
.sta-page .sta-inline p{max-width:840px}
.sta-page .sta-context-note{display:grid;grid-template-columns:250px minmax(0,1fr);gap:34px;align-items:start;margin:-8px 0 36px;padding:24px 26px;border:1px solid var(--line);border-radius:20px;background:var(--pale)}
.sta-page .sta-context-note strong{color:var(--navy);font-size:17px;line-height:1.45}
.sta-page .sta-cards3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.sta-page .sta-cards3 article,.sta-page .sta-cards2 article{padding:28px;border:1px solid var(--line);border-radius:22px;background:#fff;min-width:0}
.sta-page .sta-modalities article{border-top:2px solid #C9D5F3}
.sta-page .sta-cards3 p,.sta-page .sta-cards2 p{margin-bottom:18px}
.sta-page .sta-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 28px}
.sta-page .sta-steps article{display:grid;grid-template-columns:48px minmax(0,1fr);gap:18px;padding:27px 0;border-top:1px solid #CFD8EE;min-width:0}
.sta-page .sta-steps article>span{font-size:14px;font-weight:700;letter-spacing:.08em;color:var(--blue2)}
.sta-page .sta-steps h3{margin-bottom:8px}
.sta-page .sta-links{margin-top:30px;padding-top:26px;border-top:1px solid #CFD8EE;display:flex;flex-wrap:wrap;gap:24px 34px}
.sta-page .sta-split-head{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:72px;align-items:start}
.sta-page .sta-split-head>p,.sta-page .sta-split-head>div:last-child>p{font-size:18px;line-height:1.7}
.sta-page .sta-split-head .sta-link{margin-top:14px}
.sta-page .sta-top-space{margin-top:48px}
.sta-page .sta-cards2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.sta-page .sta-patient-cards article{min-height:100%}
.sta-page .sta-split{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:76px;align-items:start}
.sta-page .sta-split>div:first-child h2{margin-bottom:18px}
.sta-page .sta-split>div:first-child p+p{margin-top:18px}
.sta-page .sta-list{border-top:1px solid var(--line)}
.sta-page .sta-list article{display:grid;grid-template-columns:28px minmax(0,1fr);gap:18px;padding:22px 0;border-bottom:1px solid var(--line)}
.sta-page .sta-list h3{font-size:20px;margin-bottom:6px}
.sta-page .sta-steps2{grid-template-columns:repeat(2,minmax(0,1fr));gap:0 36px;border-top:1px solid #CFD8EE}
.sta-page .sta-steps2 article{border-top:0;border-bottom:1px solid #CFD8EE}
.sta-page .sta-responsibility-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:38px}
.sta-page .sta-responsibility-grid>div{padding:28px 30px;border-radius:20px;border:1px solid #CFD8EE;background:#fff}
.sta-page .sta-responsibility-grid h3{margin-bottom:14px;font-size:20px}
.sta-page .sta-responsibility-grid ul{margin:0;padding-left:20px;color:var(--body)}
.sta-page .sta-responsibility-grid li{font-size:16px;line-height:1.65;margin:7px 0}
.sta-page .sta-regions{margin-top:48px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.sta-page .sta-regions article{padding:28px 22px;min-width:0}
.sta-page .sta-regions article+article{border-left:1px solid var(--line)}
.sta-page .sta-regions h3{font-size:20px}
.sta-page .sta-org-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
.sta-page .sta-org-grid article{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-width:0}
.sta-page .sta-org-grid h3{margin-bottom:9px}
.sta-page .sta-featured{border-top:1px solid var(--line)}
.sta-page .sta-featured article{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:34px;align-items:center;padding:30px 0;border-bottom:1px solid var(--line)}
.sta-page .sta-featured h3{margin-bottom:8px}
.sta-page .sta-related{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 28px}
.sta-page .sta-reasons{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
.sta-page .sta-reasons article{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-width:0;position:relative}
.sta-page .sta-reasons article:before{content:"";position:absolute;left:28px;top:0;width:52px;height:2px;background:var(--blue)}
.sta-page .sta-quality-band{margin-top:28px;padding:24px 26px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:grid;grid-template-columns:auto auto minmax(0,1fr);gap:18px 28px;align-items:center}
.sta-page .sta-quality-band strong{color:var(--navy);font-size:16px}
.sta-page .sta-quality-band span{color:var(--blue2);font-size:14px;font-weight:700}
.sta-page .sta-faq-grid{display:grid;grid-template-columns:minmax(280px,.75fr) minmax(0,1.25fr);gap:72px;align-items:start}
.sta-page .sta-faq-grid>div:first-child h2{margin-bottom:18px}
.sta-page .sta-faq{border-top:1px solid var(--line)}
.sta-page .sta-faq details{border-bottom:1px solid var(--line)}
.sta-page .sta-faq summary{list-style:none;cursor:pointer;padding:23px 0;display:flex;align-items:center;justify-content:space-between;gap:20px;color:var(--navy);font-family:"Inter Tight",Inter,sans-serif;font-size:20px;line-height:1.35;font-weight:500}
.sta-page .sta-faq summary::-webkit-details-marker{display:none}
.sta-page .sta-faq summary>span:last-child{width:32px;height:32px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:var(--soft);color:var(--blue2);flex:0 0 32px}
.sta-page .sta-faq details[open] summary>span:last-child{transform:rotate(45deg)}
.sta-page .sta-faq details>div{padding:0 46px 24px 0}
.sta-page .sta-final{padding:84px 0;background:linear-gradient(135deg,#17264D,#253F8F)}
.sta-page .sta-final-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:72px;align-items:center}
.sta-page .sta-final h2{color:#fff;margin-bottom:18px}
.sta-page .sta-final p{color:#E5EBFF}
.sta-page .sta-final p+p{margin-top:12px}
.sta-page .sta-final-actions{display:flex;flex-direction:column;gap:12px}
.sta-page .sta-final .sta-btn-secondary{background:#fff;border-color:#fff;color:var(--ink)}
@media(max-width:1080px){
  .sta-page .sta-shell{padding:0 40px}
  .sta-page .sta-hero-grid{grid-template-columns:minmax(0,1fr) minmax(320px,.8fr);gap:42px}
  .sta-page .sta-quad{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sta-page .sta-quad article:nth-child(odd){border-left:0}
  .sta-page .sta-quad article:nth-child(n+3){border-top:1px solid var(--line)}
  .sta-page .sta-regions{grid-template-columns:repeat(3,minmax(0,1fr))}
  .sta-page .sta-regions article:nth-child(4){border-left:0}
  .sta-page .sta-regions article:nth-child(n+4){border-top:1px solid var(--line)}
}
@media(max-width:860px){
  .sta-page .sta-shell{padding:0 30px}
  .sta-page .sta-section{padding:80px 0}
  .sta-page .sta-hero{padding:82px 0 76px}
  .sta-page .sta-hero-grid,.sta-page .sta-split-head,.sta-page .sta-split,.sta-page .sta-faq-grid,.sta-page .sta-final-grid{grid-template-columns:1fr}
  .sta-page .sta-proof-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sta-page .sta-proof-grid>div:nth-child(odd){border-left:0}
  .sta-page .sta-proof-grid>div:nth-child(n+3){border-top:1px solid var(--line2)}
  .sta-page .sta-area-group{grid-template-columns:220px minmax(0,1fr);gap:30px}
  .sta-page .sta-cards3,.sta-page .sta-steps,.sta-page .sta-reasons,.sta-page .sta-org-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sta-page .sta-regions{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sta-page .sta-regions article:nth-child(odd){border-left:0}
  .sta-page .sta-regions article:nth-child(n+3){border-top:1px solid var(--line)}
  .sta-page .sta-responsibility-grid{grid-template-columns:1fr}
  .sta-page .sta-context-note{grid-template-columns:1fr;gap:8px}
  .sta-page .sta-faq-grid,.sta-page .sta-final-grid{gap:42px}
  .sta-page .sta-quality-band{grid-template-columns:1fr;gap:5px}
}
@media(max-width:680px){
  .sta-page .sta-shell{padding:0 20px}
  .sta-page .sta-section{padding:68px 0}
  .sta-page .sta-hero{padding:70px 0 66px}
  .sta-page h1{font-size:42px;line-height:1.24}
  .sta-page h2{font-size:32px}
  .sta-page h3{font-size:21px}
  .sta-page .sta-hero-copy .sta-eyebrow,.sta-page .sta-hero-copy h1{text-align:center}
  .sta-page .sta-lead,.sta-page .sta-hero-copy>p:not(.sta-eyebrow):not(.sta-lead){text-align:left}
  .sta-page .sta-actions{flex-direction:column}
  .sta-page .sta-btn{width:100%}
  .sta-page .sta-proof-grid,.sta-page .sta-quad,.sta-page .sta-cards3,.sta-page .sta-cards2,.sta-page .sta-steps,.sta-page .sta-steps2,.sta-page .sta-regions,.sta-page .sta-related,.sta-page .sta-reasons,.sta-page .sta-org-grid{grid-template-columns:1fr}
  .sta-page .sta-proof-grid>div,.sta-page .sta-proof-grid>div:nth-child(even),.sta-page .sta-quad article,.sta-page .sta-quad article+article,.sta-page .sta-regions article,.sta-page .sta-regions article+article{border-left:0}
  .sta-page .sta-proof-grid>div+div,.sta-page .sta-quad article+article,.sta-page .sta-regions article+article{border-top:1px solid var(--line)}
  .sta-page .sta-area-group{grid-template-columns:1fr;gap:18px;padding:32px 0}
  .sta-page .sta-area-item,.sta-page .sta-featured article{grid-template-columns:1fr;gap:14px}
  .sta-page .sta-inline{align-items:flex-start;flex-direction:column}
  .sta-page .sta-center{text-align:left}
  .sta-page .sta-center .sta-eyebrow,.sta-page .sta-center h2{text-align:center}
  .sta-page .sta-center>p:not(.sta-eyebrow){text-align:left}
  .sta-page .sta-left,.sta-page .sta-faq-grid>div:first-child{text-align:left}
  .sta-page .sta-final-actions{width:100%}
}
@media(max-width:380px){
  .sta-page h1{font-size:38px}
  .sta-page h2{font-size:30px}
  .sta-page .sta-lead{font-size:18px!important}
}
`;
