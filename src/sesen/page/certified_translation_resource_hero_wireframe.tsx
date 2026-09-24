import React from "react";
import { ArrowRight, BookOpen, Clock, FileCheck2 } from "lucide-react";

const headingStyle = {
  fontFamily: '"Inter Tight", "Inter", ui-sans-serif, system-ui, sans-serif',
};

const heroHighlights = [
  "When IRBs, ethics committees, sponsors, CROs, or local reviewers may request a certificate of translation accuracy",
  "How certified translation differs from notarized translation, sworn translation, and other submission-related documentation requirements",
  "What a certificate of translation accuracy should include for controlled life sciences translation workflows",
  "Why final source versions, reviewer coordination, and traceable QA steps matter before certification is issued",
];

const certificateIncludes = [
  "Source and target language",
  "Document title and version",
  "Statement of translation accuracy and completeness",
  "Translation provider or responsible party",
  "Date of certification",
  "Signature or authorized attestation",
  "Project or document reference information, when applicable",
];

const reviewBodies = [
  "Institutional Review Boards",
  "Ethics committees",
  "Regulatory authorities",
  "Ministries of health",
  "Local affiliates or country regulatory teams",
  "Notified bodies",
  "Clinical trial sites",
  "Sponsor or CRO quality teams",
  "Legal, compliance, or audit reviewers",
];

const documentGroups = [
  {
    title: "Clinical trial and IRB documents",
    intro:
      "Participant-facing and site-facing materials are among the most common life sciences documents that may be accompanied by a certificate of translation accuracy when translated for review or use.",
    items: [
      { label: "Informed consent forms", href: "https://www.sesen.com/informed-consent-form-translation-services/" },
      { label: "Assent forms" },
      { label: "Short-form consent documents" },
      { label: "Patient information sheets" },
      { label: "Recruitment materials" },
      { label: "Study instructions" },
      { label: "Site-facing materials" },
      { label: "Patient diaries and questionnaires" },
      { label: "Protocol synopses used with local review bodies" },
    ],
  },
  {
    title: "Regulatory submission documents",
    intro:
      "Submission and review teams may also request certified translation support for documents tied to country filings, authority review, or local dossier preparation.",
    items: [
      { label: "Clinical study reports" },
      { label: "Investigator’s brochures" },
      { label: "Protocols and amendments", href: "https://www.sesen.com/clinical-trial-translation-services/" },
      { label: "Common Technical Document materials" },
      { label: "Regulatory correspondence", href: "https://www.sesen.com/regulatory-translation-services/" },
      { label: "Certificates, declarations, and administrative forms" },
      { label: "Local registration documents" },
    ],
  },
  {
    title: "Labeling and product information",
    intro:
      "Product content often needs careful control of terminology, formatting, and version history when translated for multilingual review, approval, or distribution.",
    items: [
      { label: "Drug labeling" },
      { label: "Package inserts" },
      { label: "Patient information leaflets" },
      { label: "Summary of Product Characteristics" },
      { label: "Instructions for Use", href: "https://www.sesen.com/ifu-translation-services/" },
      { label: "Medical device labeling", href: "https://www.sesen.com/medical-device-labeling-translation-services/" },
      { label: "Packaging content" },
    ],
  },
  {
    title: "Quality, safety, and compliance documents",
    intro:
      "Certificates may also be requested for translated operational and compliance records when organizations need stronger documentation for inspections, audits, or cross-border review.",
    items: [
      { label: "SOPs" },
      { label: "Quality manuals" },
      { label: "CAPA documentation" },
      { label: "Audit reports" },
      { label: "Pharmacovigilance documents" },
      { label: "Safety narratives" },
      { label: "Training materials" },
      { label: "Manufacturing and CMC documentation" },
    ],
  },
  {
    title: "Legal and corporate support documents",
    intro:
      "Some administrative and corporate records may also require certified translation depending on the submission pathway, local market expectations, and intended use of the translated file.",
    items: [
      { label: "Powers of attorney" },
      { label: "Certificates of analysis" },
      { label: "Certificates of free sale" },
      { label: "Manufacturing licenses" },
      { label: "Authorization letters" },
      { label: "Distributor or local representative documentation" },
    ],
  },
];

