import React, { useState } from "react";
import heroImage from "./ophthalmic-device-translation-services-hero.png";

const LINKS = {
  contact: "https://www.sesen.com/contact-sales/",
  quote: "https://www.sesen.com/get-a-quote/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
  ifu: "https://www.sesen.com/ifu-translation-services/",
  labeling: "https://www.sesen.com/medical-device-labeling-translation-services/",
  technicalDocs: "https://www.sesen.com/medical-device-technical-documentation-translation/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  software: "https://www.sesen.com/medical-device-software-localization/",
  clinicalTrial: "https://www.sesen.com/clinical-trial-translation-services/",
  ophthalmology: "https://www.sesen.com/ophthalmology-translation-services/",
  sesengpt: "https://www.sesen.com/sesengpt/",
  quality: "https://www.sesen.com/quality-compliance-security/",
  eifu: "https://www.sesen.com/eifu-translation-services/",
};

const deviceGroups = [
  {
    title: "Diagnostic & Ophthalmic Imaging Systems",
    icon: "scan",
    text: "Translate the content surrounding technologies used to visualize, measure, document, and assess structures and functions of the eye.",
    items: [
      "Optical coherence tomography (OCT)",
      "Fundus and retinal imaging systems",
      "Ophthalmic cameras and scanning ophthalmoscopes",
      "Slit-lamp systems",
      "Corneal topography and tomography",
      "Autorefractors, aberrometers, perimetry, and tonometry",
    ],
  },
  {
    title: "Cataract & Intraocular Lens Technologies",
    icon: "lens",
    text: "Support multilingual content for technologies used in cataract treatment, lens replacement, and vision correction.",
    items: [
      "Intraocular lenses (IOLs)",
      "Monofocal, multifocal, toric, and specialty lenses",
      "Phakic intraocular lenses",
      "Lens-delivery and injection systems",
      "Associated surgical instruments and accessories",
      "Implant information and professional training",
    ],
  },
  {
    title: "Ophthalmic Surgical Systems",
    icon: "surgical",
    text: "Translate technical and procedural content for systems used by ophthalmic surgeons and operating-room teams.",
    items: [
      "Phacoemulsification and phacofragmentation systems",
      "Vitrectomy systems",
      "Surgical consoles and ophthalmic microscopes",
      "Handpieces and accessories",
      "Irrigation and aspiration components",
      "Setup, calibration, operator, and service documentation",
    ],
  },
  {
    title: "Ophthalmic Laser & Refractive Technologies",
    icon: "laser",
    text: "Support multilingual documentation and interfaces for laser-based ophthalmic treatment and refractive systems.",
    items: [
      "Femtosecond and excimer laser systems",
      "Photocoagulation technologies",
      "Laser ophthalmoscopy",
      "Refractive surgical platforms",
      "Treatment interfaces and procedure instructions",
      "Laser safety information and system controls",
    ],
  },
  {
    title: "Retinal & Glaucoma Technologies",
    icon: "retina",
    text: "Support diagnosis, monitoring, treatment, and management content across retinal and glaucoma product environments.",
    items: [
      "Retinal imaging and analysis systems",
      "Visual-field technologies",
      "Intraocular-pressure monitoring",
      "Glaucoma drainage and implant technologies",
      "Aqueous shunts and related devices",
      "Connected monitoring systems",
    ],
  },
  {
    title: "Contact Lens & Vision Technologies",
    icon: "contact",
    text: "Support multilingual product information for vision-correction and specialty lens technologies.",
    items: [
      "Soft and rigid gas-permeable lenses",
      "Specialty contact lenses",
      "Orthokeratology systems",
      "Application and care instructions",
      "Patient-facing product information",
      "Labeling, packaging, and professional education",
    ],
  },
  {
    title: "Digital Ophthalmology, Software & AI",
    icon: "software",
    text: "Localize software-driven ophthalmic experiences while keeping clinical terminology connected to the physical device and its documentation.",
    items: [
      "Retinal diagnostic software",
      "Ophthalmic image-analysis applications",
      "AI-assisted screening workflows",
      "Image acquisition software",
      "Diagnostic and measurement interfaces",
      "Clinician dashboards and cloud-based imaging platforms",
    ],
  },
  {
    title: "Home & Patient-Operated Ophthalmic Technologies",
    icon: "home",
    text: "Support clear, usable multilingual communication as ophthalmic technology extends into home and remote-care settings.",
    items: [
      "Home OCT and vision monitoring",
      "Patient-operated imaging",
      "Remote ophthalmic monitoring",
      "Connected diagnostic technologies",
      "Device companion applications",
      "Onboarding, alerts, troubleshooting, and support",
    ],
  },
];

const contentTypes = [
  {
    title: "IFUs & User Documentation",
    text: "Translate instructions that help surgeons, clinicians, technicians, patients, and other intended users understand how an ophthalmic product should be operated, handled, maintained, or used.",
    items: ["IFUs and DFUs", "User and operator manuals", "Surgical instructions", "Quick-reference guides", "Warnings and precautions", "Cleaning, maintenance, and eIFU content"],
    links: [
      [LINKS.ifu, "Explore IFU Translation Services"],
      [LINKS.eifu, "Explore eIFU Translation Services"],
    ],
  },
  {
    title: "Medical Device Labeling & Packaging",
    text: "Keep product information aligned across tightly constrained multilingual layouts and controlled artwork.",
    items: ["Device labels", "Cartons and package inserts", "Implant information", "Safety and handling content", "Market-specific labeling updates", "Symbols and accompanying language"],
    link: LINKS.labeling,
    linkLabel: "Explore Medical Device Labeling Translation",
  },
  {
    title: "Technical & Regulatory Documentation",
    text: "Support multilingual content used to describe, evaluate, document, register, and maintain ophthalmic technologies.",
    items: ["Device descriptions and intended use", "Technical specifications", "Risk-management content", "Verification and validation", "Clinical evaluation documentation", "Regulatory submissions and post-market content"],
    links: [
      [LINKS.technicalDocs, "Explore Medical Device Technical Documentation Translation"],
      [LINKS.regulatory, "Explore Regulatory Translation Services"],
    ],
  },
  {
    title: "Software, UI & Imaging Interfaces",
    text: "Localize ophthalmic software in the context in which clinicians, technicians, or patients actually use it.",
    items: ["Device UI strings", "Image acquisition workflows", "Measurement labels and imaging modes", "Analysis controls and alerts", "Clinician dashboards", "Help content and software release materials"],
    link: LINKS.software,
    linkLabel: "Explore Medical Device Software Localization",
  },
  {
    title: "Clinical, Safety & Human-Factors Content",
    text: "Support content that connects product performance with clinical use, safety, usability, and evidence.",
    items: ["Clinical investigation materials", "Clinical evaluation content", "Human-factors documentation", "Usability studies", "Patient and user materials", "Risk and safety content"],
    link: LINKS.clinicalTrial,
    linkLabel: "Explore Clinical Trial Translation Services",
  },
  {
    title: "Training, Service & Product Support",
    text: "Extend approved ophthalmic terminology into the materials that support real-world use and recurring product operations.",
    items: ["Surgeon and HCP training", "Technician training", "Installation and calibration", "Service manuals", "Technical bulletins", "Product-support and multimedia content"],
  },
];

