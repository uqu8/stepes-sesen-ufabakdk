import React from 'react';

function ArrowUpRight({ className = 'w-5 h-5' }) {
  // ← 删掉了类型注解
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function BrandPortal({ brand, title, description, href, accent }) {
  // ← 删掉了类型注解
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-[36px] border border-black/[0.06] bg-white/70 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
    >
      {/* Glow */}
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: accent,
        }}
      />

      <div className="relative z-10">
        <div
          className="mb-10 text-4xl font-semibold tracking-[-0.03em] transition-transform duration-500 group-hover:scale-[1.04]"
          style={{
            color: accent,
          }}
        >
          {brand}
        </div>

        <h2 className="max-w-md text-3xl font-semibold tracking-[-0.04em] text-neutral-950">
          {title}
        </h2>

        <p className="mt-5 max-w-md text-[16px] leading-7 text-neutral-500">
          {description}
        </p>

        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-neutral-900 transition-all duration-300 group-hover:gap-5">
          Enter brand
          <ArrowUpRight />
        </div>
      </div>
    </a>
  );
}

export default function GatewayPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa] text-neutral-950">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(193,29,99,.12)',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(37,99,235,.12)',
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-6 py-24">
        {/* Hero */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 text-sm font-medium uppercase text-neutral-400">
            Global Language Platform
          </div>

          <h1 className="text-[52px] font-semibold leading-[0.98] sm:text-[72px]">
            One Language.
            <br />
            <span className="bg-gradient-to-r from-[#B91C63] via-neutral-900 to-[#2563EB] bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
            A unified gateway to premium translation, localization, and language
            solutions powered by AI technology and human expertise.
          </p>
        </div>

        {/* Brand Portals */}
        <div className="mx-auto mt-20 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          <BrandPortal
            brand="Stepes"
            title="AI-powered translation for global enterprises"
            description="Scale multilingual content with AI workflows, professional linguists, and enterprise localization solutions."
            href="/stepes/"
            accent="#B91C63"
          />

          <BrandPortal
            brand="Sesen"
            title="Professional language services for global communication"
            description="Human-centered translation, interpretation, and multimedia localization services."
            href="/sesen/"
            accent="#2563EB"
          />
        </div>

        {/* Footer */}
        <div className="mt-20 flex justify-center gap-8 text-sm text-neutral-400">
          <span>Trusted by global organizations</span>
          <span>•</span>
          <span>100+ languages</span>
          <span>•</span>
          <span>AI + Human expertise</span>
        </div>
      </section>
    </main>
  );
}
