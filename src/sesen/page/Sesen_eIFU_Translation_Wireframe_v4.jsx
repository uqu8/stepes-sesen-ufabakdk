import React, { useState } from "react";

const pageStyles = `
.sesen-eifu-page {
  --eifu-blue: #4B6FD8;
  --eifu-blue-dark: #3659BB;
  --eifu-blue-deep: #253F8F;
  --eifu-blue-mid: #6F8BE1;
  --eifu-blue-soft: #EAF0FF;
  --eifu-blue-pale: #F5F7FF;
  --eifu-navy: #17264D;
  --eifu-ink: #111827;
  --eifu-text: #46546D;
  --eifu-muted: #68758B;
  --eifu-border: #DDE4F2;
  --eifu-divider: #E9EEF8;
  --eifu-surface: #F7F9FD;
  --eifu-white: #FFFFFF;
  --eifu-light-on-dark: #C8D6FF;
  color: var(--eifu-text);
  background: var(--eifu-white);
  font-family: Inter, Arial, sans-serif;
  line-height: 1.62;
}

.sesen-eifu-page * { box-sizing: border-box; }
.sesen-eifu-page a { color: inherit; text-decoration: none; }
.sesen-eifu-page button { font: inherit; }
.sesen-eifu-page svg { display: block; max-width: 100%; }
.sesen-eifu-page .eifu-shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
.sesen-eifu-page .eifu-section { padding: 96px 0; }
.sesen-eifu-page .eifu-section--dense { padding: 80px 0; }
.sesen-eifu-page .eifu-section--soft { background: var(--eifu-surface); }
.sesen-eifu-page .eifu-section--pale { background: var(--eifu-blue-pale); }
.sesen-eifu-page .eifu-section--dark { background: var(--eifu-navy); color: #fff; }
.sesen-eifu-page .eifu-eyebrow {
  margin: 0 0 14px;
  color: var(--eifu-blue-dark);
  font-family: Inter, Arial, sans-serif !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  line-height: 1.35 !important;
  letter-spacing: .15em !important;
  text-transform: uppercase !important;
}
.sesen-eifu-page .eifu-section--dark .eifu-eyebrow { color: var(--eifu-light-on-dark); }
.sesen-eifu-page .eifu-h1,
.sesen-eifu-page .eifu-h2,
.sesen-eifu-page .eifu-h3 {
  margin: 0;
  color: var(--eifu-navy);
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-weight: 500;
}
.sesen-eifu-page .eifu-h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
.sesen-eifu-page .eifu-h2 { font-size: 36px; line-height: 1.3; letter-spacing: normal; }
.sesen-eifu-page .eifu-h3 { font-size: 22px; line-height: 1.3; }
.sesen-eifu-page .eifu-h1,
.sesen-eifu-page .eifu-h2,
.sesen-eifu-page .eifu-h3,
.sesen-eifu-page .eifu-copy,
.sesen-eifu-page .eifu-lead,
.sesen-eifu-page .eifu-hero-support { overflow-wrap: anywhere; }
.sesen-eifu-page .eifu-section--dark .eifu-h1,
.sesen-eifu-page .eifu-section--dark .eifu-h2,
.sesen-eifu-page .eifu-section--dark .eifu-h3 { color: #fff; }
.sesen-eifu-page .eifu-lead { margin: 24px 0 0; max-width: 760px; color: #293954; font-size: 19px; line-height: 1.65; }
.sesen-eifu-page .eifu-copy { margin: 16px 0 0; max-width: 760px; color: var(--eifu-text); font-size: 16px; }
.sesen-eifu-page .eifu-copy--spaced { margin-top: 26px; }
.sesen-eifu-page .eifu-section--dark .eifu-copy,
.sesen-eifu-page .eifu-section--dark .eifu-lead { color: #DCE5FA; }
.sesen-eifu-page .eifu-heading { max-width: 820px; margin-bottom: 46px; }
.sesen-eifu-page .eifu-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
.sesen-eifu-page .eifu-heading--center .eifu-copy,
.sesen-eifu-page .eifu-heading--center .eifu-lead { margin-left: auto; margin-right: auto; }
.sesen-eifu-page .eifu-btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.sesen-eifu-page .eifu-btn {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  transition: background .18s ease, border-color .18s ease, transform .18s ease;
  max-width: 100%;
  white-space: normal;
  text-align: center;
}
.sesen-eifu-page .eifu-btn:hover { transform: translateY(-1px); }
.sesen-eifu-page .eifu-btn:focus-visible,
.sesen-eifu-page .eifu-link:focus-visible,
.sesen-eifu-page .eifu-faq-button:focus-visible { outline: 3px solid rgba(75,111,216,.35); outline-offset: 3px; }
.sesen-eifu-page .eifu-btn--primary { background: var(--eifu-blue); color: #fff; }
.sesen-eifu-page .eifu-btn--primary:hover { background: var(--eifu-blue-dark); }
.sesen-eifu-page .eifu-btn--secondary { background: #fff; color: var(--eifu-ink); border-color: #CBD5E7; }
.sesen-eifu-page .eifu-btn--secondary:hover { background: var(--eifu-blue-pale); border-color: #AFC0E7; }
.sesen-eifu-page .eifu-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 18px; color: var(--eifu-blue-dark); font-size: 16px; font-weight: 700; max-width: 100%; overflow-wrap: anywhere; }
.sesen-eifu-page .eifu-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.sesen-eifu-page .eifu-link-arrow { transition: transform .18s ease; }
.sesen-eifu-page .eifu-link:hover .eifu-link-arrow { transform: translateX(3px); }

/* Hero */
.sesen-eifu-page .eifu-hero { padding: 92px 0 84px; background: linear-gradient(180deg, #fff 0%, #F9FBFF 100%); }
.sesen-eifu-page .eifu-hero-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); gap: 70px; align-items: center; }
.sesen-eifu-page .eifu-hero-copy { min-width: 0; }
.sesen-eifu-page .eifu-hero .eifu-lead { max-width: 690px; }
.sesen-eifu-page .eifu-hero-support { margin: 16px 0 0; max-width: 690px; font-size: 17px; color: var(--eifu-text); }
.sesen-eifu-page .eifu-hero-art { min-width: 0; display: flex; justify-content: center; }
.sesen-eifu-page .eifu-art-frame { width: 100%; max-width: 520px; padding: 20px; border: 1px solid var(--eifu-border); border-radius: 30px; background: rgba(255,255,255,.78); }

/* Trust */
.sesen-eifu-page .eifu-trust { border-top: 1px solid var(--eifu-divider); border-bottom: 1px solid var(--eifu-divider); background: #fff; }
.sesen-eifu-page .eifu-trust-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
.sesen-eifu-page .eifu-trust-item { padding: 24px 18px; text-align: center; min-width: 0; }
.sesen-eifu-page .eifu-trust-label { display: block; color: var(--eifu-navy); font-weight: 700; font-size: 15px; line-height: 1.35; }
.sesen-eifu-page .eifu-trust-note { display: block; margin-top: 5px; color: var(--eifu-muted); font-size: 13px; line-height: 1.4; }

/* Editorial split */
.sesen-eifu-page .eifu-two-col { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 70px; align-items: start; }
.sesen-eifu-page .eifu-two-col--even { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.sesen-eifu-page .eifu-sticky-copy { position: sticky; top: 32px; }
.sesen-eifu-page .eifu-compare { border: 1px solid var(--eifu-border); border-radius: 28px; overflow: hidden; background: #fff; }
.sesen-eifu-page .eifu-compare-col { padding: 30px; }
.sesen-eifu-page .eifu-compare-col + .eifu-compare-col { border-top: 1px solid var(--eifu-divider); background: var(--eifu-blue-pale); }
.sesen-eifu-page .eifu-compare-kicker { color: var(--eifu-blue-dark); font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: .07em; }
.sesen-eifu-page .eifu-flowline { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 20px; }
.sesen-eifu-page .eifu-flow-chip { padding: 8px 11px; border: 1px solid var(--eifu-border); border-radius: 999px; background: #fff; color: var(--eifu-navy); font-size: 13px; font-weight: 600; }
.sesen-eifu-page .eifu-flow-arrow { color: var(--eifu-blue-dark); font-weight: 700; }

/* Value rows */
.sesen-eifu-page .eifu-value-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-value-item { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 18px; padding: 30px 28px 30px 0; border-bottom: 1px solid var(--eifu-divider); min-width: 0; }
.sesen-eifu-page .eifu-value-item:nth-child(even) { padding-left: 34px; border-left: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-value-item--wide { grid-column: 1 / -1; border-left: 0 !important; padding-left: 0 !important; }
.sesen-eifu-page .eifu-icon-box { width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; background: var(--eifu-blue-soft); color: var(--eifu-blue-dark); }
.sesen-eifu-page .eifu-value-item p,
.sesen-eifu-page .eifu-service-item p,
.sesen-eifu-page .eifu-format-item p,
.sesen-eifu-page .eifu-tech-item p,
.sesen-eifu-page .eifu-qa-item p,
.sesen-eifu-page .eifu-category p,
.sesen-eifu-page .eifu-quality-item p,
.sesen-eifu-page .eifu-related-item p { margin: 9px 0 0; font-size: 16px; color: var(--eifu-text); }
.sesen-eifu-page .eifu-value-tagline { margin-top: 34px; padding: 22px 26px; border-left: 2px solid var(--eifu-blue); background: var(--eifu-blue-pale); color: var(--eifu-navy); font-size: 19px; font-weight: 600; }

/* Service capabilities */
.sesen-eifu-page .eifu-service-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; border-top: 1px solid var(--eifu-divider); border-left: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-service-item { min-width: 0; padding: 30px; border-right: 1px solid var(--eifu-divider); border-bottom: 1px solid var(--eifu-divider); background: #fff; }
.sesen-eifu-page .eifu-service-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px; background: var(--eifu-blue-soft); color: var(--eifu-blue-dark); }
.sesen-eifu-page .eifu-service-item .eifu-h3 { margin-top: 16px; }

/* Workflow */
.sesen-eifu-page .eifu-workflow-wrap { padding: 42px; border: 1px solid var(--eifu-border); border-radius: 30px; background: #fff; }
.sesen-eifu-page .eifu-workflow { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 28px 22px; }
.sesen-eifu-page .eifu-step { position: relative; min-width: 0; padding-top: 58px; }
.sesen-eifu-page .eifu-step::before { content: ""; position: absolute; left: 43px; right: -22px; top: 20px; height: 1px; background: var(--eifu-border); }
.sesen-eifu-page .eifu-step:nth-child(4n)::before { display: none; }
.sesen-eifu-page .eifu-step-num { position: absolute; left: 0; top: 0; width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; background: var(--eifu-blue); color: #fff; font-size: 13px; font-weight: 700; z-index: 1; }
.sesen-eifu-page .eifu-step p { margin: 10px 0 0; font-size: 16px; color: var(--eifu-text); }
.sesen-eifu-page .eifu-workflow-note { margin: 34px 0 0; padding-top: 28px; border-top: 1px solid var(--eifu-divider); color: var(--eifu-navy); font-size: 18px; font-weight: 600; }

/* Formats */
.sesen-eifu-page .eifu-format-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 54px; }
.sesen-eifu-page .eifu-format-item { padding: 24px 0; border-top: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-format-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-format-title { display: flex; align-items: center; gap: 12px; }
.sesen-eifu-page .eifu-format-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--eifu-blue); flex: 0 0 auto; }

/* Regulatory */
.sesen-eifu-page .eifu-reg-intro { max-width: 820px; }
.sesen-eifu-page .eifu-reg-intro .eifu-copy { max-width: 790px; }
.sesen-eifu-page .eifu-reg-panels { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 38px; }
.sesen-eifu-page .eifu-reg-panel { min-width: 0; padding: 30px 32px; border-radius: 22px; background: #fff; border: 1px solid var(--eifu-border); }
.sesen-eifu-page .eifu-reg-panel--accent { background: var(--eifu-blue-pale); border-color: #BCCAF0; }
.sesen-eifu-page .eifu-reg-panel p { margin: 10px 0 0; font-size: 16px; color: var(--eifu-text); }
.sesen-eifu-page .eifu-reg-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 40px; border-top: 1px solid var(--eifu-divider); border-bottom: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-reg-fact { min-width: 0; padding: 28px 28px 28px 0; }
.sesen-eifu-page .eifu-reg-fact + .eifu-reg-fact { padding-left: 28px; border-left: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-reg-fact strong { display: block; color: var(--eifu-navy); font-size: 16px; line-height: 1.4; }
.sesen-eifu-page .eifu-reg-fact span { display: block; margin-top: 8px; color: var(--eifu-text); font-size: 16px; }
.sesen-eifu-page .eifu-reg-foot { margin-top: 28px; max-width: 980px; }
.sesen-eifu-page .eifu-disclaimer { margin: 0 0 16px; color: var(--eifu-muted); font-size: 16px; }

/* Version visual */
.sesen-eifu-page .eifu-release-visual { padding: 34px; border-radius: 28px; background: #fff; border: 1px solid var(--eifu-border); }
.sesen-eifu-page .eifu-release-row { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); align-items: stretch; gap: 10px; }
.sesen-eifu-page .eifu-release-node { position: relative; min-width: 0; padding: 22px 18px; border-radius: 18px; border: 1px solid var(--eifu-border); background: #fff; }
.sesen-eifu-page .eifu-release-node:not(:last-child)::after { content: "→"; position: absolute; right: -14px; top: 50%; transform: translateY(-50%); color: var(--eifu-blue-dark); font-weight: 700; z-index: 2; }
.sesen-eifu-page .eifu-release-node--accent { background: var(--eifu-blue-pale); border-color: #BBC9EE; }
.sesen-eifu-page .eifu-release-node--final { background: var(--eifu-blue); border-color: var(--eifu-blue); color: #fff; }
.sesen-eifu-page .eifu-release-node strong { display: block; color: var(--eifu-navy); font-size: 15px; line-height: 1.35; }
.sesen-eifu-page .eifu-release-node--final strong { color: #fff; }
.sesen-eifu-page .eifu-release-node span { display: block; margin-top: 7px; color: var(--eifu-muted); font-size: 13px; line-height: 1.45; }
.sesen-eifu-page .eifu-release-node--final span { color: #EEF3FF; }

/* Tech assets */
.sesen-eifu-page .eifu-tech-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 24px; }
.sesen-eifu-page .eifu-tech-item { padding: 28px 0 0; border-top: 2px solid var(--eifu-blue); }

/* AI */
.sesen-eifu-page .eifu-ai-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 44px; }
.sesen-eifu-page .eifu-ai-item { padding: 22px 0; border-top: 1px solid rgba(200,214,255,.22); }
.sesen-eifu-page .eifu-ai-item .eifu-h3 { font-size: 20px; }
.sesen-eifu-page .eifu-ai-item p { margin: 8px 0 0; color: #DCE5FA; font-size: 16px; }
.sesen-eifu-page .eifu-human-note { margin-top: 32px; padding: 24px 26px; border-radius: 20px; background: rgba(255,255,255,.07); border: 1px solid rgba(200,214,255,.22); }
.sesen-eifu-page .eifu-human-note strong { display: block; color: #fff; font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 20px; font-weight: 500; }
.sesen-eifu-page .eifu-human-note p { margin: 8px 0 0; color: #DCE5FA; font-size: 16px; }

/* QA */
.sesen-eifu-page .eifu-qa-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px 34px; }
.sesen-eifu-page .eifu-qa-item { padding: 24px 0; border-top: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-qa-top { display: flex; align-items: center; gap: 12px; }
.sesen-eifu-page .eifu-qa-check { width: 28px; height: 28px; flex: 0 0 auto; border-radius: 50%; display: grid; place-items: center; background: var(--eifu-blue-soft); color: var(--eifu-blue-dark); font-size: 14px; font-weight: 800; }
.sesen-eifu-page .eifu-qa-tagline { margin: 36px 0 0; font-family: "Inter Tight", Inter, Arial, sans-serif; color: var(--eifu-navy); font-size: 26px; font-weight: 500; }

/* Migration */
.sesen-eifu-page .eifu-migrate-flow { display: grid; gap: 10px; }
.sesen-eifu-page .eifu-migrate-step { display: flex; align-items: center; gap: 16px; padding: 16px 18px; border-radius: 16px; background: #fff; border: 1px solid var(--eifu-border); }
.sesen-eifu-page .eifu-migrate-step span:first-child { width: 30px; height: 30px; border-radius: 50%; flex: 0 0 auto; display: grid; place-items: center; background: var(--eifu-blue-soft); color: var(--eifu-blue-dark); font-size: 12px; font-weight: 700; }
.sesen-eifu-page .eifu-migrate-step strong { min-width: 0; color: var(--eifu-navy); font-size: 16px; line-height: 1.4; overflow-wrap: anywhere; }

/* Connected vocabulary */
.sesen-eifu-page .eifu-vocab-wrap { display: grid; grid-template-columns: minmax(280px, .82fr) minmax(0, 1.18fr); gap: 64px; align-items: center; }
.sesen-eifu-page .eifu-vocab-center { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; max-width: 600px; margin: 0 auto; }
.sesen-eifu-page .eifu-vocab-core { grid-column: 1 / -1; min-height: 88px; padding: 20px 24px; border-radius: 24px; display: grid; place-items: center; background: var(--eifu-blue); color: #fff; text-align: center; font-weight: 700; box-shadow: 0 12px 30px rgba(37,63,143,.12); }
.sesen-eifu-page .eifu-vocab-node { min-height: 70px; padding: 14px 16px; display: grid; place-items: center; text-align: center; border-radius: 18px; background: #fff; border: 1px solid var(--eifu-border); color: var(--eifu-navy); font-size: 14px; font-weight: 700; }

/* Categories */
.sesen-eifu-page .eifu-category-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 0; border-top: 1px solid var(--eifu-divider); border-left: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-category { padding: 28px; border-right: 1px solid var(--eifu-divider); border-bottom: 1px solid var(--eifu-divider); min-width: 0; }

/* Global */
.sesen-eifu-page .eifu-global-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 70px; align-items: center; }
.sesen-eifu-page .eifu-global-points { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 20px 28px; }
.sesen-eifu-page .eifu-global-point { padding-top: 18px; border-top: 1px solid #C9D4ED; }
.sesen-eifu-page .eifu-global-point strong { display: block; color: var(--eifu-navy); font-size: 17px; }
.sesen-eifu-page .eifu-global-point span { display: block; margin-top: 7px; color: var(--eifu-text); font-size: 16px; }
.sesen-eifu-page .eifu-global-statement { margin-top: 28px; color: var(--eifu-navy); font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 25px; font-weight: 500; }

/* Quality */
.sesen-eifu-page .eifu-quality-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid var(--eifu-divider); border-left: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-quality-item { padding: 28px; border-right: 1px solid var(--eifu-divider); border-bottom: 1px solid var(--eifu-divider); min-width: 0; }
.sesen-eifu-page .eifu-quality-code { color: var(--eifu-blue-dark); font-weight: 700; font-size: 14px; }

/* Related */
.sesen-eifu-page .eifu-related-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 54px; }
.sesen-eifu-page .eifu-related-item { padding: 26px 0; border-top: 1px solid var(--eifu-divider); min-width: 0; }
.sesen-eifu-page .eifu-related-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--eifu-divider); }

/* FAQ */
.sesen-eifu-page .eifu-faq { border-top: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-faq-item { border-bottom: 1px solid var(--eifu-divider); }
.sesen-eifu-page .eifu-faq-button { width: 100%; min-height: 72px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 0; background: transparent; color: var(--eifu-navy); text-align: left; cursor: pointer; }
.sesen-eifu-page .eifu-faq-button span:first-child { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 21px; font-weight: 500; line-height: 1.35; }
.sesen-eifu-page .eifu-faq-plus { width: 34px; height: 34px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 50%; border: 1px solid var(--eifu-border); color: var(--eifu-blue-dark); font-size: 20px; transition: transform .18s ease; }
.sesen-eifu-page .eifu-faq-button[aria-expanded="true"] .eifu-faq-plus { transform: rotate(45deg); }
.sesen-eifu-page .eifu-faq-answer { padding: 0 54px 24px 0; max-width: 840px; font-size: 16px; color: var(--eifu-text); }
.sesen-eifu-page .eifu-faq-answer p { margin: 0 0 12px; }

/* Final CTA */
.sesen-eifu-page .eifu-final { padding: 88px 0; background: linear-gradient(135deg, #17264D 0%, #253F8F 100%); color: #fff; }
.sesen-eifu-page .eifu-final-grid { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 50px; align-items: center; }
.sesen-eifu-page .eifu-final .eifu-h2 { color: #fff; max-width: 760px; }
.sesen-eifu-page .eifu-final p { max-width: 780px; margin: 18px 0 0; color: #DCE5FA; font-size: 17px; }
.sesen-eifu-page .eifu-final-proof { margin-top: 24px; color: var(--eifu-light-on-dark); font-size: 14px; font-weight: 700; letter-spacing: .02em; }
.sesen-eifu-page .eifu-final .eifu-btn-row { justify-content: flex-end; margin-top: 0; }

@media (max-width: 1080px) {
  .sesen-eifu-page .eifu-shell { width: min(1280px, calc(100% - 80px)); }
  .sesen-eifu-page .eifu-hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.85fr); gap: 44px; }
  .sesen-eifu-page .eifu-trust-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .sesen-eifu-page .eifu-trust-item:nth-child(4),
  .sesen-eifu-page .eifu-trust-item:nth-child(5) { border-top: 1px solid var(--eifu-divider); }
  .sesen-eifu-page .eifu-service-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-eifu-page .eifu-workflow { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-eifu-page .eifu-step:nth-child(4n)::before { display: block; }
  .sesen-eifu-page .eifu-step:nth-child(2n)::before { display: none; }
  .sesen-eifu-page .eifu-release-row { grid-template-columns: 1fr; gap: 10px; }
  .sesen-eifu-page .eifu-release-node:not(:last-child)::after { content: "↓"; right: auto; left: 50%; top: auto; bottom: -18px; transform: translateX(-50%); }
  .sesen-eifu-page .eifu-category-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
}

@media (max-width: 960px) {
  .sesen-eifu-page .eifu-hero-grid,
  .sesen-eifu-page .eifu-two-col,
  .sesen-eifu-page .eifu-two-col--even,
  .sesen-eifu-page .eifu-vocab-wrap,
  .sesen-eifu-page .eifu-global-grid,
  .sesen-eifu-page .eifu-final-grid { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-hero-art { margin-top: 10px; }
  .sesen-eifu-page .eifu-sticky-copy { position: static; }
  .sesen-eifu-page .eifu-final .eifu-btn-row { justify-content: flex-start; }
  .sesen-eifu-page .eifu-tech-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}

@media (max-width: 820px) {
  .sesen-eifu-page .eifu-shell { width: calc(100% - 58px); }
  .sesen-eifu-page .eifu-section { padding: 78px 0; }
  .sesen-eifu-page .eifu-section--dense { padding: 70px 0; }
  .sesen-eifu-page .eifu-hero { padding: 76px 0 72px; }
  .sesen-eifu-page .eifu-hero-grid,
  .sesen-eifu-page .eifu-two-col,
  .sesen-eifu-page .eifu-two-col--even,
  .sesen-eifu-page .eifu-vocab-wrap,
  .sesen-eifu-page .eifu-global-grid,
  .sesen-eifu-page .eifu-final-grid { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-hero-art { margin-top: 16px; }
  .sesen-eifu-page .eifu-sticky-copy { position: static; }
  .sesen-eifu-page .eifu-trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-eifu-page .eifu-trust-item:nth-child(3) { border-top: 1px solid var(--eifu-divider); }
  .sesen-eifu-page .eifu-value-grid { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-value-item:nth-child(even) { padding-left: 0; border-left: 0; }
  .sesen-eifu-page .eifu-value-item--wide { grid-column: auto; }
  .sesen-eifu-page .eifu-format-grid,
  .sesen-eifu-page .eifu-tech-grid,
  .sesen-eifu-page .eifu-ai-grid,
  .sesen-eifu-page .eifu-qa-grid,
  .sesen-eifu-page .eifu-quality-grid,
  .sesen-eifu-page .eifu-related-grid { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-format-item:nth-last-child(-n+2),
  .sesen-eifu-page .eifu-related-item:nth-last-child(-n+2) { border-bottom: 0; }
  .sesen-eifu-page .eifu-format-item:last-child,
  .sesen-eifu-page .eifu-related-item:last-child { border-bottom: 1px solid var(--eifu-divider); }
  .sesen-eifu-page .eifu-reg-panels { grid-template-columns: 1fr; gap: 16px; }
  .sesen-eifu-page .eifu-reg-facts { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-reg-fact { padding: 22px 0; }
  .sesen-eifu-page .eifu-reg-fact + .eifu-reg-fact { padding-left: 0; border-left: 0; border-top: 1px solid var(--eifu-divider); }
  .sesen-eifu-page .eifu-vocab-center { max-width: 620px; width: 100%; }
  .sesen-eifu-page .eifu-final .eifu-btn-row { justify-content: flex-start; }
}

@media (max-width: 620px) {
  .sesen-eifu-page .eifu-shell { width: calc(100% - 40px); }
  .sesen-eifu-page .eifu-section { padding: 68px 0; }
  .sesen-eifu-page .eifu-section--dense { padding: 64px 0; }
  .sesen-eifu-page .eifu-hero { padding: 66px 0 62px; }
  .sesen-eifu-page .eifu-art-frame { padding: 12px; border-radius: 24px; }
  .sesen-eifu-page .eifu-flowline { gap: 7px 6px; }
  .sesen-eifu-page .eifu-flow-chip { max-width: 100%; white-space: normal; text-align: center; }
  .sesen-eifu-page .eifu-value-tagline { padding: 20px; font-size: 18px; }
  .sesen-eifu-page .eifu-reg-panel,
  .sesen-eifu-page .eifu-category,
  .sesen-eifu-page .eifu-quality-item,
  .sesen-eifu-page .eifu-service-item { padding: 24px 22px; }
  .sesen-eifu-page .eifu-global-statement { font-size: 23px; }
  .sesen-eifu-page .eifu-h1 { font-size: 42px; text-align: center; }
  .sesen-eifu-page .eifu-h2 { font-size: 32px; }
  .sesen-eifu-page .eifu-h3 { font-size: 21px; }
  .sesen-eifu-page .eifu-hero .eifu-eyebrow { text-align: center; }
  .sesen-eifu-page .eifu-hero .eifu-lead,
  .sesen-eifu-page .eifu-hero-support { text-align: left; }
  .sesen-eifu-page .eifu-hero .eifu-btn-row { flex-direction: column; }
  .sesen-eifu-page .eifu-hero .eifu-btn { width: 100%; }
  .sesen-eifu-page .eifu-heading--mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
  .sesen-eifu-page .eifu-heading--mobile-center .eifu-copy,
  .sesen-eifu-page .eifu-heading--mobile-center .eifu-lead { text-align: left; }
  .sesen-eifu-page .eifu-heading--left-mobile { text-align: left; }
  .sesen-eifu-page .eifu-trust-grid { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-trust-item { border-top: 1px solid var(--eifu-divider); }
  .sesen-eifu-page .eifu-trust-item:first-child { border-top: 0; }
  .sesen-eifu-page .eifu-service-grid,
  .sesen-eifu-page .eifu-workflow,
  .sesen-eifu-page .eifu-tech-grid,
  .sesen-eifu-page .eifu-category-grid,
  .sesen-eifu-page .eifu-global-points { grid-template-columns: 1fr; }
  .sesen-eifu-page .eifu-workflow-wrap { padding: 28px 22px; }
  .sesen-eifu-page .eifu-step { padding: 6px 0 28px 60px; }
  .sesen-eifu-page .eifu-step::before,
  .sesen-eifu-page .eifu-step:nth-child(2n)::before,
  .sesen-eifu-page .eifu-step:nth-child(4n)::before { display: block; left: 20px; right: auto; top: 42px; bottom: -4px; width: 1px; height: auto; }
  .sesen-eifu-page .eifu-step:last-child::before { display: none; }
  .sesen-eifu-page .eifu-step-num { left: 0; top: 0; }
  .sesen-eifu-page .eifu-release-visual { padding: 24px 18px; }
  .sesen-eifu-page .eifu-vocab-center { grid-template-columns: 1fr; gap: 10px; }
  .sesen-eifu-page .eifu-vocab-core { grid-column: auto; min-height: 74px; }
  .sesen-eifu-page .eifu-vocab-node { min-height: 62px; }
  .sesen-eifu-page .eifu-faq-button span:first-child { font-size: 19px; }
  .sesen-eifu-page .eifu-faq-answer { padding-right: 0; }
  .sesen-eifu-page .eifu-final .eifu-btn-row { flex-direction: column; }
  .sesen-eifu-page .eifu-final .eifu-btn { width: 100%; }
}

@media (max-width: 360px) {
  .sesen-eifu-page .eifu-h1 { font-size: 38px; }
  .sesen-eifu-page .eifu-h2 { font-size: 30px; }
  .sesen-eifu-page .eifu-workflow-wrap { padding-left: 18px; padding-right: 18px; }
  .sesen-eifu-page .eifu-btn { padding-left: 20px; padding-right: 20px; }
  .sesen-eifu-page .eifu-qa-tagline { font-size: 23px; }
  .sesen-eifu-page .eifu-final-proof { font-size: 13px; line-height: 1.55; }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-eifu-page .eifu-btn,
  .sesen-eifu-page .eifu-link-arrow,
  .sesen-eifu-page .eifu-faq-plus { transition: none; }
}
`;

