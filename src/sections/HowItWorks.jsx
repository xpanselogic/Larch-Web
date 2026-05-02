// Field — How it works. 3-step editorial explainer.
// Big folio numerals (Instrument Serif italic), step copy, and a small
// schematic illustration per step (pure CSS/SVG, no images).
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';

export default function HowItWorks() {
  const steps = [
    {
      n: '01',
      eyebrow: 'Plug in',
      title: <>You forward your number,<br />your inbox, your jobs.</>,
      body: 'Renderment becomes the front desk for your shop. Customer texts and calls land in one place; quotes, jobs, and invoices stop living in your head.',
      illo: 'plug',
    },
    {
      n: '02',
      eyebrow: 'It learns the shop',
      title: <>It reads how you<br /><span style={{ fontStyle: 'italic', color: C.a }}>actually</span> work.</>,
      body: 'Renderment ingests your past jobs, pricing, and customer history. It quotes the way you quote, books the way you book, and writes back in your voice.',
      illo: 'brain',
    },
    {
      n: '03',
      eyebrow: 'It runs the front desk',
      title: <>You stay on the truck.<br />It handles the rest.</>,
      body: 'Customers text, the AI replies. Quotes go out, invoices go in. You get a clean ledger every Friday and a notification only when something needs you.',
      illo: 'truck',
    },
  ];

  return (
    <section data-screen-label="02 How it works" style={{ background: C.bg, padding: '120px 56px 100px', position: 'relative', borderTop: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHead
        folio="№ 02"
        eyebrow="How it works"
        title={<>Three steps. <span style={{ fontStyle: 'italic', color: C.a }}>One quiet shop.</span></>}
        kicker="Setup takes an afternoon. After that, Renderment runs the parts of the business you don't want to."
      />

      <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${C.b}` }}>
        {steps.map((s, i) => (
          <article key={s.n} style={{ padding: '40px 32px 40px 0', borderRight: i < 2 ? `1px solid ${C.b}` : 'none', paddingLeft: i > 0 ? 32 : 0, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 24 }}>
              <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 120, lineHeight: 0.85, color: C.a, letterSpacing: '-0.04em' }}>{s.n}</div>
              <div style={{ fontFamily: fonts.mono, fontSize: 11, color: C.m, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                {s.eyebrow}
              </div>
            </div>

            <h3 style={{ fontFamily: fonts.serif, fontSize: 34, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 400, margin: '0 0 16px 0', color: C.ink, minHeight: 84 }}>
              {s.title}
            </h3>

            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.m, margin: '0 0 28px 0' }}>{s.body}</p>

            <StepIllo kind={s.illo} />
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function StepIllo({ kind }) {
  const box = { background: C.paper, border: `1px solid ${C.b}`, borderRadius: 8, padding: 16, height: 160, position: 'relative', overflow: 'hidden' };

  if (kind === 'plug') {
    return (
      <div style={box}>
        <div style={{ position: 'absolute', top: 10, right: 12, fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.1em' }}>SOURCES → 1</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
          {[
            { l: 'Phone · (415) 555-0142', v: 'forwarded' },
            { l: 'Email · ops@yourshop.com', v: 'connected' },
            { l: 'Calendar · Google', v: 'connected' },
            { l: 'QuickBooks', v: 'connected' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, paddingBottom: 4, borderBottom: `1px solid ${C.b}` }}>
              <span style={{ color: C.ink }}>{r.l}</span>
              <span style={{ color: C.a, fontFamily: fonts.mono, fontSize: 10, letterSpacing: '0.06em' }}>● {r.v}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'brain') {
    return (
      <div style={box}>
        <div style={{ position: 'absolute', top: 10, right: 12, fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.1em' }}>INGESTING · 1,847 PAST JOBS</div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { l: 'Pricing rules', w: 92 },
            { l: 'Customer history', w: 78 },
            { l: 'Reply tone & cadence', w: 64 },
            { l: 'Common follow-ups', w: 51 },
          ].map(r => (
            <div key={r.l}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                <span style={{ color: C.ink }}>{r.l}</span>
                <span style={{ fontFamily: fonts.mono, color: C.m }}>{r.w}%</span>
              </div>
              <div style={{ height: 3, background: C.b, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${r.w}%`, background: C.a }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'truck') {
    return (
      <div style={box}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${C.b}`, paddingBottom: 8, marginBottom: 10 }}>
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 15, color: C.ink }}>Your Friday</span>
          <span style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m, letterSpacing: '0.1em' }}>WEEK · 17</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px' }}>
          {[
            { l: 'Texts handled', v: '127' },
            { l: 'Quotes sent', v: '38' },
            { l: 'Jobs booked', v: '21' },
            { l: 'Invoices paid', v: '$48,210' },
          ].map(r => (
            <div key={r.l}>
              <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{r.l}</div>
              <div style={{ fontFamily: fonts.serif, fontSize: 22, color: C.ink, lineHeight: 1.1, marginTop: 2 }}>{r.v}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 14, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 13, color: C.a }}>
          ↗ 1 thing needs you
        </div>
      </div>
    );
  }

  return null;
}