const terminologyCapabilities = [
  ["Product-Specific Glossaries", "Maintain approved ophthalmic, device, software, measurement, and proprietary terminology across languages."],
  ["Translation Memory", "Reuse reviewed language across versions, product families, and recurring content where appropriate."],
  ["Reviewer Knowledge Capture", "Preserve approved decisions from client teams, medical reviewers, engineers, and in-country reviewers."],
  ["Cross-Content Validation", "Surface terminology, number, warning, and recurring-content differences across documents and systems."],
];

const users = [
  ["Ophthalmologists & Surgeons", "Clinical terminology, procedures, measurements, treatment parameters, warnings, workflows, and professional training."],
  ["Ophthalmic Technicians & Clinical Staff", "Device setup, patient positioning, image acquisition, calibration, operating instructions, and troubleshooting."],
  ["Service & Engineering Teams", "Installation, maintenance, repair, component terminology, diagnostics, technical bulletins, and service documentation."],
  ["Patients & Caregivers", "Device onboarding, home use, implant information, warnings, monitoring guidance, digital interfaces, and support content."],
];

const aiSteps = [
  ["Content & Risk Analysis", "Review the device, content type, intended users, markets, languages, references, and project requirements."],
  ["Terminology Preparation", "Identify recurring ophthalmic, technical, regulatory, product, and software terms before translation."],
  ["Selective SesenGPT-Assisted Translation", "Apply controlled AI-enabled workflows where appropriate, guided by approved terminology and translation memory."],
  ["Professional Linguistic Review", "Qualified native-language linguists review meaning, terminology, clinical context, readability, and intended use."],
  ["AI-Assisted Validation & QA", "Surface potential terminology, number, omission, consistency, formatting, and cross-document issues."],
  ["In-Context Review", "Review formatted IFUs, labels, interfaces, software screens, and other final-context content where relevant."],
  ["Final Human QA & Delivery", "Complete final professional checks and retain approved language assets for future updates."],
];

const lifecycle = [
  ["Product Development", "Establish terminology and reusable language assets early across technical, clinical, regulatory, and user content."],
  ["Clinical & Regulatory", "Maintain language continuity as device evidence, intended use, risk content, and supporting documentation evolve."],
  ["Launch & Localization", "Coordinate IFUs, labeling, software, training, packaging, and market-specific product information."],
  ["Product & Software Updates", "Translate the right delta while protecting approved terminology and unchanged multilingual content."],
  ["Post-Market & New Markets", "Support safety updates, PMS/PMCF, service content, new languages, and expanding product families."],
];

const whySesen = [
  ["Ophthalmic & Medical Device Expertise", "Professional resources selected for medical, technical, regulatory, software, scientific, and device-related content."],
  ["Connected Content Workflows", "Coordinate IFUs, labeling, software, technical documentation, training, and recurring updates as one product ecosystem."],
  ["Terminology Governance", "Maintain approved language across documents, interfaces, markets, product families, and successive versions."],
  ["AI-Enabled Efficiency", "Use SesenGPT, terminology intelligence, translation memory, content reuse, and AI-assisted QA where they add value."],
  ["Human-Validated Quality", "Keep professional linguists and reviewers responsible for contextual judgment and final linguistic quality."],
  ["Global Program Management", "Coordinate multilingual projects across 150+ languages, multiple file types, reviewers, releases, and recurring device programs."],
];

const faqs = [
  {
    q: "What are ophthalmic device translation services?",
    a: "Ophthalmic device translation services support the translation and localization of content associated with medical devices used in ophthalmology and vision care. Depending on the product, this can include IFUs, labeling, software interfaces, technical documentation, regulatory materials, clinical content, surgical instructions, training, user manuals, patient information, and post-market communication.",
  },
  {
    q: "What types of ophthalmic devices does Sesen support?",
    a: "Sesen supports multilingual content for OCT and retinal imaging systems, ophthalmic cameras, slit-lamp systems, phacoemulsification and surgical systems, intraocular lenses, ophthalmic lasers, glaucoma technologies, corneal diagnostic systems, tonometry and visual-field systems, contact lenses, ophthalmic software, AI-assisted retinal diagnostic applications, and connected or patient-operated technologies.",
  },
  {
    q: "Does Sesen translate ophthalmic device IFUs and labeling?",
    a: "Yes. Sesen translates ophthalmic device IFUs, operating instructions, labels, packaging, warnings, safety content, implant information, user manuals, and related product documentation. Workflows can include terminology management, translation memory, professional review, multilingual formatting, in-context QA, and controlled version updates.",
  },
  {
    q: "Can Sesen localize OCT, retinal imaging, and ophthalmic software?",
    a: "Yes. Sesen supports localization for ophthalmic imaging systems, OCT software, retinal imaging platforms, diagnostic interfaces, clinician dashboards, measurement labels, acquisition workflows, alerts, help content, and other device software, including contextual and in-interface linguistic review where appropriate.",
  },
  {
    q: "How does Sesen maintain ophthalmic terminology across IFUs, software, and labeling?",
    a: "Sesen can create and maintain multilingual glossaries, translation memories, approved terminology, style guidance, and reviewer decisions. These assets can be shared across IFUs, labels, software interfaces, technical documents, training, and subsequent revisions so product language remains aligned throughout the multilingual ecosystem.",
  },
  {
    q: "Can Sesen translate documentation for intraocular lenses and implantable ophthalmic devices?",
    a: "Yes. Sesen supports multilingual documentation for intraocular lenses and other ophthalmic implant technologies, including technical content, IFUs, labeling, implantation instructions, clinical and regulatory materials, patient information, training, and product updates.",
  },
  {
    q: "Can Sesen support EU MDR language requirements for ophthalmic devices?",
    a: "Yes. Sesen supports translation of IFUs, labeling, technical content, software, and related medical-device information for European multilingual programs. Manufacturers determine the requirements applicable to their device and target markets; Sesen provides the translation, review, formatting, terminology, and quality workflows that support those defined language programs.",
  },
  {
    q: "How does Sesen use AI for ophthalmic device translation?",
    a: "Sesen uses AI as part of a controlled, human-supervised workflow. Depending on the content and project requirements, SesenGPT and related technologies can support draft translation, terminology extraction, content reuse, consistency checking, number and unit validation, completeness checks, version analysis, and multilingual QA. Professional linguists and reviewers remain responsible for final language decisions.",
  },
  {
    q: "Can Sesen handle updates to previously translated ophthalmic content?",
    a: "Yes. Translation memory and version-aware workflows can help identify changed content and reuse previously approved translations for revised IFUs, labeling updates, software releases, product variants, new device models, updated warnings, and new target markets.",
  },
  {
    q: "How many languages does Sesen support?",
    a: "Sesen supports ophthalmic device translation and localization across 150+ languages. Programs can range from a single target language to coordinated global releases involving multiple content types, languages, reviewers, and successive product updates.",
  },
];