const irbConsiderations = [
  "Why translated consent materials matter for participant understanding and ethically valid enrollment",
  "When a translated full consent form is generally preferred for planned non-English participant populations",
  "When a short-form consent process may be used under institution-specific or study-specific circumstances",
  "Why some IRBs and ethics committees request a certificate of translation accuracy with translated consent documents",
  "Why source version control matters before translation and certification begin",
  "Why certification should follow the final translated version rather than an interim draft",
];

const regulatoryExamples = [
  "Local language submission documents",
  "Regulatory authority questions and responses",
  "Clinical and nonclinical summaries",
  "Product information and labeling",
  "Administrative certificates and declarations",
  "Country-specific dossier attachments",
  "Translated documents requested by local affiliates",
];

const certificationComparison = [
  {
    title: "Certified translation",
    body:
      "A translation accompanied by a signed certificate of accuracy from the translation provider or other responsible party. In life sciences, it is commonly used to document translation accuracy and completeness for submission, review, or audit support.",
  },
  {
    title: "Notarized translation",
    body:
      "A translation certificate or affidavit signed in front of a notary. The notary generally verifies the signer’s identity or signature, not the linguistic accuracy of the translation itself.",
  },
  {
    title: "Sworn translation",
    body:
      "A translation completed by a translator authorized under a country-specific legal system. This requirement is more common in certain European, Latin American, and other civil-law jurisdictions.",
  },
  {
    title: "Apostille or legalization",
    body:
      "A separate authentication process that may be required for certain public or official documents used internationally. It is usually distinct from translation certification and should not be assumed to mean the same thing.",
  },
];

const certificateChecklist = [
  "Name of the translation provider",
  "Statement that the translation is accurate and complete to the best of the provider’s knowledge",
  "Source language",
  "Target language",
  "Document title",
  "Document version or date",
  "Project reference or file name",
  "Date of certificate issuance",
  "Name and title of authorized signer",
  "Signature",
  "Company contact information",
  "Optional reference to quality process, if appropriate",
  "Optional list of attached files or deliverables",
];

const qualityWorkflow = [
  "Qualified native linguists",
  "Life sciences subject-matter expertise",
  "Independent review where appropriate",
  "Terminology governance",
  "Translation memory leverage",
  "Version control",
  "Formatting and completeness checks",
  "Client or local reviewer coordination",
  "Final QA before certificate issuance",
  "Audit-ready delivery documentation",
];

const versionRisks = [
  "Certifying a translation before the source document is final",
  "Making local reviewer edits after certification without updating the certificate",
  "Certifying a Word file but submitting a formatted PDF with later layout changes",
  "Mixing translated content from multiple source versions",
  "Reusing a certificate from a prior document version",
  "Forgetting to document amended ICFs, protocol updates, or label revisions",
];

const aiSupportPoints = [
  "Terminology checks across repeated clinical and regulatory language",
  "Completeness review to help identify omissions or mismatches",
  "Formatting and structural checks across multilingual deliverables",
  "Consistency validation across file sets, updates, and recurring content",
  "Workflow efficiency improvements that help teams move faster without removing review controls",
];

const requestChecklist = [
  "Final source document",
  "Source language and target language",
  "Intended use of the translation",
  "Receiving authority, IRB, ethics committee, or institution",
  "Required certificate wording, if provided",
  "Any notarization or sworn translation requirement",
  "Document version number and date",
  "Required formatting or layout requirements",
  "Deadline and submission milestone",
  "Glossaries, previous translations, or style guides",
  "Local reviewer instructions",
  "Whether the certificate should cover one file or a package of files",
];

const sesenSupportPoints = [
  "ISO-certified translation and quality processes",
  "Life sciences linguists and subject-matter reviewers",
  "Terminology and translation memory governance",
  "Version control and reviewer coordination",
  "AI-assisted QA and validation support where appropriate",
  "Human-validated final delivery",
  "Translation certificates when required",
  "Audit-ready project documentation",
];

