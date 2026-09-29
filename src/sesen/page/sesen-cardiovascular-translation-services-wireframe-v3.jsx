import React, { useState } from "react";

const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, size = 24 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const props = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    heart: <><path d="M12 20s-7-4.7-7-10.2A4.6 4.6 0 0 1 13 6.6a4.6 4.6 0 0 1 8 3.2C21 15.3 14 20 12 20Z" {...props}/><path d="M7.5 12h2.2l1.4-3 2 6 1.4-3H18" {...props}/></>,
    trial: <><path d="M8 3h8M10 3v4l-4.5 8a4 4 0 0 0 3.5 6h6a4 4 0 0 0 3.5-6L14 7V3" {...props}/><path d="M7.6 15h8.8" {...props}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...props}/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" {...props}/></>,
    document: <><path d="M6 3h8l4 4v14H6z" {...props}/><path d="M14 3v5h5M9 12h6M9 16h6" {...props}/></>,
    shield: <><path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6z" {...props}/><path d="m9 12 2 2 4-5" {...props}/></>,
    terms: <><path d="M4 7h10M4 12h8M4 17h6" {...props}/><circle cx="18" cy="16" r="3" {...props}/><path d="m20.2 18.2 1.8 1.8" {...props}/></>,
    person: <><circle cx="12" cy="8" r="3" {...props}/><path d="M5 21c.7-4 3.1-6 7-6s6.3 2 7 6" {...props}/></>,
    data: <><path d="M5 20V9M10 20V4M15 20v-7M20 20V7" {...props}/></>,
    regulatory: <><path d="M7 3h10v18H7z" {...props}/><path d="M10 7h4M10 11h4M10 15h4" {...props}/></>,
    safety: <><path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6z" {...props}/><path d="M12 8v5M12 16h.01" {...props}/></>,
    affairs: <><path d="M4 6h16v12H4z" {...props}/><path d="M8 18v3M16 18v3M7 21h10" {...props}/><path d="M8 10h8M8 14h5" {...props}/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" {...props}/><path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" {...props}/></>,
    language: <><path d="M4 5h9v8H8l-4 3z" {...props}/><path d="M11 11h9v8h-4l-4 3v-9" {...props}/></>,
    device: <><rect x="5" y="4" width="14" height="16" rx="2" {...props}/><path d="M8 11h2l1.2-2.5 1.8 5 1.2-2.5H17" {...props}/></>,
    kidney: <><path d="M9 5c-3 0-5 3-5 7s2 7 5 7c2 0 3-1 3-3V8c0-2-1-3-3-3ZM15 5c3 0 5 3 5 7s-2 7-5 7c-2 0-3-1-3-3V8c0-2 1-3 3-3Z" {...props}/></>,
    metabolic: <><circle cx="9" cy="9" r="4" {...props}/><circle cx="16" cy="15" r="4" {...props}/><path d="m12 12 2 2" {...props}/></>,
    brain: <><path d="M9 5a3 3 0 0 0-5 2 3 3 0 0 0 0 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1V6A3 3 0 0 0 9 5ZM15 5a3 3 0 0 1 5 2 3 3 0 0 1 0 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1V6a3 3 0 0 1 2-1Z" {...props}/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...props}/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" {...props}/></>,
  };
  return <svg {...common}>{icons[name] || icons.document}</svg>;
};

const HeroArt = () => (
  <svg className="sesen-cardio__hero-art" viewBox="0 0 560 520" role="img" aria-labelledby="cardioHeroTitle cardioHeroDesc">
    <title id="cardioHeroTitle">Cardiovascular clinical translation illustration</title>
    <desc id="cardioHeroDesc">Editorial line art combining a heart waveform, clinical documents, multilingual content, and connected cardiovascular data.</desc>
    <rect x="74" y="40" width="412" height="420" rx="46" fill="#F5F7FF" stroke="#DDE4F2" strokeWidth="2"/>
    <circle cx="280" cy="248" r="118" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2"/>
    <path d="M279 330s-74-45-74-105c0-34 26-58 57-58 18 0 35 9 47 25 12-16 29-25 47-25 31 0 57 24 57 58 0 60-74 105-74 105" fill="none" stroke="#17264D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M218 250h34l18-38 24 75 18-40h42" fill="none" stroke="#4B6FD8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <g transform="translate(62 86)">
      <rect width="136" height="112" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2"/>
      <path d="M26 26h50M26 45h83M26 64h68M26 83h38" stroke="#68758B" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="109" cy="83" r="13" fill="#EAF0FF"/>
      <path d="m102 83 5 5 10-11" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <g transform="translate(362 76)">
      <rect width="132" height="116" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2"/>
      <path d="M26 28h40M26 50h77M26 72h60" stroke="#68758B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 92h16l8-18 11 32 8-16h22" fill="none" stroke="#4B6FD8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <g transform="translate(72 336)">
      <rect width="142" height="92" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2"/>
      <path d="M26 31h58M26 52h88M26 70h44" stroke="#68758B" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="112" cy="31" r="12" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2"/>
      <path d="M108 31h8M112 27v8" stroke="#3659BB" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <g transform="translate(378 340)">
      <rect width="112" height="88" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2"/>
      <circle cx="40" cy="32" r="10" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2"/>
      <path d="M63 28h24M63 41h18M27 61h59" stroke="#68758B" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <path d="M198 142c28 7 51 21 67 40M361 142c-23 8-44 22-58 42M203 383c26-8 47-21 62-37M372 381c-28-8-50-22-66-39" fill="none" stroke="#9FB0D8" strokeWidth="2.5" strokeDasharray="7 9"/>
  </svg>
);

const diseaseAreas = [
  { title: "Heart Failure & Cardiomyopathy", icon: "heart", text: "Support for acute and chronic heart failure programs, including HFrEF, HFpEF, cardiomyopathies, functional status, symptom burden, hospitalization, disease progression, and treatment outcomes.", tags: "Heart failure · HFrEF · HFpEF · cardiomyopathy · functional capacity · congestion" },
  { title: "Coronary & Atherosclerotic Disease", icon: "data", text: "Translation for coronary artery disease, ischemic heart disease, acute coronary syndromes, myocardial infarction, atherosclerosis, cardiovascular risk reduction, and related clinical outcomes.", tags: "CAD · ACS · MI · ischemia · atherosclerosis · revascularization" },
  { title: "Arrhythmia & Electrophysiology", icon: "trial", text: "Multilingual support for atrial fibrillation, rhythm disorders, cardiac electrophysiology, thromboembolic risk, anticoagulation, rhythm control, and related therapeutic research.", tags: "AF · arrhythmia · rhythm control · anticoagulation · electrophysiology" },
  { title: "Hypertension & Pulmonary Vascular Disease", icon: "globe", text: "Support for systemic and resistant hypertension, pulmonary hypertension, pulmonary arterial hypertension, hemodynamic assessment, blood-pressure endpoints, and associated outcomes.", tags: "Hypertension · PAH · blood pressure · vascular resistance · hemodynamics" },
  { title: "Structural & Valvular Heart Disease", icon: "document", text: "Translation for clinical research and scientific communication related to valvular disease, structural cardiac conditions, congenital and acquired abnormalities, and associated treatment programs.", tags: "Valvular disease · structural heart disease · valve function · cardiac anatomy" },
  { title: "Peripheral Vascular & Cardiometabolic Risk", icon: "metabolic", text: "Support for peripheral arterial disease, dyslipidemia, ASCVD, thrombosis, obesity-related cardiovascular risk, diabetes-associated cardiovascular disease, and cardiorenal outcomes.", tags: "PAD · dyslipidemia · ASCVD · thrombosis · cardiometabolic risk · cardiorenal risk" },
];

const lifecycle = [
  { n: "01", title: "Research & Early Development", text: "Support scientific communication as cardiovascular mechanisms, targets, compounds, biologics, biomarkers, and treatment strategies move toward clinical development.", items: ["Preclinical documentation", "Scientific reports", "Mechanism-of-action content", "Biomarker documentation"] },
  { n: "02", title: "Clinical Development", text: "Translate study content used by sponsors, CROs, investigators, sites, ethics committees, and patients throughout cardiovascular clinical research.", items: ["Protocols & amendments", "Investigator's brochures", "Informed consent", "COA, PRO, ePRO & eCOA"] },
  { n: "03", title: "Regulatory Submission", text: "Maintain alignment between cardiovascular evidence, endpoint terminology, safety content, study documentation, and product information during global review.", items: ["CTD & eCTD", "Clinical summaries", "Health authority responses", "Product information"] },
  { n: "04", title: "Safety & Medical Affairs", text: "Carry approved cardiovascular terminology into safety surveillance, scientific exchange, evidence communication, publications, and professional education.", items: ["Pharmacovigilance", "Medical information", "Congress materials", "HEOR & RWE"] },
  { n: "05", title: "Approval & Post-Approval", text: "Support multilingual communication as cardiovascular therapies reach healthcare professionals, patients, caregivers, affiliates, and new markets.", items: ["Labeling", "Patient education", "Medical education", "Lifecycle updates"] },
];

