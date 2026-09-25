import React from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";

const legalServices = [
  {
    title: "Deposition Interpreting",
    text:
      "Professional interpreting for plaintiffs, defendants, experts, corporate representatives, and third-party witnesses in remote and in-person depositions, with matching based on language, dialect, legal context, and subject matter.",
    bullets: [
      "Fact and expert witness depositions",
      "Corporate representative depositions",
      "Remote and video depositions",
      "Technical and subject-matter testimony",
    ],
    icon: "deposition",
    featured: true,
  },
  {
    title: "Witness Interviews & Case Preparation",
    text:
      "Interpreter support for witness interviews, fact development, witness preparation, and other attorney-directed conversations involving multilingual participants.",
    icon: "witness",
  },
  {
    title: "Attorney-Client Interpreting",
    text:
      "Clear multilingual communication for consultations, client intake, case updates, strategy discussions, proceeding preparation, and other attorney-client meetings.",
    icon: "client",
  },
  {
    title: "Arbitration & Mediation Interpreting",
    text:
      "Professional interpreting for arbitration hearings, witness testimony, mediation, settlement conferences, and international dispute-resolution proceedings.",
    icon: "arbitration",
    link: {
      label: "Arbitration Translation Services",
      href: "https://www.stepes.com/arbitration-translation-services/",
    },
  },
  {
    title: "Hearings & Legal Proceedings",
    text:
      "Interpreters for court hearings, administrative proceedings, regulatory matters, trials, conferences, and other formal legal settings, matched to stated proceeding requirements.",
    icon: "hearing",
  },
  {
    title: "Internal Investigation Interpreting",
    text:
      "Sensitive multilingual support for compliance interviews, ethics investigations, employee interviews, whistleblower matters, regulatory inquiries, and cross-border fact finding.",
    icon: "investigation",
    link: {
      label: "Investigation Translation Services",
      href: "https://www.stepes.com/investigation-translation-services/",
    },
  },
];

const interpreterMatrix = [
  [
    "Depositions",
    "Deposition experience, witness dialect, legal and technical terminology, subject matter, consecutive mode, remote or on-site delivery.",
  ],
  [
    "Witness Interviews",
    "Regional language, interview setting, neutrality, case terminology, and accurate question-and-answer communication.",
  ],
  [
    "Attorney-Client Meetings",
    "Legal terminology, communication setting, confidentiality requirements, regional language, and remote or in-person format.",
  ],
  [
    "Arbitration & Mediation",
    "Dispute-resolution experience, legal and technical subject knowledge, and consecutive or simultaneous interpreting requirements.",
  ],
  [
    "Court & Hearing Settings",
    "Applicable credential requirements, jurisdiction, language, proceeding type, and courtroom or hearing experience.",
  ],
  [
    "Internal Investigations",
    "Interview experience, impartiality, confidentiality, regional language, and employment, compliance, financial, or technical terminology.",
  ],
  [
    "Remote Legal Proceedings",
    "Legal interpreting experience, video or phone delivery skills, platform readiness, and technical preparation.",
  ],
];

const qualificationItems = [
  {
    title: "Legal Interpreting Experience",
    text:
      "Legal settings require interpreters who can handle specialized terminology, structured questioning, formal communication, and changes in register without altering meaning.",
    icon: "briefcase",
  },
  {
    title: "Language & Dialect Fit",
    text:
      "Country, region, dialect, vocabulary, accent, and participant preferences can affect understanding. Stepes considers regional language where it matters to the engagement.",
    icon: "language",
  },
  {
    title: "Credential & Proceeding Requirements",
    text:
      "When a court, tribunal, agency, or client specifies qualifications, certifications, clearances, or prior experience, those requirements are incorporated into interpreter selection.",
    icon: "credential",
  },
];

const precisionItems = [
  {
    title: "Dialect and Regional Language",
    text:
      "Languages can vary significantly by country and region. For testimony, interviews, and detailed legal conversations, regional vocabulary, pronunciation, idiom, and usage can affect understanding.",
  },
  {
    title: "Legal Register and Spoken Meaning",
    text:
      "Legal conversations can move between formal terminology and everyday speech. Professional interpreters preserve meaning, tone, register, and relevant linguistic detail without becoming an advocate or advisor.",
  },
  {
    title: "Legal and Subject-Matter Terminology",
    text:
      "Many matters combine legal language with medicine, finance, engineering, intellectual property, employment, insurance, life sciences, technology, or other specialized fields.",
  },
];

const modes = [
  {
    title: "Consecutive Interpreting",
    text:
      "The speaker pauses at appropriate intervals while the interpreter renders each segment into the other language.",
    uses: "Commonly suited to depositions, witness interviews, attorney-client conversations, investigations, and question-and-answer sessions.",
    icon: "consecutive",
  },
  {
    title: "Simultaneous Interpreting",
    text:
      "The interpreter communicates the message in another language with minimal delay while the speaker continues.",
    uses: "Can support hearings, arbitration proceedings, conferences, and other settings involving longer uninterrupted speech.",
    icon: "simultaneous",
  },
  {
    title: "Sight Translation",
    text:
      "The interpreter orally renders written content into another language during a live interaction.",
    uses: "Useful when a participant must understand a document, passage, instruction, exhibit, form, or other written information during a meeting or proceeding.",
    icon: "document",
  },
];

const preparationItems = [
  ["Participant & Matter Information", "Names, roles, organizations, locations, and the general nature of the engagement."],
  ["Legal & Case Terminology", "Defined terms, party names, product names, acronyms, approved terminology, and frequently used legal expressions."],
  ["Subject-Matter References", "Technical, medical, financial, scientific, engineering, regulatory, or other specialized reference material where appropriate."],
  ["Proceeding Information", "Whether the engagement is a deposition, interview, consultation, investigation, arbitration, hearing, or another legal interaction."],
  ["Language & Dialect Requirements", "The language and, when known, the participant's country, region, or dialect."],
  ["Credential or Client Requirements", "Requested qualifications, conflict restrictions, security procedures, technical requirements, or other assignment criteria."],
];

const workflow = [
  {
    title: "Define the Proceeding",
    text:
      "Share the proceeding or meeting type, language, date, time, location or remote format, expected duration, and participant requirements.",
  },
  {
    title: "Identify Interpreter Requirements",
    text:
      "We review language and dialect, legal setting, subject matter, interpreting mode, requested qualifications, delivery format, and client-specific criteria.",
  },
  {
    title: "Match the Interpreter",
    text:
      "Stepes identifies an interpreter based on the combined requirements of the engagement, including regional language, legal experience, subject expertise, format, and availability.",
  },
  {
    title: "Prepare for the Session",
    text:
      "Where appropriate, approved terminology, participant information, reference material, and technical requirements can be made available for preparation.",
  },
  {
    title: "Deliver the Interpreting Session",
    text:
      "The interpreter facilitates real-time multilingual communication professionally and impartially so participants can focus on the legal conversation itself.",
  },
];

