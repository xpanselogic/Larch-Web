// Field language — shared color tokens + small primitives reused across sections.
// All sections import this so the whole page is consistent.
import React from 'react';
import { useIsMobile } from '../hooks/useViewport.jsx';

export const C = {
  bg: '#f5f1e8',         // cream paper
  paper: '#fbf8f1',      // brighter card paper
  paper2: '#efeadd',     // subtle alt paper
  ink: '#1a1d2e',        // deep indigo type
  m: 'rgba(26,29,46,0.6)',
  m2: 'rgba(26,29,46,0.45)',
  d: 'rgba(26,29,46,0.3)',
  b: 'rgba(26,29,46,0.12)',
  bDark: 'rgba(26,29,46,0.22)',
  a: '#c8421f',          // brick orange accent
  aDim: 'rgba(200,66,31,0.12)',
  ok: '#2f6b3a',
};

export const fonts = {
  serif: 'Instrument Serif, Georgia, serif',
  body: 'Geist, Inter, -apple-system, sans-serif',
  mono: 'Geist Mono, JetBrains Mono, monospace',
};

// Section header — eyebrow + folio-numbered title in editorial style
export function SectionHead({ folio, eyebrow, title, kicker, align = 'left' }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 760 : 880, margin: align === 'center' ? '0 auto' : undefined }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11.5, color: C.a, fontFamily: fonts.mono, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 18 }}>
        <span style={{ width: 24, height: 1, background: C.a }} />
        {folio} · {eyebrow}
      </div>
      <h2 style={{ fontFamily: fonts.serif, fontSize: isMobile ? 36 : 64, lineHeight: isMobile ? 1.05 : 1.0, letterSpacing: '-0.035em', fontWeight: 400, margin: 0, color: C.ink }}>
        {title}
      </h2>
      {kicker && (
        <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.5, color: C.m, marginTop: 18, maxWidth: 560, margin: align === 'center' ? '18px auto 0' : '18px 0 0' }}>{kicker}</p>
      )}
    </div>
  );
}

// Editorial rule line
export function Rule({ pad = 0 }) {
  return <div style={{ height: 1, background: C.b, margin: `${pad}px 0` }} />;
}

// Pill button - primary
export function PrimaryBtn({ children, style = {} }) {
  return (
    <button style={{ background: C.a, color: '#fff', border: 'none', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: fonts.body, display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      {children}
    </button>
  );
}

export function GhostBtn({ children, style = {} }) {
  return (
    <button style={{ background: 'transparent', color: C.ink, border: `1px solid ${C.b}`, padding: '15px 22px', borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: fonts.body, ...style }}>
      {children}
    </button>
  );
}
