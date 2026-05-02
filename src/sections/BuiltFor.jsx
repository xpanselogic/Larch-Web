// Field — Built For. Quiet inclusivity strip just under the hero.
// The hero's "Choose your trade" pills only show 5 trades, which can read
// as the closed list. This section reassures prospects in other service
// trades that the product is for them too.
import React from 'react';
import { C, fonts } from '../design/tokens.jsx';

const TRADES = [
  'Plumbing', 'Electrical', 'HVAC', 'Roofing', 'Landscaping',
  'General contracting', 'Painting', 'Concrete', 'Carpentry',
  'Pest control', 'Pool service', 'Tree service', 'Cleaning',
];

export default function BuiltFor() {
  return (
    <section data-screen-label="01b Built for" style={{ background: C.paper2, padding: '72px 56px', borderTop: `1px solid ${C.b}`, borderBottom: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: fonts.mono, fontSize: 11, color: C.a, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
            <span style={{ width: 24, height: 1, background: C.a }} />
            Built for the trades
            <span style={{ width: 24, height: 1, background: C.a }} />
          </span>
        </div>

        <p style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 28, lineHeight: 1.5, color: C.ink, textAlign: 'center', maxWidth: 1080, margin: '0 auto', letterSpacing: '-0.01em' }}>
          {TRADES.map((t, i) => (
            <React.Fragment key={t}>
              {t}
              <span style={{ color: C.d, margin: '0 10px', fontStyle: 'normal' }}>·</span>
            </React.Fragment>
          ))}
          <span style={{ color: C.a }}>and anyone else</span>
          <span style={{ color: C.ink }}> who runs service calls.</span>
        </p>

        <p style={{ fontFamily: fonts.body, fontSize: 14.5, color: C.m, textAlign: 'center', maxWidth: 620, margin: '28px auto 0', lineHeight: 1.5 }}>
          If you book jobs, text customers, and send invoices, Renderment works for you —
          regardless of trade. The five pills above are just the tip.
        </p>
      </div>
    </section>
  );
}
