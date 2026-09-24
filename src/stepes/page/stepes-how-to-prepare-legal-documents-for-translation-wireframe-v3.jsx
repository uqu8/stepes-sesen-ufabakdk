import React, { useEffect, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/legal-translation/how-to-prepare-legal-documents-for-translation/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const LINKS = {
  resources: "https://www.stepes.com/resources/",
  translationGuides: "https://www.stepes.com/resources/translation-guides/",
  legalTranslation: "https://www.stepes.com/legal-translation-services/",
  bestPractices:
    "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/",
  risks:
    "https://www.stepes.com/resources/legal-translation/common-legal-translation-risks/",
  certifiedGuide:
    "https://www.stepes.com/resources/legal-translation/when-legal-documents-need-certified-translation/",
  legalVsCertified:
    "https://www.stepes.com/resources/legal-translation/legal-translation-vs-certified-translation/",
  certifiedServices: "https://www.stepes.com/certified-translation-services/",
  contractTranslation: "https://www.stepes.com/contract-translation-services/",
  courtTranslation: "https://www.stepes.com/court-document-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  security: "https://www.stepes.com/security/",
  quote: "https://app.stepes.com/quote/",
};

const breadcrumbs = [
  { label: "Resources", href: LINKS.resources },
  { label: "Translation Guides", href: LINKS.translationGuides },
  { label: "How to Prepare Legal Documents for Translation", current: true },
];

const tocItems = [
  { id: "preflight-checklist", label: "Preflight Checklist" },
  { id: "intended-use", label: "Confirm Intended Use" },
  { id: "authoritative-source", label: "Control Source Versions" },
  { id: "complete-legible", label: "Check Completeness" },
  { id: "editable-files", label: "Provide Editable Files" },
  { id: "organize-files", label: "Organize Document Sets" },
  { id: "terminology", label: "Share Terminology" },
  { id: "certification", label: "Confirm Certification" },
  { id: "format-delivery", label: "Define Format & Delivery" },
  { id: "security", label: "Set Security Requirements" },
  { id: "review", label: "Identify Reviewers" },
  { id: "timeline", label: "Set Timeline & Priorities" },
  { id: "mistakes", label: "Avoid Common Mistakes" },
  { id: "final-check", label: "Final Pre-Send Check" },
  { id: "faq", label: "FAQs" },
];

const quickAnswer = [
  {
    title: "Purpose and recipient",
    text: "Explain how the translation will be used, who will receive it, the relevant jurisdiction, and the required target language and locale.",
  },
  {
    title: "Final source package",
    text: "Identify the authoritative source version and include every schedule, exhibit, appendix, signature, stamp, and attachment that belongs with it.",
  },
  {
    title: "Terminology and references",
    text: "Provide defined terms, approved names, previous translations, bilingual precedents, glossaries, and other useful reference material.",
  },
  {
    title: "Formal and operational requirements",
    text: "Confirm certification, filing, formatting, security, review, and delivery requirements before production begins.",
  },
  {
    title: "Deadline and priorities",
    text: "Share the actual filing, signing, transaction, or review deadline and identify documents that need to move first.",
  },
];

const preflightGroups = [
  {
    number: "01",
    title: "Purpose & Recipient",
    items: [
      "How the translation will be used",
      "Who will receive, review, sign, file, publish, or rely on it",
      "The destination country or relevant jurisdiction",
      "The target language and required locale",
      "Whether the translation is for internal review, negotiation, execution, litigation, due diligence, regulatory use, filing, certification, or another purpose",
      "Whether the source or translated language is designated as controlling under the document or project instructions",
    ],
  },
  {
    number: "02",
    title: "Source Documents & Versions",
    items: [
      "Which file is the final or authoritative source",
      "Whether the document is executed, approved, draft, redlined, or reference-only",
      "That all exhibits, schedules, appendices, annexes, certificates, and attachments are included",
      "How signatures, seals, stamps, handwritten notes, comments, and tracked changes should be handled",
      "Which files require translation and which are provided only for reference",
    ],
  },
  {
    number: "03",
    title: "Terminology & Reference Materials",
    items: [
      "Defined terms and approved legal terminology",
      "Official entity and party names",
      "Previous translations and bilingual agreements or precedents",
      "Project or enterprise glossaries and translation memory",
      "Counsel-approved wording and relevant regulatory terminology",
      "Style or naming conventions",
    ],
  },
  {
    number: "04",
    title: "Certification, Formatting & Delivery",
    items: [
      "Whether certified translation is required",
      "Whether notarization, sworn translation, translator credentials, or another formality is required",
      "Instructions issued by the receiving court, regulator, agency, registry, institution, or other organization",
      "Required output format and source-layout or bilingual formatting requirements",
      "Treatment of tracked changes, comments, stamps, seals, and signatures",
      "Whether digital delivery is sufficient or another delivery format is required",
    ],
  },
  {
    number: "05",
    title: "Security, Review & Timeline",
    items: [
      "Confidentiality, NDA, privacy, or access requirements",
      "Approved file-transfer method",
      "Technology or AI-processing restrictions, if any",
      "Data-handling, retention, or location requirements",
      "The primary project contact and final translation reviewer",
      "Filing, signing, transaction, review, or publication deadlines",
      "Priority documents and phased-delivery requirements",
    ],
  },
];

const fileFormats = [
  {
    type: "Microsoft Word",
    recommendation:
      "Provide the final editable document together with the authoritative executed or approved copy when relevant. Retain styles, numbering, comments, and tracked changes if they need to be reflected in the workflow.",
  },
  {
    type: "PDF",
    recommendation:
      "Provide the final PDF and the corresponding editable original when available. Confirm whether the translated document should reproduce the source layout.",
  },
  {
    type: "Scanned PDF",
    recommendation:
      "Supply the clearest complete scan available. Check small text, handwritten notes, stamps, signatures, and page edges for legibility.",
  },
  {
    type: "Excel",
    recommendation:
      "Keep worksheets, formulas, references, hidden content, and non-translatable cells intact. Identify which cells or tabs require translation.",
  },
  {
    type: "PowerPoint",
    recommendation:
      "Provide the editable presentation and identify whether translated slides must maintain the original layout.",
  },
  {
    type: "Image files",
    recommendation:
      "Provide original or high-resolution images rather than compressed screenshots when possible.",
  },
];

const mistakes = [
  {
    number: "01",
    title: "Sending the wrong document version",
    avoid:
      "Submitting several drafts without identifying which one governs the project.",
    instead:
      "Mark the authoritative source clearly and identify other versions as draft or reference-only.",
  },
  {
    number: "02",
    title: "Omitting exhibits or supporting documents",
    avoid:
      "Sending only the main agreement, filing, or form when referenced schedules, annexes, exhibits, or attachments are part of the document set.",
    instead: "Verify completeness before the project begins.",
  },
  {
    number: "03",
    title: "Sending unreadable scans",
    avoid:
      "Relying on blurry images, cropped pages, compressed screenshots, or illegible handwriting when a clearer source exists.",
    instead:
      "Provide the highest-quality complete source available and flag anything that remains unreadable.",
  },
  {
    number: "04",
    title: "Discovering certification requirements after translation",
    avoid:
      "Assuming all certified translations, notarizations, or official submission formats are the same.",
    instead:
      "Confirm the receiving organization's requirements before the translation workflow is established.",
  },
  {
    number: "05",
    title: "Providing approved terminology too late",
    avoid:
      "Waiting until final review to share a previous contract translation, bilingual precedent, or glossary that could have guided the translation from the beginning.",
    instead: "Supply approved language with the project package.",
  },
  {
    number: "06",
    title: "Defining formatting and delivery at the end",
    avoid:
      "Requesting bilingual layout, source replication, tracked changes, special certification, or specific file output only after the translation is complete.",
    instead:
      "Define the expected deliverable during project intake.",
  },
];

const finalChecklistGroups = [
  {
    title: "Purpose & Scope",
    items: [
      "Identified the intended use of the translation",
      "Identified the recipient or receiving organization",
      "Confirmed the destination jurisdiction where relevant",
      "Confirmed the target language and locale",
    ],
  },
  {
    title: "Files & Versions",
    items: [
      "Identified the authoritative source version",
      "Included all pages, exhibits, schedules, and attachments",
      "Provided the editable source file when available",
      "Checked scanned documents for completeness and legibility",
      "Identified files that are reference-only",
    ],
  },
  {
    title: "Terminology, Formalities & Output",
    items: [
      "Provided defined terms and approved terminology",
      "Included relevant previous translations or bilingual precedents",
      "Confirmed certification, notarization, sworn-translation, or filing requirements",
      "Defined the required final file format and layout",
      "Explained how comments, tracked changes, signatures, stamps, and seals should be handled",
    ],
  },
  {
    title: "Security, Review & Timing",
    items: [
      "Communicated confidentiality and security requirements",
      "Communicated any restrictions on AI or automated translation technologies",
      "Identified the project contact and translation reviewer",
      "Shared the actual legal, filing, transaction, or review deadline",
      "Prioritized urgent documents or delivery batches",
    ],
  },
];

const relatedResources = [
  {
    title: "Legal Translation Best Practices",
    text: "Understand how intended use, legal-linguistic expertise, terminology, security, review, document integrity, and quality controls work together across the legal translation lifecycle.",
    href: LINKS.bestPractices,
  },
  {
    title: "Common Legal Translation Risks",
    text: "Learn where terminology, jurisdictional nuance, omissions, source-document issues, confidentiality, formatting, and insufficient review can create avoidable problems.",
    href: LINKS.risks,
  },
  {
    title: "When Legal Documents Need Certified Translation",
    text: "Understand how the document's intended use and the receiving organization's requirements determine whether certification may be required.",
    href: LINKS.certifiedGuide,
  },
  {
    title: "Legal Translation vs. Certified Translation",
    text: "Learn the difference between legal subject-matter translation and the formal certification that may accompany a translation for official submission.",
    href: LINKS.legalVsCertified,
  },
];

const faqs = [
  {
    q: "What should I provide when requesting a legal document translation?",
    a: "Provide the source documents, source and target languages, target locale where relevant, intended use, receiving organization, deadline, required output format, and any certification, formatting, security, or review instructions. Include all exhibits and attachments, along with previous translations, approved terminology, or bilingual reference material when available.",
  },
  {
    q: "Should I send a PDF or an editable Word file for legal translation?",
    a: "When available, provide both the authoritative final document and its corresponding editable source file. The final PDF or executed document can establish the source that must be translated, while the editable file can make translation, document formatting, and bilingual review more efficient. If only a PDF or scan is available, make sure it is complete and legible.",
  },
  {
    q: "Should I provide previous legal translations or terminology?",
    a: "Yes, when relevant. Previous translations, bilingual agreements, defined terms, glossaries, translation memories, precedent clauses, official entity names, and counsel-approved language can help translators maintain consistency across related documents. They should be treated as reference material and evaluated in the context of the current source rather than applied blindly.",
  },
  {
    q: "How do I know whether my legal document needs certified translation?",
    a: "Start with the court, government agency, regulator, registry, immigration authority, institution, counterparty, or other organization that will receive the translated document. Certification requirements depend primarily on intended use and recipient requirements, not simply on whether the content is legal. Confirm current requirements for certification, notarization, translator qualifications, sworn status, formatting, authentication, and delivery before translation begins.",
  },
  {
    q: "Should signatures, stamps, seals, and handwritten notes be translated?",
    a: "They should not be silently ignored when they are part of the source document. Depending on the document and intended use, these elements may need to be translated, transliterated, identified descriptively, or otherwise represented in the translated file. Share any instructions from the receiving authority before the project begins.",
  },
  {
    q: "What information should I provide about the intended use?",
    a: "Explain whether the translation is for internal understanding, negotiation, execution, due diligence, litigation, discovery, court filing, regulatory submission, certification, corporate use, or another purpose. Also identify who will receive or rely on the translation and the relevant jurisdiction or destination market. This information helps determine the appropriate terminology, resources, review level, formalities, and delivery format.",
  },
  {
    q: "How should I prepare a large set of legal documents for translation?",
    a: "Organize the files by matter, document type, priority, or required delivery sequence. Clearly separate translatable documents from reference-only material, identify the authoritative version of each file, include all related exhibits and attachments, and provide a master file list when useful. For urgent matters, identify the documents needed first so translation and review can proceed in priority batches.",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="checkIcon" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7.2 5.7 10 11 4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className={open ? "chevron chevronOpen" : "chevron"}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InlineLink({ href, children }) {
  return (
    <a className="inlineLink" href={href}>
      {children}
      <ArrowIcon size={14} />
    </a>
  );
}

function ArticleSection({ id, title, intro, children }) {
  return (
    <section id={id} className="articleSection anchorSection">
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
      {children}
    </section>
  );
}

export default function LegalDocumentTranslationPreparationGuide() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("preflight-checklist");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const targets = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.01, 0.2, 0.5] }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (event, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    setTocOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="stepesGuide">
      <style>{`
        :root {
          --ink: #242329;
          --ink-2: #3d3b43;
          --muted: #69666f;
          --muted-2: #8b8790;
          --line: #e7e2e5;
          --surface: #f7f5f6;
          --surface-2: #fbf9fa;
          --blush: #fff2f7;
          --blush-2: #fde4ee;
          --magenta: #c01863;
          --magenta-dark: #9e0f50;
          --dark: #2d2c32;
          --dark-2: #3a383f;
          --dark-eyebrow: #f2a7c6;
          --white: #ffffff;
          --radius-lg: 28px;
          --radius-md: 18px;
          --radius-sm: 12px;
          --shadow-soft: 0 18px 60px rgba(43, 35, 40, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; color: var(--ink); }
        a {
          color: inherit;
          overflow-wrap: anywhere;
        }
        button, a { -webkit-tap-highlight-color: transparent; }
        button { font: inherit; }

        .stepesGuide {
          background: #fff;
          color: var(--ink);
          overflow-x: clip;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 18px;
          line-height: 1.68;
        }

        .shell {
          width: min(1280px, calc(100% - 64px));
          margin: 0 auto;
        }

        .reading {
          width: min(760px, 100%);
        }

        .breadcrumbWrap {
          padding-top: 28px;
          background: #fff;
        }

        .breadcrumb {
          font-size: 14px;
          line-height: 1.45;
          color: var(--muted);
        }

        .breadcrumb ol {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          padding: 0;
          margin: 0;
        }

        .breadcrumb li {
          display: inline-flex;
          align-items: center;
          min-width: 0;
        }

        .breadcrumb a {
          text-decoration: none;
          color: var(--muted);
          border-radius: 5px;
        }

        .breadcrumb a:hover { color: var(--magenta); }
        .breadcrumb a:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 3px;
        }

        .breadcrumbCurrent {
          color: var(--ink-2);
          font-weight: 600;
        }

        .breadcrumbSep {
          color: #b8b4ba;
          margin-left: 8px;
          user-select: none;
        }

        .hero {
          padding: 28px 0 78px;
        }

        .heroGrid {
          display: block;
        }

        .heroCopy {
          max-width: 920px;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero h1,
        .articleSection h2,
        .summary h2,
        .faqSection h2,
        .relatedSection h2,
        .finalCta h2 {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          letter-spacing: -0.035em;
          color: var(--ink);
        }

        .hero h1 {
          margin: 0;
          max-width: 860px;
          font-size: clamp(42px, 4.25vw, 60px);
          line-height: 1.04;
        }

        .heroDeck {
          max-width: 820px;
          margin: 24px 0 0;
          font-size: 20px;
          line-height: 1.62;
          color: var(--ink-2);
        }

        .heroMeta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 24px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.45;
        }

        .heroMeta span {
          display: inline-flex;
          align-items: center;
        }

        .heroMeta span + span::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #bbb6bd;
          margin-right: 18px;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          padding: 12px 20px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: 160ms ease;
          border: 1px solid transparent;
        }

        .btnPrimary {
          color: #fff;
          background: var(--magenta);
        }

        .btnPrimary:hover {
          color: #fff;
          background: var(--magenta-dark);
          transform: translateY(-1px);
        }

        .btnPrimary:focus-visible,
        .btnSecondary:focus-visible,
        .resourceLink:focus-visible {
          outline: 3px solid rgba(192, 24, 99, 0.24);
          outline-offset: 3px;
        }

        .btnSecondary {
          color: var(--ink);
          border-color: var(--line);
          background: #fff;
        }

        .btnSecondary:hover {
          border-color: #cbc4c8;
          background: var(--surface-2);
        }


        .summaryBand {
          background: var(--blush);
          border-top: 1px solid #f3d8e4;
          border-bottom: 1px solid #f3d8e4;
        }

        .summary {
          padding: 58px 0 64px;
        }

        .summaryHead {
          display: grid;
          grid-template-columns: 0.76fr 1.24fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 32px;
        }

        .summary h2,
        .articleSection h2,
        .faqSection h2,
        .relatedSection h2,
        .finalCta h2 {
          margin: 0;
          font-size: clamp(34px, 3vw, 42px);
          line-height: 1.12;
        }

        .summaryLead {
          margin: 2px 0 0;
          max-width: 670px;
          font-size: 18px;
          color: var(--ink-2);
        }

        .takeaways {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid rgba(81, 51, 65, 0.14);
        }

        .takeaway {
          padding: 22px 20px 0 0;
          min-width: 0;
        }

        .takeaway + .takeaway {
          padding-left: 20px;
          border-left: 1px solid rgba(81, 51, 65, 0.14);
        }

        .takeaway strong {
          display: block;
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.35;
        }

        .takeaway p {
          margin: 0;
          color: var(--ink-2);
          font-size: 16px;
          line-height: 1.58;
        }

        .articleRegion {
          padding: 82px 0 92px;
        }

        .articleGrid {
          width: min(1100px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px minmax(0, 760px);
          gap: 64px;
          align-items: start;
        }

        .toc {
          position: sticky;
          top: 112px;
          align-self: start;
          max-height: calc(100vh - 144px);
          overflow: auto;
          padding-right: 10px;
        }

        .tocToggle {
          display: none;
          width: 100%;
          min-height: 48px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border: 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          font-weight: 600;
          cursor: pointer;
        }

        .tocLabel {
          margin-bottom: 14px;
          color: var(--ink);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .tocList {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tocItem {
          position: relative;
        }

        .tocItem a {
          display: block;
          position: relative;
          padding: 7px 0 7px 16px;
          color: var(--muted);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.42;
          border-left: 2px solid transparent;
        }

        .tocItem a:hover { color: var(--ink); }

        .tocItem.active a {
          color: var(--magenta);
          font-weight: 600;
          border-left-color: var(--magenta);
        }

        .tocItem a:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 2px;
          border-radius: 4px;
        }

        .chevron {
          transition: transform 160ms ease;
        }

        .chevronOpen {
          transform: rotate(180deg);
        }

        .article {
          min-width: 0;
        }

        .anchorSection {
          scroll-margin-top: 120px;
        }

        .articleSection {
          padding: 0 0 72px;
          margin: 0 0 72px;
          border-bottom: 1px solid var(--line);
        }

        .articleSection:last-of-type {
          border-bottom: 0;
        }

        .articleSection h2 {
          max-width: 780px;
        }

        .articleSection > h2:first-child {
          margin-top: 0;
        }

        .sectionIntro {
          margin: 20px 0 0;
          max-width: 800px;
          font-size: 19px;
          line-height: 1.64;
          color: var(--ink-2);
        }

        .article p {
          margin: 20px 0 0;
        }

        .article h3 {
          margin: 34px 0 10px;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .article ul,
        .article ol {
          margin: 18px 0 0;
          padding-left: 24px;
        }

        .article li {
          margin: 7px 0;
          font-size: 17px;
          line-height: 1.62;
        }

        .article li::marker {
          color: var(--magenta);
        }

        .inlineLink {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .inlineLink:hover { color: var(--magenta-dark); text-decoration: underline; }
        .inlineLink:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 3px;
          border-radius: 4px;
        }

        .preflight {
          width: min(900px, calc(100% + 140px));
          margin: 12px 0 82px -34px;
          padding: 48px;
          border-radius: var(--radius-lg);
          background: var(--dark);
          color: #fff;
          box-shadow: var(--shadow-soft);
        }

        .preflight .eyebrow {
          color: var(--dark-eyebrow);
        }

        .preflight h2 {
          color: #fff;
          margin: 0;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          letter-spacing: -0.035em;
          font-size: clamp(34px, 3vw, 42px);
          line-height: 1.12;
        }

        .preflightLead {
          max-width: 760px;
          margin: 18px 0 0;
          color: #ddd9df;
          font-size: 18px;
          line-height: 1.65;
        }

        .preflightGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 36px;
          margin-top: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
        }

        .preflightGroup {
          padding: 26px 0 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .preflightGroup:nth-child(odd) {
          padding-right: 18px;
        }

        .preflightGroup:nth-child(even) {
          padding-left: 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .preflightGroup:last-child {
          grid-column: 1 / -1;
          padding-left: 0;
          padding-right: 0;
          border-left: 0;
        }

        .preflightTitle {
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .preflightNumber {
          color: var(--dark-eyebrow);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .preflightGroup h3 {
          color: #fff;
          margin: 0;
          font-size: 21px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .preflightList {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }

        .preflightList li {
          display: grid;
          grid-template-columns: 20px 1fr;
          gap: 10px;
          margin: 10px 0;
          color: #efedf0;
          font-size: 16px;
          line-height: 1.55;
        }

        .checkIcon {
          width: 18px;
          height: 18px;
          margin-top: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(242, 167, 198, 0.62);
          border-radius: 5px;
          color: var(--dark-eyebrow);
        }

        .keyTakeaway {
          margin-top: 34px;
          padding: 22px 24px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .keyTakeaway strong {
          display: block;
          margin-bottom: 5px;
          color: var(--dark-eyebrow);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .keyTakeaway p {
          margin: 0;
          color: #fff;
          font-size: 17px;
        }

        .useCaseList {
          margin-top: 30px;
          border-top: 1px solid var(--line);
        }

        .useCaseRow {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 28px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }

        .useCaseRow strong {
          font-size: 16px;
          line-height: 1.45;
        }

        .useCaseRow span {
          color: var(--ink-2);
          font-size: 16px;
          line-height: 1.58;
        }

        .splitNote {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 28px;
        }

        .splitNote > div {
          padding-top: 18px;
          border-top: 2px solid var(--line);
        }

        .splitNote strong {
          display: block;
          margin-bottom: 8px;
          font-size: 17px;
        }

        .splitNote p {
          margin: 0;
          color: var(--ink-2);
          font-size: 16px;
          line-height: 1.6;
        }

        .qualityNote {
          margin-top: 30px;
          padding: 22px 24px;
          background: var(--blush);
          border-left: 3px solid var(--magenta);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .qualityNote strong {
          display: block;
          margin-bottom: 5px;
          color: var(--magenta);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .qualityNote p {
          margin: 0;
          color: var(--ink-2);
          font-size: 17px;
        }

        .fileTableWrap {
          width: min(880px, calc(100% + 120px));
          margin: 30px 0 0 -24px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
        }

        .fileTable {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
        }

        .fileTable thead th {
          padding: 16px 20px;
          background: var(--surface);
          text-align: left;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          border-bottom: 1px solid var(--line);
        }

        .fileTable tbody th,
        .fileTable tbody td {
          padding: 18px 20px;
          vertical-align: top;
          text-align: left;
          border-bottom: 1px solid var(--line);
          font-size: 16px;
          line-height: 1.58;
        }

        .fileTable tbody th {
          width: 190px;
          font-weight: 600;
        }

        .fileTable tbody td {
          color: var(--ink-2);
        }

        .fileTable tbody tr:last-child th,
        .fileTable tbody tr:last-child td {
          border-bottom: 0;
        }

        .numberedList {
          counter-reset: guideStep;
          list-style: none !important;
          padding: 0 !important;
          margin-top: 24px !important;
        }

        .numberedList li {
          counter-increment: guideStep;
          position: relative;
          padding: 18px 0 18px 54px;
          margin: 0 !important;
          border-top: 1px solid var(--line);
        }

        .numberedList li::before {
          content: counter(guideStep, decimal-leading-zero);
          position: absolute;
          left: 0;
          top: 18px;
          color: var(--magenta);
          font-size: 13px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .numberedList li:last-child {
          border-bottom: 1px solid var(--line);
        }

        .linkCluster {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin-top: 24px;
        }

        .linkCluster a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }

        .linkCluster a:hover { text-decoration: underline; }
        .linkCluster a:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 3px;
          border-radius: 4px;
        }

        .formatTypes {
          margin-top: 28px;
          border-top: 1px solid var(--line);
        }

        .formatType {
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }

        .formatType h3 {
          margin: 0 0 7px;
          font-size: 19px;
        }

        .formatType p {
          margin: 0;
          font-size: 16px;
          color: var(--ink-2);
        }

        .reviewRoles {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 28px;
          margin-top: 28px;
        }

        .role {
          padding-top: 17px;
          border-top: 2px solid var(--line);
        }

        .role strong {
          display: block;
          margin-bottom: 7px;
          font-size: 17px;
        }

        .role p {
          margin: 0;
          color: var(--ink-2);
          font-size: 16px;
        }

        .mistakeList {
          width: min(900px, calc(100% + 140px));
          margin: 30px 0 0 -34px;
          border-top: 1px solid var(--line);
        }

        .mistake {
          display: grid;
          grid-template-columns: 44px minmax(190px, 0.8fr) minmax(0, 1fr);
          gap: 22px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }

        .mistakeNumber {
          color: var(--magenta);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .mistake h3 {
          margin: 0;
          font-size: 19px;
          line-height: 1.35;
        }

        .avoidInstead {
          display: grid;
          gap: 10px;
        }

        .avoidInstead p {
          margin: 0;
          font-size: 16px;
          line-height: 1.58;
          color: var(--ink-2);
        }

        .avoidInstead strong {
          color: var(--ink);
        }

        .finalChecklistPanel {
          width: min(900px, calc(100% + 140px));
          margin: 30px 0 0 -34px;
          padding: 34px;
          background: var(--surface);
          border-radius: var(--radius-lg);
        }

        .finalChecklistGroups {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px 36px;
        }

        .finalChecklistGroup h3 {
          margin: 0 0 8px;
          padding-bottom: 12px;
          border-bottom: 2px solid #ddd6da;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 19px;
          line-height: 1.3;
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .finalChecklist {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          display: block;
        }

        .finalChecklist li {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 10px;
          margin: 0 !important;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 16px;
        }

        .finalChecklist .checkIcon {
          border-color: #d7a3b9;
          color: var(--magenta);
        }

        .faqSection {
          padding: 0 0 78px;
          margin: 0 0 78px;
          border-bottom: 1px solid var(--line);
        }

        .faqPanel {
          margin-top: 30px;
          border-top: 1px solid var(--line);
        }

        .faqItem {
          border-bottom: 1px solid var(--line);
        }

        .faqButton {
          width: 100%;
          min-height: 62px;
          padding: 18px 0;
          border: 0;
          background: transparent;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          text-align: left;
          color: var(--ink);
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
        }

        .faqButton:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 3px;
          border-radius: 6px;
        }

        .faqAnswer {
          padding: 0 44px 22px 0;
          color: var(--ink-2);
          font-size: 16px;
          line-height: 1.64;
        }

        .infoNote {
          padding: 22px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.62;
        }

        .relatedSection {
          padding: 0 0 96px;
        }

        .relatedIntro {
          max-width: 760px;
          margin: 18px 0 0;
          color: var(--ink-2);
          font-size: 18px;
        }

        .resourceGrid {
          width: min(900px, calc(100% + 140px));
          margin: 34px 0 0 -34px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .resourceCard {
          padding: 26px;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          background: #fff;
          transition: 160ms ease;
        }

        .resourceCard:hover {
          border-color: #d4cbd0;
          box-shadow: 0 14px 38px rgba(43, 35, 40, 0.06);
          transform: translateY(-2px);
        }

        .resourceCard h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.28;
          letter-spacing: -0.018em;
        }

        .resourceCard p {
          margin: 10px 0 0;
          color: var(--ink-2);
          font-size: 16px;
          line-height: 1.58;
        }

        .resourceLink {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 18px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .finalCtaWrap {
          padding: 0 0 96px;
          background: #fff;
        }

        .finalCta {
          width: min(1280px, calc(100% - 64px));
          margin: 0 auto;
          padding: 58px 60px;
          background: var(--blush);
          border: 1px solid #f0dce5;
          border-radius: var(--radius-lg);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: center;
        }

        .finalCtaCopy {
          max-width: 780px;
        }

        .finalCta p {
          margin: 18px 0 0;
          color: var(--ink-2);
          font-size: 18px;
        }

        .finalCtaActions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
          min-width: 240px;
        }

        .finalCtaActions .btn {
          width: 100%;
        }

        @media (max-width: 1120px) {
          .takeaways {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .takeaway:nth-child(4) {
            padding-left: 0;
            border-left: 0;
          }

          .takeaway:nth-child(n + 4) {
            padding-top: 24px;
            margin-top: 24px;
            border-top: 1px solid rgba(81, 51, 65, 0.14);
          }

          .articleGrid {
            grid-template-columns: 240px minmax(0, 1fr);
            gap: 48px;
          }

          .preflight,
          .fileTableWrap,
          .mistakeList,
          .finalChecklistPanel,
          .resourceGrid {
            width: 100%;
            margin-left: 0;
          }
        }

        @media (max-width: 900px) {
          .shell {
            width: min(100% - 48px, 1280px);
          }

          .hero {
            padding-bottom: 58px;
          }

          .heroCopy {
            max-width: 760px;
          }

          .summaryHead {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .articleRegion {
            padding-top: 58px;
          }

          .articleGrid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .toc {
            position: static;
            max-height: none;
            padding: 0;
            overflow: visible;
          }

          .tocLabel {
            display: none;
          }

          .tocToggle {
            display: flex;
          }

          .tocList {
            display: none;
            padding: 10px 0 14px;
            border-bottom: 1px solid var(--line);
          }

          .tocList.open {
            display: block;
          }

          .tocItem a {
            min-height: 44px;
            display: flex;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 16px;
          }

          .preflight {
            width: 100%;
          }

          .finalCta {
            width: min(100% - 48px, 1280px);
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .finalCtaActions {
            width: min(100%, 440px);
            min-width: 0;
          }
        }

        @media (max-width: 768px) {
          .stepesGuide {
            font-size: 17px;
          }

          .shell,
          .finalCta {
            width: min(100% - 40px, 1280px);
          }

          .breadcrumbWrap {
            padding-top: 20px;
          }

          .breadcrumb {
            font-size: 14px;
          }

          .hero {
            padding-top: 22px;
          }

          .heroCopy {
            max-width: 720px;
            margin: 0 auto;
            text-align: center;
          }

          .heroCopy .eyebrow,
          .heroDeck {
            margin-left: auto;
            margin-right: auto;
          }

          .hero h1 {
            font-size: clamp(38px, 10vw, 48px);
          }

          .heroDeck {
            font-size: 18px;
          }

          .heroMeta {
            justify-content: center;
            gap: 7px 12px;
          }

          .heroActions {
            justify-content: center;
          }


          .heroMeta span + span::before {
            margin-right: 12px;
          }

          .summary {
            padding: 46px 0 52px;
          }

          .takeaways {
            grid-template-columns: 1fr;
            border-top: 1px solid rgba(81, 51, 65, 0.14);
          }

          .takeaway,
          .takeaway + .takeaway,
          .takeaway:nth-child(4),
          .takeaway:nth-child(n + 4) {
            padding: 18px 0;
            margin: 0;
            border-left: 0;
            border-top: 0;
            border-bottom: 1px solid rgba(81, 51, 65, 0.14);
          }

          .preflight {
            padding: 34px 24px;
            margin-bottom: 64px;
          }

          .preflightGrid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .preflightGroup,
          .preflightGroup:nth-child(odd),
          .preflightGroup:nth-child(even),
          .preflightGroup:last-child {
            grid-column: auto;
            padding: 24px 0;
            border-left: 0;
          }

          .articleSection {
            padding-bottom: 58px;
            margin-bottom: 58px;
          }

          .sectionIntro {
            font-size: 18px;
          }

          .article p,
          .article li {
            font-size: 17px;
          }

          .useCaseRow {
            grid-template-columns: 1fr;
            gap: 5px;
            padding: 16px 0;
          }

          .splitNote,
          .reviewRoles,
          .finalChecklistGroups,
          .resourceGrid {
            grid-template-columns: 1fr;
          }

          .fileTableWrap {
            overflow: visible;
            border: 0;
            border-radius: 0;
          }

          .fileTable,
          .fileTable tbody,
          .fileTable tr,
          .fileTable th,
          .fileTable td {
            display: block;
            width: 100%;
          }

          .fileTable thead {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
            border: 0;
          }

          .fileTable tbody tr {
            margin-bottom: 14px;
            border: 1px solid var(--line);
            border-radius: var(--radius-sm);
            overflow: hidden;
          }

          .fileTable tbody th,
          .fileTable tbody td {
            border-bottom: 0;
          }

          .fileTable tbody th {
            padding: 16px 18px 8px;
            background: var(--surface);
          }

          .fileTable tbody td {
            padding: 10px 18px 18px;
            background: var(--surface);
          }

          .mistake {
            grid-template-columns: 34px 1fr;
            gap: 12px 16px;
          }

          .avoidInstead {
            grid-column: 2;
          }

          .finalChecklistPanel {
            padding: 24px;
          }

          .finalChecklist li {
            padding: 11px 0;
          }

          .finalCta {
            padding: 42px 28px;
          }
        }

        @media (max-width: 480px) {
          .shell,
          .finalCta {
            width: min(100% - 32px, 1280px);
          }

          .breadcrumb ol {
            gap: 6px;
          }

          .heroMeta {
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }

          .heroMeta span + span::before {
            display: none;
          }

          .breadcrumbSep {
            margin-left: 6px;
          }

          .hero {
            padding-bottom: 44px;
          }

          .heroActions {
            flex-direction: column;
          }

          .heroActions .btn {
            width: 100%;
          }


          .articleRegion {
            padding-top: 44px;
          }

          .preflight {
            padding: 28px 18px;
            border-radius: 22px;
          }

          .preflightGroup h3 {
            font-size: 20px;
          }

          .keyTakeaway {
            padding: 20px 18px;
          }

          .mistake {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .mistakeNumber {
            margin-bottom: -2px;
          }

          .avoidInstead {
            grid-column: auto;
          }

          .finalChecklistPanel {
            padding: 20px;
            border-radius: 20px;
          }

          .resourceCard {
            padding: 22px;
          }

          .finalCta {
            padding: 38px 22px;
            border-radius: 22px;
          }
        }
      `}</style>

      <div className="breadcrumbWrap">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((item, index) => (
                <li
                  key={item.label}
                  {...(item.current ? { "aria-current": "page" } : {})}
                >
                  {item.current ? (
                    <span className="breadcrumbCurrent">{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                  {index < breadcrumbs.length - 1 ? (
                    <span className="breadcrumbSep" aria-hidden="true">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <header className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">LEGAL TRANSLATION RESOURCES</div>
            <h1>How to Prepare Legal Documents for Translation</h1>
            <p className="heroDeck">
              Preparing legal documents for translation involves more than
              sending files and selecting a language. This guide explains how to
              prepare a complete source package, control document versions,
              provide terminology and reference materials, confirm certification
              and filing requirements, define security and review needs, and
              establish clear delivery expectations before your legal translation
              project starts.
            </p>

            <div className="heroMeta" aria-label="Guide information">
              <span>Preparation Guide</span>
              <span>Reviewed by the Stepes Legal Translation Team</span>
              <span>Updated September 2026</span>
            </div>

            <div className="heroActions">
              <a
                className="btn btnPrimary"
                href={sectionUrl("preflight-checklist")}
                onClick={(e) => jumpTo(e, "preflight-checklist")}
              >
                Jump to the Checklist
                <ArrowIcon />
              </a>
              <a
                className="btn btnSecondary"
                href={sectionUrl("final-check")}
                onClick={(e) => jumpTo(e, "final-check")}
              >
                View Final Pre-Send Check
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="summaryBand" id="quick-answer">
        <div className="shell summary">
          <div className="summaryHead">
            <div>
              <div className="eyebrow">QUICK ANSWER</div>
              <h2>What Should You Prepare Before Legal Translation?</h2>
            </div>
            <p className="summaryLead">
              The goal is simple: resolve preventable questions before
              translation begins so the translation team can work from the
              correct files, terminology, instructions, and expectations.
            </p>
          </div>

          <div className="takeaways">
            {quickAnswer.map((item) => (
              <div className="takeaway" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="articleRegion">
        <div className="shell">
          <div className="articleGrid">
            <nav className="toc" aria-label="In this guide">
              <button
                className="tocToggle"
                type="button"
                aria-expanded={tocOpen}
                aria-controls="guide-toc-list"
                onClick={() => setTocOpen((value) => !value)}
              >
                <span>In This Guide</span>
                <ChevronIcon open={tocOpen} />
              </button>

              <div className="tocLabel">In This Guide</div>
              <ol
                id="guide-toc-list"
                className={`tocList ${tocOpen ? "open" : ""}`}
              >
                {tocItems.map((item) => (
                  <li
                    className={`tocItem ${
                      activeId === item.id ? "active" : ""
                    }`}
                    key={item.id}
                  >
                    <a
                      href={sectionUrl(item.id)}
                      onClick={(e) => jumpTo(e, item.id)}
                      aria-current={activeId === item.id ? "location" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <main className="article">
              <section
                id="preflight-checklist"
                className="preflight anchorSection"
              >
                <div className="eyebrow">PRE-PROJECT CHECKLIST</div>
                <h2>Legal Document Translation Preflight Checklist</h2>
                <p className="preflightLead">
                  Before a legal translation project begins, confirm the
                  document purpose, source package, terminology, formal
                  requirements, security controls, review responsibilities, and
                  timeline.
                </p>

                <div className="preflightGrid">
                  {preflightGroups.map((group) => (
                    <div className="preflightGroup" key={group.number}>
                      <div className="preflightTitle">
                        <span className="preflightNumber">{group.number}</span>
                        <h3>{group.title}</h3>
                      </div>
                      <ul className="preflightList">
                        {group.items.map((item) => (
                          <li key={item}>
                            <CheckIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="keyTakeaway">
                  <strong>Key takeaway</strong>
                  <p>
                    Legal translation quality begins before the first sentence
                    is translated. A controlled source package and clear project
                    instructions reduce avoidable uncertainty throughout
                    translation, review, formatting, certification, and delivery.
                  </p>
                </div>
              </section>

              <ArticleSection
                id="intended-use"
                title="Start With How the Translation Will Be Used"
                intro="Two copies of the same legal document can require very different translation workflows depending on what happens to the translated version."
              >
                <p>
                  A contract translated so internal counsel can understand a
                  transaction may have different review and formatting
                  requirements from an agreement being negotiated with a
                  counterparty. A court exhibit may be subject to filing
                  instructions that do not apply to discovery materials being
                  translated for internal review. A corporate document intended
                  for an overseas registry may require formalities that would be
                  unnecessary for due diligence.
                </p>

                <p>Before translation begins, identify:</p>
                <ul>
                  <li>the intended use;</li>
                  <li>
                    the people or organizations that will rely on the
                    translation;
                  </li>
                  <li>the destination country or jurisdiction;</li>
                  <li>the target language and locale;</li>
                  <li>
                    whether the document will be reviewed, negotiated, executed,
                    filed, certified, or used as evidence; and
                  </li>
                  <li>
                    any requirements supplied by the receiving organization.
                  </li>
                </ul>

                <h3>Confirm the target locale, not just the language</h3>
                <p>
                  “French,” “Portuguese,” or “Spanish” may not be specific
                  enough when terminology, official conventions, or audience
                  expectations differ between markets. When relevant, identify
                  the required locale or destination market so appropriate
                  linguistic resources can be selected from the beginning.
                </p>

                <h3>Tell the translation team what the document needs to accomplish</h3>
                <div className="useCaseList">
                  {[
                    ["Internal legal review", "The translation is primarily intended to help counsel or business teams understand the source."],
                    ["Contract negotiation", "Parties will compare, revise, and discuss multilingual contractual language."],
                    ["Execution", "The translated document may be circulated as part of a signature-ready agreement package."],
                    ["Litigation or arbitration", "The content may support pleadings, evidence, discovery, attorney review, hearings, or proceedings."],
                    ["Court or regulatory filing", "A receiving authority may impose specific translation, certification, formatting, or submission requirements."],
                    ["M&A and due diligence", "Large document sets may require prioritization, triage, terminology continuity, and phased delivery."],
                    ["Corporate or compliance use", "Translations may need to remain consistent with policies, governance records, entity names, and recurring regulatory language."],
                  ].map(([title, text]) => (
                    <div className="useCaseRow" key={title}>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <p>
                  Resolving intended use early helps determine the appropriate
                  translation, review, certification, formatting, security, and
                  delivery workflow.
                </p>

                <div className="linkCluster">
                  <a href={LINKS.bestPractices}>
                    Explore Legal Translation Best Practices <ArrowIcon size={14} />
                  </a>
                  <a href={LINKS.courtTranslation}>
                    Court Document Translation Services <ArrowIcon size={14} />
                  </a>
                </div>
              </ArticleSection>

              <ArticleSection
                id="authoritative-source"
                title="Identify the Final, Authoritative Source Version"
                intro="Version control is one of the most important steps in preparing legal documents for translation."
              >
                <p>
                  Contracts are revised. Pleadings are updated. Transaction
                  documents circulate in multiple drafts. Policies receive
                  last-minute edits. Exhibits may be replaced shortly before
                  filing. When several similarly named files are submitted
                  without clear instructions, the risk of translating the wrong
                  version increases.
                </p>

                <h3>Establish one clear baseline</h3>
                <p>
                  Whenever possible, identify the final approved or authoritative
                  version before translation begins.
                </p>

                <p>
                  If translation must begin from a draft, label it clearly and
                  identify:
                </p>
                <ul>
                  <li>which sections remain subject to change;</li>
                  <li>when the final version is expected;</li>
                  <li>
                    whether the translated draft should be updated when the new
                    source arrives; and
                  </li>
                  <li>
                    whether tracked changes or a change log will be available.
                  </li>
                </ul>

                <h3>Provide the final document and editable source when possible</h3>
                <div className="splitNote">
                  <div>
                    <strong>The final authoritative document</strong>
                    <p>
                      This establishes the source that must be translated and can
                      preserve signatures, pagination, stamps, exhibits, and the
                      final visual record.
                    </p>
                  </div>
                  <div>
                    <strong>The corresponding editable source file</strong>
                    <p>
                      When available, an editable Word, Excel, PowerPoint, or
                      other native file can simplify translation, preserve
                      document structure, support comparison, and reduce
                      unnecessary manual formatting.
                    </p>
                  </div>
                </div>

                <p>
                  The editable file should not be assumed to replace the
                  authoritative version when the two differ.
                </p>

                <h3>Label reference-only files</h3>
                <p>
                  Prior agreements, related pleadings, bilingual precedents,
                  earlier translations, and other materials can provide valuable
                  context without being part of the translation scope. Mark them
                  clearly as <strong>reference only</strong> so there is no
                  uncertainty about what should be translated.
                </p>
              </ArticleSection>

              <ArticleSection
                id="complete-legible"
                title="Provide Complete and Legible Legal Documents"
                intro="Legal content often depends on relationships between pages, provisions, schedules, exhibits, footnotes, definitions, and referenced documents."
              >
                <p>
                  A translation can only preserve those relationships when the
                  source package is complete. Before submission, check that the
                  files include all relevant:
                </p>

                <ul>
                  <li>pages;</li>
                  <li>schedules;</li>
                  <li>exhibits;</li>
                  <li>annexes and appendices;</li>
                  <li>certificates;</li>
                  <li>tables and footnotes;</li>
                  <li>continuation and signature pages;</li>
                  <li>stamps and seals;</li>
                  <li>handwritten annotations; and</li>
                  <li>supporting documents included in the scope.</li>
                </ul>

                <h3>Check scanned documents carefully</h3>
                <p>For scanned PDFs and image-based files, verify that:</p>
                <ul>
                  <li>all pages are present;</li>
                  <li>text is in focus;</li>
                  <li>page edges are not cropped;</li>
                  <li>faint stamps and handwriting remain visible;</li>
                  <li>pages are oriented correctly; and</li>
                  <li>
                    the resolution is sufficient to read small text, numbers,
                    dates, and identifiers.
                  </li>
                </ul>

                <p>
                  Unclear source content should not be guessed. If a page,
                  signature, handwritten note, stamp, or other element is
                  partially illegible, resolving the issue before translation
                  begins can prevent unnecessary queries later.
                </p>

                <h3>Do not overlook non-body text</h3>
                <p>
                  Headers, footers, document numbers, exhibit labels, marginal
                  notes, stamps, seals, signatures, handwritten content, and text
                  embedded in images may be relevant to the document's use.
                </p>
                <p>
                  Tell the translation team whether these elements should be
                  translated, transliterated, described, retained as shown, or
                  treated according to the receiving organization's
                  requirements.
                </p>
              </ArticleSection>

              <ArticleSection
                id="editable-files"
                title="Provide Editable Source Files When Available"
                intro="Editable files generally make legal translation and multilingual formatting easier to manage."
              >
                <p>
                  Editable files can preserve document structure and reduce
                  manual recreation of tables, numbered clauses, footnotes,
                  cross-references, and other formatting. PDFs and scanned
                  documents can also be translated. The important point is to
                  provide the best available source and clarify what the finished
                  deliverable must look like.
                </p>

                <div className="fileTableWrap">
                  <table className="fileTable">
                    <thead>
                      <tr>
                        <th scope="col">Source file</th>
                        <th scope="col">Recommended preparation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fileFormats.map((row) => (
                        <tr key={row.type}>
                          <th scope="row">{row.type}</th>
                          <td>{row.recommendation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Plan for text expansion</h3>
                <p>
                  Translated text may be longer or shorter than the source. This
                  can affect tables, forms, text boxes, headings, signature
                  areas, and fixed-layout documents.
                </p>
                <p>
                  If layout fidelity matters, make it part of the project scope
                  at the beginning rather than treating formatting as a final
                  cosmetic step.
                </p>
              </ArticleSection>

              <ArticleSection
                id="organize-files"
                title="Organize Large Legal Document Sets Before Submission"
                intro="Clear organization becomes especially important when a matter includes dozens, hundreds, or thousands of files."
              >
                <p>
                  Use filenames and folder structures that allow the legal team
                  and translation team to understand what each file is and how
                  it relates to the rest of the project.
                </p>

                <ol className="numberedList">
                  <li>Use consistent document names.</li>
                  <li>
                    Include dates or version identifiers where useful.
                  </li>
                  <li>
                    Group files by matter, document type, language, or priority.
                  </li>
                  <li>Number files when sequence matters.</li>
                  <li>
                    Keep exhibits with the documents they support.
                  </li>
                  <li>
                    Separate translatable files from reference-only materials.
                  </li>
                  <li>
                    Provide a master file list for larger document sets.
                  </li>
                </ol>

                <p>
                  For urgent matters, identify the documents that need to be
                  translated first rather than marking an entire document
                  collection as equally urgent.
                </p>

                <div className="qualityNote">
                  <strong>Practical approach</strong>
                  <p>
                    A simple priority structure such as <b>Priority 1</b>,{" "}
                    <b>Priority 2</b>, and <b>Reference Only</b> can make a large
                    legal translation project much easier to scope and sequence.
                  </p>
                </div>
              </ArticleSection>

              <ArticleSection
                id="terminology"
                title="Share Defined Terms, Prior Translations, and Approved Legal Language"
                intro="Legal documents frequently establish their own vocabulary, and consistency becomes more difficult when each translation begins without access to language that has already been reviewed or approved."
              >
                <p>
                  A defined term introduced on page one may appear throughout an
                  agreement, its schedules, subsequent amendments, related
                  statements of work, and future renewals.
                </p>

                <p>Before translation begins, provide relevant:</p>
                <ul>
                  <li>defined terms;</li>
                  <li>legal glossaries;</li>
                  <li>official entity and party names;</li>
                  <li>bilingual contracts and previous translations;</li>
                  <li>precedent clauses;</li>
                  <li>counsel-approved terminology;</li>
                  <li>regulatory terminology;</li>
                  <li>
                    product or technical terminology used within the legal
                    documents;
                  </li>
                  <li>translation memories; and</li>
                  <li>
                    reviewer-approved language from earlier projects.
                  </li>
                </ul>

                <h3>Previous translations can be particularly valuable</h3>
                <p>
                  An earlier translation does not automatically need to be
                  copied. It can, however, show how an organization has
                  previously translated defined contractual terms, corporate
                  names, recurring clauses, department names, regulatory
                  expressions, product terminology, and specialized legal
                  concepts.
                </p>
                <p>
                  Qualified linguists can evaluate that language in the context
                  of the new document rather than recreating terminology without
                  reference.
                </p>

                <div className="linkCluster">
                  <a href={LINKS.terminology}>
                    Terminology Management <ArrowIcon size={14} />
                  </a>
                  <a href={LINKS.contractTranslation}>
                    Contract Translation Services <ArrowIcon size={14} />
                  </a>
                </div>
              </ArticleSection>

              <ArticleSection
                id="certification"
                title="Confirm Certification and Filing Requirements Before Translation Begins"
                intro="A document does not require certified translation simply because it is legal. Certification is usually determined by the document's intended use and the requirements of the organization receiving it."
              >
                <p>
                  A court, government agency, regulator, immigration authority,
                  registry, university, financial institution, or other
                  organization may establish its own requirements.
                </p>

                <p>Before ordering translation for formal use, confirm:</p>
                <ul>
                  <li>whether certification is required;</li>
                  <li>whether prescribed certification wording applies;</li>
                  <li>
                    whether the translator must meet specific qualification
                    requirements;
                  </li>
                  <li>whether notarization is required;</li>
                  <li>
                    whether a sworn, authorized, accredited, or court-recognized
                    translator is required in the destination jurisdiction;
                  </li>
                  <li>
                    whether the translated file must follow a particular format;
                  </li>
                  <li>
                    how signatures, stamps, seals, and handwritten content must
                    be represented;
                  </li>
                  <li>whether electronic delivery is accepted; and</li>
                  <li>
                    whether authentication, legalization, or another process
                    applies separately to the underlying document.
                  </li>
                </ul>

                <h3>
                  Certified, notarized, and sworn translation are not
                  interchangeable terms
                </h3>
                <p>
                  Requirements and terminology differ among jurisdictions and
                  receiving organizations. Do not assume that a certification
                  format accepted by one organization will satisfy another.
                </p>
                <p>
                  Whenever possible, send the receiving organization's current
                  instructions with the source documents.
                </p>

                <div className="qualityNote">
                  <strong>Important consideration</strong>
                  <p>
                    Stepes can prepare translations according to agreed
                    translation and certification requirements, but the
                    receiving organization or qualified legal counsel should
                    confirm applicable legal, filing, admissibility,
                    authentication, and jurisdiction-specific requirements.
                  </p>
                </div>

                <div className="linkCluster">
                  <a href={LINKS.certifiedServices}>
                    Certified Translation Services <ArrowIcon size={14} />
                  </a>
                  <a href={LINKS.certifiedGuide}>
                    When Legal Documents Need Certified Translation{" "}
                    <ArrowIcon size={14} />
                  </a>
                  <a href={LINKS.legalVsCertified}>
                    Legal Translation vs. Certified Translation{" "}
                    <ArrowIcon size={14} />
                  </a>
                </div>
              </ArticleSection>

              <ArticleSection
                id="format-delivery"
                title="Define How the Final Translation Needs to Function"
                intro="“We need it to look like the original” is a common request, but visual similarity is only one part of document usability."
              >
                <p>
                  Before translation begins, decide how the finished document
                  will be reviewed, compared, edited, submitted, or archived.
                </p>

                <div className="formatTypes">
                  {[
                    ["Source-Layout Translation", "The translated document follows the structure and presentation of the original as closely as practical."],
                    ["Editable Translation", "The client needs a Word, Excel, PowerPoint, or other editable output for further legal or business use."],
                    ["Bilingual Review Format", "Source and target text appear together to support attorney, reviewer, or stakeholder comparison."],
                    ["Tracked-Changes Delivery", "Reviewers need to see revisions or distinguish translated changes from previously approved language."],
                    ["Searchable PDF", "The final document needs searchable text rather than an image-only output."],
                    ["Recreated Forms or Complex Layouts", "Forms, certificates, court records, or scanned documents may require additional layout work to produce a usable multilingual version."],
                  ].map(([title, text]) => (
                    <div className="formatType" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Also identify how the translation should handle clause and
                  section numbering, page numbering, headings, cross-references,
                  tables, footnotes, schedules, exhibits, signature blocks,
                  stamps and seals, hyperlinks, comments, and tracked changes.
                </p>
                <p>
                  Formatting requirements are easier to accommodate when they
                  are known before translation and document production begin.
                </p>
              </ArticleSection>

              <ArticleSection
                id="security"
                title="Define Confidentiality, Security, and Technology Requirements Upfront"
                intro="Legal translation can involve commercially sensitive information, personal data, intellectual property, transaction materials, investigation records, litigation content, financial information, or potentially privileged communications."
              >
                <p>
                  Security requirements should therefore be treated as part of
                  project preparation rather than added after files have already
                  been distributed.
                </p>

                <p>
                  Before sharing documents, identify any requirements involving:
                </p>
                <ul>
                  <li>confidentiality agreements;</li>
                  <li>restricted project access;</li>
                  <li>secure file transfer;</li>
                  <li>approved reviewers or vendors;</li>
                  <li>personal or regulated data;</li>
                  <li>retention or deletion policies;</li>
                  <li>data-location requirements;</li>
                  <li>use of subcontractors;</li>
                  <li>translation memory or terminology reuse; and</li>
                  <li>
                    use of AI, machine translation, external language tools, or
                    other automated processing.
                  </li>
                </ul>

                <div className="qualityNote">
                  <strong>Redaction note</strong>
                  <p>
                    If information must be redacted before translation, the
                    client or legal team should make those decisions before file
                    submission. Avoid removing text that is needed to understand
                    defined terms, references, parties, dates, amounts, or other
                    context required for an accurate translation.
                  </p>
                </div>

                <h3>State AI and technology restrictions explicitly</h3>
                <p>
                  Organizations increasingly have their own policies governing
                  generative AI, machine translation, cloud processing, and
                  confidential data.
                </p>
                <p>
                  If your legal department, client, outside counsel, regulator,
                  or corporate security policy limits how content may be
                  processed, include those requirements in the project
                  instructions before work begins.
                </p>
                <p>
                  The appropriate workflow should be selected around the
                  content's intended use, confidentiality requirements, and risk
                  rather than assuming one technology model fits every legal
                  project.
                </p>

                <InlineLink href={LINKS.security}>
                  Explore Stepes Translation Security & Confidentiality
                </InlineLink>
              </ArticleSection>

              <ArticleSection
                id="review"
                title="Identify Who Will Review and Approve the Translation"
                intro="A legal translation project can lose time when several stakeholders provide conflicting feedback or when no one has authority to resolve terminology questions."
              >
                <p>Before kickoff, identify:</p>

                <div className="reviewRoles">
                  {[
                    ["Project contact", "Who can answer operational questions about files, scope, deadlines, and delivery?"],
                    ["Legal or subject-matter contact", "Who can clarify source-language meaning, matter-specific terminology, or contextual questions?"],
                    ["Translation reviewer", "Who will review the target-language content?"],
                    ["Final approver", "Who has authority to resolve conflicting reviewer feedback and approve the final language?"],
                  ].map(([title, text]) => (
                    <div className="role" key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  For multilingual projects, also determine whether reviews will
                  be centralized or handled separately by regional or in-country
                  teams.
                </p>

                <h3>Give reviewers the right context</h3>
                <p>
                  If reviewers have previously approved terminology, standard
                  clauses, or preferred language, supply that information before
                  translation whenever possible.
                </p>
                <p>
                  Reviewer feedback is most useful when it improves the
                  translation rather than introducing preferences that could have
                  been established during project preparation.
                </p>
              </ArticleSection>

              <ArticleSection
                id="timeline"
                title="Share the Real Deadline and Prioritize What Matters Most"
                intro="Legal translation deadlines are often tied to something larger: a filing, transaction, hearing, closing, board meeting, contract signature, regulatory submission, employee communication, or internal review."
              >
                <p>
                  Share that underlying deadline rather than only providing the
                  desired translation delivery date.
                </p>

                <p>A realistic project schedule may need to account for:</p>
                <ul>
                  <li>translation;</li>
                  <li>linguistic review;</li>
                  <li>client review;</li>
                  <li>question resolution;</li>
                  <li>certification;</li>
                  <li>formatting;</li>
                  <li>document-level QA;</li>
                  <li>final revisions; and</li>
                  <li>submission or delivery.</li>
                </ul>

                <h3>Prioritize urgent document sets</h3>
                <p>
                  When a matter contains multiple files, determine which
                  documents are actually needed first. Phased delivery can allow
                  priority documents to move into legal review while work
                  continues on the remaining material.
                </p>

                <h3>Avoid unnecessary source changes after kickoff</h3>
                <p>
                  Sometimes changes are unavoidable. When a source document is
                  revised during translation, provide a clearly versioned
                  replacement or tracked changes so the affected content can be
                  identified efficiently.
                </p>
                <p>
                  Uncontrolled mid-project revisions can create duplicated effort
                  and make it harder to confirm which translation corresponds to
                  which source.
                </p>
              </ArticleSection>

              <ArticleSection
                id="mistakes"
                title="Six Legal Translation Preparation Mistakes to Avoid"
                intro="Many preventable delays begin with unclear files, incomplete scope, or requirements that are discovered only after translation is already underway."
              >
                <div className="mistakeList">
                  {mistakes.map((item) => (
                    <div className="mistake" key={item.number}>
                      <div className="mistakeNumber">{item.number}</div>
                      <h3>{item.title}</h3>
                      <div className="avoidInstead">
                        <p>
                          <strong>Avoid:</strong> {item.avoid}
                        </p>
                        <p>
                          <strong>Instead:</strong> {item.instead}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InlineLink href={LINKS.risks}>
                  Explore Common Legal Translation Risks
                </InlineLink>
              </ArticleSection>

              <ArticleSection
                id="final-check"
                title="Final Check Before You Send Legal Documents for Translation"
                intro="Before submitting your files, confirm that the project package answers the essential questions a translation team will need to start correctly."
              >
                <div className="finalChecklistPanel">
                  <div className="finalChecklistGroups">
                    {finalChecklistGroups.map((group) => (
                      <section className="finalChecklistGroup" key={group.title}>
                        <h3>{group.title}</h3>
                        <ul className="finalChecklist">
                          {group.items.map((item) => (
                            <li key={item}>
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>

                <p>
                  If these items are clear, the legal translation project can
                  begin with a much stronger foundation.
                </p>
              </ArticleSection>

              <section id="faq" className="faqSection anchorSection">
                <h2>Legal Document Translation Preparation FAQs</h2>

                <div className="faqPanel">
                  {faqs.map((item, index) => {
                    const open = openFaq === index;
                    const answerId = `faq-answer-${index}`;
                    return (
                      <div className="faqItem" key={item.q}>
                        <button
                          className="faqButton"
                          type="button"
                          aria-expanded={open}
                          aria-controls={answerId}
                          onClick={() => setOpenFaq(open ? -1 : index)}
                        >
                          <span>{item.q}</span>
                          <ChevronIcon open={open} />
                        </button>
                        <div
                          className="faqAnswer"
                          id={answerId}
                          hidden={!open}
                        >
                          {item.a}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="infoNote">
                  <strong>Informational note:</strong> This guide provides
                  general information about preparing legal documents for
                  translation. Stepes provides professional language services and
                  does not provide legal advice. Applicable law, admissibility,
                  enforceability, filing requirements, certification
                  requirements, authentication procedures, and other
                  jurisdiction-specific legal questions should be confirmed with
                  the relevant receiving authority or qualified legal counsel.
                </div>
              </section>

              <section className="relatedSection">
                <div className="eyebrow">RELATED GUIDANCE</div>
                <h2>Continue Planning Your Legal Translation Workflow</h2>
                <p className="relatedIntro">
                  Legal document preparation is one part of a broader quality
                  process. Explore these related Stepes resources for deeper
                  guidance on translation controls, risks, certification, and
                  legal workflows.
                </p>

                <div className="resourceGrid">
                  {relatedResources.map((resource) => (
                    <article className="resourceCard" key={resource.title}>
                      <h3>{resource.title}</h3>
                      <p>{resource.text}</p>
                      <a className="resourceLink" href={resource.href}>
                        {resource.title}
                        <ArrowIcon size={14} />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <section className="finalCtaWrap">
        <div className="finalCta">
          <div className="finalCtaCopy">
            <div className="eyebrow">READY TO TRANSLATE?</div>
            <h2>Prepare Your Legal Translation Project With Confidence</h2>
            <p>
              A well-prepared source package helps establish the right legal
              translation workflow from the start. Stepes supports contracts,
              court documents, corporate records, compliance materials, and
              other legal content with qualified linguistic resources, secure
              workflows, terminology management, quality assurance, formatting,
              and certification when required by the project.
            </p>
          </div>

          <div className="finalCtaActions">
            <a className="btn btnPrimary" href={LINKS.quote}>
              Request a Quote
              <ArrowIcon />
            </a>
            <a className="btn btnSecondary" href={LINKS.legalTranslation}>
              Explore Legal Translation Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
