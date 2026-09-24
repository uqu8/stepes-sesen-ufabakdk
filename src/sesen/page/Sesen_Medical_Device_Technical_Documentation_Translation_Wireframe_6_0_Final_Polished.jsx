import React, { useState } from "react";

const PAGE = "sesen-page-medtech-docs";

const Icon = ({ name }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    design: (
      <svg {...common}><path d="M4 19h16"/><path d="M6 16V8l6-4 6 4v8"/><path d="M9 11h6"/><path d="M9 14h4"/></svg>
    ),
    risk: (
      <svg {...common}><path d="M12 3 3.8 6.5v5.2c0 4.7 3.2 7.5 8.2 9.3 5-1.8 8.2-4.6 8.2-9.3V6.5L12 3Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
    ),
    validate: (
      <svg {...common}><path d="M8 3h8"/><path d="M9 3v4l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 16l-5-9V3"/><path d="m9 15 2 2 4-4"/></svg>
    ),
    clinical: (
      <svg {...common}><path d="M12 21s7-3.5 7-10V5l-7-2-7 2v6c0 6.5 7 10 7 10Z"/><path d="M12 7v8"/><path d="M8 11h8"/></svg>
    ),
    software: (
      <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m8 9 2 2-2 2"/><path d="M13 13h3"/></svg>
    ),
    quality: (
      <svg {...common}><path d="M4 5h16v14H4z"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="m15.5 15.5 1.2 1.2 2.3-2.5"/></svg>
    ),
    post: (
      <svg {...common}><path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4v5h5"/><path d="M12 8v4l3 2"/></svg>
    ),
    regulatory: (
      <svg {...common}><path d="M5 3h14v18H5z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/><path d="m15 17 1.4 1.4L19 16"/></svg>
    ),
    language: (
      <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>
    ),
    file: (
      <svg {...common}><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
    ),
    review: (
      <svg {...common}><path d="M4 4h16v12H8l-4 4z"/><path d="m8 10 2 2 5-5"/></svg>
    ),
    scale: (
      <svg {...common}><path d="M4 18V8"/><path d="M10 18V4"/><path d="M16 18v-7"/><path d="M22 18V6"/><path d="M2 20h20"/></svg>
    ),
  };
  return icons[name] || icons.file;
};

const EvidenceGraphic = () => (
  <svg className="hero-art" viewBox="0 0 620 500" role="img" aria-label="Connected medical device technical documentation">
    <defs>
      <linearGradient id="softBlue" x1="0" x2="1">
        <stop offset="0%" stopColor="#F5F7FF" />
        <stop offset="100%" stopColor="#EAF0FF" />
      </linearGradient>
    </defs>
    <rect x="42" y="46" width="536" height="408" rx="34" fill="url(#softBlue)" stroke="#DDE4F2" />
    <rect x="204" y="126" width="212" height="246" rx="22" fill="#FFFFFF" stroke="#8793A8" strokeWidth="2" />
    <path d="M246 177h128M246 211h96M246 245h128M246 279h110M246 313h78" stroke="#68758B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="316" cy="83" r="34" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
    <path d="M299 83h34M316 66v34" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
    <g fill="#FFFFFF" stroke="#8793A8" strokeWidth="2">
      <rect x="64" y="111" width="112" height="74" rx="16" />
      <rect x="444" y="111" width="112" height="74" rx="16" />
      <rect x="64" y="315" width="112" height="74" rx="16" />
      <rect x="444" y="315" width="112" height="74" rx="16" />
    </g>
    <g stroke="#4B6FD8" strokeWidth="2.5" fill="none" strokeLinecap="round">
      <path d="M176 148h48" /><path d="M416 148h28" />
      <path d="M176 352h48" /><path d="M416 352h28" />
    </g>
    <g stroke="#8793A8" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M87 133h66M87 148h48M467 133h66M467 148h42" />
      <path d="M87 337h66M87 352h44M467 337h66M467 352h48" />
    </g>
    <g fill="#4B6FD8">
      <circle cx="120" cy="98" r="5"/><circle cx="500" cy="98" r="5"/><circle cx="120" cy="402" r="5"/><circle cx="500" cy="402" r="5"/>
    </g>
    <g fill="#3659BB" fontFamily="Inter, Arial, sans-serif" fontSize="13" fontWeight="700">
      <text x="76" y="208">RISK &amp; SAFETY</text>
      <text x="449" y="208">CLINICAL</text>
      <text x="76" y="412">V&amp;V</text>
      <text x="449" y="412">POST-MARKET</text>
    </g>
  </svg>
);

const TerminologyGraphic = () => (
  <div className="term-visual" aria-label="Approved device vocabulary reused across connected medical device documents">
    <div className="term-source">
      <span className="tiny-kicker">APPROVED LANGUAGE ASSETS</span>
      <strong>Device Vocabulary</strong>
      <small>Product · Engineering · Clinical · Safety · Regulatory</small>
    </div>
    <div className="term-flow" aria-hidden="true">
      <span></span>
      <span className="term-arrow">→</span>
    </div>
    <div className="term-docs">
      {["CER", "Risk File", "IFU", "Labeling", "Software", "PMS / PMCF"].map((item) => (
        <div className="term-node" key={item}>{item}</div>
      ))}
    </div>
  </div>
);