function Icon({ name }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    scan: <><path d="M3 12c2.3-4 5.3-6 9-6s6.7 2 9 6c-2.3 4-5.3 6-9 6s-6.7-2-9-6Z"/><circle cx="12" cy="12" r="2.6"/><path d="M5 20h14"/></>,
    lens: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5"/><path d="M7 10h6M10 7v6"/></>,
    surgical: <><path d="M4 20 15 9"/><path d="m13 7 4-4 4 4-4 4"/><path d="M3 17h4v4H3z"/></>,
    laser: <><path d="M3 12h8"/><path d="m12 8 4 4-4 4"/><path d="M18 5v2M18 17v2M21 12h-2"/></>,
    retina: <><path d="M3 12c2.2-3.7 5.1-5.6 9-5.6s6.8 1.9 9 5.6c-2.2 3.7-5.1 5.6-9 5.6S5.2 15.7 3 12Z"/><circle cx="12" cy="12" r="3.2"/><path d="M12 8.8v6.4M8.8 12h6.4"/></>,
    contact: <><circle cx="12" cy="12" r="7"/><path d="M6.5 12h11M8 8.5c2.7 2.2 5.3 2.2 8 0M8 15.5c2.7-2.2 5.3-2.2 8 0"/></>,
    software: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 9h4M7 12h7"/></>,
    home: <><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
  };
  return <svg {...common}>{paths[name] || paths.scan}</svg>;
}

function ArrowLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false, mobileLeft = false }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : "center"} ${dark ? "on-dark" : ""} ${mobileLeft ? "mobile-left" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art">
      <img
        src={heroImage}
        alt="Ophthalmic diagnostic workstation with retinal imaging, multilingual device documentation, and global language connections"
      />
    </div>
  );
}

function OphthalmicDeviceTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page">
      <style>{`
        :root {
          --brand: #4B6FD8;
          --brand-strong: #3659BB;
          --brand-dark: #253F8F;
          --brand-ink: #3659BB;
          --brand-soft: #EAF0FF;
          --brand-pale: #F5F7FF;
          --surface-soft: #F7F9FD;
          --navy: #17264D;
          --ink: #111827;
          --body: #46546D;
          --muted: #68758B;
          --line: #DDE4F2;
          --line-soft: #E9EEF8;
          --line-dark: rgba(255,255,255,.16);
          --white: #FFFFFF;
          --radius-lg: 30px;
          --radius-md: 22px;
          --shadow: 0 18px 55px rgba(45, 63, 111, .08);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; color: var(--body); font-family: Inter, Arial, sans-serif; }
        a { color: inherit; }
        .page { width: 100%; overflow: hidden; background: #fff; }
        .container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .soft { background: var(--surface-soft); }
        .blue-soft { background: var(--brand-pale); }
        .dark { background: var(--navy); color: #fff; }
        .eyebrow { margin: 0 0 14px; font-size: 11px; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; color: var(--brand-strong); }
        .on-dark .eyebrow, .dark .eyebrow { color: #C8D6FF; }
        h1, h2, h3 { margin: 0; font-family: "Inter Tight", Inter, Arial, sans-serif; font-weight: 500; color: var(--ink); letter-spacing: -.015em; }
        .dark h2, .dark h3 { color: #fff; }
        h1 { font-size: 48px; line-height: 1.06; max-width: 690px; }
        h2 { font-size: 36px; line-height: 1.12; }
        h3 { font-size: 24px; line-height: 1.2; }
        p { margin: 0; font-size: 16px; line-height: 1.72; color: var(--body); }
        .dark p { color: #E5EBFF; }
        .lead { font-size: 18px; line-height: 1.72; max-width: 770px; }
        .section-heading { margin-bottom: 48px; }
        .section-heading.center { max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading.left { max-width: 780px; text-align: left; }
        .section-heading p { margin-top: 18px; font-size: 18px; }
        .hero { padding: 104px 0 80px; background: radial-gradient(circle at 88% 10%,rgba(75,111,216,.08),transparent 33%),linear-gradient(180deg,#fff 0%,#FBFCFF 100%); }
        .hero-grid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 64px; align-items: center; }
        .hero-copy .lead { margin-top: 24px; max-width: 680px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
        .btn { min-height: 48px; padding: 13px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; text-decoration: none; font-size: 15px; font-weight: 600; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
        .btn:hover { transform: translateY(-1px); }
        .btn.primary, .btn.primary:visited { background: var(--brand); color: #fff !important; box-shadow: 0 10px 24px rgba(75,111,216,.20); }
        .btn.primary:hover, .btn.primary:focus-visible, .btn.primary:active { background: var(--brand-strong); color: #fff !important; }
        .btn.secondary { background: #fff; color: var(--ink); border: 1px solid var(--line); }
        .btn.secondary:hover, .btn.secondary:focus-visible { border-color: #B7C5EA; background: var(--brand-pale); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(75,111,216,.30); outline-offset: 3px; }
        .hero-art { width: 100%; min-height: 470px; display: flex; align-items: center; justify-content: center; }
        .hero-art img { width: 100%; height: auto; display: block; border-radius: 24px; }
        .proof-bar { margin-top: 64px; padding: 26px 30px; border: 1px solid var(--line-soft); border-radius: var(--radius-md); background: #fff; display: grid; grid-template-columns: repeat(4,1fr); box-shadow: 0 8px 32px rgba(45,63,111,.04); }
        .proof-item { padding: 0 22px; }
        .proof-item + .proof-item { border-left: 1px solid var(--line-soft); }
        .proof-item strong { display: block; font-size: 16px; color: var(--ink); font-weight: 600; margin-bottom: 6px; }
        .proof-item span { display: block; font-size: 16px; line-height: 1.5; color: var(--body); }
        .overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
        .overview-copy { position: sticky; top: 28px; }
        .overview-copy p { margin-top: 22px; font-size: 18px; }
        .signal-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
        .signal { padding: 26px 26px 30px 0; border-bottom: 1px solid var(--line); }
        .signal:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--line); }
        .signal h3 { font-size: 20px; margin-bottom: 10px; }
        .signal p { font-size: 16px; }
        .kicker-line { margin-top: 28px; padding: 20px 22px; border-left: 3px solid var(--brand); background: var(--brand-pale); border-radius: 0 16px 16px 0; color: var(--navy); font-size: 17px; font-weight: 600; }
        .device-list { border-top: 1px solid var(--line); }
        .device-row { display: grid; grid-template-columns: 54px .9fr 1.1fr; gap: 28px; padding: 32px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .icon-box { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: var(--brand-soft); color: var(--brand-strong); }
        .device-row h3 { font-size: 22px; margin-bottom: 10px; }
        .device-row .device-copy p { max-width: 470px; }
        .compact-list { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; }
        .compact-list li { position: relative; padding-left: 16px; font-size: 16px; line-height: 1.55; color: var(--body); }
        .compact-list li::before { content: ""; position: absolute; left: 0; top: .68em; width: 6px; height: 6px; border-radius: 50%; background: #6F8BE1; }
        .content-stack { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; box-shadow: var(--shadow); }
        .content-row { display: grid; grid-template-columns: .72fr 1.28fr; gap: 42px; padding: 34px 38px; }
        .content-row + .content-row { border-top: 1px solid var(--line); }
        .content-row h3 { font-size: 22px; margin-bottom: 12px; }
        .content-row .compact-list { margin-top: 18px; }
        .row-links { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 18px; }
        .editorial-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; text-decoration: none; color: var(--brand-strong); font-size: 15px; font-weight: 600; }
        .editorial-link span { transition: transform .2s ease; }
        .editorial-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .editorial-link:hover span { transform: translateX(3px); }
        .term-examples { margin: -10px auto 32px; max-width: 980px; text-align: center; color: #D9E1F7 !important; font-size: 16px; line-height: 1.65; }
        .term-examples strong { color: #fff; font-weight: 600; }
        .term-flow { margin: 0 0 42px; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
        .term-chip { color: #fff; font-size: 15px; font-weight: 600; padding: 11px 14px; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; background: rgba(255,255,255,.06); white-space: nowrap; }
        .term-arrow { color: #AFC0F4; font-size: 21px; }
        .term-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line-dark); }
        .term-card { padding: 30px 26px 8px 0; }
        .term-card + .term-card { padding-left: 26px; border-left: 1px solid var(--line-dark); }
        .term-card h3 { font-size: 20px; margin-bottom: 11px; }
        .digital-grid { display: grid; grid-template-columns: 1.03fr .97fr; gap: 72px; align-items: center; }
        .ui-mock { border: 1px solid #DDE4F2; border-radius: 28px; padding: 18px; background: #fff; box-shadow: var(--shadow); }
        .ui-top { height: 34px; border-radius: 12px 12px 8px 8px; background: #F5F7FF; display: flex; align-items: center; gap: 7px; padding: 0 12px; }
        .ui-dot { width: 7px; height: 7px; border-radius: 50%; background: #B7C5EA; }
        .ui-body { display: grid; grid-template-columns: 1.35fr .65fr; gap: 12px; margin-top: 12px; }
        .retina-panel { min-height: 280px; border-radius: 18px; background: #222B43; padding: 18px; position: relative; overflow: hidden; }
        .retina-panel::before { content: ""; position: absolute; left: 9%; right: 9%; top: 42%; height: 66px; border-top: 3px solid #D0D8F5; border-bottom: 1px solid #849BE3; border-radius: 50%; transform: rotate(-2deg); opacity: .9; }
        .retina-panel::after { content: ""; position: absolute; width: 96px; height: 96px; right: 24px; bottom: 22px; border-radius: 50%; border: 1px solid #91A6E7; box-shadow: inset 0 0 0 24px rgba(255,255,255,.03); }
        .ui-side { display: flex; flex-direction: column; gap: 12px; }
        .ui-card { flex: 1; min-height: 66px; border-radius: 14px; background: var(--brand-pale); border: 1px solid var(--line-soft); padding: 13px; }
        .ui-line { height: 8px; border-radius: 999px; background: #DDE4F2; margin-bottom: 9px; }
        .ui-line.short { width: 65%; }
        .ui-line.blue { width: 45%; background: var(--brand); }
        .digital-copy h2 { margin-bottom: 22px; }
        .digital-copy > p { font-size: 18px; margin-bottom: 26px; }
        .check-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 14px; }
        .check-list li { display: grid; grid-template-columns: 10px 1fr; gap: 12px; align-items: start; color: var(--body); font-size: 16px; line-height: 1.6; }
        .check-list li::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--brand); margin-top: 9px; }
        .audience-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .audience-item { padding: 30px 26px; }
        .audience-item + .audience-item { border-left: 1px solid var(--line); }
        .audience-item h3 { font-size: 20px; margin-bottom: 12px; }
        .region-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; align-items: start; }
        .region-intro p { margin-top: 20px; font-size: 18px; }
        .region-list { border-top: 1px solid #D4DCF1; }
        .region-row { display: grid; grid-template-columns: 160px 1fr; gap: 26px; padding: 22px 0; border-bottom: 1px solid #D4DCF1; }
        .region-row strong { font-size: 16px; font-weight: 600; color: var(--navy); }
        .workflow { display: grid; grid-template-columns: repeat(7,1fr); gap: 0; margin-top: 46px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .workflow-step { padding: 28px 18px 30px 0; position: relative; }
        .workflow-step + .workflow-step { padding-left: 18px; border-left: 1px solid var(--line); }
        .step-num { font-size: 12px; letter-spacing: .1em; font-weight: 600; color: var(--brand-strong); margin-bottom: 13px; }
        .workflow-step h3 { font-size: 18px; margin-bottom: 10px; }
        .workflow-step p { font-size: 16px; line-height: 1.58; }
        .workflow-note { margin: 34px auto 0; max-width: 760px; text-align: center; font-size: 18px; color: var(--navy); font-weight: 600; }
        .quality-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .quality-item { padding: 30px 34px; }
        .quality-item:nth-child(even) { border-left: 1px solid var(--line); }
        .quality-item:nth-child(n+3) { border-top: 1px solid var(--line); }
        .quality-item h3 { font-size: 20px; margin-bottom: 11px; }
        .quality-footer { display: flex; gap: 26px; flex-wrap: wrap; margin-top: 24px; }
        .life-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 0; border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); margin-top: 44px; }
        .life-step { padding: 30px 22px 32px 0; }
        .life-step + .life-step { padding-left: 22px; border-left: 1px solid var(--line-dark); }
        .life-step .step-num { color: #AFC0F4; }
        .life-step h3 { font-size: 19px; margin-bottom: 10px; }
        .sibling-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .sibling-card { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 36px; background: #fff; }
        .sibling-card.active { background: var(--brand-soft); border-color: #C8D6FF; }
        .sibling-card h3 { margin-bottom: 14px; }
        .sibling-card p { margin-bottom: 20px; }
        .sibling-list { margin: 0 0 22px; padding-left: 18px; color: var(--body); }
        .sibling-list li { margin: 9px 0; font-size: 16px; line-height: 1.5; }
        .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; border-top: 1px solid var(--line); }
        .why-item { padding: 30px 28px 28px 0; border-bottom: 1px solid var(--line); }
        .why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid var(--line); }
        .why-item h3 { font-size: 20px; margin-bottom: 11px; }
        .faq-wrap { max-width: 980px; margin: 0 auto; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .faq-item + .faq-item { border-top: 1px solid var(--line); }
        .faq-button { width: 100%; min-height: 72px; padding: 22px 28px; display: grid; grid-template-columns: 1fr 26px; gap: 18px; align-items: center; text-align: left; border: 0; background: #fff; cursor: pointer; color: var(--ink); font-size: 17px; font-weight: 600; }
        .faq-plus { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #C2CCE9; display: flex; align-items: center; justify-content: center; color: var(--brand-strong); font-size: 18px; line-height: 1; }
        .faq-answer { padding: 0 74px 24px 28px; }
        .faq-answer p { font-size: 16px; max-width: 820px; }
        .final-cta { padding: 88px 0; background: var(--brand-pale); color: var(--ink); border-top: 1px solid var(--line); }
        .cta-inner { display: grid; grid-template-columns: 1.15fr .85fr; gap: 48px; align-items: center; }
        .final-cta h2 { color: var(--ink); font-size: 38px; max-width: 720px; }
        .final-cta p { color: var(--body); margin-top: 18px; max-width: 760px; font-size: 18px; }
        .cta-actions { display: flex; justify-content: flex-end; gap: 12px; flex-wrap: wrap; }
        .final-cta .btn.primary { background: var(--brand); color: #fff !important; box-shadow: 0 10px 24px rgba(75,111,216,.18); }
        .final-cta .btn.primary:hover, .final-cta .btn.primary:focus-visible { background: var(--brand-strong); color: #fff !important; }
        .final-cta .btn.secondary { background: #fff; color: var(--ink); border-color: var(--line); }
        .final-cta .btn.secondary:hover, .final-cta .btn.secondary:focus-visible { background: #fff; color: var(--ink); border-color: #B7C5EA; }

        @media (max-width: 1100px) {
          .container { width: min(1280px, calc(100% - 80px)); }
          .hero-grid, .digital-grid { gap: 42px; }
          .workflow { grid-template-columns: repeat(4,1fr); }
          .workflow-step:nth-child(5) { border-left: 0; }
          .workflow-step:nth-child(n+5) { border-top: 1px solid var(--line); }
          .term-grid { grid-template-columns: 1fr 1fr; }
          .term-card:nth-child(3) { border-left: 0; }
          .term-card:nth-child(n+3) { border-top: 1px solid var(--line-dark); }
          .audience-grid { grid-template-columns: 1fr 1fr; }
          .audience-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .audience-item:nth-child(4) { border-top: 1px solid var(--line); }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { border-left: 0; padding-left: 0; }
          .why-item:nth-child(even) { border-left: 1px solid var(--line); padding-left: 28px; }
        }

        @media (max-width: 820px) {
          .container { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          .hero { padding: 88px 0 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero-grid, .overview-grid, .digital-grid, .region-grid, .cta-inner { grid-template-columns: 1fr; }
          .hero-copy { text-align: center; }
          .hero-copy h1, .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-art { min-height: 0; max-width: 660px; margin: 0 auto; }
          .proof-bar { grid-template-columns: 1fr 1fr; padding: 20px; }
          .proof-item { padding: 14px 18px; }
          .proof-item + .proof-item { border-left: 0; }
          .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
          .proof-item:nth-child(n+3) { border-top: 1px solid var(--line); }
          .overview-copy { position: static; }
          .overview-copy, .region-intro { text-align: center; }
          .overview-copy p, .region-intro p { max-width: 740px; margin-left: auto; margin-right: auto; text-align: left; }
          .kicker-line { text-align: left; }
          .device-row { grid-template-columns: 50px 1fr; }
          .device-row .device-items { grid-column: 2; }
          .content-row { grid-template-columns: 1fr; gap: 14px; }
          .content-row .compact-list { margin-top: 4px; }
          .section-heading.center, .section-heading.left.center-tablet { text-align: center; }
          .section-heading.mobile-left { max-width: 820px; margin-left: 0; margin-right: 0; text-align: left !important; }
          .section-heading.mobile-left p { text-align: left; margin-left: 0; margin-right: 0; }
          .digital-copy { order: -1; }
          .workflow { grid-template-columns: 1fr 1fr; }
          .workflow-step:nth-child(odd) { border-left: 0; }
          .workflow-step:nth-child(n+3) { border-top: 1px solid var(--line); }
          .workflow-step:nth-child(5) { border-left: 0; }
          .life-grid { grid-template-columns: 1fr; }
          .life-step + .life-step { border-left: 0; border-top: 1px solid var(--line-dark); padding-left: 0; }
          .sibling-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .sibling-card { padding: 30px; }
          .final-cta { text-align: center; }
          .final-cta p { margin-left: auto; margin-right: auto; }
          .cta-actions { justify-content: center; }
        }

        @media (max-width: 560px) {
          .container { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          .hero { padding: 72px 0 64px; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .section-heading { margin-bottom: 36px; text-align: center !important; }
          .section-heading.left p, .section-heading.left h2, .section-heading.left .eyebrow { text-align: center; }
          .section-heading.mobile-left { text-align: left !important; margin-left: 0; margin-right: 0; }
          .section-heading.mobile-left h2, .section-heading.mobile-left p, .section-heading.mobile-left .eyebrow { text-align: left !important; }
          .hero-actions { flex-direction: column; }
          .btn { width: 100%; min-height: 50px; }
          .hero-art img { min-width: 0; }
          .proof-bar { grid-template-columns: 1fr; padding: 14px 18px; }
          .proof-item { padding: 16px 4px; text-align: center; }
          .proof-item:nth-child(even) { border-left: 0; }
          .proof-item + .proof-item { border-top: 1px solid var(--line); }
          .signal-grid { grid-template-columns: 1fr; }
          .signal, .signal:nth-child(even) { padding: 22px 0; border-left: 0; }
          .device-row { grid-template-columns: 42px 1fr; gap: 16px; padding: 26px 0; }
          .icon-box { width: 42px; height: 42px; border-radius: 12px; }
          .device-row .device-items { grid-column: 1 / -1; }
          .compact-list { grid-template-columns: 1fr; gap: 9px; }
          .content-row { padding: 28px 22px; }
          .row-links { flex-direction: column; gap: 2px; }
          .term-flow { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .term-chip { white-space: normal; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 46px; }
          .term-arrow { display: none; }
          .term-grid { grid-template-columns: 1fr; }
          .term-card, .term-card + .term-card { padding: 24px 0; border-left: 0; border-top: 1px solid var(--line-dark); }
          .term-card:first-child { border-top: 0; }
          .digital-copy { order: -1; }
          .ui-body { grid-template-columns: 1fr; }
          .retina-panel { min-height: 230px; }
          .audience-grid { grid-template-columns: 1fr; }
          .audience-item, .audience-item + .audience-item, .audience-item:nth-child(3), .audience-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); padding: 26px 0; }
          .audience-item:first-child { border-top: 0; }
          .region-row { grid-template-columns: 1fr; gap: 8px; }
          .workflow { grid-template-columns: 1fr; }
          .workflow-step, .workflow-step + .workflow-step, .workflow-step:nth-child(n+3), .workflow-step:nth-child(n+5) { border-left: 0; border-top: 1px solid var(--line); padding: 24px 0; }
          .workflow-step:first-child { border-top: 0; }
          .quality-grid { grid-template-columns: 1fr; }
          .quality-item, .quality-item:nth-child(even), .quality-item:nth-child(n+3) { border-left: 0; border-top: 1px solid var(--line); padding: 26px 22px; }
          .quality-item:first-child { border-top: 0; }
          .quality-footer { flex-direction: column; gap: 4px; }
          .sibling-card { padding: 26px 22px; }
          .why-grid { grid-template-columns: 1fr; }
          .why-item, .why-item:nth-child(even), .why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { border-left: 0; padding: 24px 0; }
          .faq-button { padding: 20px; }
          .faq-answer { padding: 0 56px 22px 20px; }
          .final-cta { padding: 72px 0; text-align: center; }
          .final-cta h2 { font-size: 32px; }
          .cta-actions { justify-content: center; flex-direction: column; }
        }

        @media (max-width: 340px) {
          .container { width: calc(100% - 40px); }
          h1 { font-size: 36px; }
          .content-row { padding-left: 18px; padding-right: 18px; }
          .faq-button { padding-left: 18px; padding-right: 18px; }
          .faq-answer { padding-left: 18px; padding-right: 46px; }
        }
      `}</style>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">OPHTHALMIC DEVICES</div>
              <h1>Ophthalmic Device Translation Services</h1>
              <p className="lead">Bring ophthalmic technologies to global markets with specialized translation and localization for diagnostic, surgical, imaging, implantable, software-driven, and patient-operated devices.</p>
              <p className="lead" style={{ marginTop: 14, fontSize: 16 }}>Sesen supports multilingual ophthalmic device content across the product lifecycle, from technical and regulatory documentation to IFUs, labeling, imaging software, user interfaces, training, and post-market updates.</p>
              <div className="hero-actions">
                <a className="btn primary" href={LINKS.contact}>Talk With Team Sesen <span aria-hidden="true">→</span></a>
                <a className="btn secondary" href={LINKS.quote}>Get a Quote</a>
              </div>
            </div>
            <HeroArtwork />
          </div>
          <div className="proof-bar" aria-label="Service proof points">
            <div className="proof-item"><strong>Ophthalmic Device Expertise</strong><span>Diagnostic · Surgical · Imaging · Implantable · Digital</span></div>
            <div className="proof-item"><strong>ISO-Certified Quality</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span></div>
            <div className="proof-item"><strong>150+ Languages</strong><span>Centralized support for global device programs</span></div>
            <div className="proof-item"><strong>AI-Enabled · Human-Validated</strong><span>SesenGPT-supported workflows with professional review</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container overview-grid">
          <div className="overview-copy">
            <div className="eyebrow">CONNECTED PRODUCT CONTENT</div>
            <h2>Translation Built for Complex Ophthalmic Device Ecosystems</h2>
            <p>Modern ophthalmic products can combine optics, imaging, precision engineering, software, surgical workflows, clinical measurements, patient instructions, and recurring product updates. The language connecting those components needs to remain precise and consistent.</p>
            <div className="kicker-line">One ophthalmic device program can create hundreds of connected language decisions.</div>
          </div>
          <div className="signal-grid">
            <div className="signal"><h3>Clinical Precision</h3><p>Preserve ophthalmic anatomy, procedures, diagnostics, measurements, indications, warnings, and clinical meaning across languages.</p></div>
            <div className="signal"><h3>Technical Complexity</h3><p>Support optical systems, lasers, imaging technologies, hardware components, embedded software, and device accessories.</p></div>
            <div className="signal"><h3>Regulated Content</h3><p>Manage IFUs, labels, technical documentation, safety information, software, and regulatory materials through controlled workflows.</p></div>
            <div className="signal"><h3>Product Continuity</h3><p>Maintain approved language across documents, interfaces, markets, product generations, and software releases.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="Translation Across Ophthalmic Diagnostic, Surgical, and Therapeutic Technologies" intro="Ophthalmic medical technology spans examination instruments, imaging platforms, surgical systems, implantable lenses, connected software, and increasingly AI-enabled diagnostic workflows. FDA organizes ophthalmic devices within its Ophthalmic medical-device specialty under 21 CFR Part 886, reflecting the breadth of technologies in this category. Sesen supports the language layer surrounding these products across regulated, technical, clinical, and user-facing content." />
          <div className="device-list">
            {deviceGroups.map((item) => (
              <div className="device-row" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <div className="device-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                <div className="device-items"><ul className="compact-list">{item.items.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}><ArrowLink href={LINKS.medicalDevice}>Explore Medical Device Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="REGULATED CONTENT" title="Translate Every Content Touchpoint Around the Ophthalmic Device" intro="Ophthalmic device information moves through many formats before and after a product reaches the market. Sesen connects these content streams through shared terminology, translation memory, reviewer knowledge, structured QA, and version-aware workflows." />
          <div className="content-stack">
            {contentTypes.map((item) => (
              <div className="content-row" key={item.title}>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <div>
                  <ul className="compact-list">{item.items.map((x) => <li key={x}>{x}</li>)}</ul>
                  {item.link ? <div className="row-links"><ArrowLink href={item.link}>{item.linkLabel}</ArrowLink></div> : null}
                  {item.links ? <div className="row-links">{item.links.map(([href,label]) => <ArrowLink key={label} href={href}>{label}</ArrowLink>)}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHeading eyebrow="TERMINOLOGY GOVERNANCE" title="One Ophthalmic Vocabulary Across Every Document, Interface, and Market" intro="Ophthalmic terminology crosses anatomy, optics, imaging, engineering, software, diagnostics, and surgery. The challenge is not choosing an accurate term once. It is preserving the right term everywhere it matters." dark />
          <p className="term-examples"><strong>Examples of recurring terminology:</strong> anterior chamber · corneal thickness · diopter · intraocular pressure · macula · optic disc · retinal layer · toric axis · visual field</p>
          <div className="term-flow" aria-label="Connected terminology flow">
            {['IFU','Labeling','Device UI','Imaging Software','Technical Documentation','Training','Product Updates'].map((x,i,arr) => <React.Fragment key={x}><span className="term-chip">{x}</span>{i < arr.length-1 ? <span className="term-arrow" aria-hidden="true">→</span> : null}</React.Fragment>)}
          </div>
          <div className="term-grid">
            {terminologyCapabilities.map(([title,text]) => <div className="term-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container digital-grid">
          <div className="ui-mock" aria-label="Illustrative ophthalmic imaging software localization interface">
            <div className="ui-top"><span className="ui-dot"></span><span className="ui-dot"></span><span className="ui-dot"></span></div>
            <div className="ui-body">
              <div className="retina-panel"></div>
              <div className="ui-side">
                {[1,2,3,4].map((x) => <div className="ui-card" key={x}><div className="ui-line blue"></div><div className="ui-line"></div><div className="ui-line short"></div></div>)}
              </div>
            </div>
          </div>
          <div className="digital-copy">
            <div className="eyebrow">DIGITAL OPHTHALMOLOGY</div>
            <h2>Localize the Device Interface Without Disconnecting It From the Clinical Workflow</h2>
            <p>Ophthalmic imaging and diagnostic systems increasingly depend on software to acquire images, control device functions, display measurements, analyze clinical information, and communicate results.</p>
            <ul className="check-list">
              <li>Localize acquisition screens, imaging modes, scan protocols, measurements, analysis functions, alerts, dashboards, reports, and help content.</li>
              <li>Preserve clinical meaning when short strings depend on screen context, device state, user role, or workflow stage.</li>
              <li>Keep software terminology aligned with IFUs, labeling, training, and technical documentation.</li>
              <li>Use in-context review to identify truncation, ambiguity, layout problems, and incorrect contextual interpretation.</li>
            </ul>
            <div style={{ marginTop: 24 }}><ArrowLink href={LINKS.software}>Explore Medical Device Software Localization</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="One Ophthalmic Device Can Speak to Very Different Users" intro="The same ophthalmic technology can generate content for a surgeon, an imaging technician, a service engineer, and a patient. Translation needs to preserve the underlying meaning while communicating appropriately to the person who must act on it." />
          <div className="audience-grid">
            {users.map(([title,text]) => <div className="audience-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section blue-soft">
        <div className="container region-grid">
          <div className="region-intro">
            <h2>Multilingual Ophthalmic Content for Global Device Markets</h2>
            <p>Sesen provides centralized multilingual support across 150+ languages, helping ophthalmic device manufacturers coordinate terminology, versions, formatting, reviewer decisions, and recurring releases across global markets.</p>
          </div>
          <div className="region-list">
            <div className="region-row"><strong>European Markets</strong><p>Support multilingual IFUs, labeling, software, technical content, and other device information for manufacturer-defined European language programs.</p></div>
            <div className="region-row"><strong>Asia-Pacific</strong><p>Coordinate Japanese, Simplified and Traditional Chinese, Korean, and other regional language programs with appropriate linguistic and technical expertise.</p></div>
            <div className="region-row"><strong>Latin America</strong><p>Support Spanish and Portuguese content for device launches, registrations, software, training, user documentation, and updates.</p></div>
            <div className="region-row"><strong>Middle East</strong><p>Support Arabic and other regional languages with right-to-left layout and multilingual production capabilities where required.</p></div>
            <div className="region-row"><strong>Multi-Market Programs</strong><p>Centralize terminology, translation memory, reviewer history, reference materials, and recurring product knowledge across global launches.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="SESENGPT + HUMAN EXPERTISE" mobileLeft title="AI-Enabled, Human-Validated Ophthalmic Device Translation" intro="AI can accelerate suitable multilingual workflows and help surface inconsistencies. Ophthalmic and medical-device content still requires professional judgment about clinical meaning, technical context, intended use, terminology, and final linguistic quality." />
          <div className="workflow">
            {aiSteps.map(([title,text],i) => <div className="workflow-step" key={title}><div className="step-num">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <div className="workflow-note">AI strengthens the workflow. Professional human expertise remains responsible for the final language decisions.</div>
          <div style={{ textAlign: 'center', marginTop: 16 }}><ArrowLink href={LINKS.sesengpt}>Explore SesenGPT</ArrowLink></div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="Quality Controls for Regulated Ophthalmic Device Content" intro="Sesen aligns quality controls with the content type, intended users, project requirements, client processes, and multilingual production needs of each ophthalmic device program." />
          <div className="quality-grid">
            <div className="quality-item"><h3>ISO-Certified Quality Processes</h3><p>Sesen's quality framework includes ISO 17100, ISO 9001, and ISO 13485, supporting controlled translation and medical-device multilingual workflows.</p></div>
            <div className="quality-item"><h3>Professional Native Linguists</h3><p>Projects are matched with professional linguists and reviewers according to language pair, subject matter, device context, intended users, and project requirements.</p></div>
            <div className="quality-item"><h3>Terminology & Translation Memory Governance</h3><p>Approved terminology, prior translations, style guidance, translation memory, and reviewer decisions support continuity across product versions and markets.</p></div>
            <div className="quality-item"><h3>Structured Human Review</h3><p>Professional review is configured around content sensitivity, intended use, regulatory context, client requirements, and the agreed quality process.</p></div>
            <div className="quality-item"><h3>Multilingual Formatting & In-Context QA</h3><p>Support complex layouts, non-Latin scripts, right-to-left languages, software screens, labels, and formatted IFUs in the environment where users encounter them.</p></div>
            <div className="quality-item"><h3>Secure Workflow Infrastructure</h3><p>Controlled AWS-hosted systems support secure enterprise multilingual operations for sensitive life sciences and medical-device content.</p></div>
          </div>
          <div className="quality-footer"><ArrowLink href={LINKS.quality}>Explore Quality, Compliance & Security</ArrowLink></div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHeading eyebrow="LIFECYCLE CONTINUITY" mobileLeft title="Keep Ophthalmic Content Aligned as the Product Evolves" intro="Software is released. IFUs are revised. Warnings change. New languages are added. Labeling evolves. A product family expands. Sesen helps carry approved multilingual knowledge forward instead of restarting with every update." dark />
          <div className="life-grid">
            {lifecycle.map(([title,text],i) => <div className="life-step" key={title}><div className="step-num">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Beyond the Device: Ophthalmology Translation Across Clinical Development and Patient Care" intro="Ophthalmic devices are one part of a broader ophthalmology ecosystem. Sesen also supports pharmaceutical, biotechnology, CRO, research, and healthcare organizations working across ophthalmology clinical development, regulatory documentation, scientific communication, and patient-facing content." />
          <div className="sibling-grid">
            <div className="sibling-card active">
              <div className="eyebrow">DEVICE SPECIALIZATION</div>
              <h3>Ophthalmic Device Translation Services</h3>
              <p>For ophthalmic equipment, implants, imaging systems, surgical technologies, device software, IFUs, labeling, technical documentation, training, and post-market content.</p>
              <ul className="sibling-list"><li>Diagnostic and imaging systems</li><li>Ophthalmic surgical technologies</li><li>IFUs, labeling, software, and technical documentation</li></ul>
            </div>
            <div className="sibling-card">
              <div className="eyebrow">THERAPEUTIC AREA</div>
              <h3>Ophthalmology Translation Services</h3>
              <p>For ophthalmology clinical research, pharmaceutical and biotechnology programs, regulatory content, medical and scientific communication, and patient materials beyond the device itself.</p>
              <ul className="sibling-list"><li>Clinical trials and study content</li><li>Pharmaceutical and biotechnology programs</li><li>Regulatory, scientific, and patient communication</li></ul>
              <ArrowLink href={LINKS.ophthalmology}>Explore Ophthalmology Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading title="A Specialized Translation Partner for Global Ophthalmic Device Programs" intro="Global ophthalmic technologies require multilingual workflows that understand how clinical terminology, physical devices, software, regulated documentation, intended users, and recurring product changes connect." />
          <div className="why-grid">
            {whySesen.map(([title,text]) => <div className="why-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading mobileLeft title="Ophthalmic Device Translation Services FAQ" />
          <div className="faq-wrap">
            {faqs.map((item,i) => {
              const open = openFaq === i;
              return <div className="faq-item" key={item.q}>
                <button className="faq-button" type="button" aria-expanded={open} aria-controls={`faq-${i}`} onClick={() => setOpenFaq(open ? -1 : i)}>
                  <span>{item.q}</span><span className="faq-plus" aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                {open ? <div className="faq-answer" id={`faq-${i}`}><p>{item.a}</p></div> : null}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container cta-inner">
          <div>
            <h2>Bring Ophthalmic Devices to Global Markets With Connected Multilingual Content</h2>
            <p>From an OCT interface or surgical system to an intraocular lens IFU, retinal imaging platform, device label, technical file, or recurring software update, Sesen helps ophthalmic device manufacturers and global product teams manage multilingual content as one connected product ecosystem.</p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href={LINKS.contact}>Talk With Team Sesen <span aria-hidden="true">→</span></a>
            <a className="btn secondary" href={LINKS.quote}>Get a Quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OphthalmicDeviceTranslationWireframe;
