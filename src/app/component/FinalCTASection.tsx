import React from 'react';

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(76,29,149,0.35) 0%, rgba(124,58,237,0.15) 40%, transparent 75%)',
        }}
      />
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="text-label text-accent mb-6 block reveal-hidden stagger-1">
          Why It Matters
        </span>

        {/* Subhead */}
        <p className="text-base md:text-lg text-muted-foreground mb-6 reveal-hidden stagger-2 leading-relaxed" style={{ fontWeight: 400 }}>
          A confused visitor will never become a paying client.{' '}
          <span className="text-secondary-foreground font-semibold">
            A customized web solution will.
          </span>
        </p>

        {/* Large text */}
        <h2
          className="text-display text-foreground mb-8 reveal-hidden stagger-3"
          style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)' }}
        >
          Contact me manually through{' '}
          <span className="text-gradient">DM to ensure</span> your new website
          perfectly captures your brand and converts.
        </h2>

        {/* Divider */}
        <div className="divider-glow max-w-xs mx-auto mb-8 reveal-hidden stagger-4" />

        {/* Secondary subhead */}
        <p
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed reveal-hidden stagger-4"
          style={{ fontWeight: 300 }}
        >
          DM consultations allow us to build precisely what you need, with no
          automated low-quality output. Every project is a manual craft.
        </p>

        {/* CTA */}
        <div className="mt-10 reveal-hidden stagger-5">
          <a
            href="#contact"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
            aria-label="Start a project via DM consultation"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.845L.057 23.203a.75.75 0 00.921.921l5.358-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.955 0-3.782-.537-5.343-1.47l-.383-.228-3.18.87.87-3.18-.228-.383A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Start a Project via DM
          </a>
        </div>
      </div>
    </section>
  );
}