const clinicalColumns = [
  { title: "Protocols & Study Design", icon: "trial", items: ["Clinical trial protocols", "Protocol synopses", "Protocol amendments", "Eligibility criteria", "Study procedures", "Endpoint descriptions"] },
  { title: "Investigator & Site Content", icon: "document", items: ["Investigator's brochures", "Site manuals", "Investigator training", "Pharmacy & laboratory manuals", "Study instructions", "Clinical operations materials"] },
  { title: "Patient & Participant Content", icon: "person", items: ["Informed consent & re-consent", "Patient information sheets", "Recruitment materials", "Patient diaries", "Questionnaires", "Digital study content"] },
  { title: "Clinical Reporting & Evidence", icon: "data", items: ["Clinical study reports", "Clinical narratives", "Tables, listings & figures", "Trial result summaries", "Scientific summaries", "Publications"] },
];

const endpointGroups = [
  { title: "Clinical Events & Outcomes", icon: "heart", items: ["Cardiovascular death", "All-cause mortality", "Myocardial infarction", "Stroke", "Heart-failure hospitalization", "Urgent heart-failure visits", "Revascularization", "Composite cardiovascular endpoints"] },
  { title: "Symptoms, Function & Patient Outcomes", icon: "person", items: ["Dyspnea", "Fatigue", "Edema", "Chest discomfort", "Exercise tolerance", "Physical limitation", "NYHA functional classification", "Health-related quality of life"] },
  { title: "Physiological, Diagnostic & Imaging Measures", icon: "data", items: ["Blood pressure", "Heart rate", "ECG & rhythm terminology", "Ejection fraction", "Cardiac imaging measurements", "Hemodynamic parameters", "Lipid measurements", "Cardiovascular biomarkers"] },
];

const qualitySteps = [
  { n: "01", title: "Content & Risk Assessment", text: "Evaluate content type, intended use, therapeutic context, audience, references, language requirements, and quality expectations." },
  { n: "02", title: "Terminology & Reference Preparation", text: "Align approved terminology, translation memories, glossaries, prior studies, labeling, and authoritative reference content." },
  { n: "03", title: "AI-Enabled Translation Workflow", text: "Use appropriate language technology and approved assets to improve consistency, content reuse, and multilingual production efficiency." },
  { n: "04", title: "Professional Human Review", text: "Qualified linguists and reviewers remain responsible for meaning, cardiovascular terminology, context, readability, and linguistic quality." },
  { n: "05", title: "Automated & Linguistic QA", text: "Check terminology, numbers, units, abbreviations, omissions, repeated content, formatting, and version changes." },
  { n: "06", title: "Final Quality Control", text: "Confirm completeness, file integrity, resolved queries, formatting, and delivery readiness according to project requirements." },
];

const related = [
  { title: "Cardiovascular Device Translation Services", linkLabel: "Cardiovascular Device Translation", text: "Regulated labeling, IFUs and DFUs, technical documentation, software, clinical content, and global product communication for cardiovascular devices.", href: "https://www.sesen.com/cardiovascular-device-translation-services/", icon: "device" },
  { title: "Clinical Trial Translation Services", linkLabel: "Clinical Trial Translation", text: "Multilingual support across protocols, informed consent, patient content, COAs, safety information, clinical reports, and digital trial environments.", href: "https://www.sesen.com/clinical-trial-translation-services/", icon: "trial" },
  { title: "Linguistic Validation Services", linkLabel: "Linguistic Validation", text: "Structured translation and validation of COAs, PROs, ePROs, eCOAs, questionnaires, symptom scales, and clinical instruments.", href: "https://www.sesen.com/linguistic-validation-services/", icon: "language" },
  { title: "Regulatory Submission Translation Services", linkLabel: "Regulatory Submission Translation", text: "Translation for submissions, CTD and eCTD content, health authority communication, product information, and lifecycle updates.", href: "https://www.sesen.com/regulatory-submission-translation-services/", icon: "regulatory" },
  { title: "Pharmacovigilance Translation Services", linkLabel: "Pharmacovigilance Translation", text: "Multilingual safety narratives, adverse-event documentation, periodic reports, risk-management content, and drug-safety communication.", href: "https://www.sesen.com/pharmacovigilance-translation-services/", icon: "safety" },
  { title: "Medical Affairs Translation Services", linkLabel: "Medical Affairs Translation", text: "Scientific exchange, publications, congresses, MSL resources, advisory boards, medical information, HEOR, and real-world evidence.", href: "https://www.sesen.com/medical-affairs-translation-services/", icon: "affairs" },
  { title: "Medical & Scientific Translation Services", linkLabel: "Medical & Scientific Translation", text: "Specialized multilingual support for scientific, clinical, medical, safety, professional, and patient-facing communication.", href: "https://www.sesen.com/medical-scientific-translation-services/", icon: "document" },
  { title: "Life Sciences Translation Services", linkLabel: "Life Sciences Translation", text: "Enterprise translation and localization support across clinical, regulatory, medical device, digital health, safety, and scientific content.", href: "https://www.sesen.com/life-sciences-translation-services/", icon: "globe" },
];

const faqs = [
  { q: "What are cardiovascular translation services?", a: "Cardiovascular translation services—sometimes described as cardiology translation services—provide specialized translation and localization for scientific, clinical, regulatory, safety, Medical Affairs, and patient-facing content related to cardiovascular disease, research, drug development, treatment, and post-approval communication. Cardiovascular translation can require detailed knowledge of disease classifications, cardiac and vascular terminology, endpoints, diagnostic measurements, biomarkers, clinical outcome assessments, safety terminology, and study conventions." },
  { q: "What cardiovascular documents does Sesen translate?", a: "Sesen translates cardiovascular clinical trial protocols, amendments, investigator's brochures, informed consent forms, CRFs and eCRFs, patient materials, COAs and eCOAs, PROs and ePROs, questionnaires, clinical study reports, patient narratives, safety documentation, CTD/eCTD content, regulatory submissions, health authority responses, product information, Medical Affairs materials, publications, congress content, HEOR/RWE materials, and other scientific and clinical documentation." },
  { q: "What cardiovascular disease areas does Sesen support?", a: "Sesen supports multilingual content across major cardiovascular areas including heart failure, HFrEF, HFpEF, cardiomyopathies, coronary artery disease, acute coronary syndromes, myocardial infarction, arrhythmias, atrial fibrillation, hypertension, pulmonary hypertension, structural and valvular heart disease, peripheral arterial disease, dyslipidemia, atherosclerotic cardiovascular disease, thrombosis, cardiovascular risk reduction, and related cardiometabolic and cardiorenal programs." },
  { q: "Does Sesen support cardiovascular COA and eCOA linguistic validation?", a: "Yes. Sesen supports translation and linguistic validation for cardiovascular COAs, eCOAs, PROs, ePROs, questionnaires, symptom scales, patient diaries, and related clinical instruments. Depending on instrument and study requirements, workflows can include concept review, forward translation, independent review, reconciliation, back translation, cross-language harmonization, cognitive debriefing, and finalization." },
  { q: "How does Sesen maintain cardiovascular terminology consistency?", a: "Sesen uses program-specific glossaries, translation memories, terminology databases, approved client references, prior study content, style guidance, reviewer decisions, and automated QA to maintain cardiovascular terminology across related documents and versions. This is especially valuable when disease terminology, endpoint language, study definitions, abbreviations, safety concepts, or product terms recur across multiple content types." },
  { q: "Does this service include cardiovascular medical devices?", a: "This page primarily focuses on cardiovascular therapeutics, clinical development, scientific content, regulatory programs, safety, Medical Affairs, outcome assessments, and patient communication. Sesen provides a separate Cardiovascular Device Translation Services solution for pacemakers, ICDs, stents, heart valves, ablation systems, cardiac monitors, electrophysiology technologies, connected devices, IFUs, labeling, technical documentation, software, eLabeling, and related medical-device content." },
  { q: "Can Sesen support global cardiovascular clinical trials?", a: "Yes. Sesen supports cardiovascular clinical trials across 150+ languages, including protocols, informed consent, patient materials, site documentation, investigator materials, COAs/eCOAs, safety content, amendments, clinical reports, and digital study experiences. Centralized terminology, translation memory, version management, professional review, and multilingual project coordination help maintain consistency as studies expand." },
  { q: "How does Sesen use AI for cardiovascular translation?", a: "Sesen uses AI-enabled language technology to support translation, terminology application, translation-memory reuse, content analysis, quality checks, and multilingual workflow efficiency. Qualified professional linguists and reviewers remain responsible for interpreting scientific and clinical meaning, evaluating terminology in context, ensuring patient-appropriate communication, and making final quality decisions for regulated cardiovascular content." },
];