const services = [
  ["translate", "eIFU Translation", "Translate medical, technical, safety, instructional, and user-facing content with linguists selected according to the device, subject matter, intended audience, and language requirements."],
  ["review", "Independent Linguistic Review", "Review translated content for accuracy, terminology, completeness, readability, consistency, and alignment with approved source information and reference materials."],
  ["structure", "Structured Content Localization", "Localize reusable and structured content while preserving the elements that support downstream publishing, content reuse, and digital delivery."],
  ["publish", "Digital Production", "Prepare multilingual content for electronic PDFs, websites, structured publishing systems, content management environments, software-delivered instructions, and other manufacturer-defined eIFU channels."],
  ["qa", "In-Context eIFU QA", "Review translated content in the final or representative digital environment to identify linguistic, functional, formatting, or presentation issues that may not be visible during translation."],
  ["release", "Version & Release Management", "Reuse approved language across revisions, isolate changed content, coordinate reviewers and formats, and keep multilingual deliverables aligned with the intended release."]
];

const workflow = [
  ["01", "Source & Environment Assessment", "Review the source IFU, target languages, existing translations, terminology resources, translation memories, previous versions, reference materials, source format, and intended electronic delivery environment."],
  ["02", "Terminology Preparation", "Identify and align product names, components, functions, procedures, warnings, safety terminology, UI references, technical terms, and recurring approved language."],
  ["03", "Specialized Medical Device Translation", "Translate new and changed content with professional linguists selected for the language pair and relevant medical-device subject matter."],
  ["04", "Independent Professional Review", "Review meaning, accuracy, terminology, completeness, consistency, readability, and appropriate communication for the intended users."],
  ["05", "Structured & Digital Production", "Prepare localized content for its intended electronic environment while preserving relevant tags, structure, hyperlinks, metadata, reusable components, and formatting relationships."],
  ["06", "Electronic In-Context QA", "Validate the localized content in its final or representative delivery format to identify missing content, incorrect placement, broken references, rendering issues, and other presentation problems."],
  ["07", "Version & Release Validation", "Confirm language and version alignment, translated-content completeness, terminology consistency, final corrections, and other agreed release checks."],
  ["08", "Ongoing Lifecycle Management", "Preserve approved translations, terminology, translation memories, reviewer feedback, and release history for future updates, new markets, and additional product configurations."]
];

