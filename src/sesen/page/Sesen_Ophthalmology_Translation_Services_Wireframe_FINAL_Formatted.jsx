import React, { useState } from "react";
const icons = {
  eye:<svg viewBox="0 0 32 32"><path d="M3 16s4.8-8 13-8 13 8 13 8-4.8 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="4.2"/><circle cx="16" cy="16" r="1.2"/></svg>,
  trial:<svg viewBox="0 0 32 32"><rect x="7" y="5" width="18" height="22" rx="2.5"/><path d="M11 10h10M11 15h5M11 20h10"/><path d="m19 15 2 2 4-5"/></svg>,
  patient:<svg viewBox="0 0 32 32"><circle cx="16" cy="10" r="4"/><path d="M7 27c.8-6 4-9 9-9s8.2 3 9 9"/><path d="M24 6v6M21 9h6"/></svg>,
  gene:<svg viewBox="0 0 32 32"><path d="M9 4c7 4.5 7 19.5 14 24M23 4C16 8.5 16 23.5 9 28"/><path d="M11 9h10M9.5 16h13M11 23h10"/></svg>,
  device:<svg viewBox="0 0 32 32"><rect x="4" y="5" width="24" height="17" rx="3"/><path d="M9 27h14M16 22v5"/><circle cx="16" cy="13.5" r="5"/><circle cx="16" cy="13.5" r="1.8"/></svg>,
  reg:<svg viewBox="0 0 32 32"><path d="M8 4h11l5 5v19H8z"/><path d="M19 4v6h6M12 15h8M12 20h8"/><path d="m12 25 2 2 4-4"/></svg>,
  quality:<svg viewBox="0 0 32 32"><path d="M16 4l3 2 3.5-.2 1 3.4 2.8 2-.9 3.3.9 3.3-2.8 2-1 3.4-3.5-.2-3 2-3-2-3.5.2-1-3.4-2.8-2 .9-3.3-.9-3.3 2.8-2 1-3.4L13 6z"/><path d="m11.5 16 3 3 6-7"/></svg>,
  terminology:<svg viewBox="0 0 32 32"><path d="M6 6h8c2.2 0 4 1.8 4 4v16c0-2.2-1.8-4-4-4H6z"/><path d="M26 6h-4c-2.2 0-4 1.8-4 4v16c0-2.2 1.8-4 4-4h4z"/><path d="M9 11h5M9 15h5M22 11h1"/></svg>,
  review:<svg viewBox="0 0 32 32"><path d="M7 5h13l5 5v17H7z"/><path d="M20 5v6h6M11 15h7M11 20h5"/><circle cx="22" cy="22" r="4"/><path d="m25 25 3 3"/></svg>,
  autoqa:<svg viewBox="0 0 32 32"><path d="M8 8h16v16H8z"/><path d="M12 4v4M20 4v4M12 24v4M20 24v4M4 12h4M4 20h4M24 12h4M24 20h4"/><path d="m12 16 3 3 6-7"/></svg>,
  format:<svg viewBox="0 0 32 32"><path d="M7 4h18v24H7z"/><path d="M11 9h10M11 14h6M11 19h10M11 24h7"/><path d="M21 13v5M18.5 15.5h5"/></svg>,
  workflow:<svg viewBox="0 0 32 32"><circle cx="7" cy="8" r="3"/><circle cx="25" cy="8" r="3"/><circle cx="16" cy="25" r="3"/><path d="M10 8h12M9 11l5 11M23 11l-5 11"/><path d="m13 17 3 3 3-3"/></svg>,
};

const I = ({ n }) => (
  <span className="ico" aria-hidden="true">
    {icons[n] || icons.quality}
  </span>
);
const E = ({ children, d = false }) => (
  <div className={'eyebrow' + (d ? ' dark' : '')}>{children}</div>
);
const L = ({ href, children }) => (
  <a className="link" href={href}>
    {children}
    <span aria-hidden="true">→</span>
  </a>
);
const diseases = [
  ["Retina & Vitreoretinal Disease","Age-related macular degeneration (AMD), geographic atrophy, diabetic retinopathy, diabetic macular edema, retinal vein occlusion, retinal detachment, inherited retinal diseases, and other retinal and macular disorders."],
  ["Glaucoma","Open-angle glaucoma, angle-closure glaucoma, ocular hypertension, and other glaucomatous conditions, with terminology spanning visual fields, treatment, diagnostics, and patient communication."],
  ["Cornea & Ocular Surface","Dry eye disease, corneal disorders, keratoconus, ocular surface disease, and content supporting corneal procedures and transplantation."],
  ["Cataract & Anterior Segment","Cataract, lens-related conditions, anterior segment disorders, intraocular lenses, surgical procedures, and postoperative care."],
  ["Inflammatory, Rare & Other Conditions","Uveitis, ocular inflammation, neuro-ophthalmic conditions, pediatric ophthalmology, rare eye diseases, and other specialized areas of vision care."]
];
const faqs = [
  ["What is ophthalmology translation?","Ophthalmology translation is the specialized translation of clinical, scientific, regulatory, technical, and patient-facing content related to eye diseases, vision science, ophthalmic treatments, diagnostics, medical devices, and clinical research."],
  ["What types of ophthalmology documents can Sesen translate?","Sesen supports clinical trial protocols, investigator’s brochures, informed consent forms, regulatory documentation, clinical outcome assessments, PRO and eCOA content, scientific materials, patient education, IFUs, labeling, software content, training materials, and other ophthalmology-related content."],
  ["Does Sesen translate ophthalmology clinical trial content?","Yes. Sesen supports multinational ophthalmology studies with translation of protocols, informed consent, patient and investigator materials, clinical assessments, safety content, questionnaires, training materials, and other trial documentation."],
  ["Can Sesen translate and linguistically validate ophthalmology PROs and COAs?","Yes. Sesen supports translation and linguistic validation for patient-reported outcomes, clinical outcome assessments, visual-function questionnaires, patient diaries, ePRO/eCOA content, and other instruments used to understand symptoms, visual function, treatment experience, and quality of life."],
  ["Does Sesen support ophthalmic medical devices?","Yes. Sesen supports multilingual content for ophthalmic diagnostic, imaging, surgical, and therapeutic devices. Device-focused programs can be supported through our dedicated Ophthalmic Device Translation Services."],
  ["Can Sesen support ophthalmic gene and cell therapy programs?","Yes. Sesen provides translation solutions for advanced therapy programs, including gene and cell therapies being developed for retinal, inherited, and other ophthalmic diseases, spanning clinical, regulatory, scientific, and patient-facing content."],
  ["How does Sesen maintain ophthalmology terminology across languages?","Sesen can use approved glossaries, terminology databases, translation memories, previous translations, and study- or product-specific linguistic assets, combined with automated QA and human review to help identify inconsistencies before delivery."],
  ["How does Sesen use AI for ophthalmology translation?","Sesen uses AI-enabled language technology as part of a broader multilingual workflow that can also include terminology management, translation memory, specialized linguists, independent review, and quality assurance. The workflow is adapted to the content type, intended use, and quality requirements."]
];