const styles = `
.sesen-page-cardio {
  --cardio-blue: #4B6FD8;
  --cardio-blue-dark: #3659BB;
  --cardio-deep: #253F8F;
  --cardio-navy: #17264D;
  --cardio-ink: #111827;
  --cardio-body: #46546D;
  --cardio-muted: #68758B;
  --cardio-border: #DDE4F2;
  --cardio-divider: #E9EEF8;
  --cardio-pale: #F5F7FF;
  --cardio-soft: #EAF0FF;
  --cardio-neutral: #F7F9FD;
  --cardio-white: #FFFFFF;
  color: var(--cardio-body);
  background: var(--cardio-white);
  font-family: Inter, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.68;
  overflow-x: clip;
}
.sesen-page-cardio *, .sesen-page-cardio *::before, .sesen-page-cardio *::after { box-sizing: border-box; }
.sesen-page-cardio a { color: inherit; }
.sesen-page-cardio .sesen-cardio__shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; min-width: 0; }
.sesen-page-cardio .sesen-cardio__section { padding: 96px 0; }
.sesen-page-cardio .sesen-cardio__section--dense { padding: 80px 0; }
.sesen-page-cardio .sesen-cardio__section--pale { background: var(--cardio-pale); }
.sesen-page-cardio .sesen-cardio__section--neutral { background: var(--cardio-neutral); }
.sesen-page-cardio .sesen-cardio__section--deep { background: var(--cardio-deep); color: #fff; }
.sesen-page-cardio .sesen-cardio__eyebrow { margin: 0 0 14px; font-family: Inter, Arial, sans-serif; font-size: 11px !important; font-weight: 700 !important; line-height: 1.35 !important; letter-spacing: .15em !important; text-transform: uppercase !important; color: var(--cardio-blue-dark) !important; }
.sesen-page-cardio .sesen-cardio__section--deep .sesen-cardio__eyebrow { color: #C8D6FF !important; }
.sesen-page-cardio .sesen-cardio__h1, .sesen-page-cardio .sesen-cardio__h2, .sesen-page-cardio .sesen-cardio__h3 { font-family: "Inter Tight", Inter, Arial, sans-serif; font-style: normal; font-weight: 500; color: var(--cardio-navy); margin: 0; }
.sesen-page-cardio .sesen-cardio__h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
.sesen-page-cardio .sesen-cardio__h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; }
.sesen-page-cardio .sesen-cardio__h3 { font-size: 23px; line-height: 1.3; }
.sesen-page-cardio .sesen-cardio__section--deep .sesen-cardio__h2, .sesen-page-cardio .sesen-cardio__section--deep .sesen-cardio__h3 { color: #fff; }
.sesen-page-cardio .sesen-cardio__lead { font-size: 19px; line-height: 1.65; color: #293954; margin: 24px 0 0; max-width: 720px; }
.sesen-page-cardio .sesen-cardio__section-intro { max-width: 820px; font-size: 18px; line-height: 1.68; color: var(--cardio-body); margin: 20px 0 0; }
.sesen-page-cardio .sesen-cardio__section--deep .sesen-cardio__section-intro { color: #E8EDFA; }
.sesen-page-cardio .sesen-cardio__copy { font-size: 17px; color: var(--cardio-body); margin: 0; }
.sesen-page-cardio .sesen-cardio__muted { color: var(--cardio-muted); }
.sesen-page-cardio .sesen-cardio__breadcrumb { padding: 18px 0 0; font-size: 14px; color: var(--cardio-muted); }
.sesen-page-cardio .sesen-cardio__breadcrumb a { color: var(--cardio-blue-dark); text-decoration: none; font-weight: 600; }
.sesen-page-cardio .sesen-cardio__breadcrumb a:hover { text-decoration: underline; }
.sesen-page-cardio .sesen-cardio__hero { padding: 84px 0 88px; background: #fff; }
.sesen-page-cardio .sesen-cardio__hero-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(390px, .95fr); gap: 70px; align-items: center; }
.sesen-page-cardio .sesen-cardio__hero-copy { min-width: 0; max-width: 710px; }
.sesen-page-cardio .sesen-cardio__hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
.sesen-page-cardio .sesen-cardio__btn { min-height: 50px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 999px; padding: 0 26px; font-size: 13px; font-weight: 700; letter-spacing: .035em; text-transform: uppercase; text-decoration: none; transition: background-color .2s ease, border-color .2s ease, transform .2s ease; }
.sesen-page-cardio .sesen-cardio__btn:focus-visible, .sesen-page-cardio .sesen-cardio__editorial-link:focus-visible, .sesen-page-cardio .sesen-cardio__faq-button:focus-visible { outline: 3px solid rgba(75,111,216,.32); outline-offset: 3px; }
.sesen-page-cardio .sesen-cardio__btn--primary { background: var(--cardio-blue); color: #fff; border: 1px solid var(--cardio-blue); }
.sesen-page-cardio .sesen-cardio__btn--primary:hover { background: var(--cardio-blue-dark); border-color: var(--cardio-blue-dark); transform: translateY(-1px); }
.sesen-page-cardio .sesen-cardio__btn--secondary { background: #fff; color: var(--cardio-ink); border: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__btn--secondary:hover { background: var(--cardio-pale); border-color: #BFCBED; transform: translateY(-1px); }
.sesen-page-cardio .sesen-cardio__hero-visual { min-width: 0; display: flex; align-items: center; justify-content: center; }
.sesen-page-cardio .sesen-cardio__hero-art { width: min(100%, 540px); height: auto; display: block; }
.sesen-page-cardio .sesen-cardio__trust { border-top: 1px solid var(--cardio-border); border-bottom: 1px solid var(--cardio-border); background: #fff; }
.sesen-page-cardio .sesen-cardio__trust-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
.sesen-page-cardio .sesen-cardio__trust-item { padding: 26px 22px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__trust-item + .sesen-cardio__trust-item { border-left: 1px solid var(--cardio-divider); }
.sesen-page-cardio .sesen-cardio__trust-kicker { display: block; font-family: "Inter Tight", Inter, sans-serif; font-size: 22px; line-height: 1.2; font-weight: 500; color: var(--cardio-navy); margin-bottom: 5px; }
.sesen-page-cardio .sesen-cardio__trust-text { display: block; font-size: 14px; line-height: 1.45; color: var(--cardio-muted); }
.sesen-page-cardio .sesen-cardio__split { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 86px; align-items: start; }
.sesen-page-cardio .sesen-cardio__value-stack { border-top: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__value-row { display: grid; grid-template-columns: 52px minmax(0, 1fr); gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--cardio-divider); }
.sesen-page-cardio .sesen-cardio__icon-box { width: 46px; height: 46px; border-radius: 12px; background: var(--cardio-soft); color: var(--cardio-blue-dark); display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }
.sesen-page-cardio .sesen-cardio__value-row h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 21px; line-height: 1.3; font-weight: 500; color: var(--cardio-navy); margin: 0 0 6px; }
.sesen-page-cardio .sesen-cardio__value-row p { font-size: 17px; color: var(--cardio-body); margin: 0; }
.sesen-page-cardio .sesen-cardio__heading-row { display: flex; align-items: end; justify-content: space-between; gap: 48px; margin-bottom: 48px; }
.sesen-page-cardio .sesen-cardio__heading-row .sesen-cardio__section-intro { margin-top: 0; max-width: 650px; }
.sesen-page-cardio .sesen-cardio__disease-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--cardio-border); border-left: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__disease { padding: 30px; border-right: 1px solid var(--cardio-border); border-bottom: 1px solid var(--cardio-border); background: #fff; min-width: 0; }
.sesen-page-cardio .sesen-cardio__disease .sesen-cardio__icon-box { margin-bottom: 22px; }
.sesen-page-cardio .sesen-cardio__disease p { font-size: 17px; margin: 12px 0 18px; color: var(--cardio-body); }
.sesen-page-cardio .sesen-cardio__tagline { font-size: 14px !important; line-height: 1.55; color: var(--cardio-muted) !important; }
.sesen-page-cardio .sesen-cardio__timeline { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0; margin-top: 50px; position: relative; }
.sesen-page-cardio .sesen-cardio__timeline::before { content: ""; position: absolute; left: 8%; right: 8%; top: 22px; height: 2px; background: #BFCBED; }
.sesen-page-cardio .sesen-cardio__stage { position: relative; padding: 0 20px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__stage:first-child { padding-left: 0; }
.sesen-page-cardio .sesen-cardio__stage:last-child { padding-right: 0; }
.sesen-page-cardio .sesen-cardio__stage-num { position: relative; z-index: 1; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #fff; border: 2px solid var(--cardio-blue); color: var(--cardio-blue-dark); font-size: 13px; font-weight: 700; margin-bottom: 24px; }
.sesen-page-cardio .sesen-cardio__stage h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; line-height: 1.3; color: var(--cardio-navy); margin: 0 0 12px; }
.sesen-page-cardio .sesen-cardio__stage p { font-size: 17px; color: var(--cardio-body); margin: 0 0 15px; }
.sesen-page-cardio .sesen-cardio__mini-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; }
.sesen-page-cardio .sesen-cardio__mini-list li { position: relative; padding-left: 15px; font-size: 17px; line-height: 1.5; color: var(--cardio-muted); }
.sesen-page-cardio .sesen-cardio__mini-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 5px; height: 5px; border-radius: 50%; background: var(--cardio-blue); }
.sesen-page-cardio .sesen-cardio__quad { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 22px; margin-top: 44px; }
.sesen-page-cardio .sesen-cardio__panel { background: #fff; border: 1px solid var(--cardio-border); border-radius: 22px; padding: 28px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__panel .sesen-cardio__icon-box { margin-bottom: 20px; }
.sesen-page-cardio .sesen-cardio__panel .sesen-cardio__h3 { margin-bottom: 16px; }
.sesen-page-cardio .sesen-cardio__bullet-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.sesen-page-cardio .sesen-cardio__bullet-list li { display: flex; gap: 10px; align-items: flex-start; font-size: 17px; color: var(--cardio-body); min-width: 0; }
.sesen-page-cardio .sesen-cardio__bullet-list li svg { color: var(--cardio-blue-dark); margin-top: 5px; flex: 0 0 auto; }
.sesen-page-cardio .sesen-cardio__editorial-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 26px; color: var(--cardio-blue-dark); text-decoration: none; font-size: 16px; font-weight: 700; }
.sesen-page-cardio .sesen-cardio__editorial-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.sesen-page-cardio .sesen-cardio__editorial-link, .sesen-page-cardio .sesen-cardio__related-row h3, .sesen-page-cardio .sesen-cardio__faq-button span:first-child { overflow-wrap: anywhere; }
.sesen-page-cardio .sesen-cardio__endpoint-layout { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; margin-top: 44px; }
.sesen-page-cardio .sesen-cardio__endpoint { background: #fff; border-top: 3px solid var(--cardio-blue); padding: 30px; box-shadow: inset 0 0 0 1px var(--cardio-border); min-width: 0; }
.sesen-page-cardio .sesen-cardio__endpoint .sesen-cardio__icon-box { margin-bottom: 20px; }
.sesen-page-cardio .sesen-cardio__coa { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .78fr); gap: 72px; align-items: start; }
.sesen-page-cardio .sesen-cardio__concepts { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; margin-top: 28px; }
.sesen-page-cardio .sesen-cardio__concept { border: 1px solid var(--cardio-border); background: #fff; border-radius: 14px; padding: 14px 16px; font-size: 17px; font-weight: 600; color: var(--cardio-navy); }
.sesen-page-cardio .sesen-cardio__process { background: #fff; border: 1px solid var(--cardio-border); border-radius: 28px; padding: 32px; }
.sesen-page-cardio .sesen-cardio__process h3 { margin-bottom: 20px; }
.sesen-page-cardio .sesen-cardio__process-steps { display: grid; gap: 0; }
.sesen-page-cardio .sesen-cardio__process-step { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--cardio-divider); font-size: 17px; color: var(--cardio-body); }
.sesen-page-cardio .sesen-cardio__process-step:last-child { border-bottom: 0; }
.sesen-page-cardio .sesen-cardio__process-step span:first-child { color: var(--cardio-blue-dark); font-weight: 700; }
.sesen-page-cardio .sesen-cardio__two-col { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 46px; }
.sesen-page-cardio .sesen-cardio__content-block { padding-top: 8px; }
.sesen-page-cardio .sesen-cardio__content-block + .sesen-cardio__content-block { border-left: 1px solid var(--cardio-border); padding-left: 46px; }
.sesen-page-cardio .sesen-cardio__content-block .sesen-cardio__h3 { margin-bottom: 16px; }
.sesen-page-cardio .sesen-cardio__term-map { margin-top: 48px; display: grid; grid-template-columns: minmax(260px,.75fr) minmax(0,1.25fr); gap: 48px; align-items: stretch; }
.sesen-page-cardio .sesen-cardio__term-core { border: 1px solid rgba(255,255,255,.23); border-radius: 28px; padding: 34px; background: rgba(255,255,255,.06); display: flex; flex-direction: column; justify-content: center; }
.sesen-page-cardio .sesen-cardio__term-core .sesen-cardio__icon-box { background: rgba(255,255,255,.12); color: #fff; }
.sesen-page-cardio .sesen-cardio__term-core p { color: #E8EDFA; font-size: 17px; margin: 18px 0 0; }
.sesen-page-cardio .sesen-cardio__term-docs { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
.sesen-page-cardio .sesen-cardio__term-doc { border: 1px solid rgba(255,255,255,.18); border-radius: 16px; padding: 18px 20px; background: rgba(255,255,255,.07); color: #fff; font-size: 16px; font-weight: 600; }
.sesen-page-cardio .sesen-cardio__term-families { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.sesen-page-cardio .sesen-cardio__term-chip { border-radius: 999px; padding: 9px 13px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.15); color: #E8EDFA; font-size: 14px; line-height: 1.35; }
.sesen-page-cardio .sesen-cardio__patient-layout { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 82px; align-items: center; }
.sesen-page-cardio .sesen-cardio__patient-visual { border-radius: 28px; background: var(--cardio-pale); border: 1px solid var(--cardio-border); padding: 38px; }
.sesen-page-cardio .sesen-cardio__patient-path { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 12px; }
.sesen-page-cardio .sesen-cardio__patient-node { background: #fff; border: 1px solid var(--cardio-border); border-radius: 18px; padding: 18px 12px; text-align: center; color: var(--cardio-navy); font-size: 15px; font-weight: 700; min-width: 0; }
.sesen-page-cardio .sesen-cardio__patient-arrow { color: var(--cardio-blue); }
.sesen-page-cardio .sesen-cardio__ecosystem { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; margin-top: 42px; }
.sesen-page-cardio .sesen-cardio__ecosystem-panel { border-radius: 26px; padding: 34px; border: 1px solid var(--cardio-border); background: #fff; }
.sesen-page-cardio .sesen-cardio__ecosystem-panel--device { background: var(--cardio-pale); }
.sesen-page-cardio .sesen-cardio__ecosystem-panel .sesen-cardio__h3 { margin: 20px 0 16px; }
.sesen-page-cardio .sesen-cardio__intersection-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 18px; margin-top: 42px; }
.sesen-page-cardio .sesen-cardio__intersection { border-top: 1px solid var(--cardio-border); padding-top: 24px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__intersection .sesen-cardio__icon-box { margin-bottom: 18px; }
.sesen-page-cardio .sesen-cardio__intersection p { font-size: 17px; margin: 12px 0 0; }
.sesen-page-cardio .sesen-cardio__workflow { margin-top: 46px; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; }
.sesen-page-cardio .sesen-cardio__workflow-step { background: #fff; border: 1px solid var(--cardio-border); border-radius: 20px; padding: 26px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__workflow-step .sesen-cardio__stage-num { width: 38px; height: 38px; margin-bottom: 18px; }
.sesen-page-cardio .sesen-cardio__workflow-step h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; color: var(--cardio-navy); margin: 0 0 10px; }
.sesen-page-cardio .sesen-cardio__workflow-step p { font-size: 17px; color: var(--cardio-body); margin: 0; }
.sesen-page-cardio .sesen-cardio__global-band { margin-top: 46px; display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); border-top: 1px solid var(--cardio-border); border-bottom: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__global-item { padding: 24px 20px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__global-item + .sesen-cardio__global-item { border-left: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__global-item h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; font-weight: 500; color: var(--cardio-navy); margin: 0 0 8px; }
.sesen-page-cardio .sesen-cardio__global-item p { font-size: 17px; color: var(--cardio-body); margin: 0; }
.sesen-page-cardio .sesen-cardio__reasons { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 26px 30px; margin-top: 44px; }
.sesen-page-cardio .sesen-cardio__reason { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 16px; min-width: 0; }
.sesen-page-cardio .sesen-cardio__reason h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; color: var(--cardio-navy); margin: 0 0 7px; }
.sesen-page-cardio .sesen-cardio__reason p { font-size: 17px; color: var(--cardio-body); margin: 0; }
.sesen-page-cardio .sesen-cardio__related-list { margin-top: 44px; border-top: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__related-row { display: grid; grid-template-columns: 56px minmax(0,1fr) auto; gap: 20px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--cardio-divider); min-width: 0; }
.sesen-page-cardio .sesen-cardio__related-row h3 { font-family: "Inter Tight", Inter, sans-serif; font-size: 21px; font-weight: 500; color: var(--cardio-navy); margin: 0 0 4px; }
.sesen-page-cardio .sesen-cardio__related-row p { font-size: 17px; color: var(--cardio-body); margin: 0; max-width: 800px; }
.sesen-page-cardio .sesen-cardio__faq { max-width: 960px; }
.sesen-page-cardio .sesen-cardio__faq-list { margin-top: 38px; border-top: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__faq-item { border-bottom: 1px solid var(--cardio-border); }
.sesen-page-cardio .sesen-cardio__faq-button { width: 100%; min-height: 68px; display: grid; grid-template-columns: minmax(0,1fr) 34px; gap: 18px; align-items: center; text-align: left; background: transparent; border: 0; padding: 18px 0; cursor: pointer; color: var(--cardio-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; line-height: 1.35; font-weight: 500; }
.sesen-page-cardio .sesen-cardio__faq-plus { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--cardio-border); display: flex; align-items: center; justify-content: center; color: var(--cardio-blue-dark); font-family: Inter, sans-serif; font-size: 22px; font-weight: 400; transition: transform .2s ease; }
.sesen-page-cardio .sesen-cardio__faq-plus--open { transform: rotate(45deg); }
.sesen-page-cardio .sesen-cardio__faq-answer { padding: 0 54px 22px 0; font-size: 17px; color: var(--cardio-body); }
.sesen-page-cardio .sesen-cardio__final { padding: 88px 0; background: var(--cardio-deep); color: #fff; }
.sesen-page-cardio .sesen-cardio__final-grid { display: grid; grid-template-columns: minmax(0,1.2fr) auto; gap: 60px; align-items: center; }
.sesen-page-cardio .sesen-cardio__final .sesen-cardio__h2 { color: #fff; max-width: 760px; }
.sesen-page-cardio .sesen-cardio__final p { color: #E8EDFA; font-size: 18px; max-width: 780px; margin: 20px 0 0; }
.sesen-page-cardio .sesen-cardio__final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 230px; }
.sesen-page-cardio .sesen-cardio__final .sesen-cardio__btn--primary { background: #fff; color: var(--cardio-ink); border-color: #fff; }
.sesen-page-cardio .sesen-cardio__final .sesen-cardio__btn--primary:hover { background: var(--cardio-pale); border-color: var(--cardio-pale); }
.sesen-page-cardio .sesen-cardio__final .sesen-cardio__btn--secondary { background: var(--cardio-soft); color: var(--cardio-ink); border-color: var(--cardio-soft); }
.sesen-page-cardio .sesen-cardio__final .sesen-cardio__btn--secondary:hover { background: var(--cardio-pale); border-color: var(--cardio-pale); }
@media (max-width: 1120px) {
  .sesen-page-cardio .sesen-cardio__shell { width: min(1280px, calc(100% - 80px)); }
  .sesen-page-cardio .sesen-cardio__hero-grid { grid-template-columns: minmax(0,1fr) minmax(340px,.78fr); gap: 44px; }
  .sesen-page-cardio .sesen-cardio__trust-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__trust-item + .sesen-cardio__trust-item { border-left: 0; }
  .sesen-page-cardio .sesen-cardio__trust-item:nth-child(2), .sesen-page-cardio .sesen-cardio__trust-item:nth-child(3), .sesen-page-cardio .sesen-cardio__trust-item:nth-child(5) { border-left: 1px solid var(--cardio-divider); }
  .sesen-page-cardio .sesen-cardio__trust-item:nth-child(n+4) { border-top: 1px solid var(--cardio-divider); }
  .sesen-page-cardio .sesen-cardio__timeline { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 34px 0; }
  .sesen-page-cardio .sesen-cardio__timeline::before { display: none; }
  .sesen-page-cardio .sesen-cardio__stage { padding: 0 22px 0 0; }
  .sesen-page-cardio .sesen-cardio__quad { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__intersection-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__global-band { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__global-item + .sesen-cardio__global-item { border-left: 0; }
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(2), .sesen-page-cardio .sesen-cardio__global-item:nth-child(3), .sesen-page-cardio .sesen-cardio__global-item:nth-child(5) { border-left: 1px solid var(--cardio-border); }
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(n+4) { border-top: 1px solid var(--cardio-border); }
}
@media (max-width: 900px) {
  .sesen-page-cardio .sesen-cardio__shell { width: min(1280px, calc(100% - 56px)); }
  .sesen-page-cardio .sesen-cardio__section { padding: 78px 0; }
  .sesen-page-cardio .sesen-cardio__section--dense { padding: 70px 0; }
  .sesen-page-cardio .sesen-cardio__hero { padding: 72px 0 76px; }
  .sesen-page-cardio .sesen-cardio__hero-grid { grid-template-columns: 1fr; gap: 42px; }
  .sesen-page-cardio .sesen-cardio__hero-copy { max-width: 760px; }
  .sesen-page-cardio .sesen-cardio__hero .sesen-cardio__h1, .sesen-page-cardio .sesen-cardio__hero .sesen-cardio__eyebrow { text-align: center; }
  .sesen-page-cardio .sesen-cardio__hero-visual { justify-content: center; }
  .sesen-page-cardio .sesen-cardio__hero-art { width: min(100%, 500px); }
  .sesen-page-cardio .sesen-cardio__split, .sesen-page-cardio .sesen-cardio__coa, .sesen-page-cardio .sesen-cardio__patient-layout { grid-template-columns: 1fr; gap: 48px; }
  .sesen-page-cardio .sesen-cardio__heading-row { align-items: start; flex-direction: column; gap: 18px; }
  .sesen-page-cardio .sesen-cardio__disease-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__timeline { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 36px 26px; }
  .sesen-page-cardio .sesen-cardio__stage { padding: 0; }
  .sesen-page-cardio .sesen-cardio__endpoint-layout { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__two-col { grid-template-columns: 1fr; gap: 0; }
  .sesen-page-cardio .sesen-cardio__content-block + .sesen-cardio__content-block { border-left: 0; border-top: 1px solid var(--cardio-border); padding-left: 0; padding-top: 38px; margin-top: 38px; }
  .sesen-page-cardio .sesen-cardio__patient-layout > div:nth-child(2) { order: -1; }
  .sesen-page-cardio .sesen-cardio__term-map { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__workflow { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__global-band { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__global-item,
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(2),
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(3),
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(5) { border-left: 0; border-top: 0; }
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(even) { border-left: 1px solid var(--cardio-border); }
  .sesen-page-cardio .sesen-cardio__global-item:nth-child(n+3) { border-top: 1px solid var(--cardio-border); }
  .sesen-page-cardio .sesen-cardio__reasons { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-page-cardio .sesen-cardio__related-row { grid-template-columns: 56px minmax(0,1fr); align-items: start; }
  .sesen-page-cardio .sesen-cardio__related-row .sesen-cardio__editorial-link { grid-column: 2; margin-top: 6px; }
  .sesen-page-cardio .sesen-cardio__final-grid { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__final-actions { flex-direction: row; min-width: 0; flex-wrap: wrap; }
}
@media (max-width: 640px) {
  .sesen-page-cardio .sesen-cardio__shell { width: calc(100% - 40px); }
  .sesen-page-cardio .sesen-cardio__section { padding: 68px 0; }
  .sesen-page-cardio .sesen-cardio__section--dense { padding: 64px 0; }
  .sesen-page-cardio .sesen-cardio__breadcrumb { padding-top: 14px; }
  .sesen-page-cardio .sesen-cardio__hero { padding: 60px 0 66px; }
  .sesen-page-cardio .sesen-cardio__h1 { font-size: 42px; text-align: center; }
  .sesen-page-cardio .sesen-cardio__h2 { font-size: 32px; }
  .sesen-page-cardio .sesen-cardio__hero .sesen-cardio__eyebrow { text-align: center; }
  .sesen-page-cardio .sesen-cardio__hero-actions { flex-direction: column; }
  .sesen-page-cardio .sesen-cardio__hero-actions .sesen-cardio__btn { width: 100%; }
  .sesen-page-cardio .sesen-cardio__trust-grid { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__trust-item, .sesen-page-cardio .sesen-cardio__trust-item:nth-child(2), .sesen-page-cardio .sesen-cardio__trust-item:nth-child(3), .sesen-page-cardio .sesen-cardio__trust-item:nth-child(5) { border-left: 0; }
  .sesen-page-cardio .sesen-cardio__trust-item + .sesen-cardio__trust-item { border-top: 1px solid var(--cardio-divider); }
  .sesen-page-cardio .sesen-cardio__heading-row { margin-bottom: 34px; }
  .sesen-page-cardio .sesen-cardio__heading-group--center-mobile { text-align: center; }
  .sesen-page-cardio .sesen-cardio__heading-group--center-mobile .sesen-cardio__section-intro { text-align: left; }
  .sesen-page-cardio .sesen-cardio__disease-grid { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__disease { padding: 26px; }
  .sesen-page-cardio .sesen-cardio__timeline { grid-template-columns: 1fr; gap: 28px; }
  .sesen-page-cardio .sesen-cardio__stage { padding: 0; display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 16px; }
  .sesen-page-cardio .sesen-cardio__stage-num { margin-bottom: 0; }
  .sesen-page-cardio .sesen-cardio__stage-body { min-width: 0; }
  .sesen-page-cardio .sesen-cardio__quad { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__panel { padding: 24px; }
  .sesen-page-cardio .sesen-cardio__concepts { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__two-col { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__content-block + .sesen-cardio__content-block { border-left: 0; border-top: 1px solid var(--cardio-border); padding-left: 0; padding-top: 32px; }
  .sesen-page-cardio .sesen-cardio__term-docs { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__patient-visual { padding: 28px; }
  .sesen-page-cardio .sesen-cardio__patient-path { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__patient-arrow { transform: rotate(90deg); justify-self: center; }
  .sesen-page-cardio .sesen-cardio__ecosystem { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__intersection-grid { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__workflow { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__global-band { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__global-item, .sesen-page-cardio .sesen-cardio__global-item:nth-child(2), .sesen-page-cardio .sesen-cardio__global-item:nth-child(3), .sesen-page-cardio .sesen-cardio__global-item:nth-child(5) { border-left: 0; }
  .sesen-page-cardio .sesen-cardio__global-item + .sesen-cardio__global-item { border-top: 1px solid var(--cardio-border); }
  .sesen-page-cardio .sesen-cardio__reasons { grid-template-columns: 1fr; }
  .sesen-page-cardio .sesen-cardio__related-row { grid-template-columns: 46px minmax(0,1fr); align-items: start; }
  .sesen-page-cardio .sesen-cardio__related-row .sesen-cardio__editorial-link { grid-column: 2; margin-top: 8px; }
  .sesen-page-cardio .sesen-cardio__faq-answer { padding-right: 0; }
  .sesen-page-cardio .sesen-cardio__final { padding: 72px 0; }
  .sesen-page-cardio .sesen-cardio__final-actions { flex-direction: column; }
  .sesen-page-cardio .sesen-cardio__final-actions .sesen-cardio__btn { width: 100%; }
}
@media (max-width: 360px) {
  .sesen-page-cardio .sesen-cardio__h1 { font-size: 38px; }
  .sesen-page-cardio .sesen-cardio__h2 { font-size: 30px; }
  .sesen-page-cardio .sesen-cardio__panel, .sesen-page-cardio .sesen-cardio__ecosystem-panel, .sesen-page-cardio .sesen-cardio__process { padding: 22px; }
}
@media (prefers-reduced-motion: reduce) {
  .sesen-page-cardio .sesen-cardio__btn, .sesen-page-cardio .sesen-cardio__faq-plus { transition: none; }
}
`;

