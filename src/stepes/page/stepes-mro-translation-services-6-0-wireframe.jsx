import React from "react";

const styles = String.raw`
:root {
  --mro-magenta: #C11D63;
  --mro-magenta-dark: #A71954;
  --mro-burgundy: #7A1542;
  --mro-blush: #FDF2F7;
  --mro-pink-light: #F2A7C6;
  --mro-ink: #202631;
  --mro-body: #485162;
  --mro-muted: #6E7786;
  --mro-line: #E2E6EB;
  --mro-line-strong: #D2D8E0;
  --mro-soft: #F6F7F9;
  --mro-dark: #232833;
  --mro-white: #FFFFFF;
  --mro-radius-lg: 30px;
  --mro-radius-md: 22px;
  --mro-shadow: 0 16px 48px rgba(22, 29, 38, 0.07);
  --mro-shell: 1280px;
  --mro-pad: 56px;
  font-family: "Inter Tight", "Inter", Arial, Helvetica, sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #fff; color: var(--mro-ink); font-family: "Inter Tight", "Inter", Arial, Helvetica, sans-serif; }
.mro-page { overflow-x: clip; background: #fff; }
.mro-shell { width: min(var(--mro-shell), calc(100% - (var(--mro-pad) * 2))); margin: 0 auto; }
.mro-section { padding: 96px 0; }
.mro-section-dense { padding: 80px 0; }
.mro-section-soft { background: var(--mro-soft); }
.mro-section-dark { background: var(--mro-dark); color: #fff; }
.mro-h1, .mro-h2, .mro-h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: var(--mro-ink); }
.mro-h1 { font-size: 48px; line-height: 1.04; max-width: 720px; }
.mro-h2 { font-size: 36px; line-height: 1.12; }
.mro-h3 { font-size: 24px; line-height: 1.2; }
.mro-section-dark .mro-h2, .mro-section-dark .mro-h3 { color: #fff; }
.mro-body, .mro-page li, .mro-page p { font-size: 17px; line-height: 1.7; color: var(--mro-body); font-weight: 400; }
.mro-page .mro-eyebrow { margin: 0 0 14px; color: var(--mro-magenta); font-size: 11px; line-height: 1.25; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
.mro-page .mro-section-dark .mro-eyebrow { color: var(--mro-pink-light); font-size: 11px; line-height: 1.25; font-weight: 600; letter-spacing: .14em; }
.mro-lead { font-size: 18px !important; line-height: 1.68 !important; max-width: 790px; }
.mro-section-dark p, .mro-section-dark li { color: #E7EBF0; }
.mro-copy-narrow { max-width: 760px; }
.mro-heading-group { margin-bottom: 44px; }
.mro-heading-group .mro-body { max-width: 800px; margin: 18px 0 0; }
.mro-center { text-align: center; }
.mro-center .mro-body { margin-left: auto; margin-right: auto; }
.mro-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; color: var(--mro-magenta); font-size: 16px; line-height: 1.35; font-weight: 600; text-decoration: none; min-height: 44px; }
.mro-link:hover { color: var(--mro-magenta-dark); }
.mro-section-dark .mro-link, .mro-section-dark .mro-link:visited { color: var(--mro-pink-light); }
.mro-section-dark .mro-link:hover, .mro-section-dark .mro-link:focus-visible { color: #FFFFFF; outline: none; }
.mro-link .arrow { transition: transform .18s ease; }
.mro-link:hover .arrow { transform: translateX(3px); }
.mro-btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.mro-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 22px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; border: 1px solid var(--mro-line-strong); transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
.mro-btn-primary, .mro-btn-primary:visited { background: var(--mro-magenta); color: #fff !important; border-color: var(--mro-magenta); }
.mro-btn-primary:hover, .mro-btn-primary:focus-visible { background: var(--mro-magenta-dark); color: #fff !important; box-shadow: 0 8px 24px rgba(193,29,99,.18); transform: translateY(-1px); outline: none; }
.mro-btn-secondary, .mro-btn-secondary:visited { background: #fff; color: var(--mro-ink); }
.mro-btn-secondary:hover, .mro-btn-secondary:focus-visible { border-color: #BFC6CF; box-shadow: 0 8px 24px rgba(22,29,38,.08); transform: translateY(-1px); outline: none; }
.mro-hero { padding: 104px 0 92px; background: #fff; }
.mro-hero-grid { display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(420px, .94fr); gap: 68px; align-items: center; }
.mro-hero-copy .mro-lead { margin: 24px 0 0; }
.mro-page .mro-hero-note { margin-top: 20px; color: var(--mro-muted); font-size: 16px; line-height: 1.6; }
.mro-hero-art { width: 100%; max-width: 560px; justify-self: end; }
.mro-hero-art svg { display: block; width: 100%; height: auto; }
.mro-proof-wrap { padding: 0 0 30px; }
.mro-proof { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--mro-line); border-radius: 24px; overflow: hidden; background: #fff; box-shadow: 0 10px 34px rgba(22,29,38,.04); }
.mro-proof-item { padding: 22px 24px; min-height: 92px; }
.mro-proof-item + .mro-proof-item { border-left: 1px solid var(--mro-line); }
.mro-page .mro-proof-title { margin: 0; font-size: 17px; line-height: 1.3; font-weight: 600; color: var(--mro-ink); }
.mro-proof-desc { margin: 6px 0 0 !important; font-size: 16px !important; line-height: 1.5 !important; color: var(--mro-muted) !important; }
.mro-split { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 72px; align-items: start; }
.mro-definitions { border-top: 1px solid var(--mro-line); }
.mro-definition { display: grid; grid-template-columns: 210px 1fr; gap: 28px; padding: 26px 0; border-bottom: 1px solid var(--mro-line); }
.mro-definition strong { display: block; font-size: 17px; line-height: 1.4; color: var(--mro-ink); }
.mro-definition p { margin: 0; }
.mro-overview-summary { margin: 26px 0 0; }
.mro-lifecycle { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--mro-line); border-left: 1px solid var(--mro-line); background: #fff; }
.mro-stage { min-height: 260px; padding: 30px 28px; border-right: 1px solid var(--mro-line); border-bottom: 1px solid var(--mro-line); }
.mro-stage-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.mro-stage-num { width: 40px; height: 40px; flex: 0 0 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; background: var(--mro-blush); color: var(--mro-magenta); font-size: 14px; font-weight: 600; }
.mro-stage h3 { margin: 0; font-size: 22px; line-height: 1.2; font-weight: 600; }
.mro-stage p { margin: 0; }
.mro-content-groups { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--mro-line); border-left: 1px solid var(--mro-line); }
.mro-content-group { padding: 34px; border-right: 1px solid var(--mro-line); border-bottom: 1px solid var(--mro-line); background: #fff; }
.mro-content-group-wide { grid-column: 1 / -1; }
.mro-content-group ul { margin: 18px 0 0; padding-left: 20px; columns: 2; column-gap: 34px; }
.mro-content-group li { margin: 0 0 8px; break-inside: avoid; }
.mro-industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.mro-industry { padding: 30px; border: 1px solid var(--mro-line); border-radius: 24px; background: #fff; }
.mro-iconbox { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border-radius: 14px; background: var(--mro-soft); color: var(--mro-magenta); }
.mro-iconbox svg { width: 22px; height: 22px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mro-industry p { margin: 14px 0 0; }
.mro-digital-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 70px; align-items: center; }
.mro-digital-list { margin-top: 30px; border-top: 1px solid rgba(255,255,255,.18); }
.mro-digital-row { display: grid; grid-template-columns: 210px 1fr; gap: 22px; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
.mro-digital-row strong { color: #fff; font-size: 17px; font-weight: 600; }
.mro-digital-row p { margin: 0; }
.mro-system-map { position: relative; min-height: 520px; border: 1px solid rgba(255,255,255,.16); border-radius: 30px; padding: 36px; background: rgba(255,255,255,.035); }
.mro-system-core { display: flex; align-items: center; justify-content: center; width: 170px; height: 170px; margin: 138px auto 0; border-radius: 50%; border: 1px solid rgba(242,167,198,.65); background: rgba(193,29,99,.14); color: #fff; text-align: center; font-weight: 600; line-height: 1.35; }
.mro-system-node { position: absolute; width: 150px; min-height: 74px; display: flex; align-items: center; justify-content: center; padding: 14px; border: 1px solid rgba(255,255,255,.18); border-radius: 16px; background: rgba(255,255,255,.055); color: #fff; text-align: center; font-size: 16px; font-weight: 600; line-height: 1.3; }
.mro-system-node.n1 { top: 34px; left: 50%; transform: translateX(-50%); }
.mro-system-node.n2 { top: 115px; right: 28px; }
.mro-system-node.n3 { bottom: 76px; right: 28px; }
.mro-system-node.n4 { bottom: 24px; left: 50%; transform: translateX(-50%); }
.mro-system-node.n5 { bottom: 76px; left: 28px; }
.mro-system-node.n6 { top: 115px; left: 28px; }
.mro-accuracy { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); gap: 72px; align-items: start; }
.mro-control-list { border-top: 1px solid var(--mro-line); }
.mro-control-row { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; padding: 22px 0; border-bottom: 1px solid var(--mro-line); }
.mro-control-item strong { display: block; font-size: 17px; color: var(--mro-ink); margin-bottom: 6px; }
.mro-control-item p { margin: 0; }
.mro-risk-panel { border: 1px solid var(--mro-line); border-radius: 28px; overflow: hidden; background: #fff; }
.mro-risk-row { display: grid; grid-template-columns: 245px 1fr; gap: 28px; padding: 26px 30px; }
.mro-risk-row + .mro-risk-row { border-top: 1px solid var(--mro-line); }
.mro-risk-label { font-size: 17px; font-weight: 600; color: var(--mro-ink); }
.mro-risk-row p { margin: 0; }
.mro-risk-note { margin-top: 22px; padding-left: 18px; border-left: 3px solid var(--mro-magenta); }
.mro-asset-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--mro-line); border-left: 1px solid var(--mro-line); }
.mro-asset { padding: 34px; border-right: 1px solid var(--mro-line); border-bottom: 1px solid var(--mro-line); }
.mro-asset p { margin: 14px 0 0; }
.mro-tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--mro-line); }
.mro-tech-row { padding: 28px 0; border-bottom: 1px solid var(--mro-line); }
.mro-tech-row:nth-child(odd) { padding-right: 38px; }
.mro-tech-row:nth-child(even) { padding-left: 38px; border-left: 1px solid var(--mro-line); }
.mro-tech-row p { margin: 12px 0 0; }
.mro-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-top: 40px; }
.mro-flow-step { position: relative; min-height: 155px; padding: 24px 22px; border: 1px solid var(--mro-line); border-radius: 20px; background: #fff; }
.mro-flow-num { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 999px; background: var(--mro-blush); color: var(--mro-magenta); font-size: 13px; font-weight: 600; margin-bottom: 14px; }
.mro-flow-step strong { display: block; font-size: 16px; line-height: 1.35; color: var(--mro-ink); }
.mro-trigger-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 24px; }
.mro-trigger { padding: 18px 20px; border-top: 1px solid var(--mro-line); font-size: 16px; line-height: 1.5; color: var(--mro-body); }
.mro-language-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 70px; align-items: start; }
.mro-region-list { border-top: 1px solid var(--mro-line); }
.mro-region { display: grid; grid-template-columns: 150px 1fr; gap: 22px; padding: 21px 0; border-bottom: 1px solid var(--mro-line); }
.mro-region strong { color: var(--mro-ink); font-size: 17px; }
.mro-region p { margin: 0; }
.mro-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--mro-line); border-left: 1px solid var(--mro-line); }
.mro-why { padding: 28px; border-right: 1px solid var(--mro-line); border-bottom: 1px solid var(--mro-line); min-height: 220px; }
.mro-why p { margin: 12px 0 0; }
.mro-iso { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--mro-line); border-radius: 24px; overflow: hidden; background: #fff; }
.mro-iso-item { padding: 30px; background: #fff; }
.mro-iso-item + .mro-iso-item { border-left: 1px solid var(--mro-line); }
.mro-iso-code { color: var(--mro-magenta); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
.mro-iso-item p { margin: 12px 0 0; }
.mro-faq { border-top: 1px solid var(--mro-line); }
.mro-faq details { border-bottom: 1px solid var(--mro-line); }
.mro-faq summary { position: relative; list-style: none; cursor: pointer; padding: 24px 52px 24px 0; color: var(--mro-ink); font-size: 18px; line-height: 1.45; font-weight: 600; }
.mro-faq summary::-webkit-details-marker { display: none; }
.mro-faq summary::after { content: "+"; position: absolute; right: 4px; top: 22px; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; color: var(--mro-magenta); background: var(--mro-blush); font-size: 20px; font-weight: 400; }
.mro-faq details[open] summary::after { content: "−"; }
.mro-faq-answer { padding: 0 62px 24px 0; max-width: 840px; }
.mro-faq-answer p { margin: 0 0 12px; }
.mro-cta-wrap { padding: 80px 0 96px; }
.mro-cta { padding: 62px; border-radius: 30px; background: var(--mro-blush); border: 1px solid #F3DCE7; text-align: center; }
.mro-cta .mro-h2 { max-width: 820px; margin: 0 auto; }
.mro-cta .mro-body { max-width: 760px; margin: 20px auto 0; }
.mro-cta .mro-btn-row { justify-content: center; }
.mro-note { font-size: 17px !important; line-height: 1.6 !important; color: var(--mro-body) !important; }
@media (max-width: 1100px) {
  :root { --mro-pad: 40px; }
  .mro-hero-grid { grid-template-columns: 1fr 440px; gap: 42px; }
  .mro-industry-grid { grid-template-columns: repeat(2, 1fr); }
  .mro-why-grid { grid-template-columns: repeat(2, 1fr); }
  .mro-flow { grid-template-columns: repeat(3, 1fr); }
  .mro-trigger-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 820px) {
  :root { --mro-pad: 24px; }
  .mro-section { padding: 72px 0; }
  .mro-section-dense { padding: 68px 0; }
  .mro-hero { padding: 88px 0 72px; }
  .mro-h1 { font-size: 42px; }
  .mro-h2 { font-size: 32px; }
  .mro-h3 { font-size: 22px; }
  .mro-hero-grid, .mro-split, .mro-digital-grid, .mro-accuracy, .mro-language-grid { grid-template-columns: 1fr; gap: 42px; }
  .mro-hero-copy { text-align: center; }
  .mro-hero-copy .mro-h1, .mro-hero-copy .mro-lead { margin-left: auto; margin-right: auto; }
  .mro-hero-copy .mro-btn-row { justify-content: center; }
  .mro-hero-art { justify-self: center; max-width: 520px; }
  .mro-proof { grid-template-columns: repeat(2, 1fr); }
  .mro-proof-item + .mro-proof-item { border-left: none; }
  .mro-proof-item:nth-child(even) { border-left: 1px solid var(--mro-line); }
  .mro-proof-item:nth-child(n+3) { border-top: 1px solid var(--mro-line); }
  .mro-lifecycle { grid-template-columns: repeat(2, 1fr); }
  .mro-content-group ul { columns: 1; }
  .mro-industry-grid { grid-template-columns: repeat(2, 1fr); }
  .mro-system-map { min-height: 500px; }
  .mro-flow { grid-template-columns: repeat(2, 1fr); }
  .mro-iso { grid-template-columns: 1fr; }
  .mro-iso-item + .mro-iso-item { border-left: 0; border-top: 1px solid var(--mro-line); }
  .mro-language-copy { text-align: center; }
  .mro-language-copy .mro-body { max-width: 720px; margin-left: auto; margin-right: auto; }
  .mro-language-copy .mro-link { justify-content: center; }
  .mro-heading-group.mro-stack-center { text-align: center; }
  .mro-heading-group.mro-stack-center .mro-body { margin-left: auto; margin-right: auto; }
}
@media (max-width: 560px) {
  :root { --mro-pad: 20px; }
  .mro-section { padding: 68px 0; }
  .mro-section-dense { padding: 64px 0; }
  .mro-hero { padding: 76px 0 64px; }
  .mro-h1 { font-size: 38px; line-height: 1.06; }
  .mro-h2 { font-size: 30px; }
  .mro-h3 { font-size: 20px; }
  .mro-body, .mro-page li, .mro-page p { font-size: 17px; }
  .mro-lead { font-size: 18px !important; }
  .mro-heading-group { margin-bottom: 34px; }
  .mro-btn-row { flex-direction: column; }
  .mro-btn { width: 100%; min-height: 50px; }
  .mro-proof { grid-template-columns: 1fr; }
  .mro-proof-item:nth-child(even) { border-left: none; }
  .mro-proof-item:nth-child(n+2) { border-top: 1px solid var(--mro-line); }
  .mro-proof-item { padding: 20px 22px; }
  .mro-definition { grid-template-columns: 1fr; gap: 10px; }
  .mro-lifecycle, .mro-content-groups, .mro-industry-grid, .mro-asset-grid, .mro-tech-grid, .mro-why-grid, .mro-flow, .mro-trigger-grid { grid-template-columns: 1fr; }
  .mro-stage { min-height: auto; padding: 26px 24px; }
  .mro-content-group, .mro-content-group-wide { grid-column: auto; padding: 28px 24px; }
  .mro-industry, .mro-asset, .mro-why, .mro-iso-item { padding: 26px 24px; }
  .mro-content-group ul { columns: 1; }
  .mro-digital-row, .mro-risk-row, .mro-region { grid-template-columns: 1fr; gap: 8px; }
  .mro-system-map { min-height: auto; padding: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .mro-system-core { width: auto; height: auto; margin: 0; border-radius: 18px; grid-column: 1 / -1; padding: 24px; }
  .mro-system-node { position: static; width: auto; min-height: 68px; transform: none !important; }
  .mro-control-row { grid-template-columns: 1fr; gap: 20px; }
  .mro-tech-row:nth-child(odd), .mro-tech-row:nth-child(even) { padding: 24px 0; border-left: 0; }
  .mro-why { min-height: auto; }
  .mro-cta-wrap { padding: 64px 0 72px; }
  .mro-cta { padding: 44px 24px; }
  .mro-faq summary { padding-right: 48px; }
  .mro-faq-answer { padding-right: 0; }
  .mro-hero-art { max-width: 440px; }
}
@media (max-width: 360px) {
  .mro-system-map { grid-template-columns: 1fr; padding: 20px; }
  .mro-system-core { grid-column: auto; }
}
`;
const pageMarkup = String.raw`
<main class="mro-page">
  <section class="mro-hero">
    <div class="mro-shell mro-hero-grid">
      <div class="mro-hero-copy">
        <p class="mro-eyebrow">GLOBAL MRO PROGRAMS</p>
        <h1 class="mro-h1">MRO Translation Services</h1>
        <p class="mro-lead">Professional translation and localization for maintenance, repair and overhaul and maintenance, repair and operations programs across global industries.</p>
        <p class="mro-body">Stepes helps manufacturers, equipment companies, service organizations, and asset-intensive enterprises translate the content people rely on throughout the equipment lifecycle, from technical manuals and procedures to diagnostics, software, parts systems, and training.</p>
        <div class="mro-btn-row">
          <a class="mro-btn mro-btn-primary" href="https://app.stepes.com/quote/">Get a Quote</a>
          <a class="mro-btn mro-btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
        </div>
        <p class="mro-hero-note">Maintenance manuals · repair procedures · CMMS &amp; EAM · technician applications · parts catalogs · training</p>
      </div>
      <div class="mro-hero-art" aria-hidden="true">
        <svg viewBox="0 0 620 540" focusable="false">
          <rect x="22" y="24" width="576" height="492" rx="30" fill="#FBFCFD" stroke="#D7DCE3"/>
          <path d="M107 365h126M387 365h121M311 121v67M311 348v60" stroke="#AEB6C1" stroke-width="2" stroke-dasharray="6 8"/>
          <circle cx="310" cy="270" r="103" fill="#fff" stroke="#626C79" stroke-width="3"/>
          <circle cx="310" cy="270" r="67" fill="#FDF2F7" stroke="#C11D63" stroke-width="2"/>
          <circle cx="310" cy="270" r="28" fill="#fff" stroke="#626C79" stroke-width="3"/>
          <path d="M310 167v45M310 328v45M207 270h45M368 270h45M237 197l32 32M351 311l32 32M383 197l-32 32M269 311l-32 32" stroke="#626C79" stroke-width="8" stroke-linecap="round"/>
          <rect x="58" y="84" width="184" height="116" rx="18" fill="#fff" stroke="#B9C0C9" stroke-width="2"/>
          <path d="M84 112h82M84 132h126M84 152h108M84 172h76" stroke="#626C79" stroke-width="5" stroke-linecap="round"/>
          <rect x="178" y="101" width="38" height="38" rx="10" fill="#FDF2F7" stroke="#C11D63"/>
          <path d="M190 120h14M197 113v14" stroke="#C11D63" stroke-width="2" stroke-linecap="round"/>
          <text x="58" y="72" fill="#4F5967" font-size="14" font-weight="600" font-family="Arial, sans-serif">SERVICE MANUAL</text>
          <rect x="397" y="78" width="164" height="128" rx="18" fill="#fff" stroke="#B9C0C9" stroke-width="2"/>
          <path d="M425 116h106M425 142h48M486 142h45M425 168h76" stroke="#626C79" stroke-width="5" stroke-linecap="round"/>
          <circle cx="522" cy="167" r="14" fill="#FDF2F7" stroke="#C11D63"/>
          <path d="M516 167l4 4 8-9" stroke="#C11D63" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="398" y="66" fill="#4F5967" font-size="14" font-weight="600" font-family="Arial, sans-serif">DIAGNOSTICS</text>
          <rect x="61" y="386" width="178" height="92" rx="18" fill="#fff" stroke="#B9C0C9" stroke-width="2"/>
          <path d="M88 412h124M88 436h92M88 458h110" stroke="#626C79" stroke-width="5" stroke-linecap="round"/>
          <text x="61" y="374" fill="#4F5967" font-size="14" font-weight="600" font-family="Arial, sans-serif">CMMS / EAM</text>
          <rect x="383" y="386" width="178" height="92" rx="18" fill="#fff" stroke="#B9C0C9" stroke-width="2"/>
          <path d="M410 414h124M410 438h78M410 460h104" stroke="#626C79" stroke-width="5" stroke-linecap="round"/>
          <text x="383" y="374" fill="#4F5967" font-size="14" font-weight="600" font-family="Arial, sans-serif">PARTS &amp; SERVICE</text>
          <rect x="263" y="424" width="96" height="58" rx="17" fill="#C11D63"/>
          <path d="M287 454h48" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <circle cx="310" cy="270" r="5" fill="#C11D63"/>
        </svg>
      </div>
    </div>
  </section>

  <div class="mro-proof-wrap">
    <div class="mro-shell mro-proof">
      <div class="mro-proof-item"><p class="mro-proof-title">100+ Languages</p><p class="mro-proof-desc">Global equipment and service coverage</p></div>
      <div class="mro-proof-item"><p class="mro-proof-title">Technical Expertise</p><p class="mro-proof-desc">Linguists matched to specialized content</p></div>
      <div class="mro-proof-item"><p class="mro-proof-title">AI + Human Workflows</p><p class="mro-proof-desc">Quality matched to content purpose and risk</p></div>
      <div class="mro-proof-item"><p class="mro-proof-title">ISO-Certified Quality</p><p class="mro-proof-desc">Structured, repeatable translation processes</p></div>
    </div>
  </div>

  <section class="mro-section" id="global-mro">
    <div class="mro-shell mro-split">
      <div>
        <h2 class="mro-h2">Translation for Global MRO Operations</h2>
      </div>
      <div>
        <div class="mro-definitions">
          <div class="mro-definition"><strong>Maintenance, Repair and Operations</strong><p>Common across manufacturing, utilities, industrial facilities, process industries, and other environments where equipment must remain available and productive.</p></div>
          <div class="mro-definition"><strong>Maintenance, Repair and Overhaul</strong><p>Common in aerospace, transportation, heavy equipment, and complex asset industries where repair, refurbishment, inspection, and return-to-service activities are central to the maintenance lifecycle.</p></div>
        </div>
        <p class="mro-overview-summary">In both cases, global teams need operators, technicians, engineers, service centers, dealers, and customers to work from technical information that remains clear and consistent across languages. Stepes combines technical linguists, translation memory, terminology management, AI-enabled workflows, professional review, automated quality controls, and multilingual file engineering to support that goal.</p>
        <a class="mro-link" href="https://www.stepes.com/technical-translation-services/">Technical Translation Services <span class="arrow">→</span></a>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell">
      <div class="mro-heading-group mro-center mro-stack-center">
        <h2 class="mro-h2">Multilingual MRO Across the Equipment Lifecycle</h2>
        <p class="mro-body">Stepes helps keep multilingual technical information connected from initial installation through years of operation, maintenance, repair, modernization, and aftermarket support.</p>
      </div>
      <div class="mro-lifecycle">
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">01</span><h3>Install</h3></div><p>Installation manuals, site requirements, assembly instructions, equipment setup, configuration information, and commissioning documentation.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">02</span><h3>Operate</h3></div><p>Startup, controls, operating limits, normal procedures, shutdown, safety, and day-to-day equipment use.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">03</span><h3>Inspect</h3></div><p>Inspection procedures, checklists, test criteria, measurement instructions, condition assessments, and service requirements.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">04</span><h3>Maintain</h3></div><p>Preventive, planned, condition-based, and predictive maintenance for inspection, lubrication, calibration, adjustment, replacement, and scheduled service.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">05</span><h3>Diagnose</h3></div><p>Fault codes, alarms, troubleshooting steps, diagnostic procedures, decision trees, system terminology, and recommended actions.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">06</span><h3>Repair</h3></div><p>Repair instructions, disassembly and reassembly, component replacement, corrective maintenance, testing, and return-to-service information.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">07</span><h3>Overhaul</h3></div><p>Component inspection, refurbishment, repair criteria, assembly, testing, and quality documentation for major maintenance programs.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">08</span><h3>Upgrade</h3></div><p>Retrofit instructions, engineering changes, replacement components, firmware updates, revised configurations, and modernization programs.</p></article>
        <article class="mro-stage"><div class="mro-stage-head"><span class="mro-stage-num">09</span><h3>Support</h3></div><p>Knowledge bases, parts systems, service bulletins, warranty documentation, technician training, customer support, and aftermarket content.</p></article>
      </div>
    </div>
  </section>

  <section class="mro-section" id="mro-content">
    <div class="mro-shell">
      <div class="mro-heading-group mro-stack-center">
        <h2 class="mro-h2">MRO Documents and Content We Translate</h2>
        <p class="mro-body">Modern MRO programs depend on technical documentation, procedures, software, parts systems, training, and service communications. Stepes supports the full range of content used to keep equipment operating and service organizations informed.</p>
      </div>
      <div class="mro-content-groups">
        <article class="mro-content-group"><h3 class="mro-h3">Maintenance and Service Documentation</h3><ul><li>Maintenance manuals</li><li>Service manuals</li><li>O&amp;M manuals</li><li>Preventive maintenance procedures</li><li>Predictive and condition-based maintenance content</li><li>Corrective maintenance procedures</li><li>Inspection procedures</li><li>Calibration and lubrication instructions</li><li>SOPs and work instructions</li><li>Troubleshooting guides</li><li>Equipment safety instructions</li></ul><a class="mro-link" href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">Technical Manual Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-content-group"><h3 class="mro-h3">Repair and Overhaul Documentation</h3><ul><li>Repair manuals and procedures</li><li>Overhaul manuals</li><li>Disassembly and reassembly instructions</li><li>Component maintenance documentation</li><li>Repair specifications</li><li>Component replacement instructions</li><li>Inspection and acceptance criteria</li><li>Testing procedures</li><li>Return-to-service documentation</li><li>Refurbishment instructions</li><li>Workshop procedures</li><li>Technical repair records</li></ul></article>
        <article class="mro-content-group"><h3 class="mro-h3">Parts and Equipment Information</h3><ul><li>Illustrated parts catalogs</li><li>Spare-parts documentation</li><li>Component lists</li><li>Parts databases</li><li>Equipment specifications</li><li>Product datasheets</li><li>Bills of materials</li><li>Technical drawings</li><li>Schematics and diagrams</li><li>Equipment labels</li><li>Warnings and callouts</li></ul><a class="mro-link" href="https://www.stepes.com/catalog-translation-services/">Catalog Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-content-group"><h3 class="mro-h3">Field Service and Aftermarket Content</h3><ul><li>Field-service instructions</li><li>Technical service bulletins</li><li>Service advisories</li><li>Dealer and distributor content</li><li>Warranty documentation</li><li>Retrofit instructions</li><li>Engineering change notices</li><li>Knowledge bases</li><li>Customer support content</li><li>Remote-service documentation</li><li>Service-center materials</li></ul></article>
        <article class="mro-content-group mro-content-group-wide"><h3 class="mro-h3">Technician Training and Learning</h3><ul><li>Technician training courses</li><li>Technical eLearning</li><li>Maintenance and repair training</li><li>Safety training</li><li>Job aids</li><li>Certification materials</li><li>Instructor-led training</li><li>Technical videos</li><li>Subtitles and voice-over scripts</li><li>Interactive learning modules</li></ul><a class="mro-link" href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services <span class="arrow">→</span></a></article>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell">
      <div class="mro-heading-group mro-center mro-stack-center">
        <h2 class="mro-h2">MRO Translation Across Asset-Intensive Industries</h2>
        <p class="mro-body">MRO requirements vary by equipment type, maintenance model, technical terminology, documentation environment, and level of risk. Stepes builds multilingual workflows around the realities of each industry.</p>
      </div>
      <div class="mro-industry-grid">
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M2 16l20-8-8 20-2-8-8-2z"/><path d="M12 20l3-7"/></svg></div><h3 class="mro-h3">Aerospace &amp; Aviation</h3><p>Aircraft and engine maintenance, component repair, inspection, technical publications, service bulletins, spare parts, and technician training.</p><a class="mro-link" href="https://www.stepes.com/aviation-translation-services/">Aerospace &amp; Aviation Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M3 21V9l6 3V9l6 3V5h6v16z"/><path d="M7 17h2M13 17h2M18 10h3"/></svg></div><h3 class="mro-h3">Manufacturing &amp; Industrial Equipment</h3><p>Production machinery, industrial systems, service manuals, preventive maintenance, diagnostics, replacement parts, HMI content, and technician instructions.</p><a class="mro-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg></div><h3 class="mro-h3">Energy &amp; Utilities</h3><p>O&amp;M manuals, maintenance procedures, inspection and testing, troubleshooting, field-service content, HMI/SCADA, and technician training.</p><a class="mro-link" href="https://www.stepes.com/energy-translation-services/">Energy Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M3 17h14l3-5h-6l-2-5H7l-2 5H3z"/><circle cx="8" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg></div><h3 class="mro-h3">Heavy Equipment &amp; Construction</h3><p>Construction machinery, mining and material-handling equipment, engines, hydraulics, repair manuals, parts catalogs, dealer networks, and technical training.</p><a class="mro-link" href="https://www.stepes.com/construction-translation-services/">Construction Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18"/><rect x="5" y="5" width="14" height="14" rx="3"/></svg></div><h3 class="mro-h3">Medical Devices &amp; Equipment</h3><p>Preventive maintenance, calibration, installation, diagnostics, field service, service software, replacement-parts information, and technician training.</p><a class="mro-link" href="https://www.stepes.com/medical-device-translation-services/">Medical Device Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-industry"><div class="mro-iconbox"><svg viewBox="0 0 24 24"><path d="M3 15l2-6h14l2 6v4H3z"/><path d="M7 9l2-4h6l2 4"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg></div><h3 class="mro-h3">Automotive &amp; Transportation</h3><p>Workshop and repair manuals, diagnostics, service bulletins, parts information, dealer/service networks, fleet maintenance, and technical training.</p><a class="mro-link" href="https://www.stepes.com/automotive-translation-services/">Automotive Translation Services <span class="arrow">→</span></a></article>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-dark">
    <div class="mro-shell mro-digital-grid">
      <div>
        <h2 class="mro-h2">Localization for Digital MRO and Connected Service Operations</h2>
        <p class="mro-lead">Maintenance is increasingly digital. Technicians may begin in a CMMS, receive work on a mobile device, consult an online service manual, interpret a machine diagnostic, order a component, and document the completed repair electronically.</p>
        <div class="mro-digital-list">
          <div class="mro-digital-row"><strong>CMMS &amp; EAM</strong><p>Work orders, equipment records, maintenance schedules, inspections, service histories, spare parts, and asset data.</p></div>
          <div class="mro-digital-row"><strong>Field Service Apps</strong><p>Mobile and web applications used to receive assignments, view procedures, record inspections, and document repairs.</p></div>
          <div class="mro-digital-row"><strong>Diagnostics &amp; HMI</strong><p>Alarms, fault codes, machine status, maintenance prompts, service screens, settings, and recommended actions.</p></div>
          <div class="mro-digital-row"><strong>Connected Maintenance</strong><p>Condition monitoring, predictive-maintenance content, service dashboards, remote support, parts platforms, and technician knowledge environments.</p></div>
        </div>
        <a class="mro-link" href="https://www.stepes.com/industrial-automation-translation/">Industrial Automation Translation Services <span class="arrow">→</span></a>
      </div>
      <div class="mro-system-map" role="img" aria-label="Connected MRO language ecosystem linking technical manuals, HMI and diagnostics, parts systems, training, technician apps, and CMMS/EAM through shared terminology and translation memory">
        <div class="mro-system-node n1">Technical Manuals</div>
        <div class="mro-system-node n2">HMI &amp; Diagnostics</div>
        <div class="mro-system-node n3">Parts Systems</div>
        <div class="mro-system-node n4">Training</div>
        <div class="mro-system-node n5">Technician Apps</div>
        <div class="mro-system-node n6">CMMS &amp; EAM</div>
        <div class="mro-system-core">Shared Terminology<br/>+ Translation Memory</div>
      </div>
    </div>
  </section>

  <section class="mro-section">
    <div class="mro-shell mro-accuracy">
      <div>
        <p class="mro-eyebrow">TECHNICAL ACCURACY</p>
        <h2 class="mro-h2">Protect Technical Meaning Where Maintenance Decisions Matter</h2>
        <p class="mro-body">Technicians use translated information to identify equipment, follow procedures, interpret warnings, diagnose problems, select parts, and perform maintenance and repair tasks. Translation must preserve technical meaning as well as linguistic quality.</p>
      </div>
      <div class="mro-control-list">
        <div class="mro-control-row"><div class="mro-control-item"><strong>Technical Terminology</strong><p>Equipment, system, subsystem, assembly, component, process, and maintenance language.</p></div><div class="mro-control-item"><strong>Numbers, Measurements &amp; Units</strong><p>Numerical values, dimensions, tolerances, torque values, measurements, and units.</p></div></div>
        <div class="mro-control-row"><div class="mro-control-item"><strong>Part &amp; Model Numbers</strong><p>Identifiers that must remain unchanged or follow defined customer conventions.</p></div><div class="mro-control-item"><strong>Procedural Sequence</strong><p>Order, prerequisites, relationships, conditions, and actions within maintenance and repair procedures.</p></div></div>
        <div class="mro-control-row"><div class="mro-control-item"><strong>Warnings &amp; Safety Language</strong><p>Controlled warnings, cautions, hazards, and maintenance safety terminology.</p></div><div class="mro-control-item"><strong>Diagnostic Information</strong><p>Fault codes, alarms, symptoms, troubleshooting steps, corrective actions, and software terminology.</p></div></div>
        <div class="mro-control-row"><div class="mro-control-item"><strong>Diagrams &amp; Cross-References</strong><p>Figures, callouts, tables, captions, hyperlinks, section references, and visual information.</p></div><div class="mro-control-item"><strong>Formatting Integrity</strong><p>Text expansion, CJK typography, right-to-left languages, tables, graphics, page flow, and fonts.</p></div></div>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell">
      <div class="mro-heading-group mro-center mro-stack-center">
        <p class="mro-eyebrow">FIT-FOR-PURPOSE QUALITY</p>
        <h2 class="mro-h2">AI + Human Translation Matched to MRO Content Risk</h2>
        <p class="mro-body">A high-volume knowledge article, a service bulletin, a complex overhaul procedure, and a safety-critical maintenance instruction should not automatically receive the same translation workflow.</p>
      </div>
      <div class="mro-risk-panel">
        <div class="mro-risk-row"><div class="mro-risk-label">Business &amp; Support Content</div><p>AI-enabled workflows can accelerate suitable lower-risk operational information, routine service communications, and reference content where speed and accessibility are priorities.</p></div>
        <div class="mro-risk-row"><div class="mro-risk-label">High-Volume Technical Content</div><p>AI translation combined with professional linguistic review can efficiently process large documentation sets, technical knowledge bases, and recurring service information while maintaining approved terminology.</p></div>
        <div class="mro-risk-row"><div class="mro-risk-label">Specialized MRO Procedures</div><p>Complex maintenance, diagnostic, repair, and overhaul procedures can be assigned to experienced technical linguists with additional review based on subject matter and project requirements.</p></div>
        <div class="mro-risk-row"><div class="mro-risk-label">Safety-Critical &amp; Regulated Content</div><p>Higher-risk content can receive enhanced human review, structured QA, terminology verification, and customer or subject-matter validation where appropriate.</p></div>
      </div>
      <p class="mro-risk-note">Automation improves efficiency. It does not replace technical judgment. Stepes helps apply the right combination of technology, professional expertise, and quality control to each MRO content stream.</p>
    </div>
  </section>

  <section class="mro-section">
    <div class="mro-shell">
      <div class="mro-heading-group mro-stack-center">
        <p class="mro-eyebrow">LANGUAGE ASSETS</p>
        <h2 class="mro-h2">Keep MRO Terminology Consistent Across Every Revision</h2>
        <p class="mro-body">Equipment may remain in service for years or decades while components, software, procedures, maintenance intervals, and service requirements continue to change. Reusable language assets help multilingual content evolve without starting over each time.</p>
      </div>
      <div class="mro-asset-grid">
        <article class="mro-asset"><h3 class="mro-h3">Translation Memory</h3><p>Reuse previously approved translations across documentation updates to preserve consistency, accelerate recurring releases, and reduce unnecessary retranslation.</p></article>
        <article class="mro-asset"><h3 class="mro-h3">Terminology Management</h3><p>Control multilingual terminology for equipment, components, systems, assemblies, processes, maintenance actions, warnings, and service language.</p></article>
        <article class="mro-asset"><h3 class="mro-h3">Revision Translation</h3><p>Focus translation and review on new or changed content while retaining approved language for material that has not changed.</p></article>
        <article class="mro-asset"><h3 class="mro-h3">Reviewer Knowledge Capture</h3><p>Incorporate approved corrections, preferred terminology, and reviewer decisions so future releases benefit from product and field knowledge already established.</p></article>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell">
      <div class="mro-heading-group mro-center mro-stack-center">
        <p class="mro-eyebrow">TECHNICAL CONTENT ENGINEERING</p>
        <h2 class="mro-h2">Translate MRO Content Without Breaking the Technical Workflow</h2>
        <p class="mro-body">Technical content is increasingly authored, managed, reused, and delivered through structured systems rather than static documents. Stepes supports multilingual production while preserving the structure needed for future maintenance and updates.</p>
      </div>
      <div class="mro-tech-grid">
        <article class="mro-tech-row"><h3 class="mro-h3">Structured Technical Content</h3><p>Translate XML, DITA, and other structured content while protecting tags, metadata, variables, reusable topics, conditional content, and document relationships.</p><a class="mro-link" href="https://www.stepes.com/manufacturing-translation-services/dita-content-translation/">Structured Content &amp; DITA Translation Services <span class="arrow">→</span></a></article>
        <article class="mro-tech-row"><h3 class="mro-h3">Technical Publishing</h3><p>Support multilingual documentation authored in professional publishing and office environments, including complex manuals, tables, graphics, callouts, and technical layouts.</p></article>
        <article class="mro-tech-row"><h3 class="mro-h3">CMS &amp; CCMS Content</h3><p>Support component-based technical content exported from content management and component content management systems so reusable source content remains reusable across languages.</p></article>
        <article class="mro-tech-row"><h3 class="mro-h3">PDF &amp; Legacy Documentation</h3><p>Support translation and multilingual recreation workflows when editable source content is unavailable.</p></article>
        <article class="mro-tech-row"><h3 class="mro-h3">Software &amp; Digital Content</h3><p>Translate software resource files, web content, UI strings, online help, mobile applications, and digital MRO information while protecting variables, tags, and technical functionality.</p><a class="mro-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services <span class="arrow">→</span></a></article>
        <article class="mro-tech-row"><h3 class="mro-h3">Multilingual Desktop Publishing</h3><p>Address diagrams, tables, screenshots, graphical labels, page layouts, right-to-left languages, CJK typography, and other requirements needed to produce usable final documentation.</p></article>
      </div>
    </div>
  </section>

  <section class="mro-section">
    <div class="mro-shell">
      <div class="mro-heading-group mro-stack-center">
        <h2 class="mro-h2">Keep Multilingual MRO Content Current</h2>
        <p class="mro-body">Engineering modifications, new components, software releases, field feedback, revised maintenance intervals, and retrofit programs can all trigger new technical information. Stepes supports repeatable update workflows that preserve approved terminology and translation memory.</p>
      </div>
      <div class="mro-flow" aria-label="Continuous MRO translation workflow">
        <div class="mro-flow-step"><span class="mro-flow-num">01</span><strong>Source Update</strong><p class="mro-note">New or revised technical content enters the workflow.</p></div>
        <div class="mro-flow-step"><span class="mro-flow-num">02</span><strong>Changed Content Identified</strong><p class="mro-note">Existing language assets help isolate meaningful updates.</p></div>
        <div class="mro-flow-step"><span class="mro-flow-num">03</span><strong>Translate &amp; Review</strong><p class="mro-note">The agreed AI + human workflow is applied.</p></div>
        <div class="mro-flow-step"><span class="mro-flow-num">04</span><strong>Technical QA</strong><p class="mro-note">Terminology, numbers, formatting, references, and completeness are checked.</p></div>
        <div class="mro-flow-step"><span class="mro-flow-num">05</span><strong>Multilingual Release</strong><p class="mro-note">Approved target-language content is prepared for delivery or publication.</p></div>
      </div>
      <div class="mro-trigger-grid"><div class="mro-trigger">Engineering changes</div><div class="mro-trigger">Service bulletins</div><div class="mro-trigger">Software &amp; firmware releases</div><div class="mro-trigger">Field feedback &amp; product generations</div></div>
      <a class="mro-link" href="https://www.stepes.com/continuous-translation/">Continuous Translation Services <span class="arrow">→</span></a>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell mro-language-grid">
      <div class="mro-language-copy">
        <h2 class="mro-h2">MRO Translation in 100+ Languages</h2>
        <p class="mro-body">Equipment designed in one country may be manufactured in another, installed across many markets, and supported by service teams around the world. Stepes helps manufacturers, operators, equipment suppliers, and service organizations support those international operations through more than 100 languages and regional variants.</p>
        <a class="mro-link" href="https://www.stepes.com/translation-languages/">Explore Translation Languages <span class="arrow">→</span></a>
      </div>
      <div class="mro-region-list">
        <div class="mro-region"><strong>Europe</strong><p>German, French, Italian, Spanish, Portuguese, Dutch, Polish, Czech, Nordic languages, and additional European markets.</p></div>
        <div class="mro-region"><strong>Asia-Pacific</strong><p>Simplified and Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and additional regional languages.</p></div>
        <div class="mro-region"><strong>Middle East</strong><p>Arabic, Hebrew, Turkish, Persian, and other languages used across regional technical and business operations.</p></div>
        <div class="mro-region"><strong>Americas</strong><p>Latin American Spanish, Brazilian Portuguese, Canadian French, English-market adaptation, and multilingual service networks.</p></div>
      </div>
    </div>
  </section>

  <section class="mro-section">
    <div class="mro-shell">
      <div class="mro-heading-group mro-center mro-stack-center">
        <h2 class="mro-h2">A Translation Partner Built for Global MRO Programs</h2>
        <p class="mro-body">Successful MRO localization requires more than translating technical sentences. It requires technical expertise, connected language assets, scalable workflows, and the ability to support documentation as equipment changes over time.</p>
      </div>
      <div class="mro-why-grid">
        <article class="mro-why"><h3 class="mro-h3">Technical Translation Expertise</h3><p>Linguists selected for the subject matter, technical complexity, language pair, and requirements of your content.</p></article>
        <article class="mro-why"><h3 class="mro-h3">Complete MRO Lifecycle Coverage</h3><p>Support from installation and operation through inspection, maintenance, diagnostics, repair, overhaul, modernization, and aftermarket service.</p></article>
        <article class="mro-why"><h3 class="mro-h3">AI + Human Workflows</h3><p>Translation automation where it adds value, with professional linguistic and technical review matched to content purpose and risk.</p></article>
        <article class="mro-why"><h3 class="mro-h3">Consistent Technical Language</h3><p>Controlled terminology across manuals, software, diagnostics, training, parts information, and technician applications.</p></article>
        <article class="mro-why"><h3 class="mro-h3">Translation Memory &amp; Reuse</h3><p>Reuse approved language across revisions, equipment models, documentation sets, and recurring releases.</p></article>
        <article class="mro-why"><h3 class="mro-h3">Technical File Engineering</h3><p>Support structured content, publishing files, diagrams, software resources, interfaces, and multilingual layouts.</p></article>
        <article class="mro-why"><h3 class="mro-h3">100+ Languages</h3><p>Support global manufacturing locations, service organizations, operators, dealers, technicians, and customers.</p></article>
        <article class="mro-why"><h3 class="mro-h3">Enterprise Quality Processes</h3><p>Professional workflows, terminology controls, automated QA, project governance, and internationally recognized quality-management practices.</p></article>
      </div>
    </div>
  </section>

  <section class="mro-section mro-section-soft">
    <div class="mro-shell">
      <div class="mro-heading-group mro-stack-center">
        <h2 class="mro-h2">ISO-Certified Quality for Technical Translation</h2>
        <p class="mro-body">Stepes supports enterprise translation programs through ISO-certified quality processes designed for repeatability, accountability, and scalable multilingual delivery.</p>
      </div>
      <div class="mro-iso">
        <article class="mro-iso-item"><div class="mro-iso-code">ISO 17100</div><h3 class="mro-h3">Professional Translation Workflows</h3><p>Supports requirements related to professional translation resources, project management, revision, review, and translation-service delivery.</p></article>
        <article class="mro-iso-item"><div class="mro-iso-code">ISO 9001</div><h3 class="mro-h3">Quality Management</h3><p>Provides a framework for documented processes, performance monitoring, customer focus, and continuous improvement.</p></article>
        <article class="mro-iso-item"><div class="mro-iso-code">ISO 13485</div><h3 class="mro-h3">Medical Device Programs</h3><p>Supports applicable medical-device translation programs that require controlled quality processes for regulated content and supplier requirements.</p></article>
      </div>
      <a class="mro-link" href="https://www.stepes.com/iso-certified-translation-services/">ISO Certified Translation Services <span class="arrow">→</span></a>
    </div>
  </section>

  <section class="mro-section" id="mro-faq">
    <div class="mro-shell mro-split">
      <div>
        <h2 class="mro-h2">Frequently Asked Questions About MRO Translation Services</h2>
        <p class="mro-body">Answers to common questions about maintenance documentation, digital MRO, terminology, recurring updates, AI workflows, and global program support.</p>
      </div>
      <div class="mro-faq">
        <details open><summary>What are MRO translation services?</summary><div class="mro-faq-answer"><p>MRO translation services provide specialized translation and localization for content used to maintain, repair, operate, service, and overhaul equipment. Depending on the industry, MRO may mean maintenance, repair and operations or maintenance, repair and overhaul.</p></div></details>
        <details><summary>What types of MRO documents does Stepes translate?</summary><div class="mro-faq-answer"><p>Stepes translates maintenance and service manuals, O&amp;M manuals, repair and overhaul procedures, inspection instructions, preventive maintenance documentation, troubleshooting guides, diagnostic content, service bulletins, parts catalogs, work instructions, SOPs, training, HMI interfaces, CMMS/EAM content, and other MRO materials.</p></div></details>
        <details><summary>Can Stepes translate maintenance and repair manuals?</summary><div class="mro-faq-answer"><p>Yes. Stepes translates maintenance manuals, service manuals, repair manuals, overhaul manuals, O&amp;M manuals, troubleshooting documentation, and related technical publications using terminology management, translation memory, professional review, quality controls, and multilingual publishing as required.</p></div></details>
        <details><summary>How does Stepes maintain terminology consistency?</summary><div class="mro-faq-answer"><p>Stepes uses multilingual terminology databases, translation memory, project specifications, and approved reviewer feedback to keep equipment, component, diagnostic, software, parts, and service language consistent across documents and releases.</p></div></details>
        <details><summary>Can Stepes translate CMMS, EAM, and MRO software?</summary><div class="mro-faq-answer"><p>Yes. Stepes can localize CMMS and EAM interfaces, field-service applications, technician mobile apps, equipment diagnostics, maintenance portals, HMI content, online knowledge bases, and related software resources.</p></div></details>
        <details><summary>How does Stepes handle frequent MRO documentation updates?</summary><div class="mro-faq-answer"><p>Translation memory and revision-oriented workflows help reuse previously approved translations and focus effort on new or changed content, supporting recurring engineering changes, service bulletins, equipment revisions, firmware releases, and procedure updates.</p></div></details>
        <details><summary>Does Stepes provide aerospace MRO translation?</summary><div class="mro-faq-answer"><p>Yes. Stepes supports aircraft, engine, component, inspection, repair, technical publication, parts, modification, and technician-training content, with additional aviation-specific expertise available through our Aerospace &amp; Aviation Translation Services.</p></div></details>
        <details><summary>Can Stepes translate illustrated parts catalogs and technical drawings?</summary><div class="mro-faq-answer"><p>Yes. Stepes translates illustrated parts catalogs, component information, diagrams, technical graphics, drawings, labels, callouts, captions, and related documentation while keeping translated text synchronized with visual references and part information.</p></div></details>
        <details><summary>How does Stepes use AI for MRO translation?</summary><div class="mro-faq-answer"><p>Stepes uses AI within a controlled translation workflow. Suitable high-volume or lower-risk content can benefit from AI-enabled translation, while specialized procedures, safety-sensitive material, and regulated content can receive additional professional review, terminology controls, technical QA, and customer validation as required.</p></div></details>
        <details><summary>Can Stepes support a global MRO translation program?</summary><div class="mro-faq-answer"><p>Yes. Stepes supports ongoing enterprise programs covering multiple product families, business units, service organizations, languages, content types, and release cycles with centralized terminology, translation memory, quality assurance, file engineering, and project governance.</p></div></details>
      </div>
    </div>
  </section>

  <section class="mro-cta-wrap">
    <div class="mro-shell">
      <div class="mro-cta">
        <h2 class="mro-h2">Keep Your Global MRO Content Accurate and Up to Date</h2>
        <p class="mro-body">From maintenance manuals and repair procedures to technician software, parts information, training, and recurring technical updates, Stepes helps global organizations translate the content that keeps equipment operating throughout its lifecycle.</p>
        <div class="mro-btn-row">
          <a class="mro-btn mro-btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote</a>
          <a class="mro-btn mro-btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Stepes</a>
        </div>
      </div>
    </div>
  </section>
</main>
`;

export default function StepesMROTranslationServicesWireframe() {
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
    </>
  );
}
