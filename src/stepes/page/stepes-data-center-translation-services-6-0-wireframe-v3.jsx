const styles = `

:root {
  --magenta: #C11D63;
  --magenta-dark: #A71954;
  --burgundy: #7A1542;
  --blush: #FDF2F7;
  --text: #485162;
  --heading: #171922;
  --muted: #697386;
  --line: #DDE2E8;
  --line-dark: #343945;
  --panel: #F6F7F9;
  --panel-2: #F1F3F6;
  --dark: #181B22;
  --dark-2: #222630;
  --white: #FFFFFF;
  --eyebrow-dark: #F2A7C6;
  --radius-lg: 30px;
  --radius-md: 22px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #fff; color: var(--text); font-family: Inter, "Inter Tight", Arial, sans-serif; }
a { color: inherit; }
.stepes-page { overflow: hidden; background: #fff; }
.stepes-shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
.stepes-section { padding: 96px 0; }
.stepes-section.dense { padding: 80px 0; }
.stepes-section.light { background: var(--panel); }
.stepes-section.blush { background: var(--blush); }
.stepes-section.dark { background: var(--dark); color: #EEF1F5; }
.stepes-section.dark .body,
.stepes-section.dark p,
.stepes-section.dark li { color: #D9DEE7; }
.stepes-section.dark h2,
.stepes-section.dark h3 { color: #fff; }
.stepes-section.dark .eyebrow { color: var(--eyebrow-dark); }

.eyebrow {
  margin: 0 0 14px;
  color: var(--magenta);
  font-size: 11px;
  line-height: 1.35;
  letter-spacing: .13em;
  text-transform: uppercase;
  font-weight: 600;
}
h1, h2, h3 { margin: 0; color: var(--heading); font-family: "Inter Tight", Inter, Arial, sans-serif; font-weight: 600; letter-spacing: -0.025em; }
h1 { font-size: 48px; line-height: 1.06; max-width: 720px; }
h2 { font-size: 36px; line-height: 1.12; }
h3 { font-size: 24px; line-height: 1.2; }
p { margin: 0; }
.body { color: var(--text); font-size: 17px; line-height: 1.72; }
.lead { color: var(--text); font-size: 18px; line-height: 1.72; }
.support { color: var(--muted); font-size: 14px; line-height: 1.55; }
.heading-group { max-width: 820px; margin-bottom: 48px; }
.heading-group.center { text-align: center; margin-left: auto; margin-right: auto; }
.heading-group.center .lead { max-width: 790px; margin: 20px auto 0; }
.heading-group .lead, .heading-group .body { margin-top: 18px; }

.hero { padding: 104px 0 92px; background: #fff; }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(420px, .96fr); gap: 68px; align-items: center; }
.hero .lead { max-width: 710px; margin-top: 24px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
.btn-primary, .btn-secondary {
  min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  padding: 12px 22px; border-radius: 999px; font-size: 16px; line-height: 1; font-weight: 600;
  text-decoration: none; transition: .18s ease; border: 1px solid transparent;
}
.btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible {
  color: #fff !important;
}
.btn-primary { background: var(--magenta); box-shadow: 0 8px 22px rgba(193,29,99,.16); }
.btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
.btn-secondary { background: #fff; border-color: #CBD2DC; color: var(--heading); }
.btn-secondary:hover { border-color: #AAB3C0; transform: translateY(-1px); }
.btn-primary:focus-visible, .btn-secondary:focus-visible, .editorial-link:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
.arrow { font-size: 18px; line-height: 1; }

.hero-visual { min-height: 500px; display: flex; align-items: center; justify-content: center; }
.hero-visual svg { width: 100%; height: auto; display: block; overflow: visible; }
.hero-proof { margin-top: 54px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: repeat(4, 1fr); }
.proof-item { padding: 24px 28px; min-height: 92px; }
.proof-item + .proof-item { border-left: 1px solid var(--line); }
.proof-title { color: var(--heading); font-size: 17px; font-weight: 600; margin-bottom: 6px; }
.proof-copy { color: var(--text); font-size: 16px; line-height: 1.55; }

.split-intro { display: grid; grid-template-columns: minmax(300px, .78fr) minmax(0, 1.22fr); gap: 76px; align-items: start; }
.split-intro .heading-group { margin-bottom: 0; position: sticky; top: 30px; }
.audience-list { border-top: 1px solid var(--line); }
.audience-row { display: grid; grid-template-columns: 220px 1fr; gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--line); }
.audience-row h3 { font-size: 20px; letter-spacing: -0.01em; }
.audience-row p { margin: 0; }

.lifecycle { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.lifecycle-step { position: relative; padding: 34px 24px 32px; min-height: 330px; }
.lifecycle-step + .lifecycle-step { border-left: 1px solid var(--line); }
.step-num { display: inline-block; color: var(--magenta); font-size: 13px; line-height: 1; letter-spacing: .08em; font-weight: 600; margin-bottom: 20px; }
.lifecycle-step h3 { font-size: 21px; margin-bottom: 14px; }
.lifecycle-step p { font-size: 16px; line-height: 1.65; color: var(--text); }

.editorial-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--magenta); font-size: 16px; font-weight: 600; text-decoration: none; margin-top: 22px; }
.editorial-link:hover { color: var(--magenta-dark); }
.editorial-link .arrow { transition: transform .18s ease; }
.editorial-link:hover .arrow { transform: translateX(3px); }

.systems-grid { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
.system-panel { padding: 44px; }
.system-panel + .system-panel { border-left: 1px solid var(--line); }
.system-panel h3 { margin-bottom: 16px; }
.system-panel .body { margin-bottom: 24px; }
.compact-list { margin: 0; padding: 0; list-style: none; columns: 2; column-gap: 26px; }
.compact-list li { position: relative; break-inside: avoid; padding: 0 0 10px 16px; color: var(--text); font-size: 16px; line-height: 1.5; }
.compact-list li::before { content: ""; position: absolute; left: 0; top: .68em; width: 5px; height: 5px; border-radius: 50%; background: #8D96A6; }

.proc-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
.proc { padding: 34px 34px 36px 0; }
.proc + .proc { padding-left: 34px; border-left: 1px solid var(--line-dark); }
.proc-code { color: var(--eyebrow-dark); font-size: 13px; font-weight: 600; letter-spacing: .09em; margin-bottom: 14px; }
.proc h3 { margin-bottom: 12px; }
.proc p { font-size: 16px; line-height: 1.68; }
.proc-list { margin: 16px 0 0; padding-left: 19px; }
.proc-list li { margin: 7px 0; font-size: 16px; line-height: 1.5; }
.risk-note { margin-top: 36px; padding: 26px 28px; border: 1px solid var(--line-dark); border-radius: var(--radius-md); background: var(--dark-2); display: grid; grid-template-columns: .62fr 1.38fr; gap: 28px; }
.risk-note strong { color: #fff; font-size: 18px; font-weight: 600; }

.commission-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 70px; align-items: start; }
.commission-path { margin-top: 28px; display: flex; flex-wrap: wrap; align-items: center; gap: 7px 10px; color: var(--heading); font-size: 16px; font-weight: 600; }
.commission-path .path-arrow { color: var(--magenta); font-size: 17px; font-weight: 600; }
.commission-groups { border-top: 1px solid var(--line); }
.commission-row { display: grid; grid-template-columns: 210px 1fr; gap: 28px; padding: 26px 0; border-bottom: 1px solid var(--line); }
.commission-row h3 { font-size: 20px; }
.inline-tags { display: flex; flex-wrap: wrap; gap: 9px 12px; }
.inline-tags span { font-size: 16px; color: var(--text); line-height: 1.5; }
.inline-tags span:not(:last-child)::after { content: "·"; color: #9AA3B1; margin-left: 12px; }

.controls-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 62px; align-items: center; }
.controls-copy .body { max-width: 650px; margin-top: 20px; }
.platform-list { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; border-top: 1px solid var(--line); }
.platform-item { padding: 18px 0; border-bottom: 1px solid var(--line); color: var(--heading); font-size: 16px; font-weight: 600; }
.control-mockup { border: 1px solid #D5DAE2; border-radius: var(--radius-lg); background: #fff; box-shadow: 0 20px 55px rgba(24,27,34,.08); overflow: hidden; }
.mock-top { height: 48px; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--line); background: #F8F9FB; }
.mock-top strong { color: var(--heading); font-size: 14px; font-weight: 600; }
.mock-top span { color: #727C8D; font-size: 13px; }
.mock-body { display: grid; grid-template-columns: 150px 1fr; min-height: 370px; }
.mock-nav { background: #20242D; color: #DDE2E9; padding: 20px 14px; }
.mock-nav div { padding: 10px 10px; border-radius: 9px; margin-bottom: 5px; font-size: 13px; }
.mock-nav .active { background: #343946; color: #fff; }
.mock-main { padding: 24px; }
.mock-label { color: #7B8493; font-size: 13px; margin-bottom: 5px; }
.mock-value { color: var(--heading); font-size: 22px; font-weight: 600; margin-bottom: 18px; }
.metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
.metric { border: 1px solid var(--line); border-radius: 14px; padding: 14px; }
.metric span { display: block; color: #7B8493; font-size: 12px; margin-bottom: 6px; }
.metric strong { color: var(--heading); font-size: 17px; }
.alarm { border: 1px solid #E4C9D5; background: var(--blush); border-radius: 14px; padding: 15px 16px; }
.alarm-top { display: flex; justify-content: space-between; gap: 14px; margin-bottom: 7px; }
.alarm-top strong { color: var(--heading); font-size: 14px; }
.alarm-top span { color: var(--magenta); font-size: 12px; font-weight: 600; }
.alarm p { color: var(--text); font-size: 16px; line-height: 1.5; }
.terms-row { margin-top: 18px; display: flex; flex-wrap: wrap; gap: 8px; }
.terms-row span { padding: 7px 10px; border-radius: 999px; background: #F2F4F7; color: #5D6675; font-size: 12px; }

.dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; }
.dual-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 38px; background: #fff; }
.dual-panel h3 { margin-bottom: 15px; }
.dual-panel .body { margin-bottom: 22px; }
.list-lines { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
.list-lines li { color: var(--text); font-size: 16px; line-height: 1.5; padding: 12px 0; border-bottom: 1px solid var(--line); }

.training-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 60px; align-items: center; }
.training-copy .body { margin-top: 20px; }
.training-types { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; }
.training-types span { padding: 10px 0; border-bottom: 1px solid #E8D7DF; color: var(--heading); font-size: 16px; font-weight: 600; }
.learning-flow { border-radius: var(--radius-lg); background: #fff; border: 1px solid #E7CFDA; padding: 34px; }
.learning-flow h3 { margin-bottom: 24px; }
.flow-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; align-items: center; }
.flow-node { position: relative; padding: 18px 10px; border: 1px solid var(--line); border-radius: 16px; text-align: center; color: var(--heading); font-size: 16px; font-weight: 600; min-height: 78px; display: flex; align-items: center; justify-content: center; }
.flow-node:not(:last-child)::after { content: "→"; position: absolute; right: -16px; top: 50%; transform: translateY(-50%); color: var(--magenta); font-weight: 600; z-index: 2; }
.learning-caption { margin-top: 20px; color: var(--text); font-size: 16px; line-height: 1.62; }

.future-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 76px; align-items: start; }
.future-stack { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
.future-item { padding: 24px 26px 24px 0; border-bottom: 1px solid var(--line); }
.future-item:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--line); }
.future-item h3 { font-size: 20px; margin-bottom: 10px; }
.future-item p { font-size: 16px; line-height: 1.62; }

.oem-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 66px; align-items: start; }
.oem-types { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px 34px; background: #fff; }
.oem-types h3 { margin-bottom: 18px; }
.oem-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
.oem-cloud span { border: 1px solid var(--line); border-radius: 999px; padding: 9px 13px; font-size: 16px; color: var(--text); background: #FAFBFC; }

.content-matrix { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; display: grid; grid-template-columns: repeat(3, 1fr); }
.content-group { padding: 30px; min-height: 275px; }
.content-group:nth-child(3n+2), .content-group:nth-child(3n+3) { border-left: 1px solid var(--line); }
.content-group:nth-child(n+4) { border-top: 1px solid var(--line); }
.content-group h3 { font-size: 20px; margin-bottom: 16px; }
.content-group ul { margin: 0; padding: 0; list-style: none; }
.content-group li { color: var(--text); font-size: 16px; line-height: 1.48; margin: 8px 0; }
.format-band { margin-top: 24px; border: 1px solid var(--line); border-radius: var(--radius-md); background: #FAFBFC; display: grid; grid-template-columns: repeat(4, 1fr); overflow: hidden; }
.format-group { padding: 22px 24px; }
.format-group + .format-group { border-left: 1px solid var(--line); }
.format-group strong { display: block; color: var(--heading); font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.format-group span { color: var(--text); font-size: 16px; line-height: 1.55; }

.term-wrap { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; padding: 38px; }
.term-flow { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; align-items: stretch; position: relative; }
.term-node { padding: 18px 12px; min-height: 92px; border-radius: 16px; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; text-align: center; color: var(--heading); font-size: 16px; font-weight: 600; background: #fff; }
.term-foundation { margin-top: 16px; border-radius: 16px; background: var(--blush); padding: 18px 22px; display: flex; justify-content: space-between; gap: 24px; align-items: center; border: 1px solid #ECD1DD; }
.term-foundation strong { color: var(--heading); font-size: 17px; font-weight: 600; }
.term-foundation span { color: var(--text); font-size: 16px; }
.term-links { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 22px; }

.workflow-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
.workflow-path { padding: 34px; }
.workflow-path:first-child { padding-left: 0; }
.workflow-path + .workflow-path { border-left: 1px solid var(--line-dark); }
.workflow-path .path-label { color: var(--eyebrow-dark); font-size: 11px; text-transform: uppercase; letter-spacing: .12em; font-weight: 600; margin-bottom: 13px; }
.workflow-path h3 { margin-bottom: 13px; }
.workflow-path p { font-size: 16px; line-height: 1.65; }
.workflow-path ul { padding-left: 18px; margin: 18px 0 0; }
.workflow-path li { font-size: 16px; line-height: 1.5; margin: 7px 0; }

.qa-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 52px; align-items: stretch; }
.qa-panel, .security-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 38px; background: #fff; }
.qa-panel h3, .security-panel h3 { margin-bottom: 15px; }
.qa-checks { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; margin-top: 24px; border-top: 1px solid var(--line); }
.qa-check { padding: 15px 0; border-bottom: 1px solid var(--line); color: var(--text); font-size: 16px; line-height: 1.45; }
.security-panel { background: #F8F4F6; border-color: #E7D7DE; }
.security-points { margin-top: 22px; }
.security-point { padding: 15px 0; border-top: 1px solid #E4D5DC; }
.security-point strong { display: block; color: var(--heading); font-size: 16px; margin-bottom: 6px; }
.security-point span { color: var(--text); font-size: 16px; line-height: 1.55; }

.global-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 76px; align-items: start; }
.global-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
.global-item { padding: 23px 25px 23px 0; border-bottom: 1px solid var(--line); }
.global-item:nth-child(even) { padding-left: 25px; border-left: 1px solid var(--line); }
.global-item h3 { font-size: 20px; margin-bottom: 9px; }
.global-item p { font-size: 16px; line-height: 1.6; }

.why-band { margin-top: 60px; border-radius: var(--radius-lg); background: var(--dark); padding: 42px; color: #fff; }
.why-band .eyebrow { color: var(--eyebrow-dark); }
.why-band h2 { color: #fff; max-width: 760px; }
.why-grid { margin-top: 30px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line-dark); }
.why-item { padding: 24px 26px 12px 0; border-bottom: 1px solid var(--line-dark); }
.why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { padding-left: 26px; border-left: 1px solid var(--line-dark); }
.why-item strong { display: block; color: #fff; font-size: 17px; margin-bottom: 7px; }
.why-item span { color: #D6DBE3; font-size: 16px; line-height: 1.56; }

.related-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); }
.related-link { min-height: 94px; display: flex; flex-direction: column; justify-content: center; padding: 20px 26px 20px 0; text-decoration: none; border-bottom: 1px solid var(--line); }
.related-link:nth-child(3n+2), .related-link:nth-child(3n+3) { padding-left: 26px; border-left: 1px solid var(--line); }
.related-link strong { color: var(--heading); font-size: 17px; font-weight: 600; margin-bottom: 6px; }
.related-link span { color: var(--magenta); font-size: 16px; font-weight: 600; }
.related-link:hover strong { color: var(--magenta-dark); }

.faq-panel { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line); }
details { border-bottom: 1px solid var(--line); }
summary { list-style: none; cursor: pointer; min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--heading); font-size: 18px; line-height: 1.4; font-weight: 600; padding: 18px 0; }
summary::-webkit-details-marker { display: none; }
summary::after { content: "+"; flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; border: 1px solid #CBD2DC; display: inline-flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 20px; font-weight: 400; }
details[open] summary::after { content: "–"; }
.faq-answer { padding: 0 52px 24px 0; color: var(--text); font-size: 17px; line-height: 1.72; max-width: 850px; }

.final-cta { padding: 88px 0; background: var(--blush); }
.final-cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: center; }
.final-cta h2 { max-width: 760px; }
.final-cta .lead { max-width: 840px; margin-top: 18px; }
.final-cta-actions { display: flex; justify-content: flex-end; }

@media (max-width: 1120px) {
  .stepes-shell { width: min(1280px, calc(100% - 80px)); }
  .hero-grid { grid-template-columns: 1fr .88fr; gap: 40px; }
  .hero-visual { min-height: 440px; }
  .lifecycle { grid-template-columns: repeat(3, 1fr); }
  .lifecycle-step:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
  .lifecycle-step:nth-child(5), .lifecycle-step:nth-child(6) { border-top: 1px solid var(--line); }
  .content-matrix { grid-template-columns: repeat(2, 1fr); }
  .format-band { grid-template-columns: repeat(2, 1fr); }
  .format-group:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
  .format-group:nth-child(4) { border-top: 1px solid var(--line); }
  .content-group:nth-child(3n+2), .content-group:nth-child(3n+3) { border-left: 0; }
  .content-group:nth-child(even) { border-left: 1px solid var(--line); }
  .content-group:nth-child(n+3) { border-top: 1px solid var(--line); }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { border-left: 0; padding-left: 0; }
  .why-item:nth-child(even) { border-left: 1px solid var(--line-dark); padding-left: 24px; }
  .term-flow { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 820px) {
  .stepes-shell { width: calc(100% - 48px); }
  .stepes-section { padding: 72px 0; }
  .stepes-section.dense { padding: 64px 0; }
  .hero { padding: 88px 0 72px; }
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
  h3 { font-size: 22px; }
  .heading-group.mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-group.mobile-center .lead { margin-left: auto; margin-right: auto; }
  .heading-group.mobile-center > .body { text-align: left; margin-left: 0; margin-right: 0; }
  .hero-grid, .split-intro, .commission-grid, .controls-grid, .training-grid, .future-grid, .oem-grid, .qa-grid, .global-grid { grid-template-columns: 1fr; gap: 42px; }
  .commission-path { justify-content: center; }
  .hero-visual { min-height: auto; max-width: 620px; margin: 0 auto; }
  .hero-proof { grid-template-columns: 1fr 1fr; }
  .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
  .proof-item:nth-child(4) { border-top: 1px solid var(--line); }
  .split-intro .heading-group { position: static; }
  .audience-row { grid-template-columns: 190px 1fr; }
  .systems-grid { grid-template-columns: 1fr; }
  .system-panel + .system-panel { border-left: 0; border-top: 1px solid var(--line); }
  .proc-grid, .workflow-grid { grid-template-columns: 1fr; }
  .proc, .proc + .proc, .workflow-path, .workflow-path:first-child { padding: 26px 0; border-left: 0; }
  .proc + .proc, .workflow-path + .workflow-path { border-top: 1px solid var(--line-dark); }
  .risk-note { grid-template-columns: 1fr; gap: 10px; }
  .mock-body { grid-template-columns: 130px 1fr; }
  .dual-grid { grid-template-columns: 1fr; }
  .future-stack, .global-list { grid-template-columns: 1fr; }
  .future-item, .future-item:nth-child(even), .global-item, .global-item:nth-child(even) { padding: 22px 0; border-left: 0; }
  .content-matrix { grid-template-columns: 1fr; }
  .format-band { grid-template-columns: 1fr; }
  .format-group, .format-group + .format-group { border-left: 0; }
  .format-group + .format-group { border-top: 1px solid var(--line); }
  .content-group, .content-group:nth-child(even) { border-left: 0; }
  .content-group:nth-child(n+2) { border-top: 1px solid var(--line); }
  .term-flow { grid-template-columns: repeat(2, 1fr); }
  .term-foundation { align-items: flex-start; flex-direction: column; gap: 8px; }
  .why-grid, .related-grid { grid-template-columns: 1fr 1fr; }
  .why-item:nth-child(even), .related-link:nth-child(3n+2), .related-link:nth-child(3n+3) { border-left: 0; padding-left: 0; }
  .why-item:nth-child(even), .related-link:nth-child(even) { border-left: 1px solid var(--line-dark); padding-left: 24px; }
  .related-link:nth-child(even) { border-left-color: var(--line); }
  .final-cta-inner { grid-template-columns: 1fr; gap: 28px; }
  .final-cta-actions { justify-content: flex-start; }
}

@media (max-width: 600px) {
  .stepes-shell { width: calc(100% - 40px); }
  .stepes-section { padding: 68px 0; }
  .stepes-section.dense { padding: 64px 0; }
  .hero { padding: 72px 0 64px; }
  h1 { font-size: 38px; line-height: 1.08; }
  h2 { font-size: 30px; line-height: 1.14; }
  h3 { font-size: 20px; }
  .lead, .body { font-size: 17px; }
  .heading-group { margin-bottom: 36px; }
  .heading-group.mobile-center, .heading-group.center { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-group.mobile-center .lead { margin-left: auto; margin-right: auto; }
  .heading-group.mobile-center > .body { text-align: left; margin-left: 0; margin-right: 0; }
  .hero-copy { text-align: center; }
  .hero .lead { margin-left: auto; margin-right: auto; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn-primary, .hero-actions .btn-secondary { width: 100%; }
  .hero-visual { margin-top: 4px; }
  .hero-proof { grid-template-columns: 1fr; }
  .proof-item, .proof-item + .proof-item { border-left: 0; border-top: 1px solid var(--line); padding: 19px 0; min-height: 0; }
  .proof-item:first-child { border-top: 0; }
  .audience-row { grid-template-columns: 1fr; gap: 8px; padding: 20px 0; }
  .lifecycle { grid-template-columns: 1fr; border-bottom: 0; }
  .lifecycle-step, .lifecycle-step:nth-child(4) { min-height: 0; padding: 24px 0; border-left: 0; border-top: 1px solid var(--line); }
  .lifecycle-step:first-child { border-top: 0; }
  .system-panel, .dual-panel, .term-wrap, .qa-panel, .security-panel, .why-band { padding: 28px 22px; }
  .compact-list { columns: 1; }
  .commission-row { grid-template-columns: 1fr; gap: 9px; padding: 22px 0; }
  .platform-list, .training-types { grid-template-columns: 1fr; }
  .control-mockup { border-radius: 22px; }
  .mock-body { grid-template-columns: 1fr; }
  .mock-nav { display: flex; flex-wrap: wrap; gap: 6px; overflow-x: visible; padding: 12px; }
  .mock-nav div { white-space: nowrap; margin: 0; }
  .metric-grid { grid-template-columns: 1fr; }
  .flow-row { grid-template-columns: 1fr; }
  .flow-node:not(:last-child)::after { content: "↓"; right: auto; left: 50%; top: auto; bottom: -20px; transform: translateX(-50%); }
  .flow-node { min-height: 64px; }
  .future-stack, .global-list, .term-flow, .why-grid, .related-grid { grid-template-columns: 1fr; }
  .future-item, .future-item:nth-child(even), .global-item, .global-item:nth-child(even), .why-item, .why-item:nth-child(even), .related-link, .related-link:nth-child(even) { border-left: 0; padding-left: 0; }
  .term-foundation { padding: 18px; }
  .qa-checks { grid-template-columns: 1fr; }
  .why-item:nth-child(n+2), .related-link:nth-child(n+2) { border-top: 0; }
  .faq-answer { padding-right: 8px; }
  summary { font-size: 17px; }
  .final-cta { padding: 72px 0; text-align: center; }
  .final-cta .lead { margin-left: auto; margin-right: auto; }
  .final-cta-actions { justify-content: center; }
  .final-cta-actions .btn-primary { width: 100%; }
}

@media (max-width: 360px) {
  .stepes-shell { width: calc(100% - 40px); }
  h1 { font-size: 38px; }
  .system-panel, .dual-panel, .term-wrap, .qa-panel, .security-panel, .why-band, .learning-flow { padding-left: 20px; padding-right: 20px; }
}

`;
const heroSvg = `

<svg viewBox="0 0 640 560" role="img" aria-label="Data center infrastructure illustration with server racks, power, cooling, and monitoring systems" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rackFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7F8FA"/><stop offset="1" stop-color="#ECEFF3"/></linearGradient>
    <linearGradient id="pinkFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FDF2F7"/><stop offset="1" stop-color="#F5DCE7"/></linearGradient>
  </defs>
  <rect x="70" y="72" width="500" height="404" rx="34" fill="#FFFFFF" stroke="#CBD1DA" stroke-width="2"/>
  <path d="M104 433H540" stroke="#AEB6C2" stroke-width="2"/>
  <path d="M126 107V433M514 107V433" stroke="#DEE2E8" stroke-width="1.5" stroke-dasharray="5 7"/>
  <g>
    <rect x="148" y="142" width="110" height="258" rx="13" fill="url(#rackFill)" stroke="#737D8B" stroke-width="2"/>
    <rect x="382" y="142" width="110" height="258" rx="13" fill="url(#rackFill)" stroke="#737D8B" stroke-width="2"/>
    <path d="M170 170H236M170 195H236M170 220H236M170 245H236M170 270H236M170 295H236M170 320H236M170 345H236" stroke="#707A88" stroke-width="2"/>
    <path d="M404 170H470M404 195H470M404 220H470M404 245H470M404 270H470M404 295H470M404 320H470M404 345H470" stroke="#707A88" stroke-width="2"/>
    <circle cx="245" cy="170" r="3.5" fill="#C11D63"/><circle cx="245" cy="195" r="3.5" fill="#8993A1"/><circle cx="245" cy="220" r="3.5" fill="#8993A1"/>
    <circle cx="479" cy="170" r="3.5" fill="#C11D63"/><circle cx="479" cy="195" r="3.5" fill="#8993A1"/><circle cx="479" cy="220" r="3.5" fill="#8993A1"/>
  </g>
  <g>
    <rect x="280" y="302" width="80" height="98" rx="14" fill="url(#pinkFill)" stroke="#C11D63" stroke-width="2"/>
    <path d="M300 328H340M300 347H340M300 366H326" stroke="#7A1542" stroke-width="2" stroke-linecap="round"/>
    <path d="M320 302V270" stroke="#C11D63" stroke-width="2"/>
    <circle cx="320" cy="261" r="10" fill="#fff" stroke="#C11D63" stroke-width="2"/>
  </g>
  <g>
    <path d="M101 198H130V112H286" fill="none" stroke="#8A94A2" stroke-width="2"/>
    <path d="M539 198H510V112H354" fill="none" stroke="#8A94A2" stroke-width="2"/>
    <rect x="272" y="93" width="96" height="40" rx="20" fill="#fff" stroke="#7E8896" stroke-width="2"/>
    <path d="M297 113H342" stroke="#C11D63" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g>
    <rect x="92" y="178" width="50" height="70" rx="10" fill="#fff" stroke="#7E8896" stroke-width="2"/>
    <path d="M106 207H128M117 192V222" stroke="#7E8896" stroke-width="2" stroke-linecap="round"/>
    <path d="M118 248V292H160" fill="none" stroke="#C11D63" stroke-width="2"/>
    <circle cx="168" cy="292" r="7" fill="#fff" stroke="#C11D63" stroke-width="2"/>
  </g>
  <g>
    <rect x="498" y="178" width="50" height="70" rx="10" fill="#fff" stroke="#7E8896" stroke-width="2"/>
    <path d="M510 194C537 198 537 228 510 232M537 194C510 198 510 228 537 232" fill="none" stroke="#7E8896" stroke-width="2"/>
    <path d="M522 248V292H480" fill="none" stroke="#C11D63" stroke-width="2"/>
    <circle cx="472" cy="292" r="7" fill="#fff" stroke="#C11D63" stroke-width="2"/>
  </g>
  <g>
    <rect x="232" y="438" width="176" height="62" rx="16" fill="#fff" stroke="#7E8896" stroke-width="2"/>
    <circle cx="260" cy="469" r="8" fill="#FDF2F7" stroke="#C11D63" stroke-width="2"/>
    <path d="M282 458H378M282 476H348" stroke="#7E8896" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g opacity=".95">
    <path d="M182 120C204 90 234 68 270 56" fill="none" stroke="#B3BAC5" stroke-width="1.7" stroke-dasharray="5 6"/>
    <circle cx="278" cy="54" r="6" fill="#fff" stroke="#C11D63" stroke-width="2"/>
    <path d="M458 120C436 90 406 68 370 56" fill="none" stroke="#B3BAC5" stroke-width="1.7" stroke-dasharray="5 6"/>
    <circle cx="362" cy="54" r="6" fill="#fff" stroke="#C11D63" stroke-width="2"/>
  </g>
</svg>

`;

