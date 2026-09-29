import React, { useState } from "react";

const SITE = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  clinicalTrials: "https://www.sesen.com/clinical-trial-translation-services/",
  linguisticValidation: "https://www.sesen.com/linguistic-validation-services/",
  pharmaceutical: "https://www.sesen.com/pharmaceutical-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  medicalAffairs: "https://www.sesen.com/medical-affairs-translation-services/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
  ifu: "https://www.sesen.com/ifu-translation-services/",
  digitalHealth: "https://www.sesen.com/ehealth-mhealth-localization-services/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  diabetes: "https://www.sesen.com/diabetes-translation-services/",
  cardiovascular: "https://www.sesen.com/cardiovascular-translation-services/",
  endocrinology: "https://www.sesen.com/endocrinology-metabolic-disease-translation-services/",
  immunology: "https://www.sesen.com/immunology-translation-services/",
  rareDisease: "https://www.sesen.com/rare-disease-translation-services/",
};

const diseaseGroups = [
  {
    title: "Chronic & Progressive Kidney Disease",
    items: [
      "Chronic kidney disease (CKD)",
      "Kidney failure",
      "Diabetic kidney disease",
      "Hypertensive kidney disease",
      "Cardiorenal conditions",
      "CKD-related complications and comorbidities",
    ],
  },
  {
    title: "Acute Kidney Conditions",
    items: [
      "Acute kidney injury (AKI)",
      "Acute kidney diseases and disorders",
      "Critical-care-associated kidney complications",
      "Acute changes in kidney function",
      "Recovery and progression monitoring",
    ],
  },
  {
    title: "Glomerular & Immune-Mediated Disease",
    items: [
      "IgA nephropathy",
      "Lupus nephritis",
      "Glomerulonephritis",
      "Nephrotic and proteinuric kidney diseases",
      "Other immune-mediated glomerular conditions",
    ],
  },
  {
    title: "Genetic & Rare Kidney Disease",
    items: [
      "Polycystic kidney disease",
      "Inherited nephropathies",
      "Genetic kidney disorders",
      "Rare glomerular diseases",
      "Other rare and molecularly defined kidney conditions",
    ],
  },
];

const biomarkers = [
  ["eGFR & GFR", "Estimated and measured glomerular filtration rate, kidney function categories, changes over time, and endpoint definitions."],
  ["Albuminuria & UACR", "Urine albumin-to-creatinine ratio, albuminuria categories, monitoring criteria, and progression risk."],
  ["Proteinuria & UPCR", "Protein excretion, urine protein-to-creatinine ratios, treatment response, and disease-specific endpoints."],
  ["Serum Creatinine & Cystatin C", "Laboratory measures used in kidney-function assessment, risk evaluation, and clinical research."],
  ["CKD Classification & Risk", "Cause, GFR category, albuminuria category, risk prediction, disease progression, and kidney failure risk."],
  ["Kidney Outcomes", "Sustained changes in kidney function, kidney failure, kidney replacement therapy, transplantation, cardiovascular outcomes, and composite endpoints."],
];

const trialContent = [
  "Clinical trial protocols and protocol synopses",
  "Investigator brochures",
  "Informed consent forms and assent forms",
  "Patient information sheets",
  "Inclusion and exclusion criteria",
  "Case report forms and eCRFs",
  "Pharmacy, laboratory, and site manuals",
  "Investigator and site training",
  "Patient diaries and study instructions",
  "Recruitment and retention materials",
  "Clinical outcome assessments",
  "eCOA and ePRO content",
  "Safety communications",
  "Protocol amendments",
  "Clinical study reports",
  "Patient and plain-language trial summaries",
  "Digital trial and decentralized-study content",
];

const outcomes = [
  "Patient-reported outcomes (PRO/ePRO)",
  "Clinical outcome assessments (COA/eCOA)",
  "Symptom questionnaires and scales",
  "Health-related quality-of-life instruments",
  "Treatment-burden assessments",
  "Patient diaries",
  "Treatment-satisfaction measures",
  "Clinician-reported outcomes",
  "Observer-reported outcomes",
  "Performance-based assessments",
  "Digital questionnaire and assessment interfaces",
];

const regulatoryColumns = [
  {
    title: "Regulatory Content",
    items: ["Regulatory submissions and dossiers", "Clinical and nonclinical documentation", "Health authority questions and responses", "Registration materials", "Product information", "Labeling content", "Risk-management documentation"],
  },
  {
    title: "Drug Safety & Pharmacovigilance",
    items: ["Adverse-event content", "Individual case safety information", "Safety narratives", "SUSARs and investigator safety communication", "DSURs", "PSURs/PBRERs", "Risk-management materials", "Recurring safety updates"],
  },
  {
    title: "Scientific & Medical Communication",
    items: ["Clinical study reports", "Manuscripts and publications", "Abstracts and posters", "Congress materials", "Scientific presentations", "Medical education", "Medical information responses", "MSL and field medical content", "HEOR and real-world evidence", "Advisory board materials"],
  },
];

const patientContent = [
  "Disease education",
  "Medication and treatment information",
  "Patient support program content",
  "Diet and lifestyle guidance",
  "Monitoring instructions",
  "Visit and appointment information",
  "Home-care instructions",
  "Shared decision-making materials",
  "Treatment preparation",
  "Caregiver information",
  "Patient portals and applications",
  "Reminders, alerts, and notifications",
  "Clinical trial participant communication",
  "Plain-language scientific information",
];

const dialysisGroups = [
  {
    title: "Hemodialysis",
    items: ["Dialysis equipment and systems", "Patient and clinician instructions", "Setup and treatment procedures", "Safety information", "Monitoring content", "Training and technical documentation"],
  },
  {
    title: "Peritoneal & Home Dialysis",
    items: ["Patient onboarding", "Home-use instructions", "Treatment guides", "Device and supply information", "Training materials", "Troubleshooting", "Digital support and remote communication"],
  },
  {
    title: "Dialysis Devices & Connected Technologies",
    items: ["Instructions for Use", "Device labeling", "User interfaces", "Alarms and safety messages", "Clinician dashboards", "Patient applications", "Technical manuals", "Software help content", "Product training", "Post-market communication"],
  },
];

const transplantItems = [
  "Patient and candidate education",
  "Evaluation and testing information",
  "Donor and recipient materials",
  "Consent documentation",
  "Waiting-list communication",
  "Preoperative instructions",
  "Surgical and clinical documentation",
  "Medication and immunosuppression information",
  "Rejection and safety communication",
  "Discharge and post-transplant instructions",
  "Monitoring and follow-up",
  "Patient support and caregiver materials",
  "Clinical research involving transplant populations",
];

const intersections = [
  {
    title: "Cardiovascular Disease",
    text: "CKD and cardiovascular disease are closely connected. Cardiorenal terminology, blood pressure, cardiovascular risk, and kidney outcomes may need to remain aligned across the same development program.",
    href: SITE.cardiovascular,
    link: "Cardiovascular Translation Services",
  },
  {
    title: "Diabetes",
    text: "Diabetic kidney disease sits at the intersection of nephrology and diabetes, linking metabolic treatment language, cardiovascular risk, and kidney outcomes.",
    href: SITE.diabetes,
    link: "Diabetes Translation Services",
  },
  {
    title: "Endocrinology & Metabolic Disease",
    text: "Kidney disease frequently intersects with metabolic risk, obesity, hypertension, mineral and electrolyte disorders, and broader endocrine or metabolic treatment strategies.",
    href: SITE.endocrinology,
    link: "Endocrinology & Metabolic Disease Translation Services",
  },
  {
    title: "Immunology",
    text: "Lupus nephritis, IgA nephropathy, and other immune-mediated kidney diseases connect kidney pathology with immune mechanisms, biomarkers, therapeutic targets, and safety information.",
    href: SITE.immunology,
    link: "Immunology Translation Services",
  },
  {
    title: "Rare & Genetic Disease",
    text: "Inherited and molecularly defined kidney disorders increasingly intersect with genomic research, biomarker discovery, precision medicine, and rare-disease clinical development.",
    href: SITE.rareDisease,
    link: "Rare Disease Translation Services",
  },
];

const qualityItems = [
  ["Professional Life Sciences Linguists", "Linguists and reviewers are selected according to subject matter, content type, audience, language pair, and project requirements."],
  ["Independent Human Review", "Where required by the workflow, a second professional linguist reviews terminology, meaning, readability, completeness, and contextual accuracy."],
  ["Terminology & Translation Memory", "Approved terminology and reviewed content can be reused across recurring documentation, related products, studies, and updates."],
  ["AI-Assisted QA", "Technology can help surface potential terminology, number, completeness, structural, and consistency issues for professional evaluation."],
  ["Controlled AI-Enabled Workflows", "For appropriate content and language combinations, AI-enabled drafting can operate alongside approved terminology, translation memory, specialist review, and validation-driven QA."],
  ["Final Human Quality Control", "Professional human review remains central for clinical meaning, contextual judgment, patient communication, and final delivery quality."],
];