const quickNeedCertificate = [
  "Submitting translated informed consent materials to an IRB",
  "Providing translated documents to an ethics committee",
  "Sending translated regulatory materials to a local affiliate",
  "Supporting a country-specific regulatory submission",
  "Translating labeling, IFUs, or patient-facing materials for review",
  "Preparing audit-ready documentation for quality or compliance teams",
];

const commonMistakes = [
  "Certifying too early",
  "Submitting the wrong file version",
  "Assuming notarization confirms translation quality",
  "Forgetting local reviewer edits",
  "Certifying raw AI output",
  "Reusing old certificates for updated documents",
];

const quickComparison = [
  {
    title: "Certified translation",
    body: "Includes a signed certificate of accuracy from the translation provider or responsible party.",
  },
  {
    title: "Notarized translation",
    body: "Adds notary confirmation of the signer’s identity or signature, not a guarantee of linguistic quality.",
  },
  {
    title: "Sworn translation",
    body: "Uses a translator authorized under a country-specific legal system where sworn status is required.",
  },
];

const compactRequestChecklist = [
  "Final source document",
  "Source and target language",
  "Document version and date",
  "Intended use and receiving body",
  "Required certificate wording",
  "Notarization or sworn translation needs",
  "Formatting or layout requirements",
  "Submission deadline or milestone",
  "Glossaries, prior translations, or reviewer instructions",
];

const faqs = [
  {
    q: "What is a certificate of translation accuracy?",
    a: "A certificate of translation accuracy is a signed statement confirming that a translated document is accurate and complete to the best of the translation provider’s knowledge. It usually identifies the source and target languages, document title, version, date, and responsible provider or signer.",
  },
  {
    q: "Are certified translations required for all life sciences submissions?",
    a: "No. Certified translation requirements vary by document type, country, institution, regulatory authority, IRB, ethics committee, and intended use. Some submissions may require a certificate, while others may only require a controlled professional translation workflow.",
  },
  {
    q: "Do IRBs require certificates for translated informed consent forms?",
    a: "Some IRBs and institutions require translated informed consent forms to be submitted with a certificate of translation. Requirements vary, so sponsors and study teams should confirm the exact expectations with the reviewing IRB or ethics committee.",
  },
  {
    q: "Is certified translation the same as notarized translation?",
    a: "No. Certified translation confirms the translation provider’s statement of accuracy. Notarization generally confirms the identity or signature of the person signing the certificate, not the linguistic quality of the translation.",
  },
  {
    q: "Is certified translation the same as sworn translation?",
    a: "No. Sworn translation is country-specific and usually involves a translator authorized under a local legal system. It may be required for certain legal, administrative, or country-specific documents.",
  },
  {
    q: "Can AI-assisted translations be certified?",
    a: "AI-assisted translation should only be certified if it has gone through an appropriate controlled workflow with professional human review, QA, and final validation. Raw AI output should not be treated as certified translation for regulated life sciences use.",
  },
  {
    q: "When should the certificate be issued?",
    a: "The certificate should be issued after the translated document has completed translation, review, formatting, and final QA. If the translated file changes after certification, the certificate may need to be updated.",
  },
  {
    q: "Can Sesen provide certificates of translation accuracy?",
    a: "Yes. Sesen can provide certificates of translation accuracy for qualifying life sciences translation projects when required for regulatory, institutional, IRB, ethics committee, clinical, quality, or audit documentation purposes.",
  },
];

