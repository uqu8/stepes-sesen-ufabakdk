import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDeep: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#202126",
  hero: "#36373C",
  text: "#4A4D55",
  muted: "#6E7178",
  line: "#E5E6E9",
  soft: "#F6F6F7",
  white: "#FFFFFF",
};

function Icon({ name, size = 24 }) {
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

  const icons = {
    script: (
      <svg {...common}><path d="M6 3.8h9.2L18 6.6V20H6z"/><path d="M15 3.8v3h3"/><path d="M9 10h6M9 14h6M9 18h4"/></svg>
    ),
    speech: (
      <svg {...common}><path d="M4 5.5h16v10H9l-5 4z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>
    ),
    people: (
      <svg {...common}><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.5-4 2.4-6 5.5-6s5 2 5.5 6"/><path d="M14.5 15.2c2.9-.5 5 1.1 5.7 4.8"/></svg>
    ),
    command: (
      <svg {...common}><path d="M12 3v7"/><path d="M8 6a5 5 0 1 0 8 0"/><path d="M12 15v4"/><path d="M8 19h8"/></svg>
    ),
    globe: (
      <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
    ),
    briefcase: (
      <svg {...common}><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M9 7V5h6v2M3 12h18M10 12v2h4v-2"/></svg>
    ),
    pin: (
      <svg {...common}><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>
    ),
    sound: (
      <svg {...common}><path d="M4 10v4h3l4 4V6l-4 4H4z"/><path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>
    ),
    user: (
      <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21c.6-4.8 3.2-7 8-7s7.4 2.2 8 7"/></svg>
    ),
    phone: (
      <svg {...common}><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4M11 18.5h2"/></svg>
    ),
    home: (
      <svg {...common}><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10M9.5 20v-6h5v6"/></svg>
    ),
    wave: (
      <svg {...common}><path d="M3 12h2l1.5-5 3 10 3-13 3 16 2-8H21"/></svg>
    ),
    target: (
      <svg {...common}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
    ),
    headset: (
      <svg {...common}><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5zM20 13h-3v6h2a1 1 0 0 0 1-1v-5z"/><path d="M17 19c0 1.2-1.4 2-3 2"/></svg>
    ),
    bot: (
      <svg {...common}><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 3v4M9 3h6"/><circle cx="9.5" cy="12" r="1"/><circle cx="14.5" cy="12" r="1"/><path d="M9 15h6"/></svg>
    ),
    car: (
      <svg {...common}><path d="M5 16h14l-1-6-2-3H8l-2 3z"/><path d="M4 16v3h2M20 16v3h-2M7 13h.01M17 13h.01"/></svg>
    ),
    brain: (
      <svg {...common}><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 3 4 3 3 0 0 0 5 2V5a3 3 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-3 4 3 3 0 0 1-5 2V5a3 3 0 0 1 3-1z"/><path d="M8 9h2M14 9h2M8 14h2M14 14h2"/></svg>
    ),
    layers: (
      <svg {...common}><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>
    ),
    text: (
      <svg {...common}><path d="M5 5h14M12 5v14M8 19h8"/></svg>
    ),
    clock: (
      <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>
    ),
    tag: (
      <svg {...common}><path d="M20 13 13 20l-9-9V4h7z"/><circle cx="8.5" cy="8.5" r="1"/></svg>
    ),
    database: (
      <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
    ),
    code: (
      <svg {...common}><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>
    ),
    check: (
      <svg {...common}><path d="m4 12 5 5L20 6"/></svg>
    ),
    shield: (
      <svg {...common}><path d="M12 3 4.5 6v5.5c0 4.5 3 7.8 7.5 9.5 4.5-1.7 7.5-5 7.5-9.5V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>
    ),
    lock: (
      <svg {...common}><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
    ),
    consent: (
      <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4"/><path d="m9 13 2 2 4-5"/></svg>
    ),
    filter: (
      <svg {...common}><path d="M4 5h16l-6 7v5l-4 2v-7z"/></svg>
    ),
  };
  return icons[name] || icons.wave;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

function HeroArtwork() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 620 500" role="img" aria-label="Multilingual speakers and voice waveforms flowing into structured AI data">
      <defs>
        <linearGradient id="voiceAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2A7C6" />
          <stop offset="1" stopColor="#C11D63" />
        </linearGradient>
        <filter id="softGlow"><feGaussianBlur stdDeviation="11" /></filter>
      </defs>
      <circle cx="470" cy="95" r="72" fill="#C11D63" opacity=".09" filter="url(#softGlow)" />
      <circle cx="120" cy="375" r="84" fill="#F2A7C6" opacity=".06" filter="url(#softGlow)" />

      <g fill="none" stroke="#777982" strokeWidth="1.5" opacity=".55">
        <circle cx="138" cy="150" r="44" />
        <circle cx="140" cy="138" r="14" />
        <path d="M112 175c7-18 48-18 56 0" />
        <circle cx="143" cy="352" r="44" />
        <circle cx="145" cy="340" r="14" />
        <path d="M117 377c8-18 48-18 56 0" />
        <circle cx="482" cy="245" r="44" />
        <circle cx="484" cy="233" r="14" />
        <path d="M456 270c8-18 48-18 56 0" />
      </g>

      <g fill="none" stroke="url(#voiceAccent)" strokeWidth="3" strokeLinecap="round">
        <path d="M205 151h12l7-18 11 38 11-56 13 73 12-48 10 25h16" />
        <path d="M205 352h18l9-28 12 48 12-65 13 80 13-45 12 25h16" />
        <path d="M362 246h18l8-22 10 39 12-52 12 65 10-35 10 18h15" />
      </g>

      <g fill="#F2A7C6" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600">
        <text x="94" y="90">EN-US</text>
        <text x="96" y="294">ES-MX</text>
        <text x="454" y="181">JA-JP</text>
      </g>

      <g>
        <rect x="275" y="120" width="165" height="250" rx="26" fill="#2F3035" stroke="#686A72" />
        <rect x="297" y="146" width="121" height="44" rx="13" fill="#292A2F" stroke="#5C5E67" />
        <path d="M315 168h12l6-12 8 26 8-35 9 44 8-27 7 12h28" fill="none" stroke="#F2A7C6" strokeWidth="2.2" strokeLinecap="round" />
        <text x="298" y="218" fill="#AEB1B9" fontFamily="Inter, Arial, sans-serif" fontSize="12">STRUCTURED DATASET</text>
        <g fill="#35363C" stroke="#666872">
          <rect x="297" y="234" width="121" height="28" rx="8" />
          <rect x="297" y="272" width="121" height="28" rx="8" />
          <rect x="297" y="310" width="121" height="28" rx="8" />
        </g>
        <g fill="#D7D9DE" fontFamily="Inter, Arial, sans-serif" fontSize="12">
          <text x="311" y="252">Transcript + timing</text>
          <text x="311" y="290">Speaker + intent</text>
          <text x="311" y="328">Locale + metadata</text>
        </g>
      </g>

      <g stroke="#6C6E77" strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity=".8">
        <path d="M183 150C230 150 238 146 275 157" />
        <path d="M187 350C228 340 240 324 275 314" />
        <path d="M438 245h0c-4 0-8 1-12 3" />
      </g>

      <g fill="#C11D63">
        <circle cx="218" cy="151" r="4" />
        <circle cx="230" cy="339" r="4" />
        <circle cx="438" cy="246" r="4" />
      </g>
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false, dark = false, className = "" }) {
  return (
    <div className={`section-heading ${centered ? "is-centered" : ""} ${dark ? "is-dark" : ""} ${className}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function EditorialItem({ icon, title, children, link }) {
  return (
    <article className="editorial-item">
      <div className="icon-box"><Icon name={icon} /></div>
      <div className="editorial-copy">
        <h3>{title}</h3>
        <div className="body-copy">{children}</div>
        {link ? <a className="text-link" href={link.href}>{link.label} <Arrow /></a> : null}
      </div>
    </article>
  );
}

const collectionTypes = [
  {
    icon: "script",
    title: "Scripted & Read Speech",
    copy: (
      <>
        <p>Collect controlled voice recordings from predefined prompts, phrases, sentences, commands, pronunciation lists, or customer-provided scripts.</p>
        <p>Scripted speech provides consistent coverage of specific words, phonemes, sentence structures, terminology, and interaction patterns for ASR, speech synthesis, pronunciation modeling, voice interfaces, and other applications. Stepes can work with your existing scripts or help prepare multilingual recording content for each target market.</p>
      </>
    ),
  },
  {
    icon: "speech",
    title: "Spontaneous & Natural Speech",
    copy: (
      <>
        <p>Capture unscripted speech that reflects the way people naturally communicate through free-form responses, topic discussions, scenario completion, and other controlled spontaneous tasks.</p>
        <p>These recordings capture natural hesitations, pauses, phrasing variation, colloquial language, and speaking pace that scripted prompts alone cannot reproduce.</p>
      </>
    ),
  },
  {
    icon: "people",
    title: "Multi-Speaker Conversations",
    copy: (
      <>
        <p>Build conversational audio datasets from two-person or multi-party interactions, including structured and semi-structured scenarios.</p>
        <p>Projects can capture natural turn-taking, interruptions, contextual references, overlapping speech where required, and other characteristics of real conversations.</p>
      </>
    ),
  },
  {
    icon: "command",
    title: "Commands, Wake Words & Short Utterances",
    copy: (
      <>
        <p>Collect wake words, trigger phrases, voice commands, search queries, navigation requests, smart-device interactions, automotive commands, and other short task-oriented utterances.</p>
        <p>Programs can be configured across different speakers, accents, devices, microphone types, distances, and acoustic environments.</p>
      </>
    ),
  },
  {
    icon: "globe",
    title: "Accent, Dialect & Code-Switched Speech",
    copy: (
      <>
        <p>Recruit speakers according to regional accent, dialect, locale, and other project-defined linguistic criteria.</p>
        <p>Stepes also supports code-switched datasets in which speakers naturally move between two or more languages within the same utterance or conversation.</p>
      </>
    ),
  },
  {
    icon: "briefcase",
    title: "Scenario & Domain-Specific Conversations",
    copy: (
      <>
        <p>Create speech datasets around the situations your AI system is designed to handle, including customer support, healthcare, financial services, automotive, travel, retail, technology, and enterprise applications.</p>
        <p>Projects can incorporate customer-defined terminology, tasks, conversational goals, and interaction patterns.</p>
      </>
    ),
  },
];

const datasetDimensions = [
  { icon: "pin", title: "Language & Locale", copy: "Collect speech for specific languages, countries, and regional variants rather than treating each language as a single uniform population." },
  { icon: "sound", title: "Accent & Dialect", copy: "Target regional accents, local dialects, pronunciation patterns, and other linguistic variations required by your application." },
  { icon: "user", title: "Speaker Profile", copy: "Define project-relevant, approved speaker criteria such as language background, locale, age range, domain experience, or other attributes needed for the dataset." },
  { icon: "phone", title: "Device & Microphone", copy: "Capture voice through smartphones, laptops, headsets, smart devices, automotive systems, proprietary hardware, or other specified configurations." },
  { icon: "home", title: "Recording Environment", copy: "Collect audio in controlled environments or under real-world conditions such as homes, offices, vehicles, public spaces, or other customer-defined settings." },
  { icon: "wave", title: "Acoustic Conditions", copy: "Design datasets around background noise, microphone distance, reverberation, speaker position, and environmental sound when relevant to model performance." },
];

const applications = [
  {
    icon: "wave",
    title: "Automatic Speech Recognition",
    copy: "Build multilingual ASR datasets using scripted, spontaneous, accented, conversational, and domain-specific speech across diverse speakers, devices, and acoustic conditions.",
  },
  {
    icon: "sound",
    title: "Text-to-Speech & Voice AI",
    copy: "Collect high-quality human speech for applications involving speech synthesis, pronunciation, prosody, naturalness, and multilingual voice development. For generated-voice evaluation, Stepes can also support multilingual human review.",
    link: { label: "Multilingual AI Output Review Services", href: "https://www.stepes.com/ai-output-review-services/" },
  },
  {
    icon: "bot",
    title: "Voice Assistants & Virtual Agents",
    copy: "Develop voice data for assistants and agents that must recognize requests, commands, questions, task-oriented interactions, and multi-turn voice conversations across languages.",
  },
  {
    icon: "people",
    title: "Conversational AI",
    copy: "Capture human conversations that reflect natural turn-taking, follow-up questions, contextual references, corrections, hesitations, and interruptions relevant to real-time voice applications.",
    link: { label: "Conversational AI Training Data Services", href: "https://www.stepes.com/conversational-ai-training-data-services/" },
  },
  {
    icon: "headset",
    title: "Contact Center & Voice Analytics",
    copy: "Create controlled, purpose-built speech and conversation datasets for customer-service automation, agent-assist systems, voice analytics, call routing, and intent recognition.",
  },
  {
    icon: "brain",
    title: "Spoken Language Understanding & Voice Commands",
    copy: "Combine voice recordings with intent, entity, semantic, and dialogue annotations for natural language understanding, voice search, smart devices, automotive systems, and other speech-enabled applications.",
  },
];

const workflow = [
  {
    title: "Define the Dataset",
    copy: "Align languages, locales, speech types, speaker criteria, recording volume, scripts or scenarios, devices, environments, annotations, acceptance criteria, and delivery structure with your model objectives.",
  },
  {
    title: "Recruit & Qualify Speakers",
    copy: "Identify contributors who match agreed language, locale, accent, technical, and other project-specific requirements, using screening and sample recordings where appropriate.",
  },
  {
    title: "Capture Voice & Conversation Data",
    copy: "Guide approved speakers through scripts, scenarios, conversations, or spontaneous-speech tasks using defined recording instructions and technical requirements.",
  },
  {
    title: "Transcribe, Annotate & Structure",
    copy: "Transform raw recordings through transcription, segmentation, timestamps, speaker labeling, linguistic annotation, metadata creation, and customer-defined processing.",
  },
  {
    title: "Validate & Deliver",
    copy: "Apply audio, linguistic, annotation, metadata, and dataset-level checks before organizing the final delivery to the agreed naming conventions, schema, and formats.",
  },
];

const processing = [
  {
    icon: "text",
    title: "Multilingual Transcription",
    copy: "Convert speech recordings into aligned text using project-defined conventions, including verbatim or normalized transcription, punctuation rules, disfluencies, non-speech events, and language-specific requirements.",
  },
  {
    icon: "clock",
    title: "Segmentation & Timestamps",
    copy: "Divide recordings into usable speech units and align text with audio through utterance-level segmentation, phrase or sentence boundaries, start and end timestamps, and audio segment identifiers.",
  },
  {
    icon: "people",
    title: "Speaker Labeling & Diarization Support",
    copy: "Identify speaker turns within multi-speaker recordings and associate speech segments with the appropriate participant for conversational AI, meeting intelligence, contact-center systems, and other voice applications.",
  },
  {
    icon: "tag",
    title: "Intent & Semantic Annotation",
    copy: "Enrich speech transcripts with intent, named entities, dialogue functions, semantic categories, sentiment where required, topic classifications, and customer-defined labels or taxonomies.",
  },
  {
    icon: "database",
    title: "Metadata Structuring",
    copy: "Organize project-approved attributes such as language, locale, accent or dialect, speaker or session identifier, device, recording environment, acoustic condition, scenario, and other customer-defined fields.",
  },
  {
    icon: "code",
    title: "Custom Dataset Schemas",
    copy: "Deliver audio, transcription, annotation, and metadata using JSON, JSONL, CSV, TSV, structured spreadsheets, aligned transcripts, common audio formats, or customer-defined schemas.",
  },
];

const quality = [
  { icon: "user", title: "Speaker Qualification", copy: "Confirm that contributors meet the language, locale, accent, device, and other criteria defined for the project." },
  { icon: "sound", title: "Recording Validation", copy: "Review applicable requirements such as completeness, audio clarity, clipping, background conditions, prompt completion, file integrity, and recording specifications." },
  { icon: "globe", title: "Linguistic Validation", copy: "Use qualified language resources to review pronunciation, spoken content, language variant, accent or dialect requirements, and other linguistic criteria where applicable." },
  { icon: "text", title: "Transcription QA", copy: "Validate transcripts against project guidelines for accuracy, segmentation, punctuation, normalization, disfluencies, non-speech events, and other defined conventions." },
  { icon: "tag", title: "Annotation QA", copy: "Review labels for consistency with the annotation taxonomy, decision rules, examples, and acceptance requirements established for the program." },
  { icon: "check", title: "Dataset-Level Validation", copy: "Check the complete delivery for missing files, metadata completeness, naming conventions, schema integrity, language consistency, duplicates, invalid records, and other project-defined requirements." },
];

const related = [
  {
    title: "Multilingual AI Data Services",
    copy: "Create, collect, annotate, evaluate, and improve language data for global AI applications across 100+ languages.",
    href: "https://www.stepes.com/multilingual-ai-data-services/",
  },
  {
    title: "Conversational AI Training Data Services",
    copy: "Develop text-first prompt-response pairs, utterance and intent libraries, multi-turn dialogue flows, and other structured datasets for conversational models.",
    href: "https://www.stepes.com/conversational-ai-training-data-services/",
  },
  {
    title: "Multilingual Text Annotation Services",
    copy: "Transform multilingual text and transcripts into structured data using intent, entity, sentiment, semantic, classification, and customer-defined labels.",
    href: "https://www.stepes.com/multilingual-text-annotation-services/",
  },
  {
    title: "Multilingual AI Output Review",
    copy: "Evaluate and improve AI-generated content across languages using qualified human reviewers, structured criteria, linguistic correction, and customer-defined quality requirements.",
    href: "https://www.stepes.com/ai-output-review-services/",
  },
];

const faqs = [
  {
    q: "What types of multilingual voice data can Stepes collect?",
    a: "Stepes supports scripted speech, spontaneous speech, voice commands, wake words, short utterances, two-person and multi-speaker conversations, scenario-based recordings, accent and dialect datasets, code-switched speech, and other customer-defined audio collection requirements. Projects can be designed around specific languages, locales, speakers, devices, acoustic environments, and AI use cases.",
  },
  {
    q: "Can you recruit speakers with specific accents or dialects?",
    a: "Yes. Speaker recruitment can be configured according to language, country or locale, regional accent, dialect, language background, and other project-relevant criteria. Qualification methods depend on the program and can include screening questions, language verification, sample recordings, accent or dialect review, and technical checks.",
  },
  {
    q: "How many languages does Stepes support for voice data collection?",
    a: "Stepes supports multilingual AI and language programs across 100+ languages. Exact voice-data availability depends on the target language and locale, speaker criteria, collection volume, device and recording requirements, and project schedule. Contact our AI data team with your target markets and collection specifications so we can evaluate the appropriate recruitment and production approach.",
  },
  {
    q: "Can Stepes collect multi-speaker conversations?",
    a: "Yes. We can support two-person and multi-party voice collection using scripted, scenario-driven, semi-structured, or more spontaneous conversational formats. Depending on the project, recordings can capture natural turn-taking, follow-up questions, interruptions, contextual references, overlapping speech, and other conversational behaviors needed for voice AI and speech applications.",
  },
  {
    q: "Can you transcribe and annotate collected recordings?",
    a: "Yes. Stepes can provide an integrated workflow that combines voice collection with multilingual transcription, segmentation, timestamps, speaker labels, intent annotation, entity annotation, semantic labels, metadata, and customer-defined taxonomies. Deliverables can be structured around your existing model-development and data-processing pipeline.",
  },
  {
    q: "How does Stepes ensure voice data quality?",
    a: "Quality controls can include speaker qualification, recording validation, linguistic review, transcription QA, annotation validation, metadata checks, and final dataset-level quality control. Acceptance criteria are defined around the individual project so the QA process evaluates the attributes that matter to the intended use of the data.",
  },
  {
    q: "How are participant consent and voice-data handling managed?",
    a: "Stepes can configure collection workflows around project-specific requirements for contributor information and consent, approved data use, participant metadata, access controls, confidentiality, retention, transfer, deletion, and delivery. Because requirements vary by project, geography, dataset, and intended use, these controls are defined as part of the collection program.",
  },
  {
    q: "How is multilingual voice data collection priced?",
    a: "Pricing depends on the specific requirements of the dataset, including languages and locales, speaker criteria, number of contributors, number or duration of recordings, scripts and scenarios, devices and recording environments, recruitment complexity, transcription and annotation requirements, quality-control methodology, and delivery structure. Send us your collection specifications or a preliminary project brief, and Stepes can recommend an appropriate workflow and provide project-specific pricing.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const open = index === openIndex;
  const contentId = `faq-panel-${index}`;
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        className="faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer" id={contentId} hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function MultilingualVoiceConversationDataCollectionWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-wireframe">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .stepes-wireframe {
          color: ${COLORS.ink};
          background: ${COLORS.white};
          font-family: Inter, Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.62;
          overflow-wrap: anywhere;
          overflow-x: hidden;
        }
        .stepes-wireframe a { color: inherit; }
        .stepes-wireframe h1,
        .stepes-wireframe h2,
        .stepes-wireframe h3 {
          font-family: "Inter Tight", Inter, Arial, Helvetica, sans-serif;
          font-weight: 600;
          letter-spacing: -0.025em;
          margin: 0;
          color: ${COLORS.ink};
        }
        .stepes-wireframe h1 { font-size: 48px; line-height: 1.06; }
        .stepes-wireframe h2 { font-size: 36px; line-height: 1.12; }
        .stepes-wireframe h3 { font-size: 24px; line-height: 1.2; }
        .stepes-wireframe p { margin: 0; }
        .stepes-wireframe p + p { margin-top: 14px; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding: 0 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section-soft { background: ${COLORS.soft}; }
        .section-blush { background: ${COLORS.blush}; }
        .section-dark { background: ${COLORS.hero}; color: #F4F4F5; }
        .section-dark h2, .section-dark h3 { color: ${COLORS.white}; }
        .eyebrow {
          color: ${COLORS.magenta};
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .eyebrow-dark { color: ${COLORS.blushText}; }
        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.is-centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-heading.is-dark .section-intro { color: #C9CBD0; }
        .section-heading .section-intro { margin-top: 18px; font-size: 18px; line-height: 1.65; color: ${COLORS.text}; max-width: 810px; }
        .section-heading.is-centered .section-intro { margin-left: auto; margin-right: auto; }
        .body-copy, .body-copy p, .editorial-copy p { font-size: 16px; line-height: 1.67; color: ${COLORS.text}; }
        .section-dark .body-copy, .section-dark .body-copy p, .section-dark .editorial-copy p { color: #C9CBD0; }

        /* Hero */
        .hero {
          position: relative;
          overflow: hidden;
          background: ${COLORS.hero};
          color: ${COLORS.white};
          padding: 104px 0 100px;
        }
        .hero:after {
          content: "";
          position: absolute;
          inset: auto -120px -220px auto;
          width: 440px;
          height: 440px;
          border: 1px solid rgba(242,167,198,.12);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr); gap: 64px; align-items: center; }
        .hero h1 { color: ${COLORS.white}; max-width: 760px; }
        .hero-copy { font-size: 18px; line-height: 1.67; color: #D4D5D9; max-width: 720px; margin-top: 24px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
        .btn {
          min-height: 50px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 24px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn:focus-visible, .text-link:focus-visible, .related-row:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(242,167,198,.65); outline-offset: 3px; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: ${COLORS.magenta};
          color: #fff !important;
        }
        .btn-primary *, .btn-primary svg { color: #fff !important; fill: none; stroke: #fff !important; }
        .btn-primary:hover { background: ${COLORS.magentaDeep}; transform: translateY(-1px); box-shadow: 0 10px 28px rgba(193,29,99,.2); }
        .btn-secondary { color: ${COLORS.white}; border: 1px solid rgba(255,255,255,.36); background: rgba(255,255,255,.04); }
        .btn-secondary:hover { border-color: rgba(255,255,255,.7); background: rgba(255,255,255,.08); transform: translateY(-1px); }
        .hero-art { min-width: 0; }
        .hero-art-svg { display: block; width: 100%; height: auto; max-height: 520px; }

        /* Proof band */
        .proof-band { border-bottom: 1px solid ${COLORS.line}; background: #fff; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .proof-item { padding: 30px 30px; min-width: 0; }
        .proof-item + .proof-item { border-left: 1px solid ${COLORS.line}; }
        .proof-title { font-family: "Inter Tight", Inter, sans-serif; font-weight: 600; font-size: 20px; line-height: 1.22; color: ${COLORS.ink}; }
        .proof-copy { margin-top: 7px; font-size: 16px; line-height: 1.5; color: ${COLORS.muted}; }

        /* Collection types */
        .collection-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 56px; border-top: 1px solid ${COLORS.line}; }
        .editorial-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 20px; padding: 34px 0; border-bottom: 1px solid ${COLORS.line}; min-width: 0; }
        .icon-box { width: 44px; height: 44px; border-radius: 14px; background: ${COLORS.blush}; color: ${COLORS.magenta}; display: grid; place-items: center; flex: 0 0 auto; }
        .editorial-copy h3 { margin-bottom: 12px; }
        .text-link { display: inline-flex; align-items: center; gap: 7px; min-height:44px; margin-top: 8px; color: ${COLORS.magenta} !important; font-size: 16px; line-height: 1.4; font-weight: 600; text-decoration: none; }
        .text-link:hover { color: ${COLORS.burgundy} !important; }
        .text-link:hover .arrow { transform: translateX(3px); }
        .arrow { transition: transform .18s ease; display: inline-block; }

        /* Dataset dimensions */
        .dimensions-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 70px; align-items: start; }
        .sticky-heading { position: sticky; top: 34px; }
        .dimension-list { border-top: 1px solid #D8D9DD; }
        .dimension-row { display: grid; grid-template-columns: 44px 190px minmax(0,1fr); gap: 20px; align-items: start; padding: 28px 0; border-bottom: 1px solid #D8D9DD; }
        .dimension-row .small-icon { color: ${COLORS.magenta}; padding-top: 2px; }
        .dimension-row h3 { font-size: 20px; letter-spacing: -.015em; }
        .dimension-row p { font-size: 16px; line-height: 1.65; color: ${COLORS.text}; }

        /* Recruitment */
        .recruit-layout { display: grid; grid-template-columns: 1.02fr .98fr; gap: 72px; align-items: center; }
        .recruit-copy { max-width: 650px; }
        .recruit-copy .lead { font-size: 18px; line-height: 1.67; color: ${COLORS.text}; margin-top: 20px; }
        .criteria-list { margin: 28px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; }
        .criteria-list li { position: relative; padding-left: 22px; font-size: 16px; line-height: 1.55; color: ${COLORS.text}; }
        .criteria-list li:before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: ${COLORS.magenta}; position: absolute; left: 0; top: .55em; }
        .recruit-panel { border-radius: 30px; border: 1px solid ${COLORS.line}; background: #fff; padding: 34px; box-shadow: 0 20px 60px rgba(25,26,30,.06); }
        .recruit-panel-title { font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; line-height: 1.2; font-weight: 600; }
        .recruit-chain { margin-top: 28px; display: grid; gap: 0; }
        .recruit-step { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 16px; position: relative; padding-bottom: 24px; }
        .recruit-step:last-child { padding-bottom: 0; }
        .recruit-step:not(:last-child):after { content:""; position:absolute; left:20px; top:40px; bottom:4px; width:1px; background:${COLORS.line}; }
        .recruit-dot { width: 40px; height: 40px; border-radius: 50%; border: 1px solid #E1C6D2; background: ${COLORS.blush}; color: ${COLORS.magenta}; display:grid; place-items:center; z-index:1; }
        .recruit-step h3 { font-size: 19px; margin-top: 7px; }
        .recruit-step p { font-size: 16px; color: ${COLORS.text}; margin-top: 7px; }

        /* Applications */
        .application-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid ${COLORS.line}; border-left: 1px solid ${COLORS.line}; }
        .application-item { padding: 30px; border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; min-width: 0; }
        .application-icon { color: ${COLORS.magenta}; margin-bottom: 18px; }
        .application-item h3 { font-size: 21px; margin-bottom: 12px; }
        .application-item p { font-size: 16px; color: ${COLORS.text}; line-height: 1.65; }

        /* Workflow */
        .workflow-wrap { background: ${COLORS.hero}; border-radius: 30px; padding: 48px 42px 42px; color: #F4F4F5; }
        .workflow-wrap .eyebrow { color: ${COLORS.blushText}; }
        .workflow-head { max-width: 760px; }
        .workflow-head h2 { color: #fff; }
        .workflow-head p { margin-top: 18px; font-size: 18px; color: #C9CBD0; }
        .workflow-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); margin-top: 50px; }
        .workflow-step { position: relative; padding: 0 24px 0 0; min-width: 0; }
        .workflow-step:not(:last-child):after { content:""; position:absolute; top:17px; right:8px; width: calc(100% - 42px); height:1px; background:#555861; transform:translateX(50%); z-index:0; }
        .workflow-num { position: relative; z-index: 2; width: 36px; height: 36px; border-radius: 50%; display:grid; place-items:center; background:${COLORS.magenta}; color:#fff; font-size:13px; line-height:1; font-weight:600; }
        .workflow-step h3 { color:#fff; font-size:20px; margin-top:22px; }
        .workflow-step p { margin-top:12px; font-size:16px; line-height:1.6; color:#C9CBD0; }

        /* Processing */
        .processing-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 76px; align-items: start; }
        .processing-list { border-top: 1px solid ${COLORS.line}; }
        .processing-row { display:grid; grid-template-columns:44px 210px minmax(0,1fr); gap:20px; padding:28px 0; border-bottom:1px solid ${COLORS.line}; }
        .processing-row .process-icon { color:${COLORS.magenta}; }
        .processing-row h3 { font-size:20px; }
        .processing-row p { font-size:16px; color:${COLORS.text}; line-height:1.65; }

        /* QA */
        .quality-grid { display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:0; border:1px solid ${COLORS.line}; border-radius:28px; overflow:hidden; background:#fff; }
        .quality-item { padding:30px; min-width:0; }
        .quality-item:nth-child(-n+3) { border-bottom:1px solid ${COLORS.line}; }
        .quality-item:not(:nth-child(3n)) { border-right:1px solid ${COLORS.line}; }
        .quality-icon { color:${COLORS.magenta}; margin-bottom:18px; }
        .quality-item h3 { font-size:20px; margin-bottom:10px; }
        .quality-item p { font-size:16px; color:${COLORS.text}; line-height:1.65; }
        .quality-note { margin-top:28px; font-size:16px; line-height:1.65; color:${COLORS.text}; max-width:820px; }

        /* Governance */
        .govern-layout { display:grid; grid-template-columns:.82fr 1.18fr; gap:72px; align-items:start; }
        .govern-intro p { font-size:18px; color:#C9CBD0; line-height:1.67; margin-top:18px; max-width:560px; }
        .govern-list { border-top:1px solid #4D5058; }
        .govern-row { display:grid; grid-template-columns:46px minmax(0,1fr); gap:18px; padding:26px 0; border-bottom:1px solid #4D5058; }
        .govern-icon { color:${COLORS.blushText}; padding-top:2px; }
        .govern-row h3 { font-size:20px; }
        .govern-row p { margin-top:8px; font-size:16px; color:#C9CBD0; line-height:1.65; }
        .govern-row .text-link { color:${COLORS.blushText} !important; }
        .govern-row .text-link:hover { color:#fff !important; }

        /* Deliverables */
        .deliver-layout { display:grid; grid-template-columns:.92fr 1.08fr; gap:78px; align-items:center; }
        .dataset-stack { order:1; border:1px solid ${COLORS.line}; border-radius:30px; background:#fff; padding:28px; box-shadow:0 18px 54px rgba(25,26,30,.06); }
        .stack-label { font-size:11px; line-height:1.3; letter-spacing:.14em; text-transform:uppercase; color:${COLORS.magenta}; font-weight:600; margin:2px 0 18px; }
        .stack-layer { position:relative; border:1px solid ${COLORS.line}; border-radius:18px; padding:20px 20px 19px 58px; background:#fff; }
        .stack-layer + .stack-layer { margin-top:10px; }
        .stack-layer:before { content:""; position:absolute; left:22px; top:22px; width:18px; height:18px; border-radius:6px; background:${COLORS.blush}; border:1px solid #E8C5D4; }
        .stack-layer strong { display:block; font-family:"Inter Tight",Inter,sans-serif; font-size:18px; line-height:1.25; font-weight:600; color:${COLORS.ink}; }
        .stack-layer span { display:block; margin-top:5px; font-size:16px; line-height:1.5; color:${COLORS.muted}; }
        .deliver-copy { order:2; }
        .deliver-copy .lead { margin-top:18px; font-size:18px; line-height:1.67; color:${COLORS.text}; }
        .deliver-copy p { margin-top:18px; font-size:16px; color:${COLORS.text}; }
        .format-line { margin-top:28px; padding-top:24px; border-top:1px solid ${COLORS.line}; font-size:16px; color:${COLORS.text}; }
        .format-line strong { font-weight:600; color:${COLORS.ink}; }

        /* Why Stepes */
        .why-list { border-top:1px solid ${COLORS.line}; }
        .why-row { display:grid; grid-template-columns: minmax(260px,.75fr) minmax(0,1.25fr); gap:64px; padding:34px 0; border-bottom:1px solid ${COLORS.line}; align-items:start; }
        .why-row h3 { font-size:23px; }
        .why-row p { font-size:16px; line-height:1.68; color:${COLORS.text}; }

        /* Related */
        .related-wrap { border-radius:30px; background:${COLORS.soft}; padding:48px; }
        .related-top { display:grid; grid-template-columns:.75fr 1.25fr; gap:64px; margin-bottom:34px; }
        .related-top p { font-size:17px; color:${COLORS.text}; line-height:1.65; }
        .related-list { border-top:1px solid #DCDDE0; }
        .related-row { display:grid; grid-template-columns: minmax(250px,.72fr) minmax(0,1fr) auto; gap:30px; align-items:center; padding:25px 0; border-bottom:1px solid #DCDDE0; text-decoration:none; }
        .related-row h3 { font-size:20px; transition:color .18s ease; }
        .related-row p { font-size:16px; color:${COLORS.text}; line-height:1.55; }
        .related-row .related-arrow { color:${COLORS.magenta}; font-size:22px; transition:transform .18s ease; }
        .related-row:hover h3 { color:${COLORS.magenta}; }
        .related-row:hover .related-arrow { transform:translateX(4px); }

        /* FAQ */
        .faq-layout { display:grid; grid-template-columns:.7fr 1.3fr; gap:74px; align-items:start; }
        .faq-panel { border-top:1px solid ${COLORS.line}; }
        .faq-item { border-bottom:1px solid ${COLORS.line}; }
        .faq-question { width:100%; border:0; background:transparent; padding:25px 0; display:flex; align-items:flex-start; justify-content:space-between; gap:24px; color:${COLORS.ink}; text-align:left; font-family:"Inter Tight",Inter,sans-serif; font-size:20px; line-height:1.35; font-weight:600; cursor:pointer; }
        .faq-plus { color:${COLORS.magenta}; font-size:26px; line-height:1; font-weight:400; flex:0 0 auto; }
        .faq-answer { padding:0 56px 25px 0; }
        .faq-answer p { max-width:820px; font-size:16px; line-height:1.7; color:${COLORS.text}; }

        /* CTA */
        .final-cta { padding:88px 0; background:${COLORS.burgundy}; color:#fff; }
        .cta-inner { text-align:center; max-width:900px; margin:0 auto; }
        .final-cta h2 { color:#fff; }
        .final-cta p { margin:20px auto 0; max-width:780px; font-size:18px; line-height:1.67; color:#F4E9EE; }
        .final-actions { display:flex; justify-content:center; gap:14px; flex-wrap:wrap; margin-top:32px; }
        .final-cta .btn-primary,
        .final-cta .btn-primary:link,
        .final-cta .btn-primary:visited,
        .final-cta .btn-primary:hover,
        .final-cta .btn-primary:active,
        .final-cta .btn-primary:focus,
        .final-cta .btn-primary:focus-visible { background:#fff; color:${COLORS.burgundy} !important; }
        .final-cta .btn-primary * { color:${COLORS.burgundy} !important; }
        .final-cta .btn-primary:hover { background:#F8EDF2; box-shadow:none; }
        .final-cta .btn-secondary { color:#fff; border-color:rgba(255,255,255,.45); }

        @media (max-width: 1199px) {
          .shell { padding-left:40px; padding-right:40px; }
          .hero-grid { grid-template-columns: minmax(0,1.04fr) minmax(360px,.96fr); gap:42px; }
          .workflow-grid { grid-template-columns: repeat(5,minmax(0,1fr)); }
          .workflow-step { padding-right:18px; }
          .dimensions-layout, .processing-layout { gap:52px; }
          .application-item { padding:26px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left:24px; padding-right:24px; }
          .stepes-wireframe h1 { font-size:42px; }
          .stepes-wireframe h2 { font-size:32px; }
          .stepes-wireframe h3 { font-size:22px; }
          .hero { padding:92px 0 86px; }
          .hero-grid { grid-template-columns:1fr; gap:44px; }
          .hero-content { text-align:center; }
          .hero h1, .hero-copy { margin-left:auto; margin-right:auto; }
          .hero-actions { justify-content:center; }
          .hero-art { width:min(620px,100%); margin:0 auto; }
          .proof-grid { grid-template-columns:1fr 1fr; }
          .proof-item:nth-child(3) { border-left:0; border-top:1px solid ${COLORS.line}; }
          .proof-item:nth-child(4) { border-top:1px solid ${COLORS.line}; }
          .collection-grid { grid-template-columns:1fr; column-gap:0; }
          .dimensions-layout, .processing-layout, .recruit-layout, .deliver-layout, .faq-layout, .govern-layout { grid-template-columns:1fr; gap:44px; }
          .deliver-copy { order:1; }
          .dataset-stack { order:2; }
          .sticky-heading { position:static; }
          .dimensions-layout .section-heading, .processing-layout .section-heading, .deliver-copy .section-heading { text-align:center; margin-left:auto; margin-right:auto; }
          .dimensions-layout .section-heading .section-intro, .processing-layout .section-heading .section-intro, .deliver-copy .section-heading .section-intro { margin-left:auto; margin-right:auto; }
          .recruit-copy { max-width:760px; }
          .recruit-copy .section-heading { text-align:center; margin-left:auto; margin-right:auto; }
          .application-grid { grid-template-columns:1fr 1fr; }
          .workflow-wrap { padding:42px 34px; }
          .workflow-grid { grid-template-columns:1fr; margin-top:38px; }
          .workflow-step { display:grid; grid-template-columns:48px minmax(0,1fr); column-gap:18px; padding:0 0 28px; }
          .workflow-step:not(:last-child):after { left:17px; top:36px; bottom:0; width:1px; height:auto; right:auto; transform:none; }
          .workflow-num { grid-row:1 / span 2; }
          .workflow-step h3 { margin-top:4px; }
          .workflow-step p { grid-column:2; margin-top:8px; }
          .quality-grid { grid-template-columns:1fr 1fr; }
          .quality-item:nth-child(-n+3) { border-bottom:0; }
          .quality-item { border-bottom:1px solid ${COLORS.line} !important; }
          .quality-item:nth-child(odd) { border-right:1px solid ${COLORS.line}; }
          .quality-item:nth-child(even) { border-right:0; }
          .quality-item:nth-last-child(-n+2) { border-bottom:0 !important; }
          .related-top { grid-template-columns:1fr; gap:20px; text-align:center; }
          .related-top p { max-width:760px; margin:0 auto; }
          .related-row { grid-template-columns: minmax(220px,.7fr) minmax(0,1fr) auto; }
        }

        @media (max-width: 640px) {
          .shell { padding-left:20px; padding-right:20px; }
          .section { padding:68px 0; }
          .section.dense { padding:64px 0; }
          .stepes-wireframe h1 { font-size:38px; line-height:1.08; }
          .stepes-wireframe h2 { font-size:30px; line-height:1.14; }
          .stepes-wireframe h3 { font-size:20px; }
          .section-heading { margin-bottom:36px; }
          .section-heading.mobile-center { text-align:center; margin-left:auto; margin-right:auto; }
          .section-heading.mobile-center .section-intro { margin-left:auto; margin-right:auto; }
          .hero { padding:72px 0 68px; }
          .hero-copy { font-size:18px; }
          .hero-actions { display:grid; grid-template-columns:1fr; width:100%; }
          .btn { width:100%; min-height:52px; }
          .hero-art { margin-top:0; }
          .proof-grid { grid-template-columns:1fr; }
          .proof-item { padding:24px 0; }
          .proof-item + .proof-item, .proof-item:nth-child(3), .proof-item:nth-child(4) { border-left:0; border-top:1px solid ${COLORS.line}; }
          .editorial-item { grid-template-columns:42px minmax(0,1fr); gap:16px; padding:28px 0; }
          .icon-box { width:40px; height:40px; border-radius:13px; }
          .dimension-row { grid-template-columns:38px minmax(0,1fr); gap:14px 16px; padding:24px 0; }
          .dimension-row h3 { grid-column:2; }
          .dimension-row p { grid-column:2; }
          .criteria-list { grid-template-columns:1fr; gap:10px; }
          .recruit-panel { padding:26px 22px; border-radius:24px; }
          .application-grid { grid-template-columns:1fr; border-left:0; }
          .application-item { padding:26px 0; border-right:0; }
          .workflow-wrap { border-radius:24px; padding:34px 22px; }
          .workflow-head { text-align:left; }
          .workflow-head p { font-size:17px; }
          .processing-row { grid-template-columns:38px minmax(0,1fr); gap:14px 16px; padding:24px 0; }
          .processing-row h3 { grid-column:2; }
          .processing-row p { grid-column:2; }
          .quality-grid { grid-template-columns:1fr; border-left:0; border-right:0; border-radius:0; }
          .quality-item { padding:26px 0; border-right:0 !important; border-bottom:1px solid ${COLORS.line} !important; }
          .quality-item:last-child { border-bottom:0 !important; }
          .govern-layout .section-heading { text-align:left; }
          .govern-row { grid-template-columns:40px minmax(0,1fr); gap:14px; }
          .dataset-stack { border-radius:24px; padding:20px; }
          .stack-layer { padding:18px 16px 17px 50px; }
          .stack-layer:before { left:18px; top:20px; }
          .why-row { grid-template-columns:1fr; gap:10px; padding:28px 0; }
          .related-wrap { padding:32px 20px; border-radius:24px; }
          .related-row { grid-template-columns:1fr auto; gap:8px 20px; align-items:start; padding:24px 0; }
          .related-row p { grid-column:1 / -1; grid-row:2; }
          .related-row .related-arrow { grid-column:2; grid-row:1; }
          .faq-layout { gap:28px; }
          .faq-layout .section-heading { text-align:left; margin-bottom:0; }
          .faq-question { font-size:19px; padding:23px 0; }
          .faq-answer { padding:0 0 23px; }
          .final-cta { padding:72px 0; }
          .final-actions { display:grid; grid-template-columns:1fr; }
          .final-cta p { font-size:18px; }
        }

        @media (max-width: 520px) {
          .hero-art { display:none; }
        }

        @media (max-width: 340px) {
          .hero { padding-top:66px; }
          .stack-layer { padding-left:44px; padding-right:14px; }
          .stack-layer:before { left:14px; }
          .stepes-wireframe h1 { font-size:38px; }
          .stepes-wireframe h2 { font-size:30px; }
          .related-wrap { padding-left:18px; padding-right:18px; }
        }
      `}</style>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="shell hero-grid">
            <div className="hero-content">
              <div className="eyebrow eyebrow-dark">Multilingual AI Data Services</div>
              <h1 id="page-title">Multilingual Voice &amp; Conversation Data Collection Services</h1>
              <p className="hero-copy">
                Build high-quality multilingual speech and conversational audio datasets for automatic speech recognition, voice AI, text-to-speech, virtual assistants, and other speech-enabled applications. Stepes provides end-to-end multilingual speech and audio data collection, from targeted speaker recruitment and recording through transcription, annotation, validation, and structured delivery for AI training, testing, and evaluation.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote <Arrow /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to an AI Data Specialist</a>
              </div>
            </div>
            <div className="hero-art"><HeroArtwork /></div>
          </div>
        </section>

        <section className="proof-band" aria-label="Voice data collection capabilities">
          <div className="shell proof-grid">
            <div className="proof-item"><div className="proof-title">100+ Languages</div><div className="proof-copy">Global multilingual speech collection</div></div>
            <div className="proof-item"><div className="proof-title">Qualified Speakers</div><div className="proof-copy">Language, locale, accent, and dialect targeting</div></div>
            <div className="proof-item"><div className="proof-title">Real-World Voice Data</div><div className="proof-copy">Multiple devices, environments, and conversation types</div></div>
            <div className="proof-item"><div className="proof-title">Training-Ready Datasets</div><div className="proof-copy">Transcription, annotation, metadata, and QA</div></div>
          </div>
        </section>

        <section className="section" id="voice-data">
          <div className="shell">
            <SectionHeading
              title="Voice and Conversation Data We Collect"
              intro="Voice AI must understand how people actually speak, not just how sentences appear in text. Stepes designs multilingual speech data collection programs around your specific AI objectives, from tightly controlled scripted recordings to spontaneous conversations in realistic acoustic environments."
              centered
              className="mobile-center"
            />
            <div className="collection-grid">
              {collectionTypes.map((item) => (
                <EditorialItem key={item.title} icon={item.icon} title={item.title}>{item.copy}</EditorialItem>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="shell dimensions-layout">
            <div className="sticky-heading">
              <SectionHeading
                eyebrow="Dataset Design"
                title="Build the Voice Dataset Your Model Actually Needs"
                intro="Language is only one dimension of effective speech data. Stepes helps define collection variables around your model, users, deployment environment, and intended use case so the resulting dataset reflects the speech conditions your AI is likely to encounter."
                className="mobile-center"
              />
            </div>
            <div className="dimension-list">
              {datasetDimensions.map((item) => (
                <article className="dimension-row" key={item.title}>
                  <div className="small-icon"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell recruit-layout">
            <div className="recruit-copy">
              <SectionHeading title="Recruit the Speakers Your Model Needs" className="mobile-center" />
              <p className="lead">High-quality multilingual speech data starts with the right contributors. Stepes recruits and qualifies speakers according to the linguistic, geographic, technical, and project-specific requirements of each collection program.</p>
              <p className="body-copy" style={{ marginTop: 16 }}>This allows AI teams to move beyond generic voice datasets and capture speech that better reflects their intended users and deployment markets, from broad consumer populations to narrowly defined linguistic or domain requirements.</p>
              <ul className="criteria-list">
                <li>Language and locale</li>
                <li>Regional accent and dialect</li>
                <li>Native or other specified language background</li>
                <li>Project-relevant speaker criteria</li>
                <li>Domain familiarity when required</li>
                <li>Recording device and microphone</li>
                <li>Recording environment</li>
                <li>Other customer-defined qualifications</li>
              </ul>
            </div>
            <div className="recruit-panel" aria-label="Speaker recruitment and qualification process">
              <div className="recruit-panel-title">A controlled path from recruitment to validated recording</div>
              <div className="recruit-chain">
                {[
                  ["people", "Recruit", "Identify contributors who match the initial project criteria."],
                  ["filter", "Screen", "Verify required language, locale, accent, device, or other qualifications."],
                  ["check", "Qualify", "Use instructions, sample recordings, or project-specific qualification steps as appropriate."],
                  ["command", "Record", "Guide approved contributors through defined scripts, scenarios, conversations, or spontaneous-speech tasks."],
                  ["shield", "Validate", "Review recordings against linguistic, technical, and project-specific acceptance requirements."],
                ].map(([icon, title, copy]) => (
                  <div className="recruit-step" key={title}>
                    <div className="recruit-dot"><Icon name={icon} size={20} /></div>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section dense section-blush">
          <div className="shell">
            <SectionHeading
              title="Built for Modern Voice AI"
              intro="Stepes provides multilingual speech and conversation data for a broad range of voice-enabled AI applications, from traditional speech recognition to emerging real-time conversational systems."
              centered
              className="mobile-center"
            />
            <div className="application-grid">
              {applications.map((item) => (
                <article className="application-item" key={item.title}>
                  <div className="application-icon"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.link ? <a className="text-link" href={item.link.href}>{item.link.label} <Arrow /></a> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="shell">
            <div className="workflow-wrap">
              <div className="workflow-head">
                <div className="eyebrow eyebrow-dark">End-to-End Workflow</div>
                <h2>From Collection Brief to Training-Ready Dataset</h2>
                <p>Stepes manages multilingual voice programs through a structured workflow that connects collection requirements with speaker recruitment, recording, linguistic processing, quality assurance, and final dataset delivery.</p>
              </div>
              <div className="workflow-grid">
                {workflow.map((step, i) => (
                  <article className="workflow-step" key={step.title}>
                    <div className="workflow-num">{String(i + 1).padStart(2, "0")}</div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="shell processing-layout">
            <div>
              <SectionHeading
                title="Turn Raw Recordings Into Training-Ready Voice Data"
                intro="Audio collection is often only the beginning. Stepes can transform multilingual recordings into structured datasets for model training, fine-tuning, testing, evaluation, and analytics workflows."
                className="mobile-center"
              />
              <p className="body-copy">Native-language expertise helps maintain alignment between the spoken audio, transcripts, annotations, and metadata across languages.</p>
            </div>
            <div className="processing-list">
              {processing.map((item) => (
                <article className="processing-row" key={item.title}>
                  <div className="process-icon"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              title="Quality at Every Layer of the Voice Dataset"
              intro="Speech datasets contain multiple potential sources of error. Stepes applies quality controls across the complete dataset rather than treating audio quality as the only acceptance criterion."
              centered
              className="mobile-center"
            />
            <div className="quality-grid">
              {quality.map((item) => (
                <article className="quality-item" key={item.title}>
                  <div className="quality-icon"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <p className="quality-note">For complex programs, pilot and calibration stages can be used to validate instructions and acceptance criteria before scaling production.</p>
          </div>
        </section>

        <section className="section section-dark">
          <div className="shell govern-layout">
            <div className="govern-intro">
              <div className="eyebrow eyebrow-dark">Data Governance</div>
              <h2>Responsible Voice Data Collection</h2>
              <p>Voice data comes from people. Responsible collection therefore requires clearly defined participation, data-use, metadata, access, and handling requirements. Stepes works with customers to establish project-specific controls appropriate to the intended dataset and collection program.</p>
            </div>
            <div className="govern-list">
              <article className="govern-row">
                <div className="govern-icon"><Icon name="consent" /></div>
                <div><h3>Contributor Consent</h3><p>Collection workflows can incorporate project-defined contributor information and consent requirements so participants understand the nature of the recording activity and the approved use of their contributions.</p></div>
              </article>
              <article className="govern-row">
                <div className="govern-icon"><Icon name="target" /></div>
                <div><h3>Defined Data Use</h3><p>Voice data collection is aligned with the intended project purpose and customer requirements rather than gathering data without a defined application.</p></div>
              </article>
              <article className="govern-row">
                <div className="govern-icon"><Icon name="database" /></div>
                <div><h3>Project-Appropriate Metadata</h3><p>Speaker attributes and metadata should support a genuine dataset requirement. Stepes works with customers to identify the fields needed for the program and avoid unnecessary participant information.</p></div>
              </article>
              <article className="govern-row">
                <div className="govern-icon"><Icon name="lock" /></div>
                <div><h3>Controlled Access &amp; Customer-Specific Requirements</h3><p>Project data can be managed using appropriate access controls throughout collection, processing, quality review, and delivery, with workflows configured around customer-defined data access, retention, transfer, deletion, confidentiality, and other handling requirements.</p><a className="text-link" href="https://www.stepes.com/security/">Stepes Security <Arrow /></a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell deliver-layout">
            <div className="deliver-copy">
              <SectionHeading title="Structured Voice Data, Delivered Your Way" className="mobile-center" />
              <p className="lead">Different AI pipelines require different combinations of recordings, transcripts, labels, metadata, and documentation. Stepes configures the final dataset around your technical requirements rather than requiring your team to adapt to one predefined delivery model.</p>
              <p>The result is a validated multilingual dataset structured for your model-development environment.</p>
              <div className="format-line"><strong>Flexible delivery:</strong> audio files, aligned transcripts, structured metadata, annotation exports, QA documentation, and customer-defined dataset schemas.</div>
            </div>
            <div className="dataset-stack" aria-label="Training-ready voice dataset structure">
              <div className="stack-label">Training-Ready Dataset</div>
              <div className="stack-layer"><strong>Audio Files</strong><span>WAV, MP3, or customer-specified formats</span></div>
              <div className="stack-layer"><strong>Transcripts</strong><span>Verbatim, normalized, or custom conventions</span></div>
              <div className="stack-layer"><strong>Timing &amp; Speaker Structure</strong><span>Timestamps, segmentation, speaker labels, and turn boundaries</span></div>
              <div className="stack-layer"><strong>Annotations</strong><span>Intent, entities, sentiment, dialogue functions, and custom labels</span></div>
              <div className="stack-layer"><strong>Metadata</strong><span>Language, locale, accent, device, environment, session, and approved attributes</span></div>
              <div className="stack-layer"><strong>Dataset Package</strong><span>JSON, JSONL, CSV, TSV, structured spreadsheets, aligned transcripts, or custom schemas</span></div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="shell">
            <SectionHeading
              title="Why Stepes for Multilingual Voice Data Collection"
              intro="Building effective global voice AI requires both data operations and deep language expertise. Stepes combines multilingual knowledge, global execution, structured quality controls, and connected AI data services to help organizations develop voice datasets that reflect how users actually speak across markets."
              centered
              className="mobile-center"
            />
            <div className="why-list">
              <article className="why-row"><h3>Language-First Dataset Design</h3><p>Languages differ in pronunciation, grammar, dialect, formality, conversational behavior, and regional usage. Stepes applies professional linguistic expertise throughout dataset design, speaker qualification, transcription, annotation, and validation so these differences are addressed as part of the collection process.</p></article>
              <article className="why-row"><h3>Targeted Global Speaker Recruitment</h3><p>Build collections around the populations your application needs to understand. Stepes can recruit speakers according to language, locale, accent, dialect, device, environment, domain familiarity, and other project-relevant criteria.</p></article>
              <article className="why-row"><h3>Collection Through Training-Ready Delivery</h3><p>Work with one multilingual partner across speaker recruitment, recording, transcription, annotation, metadata, QA, and structured delivery. Connecting these stages helps maintain alignment between the original collection requirements and the final dataset.</p></article>
              <article className="why-row"><h3>Enterprise Quality &amp; Governance</h3><p>Support pilots, large-scale multilingual collections, recurring data programs, and ongoing model-improvement initiatives using defined specifications, managed workflows, structured validation, and customer-specific data handling requirements.</p></article>
            </div>
          </div>
        </section>

        <section className="section dense">
          <div className="shell">
            <div className="related-wrap">
              <div className="related-top">
                <div>
                  <h2>Related Multilingual AI Data Services</h2>
                </div>
                <p>Voice collection can be combined with other Stepes AI data capabilities to support the multilingual AI lifecycle, from dataset creation and annotation through model evaluation and ongoing output review.</p>
              </div>
              <div className="related-list">
                {related.map((item) => (
                  <a className="related-row" href={item.href} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <span className="related-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="shell faq-layout">
            <SectionHeading
              title="Multilingual Voice Data Collection FAQs"
              intro="Common questions about multilingual speech and audio data collection, speaker recruitment, transcription and annotation, quality controls, data handling, and project pricing."
            />
            <div className="faq-panel">
              {faqs.map((item, i) => (
                <FAQItem key={item.q} item={item} index={i} openIndex={openFaq} setOpenIndex={setOpenFaq} />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <div className="cta-inner">
              <h2>Build the Multilingual Voice Dataset Your AI Needs</h2>
              <p>Your users speak with different accents, dialects, devices, environments, and conversational styles. Stepes helps AI teams define, collect, transcribe, annotate, validate, and deliver multilingual speech and conversational datasets around the exact languages, speakers, scenarios, acoustic conditions, and data structures their applications require.</p>
              <p>From an initial pilot to a large-scale global collection program, we provide the multilingual expertise and structured workflows needed to turn human speech into high-quality, training-ready AI data.</p>
              <div className="final-actions">
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote <Arrow /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to an AI Data Specialist</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