const formats = [
  ["Electronic PDF", "Translate and produce multilingual downloadable or interactive PDFs while maintaining document hierarchy, tables, graphics, hyperlinks, bookmarks, and other required elements."],
  ["HTML & Web-Based eIFUs", "Localize web-delivered Instructions for Use while supporting language-specific content, navigation, links, text expansion, and in-context validation."],
  ["XML & Structured Content", "Translate structured source content while preserving elements, attributes, tags, content relationships, and other non-translatable structure required by downstream systems."],
  ["DITA & Component-Based Documentation", "Support reusable topic- and component-based documentation designed for multi-channel publishing and recurring product updates."],
  ["XLIFF & Localization Packages", "Work with translation-ready interchange formats that connect content-management and localization environments."],
  ["CMS-Managed Content", "Integrate translation workflows with manufacturer-managed content systems and structured publishing environments according to the agreed technical process."],
  ["Device & Software-Delivered Instructions", "Support multilingual instructions presented through compatible device or software environments where electronic delivery forms part of the product experience."],
  ["QR-Linked eIFU Content", "Localize content accessed through manufacturer-defined QR or digital access pathways while helping validate the appropriate multilingual content in the intended user context."]
];

const aiItems = [
  ["Terminology Analysis", "Identify recurring technical, medical, product, and safety terminology and help surface inconsistent usage across files or versions."],
  ["Source & Version Comparison", "Help isolate additions, deletions, and modifications between source revisions so teams can focus on changed content."],
  ["Translation Memory Leverage", "Match new source content against previously translated and approved material to maximize appropriate reuse."],
  ["Consistency QA", "Surface inconsistent translations of recurring terms, warnings, device components, or repeated content."],
  ["Numeric & Structural Checks", "Help identify potential discrepancies involving numbers, units, dates, tags, missing content, or structural elements."],
  ["Cross-Content Analysis", "Compare related multilingual content across eIFUs, labels, software, packaging, and previous versions to identify inconsistencies that deserve review."]
];