function BulletList({ items, columns = "sm:grid-cols-2" }) {
  return (
    <div className={`grid gap-x-8 gap-y-4 ${columns}`}>
      {items.map((item) => (
        <div key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
          <p className="text-base leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function CertifiedTranslationArticle() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <article className="relative overflow-hidden bg-white">
        <section className="relative border-b border-slate-200">
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#F4F7FF] via-[#FAFBFF] to-white" />
          <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4B6FD8]/8 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#4B6FD8]">
                <span>Clinical &amp; Regulatory Knowledge</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Certified Translation Guidance</span>
              </div>

              <h1
                className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-5xl"
                style={headingStyle}
              >
                Certified Translation Needs for Life Sciences Submissions
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                A practical guide to when life sciences teams may need a certificate of translation accuracy,
                how certified translation differs from notarized and sworn translation, and how to manage
                version control, review, and documentation for IRB, regulatory, clinical, and audit-ready
                submissions.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#4B6FD8]" />
                  Practical guidance
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#4B6FD8]" />
                  10 minute read
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                <span className="inline-flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-[#4B6FD8]" />
                  Regulated multilingual submissions
                </span>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4B6FD8]">
                What this guide covers
              </p>
              <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl border-t border-slate-200 pt-8">
              <p className="text-lg leading-8 text-slate-700">
                In life sciences, translation certificates are often requested alongside participant-facing
                materials, regulatory documentation, labeling content, quality records, or other multilingual
                files that need clear documentation of accuracy and completeness. The certificate itself is only
                one part of the process. It is most useful when tied to a controlled translation workflow with
                qualified linguists, version control, review, and final QA.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                This guide outlines when certified translation may be needed, what supporting documentation
                teams should prepare, and how to avoid common problems such as certifying the wrong version,
                overlooking reviewer edits, or confusing certified translation with notarization or sworn
                translation.
              </p>
              <a
                href="https://www.sesen.com/resources/clinical-regulatory-knowledge/certified-translation-life-sciences-submissions/#what-is-certified-translation"
                className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-[#4B6FD8] transition hover:text-[#3656B6]"
              >
                Start Reading
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="what-is-certified-translation" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                What Is a Certified Translation in Life Sciences?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                A certified translation in life sciences is a translated document accompanied by a signed
                statement confirming that the translation is accurate and complete to the best of the provider’s
                knowledge. The certificate is often used as supporting documentation when translated materials
                are prepared for clinical, regulatory, institutional, legal, or audit-related purposes.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                In practice, the certificate helps establish a clear documentary connection between the source
                file, the translated deliverable, and the organization responsible for the work. It supports
                traceability, but it does not replace the translation process itself. For regulated content, the
                value of the certificate depends on the quality controls behind the translation.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  What a certificate usually confirms
                </h3>
                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {certificateIncludes.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Certification documents the translation. It does not replace quality.
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  A certificate of translation accuracy is only meaningful when the underlying translation was
                  completed through qualified linguists, review, terminology control, version management, and
                  appropriate QA. On its own, the certificate is a formal record, not a substitute for
                  subject-matter expertise or controlled delivery practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="when-certified-translation-may-be-needed" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                When Are Certified Translations Needed for Life Sciences Submissions?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Certified translations may be required, commonly requested, or routinely included when
                translated documents are reviewed by organizations that need a more formal record of translation
                accuracy and completeness. The exact requirement depends on the receiving body, the country, the
                institution, the document type, and the intended use of the translation.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                In some cases, the certificate helps support IRB or ethics review. In others, it may be used to
                accompany local regulatory materials, administrative documents, labeling records, or audit-ready
                files. The key point is that certified translation should be treated as context-specific rather
                than assumed to be universally required for every life sciences submission.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                Review bodies and teams that may request certification
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {reviewBodies.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-[#DCE5FF] bg-[#F8FAFF] px-4 py-4 text-base leading-7 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-[#D7E2FF] bg-[#F6F9FF] p-6 sm:p-8">
              <p className="text-base leading-7 text-slate-700">
                For life sciences teams, the safest approach is to confirm certification expectations before the
                project begins, especially when documents are intended for IRB submission, local authority
                review, country registration support, patient-facing use, or formal audit documentation. That
                helps align the final translated file, certificate wording, version information, and review path
                before submission deadlines are involved.
              </p>
            </div>
          </div>
        </section>

        <section id="documents-that-may-require-certification" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Common Life Sciences Documents That May Require Certification
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Certified translation needs often vary by document type, submission pathway, and review context.
                The following categories are among the most common life sciences materials that may be
                accompanied by a certificate of translation accuracy when translated for clinical, regulatory,
                labeling, compliance, or administrative use.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The goal is not simply to translate the file, but to create a controlled record that ties the
                final translated document to the correct source version, language pair, and review purpose.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {documentGroups.map((group, index) => (
                <section
                  key={group.title}
                  className={`rounded-[1.75rem] border p-6 sm:p-8 ${
                    index % 2 === 0 ? "border-slate-200 bg-white" : "border-[#DCE5FF] bg-[#F8FAFF]"
                  }`}
                >
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                      {group.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-700">{group.intro}</p>
                  </div>
                  <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base leading-7 text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-[#4B6FD8] hover:decoration-[#4B6FD8]"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <p className="text-base leading-7 text-slate-700">{item.label}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                Why document type matters
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Certification decisions are rarely made in isolation. Participant-facing materials, submission
                documents, product information, quality records, and administrative files often move through
                different review paths and may carry different expectations for traceability, approval, and
                supporting documentation. Matching the certificate to the actual use case helps reduce avoidable
                delays, version confusion, and rework later in the submission process.
              </p>
            </div>
          </div>
        </section>

        <section id="irb-ethics-review" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Certified Translation for IRB and Ethics Committee Review
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                This is one of the most important use cases for certified translation in life sciences. When
                participant-facing documents are used in a study, they need to be understandable to the
                participant or legally authorized representative. If non-English-speaking participants are
                expected, IRBs and ethics committees may require translated consent materials before they can be
                used, and some institutions may also request a certificate of translation accuracy with the
                translated document set.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                In practice, the goal is not just linguistic conversion. The translated consent package must
                remain aligned with the approved source, preserve the meaning of risk, benefit, procedure, and
                rights language, and be supported by documentation that helps the reviewing body understand what
                was translated, from which version, and by whom.
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  What review teams often need to see
                </h3>
                <div className="mt-5 space-y-4">
                  {irbConsiderations.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Practical guidance for consent materials
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  When a study expects ongoing enrollment of participants who read another language, a fully
                  translated consent form is often the stronger and more durable approach because it gives the
                  reviewing body a complete participant-facing document to approve and helps sites maintain a
                  clearer documentation trail.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Short-form consent may still be used in some circumstances, but the exact appropriateness of
                  that approach depends on the institution, study procedures, and applicable review framework.
                  Teams should confirm the reviewing body’s expectations early rather than assume that any one
                  consent pathway will be accepted across all studies or sites.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  For ICFs and assent forms, the safest practice is usually to finalize or receive IRB-approved
                  English source content before certification. If the English source changes after translation,
                  the translated file and its certificate may both need to be updated to remain accurate.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-[#D7E2FF] bg-[#F6F9FF] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                Why timing matters
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Certification should usually be completed only after the final translated version is ready for
                submission or use. Certifying too early can create avoidable rework if local reviewer edits,
                source amendments, formatting updates, or IRB-requested changes occur after the certificate has
                already been issued.
              </p>
            </div>
          </div>
        </section>

        <section id="regulatory-submissions" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Certified Translation for Regulatory Submissions
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Certified translations may also be useful when regulatory documents move across countries,
                health authorities, local affiliates, and regional review teams. Exact translation requirements
                vary by market, but documentation quality, traceability, and version control remain consistently
                important throughout regulatory workflows.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The key nuance is that certification should not be treated as automatically required for every
                CTD or eCTD component. In many cases, certified translation may instead be requested for
                specific submission elements, country-specific documentation, institutional records,
                administrative forms, local supporting files, or audit-related documentation.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Examples of where certification may be useful
                </h3>
                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {regulatoryExamples.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  What regulatory teams should watch closely
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  For regulatory work, the most important issue is often not whether a certificate exists in the
                  abstract, but whether the certificate matches the exact translated file being submitted. That
                  includes the correct document title, version, language pair, review stage, and final file
                  state.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  This becomes especially important when translated materials move through multiple hands,
                  including central regulatory teams, in-country affiliates, local reviewers, publishing teams,
                  and quality functions. Clear traceability helps reduce confusion around which file was
                  certified and whether later edits changed the certified content.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  For sponsors and global submission teams, confirming the receiving market’s documentation
                  expectations before translation begins is often the most efficient way to avoid unnecessary
                  certification steps in one market and missing required support in another.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certified-vs-notarized-vs-sworn" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Certified Translation vs. Notarized Translation vs. Sworn Translation
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                These terms are often confused, but they do not mean the same thing. Clarifying the difference
                early can prevent delays, unnecessary notary steps, or submission problems caused by providing
                the wrong form of supporting documentation.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                In life sciences, the correct requirement depends on the country, the receiving body, the type
                of document, and the purpose of the translated file. A certificate of translation accuracy may
                be enough in one case, while a notarized or sworn translation may be needed in another.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {certificationComparison.map((item) => (
                <section key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">{item.body}</p>
                </section>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-[#D7E2FF] bg-[#F6F9FF] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                The practical takeaway
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Life sciences teams should confirm which type of certification or authentication is actually
                required before translation begins, especially for country-specific regulatory filings, legal
                documents, notarized records, or local affiliate submissions. That simple check can prevent the
                team from ordering the wrong service, certifying the wrong file, or delaying a submission while
                additional documentation is added later.
              </p>
            </div>
          </div>
        </section>

        <section id="certificate-of-translation-accuracy-includes" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                What Should a Certificate of Translation Accuracy Include?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                This is one of the most practical questions teams ask when preparing multilingual files for
                review or submission. A certificate of translation accuracy should be specific enough to clearly
                identify the translation, the responsible provider, and the exact document being certified.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                For regulated life sciences content, version details matter especially because even small edits
                can change which document is actually being submitted. The certificate should correspond to the
                exact translated file being delivered, not an earlier draft, a reviewer markup file, or a layout
                version that was later changed.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Recommended certificate checklist
                </h3>
                <BulletList items={certificateChecklist} columns="sm:grid-cols-2" />
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Why version information matters so much
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  In regulated environments, the certificate should function as a clear documentary link between
                  the final translated deliverable and the source material from which it was produced. If the
                  document title, version date, file reference, or delivery state is unclear, the certificate can
                  create confusion instead of reducing it.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  That is why the most useful certificates are tied to the exact translated file package that is
                  ready for submission, review, or formal use. Clear identifiers help the sponsor, CRO, site,
                  regulatory team, or institution see exactly what was certified and when.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-certification-alone-is-not-enough" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Why Certification Alone Is Not Enough for Regulated Content
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                A certificate is a documentation artifact. It does not automatically mean the translation was
                produced with the right subject-matter expertise, terminology control, formatting checks, or
                review process. For regulated content, the quality of the underlying workflow matters just as
                much as the existence of the certificate itself.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                That distinction is important because many buyers associate certified translation with formal
                accountability, but accountability in life sciences depends on more than a signed statement. It
                depends on whether the translation was prepared, reviewed, and delivered through a controlled
                process that fits the document type and intended use.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  A stronger workflow for regulated translation
                </h3>
                <BulletList items={qualityWorkflow} columns="sm:grid-cols-2" />
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  How Sesen approaches certified translation needs
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Sesen supports certified translation needs through controlled life sciences workflows that
                  combine professional linguists, quality review, terminology management, AI-assisted QA where
                  appropriate, and human accountability for the final delivery.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  That approach is designed to help sponsors, CROs, regulatory teams, and study teams manage not
                  just the certificate, but the broader translation process around it. The certificate then
                  becomes a supporting document within a stronger, more traceable multilingual workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="version-control-certification-risk" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Version Control: The Most Common Certification Risk
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Certified translation can create problems when the certificate references the wrong source
                version or when translated files change after certification. In practice, this is one of the
                most common reasons certificates need to be reissued or clarified.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The risk is not theoretical. It shows up when source files are still evolving, when reviewers
                make edits late in the process, or when a final submission package is assembled from materials
                that no longer match the certificate details. Strong version control is what keeps the
                certificate aligned to the actual deliverable.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Common version-control risks
                </h3>
                <div className="mt-5 space-y-4">
                  {versionRisks.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Recommended best practice
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  The certificate should be generated only after the translated file has completed the agreed
                  translation, review, formatting, and final QA steps. That reduces the chance that later edits,
                  file swaps, or publishing changes will break the documentary link between the certificate and
                  the actual submission file.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  For life sciences teams, the simplest discipline is often the most effective: finalize the
                  source, complete the translation workflow, confirm the final deliverable package, and then
                  issue the certificate against that exact file set. Doing those steps in order helps prevent a
                  small documentation artifact from turning into a larger submission problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-assisted-translation-and-certification" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                AI-Assisted Translation and Certification
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                AI-assisted workflows can support translation operations in useful ways, including speed,
                terminology checks, completeness review, formatting checks, and consistency validation.
                However, for certified life sciences translations, human review and professional accountability
                remain essential.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                A certificate of translation accuracy should reflect the completed human-validated translation,
                not an unreviewed machine-generated draft. That distinction matters because regulated content is
                evaluated not only for linguistic output, but also for intended use, terminology precision,
                traceability, and readiness for review or submission.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-[1.9rem] border border-[#D7E2FF] bg-[linear-gradient(180deg,#F7FAFF_0%,#FFFFFF_100%)] p-6 sm:p-8 lg:p-10">
              <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                <span className="font-semibold text-slate-950">The practical standard for certified translation is straightforward:</span>{" "}
                AI can support the workflow, but expert human linguists and reviewers still need to validate
                accuracy, terminology, intended use, and final deliverables before certification is issued.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <section className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Where AI adds value
                </h3>
                <div className="mt-4 space-y-3">
                  {aiSupportPoints.map((item) => (
                    <p key={item} className="text-base leading-7 text-slate-700">
                      {item}
                    </p>
                  ))}
                </div>
              </section>
              <section className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  What still requires human validation
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Accuracy, risk language, intended use, document context, and final delivery quality still need
                  professional human review before certification.
                </p>
              </section>
              <section className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  How SesenGPT fits
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  SesenGPT-enabled workflows can support terminology, QA checks, and workflow efficiency while
                  keeping expert human validation at the center of final delivery.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section id="how-to-request-certified-translation" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                How to Request Certified Translation for a Life Sciences Submission
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Teams can avoid delays and rework by preparing the right information before requesting a
                certified translation. The more clearly the submission context is defined at the start, the
                easier it is to align the translation workflow, certificate wording, document version, and final
                delivery package.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                This is especially important when the translated file will be reviewed by an IRB, ethics
                committee, authority, local affiliate, or institutional reviewer that may have its own
                expectations around formatting, documentation, or supporting certification language.
              </p>
            </div>

            <div className="mt-10 rounded-[1.9rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                    Information to prepare before requesting certification
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Bringing these inputs together early helps align the translation workflow, certificate
                    language, file version, and final delivery package before review begins.
                  </p>
                </div>
                <div className="rounded-full border border-[#C8D7FF] bg-[#F8FAFF] px-4 py-2 text-center text-sm font-semibold text-[#4B6FD8]">
                  Submission planning checklist
                </div>
              </div>

              <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {requestChecklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-[#D7E2FF] bg-[linear-gradient(180deg,#F7FAFF_0%,#FFFFFF_100%)] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                When requirements are still unclear
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Not every organization knows at the outset whether it needs a standard certificate of
                translation accuracy, a notarized statement, a sworn translation, or another form of
                supporting documentation. Clarifying that early can save time and prevent the project from
                moving down the wrong path.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                If requirements are unclear, Sesen can help review the document type, target countries,
                submission context, and certification expectations before the project begins so the translation
                and documentation workflow are aligned from the start.
              </p>
            </div>
          </div>
        </section>

        <section id="how-sesen-supports-certified-translation-needs" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                How Sesen Supports Certified Translation Needs
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Sesen supports life sciences organizations with certified translation workflows for clinical,
                regulatory, labeling, quality, safety, medical device, and patient-facing content. The goal is
                to support the certification need without reducing the work to a simple document-stamping
                exercise.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Each certified translation request needs to stay aligned to the final deliverable, the language
                pair, the document title, the version information, and the intended submission context. That is
                why a strong supporting process matters as much as the certificate itself.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sesenSupportPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-5 text-base leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-[1.9rem] border border-[#D7E2FF] bg-[linear-gradient(180deg,#F7FAFF_0%,#FFFFFF_100%)] px-6 py-8 sm:px-8 sm:py-10">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                A practical fit for regulated submissions
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Sesen can provide certificates of translation accuracy for qualifying life sciences translation
                projects when required by an IRB, ethics committee, regulatory team, sponsor, CRO, local
                affiliate, or institutional reviewer. Each certificate is aligned to the final translated
                deliverable, language pair, document title, version, and intended submission context.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                That makes the article’s core message practical: certification works best when it is treated as
                part of a controlled multilingual delivery process, not as a standalone substitute for review,
                subject-matter expertise, or documentation discipline.
              </p>
            </div>
          </div>
        </section>

        <section id="quick-reference-tools" className="border-b border-slate-200 bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Quick Reference Tools
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                The following quick-reference tools bring together the most practical points from this guide so
                teams can quickly confirm when certification may be needed, what type of documentation may be
                required, and what to avoid before a submission deadline.
              </p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  When you may need a certificate
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  You may need a certificate of translation accuracy when the translated document is being used
                  for formal review, country-specific submission support, or audit-ready documentation.
                </p>
                <div className="mt-5 space-y-4">
                  {quickNeedCertificate.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                  Common mistakes to avoid
                </h3>
                <div className="mt-5 space-y-4">
                  {commonMistakes.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                Certificate vs. notarized vs. sworn
              </h3>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {quickComparison.map((item) => (
                  <div key={item.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                    <h4 className="text-xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                      {item.title}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-slate-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.9rem] border border-dashed border-[#C8D7FF] bg-[linear-gradient(180deg,#F8FAFF_0%,#FFFFFF_100%)] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950" style={headingStyle}>
                    Certified Translation Request Checklist
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Use this checklist before sending files for certified translation so the workflow, document
                    version, and certificate requirements are clear from the beginning.
                  </p>
                </div>
                <div className="rounded-full border border-[#C8D7FF] bg-white px-4 py-2 text-center text-sm font-semibold text-[#4B6FD8]">
                  Submission-ready planning aid
                </div>
              </div>
              <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {compactRequestChecklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B6FD8]" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]" style={headingStyle}>
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                These are some of the most common questions teams ask when planning certified translation for
                life sciences submissions, patient-facing materials, and regulatory review workflows.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition open:border-[#C8D7FF] open:shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
                >
                  <summary
                    className="cursor-pointer list-none pr-8 text-left text-lg font-semibold leading-7 text-slate-950 marker:hidden"
                    style={headingStyle}
                  >
                    {item.q}
                  </summary>
                  <p className="mt-4 text-base leading-7 text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="bg-[#FCFDFF]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#0D1638_0%,#0E1C4A_100%)] px-6 py-10 text-white shadow-[0_20px_70px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10 lg:py-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.35rem]" style={headingStyle}>
                  Need a certified translation for a life sciences submission?
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Sesen supports clinical, regulatory, labeling, medical device, patient-facing, and quality
                  documentation with controlled life sciences translation workflows, expert human review,
                  terminology governance, and certificates of translation accuracy when required.
                </p>
                <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://www.sesen.com/get-a-quote/"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#4B6FD8] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#3659BB] sm:w-auto"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="https://www.sesen.com/contact-sales/"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 sm:w-auto"
                  >
                    Speak With a Life Sciences Translation Specialist
                  </a>
                </div>
                <p className="mt-7 text-base leading-7 text-slate-300">
                  Preparing translated ICFs, regulatory documents, or labeling updates? Talk with Sesen about
                  certification, version control, review coordination, and audit-ready delivery documentation
                  before your next submission milestone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
