import React from "react";

const styles = String.raw`
:root{
  --magenta:#C11D63;--magenta-dark:#9F1D55;--burgundy:#7A1542;--blush:#FDF2F7;--pink-light:#F2A7C6;
  --ink:#172033;--body:#485162;--muted:#667085;--line:#E4E7EC;--soft:#F6F7F9;--white:#FFFFFF;
  --dark:#171A22;--dark-2:#20242E;--dark-body:#E8EAF0;--radius-lg:30px;--radius-md:22px;
}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--body);font-family:Inter,Arial,sans-serif;font-size:17px;line-height:1.66;-webkit-font-smoothing:antialiased}
a{color:var(--magenta);text-decoration:none;font-weight:600}a:hover{text-decoration:none;color:var(--magenta-dark)}
.bess-page{overflow:hidden}.shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section.dense{padding:80px 0}.soft{background:var(--soft)}.blush{background:var(--blush)}.dark{background:var(--dark);color:var(--dark-body)}
.eyebrow{display:block;margin:0 0 14px;color:var(--magenta);font-size:11px!important;line-height:1.4!important;font-weight:600!important;letter-spacing:.12em;text-transform:uppercase}.dark .eyebrow{color:var(--pink-light)}
h1,h2,h3{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--ink);font-weight:600;margin:0;letter-spacing:-.025em}.dark h1,.dark h2,.dark h3{color:#fff}h1{font-size:48px;line-height:1.06;max-width:760px}h2{font-size:36px;line-height:1.14;max-width:780px}h3{font-size:24px;line-height:1.25}.lead{font-size:18px;line-height:1.65;max-width:810px}.copy{max-width:760px}.copy p:first-child{margin-top:0}.copy p:last-child{margin-bottom:0}.muted{color:var(--muted)}
.heading-group{margin-bottom:42px}.heading-group.center{text-align:center;margin-left:auto;margin-right:auto}.heading-group.center h2,.heading-group.center .lead{margin-left:auto;margin-right:auto}.heading-group h2+.lead{margin-top:18px}.dark .lead,.dark p,.dark li{color:var(--dark-body)}
.hero{padding:104px 0 86px;background:#fff}.hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(400px,.92fr);gap:70px;align-items:center}.hero .lead{margin:24px 0 0;max-width:680px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 22px;border-radius:999px;border:1px solid transparent;font-size:16px;font-weight:600;transition:.2s ease}.btn svg{width:18px;height:18px}.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:focus,.btn-primary:active{background:var(--magenta);color:#fff!important}.btn-primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}.btn-primary svg,.btn-primary:visited svg,.btn-primary:hover svg,.btn-primary:focus svg,.btn-primary:active svg{stroke:#fff!important}.btn-secondary{background:#fff;border-color:#CDD2DA;color:var(--ink)}.btn-secondary:hover{border-color:#AEB4BF;color:var(--ink)}
.hero-note{margin-top:22px;font-size:17px;color:var(--body)}.hero-art{position:relative;min-height:500px;display:flex;align-items:center;justify-content:center}.hero-art:before{content:"";position:absolute;width:360px;height:360px;border-radius:50%;background:var(--blush);right:5%;top:11%;z-index:0}.hero-art svg{position:relative;z-index:1;width:100%;height:auto;max-width:520px}.hero-art .outline{fill:none;stroke:#485162;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.hero-art .softline{fill:none;stroke:#8A93A3;stroke-width:1.6}.hero-art .accent{fill:none;stroke:var(--magenta);stroke-width:2.4;stroke-linecap:round}.hero-art .accent-fill{fill:var(--magenta)}
.proofbar{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.proofgrid{display:grid;grid-template-columns:repeat(4,1fr)}.proofitem{padding:24px 26px}.proofitem+.proofitem{border-left:1px solid var(--line)}.proofitem strong{display:block;color:var(--ink);font-size:17px;font-weight:600;margin-bottom:2px}.proofitem span{font-size:17px;color:var(--body)}
.split{display:grid;grid-template-columns:minmax(300px,.78fr) minmax(0,1.22fr);gap:86px;align-items:start}.split .heading-group{margin-bottom:0}.editorial-link{display:inline-flex;align-items:center;gap:7px;margin-top:18px;color:var(--magenta);font-size:16px}.editorial-link svg{width:16px;height:16px;transition:transform .2s;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.editorial-link:hover svg{transform:translateX(3px)}.dark .editorial-link{color:var(--pink-light)}.btn:focus-visible,.editorial-link:focus-visible,.related a:focus-visible,summary:focus-visible{outline:2px solid var(--magenta);outline-offset:3px}
.system-panel{border:1px solid #323744;border-radius:var(--radius-lg);overflow:hidden;background:var(--dark-2)}.system-head{padding:34px 36px 26px;border-bottom:1px solid #343A47}.system-head p{margin:12px 0 0;max-width:760px}.system-grid{display:grid;grid-template-columns:repeat(2,1fr)}.system-item{padding:28px 34px;display:grid;grid-template-columns:46px 1fr;gap:16px;align-items:start;border-bottom:1px solid #343A47}.system-item:nth-child(odd){border-right:1px solid #343A47}.system-item:nth-last-child(-n+2){border-bottom:none}.iconbox{width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:#292E39;border:1px solid #3D4351}.iconbox svg{width:22px;height:22px;stroke:#F2A7C6}.system-item h3{font-size:20px;margin:1px 0 7px}.system-item p{font-size:17px;line-height:1.55;margin:0}
.timeline{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden;background:#fff}.step{padding:28px 26px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:230px}.step:nth-child(4n){border-right:none}.step:nth-last-child(-n+4){border-bottom:none}.step-num{font-size:14px;font-weight:600;color:var(--magenta);margin-bottom:18px;letter-spacing:.06em}.step h3{font-size:20px;margin-bottom:10px}.step p{font-size:16px;line-height:1.58;margin:0}
.rows{border-top:1px solid var(--line)}.row{display:grid;grid-template-columns:250px 1fr;gap:34px;padding:27px 0;border-bottom:1px solid var(--line);align-items:start}.row h3{font-size:20px}.row p{margin:0}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.chip{display:inline-flex;padding:7px 10px;border-radius:999px;background:#F2F3F5;color:#4A5362;font-size:14px;line-height:1.2;font-weight:600}
.application-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;background:#fff}.application{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.application:nth-child(3n){border-right:none}.application:nth-last-child(-n+3){border-bottom:none}.application h3{font-size:20px;margin-bottom:10px}.application p{margin:0}
.control-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden}.control{padding:28px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}.control:nth-child(even){border-right:none}.control:nth-last-child(-n+2){border-bottom:none}.control .iconline{display:flex;align-items:center;gap:14px;margin-bottom:10px}.control .iconline svg{width:22px;height:22px;stroke:var(--magenta)}.control h3{font-size:20px}.control p{margin:0}
.software-layout{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:center}.software-copy ul{padding:0;margin:24px 0 0;list-style:none}.software-copy li{position:relative;padding-left:18px;margin:9px 0}.software-copy li:before{content:"";position:absolute;left:0;top:.72em;width:6px;height:6px;border-radius:50%;background:var(--pink-light)}.software-ui{background:#fff;border-radius:28px;border:1px solid #3A404D;overflow:hidden;color:var(--body);box-shadow:0 22px 60px rgba(0,0,0,.18)}.ui-top{height:48px;background:#F4F5F7;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 18px;font-size:14px;color:#667085}.ui-dots{display:flex;gap:6px}.ui-dots i{width:8px;height:8px;border-radius:50%;background:#CDD2DA}.ui-main{display:grid;grid-template-columns:150px 1fr;min-height:410px}.ui-side{border-right:1px solid var(--line);padding:18px 14px;background:#FAFAFB}.ui-nav{padding:10px 12px;border-radius:10px;font-size:14px;margin-bottom:6px;color:#586173}.ui-nav.active{background:var(--blush);color:var(--magenta);font-weight:600}.ui-content{padding:24px}.ui-kicker{font-size:14px;color:#667085;margin-bottom:4px}.ui-title{font-size:22px;font-weight:600;color:var(--ink);margin-bottom:18px}.metric-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.metric{border:1px solid var(--line);border-radius:14px;padding:14px}.metric span{display:block;font-size:14px;color:#667085}.metric strong{font-size:20px;color:var(--ink);font-weight:600}.status-list{margin-top:18px;border-top:1px solid var(--line)}.status{display:grid;grid-template-columns:1fr auto;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);font-size:16px}.status b{color:var(--ink);font-weight:600}.status-tag{font-size:14px;padding:3px 8px;border-radius:999px;background:#F2F3F5;color:#586173}.status-tag.warn{background:var(--blush);color:var(--magenta)}
.safety-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}.safety{padding:26px 0;border-top:2px solid var(--magenta)}.safety h3{font-size:20px;margin-bottom:10px}.safety p{margin:0}.safety ul{margin:14px 0 0;padding-left:19px}.safety li{margin:5px 0}
.standard-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:start}.standard-panel{background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);padding:34px}.standard-panel h3{font-size:20px;margin-bottom:12px}.standard-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px 24px;margin-top:18px}.standard-list span{padding:8px 0;border-bottom:1px solid var(--line);font-size:16px;color:var(--body)}.boundary{margin-top:24px;padding:18px 20px;border-radius:16px;background:#F7F7F8;border-left:3px solid var(--magenta);font-size:17px;color:var(--body)}
.resource-band{display:grid;grid-template-columns:1.1fr .9fr;gap:50px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);padding:42px}.resource-visual{min-height:250px;border-radius:22px;background:linear-gradient(145deg,#252A35,#171A22);padding:30px;display:flex;flex-direction:column;justify-content:space-between}.resource-visual .eyebrow{color:var(--pink-light)}.resource-visual h3{color:#fff;font-size:27px;max-width:430px}.resource-tags{display:flex;flex-wrap:wrap;gap:8px}.resource-tags span{font-size:14px;color:#F2F4F7;border:1px solid #474D5A;border-radius:999px;padding:7px 9px}
.service-flow{display:grid;grid-template-columns:repeat(6,1fr);align-items:center;margin-top:36px}.service-node{position:relative;text-align:center;padding:0 10px}.service-node:not(:last-child):after{content:"";position:absolute;top:22px;right:-10px;width:20px;height:1px;background:#D6DAE1}.service-dot{width:44px;height:44px;margin:0 auto 10px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #D6DAE1;background:#fff}.service-dot svg{width:20px;height:20px;stroke:var(--magenta)}.service-node strong{font-size:16px;color:var(--ink);display:block}.service-node span{font-size:16px;color:var(--muted);display:block;line-height:1.4;margin-top:3px}
.term-band{border:1px solid var(--line);border-radius:var(--radius-lg);padding:38px;background:#fff}.term-flow{display:flex;align-items:center;gap:0;margin-top:30px;overflow:hidden;border:1px solid var(--line);border-radius:18px}.term-flow span{position:relative;flex:1;text-align:center;padding:18px 12px;font-size:16px;color:var(--ink);font-weight:600}.term-flow span+span{border-left:1px solid var(--line)}.term-sample{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:26px}.term-sample span{border-radius:12px;background:#F7F7F8;padding:11px 12px;font-size:16px;color:#4F5968}
.workflow-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.tier{border-radius:var(--radius-md);padding:30px;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column}.tier.featured{border-top:3px solid var(--magenta);padding-top:28px}.tier .label{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--magenta);margin-bottom:10px}.tier h3{font-size:22px;margin-bottom:12px}.tier p{margin:0 0 18px}.tier ul{margin:0 0 22px;padding-left:18px}.tier li{margin:6px 0}.workflow-line{margin-top:auto;padding-top:18px;border-top:1px solid var(--line);font-size:16px;color:#586173;font-weight:600}
.file-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:76px}.format-groups{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}.format{padding:24px 0 24px;border-bottom:1px solid var(--line)}.format:nth-child(odd){padding-right:30px;border-right:1px solid var(--line)}.format:nth-child(even){padding-left:30px}.format h3{font-size:19px;margin-bottom:9px}.format p{font-size:17px;margin:0}
.audience-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden}.audience{padding:27px 28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.audience:nth-child(3n){border-right:none}.audience:nth-last-child(-n+3){border-bottom:none}.audience h3{font-size:19px;margin-bottom:8px}.audience p{margin:0;font-size:17px}
.lang-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:80px;align-items:start}.lang-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid #3A404D}.lang-group{padding:24px 28px 24px 0;border-bottom:1px solid #3A404D}.lang-group:nth-child(even){padding-left:28px;border-left:1px solid #3A404D}.lang-group h3{font-size:19px;margin-bottom:7px}.lang-group p{margin:0;font-size:17px}
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid #3A404D;border-left:1px solid #3A404D;border-radius:var(--radius-lg);overflow:hidden}.why{padding:28px;border-right:1px solid #3A404D;border-bottom:1px solid #3A404D}.why:nth-child(even){border-right:none}.why:nth-last-child(-n+2){border-bottom:none}.why h3{font-size:20px;margin-bottom:8px}.why p{margin:0}
.continuous{display:grid;grid-template-columns:repeat(6,1fr);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;background:#fff}.continuous-step{padding:28px 20px;border-right:1px solid var(--line);min-height:240px}.continuous-step:last-child{border-right:none}.continuous-step .step-num{margin-bottom:20px}.continuous-step h3{font-size:18px;margin-bottom:9px}.continuous-step p{font-size:16px;line-height:1.55;margin:0}
.related-list{border-top:1px solid var(--line)}.related{display:grid;grid-template-columns:310px 1fr auto;gap:36px;align-items:center;padding:22px 0;border-bottom:1px solid var(--line)}.related h3{font-size:19px}.related p{margin:0;font-size:17px}.related a{display:inline-flex;align-items:center;gap:7px;white-space:nowrap;font-size:16px}.related a svg{width:16px;height:16px;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.faq-panel{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}details{border-bottom:1px solid var(--line)}details:last-child{border-bottom:none}summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:30px;padding:23px 2px;color:var(--ink);font-weight:600;font-size:18px}summary::-webkit-details-marker{display:none}.plus{width:28px;height:28px;border-radius:50%;border:1px solid #D6DAE1;position:relative;flex:0 0 auto}.plus:before,.plus:after{content:"";position:absolute;left:7px;right:7px;top:13px;height:1.5px;background:#596273}.plus:after{transform:rotate(90deg)}details[open] .plus:after{transform:rotate(0)}.faq-answer{max-width:840px;padding:0 2px 24px;font-size:17px}.faq-answer p{margin:0}
.final-wrap{padding:96px 0}.final-cta{background:var(--blush);border:1px solid #F1D7E3;border-radius:var(--radius-lg);padding:58px 60px;text-align:center}.final-cta h2{margin:0 auto;max-width:820px}.final-cta .lead{margin:18px auto 0;max-width:780px}.final-cta .hero-actions{justify-content:center;margin-top:28px}
@media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr 430px;gap:40px}.system-grid{grid-template-columns:1fr 1fr}.timeline{grid-template-columns:repeat(2,1fr)}.step:nth-child(4n){border-right:1px solid var(--line)}.step:nth-child(2n){border-right:none}.step:nth-last-child(-n+4){border-bottom:1px solid var(--line)}.step:nth-last-child(-n+2){border-bottom:none}.application-grid,.audience-grid{grid-template-columns:repeat(2,1fr)}.application:nth-child(3n),.audience:nth-child(3n){border-right:1px solid var(--line)}.application:nth-child(2n),.audience:nth-child(2n){border-right:none}.application:nth-last-child(-n+3),.audience:nth-last-child(-n+3){border-bottom:1px solid var(--line)}.application:nth-last-child(-n+2){border-bottom:none}.audience:nth-last-child(-n+2){border-bottom:1px solid var(--line)}.audience:last-child{grid-column:1/-1;border-right:none;border-bottom:none}.software-layout,.standard-layout,.resource-band{gap:42px}.continuous{grid-template-columns:repeat(3,1fr)}.continuous-step:nth-child(3){border-right:none}.continuous-step:nth-child(-n+3){border-bottom:1px solid var(--line)}.related{grid-template-columns:250px 1fr auto}}
@media(max-width:820px){.shell{padding-left:24px;padding-right:24px}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero .eyebrow{text-align:center}.hero h1{margin-left:auto;margin-right:auto;text-align:center}.hero .lead,.hero-note{text-align:center;margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.section{padding:76px 0}.section.dense{padding:68px 0}.hero{padding:82px 0 70px}.hero-grid,.split,.software-layout,.standard-layout,.resource-band,.file-layout,.lang-layout{grid-template-columns:1fr}.hero-grid{gap:32px}.hero-art{min-height:340px}.hero-art:before{width:270px;height:270px;right:15%}.proofgrid{grid-template-columns:repeat(2,1fr)}.proofitem:nth-child(3){border-left:none;border-top:1px solid var(--line)}.proofitem:nth-child(4){border-top:1px solid var(--line)}.split{gap:30px}.split .heading-group:not(.keep-left),.software-layout .heading-group:not(.keep-left),.file-layout .heading-group:not(.keep-left),.lang-layout .heading-group:not(.keep-left){text-align:center;margin-left:auto;margin-right:auto}.split .heading-group:not(.keep-left) h2,.software-layout .heading-group:not(.keep-left) h2,.file-layout .heading-group:not(.keep-left) h2,.lang-layout .heading-group:not(.keep-left) h2{margin-left:auto;margin-right:auto}.system-item{padding:26px}.application-grid,.audience-grid{grid-template-columns:1fr 1fr}.software-ui{max-width:650px;margin:0 auto}.service-flow{grid-template-columns:repeat(3,1fr);row-gap:28px}.service-node:nth-child(3):after,.service-node:nth-child(6):after{display:none}.term-flow{display:grid;grid-template-columns:repeat(4,1fr)}.term-flow span+span{border-left:1px solid var(--line)}.term-flow span:nth-child(5){border-left:none;border-top:1px solid var(--line)}.term-flow span:nth-child(n+5){border-top:1px solid var(--line)}.workflow-tiers{grid-template-columns:1fr}.format-groups{max-width:720px;margin:0 auto}.why-grid{grid-template-columns:1fr}.why{border-right:none!important}.why:nth-last-child(-n+2){border-bottom:1px solid #3A404D}.why:last-child{border-bottom:none}.related{grid-template-columns:220px 1fr}.related a{grid-column:2;margin-top:3px}.final-cta{padding:50px 36px}}
@media(max-width:600px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.section.dense{padding:64px 0}.hero{padding:70px 0 58px}.hero .eyebrow,.heading-group:not(.keep-left) .eyebrow{text-align:center}.heading-group.keep-left .eyebrow,.resource-visual .eyebrow{text-align:left}h1{font-size:38px;max-width:none;text-align:center}h2{font-size:30px}h3{font-size:20px}.hero .lead{text-align:center;font-size:18px}.hero-actions{display:grid;grid-template-columns:1fr;width:100%}.hero-actions .btn{width:100%;min-height:50px}.hero-note{text-align:center}.hero-art{min-height:260px}.hero-art:before{width:210px;height:210px;right:12%}.heading-group{margin-bottom:32px}.heading-group:not(.keep-left){text-align:center}.heading-group:not(.keep-left) h2,.heading-group:not(.keep-left) .lead{margin-left:auto;margin-right:auto}.split .copy,.software-copy,.file-layout>div:last-child,.lang-groups{font-size:17px}.system-grid{grid-template-columns:1fr}.system-item,.system-item:nth-child(odd){border-right:none}.system-item:nth-last-child(-n+2){border-bottom:1px solid #343A47}.system-item:last-child{border-bottom:none}.system-head{padding:28px 24px 22px}.system-item{grid-template-columns:42px 1fr;padding:24px}.timeline{grid-template-columns:1fr}.step,.step:nth-child(2n),.step:nth-child(4n),.step:nth-last-child(-n+2){border-right:none;border-bottom:1px solid var(--line)}.step:last-child{border-bottom:none}.row{grid-template-columns:1fr;gap:8px;padding:24px 0}.application-grid,.control-grid,.audience-grid{grid-template-columns:1fr}.application,.application:nth-child(2n),.application:nth-child(3n),.application:nth-last-child(-n+2),.application:nth-last-child(-n+3),.audience,.audience:nth-child(2n),.audience:nth-child(3n),.audience:nth-last-child(-n+2),.audience:nth-last-child(-n+3){border-right:none;border-bottom:1px solid var(--line)}.application:last-child,.audience:last-child{border-bottom:none}.control,.control:nth-child(even),.control:nth-last-child(-n+2){border-right:none;border-bottom:1px solid var(--line)}.control:last-child{border-bottom:none}.software-layout{gap:34px}.ui-main{grid-template-columns:1fr}.ui-side{display:none}.metric-row{grid-template-columns:1fr}.safety-grid{grid-template-columns:1fr}.standard-list{grid-template-columns:1fr}.resource-band{padding:26px}.resource-visual{min-height:230px}.service-flow{grid-template-columns:1fr}.service-node{display:grid;grid-template-columns:50px 1fr;text-align:left;align-items:center;gap:10px;padding:6px 0}.service-node:not(:last-child):after{left:21px;right:auto;top:50px;width:1px;height:24px;display:block}.service-node:nth-child(3):after{display:block}.service-node:last-child:after{display:none}.service-dot{margin:0}.term-band{padding:26px 20px}.term-flow{grid-template-columns:1fr}.term-flow span,.term-flow span+span,.term-flow span:nth-child(n+5){border-left:none;border-top:1px solid var(--line)}.term-flow span:first-child{border-top:none}.term-sample{grid-template-columns:1fr 1fr}.format-groups{grid-template-columns:1fr}.format,.format:nth-child(odd),.format:nth-child(even){padding:22px 0;border-right:none}.lang-groups{grid-template-columns:1fr}.lang-group,.lang-group:nth-child(even){padding:22px 0;border-left:none}.why-grid{grid-template-columns:1fr}.continuous{grid-template-columns:1fr}.continuous-step,.continuous-step:nth-child(3){border-right:none;border-bottom:1px solid var(--line);min-height:auto}.continuous-step:last-child{border-bottom:none}.related{grid-template-columns:1fr;gap:7px;padding:22px 0}.related a{grid-column:1;margin-top:4px}.faq-panel summary{font-size:17px}.final-wrap{padding:68px 0}.final-cta{padding:42px 22px}.final-cta .eyebrow{text-align:center}}
@media(max-width:340px){.shell{padding-left:20px;padding-right:20px}h1{font-size:38px}.hero-art{min-height:240px}.term-sample{grid-template-columns:1fr}.proofitem{padding-left:12px;padding-right:12px}}
`;