const qaItems = [
  ["Language Navigation", "Verify that language selection and language-specific content behave as intended within the defined electronic environment."],
  ["Version Integrity", "Help confirm that the displayed language corresponds to the intended source and product release."],
  ["Links & Cross-References", "Check localized hyperlinks, anchors, referenced sections, navigation elements, and supporting resources according to the agreed QA scope."],
  ["Content Completeness", "Identify missing, duplicated, displaced, or untranslated content that may have been introduced during production."],
  ["Rendering & Layout", "Review text expansion, clipping, wrapping, tables, headings, graphics, symbols, and other formatting elements in the localized output."],
  ["Complex Scripts & RTL", "Check directionality, character rendering, layout behavior, and presentation for languages whose typographic requirements differ from the source."],
  ["Numbers, Units & Measurements", "Validate numeric information, units, dates, measurements, and related content against the approved source and localized context."],
  ["Downloads & Linked Documents", "Help verify that language-specific downloads or linked materials correspond to the intended language and version when included in the agreed testing scope."],
  ["QR-Linked Access Paths", "Where QR codes form part of the manufacturer's defined access route, linguistic QA can include validation of the multilingual content reached through that pathway."]
];

const categories = [
  ["Diagnostic & Monitoring Systems", "Patient monitoring, diagnostic imaging, testing platforms, ophthalmic systems, and related clinical technologies."],
  ["Laboratory & IVD Technologies", "Laboratory instruments, diagnostic systems, testing workflows, reagents, software, operating procedures, and associated product information."],
  ["Surgical & Procedural Devices", "Surgical technologies, procedural systems, instruments, equipment, and related software."],
  ["Therapeutic Devices", "Devices used to deliver, support, or monitor treatment across clinical environments."],
  ["Implantable & Orthopedic Technologies", "Complex instructions involving product configurations, procedures, components, warnings, and specialized professional terminology."],
  ["Connected Medical Devices", "Devices that interact with software, networks, digital platforms, clinician applications, or connected workflows."],
  ["Medical Device Software & SaMD", "Instructions associated with software-driven devices, standalone medical software, and digital clinical workflows."],
  ["Complex Product Families", "Terminology and version-management support across multiple models, configurations, languages, and recurring release cycles."]
];

