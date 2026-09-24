import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  FileText,
  Globe2,
  Languages,
  LockKeyhole,
  ShieldCheck,
  Stamp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";

const trustPoints = [
  { icon: BadgeCheck, text: 'USCIS-ready certified translations' },
  { icon: Globe2, text: '100+ languages supported' },
  { icon: Zap, text: 'Fast turnaround and rush service' },
  { icon: ShieldCheck, text: 'Secure online ordering' },
];

const heroDocumentTypes = [
  'Birth certificates',
  'Marriage records',
  'Passports and IDs',
  'Academic transcripts',
  'Affidavits and police certificates',
  'Financial and supporting case documents',
];

const uscisRequirementCards = [
  {
    icon: Languages,
    title: 'Complete English Translation',
    description:
      'Foreign-language immigration documents should be translated in full into English, including names, dates, stamps, seals, handwritten notes, and visible annotations where applicable.',
  },
  {
    icon: Stamp,
    title: 'Signed Certification Statement',
    description:
      'A certified translation includes a signed statement confirming that the translation is complete and accurate for official immigration and USCIS-related use.',
  },
  {
    icon: UserCheck,
    title: 'Translator Competence',
    description:
      'The certification should also confirm that the translator is competent to translate from the source language into English.',
  },
];

const submissionPoints = [
  'Accurate handling of names, dates, numbers, and official terminology',
  'Formatting aligned with the source document where needed for review',
  'Certification statement included when required for official submission',
  'Support for individuals, law firms, HR teams, universities, and nonprofits',
  'Secure handling of personal, legal, financial, and identity documents',
];

const documentCategories = [
  {
    title: 'Personal and Civil Documents',
    icon: Users,
    items: [
      'Birth certificates',
      'Marriage certificates',
      'Divorce decrees',
      'Death certificates',
      'Adoption records',
      'Name change documents',
      'Family registry documents',
    ],
  },
  {
    title: 'Identity and Travel Documents',
    icon: FileText,
    items: [
      'Passports',
      'National ID cards',
      'Driver’s licenses',
      'Residency permits',
      'Visa documents',
      'Entry and exit records',
    ],
  },
  {
    title: 'Education and Employment Documents',
    icon: BadgeCheck,
    items: [
      'Diplomas',
      'Transcripts',
      'Degree certificates',
      'Employment letters',
      'Reference letters',
      'Professional licenses',
      'Training certificates',
    ],
  },
  {
    title: 'Financial and Sponsorship Records',
    icon: LockKeyhole,
    items: [
      'Bank statements',
      'Tax records',
      'Pay stubs',
      'Property records',
      'Business registration documents',
      'Insurance documents',
    ],
  },
  {
    title: 'Legal and Immigration Case Materials',
    icon: FileCheck2,
    items: [
      'Affidavits',
      'Police clearance certificates',
      'Court records',
      'Asylum statements',
      'Immigration petitions',
      'Attorney letters',
      'Requests for Evidence',
      'Supporting exhibits',
    ],
  },
];

const applicationTypeCards = [
  {
    icon: Users,
    title: 'Family-Based Immigration',
    description:
      'Certified translations for birth certificates, marriage records, divorce decrees, adoption papers, family registries, affidavits, and supporting civil documents.',
  },
  {
    icon: Stamp,
    title: 'Marriage Green Card Applications',
    description:
      'Translations for marriage certificates, birth certificates, divorce records, identity documents, financial records, and relationship evidence.',
  },
  {
    icon: BadgeCheck,
    title: 'Employment-Based Immigration',
    description:
      'Translations for diplomas, transcripts, professional licenses, employment verification letters, reference letters, business records, and supporting visa documentation.',
  },
  {
    icon: FileText,
    title: 'Student Visas and Academic Records',
    description:
      'Translations for transcripts, diplomas, enrollment letters, financial records, sponsorship documents, and academic certificates.',
  },
  {
    icon: UserCheck,
    title: 'Adjustment of Status',
    description:
      'Certified translations for personal records, immigration forms, financial evidence, legal records, and supporting documents used in status adjustment filings.',
  },
  {
    icon: Globe2,
    title: 'Naturalization and Citizenship',
    description:
      'Translations for prior immigration records, civil documents, name change documents, travel records, and supporting evidence.',
  },
  {
    icon: LockKeyhole,
    title: 'Asylum and Humanitarian Cases',
    description:
      'Translations for personal statements, police records, court documents, medical or identity records, country evidence, and supporting exhibits.',
  },
  {
    icon: FileCheck2,
    title: 'RFE Responses',
    description:
      'Fast translation support for documents requested through Requests for Evidence, including corrected, missing, or additional supporting records.',
  },
];

