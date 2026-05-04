// AI-skeptic callout. Sits between BuiltFor and HowItWorks so the
// reassurance lands before the user dives into "how it works" (and
// before they decide they don't want anything that leans on AI).
import React from 'react';
import { C, fonts } from '../design/tokens.jsx';
import { useIsMobile } from '../hooks/useViewport.jsx';

export default function AiOptional() {
  const isMobile = useIsMobile();
  return (
    <section data-screen-label="01c AI optional" style={{ background: C.bg, padding: isMobile ? '40px 20px' : '56px 56px', borderTop: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: fonts.mono, fontSize: 11, color: C.a, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
          <span style={{ width: 24, height: 1, background: C.a }} />
          AI · OPTIONAL · ALWAYS
          <span style={{ width: 24, height: 1, background: C.a }} />
        </div>
        <p style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: isMobile ? 26 : 36, lineHeight: 1.15, color: C.ink, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
          Don't trust AI? <span style={{ color: C.a }}>Turn it off.</span>
        </p>
        <p style={{ fontFamily: fonts.body, fontSize: isMobile ? 14.5 : 15.5, color: C.m, lineHeight: 1.6, maxWidth: 560, margin: '0 auto' }}>
          Disable per customer (Grandma doesn't want a robot), or shut the whole AI off in Settings. You're always in charge.
        </p>
      </div>
    </section>
  );
}
