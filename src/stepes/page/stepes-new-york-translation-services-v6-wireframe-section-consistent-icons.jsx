const styles = `
:root {
  --magenta: #C11D63;
  --magenta-dark: #A71954;
  --burgundy: #7A1542;
  --blush: #FDF2F7;
  --pink-light: #F2A7C6;
  --ink: #1E1C20;
  --ink-2: #302E33;
  --body: #545158;
  --muted: #757178;
  --line: #E7E3E7;
  --panel: #F7F6F7;
  --white: #FFFFFF;
  --dark: #252229;
  --shadow: 0 20px 60px rgba(34, 23, 31, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }

.ny-page {
  width: 100%;
  overflow: hidden;
  background: var(--white);
  color: var(--ink);
  font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.ny-page a { color: inherit; text-decoration: none; }
.ny-page h1, .ny-page h2, .ny-page h3, .ny-page p { margin-top: 0; }

.shell {
  width: min(100% - 112px, 1280px);
  margin: 0 auto;
}

.section { padding: 96px 0; }
.section--dense { padding: 80px 0; }
.section--soft { background: #F8F7F8; }
.section--blush { background: var(--blush); }
.section--dark { background: var(--dark); color: var(--white); }
.section--burgundy { background: var(--burgundy); color: var(--white); }

.eyebrow {
  margin: 0 0 16px;
  color: var(--magenta);
  font-size: 11px;
  line-height: 1.3;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}
.section--dark .eyebrow,
.section--burgundy .eyebrow { color: var(--pink-light); }

.h1 {
  max-width: 720px;
  margin: 0;
  font-size: 48px;
  line-height: 1.06;
  letter-spacing: -0.035em;
  font-weight: 600;
}

.h2 {
  max-width: 820px;
  margin: 0;
  font-size: 36px;
  line-height: 1.12;
  letter-spacing: -0.026em;
  font-weight: 600;
}

.h3 {
  margin: 0;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.018em;
  font-weight: 600;
}

.lead {
  max-width: 790px;
  margin: 22px 0 0;
  color: var(--body);
  font-size: 18px;
  line-height: 1.65;
  font-weight: 400;
}
.section--dark .lead,
.section--burgundy .lead { color: rgba(255,255,255,0.76); }

.body-copy {
  color: var(--body);
  font-size: 16px;
  line-height: 1.72;
  font-weight: 400;
}
.section--dark .body-copy,
.section--burgundy .body-copy { color: rgba(255,255,255,0.76); }

.heading-group { max-width: 820px; margin-bottom: 52px; }
.heading-group--center { margin-left: auto; margin-right: auto; text-align: center; }
.heading-group--center .h2,
.heading-group--center .lead { margin-left: auto; margin-right: auto; }

.cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.btn {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
.btn--primary,
.btn--primary:link,
.btn--primary:visited,
.btn--primary:hover,
.btn--primary:active,
.btn--primary:focus,
.btn--primary:focus-visible {
  background: var(--magenta);
  color: #fff !important;
}
.btn--primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 24px rgba(193,29,99,.2); }
.btn--primary svg,
.btn--primary span { color: #fff !important; stroke: #fff !important; fill: none; }
.btn--secondary {
  background: #fff;
  color: var(--ink);
  border-color: #D8D3D8;
}
.btn--secondary:hover { border-color: #B9B2B9; }
.section--dark .btn--secondary,
.section--burgundy .btn--secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,.35); }

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  margin-top: 18px;
  color: var(--magenta) !important;
  font-size: 16px;
  font-weight: 600;
}
.text-link svg { flex: 0 0 auto; transition: transform .2s ease; }
.text-link:hover svg { transform: translateX(3px); }
.section--dark .text-link,
.section--burgundy .text-link { color: #fff !important; }
.text-link:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 4px; border-radius: 4px; }

/* HERO */
.hero { padding: 104px 0 0; background: linear-gradient(180deg, #fff 0%, #fff 76%, #FAF8FA 100%); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(420px, .97fr); gap: 72px; align-items: center; }
.hero-copy { padding-bottom: 76px; }
.hero-copy .lead { max-width: 690px; }
.hero-art-wrap { align-self: stretch; display: flex; align-items: flex-end; min-height: 560px; }
.hero-art {
  width: 100%;
  min-height: 506px;
  position: relative;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
  border: 1px solid #E2DEE2;
  border-bottom: 0;
  background: linear-gradient(155deg, #FBFAFB 0%, #F1EEF1 100%);
  box-shadow: var(--shadow);
}
.hero-art .hero-label {
  position: absolute;
  top: 24px;
  left: 26px;
  z-index: 2;
  color: #77727A;
  font-size: 14px;
  line-height: 1.35;
}
.hero-art svg { width: 100%; height: 100%; display: block; min-height: 506px; }

.proof-band { background: #FAF8FA; }
.proof-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.proof-item { padding: 24px 24px 24px 0; }
.proof-item + .proof-item { padding-left: 24px; border-left: 1px solid var(--line); }
.proof-value { margin: 0 0 4px; font-size: 21px; line-height: 1.25; font-weight: 600; color: var(--ink); }
.proof-label { margin: 0; color: var(--body); font-size: 16px; line-height: 1.5; }

/* SERVICES */
.service-list { border-top: 1px solid var(--line); }
.service-row {
  display: grid;
  grid-template-columns: 56px minmax(200px, .68fr) minmax(0, 1.32fr);
  gap: 28px;
  align-items: start;
  padding: 34px 0;
  border-bottom: 1px solid var(--line);
}
.icon-box {
  width: 46px; height: 46px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  background: #F6F3F5; border: 1px solid #E8E3E7;
  color: var(--ink-2);
}
.icon-box svg { width: 22px; height: 22px; }
.icon-box--accent {
  background: var(--blush);
  border-color: #EAC9D8;
  color: var(--magenta);
}
.icon-box--accent-dark {
  background: #F7EEF3;
  border-color: #DFC7D2;
  color: var(--burgundy);
}
.service-row .h3 { padding-top: 7px; }
.service-desc { max-width: 760px; }
.service-links { display: flex; flex-wrap: wrap; gap: 8px 22px; }

/* INDUSTRIES */
.industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.industry-card {
  min-height: 100%;
  padding: 30px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid var(--line);
}
.industry-card p { margin: 14px 0 0; color: var(--body); font-size: 16px; line-height: 1.66; }
.industry-card ul { margin: 20px 0 0; padding: 0; list-style: none; }
.industry-card li {
  display: flex; gap: 10px; align-items: flex-start;
  padding: 7px 0;
  color: var(--body); font-size: 16px; line-height: 1.5;
}
.industry-card li::before { content: ""; flex: 0 0 5px; width: 5px; height: 5px; margin-top: .62em; border-radius: 50%; background: #9A939A; }

/* AI */
.ai-grid { display: grid; grid-template-columns: minmax(0, .82fr) minmax(480px, 1.18fr); gap: 72px; align-items: start; }
.ai-copy { position: sticky; top: 30px; }
.ai-routes { border-top: 1px solid rgba(255,255,255,.18); }
.ai-route { padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
.ai-route-header { display: flex; gap: 16px; align-items: flex-start; }
.ai-route-icon {
  flex: 0 0 42px; width: 42px; height: 42px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(242,167,198,.11); border: 1px solid rgba(242,167,198,.25); color: var(--pink-light);
}
.ai-route .h3 { font-size: 22px; }
.ai-route p { margin: 12px 0 0 58px; color: rgba(255,255,255,.75); font-size: 16px; line-height: 1.68; }
.ai-note { margin-top: 26px; padding: 22px 24px; border-radius: 20px; background: rgba(255,255,255,.065); border: 1px solid rgba(255,255,255,.13); }
.ai-note strong { color: #fff; font-weight: 600; }
.ai-note p { margin: 5px 0 0; color: rgba(255,255,255,.74); font-size: 16px; line-height: 1.65; }

/* INFRASTRUCTURE */
.split-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(520px,1.28fr); gap: 78px; align-items: start; }
.capability-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.capability {
  padding: 28px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  min-height: 214px;
}
.capability .icon-box { margin-bottom: 20px; }
.capability .h3 { font-size: 21px; }
.capability p { margin: 10px 0 0; color: var(--body); font-size: 16px; line-height: 1.64; }

/* QUALITY */
.quality-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(520px,1.28fr); gap: 78px; align-items: start; }
.quality-list { border-top: 1px solid #E6D8DF; }
.quality-item { padding: 26px 0; border-bottom: 1px solid #E6D8DF; }
.quality-item .h3 { font-size: 21px; }
.quality-item p { margin: 8px 0 0; color: #62575E; font-size: 16px; line-height: 1.65; }
.trust-grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #E6D8DF;
  border-bottom: 1px solid #E6D8DF;
}
.trust-panel { padding: 30px 34px 32px 0; }
.trust-panel + .trust-panel { padding-left: 34px; border-left: 1px solid #E6D8DF; }
.trust-panel .h3 { font-size: 22px; }
.trust-panel p { margin: 12px 0 0; color: #62575E; font-size: 16px; line-height: 1.68; }
.iso-row { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 22px; border-top: 1px solid #E6D8DF; border-bottom: 1px solid #E6D8DF; }
.iso-item { padding: 16px 14px 16px 0; }
.iso-item + .iso-item { padding-left: 14px; border-left: 1px solid #E6D8DF; }
.iso-name { display: block; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.35; }
.iso-label { display: block; margin-top: 4px; color: #6A6066; font-size: 16px; line-height: 1.45; }

/* LANGUAGES */
.language-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 72px; align-items: start; }
.language-list { columns: 3; column-gap: 34px; padding-top: 6px; }
.language-item { break-inside: avoid; padding: 12px 0; border-bottom: 1px solid var(--line); color: var(--ink); font-size: 16px; font-weight: 600; }
.locale-panel { padding: 32px; border-radius: 26px; background: #F7F5F7; border: 1px solid var(--line); }
.locale-panel .h3 { font-size: 22px; }
.locale-panel p { margin: 14px 0 0; color: var(--body); font-size: 16px; line-height: 1.7; }

/* INTERPRETING */
.interpret-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.interpret-item { padding: 32px 32px 34px 0; }
.interpret-item + .interpret-item { padding-left: 32px; border-left: 1px solid var(--line); }
.interpret-item .icon-box { margin-bottom: 22px; }
.interpret-item .h3 { font-size: 22px; }
.interpret-item p { margin: 12px 0 0; color: var(--body); font-size: 16px; line-height: 1.67; }
.interpret-note { margin-top: 26px; max-width: 920px; color: var(--body); font-size: 16px; line-height: 1.68; }

/* NEW YORK */
.ny-support-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 74px; align-items: center; }
.ny-support-content { order: 2; }
.ny-support-content > .heading-group { margin-bottom: 0; }
.ny-support-grid .borough-panel { order: 1; }
.borough-panel {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(145deg, #FAF8FA, #F0EDF0);
}
.borough-panel svg { width: 100%; height: 100%; min-height: 440px; display: block; }
.ny-use-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); margin-top: 28px; }
.ny-use { padding: 18px 18px 18px 0; border-bottom: 1px solid var(--line); color: var(--body); font-size: 16px; line-height: 1.5; }
.ny-use:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--line); }

/* ENTERPRISE */
.enterprise-intro { max-width: 850px; }
.enterprise-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 48px; border-top: 1px solid rgba(255,255,255,.18); border-left: 1px solid rgba(255,255,255,.18); }
.enterprise-item { padding: 30px; min-height: 208px; border-right: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); }
.enterprise-item .h3 { font-size: 21px; }
.enterprise-item p { margin: 10px 0 0; color: rgba(255,255,255,.76); font-size: 16px; line-height: 1.65; }
.enterprise-summary { max-width: 820px; margin: 34px 0 0; color: rgba(255,255,255,.8); font-size: 18px; line-height: 1.68; }

/* FAQ */
.faq-wrap { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-item summary {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 0;
  list-style: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.35;
  font-weight: 600;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 4px; border-radius: 4px; }
.faq-plus { flex: 0 0 30px; width: 30px; height: 30px; border-radius: 50%; border: 1px solid #DCD6DC; position: relative; }
.faq-plus::before, .faq-plus::after { content: ""; position: absolute; left: 8px; right: 8px; top: 14px; height: 1px; background: var(--ink); }
.faq-plus::after { transform: rotate(90deg); transition: transform .2s ease; }
details[open] .faq-plus::after { transform: rotate(0); }
.faq-answer { max-width: 840px; padding: 0 56px 26px 0; color: var(--body); font-size: 16px; line-height: 1.72; }
.faq-answer p { margin: 0 0 12px; }

/* FINAL CTA */
.final-wrap { padding: 88px 0 104px; background: #fff; }
.final-cta {
  padding: 58px 62px;
  display: grid;
  grid-template-columns: minmax(0,1fr) auto;
  gap: 42px;
  align-items: center;
  border-radius: 30px;
  background: var(--blush);
  border: 1px solid #ECDDE5;
}
.final-cta .h2 { max-width: 710px; }
.final-cta p { max-width: 760px; margin: 16px 0 0; color: #5D5359; font-size: 18px; line-height: 1.65; }
.final-cta .cta-row { margin-top: 0; justify-content: flex-end; }

@media (max-width: 1120px) {
  .shell { width: calc(100% - 80px); }
  .hero-grid { grid-template-columns: 1fr 0.9fr; gap: 48px; }
  .hero-art-wrap { min-height: 520px; }
  .industry-grid { grid-template-columns: 1fr 1fr; }
  .ai-grid, .split-grid, .quality-grid { gap: 48px; }
  .ai-grid { grid-template-columns: .82fr 1.18fr; }
  .split-grid, .quality-grid { grid-template-columns: .78fr 1.22fr; }
  .enterprise-grid { grid-template-columns: 1fr 1fr; }
  .final-cta { grid-template-columns: 1fr; }
  .final-cta .cta-row { justify-content: flex-start; }
}

@media (max-width: 860px) {
  .shell { width: calc(100% - 48px); }
  .section { padding: 80px 0; }
  .section--dense { padding: 72px 0; }
  .h1 { font-size: 42px; }
  .h2 { font-size: 32px; }
  .h3 { font-size: 22px; }
  .hero { padding-top: 88px; }
  .hero-grid { grid-template-columns: 1fr; gap: 0; }
  .hero-copy { padding-bottom: 48px; text-align: center; }
  .hero-copy .h1, .hero-copy .lead { margin-left: auto; margin-right: auto; }
  .hero-copy .cta-row { justify-content: center; }
  .hero-art-wrap { min-height: 430px; }
  .hero-art { min-height: 430px; border-radius: 28px 28px 0 0; }
  .hero-art svg { min-height: 430px; }
  .proof-grid { grid-template-columns: 1fr 1fr; }
  .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
  .proof-item:nth-child(4) { border-top: 1px solid var(--line); }
  .proof-item { padding: 22px 20px 22px 0; }
  .proof-item:nth-child(even) { padding-left: 20px; }
  .service-row { grid-template-columns: 48px 1fr; gap: 18px; }
  .service-row .service-desc { grid-column: 2; }
  .industry-grid { grid-template-columns: 1fr 1fr; }
  .ai-grid, .split-grid, .quality-grid, .language-grid, .ny-support-grid { grid-template-columns: 1fr; gap: 46px; }
  .ai-copy { position: static; }
  .split-grid > .heading-group, .language-grid > .heading-group, .ny-support-content > .heading-group { margin-bottom: 0; text-align: center; max-width: 760px; margin-left: auto; margin-right: auto; }
  .split-grid > .heading-group .h2, .split-grid > .heading-group .lead, .language-grid > .heading-group .h2, .language-grid > .heading-group .lead, .ny-support-content > .heading-group .h2, .ny-support-content > .heading-group .lead { margin-left: auto; margin-right: auto; }
  .ai-copy .heading-group, .quality-grid > .heading-group { margin-bottom: 0; max-width: 760px; }
  .ny-support-content { order: 1; }
  .ny-support-grid .borough-panel { order: 2; }
  .capability-grid { grid-template-columns: 1fr 1fr; }
  .trust-grid { grid-template-columns: 1fr; }
  .trust-panel, .trust-panel + .trust-panel { padding: 28px 0; border-left: 0; }
  .trust-panel + .trust-panel { border-top: 1px solid #E6D8DF; }
  .interpret-grid { grid-template-columns: 1fr; border-bottom: 0; }
  .interpret-item, .interpret-item + .interpret-item { padding: 26px 0; border-left: 0; border-bottom: 1px solid var(--line); }
  .enterprise-grid { grid-template-columns: 1fr 1fr; }
  .final-cta { padding: 48px 42px; text-align: left; }
  .final-cta .h2, .final-cta p { margin-left: 0; margin-right: 0; }
  .final-cta .cta-row { justify-content: flex-start; }
}

@media (max-width: 640px) {
  .shell { width: calc(100% - 40px); }
  .section { padding: 68px 0; }
  .section--dense { padding: 64px 0; }
  .h1 { font-size: 38px; line-height: 1.08; }
  .h2 { font-size: 30px; line-height: 1.16; }
  .h3 { font-size: 20px; }
  .lead { font-size: 18px; line-height: 1.58; }
  .heading-group { margin-bottom: 38px; }
  .heading-group:not(.heading-group--editorial) { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-group:not(.heading-group--editorial) .h2,
  .heading-group:not(.heading-group--editorial) .lead { margin-left: auto; margin-right: auto; }
  .hero { padding-top: 72px; }
  .hero-copy { padding-bottom: 40px; }
  .hero-copy .cta-row { flex-direction: column; }
  .hero-copy .btn { width: 100%; }
  .hero-art-wrap { min-height: 350px; }
  .hero-art { min-height: 350px; border-radius: 24px 24px 0 0; }
  .hero-art svg { min-height: 350px; }
  .hero-art .hero-label { top: 18px; left: 20px; font-size: 14px; }
  .proof-grid { grid-template-columns: 1fr; }
  .proof-item, .proof-item + .proof-item, .proof-item:nth-child(3), .proof-item:nth-child(4) { padding: 20px 0; border-left: 0; border-top: 0; border-bottom: 1px solid var(--line); }
  .proof-item:last-child { border-bottom: 0; }
  .service-row { grid-template-columns: 42px 1fr; gap: 14px; padding: 28px 0; }
  .service-row .service-desc { grid-column: 1 / -1; padding-left: 56px; }
  .text-link { min-height: 44px; }
  .service-links { display: block; }
  .service-links .text-link { display: flex; width: fit-content; min-height: 44px; align-items: center; margin-top: 8px; }
  .industry-grid { grid-template-columns: 1fr; }
  .industry-card { padding: 26px 24px; }
  .ai-route-header { gap: 13px; }
  .ai-route p { margin-left: 0; }
  .capability-grid { grid-template-columns: 1fr; border-left: 0; }
  .capability { padding: 26px 0; border-right: 0; min-height: auto; }
  .trust-panel, .trust-panel + .trust-panel { padding: 26px 0; }
  .iso-row { grid-template-columns: 1fr; }
  .iso-item, .iso-item + .iso-item { padding: 14px 0; border-left: 0; }
  .iso-item + .iso-item { border-top: 1px solid #E6D8DF; }
  .language-list { columns: 2; column-gap: 24px; }
  .locale-panel { padding: 26px 24px; }
  .borough-panel, .borough-panel svg { min-height: 340px; }
  .ny-use-list { grid-template-columns: 1fr; }
  .ny-use, .ny-use:nth-child(even) { padding: 16px 0; border-left: 0; }
  .enterprise-grid { grid-template-columns: 1fr; border-left: 0; }
  .enterprise-item { min-height: auto; padding: 26px 0; border-right: 0; }
  .faq-item summary { font-size: 18px; min-height: 68px; }
  .faq-answer { padding-right: 0; }
  .final-wrap { padding: 68px 0 84px; }
  .final-cta { padding: 40px 24px; border-radius: 24px; }
  .final-cta .cta-row { flex-direction: column; width: 100%; }
  .final-cta .btn { width: 100%; }
  .hero-art-wrap { min-height: 320px; }
  .hero-art, .hero-art svg { min-height: 320px; }
}

@media (max-width: 480px) {
  .language-list { columns: 1; }
  .service-row .service-desc { padding-left: 0; grid-column: 1 / -1; }
  .service-row .h3 { padding-top: 5px; }
  .final-cta { padding-left: 20px; padding-right: 20px; }
}

@media (max-width: 390px) {
  .hero-art-wrap { min-height: 290px; }
  .hero-art, .hero-art svg { min-height: 290px; }
  .hero-art .hero-label { top: 16px; left: 16px; }
  .proof-value { font-size: 20px; }
  .industry-card { padding: 24px 20px; }
  .locale-panel { padding: 24px 20px; }
  .final-cta { padding: 34px 20px; }
}
`;

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Icon({ name }) {
  const common = { stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    document: <><path {...common} d="M6 3.5h7l4 4V20H6z"/><path {...common} d="M13 3.5V8h4M9 12h5M9 15.5h5"/></>,
    legal: <><path {...common} d="M12 4v16M7 7h10M5 10l-3 5h6l-3-5Zm14 0-3 5h6l-3-5ZM8 20h8"/></>,
    finance: <><path {...common} d="M4 19V10M10 19V6M16 19V3M2 19h18"/></>,
    certified: <><path {...common} d="M12 3.5l2.1 1.3 2.5-.1.8 2.4 2 1.5-.8 2.4.8 2.4-2 1.5-.8 2.4-2.5-.1L12 20.5l-2.1-1.3-2.5.1-.8-2.4-2-1.5.8-2.4-.8-2.4 2-1.5.8-2.4 2.5.1Z"/><path {...common} d="m8.8 12 2 2 4.4-4.5"/></>,
    web: <><circle {...common} cx="12" cy="12" r="8.5"/><path {...common} d="M3.5 12h17M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5S14.3 18.1 12 20.5M12 3.5C9.7 5.9 8.5 8.7 8.5 12s1.2 6.1 3.5 8.5"/></>,
    interpret: <><path {...common} d="M5 6.5h9M5 10h6M5 13.5h4"/><path {...common} d="M4 3.5h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5l-4.5 3v-3H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/></>,
    ai: <><rect {...common} x="4" y="4" width="16" height="16" rx="4"/><path {...common} d="M8 12h8M12 8v8M8.5 4V2M15.5 4V2M20 8.5h2M20 15.5h2M4 8.5H2M4 15.5H2"/></>,
    human: <><circle {...common} cx="12" cy="8" r="3.2"/><path {...common} d="M5.5 20c.7-4.2 3-6.3 6.5-6.3s5.8 2.1 6.5 6.3"/></>,
    shield: <><path {...common} d="M12 3.5 19 6v5.4c0 4.3-2.3 7.4-7 9.1-4.7-1.7-7-4.8-7-9.1V6Z"/><path {...common} d="m8.5 12 2.2 2.1 4.8-5"/></>,
    globe: <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9M12 3C9.5 5.6 8.3 8.6 8.3 12s1.2 6.4 3.7 9"/></>,
    terminology: <><path {...common} d="M4 6h16M4 12h12M4 18h8"/><circle {...common} cx="18" cy="18" r="2"/></>,
    memory: <><rect {...common} x="4" y="5" width="16" height="14" rx="3"/><path {...common} d="M8 2v3M16 2v3M8 10h8M8 14h5"/></>,
    project: <><path {...common} d="M4 5h16v14H4z"/><path {...common} d="M4 9h16M8 5v14M12 12h5M12 15h5"/></>,
    scale: <><path {...common} d="M5 18h14M6 15l3-4 3 2 4-6 2 2"/></>,
    onsite: <><path {...common} d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle {...common} cx="12" cy="10" r="2"/></>,
    remote: <><rect {...common} x="3.5" y="5" width="17" height="12" rx="2"/><path {...common} d="m9 10 3-2 3 2v3l-3 2-3-2Z"/></>,
    event: <><path {...common} d="M5 5h14v14H5zM8 2v6M16 2v6M5 9h14"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name] || paths.document}</svg>;
}

const LinkText = ({ href, children }) => (
  <a className="text-link" href={href}>{children}<Arrow /></a>
);

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-label">New York → Global markets</div>
      <svg viewBox="0 0 620 540" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDF2F7"/>
            <stop offset="1" stopColor="#ECE8EC"/>
          </linearGradient>
        </defs>
        <rect width="620" height="540" fill="url(#g1)"/>
        <circle cx="466" cy="122" r="112" fill="none" stroke="#C8C2C8" strokeWidth="1.4"/>
        <path d="M354 122h224M466 10c31 31 48 68 48 112s-17 81-48 112M466 10c-31 31-48 68-48 112s17 81 48 112M376 78c57 19 123 19 180 0M376 166c57-19 123-19 180 0" fill="none" stroke="#B9B2BA" strokeWidth="1.2"/>
        <path d="M34 462h552" stroke="#AAA3AA" strokeWidth="1.2"/>
        <path d="M78 462V318h52v144M144 462V270h46v192M202 462V342h38v120M250 462V238h72v224M336 462V304h44v158M395 462V347h32v115" fill="none" stroke="#706970" strokeWidth="2"/>
        <path d="M277 238v-54M285 238v-82" stroke="#706970" strokeWidth="2"/>
        <path d="M92 338h24M92 362h24M92 386h24M92 410h24M157 292h20M157 316h20M157 340h20M157 364h20M157 388h20M157 412h20M265 266h42M265 294h42M265 322h42M265 350h42M265 378h42M265 406h42" stroke="#A39BA3" strokeWidth="1"/>
        <rect x="366" y="246" width="184" height="118" rx="22" fill="#fff" stroke="#D9D3D9"/>
        <rect x="386" y="269" width="88" height="9" rx="4.5" fill="#6E676E" opacity=".82"/>
        <rect x="386" y="292" width="138" height="6" rx="3" fill="#C9C3C9"/>
        <rect x="386" y="307" width="118" height="6" rx="3" fill="#C9C3C9"/>
        <rect x="386" y="330" width="76" height="13" rx="6.5" fill="#C11D63" opacity=".86"/>
        <path d="M435 246c0-26 14-46 42-57" fill="none" stroke="#C11D63" strokeWidth="1.5" strokeDasharray="5 6"/>
        <circle cx="479" cy="187" r="5" fill="#C11D63"/>
        <path d="M535 194c-22 17-35 33-39 52" fill="none" stroke="#928B92" strokeWidth="1.2" strokeDasharray="4 6"/>
        <circle cx="538" cy="191" r="4" fill="#8E878E"/>
      </svg>
    </div>
  );
}

function NewYorkGraphic() {
  return (
    <div className="borough-panel" aria-hidden="true">
      <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="440" fill="#F6F3F5"/>
        <path d="M325 54c44 35 63 74 56 116-6 36-34 63-43 97-10 37 7 78-13 118" fill="none" stroke="#6F686F" strokeWidth="2.2"/>
        <path d="M267 88c-27 49-35 94-24 137 8 33 34 70 23 125" fill="none" stroke="#A09AA0" strokeWidth="1.5"/>
        <path d="M376 90c31 42 47 84 46 126-2 43-24 84-13 128" fill="none" stroke="#A09AA0" strokeWidth="1.5"/>
        <path d="M105 303c95-24 166-18 226 18 74 44 128 42 211 11" fill="none" stroke="#C11D63" strokeWidth="2" strokeDasharray="7 9"/>
        <circle cx="171" cy="300" r="7" fill="#C11D63"/><circle cx="329" cy="321" r="7" fill="#C11D63"/><circle cx="469" cy="341" r="7" fill="#C11D63"/>
        <rect x="70" y="78" width="202" height="102" rx="20" fill="#fff" stroke="#DED8DE"/>
        <text x="94" y="111" fill="#2D2A2F" fontSize="18" fontWeight="600">New York City</text>
        <text x="94" y="140" fill="#6F686F" fontSize="15">Business · Legal · Finance</text>
        <text x="94" y="164" fill="#6F686F" fontSize="15">Life Sciences · Technology</text>
        <rect x="396" y="192" width="172" height="80" rx="18" fill="#fff" stroke="#DED8DE"/>
        <text x="418" y="224" fill="#2D2A2F" fontSize="17" fontWeight="600">Global delivery</text>
        <text x="418" y="251" fill="#6F686F" fontSize="14">100+ languages</text>
      </svg>
    </div>
  );
}