const relatedServices = [
  ["Clinical Trial Translation Services", "Protocols, ICFs, investigator materials, site content, clinical reports, patient-facing materials, and digital trial content.", SITE.clinicalTrials],
  ["Linguistic Validation Services", "COA, eCOA, ePRO, PRO, ClinRO, ObsRO, PerfO, questionnaires, symptom scales, and structured validation workflows.", SITE.linguisticValidation],
  ["Pharmaceutical Translation Services", "Clinical development, regulatory, labeling, safety, Medical Affairs, and commercialization content for global drug programs.", SITE.pharmaceutical],
  ["Regulatory Translation Services", "Health authority submissions, correspondence, dossiers, registration documentation, and regulated product information.", SITE.regulatory],
  ["Pharmacovigilance Translation Services", "Adverse-event information, safety narratives, individual cases, aggregate reporting, risk management, and drug-safety communication.", SITE.pharmacovigilance],
  ["Medical Affairs Translation Services", "Scientific exchange, publications, congress materials, MSL content, advisory boards, medical information, and HEOR/RWE.", SITE.medicalAffairs],
  ["Medical Device Translation Services", "IFUs, labeling, software, technical documentation, clinical evidence, training, and post-market content for regulated devices.", SITE.medicalDevice],
  ["Digital Health Localization", "Patient apps, telehealth, connected devices, remote monitoring, clinical platforms, portals, and multilingual digital experiences.", SITE.digitalHealth],
];