export default function SesenOphthalmologyTranslationServices() {
  const [open, setOpen] = useState(0);

  return (
    <main className="sesen-page-oph">
      <style>{`
      .sesen-page-oph {
        --b:#4B6FD8;
        --bd:#3659BB;
        --navy:#17264D;
        --ink:#111827;
        --body:#46546D;
        --muted:#68758B;
        --border:#DDE4F2;
        --div:#E9EEF8;
        --pale:#F5F7FF;
        --soft:#EAF0FF;
        --neutral:#F7F9FD;
        font-family:Inter,Arial,sans-serif;
        color:var(--body);
        background:#fff;
        overflow:hidden
      }
      .sesen-page-oph * {
        box-sizing:border-box
      }
      .sesen-page-oph .wrap {
        max-width:1280px;
        margin:auto;
        padding:0 56px
      }
      .sesen-page-oph section {
        padding:96px 0
      }
      .sesen-page-oph h1,.sesen-page-oph h2,.sesen-page-oph h3 {
        font-family:"Inter Tight",Inter,Arial,sans-serif;
        color:var(--navy);
        font-weight:500;
        margin:0
      }
      .sesen-page-oph h1 {
        font-size:48px;
        line-height:1.3;
        letter-spacing:-.5px
      }
      .sesen-page-oph h2 {
        font-size:36px;
        line-height:1.3
      }
      .sesen-page-oph h3 {
        font-size:23px;
        line-height:1.3
      }
      .sesen-page-oph p,.sesen-page-oph li {
        font-size:16px;
        line-height:1.72
      }
      .sesen-page-oph p {
        margin:0
      }
      .sesen-page-oph .lead {
        font-size:19px;
        color:#293954
      }
      .sesen-page-oph .eyebrow {
        font:700 11px/1.35 Inter,Arial,sans-serif!important;
        letter-spacing:.15em!important;
        text-transform:uppercase!important;
        color:var(--bd)!important;
        margin-bottom:16px
      }
      .sesen-page-oph .eyebrow.dark {
        color:#C8D6FF!important
      }
      .sesen-page-oph .head {
        max-width:810px;
        margin-bottom:48px
      }
      .sesen-page-oph .head.center {
        text-align:center;
        margin-left:auto;
        margin-right:auto
      }
      .sesen-page-oph .head p {
        font-size:18px;
        margin-top:18px
      }
      .sesen-page-oph .buttons {
        display:flex;
        gap:12px;
        flex-wrap:wrap;
        margin-top:30px
      }
      .sesen-page-oph .btn {
        min-height:50px;
        padding:0 26px;
        border-radius:999px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        text-decoration:none;
        font-size:13px;
        font-weight:700;
        letter-spacing:.035em;
        text-transform:uppercase;
        border:1px solid transparent
      }
      .sesen-page-oph .btn.primary {
        background:var(--b);
        color:#fff
      }
      .sesen-page-oph .btn.primary:hover {
        background:var(--bd)
      }
      .sesen-page-oph .btn.secondary {
        background:#fff;
        color:var(--ink);
        border-color:var(--border)
      }
      .sesen-page-oph .btn.secondary:hover {
        background:var(--pale)
      }
      .sesen-page-oph a:focus-visible,.sesen-page-oph button:focus-visible {
        outline:3px solid rgba(75,111,216,.35);
        outline-offset:3px
      }
      .sesen-page-oph .link {
        display:inline-flex;
        align-items:center;
        gap:7px;
        color:var(--bd);
        text-decoration:none;
        font-weight:700;
        font-size:16px;
        margin-top:18px
      }
      .sesen-page-oph .link:hover {
        text-decoration:underline
      }
      .sesen-page-oph .hero {
        padding:96px 0 100px
      }
      .sesen-page-oph .hero-grid {
        display:grid;
        grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);
        gap:72px;
        align-items:center
      }
      .sesen-page-oph .hero-copy {
        max-width:690px
      }
      .sesen-page-oph .hero .lead {
        margin-top:22px
      }
      .sesen-page-oph .hero-copy>p:last-of-type {
        margin-top:14px
      }
      .sesen-page-oph .hero-art {
        min-height:430px;
        display:flex;
        align-items:center;
        justify-content:center
      }
      .sesen-page-oph .eye-art {
        width:100%;
        max-width:480px;
        aspect-ratio:1.08;
        position:relative
      }
      .sesen-page-oph .eye-outline {
        position:absolute;
        inset:14% 2% 18%;
        border:2px solid #71809A;
        border-radius:52% 48% 50% 50%/60% 60% 40% 40%;
        transform:rotate(-2deg)
      }
      .sesen-page-oph .iris {
        position:absolute;
        width:42%;
        aspect-ratio:1;
        border:2px solid var(--b);
        border-radius:50%;
        left:29%;
        top:26%;
        background:radial-gradient(circle,#fff 0 18%,#EAF0FF 19% 45%,transparent 46%)
      }
      .sesen-page-oph .iris:after {
        content:"";
        position:absolute;
        inset:31%;
        background:var(--navy);
        border-radius:50%
      }
      .sesen-page-oph .mini {
        position:absolute;
        border:1px solid var(--border);
        border-radius:20px;
        background:#fff;
        box-shadow:0 12px 36px rgba(23,38,77,.08);
        padding:18px
      }
      .sesen-page-oph .scan {
        right:3%;
        top:5%;
        width:39%;
        height:32%
      }
      .sesen-page-oph .doc {
        left:1%;
        bottom:3%;
        width:36%;
        height:34%;
        background:var(--pale)
      }
      .sesen-page-oph .line {
        height:2px;
        background:#8C9AB1;
        margin:10px 0
      }
      .sesen-page-oph .wave {
        height:50px;
        border-bottom:2px solid var(--b);
        border-radius:0 0 50% 45%;
        transform:skewX(-8deg)
      }
      .sesen-page-oph .authority {
        background:var(--pale)
      }
      .sesen-page-oph .ecosystem {
        display:grid;
        grid-template-columns:repeat(5,1fr);
        border-top:1px solid var(--border);
        border-bottom:1px solid var(--border)
      }
      .sesen-page-oph .eco {
        padding:28px 22px;
        min-width:0
      }
      .sesen-page-oph .eco+.eco {
        border-left:1px solid var(--div)
      }
      .sesen-page-oph .ico {
        width:52px;
        height:52px;
        border-radius:50%;
        background:#fff;
        border:1px solid #D7E0F3;
        color:var(--bd);
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:18px;
        box-shadow:0 6px 18px rgba(23,38,77,.045)
      }
      .sesen-page-oph .ico svg {
        width:29px;
        height:29px;
        fill:none;
        stroke:currentColor;
        stroke-width:1.8;
        stroke-linecap:round;
        stroke-linejoin:round
      }
      .sesen-page-oph .eco .ico {
        background:#fff;
        border-color:#CCD8F2
      }
      .sesen-page-oph .eco strong {
        font-size:17px
      }
      .sesen-page-oph .eco strong {
        display:block;
        color:var(--navy);
        font-size:16px;
        line-height:1.35;
        margin-bottom:7px
      }
      .sesen-page-oph .eco span {
        font-size:14px;
        line-height:1.5;
        color:var(--muted)
      }
      .sesen-page-oph .disease-layout {
        display:grid;
        grid-template-columns:minmax(260px,.72fr) minmax(0,1.28fr);
        gap:76px;
        align-items:start
      }
      .sesen-page-oph .disease-intro p {
        font-size:18px;
        margin-top:20px
      }
      .sesen-page-oph .disease-list {
        border-top:1px solid var(--border)
      }
      .sesen-page-oph .disease-row {
        display:grid;
        grid-template-columns:230px 1fr;
        gap:36px;
        padding:28px 0;
        border-bottom:1px solid var(--div)
      }
      .sesen-page-oph .disease-row h3 {
        font-size:20px
      }
      .sesen-page-oph .trial,.sesen-page-oph .dual {
        background:var(--neutral)
      }
      .sesen-page-oph .split {
        display:grid;
        grid-template-columns:minmax(0,1fr) minmax(0,1fr);
        gap:72px;
        align-items:center
      }
      .sesen-page-oph .copy p {
        margin-top:18px
      }
      .sesen-page-oph .tag-grid {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:12px
      }
      .sesen-page-oph .tag {
        padding:17px 18px;
        background:#fff;
        border:1px solid var(--border);
        border-radius:16px;
        color:var(--navy);
        font-size:15px;
        font-weight:600
      }
      .sesen-page-oph .coa-panel {
        border:1px solid var(--border);
        border-radius:28px;
        padding:38px;
        background:#fff
      }
      .sesen-page-oph .coa-list {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:0 28px;
        margin-top:26px
      }
      .sesen-page-oph .coa-item {
        padding:14px 0;
        border-bottom:1px solid var(--div);
        font-size:15px;
        color:var(--navy)
      }
      .sesen-page-oph .advanced {
        background:var(--pale)
      }
      .sesen-page-oph .therapy-band {
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:1px;
        background:var(--border);
        border:1px solid var(--border);
        border-radius:24px;
        overflow:hidden;
        margin-top:38px
      }
      .sesen-page-oph .therapy {
        background:#fff;
        padding:28px
      }
      .sesen-page-oph .therapy h3 {
        font-size:20px;
        margin:16px 0 9px
      }
      .sesen-page-oph .device-panel {
        display:grid;
        grid-template-columns:.9fr 1.1fr;
        gap:56px;
        padding:48px;
        border:1px solid var(--border);
        border-radius:28px
      }
      .sesen-page-oph .device-visual {
        min-height:310px;
        border-radius:22px;
        background:var(--pale);
        display:flex;
        align-items:center;
        justify-content:center
      }
      .sesen-page-oph .screen {
        width:68%;
        height:62%;
        border:2px solid #71809A;
        border-radius:18px;
        background:#fff;
        padding:20px
      }
      .sesen-page-oph .retina {
        width:130px;
        height:130px;
        border:2px solid var(--b);
        border-radius:50%;
        margin:auto;
        position:relative
      }
      .sesen-page-oph .retina:after {
        content:"";
        position:absolute;
        inset:26px;
        border:1px solid #A8B6D0;
        border-radius:50%
      }
      .sesen-page-oph .tech-list {
        columns:2;
        column-gap:28px;
        padding-left:20px;
        margin:22px 0 0
      }
      .sesen-page-oph .tech-list li {
        break-inside:avoid;
        margin:7px 0
      }
      .sesen-page-oph .two-cols {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:1px;
        background:var(--border);
        border:1px solid var(--border);
        border-radius:28px;
        overflow:hidden
      }
      .sesen-page-oph .two-col {
        background:#fff;
        padding:44px
      }
      .sesen-page-oph .two-col p {
        margin-top:16px
      }
      .sesen-page-oph .two-col ul {
        padding-left:20px;
        margin:20px 0 0
      }
      .sesen-page-oph .vocab {
        background:var(--navy);
        color:#DCE4F3
      }
      .sesen-page-oph .vocab h2 {
        color:#fff
      }
      .sesen-page-oph .vocab .head p {
        color:#DCE4F3
      }
      .sesen-page-oph .flow {
        display:grid;
        grid-template-columns:repeat(6,1fr);
        align-items:center;
        margin-top:44px
      }
      .sesen-page-oph .flow-item {
        min-width:0;
        text-align:center;
        position:relative
      }
      .sesen-page-oph .flow-item:not(:last-child):after {
        content:"→";
        position:absolute;
        right:-7px;
        top:19px;
        color:#8FA6E8
      }
      .sesen-page-oph .flow-dot {
        width:42px;
        height:42px;
        border-radius:50%;
        background:#253F8F;
        border:1px solid #6F8BE1;
        margin:0 auto 13px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff;
        font-size:13px;
        font-weight:700
      }
      .sesen-page-oph .flow-item span {
        display:block;
        font-size:14px;
        line-height:1.45;
        color:#fff;
        padding:0 9px
      }
      .sesen-page-oph .asset-row {
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-top:38px
      }
      .sesen-page-oph .asset {
        border:1px solid #5068A8;
        border-radius:999px;
        padding:9px 15px;
        color:#E6ECFF;
        font-size:14px
      }
      .sesen-page-oph .ai-layout {
        display:grid;
        grid-template-columns:.86fr 1.14fr;
        gap:70px;
        align-items:start
      }
      .sesen-page-oph .ai-steps {
        border-top:1px solid var(--border)
      }
      .sesen-page-oph .ai-step {
        display:grid;
        grid-template-columns:48px 1fr;
        gap:20px;
        padding:23px 0;
        border-bottom:1px solid var(--div)
      }
      .sesen-page-oph .ai-step .ico {
        margin:0;
        width:42px;
        height:42px
      }
      .sesen-page-oph .ai-step strong {
        display:block;
        color:var(--navy);
        margin-bottom:5px
      }
      .sesen-page-oph .quality {
        background:var(--pale)
      }
      .sesen-page-oph .quality-grid {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px
      }
      .sesen-page-oph .q {
        padding:0 8px
      }
      .sesen-page-oph .q h3 {
        font-size:20px;
        margin:16px 0 9px
      }
      .sesen-page-oph .scale-band {
        display:grid;
        grid-template-columns:.9fr 1.1fr;
        gap:70px;
        align-items:center
      }
      .sesen-page-oph .scale-list {
        display:grid;
        grid-template-columns:1fr 1fr;
        border-top:1px solid var(--border)
      }
      .sesen-page-oph .scale-item {
        padding:18px 12px 18px 0;
        border-bottom:1px solid var(--div);
        font-size:15px;
        color:var(--navy)
      }
      .sesen-page-oph .related {
        background:var(--neutral)
      }
      .sesen-page-oph .related-list {
        border-top:1px solid var(--border)
      }
      .sesen-page-oph .related-row {
        display:grid;
        grid-template-columns:280px 1fr 210px;
        gap:34px;
        align-items:center;
        padding:27px 0;
        border-bottom:1px solid var(--div)
      }
      .sesen-page-oph .related-row h3 {
        font-size:20px
      }
      .sesen-page-oph .related-row .link {
        margin:0;
        justify-self:end
      }
      .sesen-page-oph .why-grid {
        display:grid;
        grid-template-columns:repeat(5,1fr);
        border-top:1px solid var(--border);
        border-bottom:1px solid var(--border)
      }
      .sesen-page-oph .why-item {
        padding:27px 20px
      }
      .sesen-page-oph .why-item+.why-item {
        border-left:1px solid var(--div)
      }
      .sesen-page-oph .why-item strong {
        display:block;
        color:var(--navy);
        margin-bottom:8px
      }
      .sesen-page-oph .why-item span {
        font-size:14px;
        line-height:1.55;
        color:var(--muted)
      }
      .sesen-page-oph .faq {
        background:var(--neutral)
      }
      .sesen-page-oph .faq-list {
        max-width:920px;
        border-top:1px solid var(--border)
      }
      .sesen-page-oph .faq-button {
        width:100%;
        display:grid;
        grid-template-columns:1fr 40px;
        gap:20px;
        align-items:center;
        padding:22px 0;
        border:0;
        border-bottom:1px solid var(--border);
        background:transparent;
        text-align:left;
        color:var(--navy);
        font:600 17px/1.45 Inter,Arial,sans-serif;
        cursor:pointer
      }
      .sesen-page-oph .plus {
        width:34px;
        height:34px;
        border-radius:50%;
        border:1px solid var(--border);
        display:flex;
        align-items:center;
        justify-content:center;
        color:var(--bd);
        font-size:20px
      }
      .sesen-page-oph .faq-answer {
        padding:0 62px 23px 0;
        border-bottom:1px solid var(--border)
      }
      .sesen-page-oph .faq-answer p {
        max-width:820px
      }
      .sesen-page-oph .closing {
        background:linear-gradient(115deg,#17264D,#253F8F);
        padding:82px 0
      }
      .sesen-page-oph .closing-grid {
        display:grid;
        grid-template-columns:1.25fr .75fr;
        gap:60px;
        align-items:center
      }
      .sesen-page-oph .closing h2 {
        color:#fff
      }
      .sesen-page-oph .closing p {
        color:#DCE4F3;
        font-size:18px;
        margin-top:18px;
        max-width:760px
      }
      .sesen-page-oph .closing .buttons {
        justify-content:flex-end;
        margin:0
      }
      .sesen-page-oph .closing .secondary {
        border-color:#fff
      }
      .sesen-page-oph .closing .secondary:hover {
        background:var(--pale)
      }
      @media(max-width:1050px) {
        .sesen-page-oph .wrap {
          padding:0 40px
        }
        .sesen-page-oph .hero-grid {
          gap:38px;
          grid-template-columns:1.05fr .95fr
        }
        .sesen-page-oph .ecosystem,.sesen-page-oph .why-grid {
          grid-template-columns:repeat(3,1fr)
        }
        .sesen-page-oph .eco:nth-child(4),.sesen-page-oph .why-item:nth-child(4) {
          border-left:0
        }
        .sesen-page-oph .therapy-band {
          grid-template-columns:repeat(2,1fr)
        }
        .sesen-page-oph .related-row {
          grid-template-columns:220px 1fr 170px;
          gap:24px
        }
        .sesen-page-oph .related-row {
          grid-template-columns:230px 1fr 190px
        }
        .sesen-page-oph .flow {
          grid-template-columns:repeat(3,1fr);
          gap:28px 0
        }
        .sesen-page-oph .flow-item:nth-child(3):after {
          display:none
        }
      }
      @media(max-width:820px) {
        .sesen-page-oph .wrap {
          padding:0 29px
        }
        .sesen-page-oph section {
          padding:78px 0
        }
        .sesen-page-oph .hero {
          padding:78px 0
        }
        .sesen-page-oph .hero-grid,.sesen-page-oph .split,.sesen-page-oph .disease-layout,.sesen-page-oph .device-panel,.sesen-page-oph .ai-layout,.sesen-page-oph .scale-band,.sesen-page-oph .closing-grid {
          grid-template-columns:1fr
        }
        .sesen-page-oph .hero-art {
          min-height:360px
        }
        .sesen-page-oph .ecosystem {
          grid-template-columns:repeat(2,1fr)
        }
        .sesen-page-oph .eco:nth-child(odd) {
          border-left:0
        }
        .sesen-page-oph .disease-row {
          grid-template-columns:190px 1fr
        }
        .sesen-page-oph .two-cols {
          grid-template-columns:1fr
        }
        .sesen-page-oph .related-row {
          grid-template-columns:1fr
        }
        .sesen-page-oph .related-row .link {
          justify-self:start
        }
        .sesen-page-oph .why-grid {
          grid-template-columns:repeat(2,1fr)
        }
        .sesen-page-oph .why-item:nth-child(odd) {
          border-left:0
        }
        .sesen-page-oph .closing .buttons {
          justify-content:flex-start
        }
      }
      @media(max-width:600px) {
        .sesen-page-oph .wrap {
          padding:0 20px
        }
        .sesen-page-oph section {
          padding:68px 0
        }
        .sesen-page-oph h1 {
          font-size:42px;
          text-align:center
        }
        .sesen-page-oph h2 {
          font-size:32px
        }
        .sesen-page-oph .hero .eyebrow {
          text-align:center
        }
        .sesen-page-oph .hero-copy>p {
          text-align:left
        }
        .sesen-page-oph .buttons {
          flex-direction:column
        }
        .sesen-page-oph .btn {
          width:100%
        }
        .sesen-page-oph .hero-art {
          min-height:310px
        }
        .sesen-page-oph .head.center-mobile {
          text-align:center
        }
        .sesen-page-oph .ecosystem,.sesen-page-oph .therapy-band,.sesen-page-oph .why-grid,.sesen-page-oph .coa-list,.sesen-page-oph .tag-grid,.sesen-page-oph .scale-list {
          grid-template-columns:1fr
        }
        .sesen-page-oph .eco {
          padding:24px 4px
        }
        .sesen-page-oph .eco .ico {
          width:50px;
          height:50px
        }
        .sesen-page-oph .eco+.eco,.sesen-page-oph .why-item+.why-item {
          border-left:0;
          border-top:1px solid var(--div)
        }
        .sesen-page-oph .disease-row {
          grid-template-columns:1fr;
          gap:9px
        }
        .sesen-page-oph .device-panel,.sesen-page-oph .coa-panel {
          padding:26px
        }
        .sesen-page-oph .tech-list {
          columns:1
        }
        .sesen-page-oph .two-col {
          padding:30px 26px
        }
        .sesen-page-oph .flow {
          grid-template-columns:1fr;
          gap:0
        }
        .sesen-page-oph .flow-item {
          display:grid;
          grid-template-columns:48px 1fr;
          gap:15px;
          text-align:left;
          align-items:center;
          padding:10px 0
        }
        .sesen-page-oph .flow-dot {
          margin:0
        }
        .sesen-page-oph .flow-item span {
          padding:0
        }
        .sesen-page-oph .flow-item:not(:last-child):after {
          content:"↓";
          left:17px;
          right:auto;
          top:auto;
          bottom:-10px
        }
        .sesen-page-oph .quality-grid {
          grid-template-columns:1fr;
          gap:34px
        }
        .sesen-page-oph .faq-button {
          font-size:16px
        }
        .sesen-page-oph .faq-answer {
          padding-right:0
        }
        .sesen-page-oph .closing .buttons {
          width:100%
        }
      }
      @media(max-width:350px) {
        .sesen-page-oph h1 {
          font-size:38px
        }
        .sesen-page-oph h2 {
          font-size:30px
        }
        .sesen-page-oph .hero-art {
          min-height:270px
        }
      }
      .sesen-page-oph img,.sesen-page-oph svg {
        max-width:100%
      }
      .sesen-page-oph .eco,.sesen-page-oph .tag,.sesen-page-oph .related-row,.sesen-page-oph .two-col,.sesen-page-oph .therapy,.sesen-page-oph .q {
        overflow-wrap:anywhere
      }
      `}</style>
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <E>OPHTHALMOLOGY & VISION SCIENCE</E>
          <h1>Ophthalmology Translation Services</h1>
          <p className="lead">Specialized translation for global ophthalmology programs spanning clinical research, advanced therapies, ophthalmic devices, regulatory content, and patient communication.</p>
          <p>Sesen helps pharmaceutical, biotechnology, medical device, diagnostics, and clinical research organizations communicate complex vision-science content accurately and consistently across languages.</p>
          <div className="buttons">
            <a className="btn primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            <a className="btn secondary" href="https://www.sesen.com/contact-sales/">DISCUSS YOUR OPHTHALMOLOGY PROGRAM</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Conceptual ophthalmology illustration showing an eye, imaging scan, and multilingual clinical documentation">
          <div className="eye-art">
            <div className="eye-outline"/>
            <div className="iris"/>
            <div className="mini scan">
              <div className="wave"/>
              <div className="line"/>
              <div className="line"/>
            </div>
            <div className="mini doc">
              <div className="line"/>
              <div className="line"/>
              <div className="line"/>
              <div className="line"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="authority">
      <div className="wrap">
        <div className="head center center-mobile">
          <h2>Specialized Translation for Global Ophthalmology Programs</h2>
          <p>Ophthalmology brings together specialized medicine, rapidly evolving therapeutics, sophisticated imaging technologies, clinical outcome measures, and patient experiences. Sesen helps maintain meaning and terminology across this interconnected content ecosystem.</p>
        </div>
        <div className="ecosystem">{[["trial","Clinical Research","Protocols, study content, assessments"],["gene","Advanced Therapies","Biologics, gene and cell therapies"],["device","Devices & Diagnostics","Imaging, surgical and diagnostic systems"],["reg","Regulatory Content","Submissions, labeling, safety content"],["patient","Patient Communication","COAs, education, treatment information"]].map(x=>
          <div className="eco" key={x[1]}>
            <I n={x[0]}/>
            <strong>{x[1]}</strong>
            <span>{x[2]}</span>
          </div>)}</div>
        </div>
      </section>
      <section>
        <div className="wrap disease-layout">
          <div className="disease-intro">
            <E>THERAPEUTIC EXPERTISE</E>
            <h2>Translation Expertise Across Ophthalmic Diseases and Conditions</h2>
            <p>Support multilingual content across diseases affecting the retina, optic nerve, lens, cornea, ocular surface, and other structures involved in vision.</p>
          </div>
          <div className="disease-list">{diseases.map(d=>
            <div className="disease-row" key={d[0]}>
              <h3>{d[0]}</h3>
              <p>{d[1]}</p>
            </div>)}</div>
          </div>
        </section>
        <section className="trial">
          <div className="wrap split">
            <div className="copy">
              <E>CLINICAL DEVELOPMENT</E>
              <h2>Support Global Ophthalmology Clinical Trials</h2>
              <p>Ophthalmology studies can combine treatment protocols with visual acuity measurements, imaging, ocular examinations, visual-field assessments, clinical endpoints, and patient-reported measures of visual function.</p>
              <p>Sesen helps sponsors, CROs, research organizations, and study teams maintain consistent terminology and meaning across countries and study sites.</p>
              <L href="https://www.sesen.com/clinical-trial-translation-services/">Clinical Trial Translation Services</L>
            </div>
            <div className="tag-grid">{["Clinical trial protocols","Investigator’s brochures","Informed consent forms","Patient information sheets","Clinical study reports","Site & investigator materials","Safety documentation","Clinical assessments","Study questionnaires","Training materials"].map(t=>
              <div className="tag" key={t}>{t}</div>)}</div>
            </div>
          </section>
          <section>
            <div className="wrap split">
              <div className="coa-panel">
                <E>PATIENT-CENTERED MEASUREMENT</E>
                <h3>Visual Function Across Languages</h3>
                <div className="coa-list">{["Patient-reported outcomes (PROs)","Clinical outcome assessments (COAs)","Visual-function questionnaires","Symptom assessments","Quality-of-life instruments","Patient diaries","ePRO and eCOA content","Treatment-experience measures"].map(t=>
                  <div className="coa-item" key={t}>{t}</div>)}</div>
                </div>
                <div className="copy">
                  <h2>Preserve the Patient’s Experience of Vision Across Languages</h2>
                  <p>How well a patient can read, navigate daily activities, recognize objects, drive, work, or perform other visually dependent tasks can be central to understanding treatment outcomes.</p>
                  <p>Our linguistic validation workflows can include forward translation, independent review, back translation, reconciliation, cross-language harmonization, cognitive debriefing, findings analysis, and final harmonization.</p>
                  <L href="https://www.sesen.com/linguistic-validation-services/">Linguistic Validation Services</L>
                </div>
              </div>
            </section>
            <section className="advanced">
              <div className="wrap">
                <div className="head center center-mobile">
                  <E>ADVANCED MODALITIES</E>
                  <h2>Translate the Next Generation of Ophthalmic Therapies</h2>
                  <p>Support complex multilingual content as innovative ophthalmic treatments move from scientific development through clinical research, regulatory submission, medical affairs, commercialization, and patient communication.</p>
                </div>
                <div className="therapy-band">{[["gene","Gene & Cell Therapies","Support advanced programs addressing inherited, retinal, and other ophthalmic diseases."],["trial","Biologics & Intravitreal Therapies","Keep clinical and treatment terminology aligned across specialized development content."],["quality","RNA & Sustained Delivery","Translate emerging therapeutic approaches and delivery technologies with controlled terminology."],["reg","Combination Products","Connect therapeutic, device, regulatory, and patient-facing content across the product lifecycle."]].map(x=>
                  <div className="therapy" key={x[1]}>
                    <I n={x[0]}/>
                    <h3>{x[1]}</h3>
                    <p>{x[2]}</p>
                  </div>)}</div>
                  <L href="https://www.sesen.com/cell-gene-therapy-translation-services/">Cell & Gene Therapy Translation Services</L>
                </div>
              </section>
              <section>
                <div className="wrap">
                  <div className="device-panel">
                    <div className="device-visual" aria-label="Conceptual ophthalmic imaging system">
                      <div className="screen">
                        <div className="retina"/>
                        <div className="line"/>
                        <div className="line"/>
                      </div>
                    </div>
                    <div className="copy">
                      <h2>Translation for Ophthalmic Devices and Diagnostic Technologies</h2>
                      <p>Sesen supports multilingual content for ophthalmic technologies used in diagnosis, imaging, treatment, surgery, and ongoing disease management, while device-specific documentation is addressed in greater depth on our dedicated device page.</p>
                      <ul className="tech-list">
                        <li>Optical coherence tomography systems</li>
                        <li>Retinal imaging systems</li>
                        <li>Ophthalmic cameras</li>
                        <li>Visual-field testing systems</li>
                        <li>Ophthalmic lasers</li>
                        <li>Phacoemulsification equipment</li>
                        <li>Intraocular lenses</li>
                        <li>Device software and imaging interfaces</li>
                      </ul>
                      <L href="https://www.sesen.com/ophthalmic-device-translation-services/">Explore Ophthalmic Device Translation Services</L>
                    </div>
                  </div>
                </div>
              </section>
              <section className="dual">
                <div className="wrap">
                  <div className="two-cols">
                    <div className="two-col">
                      <h2>Regulatory Translation Across the Ophthalmology Product Lifecycle</h2>
                      <p>Maintain terminology as information moves from clinical development into regulatory submissions and ultimately into product, healthcare professional, and patient communication.</p>
                      <ul>
                        <li>Regulatory submissions and correspondence</li>
                        <li>Clinical and safety documentation</li>
                        <li>Product information and labeling</li>
                        <li>Technical and post-market documentation</li>
                      </ul>
                      <L href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services</L>
                    </div>
                    <div className="two-col">
                      <h2>Make Complex Eye-Care Information Clear for Patients</h2>
                      <p>Patient-facing translations must preserve medical meaning while communicating unfamiliar anatomy, procedures, visual-function concepts, treatments, and device information clearly.</p>
                      <ul>
                        <li>Patient education and treatment instructions</li>
                        <li>Clinical trial and informed consent content</li>
                        <li>Surgical preparation and post-procedure instructions</li>
                        <li>Patient support and digital health content</li>
                      </ul>
                      <L href="https://www.sesen.com/patient-translation-services/">Patient Translation Services</L>
                    </div>
                  </div>
                </div>
              </section>
              <section className="vocab">
                <div className="wrap">
                  <div className="head">
                    <E d>TERMINOLOGY GOVERNANCE</E>
                    <h2>One Ophthalmology Vocabulary Across the Content Lifecycle</h2>
                    <p>The same clinical concept can appear in dozens of documents created by different teams over several years. Sesen helps establish a consistent ophthalmology vocabulary across related content.</p>
                  </div>
                  <div className="flow">{["Clinical Protocols","Clinical Assessments","Regulatory Documentation","Product Information","Device & Software Content","Patient Communication"].map((t,i)=>
                    <div className="flow-item" key={t}>
                      <div className="flow-dot">{String(i+1).padStart(2,"0")}</div>
                      <span>{t}</span>
                    </div>)}</div>
                    <div className="asset-row">{["Approved terminology","Client glossaries","Translation memories","Product & study terminology","Cross-document linguistic assets","Automated terminology QA"].map(t=>
                      <span className="asset" key={t}>{t}</span>)}</div>
                    </div>
                  </section>
                  <section>
                    <div className="wrap ai-layout">
                      <div className="copy">
                        <h2>AI-Enabled Ophthalmology Translation With Expert Human Review</h2>
                        <p>Sesen combines AI-enabled translation technology with specialized human expertise to improve efficiency, terminology reuse, consistency, and quality control while maintaining appropriate human review for regulated and high-impact content.</p>
                        <p>The workflow is adapted to the content type, intended use, and quality requirements rather than applying the same level of automation to every document.</p>
                      </div>
                      <div className="ai-steps">{[["gene","AI-Enabled Translation","Technology supports scalable multilingual production and intelligent reuse."],["quality","Specialized Human Review","Professional linguistic expertise remains central to regulated and high-impact content."],["terminology","Terminology & Translation Memory","Approved language is reused consistently across related documents and updates."],["device","Linguistic & Document QA","Automated and human checks support terminology, numbers, formatting, and content integrity."]].map(x=>
                        <div className="ai-step" key={x[1]}>
                          <I n={x[0]}/>
                          <div>
                            <strong>{x[1]}</strong>
                            <p>{x[2]}</p>
                          </div>
                        </div>)}</div>
                      </div>
                    </section>
                    <section className="quality">
                      <div className="wrap">
                        <div className="head center center-mobile">
                          <h2>Quality Controls for High-Stakes Ophthalmology Content</h2>
                          <p>Structured multilingual processes help protect clinical, scientific, technical, regulatory, and patient meaning throughout production.</p>
                        </div>
                        <div className="quality-grid">{[["patient","Specialized Linguistic Expertise","Match projects with linguistic resources appropriate to the subject matter and content type."],["terminology","Terminology Management","Use approved terminology, glossaries, translation memories, and project-specific linguistic assets."],["review","Independent Review","Apply independent linguistic review according to project and quality requirements."],["autoqa","Automated Quality Assurance","Identify potential inconsistencies involving terminology, numbers, formatting, omissions, and other issues."],["format","Document & Formatting Quality","Review multilingual files for layout, formatting, and content integrity before delivery."],["workflow","Traceable Multilingual Workflows","Manage revisions, linguistic assets, feedback, and updates throughout long-running programs."]].map(x=>
                          <div className="q" key={x[1]}>
                            <I n={x[0]}/>
                            <h3>{x[1]}</h3>
                            <p>{x[2]}</p>
                          </div>)}</div>
                        </div>
                      </section>
                      <section>
                        <div className="wrap scale-band">
                          <div className="copy">
                            <E>GLOBAL DELIVERY</E>
                            <h2>Scale Ophthalmology Content Across Languages and Markets</h2>
                            <p>Centralized terminology, reusable linguistic assets, AI-enabled technology, and scalable production workflows help organizations expand from individual documents to complex global programs while maintaining consistency.</p>
                            <p>Whether you are translating one specialized ophthalmology document or coordinating content across dozens of markets, Sesen can build the multilingual workflow around your program.</p>
                          </div>
                          <div className="scale-list">{["Multinational clinical trials","Multi-country regulatory programs","Global therapeutic launches","Ophthalmic device releases","International patient programs","Medical affairs initiatives","Ongoing product updates","Large multilingual portfolios"].map(t=>
                            <div className="scale-item" key={t}>{t}</div>)}</div>
                          </div>
                        </section>
                        <section className="related">
                          <div className="wrap">
                            <div className="head">
                              <h2>Related Ophthalmology Translation Services</h2>
                              <p>Connect therapeutic-area expertise with the specialist clinical, regulatory, device, advanced-therapy, and patient services your program requires.</p>
                            </div>
                            <div className="related-list">{[["Clinical Trial Translation Services","Protocols, informed consent, investigator materials, patient content, safety documentation, and other multinational study materials.","https://www.sesen.com/clinical-trial-translation-services/"],["Ophthalmic Device Translation Services","IFUs, labeling, software, technical documentation, regulatory content, and training for ophthalmic technologies.","https://www.sesen.com/ophthalmic-device-translation-services/"],["Cell & Gene Therapy Translation Services","Scientific, clinical, regulatory, and patient content for advanced therapeutic programs.","https://www.sesen.com/cell-gene-therapy-translation-services/"],["Linguistic Validation Services","PROs, COAs, visual-function questionnaires, eCOA, ePRO, and other patient-centered measures.","https://www.sesen.com/linguistic-validation-services/"],["Regulatory Translation Services","Global submissions and regulated documentation across development, approval, commercialization, and post-market activities.","https://www.sesen.com/regulatory-translation-services/"],["Patient Translation Services","Clear multilingual treatment, study, procedure, and product communication for patients and caregivers.","https://www.sesen.com/patient-translation-services/"]].map(x=>
                              <div className="related-row" key={x[0]}>
                                <h3>{x[0]}</h3>
                                <p>{x[1]}</p>
                                <L href={x[2]}>Explore Service</L>
                              </div>)}</div>
                            </div>
                          </section>
                          <section>
                            <div className="wrap">
                              <div className="head center center-mobile">
                                <h2>Why Life Sciences Organizations Choose Sesen</h2>
                                <p>Specialized expertise, scalable technology, and structured multilingual workflows for complex ophthalmology content.</p>
                              </div>
                              <div className="why-grid">{[["Life Sciences Expertise","Specialized clinical, scientific, regulatory, technical, and patient-facing content."],["AI-Enabled Efficiency","Language technology and intelligent reuse to improve multilingual productivity."],["Human Quality Control","Professional review aligned to content requirements and risk."],["Terminology Consistency","Reusable linguistic assets across diseases, treatments, devices, and markets."],["Scalable Global Delivery","Support from individual documents through ongoing multilingual programs."]].map(x=>
                                <div className="why-item" key={x[0]}>
                                  <strong>{x[0]}</strong>
                                  <span>{x[1]}</span>
                                </div>)}</div>
                              </div>
                            </section>
                            <section className="faq">
                              <div className="wrap">
                                <div className="head">
                                  <h2>Ophthalmology Translation Services FAQ</h2>
                                </div>
                                <div className="faq-list">{faqs.map((f,i)=>
                                  <div key={f[0]}>
                                    <button className="faq-button" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}>
                                      <span>{f[0]}</span>
                                      <span className="plus" aria-hidden="true">{open===i?'−':'+'}</span>
                                    </button>{open===i&&<div className="faq-answer">
                                    <p>{f[1]}</p>
                                  </div>}</div>)}</div>
                                </div>
                              </section>
                              <section className="closing">
                                <div className="wrap closing-grid">
                                  <div>
                                    <h2>Bring Your Ophthalmology Program to Global Markets</h2>
                                    <p>From multinational clinical studies and advanced retinal therapies to ophthalmic devices, regulatory submissions, clinical outcome assessments, and patient communication, Sesen helps organizations communicate specialized ophthalmology content accurately and consistently across languages.</p>
                                  </div>
                                  <div className="buttons">
                                    <a className="btn primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
                                    <a className="btn secondary" href="https://www.sesen.com/contact-sales/">CONTACT SALES</a>
                                  </div>
                                </div>
                              </section>
                            </main>
  );
}