const standards = [
  {
    title: "Confidentiality",
    text:
      "Assignments can be coordinated around client confidentiality requirements, controlled access to appropriate preparation materials, and nondisclosure requirements when requested.",
    icon: "lock",
  },
  {
    title: "Impartiality",
    text:
      "The interpreter facilitates communication rather than advocating for a participant, providing legal advice, or altering the substance of the conversation.",
    icon: "balance",
  },
  {
    title: "Accuracy & Completeness",
    text:
      "Professional legal interpreting focuses on conveying communication accurately while preserving meaning, tone, register, and relevant linguistic detail rather than summarizing.",
    icon: "accuracy",
  },
  {
    title: "Professional Conduct",
    text:
      "Interpreters work within appropriate professional boundaries, represent qualifications accurately, and request clarification when language cannot be heard or understood reliably.",
    icon: "professional",
  },
  {
    title: "Conflict Considerations",
    text:
      "Where a client, court, investigation, or proceeding establishes conflict requirements or assignment restrictions, those requirements can be considered during selection.",
    icon: "conflict",
  },
];

const subjectAreas = [
  ["Commercial & Corporate Disputes", "Contracts, transactions, damages, financial records, operations, and business relationships."],
  ["Employment & Workplace Matters", "Employee interviews, investigations, HR-related disputes, policies, disciplinary matters, and compliance discussions."],
  ["Intellectual Property", "Patent, trademark, copyright, licensing, product, engineering, and technology-related proceedings."],
  ["Life Sciences & Healthcare", "Medical terminology, pharmaceuticals, clinical research, medical devices, healthcare records, and scientific subject matter."],
  ["Financial Services & Insurance", "Banking, investments, accounting, claims, policies, financial records, fraud, and regulatory matters."],
  ["Technology", "Software, cybersecurity, data, artificial intelligence, telecommunications, digital products, and technical operations."],
  ["Manufacturing & Engineering", "Industrial processes, equipment, specifications, quality issues, product design, supply chains, and technical evidence."],
  ["Regulatory & Compliance", "Internal reviews, regulatory inquiries, compliance investigations, policy requirements, and cross-border organizational issues."],
];

const relatedServices = [
  {
    title: "Legal Translation Services",
    text: "Contracts, agreements, disputes, compliance materials, intellectual property, official documents, and other legal content.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Law Firm Translation Services",
    text: "Translation and interpreting support for litigation, transactions, international work, client matters, and legal operations.",
    href: "https://www.stepes.com/law-firm-translation-services/",
  },
  {
    title: "Litigation Translation Services",
    text: "Discovery materials, deposition transcripts, witness statements, pleadings, expert reports, exhibits, judgments, and related litigation content.",
    href: "https://www.stepes.com/litigation-translation-services/",
  },
  {
    title: "Arbitration Translation Services",
    text: "Submissions, witness evidence, expert materials, exhibits, procedural documents, awards, and live multilingual support.",
    href: "https://www.stepes.com/arbitration-translation-services/",
  },
  {
    title: "Investigation Translation Services",
    text: "Communications, records, interview materials, reports, policies, and other content used in internal and cross-border investigations.",
    href: "https://www.stepes.com/investigation-translation-services/",
  },
  {
    title: "Court Document Translation Services",
    text: "Pleadings, orders, judgments, declarations, exhibits, supporting records, and other court-related documents.",
    href: "https://www.stepes.com/court-document-translation-services/",
  },
  {
    title: "Certified Translation Services",
    text: "Certified translation deliverables for documents when a certification statement is requested for the intended use.",
    href: "https://www.stepes.com/certified-translation-services/",
  },
];