const services = [
  { icon: "document", title: "Professional Translation Services", desc: "Translate reports, presentations, policies, technical documents, corporate communications, training materials, product content, and other business-critical files with professional linguists and structured quality review. Stepes supports one-time document translation as well as recurring multilingual programs across departments, markets, content types, and languages.", links: [["Explore Professional Translation Services", "https://www.stepes.com/translation-services/"]] },
  { icon: "legal", title: "Legal Translation Services", desc: "Support cross-border legal matters with specialized translation for contracts, litigation materials, corporate records, eDiscovery, compliance content, employment documents, intellectual property, regulatory materials, and other legal communications. Legal linguists are selected according to the language pair, subject matter, document type, intended use, and required level of review.", links: [["Explore Legal Translation Services", "https://www.stepes.com/legal-translation-services/"]] },
  { icon: "finance", title: "Financial Translation Services", desc: "Translate financial reports, investment materials, banking documents, disclosures, fund communications, insurance content, fintech interfaces, investor communications, and other financial information with terminology and numerical controls designed for business-critical content. Stepes supports financial institutions, investment firms, asset managers, insurers, fintech companies, and other organizations operating across international markets.", links: [["Explore Financial Translation Services", "https://www.stepes.com/financial-translation-services/"]] },
  { icon: "certified", title: "Certified Translation Services", desc: "Prepare complete professional translations with certification for immigration, legal, academic, corporate, HR, regulatory, licensing, and other official-use documents. Stepes supports certified translation requirements for individuals and organizations and can accommodate additional submission instructions when specified by the receiving institution.", links: [["Explore Certified Translation Services", "https://www.stepes.com/certified-translation-services/"]] },
  { icon: "web", title: "Website & Software Localization", desc: "Create multilingual digital experiences that work naturally for users in every market. Stepes localizes websites, SaaS platforms, mobile applications, user interfaces, customer portals, help centers, product content, and other digital experiences while protecting terminology, technical elements, and brand consistency.", links: [["Explore Website Translation", "https://www.stepes.com/website-translation-services/"], ["Explore Software Localization", "https://www.stepes.com/software-localization-services/"]] },
  { icon: "interpret", title: "Professional Interpreting Services", desc: "Support multilingual conversations through on-site, phone, video, conference, and event interpreting. Stepes matches interpreters according to language, regional variety, subject matter, delivery format, requested qualifications, and availability.", links: [["Explore Interpreting Services", "https://www.stepes.com/interpretation-services/"]] },
];