const related = [
  ["IFU Translation Services", "Translation, independent professional review, multilingual formatting, version management, and QA for printed, PDF, structured, and electronic Instructions for Use.", "https://www.sesen.com/ifu-translation-services/"],
  ["Medical Device Translation Services", "Translation and localization across the medical-device lifecycle, including IFUs, labeling, technical documentation, software, training, clinical content, and post-market communication.", "https://www.sesen.com/medical-device-translation-services/"],
  ["Medical Device Labeling Translation", "Multilingual support for device labels, packaging, warnings, product identification, safety information, digital labeling, and recurring market updates.", "https://www.sesen.com/medical-device-labeling-translation-services/"],
  ["Medical Device Software Localization", "Localization for device interfaces, SaMD, connected technologies, clinician software, patient applications, and related digital content.", "https://www.sesen.com/medical-device-software-localization/"],
  ["Label Review & In-Context QA", "Final-context linguistic review for IFUs, eIFUs, labels, packaging, artwork, and other regulated multilingual content.", "https://www.sesen.com/label-review-in-context-qa/"],
  ["Medical Device Technical Documentation Translation", "Specialized multilingual support for technical documentation, risk and safety content, regulatory materials, engineering information, and related medical-device records.", "https://www.sesen.com/medical-device-technical-documentation-translation/"]
];

const faqs = [
  ["What is an eIFU?", [
    "An eIFU is an Instruction for Use provided in electronic form rather than, or in some circumstances in addition to, a traditional paper document. Depending on the device and delivery model, electronic instructions may be accessed through a website, software, electronic document, device interface, or other permitted electronic environment.",
    "For multilingual products, an eIFU program also requires control over language versions, terminology, digital presentation, updates, and the relationship between translated content and the approved source."
  ]],
  ["What is the difference between an IFU and an eIFU?", [
    "An IFU contains the instructions and information users need to understand and use a medical device appropriately. An eIFU provides those instructions electronically.",
    "From a localization perspective, the linguistic requirements remain rigorous, but eIFUs introduce additional considerations such as digital formats, navigation, structured content, electronic rendering, links, language access, version management, and recurring online updates. Sesen provides dedicated IFU Translation Services for the broader translation workflow and specialized eIFU support for electronic and structured delivery environments."
  ]],
  ["Does Sesen translate electronic Instructions for Use?", [
    "Yes. Sesen translates and localizes electronic Instructions for Use for medical-device and diagnostic organizations across 150+ languages. Services can include source assessment, terminology preparation, professional translation, independent review, structured-content localization, digital production, in-context QA, version management, and recurring multilingual updates."
  ]],
  ["Which eIFU formats can Sesen localize?", [
    "Sesen can support electronic PDF, HTML and web content, XML, XLIFF, DITA, structured content, CMS-managed source content, and other agreed localization formats. The workflow is configured according to the source architecture, target publishing environment, language requirements, and client process."
  ]],
  ["Can medical-device IFUs be supplied electronically in the EU?", [
    "Under the current EU framework, manufacturers may provide Instructions for Use electronically instead of on paper for devices covered by the MDR and intended for professional users, subject to the applicable requirements.",
    "Where it is reasonably foreseeable that a professional-use device may also be used by lay persons, instructions intended for those lay users must be supplied in paper form. Manufacturers remain responsible for determining the applicable regulatory requirements for their specific device and use scenario."
  ]],
  ["What changed in the EU eIFU rules in 2025?", [
    "Commission Implementing Regulation (EU) 2025/1234, adopted in June 2025, expanded the scope of the EU eIFU framework beyond the narrower categories previously covered by Implementing Regulation (EU) 2021/2226.",
    "The amended framework permits electronic rather than paper Instructions for Use for MDR devices intended for professional users, subject to the applicable conditions. It also addresses foreseeable lay use and introduces a future requirement to provide the eIFU internet address to the EUDAMED UDI database when the relevant registration requirement becomes applicable."
  ]],
  ["How does Sesen manage multilingual eIFU updates?", [
    "Sesen can compare revised source content with previous versions and use translation memory, approved terminology, prior translations, and reviewer history to identify reusable content. New or changed content can then be translated and reviewed while unchanged approved language is preserved where appropriate.",
    "This helps maintain continuity while reducing unnecessary retranslation and repeated review across recurring releases."
  ]],
  ["Can Sesen help migrate printed IFUs to electronic workflows?", [
    "Yes. Sesen can help evaluate existing multilingual IFUs, translation memories, terminology resources, previous versions, and approved content and prepare these assets for a more structured localization workflow. Support can extend through structured-content localization, digital production, multilingual QA, and ongoing updates within the manufacturer's selected eIFU publishing environment."
  ]],
  ["How do you maintain consistency between eIFUs, labels, and device software?", [
    "Sesen uses product terminology, client-approved glossaries, translation memory, prior translations, reference materials, reviewer feedback, and structured QA to help maintain terminology and meaning across related medical-device content. The same resources can support eIFUs, labels, packaging, software UI, technical documentation, training, and subsequent product releases."
  ]],
  ["Does Sesen use AI for eIFU translation?", [
    "Sesen uses AI-assisted technology where it can add measurable value within a controlled multilingual workflow. Applications may include terminology analysis, translation-memory leverage, source-version comparison, consistency checking, numeric and structural QA, and translation assistance where appropriate and approved.",
    "Professional linguists remain responsible for the human linguistic review defined by the project workflow. AI supports quality and efficiency rather than replacing professional expertise."
  ]],
  ["Does Sesen provide eIFU hosting?", [
    "Sesen's core role is multilingual eIFU content: translation, localization, structured production, terminology management, linguistic QA, version control, and recurring update support.",
    "We can work with the manufacturer's selected CMS, publishing workflow, website, software environment, or eIFU platform according to the agreed technical process. Regulatory hosting and platform requirements remain the responsibility of the manufacturer and its designated technology and regulatory teams."
  ]]
];

function ArrowLink({ href, children }) {
  return <a className="eifu-link" href={href}>{children}<span className="eifu-link-arrow" aria-hidden="true">→</span></a>;
}

function LineIcon({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    integrity: <><path {...common} d="M12 3.5 19 6.5v5.2c0 4.3-2.8 7.4-7 8.8-4.2-1.4-7-4.5-7-8.8V6.5L12 3.5Z"/><path {...common} d="m9 12 2 2 4-4"/></>,
    usability: <><path {...common} d="M7 5h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path {...common} d="M9 19h6M12 16v3"/></>,
    version: <><path {...common} d="M7 7h8.5a3.5 3.5 0 0 1 0 7H13"/><path {...common} d="m7 4-3 3 3 3M17 14l3 3-3 3"/></>,
    connected: <><circle {...common} cx="12" cy="12" r="2.5"/><circle {...common} cx="5" cy="6" r="2"/><circle {...common} cx="19" cy="6" r="2"/><circle {...common} cx="5" cy="18" r="2"/><circle {...common} cx="19" cy="18" r="2"/><path {...common} d="m10 10-3.3-2.6M14 10l3.3-2.6M10 14l-3.3 2.6M14 14l3.3 2.6"/></>,
    lifecycle: <><path {...common} d="M20 11a8 8 0 0 0-13.7-5.7L4 7.5"/><path {...common} d="M4 4v3.5h3.5M4 13a8 8 0 0 0 13.7 5.7L20 16.5"/><path {...common} d="M20 20v-3.5h-3.5"/></>,
    translate: <><path {...common} d="M4 5h9M8.5 3v2M6 8c1.4 3 3.6 5.3 6.5 6.8"/><path {...common} d="M11 8c-1.1 3-3.2 5.6-6.5 7.2M14 19l3.2-8L20 19M15.2 16h3.6"/></>,
    review: <><path {...common} d="M7 3.5h8l3 3V20H7Z"/><path {...common} d="M15 3.5V7h3M9.5 12l1.6 1.6 3.4-3.4M9.5 17H15"/></>,
    structure: <><rect {...common} x="4" y="4" width="6" height="5" rx="1"/><rect {...common} x="14" y="4" width="6" height="5" rx="1"/><rect {...common} x="9" y="15" width="6" height="5" rx="1"/><path {...common} d="M7 9v3h10V9M12 12v3"/></>,
    publish: <><path {...common} d="M6 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path {...common} d="M8 20h8M12 17v3M9 9h6M9 12h4"/></>,
    qa: <><circle {...common} cx="11" cy="11" r="6"/><path {...common} d="m15.5 15.5 4 4M8.5 11l1.7 1.7 3.3-3.4"/></>,
    release: <><path {...common} d="M5 6h14v12H5Z"/><path {...common} d="M8 3v6M16 3v6M8 13h3M13 13h3"/></>
  };
  return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{paths[type] || paths.lifecycle}</svg>;
}