const faqs = [
  [
    "What are nephrology translation services?",
    "Nephrology translation services provide specialized multilingual support for scientific, clinical, regulatory, technical, and patient-facing content related to kidney disease and kidney care. Projects may involve CKD and AKI research, glomerular or genetic kidney diseases, clinical trials, regulatory submissions, biomarkers and endpoints, COA/eCOA instruments, dialysis technologies, transplantation, Medical Affairs, safety communication, and patient education. Sesen combines professional life sciences linguists, terminology governance, translation memory, structured review, technology-enabled QA, and multilingual program management for kidney disease content.",
  ],
  [
    "What kidney disease content does Sesen translate?",
    "Sesen supports content associated with chronic kidney disease, acute kidney injury, kidney failure, diabetic and hypertensive kidney disease, IgA nephropathy, lupus nephritis, glomerular diseases, polycystic kidney disease, inherited and rare kidney disorders, dialysis, kidney replacement therapy, and transplantation. We also support related cardiovascular, metabolic, immunologic, genetic, device, and digital-health contexts.",
  ],
  [
    "Does Sesen support global CKD and nephrology clinical trials?",
    "Yes. Sesen supports sponsors, biotechnology companies, CROs, research organizations, and global study teams with translation across the clinical trial lifecycle, including protocols, investigator brochures, ICFs, site materials, patient diaries, recruitment content, eCOA/ePRO, safety communication, amendments, clinical study reports, and digital trial content. Terminology and translation memory can be managed at the study or program level to help maintain consistency as documents, countries, and languages change.",
  ],
  [
    "Can Sesen translate and linguistically validate nephrology PRO and eCOA instruments?",
    "Yes. Sesen provides translation and linguistic validation for PRO/ePRO, COA/eCOA, ClinRO, ObsRO, PerfO, questionnaires, symptom scales, quality-of-life instruments, patient diaries, and other outcome measures. Depending on study requirements, workflows can include forward translation, reconciliation, back translation, cognitive debriefing, cultural adaptation, screenshot review, in-context QA, and structured validation documentation.",
  ],
  [
    "Does Sesen translate dialysis and kidney replacement therapy content?",
    "Yes. Sesen supports multilingual content associated with hemodialysis, peritoneal dialysis, home dialysis, kidney replacement therapy, dialysis equipment, connected technologies, training, patient instructions, clinician materials, IFUs, labeling, software, alarms, safety content, and technical documentation. Regulated device projects can be coordinated through Sesen's medical-device, IFU, software-localization, and clinical translation workflows.",
  ],
  [
    "Can Sesen support kidney transplantation content?",
    "Yes. Sesen can translate clinical, patient-facing, scientific, and study content associated with kidney transplantation, including evaluation materials, informed consent, testing information, donor and recipient communication, treatment instructions, medication information, safety communication, post-transplant education, monitoring, and clinical research.",
  ],
  [
    "How does Sesen maintain kidney disease terminology across documents and languages?",
    "Sesen can establish and maintain multilingual glossaries, translation memory, client-specific terminology, reference materials, style guidance, and reviewer feedback throughout a program. These resources help keep recurring terminology—including disease names, biomarkers, endpoints, abbreviations, device terminology, treatment concepts, and patient-facing language—aligned across documents, versions, markets, and languages.",
  ],
  [
    "Does Sesen use AI for nephrology translation?",
    "Sesen uses AI and language technology selectively to strengthen translation workflows, terminology control, content reuse, consistency checks, and quality assurance. Depending on project requirements, controlled AI-assisted translation may be used for suitable content and language combinations within a managed workflow. Professional human linguists and reviewers remain responsible for contextual judgment, clinical meaning, audience appropriateness, and final quality according to the agreed translation process.",
  ],
  [
    "What languages does Sesen support for nephrology translation?",
    "Sesen supports more than 150 languages for clinical, regulatory, medical, scientific, medical-device, digital-health, and patient-facing content. Centralized multilingual program management helps coordinate language variants, reviewers, terminology, content updates, and recurring documentation across global kidney disease programs.",
  ],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="sesen-nephrology-arrow-icon">
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="sesen-nephrology-check-icon">
      <path d="m4 10 3.4 3.4L16 5.8" />
    </svg>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="sesen-nephrology-editorial-link" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function BulletList({ items, columns = false }) {
  return (
    <ul className={`sesen-nephrology-bullet-list${columns ? " sesen-nephrology-bullet-list--columns" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="sesen-nephrology-check-wrap"><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", id }) {
  return (
    <div className={`sesen-nephrology-section-heading sesen-nephrology-section-heading--${align}`}>
      {eyebrow ? <p className="sesen-nephrology-eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="sesen-nephrology-section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="sesen-nephrology-hero-art">
      <svg viewBox="0 0 560 540" role="img" aria-label="Kidney disease clinical research and multilingual documentation illustration">
        <defs>
          <linearGradient id="kidneyPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F5F7FF" />
          </linearGradient>
        </defs>
        <rect x="24" y="30" width="512" height="476" rx="36" fill="url(#kidneyPanel)" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M92 105h138" stroke="#E9EEF8" strokeWidth="2" />
        <circle cx="90" cy="104" r="8" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
        <circle cx="474" cy="415" r="8" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />

        <g transform="translate(173 120)">
          <path d="M88 15c-42 2-69 31-68 75 1 47 35 82 70 78 26-3 43-18 45-43 2-20-8-35-22-49-10-10-14-19-11-31 4-16 0-28-14-30Z" fill="#FFFFFF" stroke="#253F8F" strokeWidth="4" strokeLinejoin="round" />
          <path d="M175 15c42 2 69 31 68 75-1 47-35 82-70 78-26-3-43-18-45-43-2-20 8-35 22-49 10-10 14-19 11-31-4-16 0-28 14-30Z" fill="#FFFFFF" stroke="#253F8F" strokeWidth="4" strokeLinejoin="round" />
          <path d="M124 76c8 8 13 18 13 30v78" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
          <path d="M139 106v78" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
          <path d="M137 184c-7 6-15 9-24 10" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
          <path d="M140 184c7 6 15 9 24 10" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
          <path d="M85 58c18 7 27 20 28 39" fill="none" stroke="#6F8BE1" strokeWidth="3" strokeLinecap="round" />
          <path d="M178 58c-18 7-27 20-28 39" fill="none" stroke="#6F8BE1" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(62 298)">
          <rect width="156" height="142" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M24 33h71" stroke="#17264D" strokeWidth="4" strokeLinecap="round" />
          <path d="M24 55h108M24 76h92M24 97h104" stroke="#68758B" strokeWidth="3" strokeLinecap="round" />
          <rect x="24" y="113" width="68" height="9" rx="4.5" fill="#EAF0FF" />
          <circle cx="123" cy="115" r="14" fill="#EAF0FF" />
          <path d="M116 115h14M123 108v14" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(350 80)">
          <rect width="138" height="112" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M22 82V34" stroke="#68758B" strokeWidth="2" />
          <path d="M22 82h91" stroke="#68758B" strokeWidth="2" />
          <path d="M30 68c19-2 25-21 41-18 16 3 19 21 39 12" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="71" cy="50" r="5" fill="#253F8F" />
          <circle cx="110" cy="62" r="5" fill="#253F8F" />
        </g>

        <g transform="translate(327 344)">
          <rect width="168" height="100" rx="18" fill="#253F8F" />
          <text x="24" y="31" fill="#C8D6FF" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" letterSpacing="1.5">CONTROLLED TERMS</text>
          <text x="24" y="58" fill="#FFFFFF" fontSize="17" fontFamily="Inter, Arial, sans-serif" fontWeight="600">CKD · eGFR · UACR</text>
          <text x="24" y="80" fill="#FFFFFF" fontSize="15" fontFamily="Inter, Arial, sans-serif">Aligned across languages</text>
        </g>

        <path d="M220 370c36-4 61-17 78-39" fill="none" stroke="#6F8BE1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 9" />
        <path d="M362 194c-3 43-23 76-56 99" fill="none" stroke="#6F8BE1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 9" />
        <path d="M322 384c-35-7-63-5-88 7" fill="none" stroke="#6F8BE1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 9" />
      </svg>
    </div>
  );
}

function FaqItem({ q, a, open, onClick, index }) {
  const panelId = `sesen-nephrology-faq-panel-${index}`;
  const buttonId = `sesen-nephrology-faq-button-${index}`;
  return (
    <div className={`sesen-nephrology-faq-item${open ? " is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          className="sesen-nephrology-faq-button"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onClick}
        >
          <span>{q}</span>
          <span className="sesen-nephrology-faq-control" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div id={panelId} className="sesen-nephrology-faq-panel" role="region" aria-labelledby={buttonId} hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function SesenNephrologyTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-nephrology-page">
      <style>{styles}</style>

      <section className="sesen-nephrology-hero" aria-labelledby="sesen-nephrology-page-title">
        <div className="sesen-nephrology-container sesen-nephrology-hero-grid">
          <div className="sesen-nephrology-hero-copy">
            <h1 id="sesen-nephrology-page-title">Nephrology &amp; Kidney Disease Translation Services</h1>
            <p className="sesen-nephrology-hero-lead">
              Support global kidney disease research, clinical development, regulatory programs, medical technologies, and patient communication with specialized multilingual expertise.
            </p>
            <p className="sesen-nephrology-hero-support">
              Sesen helps pharmaceutical and biotechnology companies, CROs, medical device manufacturers, diagnostics companies, digital health organizations, research teams, and healthcare organizations keep complex kidney-disease language accurate, consistent, and appropriate for every audience.
            </p>
            <div className="sesen-nephrology-hero-actions">
              <a className="sesen-nephrology-button sesen-nephrology-button--primary" href={SITE.quote}>REQUEST A QUOTE</a>
              <a className="sesen-nephrology-button sesen-nephrology-button--secondary" href={SITE.sales}>TALK WITH TEAM SESEN</a>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="sesen-nephrology-proof" aria-label="Sesen nephrology translation capabilities">
        <div className="sesen-nephrology-container sesen-nephrology-proof-grid">
          <div><strong>150+</strong><span>Languages</span><small>Global and regional kidney disease programs</small></div>
          <div><strong>ISO</strong><span>17100 · 9001 · 13485</span><small>Structured quality systems</small></div>
          <div><strong>HUMAN</strong><span>Professional Review</span><small>Independent review and final QC</small></div>
          <div><strong>TERM</strong><span>Governance</span><small>Controlled terminology across content</small></div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-overview" aria-labelledby="connected-language-title">
        <div className="sesen-nephrology-container sesen-nephrology-split sesen-nephrology-split--wide-left">
          <div>
            <p className="sesen-nephrology-eyebrow">CONNECTED KIDNEY-DISEASE COMMUNICATION</p>
            <h2 id="connected-language-title">Kidney Disease Language Connects Research, Clinical Development, and Patient Care</h2>
            <p className="sesen-nephrology-body-large">
              Kidney disease programs create an interconnected body of scientific, clinical, regulatory, technical, and patient-facing content. A disease definition introduced during early research may later appear in a clinical protocol, endpoint strategy, investigator brochure, patient questionnaire, regulatory submission, product label, scientific publication, or patient education program.
            </p>
            <p>
              That continuity matters in nephrology. CKD programs may depend on specific measures and classifications involving kidney function, albuminuria, disease cause, progression risk, clinical endpoints, cardiovascular outcomes, and patient experience. Sesen helps global teams manage this language as a connected multilingual program rather than as unrelated translation requests.
            </p>
            <p>
              Controlled terminology, translation memory, approved references, version management, professional review, and structured QA help preserve meaning as content moves between teams, documents, markets, and audiences.
            </p>
            <div className="sesen-nephrology-signature-line">One kidney disease program. Many documents. One controlled multilingual vocabulary.</div>
          </div>
          <div className="sesen-nephrology-chain-panel" aria-label="Connected kidney disease content flow">
            {[
              ["Research", "Disease mechanisms · biomarkers · terminology"],
              ["Clinical Development", "Protocols · endpoints · patient assessments"],
              ["Regulatory", "Evidence · submissions · safety · labeling"],
              ["Patient & Clinical Care", "Education · treatment · digital support"],
            ].map(([title, text], i) => (
              <div className="sesen-nephrology-chain-row" key={title}>
                <span className="sesen-nephrology-chain-dot" aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
                {i < 3 ? <span className="sesen-nephrology-chain-line" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--pale" aria-labelledby="ecosystem-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            title="Specialized Translation for the Kidney Disease Development Ecosystem"
            intro="Modern nephrology spans therapeutics, diagnostics, medical technologies, digital health, precision medicine, clinical outcomes research, and long-term patient care. Sesen supports the multilingual content connecting these environments."
            id="ecosystem-title"
          />
          <div className="sesen-nephrology-editorial-grid sesen-nephrology-editorial-grid--3">
            {[
              ["Pharmaceutical & Biotechnology", "Kidney disease drug development, clinical programs, regulatory submissions, labeling, safety, Medical Affairs, publications, and patient support."],
              ["CROs & Global Study Teams", "Multicountry nephrology studies, including startup documentation, informed consent, site materials, eCOA, amendments, safety content, and clinical reports."],
              ["Medical Device & Dialysis Companies", "Dialysis technologies, monitoring systems, IFUs, labeling, technical documentation, software, training, and post-market communication."],
              ["Diagnostics & Laboratory Organizations", "Scientific, clinical, regulatory, technical, and user-facing content associated with kidney function testing, biomarkers, and laboratory technologies."],
              ["Digital Health & Connected Care", "Patient applications, clinician dashboards, remote monitoring, telehealth, digital trial platforms, ePRO/eCOA, alerts, and instructions."],
              ["Research & Healthcare", "Kidney disease research, scientific communication, patient education, clinical guidance, educational programs, and multilingual healthcare content."],
            ].map(([title, text]) => (
              <article className="sesen-nephrology-editorial-item" key={title}>
                <span className="sesen-nephrology-icon-surface" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M5 7h14M5 12h14M5 17h9" /></svg>
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-nephrology-link-row">
            <EditorialLink href={SITE.pharmaceutical}>Pharmaceutical Translation Services</EditorialLink>
            <EditorialLink href={SITE.clinicalTrials}>Clinical Trial Translation Services</EditorialLink>
            <EditorialLink href={SITE.medicalDevice}>Medical Device Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section" aria-labelledby="spectrum-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            eyebrow="THERAPEUTIC DEPTH"
            title="Translation Across the Kidney Disease Spectrum"
            align="left"
            intro="Different kidney diseases involve different mechanisms, patient populations, biomarkers, endpoints, treatments, and communication requirements. Sesen supports disease-specific language while keeping terminology aligned with the broader clinical program."
            id="spectrum-title"
          />
          <div className="sesen-nephrology-disease-grid">
            {diseaseGroups.map((group) => (
              <article className="sesen-nephrology-disease-group" key={group.title}>
                <h3>{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>
          <p className="sesen-nephrology-note">
            For programs that cross therapeutic boundaries, Sesen can coordinate related terminology with specialized content in cardiovascular disease, diabetes, immunology, endocrinology and metabolic disease, and rare disease.
          </p>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-biomarker-section" aria-labelledby="biomarker-title">
        <div className="sesen-nephrology-container sesen-nephrology-split sesen-nephrology-split--balanced">
          <div>
            <h2 id="biomarker-title">Precision for Kidney-Specific Measures, Biomarkers, and Clinical Endpoints</h2>
            <p className="sesen-nephrology-body-large">
              Kidney disease research depends on quantitative measures whose definitions, abbreviations, thresholds, units, and context must remain precise across languages.
            </p>
            <p>
              Sesen helps preserve approved scientific meaning—including terminology, abbreviations, numerical expressions, endpoint language, units, and contextual distinctions—across every target language.
            </p>
            <div className="sesen-nephrology-flow-strip" aria-label="Kidney disease evidence flow">
              {[
                "Kidney Function",
                "Biomarkers",
                "Risk Classification",
                "Clinical Endpoints",
                "Regulatory Evidence",
              ].map((label, index, arr) => (
                <React.Fragment key={label}>
                  <span>{label}</span>{index < arr.length - 1 ? <ArrowIcon /> : null}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="sesen-nephrology-biomarker-list">
            {biomarkers.map(([title, text]) => (
              <div className="sesen-nephrology-biomarker-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--pale" aria-labelledby="clinical-trials-title">
        <div className="sesen-nephrology-container sesen-nephrology-split sesen-nephrology-split--wide-right">
          <div>
            <p className="sesen-nephrology-eyebrow">GLOBAL CLINICAL RESEARCH</p>
            <h2 id="clinical-trials-title">Multilingual Support for Nephrology Clinical Trials</h2>
            <p className="sesen-nephrology-body-large">
              Global kidney disease studies generate connected content across protocol development, study startup, patient enrollment, site operations, clinical assessments, amendments, safety reporting, data collection, and final reporting.
            </p>
            <p>
              Sesen supports studies involving chronic kidney disease, acute kidney injury, glomerular and immune-mediated diseases, genetic kidney disorders, dialysis populations, transplantation, and related cardiovascular or metabolic outcomes.
            </p>
            <p>
              Study terminology can be managed across versions so approved language remains aligned as protocols change, countries are added, patient materials evolve, assessments move into digital environments, and safety or regulatory content is updated.
            </p>
            <EditorialLink href={SITE.clinicalTrials}>Clinical Trial Translation Services</EditorialLink>
          </div>
          <div className="sesen-nephrology-list-panel">
            <h3>Clinical Trial Content We Translate</h3>
            <BulletList items={trialContent} columns />
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--deep" aria-labelledby="outcomes-title">
        <div className="sesen-nephrology-container sesen-nephrology-split sesen-nephrology-split--wide-left">
          <div className="sesen-nephrology-outcomes-copy">
            <p className="sesen-nephrology-eyebrow sesen-nephrology-eyebrow--light">PATIENT-CENTERED OUTCOMES</p>
            <h2 id="outcomes-title">Patient Outcomes That Remain Meaningful Across Languages</h2>
            <p className="sesen-nephrology-body-large sesen-nephrology-text-light">
              Clinical measures do not capture every aspect of living with kidney disease. Global studies may also evaluate symptoms, physical function, daily activities, quality of life, treatment burden, treatment satisfaction, and other outcomes reported by patients, clinicians, caregivers, or observers.
            </p>
            <p className="sesen-nephrology-text-light">
              For outcome instruments, literal translation may not be sufficient. Each language version needs to preserve the intended concept, respondent understanding, response options, instructions, and measurement intent across cultures and digital environments.
            </p>
            <p className="sesen-nephrology-text-light">
              Depending on study requirements, linguistic validation workflows can include forward translation, reconciliation, back translation, cognitive debriefing, cultural adaptation, eCOA screenshot review, and structured documentation.
            </p>
            <a className="sesen-nephrology-button sesen-nephrology-button--light" href={SITE.linguisticValidation}>EXPLORE LINGUISTIC VALIDATION</a>
          </div>
          <div className="sesen-nephrology-dark-list">
            <h3>Clinical Outcome Assessment Support</h3>
            <BulletList items={outcomes} />
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section" aria-labelledby="regulatory-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            title="Regulatory and Scientific Translation for Global Kidney Disease Programs"
            align="left"
            intro="As kidney disease programs progress, the same scientific evidence may need to support health authority review, drug safety, product information, Medical Affairs, publications, investigator communication, and global scientific exchange."
            id="regulatory-title"
          />
          <div className="sesen-nephrology-columns-three">
            {regulatoryColumns.map((column) => (
              <article key={column.title}>
                <h3>{column.title}</h3>
                <BulletList items={column.items} />
              </article>
            ))}
          </div>
          <p className="sesen-nephrology-centered-copy">
            Kidney-disease terminology should not change simply because the document changes. Sesen combines terminology governance, translation memory, professional review, and multilingual program coordination to help preserve approved language as evidence moves from clinical development into regulatory, scientific, safety, and Medical Affairs environments.
          </p>
          <div className="sesen-nephrology-link-row sesen-nephrology-link-row--centered">
            <EditorialLink href={SITE.regulatory}>Regulatory Translation Services</EditorialLink>
            <EditorialLink href={SITE.pharmacovigilance}>Pharmacovigilance Translation Services</EditorialLink>
            <EditorialLink href={SITE.medicalAffairs}>Medical Affairs Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-patient-section" aria-labelledby="patient-communication-title">
        <div className="sesen-nephrology-container sesen-nephrology-split sesen-nephrology-split--balanced">
          <div className="sesen-nephrology-patient-copy">
            <h2 id="patient-communication-title">Translate Complex Kidney Care Into Clear Patient Communication</h2>
            <p className="sesen-nephrology-body-large">
              Kidney disease communication can extend over years of monitoring, treatment decisions, medication changes, lifestyle guidance, symptom management, dialysis planning, transplantation, and long-term follow-up.
            </p>
            <p>
              The language that works for a nephrologist, clinical scientist, or regulator is not necessarily the language a patient or caregiver needs. Sesen helps translate complex kidney-disease information into clear, audience-appropriate multilingual communication while preserving the underlying medical meaning.
            </p>
            <div className="sesen-nephrology-audience-flow" aria-label="Audience adaptation flow">
              <span>Scientific Language</span><ArrowIcon /><span>Healthcare Professional Communication</span><ArrowIcon /><span>Patient-Appropriate Communication</span>
            </div>
            <p>
              The goal is not to simplify the science by changing its meaning. The goal is to communicate the same information appropriately to the people who need to understand and act on it.
            </p>
          </div>
          <div className="sesen-nephrology-patient-panel">
            <h3>Patient-Facing Content</h3>
            <BulletList items={patientContent} columns />
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--pale" aria-labelledby="dialysis-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            title="Multilingual Content for Dialysis and Kidney Replacement Therapy"
            align="left"
            intro="Dialysis and kidney replacement therapies generate extensive clinical, technical, regulatory, digital, training, and patient-facing content. Sesen supports the language layer across these connected experiences."
            id="dialysis-title"
          />
          <div className="sesen-nephrology-dialysis-grid">
            {dialysisGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>
          <p className="sesen-nephrology-centered-copy">
            Modern dialysis technologies increasingly sit at the intersection of medical devices, software, home care, clinical training, and patient communication. Regulated device content can be coordinated through Sesen's medical device, IFU, software-localization, and clinical translation workflows.
          </p>
          <div className="sesen-nephrology-link-row sesen-nephrology-link-row--centered">
            <EditorialLink href={SITE.medicalDevice}>Medical Device Translation Services</EditorialLink>
            <EditorialLink href={SITE.ifu}>IFU Translation Services</EditorialLink>
            <EditorialLink href={SITE.digitalHealth}>Digital Health Localization</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section" aria-labelledby="transplant-title">
        <div className="sesen-nephrology-container sesen-nephrology-transplant-layout">
          <div>
            <h2 id="transplant-title">Translation Across the Kidney Transplant Journey</h2>
            <p className="sesen-nephrology-body-large">
              Kidney transplantation connects clinical evaluation, testing, surgery, immunosuppressive therapy, patient education, safety communication, and long-term follow-up.
            </p>
            <p>
              Terminology may cross nephrology, immunology, surgery, pharmacology, clinical research, and patient communication, making consistent multilingual language particularly important across transplant programs.
            </p>
          </div>
          <div className="sesen-nephrology-transplant-list">
            <BulletList items={transplantItems} columns />
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-vocabulary-section" aria-labelledby="vocabulary-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            eyebrow="TERMINOLOGY CONTINUITY"
            title="One Kidney-Disease Vocabulary Across Every Document and Market"
            align="left"
            intro="Protocols are amended. Endpoint definitions are refined. Safety language changes. Patient materials are updated. Digital systems receive new releases. New countries and languages are added. Sesen helps preserve approved language as the program evolves."
            id="vocabulary-title"
          />
          <div className="sesen-nephrology-vocabulary-grid">
            <div className="sesen-nephrology-vocabulary-controls">
              {[
                ["Terminology Governance", "Maintain approved multilingual terminology for diseases, biomarkers, endpoints, therapeutic concepts, product terminology, abbreviations, and patient-facing language."],
                ["Translation Memory", "Reuse previously reviewed translations where appropriate and distinguish changed from unchanged content across recurring documents and updates."],
                ["Reference Content", "Apply client glossaries, study documents, previous translations, regulatory terminology, style guidance, and approved references throughout the program."],
                ["Version & Amendment Control", "Coordinate multilingual changes as protocols, consent forms, labeling, safety information, software, and other controlled content evolve."],
                ["Cross-Document Consistency", "Align recurring terminology such as CKD, AKI, eGFR, GFR, UACR, albuminuria, proteinuria, kidney failure, dialysis, and transplantation."],
                ["AI-Assisted Quality Checks", "Help surface potential terminology differences, number mismatches, omissions, inconsistencies, and other issues for professional review."],
              ].map(([title, text]) => (
                <div className="sesen-nephrology-control-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="sesen-nephrology-document-flow" aria-label="Kidney disease multilingual content lifecycle">
              {[
                "Protocol",
                "Endpoints & Assessments",
                "Patient Materials",
                "Regulatory Submission",
                "Labeling & Safety",
                "Medical Affairs & Patient Education",
              ].map((label, index) => (
                <div key={label} className="sesen-nephrology-document-step">
                  <span className="sesen-nephrology-step-marker">{String(index + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </div>
              ))}
              <div className="sesen-nephrology-term-cloud">
                <span>CKD</span><span>eGFR</span><span>UACR</span><span>albuminuria</span><span>kidney failure</span><span>dialysis</span><span>transplant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section" aria-labelledby="intersections-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            eyebrow="CONNECTED THERAPEUTIC AREAS"
            title="Kidney Disease Rarely Exists in Isolation"
            align="left"
            intro="Modern nephrology increasingly intersects with cardiovascular medicine, diabetes, metabolic disease, immunology, genetics, and rare disease research. Multilingual terminology needs to remain accurate across every discipline contributing to the same evidence and patient journey."
            id="intersections-title"
          />
          <div className="sesen-nephrology-intersection-list">
            {intersections.map((item) => (
              <article className="sesen-nephrology-intersection-row" key={item.title}>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <EditorialLink href={item.href}>{item.link}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--soft" aria-labelledby="quality-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERTISE FIRST"
            title="Human Nephrology Expertise, Strengthened by Translation Technology"
            intro="Complex medical translation works best when technology strengthens professional judgment rather than replacing it. Sesen combines specialized life sciences expertise with multilingual technology designed to improve consistency, reuse, visibility, and quality control."
            id="quality-title"
          />
          <div className="sesen-nephrology-quality-grid">
            {qualityItems.map(([title, text]) => (
              <article key={title}>
                <span className="sesen-nephrology-icon-surface" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.6 2.8 8.3 7 10 4.2-1.7 7-5.4 7-10V6l-7-3Z" /><path d="m8.7 12 2.2 2.2 4.5-4.5" /></svg>
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-nephrology-principle-band">
            <strong>Technology helps control complexity at scale.</strong>
            <span>Professional human expertise remains responsible for clinical meaning, contextual judgment, and final quality.</span>
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section" aria-labelledby="global-title">
        <div className="sesen-nephrology-container sesen-nephrology-global-layout">
          <div>
            <h2 id="global-title">Support Kidney Disease Programs Across Global Markets</h2>
            <p className="sesen-nephrology-body-large">
              Nephrology programs often extend across multiple countries, research sites, regulatory environments, languages, patient populations, and content formats.
            </p>
            <p>
              Sesen provides centralized translation and localization support in 150+ languages, helping global teams coordinate multilingual delivery without restarting terminology and workflow knowledge with every project.
            </p>
            <div className="sesen-nephrology-global-number"><strong>150+</strong><span>languages supported for global life sciences programs</span></div>
          </div>
          <div className="sesen-nephrology-global-rows">
            {[
              ["Multi-Country Clinical Research", "Coordinate protocols, patient content, clinical assessments, site documentation, amendments, and study updates across participating countries."],
              ["Regional Language Adaptation", "Support appropriate regional terminology, language variants, market conventions, and client-approved preferences."],
              ["Reviewer Coordination", "Organize feedback from client teams, subject-matter experts, in-country reviewers, clinical stakeholders, and other designated reviewers."],
              ["Recurring Program Support", "Maintain terminology, translation memory, reference materials, reviewer history, and workflow knowledge across ongoing programs."],
              ["Multiple Content Formats", "Coordinate translation across Word, PDF, InDesign, structured content, software strings, clinical platforms, eCOA environments, multimedia, and other multilingual formats."],
            ].map(([title, text]) => (
              <div key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-trust-band" aria-labelledby="partner-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            title="A Specialized Multilingual Partner for Global Nephrology Programs"
            intro="Kidney disease programs require more than language coverage. They require a translation partner that understands how clinical evidence, terminology, regulatory documentation, patient communication, medical technology, and global content operations connect."
            id="partner-title"
          />
          <div className="sesen-nephrology-trust-grid">
            {[
              ["Life Sciences Specialization", "Clinical, regulatory, scientific, patient, medical-device, and digital-health content."],
              ["Connected Terminology", "Terminology governance and translation memory across documents, markets, programs, and revisions."],
              ["Human-Led Quality", "Professional translation, review, technology-assisted QA, and final human quality control."],
              ["ISO-Certified Workflows", "ISO 17100, ISO 9001, and ISO 13485 quality frameworks."],
              ["Technology-Enabled Efficiency", "Terminology, reuse, consistency, completeness, and review support without replacing expert judgment."],
              ["Program Continuity", "Centralized multilingual management helps preserve terminology, references, reviewer knowledge, and workflow context across recurring global programs."],
            ].map(([title, text]) => (
              <div key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-section--pale" aria-labelledby="related-title">
        <div className="sesen-nephrology-container">
          <SectionHeading
            title="Related Translation Services for Kidney Disease Programs"
            align="left"
            intro="Nephrology content frequently connects with broader clinical, regulatory, scientific, patient, digital, and device workflows."
            id="related-title"
          />
          <div className="sesen-nephrology-related-list">
            {relatedServices.map(([title, text, href]) => (
              <article key={title}>
                <div><h3>{title}</h3><p>{text}</p></div>
                <EditorialLink href={href}>Explore {title.replace(" Services", "")}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-section sesen-nephrology-faq-section" aria-labelledby="faq-title">
        <div className="sesen-nephrology-container sesen-nephrology-faq-layout">
          <div className="sesen-nephrology-faq-intro">
            <h2 id="faq-title">Nephrology &amp; Kidney Disease Translation Services FAQ</h2>
            <p>
              Common questions about kidney disease translation, clinical trials, linguistic validation, dialysis, transplantation, terminology governance, AI-assisted workflows, and global language support.
            </p>
            <EditorialLink href={SITE.medicalScientific}>Medical &amp; Scientific Translation Services</EditorialLink>
          </div>
          <div className="sesen-nephrology-faq-list">
            {faqs.map(([q, a], index) => (
              <FaqItem
                key={q}
                q={q}
                a={a}
                index={index}
                open={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-nephrology-final-cta" aria-labelledby="final-cta-title">
        <div className="sesen-nephrology-container sesen-nephrology-final-cta-inner">
          <div>
            <h2 id="final-cta-title">Support Your Global Kidney Disease Program With Specialized Multilingual Expertise</h2>
            <p>
              Whether you are developing a kidney disease therapy, running a global nephrology clinical trial, validating a patient outcome instrument, preparing regulatory documentation, launching a dialysis technology, communicating scientific evidence, or supporting patients across multiple markets, Sesen can build the multilingual workflow around your content, languages, audiences, timelines, and quality requirements.
            </p>
            <div className="sesen-nephrology-final-tags" aria-label="Nephrology translation capabilities">
              <span>Clinical &amp; regulatory translation</span>
              <span>COA/eCOA linguistic validation</span>
              <span>Kidney terminology governance</span>
              <span>Medical device localization</span>
              <span>Patient communication</span>
              <span>150+ languages</span>
            </div>
          </div>
          <div className="sesen-nephrology-final-actions">
            <a className="sesen-nephrology-button sesen-nephrology-button--light" href={SITE.sales}>TALK WITH TEAM SESEN</a>
            <a className="sesen-nephrology-button sesen-nephrology-button--primary-on-dark" href={SITE.quote}>REQUEST A QUOTE</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.sesen-nephrology-page {
  --sn-blue: #4B6FD8;
  --sn-blue-dark: #3659BB;
  --sn-blue-deep: #253F8F;
  --sn-blue-mid: #6F8BE1;
  --sn-blue-soft: #EAF0FF;
  --sn-blue-pale: #F5F7FF;
  --sn-neutral-soft: #F7F9FD;
  --sn-heading: #17264D;
  --sn-ink: #111827;
  --sn-body: #46546D;
  --sn-muted: #68758B;
  --sn-border: #DDE4F2;
  --sn-divider: #E9EEF8;
  --sn-light-accent: #C8D6FF;
  --sn-white: #FFFFFF;
  color: var(--sn-body);
  background: var(--sn-white);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 17px;
  line-height: 1.68;
  overflow-x: clip;
}

.sesen-nephrology-page *,
.sesen-nephrology-page *::before,
.sesen-nephrology-page *::after { box-sizing: border-box; }

.sesen-nephrology-page .sesen-nephrology-container {
  width: min(100%, 1280px);
  margin: 0 auto;
  padding-left: 56px;
  padding-right: 56px;
}

.sesen-nephrology-page h1,
.sesen-nephrology-page h2,
.sesen-nephrology-page h3 {
  font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--sn-heading);
  font-weight: 500;
  margin: 0;
  overflow-wrap: break-word;
}

.sesen-nephrology-page h1 {
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: -0.5px;
  max-width: 720px;
}

.sesen-nephrology-page h2 {
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: 0;
}

.sesen-nephrology-page h3 {
  font-size: 22px;
  line-height: 1.3;
}

.sesen-nephrology-page p { margin: 0; font-size: 17px; color: var(--sn-body); overflow-wrap: break-word; }
.sesen-nephrology-page p + p { margin-top: 18px; }

.sesen-nephrology-page a { color: inherit; }
.sesen-nephrology-page a:focus-visible,
.sesen-nephrology-page button:focus-visible { outline: 3px solid rgba(75,111,216,.38); outline-offset: 4px; }

.sesen-nephrology-page .sesen-nephrology-eyebrow {
  margin: 0 0 16px;
  color: var(--sn-blue-dark);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .15em;
  line-height: 1.35;
  text-transform: uppercase;
}

.sesen-nephrology-page .sesen-nephrology-eyebrow--light { color: var(--sn-light-accent); }
.sesen-nephrology-page .sesen-nephrology-body-large { font-size: 19px; line-height: 1.62; color: #293954; }
.sesen-nephrology-page .sesen-nephrology-text-light { color: rgba(255,255,255,.88); }

.sesen-nephrology-page .sesen-nephrology-hero {
  background: var(--sn-white);
  padding: 94px 0 90px;
  border-bottom: 1px solid var(--sn-divider);
}

.sesen-nephrology-page .sesen-nephrology-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr);
  gap: 64px;
  align-items: center;
}

.sesen-nephrology-page .sesen-nephrology-hero-copy { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-hero-lead {
  margin-top: 24px;
  max-width: 700px;
  font-size: 20px;
  line-height: 1.6;
  color: #293954;
}
.sesen-nephrology-page .sesen-nephrology-hero-support { margin-top: 16px; max-width: 700px; }
.sesen-nephrology-page .sesen-nephrology-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

.sesen-nephrology-page .sesen-nephrology-button {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 27px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: .035em;
  transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
}
.sesen-nephrology-page .sesen-nephrology-button:hover { transform: translateY(-1px); }
.sesen-nephrology-page .sesen-nephrology-button--primary { background: var(--sn-blue); color: #fff; border: 1px solid var(--sn-blue); }
.sesen-nephrology-page .sesen-nephrology-button--primary:hover { background: var(--sn-blue-dark); border-color: var(--sn-blue-dark); }
.sesen-nephrology-page .sesen-nephrology-button--secondary { background: #fff; color: var(--sn-ink); border: 1px solid #DDE4F2; }
.sesen-nephrology-page .sesen-nephrology-button--secondary:hover { background: var(--sn-blue-pale); border-color: #6F8BE1; }
.sesen-nephrology-page .sesen-nephrology-button--light { background: #fff; color: var(--sn-ink); border: 1px solid #fff; }
.sesen-nephrology-page .sesen-nephrology-button--light:hover { background: var(--sn-blue-soft); border-color: var(--sn-blue-soft); }
.sesen-nephrology-page .sesen-nephrology-button--primary-on-dark { background: var(--sn-blue); color: #fff; border: 1px solid #6F8BE1; }
.sesen-nephrology-page .sesen-nephrology-button--primary-on-dark:hover { background: #3659BB; }

.sesen-nephrology-page .sesen-nephrology-hero-art { min-width: 0; display: flex; justify-content: center; }
.sesen-nephrology-page .sesen-nephrology-hero-art svg { width: 100%; max-width: 540px; height: auto; display: block; }

.sesen-nephrology-page .sesen-nephrology-proof { background: #fff; border-bottom: 1px solid var(--sn-divider); }
.sesen-nephrology-page .sesen-nephrology-proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); padding-top: 26px; padding-bottom: 26px; gap: 28px; }
.sesen-nephrology-page .sesen-nephrology-proof-grid > div { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-proof-grid strong { display: block; color: var(--sn-blue-dark); font-size: 13px; letter-spacing: .08em; line-height: 1.2; }
.sesen-nephrology-page .sesen-nephrology-proof-grid span { display: block; margin-top: 4px; color: var(--sn-heading); font-size: 16px; font-weight: 700; }
.sesen-nephrology-page .sesen-nephrology-proof-grid small { display: block; margin-top: 4px; color: var(--sn-muted); font-size: 13px; line-height: 1.45; }

.sesen-nephrology-page .sesen-nephrology-section { padding: 96px 0; }
.sesen-nephrology-page .sesen-nephrology-section--pale { background: var(--sn-blue-pale); }
.sesen-nephrology-page .sesen-nephrology-section--soft { background: var(--sn-neutral-soft); }
.sesen-nephrology-page .sesen-nephrology-section--deep { background: var(--sn-blue-deep); }
.sesen-nephrology-page .sesen-nephrology-section--deep h2,
.sesen-nephrology-page .sesen-nephrology-section--deep h3 { color: #fff; }

.sesen-nephrology-page .sesen-nephrology-section-heading { margin-bottom: 48px; }
.sesen-nephrology-page .sesen-nephrology-section-heading--center { text-align: center; }
.sesen-nephrology-page .sesen-nephrology-section-heading--center .sesen-nephrology-section-intro { margin-left: auto; margin-right: auto; }
.sesen-nephrology-page .sesen-nephrology-section-heading--left { text-align: left; }
.sesen-nephrology-page .sesen-nephrology-section-intro { margin-top: 18px; max-width: 820px; font-size: 18px; line-height: 1.65; }

.sesen-nephrology-page .sesen-nephrology-split { display: grid; gap: 64px; align-items: start; }
.sesen-nephrology-page .sesen-nephrology-split--wide-left { grid-template-columns: minmax(0, 1.12fr) minmax(360px, .88fr); }
.sesen-nephrology-page .sesen-nephrology-split--wide-right { grid-template-columns: minmax(360px, .82fr) minmax(0, 1.18fr); }
.sesen-nephrology-page .sesen-nephrology-split--balanced { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.sesen-nephrology-page .sesen-nephrology-split > * { min-width: 0; }

.sesen-nephrology-page .sesen-nephrology-overview h2,
.sesen-nephrology-page .sesen-nephrology-biomarker-section h2,
.sesen-nephrology-page .sesen-nephrology-patient-section h2,
.sesen-nephrology-page .sesen-nephrology-transplant-layout h2,
.sesen-nephrology-page .sesen-nephrology-global-layout h2 { max-width: 760px; }

.sesen-nephrology-page .sesen-nephrology-signature-line {
  margin-top: 28px;
  padding: 18px 20px;
  background: var(--sn-blue-pale);
  border-left: 2px solid var(--sn-blue);
  color: var(--sn-heading);
  font-size: 17px;
  font-weight: 700;
}

.sesen-nephrology-page .sesen-nephrology-chain-panel {
  position: relative;
  padding: 28px 30px;
  border: 1px solid var(--sn-border);
  border-radius: 28px;
  background: #fff;
}
.sesen-nephrology-page .sesen-nephrology-chain-row { position: relative; display: grid; grid-template-columns: 20px 1fr; gap: 16px; padding: 15px 0; min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-chain-row h3 { font-size: 20px; }
.sesen-nephrology-page .sesen-nephrology-chain-row p { margin-top: 5px; }
.sesen-nephrology-page .sesen-nephrology-chain-dot { width: 14px; height: 14px; margin-top: 6px; border-radius: 50%; background: var(--sn-blue-soft); border: 3px solid var(--sn-blue); z-index: 2; }
.sesen-nephrology-page .sesen-nephrology-chain-line { position: absolute; left: 6px; top: 30px; bottom: -18px; width: 2px; background: var(--sn-divider); }

.sesen-nephrology-page .sesen-nephrology-editorial-grid { display: grid; gap: 0 34px; border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-editorial-grid--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.sesen-nephrology-page .sesen-nephrology-editorial-item { padding: 30px 0 32px; border-bottom: 1px solid var(--sn-border); min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-editorial-item h3 { margin-top: 16px; }
.sesen-nephrology-page .sesen-nephrology-editorial-item p { margin-top: 10px; }
.sesen-nephrology-page .sesen-nephrology-icon-surface { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; background: var(--sn-blue-soft); }
.sesen-nephrology-page .sesen-nephrology-icon-surface svg { width: 23px; height: 23px; fill: none; stroke: var(--sn-blue-dark); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.sesen-nephrology-page .sesen-nephrology-link-row { display: flex; flex-wrap: wrap; gap: 16px 34px; margin-top: 34px; }
.sesen-nephrology-page .sesen-nephrology-link-row--centered { justify-content: center; }
.sesen-nephrology-page .sesen-nephrology-editorial-link { display: inline-flex; align-items: center; gap: 8px; color: var(--sn-blue-dark); font-size: 16px; line-height: 1.35; font-weight: 700; text-decoration: none; min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-editorial-link span { overflow-wrap: anywhere; }
.sesen-nephrology-page .sesen-nephrology-editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
.sesen-nephrology-page .sesen-nephrology-arrow-icon { width: 18px; height: 18px; flex: 0 0 auto; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.sesen-nephrology-page .sesen-nephrology-disease-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-disease-group { padding: 32px 36px 34px 0; border-bottom: 1px solid var(--sn-border); min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-disease-group:nth-child(even) { padding-left: 36px; padding-right: 0; border-left: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-bullet-list { list-style: none; padding: 0; margin: 18px 0 0; display: grid; gap: 10px; }
.sesen-nephrology-page .sesen-nephrology-bullet-list--columns { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 28px; }
.sesen-nephrology-page .sesen-nephrology-bullet-list li { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: start; font-size: 17px; color: var(--sn-body); min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-check-wrap { width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; margin-top: 3px; border-radius: 50%; background: var(--sn-blue-soft); }
.sesen-nephrology-page .sesen-nephrology-check-icon { width: 13px; height: 13px; fill: none; stroke: var(--sn-blue-dark); stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.sesen-nephrology-page .sesen-nephrology-note { max-width: 900px; margin: 30px auto 0; text-align: center; }

.sesen-nephrology-page .sesen-nephrology-biomarker-section { background: #fff; }
.sesen-nephrology-page .sesen-nephrology-biomarker-list { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-biomarker-row { padding: 19px 0; border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-biomarker-row h3 { font-size: 20px; }
.sesen-nephrology-page .sesen-nephrology-biomarker-row p { margin-top: 6px; }
.sesen-nephrology-page .sesen-nephrology-flow-strip { margin-top: 30px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; color: var(--sn-heading); font-size: 14px; font-weight: 700; }
.sesen-nephrology-page .sesen-nephrology-flow-strip > span { padding: 8px 10px; border-radius: 10px; background: var(--sn-blue-pale); }
.sesen-nephrology-page .sesen-nephrology-flow-strip .sesen-nephrology-arrow-icon { color: var(--sn-blue); }

.sesen-nephrology-page .sesen-nephrology-list-panel,
.sesen-nephrology-page .sesen-nephrology-patient-panel {
  padding: 30px;
  background: #fff;
  border: 1px solid var(--sn-border);
  border-radius: 28px;
}
.sesen-nephrology-page .sesen-nephrology-list-panel h3,
.sesen-nephrology-page .sesen-nephrology-patient-panel h3 { margin-bottom: 4px; }

.sesen-nephrology-page .sesen-nephrology-section--deep .sesen-nephrology-bullet-list li { color: rgba(255,255,255,.88); }
.sesen-nephrology-page .sesen-nephrology-section--deep .sesen-nephrology-check-wrap { background: rgba(200,214,255,.12); border: 1px solid rgba(200,214,255,.18); }
.sesen-nephrology-page .sesen-nephrology-section--deep .sesen-nephrology-check-icon { stroke: var(--sn-light-accent); }
.sesen-nephrology-page .sesen-nephrology-outcomes-copy .sesen-nephrology-button { margin-top: 32px; }
.sesen-nephrology-page .sesen-nephrology-dark-list { padding: 30px; border: 1px solid rgba(200,214,255,.22); border-radius: 28px; background: rgba(255,255,255,.045); }
.sesen-nephrology-page .sesen-nephrology-dark-list h3 { margin-bottom: 6px; }

.sesen-nephrology-page .sesen-nephrology-columns-three { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 34px; }
.sesen-nephrology-page .sesen-nephrology-columns-three article { min-width: 0; padding-top: 24px; border-top: 2px solid var(--sn-blue-soft); }
.sesen-nephrology-page .sesen-nephrology-centered-copy { max-width: 900px; margin: 38px auto 0; text-align: center; }

.sesen-nephrology-page .sesen-nephrology-patient-section { background: #fff; }
.sesen-nephrology-page .sesen-nephrology-audience-flow { display: grid; grid-template-columns: 1fr 22px 1.25fr 22px 1.15fr; gap: 8px; align-items: center; margin: 30px 0; }
.sesen-nephrology-page .sesen-nephrology-audience-flow > span { padding: 13px 14px; text-align: center; border-radius: 14px; background: var(--sn-blue-pale); color: var(--sn-heading); font-size: 14px; font-weight: 700; }
.sesen-nephrology-page .sesen-nephrology-audience-flow .sesen-nephrology-arrow-icon { color: var(--sn-blue); margin: 0 auto; }

.sesen-nephrology-page .sesen-nephrology-dialysis-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; }
.sesen-nephrology-page .sesen-nephrology-dialysis-grid article { padding: 28px 30px; background: #fff; border: 1px solid var(--sn-border); border-radius: 22px; min-width: 0; }

.sesen-nephrology-page .sesen-nephrology-transplant-layout { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 70px; align-items: start; }
.sesen-nephrology-page .sesen-nephrology-transplant-layout > * { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-transplant-list { padding-top: 8px; border-top: 1px solid var(--sn-border); }

.sesen-nephrology-page .sesen-nephrology-vocabulary-section { background: var(--sn-blue-pale); }
.sesen-nephrology-page .sesen-nephrology-vocabulary-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr); gap: 64px; align-items: start; }
.sesen-nephrology-page .sesen-nephrology-vocabulary-grid > * { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-vocabulary-controls { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-control-row { padding: 20px 0; border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-control-row h3 { font-size: 20px; }
.sesen-nephrology-page .sesen-nephrology-control-row p { margin-top: 6px; }
.sesen-nephrology-page .sesen-nephrology-document-flow { padding: 28px; background: #fff; border: 1px solid var(--sn-border); border-radius: 28px; }
.sesen-nephrology-page .sesen-nephrology-document-step { display: grid; grid-template-columns: 40px 1fr; gap: 14px; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--sn-divider); color: var(--sn-heading); font-size: 16px; font-weight: 700; }
.sesen-nephrology-page .sesen-nephrology-step-marker { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: var(--sn-blue-soft); color: var(--sn-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .05em; }
.sesen-nephrology-page .sesen-nephrology-term-cloud { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.sesen-nephrology-page .sesen-nephrology-term-cloud span { padding: 7px 10px; border-radius: 999px; background: var(--sn-neutral-soft); color: var(--sn-heading); font-size: 13px; font-weight: 700; }

.sesen-nephrology-page .sesen-nephrology-intersection-list { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-intersection-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 36px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-intersection-row > div { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-intersection-row p { margin-top: 6px; max-width: 860px; }

.sesen-nephrology-page .sesen-nephrology-quality-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 30px; }
.sesen-nephrology-page .sesen-nephrology-quality-grid article { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-quality-grid h3 { margin-top: 15px; }
.sesen-nephrology-page .sesen-nephrology-quality-grid p { margin-top: 8px; }
.sesen-nephrology-page .sesen-nephrology-principle-band { margin-top: 48px; padding: 24px 28px; display: grid; grid-template-columns: .8fr 1.2fr; gap: 30px; align-items: center; border-top: 1px solid var(--sn-border); border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-principle-band strong { color: var(--sn-heading); font-size: 18px; }

.sesen-nephrology-page .sesen-nephrology-global-layout { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); gap: 72px; align-items: start; }
.sesen-nephrology-page .sesen-nephrology-global-layout > * { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-global-number { display: grid; grid-template-columns: auto minmax(0, 220px); align-items: center; gap: 18px; margin-top: 34px; width: fit-content; max-width: 100%; }
.sesen-nephrology-page .sesen-nephrology-global-number strong { font-family: "Inter Tight", Inter, sans-serif; font-size: 52px; font-weight: 500; color: var(--sn-blue-dark); line-height: .96; }
.sesen-nephrology-page .sesen-nephrology-global-number span { max-width: 220px; color: var(--sn-heading); font-size: 17px; font-weight: 700; line-height: 1.35; }
.sesen-nephrology-page .sesen-nephrology-global-rows { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-global-rows > div { padding: 22px 0; border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-global-rows h3 { font-size: 20px; }
.sesen-nephrology-page .sesen-nephrology-global-rows p { margin-top: 6px; }

.sesen-nephrology-page .sesen-nephrology-trust-band { padding: 84px 0; background: #fff; border-top: 1px solid var(--sn-divider); border-bottom: 1px solid var(--sn-divider); }
.sesen-nephrology-page .sesen-nephrology-trust-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-trust-grid > div { padding: 24px 30px 26px 0; border-bottom: 1px solid var(--sn-border); min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(3n+2),
.sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(3n+3) { padding-left: 30px; border-left: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-trust-grid h3 { font-size: 20px; }
.sesen-nephrology-page .sesen-nephrology-trust-grid p { margin-top: 7px; }

.sesen-nephrology-page .sesen-nephrology-related-list { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-related-list article { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 40px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-related-list article > div { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-related-list p { margin-top: 5px; max-width: 820px; }

.sesen-nephrology-page .sesen-nephrology-faq-layout { display: grid; grid-template-columns: minmax(300px, .72fr) minmax(0, 1.28fr); gap: 74px; align-items: start; }
.sesen-nephrology-page .sesen-nephrology-faq-layout > * { min-width: 0; }
.sesen-nephrology-page .sesen-nephrology-faq-intro { position: sticky; top: 32px; }
.sesen-nephrology-page .sesen-nephrology-faq-intro p { margin-top: 18px; }
.sesen-nephrology-page .sesen-nephrology-faq-intro .sesen-nephrology-editorial-link { margin-top: 26px; }
.sesen-nephrology-page .sesen-nephrology-faq-list { border-top: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-faq-item { border-bottom: 1px solid var(--sn-border); }
.sesen-nephrology-page .sesen-nephrology-faq-item h3 { margin: 0; }
.sesen-nephrology-page .sesen-nephrology-faq-button { width: 100%; min-height: 74px; display: grid; grid-template-columns: minmax(0, 1fr) 36px; gap: 20px; align-items: center; padding: 21px 0; background: none; border: 0; text-align: left; color: var(--sn-heading); cursor: pointer; font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; line-height: 1.35; }
.sesen-nephrology-page .sesen-nephrology-faq-control { width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--sn-blue-soft); color: var(--sn-blue-dark); font-family: Inter, sans-serif; font-size: 22px; font-weight: 500; }
.sesen-nephrology-page .sesen-nephrology-faq-panel { padding: 0 54px 24px 0; }
.sesen-nephrology-page .sesen-nephrology-faq-panel p { max-width: 840px; }

.sesen-nephrology-page .sesen-nephrology-final-cta { padding: 84px 0; background: var(--sn-blue-deep); }
.sesen-nephrology-page .sesen-nephrology-final-cta-inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 64px; align-items: center; }
.sesen-nephrology-page .sesen-nephrology-final-cta h2 { color: #fff; max-width: 820px; }
.sesen-nephrology-page .sesen-nephrology-final-cta p { max-width: 880px; margin-top: 18px; color: rgba(255,255,255,.88); }
.sesen-nephrology-page .sesen-nephrology-final-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.sesen-nephrology-page .sesen-nephrology-final-tags span { padding: 7px 10px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(200,214,255,.2); color: rgba(255,255,255,.88); font-size: 13px; font-weight: 700; }
.sesen-nephrology-page .sesen-nephrology-final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 230px; }

@media (max-width: 1120px) {
  .sesen-nephrology-page .sesen-nephrology-container { padding-left: 40px; padding-right: 40px; }
  .sesen-nephrology-page .sesen-nephrology-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, .82fr); gap: 42px; }
  .sesen-nephrology-page .sesen-nephrology-split { gap: 46px; }
  .sesen-nephrology-page .sesen-nephrology-vocabulary-grid { gap: 46px; }
  .sesen-nephrology-page .sesen-nephrology-global-layout { gap: 52px; }
  .sesen-nephrology-page .sesen-nephrology-faq-layout { gap: 52px; }
}

@media (max-width: 920px) {
  .sesen-nephrology-page .sesen-nephrology-container { padding-left: 30px; padding-right: 30px; }
  .sesen-nephrology-page .sesen-nephrology-hero { padding: 82px 0 78px; }
  .sesen-nephrology-page .sesen-nephrology-hero-grid { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-hero-art svg { max-width: 500px; }
  .sesen-nephrology-page .sesen-nephrology-proof-grid { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
  .sesen-nephrology-page .sesen-nephrology-section { padding: 82px 0; }
  .sesen-nephrology-page .sesen-nephrology-split,
  .sesen-nephrology-page .sesen-nephrology-transplant-layout,
  .sesen-nephrology-page .sesen-nephrology-vocabulary-grid,
  .sesen-nephrology-page .sesen-nephrology-global-layout,
  .sesen-nephrology-page .sesen-nephrology-faq-layout { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-editorial-grid--3,
  .sesen-nephrology-page .sesen-nephrology-columns-three,
  .sesen-nephrology-page .sesen-nephrology-dialysis-grid,
  .sesen-nephrology-page .sesen-nephrology-quality-grid,
  .sesen-nephrology-page .sesen-nephrology-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(3n+2),
  .sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(3n+3) { padding-left: 0; border-left: 0; }
  .sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--sn-border); }
  .sesen-nephrology-page .sesen-nephrology-faq-intro { position: static; }
  .sesen-nephrology-page .sesen-nephrology-final-cta-inner { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-final-actions { flex-direction: row; min-width: 0; }
}

@media (max-width: 768px) {
  .sesen-nephrology-page .sesen-nephrology-container { padding-left: 28px; padding-right: 28px; }
  .sesen-nephrology-page .sesen-nephrology-editorial-link { min-height: 44px; }
  .sesen-nephrology-page h1 { font-size: 42px; }
  .sesen-nephrology-page h2 { font-size: 32px; }
  .sesen-nephrology-page h3 { font-size: 21px; }
  .sesen-nephrology-page .sesen-nephrology-hero-grid { gap: 44px; }
  .sesen-nephrology-page .sesen-nephrology-editorial-grid--3,
  .sesen-nephrology-page .sesen-nephrology-columns-three,
  .sesen-nephrology-page .sesen-nephrology-dialysis-grid,
  .sesen-nephrology-page .sesen-nephrology-quality-grid { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-disease-grid { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-disease-group,
  .sesen-nephrology-page .sesen-nephrology-disease-group:nth-child(even) { padding: 28px 0; border-left: 0; }
  .sesen-nephrology-page .sesen-nephrology-bullet-list--columns { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-audience-flow { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-audience-flow .sesen-nephrology-arrow-icon { transform: rotate(90deg); }
  .sesen-nephrology-page .sesen-nephrology-intersection-row,
  .sesen-nephrology-page .sesen-nephrology-related-list article { grid-template-columns: 1fr; gap: 14px; }
  .sesen-nephrology-page .sesen-nephrology-principle-band { grid-template-columns: 1fr; gap: 10px; }
  .sesen-nephrology-page .sesen-nephrology-trust-grid { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-trust-grid > div,
  .sesen-nephrology-page .sesen-nephrology-trust-grid > div:nth-child(even) { padding: 23px 0; border-left: 0; }
  .sesen-nephrology-page .sesen-nephrology-final-actions { flex-direction: column; align-items: stretch; }
}

@media (max-width: 560px) {
  .sesen-nephrology-page { font-size: 17px; }
  .sesen-nephrology-page .sesen-nephrology-container { padding-left: 20px; padding-right: 20px; }
  .sesen-nephrology-page .sesen-nephrology-hero { padding: 70px 0 64px; }
  .sesen-nephrology-page h1 { font-size: 42px; text-align: center; }
  .sesen-nephrology-page h2 { font-size: 32px; }
  .sesen-nephrology-page .sesen-nephrology-hero-copy > .sesen-nephrology-eyebrow { text-align: center; }
  .sesen-nephrology-page .sesen-nephrology-hero-lead,
  .sesen-nephrology-page .sesen-nephrology-hero-support { text-align: left; }
  .sesen-nephrology-page .sesen-nephrology-hero-actions { flex-direction: column; }
  .sesen-nephrology-page .sesen-nephrology-hero-actions .sesen-nephrology-button { width: 100%; }
  .sesen-nephrology-page .sesen-nephrology-hero-art svg { width: 100%; max-width: 430px; }
  .sesen-nephrology-page .sesen-nephrology-proof-grid { grid-template-columns: 1fr 1fr; gap: 22px 18px; }
  .sesen-nephrology-page .sesen-nephrology-section { padding: 70px 0; }
  .sesen-nephrology-page .sesen-nephrology-section-heading { margin-bottom: 36px; }
  .sesen-nephrology-page .sesen-nephrology-section-heading--center h2,
  .sesen-nephrology-page .sesen-nephrology-section-heading--center .sesen-nephrology-eyebrow { text-align: center; }
  .sesen-nephrology-page .sesen-nephrology-section-heading--center .sesen-nephrology-section-intro { text-align: left; }
  .sesen-nephrology-page .sesen-nephrology-chain-panel,
  .sesen-nephrology-page .sesen-nephrology-list-panel,
  .sesen-nephrology-page .sesen-nephrology-patient-panel,
  .sesen-nephrology-page .sesen-nephrology-dark-list,
  .sesen-nephrology-page .sesen-nephrology-document-flow { padding: 24px 22px; border-radius: 22px; }
  .sesen-nephrology-page .sesen-nephrology-link-row { flex-direction: column; gap: 15px; }
  .sesen-nephrology-page .sesen-nephrology-link-row--centered { align-items: flex-start; }
  .sesen-nephrology-page .sesen-nephrology-centered-copy,
  .sesen-nephrology-page .sesen-nephrology-note { text-align: left; }
  .sesen-nephrology-page .sesen-nephrology-flow-strip { align-items: flex-start; }
  .sesen-nephrology-page .sesen-nephrology-flow-strip .sesen-nephrology-arrow-icon { transform: rotate(90deg); margin: 0 0 0 12px; }
  .sesen-nephrology-page .sesen-nephrology-global-number { align-items: center; }
  .sesen-nephrology-page .sesen-nephrology-global-number strong { font-size: 46px; }
  .sesen-nephrology-page .sesen-nephrology-faq-button { font-size: 19px; padding: 20px 0; }
  .sesen-nephrology-page .sesen-nephrology-faq-panel { padding-right: 0; }
  .sesen-nephrology-page .sesen-nephrology-final-cta { padding: 70px 0; }
  .sesen-nephrology-page .sesen-nephrology-final-actions .sesen-nephrology-button { width: 100%; }
}

@media (max-width: 360px) {
  .sesen-nephrology-page h1 { font-size: 38px; }
  .sesen-nephrology-page h2 { font-size: 30px; }
  .sesen-nephrology-page .sesen-nephrology-proof-grid { grid-template-columns: 1fr; }
  .sesen-nephrology-page .sesen-nephrology-global-number { grid-template-columns: 1fr; gap: 8px; width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-nephrology-page .sesen-nephrology-button { transition: none; }
  .sesen-nephrology-page .sesen-nephrology-button:hover { transform: none; }
}
`;