const industries = [
  { title: "Financial Services", text: "Support international banking, investment management, private equity, capital markets, insurance, fintech, and corporate finance with accurate multilingual communication.", items: ["Annual and quarterly reports", "Financial statements and disclosures", "Investment and fund materials", "Banking and lending documents", "Investor presentations", "Insurance and fintech content", "Compliance and customer communications"], href: "https://www.stepes.com/financial-translation-services/", label: "Financial Translation Services" },
  { title: "Legal & Professional Services", text: "Help law firms, corporate legal departments, consulting firms, accounting organizations, advisory teams, and other professional-services businesses communicate accurately across jurisdictions and languages.", items: ["Contracts and agreements", "Litigation and arbitration materials", "Corporate transactions and due diligence", "eDiscovery and document review", "Governance records", "Compliance and regulatory content", "Reports and client deliverables"], href: "https://www.stepes.com/legal-translation-services/", label: "Legal Translation Services" },
  { title: "Life Sciences & Healthcare", text: "Translate specialized clinical, scientific, regulatory, medical device, healthcare, and patient-facing content with workflows designed around terminology accuracy, audience clarity, version control, and appropriate professional review.", items: ["Clinical trial documentation", "Informed consent and patient materials", "Regulatory submissions", "Medical device documentation", "Instructions for Use", "Product labeling", "Medical and scientific communications"], href: "https://www.stepes.com/life-sciences-translation-services/", label: "Life Sciences Translation Services" },
  { title: "Media, Marketing & Entertainment", text: "Connect campaigns, media, and branded experiences with audiences across languages while preserving intent, tone, cultural relevance, and creative impact. For highly creative messaging, Stepes can apply localization or transcreation when direct translation alone would not reproduce the intended effect.", items: ["Marketing campaigns", "Advertising and digital content", "Video and multimedia", "Subtitles and captions", "Brand communications", "Corporate media", "Customer-facing content"], href: "https://www.stepes.com/marketing-translation-services/", label: "Marketing Translation Services" },
  { title: "Technology & SaaS", text: "Localize software, digital products, websites, user interfaces, documentation, support content, and recurring product releases for global markets while protecting technical elements and product language.", items: ["SaaS platforms and applications", "User interfaces", "Resource files", "Technical documentation", "Support and help content", "Product releases", "Websites and portals"], href: "https://www.stepes.com/software-localization-services/", label: "Software Localization Services" },
  { title: "Retail & Consumer Brands", text: "Translate the content that connects products with customers across ecommerce, retail, marketplaces, digital channels, and international campaigns.", items: ["Product descriptions", "Catalogs and attributes", "Marketplace content", "Websites", "Packaging-related content", "Marketing campaigns", "Customer communications"], href: "https://www.stepes.com/retail-ecommerce-translation-services/", label: "Retail & E-commerce Translation" },
];