export default function BatteryEnergyStorageTranslationServicesWireframe() {
  return (
    <>
      <style>{styles}</style>

<div className="bess-page">
  <section className="hero" id="top">
    <div className="shell hero-grid">
      <div>
        <h1>Battery &amp; Energy Storage Translation Services</h1>
        <p className="lead">Translate battery manufacturing, battery energy storage systems (BESS), power electronics, battery management systems, energy management software, safety content, and service documentation with specialized technical linguists and AI-enabled workflows.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
        </div>
        <p className="hero-note">For battery manufacturers, BESS OEMs, system integrators, utilities, EPCs, and energy software providers.</p>
      </div>
      <div className="hero-art"><svg viewBox="0 0 560 520" role="img" aria-label="Battery energy storage system line illustration">
  <path className="softline" d="M58 430h448M84 456h396"/>
  <rect className="outline" x="72" y="92" width="262" height="340" rx="24"/>
  <path className="outline" d="M98 126h210M98 394h210"/>
  <rect className="outline" x="104" y="152" width="104" height="54" rx="8"/>
  <rect className="outline" x="104" y="222" width="104" height="54" rx="8"/>
  <rect className="outline" x="104" y="292" width="104" height="54" rx="8"/>
  <path className="softline" d="M122 166h67M122 180h67M122 236h67M122 250h67M122 306h67M122 320h67"/>
  <path className="outline" d="M241 150h58v132h-58z"/>
  <path className="softline" d="M254 168h32M254 187h32M254 206h32M254 225h32M254 244h32"/>
  <circle className="accent-fill" cx="270" cy="263" r="4"/>
  <path className="outline" d="M230 319h69v41h-69z"/>
  <path className="accent" d="M244 340h40"/>
  <rect className="outline" x="370" y="134" width="112" height="210" rx="18"/>
  <path className="outline" d="M392 160h68v48h-68zM392 226h68v42h-68zM392 286h68v33h-68z"/>
  <path className="accent" d="M334 218h36M352 206l18 12-18 12"/>
  <path className="outline" d="M382 380h90M427 344v36"/>
  <circle className="outline" cx="427" cy="407" r="27"/>
  <path className="accent" d="m417 408 8 8 14-19"/>
  <path className="softline" d="M56 72c92-45 191-35 267 16M356 91c47-10 92-3 134 21"/>
  <path className="accent" d="M61 68h33M462 107h31"/>
</svg></div>
    </div>
  </section>

  <div className="proofbar">
    <div className="shell proofgrid">
      <div className="proofitem"><strong>100+ Languages</strong><span>Global battery and BESS coverage</span></div>
      <div className="proofitem"><strong>Battery + BESS Expertise</strong><span>Hardware, controls, software, and service</span></div>
      <div className="proofitem"><strong>Technical &amp; Safety Content</strong><span>Risk-based translation and review</span></div>
      <div className="proofitem"><strong>AI + Human Workflows</strong><span>Technology with professional judgment</span></div>
    </div>
  </div>

  <section className="section">
    <div className="shell split">
      <div className="heading-group keep-left">
        <h2>Translation Expertise for the Global Battery &amp; Energy Storage Industry</h2>
      </div>
      <div className="copy">
        <p className="lead">Battery energy storage connects electrochemistry, advanced manufacturing, power electronics, controls, software, thermal management, safety, grid integration, and long-term service. Every layer creates multilingual content.</p>
        <p>Stepes helps battery manufacturers, BESS companies, system integrators, energy technology providers, utilities, EPCs, and service organizations translate this information accurately across engineering, manufacturing, installation, commissioning, operation, maintenance, and the full battery lifecycle.</p>
        <p>Our workflows combine professional technical linguists, translation memory, controlled terminology, AI-assisted translation, independent review, multilingual publishing, and automated quality assurance according to the purpose and risk of each content stream.</p>
        <a className="editorial-link" href="https://www.stepes.com/industrial-translation-services/">Industrial Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </section>

  <section className="section dark">
    <div className="shell">
      <div className="heading-group center">
        <span className="eyebrow">Complete BESS Architecture</span>
        <h2>Translation Across the Complete Battery Energy Storage System</h2>
        <p className="lead">Keep terminology aligned from cell technology and battery racks to power conversion, BMS, EMS, thermal systems, safety, SCADA, and grid controls.</p>
      </div>
      <div className="system-panel">
        <div className="system-head"><h3>One multilingual system across hardware, software, and operations</h3><p>Modern BESS installations combine electrochemical storage with electrical equipment, controls, software, thermal management, fire protection, communications, and service systems.</p></div>
        <div className="system-grid">
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2"/><path d="M19 10h2v4h-2"/><path d="M7 9v6M10 9v6M13 9v6M16 9v6"/></svg></div><div><h3>Battery Cells &amp; Materials</h3><p>Cell design, electrochemistry, materials, performance characteristics, testing, production processes, quality requirements, and supplier specifications, including LFP, NMC, and other commercial chemistries.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg></div><div><h3>Modules, Packs &amp; Racks</h3><p>Module assembly, pack integration, battery racks, busbars, electrical connections, enclosures, and mechanical integration.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/></svg></div><div><h3>Battery Management Systems</h3><p>SOC, SOH, cell balancing, temperature monitoring, limits, diagnostics, protection logic, alarms, events, and faults.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 9-13h-6V2Z"/></svg></div><div><h3>Power Conversion Systems</h3><p>PCS, bidirectional inverters, converters, transformers, switchgear, DC/AC systems, and electrical protection.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V5M4 19h16"/><path d="m7 15 4-5 3 3 4-6"/></svg></div><div><h3>Energy Management Systems</h3><p>Dispatch, optimization, scheduling, demand management, site control, market participation, and asset coordination.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 14.8V5a3 3 0 0 1 6 0v9.8a5 5 0 1 1-6 0Z"/><path d="M12 7v9"/></svg></div><div><h3>Thermal Management</h3><p>Air and liquid cooling, HVAC, sensors, temperature controls, service procedures, and thermal-event management.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-5"/></svg></div><div><h3>Safety &amp; Fire Protection</h3><p>Detection, isolation, emergency shutdown, ventilation, fire protection, warning systems, and emergency response.</p></div></div>
          <div className="system-item"><div className="iconbox"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg></div><div><h3>Grid &amp; Plant Controls</h3><p>SCADA, HMI, plant controllers, communications, remote monitoring, microgrids, and grid interconnection.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="heading-group center">
        <h2>Multilingual Content From Battery Development Through End of Life</h2>
        <p className="lead">Connect terminology and approved translations as battery technologies move through engineering, production, deployment, operation, maintenance, and circular lifecycle programs.</p>
      </div>
      <div className="timeline">
        <div className="step"><div className="step-num">01</div><h3>Develop &amp; Engineer</h3><p>Product requirements, specifications, engineering reports, drawings, test protocols, system architecture, and supplier documentation.</p></div>
        <div className="step"><div className="step-num">02</div><h3>Manufacture</h3><p>SOPs, work instructions, equipment procedures, process documentation, inspection methods, quality requirements, and training.</p></div>
        <div className="step"><div className="step-num">03</div><h3>Integrate</h3><p>BESS architecture, racks, electrical diagrams, BOMs, interface specifications, control documentation, and EPC content.</p></div>
        <div className="step"><div className="step-num">04</div><h3>Test &amp; Certify</h3><p>Test plans, reports, validation documentation, technical files, hazard assessments, and certification-support content.</p></div>
        <div className="step"><div className="step-num">05</div><h3>Install &amp; Commission</h3><p>Site instructions, installation manuals, electrical procedures, FAT/SAT, acceptance testing, checklists, and startup procedures.</p></div>
        <div className="step"><div className="step-num">06</div><h3>Operate</h3><p>Operating manuals, SOPs, HMI/SCADA content, monitoring, alarms, emergency procedures, and operator training.</p></div>
        <div className="step"><div className="step-num">07</div><h3>Maintain &amp; Service</h3><p>Inspections, preventive maintenance, troubleshooting, diagnostics, repair, replacement, service bulletins, and spare parts.</p></div>
        <div className="step"><div className="step-num">08</div><h3>Repurpose &amp; Recycle</h3><p>Removal, dismantling, second-life use, recycling, sustainability content, and lifecycle information.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="shell split">
      <div className="heading-group keep-left">
        <h2>Battery Manufacturing Translation for Global Production</h2>
        <p className="lead">Support multilingual production environments across cell, module, pack, and integrated battery-system manufacturing.</p>
        <a className="editorial-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="rows">
        <div className="row"><h3>Engineering &amp; Production</h3><div><p>Cell and module specifications, electrode production, cell assembly, formation and aging, module and pack assembly, battery-rack production, equipment operating instructions, process parameters, drawings, and engineering changes.</p><div className="chips"><span className="chip">Cell manufacturing</span><span className="chip">Formation &amp; aging</span><span className="chip">Module / pack assembly</span></div></div></div>
        <div className="row"><h3>Quality &amp; Testing</h3><div><p>Inspection procedures, incoming-quality requirements, test methods, quality manuals, acceptance criteria, nonconformance content, corrective actions, supplier quality, and performance testing.</p></div></div>
        <div className="row"><h3>SOPs &amp; Work Instructions</h3><div><p>Task-level production instructions that preserve step sequences, equipment names, measurements, warnings, settings, acceptance criteria, and visual references.</p></div></div>
        <div className="row"><h3>Workforce Training</h3><div><p>Operator training, equipment courses, safety programs, eLearning, onboarding, instructional video, assessments, and technician education for multilingual facilities.</p></div></div>
        <div className="row"><h3>Suppliers &amp; Supply Chain</h3><div><p>Material specifications, supplier requirements, procurement information, packaging, handling, logistics, quality communications, and incoming-inspection content.</p></div></div>
      </div>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="heading-group center">
        <span className="eyebrow">Stationary Energy Storage</span>
        <h2>Translation for Utility, Commercial &amp; Industrial BESS</h2>
        <p className="lead">Deploy multilingual battery storage content across utility networks, renewable projects, commercial facilities, industrial sites, data centers, microgrids, and distributed-energy environments.</p>
      </div>
      <div className="application-grid">
        <div className="application"><h3>Utility-Scale Storage</h3><p>Engineering, equipment, installation, commissioning, plant controls, grid integration, operations, and maintenance for large-scale BESS projects.</p></div>
        <div className="application"><h3>Commercial &amp; Industrial</h3><p>Content for load management, peak reduction, resilience, energy-cost optimization, backup power, and site energy management.</p></div>
        <div className="application"><h3>Solar + Storage</h3><p>Battery content aligned with PV systems, inverters, plant controls, monitoring, commissioning, and O&amp;M documentation.</p></div>
        <div className="application"><h3>Microgrids &amp; DER</h3><p>Control strategies, equipment documentation, islanding-related content, system monitoring, and distributed-energy interfaces.</p></div>
        <div className="application"><h3>Grid Integration</h3><p>Interconnection, plant control, configuration, monitoring, testing, acceptance, and ongoing grid-operation content.</p></div>
        <div className="application"><h3>EPC &amp; Project Documentation</h3><p>Engineering packages, equipment specifications, construction content, installation, commissioning plans, contractor documentation, and acceptance procedures.</p></div>
      </div>
      <div style={{ display: "flex", gap: "26px", flexWrap: "wrap", marginTop: "24px" }}><a className="editorial-link" href="https://www.stepes.com/energy-translation-services/">Energy Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="editorial-link" href="https://www.stepes.com/renewable-energy-translation-services/">Renewable Energy Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="editorial-link" href="https://www.stepes.com/solar-energy-translation/">Solar Energy Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="heading-group center">
        <h2>Localize the Power and Control Systems Behind Modern BESS</h2>
        <p className="lead">Translate the electrical, automation, configuration, monitoring, and diagnostic content used to convert, distribute, protect, and optimize stored energy.</p>
      </div>
      <div className="control-grid">
        <div className="control"><div className="iconline"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 9-13h-6V2Z"/></svg><h3>Power Conversion Systems</h3></div><p>Specifications, manuals, setup, operating states, alarms, diagnostics, service procedures, and training for PCS equipment, bidirectional inverters, converters, and power electronics.</p></div>
        <div className="control"><div className="iconline"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg><h3>Transformers &amp; Switchgear</h3></div><p>Installation, operation, maintenance, safety, testing, and equipment documentation for transformers, switchgear, protection systems, and electrical distribution.</p></div>
        <div className="control"><div className="iconline"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/></svg><h3>PLC &amp; Machine Controls</h3></div><p>Controller interfaces, configuration information, parameters, operating logic, alarms, diagnostics, and technical documentation.</p></div>
        <div className="control"><div className="iconline"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6.5h.01M8 17.5h.01M12 10v4"/></svg><h3>HMI, SCADA &amp; Remote Monitoring</h3></div><p>Commands, navigation, status information, trends, alerts, warnings, maintenance prompts, diagnostics, plant descriptions, and remote-service applications.</p></div>
      </div>
      <a className="editorial-link" href="https://www.stepes.com/industrial-automation-translation/">Industrial Automation Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </section>

  <section className="section dark">
    <div className="shell software-layout">
      <div className="software-copy">
        <h2>BMS, EMS &amp; Energy Storage Software Localization</h2>
        <p className="lead">Localize the software that monitors, protects, optimizes, dispatches, maintains, and connects battery systems to the grid.</p>
        <ul>
          <li><strong style={{ color: "#fff" }}>BMS:</strong> SOC, SOH, cell balancing, limits, protection states, events, fault codes, diagnostics, and configuration.</li>
          <li><strong style={{ color: "#fff" }}>EMS:</strong> dispatch, scheduling, optimization, load management, renewable integration, demand response, and grid services.</li>
          <li><strong style={{ color: "#fff" }}>Digital systems:</strong> dashboards, cloud platforms, mobile apps, field-service tools, remote diagnostics, help systems, and release notes.</li>
          <li><strong style={{ color: "#fff" }}>Localization engineering:</strong> protect variables, placeholders, keys, tags, IDs, API references, codes, units, and other nontranslatable elements.</li>
        </ul>
        <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="software-ui" aria-label="Illustrative BESS software localization interface">
        <div className="ui-top"><div className="ui-dots"><i></i><i></i><i></i></div><span>BESS Monitoring · Localized Operator View</span></div>
        <div className="ui-main">
          <div className="ui-side"><div className="ui-nav active">Overview</div><div className="ui-nav">Battery Racks</div><div className="ui-nav">PCS</div><div className="ui-nav">Alarms</div><div className="ui-nav">Maintenance</div><div className="ui-nav">Reports</div></div>
          <div className="ui-content"><div className="ui-kicker">SITE STATUS</div><div className="ui-title">Energy Storage System</div><div className="metric-row"><div className="metric"><span>State of Charge</span><strong>68%</strong></div><div className="metric"><span>Available Power</span><strong>4.2 MW</strong></div><div className="metric"><span>System State</span><strong>Ready</strong></div></div><div className="status-list"><div className="status"><b>Battery rack temperature</b><span className="status-tag">Normal</span></div><div className="status"><b>PCS operating mode</b><span className="status-tag">Grid support</span></div><div className="status"><b>Cooling system</b><span className="status-tag">Active</span></div><div className="status"><b>Service notification</b><span className="status-tag warn">Review</span></div></div></div>
        </div>
      </div>
    </div>
  </section>

  <section className="section blush">
    <div className="shell">
      <div className="heading-group center">
        <span className="eyebrow">Safety-Critical Content</span>
        <h2>Battery Safety Translation With the Right Level of Control</h2>
        <p className="lead">Configure translation and review around the audience, technical complexity, safety significance, and potential impact of an error.</p>
      </div>
      <div className="safety-grid">
        <div className="safety"><h3>Electrical &amp; High-Voltage Safety</h3><p>Isolation requirements, energized-equipment precautions, PPE, emergency shutdown, access restrictions, and high-voltage procedures.</p></div>
        <div className="safety"><h3>Thermal Events &amp; Fire Response</h3><p>Thermal monitoring, thermal-runaway information, detection, suppression, ventilation, evacuation, first-responder content, and incident response.</p></div>
        <div className="safety"><h3>Handling, Storage &amp; Labels</h3><p>Receiving, lifting, installation, storage conditions, damaged batteries, packaging, transport, disposal, cabinet markings, warnings, and operating cautions.</p></div>
      </div>
      <div style={{ marginTop: "28px" }}><a className="editorial-link" href="https://www.stepes.com/safety-document-translation-services/">Safety Document Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
    </div>
  </section>

  <section className="section">
    <div className="shell standard-layout">
      <div>
        <div className="heading-group keep-left">
          <h2>Support Battery Certification and Global Market Requirements</h2>
          <p className="lead">Translate approved technical and regulatory content used to support product introduction, project deployment, testing, certification activities, and customer documentation across markets.</p>
        </div>
        <p>Battery and stationary energy-storage programs may involve documentation associated with frameworks such as UL 9540, UL 9540A, NFPA 855, the IEC 62933 family, battery safety standards, electrical requirements, fire-safety requirements, and market-specific codes.</p>
        <div className="boundary"><strong style={{ color: "var(--ink)" }}>Clear responsibility boundary:</strong> Stepes translates and localizes customer-approved content. Product certification, regulatory interpretation, conformity assessment, engineering approval, and legal determination remain with the responsible manufacturers, engineers, certification organizations, authorities, and qualified advisers.</div>
        <a className="editorial-link" href="https://www.stepes.com/technical-translation-services/">Technical Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="standard-panel"><h3>Certification &amp; Market Content</h3><p>Preserve technical terminology, measurements, warnings, tables, diagrams, and document structure across:</p><div className="standard-list"><span>Certification applications</span><span>Test plans &amp; reports</span><span>Technical files</span><span>Safety evaluations</span><span>Product specifications</span><span>Installation information</span><span>Labels &amp; markings</span><span>Declarations</span><span>Regulatory correspondence</span><span>Market-specific manuals</span></div></div>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="heading-group center">
        <h2>Keep Battery Information Multilingual Across the Full Lifecycle</h2>
        <p className="lead">Manage battery identification, performance, service, repair, repurposing, recycling, sustainability, and structured lifecycle information as products move across organizations and markets.</p>
      </div>
      <div className="resource-band">
        <div><h3 style={{ fontSize: "26px", marginBottom: "14px" }}>Lifecycle and Battery Passport Content</h3><p>Stepes can localize language-bearing lifecycle information while maintaining terminology, structured fields, controlled values, version relationships, and ongoing updates across languages.</p><div className="chips"><span className="chip">Product identification</span><span className="chip">Performance &amp; durability</span><span className="chip">Service history</span><span className="chip">Second life</span><span className="chip">Dismantling &amp; recycling</span><span className="chip">Sustainability data</span></div><a className="editorial-link" href="https://www.stepes.com/esg-translation-services/">ESG & Sustainability Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="resource-visual"><div><span className="eyebrow">Localization Guide</span><h3>EV Battery &amp; Charging Content Localization Guide</h3></div><div><div className="resource-tags"><span>Battery terminology</span><span>Safety</span><span>Software</span><span>Charging</span><span>Lifecycle data</span><span>Battery passports</span></div><a className="editorial-link" href="https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization/">Read the Localization Guide<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="heading-group center">
        <span className="eyebrow">Long-Term Operations</span>
        <h2>Multilingual BESS Operations, Maintenance &amp; Field Service</h2>
        <p className="lead">Keep service language connected with the terminology established during engineering, commissioning, and software localization.</p>
      </div>
      <div className="service-flow">
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6.5h.01M8 17.5h.01M12 10v4"/></svg></div><div><strong>Alarm</strong><span>System message</span></div></div>
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg></div><div><strong>HMI</strong><span>Operator context</span></div></div>
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 16h5"/></svg></div><div><strong>Manual</strong><span>Approved procedure</span></div></div>
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-4-4 3-3Z"/></svg></div><div><strong>Troubleshooting</strong><span>Corrective action</span></div></div>
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/></svg></div><div><strong>Service App</strong><span>Technician workflow</span></div></div>
        <div className="service-node"><div className="service-dot"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4M8.5 11l1.5 1.5 3-3"/></svg></div><div><strong>Training</strong><span>Shared terminology</span></div></div>
      </div>
      <div className="rows" style={{ marginTop: "42px" }}><div className="row"><h3>Operations</h3><div><p>Operating manuals, SOPs, operator checklists, monitoring instructions, system-status guidance, alarm response, and emergency procedures.</p></div></div><div className="row"><h3>Maintenance &amp; Diagnostics</h3><div><p>Inspection procedures, maintenance schedules, service intervals, fault trees, alarm explanations, diagnostics, troubleshooting, and corrective-action procedures.</p></div></div><div className="row"><h3>Repair, Replacement &amp; Training</h3><div><p>Component removal, battery-module replacement, spare parts, field-service procedures, technician training, eLearning, remote-support tools, knowledge bases, and service histories.</p></div></div></div>
      <a className="editorial-link" href="https://www.stepes.com/mro-translation-services/">MRO Translation Services<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="term-band">
        <div className="heading-group center" style={{ marginBottom: 0 }}><span className="eyebrow">Terminology Governance</span><h2>One Battery Vocabulary Across Hardware, Software &amp; Service</h2><p className="lead">Use approved terminology and translation memory to keep the same battery concepts aligned across the complete content ecosystem.</p></div>
        <div className="term-flow"><span>Engineering</span><span>Manufacturing</span><span>BMS / EMS</span><span>Safety</span><span>Manuals</span><span>Training</span><span>Service</span><span>Support</span></div>
        <div className="term-sample"><span>State of charge</span><span>State of health</span><span>Cell balancing</span><span>Thermal runaway</span><span>Charge / discharge limits</span><span>Power conversion system</span><span>Isolation monitoring</span><span>Operating modes</span></div><a className="editorial-link" href="https://www.stepes.com/terminology-management/">Terminology Management<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="heading-group center"><span className="eyebrow">Smarter Translation Workflows</span><h2>Match AI, Human Expertise &amp; Review to the Content</h2><p className="lead">Battery content varies widely in technical complexity, risk, repetition, audience, and update frequency. The workflow should vary with it.</p></div>
      <div className="workflow-tiers">
        <div className="tier featured"><div className="label">Safety-Critical / High-Risk</div><h3>Expert-Led Translation + Independent Review</h3><p>For content where technical clarity, procedural accuracy, or safety significance requires stronger human control.</p><ul><li>Safety procedures</li><li>Emergency-response content</li><li>Critical operating instructions</li><li>High-voltage information</li><li>Certification documentation</li></ul><div className="workflow-line">Technical translator → Independent review → QA → Customer validation</div></div>
        <div className="tier"><div className="label">Large Technical Programs</div><h3>AI-Assisted Translation + Professional Technical Review</h3><p>For large and recurring documentation programs where terminology, translation memory, and technical review improve both scale and consistency.</p><ul><li>Product manuals</li><li>Technical specifications</li><li>SOPs and work instructions</li><li>Manufacturing content</li><li>Maintenance documentation</li></ul><div className="workflow-line">AI + TM → Technical post-editing → QA → Approval</div></div>
        <div className="tier"><div className="label">Frequently Updated Digital Content</div><h3>Continuous Localization + Reusable Language Assets</h3><p>For software and support content that changes frequently and benefits from change detection, reuse, automation, and repeatable review.</p><ul><li>BMS and EMS</li><li>HMI and SCADA</li><li>Monitoring platforms</li><li>Release notes</li><li>Knowledge bases</li></ul><div className="workflow-line">Change detection → Reuse → Translate changes → Review → Release</div></div>
      </div>
      <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </section>

  <section className="section soft">
    <div className="shell file-layout">
      <div className="heading-group keep-left"><span className="eyebrow">Technical File Engineering</span><h2>Translate the Files Battery Engineers Actually Use</h2><p className="lead">Preserve structure, tags, variables, tables, units, numeric content, drawings, links, and publication layout across multilingual technical delivery.</p></div>
      <div className="format-groups">
        <div className="format"><h3>Technical Documentation</h3><p>Microsoft Office, PDF, Adobe FrameMaker, Adobe InDesign.</p></div>
        <div className="format"><h3>Structured Content</h3><p>XML, DITA, HTML, XLIFF, CMS and CCMS exports.</p></div>
        <div className="format"><h3>Software Resources</h3><p>JSON, XML resources, CSV, string tables, help exports, interface content.</p></div>
        <div className="format"><h3>Engineering Content</h3><p>Specifications, BOMs, drawings, CAD-exported text, tables, schematics, diagrams, labels.</p></div>
        <div className="format"><h3>Learning &amp; Multimedia</h3><p>eLearning, video, subtitles, voiceover scripts, presentations, assessments.</p></div>
        <div className="format"><h3>Final-Format QA</h3><p>Check text expansion, truncation, tables, callouts, graphics, fonts, missing text, and layout before release.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="heading-group center"><h2>Translation for the Complete Battery &amp; Energy Storage Ecosystem</h2><p className="lead">Support the organizations that design, manufacture, integrate, deploy, operate, maintain, and reuse battery systems globally.</p></div>
      <div className="audience-grid">
        <div className="audience"><h3>Battery Manufacturers</h3><p>Cells, modules, packs, battery racks, manufacturing, quality, safety, training, and product documentation.</p></div>
        <div className="audience"><h3>BESS Manufacturers &amp; OEMs</h3><p>Integrated systems, equipment, power electronics, controls, software, commissioning, safety, and service.</p></div>
        <div className="audience"><h3>System Integrators</h3><p>Engineering, interfaces, installation, controls, testing, commissioning, training, and lifecycle support.</p></div>
        <div className="audience"><h3>Power Electronics Companies</h3><p>PCS, inverters, converters, controls, electrical systems, configuration, diagnostics, manuals, and support.</p></div>
        <div className="audience"><h3>BMS &amp; EMS Providers</h3><p>Interfaces, dashboards, technical documentation, alarms, configuration, help content, and releases.</p></div>
        <div className="audience"><h3>EPC Contractors</h3><p>Engineering, procurement, construction, contractor, installation, commissioning, testing, and safety documentation.</p></div>
        <div className="audience"><h3>Utilities &amp; Project Developers</h3><p>Grid integration, operations, asset management, training, safety, project content, and stakeholder communication.</p></div>
        <div className="audience"><h3>O&amp;M &amp; Service Organizations</h3><p>Maintenance, diagnostics, repair, replacement, technician training, service applications, and knowledge content.</p></div>
        <div className="audience"><h3>Recycling &amp; Second-Life Companies</h3><p>Evaluation, handling, repurposing, dismantling, recovery, recycling, safety, environmental, and lifecycle content.</p></div>
      </div>
    </div>
  </section>

  <section className="section dark">
    <div className="shell lang-layout">
      <div className="heading-group keep-left"><h2>Battery &amp; BESS Translation in 100+ Languages</h2><p className="lead">Support international product launches, production facilities, supplier networks, project deployments, field teams, utilities, and global service organizations.</p></div>
      <div className="lang-groups"><div className="lang-group"><h3>Europe</h3><p>German, French, Spanish, Italian, Dutch, Polish, Czech, Portuguese, Romanian, Nordic languages, and more.</p></div><div className="lang-group"><h3>Asia-Pacific</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and more.</p></div><div className="lang-group"><h3>Americas</h3><p>Latin American Spanish, U.S. Spanish, Brazilian Portuguese, Canadian French, and regional variants.</p></div><div className="lang-group"><h3>Middle East &amp; Global Markets</h3><p>Arabic, Hebrew, Turkish, and additional languages supporting international energy and industrial operations.</p></div></div>
    </div>
  </section>

  <section className="section dark" style={{ paddingTop: 0 }}>
    <div className="shell">
      <div className="heading-group center"><h2>One Multilingual System for Complex Battery Content</h2><p className="lead">Connect translation expertise, terminology, software localization, quality controls, and technical file engineering across the complete battery information lifecycle.</p></div>
      <div className="why-grid">
        <div className="why"><h3>Battery &amp; Engineering Expertise</h3><p>Professional linguists selected for relevant battery, electrical, energy, manufacturing, software, safety, and technical content.</p></div>
        <div className="why"><h3>Hardware + Software Localization</h3><p>One program spanning technical documentation, controls, BMS, EMS, HMI, training, maintenance, and service.</p></div>
        <div className="why"><h3>Controlled Technical Terminology</h3><p>Approved vocabulary carried across specifications, manufacturing, interfaces, manuals, safety, training, and support.</p></div>
        <div className="why"><h3>Risk-Based Quality</h3><p>Match technical review, independent review, automated QA, in-context validation, and customer approval to content purpose and risk.</p></div>
        <div className="why"><h3>AI-Enabled Efficiency</h3><p>Use AI, translation memory, and workflow automation where they improve speed and scale while retaining professional judgment where it matters.</p></div>
        <div className="why"><h3>Enterprise Quality &amp; Security</h3><p>ISO 17100 and ISO 9001 quality processes support accountable professional translation and controlled handling of proprietary technical content.</p></div>
      </div>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="heading-group center"><span className="eyebrow">Continuous Localization</span><h2>Keep Multilingual Battery Content Current as Products Evolve</h2><p className="lead">Focus translation and review on what actually changed while carrying approved language forward across product generations and recurring releases.</p></div>
      <div className="continuous"><div className="continuous-step"><div className="step-num">01</div><h3>Source Update</h3><p>New or revised battery documentation, software, or structured data enters the workflow.</p></div><div className="continuous-step"><div className="step-num">02</div><h3>Change Detection</h3><p>Identify new, modified, removed, and affected content.</p></div><div className="continuous-step"><div className="step-num">03</div><h3>Translation Memory Reuse</h3><p>Carry forward approved multilingual content where it remains valid.</p></div><div className="continuous-step"><div className="step-num">04</div><h3>Translate Changes</h3><p>Focus professional effort on genuinely new or modified language.</p></div><div className="continuous-step"><div className="step-num">05</div><h3>Review &amp; QA</h3><p>Apply linguistic, technical, visual, functional, or customer checks appropriate to the content.</p></div><div className="continuous-step"><div className="step-num">06</div><h3>Multilingual Release</h3><p>Deliver approved content while updating terminology and translation memory for the next release.</p></div></div>
    </div>
  </section>

  <section className="section">
    <div className="shell">
      <div className="heading-group center"><h2>Related Energy, Industrial &amp; Technical Translation Solutions</h2><p className="lead">Explore connected Stepes services for the engineering, manufacturing, safety, software, energy, and service content surrounding battery and BESS programs.</p></div>
      <div className="related-list">
        <div className="related"><h3>Industrial Translation Services</h3><p>Technical, operational, software, safety, training, maintenance, and service content across global industrial operations.</p><a href="https://www.stepes.com/industrial-translation-services/">Explore Industrial Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>Energy Translation Services</h3><p>Engineering, project, software, training, operations, and commercial content across the global energy industry.</p><a href="https://www.stepes.com/energy-translation-services/">Explore Energy Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>Manufacturing Translation Services</h3><p>Engineering, production, quality, supplier, safety, training, product, and service content for global manufacturing.</p><a href="https://www.stepes.com/manufacturing-translation-services/">Explore Manufacturing Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>Technical Translation Services</h3><p>Specialized technical documentation supported by subject-matter linguists, terminology control, and fit-for-purpose quality workflows.</p><a href="https://www.stepes.com/technical-translation-services/">Explore Technical Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>Industrial Automation Translation</h3><p>Localization for PLCs, HMI, SCADA, controls, industrial software, alarms, diagnostics, IIoT, and connected equipment.</p><a href="https://www.stepes.com/industrial-automation-translation/">Explore Industrial Automation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>Electric Vehicle Translation Services</h3><p>Localization for EV battery systems, charging, software, diagnostics, technical documentation, customer experiences, and service.</p><a href="https://www.stepes.com/electric-vehicle-translation-services/">Explore Electric Vehicle Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>MRO Translation Services</h3><p>Maintenance, repair, troubleshooting, spare parts, field operations, and aftermarket support.</p><a href="https://www.stepes.com/mro-translation-services/">Explore MRO Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
        <div className="related"><h3>ESG Translation Services</h3><p>Sustainability, environmental, reporting, supply-chain, lifecycle, and ESG communications for global stakeholders.</p><a href="https://www.stepes.com/esg-translation-services/">Explore ESG Translation <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
      </div>
    </div>
  </section>

  <section className="section soft">
    <div className="shell">
      <div className="heading-group center"><h2>Battery &amp; Energy Storage Translation Services FAQs</h2><p className="lead">Common questions about battery manufacturing, BESS documentation, software localization, safety content, lifecycle information, and ongoing multilingual support.</p></div>
      <div className="faq-panel">
        <details><summary>What are battery and energy storage translation services?<span className="plus"></span></summary><div className="faq-answer"><p>Battery and energy storage translation services provide specialized multilingual support for the engineering, manufacturing, technical, software, safety, training, operational, maintenance, regulatory, and commercial content used throughout the battery and energy-storage industry.</p></div></details>
        <details><summary>What types of battery and BESS documentation can Stepes translate?<span className="plus"></span></summary><div className="faq-answer"><p>Stepes translates engineering specifications, datasheets, test reports, drawings, bills of materials, manufacturing SOPs, work instructions, quality documentation, installation manuals, commissioning procedures, operating manuals, safety information, maintenance and repair procedures, service bulletins, training, software interfaces, certification-related documentation, and lifecycle information.</p></div></details>
        <details><summary>Does Stepes support utility-scale battery energy storage systems?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Stepes supports utility-scale BESS as well as commercial, industrial, renewable-plus-storage, microgrid, and distributed-energy applications, including engineering, EPC documentation, power conversion, plant controls, grid interfaces, commissioning, safety, O&amp;M, and service content.</p></div></details>
        <details><summary>Can Stepes translate BMS and EMS software?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Stepes localizes battery management systems, energy management systems, SCADA, HMI, cloud dashboards, monitoring platforms, mobile applications, diagnostic tools, field-service software, help systems, and related digital content while protecting nontranslatable technical elements.</p></div></details>
        <details><summary>How does Stepes handle battery safety translation?<span className="plus"></span></summary><div className="faq-answer"><p>Stepes matches the workflow to the purpose, complexity, audience, and safety significance of the content. Higher-consequence materials can use specialized technical linguists, independent review, terminology control, automated QA, final-format checks, and customer technical validation as appropriate.</p></div></details>
        <details><summary>Can Stepes translate battery manufacturing documentation?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Stepes supports cell, module, pack, and battery-system manufacturing content including SOPs, work instructions, equipment procedures, process documentation, quality requirements, inspection methods, supplier specifications, testing, training, safety information, and engineering documentation.</p></div></details>
        <details><summary>Can Stepes support battery certification and standards-related documentation?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Stepes translates customer-approved technical documentation used in connection with product testing, certification, market entry, and standards-related activities. Stepes provides translation and localization services rather than certification, engineering approval, conformity assessment, or legal interpretation.</p></div></details>
        <details><summary>Does Stepes support battery passport and lifecycle content?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Stepes can localize language-bearing battery lifecycle and battery passport information, including identification, technical information, performance, state-of-health content, repair, second-life, dismantling, recycling, sustainability, and structured battery data.</p></div></details>
        <details><summary>How does Stepes maintain consistent battery terminology?<span className="plus"></span></summary><div className="faq-answer"><p>Stepes combines approved terminology, translation memory, product references, customer feedback, and professional technical review so vocabulary can remain aligned across engineering, manufacturing, BMS and EMS interfaces, manuals, safety content, training, maintenance, service software, and support.</p></div></details>
        <details><summary>Can AI be used for battery and BESS translation?<span className="plus"></span></summary><div className="faq-answer"><p>Yes, when appropriate for the content and quality requirements. Stepes combines AI-enabled translation, translation memory, terminology management, workflow automation, professional human translation, technical review, and automated QA in different configurations based on risk, complexity, repetition, audience, and update frequency.</p></div></details>
        <details><summary>Can Stepes support ongoing battery documentation and software updates?<span className="plus"></span></summary><div className="faq-answer"><p>Yes. Continuous localization can use source-change detection and translation memory to reuse approved language while focusing translation and review on new or modified documentation, software, training, service information, and recurring support content.</p></div></details>
      </div>
    </div>
  </section>

  <section className="final-wrap">
    <div className="shell">
      <div className="final-cta">
        <h2>Take Your Battery &amp; Energy Storage Content Global</h2>
        <p className="lead">From battery engineering and manufacturing to BESS integration, BMS and EMS software, safety, commissioning, operations, maintenance, and lifecycle content, Stepes helps global energy-storage organizations communicate accurately across languages and markets.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a></div>
      </div>
    </div>
  </section>
</div>

    </>
  );
}