const faqItems = [
  {
    q: "What are medical device technical documentation translation services?",
    a: "Medical device technical documentation translation covers the specialized translation and multilingual management of documents describing a device’s design, intended purpose, risks, clinical evidence, verification and validation, manufacturing, software, quality processes, and post-market performance. A complete program may also include terminology management, translation-memory reuse, professional review, automated QA, version control, multilingual formatting, reviewer coordination, and final file validation.",
  },
  {
    q: "What types of medical device technical documentation does Sesen translate?",
    a: "Sesen supports device descriptions and specifications, design and manufacturing information, risk-management documentation, verification and validation records, Clinical Evaluation Reports, clinical evidence, software documentation, biological evaluation content, QMS documentation, PMS and PMCF materials, regulatory documentation, and other technical records. The exact workflow is configured according to the device, document type, language, intended use, regulatory context, and client requirements.",
  },
  {
    q: "Does EU MDR require the entire technical file to be translated?",
    a: "EU MDR establishes requirements for technical documentation and information supplied with medical devices, while language requirements vary according to the type of information, Member State requirements, conformity-assessment context, competent-authority requirements, notified-body requirements, and other factors. Manufacturers should determine the specific language requirements applicable to each market and regulatory pathway; Sesen then builds the translation workflow around those defined requirements.",
  },
  {
    q: "Can Sesen support EU MDR and EU IVDR technical documentation?",
    a: "Yes. Sesen supports multilingual medical device and IVD documentation for programs operating under EU MDR and EU IVDR, including technical documentation, clinical and performance evidence, risk documentation, IFUs, labeling, software-related content, and post-market materials. Translation scope and language requirements are defined according to the specific product, markets, documentation, and review pathway.",
  },
  {
    q: "How does Sesen maintain consistency across CERs, risk files, IFUs, and labeling?",
    a: "Sesen can maintain shared glossaries, terminology databases, translation memories, approved reference translations, style guidance, and reviewer decisions across related document types. These resources help preserve product, clinical, engineering, safety, and regulatory concepts while allowing language to remain appropriate for the audience and purpose of each document.",
  },
  {
    q: "How does Sesen handle updates to previously translated technical documentation?",
    a: "Sesen can compare updated source content with previous versions and use translation memory and controlled change workflows to identify new and modified content. Appropriate previously approved translations can be retained while changed content is translated and reviewed, and the updated release can become the baseline for future revisions.",
  },
  {
    q: "Can Sesen support multiple device variants or product families?",
    a: "Yes. Related devices often share terminology, specifications, warnings, components, software functions, and other technical content. Sesen can organize terminology and translation-memory assets across a product family so reusable approved content can support multiple devices, variants, languages, and future revisions.",
  },
  {
    q: "Does Sesen use AI for medical device technical documentation?",
    a: "Sesen uses a controlled, risk-based approach to AI and translation technology. Depending on document type, intended use, language pair, available approved content, client policy, and quality requirements, workflows may combine professional translation, translation memory, terminology intelligence, SesenGPT-assisted processes, automated QA, professional editing, and independent human review. Human expertise remains central to contextual decisions and final quality.",
  },
  {
    q: "Can Sesen work with FrameMaker, InDesign, Illustrator, XML, and PDF documentation?",
    a: "Sesen supports multilingual production across a wide range of technical-authoring and publishing formats, including Word, Excel, PowerPoint, InDesign, Illustrator, FrameMaker, XML, structured content, and PDF-based workflows. The production approach is defined according to the source format, target languages, required deliverables, and document complexity.",
  },
  {
    q: "Can Sesen handle urgent regulatory or technical-documentation updates?",
    a: "Yes. Accelerated workflows can be structured based on source volume, language count, existing translation-memory leverage, file complexity, professional-review requirements, and available resources. For updated documents, identifying changed content and reusing appropriate approved translation can reduce the amount of new content requiring translation and review.",
  },
  {
    q: "What languages does Sesen support for medical device technical documentation?",
    a: "Sesen supports more than 150 languages for international medical device programs, including European, Asia-Pacific, Latin American, Middle Eastern, African, non-Latin, and right-to-left language requirements. Multilingual production support can be configured around the source files, target markets, and documentation workflow.",
  },
];

const techFamilies = [
  {
    icon: "design",
    title: "Device Definition & Design",
    copy: "Establish consistent multilingual terminology at the foundation of the product record.",
    items: ["Device descriptions and specifications", "Intended purpose and indications", "Product variants and accessories", "Design and development documentation", "Manufacturing information"],
  },
  {
    icon: "risk",
    title: "Risk Management & Safety",
    copy: "Preserve precise relationships between hazards, controls, residual risks, benefits, warnings, and supporting evidence.",
    items: ["Risk-management plans and reports", "Hazard analyses", "Risk-control documentation", "Benefit-risk documentation", "Safety-related technical records"],
  },
  {
    icon: "validate",
    title: "Verification & Validation",
    copy: "Translate detailed engineering, scientific, software, testing, and validation evidence with subject-matter context.",
    items: ["Design verification and validation", "Test protocols and reports", "Software V&V", "Performance documentation", "Applicable biological, packaging, or process validation"],
  },
  {
    icon: "clinical",
    title: "Clinical Evidence",
    copy: "Keep clinical evidence aligned with the device’s intended purpose, risk profile, safety, performance, and labeling.",
    items: ["Clinical Evaluation Reports", "Clinical evaluation documentation", "Clinical investigation materials", "PMCF documentation", "Supporting literature and evidence"],
  },
  {
    icon: "software",
    title: "Software, Connected Devices & SaMD",
    copy: "Synchronize technical documentation with software functionality, version releases, risk controls, and digital product terminology.",
    items: ["Software requirements and specifications", "Architecture-related documentation", "Software lifecycle records", "Cybersecurity-related technical content", "SaMD supporting documentation"],
  },
  {
    icon: "quality",
    title: "Manufacturing & Quality Documentation",
    copy: "Support controlled multilingual documentation across global quality, manufacturing, supplier, and operational environments.",
    items: ["Manufacturing process documentation", "Quality manuals and SOPs", "Work instructions", "Process validation materials", "Change-control and supplier records"],
  },
  {
    icon: "post",
    title: "Post-Market Documentation",
    copy: "Maintain continuity as new safety, performance, clinical, and corrective-action evidence emerges after launch.",
    items: ["PMS plans and reports", "PMCF updates", "Periodic safety-related documentation", "Vigilance-related technical content", "Product-change documentation"],
  },
  {
    icon: "regulatory",
    title: "Registration & Regulatory Documentation",
    copy: "Translate the defined technical content needed for international registrations, conformity assessment, and regulatory interactions.",
    items: ["Technical-file content", "Notified-body review materials", "Competent-authority responses", "Registration dossiers", "Supporting regulatory correspondence"],
  },
];

const related = [
  ["Medical Device Translation Services", "End-to-end multilingual support across medical device content and the product lifecycle.", "https://www.sesen.com/medical-device-translation-services/"],
  ["IFU Translation Services", "Controlled translation, revision management, multilingual production, and QA for Instructions for Use.", "https://www.sesen.com/ifu-translation-services/"],
  ["Medical Device Labeling Translation", "Labels, packaging, warnings, product identification, and multilingual labeling workflows.", "https://www.sesen.com/medical-device-labeling-translation-services/"],
  ["Clinical Evaluation Report Translation", "Specialized translation for CERs, clinical evidence, supporting literature, and lifecycle updates.", "https://www.sesen.com/clinical-evaluation-report-cer-translation/"],
  ["Medical Device Software Localization", "Localization for device interfaces, SaMD, connected technologies, and related digital content.", "https://www.sesen.com/medical-device-software-localization/"],
  ["Regulatory Translation Services", "Multilingual support for submissions, authority communication, and regulated lifecycle content.", "https://www.sesen.com/regulatory-translation-services/"],
  ["Quality Assurance & Audit Translation", "Translation for QMS documentation, audits, inspections, CAPA, SOPs, and controlled quality content.", "https://www.sesen.com/quality-assurance-audit-translation/"],
];

