import React from "react";

const STYLES = String.raw`
:root{
  --magenta:#C11D63;
  --magenta-dark:#A71954;
  --burgundy:#7A1542;
  --blush:#FDF2F7;
  --blush-line:#F4D7E4;
  --ink:#171A21;
  --body:#485162;
  --muted:#697386;
  --line:#DDE2E8;
  --line-dark:#3C3F49;
  --soft:#F7F8FA;
  --soft2:#F2F4F7;
  --dark:#17151B;
  --dark2:#211E25;
  --white:#FFFFFF;
  --radius-lg:30px;
  --radius-md:22px;
  --shadow:0 18px 48px rgba(28,35,43,.08);
  --max:1280px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#fff;color:var(--ink);font-family:"Inter Tight","Inter",Arial,sans-serif;-webkit-font-smoothing:antialiased}
.stp-page{width:100%;overflow-x:clip;overflow-wrap:anywhere;background:#fff}
.stp-section{padding:96px 56px}
.stp-section.dense{padding-top:80px;padding-bottom:80px}
.stp-shell{width:100%;max-width:var(--max);margin:0 auto}
.stp-section.soft{background:var(--soft)}
.stp-section.blush{background:var(--blush)}
.stp-section.dark{background:var(--dark);color:#fff}
.eyebrow{margin:0 0 16px;font-size:11px;line-height:1.3;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--magenta)}
.dark .eyebrow{color:#F2A7C6}
h1,h2,h3{margin:0;color:var(--ink);font-weight:600;letter-spacing:-.025em}
.dark h1,.dark h2,.dark h3{color:#fff}
h1{font-size:48px;line-height:1.06;max-width:690px}
h2{font-size:36px;line-height:1.14;max-width:780px}
h3{font-size:24px;line-height:1.25}
p{margin:0;color:var(--body);font-size:17px;line-height:1.72;font-weight:400}
.dark p{color:#E5E7EB}
.lead{font-size:18px;line-height:1.68;max-width:820px}
.muted{color:var(--muted)}
.dark .muted{color:#C8CBD2}
a{color:var(--magenta);text-decoration:none}
a:hover{text-decoration:none}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:4px;border-radius:10px}
.link-arrow{display:inline-flex;align-items:center;justify-content:flex-start;gap:7px;min-height:44px;margin-top:18px;font-size:16px;font-weight:600;color:var(--magenta)}
.link-arrow span{transition:transform .2s ease}
.link-arrow:hover span{transform:translateX(3px)}
.btn-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;font-size:16px;font-weight:600;border:1px solid transparent;transition:transform .18s ease,background .18s ease,border-color .18s ease}
.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:var(--magenta);color:#fff}
.btn-primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
.btn-secondary{background:#fff;color:var(--ink);border-color:#C8CED7}
.btn-secondary:hover{border-color:#9EA7B3;transform:translateY(-1px)}
.hero{padding:104px 56px 88px;background:#fff}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(420px,.95fr);gap:68px;align-items:center}
.hero-grid>*,.split>*,.illustrated-grid>*,.system-grid>*,.bridge-grid>*,.dual-panels>*{min-width:0}
.hero-copy .lead{margin-top:24px;max-width:720px}
.hero-art{position:relative;min-height:510px;border:1px solid var(--line);border-radius:var(--radius-lg);background:linear-gradient(180deg,#fff 0%,#F9FAFB 100%);box-shadow:var(--shadow);overflow:hidden}
.hero-art:after{content:"";position:absolute;right:-70px;top:-80px;width:240px;height:240px;border-radius:50%;background:var(--blush)}
.hero-art svg{position:absolute;inset:36px;width:calc(100% - 72px);height:calc(100% - 72px);z-index:1}
.proof-wrap{padding:0 56px 30px}
.proof-bar{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.proof-item{padding:22px 26px}
.proof-item+.proof-item{border-left:1px solid var(--line)}
.proof-title{display:block;font-size:16px;font-weight:600;color:var(--ink);margin-bottom:4px}
.proof-sub{display:block;font-size:16px;line-height:1.5;color:var(--body)}
.section-head.center{text-align:center;margin-left:auto;margin-right:auto}
.section-head.center h2,.section-head.center .lead{margin-left:auto;margin-right:auto}
.section-head .lead{margin-top:20px}
.split{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:84px;align-items:start}
.split.equal{grid-template-columns:repeat(2,minmax(0,1fr));gap:64px}
.editorial-stack{border-top:1px solid var(--line)}
.editorial-row{display:grid;grid-template-columns:56px 1fr;gap:18px;padding:26px 0;border-bottom:1px solid var(--line)}
.icon-box{width:44px;height:44px;border-radius:14px;background:#F7EAF0;display:flex;align-items:center;justify-content:center;color:var(--burgundy)}
.icon-box svg{width:23px;height:23px;stroke:currentColor;fill:none;stroke-width:1.8}
.editorial-row h3{font-size:20px;margin-bottom:8px}
.editorial-row p{font-size:17px}
.scope-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:48px}
.scope-item{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
.scope-item h3{font-size:20px;margin-bottom:10px}
.scope-item p{font-size:17px}
.dark-panel{border:1px solid #34313B;border-radius:var(--radius-lg);background:var(--dark2);padding:38px}
.term-grid{display:grid;grid-template-columns:1fr 300px 1fr;gap:22px;align-items:stretch;margin-top:42px}
.term-col{display:flex;flex-direction:column;gap:12px}
.term-node{padding:18px 20px;border:1px solid #393640;border-radius:18px;background:#1C1A20}
.term-node strong{display:block;font-size:16px;color:#fff;margin-bottom:4px}
.term-node span{display:block;font-size:16px;line-height:1.5;color:#C9CBD1}
.term-core{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:30px;border-radius:26px;background:linear-gradient(180deg,#3A1730,#2C1A28);border:1px solid #5A2644}
.term-core svg{width:56px;height:56px;stroke:#F2A7C6;fill:none;stroke-width:1.5;margin-bottom:18px}
.term-core strong{font-size:23px;line-height:1.25;color:#fff}
.term-core span{margin-top:10px;font-size:16px;line-height:1.55;color:#E8CDD9}
.illustrated-grid{display:grid;grid-template-columns:minmax(430px,.95fr) minmax(0,1.05fr);gap:72px;align-items:center}
.diagram{position:relative;border:1px solid var(--line);border-radius:var(--radius-lg);background:#fff;min-height:560px;box-shadow:var(--shadow);overflow:hidden}
.diagram svg{position:absolute;inset:28px;width:calc(100% - 56px);height:calc(100% - 56px)}
.callout-list{margin-top:30px;border-top:1px solid var(--line)}
.callout{padding:22px 0;border-bottom:1px solid var(--line)}
.callout h3{font-size:20px;margin-bottom:7px}
.data-panel{margin-top:40px;border:1px solid var(--blush-line);border-radius:var(--radius-lg);background:#fff;overflow:hidden}
.data-row{display:grid;grid-template-columns:1.15fr .85fr;min-height:56px;border-bottom:1px solid var(--line)}
.data-row:last-child{border-bottom:none}
.data-row>div{padding:16px 22px;font-size:16px}
.data-row>div:first-child{color:var(--ink);font-weight:600}
.data-row>div:last-child{color:var(--body);border-left:1px solid var(--line)}
.treatment{display:inline-flex;align-items:center;gap:8px}
.treatment i{width:8px;height:8px;border-radius:50%;background:#AAB1BB}
.treatment.translate i{background:var(--magenta)}
.treatment.validate i{background:#8B6D35}
.system-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(400px,.95fr);gap:64px;align-items:center}
.system-mock{border:1px solid var(--line);border-radius:var(--radius-lg);background:#fff;box-shadow:var(--shadow);padding:26px}
.system-top{display:flex;justify-content:space-between;align-items:center;padding-bottom:18px;border-bottom:1px solid var(--line)}
.system-top strong{font-size:16px}
.status{font-size:14px;color:#5D6673;padding:7px 10px;background:#F2F4F7;border-radius:999px}
.searchbox{margin-top:20px;border:1px solid var(--line);border-radius:14px;padding:14px 16px;font-size:15px;color:#727B88}
.part-result{display:grid;grid-template-columns:72px minmax(0,1fr) auto;gap:16px;align-items:center;padding:20px 0;border-bottom:1px solid var(--line)}
.part-result:last-child{border-bottom:none}
.thumb{height:58px;border-radius:12px;background:#F3F5F7;border:1px solid #E4E8ED;display:flex;align-items:center;justify-content:center;color:#8C95A2}
.part-result strong{display:block;font-size:16px;margin-bottom:4px}
.part-result span{font-size:14px;color:var(--muted)}
.part-number{font-size:14px;font-weight:600;color:var(--ink);white-space:nowrap}
.format-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.format-label{padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:#fff;color:#515A67;font-size:14px;font-weight:600}
.timeline{display:grid;grid-template-columns:repeat(6,1fr);margin-top:48px;border-top:1px solid var(--line)}
.timeline-step{position:relative;padding:30px 22px 0 0}
.timeline-step:not(:last-child){border-right:1px solid var(--line);margin-right:22px}
.timeline-num{display:inline-flex;width:34px;height:34px;border-radius:50%;align-items:center;justify-content:center;background:#F5E7ED;color:var(--burgundy);font-size:14px;font-weight:600;margin-bottom:18px}
.timeline-step h3{font-size:19px;margin-bottom:10px}
.timeline-step p{font-size:17px;line-height:1.62}
.bridge-grid{display:grid;grid-template-columns:repeat(2,1fr);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;background:#fff}
.bridge-panel{padding:38px}
.bridge-panel+.bridge-panel{border-left:1px solid var(--line)}
.bridge-panel h2{font-size:30px;margin-bottom:18px}
.plain-list{list-style:none;margin:22px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,1fr);gap:10px 26px}
.plain-list li{position:relative;padding-left:16px;color:var(--body);font-size:17px;line-height:1.58}
.plain-list li:before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border-radius:50%;background:#B7BEC8}
.chain{display:grid;grid-template-columns:repeat(6,1fr);margin-top:26px;border-top:1px solid var(--line)}
.chain-item{padding:18px 12px;border-right:1px solid var(--line);font-size:15px;color:var(--body);font-weight:600;text-align:center}
.chain-item:last-child{border-right:none}
.industry-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px}
.industry-card{min-height:220px;border:1px solid var(--line);border-radius:var(--radius-md);background:#fff;padding:26px;display:flex;flex-direction:column}
.industry-card h3{font-size:20px;margin-bottom:10px}
.industry-card p{font-size:17px;line-height:1.62}
.industry-card .link-arrow{margin-top:auto;padding-top:14px}
.ai-lanes{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:42px}
.ai-lane{border:1px solid #3C3943;border-radius:22px;background:#1D1A21;padding:28px}
.ai-lane .lane-tag{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#F2A7C6;font-weight:600;margin-bottom:16px}
.ai-lane h3{font-size:21px;margin-bottom:12px}
.ai-lane p{font-size:17px}
.ai-flow{margin-top:20px;padding-top:18px;border-top:1px solid #3A3740;color:#D7D9DE;font-size:16px;line-height:1.55}
.asset-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;margin-top:42px}
.asset-item{background:#fff;padding:30px}
.asset-item h3{font-size:20px;margin-bottom:10px}
.asset-item p{font-size:17px}
.dual-panels{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:40px}
.quality-panel{border:1px solid var(--line);border-radius:var(--radius-lg);background:#fff;padding:34px}
.quality-panel h3{font-size:24px;margin-bottom:18px}
.quality-list{display:grid;gap:0}
.quality-row{display:grid;grid-template-columns:150px 1fr;gap:18px;padding:16px 0;border-top:1px solid var(--line)}
.quality-row:first-child{border-top:none}
.quality-row strong{font-size:16px;color:var(--ink)}
.quality-row span{font-size:17px;color:var(--body);line-height:1.58}
.review-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:0;margin-top:42px}
.review-step{position:relative;padding:0 22px}
.review-step:not(:last-child):after{content:"→";position:absolute;right:-8px;top:8px;color:#A5ADB8;font-size:20px}
.review-step .review-num{font-size:14px;font-weight:600;color:var(--magenta);margin-bottom:12px}
.review-step h3{font-size:19px;margin-bottom:8px}
.review-step p{font-size:17px;line-height:1.58}
.enterprise-rows{margin-top:38px;border-top:1px solid var(--line)}
.enterprise-row{display:grid;grid-template-columns:240px 1fr;gap:44px;padding:24px 0;border-bottom:1px solid var(--line)}
.enterprise-row h3{font-size:19px}
.enterprise-row p{font-size:17px}
.language-list{display:grid;grid-template-columns:repeat(4,1fr);margin-top:38px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
.language-list span{padding:17px 20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:16px;color:var(--ink);background:#fff}
.workflow{display:grid;grid-template-columns:repeat(6,1fr);margin-top:46px;border-top:1px solid var(--line)}
.workflow-step{padding:28px 18px 0 0}
.workflow-step:not(:last-child){border-right:1px solid var(--line);margin-right:18px}
.workflow-step .n{display:block;font-size:13px;color:var(--magenta);font-weight:600;margin-bottom:12px}
.workflow-step h3{font-size:19px;margin-bottom:10px}
.workflow-step p{font-size:17px;line-height:1.58}
.choose-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:42px}
.choose-item{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.choose-item h3{font-size:20px;margin-bottom:9px}
.choose-item p{font-size:17px}
.compare-wrap{margin-top:48px;border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;background:#fff}
.compare-head,.compare-row{display:grid;grid-template-columns:1fr 1fr}
.compare-head>div{padding:22px 26px;background:#F7F8FA;color:var(--ink);font-size:18px;font-weight:600}
.compare-head>div+div,.compare-row>div+div{border-left:1px solid var(--line)}
.compare-row{border-top:1px solid var(--line)}
.compare-row>div{padding:17px 26px;font-size:17px;color:var(--body)}
.faq{margin-top:42px;border-top:1px solid var(--line)}
.faq details{border-bottom:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 0;font-size:18px;font-weight:600;color:var(--ink)}
.faq summary::-webkit-details-marker{display:none}
.faq summary:after{content:"+";display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#F1F3F6;color:#5C6470;font-size:20px;font-weight:400;flex:0 0 auto}
.faq details[open] summary:after{content:"−"}
.faq .answer{max-width:840px;padding:0 50px 22px 0}
.faq .answer p{font-size:17px}
.final-cta{padding:88px 56px;background:var(--blush)}
.final-box{max-width:var(--max);margin:0 auto;border:1px solid var(--blush-line);border-radius:var(--radius-lg);background:#fff;padding:64px;text-align:center}
.final-box h2{margin:0 auto;max-width:780px}
.final-box .lead{margin:20px auto 0;max-width:820px}
.final-box .btn-row{justify-content:center}
.note{font-size:17px;line-height:1.65;color:var(--body)}
@media (max-width:1360px){
  .stp-section,.hero,.final-cta{padding-left:40px;padding-right:40px}
  .proof-wrap{padding-left:40px;padding-right:40px}
}
@media (max-width:1024px){
  .stp-section{padding:88px 24px}
  .hero{padding:92px 24px 78px}
  .final-cta{padding:80px 24px}
  .proof-wrap{padding-left:24px;padding-right:24px}
  h1{font-size:42px}
  h2{font-size:32px}
  h3{font-size:22px}
  .hero-grid{grid-template-columns:1fr 430px;gap:38px}
  .hero-art{min-height:460px}
  .split{grid-template-columns:1fr;gap:42px}
  .split.equal{grid-template-columns:1fr;gap:30px}
  .scope-grid{grid-template-columns:repeat(2,1fr)}
  .term-grid{grid-template-columns:1fr 240px 1fr}
  .illustrated-grid{grid-template-columns:1fr;gap:44px}
  .diagram{min-height:500px}
  .system-grid{grid-template-columns:1fr;gap:40px}
  .timeline{grid-template-columns:repeat(3,1fr);row-gap:34px}
  .timeline-step:nth-child(3){border-right:none;margin-right:0}
  .bridge-grid{grid-template-columns:1fr}
  .bridge-panel+.bridge-panel{border-left:none;border-top:1px solid var(--line)}
  .industry-grid{grid-template-columns:repeat(2,1fr)}
  .ai-lanes{grid-template-columns:1fr}
  .review-flow{grid-template-columns:1fr}
  .review-step{padding:22px 0;border-top:1px solid var(--line)}
  .review-step:first-child{border-top:none}
  .review-step:not(:last-child):after{display:none}
  .language-list{grid-template-columns:repeat(3,1fr)}
  .workflow{grid-template-columns:repeat(3,1fr);row-gap:32px}
  .workflow-step:nth-child(3){border-right:none;margin-right:0}
  .choose-grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:820px){
  .hero-grid{grid-template-columns:1fr}
  .hero-copy{text-align:center}
  .hero-copy h1,.hero-copy .lead{margin-left:auto;margin-right:auto}
  .hero-copy .btn-row{justify-content:center}
  .hero-art{min-height:430px}
  .proof-bar{grid-template-columns:repeat(2,1fr)}
  .proof-item:nth-child(3){border-left:none;border-top:1px solid var(--line)}
  .proof-item:nth-child(4){border-top:1px solid var(--line)}
  .term-grid{grid-template-columns:1fr}
  .term-core{order:-1;min-height:220px}
  .section-head.mobile-center{text-align:center}
  .section-head.mobile-center h2,.section-head.mobile-center .lead{margin-left:auto;margin-right:auto}
  .section-head.mobile-scan-left{text-align:left}
  .section-head.mobile-scan-left h2,.section-head.mobile-scan-left .lead{margin-left:0;margin-right:0}
  .timeline{grid-template-columns:1fr;border-top:none}
  .timeline-step,.timeline-step:not(:last-child){padding:22px 0;margin-right:0;border-right:none;border-top:1px solid var(--line)}
  .timeline-step:first-child{border-top:none}
  .dual-panels{grid-template-columns:1fr}
  .enterprise-row{grid-template-columns:1fr;gap:10px}
  .workflow{grid-template-columns:1fr;border-top:none}
  .workflow-step,.workflow-step:not(:last-child){padding:22px 0;margin-right:0;border-right:none;border-top:1px solid var(--line)}
  .workflow-step:first-child{border-top:none}
}
@media (max-width:640px){
  .stp-section{padding:68px 20px}
  .stp-section.dense{padding-top:64px;padding-bottom:64px}
  .hero{padding:72px 20px 62px}
  .proof-wrap{padding:0 20px 20px}
  .final-cta{padding:68px 20px}
  h1{font-size:38px;line-height:1.08}
  h2{font-size:30px;line-height:1.18}
  h3{font-size:20px}
  p,.editorial-row p,.enterprise-row p,.faq .answer p{font-size:17px}
  .lead{font-size:18px}
  .section-head.mobile-center{text-align:center}
  .section-head.mobile-center h2,.section-head.mobile-center .lead{margin-left:auto;margin-right:auto}
  .section-head.mobile-scan-left{text-align:left}
  .section-head.mobile-scan-left h2,.section-head.mobile-scan-left .lead{margin-left:0;margin-right:0}
  .hero-copy .btn-row{display:grid;grid-template-columns:1fr;width:100%}
  .btn{width:100%;min-height:50px}
  .hero-art{min-height:370px}
  .hero-art svg{inset:22px;width:calc(100% - 44px);height:calc(100% - 44px)}
  .proof-bar{grid-template-columns:1fr}
  .proof-item+.proof-item,.proof-item:nth-child(3),.proof-item:nth-child(4){border-left:none;border-top:1px solid var(--line)}
  .scope-grid{grid-template-columns:1fr}
  .dark-panel{padding:26px 20px}
  .diagram{min-height:420px}
  .data-row{grid-template-columns:1fr}
  .data-row>div{padding:14px 16px;font-size:16px}
  .data-row>div:last-child{border-left:none;border-top:1px solid var(--line);background:#FCFCFD}
  .system-mock{padding:18px}
  .part-result{grid-template-columns:58px 1fr}
  .part-number{grid-column:2}
  .timeline{grid-template-columns:1fr;border-top:none}
  .timeline-step,.timeline-step:not(:last-child){padding:22px 0;margin-right:0;border-right:none;border-top:1px solid var(--line)}
  .timeline-step:first-child{border-top:none}
  .plain-list{grid-template-columns:1fr}
  .chain{grid-template-columns:1fr;border-top:none}
  .chain-item{border-right:none;border-top:1px solid var(--line);text-align:left;padding:15px 0}
  .industry-grid{grid-template-columns:1fr}
  .asset-grid{grid-template-columns:1fr}
  .quality-row{grid-template-columns:1fr;gap:7px}
  .language-list{grid-template-columns:repeat(2,1fr)}
  .choose-grid{grid-template-columns:1fr}
  .compare-wrap{overflow:hidden;border:1px solid var(--line);border-radius:20px}
  .compare-head{display:none}
  .compare-row{grid-template-columns:1fr;border:0;border-radius:0;margin:0;overflow:visible}
  .compare-row+.compare-row{border-top:1px solid var(--line)}
  .compare-row>div{padding:15px 18px}
  .compare-row>div:before{display:block;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--magenta);margin-bottom:6px}
  .compare-row>div:first-child:before{content:"Product Catalog"}
  .compare-row>div:last-child:before{content:"Parts Catalog"}
  .compare-row>div+div{border-left:none;border-top:1px solid var(--line)}
  .faq summary{font-size:17px;align-items:flex-start}
  .faq .answer{padding-right:0}
  .final-box{padding:46px 22px}
}
@media (max-width:360px){
  .stp-section,.hero,.final-cta{padding-left:20px;padding-right:20px}
  .language-list{grid-template-columns:1fr}
  .hero-art{min-height:340px}
}
`;
const PAGE_HTML = String.raw`
<main class="stp-page">
  <section class="hero" id="top">
    <div class="stp-shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">TECHNICAL PARTS INFORMATION</p>
        <h1>Parts Catalog Translation Services</h1>
        <p class="lead">Translate illustrated and electronic parts catalogs with the technical accuracy global manufacturers, OEMs, distributors, dealers, and service organizations need to identify, order, replace, and support the right components across languages.</p>
        <p style="margin-top:16px">Stepes combines technical linguists, AI-enabled translation, terminology management, translation memory, structured-data processing, multilingual publishing, and quality assurance for complex parts information.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote</a>
          <a class="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to a Technical Translation Expert</a>
        </div>
      </div>
      <div class="hero-art">
        
<svg viewBox="0 0 560 480" role="img" aria-label="Technical line illustration of an exploded industrial parts assembly">
  <g fill="none" stroke="#66717F" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M110 256h82l22-28h82l25 28h93"/>
    <path d="M168 206l35-54h154l38 54"/>
    <path d="M189 152v-34h184v34"/>
    <path d="M214 118l18-38h120l20 38"/>
    <path d="M242 80V50h102v30"/>
    <path d="M248 267v72h72v-72"/>
    <rect x="207" y="339" width="154" height="38" rx="8"/>
    <path d="M158 256l-18 54h-43l-18-33"/>
    <circle cx="79" cy="260" r="26"/>
    <path d="M414 256l19 54h43l17-33"/>
    <circle cx="495" cy="260" r="26"/>
    <path d="M105 222h-49M447 222h58M280 46V18"/>
    <circle cx="48" cy="222" r="5"/><circle cx="513" cy="222" r="5"/><circle cx="280" cy="12" r="5"/>
    <path d="M216 188h128M235 214h92"/>
    <circle cx="280" cy="188" r="20"/>
    <path d="M271 179l18 18M289 179l-18 18"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#4A5562">
    <text x="18" y="216">24</text><text x="522" y="216">25</text><text x="289" y="15">12</text>
  </g>
  <g fill="#C11D63">
    <circle cx="48" cy="222" r="4"/><circle cx="513" cy="222" r="4"/><circle cx="280" cy="12" r="4"/>
  </g>
</svg>

      </div>
    </div>
  </section>

  <div class="proof-wrap">
    <div class="proof-bar">
      <div class="proof-item"><span class="proof-title">100+ Languages</span><span class="proof-sub">Global and regional language coverage</span></div>
      <div class="proof-item"><span class="proof-title">AI + Human Expertise</span><span class="proof-sub">Workflows matched to content complexity</span></div>
      <div class="proof-item"><span class="proof-title">Technical Terminology</span><span class="proof-sub">Consistent component naming across content</span></div>
      <div class="proof-item"><span class="proof-title">Structured Parts Data</span><span class="proof-sub">Files, databases, EPCs, and digital systems</span></div>
    </div>
  </div>

  <section class="stp-section" id="accurate-identification">
    <div class="stp-shell split">
      <div class="section-head mobile-center">
        <h2>Built for Accurate Identification and Ordering</h2>
      </div>
      <div>
        <p class="lead">A parts catalog does more than describe a product. It helps technicians, dealers, distributors, maintenance teams, and equipment owners identify exactly which component they need.</p>
        <p style="margin-top:18px">A translated component name may appear beside an item number in an exploded diagram, inside a dealer ordering system, in a service manual, on an online parts portal, and within an ERP or PIM database. The language has to stay aligned across all of them.</p>
        <div class="editorial-stack" style="margin-top:34px">
          <div class="editorial-row">
            <div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="M8 3v6M16 3v6M8 15h8"/></svg></div>
            <div><h3>Technical relationships</h3><p>Maintain the connection among component names, part numbers, item numbers, assemblies, quantities, models, serial ranges, specifications, and diagrams.</p></div>
          </div>
          <div class="editorial-row">
            <div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 8h14M7 16h10"/><circle cx="12" cy="12" r="8"/></svg></div>
            <div><h3>Global service usability</h3><p>Help field technicians, dealer service departments, repair centers, parts teams, and equipment owners locate and understand the correct component in their language.</p></div>
          </div>
        </div>
        <a class="link-arrow" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services <span>→</span></a>
      </div>
    </div>
  </section>

  <section class="stp-section soft dense" id="parts-catalog-types">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        
        <h2>From Illustrated Parts Catalogs to Digital EPC Systems</h2>
        <p class="lead">Stepes supports multilingual workflows for traditional publications and the digital systems manufacturers increasingly use to manage service and aftermarket content.</p>
      </div>
      <div class="scope-grid">
        <div class="scope-item"><h3>Illustrated Parts Catalogs</h3><p>Translate component descriptions, assembly names, notes, tables, labels, and supporting text while preserving the connection between exploded views, numbered callouts, and parts lists.</p></div>
        <div class="scope-item"><h3>Electronic Parts Catalogs</h3><p>Localize Electronic Parts Catalogs (EPCs) for dealer networks, service organizations, equipment owners, and other technical users who rely on digital parts lookup.</p></div>
        <div class="scope-item"><h3>Spare Parts Catalogs</h3><p>Translate recommended spares, consumables, wear parts, maintenance kits, repair components, and other spare-parts information used to support installed equipment.</p></div>
        <div class="scope-item"><h3>Replacement Parts Catalogs</h3><p>Maintain clear multilingual information for replacement components, updated assemblies, retrofit parts, accessories, and aftermarket alternatives.</p></div>
        <div class="scope-item"><h3>Parts Databases</h3><p>Process high volumes of component descriptions and multilingual records while protecting IDs, database structure, engineering codes, and designated nontranslatable fields.</p></div>
        <div class="scope-item"><h3>Dealer &amp; Service Portals</h3><p>Keep terminology aligned across online parts lookup, ordering systems, service applications, technical support portals, and regional dealer environments.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section dark" id="one-part-one-name">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">TERMINOLOGY CONSISTENCY</p>
        <h2>One Part. One Name. Everywhere.</h2>
        <p class="lead">The same component can appear in a parts catalog, service manual, maintenance procedure, training module, HMI, dealer portal, product database, and customer-support system. It should not acquire a different name every time it appears.</p>
      </div>
      <div class="dark-panel">
        <div class="term-grid">
          <div class="term-col">
            <div class="term-node"><strong>Parts Catalog</strong><span>Component descriptions and assemblies</span></div>
            <div class="term-node"><strong>Service Manual</strong><span>Repair and replacement procedures</span></div>
            <div class="term-node"><strong>Maintenance Content</strong><span>Inspection and replacement intervals</span></div>
            <div class="term-node"><strong>Technical Training</strong><span>Technician and dealer instruction</span></div>
          </div>
          <div class="term-core">
            <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21"/><path d="M32 11v42M11 32h42M18 18l28 28M46 18L18 46"/></svg>
            <strong>Approved Multilingual Component Terminology</strong>
            <span>Translation memory + terminology management + reviewer feedback</span>
          </div>
          <div class="term-col">
            <div class="term-node"><strong>Dealer Portal</strong><span>Lookup and ordering terminology</span></div>
            <div class="term-node"><strong>ERP / PIM</strong><span>Structured component information</span></div>
            <div class="term-node"><strong>HMI / Software</strong><span>On-equipment terminology</span></div>
            <div class="term-node"><strong>Customer Support</strong><span>Troubleshooting and parts assistance</span></div>
          </div>
        </div>
      </div>
      <a class="link-arrow" href="https://www.stepes.com/terminology-management/" style="color:#F2A7C6">Terminology Management <span>→</span></a>
    </div>
  </section>

  <section class="stp-section" id="illustrated-parts">
    <div class="stp-shell illustrated-grid">
      <div class="diagram">
<svg viewBox="0 0 560 520" role="img" aria-label="Exploded view with numbered callouts connected to a parts list">
  <g fill="none" stroke="#697584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="252" cy="270" rx="90" ry="40"/>
    <ellipse cx="252" cy="220" rx="70" ry="28"/>
    <ellipse cx="252" cy="170" rx="52" ry="20"/>
    <path d="M200 170v-50h104v50M182 220v-50M322 220v-50M162 270v-50M342 270v-50"/>
    <path d="M187 308l-20 64h170l-20-64"/>
    <path d="M216 372v42h72v-42"/>
    <path d="M113 165h62M329 165h78M101 270h53M350 270h98M219 115l-20-45M299 115l30-45"/>
    <circle cx="107" cy="165" r="5"/><circle cx="413" cy="165" r="5"/><circle cx="95" cy="270" r="5"/><circle cx="454" cy="270" r="5"/><circle cx="197" cy="64" r="5"/><circle cx="332" cy="64" r="5"/>
  </g>
  <g fill="#C11D63">
    <circle cx="107" cy="165" r="4"/><circle cx="413" cy="165" r="4"/><circle cx="95" cy="270" r="4"/><circle cx="454" cy="270" r="4"/><circle cx="197" cy="64" r="4"/><circle cx="332" cy="64" r="4"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#46515F">
    <text x="79" y="159">08</text><text x="420" y="159">09</text><text x="65" y="264">14</text><text x="464" y="264">15</text><text x="174" y="58">02</text><text x="340" y="58">03</text>
  </g>
  <g>
    <rect x="55" y="440" width="450" height="44" rx="12" fill="#F6F7F9" stroke="#DDE2E8"/>
    <text x="76" y="467" font-family="Arial, sans-serif" font-size="14" fill="#4B5563">Item 14</text>
    <text x="170" y="467" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#171A21">Hydraulic control valve</text>
    <text x="405" y="467" font-family="Arial, sans-serif" font-size="13" fill="#697386">P/N 88-2140</text>
  </g>
</svg>
</div>
      <div>
        <div class="section-head mobile-center mobile-scan-left">
          <h2>Translate Illustrated Parts Catalogs Without Losing the Connection Between Image and Part</h2>
          <p class="lead">Illustrated parts catalog translation depends on preserving the relationship between every visual callout and its corresponding parts data. A component identified as item 14 in an exploded view must still correspond to item 14 in the translated parts table.</p>
        </div>
        <div class="callout-list">
          <div class="callout"><h3>Exploded Views</h3><p>Preserve equipment, assembly, and component relationships while translating titles, captions, labels, notes, and related text.</p></div>
          <div class="callout"><h3>Numbered Callouts &amp; Parts Lists</h3><p>Maintain the connection between illustration numbers and corresponding component descriptions, part numbers, quantities, and table entries.</p></div>
          <div class="callout"><h3>Assemblies &amp; Subassemblies</h3><p>Keep naming consistent across complete assemblies, nested subassemblies, replaceable units, service kits, and individual components.</p></div>
          <div class="callout"><h3>Cross-References &amp; Graphics</h3><p>Preserve references among figures, tables, sections, component lists, and translated text embedded in technical graphics.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="stp-section blush" id="data-integrity">
    <div class="stp-shell">
      <div class="section-head center mobile-center mobile-scan-left">
        <p class="eyebrow">DATA INTEGRITY</p>
        <h2>Translate the Language. Protect the Part Data.</h2>
        <p class="lead">Parts records contain a mixture of translatable language and technical information that should not be changed. Stepes can define field-level processing rules before translation so designated identifiers and values remain protected.</p>
      </div>
      <div class="data-panel">
        <div class="data-row"><div>Component description</div><div><span class="treatment translate"><i></i>Translate</span></div></div>
        <div class="data-row"><div>Assembly name</div><div><span class="treatment translate"><i></i>Translate</span></div></div>
        <div class="data-row"><div>Part number / item number / model number</div><div><span class="treatment"><i></i>Protect</span></div></div>
        <div class="data-row"><div>Manufacturer code / serial range / database key</div><div><span class="treatment"><i></i>Protect</span></div></div>
        <div class="data-row"><div>Quantity / measurement / technical value</div><div><span class="treatment validate"><i></i>Validate or localize as specified</span></div></div>
        <div class="data-row"><div>Technical specification / notes / warning text</div><div><span class="treatment translate"><i></i>Translate and review</span></div></div>
        <div class="data-row"><div>URL / system variable / engineering reference</div><div><span class="treatment"><i></i>Protect</span></div></div>
      </div>
      <p class="note" style="margin-top:14px">Processing rules can also be configured for SKUs, formulas, tags, proprietary names, revision codes, and other content requiring special handling.</p>
    </div>
  </section>

  <section class="stp-section" id="electronic-parts-catalogs">
    <div class="stp-shell system-grid">
      <div>
        <div class="section-head mobile-center mobile-scan-left">
          <p class="eyebrow">DIGITAL PARTS SYSTEMS</p>
          <h2>Electronic Parts Catalog Translation for Modern Service Networks</h2>
          <p class="lead">Manufacturers increasingly publish parts information through electronic parts catalogs, dealer websites, mobile applications, service platforms, ecommerce environments, online lookup tools, and interactive diagrams.</p>
        </div>
        <p style="margin-top:22px">Stepes can localize underlying multilingual content while preserving the technical structure required by the application. Electronic parts catalog localization can include component descriptions, categories, taxonomies, navigation, search terminology, technical specifications, service notes, accessories, repair kits, replacement parts, and fitment or applicability information.</p>
        <a class="link-arrow" href="https://www.stepes.com/developers/translation-api/">Translation API <span>→</span></a>
      </div>
      <div class="system-mock" aria-label="Electronic parts catalog interface">
        <div class="system-top"><strong>Electronic Parts Catalog</strong><span class="status">Localized view</span></div>
        <div class="searchbox">Search component, assembly, or part number</div>
        <div class="part-result"><div class="thumb">◫</div><div><strong>Hydraulic control valve</strong><span>Hydraulic system / Control assembly</span></div><div class="part-number">88-2140</div></div>
        <div class="part-result"><div class="thumb">◫</div><div><strong>Shaft seal kit</strong><span>Drive assembly / Service kit</span></div><div class="part-number">SK-4108</div></div>
        <div class="part-result"><div class="thumb">◫</div><div><strong>Pressure sensor module</strong><span>Controls / Sensor assembly</span></div><div class="part-number">PS-3211</div></div>
      </div>
    </div>
  </section>

  <section class="stp-section soft" id="structured-data">
    <div class="stp-shell split">
      <div class="section-head mobile-center mobile-scan-left">
        <p class="eyebrow">STRUCTURED CONTENT</p>
        <h2>Translate High-Volume Parts Data Without Breaking Its Structure</h2>
        <p class="lead">Parts database localization often involves high volumes of recurring component records managed outside traditional publishing files.</p>
        <div class="format-row">
          <span class="format-label">Excel</span><span class="format-label">CSV / TSV</span><span class="format-label">XML</span><span class="format-label">JSON</span><span class="format-label">Database Exports</span><span class="format-label">PIM</span><span class="format-label">ERP</span><span class="format-label">CMS</span><span class="format-label">API Workflows</span>
        </div>
      </div>
      <div class="editorial-stack">
        <div class="editorial-row"><div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h14v16H5z"/><path d="M9 4v16M5 9h14M5 15h14"/></svg></div><div><h3>Field-Aware Translation</h3><p>Process approved language fields while protecting IDs, product codes, database keys, variables, and other designated content.</p></div></div>
        <div class="editorial-row"><div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/><circle cx="8" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="11" cy="17" r="2"/></svg></div><div><h3>Structure Preservation</h3><p>Maintain fields, tags, delimiters, syntax, and relationships needed for downstream reintegration.</p></div></div>
        <div class="editorial-row"><div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16"/><circle cx="12" cy="12" r="8"/></svg></div><div><h3>Terminology &amp; Automated QA</h3><p>Apply approved component terminology and detect potential missing translations, protected-content changes, and structural inconsistencies.</p></div></div>
        <div class="editorial-row"><div class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 5h14v14H5z"/><path d="M8 12l3 3 5-6"/></svg></div><div><h3>Structured Delivery</h3><p>Return translated parts content in the agreed format for the customer's publishing, database, portal, or import workflow.</p></div></div>
      </div>
    </div>
  </section>

  <section class="stp-section" id="product-lifecycle">
    <div class="stp-shell">
      <div class="section-head center mobile-center mobile-scan-left">
        <p class="eyebrow">PRODUCT LIFECYCLE</p>
        <h2>Parts Information From Product Launch Through Years of Service</h2>
        <p class="lead">Complex equipment can remain in operation long after the original sale. The information supporting that equipment may evolve throughout its entire service life.</p>
      </div>
      <div class="timeline">
        <div class="timeline-step"><span class="timeline-num">01</span><h3>Launch</h3><p>Initial catalogs, component lists, accessories, dealer information, and service kits.</p></div>
        <div class="timeline-step"><span class="timeline-num">02</span><h3>Operate</h3><p>Consumables, wear parts, attachments, optional accessories, and routine replacements.</p></div>
        <div class="timeline-step"><span class="timeline-num">03</span><h3>Maintain</h3><p>Preventive-maintenance components, recommended spares, filters, seals, and scheduled replacements.</p></div>
        <div class="timeline-step"><span class="timeline-num">04</span><h3>Repair</h3><p>Replacement assemblies, subassemblies, troubleshooting-related parts, and field-service materials.</p></div>
        <div class="timeline-step"><span class="timeline-num">05</span><h3>Upgrade</h3><p>Retrofit kits, updated assemblies, revised components, configurations, and engineering changes.</p></div>
        <div class="timeline-step"><span class="timeline-num">06</span><h3>Support</h3><p>Legacy parts, superseded numbers, discontinued components, and installed-base documentation.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section soft" id="aftermarket">
    <div class="stp-shell bridge-grid">
      <div class="bridge-panel">
        <h2>Keep Global Service and Aftermarket Networks Running</h2>
        <p>Parts catalogs sit at the center of maintenance, repair, inventory, ordering, replacement, and field service. Accurate multilingual parts information helps connect these activities across global markets.</p>
        <ul class="plain-list">
          <li>OEM replacement parts</li><li>Service and maintenance kits</li><li>Consumables and wear components</li><li>Recommended spares</li><li>Repair assemblies</li><li>Accessories and attachments</li><li>Retrofit components</li><li>Dealer parts information</li>
        </ul>
        <a class="link-arrow" href="https://www.stepes.com/mro-translation-services/">MRO Translation Services <span>→</span></a>
      </div>
      <div class="bridge-panel">
        <p class="eyebrow">CONNECTED DOCUMENTATION</p>
        <h2>Parts Catalogs and Technical Documentation Should Speak the Same Language</h2>
        <p>A service technician should not have to interpret two different translations for the same component because one appears in a maintenance manual and the other in a parts catalog.</p>
        <div class="chain">
          <div class="chain-item">Parts Catalog</div><div class="chain-item">Maintenance Manual</div><div class="chain-item">Service Manual</div><div class="chain-item">Troubleshooting</div><div class="chain-item">Training</div><div class="chain-item">Dealer System</div>
        </div>
        <a class="link-arrow" href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">Technical Manual Translation Services <span>→</span></a>
      </div>
    </div>
  </section>

  <section class="stp-section" id="industries">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">GLOBAL INDUSTRIES</p>
        <h2>Parts Catalog Translation for Complex Products and Equipment</h2>
        <p class="lead">Stepes supports industries where accurate component identification, service documentation, and global aftermarket support are essential.</p>
      </div>
      <div class="industry-grid">
        <div class="industry-card"><h3>Heavy Equipment</h3><p>Construction, mining, roadbuilding, agricultural, forestry, earthmoving, and other off-highway equipment.</p><a class="link-arrow" href="https://www.stepes.com/heavy-equipment-translation-services/">Heavy Equipment Translation <span>→</span></a></div>
        <div class="industry-card"><h3>Industrial Machinery</h3><p>Production equipment, machine tools, pumps, valves, compressors, motors, controls, conveyors, and processing systems.</p><a class="link-arrow" href="https://www.stepes.com/industrial-translation-services/">Industrial Translation <span>→</span></a></div>
        <div class="industry-card"><h3>Automotive &amp; Transportation</h3><p>Vehicle components, service parts, aftermarket products, fitment information, dealer systems, and replacement assemblies.</p><a class="link-arrow" href="https://www.stepes.com/automotive-translation-services/">Automotive Translation <span>→</span></a></div>
        <div class="industry-card"><h3>Agriculture &amp; Forestry</h3><p>Tractors, harvesters, implements, attachments, forestry machines, cutting systems, hydraulic components, and replacement parts.</p><a class="link-arrow" href="https://www.stepes.com/agriculture-translation-services/">Agriculture Translation <span>→</span></a><a class="link-arrow" href="https://www.stepes.com/forestry-translation-services/" style="margin-top:8px">Forestry Translation <span>→</span></a></div>
        <div class="industry-card"><h3>Energy &amp; Power Equipment</h3><p>Power-generation systems, electrical equipment, renewable energy, storage systems, assemblies, and service components.</p><a class="link-arrow" href="https://www.stepes.com/energy-translation-services/">Energy Translation <span>→</span></a></div>
        <div class="industry-card"><h3>Material Handling</h3><p>Forklifts, cranes, lifting systems, warehouse equipment, industrial vehicles, attachments, and replacement components.</p></div>
        <div class="industry-card"><h3>Electronics &amp; Technical Equipment</h3><p>Electronic assemblies, modules, sensors, controllers, replaceable units, accessories, and serviceable components.</p></div>
        <div class="industry-card"><h3>Engineered Products</h3><p>Specialized products where structured component information must remain consistent across catalogs, documentation, and support systems.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section dark" id="ai-translation">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">AI + HUMAN QUALITY</p>
        <h2>Scale Parts Catalog Translation With AI, Translation Memory, and Technical Expertise</h2>
        <p class="lead">Parts content ranges from highly repetitive structured records to specialized engineering terminology. Stepes matches translation technology and professional expertise to the purpose, complexity, and risk of the content.</p>
      </div>
      <div class="ai-lanes">
        <div class="ai-lane"><div class="lane-tag">Technical precision</div><h3>New or Complex Technical Content</h3><p>Technical linguists, approved terminology, translation memory, professional review, and quality assurance.</p><div class="ai-flow">Primary objective: technical accuracy and meaning</div></div>
        <div class="ai-lane"><div class="lane-tag">Balanced scale</div><h3>Recurring Catalog Content</h3><p>Translation memory and AI-assisted translation combined with technical linguistic review and automated QA.</p><div class="ai-flow">Primary objective: consistency and efficiency</div></div>
        <div class="ai-lane"><div class="lane-tag">High-volume data</div><h3>Structured Parts Records</h3><p>Controlled AI workflows, approved terminology, protected-field rules, automated validation, and targeted professional review.</p><div class="ai-flow">Primary objective: scalable multilingual throughput</div></div>
      </div>
      <p style="margin-top:28px;max-width:920px">The goal is not to automate every sentence. It is to use automation where it adds value while focusing professional expertise on terminology, technical meaning, exceptions, and content that requires greater review. Where parts content includes safety-sensitive instructions or other higher-risk information, additional professional review can be configured around the project requirements.</p>
    </div>
  </section>

  <section class="stp-section" id="language-assets">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">LANGUAGE ASSETS</p>
        <h2>Reuse Approved Parts Translations Across Models and Releases</h2>
        <p class="lead">Parts catalogs are highly repetitive. Translation memory and terminology management help approved content carry forward across models, product families, service documentation, catalog revisions, and recurring aftermarket updates.</p>
      </div>
      <div class="asset-grid">
        <div class="asset-item"><h3>Translation Memory</h3><p>Reuse approved bilingual component descriptions, standard notes, recurring assemblies, headings, and technical phrases.</p><a class="link-arrow" href="https://www.stepes.com/translation-memory/">Translation Memory <span>→</span></a></div>
        <div class="asset-item"><h3>Terminology Management</h3><p>Control approved component names, abbreviations, technical terminology, brand language, and do-not-translate content.</p><a class="link-arrow" href="https://www.stepes.com/terminology-management/">Terminology Management <span>→</span></a></div>
        <div class="asset-item"><h3>Protected Terms</h3><p>Identify part numbers, model numbers, trademarks, product codes, proprietary names, and other content that must remain unchanged.</p></div>
        <div class="asset-item"><h3>Reviewer Feedback</h3><p>Capture validated corrections and terminology decisions so improvements from one review strengthen future catalogs and releases.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section soft" id="continuous-localization">
    <div class="stp-shell split equal">
      <div class="section-head mobile-center mobile-scan-left">
        <p class="eyebrow">CONTINUOUS LOCALIZATION</p>
        <h2>Keep Multilingual Parts Catalogs Current as Products Change</h2>
        <p class="lead">Engineering updates introduce new components, revised assemblies, supplier changes, obsolete parts, replacement numbers, retrofit kits, and expanded product families.</p>
      </div>
      <div class="editorial-stack">
        <div class="callout"><h3>Reuse unchanged content</h3><p>Preserve approved translations when the source and context remain appropriate.</p></div>
        <div class="callout"><h3>Focus on modified content</h3><p>Leverage existing translations while concentrating review on the content that changed.</p></div>
        <div class="callout"><h3>Manage new and superseded parts</h3><p>Translate newly introduced components and update multilingual information for replacement numbers and discontinued items.</p></div>
        <div class="callout"><h3>Carry terminology forward</h3><p>Apply newly approved component names and reviewer decisions to future catalogs and related content.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section" id="publishing-quality">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">TECHNICAL PUBLISHING &amp; QA</p>
        <h2>Preserve Diagrams, Tables, Layouts, and Technical Relationships</h2>
        <p class="lead">A parts catalog is not finished when the language is finished. Exploded diagrams, callouts, tables, cross-references, graphics, and multilingual typography must continue to work in the final format.</p>
      </div>
      <div class="dual-panels">
        <div class="quality-panel">
          <h3>Multilingual File Engineering</h3>
          <div class="quality-list">
            <div class="quality-row"><strong>Text Reflow</strong><span>Manage text expansion, contraction, table resizing, and shifting page flow.</span></div>
            <div class="quality-row"><strong>Technical Tables</strong><span>Maintain readable alignment across part numbers, descriptions, quantities, and specifications.</span></div>
            <div class="quality-row"><strong>Illustrations</strong><span>Translate applicable graphical text while preserving callout and parts-entry relationships.</span></div>
            <div class="quality-row"><strong>Typography</strong><span>Support multilingual fonts, CJK typography, and right-to-left requirements where applicable.</span></div>
            <div class="quality-row"><strong>Cross-References</strong><span>Check figure numbers, section references, page references, and related navigation after production.</span></div>
          </div>
          <a class="link-arrow" href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing <span>→</span></a>
        </div>
        <div class="quality-panel">
          <h3>Parts Catalog Quality Controls</h3>
          <div class="quality-list">
            <div class="quality-row"><strong>Terminology</strong><span>Check component descriptions against approved terms and project glossaries.</span></div>
            <div class="quality-row"><strong>Identifiers</strong><span>Verify designated part, model, item, and engineering codes remain unchanged.</span></div>
            <div class="quality-row"><strong>Numbers &amp; Units</strong><span>Check designated quantities, measurements, specifications, and units for consistency with project requirements.</span></div>
            <div class="quality-row"><strong>Completeness</strong><span>Identify missing translations, skipped records, and unintended source-language content.</span></div>
            <div class="quality-row"><strong>Structure</strong><span>Validate applicable tags, fields, syntax, and file organization in structured content.</span></div>
            <div class="quality-row"><strong>Visual QA</strong><span>Review formatting, fonts, diagrams, tables, line breaks, text expansion, and layout integrity.</span></div>
          </div>
        </div>
      </div>
      <div class="format-row" style="justify-content:center;margin-top:26px">
        <span class="format-label">Adobe InDesign</span><span class="format-label">Adobe Illustrator</span><span class="format-label">Adobe FrameMaker</span><span class="format-label">PDF</span><span class="format-label">Microsoft Excel</span><span class="format-label">Word</span><span class="format-label">XML</span><span class="format-label">HTML</span>
      </div>
    </div>
  </section>

  <section class="stp-section blush" id="customer-review">
    <div class="stp-shell">
      <div class="section-head center mobile-center mobile-scan-left">
        <p class="eyebrow">CUSTOMER REVIEW</p>
        <h2>Turn Engineering and Dealer Knowledge Into Reusable Language Assets</h2>
        <p class="lead">Manufacturers often have terminology knowledge distributed among engineers, technical writers, product teams, service organizations, dealers, and regional reviewers. Stepes can capture approved changes for future reuse.</p>
      </div>
      <div class="review-flow">
        <div class="review-step"><div class="review-num">01</div><h3>Translate</h3><p>Prepare multilingual content using agreed terminology and workflows.</p></div>
        <div class="review-step"><div class="review-num">02</div><h3>Review</h3><p>Customer experts or in-market reviewers validate designated content.</p></div>
        <div class="review-step"><div class="review-num">03</div><h3>Approve</h3><p>Preferred component names and terminology decisions are confirmed.</p></div>
        <div class="review-step"><div class="review-num">04</div><h3>Capture</h3><p>Approved changes are added to terminology and translation-memory resources.</p></div>
        <div class="review-step"><div class="review-num">05</div><h3>Reuse</h3><p>Future catalogs and technical content benefit from validated language.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section" id="enterprise">
    <div class="stp-shell split">
      <div class="section-head mobile-center mobile-scan-left">
        <p class="eyebrow">ENTERPRISE LANGUAGE OPERATIONS</p>
        <h2>Scale Parts Translation Across Brands, Models, Systems, and Markets</h2>
        <p class="lead">Large manufacturers may manage extensive parts records across business units, product families, source systems, brands, and regions.</p>
      </div>
      <div class="enterprise-rows">
        <div class="enterprise-row"><h3>Centralized Terminology</h3><p>Maintain approved multilingual component terminology across teams and content channels.</p></div>
        <div class="enterprise-row"><h3>Translation Memory</h3><p>Reuse validated language across models, releases, and related documentation.</p></div>
        <div class="enterprise-row"><h3>Workflow Automation</h3><p>Reduce repetitive file handling for recurring parts updates and structured content.</p></div>
        <div class="enterprise-row"><h3>System Integration</h3><p>Support structured content and API-enabled workflows for recurring enterprise translation needs.</p></div>
        <div class="enterprise-row"><h3>Multi-Market Review</h3><p>Coordinate regional or subject-matter review while preserving centralized terminology decisions.</p></div>
        <div class="enterprise-row"><h3>Continuous Translation</h3><p>Process new and changed parts information as catalogs, products, and systems evolve.</p></div>
      </div>
      <div class="btn-row" style="margin-top:26px">
        <a class="link-arrow" href="https://www.stepes.com/developers/translation-api/" style="margin-top:0">Translation API <span>→</span></a>
        <a class="link-arrow" href="https://www.stepes.com/translation-workflow-automation/" style="margin-top:0">Workflow Automation <span>→</span></a>
      </div>
    </div>
  </section>

  <section class="stp-section soft dense" id="languages">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        
        <h2>Parts Catalog Translation in 100+ Languages</h2>
        <p class="lead">Stepes supports global dealers, technicians, service teams, and customers with language workflows selected according to language, locale, technical subject matter, content type, and project requirements.</p>
      </div>
      <div class="language-list">
        <span>Spanish</span><span>Canadian French</span><span>French</span><span>German</span>
        <span>Italian</span><span>Dutch</span><span>Polish</span><span>Portuguese</span>
        <span>Simplified Chinese</span><span>Traditional Chinese</span><span>Japanese</span><span>Korean</span>
        <span>Arabic</span><span>Turkish</span><span>Vietnamese</span><span>Thai</span>
      </div>
      <div style="text-align:center"><a class="link-arrow" href="https://www.stepes.com/translation-languages/">View All Languages <span>→</span></a></div>
    </div>
  </section>

  <section class="stp-section" id="workflow">
    <div class="stp-shell">
      <div class="section-head center mobile-center mobile-scan-left">
        <p class="eyebrow">WORKFLOW</p>
        <h2>From Source Parts Information to Production-Ready Multilingual Content</h2>
        <p class="lead">Stepes brings technical translation, language assets, structured-data controls, multilingual publishing, and quality assurance together in one connected workflow.</p>
      </div>
      <div class="workflow">
        <div class="workflow-step"><span class="n">01</span><h3>Analyze</h3><p>Review source files or data, technical domain, languages, repetition, terminology, intended use, and deliverables.</p></div>
        <div class="workflow-step"><span class="n">02</span><h3>Prepare</h3><p>Identify translatable content, protected fields, part-number rules, language assets, and file-processing requirements.</p></div>
        <div class="workflow-step"><span class="n">03</span><h3>Translate</h3><p>Apply the appropriate combination of AI, translation memory, technical linguists, professional translators, and terminology controls.</p></div>
        <div class="workflow-step"><span class="n">04</span><h3>Review</h3><p>Validate linguistic accuracy, component meaning, approved terminology, consistency, and technical context.</p></div>
        <div class="workflow-step"><span class="n">05</span><h3>Validate &amp; Reintegrate</h3><p>Check identifiers, data, diagrams, tables, cross-references, structure, and formatting in the required production environment.</p></div>
        <div class="workflow-step"><span class="n">06</span><h3>Deliver &amp; Reuse</h3><p>Provide agreed multilingual files or structured data and retain approved language assets for future updates.</p></div>
      </div>
    </div>
  </section>

  <section class="stp-section soft" id="why-stepes">
    <div class="stp-shell">
      <div class="section-head center mobile-center">
        <p class="eyebrow">WHY STEPES</p>
        <h2>Parts Catalog Localization Built for Technical Content at Scale</h2>
      </div>
      <div class="choose-grid">
        <div class="choose-item"><h3>Technical Subject Expertise</h3><p>Match technical content with linguists experienced in manufacturing, machinery, equipment, automotive, energy, electronics, and relevant subject areas.</p></div>
        <div class="choose-item"><h3>Terminology at Scale</h3><p>Maintain consistent component names across catalogs, manuals, training, dealer systems, and related content.</p></div>
        <div class="choose-item"><h3>AI + Human Workflows</h3><p>Use translation technology and professional linguistic expertise according to the complexity and risk of each content type.</p></div>
        <div class="choose-item"><h3>Structured Data Expertise</h3><p>Translate designated language fields while preserving the organization required by parts databases and enterprise systems.</p></div>
        <div class="choose-item"><h3>Multilingual File Engineering</h3><p>Support diagrams, publishing files, complex tables, graphical content, and structured technical formats.</p></div>
        <div class="choose-item"><h3>Continuous Localization</h3><p>Reuse approved translations and terminology as products, engineering information, and catalogs evolve.</p></div>
      </div>

    </div>
  </section>

  <section class="stp-section dense" id="catalog-comparison">
    <div class="stp-shell">
      <div class="section-head center mobile-center mobile-scan-left">
        <p class="eyebrow">RELATED SERVICE</p>
        <h2>Product Catalogs and Parts Catalogs Serve Different Purposes</h2>
        <p class="lead">Product catalog translation supports product discovery and merchandising. Parts catalog translation supports component identification, service, ordering, and aftermarket operations. Stepes provides both because the content serves different users and workflows.</p>
      </div>
      <div class="compare-wrap">
        <div class="compare-head"><div>Product Catalog Translation</div><div>Parts Catalog Translation</div></div>
        <div class="compare-row"><div>Product discovery</div><div>Parts identification</div></div>
        <div class="compare-row"><div>Sales and marketing</div><div>Service and aftermarket</div></div>
        <div class="compare-row"><div>Product descriptions</div><div>Component descriptions</div></div>
        <div class="compare-row"><div>Features and benefits</div><div>Assemblies and subassemblies</div></div>
        <div class="compare-row"><div>Merchandising and PIM/PXM</div><div>EPCs and parts databases</div></div>
        <div class="compare-row"><div>Customer purchasing</div><div>Technician and dealer ordering</div></div>
        <div class="compare-row"><div>Brand language</div><div>Service terminology</div></div>
        <div class="compare-row"><div>Product presentation</div><div>Exploded views and callouts</div></div>
      </div>
      <div style="text-align:center"><a class="link-arrow" href="https://www.stepes.com/catalog-translation-services/">Catalog Translation Services <span>→</span></a></div>
    </div>
  </section>

  <section class="stp-section soft" id="faq">
    <div class="stp-shell">
      <div class="section-head mobile-center mobile-scan-left">
        <h2>Questions About Parts Catalog Translation</h2>
      </div>
      <div class="faq">
        <details open><summary>What are parts catalog translation services?</summary><div class="answer"><p>Parts catalog translation services localize the technical information used to identify, order, replace, and support components across languages. Content can include component descriptions, assembly names, parts lists, notes, illustrated callouts, service kits, replacement information, specifications, and structured parts records. Depending on the industry and region, this work may also be described as spare parts catalogue translation, replacement parts catalog translation, or parts manual translation.</p></div></details>
        <details><summary>What types of parts catalogs can Stepes translate?</summary><div class="answer"><p>Stepes supports illustrated parts catalogs, spare parts catalogs, replacement parts catalogs, electronic parts catalogs, digital parts lookup systems, structured parts databases, dealer catalogs, service parts information, and related aftermarket content.</p></div></details>
        <details><summary>Can Stepes translate illustrated parts catalogs with exploded diagrams?</summary><div class="answer"><p>Yes. Stepes supports exploded views, parts tables, numbered callouts, labels, notes, assembly descriptions, and related graphical content while preserving the relationship between illustration references and corresponding translated entries.</p></div></details>
        <details><summary>Can Stepes translate Electronic Parts Catalogs or EPCs?</summary><div class="answer"><p>Yes. Stepes supports electronic parts catalog translation for digital parts systems, dealer portals, lookup tools, service platforms, applications, and other EPC environments, including component descriptions, navigation, attributes, service notes, search terminology, and other translatable content.</p></div></details>
        <details><summary>How do you prevent part numbers from being translated or changed?</summary><div class="answer"><p>Stepes can define protected-content and field-level processing rules before translation. Part numbers, item numbers, model numbers, serial ranges, engineering codes, database keys, and other designated identifiers can be excluded from translation or validated according to project requirements.</p></div></details>
        <details><summary>Can Stepes translate parts databases, Excel, XML, CSV, or other structured content?</summary><div class="answer"><p>Yes. Stepes supports structured multilingual content in formats such as Excel, CSV, XML, JSON, database exports, PIM or ERP data, and other structured files. Processing rules can distinguish translatable language from keys, IDs, tags, variables, formulas, codes, and delimiters.</p></div></details>
        <details><summary>How do you maintain consistent component terminology across parts catalogs and service manuals?</summary><div class="answer"><p>Stepes uses terminology management, translation memory, approved glossaries, protected-term rules, and reviewer feedback to reuse validated component language across parts catalogs, service procedures, dealer systems, and related technical content.</p></div></details>
        <details><summary>Can existing translations be reused when a parts catalog is updated?</summary><div class="answer"><p>Yes. Translation memory can identify identical or similar content from earlier versions so approved translations can be reused where appropriate, allowing linguists and reviewers to focus on new components, engineering changes, and modified descriptions.</p></div></details>
        <details><summary>How does Stepes use AI for parts catalog translation?</summary><div class="answer"><p>Stepes can combine AI-enabled translation with translation memory, terminology management, protected-field controls, automated QA, and professional linguistic review. The workflow depends on the purpose, complexity, repetition, and risk of the content.</p></div></details>
        <details><summary>What is the difference between product catalog translation and parts catalog translation?</summary><div class="answer"><p>Product catalog translation primarily supports discovery, sales, marketing, merchandising, ecommerce, and customer-facing product information. Parts catalog translation supports component identification, maintenance, repair, parts ordering, dealer operations, and aftermarket support, with greater emphasis on identifiers, assemblies, diagrams, technical nomenclature, and structured parts data.</p></div></details>
        <details><summary>How many languages does Stepes support for parts catalog translation?</summary><div class="answer"><p>Stepes provides professional translation services in more than 100 languages and regional variants, including major European, Asian, Middle Eastern, and American market languages.</p></div></details>
      </div>
    </div>
  </section>

  <section class="final-cta" id="quote">
    <div class="final-box">
      <h2>Translate Your Parts Catalogs for Global Markets</h2>
      <p class="lead">Whether you need to translate an illustrated parts catalog, Electronic Parts Catalog, dealer parts system, structured component database, or an ongoing global aftermarket program, Stepes helps keep component terminology accurate, technical identifiers protected, and multilingual content consistent across your global service network.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote</a>
        <a class="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Stepes</a>
      </div>
    </div>
  </section>
</main>
`;

export default function PartsCatalogTranslationServicesWireframe() {
  return (
    <>
      <style>{STYLES}</style>
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
    </>
  );
}