const audienceBlocks = [
  {
    icon: Users,
    title: 'Individuals and Families',
    description:
      'For applicants preparing USCIS filings, visa applications, green card petitions, citizenship documents, and family-based immigration records.',
  },
  {
    icon: FileCheck2,
    title: 'Immigration Attorneys and Law Firms',
    description:
      'For law firms managing client documents, affidavits, supporting evidence, RFE responses, asylum materials, and multi-document immigration case files.',
  },
  {
    icon: BadgeCheck,
    title: 'Corporate HR and Global Mobility Teams',
    description:
      'For companies sponsoring foreign employees and managing employment-based visa documentation, academic credentials, and relocation records.',
  },
  {
    icon: FileText,
    title: 'Universities and International Student Offices',
    description:
      'For student visa support, academic records, financial documentation, and international admissions-related translation needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Nonprofits and Legal Aid Organizations',
    description:
      'For organizations supporting asylum, humanitarian, refugee, and other immigration-related cases.',
  },
];

const onlineTranslationSteps = [
  {
    number: '01',
    title: 'Upload your documents securely',
    description:
      'Send immigration documents through Stepes using secure online ordering. We can review common file formats such as scanned PDFs, mobile photos, and image files, although clearer source files usually lead to better results.',
  },
  {
    number: '02',
    title: 'Select languages and certification needs',
    description:
      'Choose your source and target languages, note whether you need certified translation, and share any submission requirements that matter for your filing or review process.',
  },
  {
    number: '03',
    title: 'Receive a quote or place your order online',
    description:
      'Depending on your project, you can receive pricing for review or move forward directly through online ordering for faster turnaround.',
  },
  {
    number: '04',
    title: 'Professional translators complete the work',
    description:
      'Stepes assigns qualified translators to prepare your immigration document translation with attention to names, dates, official terminology, and certification needs.',
  },
  {
    number: '05',
    title: 'Receive certified translations ready for submission',
    description:
      'Final translations are delivered in a format suitable for immigration, legal, academic, business, or institutional review, depending on your needs.',
  },
];

const legalWorkflowPoints = [
  'Affidavits, court records, and civil certificates',
  'Attorney letters, supporting evidence, and government filings',
  'Official submissions for individuals, law firms, and organizations',
  'Broader support through Stepes legal translation services',
];

const relatedServiceLinks = [
  {
    title: 'Legal Translation Services',
    description:
      'Broader legal document translation support for official, regulatory, and case-related content.',
    href: 'https://www.stepes.com/legal-translation-services/',
  },
  {
    title: 'Certified Translation Services',
    description:
      'Certified document translation for official use beyond immigration-related submissions.',
    href: 'https://www.stepes.com/certified-translation-services/',
  },
  {
    title: 'Court Document Translation Services',
    description:
      'Translation support for court records, filings, judgments, affidavits, and related legal materials.',
    href: 'https://www.stepes.com/court-document-translation-services/',
  },
  {
    title: 'Contract Translation Services',
    description:
      'Professional contract translation for legal, business, and compliance-related documents.',
    href: 'https://www.stepes.com/contract-translation-services/',
  },
  {
    title: 'Litigation Translation Services',
    description:
      'Support for litigation documents, case files, evidence packets, and multilingual legal review.',
    href: 'https://www.stepes.com/litigation-translation-services/',
  },
  {
    title: 'Corporate Legal Translation Services',
    description:
      'Translation services for corporate legal teams handling governance, compliance, and international documentation.',
    href: 'https://www.stepes.com/corporate-legal-translation-services/',
  },
  {
    title: 'Legal Translation Best Practices',
    description:
      'Guidance on improving legal translation quality, consistency, and submission readiness.',
    href: 'https://www.stepes.com/legal-translation-best-practices/',
  },
  {
    title: 'When Legal Documents Need Certified Translation',
    description:
      'Learn when certified translation is needed for legal, civil, academic, and official-use documents.',
    href: 'https://www.stepes.com/when-legal-documents-need-certified-translation/',
  },
];