export default function DataCenterTranslationServicesWireframe() {
  return (
    <>
      <style>{styles}</style>
      <main className="stepes-page">
        <section className="hero">
          <div className="stepes-shell">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">
                  MISSION-CRITICAL DATA CENTER INFRASTRUCTURE
                </p>
                <h1>
                  Data Center Translation Services for Mission-Critical Infrastructure
                </h1>
                <p className="lead">
                  Keep the systems, procedures, software, and people behind your data centers aligned across languages. Stepes translates the technical content required to design, build, commission, operate, maintain, and modernize data centers worldwide.
                </p>
                <div className="hero-actions">
                  <a className="btn-primary" href="https://app.stepes.com/quote/">
                    <span>
                      Get a Translation Quote
                    </span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                  <a className="btn-secondary" href="https://www.stepes.com/contact-sales/">
                    <span>
                      Talk to a Data Center Translation Specialist
                    </span>
                  </a>
                </div>
              </div>
              <div className="hero-visual" dangerouslySetInnerHTML={{ __html: heroSvg }} />
            </div>
            <div className="hero-proof">
              <div className="proof-item">
                <div className="proof-title">
                  100+ Languages
                </div>
                <div className="proof-copy">
                  Global and regional coverage for data center programs.
                </div>
              </div>
              <div className="proof-item">
                <div className="proof-title">
                  AI + Human Expertise
                </div>
                <div className="proof-copy">
                  Workflows matched to technical complexity and content risk.
                </div>
              </div>
              <div className="proof-item">
                <div className="proof-title">
                  Technical QA
                </div>
                <div className="proof-copy">
                  Terminology, numbers, units, warnings, references, and completeness.
                </div>
              </div>
              <div className="proof-item">
                <div className="proof-title">
                  Secure Workflows
                </div>
                <div className="proof-copy">
                  Controlled handling for sensitive technical and operational content.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="split-intro">
              <div className="heading-group mobile-center">
                <p className="eyebrow">
                  DATA CENTER OPERATIONS
                </p>
                <h2>
                  Translation Built for Mission-Critical Data Center Environments
                </h2>
                <p className="body">
                  A modern data center brings electrical infrastructure, mechanical systems, cooling, controls, monitoring software, operating procedures, maintenance programs, safety processes, and highly trained people together in one facility. Stepes helps keep the technical language connecting those systems consistent across markets.
                </p>
                <a className="editorial-link" href="https://www.stepes.com/industrial-translation-services/">
                  <span>
                    Industrial Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <div className="audience-list">
                <div className="audience-row">
                  <h3>
                    Data Center Owners &amp; Operators
                  </h3>
                  <p className="body">
                    Translate operating procedures, engineering content, maintenance documentation, controls, safety materials, and workforce training across individual facilities or global portfolios.
                  </p>
                </div>
                <div className="audience-row">
                  <h3>
                    Hyperscale &amp; Cloud Providers
                  </h3>
                  <p className="body">
                    Support rapid infrastructure expansion, changing technologies, large documentation libraries, global technical teams, and recurring content updates across languages.
                  </p>
                </div>
                <div className="audience-row">
                  <h3>
                    Colocation Providers
                  </h3>
                  <p className="body">
                    Localize facility documentation, operating procedures, customer information, service content, safety materials, software, and training for international operations.
                  </p>
                </div>
                <div className="audience-row">
                  <h3>
                    Engineering, EPC &amp; Construction Teams
                  </h3>
                  <p className="body">
                    Keep specifications, engineering documents, installation materials, commissioning procedures, and handover documentation understandable across multilingual project teams.
                  </p>
                </div>
                <div className="audience-row">
                  <h3>
                    Commissioning Providers
                  </h3>
                  <p className="body">
                    Translate commissioning plans, test procedures, integrated systems testing materials, issue documentation, reports, and turnover packages for projects worldwide.
                  </p>
                </div>
                <div className="audience-row">
                  <h3>
                    Data Center Equipment Manufacturers
                  </h3>
                  <p className="body">
                    Localize manuals, interfaces, specifications, training, service documentation, and product content for electrical, cooling, monitoring, and controls equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <p className="eyebrow">
                END-TO-END SUPPORT
              </p>
              <h2>
                Multilingual Support Across the Data Center Lifecycle
              </h2>
              <p className="lead">
                Keep engineering, installation, commissioning, operations, maintenance, and modernization content connected from initial design through years of facility operation.
              </p>
            </div>
            <div className="lifecycle">
              <div className="lifecycle-step">
                <span className="step-num">
                  01
                </span>
                <h3>
                  Design &amp; Engineering
                </h3>
                <p>
                  Basis-of-design documents, specifications, engineering reports, electrical and mechanical documentation, equipment schedules, drawings, datasheets, and control narratives.
                </p>
              </div>
              <div className="lifecycle-step">
                <span className="step-num">
                  02
                </span>
                <h3>
                  Construction &amp; Installation
                </h3>
                <p>
                  Installation manuals, work instructions, method statements, contractor documentation, site safety materials, inspection procedures, and technical submittals.
                </p>
              </div>
              <div className="lifecycle-step">
                <span className="step-num">
                  03
                </span>
                <h3>
                  Commissioning &amp; Handover
                </h3>
                <p>
                  Commissioning plans, checklists, start-up procedures, functional performance tests, integrated systems testing, reports, systems manuals, and handover packages.
                </p>
              </div>
              <div className="lifecycle-step">
                <span className="step-num">
                  04
                </span>
                <h3>
                  Operations
                </h3>
                <p>
                  SOPs, MOPs, EOPs, operating sequences, alarm-response procedures, control-room documentation, change control, escalation, and incident-response content.
                </p>
              </div>
              <div className="lifecycle-step">
                <span className="step-num">
                  05
                </span>
                <h3>
                  Maintenance
                </h3>
                <p>
                  O&amp;M manuals, preventive and corrective maintenance, inspections, troubleshooting guides, service manuals, schedules, work instructions, and spare-parts information.
                </p>
              </div>
              <div className="lifecycle-step">
                <span className="step-num">
                  06
                </span>
                <h3>
                  Upgrade &amp; Modernization
                </h3>
                <p>
                  Capacity expansion, cooling upgrades, power-system changes, liquid-cooling deployments, control-system modernization, retrofits, software updates, and revised training.
                </p>
              </div>
            </div>
            <a className="editorial-link" href="https://www.stepes.com/engineering-translation-services/">
              <span>
                Engineering Translation Services
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <p className="eyebrow">
                CRITICAL FACILITY SYSTEMS
              </p>
              <h2>
                Power and Cooling Translation for Data Center Infrastructure
              </h2>
              <p className="lead">
                Translate the electrical and thermal systems that keep facilities available, efficient, monitored, and serviceable across global teams.
              </p>
            </div>
            <div className="systems-grid">
              <article className="system-panel">
                <h3>
                  Power &amp; Electrical Systems
                </h3>
                <p className="body">
                  Stepes translates engineering, operating, maintenance, software, and training content for the equipment that delivers, distributes, protects, monitors, and backs up data center power.
                </p>
                <ul className="compact-list">
                  <li>
                    Utility power interfaces
                  </li>
                  <li>
                    Transformers
                  </li>
                  <li>
                    Switchgear
                  </li>
                  <li>
                    UPS systems
                  </li>
                  <li>
                    Generators
                  </li>
                  <li>
                    Battery systems
                  </li>
                  <li>
                    Automatic transfer switches
                  </li>
                  <li>
                    Static transfer switches
                  </li>
                  <li>
                    Power distribution units
                  </li>
                  <li>
                    Rack power distribution
                  </li>
                  <li>
                    Electrical protection
                  </li>
                  <li>
                    Grounding and bonding
                  </li>
                  <li>
                    Single-line diagrams
                  </li>
                  <li>
                    Power monitoring
                  </li>
                  <li>
                    Energy storage systems
                  </li>
                  <li>
                    Electrical controls and alarms
                  </li>
                </ul>
                <a className="editorial-link" href="https://www.stepes.com/energy-translation-services/">
                  <span>
                    Energy Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
              <article className="system-panel">
                <h3>
                  Cooling &amp; Thermal Management
                </h3>
                <p className="body">
                  Support conventional and next-generation cooling architectures as compute densities rise, including the documentation, controls, procedures, and technician content surrounding thermal systems.
                </p>
                <ul className="compact-list">
                  <li>
                    Chillers
                  </li>
                  <li>
                    Cooling towers
                  </li>
                  <li>
                    CRAH systems
                  </li>
                  <li>
                    CRAC systems
                  </li>
                  <li>
                    Air handling equipment
                  </li>
                  <li>
                    Pumps
                  </li>
                  <li>
                    Heat exchangers
                  </li>
                  <li>
                    Economizers
                  </li>
                  <li>
                    Airflow management
                  </li>
                  <li>
                    Containment systems
                  </li>
                  <li>
                    Environmental monitoring
                  </li>
                  <li>
                    Cooling-water systems
                  </li>
                  <li>
                    Liquid cooling
                  </li>
                  <li>
                    Direct-to-chip cooling
                  </li>
                  <li>
                    Coolant distribution units
                  </li>
                  <li>
                    Rear-door heat exchangers
                  </li>
                </ul>
                <a className="editorial-link" href="https://www.stepes.com/technical-translation-services/">
                  <span>
                    Technical Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="stepes-section dark">
          <div className="stepes-shell">
            <div className="heading-group mobile-center">
              <h2>
                Accurate Translation of SOPs, MOPs and EOPs
              </h2>
              <p className="lead">
                Operating procedures turn engineering knowledge into repeatable actions. When instructions direct technicians to start, stop, isolate, switch, inspect, restore, or troubleshoot critical equipment, meaning and procedural sequence must remain clear in every language.
              </p>
            </div>
            <div className="proc-grid">
              <article className="proc">
                <div className="proc-code">
                  SOP
                </div>
                <h3>
                  Standard Operating Procedures
                </h3>
                <p>
                  Routine and recurring facility operations, including equipment operation, inspections, shift procedures, normal start-up and shutdown activities, monitoring, and normal operating conditions.
                </p>
                <ul className="proc-list">
                  <li>
                    Equipment operation
                  </li>
                  <li>
                    Routine inspections
                  </li>
                  <li>
                    Shift procedures
                  </li>
                  <li>
                    Normal start-up / shutdown
                  </li>
                  <li>
                    Monitoring and facility tasks
                  </li>
                </ul>
              </article>
              <article className="proc">
                <div className="proc-code">
                  MOP
                </div>
                <h3>
                  Methods of Procedure
                </h3>
                <p>
                  Structured, step-by-step instructions for planned work that may affect equipment or facility operating state.
                </p>
                <ul className="proc-list">
                  <li>
                    Electrical switching
                  </li>
                  <li>
                    Planned maintenance
                  </li>
                  <li>
                    System isolation and restoration
                  </li>
                  <li>
                    Component replacement
                  </li>
                  <li>
                    Testing and capacity work
                  </li>
                </ul>
              </article>
              <article className="proc">
                <div className="proc-code">
                  EOP
                </div>
                <h3>
                  Emergency Operating Procedures
                </h3>
                <p>
                  Procedures used during abnormal conditions, equipment failures, alarms, and emergency events.
                </p>
                <ul className="proc-list">
                  <li>
                    Loss of utility power
                  </li>
                  <li>
                    Cooling-system events
                  </li>
                  <li>
                    Equipment failure
                  </li>
                  <li>
                    Emergency shutdown
                  </li>
                  <li>
                    System recovery and escalation
                  </li>
                </ul>
              </article>
            </div>
            <div className="risk-note">
              <strong>
                Preserve procedures, not just words.
              </strong>
              <p className="body">
                Stepes also supports site configuration procedures (SCPs), switching instructions, change-control documentation, maintenance procedures, and incident-response plans. Technical review can address equipment terminology, prerequisites, warnings and cautions, numbered steps, units, cross-references, acronyms, formatting, and completeness according to the content’s intended use and operational risk.
              </p>
            </div>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="commission-grid">
              <div className="heading-group mobile-center">
                <h2>
                  Multilingual Commissioning for Global Data Center Projects
                </h2>
                <p className="body">
                  Commissioning brings together design intent, equipment performance, controls, testing, documentation, and facility operations. Stepes helps owners, engineers, contractors, commissioning providers, OEMs, and operations teams work from consistent multilingual requirements and results.
                </p>
                <div className="commission-path" aria-label="Commissioning progression">
                  <span>Plan</span><span className="path-arrow" aria-hidden="true">→</span>
                  <span>Verify</span><span className="path-arrow" aria-hidden="true">→</span>
                  <span>Integrate</span><span className="path-arrow" aria-hidden="true">→</span>
                  <span>Handover</span>
                </div>
              </div>
              <div className="commission-groups">
                <div className="commission-row">
                  <h3>
                    Commissioning Planning
                  </h3>
                  <div className="inline-tags">
                    <span>
                      Commissioning plans
                    </span>
                    <span>
                      Specifications
                    </span>
                    <span>
                      Roles and responsibilities
                    </span>
                    <span>
                      Schedules
                    </span>
                    <span>
                      Testing protocols
                    </span>
                    <span>
                      Documentation requirements
                    </span>
                  </div>
                </div>
                <div className="commission-row">
                  <h3>
                    Pre-Functional &amp; Functional Testing
                  </h3>
                  <div className="inline-tags">
                    <span>
                      Equipment checklists
                    </span>
                    <span>
                      Installation verification
                    </span>
                    <span>
                      Start-up procedures
                    </span>
                    <span>
                      Functional performance tests
                    </span>
                    <span>
                      Test scripts
                    </span>
                    <span>
                      Acceptance criteria
                    </span>
                  </div>
                </div>
                <div className="commission-row">
                  <h3>
                    Integrated Systems Testing
                  </h3>
                  <div className="inline-tags">
                    <span>
                      Integrated test procedures
                    </span>
                    <span>
                      Scenario scripts
                    </span>
                    <span>
                      Emergency-condition testing
                    </span>
                    <span>
                      Sequence validation
                    </span>
                    <span>
                      System-response records
                    </span>
                    <span>
                      Issue tracking
                    </span>
                  </div>
                </div>
                <div className="commission-row">
                  <h3>
                    Closeout &amp; Handover
                  </h3>
                  <div className="inline-tags">
                    <span>
                      Deficiency logs
                    </span>
                    <span>
                      Punch lists
                    </span>
                    <span>
                      Corrective actions
                    </span>
                    <span>
                      Commissioning reports
                    </span>
                    <span>
                      Systems manuals
                    </span>
                    <span>
                      Acceptance and handover packages
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="controls-grid">
              <div className="controls-copy">
                <p className="eyebrow">
                  CONNECTED OPERATIONS
                </p>
                <h2>
                  Localize DCIM, BMS, EPMS, SCADA and Facility Software
                </h2>
                <p className="body">
                  Modern data centers depend on software and controls to monitor equipment, visualize operating conditions, manage alarms, analyze performance, coordinate maintenance, and support facility personnel. Stepes localizes interfaces and supporting documentation as one connected multilingual system.
                </p>
                <div className="platform-list">
                  <div className="platform-item">
                    DCIM platforms
                  </div>
                  <div className="platform-item">
                    Building management systems
                  </div>
                  <div className="platform-item">
                    Electrical power monitoring systems
                  </div>
                  <div className="platform-item">
                    SCADA &amp; industrial controls
                  </div>
                  <div className="platform-item">
                    Equipment HMIs
                  </div>
                  <div className="platform-item">
                    Field &amp; maintenance applications
                  </div>
                </div>
                <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">
                  <span>
                    Software Localization Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/industrial-automation-translation/">
                  <span>
                    Industrial Automation Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <div className="control-mockup" aria-label="Illustrative multilingual data center monitoring interface">
                <div className="mock-top">
                  <strong>
                    Facility Operations
                  </strong>
                  <span>
                    Localized facility view · German
                  </span>
                </div>
                <div className="mock-body">
                  <div className="mock-nav">
                    <div className="active">
                      Overview
                    </div>
                    <div>
                      Power
                    </div>
                    <div>
                      Cooling
                    </div>
                    <div>
                      Alarms
                    </div>
                    <div>
                      Maintenance
                    </div>
                  </div>
                  <div className="mock-main">
                    <div className="mock-label">
                      FACILITY STATUS
                    </div>
                    <div className="mock-value">
                      Normalbetrieb
                    </div>
                    <div className="metric-grid">
                      <div className="metric">
                        <span>
                          UPS Load
                        </span>
                        <strong>
                          68%
                        </strong>
                      </div>
                      <div className="metric">
                        <span>
                          Supply Air
                        </span>
                        <strong>
                          20.8 °C
                        </strong>
                      </div>
                      <div className="metric">
                        <span>
                          PUE
                        </span>
                        <strong>
                          1.24
                        </strong>
                      </div>
                    </div>
                    <div className="alarm">
                      <div className="alarm-top">
                        <strong>
                          CRAH-04 Filter Differential Pressure
                        </strong>
                        <span>
                          WARNING
                        </span>
                      </div>
                      <p>
                        Filterdifferenzdruck über Schwellenwert. Wartungsanweisung prüfen.
                      </p>
                    </div>
                    <div className="terms-row">
                      <span>
                        Terminology aligned
                      </span>
                      <span>
                        Units preserved
                      </span>
                      <span>
                        Alarm reviewed
                      </span>
                      <span>
                        UI fit checked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <h2>
                Data Center Operations, Maintenance and Safety Translation
              </h2>
              <p className="lead">
                Support the people who inspect, service, troubleshoot, repair, and operate data center infrastructure long after construction and commissioning are complete.
              </p>
            </div>
            <div className="dual-grid">
              <article className="dual-panel">
                <h3>
                  Operations &amp; Maintenance Documentation
                </h3>
                <p className="body">
                  Use shared terminology and translation memory as equipment changes, lessons learned, software releases, and facility upgrades create recurring documentation revisions.
                </p>
                <ul className="list-lines">
                  <li>
                    O&amp;M manuals
                  </li>
                  <li>
                    Preventive maintenance programs
                  </li>
                  <li>
                    Predictive maintenance content
                  </li>
                  <li>
                    Inspection procedures
                  </li>
                  <li>
                    Maintenance schedules
                  </li>
                  <li>
                    Troubleshooting instructions
                  </li>
                  <li>
                    Repair procedures
                  </li>
                  <li>
                    Calibration instructions
                  </li>
                  <li>
                    Field-service manuals
                  </li>
                  <li>
                    Work instructions
                  </li>
                  <li>
                    Spare-parts catalogs
                  </li>
                  <li>
                    Service bulletins
                  </li>
                </ul>
                <a className="editorial-link" href="https://www.stepes.com/mro-translation-services/">
                  <span>
                    MRO Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
              <article className="dual-panel">
                <h3>
                  Data Center Safety Translation
                </h3>
                <p className="body">
                  Translate safety-related content with the level of professional review appropriate to the material’s intended use, technical complexity, and risk.
                </p>
                <ul className="list-lines">
                  <li>
                    Electrical safety procedures
                  </li>
                  <li>
                    Lockout/tagout documentation
                  </li>
                  <li>
                    Equipment safety instructions
                  </li>
                  <li>
                    PPE requirements
                  </li>
                  <li>
                    Hazard communication
                  </li>
                  <li>
                    Contractor safety
                  </li>
                  <li>
                    Emergency response
                  </li>
                  <li>
                    Fire-safety documentation
                  </li>
                  <li>
                    Battery-safety content
                  </li>
                  <li>
                    Chemical-handling instructions
                  </li>
                  <li>
                    Safety training
                  </li>
                  <li>
                    Warning labels and notices
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="stepes-section blush">
          <div className="stepes-shell">
            <div className="training-grid">
              <div className="training-copy">
                <p className="eyebrow">
                  WORKFORCE READINESS
                </p>
                <h2>
                  Train Data Center Technicians in Their Language
                </h2>
                <p className="body">
                  Facility reliability depends on people who can operate, inspect, maintain, troubleshoot, and restore critical systems. Stepes localizes complete technical learning experiences while keeping the language technicians learn aligned with the equipment, interfaces, manuals, and procedures they use on the job.
                </p>
                <div className="training-types">
                  <span>
                    Technical training
                  </span>
                  <span>
                    Safety training
                  </span>
                  <span>
                    Operational training
                  </span>
                  <span>
                    Articulate Storyline
                  </span>
                  <span>
                    Rise 360
                  </span>
                  <span>
                    Video &amp; voiceover
                  </span>
                  <span>
                    Assessments
                  </span>
                  <span>
                    LMS-ready learning
                  </span>
                </div>
                <a className="editorial-link" href="https://www.stepes.com/elearning-training-translation-services/">
                  <span>
                    eLearning Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <div className="learning-flow">
                <h3>
                  One Vocabulary From Equipment to Training
                </h3>
                <div className="flow-row">
                  <div className="flow-node">
                    Equipment
                  </div>
                  <div className="flow-node">
                    Interfaces
                  </div>
                  <div className="flow-node">
                    Manuals
                  </div>
                  <div className="flow-node">
                    Procedures
                  </div>
                  <div className="flow-node">
                    Training
                  </div>
                </div>
                <p className="learning-caption">
                  Keep component names, commands, operating states, alarm terminology, maintenance actions, warnings, and procedures consistent from the equipment itself through technician learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="future-grid">
              <div className="heading-group mobile-center">
                <p className="eyebrow">
                  NEXT-GENERATION INFRASTRUCTURE
                </p>
                <h2>
                  Translation for AI, Hyperscale and High-Density Data Centers
                </h2>
                <p className="body">
                  AI and high-performance computing are changing how data centers are powered, cooled, commissioned, monitored, and operated. Stepes helps global teams keep rapidly changing technical documentation, software, procedures, and training synchronized across languages.
                </p>
              </div>
              <div className="future-stack">
                <article className="future-item">
                  <h3>
                    AI &amp; HPC Facilities
                  </h3>
                  <p className="body">
                    Support documentation for accelerated-computing, GPU-intensive, and other high-density environments.
                  </p>
                </article>
                <article className="future-item">
                  <h3>
                    Advanced Power Infrastructure
                  </h3>
                  <p className="body">
                    Translate specifications, manuals, controls, procedures, and training for evolving power-distribution and backup systems.
                  </p>
                </article>
                <article className="future-item">
                  <h3>
                    Liquid Cooling
                  </h3>
                  <p className="body">
                    Support direct-to-chip cooling, coolant distribution, rear-door heat exchange, facility water systems, and related thermal technologies.
                  </p>
                </article>
                <article className="future-item">
                  <h3>
                    Controls &amp; Monitoring
                  </h3>
                  <p className="body">
                    Localize monitoring platforms, alarms, dashboards, analytics, equipment interfaces, and operational content as systems become more connected.
                  </p>
                </article>
                <article className="future-item">
                  <h3>
                    Commissioning &amp; Validation
                  </h3>
                  <p className="body">
                    Translate test procedures, scenarios, results, and technical documentation as new architectures are brought into service.
                  </p>
                </article>
                <article className="future-item">
                  <h3>
                    Retrofit &amp; Modernization
                  </h3>
                  <p className="body">
                    Keep documentation current as existing facilities add capacity, upgrade power, introduce new cooling technologies, or adapt to new compute requirements.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="oem-grid">
              <div>
                <h2>
                  Take Mission-Critical Data Center Equipment to Global Markets
                </h2>
                <p className="body" style={{ marginTop: 20 }}>
                  Localize specifications, installation instructions, commissioning guides, software, operating manuals, maintenance procedures, service information, training, product websites, and technical support through a coordinated multilingual workflow.
                </p>
                <a className="editorial-link" href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">
                  <span>
                    Technical Manual Translation Services
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
              <div className="oem-types">
                <h3>
                  Infrastructure We Support
                </h3>
                <div className="oem-cloud">
                  <span>
                    UPS systems
                  </span>
                  <span>
                    Switchgear
                  </span>
                  <span>
                    Transformers
                  </span>
                  <span>
                    Generators
                  </span>
                  <span>
                    Power distribution
                  </span>
                  <span>
                    Energy storage
                  </span>
                  <span>
                    Cooling equipment
                  </span>
                  <span>
                    Liquid-cooling systems
                  </span>
                  <span>
                    Pumps &amp; heat exchangers
                  </span>
                  <span>
                    Racks &amp; enclosures
                  </span>
                  <span>
                    Monitoring equipment
                  </span>
                  <span>
                    Sensors
                  </span>
                  <span>
                    Facility controls
                  </span>
                  <span>
                    Power-management systems
                  </span>
                  <span>
                    Data center software
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <h2>
                Data Center Documents and Content We Translate
              </h2>
              <p className="lead">
                Coordinate language assets, terminology, quality requirements, and review across the different systems and file types that support data center projects and operations.
              </p>
            </div>
            <div className="content-matrix">
              <article className="content-group">
                <h3>
                  Engineering &amp; Project Documentation
                </h3>
                <ul>
                  <li>
                    Engineering specifications
                  </li>
                  <li>
                    Basis-of-design documents
                  </li>
                  <li>
                    Drawings and annotations
                  </li>
                  <li>
                    Technical reports
                  </li>
                  <li>
                    Equipment schedules
                  </li>
                  <li>
                    Datasheets
                  </li>
                  <li>
                    Construction documentation
                  </li>
                </ul>
              </article>
              <article className="content-group">
                <h3>
                  Commissioning
                </h3>
                <ul>
                  <li>
                    Commissioning plans
                  </li>
                  <li>
                    Pre-functional checklists
                  </li>
                  <li>
                    Functional performance tests
                  </li>
                  <li>
                    Integrated systems tests
                  </li>
                  <li>
                    Test scripts
                  </li>
                  <li>
                    Commissioning reports
                  </li>
                  <li>
                    Handover packages
                  </li>
                </ul>
              </article>
              <article className="content-group">
                <h3>
                  Operations
                </h3>
                <ul>
                  <li>
                    SOPs
                  </li>
                  <li>
                    MOPs
                  </li>
                  <li>
                    EOPs
                  </li>
                  <li>
                    Site configuration procedures
                  </li>
                  <li>
                    Operating sequences
                  </li>
                  <li>
                    Switching procedures
                  </li>
                  <li>
                    Incident-response content
                  </li>
                </ul>
              </article>
              <article className="content-group">
                <h3>
                  Maintenance
                </h3>
                <ul>
                  <li>
                    O&amp;M manuals
                  </li>
                  <li>
                    Preventive maintenance
                  </li>
                  <li>
                    Inspection procedures
                  </li>
                  <li>
                    Troubleshooting guides
                  </li>
                  <li>
                    Service manuals
                  </li>
                  <li>
                    Work instructions
                  </li>
                  <li>
                    Spare-parts documentation
                  </li>
                </ul>
              </article>
              <article className="content-group">
                <h3>
                  Controls &amp; Software
                </h3>
                <ul>
                  <li>
                    DCIM
                  </li>
                  <li>
                    BMS
                  </li>
                  <li>
                    EPMS
                  </li>
                  <li>
                    SCADA
                  </li>
                  <li>
                    HMIs
                  </li>
                  <li>
                    Dashboards
                  </li>
                  <li>
                    Alarm messages
                  </li>
                  <li>
                    Field-service tools
                  </li>
                </ul>
              </article>
              <article className="content-group">
                <h3>
                  Training &amp; Safety
                </h3>
                <ul>
                  <li>
                    Technician courses
                  </li>
                  <li>
                    eLearning
                  </li>
                  <li>
                    Videos and voiceover
                  </li>
                  <li>
                    Assessments
                  </li>
                  <li>
                    Safety procedures
                  </li>
                  <li>
                    Emergency-response content
                  </li>
                  <li>
                    Warnings and labels
                  </li>
                </ul>
              </article>
            </div>
            <div className="format-band">
              <div className="format-group">
                <strong>
                  Office &amp; Technical
                </strong>
                <span>
                  Word, Excel, PowerPoint, PDF, and structured technical documents.
                </span>
              </div>
              <div className="format-group">
                <strong>
                  Technical Publishing
                </strong>
                <span>
                  InDesign, FrameMaker, XML, DITA, HTML, diagrams, callouts, and multilingual publishing.
                </span>
              </div>
              <div className="format-group">
                <strong>
                  Software &amp; Controls
                </strong>
                <span>
                  XML, JSON, XLIFF, CSV, RESX, PO, properties files, and other localization resources.
                </span>
              </div>
              <div className="format-group">
                <strong>
                  Training &amp; Multimedia
                </strong>
                <span>
                  Storyline, Rise 360, video, audio, subtitle files, SCORM, and related course assets.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <h2>
                One Multilingual Terminology System Across Your Data Center
              </h2>
              <p className="lead">
                Reduce inconsistent translations for the same equipment, operating state, alarm, maintenance action, and technical concept across departments, file types, and suppliers.
              </p>
            </div>
            <div className="term-wrap">
              <div className="term-flow">
                <div className="term-node">
                  Engineering Documentation
                </div>
                <div className="term-node">
                  Equipment Manuals
                </div>
                <div className="term-node">
                  Software &amp; Controls
                </div>
                <div className="term-node">
                  Operating Procedures
                </div>
                <div className="term-node">
                  Maintenance Documentation
                </div>
                <div className="term-node">
                  Technician Training
                </div>
              </div>
              <div className="term-foundation">
                <strong>
                  Shared Terminology + Translation Memory
                </strong>
                <span>
                  Approved vocabulary and validated bilingual content available across AI workflows, professional linguists, reviewers, and recurring updates.
                </span>
              </div>
              <div className="term-links">
                <a className="editorial-link" href="https://www.stepes.com/terminology-management/">
                  <span>
                    Terminology Management
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/translation-memory/">
                  <span>
                    Translation Memory
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section dark">
          <div className="stepes-shell">
            <div className="heading-group mobile-center">
              <p className="eyebrow">
                AI + HUMAN EXPERTISE
              </p>
              <h2>
                Match the Translation Workflow to the Content and Risk
              </h2>
              <p className="lead">
                A knowledge article, recurring maintenance update, emergency procedure, software string, switching MOP, and training course do not automatically require the same translation workflow. Stepes applies AI, human expertise, terminology, translation memory, review, and QA according to how the content will be used.
              </p>
            </div>
            <div className="workflow-grid">
              <article className="workflow-path">
                <div className="path-label">
                  High-control content
                </div>
                <h3>
                  Expert Human Translation &amp; Review
                </h3>
                <p>
                  Use specialized professional linguists and more rigorous review where technical meaning, safety, operational impact, or complexity requires greater human judgment.
                </p>
                <ul>
                  <li>
                    Emergency procedures
                  </li>
                  <li>
                    Electrical switching procedures
                  </li>
                  <li>
                    Complex MOPs
                  </li>
                  <li>
                    Commissioning procedures
                  </li>
                  <li>
                    Engineering specifications
                  </li>
                </ul>
              </article>
              <article className="workflow-path">
                <div className="path-label">
                  Scalable expert review
                </div>
                <h3>
                  AI Translation + Professional Review
                </h3>
                <p>
                  Use AI-enabled translation to accelerate suitable high-volume content while professional linguists review technical meaning, terminology, completeness, context, and readability.
                </p>
                <ul>
                  <li>
                    Recurring maintenance content
                  </li>
                  <li>
                    Knowledge bases
                  </li>
                  <li>
                    Training libraries
                  </li>
                  <li>
                    Technical support
                  </li>
                  <li>
                    Frequently updated manuals
                  </li>
                </ul>
              </article>
              <article className="workflow-path">
                <div className="path-label">
                  Frequent updates
                </div>
                <h3>
                  Continuous Localization
                </h3>
                <p>
                  Support recurring documentation, software, training, and operational updates with translation memory, terminology, automation, QA, and human review where appropriate.
                </p>
                <ul>
                  <li>
                    Software releases
                  </li>
                  <li>
                    Document revisions
                  </li>
                  <li>
                    Facility updates
                  </li>
                  <li>
                    Product variants
                  </li>
                  <li>
                    Multi-language release cycles
                  </li>
                </ul>
              </article>
            </div>
            <a className="editorial-link" href="https://www.stepes.com/ai-translation-services/">
              <span>
                AI Translation Services
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </section>
        <section className="stepes-section">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <p className="eyebrow">
                TECHNICAL ASSURANCE
              </p>
              <h2>
                Quality and Security for Complex Data Center Content
              </h2>
              <p className="lead">
                Build technical validation, confidentiality, and fit-for-purpose quality controls into the multilingual workflow instead of relying on one final proofreading step.
              </p>
            </div>
            <div className="qa-grid">
              <article className="qa-panel">
                <h3>
                  Technical Quality Assurance
                </h3>
                <p className="body">
                  Quality controls can be configured according to content type, intended use, file format, technical complexity, and project requirements.
                </p>
                <div className="qa-checks">
                  <div className="qa-check">
                    Technical linguistic review
                  </div>
                  <div className="qa-check">
                    Terminology verification
                  </div>
                  <div className="qa-check">
                    Numbers and units
                  </div>
                  <div className="qa-check">
                    Completeness checks
                  </div>
                  <div className="qa-check">
                    Tags and protected content
                  </div>
                  <div className="qa-check">
                    Warnings and references
                  </div>
                  <div className="qa-check">
                    Formatting and file integrity
                  </div>
                  <div className="qa-check">
                    In-context validation
                  </div>
                  <div className="qa-check">
                    Customer / SME review
                  </div>
                  <div className="qa-check">
                    Translation-memory reuse
                  </div>
                </div>
                <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">
                  <span>
                    Translation Quality Assurance
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
              <aside className="security-panel">
                <h3>
                  Secure Translation for Sensitive Documentation
                </h3>
                <p className="body">
                  Data center content may reveal facility systems, equipment configurations, operating procedures, emergency processes, suppliers, and internal operations.
                </p>
                <div className="security-points">
                  <div className="security-point">
                    <strong>
                      Controlled Project Access
                    </strong>
                    <span>
                      Coordinate multilingual projects and participants through managed workflows and defined responsibilities.
                    </span>
                  </div>
                  <div className="security-point">
                    <strong>
                      Confidential File Handling
                    </strong>
                    <span>
                      Support sensitive engineering, operating, equipment, software, and facility documentation throughout translation and review.
                    </span>
                  </div>
                  <div className="security-point">
                    <strong>
                      NDA Support
                    </strong>
                    <span>
                      Work within customer confidentiality requirements and nondisclosure arrangements when required.
                    </span>
                  </div>
                  <div className="security-point">
                    <strong>
                      Centralized Translation Management
                    </strong>
                    <span>
                      Reduce unnecessary file distribution by coordinating multilingual work through structured project processes.
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="global-grid">
              <div className="heading-group mobile-center">
                <p className="eyebrow">
                  GLOBAL DATA CENTER PROGRAMS
                </p>
                <h2>
                  Scale Data Center Documentation Across 100+ Languages
                </h2>
                <p className="body">
                  Data centers are designed, manufactured, constructed, operated, serviced, and supported by international teams. Stepes provides data center and data centre translation services in 100+ languages, helping organizations coordinate multilingual content across facilities, equipment portfolios, project teams, and markets.
                </p>
              </div>
              <div className="global-list">
                <article className="global-item">
                  <h3>
                    Standardize Global Facility Operations
                  </h3>
                  <p className="body">
                    Translate common procedures, training, maintenance content, and operating documentation while preserving facility-specific requirements where needed.
                  </p>
                </article>
                <article className="global-item">
                  <h3>
                    Support International Construction &amp; Commissioning
                  </h3>
                  <p className="body">
                    Help owners, engineers, contractors, OEMs, and commissioning teams work from understandable technical content across languages.
                  </p>
                </article>
                <article className="global-item">
                  <h3>
                    Localize Equipment for Global Customers
                  </h3>
                  <p className="body">
                    Translate manuals, software, training, service content, specifications, and support materials for international deployment.
                  </p>
                </article>
                <article className="global-item">
                  <h3>
                    Support Multilingual Workforces
                  </h3>
                  <p className="body">
                    Provide technicians and operators with translated procedures, safety materials, maintenance content, training, and digital tools.
                  </p>
                </article>
                <article className="global-item">
                  <h3>
                    Coordinate Multi-Site Programs
                  </h3>
                  <p className="body">
                    Reuse approved terminology and translation memory across regional facilities instead of rebuilding multilingual content for every site.
                  </p>
                </article>
                <article className="global-item">
                  <h3>
                    Keep Global Content Connected
                  </h3>
                  <p className="body">
                    Apply shared language assets across engineering, controls, operations, maintenance, safety, and training while addressing locale requirements.
                  </p>
                </article>
              </div>
            </div>
            <div className="why-band">
              <h2>
                A Data Center Translation Partner Built for Technical Accuracy and Global Scale
              </h2>
              <div className="why-grid">
                <div className="why-item">
                  <strong>
                    Technical Subject-Matter Expertise
                  </strong>
                  <span>
                    Professional linguists matched to electrical, mechanical, controls, software, engineering, equipment, operations, and maintenance content.
                  </span>
                </div>
                <div className="why-item">
                  <strong>
                    Data Center Lifecycle Coverage
                  </strong>
                  <span>
                    Support content from design and construction through commissioning, operation, maintenance, modernization, and technician training.
                  </span>
                </div>
                <div className="why-item">
                  <strong>
                    AI + Human Expertise
                  </strong>
                  <span>
                    Use AI and automation where they improve efficiency while retaining professional judgment where complexity or risk requires it.
                  </span>
                </div>
                <div className="why-item">
                  <strong>
                    Terminology Governance
                  </strong>
                  <span>
                    Keep equipment, controls, alarms, procedures, maintenance language, safety terminology, and training aligned.
                  </span>
                </div>
                <div className="why-item">
                  <strong>
                    Document + Software Localization
                  </strong>
                  <span>
                    Translate manuals, specifications, software, HMIs, DCIM platforms, controls, and training through one language partner.
                  </span>
                </div>
                <div className="why-item">
                  <strong>
                    Structured Quality Assurance
                  </strong>
                  <span>
                    Apply terminology checks, technical review, automated QA, number and unit verification, file validation, and in-context review as appropriate.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stepes-section dense">
          <div className="stepes-shell">
            <div className="heading-group mobile-center">
              <p className="eyebrow">
                RELATED CAPABILITIES
              </p>
              <h2>
                Connect Data Center Translation With Your Broader Technical Content Program
              </h2>
              <p className="body">
                Data centers sit at the intersection of engineering, energy, industrial systems, software, maintenance, and workforce learning. Explore related Stepes capabilities for these connected content needs.
              </p>
            </div>
            <div className="related-grid">
              <a className="related-link" href="https://www.stepes.com/industrial-translation-services/">
                <strong>
                  Industrial Translation Services
                </strong>
                <span>
                  Industrial content →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/technical-translation-services/">
                <strong>
                  Technical Translation Services
                </strong>
                <span>
                  Technical documents →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/engineering-translation-services/">
                <strong>
                  Engineering Translation Services
                </strong>
                <span>
                  Engineering content →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/energy-translation-services/">
                <strong>
                  Energy Translation Services
                </strong>
                <span>
                  Power &amp; energy content →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/industrial-automation-translation/">
                <strong>
                  Industrial Automation Translation Services
                </strong>
                <span>
                  Controls &amp; automation →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/mro-translation-services/">
                <strong>
                  MRO Translation Services
                </strong>
                <span>
                  Maintenance content →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">
                <strong>
                  Technical Manual Translation Services
                </strong>
                <span>
                  Manuals &amp; documentation →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/software-localization-services/">
                <strong>
                  Software Localization Services
                </strong>
                <span>
                  Software &amp; interfaces →
                </span>
              </a>
              <a className="related-link" href="https://www.stepes.com/elearning-training-translation-services/">
                <strong>
                  eLearning Translation Services
                </strong>
                <span>
                  Training &amp; eLearning →
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="stepes-section light">
          <div className="stepes-shell">
            <div className="heading-group center mobile-center">
              <h2>
                Data Center Translation Services FAQs
              </h2>
              <p className="lead">
                Answers to common questions about data center documentation, operating procedures, software localization, technical terminology, AI workflows, and multilingual delivery.
              </p>
            </div>
            <div className="faq-panel">
              <details>
                <summary>
                  What are data center translation services?
                </summary>
                <div className="faq-answer">
                  Data center translation services translate and localize the technical, operational, software, safety, and training content used to design, build, commission, operate, maintain, and upgrade data center facilities. Typical content includes engineering specifications, equipment manuals, commissioning procedures, SOPs, MOPs, EOPs, O&amp;M documentation, DCIM and BMS interfaces, maintenance procedures, safety materials, and technician training.
                </div>
              </details>
              <details>
                <summary>
                  How is data center translation different from data translation?
                </summary>
                <div className="faq-answer">
                  Data center translation focuses on the engineering, operational, software, safety, maintenance, commissioning, and training content used to build and run physical data center facilities. Data translation focuses on multilingual enterprise data, datasets, database content, and information used for analytics or business applications. The two services address different content, subject matter, and workflows.
                </div>
              </details>
              <details>
                <summary>
                  What types of data center documents can Stepes translate?
                </summary>
                <div className="faq-answer">
                  Stepes translates engineering documentation, specifications, drawings, equipment manuals, commissioning plans, test scripts, SOPs, MOPs, EOPs, operating procedures, O&amp;M manuals, maintenance instructions, safety documentation, software interfaces, alarms, dashboards, training courses, technical support content, and other data center materials.
                </div>
              </details>
              <details>
                <summary>
                  Can Stepes translate SOPs, MOPs and EOPs?
                </summary>
                <div className="faq-answer">
                  Yes. Stepes translates Standard Operating Procedures, Methods of Procedure, Emergency Operating Procedures, switching procedures, site procedures, incident-response materials, change-control documentation, and related operational content. Workflows can combine specialist linguists, terminology management, translation memory, structured review, automated QA, and customer subject-matter validation according to project requirements.
                </div>
              </details>
              <details>
                <summary>
                  Do you translate data center commissioning documentation?
                </summary>
                <div className="faq-answer">
                  Yes. Stepes supports commissioning plans, specifications, pre-functional checklists, start-up procedures, functional performance tests, integrated systems testing, test scripts, deficiency documentation, punch lists, commissioning reports, systems manuals, acceptance documents, and turnover packages.
                </div>
              </details>
              <details>
                <summary>
                  Can Stepes localize DCIM, BMS, EPMS and SCADA systems?
                </summary>
                <div className="faq-answer">
                  Yes. Stepes localizes data center infrastructure management platforms, building management systems, electrical power monitoring systems, SCADA environments, equipment HMIs, monitoring applications, dashboards, alarms, notifications, reports, and field-service software. Terminology can also be coordinated with supporting manuals, procedures, maintenance documentation, and training.
                </div>
              </details>
              <details>
                <summary>
                  Do you translate content for data center power and cooling equipment manufacturers?
                </summary>
                <div className="faq-answer">
                  Yes. Stepes supports manufacturers of UPS systems, switchgear, generators, transformers, PDUs, battery and energy-storage systems, chillers, CRAH and CRAC equipment, liquid-cooling technologies, heat exchangers, controls, sensors, monitoring products, and other data center infrastructure.
                </div>
              </details>
              <details>
                <summary>
                  Can you translate data center technician training and eLearning?
                </summary>
                <div className="faq-answer">
                  Yes. Stepes translates technician training, operational training, safety courses, equipment instruction, troubleshooting modules, onboarding, assessments, videos, voiceover, subtitles, Articulate Storyline, Rise 360, PowerPoint, and other eLearning content.
                </div>
              </details>
              <details>
                <summary>
                  How does Stepes maintain terminology consistency across data center content?
                </summary>
                <div className="faq-answer">
                  Stepes combines terminology management and translation memory to preserve approved technical language across documents, software, procedures, maintenance content, and training. Terminology resources can define preferred translations for equipment names, components, operating states, commands, alarms, maintenance actions, safety concepts, acronyms, and other specialized vocabulary.
                </div>
              </details>
              <details>
                <summary>
                  Can AI translation be used for data center documentation?
                </summary>
                <div className="faq-answer">
                  Yes, when the workflow is matched appropriately to the content. Stepes can use AI translation to accelerate suitable high-volume or recurring content, combined with approved terminology, translation memory, automated QA, and professional human review. Content with greater technical complexity, safety implications, operational impact, or business risk may require more specialized professional translation, independent review, or subject-matter validation.
                </div>
              </details>
              <details>
                <summary>
                  What languages does Stepes support for data center translation?
                </summary>
                <div className="faq-answer">
                  Stepes supports data center translation in more than 100 languages and regional variants. Multilingual programs can be coordinated through one workflow while language resources, terminology, translation memory, review requirements, and facility-specific content are managed consistently across markets.
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="stepes-shell">
            <div className="final-cta-inner">
              <div>
                <h2>
                  Translate Your Data Center Content With Confidence
                </h2>
                <p className="lead">
                  From power and cooling systems to commissioning, SOPs, MOPs, EOPs, software, maintenance, safety, and technician training, Stepes helps keep mission-critical content accurate and consistent across languages.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn-primary" href="https://app.stepes.com/quote/">
                  <span>
                    Get a Translation Quote
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
