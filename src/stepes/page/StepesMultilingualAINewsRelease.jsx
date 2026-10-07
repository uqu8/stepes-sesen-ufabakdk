import React from "react";

const styles = `
:root {
  --stepes-magenta: #C11D63;
  --stepes-magenta-dark: #A71954;
  --stepes-burgundy: #7A1542;
  --stepes-blush: #FDF2F7;
  --stepes-pink-light: #F2A7C6;
  --text: #485162;
  --heading: #171A21;
  --muted: #697386;
  --line: #E2E5EA;
  --surface: #F7F8FA;
  --white: #FFFFFF;
  --shell: 1280px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--white);
  color: var(--text);
  font-family: "Inter Tight", Inter, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.news-page { overflow: clip; background: var(--white); }
.shell {
  width: min(var(--shell), calc(100% - 112px));
  margin: 0 auto;
}

/* Editorial context: quiet breadcrumb navigation followed by distinct publication metadata. */
.article-context {
  padding-top: 22px;
  margin-bottom: 32px;
}
.breadcrumb {
  width: 100%;
  overflow: hidden;
}
.breadcrumb ol {
  display: flex;
  align-items: center;
  min-height: 44px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.45;
}
.breadcrumb li {
  display: flex;
  align-items: center;
  min-width: 0;
  white-space: nowrap;
}
.breadcrumb li + li::before {
  content: "›";
  flex: 0 0 auto;
  margin: 0 10px;
  color: #A7ADB8;
  font-size: 15px;
  font-weight: 400;
}
.breadcrumb a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--muted);
  text-decoration: none;
  transition: color .18s ease;
}
.breadcrumb a:hover { color: var(--stepes-magenta); }
.breadcrumb a:focus-visible {
  outline: 3px solid rgba(193,29,99,.2);
  outline-offset: 3px;
  border-radius: 4px;
}
.breadcrumb-current {
  display: block;
  max-width: 320px;
  overflow: hidden;
  color: var(--text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* News/article hero: text-led by default. No decorative image is required. */
.news-hero {
  padding: 0 0 78px;
  border-bottom: 1px solid var(--line);
  background: var(--white);
}
.hero-copy {
  max-width: 1080px;
  padding-top: 0;
}
.news-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 32px;
  margin: 10px 0 0;
  color: var(--text);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}
.news-meta .content-type {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 5px 10px 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.news-meta time { color: var(--text); font-weight: 400; }
h1, h2, h3 { color: var(--heading); margin-top: 0; font-weight: 600; }
h1 {
  margin-bottom: 24px;
  max-width: 1060px;
  font-size: 48px;
  line-height: 1.06;
  letter-spacing: -0.035em;
}
.hero-dek {
  max-width: 840px;
  margin: 0;
  color: var(--text);
  font-size: 18px;
  line-height: 1.68;
}

/* Standard news release reading column. */
.article-wrap { padding: 82px 0 96px; }
.article-shell {
  max-width: 790px;
  margin: 0 auto;
}
.article-main { min-width: 0; }
.article-lead {
  margin: 0 0 44px;
  color: var(--text);
  font-size: 20px;
  line-height: 1.68;
}
.article-main section { scroll-margin-top: 28px; }
.article-main h2 {
  margin: 72px 0 22px;
  font-size: 36px;
  line-height: 1.14;
  letter-spacing: -0.025em;
}
.article-main h2:first-of-type { margin-top: 0; }
.article-main p,
.article-main li {
  color: var(--text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.76;
}
.article-main p { margin: 0 0 22px; }
.article-main strong { color: inherit; font-weight: 600; }
.article-main a {
  color: var(--stepes-magenta);
  font-weight: 600;
  text-decoration: none;
  text-underline-offset: 3px;
}
.article-main a:hover { color: var(--stepes-magenta-dark); text-decoration: underline; }
.article-main a:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; border-radius: 4px; }

.pullquote {
  margin: 56px 0;
  padding: 34px 36px 34px 38px;
  border-left: 3px solid var(--stepes-magenta);
  border-radius: 0 24px 24px 0;
  background: #FAF7F9;
}
.pullquote p {
  margin: 0 0 18px;
  color: var(--text);
  font-size: 25px;
  line-height: 1.5;
  letter-spacing: -0.015em;
}
.pullquote cite {
  display: block;
  color: var(--text);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
}

.service-links {
  margin-top: 34px;
  border-top: 1px solid var(--line);
}
.service-link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 26px;
  align-items: center;
  padding: 21px 0;
  border-bottom: 1px solid var(--line);
  text-decoration: none !important;
}
.service-link strong {
  display: block;
  margin-bottom: 5px;
  color: var(--heading);
  font-size: 18px;
  line-height: 1.35;
}
.service-link span {
  display: block;
  color: var(--text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.55;
}
.service-link .arrow {
  color: var(--stepes-magenta);
  font-size: 21px;
  font-weight: 600;
  transition: transform .18s ease;
}
.service-link:hover strong { color: var(--stepes-magenta); }
.service-link:hover .arrow { transform: translateX(4px); }

/* Boilerplate stays editorial, not card-heavy. */
.about-panel {
  margin-top: 76px;
  padding: 38px 0 0;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
}
.about-panel h2 { margin: 0 0 18px; font-size: 30px; }
.about-panel p:last-child { margin-bottom: 0; }

/* Optional conversion layer after the editorial content. */
.final-cta { padding: 0 0 96px; background: var(--white); }
.cta-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 48px;
  align-items: center;
  padding: 52px 58px;
  border-radius: 30px;
  background: var(--stepes-blush);
}
.cta-copy h2 {
  margin: 0 0 12px;
  font-size: 36px;
  line-height: 1.14;
  letter-spacing: -0.025em;
}
.cta-copy p {
  max-width: 720px;
  margin: 0;
  color: var(--text);
  font-size: 17px;
  line-height: 1.65;
}
.cta-button,
.cta-button:visited {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 13px 22px;
  border-radius: 999px;
  background: var(--stepes-magenta);
  color: #fff !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  transition: background .18s ease, transform .18s ease, box-shadow .18s ease;
}
.cta-button span, .cta-button svg { color: #fff !important; fill: none; stroke: #fff !important; }
.cta-button:hover { background: var(--stepes-magenta-dark); color: #fff !important; transform: translateY(-1px); box-shadow: 0 8px 22px rgba(122,21,66,.14); }
.cta-button:active { color: #fff !important; transform: translateY(0); }
.cta-button:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 4px; color: #fff !important; }

@media (max-width: 1180px) {
  .shell { width: min(var(--shell), calc(100% - 80px)); }
}

@media (max-width: 1020px) {
  .shell { width: calc(100% - 48px); }
  .news-hero { padding-bottom: 72px; }
  .hero-copy { max-width: 900px; padding-top: 0; }
  h1 { font-size: 42px; max-width: 900px; }
  .article-wrap { padding: 76px 0 88px; }
  .cta-panel { grid-template-columns: 1fr; gap: 28px; }
  .cta-button { justify-self: start; }
}

@media (max-width: 768px) {
  .shell { width: calc(100% - 40px); }
  .article-context { padding-top: 12px; margin-bottom: 26px; }
  .breadcrumb li + li::before { margin: 0 8px; }
  .breadcrumb-current { max-width: 280px; }
  .news-hero { padding-bottom: 62px; }
  .hero-copy { padding-top: 0; }
  h1 { font-size: 38px; line-height: 1.09; }
  .hero-dek { font-size: 18px; }
  .article-wrap { padding: 64px 0 72px; }
  .article-lead { margin-bottom: 40px; font-size: 19px; }
  .article-main h2 {
    margin: 62px 0 20px;
    font-size: 30px;
    line-height: 1.18;
    text-align: left;
  }
  .article-main p, .article-main li { font-size: 17px; }
  .pullquote { margin: 48px 0; padding: 28px 24px 28px 26px; border-radius: 0 20px 20px 0; }
  .pullquote p { font-size: 22px; }
  .service-link { grid-template-columns: 1fr auto; gap: 18px; padding: 20px 0; }
  .service-link strong { font-size: 18px; }
  .service-link span { font-size: 17px; }
  .about-panel { margin-top: 64px; padding-top: 32px; }
  .about-panel h2 { font-size: 28px; text-align: left; }
  .final-cta { padding-bottom: 72px; }
  .cta-panel { padding: 40px 26px; border-radius: 24px; text-align: center; }
  .cta-copy h2 { font-size: 30px; }
  .cta-button { width: 100%; min-height: 52px; justify-self: stretch; }
}

@media (max-width: 600px) {
  .news-meta { min-height: 32px; margin-top: 8px; }
  .breadcrumb-current { max-width: 42vw; }
}

@media (max-width: 390px) {
  .news-meta { gap: 8px; }
  .pullquote { padding-right: 20px; }
}

@media (max-width: 320px) {
  h1 { font-size: 36px; }
  .hero-dek { font-size: 17px; }
  .service-link { grid-template-columns: 1fr; }
  .service-link .arrow { display: none; }
}
`;