export default function SesenMedicalDeviceTechnicalDocumentationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={PAGE}>
      <style>{styles}</style>

      <section className="hero section-pad">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">MEDICAL DEVICES</p>
            <h1>Medical Device Technical Documentation Translation Services</h1>
            <p className="hero-lead">Translate and maintain complex medical device technical documentation across languages, markets, product revisions, and regulatory environments.</p>
            <p className="hero-support">Sesen combines specialized life sciences linguists, controlled terminology, professional review, translation memory, multilingual production, and AI-enabled quality workflows to help keep technical evidence consistent throughout the device lifecycle.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-visual"><EvidenceGraphic /></div>
        </div>
      </section>

      <section className="trust-band" aria-label="Sesen medical device translation capabilities">
        <div className="shell trust-grid">
          <div><strong>ISO 17100</strong><span>Translation Services</span></div>
          <div><strong>ISO 9001</strong><span>Quality Management</span></div>
          <div><strong>ISO 13485</strong><span>Medical Devices</span></div>
          <div><strong>150+ Languages</strong><span>Global Coverage</span></div>
          <div><strong>Professional Human Review</strong><span>Medical Device Expertise</span></div>
        </div>
      </section>

      <section className="section-pad connected">
        <div className="shell split-editorial">
          <div>
            <p className="eyebrow">CONNECTED TECHNICAL EVIDENCE</p>
            <h2>One Device. One Body of Evidence. Many Connected Documents.</h2>
            <p className="section-lead">Medical device technical documentation is not a collection of isolated files. It is an interconnected body of evidence describing what a device is, how risks are controlled, how safety and performance are demonstrated, and how the product continues to evolve after launch.</p>
            <p>A change to intended purpose, software, risk controls, clinical evidence, manufacturing, or post-market findings can affect multiple controlled documents. Sesen helps preserve the terminology and technical meaning that connect those documents across languages.</p>
          </div>
          <div className="connection-panel">
            <div className="connection-center"><strong>Medical Device</strong><span>Controlled multilingual evidence</span></div>
            <div className="connection-list">
              <div><span>Device Definition & Design</span><small>Product foundation</small></div>
              <div><span>Risk & Safety</span><small>Hazards and controls</small></div>
              <div><span>Clinical Evidence</span><small>Safety and performance</small></div>
              <div><span>Verification & Validation</span><small>Technical evidence</small></div>
              <div><span>Product Information</span><small>IFU, labeling, software</small></div>
              <div><span>Post-Market Evidence</span><small>PMS and PMCF</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pale" id="documentation">
        <div className="shell">
          <div className="section-head compact-head technical-left">
            <h2>Technical Documentation Across the Medical Device Lifecycle</h2>
            <p>Sesen translates technical documentation for medical devices, in vitro diagnostics, software-driven devices, connected technologies, and other regulated device products. The exact scope depends on the device, intended use, regulatory pathway, target market, and program requirements.</p>
          </div>
          <div className="family-grid">
            {techFamilies.map((family) => (
              <article className="family-item" key={family.title}>
                <div className="icon-box"><Icon name={family.icon} /></div>
                <div>
                  <h3>{family.title}</h3>
                  <p>{family.copy}</p>
                  <ul>{family.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad lifecycle">
        <div className="shell">
          <div className="section-head centered-desktop timeline-head">
            <p className="eyebrow">DEVICE LIFECYCLE</p>
            <h2>Technical Documentation Evolves With the Device</h2>
            <p>A global translation program should evolve with it. Sesen helps carry approved terminology, language assets, and reviewer decisions forward as documentation changes.</p>
          </div>
          <div className="lifecycle-track">
            {[
              ["Development", "Device definition, intended purpose, specifications, design records"],
              ["Risk & Validation", "Risk management, verification, validation, performance evidence"],
              ["Clinical & Regulatory", "Clinical evidence, technical documentation, regulatory review"],
              ["Commercialization", "IFU, labeling, software, installation, training"],
              ["Post-Market", "PMS, PMCF, vigilance, clinical and safety updates"],
              ["Product Change", "Updated technical evidence and controlled multilingual revisions"],
            ].map(([title, copy], i) => (
              <div className="life-step" key={title}>
                <span className="life-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad regulatory-section">
        <div className="shell regulatory-grid">
          <div className="reg-intro">
            <p className="eyebrow">GLOBAL REGULATORY ENVIRONMENTS</p>
            <h2>Translate for the Requirements That Apply to Your Program</h2>
            <p className="section-lead">Medical device language requirements are not identical across markets. They can vary by jurisdiction, device class, intended user, document type, conformity-assessment route, registration pathway, competent authority, notified body, and national language rules.</p>
            <p>Sesen structures multilingual execution around the manufacturer’s defined markets and documentation requirements rather than applying a one-size-fits-all language model.</p>
            <a className="editorial-link" href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services <span aria-hidden="true">→</span></a>
          </div>
          <div className="reg-list">
            <article><span className="reg-code">EU</span><div><h3>EU MDR & EU IVDR</h3><p>Support technical documentation, clinical and performance evidence, risk content, IFUs, labeling, software documentation, and other defined materials for European programs and review pathways.</p></div></article>
            <article><span className="reg-code">US</span><div><h3>FDA-Regulated Medical Devices</h3><p>Support multilingual quality and technical documentation for FDA-regulated manufacturers, including content managed within QMSR and ISO 13485-based quality systems.</p></div></article>
            <article><span className="reg-code">GL</span><div><h3>International Markets</h3><p>Support manufacturer-defined programs involving Health Canada, PMDA, ANVISA, NMPA, and additional regulatory environments across Asia-Pacific, Latin America, the Middle East, and other markets.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-pad pale terminology">
        <div className="shell terminology-grid">
          <div>
            <p className="eyebrow">TERMINOLOGY GOVERNANCE</p>
            <h2>One Device Vocabulary Across Every Technical Document</h2>
            <p className="section-lead">A product term should not gradually become five different terms as it moves from an engineering specification to a risk file, Clinical Evaluation Report, IFU, software interface, and post-market document.</p>
            <p>Sesen can connect client glossaries, approved translations, translation memories, product references, style guidance, and reviewer decisions so the same underlying product concepts remain aligned across document types and languages.</p>
            <div className="term-tags">
              <span>Product terminology</span><span>Engineering & software</span><span>Clinical & anatomical</span><span>Safety language</span><span>Regulatory & quality</span>
            </div>
          </div>
          <TerminologyGraphic />
        </div>
      </section>

      <section className="section-pad revision-section">
        <div className="shell">
          <div className="revision-head">
            <p className="eyebrow eyebrow-on-dark">CONTROLLED DOCUMENT REVISIONS</p>
            <h2>Translate What Changed. Preserve What Was Already Approved.</h2>
            <p>When Revision 4.2 replaces Revision 4.1, previously approved multilingual content should not automatically be treated as new. Sesen uses controlled content reuse and version-management workflows to focus translation and review effort where the source actually changed.</p>
          </div>
          <div className="revision-flow">
            {[
              ["REV 4.1", "Approved multilingual documentation", "Previously translated and reviewed content forms the baseline."],
              ["SOURCE UPDATE", "New and modified content identified", "Changed text, terminology, tables, specifications, and warnings are isolated."],
              ["CONTENT REUSE", "Approved language retained", "Previously approved translation is reused where appropriate."],
              ["TRANSLATE & REVIEW", "Changes professionally translated", "New and modified content is reviewed in the context of the existing documentation."],
              ["QA & VALIDATE", "Consistency checked", "Terminology, numbers, completeness, formatting, and references are reviewed."],
              ["REV 4.2", "Updated multilingual release", "The new multilingual revision becomes the baseline for future updates."],
            ].map(([label, title, copy], i) => (
              <article className="revision-step" key={label}>
                <span className="rev-index">{i + 1}</span>
                <span className="rev-label">{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad workflow-section">
        <div className="shell workflow-grid">
          <div className="workflow-intro">
            <h2>A Controlled Workflow Built for Technical Documentation</h2>
            <p className="section-lead">Every project is configured according to document type, languages, intended use, risk, file format, regulatory context, approved language assets, and client quality requirements.</p>
            <p>The goal is not simply to deliver a translated file. It is to create a multilingual documentation process that becomes more consistent and efficient over time.</p>
          </div>
          <div className="workflow-list">
            {[
              ["Content & File Analysis", "Review source documentation, target languages, file formats, relationships, schedules, and existing language assets."],
              ["Terminology Preparation", "Identify important product, technical, clinical, safety, and regulatory terminology and align it with approved references."],
              ["Translation Memory & Content Analysis", "Identify reusable approved content and changes between document revisions."],
              ["Professional Translation", "Assign qualified linguists according to language pair, content type, and medical-device subject matter."],
              ["Independent Linguistic Review", "Review meaning, terminology, completeness, technical consistency, and language quality when required by the workflow."],
              ["Automated Quality Controls", "Check terminology, numbers, missing content, tags, consistency, formatting, and other machine-detectable issues."],
              ["Multilingual Production", "Return translated content in the required format with attention to tables, graphics, expansion, scripts, and document structure."],
              ["Client Review", "Coordinate feedback from regulatory, quality, engineering, clinical, or in-country reviewers through a structured process."],
              ["Final QA & Delivery", "Implement approved changes and complete defined linguistic and production checks before release."],
              ["Knowledge Retention", "Update terminology, translation memory, and approved language assets for future revisions and related documents."],
            ].map(([title, copy], i) => (
              <article className="workflow-step" key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad tech-section pale">
        <div className="shell tech-grid">
          <div>
            <h2>Expert Medical Translation Enhanced by Controlled Technology</h2>
            <p className="section-lead">Technology can improve consistency, reuse, workflow efficiency, and quality control, but it should be applied according to the content, risk, intended use, language pair, available assets, and client requirements.</p>
            <p>Professional human expertise remains central to contextual language decisions and final quality.</p>
          </div>
          <div className="tech-stack">
            {[
              ["Professional Medical Device Linguists", "Language, technical, medical, and regulatory judgment for complex content."],
              ["Translation Memory", "Reuse approved multilingual content across revisions, related documents, and product families."],
              ["Terminology Intelligence", "Control product, engineering, clinical, safety, and regulatory vocabulary."],
              ["SesenGPT-Enabled Workflows", "Support approved translation, terminology, and content-processing workflows where appropriate."],
              ["AI-Assisted Quality Assurance", "Help flag potential terminology, numeric, consistency, omission, and formatting issues."],
              ["Expert Human Review", "Maintain human accountability for context, judgment, and final quality."],
            ].map(([title, copy]) => (
              <article key={title}><span className="tech-marker" aria-hidden="true"></span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad formats-section">
        <div className="shell formats-grid">
          <div>
            <p className="eyebrow">MULTILINGUAL PRODUCTION</p>
            <h2>Technical Translation Without Breaking the Document</h2>
            <p className="section-lead">Accurate language is only part of a usable multilingual technical document. Tables, cross-references, graphics, screenshots, controlled templates, and non-Latin languages can create substantial production challenges after translation.</p>
          </div>
          <div className="format-panel">
            <div className="formats">
              {["Word", "Excel", "PowerPoint", "InDesign", "Illustrator", "FrameMaker", "XML", "PDF"].map(x => <span key={x}>{x}</span>)}
            </div>
            <ul>
              <li>Multilingual desktop publishing and text-expansion management</li>
              <li>Table, figure, caption, and graphic-text localization</li>
              <li>Template and cross-reference preservation</li>
              <li>Right-to-left and non-Latin script support</li>
              <li>Multilingual PDF production and in-context linguistic QA</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad scale-review pale">
        <div className="shell two-panel">
          <article className="editorial-panel">
            <div className="icon-box"><Icon name="scale" /></div>
            <h2>Scale Across Devices, Variants, Languages, and Markets</h2>
            <p>Global portfolios may include device families, variants, accessories, software versions, manufacturing configurations, recurring safety language, and dozens of market languages.</p>
            <p>Sesen can organize multilingual language assets at the program level so approved terminology and reusable content carry forward across related products, registrations, and revisions.</p>
            <div className="micro-list"><span>Device families</span><span>Product variants</span><span>Shared components</span><span>Software versions</span><span>New language launches</span><span>Lifecycle updates</span></div>
          </article>
          <article className="editorial-panel">
            <div className="icon-box"><Icon name="review" /></div>
            <h2>Make Global Review Easier to Control</h2>
            <p>Feedback may come from Regulatory Affairs, Quality, Engineering, Clinical, local affiliates, distributors, and in-country subject-matter experts.</p>
            <p>Sesen helps coordinate review with centralized feedback, clear change tracking, consolidated comments, terminology decisions, version control, and project-management oversight.</p>
            <div className="micro-list"><span>Centralized feedback</span><span>Change tracking</span><span>Reviewer decisions</span><span>Terminology resolution</span><span>Version control</span><span>Knowledge retention</span></div>
          </article>
        </div>
      </section>

      <section className="section-pad related-section">
        <div className="shell">
          <div className="section-head technical-left">
            <h2>Connected Services Across the Medical Device Content Lifecycle</h2>
            <p>Technical documentation connects to other regulated product content. Sesen can integrate these services within the same multilingual program.</p>
          </div>
          <div className="related-list">
            {related.map(([title, copy, href]) => (
              <a href={href} className="related-row" key={title}>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <span className="related-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad why-section pale">
        <div className="shell why-grid">
          <div className="why-intro">
            <h2>Built for Long-Term Medical Device Translation Programs</h2>
            <p className="section-lead">Technical-documentation translation requires a workflow that can preserve knowledge across documents, languages, reviewers, revisions, and years of product development.</p>
          </div>
          <div className="why-list">
            {[
              ["Specialized Medical Device Expertise", "Professional linguists support technical, clinical, regulatory, quality, software, and device-related content with the subject context each document requires."],
              ["ISO-Certified Quality Foundation", "ISO 17100, ISO 9001, and ISO 13485 support defined translation and quality-management processes."],
              ["Independent Professional Review", "Quality-sensitive workflows can include independent bilingual review by an additional qualified linguist."],
              ["Program-Level Language Assets", "Approved terminology, translation memory, references, and reviewer decisions can carry forward across related documents and revisions."],
              ["Complex File Production", "Support structured content, technical publishing formats, non-Latin languages, multilingual layout, and in-context QA."],
              ["Secure Global Delivery", "AWS-hosted infrastructure and support across 150+ languages help scale recurring international medical device programs."],
            ].map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Medical Device Technical Documentation Translation FAQ</h2>
            <p>Answers to common questions about technical files, regulatory environments, version updates, terminology, AI-enabled workflows, and multilingual production.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div className={`faq-item ${open ? "is-open" : ""}`} key={item.q}>
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span>{item.q}</span><span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div
                      className="faq-answer"
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                    >
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="shell final-cta-inner">
          <div>
            <h2>Keep Your Technical Documentation Consistent Across Languages, Markets, and Revisions</h2>
            <p>Whether you are preparing documentation for a new market, updating an existing technical file, revising clinical evidence, responding to a review request, introducing a new product variant, or maintaining a global device portfolio, Sesen can build a controlled multilingual workflow around your program.</p>
          </div>
          <div className="cta-row final-actions">
            <a className="btn btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <span aria-hidden="true">→</span></a>
            <a className="btn btn-white" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.${PAGE} {
  --sesen-med-blue: #4B6FD8;
  --sesen-med-blue-dark: #3659BB;
  --sesen-med-deep-blue: #253F8F;
  --sesen-med-pale-blue: #F5F7FF;
  --sesen-med-soft-blue: #EAF0FF;
  --sesen-med-navy: #17264D;
  --sesen-med-ink: #111827;
  --sesen-med-body: #46546D;
  --sesen-med-muted: #68758B;
  --sesen-med-border: #DDE4F2;
  --sesen-med-divider: #E9EEF8;
  --sesen-med-soft: #F7F9FD;
  --sesen-med-white: #FFFFFF;
  --sesen-med-eyebrow-dark: #C8D6FF;
  color: var(--sesen-med-body);
  background: var(--sesen-med-white);
  font-family: Inter, Arial, sans-serif;
  overflow-x: clip;
}
.${PAGE} .shell { width: min(100% - 112px, 1280px); margin: 0 auto; min-width: 0; }
.${PAGE} .section-pad { padding: 96px 0; }
.${PAGE} .pale { background: var(--sesen-med-soft); }
.${PAGE} h1, .${PAGE} h2, .${PAGE} h3 { font-family: "Inter Tight", Inter, Arial, sans-serif; color: var(--sesen-med-navy); font-weight: 500; margin: 0; }
.${PAGE} h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; max-width: 710px; }
.${PAGE} h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; }
.${PAGE} h3 { font-size: 22px; line-height: 1.3; }
.${PAGE} p, .${PAGE} li { font-size: 16px; line-height: 1.72; }
.${PAGE} p { margin: 0 0 18px; }
.${PAGE} ul { margin: 16px 0 0; padding: 0; list-style: none; }
.${PAGE} li { position: relative; padding-left: 18px; margin: 7px 0; }
.${PAGE} li::before { content: ""; position: absolute; left: 0; top: 0.72em; width: 5px; height: 5px; border-radius: 50%; background: var(--sesen-med-blue); }
.${PAGE} a { color: inherit; overflow-wrap: anywhere; }
.${PAGE} .related-row > div, .${PAGE} .reg-list article > div, .${PAGE} .workflow-step > div, .${PAGE} .tech-stack article > div, .${PAGE} .family-item > div { min-width: 0; }
.${PAGE} .eyebrow { font-family: Inter, Arial, sans-serif; font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: .15em !important; line-height: 1.35 !important; color: var(--sesen-med-blue-dark) !important; margin: 0 0 16px !important; }
.${PAGE} .eyebrow-on-dark { color: var(--sesen-med-eyebrow-dark) !important; }
.${PAGE} .section-lead { font-size: 18px; line-height: 1.67; color: #293954; }
.${PAGE} .section-head { max-width: 820px; margin-bottom: 50px; }
.${PAGE} .section-head h2 { margin-bottom: 18px; }
.${PAGE} .section-head p:last-child { margin-bottom: 0; }
.${PAGE} .compact-head { max-width: 860px; }
.${PAGE} .hero { padding: 94px 0 100px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%); }
.${PAGE} .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(380px, .92fr); gap: 54px; align-items: center; }
.${PAGE} .hero-copy, .${PAGE} .hero-visual { min-width: 0; }
.${PAGE} .hero-lead { font-size: 20px; line-height: 1.62; color: #293954; max-width: 700px; margin-top: 24px; }
.${PAGE} .hero-support { font-size: 17px; max-width: 690px; }
.${PAGE} .cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
.${PAGE} .btn { min-height: 50px; padding: 0 26px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-size: 13px; line-height: 1; font-weight: 700; letter-spacing: .04em; text-decoration: none; border: 1px solid transparent; transition: background .2s ease, border-color .2s ease, transform .2s ease; }
.${PAGE} .btn:hover { transform: translateY(-1px); }
.${PAGE} .btn:focus-visible, .${PAGE} .editorial-link:focus-visible, .${PAGE} .related-row:focus-visible, .${PAGE} .faq-item button:focus-visible { outline: 3px solid rgba(75,111,216,.3); outline-offset: 3px; }
.${PAGE} .btn-primary { background: var(--sesen-med-blue); color: #fff; }
.${PAGE} .btn-primary:hover { background: var(--sesen-med-blue-dark); }
.${PAGE} .btn-secondary { background: #fff; color: var(--sesen-med-ink); border-color: #C9D4E8; }
.${PAGE} .btn-secondary:hover { background: var(--sesen-med-soft-blue); border-color: #AFC0E3; }
.${PAGE} .btn-white { background: #fff; color: var(--sesen-med-ink); border-color: #fff; }
.${PAGE} .btn-white:hover { background: var(--sesen-med-soft-blue); }
.${PAGE} .hero-art { width: 100%; height: auto; display: block; max-width: 610px; margin-left: auto; }
.${PAGE} .trust-band { background: #fff; border-top: 1px solid var(--sesen-med-divider); border-bottom: 1px solid var(--sesen-med-divider); }
.${PAGE} .trust-grid { display: grid; grid-template-columns: repeat(5, 1fr); padding: 24px 0; }
.${PAGE} .trust-grid > div { padding: 4px 20px; min-width: 0; }
.${PAGE} .trust-grid > div:first-child { padding-left: 0; }
.${PAGE} .trust-grid > div:last-child { padding-right: 0; }
.${PAGE} .trust-grid strong { display: block; color: var(--sesen-med-navy); font-size: 16px; margin-bottom: 4px; }
.${PAGE} .trust-grid span { font-size: 13px; color: var(--sesen-med-muted); }
.${PAGE} .split-editorial { display: grid; grid-template-columns: minmax(0, .92fr) minmax(460px, 1.08fr); gap: 78px; align-items: center; }
.${PAGE} .split-editorial h2 { margin-bottom: 20px; }
.${PAGE} .connection-panel { border: 1px solid var(--sesen-med-border); border-radius: 30px; padding: 34px; background: #fff; display: grid; grid-template-columns: 180px 1fr; gap: 28px; align-items: center; }
.${PAGE} .connection-center { width: 166px; height: 166px; border-radius: 50%; background: var(--sesen-med-soft-blue); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; color: var(--sesen-med-navy); border: 1px solid #CCD8F0; }
.${PAGE} .connection-center strong { font-family: "Inter Tight", Inter, sans-serif; font-size: 22px; font-weight: 500; }
.${PAGE} .connection-center span { font-size: 12px; color: var(--sesen-med-muted); margin-top: 5px; }
.${PAGE} .connection-list { display: grid; gap: 0; }
.${PAGE} .connection-list > div { padding: 12px 0; border-bottom: 1px solid var(--sesen-med-divider); }
.${PAGE} .connection-list > div:last-child { border-bottom: 0; }
.${PAGE} .connection-list span { display: block; color: var(--sesen-med-navy); font-size: 15px; font-weight: 600; }
.${PAGE} .connection-list small { font-size: 13px; color: var(--sesen-med-muted); }
.${PAGE} .family-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 58px; border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .family-item { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 18px; padding: 34px 0 36px; border-bottom: 1px solid var(--sesen-med-border); min-width: 0; }
.${PAGE} .family-item h3 { margin-bottom: 8px; }
.${PAGE} .family-item p { margin-bottom: 8px; }
.${PAGE} .icon-box { width: 42px; height: 42px; border-radius: 12px; background: var(--sesen-med-soft-blue); color: var(--sesen-med-blue-dark); display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }
.${PAGE} .centered-desktop { text-align: center; margin: 0 auto 54px; }
.${PAGE} .centered-desktop p { margin-left: auto; margin-right: auto; }
.${PAGE} .lifecycle-track { display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); border-top: 1px solid var(--sesen-med-border); border-bottom: 1px solid var(--sesen-med-border); }
.${PAGE} .life-step { padding: 30px 20px 32px 0; position: relative; min-width: 0; }
.${PAGE} .life-step:not(:last-child)::after { content: ""; position: absolute; top: 37px; right: 12px; width: 28px; height: 1px; background: #B8C5DE; }
.${PAGE} .life-num { color: var(--sesen-med-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .12em; display: block; margin-bottom: 18px; }
.${PAGE} .life-step h3 { font-size: 20px; margin-bottom: 9px; }
.${PAGE} .life-step p { font-size: 16px; line-height: 1.62; margin: 0; color: var(--sesen-med-muted); }
.${PAGE} .regulatory-section { background: #fff; }
.${PAGE} .regulatory-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(520px,1.1fr); gap: 76px; align-items: start; }
.${PAGE} .reg-intro h2 { margin-bottom: 20px; }
.${PAGE} .editorial-link { display: inline-flex; align-items: center; gap: 8px; color: var(--sesen-med-blue-dark); text-decoration: none; font-weight: 700; margin-top: 10px; }
.${PAGE} .editorial-link:hover { text-decoration: underline; }
.${PAGE} .reg-list { border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .reg-list article { display: grid; grid-template-columns: 54px 1fr; gap: 20px; padding: 26px 0; border-bottom: 1px solid var(--sesen-med-border); }
.${PAGE} .reg-code { width: 44px; height: 44px; border-radius: 50%; background: var(--sesen-med-soft-blue); color: var(--sesen-med-blue-dark); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; }
.${PAGE} .reg-list h3 { margin-bottom: 8px; }
.${PAGE} .reg-list p { margin: 0; }
.${PAGE} .terminology-grid { display: grid; grid-template-columns: minmax(0,.95fr) minmax(470px,1.05fr); gap: 70px; align-items: center; }
.${PAGE} .terminology-grid h2 { margin-bottom: 20px; }
.${PAGE} .term-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
.${PAGE} .term-tags span { font-size: 13px; color: var(--sesen-med-ink); background: #fff; border: 1px solid var(--sesen-med-border); padding: 8px 12px; border-radius: 999px; }
.${PAGE} .term-visual { display: grid; grid-template-columns: minmax(190px, .8fr) 58px minmax(260px, 1.2fr); gap: 20px; align-items: center; min-height: 330px; padding: 26px; border: 1px solid var(--sesen-med-border); border-radius: 28px; background: #fff; }
.${PAGE} .term-source { min-height: 188px; border-radius: 24px; padding: 26px 22px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; background: var(--sesen-med-soft-blue); border: 1px solid #CCD8F0; }
.${PAGE} .term-source strong { color: var(--sesen-med-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; line-height: 1.3; font-weight: 500; }
.${PAGE} .term-source small { color: var(--sesen-med-muted); font-size: 13px; line-height: 1.55; margin-top: 8px; }
.${PAGE} .tiny-kicker { color: var(--sesen-med-blue-dark); font-size: 10px; font-weight: 700; letter-spacing: .13em; line-height: 1.4; margin-bottom: 8px; }
.${PAGE} .term-flow { display: flex; align-items: center; gap: 4px; color: var(--sesen-med-blue-dark); }
.${PAGE} .term-flow > span:first-child { height: 1px; flex: 1; background: #B7C3DD; }
.${PAGE} .term-arrow { font-size: 24px; line-height: 1; }
.${PAGE} .term-docs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
.${PAGE} .term-node { min-height: 62px; padding: 14px 16px; border-radius: 16px; color: var(--sesen-med-navy); font-size: 15px; line-height: 1.4; font-weight: 600; background: #fff; border: 1px solid var(--sesen-med-border); display: flex; align-items: center; }
.${PAGE} .revision-section { background: var(--sesen-med-navy); color: #DDE5F4; }
.${PAGE} .revision-section h2, .${PAGE} .revision-section h3 { color: #fff; }
.${PAGE} .revision-head { max-width: 880px; margin-bottom: 50px; }
.${PAGE} .revision-head h2 { margin-bottom: 18px; }
.${PAGE} .revision-head p:last-child { color: #CCD6E8; font-size: 18px; }
.${PAGE} .revision-flow { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); gap: 0; border-top: 1px solid rgba(255,255,255,.16); }
.${PAGE} .revision-step { padding: 30px 24px 12px 0; position: relative; min-width: 0; }
.${PAGE} .revision-step:not(:last-child)::after { content: ""; position: absolute; top: 43px; right: 12px; width: 26px; height: 1px; background: rgba(200,214,255,.5); }
.${PAGE} .rev-index { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--sesen-med-blue); color: #fff; font-size: 12px; font-weight: 700; margin-bottom: 18px; }
.${PAGE} .rev-label { display: block; color: var(--sesen-med-eyebrow-dark); font-size: 10px; line-height: 1.4; font-weight: 700; letter-spacing: .12em; margin-bottom: 8px; }
.${PAGE} .revision-step h3 { font-size: 20px; margin-bottom: 8px; }
.${PAGE} .revision-step p { font-size: 16px; color: #BFCADF; line-height: 1.62; margin: 0; }
.${PAGE} .workflow-grid { display: grid; grid-template-columns: minmax(320px,.72fr) minmax(560px,1.28fr); gap: 82px; align-items: start; }
.${PAGE} .workflow-intro { position: sticky; top: 30px; }
.${PAGE} .workflow-intro h2 { margin-bottom: 20px; }
.${PAGE} .workflow-list { border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .workflow-step { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 23px 0; border-bottom: 1px solid var(--sesen-med-border); }
.${PAGE} .workflow-step > span { color: var(--sesen-med-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .12em; padding-top: 4px; }
.${PAGE} .workflow-step h3 { font-size: 20px; margin-bottom: 6px; }
.${PAGE} .workflow-step p { margin: 0; }
.${PAGE} .tech-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(520px,1.1fr); gap: 74px; align-items: start; }
.${PAGE} .tech-grid h2 { margin-bottom: 20px; }
.${PAGE} .tech-stack { background: #fff; border: 1px solid var(--sesen-med-border); border-radius: 28px; padding: 12px 30px; }
.${PAGE} .tech-stack article { display: grid; grid-template-columns: 18px 1fr; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--sesen-med-divider); }
.${PAGE} .tech-stack article:last-child { border-bottom: 0; }
.${PAGE} .tech-marker { width: 8px; height: 8px; border-radius: 50%; background: var(--sesen-med-blue); display: block; margin-top: 8px; }
.${PAGE} .tech-stack h3 { font-size: 20px; margin-bottom: 4px; }
.${PAGE} .tech-stack p { margin: 0; font-size: 16px; }
.${PAGE} .formats-grid { display: grid; grid-template-columns: minmax(0,.84fr) minmax(520px,1.16fr); gap: 74px; align-items: start; }
.${PAGE} .formats-grid h2 { margin-bottom: 20px; }
.${PAGE} .format-panel { border-left: 2px solid var(--sesen-med-blue); padding-left: 34px; }
.${PAGE} .formats { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
.${PAGE} .formats span { padding: 9px 13px; border-radius: 12px; background: var(--sesen-med-soft); color: var(--sesen-med-navy); font-size: 14px; font-weight: 600; border: 1px solid var(--sesen-med-divider); }
.${PAGE} .two-panel { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px; }
.${PAGE} .editorial-panel { background: #fff; border: 1px solid var(--sesen-med-border); border-radius: 28px; padding: 38px; }
.${PAGE} .editorial-panel .icon-box { margin-bottom: 22px; }
.${PAGE} .editorial-panel h2 { font-size: 30px; margin-bottom: 18px; }
.${PAGE} .micro-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 26px; }
.${PAGE} .micro-list span { font-size: 13px; padding: 8px 11px; border-radius: 999px; background: var(--sesen-med-soft); color: var(--sesen-med-ink); }
.${PAGE} .related-list { border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .related-row { display: grid; grid-template-columns: 1fr 44px; gap: 28px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--sesen-med-border); text-decoration: none; }
.${PAGE} .related-row h3 { margin-bottom: 5px; transition: color .2s ease; }
.${PAGE} .related-row p { margin: 0; max-width: 840px; }
.${PAGE} .related-arrow { width: 38px; height: 38px; border-radius: 50%; background: var(--sesen-med-soft-blue); color: var(--sesen-med-blue-dark); display: flex; align-items: center; justify-content: center; font-size: 20px; transition: transform .2s ease; }
.${PAGE} .related-row:hover h3 { color: var(--sesen-med-blue-dark); }
.${PAGE} .related-row:hover .related-arrow { transform: translateX(3px); }
.${PAGE} .why-grid { display: grid; grid-template-columns: minmax(300px,.72fr) minmax(590px,1.28fr); gap: 78px; align-items: start; }
.${PAGE} .why-intro h2 { margin-bottom: 20px; }
.${PAGE} .why-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .why-list article { padding: 25px 28px 25px 0; border-bottom: 1px solid var(--sesen-med-border); }
.${PAGE} .why-list article:nth-child(odd) { padding-right: 32px; }
.${PAGE} .why-list article:nth-child(even) { padding-left: 32px; border-left: 1px solid var(--sesen-med-border); }
.${PAGE} .why-list h3 { font-size: 20px; margin-bottom: 7px; }
.${PAGE} .why-list p { margin: 0; font-size: 16px; }
.${PAGE} .faq-grid { display: grid; grid-template-columns: minmax(280px,.65fr) minmax(600px,1.35fr); gap: 80px; align-items: start; }
.${PAGE} .faq-intro { position: sticky; top: 30px; }
.${PAGE} .faq-intro h2 { margin-bottom: 18px; }
.${PAGE} .faq-list { border-top: 1px solid var(--sesen-med-border); }
.${PAGE} .faq-item { border-bottom: 1px solid var(--sesen-med-border); }
.${PAGE} .faq-item button { width: 100%; border: 0; background: transparent; padding: 22px 0; display: grid; grid-template-columns: 1fr 38px; gap: 22px; align-items: center; text-align: left; color: var(--sesen-med-navy); font: 600 17px/1.45 Inter, Arial, sans-serif; cursor: pointer; }
.${PAGE} .faq-toggle { width: 32px; height: 32px; border-radius: 50%; background: var(--sesen-med-soft-blue); color: var(--sesen-med-blue-dark); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 400; }
.${PAGE} .faq-answer { padding: 0 56px 23px 0; }
.${PAGE} .faq-answer p { margin: 0; }
.${PAGE} .final-cta { background: linear-gradient(135deg, #17264D 0%, #253F8F 100%); color: #DDE5F4; }
.${PAGE} .final-cta h2 { color: #fff; max-width: 850px; margin-bottom: 18px; }
.${PAGE} .final-cta p { max-width: 880px; font-size: 18px; color: #D4DEF0; }
.${PAGE} .final-cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 52px; align-items: end; }
.${PAGE} .final-actions { flex-direction: column; align-items: stretch; margin-top: 0; min-width: 232px; }

@media (max-width: 1120px) {
  .${PAGE} .shell { width: min(100% - 80px, 1280px); }
  .${PAGE} .hero-grid { grid-template-columns: minmax(0,1fr) minmax(330px,.82fr); gap: 34px; }
  .${PAGE} .split-editorial, .${PAGE} .regulatory-grid, .${PAGE} .terminology-grid, .${PAGE} .tech-grid, .${PAGE} .formats-grid { gap: 46px; }
  .${PAGE} .connection-panel { grid-template-columns: 145px 1fr; padding: 28px; }
  .${PAGE} .connection-center { width: 138px; height: 138px; }
  .${PAGE} .lifecycle-track { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .${PAGE} .life-step:nth-child(3)::after, .${PAGE} .life-step:nth-child(6)::after { display: none; }
  .${PAGE} .revision-flow { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .${PAGE} .revision-step:nth-child(3)::after, .${PAGE} .revision-step:nth-child(6)::after { display: none; }
}

@media (max-width: 900px) {
  .${PAGE} .shell { width: calc(100% - 58px); }
  .${PAGE} .section-pad { padding: 78px 0; }
  .${PAGE} .hero { padding: 78px 0 84px; }
  .${PAGE} .hero-grid, .${PAGE} .split-editorial, .${PAGE} .regulatory-grid, .${PAGE} .terminology-grid, .${PAGE} .workflow-grid, .${PAGE} .tech-grid, .${PAGE} .formats-grid, .${PAGE} .why-grid, .${PAGE} .faq-grid, .${PAGE} .final-cta-inner { grid-template-columns: 1fr; }
  .${PAGE} .hero-grid { gap: 42px; }
  .${PAGE} .hero-art { max-width: 560px; margin: 0 auto; }
  .${PAGE} .trust-grid { grid-template-columns: repeat(3,1fr); row-gap: 20px; }
  .${PAGE} .trust-grid > div { padding: 4px 14px; }
  .${PAGE} .family-grid { gap: 0 34px; }
  .${PAGE} .reg-list { margin-top: 6px; }
  .${PAGE} .workflow-intro, .${PAGE} .faq-intro { position: static; }
  .${PAGE} .workflow-list { margin-top: 10px; }
  .${PAGE} .two-panel { grid-template-columns: 1fr; }
  .${PAGE} .final-actions { flex-direction: row; flex-wrap: wrap; min-width: 0; }
}

@media (max-width: 768px) {
  .${PAGE} .shell { width: calc(100% - 56px); }
  .${PAGE} h1 { font-size: 42px; }
  .${PAGE} h2 { font-size: 32px; }
  .${PAGE} .family-grid { grid-template-columns: 1fr; }
  .${PAGE} .trust-grid { grid-template-columns: repeat(2,1fr); }
  .${PAGE} .connection-panel { grid-template-columns: 1fr; }
  .${PAGE} .connection-center { margin: 0 auto; }
  .${PAGE} .lifecycle-track, .${PAGE} .revision-flow { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .${PAGE} .life-step:nth-child(odd)::after, .${PAGE} .revision-step:nth-child(odd)::after { display: block; }
  .${PAGE} .life-step:nth-child(even)::after, .${PAGE} .revision-step:nth-child(even)::after { display: none; }
  .${PAGE} .term-visual { min-height: 360px; max-width: 590px; width: 100%; margin: 10px auto 0; }
  .${PAGE} .why-list { grid-template-columns: 1fr; }
  .${PAGE} .why-list article:nth-child(even) { padding-left: 0; border-left: 0; }
  .${PAGE} .why-list article:nth-child(odd) { padding-right: 0; }
  .${PAGE} .term-visual { grid-template-columns: minmax(170px,.8fr) 42px minmax(220px,1.2fr); gap: 14px; padding: 22px; }
}

@media (max-width: 560px) {
  .${PAGE} .shell { width: calc(100% - 40px); }
  .${PAGE} .section-pad { padding: 68px 0; }
  .${PAGE} .hero { padding: 66px 0 72px; }
  .${PAGE} h1 { font-size: 42px; text-align: center; }
  .${PAGE} h2 { font-size: 32px; }
  .${PAGE} h3 { font-size: 21px; }
  .${PAGE} p, .${PAGE} li { font-size: 16px; }
  .${PAGE} .hero-copy .eyebrow { text-align: center; }
  .${PAGE} .hero-lead { font-size: 18px; }
  .${PAGE} .hero-support { font-size: 16px; }
  .${PAGE} .cta-row { flex-direction: column; }
  .${PAGE} .btn { width: 100%; box-sizing: border-box; white-space: normal; text-align: center; }
  .${PAGE} .hero-art { width: 100%; max-width: 430px; }
  .${PAGE} .trust-grid { grid-template-columns: 1fr 1fr; padding: 20px 0; }
  .${PAGE} .trust-grid > div { padding: 7px 8px 7px 0; }
  .${PAGE} .trust-grid strong { font-size: 15px; }
  .${PAGE} .section-head:not(.technical-left), .${PAGE} .centered-desktop { text-align: center; }
  .${PAGE} .technical-left, .${PAGE} .timeline-head { text-align: left !important; }
  .${PAGE} .section-head p, .${PAGE} .centered-desktop p { text-align: left; }
  .${PAGE} .connected .eyebrow, .${PAGE} .connected h2 { text-align: center; }
  .${PAGE} .connected p { text-align: left; }
  .${PAGE} .family-item { grid-template-columns: 42px 1fr; gap: 14px; }
  .${PAGE} .lifecycle .section-head p { text-align: left; }
  .${PAGE} .lifecycle-track { grid-template-columns: 1fr; }
  .${PAGE} .life-step { padding: 25px 0; border-bottom: 1px solid var(--sesen-med-border); }
  .${PAGE} .life-step:not(:last-child)::after { display: none !important; }
  .${PAGE} .regulatory-section .reg-intro, .${PAGE} .workflow-intro, .${PAGE} .faq-intro { text-align: left; }
  .${PAGE} .terminology-grid > div:first-child { text-align: left; }
  .${PAGE} .term-visual { grid-template-columns: 1fr; min-height: 0; padding: 22px; }
  .${PAGE} .term-source { min-height: 0; }
  .${PAGE} .term-flow { display: none; }
  .${PAGE} .term-docs { grid-template-columns: 1fr 1fr; }
  .${PAGE} .term-node { min-height: 54px; }
  .${PAGE} .revision-head { text-align: left; }
  .${PAGE} .revision-flow { grid-template-columns: 1fr; }
  .${PAGE} .revision-step { padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.12); }
  .${PAGE} .revision-step:not(:last-child)::after { display: none !important; }
  .${PAGE} .workflow-step { grid-template-columns: 42px 1fr; gap: 12px; }
  .${PAGE} .tech-section > .shell > div:first-child, .${PAGE} .formats-section > .shell > div:first-child { text-align: left; }
  .${PAGE} .tech-stack { padding: 10px 20px; }
  .${PAGE} .format-panel { padding-left: 22px; }
  .${PAGE} .editorial-panel { padding: 30px 24px; }
  .${PAGE} .editorial-panel h2 { font-size: 28px; }
  .${PAGE} .related-row { grid-template-columns: minmax(0,1fr) 38px; gap: 12px; }
  .${PAGE} .related-arrow { width: 36px; height: 36px; margin-top: 0; }
  .${PAGE} .why-intro { text-align: center; }
  .${PAGE} .why-intro p { text-align: left; }
  .${PAGE} .faq-answer { padding-right: 0; }
  .${PAGE} .final-cta-inner { text-align: left; }
  .${PAGE} .final-actions { flex-direction: column; }
}

@media (max-width: 360px) {
  .${PAGE} h1 { font-size: 38px; }
  .${PAGE} h2 { font-size: 30px; }
  .${PAGE} .hero-lead { font-size: 17px; }
  .${PAGE} .trust-grid { grid-template-columns: 1fr; }
  .${PAGE} .family-item { grid-template-columns: 1fr; }
  .${PAGE} .term-docs { grid-template-columns: 1fr; }
  .${PAGE} .connection-panel { padding: 22px; }
  .${PAGE} .reg-list article { grid-template-columns: 44px 1fr; gap: 14px; }
  .${PAGE} .workflow-step { grid-template-columns: 34px minmax(0,1fr); }
  .${PAGE} .related-row { grid-template-columns: minmax(0,1fr) 36px; }
}

@media (prefers-reduced-motion: reduce) {
  .${PAGE} .btn, .${PAGE} .related-arrow, .${PAGE} .related-row h3 { transition: none; }
}
`;