const aiRoutes = [
  { icon: "ai", title: "AI-Accelerated Translation", text: "Use AI, translation memory, approved terminology, and automated checks to accelerate suitable high-volume, internal, short-lived, or lower-risk content. This can help organizations expand multilingual access and reduce turnaround where speed and scale are primary requirements." },
  { icon: "human", title: "AI + Professional Human Review", text: "For customer-facing and business-critical content, professional linguists can validate AI-generated translations against the source for accuracy, completeness, terminology, fluency, tone, locale conventions, and intended use." },
  { icon: "shield", title: "Expert Human Translation", text: "When content carries greater legal, regulatory, financial, medical, technical, reputational, or brand risk, a more human-led workflow may be appropriate, including specialized translators, independent reviewers, subject-matter experts, and additional quality controls." },
];

const capabilities = [
  { icon: "globe", title: "Native-Language Expertise", text: "Work with professional linguists who understand the target language, regional usage, cultural context, and expectations of the intended market." },
  { icon: "human", title: "Subject-Matter Matching", text: "Assign translators and reviewers according to industry, content type, language combination, and project requirements rather than language alone." },
  { icon: "memory", title: "Translation Memory", text: "Reuse previously approved translations where appropriate to improve consistency across recurring documents, product releases, websites, policies, and related content." },
  { icon: "terminology", title: "Terminology Management", text: "Maintain approved translations for product names, technical terms, legal expressions, regulated language, brand terminology, abbreviations, and other business-critical vocabulary." },
  { icon: "project", title: "Centralized Project Coordination", text: "Manage multilingual files, deadlines, language requirements, reviewers, approvals, and delivery through a coordinated translation workflow." },
  { icon: "scale", title: "Scalable Global Delivery", text: "Support individual projects, recurring translation programs, product launches, continuous updates, and multilingual rollouts across teams and markets." },
];

const quality = [
  ["Qualified Linguists and Reviewers", "Translation resources are selected according to language, subject matter, content type, intended use, and required quality level."],
  ["Terminology and Style Alignment", "Approved glossaries, style guidance, previous translations, product terminology, and client preferences help establish a consistent linguistic foundation before translation begins."],
  ["Translation Memory", "Validated translations can be retained and reused across related content, improving consistency while reducing unnecessary retranslation."],
  ["Linguistic and Automated QA", "Quality checks can identify issues involving completeness, terminology, numbers, formatting, tags, placeholders, repeated content, locale conventions, and other repeatable translation risks."],
  ["Professional Review", "When required, professional linguists or subject-matter specialists review translated content for meaning, terminology, fluency, context, tone, and readiness for its intended audience."],
  ["Continuous Improvement", "Approved client and reviewer feedback can be incorporated into terminology, translation memory, style guidance, and future project instructions so recurring programs improve over time."],
];

const languages = ["Spanish", "French", "Canadian French", "German", "Italian", "Portuguese", "Brazilian Portuguese", "Chinese, Simplified & Traditional", "Japanese", "Korean", "Arabic", "Russian", "Polish", "Vietnamese", "Haitian Creole"];

const enterprise = [
  ["Recurring Content Programs", "Support ongoing documents, websites, product updates, training, communications, and release cycles through repeatable multilingual workflows."],
  ["Multi-Language Rollouts", "Coordinate shared requirements, terminology, timelines, and quality controls across multiple languages and target markets."],
  ["Cross-Functional Collaboration", "Connect localization managers, legal, marketing, product, clinical, technical, and regional teams through one coordinated delivery model."],
  ["Version and Change Continuity", "Carry approved terminology, translation memory, reviewer decisions, and project instructions forward as source content evolves."],
  ["Review and Approval Coordination", "Organize professional linguists, subject-matter experts, in-country reviewers, and client stakeholders around defined review responsibilities."],
  ["Finished Multilingual Delivery", "Coordinate translation with file engineering, formatting, visual QA, digital localization, and other production steps required for final use."],
];

const faqs = [
  { q: "What types of translation services does Stepes provide in New York?", a: <>Stepes provides professional translation, certified translation, legal translation, financial translation, technical translation, life sciences and medical translation, website translation, software localization, marketing translation, multimedia localization, and professional interpreting services. Projects can range from a single document to recurring enterprise programs involving multiple content types, languages, teams, and markets.</> },
  { q: "What industries does Stepes support in New York?", a: <>Stepes supports organizations across financial services, legal and professional services, life sciences, healthcare, medical devices, technology and SaaS, media and entertainment, marketing, retail and ecommerce, manufacturing, government, education, and other global industries. Linguists and reviewers are matched according to both language requirements and the subject matter of the project.</> },
  { q: "Does Stepes provide certified translation services in New York?", a: <>Yes. Stepes provides certified translations for legal, immigration, academic, employment, corporate, regulatory, licensing, government, and other official-use documents. Certification and submission requirements can vary by institution and purpose, so customers should provide any specific instructions from the receiving organization when requesting the translation.<br/><LinkText href="https://www.stepes.com/certified-translation-services/">Certified Translation Services</LinkText></> },
  { q: "What languages does Stepes translate?", a: <>Stepes provides professional translation and localization in more than 100 languages and regional variants, including Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, Vietnamese, Polish, Russian, and many additional European, Asian, Middle Eastern, African, and regional languages.<br/><LinkText href="https://www.stepes.com/translation-languages/">View All Translation Languages</LinkText></> },
  { q: "Does Stepes provide interpreting services in New York City?", a: <>Yes. Stepes supports professional interpreting for New York organizations through on-site, phone, video, conference, and event formats. The appropriate interpreting solution depends on the language, location, subject matter, duration, participant requirements, requested qualifications, and whether visual or physical context is needed.<br/><LinkText href="https://www.stepes.com/interpretation-services/">Explore Interpreting Services</LinkText></> },
  { q: "How does Stepes use AI for translation?", a: <>Stepes uses AI as part of a managed translation workflow rather than as a universal replacement for professional linguists. Depending on the content, audience, language, quality expectations, and business risk, a project may use AI translation, translation memory, approved terminology, automated QA, professional post-editing, expert human translation, independent review, subject-matter validation, or a combination of these approaches. Higher-risk legal, financial, medical, regulatory, technical, and customer-facing content can receive stronger professional oversight according to its intended use.<br/><LinkText href="https://www.stepes.com/ai-translation-services/">Explore AI Translation Services</LinkText></> },
];

