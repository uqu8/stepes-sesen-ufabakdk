import React from "react";

const quickLinks = [
  {
    label: "About Sesen",
    href: "https://www.sesen.com/about-us/",
  },
  {
    label: "Services",
    href: "https://www.sesen.com/services/",
  },
  {
    label: "Life Sciences",
    href: "https://www.sesen.com/life-sciences/",
  },
  {
    label: "AI Solutions",
    href: "https://www.sesen.com/ai/",
  },
  {
    label: "Resources",
    href: "https://www.sesen.com/resources/",
  },
  {
    label: "Contact Sales",
    href: "https://www.sesen.com/contact-sales/",
  },
];

const services = [
  {
    label: "Clinical Trial Translation",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
  },
  {
    label: "Regulatory Translation",
    href: "https://www.sesen.com/regulatory-submission-translation-services/",
  },
  {
    label: "Drug Labeling Translation",
    href: "https://www.sesen.com/drug-labeling-packaging-translation/",
  },
  {
    label: "IFU Translation Services",
    href: "https://www.sesen.com/ifu-translation-services/",
  },
  {
    label: "Pharmacovigilance Translation",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
  },
  {
    label: "eLearning Localization",
    href: "https://www.sesen.com/elearning-translation-services/",
  },
];

const trustItems = [
  "ISO 17100 Certified",
  "ISO 13485 Certified",
  "ISO 9001:2015 Certified",
  "GDPR & HIPAA Aligned",
  "Secure AWS Infrastructure",
];

function SesenLogo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        style={{ maxWidth: '220px' }} 
        src="/src/sesen/images/sesen-logo-tagline.svg" 
        alt="Sesen" 
      />
    </div>
  );
}

function FooterLink({ children, href }) {
  return (
    <a href={href} className="text-[15px] leading-7 text-slate-600 transition-colors hover:text-[#3478E5]">
      {children}
    </a>
  );
}

function ContactIcon({ type }) {
  const common = {
    className: "h-5 w-5 shrink-0 text-[#3478E5]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "location") {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

export default function PremiumSesenFooter() {
  return (
    <div className="bg-white font-sans text-slate-800">
      <div className="flex min-h-[520px] items-end">
        <footer className="relative w-full overflow-hidden border-t border-slate-200 bg-[#F6F8FC]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3478E5]/40 to-transparent" />

          <div className="grid gap-10 mx-auto grid max-w-7xl gap-10 px-8 py-16 lg:grid-cols-[1.25fr_0.85fr_1.05fr_1.1fr] xl:px-12">
            <div className="max-w-xs">
              <SesenLogo />
              <p className="mt-7 text-[16px] leading-7 text-slate-600">
                Sesen provides AI-enabled translation and localization solutions for regulated life sciences organizations across clinical, regulatory, labeling, medical device, and healthcare environments in 150+ languages.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#3478E5] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="text-sm font-bold">in</span>
                </a>
                
                <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#3478E5] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="text-xs font-bold">▶</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-slate-900">Quick Links</h3>
              <div className="mt-6 flex flex-col">
                {quickLinks.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-slate-900">Popular Services</h3>
              <div className="mt-6 flex flex-col">
                {services.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-slate-900">Contact Us</h3>
              <div className="mt-6 space-y-5 text-[15px] leading-6 text-slate-600">
                <div className="flex gap-4">
                  <ContactIcon type="location" />
                  <div>
                    <p className="font-medium text-slate-800">Boston Headquarters</p>
                    <p>1 Post Office Square, 23rd Floor</p>
                    <p>Boston, MA 02109</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ContactIcon type="email" />
                  <a href="mailto:info@sesen.com" className="transition-colors hover:text-[#3478E5]">info@sesen.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <ContactIcon type="phone" />
                  <a href="tel:+16172638950" className="transition-colors hover:text-[#3478E5]">+1-617-263-8950</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/80 bg-white/45">
            <div className="mx-auto max-w-7xl px-8 py-7 text-sm font-medium text-slate-500 xl:px-12">
              Trusted by global life sciences teams for clinical, regulatory, and multilingual content workflows.
            </div>
            <div className="mx-auto max-w-7xl px-8 xl:px-12">
              <div className="border-b border-slate-200/60" />
            </div>
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-8 py-8 lg:flex-row lg:items-center lg:justify-between xl:px-12">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <span>© 2026 Sesen. All rights reserved.</span>
                <a href="https://www.sesen.com/privacy-policy/" className="hover:text-[#3478E5]">Privacy Policy</a>
                <a href="https://www.sesen.com/terms-of-use/" className="hover:text-[#3478E5]">Terms of Use</a>
                <a href="https://www.sesen.com/cookie-policy/" className="hover:text-[#3478E5]">Cookie Policy</a>
                <a href="https://www.sesen.com/accessibility/" className="hover:text-[#3478E5]">Accessibility</a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {trustItems.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </footer>
      </div>
    </div>
  );
}