const faqs = [
  {
    q: "What are legal interpreting services?",
    a: "Legal interpreting services provide real-time language support for people participating in legal conversations or proceedings who do not communicate most effectively in the same language. Legal interpreting can support depositions, witness interviews, attorney-client meetings, investigations, arbitration, mediation, hearings, court proceedings, compliance discussions, and other legal interactions.",
  },
  {
    q: "What types of legal proceedings does Stepes support?",
    a: "Stepes supports legal interpreting for depositions, witness interviews, attorney-client consultations, case preparation, internal investigations, arbitration, mediation, settlement discussions, hearings, corporate legal matters, compliance interviews, and other multilingual legal interactions. Availability depends on language, dialect, location, subject matter, delivery format, requested qualifications, timing, and proceeding type.",
  },
  {
    q: "Does Stepes provide deposition interpreters?",
    a: "Yes. Stepes provides professional deposition interpreting for in-person and remote depositions involving fact witnesses, expert witnesses, corporate representatives, plaintiffs, defendants, and other participants. Interpreter matching can consider language and dialect, legal setting, technical subject matter, interpreting mode, delivery format, and requested qualifications.",
  },
  {
    q: "Can Stepes provide interpreters for remote depositions?",
    a: "Yes. Stepes provides remote legal interpreting for video depositions and other virtual legal interactions. When scheduling, provide the languages, participant locations, expected duration, video platform or technical environment, subject matter, dialect requirements, and requested interpreter qualifications.",
  },
  {
    q: "Does a legal interpreter need to be court-certified?",
    a: "Requirements depend on the jurisdiction, court, language, type of proceeding, and applicable rules. Not every legal interaction requires the same interpreter credential. If a court, tribunal, agency, client, or proceeding requires a specific certification or qualification, provide that requirement when requesting the assignment so Stepes can incorporate it into interpreter matching. Stepes provides language services and does not determine qualification requirements established by a court or other authority.",
  },
  {
    q: "What is the difference between consecutive and simultaneous legal interpreting?",
    a: "In consecutive interpreting, a speaker pauses while the interpreter renders each segment into the other language. This is commonly appropriate for depositions, witness interviews, attorney-client meetings, and investigations. In simultaneous interpreting, the interpreter communicates the message in another language with minimal delay while the speaker continues, which may suit certain hearings, arbitration proceedings, conferences, or similar settings.",
  },
  {
    q: "Can Stepes match a legal interpreter by dialect or country?",
    a: "Yes. Where relevant and available, Stepes can consider country, region, dialect, and participant language preferences in addition to the language pair. This can be especially important for testimony, interviews, investigations, and other detailed conversations where regional vocabulary, pronunciation, idiom, or usage could affect understanding.",
  },
  {
    q: "How should we prepare for a legal interpreting assignment?",
    a: "Provide the engagement type, languages, dialect or regional requirements, date, time, expected duration, location or remote format, subject matter, participant information, and requested interpreter qualifications. Where appropriate and authorized, terminology, proper names, acronyms, approved glossaries, and relevant background information can help the interpreter prepare.",
  },
  {
    q: "Are legal interpreting assignments confidential?",
    a: "Legal interpreting often involves sensitive information. Stepes can coordinate assignments around client confidentiality requirements, appropriate controls on preparation materials, and nondisclosure requirements when requested. Clients should communicate matter-specific security, confidentiality, conflict, or handling requirements during scheduling. Questions about attorney-client privilege or other legal protections should be addressed by the appropriate legal professionals.",
  },
  {
    q: "Can Stepes support multilingual internal investigations?",
    a: "Yes. Stepes provides professional interpreters for internal investigations, compliance interviews, employee interviews, whistleblower matters, ethics investigations, workplace matters, regulatory inquiries, and other cross-border fact-finding activities.",
  },
  {
    q: "Does Stepes provide both on-site and remote legal interpreting?",
    a: "Yes. Stepes supports both remote and on-site legal interpreting. Remote interpreting can be provided by video or phone where appropriate, while on-site interpreters can support scheduled depositions, meetings, investigations, arbitration proceedings, hearings, and other in-person legal settings.",
  },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    deposition: <><path d="M5 4.5h14v15H5z"/><path d="M8 8h8M8 11.5h8M8 15h5"/><path d="M3 7.5v9M21 7.5v9"/></>,
    witness: <><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.7-3.6 2.6-5.5 5.5-5.5s4.8 1.9 5.5 5.5"/><path d="M15.5 8.5h5M18 6v5"/></>,
    client: <><circle cx="7.5" cy="8" r="2.7"/><circle cx="16.5" cy="8" r="2.7"/><path d="M2.8 19c.5-3.4 2.1-5.1 4.7-5.1 1.4 0 2.5.5 3.3 1.4M21.2 19c-.5-3.4-2.1-5.1-4.7-5.1-1.4 0-2.5.5-3.3 1.4"/><path d="M10 19h4"/></>,
    arbitration: <><path d="M12 3v18M5 6h14"/><path d="M7 6 3.5 13h7L7 6ZM17 6l-3.5 7h7L17 6Z"/><path d="M8 21h8"/></>,
    hearing: <><path d="M3 20h18M5 18h14M7 18V9h10v9"/><path d="M6 9l6-5 6 5M10 12v4M14 12v4"/></>,
    investigation: <><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/><path d="M8 10.5h5M10.5 8v5"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2"/></>,
    language: <><path d="M4 5h10M9 3v2M6 8c1.1 2.4 3 4.3 5.5 5.7M12 8c-1.4 3.5-3.7 6.1-7 7.7"/><path d="m15 19 3-8 3 8M16.2 16h3.6"/></>,
    credential: <><circle cx="12" cy="9" r="5"/><path d="m9 14-1 7 4-2 4 2-1-7"/><path d="m10 9 1.2 1.2L14 7.5"/></>,
    consecutive: <><path d="M4 6h9v6H8l-3.5 3V12H4z"/><path d="M11 13h9v6h-4l-3.5 3v-3H11z"/></>,
    simultaneous: <><path d="M5 12a7 7 0 0 1 14 0"/><path d="M5 12v5h3v-5H5ZM16 12v5h3v-5h-3Z"/><path d="M9 20h6"/></>,
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12h6M9 15h6"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    balance: <><path d="M12 3v18M5 6h14"/><path d="M7 6 4 13h6L7 6ZM17 6l-3 7h6l-3-7Z"/><path d="M8 21h8"/></>,
    accuracy: <><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    professional: <><circle cx="12" cy="8" r="3"/><path d="M5 20c.7-4.2 3.1-6.3 7-6.3s6.3 2.1 7 6.3"/><path d="m9.5 15.5 2.5 2 2.5-2"/></>,
    conflict: <><path d="M5 5h6v6H5zM13 13h6v6h-6z"/><path d="m11 8 4-4M9 13l-4 4M15 11l4-4"/></>,
    remote: <><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M8 9h3M8 12h6"/></>,
    onsite: <><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    lawfirm: <><path d="M4 20h16M6 18h12V8H6z"/><path d="M5 8l7-5 7 5M9 11v4M15 11v4"/></>,
    corporate: <><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3h8v3M8 10h2M14 10h2M8 14h2M14 14h2M11 20v-3h2v3"/></>,
  };

  return <svg {...common}>{paths[name] || paths.accuracy}</svg>;
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 500" role="presentation">
        <defs>
          <linearGradient id="paperTint" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#f6f3f4" />
          </linearGradient>
        </defs>
        <rect x="60" y="50" width="440" height="400" rx="34" fill="#f8f6f7" />
        <rect x="96" y="88" width="185" height="270" rx="20" fill="url(#paperTint)" stroke="#d8d2d5" />
        <rect x="279" y="142" width="182" height="216" rx="20" fill="#fff" stroke="#d8d2d5" />
        <circle cx="184" cy="162" r="36" fill="#efe9ec" stroke="#4b4649" strokeWidth="2" />
        <path d="M144 236c8-36 21-54 40-54s32 18 40 54" fill="none" stroke="#4b4649" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="370" cy="202" r="34" fill="#efe9ec" stroke="#4b4649" strokeWidth="2" />
        <path d="M334 270c7-34 19-51 36-51s29 17 36 51" fill="none" stroke="#4b4649" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M253 162c18-18 36-26 54-24" fill="none" stroke="#a71954" strokeWidth="4" strokeLinecap="round" />
        <path d="M307 138l-8-6M307 138l-4 10" fill="none" stroke="#a71954" strokeWidth="4" strokeLinecap="round" />
        <path d="M307 224c-17 18-34 26-52 24" fill="none" stroke="#a71954" strokeWidth="4" strokeLinecap="round" />
        <path d="M255 248l8 6M255 248l4-10" fill="none" stroke="#a71954" strokeWidth="4" strokeLinecap="round" />
        <rect x="130" y="292" width="118" height="10" rx="5" fill="#ccc4c8" />
        <rect x="130" y="315" width="86" height="10" rx="5" fill="#d8d2d5" />
        <rect x="310" y="297" width="112" height="10" rx="5" fill="#ccc4c8" />
        <rect x="310" y="320" width="78" height="10" rx="5" fill="#d8d2d5" />
        <rect x="146" y="384" width="268" height="28" rx="14" fill="#fdf2f7" />
        <circle cx="174" cy="398" r="5" fill="#c11d63" />
        <rect x="189" y="394" width="74" height="8" rx="4" fill="#7e777b" />
        <circle cx="292" cy="398" r="5" fill="#c11d63" />
        <rect x="307" y="394" width="78" height="8" rx="4" fill="#7e777b" />
      </svg>
    </div>
  );
}