export default function StepesMultilingualAINewsRelease() {
  return (
    <article className="news-page">
      <style>{styles}</style>

      <header className="news-hero">
        <div className="shell">
          <div className="article-context">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><a href="https://www.stepes.com/">Home</a></li>
                <li><a href="https://www.stepes.com/news/">News &amp; Press</a></li>
                <li><a href="https://www.stepes.com/news/?category=platform-product">Platform &amp; Product</a></li>
                <li><span className="breadcrumb-current" aria-current="page">Multilingual AI Services Expansion</span></li>
              </ol>
            </nav>
            <div className="news-meta" aria-label="Article metadata">
              <span className="content-type">News Release</span>
              <time dateTime="2026-10-07">October 7, 2026</time>
            </div>
          </div>
          <div className="hero-copy">
            <h1>Stepes Expands Multilingual AI Services for LLM Evaluation, AI Output Review, and Global AI Training Data</h1>
            <p className="hero-dek">Expanded multilingual AI capabilities help enterprises create higher-quality language data, evaluate AI performance, and improve AI-generated content across languages and global markets.</p>
          </div>
        </div>
      </header>

      <div className="article-wrap">
        <div className="shell article-shell">
          <main className="article-main">
            <p className="article-lead"><strong>BOSTON, October 7, 2026.</strong> Stepes, a global provider of enterprise translation, localization, and multilingual AI services, today announced an expansion of its multilingual AI services to help organizations build, evaluate, and improve artificial intelligence systems across global languages and markets.</p>

            <p>The expanded capabilities bring together multilingual AI data creation, text annotation, voice and conversation data collection, conversational AI training data, large language model (LLM) evaluation, and human review of AI-generated outputs. Together, these services provide enterprises and AI developers with a connected multilingual framework for improving AI performance from data preparation and model evaluation through real-world deployment and continuous improvement.</p>

            <p>As generative AI, enterprise copilots, AI agents, chatbots, retrieval-augmented generation (RAG) systems, and voice assistants reach users around the world, multilingual performance has become an increasingly important part of AI quality. A system that performs well in one language may not deliver the same accuracy, relevance, safety, cultural appropriateness, or user experience in another.</p>

            <p>Stepes addresses this challenge by combining native-language expertise, structured human evaluation, multilingual data services, and scalable technology workflows across more than 100 languages.</p>

            <section id="multilingual-ai-data">
              <h2>Building Better Multilingual AI Data</h2>
              <p>High-performing global AI begins with high-quality language data. Stepes helps organizations create, collect, annotate, and validate multilingual datasets for model training, fine-tuning, testing, evaluation, and continuous improvement.</p>
              <p>Through its <a href="https://www.stepes.com/multilingual-ai-data-services/">Multilingual AI Data Services</a>, Stepes supports native-language text and prompt creation, multilingual text annotation, speech and conversation collection, and structured conversational datasets tailored to specific AI applications and target markets.</p>
              <p><a href="https://www.stepes.com/multilingual-text-annotation-services/">Multilingual Text Annotation Services</a> transform language data into structured, model-ready datasets for applications such as natural language processing, classification, search, content moderation, conversational AI, and LLM development. Projects can include intent and entity annotation, semantic labeling, sentiment classification, safety categorization, and customer-defined taxonomies.</p>
              <p>For speech and voice AI, <a href="https://www.stepes.com/multilingual-voice-conversation-data-collection/">Multilingual Voice and Conversation Data Collection</a> provides authentic language data across accents, dialects, speaker profiles, devices, and real-world scenarios. Stepes can support both scripted and spontaneous speech, multi-speaker conversations, transcription, segmentation, and associated metadata.</p>
              <p>Stepes also develops <a href="https://www.stepes.com/conversational-ai-training-data-services/">Conversational AI Training Data</a>, including native-language intents, utterances, prompt-response pairs, multi-turn dialogues, edge cases, and realistic conversation scenarios for chatbots, virtual assistants, enterprise agents, customer service automation, and other conversational AI applications.</p>
              <p>Together, these capabilities help AI teams build datasets that better reflect how people actually communicate across languages, regions, and cultures.</p>
            </section>

            <section id="llm-evaluation">
              <h2>Evaluating How AI Performs Across Languages</h2>
              <p>Creating multilingual AI is only part of the challenge. Organizations also need reliable ways to determine whether their models and AI applications perform consistently across global markets.</p>
              <p>Stepes' <a href="https://www.stepes.com/multilingual-llm-evaluation-services/">Multilingual LLM Evaluation Services</a> provide structured human evaluation for measuring model behavior across languages, locales, domains, tasks, and model versions.</p>
              <p>Native-language evaluators and domain specialists can assess AI responses using defined criteria such as factual accuracy, relevance, fluency, completeness, instruction adherence, cultural appropriateness, terminology, safety, and overall usefulness. Evaluation programs can include rubric-based scoring, pairwise preference comparisons, hallucination and factuality review, error classification, and cross-language benchmarking.</p>
              <p>Stepes also supports evaluation of real-world AI use cases such as multi-turn conversations, summarization, rewriting, domain-specific content, and RAG responses where grounding, retrieved information, and factual alignment must be assessed together.</p>
              <p>This allows organizations to move beyond the question of whether an AI system works in general and ask a more important global question: <strong>Does it work reliably in every language and market where we intend to use it?</strong></p>
              <p>By applying consistent evaluation methodologies across languages, companies can identify performance gaps, compare models and configurations, prioritize improvements, and make more informed decisions about international AI deployment.</p>
            </section>

            <section id="ai-output-review">
              <h2>Improving AI Outputs for Real-World Global Use</h2>
              <p>Model evaluation measures how an AI system performs. <a href="https://www.stepes.com/ai-output-review-services/">Multilingual AI Output Review</a> addresses the next challenge: ensuring the content AI systems generate for actual users is accurate, clear, useful, and appropriate for each market.</p>
              <p>Stepes provides human review and quality assurance for outputs generated by LLMs, enterprise copilots, chatbots, RAG applications, voice assistants, customer support systems, and other AI-enabled products.</p>
              <p>Depending on the application, reviewers can evaluate, score, classify, correct, approve, or refine AI-generated content for linguistic quality, factual accuracy, terminology, clarity, tone, cultural fit, consistency, and real-world usability.</p>
              <p>This distinction is especially important as enterprises move AI from experimentation into production. A model may perform well against a benchmark while individual responses still require human validation in customer-facing, specialized, regulated, or high-impact environments.</p>
              <p>Structured AI output review provides organizations with a practical human-in-the-loop quality layer while also generating insights that can be fed back into prompts, datasets, evaluation criteria, and future model improvements.</p>
            </section>

            <section id="human-expertise">
              <h2>Human Expertise for Global AI Quality</h2>
              <p>Although AI technology continues to advance rapidly, evaluating language remains fundamentally connected to human communication.</p>
              <p>Meaning can change with context. A response may be grammatically correct yet culturally inappropriate. Content may sound fluent while containing a factual error. Terminology that works in one market may be unfamiliar or misleading in another. A technically correct response may still fail to reflect local user intent, tone, or expectations.</p>
              <p>Stepes brings professional native linguists, trained evaluators, annotators, and subject-matter specialists into multilingual AI workflows where human judgment adds the greatest value. Structured guidelines, reviewer calibration, quality controls, and cross-language workflow management help produce consistent and actionable results at enterprise scale.</p>

              <blockquote className="pullquote">
                <p>“AI does not become truly global simply because a model can generate content in many languages. It has to be trained, evaluated, and continually validated in the languages, cultures, and real-world environments where people actually use it. Our expanded multilingual AI services bring together native-language data, human evaluation, and scalable technology workflows to help organizations build AI experiences that perform more reliably around the world.”</p>
                <cite>Alex Matsikas, Localization Program Manager</cite>
              </blockquote>
            </section>

            <section id="enterprise-ai">
              <h2>Supporting Enterprise AI Across Industries</h2>
              <p>The expanded services are designed for technology companies, AI developers, and global enterprises building or deploying AI across international markets.</p>
              <p>Applications range from multilingual chatbots, virtual assistants, enterprise copilots, AI agents, and international search experiences to RAG systems, customer support automation, voice AI, knowledge platforms, and domain-specific language models.</p>
              <p>Stepes' industry expertise also supports multilingual AI initiatives in specialized fields such as life sciences and healthcare, financial services, legal and compliance, technology and software, manufacturing and engineering, retail and ecommerce, and other areas where terminology, contextual accuracy, and subject-matter knowledge are critical.</p>
              <p>Programs can be tailored by language, locale, data type, domain, evaluation methodology, reviewer profile, quality requirements, and deployment stage, allowing organizations to combine individual services or build connected multilingual AI workflows around specific business objectives.</p>
            </section>

            <section id="stepes-ai-strategy">
              <h2>Extending Stepes' AI-Enabled Language Technology Strategy</h2>
              <p>The multilingual AI services expansion builds on Stepes' broader strategy of combining language technology with professional human expertise to help enterprises communicate and operate globally.</p>
              <p>For traditional multilingual content, Stepes applies AI-powered translation, translation memory, terminology management, automation, professional linguistic review, and quality assurance according to the purpose and risk profile of the content.</p>
              <p>For emerging AI applications, that same global language infrastructure now extends further upstream and downstream, from multilingual data creation and annotation to model evaluation and production-output review.</p>
              <p>The result is a connected language ecosystem that can support the AI lifecycle from <strong>data creation and preparation to evaluation, deployment, and continuous improvement</strong>.</p>
              <p>As AI applications become more capable and more deeply integrated into enterprise workflows, Stepes will continue expanding the multilingual data, evaluation, and human expertise organizations need to deliver reliable AI experiences to users worldwide.</p>
              <p>Explore Stepes' broader <a href="https://www.stepes.com/ai-machine-learning-translation-services/">AI and machine learning language services</a> to see how these capabilities connect across multilingual content and AI workflows.</p>
            </section>

            <section id="learn-more">
              <h2>Learn More About Stepes Multilingual AI Services</h2>
              <p>Organizations developing, evaluating, or deploying AI across global markets can work with Stepes on individual multilingual data and evaluation requirements or coordinated programs spanning multiple languages and AI workflows.</p>
              <div className="service-links" aria-label="Related multilingual AI services">
                <a className="service-link" href="https://www.stepes.com/multilingual-ai-data-services/"><span><strong>Multilingual AI Data Services</strong><span>Language data creation, collection, annotation, validation, and evaluation support.</span></span><span className="arrow" aria-hidden="true">→</span></a>
                <a className="service-link" href="https://www.stepes.com/multilingual-llm-evaluation-services/"><span><strong>Multilingual LLM Evaluation Services</strong><span>Structured native-language evaluation across models, tasks, domains, and markets.</span></span><span className="arrow" aria-hidden="true">→</span></a>
                <a className="service-link" href="https://www.stepes.com/ai-output-review-services/"><span><strong>AI Output Review Services</strong><span>Human review, validation, correction, and refinement of production AI-generated content.</span></span><span className="arrow" aria-hidden="true">→</span></a>
                <a className="service-link" href="https://www.stepes.com/multilingual-text-annotation-services/"><span><strong>Multilingual Text Annotation Services</strong><span>Structured linguistic and semantic annotation for AI and NLP applications.</span></span><span className="arrow" aria-hidden="true">→</span></a>
                <a className="service-link" href="https://www.stepes.com/multilingual-voice-conversation-data-collection/"><span><strong>Voice &amp; Conversation Data Collection</strong><span>Authentic multilingual speech and conversation datasets across global markets.</span></span><span className="arrow" aria-hidden="true">→</span></a>
                <a className="service-link" href="https://www.stepes.com/conversational-ai-training-data-services/"><span><strong>Conversational AI Training Data Services</strong><span>Intents, utterances, prompt-response pairs, dialogues, and realistic conversation scenarios.</span></span><span className="arrow" aria-hidden="true">→</span></a>
              </div>
            </section>

            <section className="about-panel" id="about-stepes">
              <h2>About Stepes</h2>
              <p>Stepes is a global provider of enterprise translation, localization, and multilingual AI services. Stepes combines AI-powered technology, professional linguistic expertise, terminology management, workflow automation, and quality assurance to help organizations communicate, operate, and deploy technology across international markets.</p>
              <p>In addition to professional translation and localization, Stepes provides multilingual AI data creation, text annotation, voice and conversation data collection, conversational AI training data, LLM evaluation, and AI output review. With support for more than 100 languages, Stepes helps enterprises build accurate, scalable, and locally relevant multilingual experiences for customers and users worldwide.</p>
            </section>
          </main>
        </div>
      </div>

      <section className="final-cta" aria-label="Contact Stepes">
        <div className="shell cta-panel">
          <div className="cta-copy">
            <h2>Building AI for Global Users?</h2>
            <p>Talk with Stepes about multilingual data, evaluation, and human review workflows designed around your languages, markets, domains, and AI applications.</p>
          </div>
          <a className="cta-button" href="https://www.stepes.com/contact-sales/">
            <span>Discuss Your AI Program</span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </article>
  );
}