export default function SesenCardiovascularTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-page-cardio">
      <style>{styles}</style>

      <div className="sesen-cardio__shell sesen-cardio__breadcrumb" aria-label="Breadcrumb">
        <a href="https://www.sesen.com/medical-scientific-translation-services/">Medical &amp; Scientific Translation</a>
        <span aria-hidden="true"> &nbsp;/&nbsp; </span>
        <span>Cardiovascular Translation Services</span>
      </div>

      <section className="sesen-cardio__hero">
        <div className="sesen-cardio__shell sesen-cardio__hero-grid">
          <div className="sesen-cardio__hero-copy">
            <p className="sesen-cardio__eyebrow">Cardiovascular Expertise</p>
            <h1 className="sesen-cardio__h1">Cardiovascular Translation Services</h1>
            <p className="sesen-cardio__lead">Specialized multilingual support for cardiovascular research, clinical development, regulatory submissions, safety, Medical Affairs, clinical outcome assessments, and patient communication.</p>
            <p className="sesen-cardio__copy" style={{ marginTop: 18 }}>Sesen helps pharmaceutical and biotechnology companies, CROs, research organizations, and other life sciences teams maintain scientific meaning and terminology consistency across languages, documents, and markets.</p>
            <div className="sesen-cardio__hero-actions">
              <a className="sesen-cardio__btn sesen-cardio__btn--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Arrow /></a>
              <a className="sesen-cardio__btn sesen-cardio__btn--secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <Arrow /></a>
            </div>
          </div>
          <div className="sesen-cardio__hero-visual"><HeroArt /></div>
        </div>
      </section>

      <section className="sesen-cardio__trust" aria-label="Cardiovascular translation capabilities">
        <div className="sesen-cardio__shell sesen-cardio__trust-grid">
          <div className="sesen-cardio__trust-item"><span className="sesen-cardio__trust-kicker">150+ Languages</span><span className="sesen-cardio__trust-text">Global and regional cardiovascular programs</span></div>
          <div className="sesen-cardio__trust-item"><span className="sesen-cardio__trust-kicker">ISO-Certified</span><span className="sesen-cardio__trust-text">ISO 17100 · ISO 9001:2015 · ISO 13485</span></div>
          <div className="sesen-cardio__trust-item"><span className="sesen-cardio__trust-kicker">Life Sciences</span><span className="sesen-cardio__trust-text">Professional medical and scientific linguists</span></div>
          <div className="sesen-cardio__trust-item"><span className="sesen-cardio__trust-kicker">Human-Led</span><span className="sesen-cardio__trust-text">Expert review supported by language technology</span></div>
          <div className="sesen-cardio__trust-item"><span className="sesen-cardio__trust-kicker">Terminology</span><span className="sesen-cardio__trust-text">Governance across documents and versions</span></div>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell sesen-cardio__split">
          <div className="sesen-cardio__heading-group--center-mobile">
            <p className="sesen-cardio__eyebrow">Connected Clinical Content</p>
            <h2 className="sesen-cardio__h2">Translate Cardiovascular Science With Clinical Precision</h2>
            <p className="sesen-cardio__section-intro">A disease definition established in a protocol may reappear in eligibility criteria, endpoint definitions, outcome assessments, patient materials, safety documentation, clinical study reports, regulatory submissions, publications, and approved product information.</p>
            <p className="sesen-cardio__copy" style={{ marginTop: 18 }}>Sesen helps cardiovascular teams manage this connected multilingual content as a program rather than a collection of isolated files.</p>
          </div>
          <div className="sesen-cardio__value-stack">
            {[
              ["Scientific Meaning", "Preserve disease classifications, diagnostic terminology, treatment concepts, study-specific definitions, and cardiovascular scientific relationships."],
              ["Clinical Consistency", "Align endpoints, eligibility criteria, assessments, procedures, safety language, and recurring clinical terminology across study content."],
              ["Patient Clarity", "Communicate symptoms, participation requirements, treatment information, risks, and assessments in language appropriate for patients and caregivers."],
              ["Global Continuity", "Carry approved terminology and translation decisions forward across languages, countries, documents, amendments, and lifecycle updates."],
            ].map(([title, text], i) => (
              <div className="sesen-cardio__value-row" key={title}>
                <span className="sesen-cardio__icon-box"><Icon name={["terms","trial","person","globe"][i]} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--neutral">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-row">
            <div className="sesen-cardio__heading-group--center-mobile">
                <h2 className="sesen-cardio__h2">Cardiovascular Expertise Across Major Disease Areas</h2>
            </div>
            <p className="sesen-cardio__section-intro">Sesen supports multilingual programs across major cardiovascular disease areas, selecting linguistic resources according to the indication, content type, audience, and regulatory use.</p>
          </div>
          <div className="sesen-cardio__disease-grid">
            {diseaseAreas.map((d) => (
              <article className="sesen-cardio__disease" key={d.title}>
                <span className="sesen-cardio__icon-box"><Icon name={d.icon} /></span>
                <h3 className="sesen-cardio__h3">{d.title}</h3>
                <p>{d.text}</p>
                <p className="sesen-cardio__tagline">{d.tags}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell">
          <div>
            <p className="sesen-cardio__eyebrow">End-to-End Program Support</p>
            <h2 className="sesen-cardio__h2">Multilingual Support Across the Cardiovascular Development Lifecycle</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular programs generate connected content from early research through approval, launch, post-market monitoring, and ongoing scientific communication. Sesen helps maintain language continuity across that lifecycle.</p>
          </div>
          <div className="sesen-cardio__timeline">
            {lifecycle.map((s) => (
              <div className="sesen-cardio__stage" key={s.n}>
                <div className="sesen-cardio__stage-num">{s.n}</div>
                <div className="sesen-cardio__stage-body">
                  <h3>{s.title}</h3><p>{s.text}</p>
                  <ul className="sesen-cardio__mini-list">{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--pale">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-group--center-mobile">
            <h2 className="sesen-cardio__h2">Cardiovascular Clinical Trial Translation From Protocol to Final Study Report</h2>
            <p className="sesen-cardio__section-intro">Eligibility criteria, symptoms, event definitions, diagnostic thresholds, functional assessments, hospitalization criteria, physiological measurements, safety findings, and endpoints may recur throughout a study. Sesen helps keep those concepts aligned across multilingual trial content.</p>
          </div>
          <div className="sesen-cardio__quad">
            {clinicalColumns.map((c) => (
              <article className="sesen-cardio__panel" key={c.title}>
                <span className="sesen-cardio__icon-box"><Icon name={c.icon} /></span>
                <h3 className="sesen-cardio__h3">{c.title}</h3>
                <ul className="sesen-cardio__bullet-list">{c.items.map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}</ul>
              </article>
            ))}
          </div>
          <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/clinical-trial-translation-services/">Clinical Trial Translation Services <Arrow /></a>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell">
          <div>
            <p className="sesen-cardio__eyebrow">Endpoint Precision</p>
            <h2 className="sesen-cardio__h2">Preserve the Meaning Behind Cardiovascular Endpoints</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular development can involve clinical events, physiological measurements, functional outcomes, symptoms, patient-reported outcomes, and composite endpoints. Translation must preserve the distinctions among related concepts in every language.</p>
          </div>
          <div className="sesen-cardio__endpoint-layout">
            {endpointGroups.map((g) => (
              <article className="sesen-cardio__endpoint" key={g.title}>
                <span className="sesen-cardio__icon-box"><Icon name={g.icon} /></span>
                <h3 className="sesen-cardio__h3">{g.title}</h3>
                <ul className="sesen-cardio__bullet-list" style={{ marginTop: 18 }}>{g.items.map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}</ul>
              </article>
            ))}
          </div>
          <p className="sesen-cardio__copy" style={{ marginTop: 28, maxWidth: 860 }}>Sesen uses study references, terminology controls, translation memory, expert review, and cross-document QA to help keep endpoint language consistent across protocols, assessments, reports, submissions, and patient-facing materials.</p>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--neutral">
        <div className="sesen-cardio__shell sesen-cardio__coa">
          <div>
            <h2 className="sesen-cardio__h2">Cardiovascular COA &amp; eCOA Linguistic Validation</h2>
            <p className="sesen-cardio__section-intro">Symptoms such as breathlessness, fatigue, swelling, chest discomfort, physical limitation, exercise intolerance, and changes in daily activity can be central to understanding how cardiovascular disease affects patients. Sesen supports translation and linguistic validation for cardiovascular COA, eCOA, PRO, ePRO, ClinRO, ObsRO, questionnaires, scales, and patient diaries.</p>
            <div className="sesen-cardio__concepts">
              {["Symptoms", "Physical limitations", "Exercise capacity", "Daily activities", "Treatment impact", "Quality of life", "Symptom frequency", "Digital assessments"].map((x) => <div className="sesen-cardio__concept" key={x}>{x}</div>)}
            </div>
            <p className="sesen-cardio__copy" style={{ marginTop: 24 }}>Sesen can support heart-failure measures such as the Kansas City Cardiomyopathy Questionnaire when used within the appropriate authorized study workflow, along with study-specific instruments and digital assessment content.</p>
            <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/linguistic-validation-services/">Linguistic Validation Services <Arrow /></a>
          </div>
          <aside className="sesen-cardio__process">
            <span className="sesen-cardio__icon-box"><Icon name="language" /></span>
            <h3 className="sesen-cardio__h3" style={{ marginTop: 18 }}>Structured Linguistic Validation</h3>
            <div className="sesen-cardio__process-steps">
              {["Concept Review", "Forward Translation", "Independent Review", "Reconciliation", "Back Translation", "Harmonization", "Cognitive Debriefing", "Finalization"].map((x,i) => <div className="sesen-cardio__process-step" key={x}><span>{String(i+1).padStart(2,"0")}</span><span>{x}</span></div>)}
            </div>
            <p className="sesen-cardio__copy" style={{ marginTop: 20 }}>The objective is conceptual equivalence and respondent clarity—not literal wording alone.</p>
          </aside>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell sesen-cardio__two-col">
          <div className="sesen-cardio__content-block">
            <span className="sesen-cardio__icon-box"><Icon name="regulatory" /></span>
            <p className="sesen-cardio__eyebrow" style={{ marginTop: 20 }}>Regulatory Programs</p>
            <h2 className="sesen-cardio__h2">Cardiovascular Regulatory Translation for Global Submissions</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular submissions bring together scientific, clinical, safety, statistical, and product information. Sesen helps align terminology across the evidence base as submissions expand across countries and languages.</p>
            <ul className="sesen-cardio__bullet-list" style={{ marginTop: 24 }}>
              {["IND, NDA, BLA, MAA and related application content", "CTD and eCTD documentation", "Clinical summaries and overviews", "Health authority questions and responses", "Benefit-risk documentation", "Product information and lifecycle updates"].map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}
            </ul>
            <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation Services <Arrow /></a>
          </div>
          <div className="sesen-cardio__content-block">
            <span className="sesen-cardio__icon-box"><Icon name="safety" /></span>
            <p className="sesen-cardio__eyebrow" style={{ marginTop: 20 }}>Drug Safety</p>
            <h2 className="sesen-cardio__h2">Accurate Cardiovascular Safety Communication Across Languages</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular adverse events and safety findings can involve closely related clinical concepts, detailed histories, diagnostic findings, laboratory values, medications, timelines, and outcomes.</p>
            <ul className="sesen-cardio__bullet-list" style={{ marginTop: 24 }}>
              {["Individual case safety reports", "Serious adverse-event documentation", "Safety narratives", "DSUR, PSUR and PBRER content", "Risk-management materials", "Signal-related and post-market safety communication"].map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}
            </ul>
            <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--pale">
        <div className="sesen-cardio__shell sesen-cardio__split">
          <div>
            <p className="sesen-cardio__eyebrow">Scientific Communication</p>
            <h2 className="sesen-cardio__h2">Translate Cardiovascular Evidence for Global Medical Affairs</h2>
            <p className="sesen-cardio__section-intro">Medical Affairs teams communicate cardiovascular evidence to healthcare professionals, investigators, scientific audiences, affiliates, payers, and other stakeholders. Sesen helps carry the scientific terminology established during development into global communication.</p>
            <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/medical-affairs-translation-services/">Medical Affairs Translation Services <Arrow /></a>
          </div>
          <div className="sesen-cardio__value-stack">
            {[
              ["Publications & Congresses", "Scientific manuscripts, abstracts, posters, congress presentations, symposium content, and publication summaries."],
              ["Field Medical & Education", "MSL resources, scientific slide decks, disease-state education, medical training, and HCP-facing communication."],
              ["Evidence & Medical Information", "Medical information responses, advisory-board content, HEOR, real-world evidence, and evidence communication."],
              ["Global Scientific Exchange", "Consistent multilingual terminology across affiliates, regions, local reviewers, and global Medical Affairs programs."],
            ].map(([title,text],i) => <div className="sesen-cardio__value-row" key={title}><span className="sesen-cardio__icon-box"><Icon name={["document","affairs","data","globe"][i]} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--deep">
        <div className="sesen-cardio__shell">
          <p className="sesen-cardio__eyebrow">Terminology Governance</p>
          <h2 className="sesen-cardio__h2">One Cardiovascular Vocabulary Across Every Document and Market</h2>
          <p className="sesen-cardio__section-intro">Cardiovascular terminology does not remain inside one file. Sesen helps build multilingual language assets that grow with the program so recurring concepts remain connected across development, regulatory, safety, scientific, and patient-facing content.</p>
          <div className="sesen-cardio__term-map">
            <div className="sesen-cardio__term-core">
              <span className="sesen-cardio__icon-box"><Icon name="terms" size={26} /></span>
              <h3 className="sesen-cardio__h3" style={{ marginTop: 22 }}>Controlled Cardiovascular Language Assets</h3>
              <p>Program-specific glossaries, translation memories, approved references, reviewer decisions, and cross-document QA create a reusable language system rather than isolated translation decisions.</p>
              <div className="sesen-cardio__term-families">
                {["HF · HFrEF · HFpEF", "CAD · ACS · MI", "AF · rhythm control", "MACE · CV death", "NYHA · functional capacity"].map((x) => <span className="sesen-cardio__term-chip" key={x}>{x}</span>)}
              </div>
            </div>
            <div className="sesen-cardio__term-docs">
              {["Protocol", "COA / eCOA", "Clinical Study Report", "Regulatory Submission", "Safety Documentation", "Publication", "Medical Affairs", "Patient Materials"].map((x) => <div className="sesen-cardio__term-doc" key={x}>{x}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell sesen-cardio__patient-layout">
          <div className="sesen-cardio__patient-visual">
            <div className="sesen-cardio__patient-path" aria-label="From cardiovascular science to patient understanding">
              <div className="sesen-cardio__patient-node">Clinical Evidence</div><span className="sesen-cardio__patient-arrow"><Arrow size={20}/></span>
              <div className="sesen-cardio__patient-node">Clear Language</div><span className="sesen-cardio__patient-arrow"><Arrow size={20}/></span>
              <div className="sesen-cardio__patient-node">Patient Understanding</div>
            </div>
          </div>
          <div>
            <h2 className="sesen-cardio__h2">Make Cardiovascular Information Clear for Patients and Caregivers</h2>
            <p className="sesen-cardio__section-intro">Patients encounter cardiovascular information when deciding whether to join a study, tracking symptoms, completing assessments, understanding treatment requirements, or managing a chronic condition. Complex science must remain accurate without becoming unnecessarily difficult to understand.</p>
            <ul className="sesen-cardio__bullet-list" style={{ marginTop: 26 }}>
              {["Informed consent and assent", "Patient information and disease education", "Medication and treatment information", "Symptom-monitoring content", "Patient diaries, PRO and ePRO content", "Recruitment, retention, digital health, and caregiver communication"].map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--neutral">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-group--center-mobile">
            <p className="sesen-cardio__eyebrow">Connected Cardiovascular Ecosystem</p>
            <h2 className="sesen-cardio__h2">Supporting Cardiovascular Therapeutics, Devices &amp; Connected Technologies</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular programs increasingly span therapeutics, medical devices, diagnostics, monitoring technologies, software, and digital health. Sesen supports multilingual content across this ecosystem while applying workflows appropriate to each content type.</p>
          </div>
          <div className="sesen-cardio__ecosystem">
            <article className="sesen-cardio__ecosystem-panel">
              <span className="sesen-cardio__icon-box"><Icon name="heart" /></span>
              <h3 className="sesen-cardio__h3">Cardiovascular Therapeutics &amp; Clinical Development</h3>
              <ul className="sesen-cardio__bullet-list">{["Drug and biologic development", "Clinical trial translation", "Regulatory submissions", "Clinical outcome assessments", "Pharmacovigilance", "Medical Affairs and patient content"].map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}</ul>
            </article>
            <article className="sesen-cardio__ecosystem-panel sesen-cardio__ecosystem-panel--device">
              <span className="sesen-cardio__icon-box"><Icon name="device" /></span>
              <h3 className="sesen-cardio__h3">Cardiovascular Medical Devices</h3>
              <p className="sesen-cardio__copy">Sesen's dedicated cardiovascular device services support specialized multilingual workflows for:</p>
              <ul className="sesen-cardio__bullet-list" style={{ marginTop: 18 }}>
                {["Implantable rhythm-management devices", "Vascular and structural heart technologies", "Ablation and electrophysiology systems", "Cardiac monitoring and connected technologies"].map((x) => <li key={x}><Check size={16}/><span>{x}</span></li>)}
              </ul>
              <a className="sesen-cardio__editorial-link" href="https://www.sesen.com/cardiovascular-device-translation-services/">Cardiovascular Device Translation Services <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-group--center-mobile">
            <h2 className="sesen-cardio__h2">When Cardiovascular Disease Crosses Therapeutic Boundaries</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular development increasingly intersects with renal function, metabolic disease, diabetes, obesity, and neurological outcomes. Connected science benefits from connected terminology while each therapeutic area retains its own subject-matter expertise.</p>
          </div>
          <div className="sesen-cardio__intersection-grid">
            {[
              { icon: "kidney", title: "Cardiovascular & Renal Disease", text: "Heart failure, hypertension, kidney function, fluid balance, renal outcomes, and cardiovascular risk can intersect within the same program.", link: "Nephrology & Renal Disease Translation Services", href: "https://www.sesen.com/nephrology-translation-services/" },
              { icon: "metabolic", title: "Cardiovascular & Metabolic Disease", text: "Obesity, dyslipidemia, metabolic dysfunction, atherosclerosis, hypertension, and other factors can influence cardiovascular risk and treatment strategies.", link: "Endocrinology & Metabolic Disease Translation Services", href: "https://www.sesen.com/endocrinology-metabolic-disease-translation-services/" },
              { icon: "data", title: "Cardiovascular Disease & Diabetes", text: "Diabetes programs frequently address cardiovascular outcomes, renal outcomes, metabolic control, obesity, and related comorbidities.", link: "Diabetes Translation Services", href: "https://www.sesen.com/diabetes-translation-services/" },
              { icon: "brain", title: "Cardiovascular & Neurological Outcomes", text: "Stroke and other cerebrovascular events can appear within cardiovascular endpoint frameworks while also requiring neurological expertise.", link: "Neurology Translation Services", href: "https://www.sesen.com/neurology-translation-services/" },
            ].map((x) => <article className="sesen-cardio__intersection" key={x.title}><span className="sesen-cardio__icon-box"><Icon name={x.icon}/></span><h3 className="sesen-cardio__h3">{x.title}</h3><p>{x.text}</p><a className="sesen-cardio__editorial-link" href={x.href}>{x.link} <Arrow /></a></article>)}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--pale">
        <div className="sesen-cardio__shell">
          <div>
            <p className="sesen-cardio__eyebrow">Human Expertise + Technology</p>
            <h2 className="sesen-cardio__h2">AI-Enabled Translation Built for Regulated Cardiovascular Content</h2>
            <p className="sesen-cardio__section-intro">Technology can make multilingual programs more scalable, consistent, and efficient. It should not replace the professional judgment required to interpret complex cardiovascular content. Sesen combines specialized human expertise with AI-enabled language technology throughout the workflow.</p>
          </div>
          <div className="sesen-cardio__workflow">
            {qualitySteps.map((s) => <article className="sesen-cardio__workflow-step" key={s.n}><div className="sesen-cardio__stage-num">{s.n}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}
          </div>
          <p className="sesen-cardio__copy" style={{ marginTop: 28, maxWidth: 820 }}><strong style={{ color: "#17264D" }}>Human expertise remains at the center.</strong> Technology strengthens terminology consistency, structured review, content reuse, and quality control around it.</p>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-group--center-mobile">
            <h2 className="sesen-cardio__h2">Consistent Cardiovascular Content Across Global Markets</h2>
            <p className="sesen-cardio__section-intro">Global cardiovascular programs can span many countries, language variants, changing study documents, affiliate reviewers, regulatory updates, and years of recurring content. Sesen coordinates centralized multilingual support across 150+ languages.</p>
          </div>
          <div className="sesen-cardio__global-band">
            {[
              ["Multi-Country Programs", "Coordinate translation, review, terminology, updates, and delivery through one managed workflow."],
              ["Language Variants", "Support regional language requirements while maintaining alignment with core terminology."],
              ["Cross-Language Harmonization", "Keep key clinical concepts conceptually aligned across language versions."],
              ["Version Management", "Reuse approved translations and focus review on new or modified source content."],
              ["Centralized Assets", "Carry glossaries, translation memories, references, and reviewer decisions forward."],
            ].map(([title,text]) => <div className="sesen-cardio__global-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--neutral">
        <div className="sesen-cardio__shell">
          <div className="sesen-cardio__heading-group--center-mobile">
            <h2 className="sesen-cardio__h2">Built for Global Cardiovascular Content Programs</h2>
            <p className="sesen-cardio__section-intro">Cardiovascular translation requires subject-matter knowledge, controlled terminology, appropriate quality processes, global scalability, and an understanding of how life sciences content changes across its lifecycle.</p>
          </div>
          <div className="sesen-cardio__reasons">
            {[
              ["heart", "Life Sciences Specialization", "Multilingual support for pharmaceutical, biotechnology, clinical research, medical device, digital health, and healthcare organizations."],
              ["person", "Cardiovascular & Clinical Expertise", "Professional linguists selected according to language, therapeutic subject matter, content type, target audience, and intended use."],
              ["terms", "Terminology Governance", "Glossaries, translation memory, approved references, terminology databases, style guidance, and reviewer decisions support continuity."],
              ["shield", "Human-Led Quality", "Professional linguists and reviewers remain responsible for scientific meaning, contextual interpretation, patient readability, and final linguistic decisions."],
              ["regulatory", "ISO-Certified Processes", "ISO 17100, ISO 9001:2015, and ISO 13485 certifications support structured translation, quality-management, and regulated life sciences workflows."],
              ["lock", "Secure Program Workflows", "Controlled workflows, access practices, and confidentiality measures support sensitive clinical, regulatory, scientific, and patient-related content."],
            ].map(([icon,title,text]) => <div className="sesen-cardio__reason" key={title}><span className="sesen-cardio__icon-box"><Icon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section">
        <div className="sesen-cardio__shell">
          <div>
            <h2 className="sesen-cardio__h2">Connect Cardiovascular Translation With the Broader Life Sciences Workflow</h2>
            <p className="sesen-cardio__section-intro">Connect cardiovascular translation with specialized clinical, regulatory, safety, scientific, and medical device services across the life sciences content lifecycle.</p>
          </div>
          <div className="sesen-cardio__related-list">
            {related.map((r) => <div className="sesen-cardio__related-row" key={r.title}><span className="sesen-cardio__icon-box"><Icon name={r.icon}/></span><div><h3>{r.title}</h3><p>{r.text}</p></div><a className="sesen-cardio__editorial-link" href={r.href}>{r.linkLabel} <Arrow /></a></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__section sesen-cardio__section--pale">
        <div className="sesen-cardio__shell sesen-cardio__faq">
          <h2 className="sesen-cardio__h2">Cardiovascular Translation Services FAQs</h2>
          <div className="sesen-cardio__faq-list">
            {faqs.map((f,i) => {
              const open = openFaq === i;
              return <div className="sesen-cardio__faq-item" key={f.q}>
                <button className="sesen-cardio__faq-button" type="button" aria-expanded={open} aria-controls={`cardio-faq-${i}`} onClick={() => setOpenFaq(open ? -1 : i)}>
                  <span>{f.q}</span><span className={`sesen-cardio__faq-plus ${open ? "sesen-cardio__faq-plus--open" : ""}`} aria-hidden="true">+</span>
                </button>
                {open && <div className="sesen-cardio__faq-answer" id={`cardio-faq-${i}`}>{f.a}</div>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="sesen-cardio__final">
        <div className="sesen-cardio__shell sesen-cardio__final-grid">
          <div>
            <h2 className="sesen-cardio__h2">Advance Your Global Cardiovascular Program With Greater Language Control</h2>
            <p>From clinical development and regulatory submissions to outcome assessments, safety, Medical Affairs, and patient communication, Sesen helps cardiovascular teams keep scientific meaning and terminology connected across languages and markets.</p>
          </div>
          <div className="sesen-cardio__final-actions">
            <a className="sesen-cardio__btn sesen-cardio__btn--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Arrow /></a>
            <a className="sesen-cardio__btn sesen-cardio__btn--secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