export default function LegalInterpretingServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Legal Interpreting Services</h1>
            <p className="hero-lead">
              Professional legal interpreters for depositions, witness interviews, attorney-client meetings, investigations, arbitration, hearings, and other multilingual legal proceedings. Stepes provides on-site and remote legal interpreting in 100+ languages, with interpreters matched to the language, dialect, legal setting, subject matter, and specific requirements of each engagement.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={QUOTE_URL}>Get a Quote <Arrow /></a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="relevance-band">
        <div className="container relevance-grid">
          <div><strong>100+ Languages</strong><span>Global language coverage</span></div>
          <div><strong>On-Site & Remote</strong><span>Flexible legal delivery</span></div>
          <div><strong>Legal + Domain Expertise</strong><span>Matched to matter context</span></div>
          <div><strong>Credential Matching</strong><span>Based on stated requirements</span></div>
          <div><strong>Confidential Workflows</strong><span>For sensitive legal matters</span></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split-intro">
          <div className="section-heading editorial-left">
            <div className="eyebrow">HIGH-STAKES COMMUNICATION</div>
            <h2>Professional Interpreting for Legal Communication</h2>
          </div>
          <div className="intro-copy">
            <p className="body-large">
              Legal matters depend on precise communication. A question, qualification, technical term, regional expression, or subtle change in meaning can affect how testimony, instructions, facts, and positions are understood.
            </p>
            <p>
              Stepes provides professional legal interpreting services for law firms, corporate legal departments, compliance teams, and other organizations that need to communicate accurately across languages in real time. We support multilingual legal interactions throughout the matter lifecycle, from initial client consultations and witness interviews to depositions, internal investigations, arbitration, mediation, hearings, and other formal proceedings.
            </p>
            <p>
              Effective legal interpreting requires more than bilingual fluency. Interpreters must listen carefully, preserve meaning and register, understand legal and subject-specific terminology, manage the flow of communication professionally, and remain impartial throughout the engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="heading-group centered">
            <div className="eyebrow">LEGAL MATTER LIFECYCLE</div>
            <h2>Legal Interpreting for Every Stage of a Matter</h2>
            <p>
              Multilingual communication can arise long before a hearing and continue throughout discovery, investigation, dispute resolution, and final proceedings.
            </p>
          </div>

          <div className="service-layout">
            <article className="service-featured">
              <div className="icon-box"><Icon name="deposition" /></div>
              <h3>{legalServices[0].title}</h3>
              <p>{legalServices[0].text}</p>
              <ul className="quiet-list">
                {legalServices[0].bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="small-note">
                Advance scheduling is recommended for complex matters, specialized dialects, technical subject areas, and credential-specific requests.
              </p>
            </article>

            <div className="service-rows">
              {legalServices.slice(1).map((service) => (
                <article className="service-row" key={service.title}>
                  <div className="icon-box compact"><Icon name={service.icon} /></div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    {service.link && (
                      <a className="text-link" href={service.link.href}>{service.link.label} <Arrow /></a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="heading-group dark-heading">
            <div className="eyebrow eyebrow-dark">INTERPRETER SELECTION</div>
            <h2>The Right Interpreter for the Legal Setting</h2>
            <p>
              A deposition, internal investigation, arbitration hearing, attorney-client meeting, and court proceeding can each place different demands on the interpreter. Stepes evaluates the communication environment and assignment requirements rather than matching on language pair alone.
            </p>
          </div>

          <div className="matrix" role="table" aria-label="Legal setting and interpreter selection considerations">
            <div className="matrix-head" role="row">
              <div role="columnheader">Legal Setting</div>
              <div role="columnheader">Interpreter Selection Considerations</div>
            </div>
            {interpreterMatrix.map(([setting, criteria]) => (
              <div className="matrix-row" role="row" key={setting}>
                <div className="matrix-label" role="cell">{setting}</div>
                <div role="cell">{criteria}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="heading-group centered">
            <h2>Interpreter Qualifications Matched to Your Requirements</h2>
            <p>
              Different courts, tribunals, jurisdictions, clients, and proceedings may establish different qualification or credential requirements. Stepes works from the requirements of the matter rather than applying one generic standard to every assignment.
            </p>
          </div>
          <div className="three-column editorial-cards">
            {qualificationItems.map((item) => (
              <article className="editorial-card" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="legal-note">
            <strong>Important:</strong> Stepes provides language services, not legal advice. Courts, tribunals, agencies, and other authorities establish their own interpreter qualification, procedural, and admissibility requirements.
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container split-precision">
          <div className="section-heading editorial-left">
            <div className="eyebrow">LANGUAGE PRECISION</div>
            <h2>Precision Beyond Language Alone</h2>
            <p className="body-large">
              Effective legal interpreting requires attention to the way people actually speak, the terminology of the matter, and the level of language used by each participant.
            </p>
          </div>
          <div className="precision-stack">
            {precisionItems.map((item) => (
              <article className="precision-row" key={item.title}>
                <div className="precision-marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="heading-group centered">
            <h2>Interpreting Modes for Different Legal Proceedings</h2>
            <p>
              Different legal interactions require different interpreting methods. Stepes helps coordinate the appropriate format according to the proceeding, participants, and communication requirements.
            </p>
          </div>
          <div className="three-column mode-grid">
            {modes.map((mode) => (
              <article className="mode-item" key={mode.title}>
                <div className="icon-box"><Icon name={mode.icon} /></div>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
                <p className="mode-use">{mode.uses}</p>
              </article>
            ))}
          </div>
          <div className="context-link-row">
            <span>Need interpreting support beyond legal matters?</span>
            <a className="text-link" href="https://www.stepes.com/interpretation-services/">Explore Interpretation Services <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft audience-section">
        <div className="container">
          <div className="heading-group centered">
            <div className="eyebrow">WHO WE SUPPORT</div>
            <h2>Built for Law Firms and Corporate Legal Teams</h2>
            <p>
              Legal interpreting needs extend well beyond the courtroom. Stepes supports outside counsel and in-house teams with professional language services designed around how legal work is actually conducted.
            </p>
          </div>
          <div className="audience-panels">
            <article className="audience-panel">
              <div className="audience-top"><Icon name="lawfirm" size={28} /><h3>Law Firms</h3></div>
              <p>
                Multilingual support throughout disputes, investigations, transactions, client relationships, and international legal matters.
              </p>
              <div className="chip-list" aria-label="Law firm applications">
                {[
                  "Depositions", "Witness interviews", "Client consultations", "Litigation preparation", "Arbitration & mediation", "Hearings", "International disputes", "Cross-border matters"
                ].map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="text-link" href="https://www.stepes.com/law-firm-translation-services/">Language Services for Law Firms <Arrow /></a>
            </article>
            <article className="audience-panel">
              <div className="audience-top"><Icon name="corporate" size={28} /><h3>Corporate Legal & Compliance Teams</h3></div>
              <p>
                Professional interpreting for sensitive legal and compliance conversations across countries, workforces, suppliers, regulators, and business units.
              </p>
              <div className="chip-list" aria-label="Corporate legal applications">
                {[
                  "Internal investigations", "Employee interviews", "Ethics & compliance", "Employment matters", "Whistleblower matters", "Regulatory communication", "Cross-border fact finding", "Outside-counsel collaboration"
                ].map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="text-link" href="https://www.stepes.com/legal-translation-services/">Legal Translation Services <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container delivery-grid">
          <div className="section-heading editorial-left">
            <h2>Remote and On-Site Legal Interpreting</h2>
            <p className="body-large">
              Legal teams increasingly work across offices, jurisdictions, and time zones. Stepes supports both remote and in-person interpreting so the delivery model can be matched to the requirements of the matter.
            </p>
          </div>
          <div className="delivery-options">
            <article className="delivery-item">
              <div className="icon-box"><Icon name="remote" /></div>
              <h3>Remote Legal Interpreting</h3>
              <p>
                Video and phone interpreting can support remote depositions, witness interviews, attorney-client consultations, investigations, case preparation, compliance interviews, and distributed arbitration teams.
              </p>
              <p>
                For complex, lengthy, confidential, specialized, or credential-specific sessions, advance scheduling allows Stepes to match the interpreter and prepare appropriately.
              </p>
            </article>
            <article className="delivery-item">
              <div className="icon-box"><Icon name="onsite" /></div>
              <h3>On-Site Legal Interpreting</h3>
              <p>
                In-person interpreting can be arranged for law offices, deposition locations, arbitration venues, hearing locations, corporate offices, investigation interviews, and other scheduled legal proceedings.
              </p>
              <p>
                The appropriate format depends on the participants, location, proceeding, technical requirements, and applicable client or legal requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark prep-section">
        <div className="container prep-grid">
          <div className="prep-heading">
            <div className="eyebrow eyebrow-dark">INTERPRETER PREPARATION</div>
            <h2>Preparation for Accurate Legal Communication</h2>
            <p>
              Strong legal interpreting begins before the conversation starts. Relevant context can help the interpreter prepare for unfamiliar terminology, proper names, acronyms, industry concepts, and other language that may arise during the session.
            </p>
            <p className="prep-note">Only materials appropriate and necessary for interpreter preparation should be shared through the agreed workflow.</p>
          </div>
          <div className="prep-list">
            {preparationItems.map(([title, text]) => (
              <div className="prep-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white workflow-section">
        <div className="container">
          <div className="heading-group centered">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>A Structured Legal Interpreting Workflow</h2>
            <p>
              Each engagement is coordinated around the legal setting, language, subject matter, delivery format, and requirements of the matter rather than treated as a generic language request.
            </p>
          </div>
          <div className="workflow" aria-label="Legal interpreting workflow">
            {workflow.map((item, i) => (
              <article className="workflow-step" key={item.title}>
                <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <a className="text-link prominent" href={QUOTE_URL}>Discuss Your Legal Interpreting Requirements <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container trust-grid">
          <div className="section-heading editorial-left">
            <h2>Confidentiality and Professional Standards</h2>
            <p className="body-large">
              Legal interpreting can involve sensitive testimony, personal information, confidential business records, investigations, and other high-consequence subject matter.
            </p>
          </div>
          <div className="standards-list">
            {standards.map((item) => (
              <article className="standard-row" key={item.title}>
                <div className="icon-box compact"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="heading-group centered">
            <h2>Legal Interpreting Across Complex Subject Areas</h2>
            <p>
              Legal matters often involve specialized industries and technical evidence. Interpreter selection should reflect both the language being spoken and the terminology likely to arise during the engagement.
            </p>
          </div>
          <div className="subject-grid">
            {subjectAreas.map(([title, text]) => (
              <article className="subject-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section language-section">
        <div className="container language-grid">
          <div>
            <div className="eyebrow">GLOBAL COVERAGE</div>
            <h2>Legal Interpreting in 100+ Languages</h2>
            <p className="body-large">
              Stepes provides professional legal interpreting across more than 100 languages, subject to interpreter availability, location, requested qualifications, format, specialization, and scheduling requirements.
            </p>
            <p>
              For legal interpreting, language matching can extend beyond the language name itself. Country, region, dialect, subject matter, professional terminology, and participant preferences can all influence interpreter selection.
            </p>
            <a className="text-link" href="https://www.stepes.com/translation-languages/">Explore Our Languages <Arrow /></a>
          </div>
          <div className="language-cloud" aria-label="Frequently requested legal interpreting languages">
            {[
              "Spanish", "French", "German", "Portuguese", "Italian", "Mandarin Chinese", "Cantonese", "Japanese", "Korean", "Arabic", "Vietnamese", "Russian", "Polish", "Ukrainian", "Dutch", "Hindi"
            ].map((language) => <span key={language}>{language}</span>)}
            <span className="more-languages">and many more</span>
          </div>
        </div>
      </section>

      <section className="section section-soft related-section">
        <div className="container">
          <div className="heading-group centered">
            <div className="eyebrow">CONNECTED LEGAL SERVICES</div>
            <h2>Complete Language Support for Legal Matters</h2>
            <p>
              Live interpreting is often only one part of a multilingual legal workflow. Stepes supports spoken communication and written legal content across the matter lifecycle through connected professional language services.
            </p>
          </div>
          <div className="related-list">
            {relatedServices.map((item) => (
              <a className="related-row" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="related-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="container faq-layout">
          <div className="section-heading faq-heading">
            <h2>Legal Interpreting Services FAQs</h2>
            <p className="body-large">
              Practical answers to common questions about legal interpreter qualifications, depositions, dialect matching, preparation, confidentiality, and delivery formats.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={faq.q} open={i === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="container final-cta-inner">
          <div>
            <h2>Discuss Your Legal Interpreting Requirements</h2>
            <p>
              Whether you are preparing for a deposition, interviewing a witness, conducting an internal investigation, meeting with an international client, or coordinating a multilingual legal proceeding, tell us the language, legal setting, timing, delivery format, subject matter, dialect requirements, and any requested interpreter qualifications.
            </p>
          </div>
          <a className="btn btn-primary btn-light-shadow" href={QUOTE_URL}>Get a Quote <Arrow /></a>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #252225;
    --ink-2: #3D383C;
    --muted: #686267;
    --line: #E5E0E2;
    --soft: #F7F5F6;
    --dark: #302C2F;
    --dark-2: #3A3438;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-page {
    margin: 0;
    color: var(--ink);
    background: var(--white);
    font-family: "Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }
  .stepes-page a { color: inherit; }
  .container {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }
  .section { padding: 96px 0; }
  .section-shell { padding: 100px 0; }
  .section-white { background: #fff; }
  .section-soft { background: var(--soft); }
  .section-blush { background: var(--blush); }
  .section-dark { background: var(--dark); color: #fff; }
  .eyebrow {
    color: var(--magenta);
    font-size: 11px;
    line-height: 1.25;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .eyebrow-dark { color: var(--pink-light); }
  h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -.025em; color: inherit; }
  h1 { font-size: 48px; line-height: 1.08; }
  h2 { font-size: 36px; line-height: 1.14; }
  h3 { font-size: 24px; line-height: 1.25; }
  p { margin: 0 0 18px; font-size: 16px; line-height: 1.72; color: var(--ink-2); }
  .section-dark p { color: #D7D0D4; }
  .body-large, .hero-lead { font-size: 18px; line-height: 1.65; }
  .small-note { font-size: 16px; color: var(--muted); }
  .heading-group { max-width: 820px; margin-bottom: 48px; }
  .heading-group.centered { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-group h2 { margin-bottom: 18px; }
  .heading-group > p { max-width: 800px; margin: 0 auto; font-size: 18px; }
  .dark-heading { max-width: 850px; }
  .dark-heading h2 { color: #fff; margin-bottom: 18px; }
  .dark-heading > p { font-size: 18px; }
  .section-heading h2 { margin-bottom: 20px; }
  .editorial-left { text-align: left; }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 13px 24px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    line-height: 1;
    transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
  }
  .btn-primary,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible {
    background: var(--magenta);
    color: #fff !important;
  }
  .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .btn:focus-visible, .text-link:focus-visible, .related-row:focus-visible, summary:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .25);
    outline-offset: 3px;
  }
  .arrow { display: inline-block; margin-left: 9px; transition: transform .2s ease; color: currentColor; }
  .btn:hover .arrow, .text-link:hover .arrow { transform: translateX(3px); }
  .text-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .text-link:hover { color: var(--magenta-dark) !important; }
  .text-link.prominent { font-size: 17px; }

  .hero { background: #FFFFFF; }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, .98fr);
    align-items: center;
    gap: 64px;
  }
  .hero-copy { max-width: 690px; }
  .hero-copy h1 { max-width: 660px; margin-bottom: 24px; }
  .hero-lead { max-width: 690px; color: #4D474B; margin-bottom: 28px; }
  .hero-actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
  .hero-art { min-height: 460px; display: flex; align-items: center; justify-content: center; }
  .hero-art svg { width: 100%; max-width: 560px; height: auto; }

  .relevance-band { background: #FAF9FA; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .relevance-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 28px;
    padding-bottom: 28px;
  }
  .relevance-grid > div { padding: 0 22px; border-left: 1px solid var(--line); }
  .relevance-grid > div:first-child { border-left: none; padding-left: 0; }
  .relevance-grid strong { display: block; font-size: 16px; font-weight: 600; margin-bottom: 3px; }
  .relevance-grid span { display: block; color: var(--muted); font-size: 16px; line-height: 1.45; }

  .split-intro, .split-precision, .delivery-grid, .trust-grid {
    display: grid;
    grid-template-columns: minmax(300px, .8fr) minmax(0, 1.2fr);
    gap: 84px;
    align-items: start;
  }
  .intro-copy { max-width: 760px; }
  .intro-copy p:last-child { margin-bottom: 0; }

  .service-layout {
    display: grid;
    grid-template-columns: minmax(320px, .78fr) minmax(0, 1.22fr);
    gap: 28px;
    align-items: stretch;
  }
  .service-featured {
    border-radius: 30px;
    background: #fff;
    border: 1px solid var(--line);
    padding: 36px;
    box-shadow: 0 16px 42px rgba(45, 37, 41, .06);
  }
  .service-featured h3 { margin: 20px 0 14px; }
  .quiet-list { margin: 22px 0; padding: 0; list-style: none; }
  .quiet-list li { position: relative; padding: 9px 0 9px 20px; font-size: 16px; border-bottom: 1px solid var(--line); }
  .quiet-list li:last-child { border-bottom: none; }
  .quiet-list li::before { content: ""; position: absolute; left: 0; top: 18px; width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); }
  .service-rows { background: #fff; border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
  .service-row { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 28px 30px; border-bottom: 1px solid var(--line); }
  .service-row:last-child { border-bottom: none; }
  .service-row h3 { margin-bottom: 8px; }
  .service-row p { margin-bottom: 8px; }
  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--magenta-dark);
    background: #F9EEF3;
    flex: 0 0 auto;
  }
  .icon-box.compact { width: 44px; height: 44px; border-radius: 14px; }

  .matrix { border-top: 1px solid rgba(255,255,255,.16); margin-top: 44px; }
  .matrix-head, .matrix-row { display: grid; grid-template-columns: 280px 1fr; }
  .matrix-head { color: var(--pink-light); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .matrix-head > div { padding: 18px 22px; }
  .matrix-row { border-top: 1px solid rgba(255,255,255,.14); }
  .matrix-row > div { padding: 22px; font-size: 16px; line-height: 1.6; color: #D9D1D5; }
  .matrix-row .matrix-label { color: #fff; font-weight: 600; }

  .three-column { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .editorial-card { padding: 28px 0 8px; border-top: 2px solid #D9D2D5; }
  .editorial-card .icon-box { margin-bottom: 20px; }
  .editorial-card h3 { margin-bottom: 12px; }
  .legal-note {
    margin-top: 38px;
    padding: 20px 24px;
    border-radius: 20px;
    background: #F7F5F6;
    color: var(--ink-2);
    font-size: 16px;
    line-height: 1.65;
  }

  .split-precision { grid-template-columns: minmax(300px, .86fr) minmax(0, 1.14fr); }
  .precision-stack { border-top: 1px solid #E6CDD8; }
  .precision-row { display: grid; grid-template-columns: 10px 1fr; gap: 20px; padding: 28px 0; border-bottom: 1px solid #E6CDD8; }
  .precision-marker { width: 3px; height: 28px; background: var(--magenta); margin-top: 3px; border-radius: 3px; }
  .precision-row h3 { margin-bottom: 10px; }
  .precision-row p { margin-bottom: 0; }

  .mode-grid { gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .mode-item { padding: 34px 34px 30px; border-right: 1px solid var(--line); }
  .mode-item:first-child { padding-left: 0; }
  .mode-item:last-child { border-right: none; padding-right: 0; }
  .mode-item h3 { margin: 20px 0 12px; }
  .mode-use { color: var(--muted); margin-bottom: 0; }
  .context-link-row { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 34px; font-size: 16px; color: var(--muted); flex-wrap: wrap; }

  .audience-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .audience-panel { background: #fff; border: 1px solid var(--line); border-radius: 28px; padding: 34px; }
  .audience-top { display: flex; align-items: center; gap: 14px; color: var(--magenta-dark); margin-bottom: 18px; }
  .audience-top h3 { color: var(--ink); }
  .chip-list { display: flex; flex-wrap: wrap; gap: 9px; margin: 22px 0 24px; }
  .chip-list span { display: inline-flex; min-height: 38px; align-items: center; padding: 8px 13px; border-radius: 999px; border: 1px solid var(--line); background: #FAF9FA; font-size: 16px; color: var(--ink-2); }

  .delivery-grid { grid-template-columns: minmax(300px, .8fr) minmax(0, 1.2fr); }
  .delivery-options { border-top: 1px solid var(--line); }
  .delivery-item { padding: 28px 0 30px; border-bottom: 1px solid var(--line); }
  .delivery-item h3 { margin: 18px 0 12px; }
  .delivery-item p:last-child { margin-bottom: 0; }

  .prep-grid { display: grid; grid-template-columns: minmax(300px, .82fr) minmax(0, 1.18fr); gap: 78px; align-items: start; }
  .prep-heading h2 { color: #fff; margin-bottom: 20px; }
  .prep-heading > p { font-size: 18px; }
  .prep-note { color: #C9C1C5 !important; font-size: 16px !important; border-left: 2px solid var(--pink-light); padding-left: 16px; }
  .prep-list { border-top: 1px solid rgba(255,255,255,.14); }
  .prep-row { display: grid; grid-template-columns: 240px 1fr; gap: 24px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
  .prep-row h3 { font-size: 20px; color: #fff; }
  .prep-row p { margin: 0; }

  .workflow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .workflow-step { padding: 30px 22px; border-right: 1px solid var(--line); }
  .workflow-step:first-child { padding-left: 0; }
  .workflow-step:last-child { border-right: none; padding-right: 0; }
  .step-number { color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .08em; margin-bottom: 16px; }
  .workflow-step h3 { font-size: 20px; margin-bottom: 10px; }
  .workflow-step p { margin: 0; }
  .center-action { text-align: center; margin-top: 28px; }

  .trust-grid { grid-template-columns: minmax(300px, .76fr) minmax(0, 1.24fr); }
  .standards-list { border-top: 1px solid var(--line); }
  .standard-row { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .standard-row h3 { margin-bottom: 8px; font-size: 22px; }
  .standard-row p { margin-bottom: 0; }

  .subject-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .subject-item { padding: 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-height: 190px; }
  .subject-item h3 { font-size: 20px; margin-bottom: 10px; }
  .subject-item p { margin-bottom: 0; }

  .language-section { background: #F0EDEE; }
  .language-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 70px; align-items: center; }
  .language-grid h2 { margin-bottom: 20px; }
  .language-cloud { display: flex; flex-wrap: wrap; gap: 12px; align-content: center; }
  .language-cloud span { display: inline-flex; align-items: center; min-height: 44px; padding: 10px 16px; border-radius: 999px; background: #fff; border: 1px solid #DCD5D8; font-size: 16px; }
  .language-cloud .more-languages { background: transparent; color: var(--magenta-dark); border-color: #C9A7B7; font-weight: 600; }

  .related-list { border-top: 1px solid var(--line); }
  .related-row {
    display: grid;
    grid-template-columns: 1fr 44px;
    gap: 28px;
    align-items: center;
    padding: 24px 4px;
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    transition: background .2s ease, padding .2s ease;
  }
  .related-row:hover { background: rgba(255,255,255,.7); padding-left: 16px; padding-right: 16px; }
  .related-row h3 { font-size: 21px; margin-bottom: 5px; }
  .related-row p { margin: 0; max-width: 850px; }
  .related-arrow { color: var(--magenta); font-size: 24px; text-align: right; }

  .faq-layout { display: grid; grid-template-columns: minmax(280px, .65fr) minmax(0, 1.35fr); gap: 70px; align-items: start; }
  .faq-heading { position: sticky; top: 30px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: 1fr 40px; gap: 18px; align-items: center; min-height: 76px; padding: 19px 0; font-size: 18px; line-height: 1.4; font-weight: 600; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-plus { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; border: 1px solid var(--line); color: var(--magenta); font-size: 22px; font-weight: 400; transition: transform .2s ease; }
  .faq-item[open] .faq-plus { transform: rotate(45deg); }
  .faq-answer { max-width: 840px; padding: 0 52px 22px 0; }
  .faq-answer p { font-size: 16px; margin: 0; }

  .final-cta { background: var(--burgundy); color: #fff; }
  .final-cta-inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 64px; align-items: center; }
  .final-cta h2 { color: #fff; margin-bottom: 16px; }
  .final-cta p { color: #F2E9ED; max-width: 850px; font-size: 18px; margin: 0; }
  .btn-light-shadow { box-shadow: 0 12px 32px rgba(0,0,0,.14); }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, .85fr); gap: 42px; }
    .relevance-grid { grid-template-columns: repeat(5, minmax(0,1fr)); }
    .relevance-grid > div { padding: 0 14px; }
    .subject-grid { grid-template-columns: repeat(2, 1fr); }
    .workflow { grid-template-columns: repeat(5, minmax(0,1fr)); }
    .workflow-step { padding: 26px 16px; }
  }

  @media (max-width: 900px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .section-shell { padding: 88px 0; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .hero-copy { max-width: 760px; margin: 0 auto; }
    .hero-copy h1, .hero-lead { margin-left: auto; margin-right: auto; }
    .hero-actions { justify-content: center; }
    .hero-art { min-height: auto; max-width: 600px; margin: 0 auto; }
    .relevance-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 0; }
    .relevance-grid > div { border-left: none; border-right: 0; border-bottom: 1px solid var(--line); padding: 18px 20px; }
    .relevance-grid > div:nth-child(odd):not(:last-child) { border-right: 1px solid var(--line); }
    .relevance-grid > div:last-child { grid-column: 1 / -1; border-bottom: 0; }
    .split-intro, .split-precision, .delivery-grid, .trust-grid, .prep-grid, .faq-layout, .language-grid { grid-template-columns: 1fr; gap: 42px; }
    .split-intro > .section-heading, .split-precision > .section-heading, .delivery-grid > .section-heading, .trust-grid > .section-heading, .prep-heading, .language-grid > div:first-child { text-align: center; max-width: 820px; margin-left: auto; margin-right: auto; }
    .split-precision > .section-heading p, .delivery-grid > .section-heading p, .trust-grid > .section-heading p { text-align: center; max-width: 720px; margin-left: auto; margin-right: auto; }
    .prep-heading > p:first-of-type { text-align: center; max-width: 720px; margin-left: auto; margin-right: auto; }
    .prep-heading .prep-note { text-align: left; }
    .language-grid > div:first-child .body-large { text-align: center; max-width: 720px; margin-left: auto; margin-right: auto; }
    .language-grid > div:first-child p:not(.body-large) { text-align: left; }
    .service-layout { grid-template-columns: 1fr; }
    .matrix-head, .matrix-row { grid-template-columns: 220px 1fr; }
    .three-column { grid-template-columns: 1fr; }
    .editorial-card { display: grid; grid-template-columns: 54px 1fr; column-gap: 20px; }
    .editorial-card h3, .editorial-card p { grid-column: 2; }
    .editorial-card .icon-box { grid-row: 1 / span 2; }
    .mode-grid { display: block; }
    .mode-item { border-right: 0; border-bottom: 1px solid var(--line); padding: 28px 0; }
    .mode-item:last-child { border-bottom: 0; }
    .audience-panels { grid-template-columns: 1fr; }
    .prep-row { grid-template-columns: 210px 1fr; }
    .workflow { grid-template-columns: 1fr; border-bottom: 0; }
    .workflow-step, .workflow-step:first-child, .workflow-step:last-child { display: grid; grid-template-columns: 54px 220px 1fr; gap: 18px; padding: 22px 0; border-right: 0; border-bottom: 1px solid var(--line); align-items: start; }
    .workflow-step h3, .workflow-step p, .step-number { margin: 0; }
    .subject-grid { grid-template-columns: repeat(2, 1fr); }
    .faq-heading { position: static; text-align: center; max-width: 760px; margin: 0 auto; }
    .faq-heading p { text-align: center; max-width: 720px; margin-left: auto; margin-right: auto; }
    .final-cta-inner { grid-template-columns: 1fr; text-align: center; gap: 30px; }
    .final-cta p { margin: 0 auto; }
    .final-cta .btn { justify-self: center; }
  }

  @media (max-width: 620px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .section-shell { padding: 72px 0; }
    h1 { font-size: 38px; }
    h2 { font-size: 30px; }
    h3 { font-size: 20px; }
    .body-large, .hero-lead, .heading-group > p, .dark-heading > p, .prep-heading > p, .final-cta p { font-size: 17px; }
    .heading-group { margin-bottom: 36px; }
    .heading-group.centered { text-align: center; }
    .hero-actions { flex-direction: column; align-items: stretch; gap: 10px; }
    .hero-actions .btn { width: 100%; }
    .hero-actions .text-link { justify-content: center; }
    .hero-art { margin-top: 4px; min-height: 0; }
    .hero-art svg { max-width: 520px; }
    .relevance-grid { grid-template-columns: 1fr 1fr; }
    .relevance-grid > div { border-right: 0; border-bottom: 1px solid var(--line); padding: 16px 12px; }
    .relevance-grid > div:nth-child(odd):not(:last-child) { border-right: 1px solid var(--line); }
    .relevance-grid > div:last-child { grid-column: 1 / -1; border-bottom: 0; }
    .split-intro > .section-heading, .split-precision > .section-heading, .delivery-grid > .section-heading, .trust-grid > .section-heading, .prep-heading, .language-grid > div:first-child { text-align: center; }
    .intro-copy, .precision-stack, .delivery-options, .standards-list, .prep-list { text-align: left; }
    .service-featured { padding: 28px 24px; border-radius: 24px; }
    .service-row { grid-template-columns: 44px 1fr; gap: 16px; padding: 24px 20px; }
    .matrix { overflow: visible; }
    .matrix-head { display: none; }
    .matrix-row { display: block; padding: 20px 0; }
    .matrix-row > div { padding: 0; }
    .matrix-row .matrix-label { margin-bottom: 8px; font-size: 17px; }
    .editorial-card { display: grid; grid-template-columns: 48px 1fr; }
    .editorial-card .icon-box { width: 44px; height: 44px; }
    .precision-row { gap: 14px; }
    .audience-panel { padding: 26px 22px; border-radius: 24px; }
    .chip-list span { width: 100%; justify-content: flex-start; border-radius: 14px; }
    .prep-row { display: block; padding: 22px 0; }
    .prep-row h3 { margin-bottom: 8px; }
    .workflow-step, .workflow-step:first-child, .workflow-step:last-child { grid-template-columns: 48px 1fr; gap: 14px; }
    .workflow-step h3 { grid-column: 2; }
    .workflow-step p { grid-column: 2; }
    .step-number { grid-column: 1; grid-row: 1; }
    .standard-row { grid-template-columns: 44px 1fr; gap: 15px; }
    .subject-grid { grid-template-columns: 1fr; }
    .subject-item { min-height: auto; padding: 24px 20px; }
    .language-cloud { gap: 9px; }
    .language-cloud span { flex: 1 1 calc(50% - 9px); justify-content: center; text-align: center; }
    .related-row { grid-template-columns: 1fr 30px; gap: 12px; padding: 22px 0; min-height: 72px; }
    .faq-item summary { grid-template-columns: 1fr 36px; font-size: 17px; min-height: 70px; }
    .faq-answer { padding-right: 0; }
    .final-cta .btn { width: 100%; }
  }

  @media (max-width: 360px) {
    h1 { font-size: 38px; }
    .relevance-grid { grid-template-columns: 1fr; }
    .relevance-grid > div, .relevance-grid > div:nth-child(odd):not(:last-child) { border-right: 0; border-bottom: 1px solid var(--line); }
    .relevance-grid > div:last-child { grid-column: auto; border-bottom: none; }
    .language-cloud span { flex-basis: 100%; }
    .service-row { grid-template-columns: 1fr; }
    .service-row .icon-box { margin-bottom: 2px; }
  }
`;