const faqs = [
  {
    question: 'Do immigration documents need certified translation?',
    answer:
      'Many immigration-related documents submitted in a foreign language need certified translation into English for official review. Requirements can vary by filing type and receiving institution.',
  },
  {
    question: 'Does USCIS accept certified translations?',
    answer:
      'USCIS generally accepts certified translations when foreign-language documents are submitted in support of an immigration filing, provided the translation is complete and accompanied by the required certification.',
  },
  {
    question: 'What does USCIS require for translated documents?',
    answer:
      'Foreign-language documents submitted for immigration review generally need a complete English translation and certification confirming that the translation is accurate and prepared by a competent translator.',
  },
  {
    question: 'Do USCIS translations need to be notarized?',
    answer:
      'Certified translation and notarization are different. Certified translation addresses the translation itself, while notarization typically verifies a signature or identity. Applicants should confirm whether an additional institution requests notarization.',
  },
  {
    question: 'Can Stepes translate birth certificates for USCIS?',
    answer:
      'Yes. Stepes translates birth certificates and other personal civil documents commonly used in immigration, citizenship, and visa-related filings.',
  },
  {
    question:
      'Can you translate marriage certificates for green card applications?',
    answer:
      'Yes. Marriage certificates, divorce records, birth certificates, and supporting civil documents are commonly translated for family-based immigration and marriage green card matters.',
  },
  {
    question: 'How long does immigration document translation take?',
    answer:
      'Turnaround time depends on document length, complexity, language pair, and file quality. Stepes also supports rush service for time-sensitive immigration needs.',
  },
  {
    question:
      'Can you translate scanned immigration documents or mobile photos?',
    answer:
      'Yes. Stepes can review scanned PDFs, mobile photos, and image files, although higher-quality source files generally help produce cleaner results.',
  },
  {
    question: 'Can immigration attorneys use Stepes for client case files?',
    answer:
      'Yes. Stepes supports attorneys and law firms handling affidavits, supporting evidence, Requests for Evidence, asylum materials, and larger multi-document immigration case files.',
  },
  {
    question: 'What languages do you support for immigration translation?',
    answer:
      'Stepes supports 100+ languages, including Spanish, Chinese, Arabic, Portuguese, French, Korean, Vietnamese, Russian, Hindi, German, Japanese, Italian, and many others.',
  },
  {
    question: 'Can I order certified immigration translation online?',
    answer:
      'Yes. You can upload documents online, select language and certification needs, and either place your order directly or request pricing depending on your project.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

function SectionHeading({ id, title, intro }) {
  return (
    <div className="max-w-3xl">
      <h2
        id={id}
        className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default function StepesImmigrationHeroWireframe() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section
        aria-labelledby="immigration-hero-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#D9DDE3] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                Certified Translations for USCIS, Visa &amp; Immigration Filings
              </div>

              <h1
                id="immigration-hero-title"
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[58px]"
              >
                Certified Immigration Document Translation Services for USCIS,
                Visas &amp; Green Cards
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                Stepes provides certified immigration document translation
                services for USCIS submissions, visa applications, green card
                petitions, asylum cases, citizenship filings, and
                attorney-managed immigration matters. We translate birth
                certificates, marriage records, passports, IDs, transcripts,
                affidavits, police certificates, financial records, and
                supporting case documents in 100+ languages.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center rounded-full bg-[#C11D63] px-6 text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] sm:w-auto"
                >
                  <a href="https://www.stepes.com/instant-translation-quote/">
                    Order Online
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-center rounded-full border-[#D1D5DB] bg-white px-6 text-[#8C184C] transition hover:border-[#C11D63] hover:bg-white hover:text-[#7A1542] sm:w-auto"
                >
                  <a href="https://www.stepes.com/contact-sales/">
                    Speak to Team Stepes
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-x-8 gap-y-4 border-t border-[#E5E7EB] pt-6 sm:grid-cols-2">
                {trustPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#B11C5C]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium leading-6 text-slate-800">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:pl-2">
              <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-[#B11C5C]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A1C52]">
                      Immigration Translation
                    </div>
                    <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                      Prepared for Official Submission
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-700">
                  Professional certified translations for immigration
                  applicants, attorneys, employers, universities, and
                  organizations managing official immigration documentation.
                </p>

                <div className="mt-6 h-px w-full bg-[#E5E7EB]" />

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A1C52]">
                    Commonly translated documents
                  </div>
                  <ul className="mt-4 space-y-3">
                    {heroDocumentTypes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C11D63]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-[#E5E7EB] px-4 py-4">
                  <p className="text-sm leading-7 text-slate-700">
                    Ideal for USCIS submissions, visa applications, green card
                    petitions, citizenship filings, asylum cases, and
                    attorney-managed immigration matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="uscis-requirements-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
              USCIS translation guidance
            </div>
            <h2
              id="uscis-requirements-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              USCIS Translation Requirements: What Your Documents Need
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              For immigration filings and official review, foreign-language
              documents typically need a complete English translation together
              with certification confirming that the translation is complete,
              accurate, and prepared by a competent translator. This helps
              applicants, attorneys, and reviewers work from a clear English
              version of the original document.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {uscisRequirementCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className="rounded-[24px] border border-[#E5E7EB] bg-white shadow-none"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#B11C5C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 rounded-[24px] border border-[#E5E7EB] bg-white px-6 py-5 sm:px-7">
            <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
              Stepes provides translation services and certification support,
              but applicants should confirm filing requirements with USCIS, the
              receiving institution, or their immigration attorney.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="official-submission-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div>
              <h2
                id="official-submission-title"
                className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
              >
                Certified Immigration Translations Prepared for Official
                Submission
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                Stepes prepares certified immigration translations for
                applicants, attorneys, employers, universities, and
                organizations that need clear, professional document translation
                for official submission and review.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                For broader official-use certified translations beyond
                immigration, visit{' '}
                <a
                  href="https://www.stepes.com/certified-translation-services/"
                  className="font-medium text-[#9F1D55] underline underline-offset-4"
                >
                  Certified Translation Services
                </a>
                .
              </p>
            </div>

            <div>
              {submissionPoints.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 py-4 ${
                    index !== submissionPoints.length - 1
                      ? 'border-b border-[#E5E7EB]'
                      : ''
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#B11C5C]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="documents-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="documents-title"
            title="Immigration Documents We Translate"
            intro="Stepes translates a wide range of immigration-related personal, legal, academic, financial, and official records for USCIS submissions, visa processing, green card petitions, citizenship filings, and attorney-managed casework."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {documentCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className={`rounded-[24px] border border-[#E5E7EB] bg-white shadow-none ${
                    index === documentCategories.length - 1
                      ? 'xl:col-span-1 lg:col-span-2'
                      : ''
                  }`}
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#B11C5C]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C11D63]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] border border-[#E5E7EB] bg-white px-6 py-7 sm:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                  Need certified translations for USCIS or immigration filing?
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Upload your documents online or contact Stepes for help
                  preparing immigration translations for official review.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center rounded-full bg-[#C11D63] px-6 text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] sm:w-auto"
                >
                  <a href="https://www.stepes.com/instant-translation-quote/">
                    Order Online
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-center rounded-full border-[#D1D5DB] bg-white px-6 text-[#8C184C] transition hover:border-[#C11D63] hover:bg-white hover:text-[#7A1542] sm:w-auto"
                >
                  <a href="https://www.stepes.com/contact-sales/">
                    Speak to Team Stepes
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="application-types-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="application-types-title"
            title="Translation Services by Immigration Application Type"
            intro="Different immigration processes call for different supporting records. Stepes translates the document sets commonly used in family-based petitions, marriage green card cases, employment sponsorship, student visa filings, adjustment of status, naturalization, asylum matters, and Requests for Evidence."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {applicationTypeCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className="rounded-[24px] border border-[#E5E7EB] bg-white shadow-none"
                >
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#B11C5C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="certified-vs-notarized-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="certified-vs-notarized-title"
            title="Certified vs. Notarized Immigration Translation"
            intro="Applicants often ask whether immigration documents need certified translation, notarization, or both. These are different requirements, and understanding the distinction can help you prepare documents more confidently for official review."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Certified Translation
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                A certified translation includes a signed statement confirming
                that the translation is complete and accurate. For
                immigration-related use, this is the translation standard
                applicants most often need when submitting foreign-language
                documents in English.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Notarization
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Notarization generally confirms the identity or signature of the
                person signing a document. It does not verify the linguistic
                accuracy of the translation itself.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#E5E7EB] pt-8">
            <p className="text-base leading-8 text-slate-700">
              For USCIS-related filings, certified translation generally
              addresses the translation requirement, but applicants should
              confirm whether a court, consulate, school, or other receiving
              institution also asks for notarization. Common questions include
              whether USCIS requires notarized translation and whether
              immigration documents need certified or notarized translation for
              a specific filing.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="audiences-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="audiences-title"
            title="Immigration Translation Services for Individuals, Attorneys and Organizations"
            intro="Stepes supports a range of immigration translation needs, from individual applicants preparing official records to organizations managing larger document workflows across cases, departments, or programs."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {audienceBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <Card
                  key={block.title}
                  className={`rounded-[24px] border border-[#E5E7EB] bg-white shadow-none ${
                    index === audienceBlocks.length - 1
                      ? 'md:col-span-2 xl:col-span-1'
                      : ''
                  }`}
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#B11C5C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {block.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="secure-online-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
            <div>
              <SectionHeading
                id="secure-online-title"
                title="Secure Online Immigration Document Translation"
                intro="Stepes makes immigration document translation easier to manage online, whether you are submitting a birth certificate, passport, academic record, affidavit, financial document, or broader set of supporting case materials."
              />
              <p className="mt-5 text-base leading-8 text-slate-700">
                You can upload scanned PDFs, mobile photos, and image files for
                review. Clearer files generally help produce cleaner
                translations, especially when a document includes stamps, seals,
                handwriting, or layered formatting.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center rounded-full bg-[#C11D63] px-6 text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] sm:w-auto"
                >
                  <a href="https://www.stepes.com/instant-translation-quote/">
                    Order Online
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-center rounded-full border-[#D1D5DB] bg-white px-6 text-[#8C184C] transition hover:border-[#C11D63] hover:bg-white hover:text-[#7A1542] sm:w-auto"
                >
                  <a href="https://www.stepes.com/contact-sales/">
                    Speak to Team Stepes
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-0 rounded-[28px] border border-[#E5E7EB] bg-white px-6 sm:px-7">
              {onlineTranslationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid gap-4 py-5 sm:grid-cols-[64px_minmax(0,1fr)] ${
                    index !== onlineTranslationSteps.length - 1
                      ? 'border-b border-[#E5E7EB]'
                      : ''
                  }`}
                >
                  <div className="text-sm font-semibold tracking-[0.14em] text-[#9F1D55]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="languages-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F6F6F7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                100+ languages supported
              </div>
              <h2
                id="languages-title"
                className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
              >
                Immigration Translation in 100+ Languages
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                Stepes supports immigration document translation across 100+
                languages, including common USCIS and immigration-related
                requests such as Spanish to English immigration translation,
                Chinese birth certificate translation for USCIS, and Arabic
                civil document translation.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                We translate documents into English for USCIS and other official
                review processes, and we also support English-to-other-language
                document translation for international immigration, mobility,
                admissions, and cross-border legal or administrative workflows.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F6F6F7] p-6 sm:p-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9F1D55]">
                    Common USCIS requests
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <li>Spanish to English immigration translation</li>
                    <li>Chinese birth certificate translation for USCIS</li>
                    <li>Vietnamese document translation for USCIS</li>
                    <li>Hindi certified immigration translation</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9F1D55]">
                    Civil and legal documents
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <li>Arabic civil document translation</li>
                    <li>Russian legal and civil document translation</li>
                    <li>French certified translation for official filing</li>
                    <li>Portuguese immigration document translation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9F1D55]">
                  Additional language coverage
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Korean immigration record translation, German, Japanese,
                  Italian, and many other language pairs for immigration, legal,
                  academic, business, and official submission needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="legal-workflows-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div>
              <SectionHeading
                id="legal-workflows-title"
                title="Immigration Documents as Part of Legal Translation Workflows"
                intro="Immigration documents are often part of broader legal translation workflows involving affidavits, court records, civil certificates, attorney letters, supporting evidence, government filings, and official submissions."
              />
              <p className="mt-5 text-base leading-8 text-slate-700">
                Stepes supports immigration translation as part of its broader{' '}
                <a
                  href="https://www.stepes.com/legal-translation-services/"
                  className="font-medium text-[#9F1D55] underline underline-offset-4"
                >
                  legal translation services
                </a>{' '}
                for individuals, law firms, corporate legal teams, nonprofits,
                and global organizations.
              </p>
            </div>

            <div className="space-y-0 border-t border-[#E5E7EB] lg:border-t-0 lg:pl-2">
              {legalWorkflowPoints.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 py-4 ${
                    index !== legalWorkflowPoints.length - 1
                      ? 'border-b border-[#E5E7EB]'
                      : ''
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#B11C5C]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="related-services-title"
        className="border-b border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="related-services-title"
            title="Related Legal and Certified Translation Services"
            intro="Explore related Stepes services for certified, legal, court, contract, litigation, and corporate legal document translation. These pages can help you find the right service for broader document needs beyond immigration-specific submissions."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedServiceLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group rounded-[24px] border border-[#E5E7EB] bg-[#F6F6F7] p-5 transition hover:border-[#D1D5DB] hover:bg-white"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 group-hover:text-[#9F1D55]">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="border-b border-[#E5E7EB] bg-[#F6F6F7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            id="faq-title"
            title="Immigration Document Translation FAQs"
            intro="Find quick answers to common questions about certified immigration document translation, USCIS submission needs, notarization, file formats, turnaround, and language support."
          />

          <div className="mt-10 divide-y divide-[#E5E7EB] rounded-[28px] border border-[#E5E7EB] bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="px-6 py-6 sm:px-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </section>

      <section aria-labelledby="final-cta-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[32px] border border-[#E5E7EB] bg-[#F6F6F7] px-6 py-10 sm:px-8 lg:px-10">
            <div className="max-w-4xl">
              <h2
                id="final-cta-title"
                className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
              >
                Get Certified Immigration Documents Translated with Confidence
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                Whether you need certified translations for USCIS, visa
                applications, green card filings, asylum cases, citizenship
                documents, or attorney-managed immigration case files, Stepes
                helps you translate important documents accurately, securely,
                and efficiently.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="w-full justify-center rounded-full bg-[#C11D63] px-6 text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] sm:w-auto"
              >
                <a href="https://www.stepes.com/instant-translation-quote/">
                  Order Online
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full justify-center rounded-full border-[#D1D5DB] bg-white px-6 text-[#8C184C] transition hover:border-[#C11D63] hover:bg-white hover:text-[#7A1542] sm:w-auto"
              >
                <a href="https://www.stepes.com/contact-sales/">
                  Speak to Team Stepes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