function HeroArtwork() {
  return (
    <div className="eifu-art-frame" aria-label="Illustration showing controlled IFU content becoming multilingual electronic instructions across digital formats">
      <svg viewBox="0 0 520 430" role="img" aria-labelledby="eifuArtTitle eifuArtDesc">
        <title id="eifuArtTitle">Multilingual eIFU lifecycle</title>
        <desc id="eifuArtDesc">A controlled source document connects to translated language versions, structured content, digital publishing, and synchronized release states.</desc>
        <rect x="38" y="46" width="188" height="272" rx="20" fill="#FFFFFF" stroke="#17264D" strokeWidth="2.3" />
        <rect x="58" y="70" width="92" height="10" rx="5" fill="#4B6FD8" />
        <rect x="58" y="98" width="142" height="7" rx="3.5" fill="#B8C2D5" />
        <rect x="58" y="117" width="126" height="7" rx="3.5" fill="#D7DEEA" />
        <rect x="58" y="136" width="136" height="7" rx="3.5" fill="#D7DEEA" />
        <rect x="58" y="171" width="142" height="80" rx="12" fill="#F5F7FF" stroke="#CBD6EE" />
        <path d="M75 226 L103 197 L127 216 L152 188 L185 226" fill="none" stroke="#3659BB" strokeWidth="2" />
        <circle cx="103" cy="197" r="4" fill="#4B6FD8" />
        <circle cx="152" cy="188" r="4" fill="#4B6FD8" />
        <rect x="58" y="272" width="65" height="19" rx="9.5" fill="#EAF0FF" />
        <text x="90.5" y="285.5" textAnchor="middle" fontFamily="Inter, Arial" fontSize="12" fontWeight="700" fill="#3659BB">SOURCE IFU</text>

        <path d="M240 182 C274 182 283 182 306 182" fill="none" stroke="#6F8BE1" strokeWidth="2.2" strokeDasharray="5 6" />
        <path d="M299 175 L308 182 L299 189" fill="none" stroke="#6F8BE1" strokeWidth="2.2" />

        <rect x="319" y="50" width="164" height="260" rx="22" fill="#FFFFFF" stroke="#17264D" strokeWidth="2.3" />
        <rect x="337" y="70" width="128" height="24" rx="12" fill="#F5F7FF" stroke="#DDE4F2" />
        <circle cx="350" cy="82" r="4" fill="#4B6FD8" />
        <rect x="359" y="78" width="62" height="7" rx="3.5" fill="#8795AC" />
        <rect x="337" y="112" width="128" height="112" rx="14" fill="#F7F9FD" />
        <rect x="352" y="128" width="82" height="8" rx="4" fill="#4B6FD8" />
        <rect x="352" y="150" width="96" height="6" rx="3" fill="#B8C2D5" />
        <rect x="352" y="167" width="85" height="6" rx="3" fill="#D7DEEA" />
        <rect x="352" y="184" width="91" height="6" rx="3" fill="#D7DEEA" />
        <rect x="352" y="201" width="66" height="6" rx="3" fill="#D7DEEA" />
        <rect x="337" y="242" width="37" height="22" rx="11" fill="#4B6FD8" />
        <text x="355.5" y="256" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#FFFFFF">EN</text>
        <rect x="381" y="242" width="37" height="22" rx="11" fill="#EAF0FF" />
        <text x="399.5" y="256" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">DE</text>
        <rect x="425" y="242" width="37" height="22" rx="11" fill="#EAF0FF" />
        <text x="443.5" y="256" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">JA</text>
        <rect x="337" y="278" width="128" height="14" rx="7" fill="#EAF0FF" />
        <text x="401" y="288" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">eIFU · REV 4.1 · CONTROLLED</text>

        <rect x="87" y="340" width="346" height="46" rx="23" fill="#17264D" />
        <text x="260" y="359" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" letterSpacing="1.0" fill="#C8D6FF">TRANSLATE · STRUCTURE · VALIDATE · UPDATE</text>
        <text x="260" y="376" textAnchor="middle" fontFamily="Inter, Arial" fontSize="12" fontWeight="600" fill="#FFFFFF">One controlled multilingual eIFU lifecycle</text>
      </svg>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="eifu-faq">
      {faqs.map(([q, answers], i) => {
        const expanded = open === i;
        const panelId = `eifu-faq-panel-${i}`;
        return (
          <div className="eifu-faq-item" key={q}>
            <button
              className="eifu-faq-button"
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? -1 : i)}
            >
              <span>{q}</span><span className="eifu-faq-plus" aria-hidden="true">+</span>
            </button>
            {expanded && (
              <div className="eifu-faq-answer" id={panelId}>
                {answers.map((a) => <p key={a}>{a}</p>)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SesenEIFUTranslationPage() {
  return (
    <main className="sesen-eifu-page">
      <style>{pageStyles}</style>

      <section className="eifu-hero">
        <div className="eifu-shell eifu-hero-grid">
          <div className="eifu-hero-copy">
            <p className="eifu-eyebrow">Medical Device eIFU Localization</p>
            <h1 className="eifu-h1">eIFU Translation &amp; Localization Services</h1>
            <p className="eifu-lead">Sesen helps medical device companies translate, localize, produce, and maintain electronic Instructions for Use across global languages, structured content formats, and digital delivery environments.</p>
            <p className="eifu-hero-support">Support multilingual PDFs, HTML and structured content, CMS-managed workflows, recurring updates, and final digital QA through one controlled localization program that keeps language, terminology, and versions aligned.</p>
            <div className="eifu-btn-row">
              <a className="eifu-btn eifu-btn--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
              <a className="eifu-btn eifu-btn--secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            </div>
          </div>
          <div className="eifu-hero-art"><HeroArtwork /></div>
        </div>
      </section>

      <section className="eifu-trust" aria-label="eIFU service highlights">
        <div className="eifu-shell eifu-trust-grid">
          <div className="eifu-trust-item"><span className="eifu-trust-label">Medical Device Expertise</span><span className="eifu-trust-note">Specialized regulated-content workflows</span></div>
          <div className="eifu-trust-item"><span className="eifu-trust-label">ISO-Certified Quality</span><span className="eifu-trust-note">ISO 17100 · ISO 9001 · ISO 13485</span></div>
          <div className="eifu-trust-item"><span className="eifu-trust-label">Structured Content</span><span className="eifu-trust-note">XML · XLIFF · DITA · CMS workflows</span></div>
          <div className="eifu-trust-item"><span className="eifu-trust-label">Digital QA</span><span className="eifu-trust-note">Validate language in electronic context</span></div>
          <div className="eifu-trust-item"><span className="eifu-trust-label">150+ Languages</span><span className="eifu-trust-note">Scalable global device programs</span></div>
        </div>
      </section>

      <section className="eifu-section">
        <div className="eifu-shell eifu-two-col">
          <div className="eifu-sticky-copy">
            <h2 className="eifu-h2">From Instructions for Use to Digital Information Delivery</h2>
            <p className="eifu-lead">Electronic Instructions for Use change more than the delivery format.</p>
            <p className="eifu-copy">A conventional print-oriented IFU workflow may end with an approved printed document or final PDF. An eIFU adds an ongoing electronic delivery environment in which users need to reach the right instructions, in the right language, for the right product and version.</p>
            <p className="eifu-copy">A downloadable PDF can itself form part of an eIFU program; the distinction is not the file extension. Electronic delivery adds requirements around access, content structure, navigation, links, version integrity, digital rendering, recurring updates, and consistency with related device information.</p>
          </div>
          <div className="eifu-compare">
            <div className="eifu-compare-col">
              <span className="eifu-compare-kicker">Traditional IFU</span>
              <div className="eifu-flowline">
                {['Approved Source','Translation','Professional Review','Layout','Final PDF / Print','Release'].map((x,i,a) => <React.Fragment key={x}><span className="eifu-flow-chip">{x}</span>{i < a.length-1 && <span className="eifu-flow-arrow">→</span>}</React.Fragment>)}
              </div>
            </div>
            <div className="eifu-compare-col">
              <span className="eifu-compare-kicker">eIFU Lifecycle</span>
              <div className="eifu-flowline">
                {['Controlled Source','Translation','Structured / Digital Production','Electronic-Context QA','Publication-Ready Delivery','Version Management','Recurring Updates'].map((x,i,a) => <React.Fragment key={x}><span className="eifu-flow-chip">{x}</span>{i < a.length-1 && <span className="eifu-flow-arrow">→</span>}</React.Fragment>)}
              </div>
              <p className="eifu-copy">Sesen brings these stages together in a controlled multilingual workflow designed for modern medical device content.</p>
              <ArrowLink href="https://www.sesen.com/ifu-translation-services/">Explore IFU Translation Services for print, PDF, and broader IFU workflows</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--soft">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Why Multilingual eIFUs Require More Than Translation</h2>
            <p className="eifu-lead">An eIFU can contain the same safety-critical instructions as a printed IFU, but electronic delivery introduces additional relationships that must remain controlled across languages, formats, and releases.</p>
          </div>
          <div className="eifu-value-grid">
            {[
              ['integrity','Content Integrity','Warnings, precautions, contraindications, procedures, measurements, device terminology, software references, and operating instructions need to preserve their intended meaning across every target language.'],
              ['usability','Digital Usability','Correct translation alone is not enough if localized navigation, hyperlinks, cross-references, tables, figures, downloads, or language-selection pathways do not function correctly in the digital environment.'],
              ['version','Version Integrity','As products evolve, multilingual eIFUs need to remain aligned with the appropriate source revision, product configuration, and market release.'],
              ['connected','Connected Product Content','The same device term, warning, UI label, component name, or instruction may appear in the eIFU, device software, packaging, labels, training, quick-start guides, and technical documentation. Sesen helps maintain terminology continuity across these connected touchpoints.'],
              ['lifecycle','Lifecycle Continuity','Previously approved translations, terminology, translation memory, reviewer decisions, and reusable content can be carried forward as new product versions are released, helping reduce unnecessary retranslation and review.']
            ].map(([icon,t,d],i) => (
              <div className={`eifu-value-item ${i===4 ? 'eifu-value-item--wide' : ''}`} key={t}>
                <div className="eifu-icon-box"><LineIcon type={icon} /></div>
                <div><h3 className="eifu-h3">{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
          <div className="eifu-value-tagline">One device. Multiple languages. Multiple formats. Multiple releases. One controlled content system.</div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dense">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Multilingual Support Across the eIFU Lifecycle</h2>
            <p className="eifu-copy">Sesen supports electronic Instructions for Use from source preparation through recurring multilingual updates.</p>
          </div>
          <div className="eifu-service-grid">
            {services.map(([icon,t,d]) => <div className="eifu-service-item" key={t}><div className="eifu-service-icon"><LineIcon type={icon} /></div><h3 className="eifu-h3">{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--pale">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--left-mobile">
            <h2 className="eifu-h2">From Approved IFU to Multilingual eIFU</h2>
            <p className="eifu-lead">Sesen builds the localization workflow around your approved content, digital environment, languages, product terminology, quality requirements, and release process.</p>
          </div>
          <div className="eifu-workflow-wrap">
            <div className="eifu-workflow">
              {workflow.map(([n,t,d]) => <div className="eifu-step" key={t}><div className="eifu-step-num">{n}</div><h3 className="eifu-h3">{t}</h3><p>{d}</p></div>)}
            </div>
            <div className="eifu-workflow-note">For recurring programs, approved language assets and product knowledge can support greater continuity with every subsequent release.</div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dense">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Localize eIFUs Across Digital and Structured Formats</h2>
            <p className="eifu-lead">Electronic Instructions for Use can be delivered through many different content architectures. Sesen adapts the localization workflow to the source environment and intended publishing process rather than forcing every eIFU into the same production model.</p>
          </div>
          <div className="eifu-format-grid">
            {formats.map(([t,d]) => <div className="eifu-format-item" key={t}><div className="eifu-format-title"><span className="eifu-format-dot" aria-hidden="true"></span><h3 className="eifu-h3">{t}</h3></div><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--pale">
        <div className="eifu-shell">
          <div className="eifu-reg-intro">
            <h2 className="eifu-h2">Electronic IFUs Under the EU MDR Framework</h2>
            <p className="eifu-lead">EU rules for electronic Instructions for Use expanded in 2025 for a broader range of professional-use medical devices.</p>
            <p className="eifu-copy">Commission Implementing Regulation (EU) 2025/1234 amended Implementing Regulation (EU) 2021/2226, extending the framework to medical devices and accessories covered by the MDR that are intended for professional users, subject to the applicable requirements.</p>
          </div>

          <div className="eifu-reg-panels">
            <div className="eifu-reg-panel eifu-reg-panel--accent">
              <h3 className="eifu-h3">Professional-Use Devices</h3>
              <p>For devices intended for professional users, electronic Instructions for Use may replace paper instructions where the applicable requirements are met.</p>
            </div>
            <div className="eifu-reg-panel">
              <h3 className="eifu-h3">Foreseeable Lay Use</h3>
              <p>Where it is reasonably foreseeable that a device intended for professional use may also be used by lay persons, instructions intended for those lay users must be supplied in paper form.</p>
            </div>
          </div>

          <div className="eifu-reg-facts">
            <div className="eifu-reg-fact"><strong>Access & Version Management</strong><span>The framework addresses electronic availability, revision management, website requirements, paper-copy access, and long-term version availability.</span></div>
            <div className="eifu-reg-fact"><strong>Digital Access & UDI</strong><span>The 2025 amendment provides for the eIFU internet address to be supplied to the EUDAMED UDI database when the applicable device-registration requirement becomes mandatory.</span></div>
            <div className="eifu-reg-fact"><strong>Multilingual Control</strong><span>Language availability, version integrity, structured publishing, and digital QA become important parts of the eIFU lifecycle.</span></div>
          </div>

          <div className="eifu-reg-foot">
            <p className="eifu-disclaimer">Sesen supports the multilingual content, localization, terminology, structured production, version management, and linguistic QA components of electronic IFU programs. Device-specific regulatory applicability and compliance determinations remain with the manufacturer and its regulatory advisors.</p>
            <ArrowLink href="https://www.sesen.com/ifu-translation-services/eu-mdr-compliance/">Explore EU MDR IFU Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="eifu-section">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <p className="eifu-eyebrow">Version Continuity</p>
            <h2 className="eifu-h2">Keep Every Language Aligned With Every Release</h2>
            <p className="eifu-lead">For many medical device teams, the most difficult eIFU project is not the first release. It is every release that follows.</p>
            <p className="eifu-copy">Product information can change because of software updates, new device configurations, safety revisions, design changes, market expansion, regulatory updates, usability findings, or revised operating procedures. Retranslating entire Instructions for Use every time can increase cost, review workload, and unnecessary linguistic variation.</p>
          </div>
          <div className="eifu-release-visual">
            <div className="eifu-release-row">
              <div className="eifu-release-node"><strong>Version 4.1 Source</strong><span>Approved source content enters the controlled update workflow.</span></div>
              <div className="eifu-release-node eifu-release-node--accent"><strong>Source Change Detection</strong><span>Identify added, changed, or removed content.</span></div>
              <div className="eifu-release-node"><strong>Approved Translation Reuse</strong><span>Preserve previously reviewed multilingual content where appropriate.</span></div>
              <div className="eifu-release-node eifu-release-node--accent"><strong>Translate, Review & Validate</strong><span>Focus linguistic work on new or modified material and run multilingual QA.</span></div>
              <div className="eifu-release-node eifu-release-node--final"><strong>Version 4.1 Release</strong><span>Deliver synchronized language versions for the agreed publishing workflow.</span></div>
            </div>
          </div>
          <p className="eifu-copy eifu-copy--spaced">Sesen uses controlled multilingual assets and version-aware workflows to help focus translation effort where content has actually changed. This approach helps organizations maintain continuity between releases while reducing repetitive work for translators, reviewers, and client review teams.</p>
        </div>
      </section>

      <section className="eifu-section eifu-section--soft">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Build a Reusable Multilingual Content Foundation</h2>
            <p className="eifu-lead">A scalable eIFU program depends on controlled linguistic assets that preserve approved language and product knowledge across future versions.</p>
          </div>
          <div className="eifu-tech-grid">
            <div className="eifu-tech-item"><h3 className="eifu-h3">Translation Memory</h3><p>Previously translated segments can be stored and reused when corresponding source content remains unchanged or sufficiently similar, preserving approved wording while focusing review on new or modified content.</p></div>
            <div className="eifu-tech-item"><h3 className="eifu-h3">Terminology Management</h3><p>Product-specific terminology can cover device names, components, functions, procedures, warnings, software references, measurements, and other recurring concepts across connected content.</p></div>
            <div className="eifu-tech-item"><h3 className="eifu-h3">Version Comparison</h3><p>Source comparison can help identify what changed between releases so translation and review teams can distinguish reusable content from material requiring new linguistic work.</p></div>
            <div className="eifu-tech-item"><h3 className="eifu-h3">Reviewer Decisions</h3><p>Approved reviewer feedback can be carried into future releases so established terminology and language decisions do not need to be rediscovered with every update.</p></div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dark">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <p className="eifu-eyebrow">Human-Controlled Technology</p>
            <h2 className="eifu-h2">Use AI Where It Strengthens Multilingual Quality</h2>
            <p className="eifu-lead">Sesen combines professional life sciences expertise with AI-assisted technology to improve efficiency, consistency, and quality control across complex multilingual programs.</p>
          </div>
          <div className="eifu-ai-grid">
            {aiItems.map(([t,d]) => <div className="eifu-ai-item" key={t}><h3 className="eifu-h3">{t}</h3><p>{d}</p></div>)}
          </div>
          <div className="eifu-human-note"><strong>Professional Human Validation</strong><p>Technology supports the process; it does not replace the professional linguistic expertise and human review required for high-quality regulated medical device content. Sesen configures AI and automation according to the content, risk, client requirements, confidentiality considerations, and agreed quality workflow.</p></div>
        </div>
      </section>

      <section className="eifu-section">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Validate the eIFU Where Users Actually Access It</h2>
            <p className="eifu-lead">A translation can be correct in a bilingual editor and still contain problems after it enters a website, PDF, content-management system, or other electronic environment.</p>
            <p className="eifu-copy">Sesen's in-context eIFU QA extends quality control into the user-facing format.</p>
          </div>
          <div className="eifu-qa-grid">
            {qaItems.map(([t,d]) => <div className="eifu-qa-item" key={t}><div className="eifu-qa-top"><span className="eifu-qa-check" aria-hidden="true">✓</span><h3 className="eifu-h3">{t}</h3></div><p>{d}</p></div>)}
          </div>
          <div className="eifu-qa-tagline">Translate the content. Validate the experience.</div>
          <ArrowLink href="https://www.sesen.com/label-review-in-context-qa/">Explore Label Review &amp; In-Context QA</ArrowLink>
        </div>
      </section>

      <section className="eifu-section eifu-section--pale">
        <div className="eifu-shell eifu-two-col--even eifu-two-col">
          <div>
            <h2 className="eifu-h2">Moving From Printed IFUs to Electronic Delivery?</h2>
            <p className="eifu-lead">Transitioning from paper instructions to eIFUs does not mean discarding years of approved multilingual content.</p>
            <p className="eifu-copy">Existing IFUs may already contain valuable terminology, translation memory, reviewer decisions, approved warnings, product language, and previously validated translations.</p>
            <p className="eifu-copy">Sesen can help organizations turn those assets into a more structured multilingual foundation for electronic delivery, whether the objective is to migrate a single product family or modernize a larger documentation portfolio.</p>
            <div className="eifu-btn-row"><a className="eifu-btn eifu-btn--primary" href="https://www.sesen.com/contact-sales/">DISCUSS YOUR EIFU MIGRATION</a></div>
          </div>
          <div className="eifu-migrate-flow">
            {['Existing IFUs & Multilingual Assets','Content & Translation Audit','Terminology & Translation Memory Consolidation','Structured Content Preparation','eIFU Translation & Localization','Digital In-Context QA','Controlled Multilingual Updates'].map((x,i) => <div className="eifu-migrate-step" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="eifu-section">
        <div className="eifu-shell eifu-vocab-wrap">
          <div>
            <p className="eifu-eyebrow">Connected Product Content</p>
            <h2 className="eifu-h2">One Device Vocabulary Across Every User Touchpoint</h2>
            <p className="eifu-lead">Electronic Instructions for Use do not exist in isolation.</p>
            <p className="eifu-copy">The same product terminology can move across device labels, software interfaces, packaging, user guidance, technical documentation, training, service content, and future product updates. If these assets are translated independently, terminology can drift even when each individual translation appears reasonable.</p>
            <p className="eifu-copy">Sesen approaches medical-device localization as a connected multilingual content system.</p>
          </div>
          <div className="eifu-vocab-center" aria-label="Connected medical device terminology system">
            <div className="eifu-vocab-core">Approved Device Terminology<br/>Shared With the eIFU</div>
            <div className="eifu-vocab-node">Medical Device Labeling</div>
            <div className="eifu-vocab-node">Device Software &amp; SaMD</div>
            <div className="eifu-vocab-node">Packaging</div>
            <div className="eifu-vocab-node">Quick-Start &amp; User Guides</div>
            <div className="eifu-vocab-node">Training &amp; Support</div>
            <div className="eifu-vocab-node">Technical Documentation</div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dense eifu-section--soft">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">eIFU Localization for Complex Medical Technologies</h2>
            <p className="eifu-copy">Sesen supports electronic Instructions for Use across a broad range of medical-device technologies and professional-use environments.</p>
          </div>
          <div className="eifu-category-grid">
            {categories.map(([t,d]) => <div className="eifu-category" key={t}><h3 className="eifu-h3">{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--pale">
        <div className="eifu-shell eifu-global-grid">
          <div>
            <p className="eifu-eyebrow">Global Program Control</p>
            <h2 className="eifu-h2">Scale Electronic Instructions Across Languages and Markets</h2>
            <p className="eifu-lead">Global eIFU programs can involve dozens of languages, recurring revisions, multiple product configurations, structured files, local reviewers, and synchronized market releases.</p>
            <p className="eifu-copy">Sesen provides centralized multilingual program management across 150+ languages to help life sciences organizations reduce fragmentation across these workflows.</p>
            <p className="eifu-global-statement">One multilingual knowledge base that can become stronger with every release.</p>
          </div>
          <div className="eifu-global-points">
            <div className="eifu-global-point"><strong>150+ Languages</strong><span>Scalable support for established and emerging medical-device markets.</span></div>
            <div className="eifu-global-point"><strong>Centralized Program Management</strong><span>Coordinate source content, language assignments, schedules, reviewers, files, and corrections.</span></div>
            <div className="eifu-global-point"><strong>Terminology Governance</strong><span>Keep approved product language connected across languages and release cycles.</span></div>
            <div className="eifu-global-point"><strong>Recurring Release Support</strong><span>Maintain translation memory, production knowledge, review history, and update continuity over time.</span></div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dense">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Quality Infrastructure Built for Life Sciences</h2>
            <p className="eifu-lead">Electronic IFU localization combines technical documentation, medical-device terminology, digital content, and recurring quality control. Sesen supports these requirements through an ISO-certified quality infrastructure designed for professional translation and life sciences content.</p>
          </div>
          <div className="eifu-quality-grid">
            <div className="eifu-quality-item"><div className="eifu-quality-code">ISO 17100</div><h3 className="eifu-h3">Translation Services</h3><p>Certified translation-services processes supporting professional translation and linguistic review.</p></div>
            <div className="eifu-quality-item"><div className="eifu-quality-code">ISO 9001:2015</div><h3 className="eifu-h3">Quality Management</h3><p>Quality-management systems supporting structured and repeatable operational processes.</p></div>
            <div className="eifu-quality-item"><div className="eifu-quality-code">ISO 13485:2016</div><h3 className="eifu-h3">Medical Device Quality</h3><p>Medical-device quality-management infrastructure supporting Sesen's work with regulated device organizations.</p></div>
            <div className="eifu-quality-item"><div className="eifu-quality-code">EXPERTISE</div><h3 className="eifu-h3">Specialized Medical Device Linguists</h3><p>Professional linguists selected according to language pair, content type, device subject matter, audience, and project requirements.</p></div>
            <div className="eifu-quality-item"><div className="eifu-quality-code">CONTROL</div><h3 className="eifu-h3">Controlled Multilingual Workflows</h3><p>Terminology, translation memory, reference content, version history, reviewer feedback, QA, and project records support continuity across recurring programs.</p></div>
            <div className="eifu-quality-item"><div className="eifu-quality-code">SECURITY</div><h3 className="eifu-h3">Secure Content Handling</h3><p>Controlled access and secure workflows support the handling of confidential medical-device documents, references, and multilingual project materials.</p></div>
          </div>
        </div>
      </section>

      <section className="eifu-section eifu-section--dense eifu-section--soft">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--mobile-center">
            <h2 className="eifu-h2">Connected Support for Medical Device Content</h2>
            <p className="eifu-copy">eIFUs are one part of a broader multilingual device ecosystem. Sesen provides specialized services across the content that surrounds the product.</p>
          </div>
          <div className="eifu-related-grid">
            {related.map(([t,d,u]) => <div className="eifu-related-item" key={t}><h3 className="eifu-h3">{t}</h3><p>{d}</p><ArrowLink href={u}>Explore {t}</ArrowLink></div>)}
          </div>
        </div>
      </section>

      <section className="eifu-section">
        <div className="eifu-shell">
          <div className="eifu-heading eifu-heading--left-mobile">
            <h2 className="eifu-h2">eIFU Translation Services FAQ</h2>
            <p className="eifu-copy">Answers to common questions about electronic Instructions for Use, digital formats, EU eIFU requirements, multilingual updates, structured content, and Sesen's localization role.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="eifu-final">
        <div className="eifu-shell eifu-final-grid">
          <div>
            <h2 className="eifu-h2">Build a Smarter Multilingual eIFU Workflow</h2>
            <p>Whether you are preparing electronic Instructions for Use for a new device, migrating from paper documentation, expanding into new markets, converting content to structured formats, or managing recurring multilingual updates across a global product portfolio, Sesen can build the localization workflow around your content, languages, formats, reviewers, technology, and release requirements.</p>
            <p>Keep every language connected to the product, the approved terminology, and the right release.</p>
            <div className="eifu-final-proof">Medical Device Expertise · Structured Content · Professional Review · Digital QA · Version Continuity · AI-Assisted Quality · 150+ Languages</div>
          </div>
          <div className="eifu-btn-row">
            <a className="eifu-btn eifu-btn--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            <a className="eifu-btn eifu-btn--secondary" href="https://www.sesen.com/get-a-quote/">GET A QUOTE</a>
          </div>
        </div>
      </section>
    </main>
  );
}