export default function StepesNewYorkTranslationServicesV6() {
  return (
    <main className="ny-page">
      <style>{styles}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 className="h1">Professional Translation Services in New York</h1>
            <p className="lead">Stepes helps New York businesses communicate globally with professional translation and localization services in 100+ languages. From financial and legal documents to life sciences content, websites, software, marketing, and enterprise communications, we combine professional linguists, industry expertise, AI-enabled workflows, terminology management, and rigorous quality controls to deliver multilingual content at scale.</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="https://app.stepes.com/quote/"><span>Get an Instant Quote</span><Arrow /></a>
              <a className="btn btn--secondary" href="https://www.stepes.com/contact-us/">Talk to a Translation Expert</a>
            </div>
          </div>
          <div className="hero-art-wrap"><HeroArt /></div>
        </div>
      </section>

      <section className="proof-band" aria-label="Stepes translation network overview">
        <div className="shell proof-grid">
          <div className="proof-item"><p className="proof-value">100+ Languages</p><p className="proof-label">Global and regional language coverage</p></div>
          <div className="proof-item"><p className="proof-value">10,000+ Professional Linguists</p><p className="proof-label">Language experts matched to subject matter and project requirements</p></div>
          <div className="proof-item"><p className="proof-value">2,000+ Enterprise Clients</p><p className="proof-label">Multilingual support for organizations across industries and global markets</p></div>
          <div className="proof-item"><p className="proof-value">ISO-Certified Quality Processes</p><p className="proof-label">Structured standards for professional enterprise translation</p></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="heading-group heading-group--center">
            <h2 className="h2">Translation Solutions for New York Businesses</h2>
            <p className="lead">New York organizations communicate across borders every day. Financial institutions serve international investors, law firms manage cross-border matters, life sciences companies operate global clinical and regulatory programs, technology companies launch products internationally, and consumer brands reach customers across languages and markets.</p>
            <p className="lead" style={{marginTop: 12}}>Stepes brings professional translation, localization, interpreting, and multilingual technology together through one coordinated language-services team.</p>
          </div>
          <div className="service-list">
            {services.map((s) => (
              <article className="service-row" key={s.title}>
                <div className="icon-box icon-box--accent"><Icon name={s.icon} /></div>
                <h3 className="h3">{s.title}</h3>
                <div className="service-desc">
                  <p className="body-copy">{s.desc}</p>
                  <div className="service-links">{s.links.map(([label, href]) => <LinkText key={href} href={href}>{label}</LinkText>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="heading-group heading-group--center">
            <p className="eyebrow">Industry Expertise</p>
            <h2 className="h2">Translation Expertise for New York’s Global Economy</h2>
            <p className="lead">New York is home to organizations working at the intersection of global finance, law, healthcare, technology, media, commerce, and professional services. Their multilingual content often requires more than language fluency. It requires translators who understand the terminology, purpose, audience, and business context behind the words.</p>
            <p className="lead" style={{marginTop: 12}}>Stepes matches professional linguists and reviewers to the subject matter of each project while using approved terminology, translation memory, and quality controls to maintain consistency across languages and content.</p>
          </div>
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-card" key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p>{item.text}</p>
                <ul>{item.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <LinkText href={item.href}>{item.label}</LinkText>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell ai-grid">
          <div className="ai-copy">
            <div className="heading-group heading-group--editorial">
              <p className="eyebrow">AI + Human Workflows</p>
              <h2 className="h2">AI-Enabled Translation. Professional Human Expertise.</h2>
              <p className="lead">Global organizations are creating more multilingual content, across more channels, at greater speed than traditional one-size-fits-all translation workflows were designed to handle.</p>
              <p className="lead" style={{marginTop: 12}}>Stepes combines AI translation technology with professional language expertise, translation memory, approved terminology, automated QA, and human review to match the workflow to the content rather than forcing every project through the same process.</p>
              <LinkText href="https://www.stepes.com/ai-translation-services/">Explore AI Translation Services</LinkText>
            </div>
          </div>
          <div>
            <div className="ai-routes">
              {aiRoutes.map((route) => (
                <article className="ai-route" key={route.title}>
                  <div className="ai-route-header"><div className="ai-route-icon"><Icon name={route.icon}/></div><h3 className="h3">{route.title}</h3></div>
                  <p>{route.text}</p>
                </article>
              ))}
            </div>
            <div className="ai-note">
              <strong>Content-Aware Workflow Design</strong>
              <p>Stepes DomainAI helps inform translation workflow decisions by considering content type, language assets, quality requirements, and potential risk. Professional project and linguistic teams remain responsible for configuring the appropriate translation, review, quality, and delivery process.</p>
              <p>The goal is not simply to generate translated text. It is to deliver multilingual content that is appropriate for its audience, consistent with approved language, technically intact, and ready for its intended use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <div className="heading-group heading-group--editorial">
            <h2 className="h2">Built for New York Teams. Powered by Global Translation Infrastructure.</h2>
            <p className="lead">A New York organization may need to translate one contract today and launch a website, software release, training program, or regulated product across 20 markets tomorrow.</p>
            <p className="lead" style={{marginTop: 12}}>Stepes combines centralized service and technology with a global network of native-language professionals so multilingual programs can scale without losing terminology, quality, visibility, or operational control.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((c) => <article className="capability" key={c.title}><div className="icon-box icon-box--accent-dark"><Icon name={c.icon}/></div><h3 className="h3">{c.title}</h3><p>{c.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="shell">
          <div className="quality-grid">
            <div className="heading-group heading-group--editorial">
              <p className="eyebrow">Quality by Design</p>
              <h2 className="h2">Quality and Security for Business-Critical Translation</h2>
              <p className="lead">Translation quality is not something that should be inspected only at the end of a project. It begins with understanding what the content is for, who will use it, what terminology matters, and what could happen if the translation is incomplete or incorrect.</p>
              <p className="lead" style={{marginTop: 12}}>Stepes builds quality controls throughout the translation lifecycle.</p>
              <LinkText href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</LinkText>
            </div>
            <div className="quality-list">
              {quality.map(([title, text]) => <article className="quality-item" key={title}><h3 className="h3">{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
          <div className="trust-grid">
            <article className="trust-panel">
              <p className="eyebrow">ISO-Certified Processes</p>
              <h3 className="h3">International Standards for Translation Quality</h3>
              <p>Stepes supports enterprise translation programs with ISO-certified quality processes and documented workflows designed for consistent multilingual delivery.</p>
              <div className="iso-row" aria-label="Stepes ISO certifications">
                <div className="iso-item"><span className="iso-name">ISO 9001</span><span className="iso-label">Quality management</span></div>
                <div className="iso-item"><span className="iso-name">ISO 17100</span><span className="iso-label">Translation services</span></div>
                <div className="iso-item"><span className="iso-name">ISO 13485</span><span className="iso-label">Medical device quality</span></div>
              </div>
              <LinkText href="https://www.stepes.com/iso-certified-translation-services/">View ISO Certifications</LinkText>
            </article>
            <article className="trust-panel">
              <p className="eyebrow">Sensitive Content</p>
              <h3 className="h3">Protecting Sensitive Business Content</h3>
              <p>Legal, financial, life sciences, corporate, and technology projects may contain confidential, regulated, personal, commercially sensitive, or unreleased information. Stepes can establish project-specific requirements for controlled file access, confidentiality, approved translation workflows, reviewer permissions, secure delivery, language assets, and retention based on the needs of the engagement.</p>
              <p>Organizations with specific security, vendor-management, privacy, or data-handling requirements can review them with the Stepes team before project launch.</p>
              <LinkText href="https://www.stepes.com/security/">Explore Translation Security</LinkText>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell language-grid">
          <div className="heading-group heading-group--editorial">
            <h2 className="h2">Professional Translation in 100+ Languages</h2>
            <p className="lead">New York connects businesses, professionals, customers, and communities from around the world. Stepes supports professional translation and localization in more than 100 languages and regional variants for global business, regulated content, digital experiences, and multilingual communication.</p>
            <LinkText href="https://www.stepes.com/translation-languages/">Explore All Translation Languages</LinkText>
          </div>
          <div>
            <div className="language-list">{languages.map((l) => <div className="language-item" key={l}>{l}</div>)}</div>
            <div className="locale-panel" style={{marginTop: 28}}>
              <h3 className="h3">Locale-Specific Translation Matters</h3>
              <p>Selecting the correct locale matters. Vocabulary, spelling, terminology, dates, units, currencies, formatting conventions, tone, and cultural expectations can vary significantly between countries and regions that share a language.</p>
              <p>Stepes matches language resources to the required locale and target audience so translated content is prepared for the market where it will actually be used.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="heading-group heading-group--center">
            <p className="eyebrow">Live Language Support</p>
            <h2 className="h2">Interpreting Services Across New York</h2>
            <p className="lead">When multilingual communication happens live, professional interpreters help participants communicate clearly in real time. Stepes supports interpreting for New York organizations across business, legal, financial, healthcare, technology, training, customer service, and event settings.</p>
          </div>
          <div className="interpret-grid">
            <article className="interpret-item"><div className="icon-box icon-box--accent"><Icon name="onsite"/></div><h3 className="h3">On-Site Interpreting</h3><p>For in-person meetings, medical appointments, legal matters, site visits, facility tours, training, demonstrations, interviews, and other situations where the interpreter needs to be physically present.</p><LinkText href="https://www.stepes.com/on-site-interpretater-services/">Explore On-Site Interpreting</LinkText></article>
            <article className="interpret-item"><div className="icon-box icon-box--accent"><Icon name="remote"/></div><h3 className="h3">Phone & Video Interpreting</h3><p>Connect participants with professional interpreters remotely for scheduled or on-demand multilingual conversations, including customer service, consultations, employee communication, telehealth, legal interviews, financial discussions, and distributed teams.</p><LinkText href="https://www.stepes.com/interpretation-services/">Explore Remote Interpreting</LinkText></article>
            <article className="interpret-item"><div className="icon-box icon-box--accent"><Icon name="event"/></div><h3 className="h3">Conference & Event Interpreting</h3><p>Support conferences, executive meetings, webinars, town halls, training programs, hybrid events, and multilingual audience communication with interpreting solutions configured for the format and event requirements.</p><LinkText href="https://www.stepes.com/conference-event-interpreting/">Explore Conference & Event Interpreting</LinkText></article>
          </div>
          <p className="interpret-note">Interpreter availability depends on the language, regional variety, subject specialization, requested credentials, delivery format, location, schedule, and engagement requirements. Advance scheduling is recommended for specialized assignments and less commonly requested languages.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell ny-support-grid">
          <NewYorkGraphic />
          <div className="ny-support-content">
            <div className="heading-group heading-group--editorial">
              <h2 className="h2">Supporting Global Organizations Across New York</h2>
              <p className="lead">Across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and the greater New York metropolitan area, Stepes helps businesses communicate with international customers, employees, partners, regulators, investors, and markets.</p>
            </div>
            <div className="ny-use-list">
              {["Enter new international markets", "Serve multilingual customers and communities", "Translate legal and financial information", "Launch global websites and digital products", "Support international clinical and regulatory programs", "Communicate across global workforces", "Localize marketing and customer experiences", "Manage recurring multilingual content"].map(x => <div className="ny-use" key={x}>{x}</div>)}
            </div>
            <p className="body-copy" style={{marginTop: 24}}>Whether your team needs a single document translated or an ongoing enterprise localization program, Stepes can configure the appropriate combination of professional linguists, AI-enabled technology, language assets, quality controls, production support, and project management.</p>
          </div>
        </div>
      </section>

      <section className="section section--burgundy">
        <div className="shell">
          <div className="enterprise-intro">
            <p className="eyebrow">Recurring Global Content</p>
            <h2 className="h2">Built for Enterprise Translation at Scale</h2>
            <p className="lead">Global content rarely stays static. Contracts are revised. Product interfaces change. Websites publish new pages. Regulations evolve. Training is updated. Marketing campaigns launch. Technical documentation moves through new versions.</p>
            <p className="lead" style={{marginTop: 12}}>Stepes helps organizations move beyond disconnected translation projects by creating reusable multilingual infrastructure.</p>
          </div>
          <div className="enterprise-grid">
            {enterprise.map(([title, text]) => <article className="enterprise-item" key={title}><h3 className="h3">{title}</h3><p>{text}</p></article>)}
          </div>
          <p className="enterprise-summary">The result is a translation program that stays more consistent and manageable as content volumes, teams, languages, and release cycles grow.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="heading-group heading-group--center">
            <h2 className="h2">New York Translation Services FAQs</h2>
            <p className="lead">Answers to common questions about professional translation, certified translation, languages, interpreting, industry expertise, and AI-enabled workflows in New York.</p>
          </div>
          <div className="faq-wrap">
            {faqs.map((f, i) => (
              <details className="faq-item" key={f.q} open={i === 0}>
                <summary>{f.q}<span className="faq-plus" aria-hidden="true" /></summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-wrap">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2 className="h2">Ready to Communicate With Your Global Audience?</h2>
              <p>Whether you need to translate a financial report, legal document, website, software product, clinical program, marketing campaign, or an entire multilingual content operation, Stepes helps New York organizations communicate across languages with professional expertise, scalable technology, and quality controls built for global business.</p>
              <p>Translate into 100+ languages with professional linguists, AI-enabled workflows, terminology management, and multilingual quality assurance.</p>
            </div>
            <div className="cta-row">
              <a className="btn btn--primary" href="https://app.stepes.com/quote/"><span>Get an Instant Quote</span><Arrow /></a>
              <a className="btn btn--secondary" href="https://www.stepes.com/contact-us/">Talk to a Translation Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
