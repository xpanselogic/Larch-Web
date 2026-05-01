// V3c — Field / Hero IS the demo (stretch).
// The page itself is the live transcription. Raw customer SMS appears
// in the left margin like a manuscript; the AI extracts structured fields
// into the editorial typography on the right. No phone, no card frame —
// the page reads as a working document.
import React from 'react';
import { TRADES, useSmsReveal } from '../design/heroShared.jsx';

// Per-trade structured scope: what the AI extracts from the messages.
const SCOPES = {
  plumbing:   { issue: 'Water heater · no hot water',   urgency: 'Same-day',  job: 'Diagnostic + repair',     window: 'Today, 2:00–4:00pm',    tech: 'Mike R.',     est: '$89 diag · applied to repair' },
  electrical: { issue: 'Kitchen circuit · flickering',  urgency: 'Recurring · 2nd visit', job: 'Service call · panel check', window: 'Tomorrow, 9:00–11:00am', tech: 'Tony L.',     est: '$120 service · est.' },
  hvac:       { issue: 'AC · blowing warm air',         urgency: 'Same-day',  job: 'Diagnostic · warranty job', window: 'Today, 3:15–5:15pm',    tech: 'Driver TBD',  est: '$0 · labor warranty' },
  roofing:    { issue: 'Storm damage · active leak',    urgency: 'Emergency', job: 'Tarp now · re-roof quote', window: 'Today, 1:00–3:00pm',    tech: 'Dave K.',     est: '$0 tarp w/ repair' },
  landscape:  { issue: 'Quote change · add firepit',    urgency: 'Routine',   job: 'Updated estimate',         window: 'Quote in 30s',          tech: '—',           est: '+$1,400 · 48" firepit' },
};

export default function HeroFieldC() {
  const [ti, setTi] = React.useState(0);
  const t = TRADES[ti];
  const scope = SCOPES[t.id] || SCOPES.plumbing;
  const sms = useSmsReveal(t.sms, 1300);
  const stage = Math.min(5, sms);
  const C = { bg: '#f5f1e8', paper: '#fbf8f1', ink: '#1a1d2e', m: 'rgba(26,29,46,0.6)', d: 'rgba(26,29,46,0.3)', b: 'rgba(26,29,46,0.12)', a: '#c8421f' };

  const custMsg = t.sms[0].text;

  const Field = ({ label, value, show, mono }) => (
    <div style={{ paddingTop: 14, borderTop: `1px solid ${C.b}` }}>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: C.m, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: mono ? 'Geist Mono, monospace' : 'Instrument Serif, serif', fontStyle: mono ? 'normal' : 'italic', fontSize: mono ? 15 : 22, lineHeight: 1.25, color: show ? C.ink : 'transparent', minHeight: 28, transition: 'color .5s', position: 'relative' }}>
        {show ? value : (
          <span style={{ position: 'absolute', left: 0, top: 6, display: 'inline-flex', gap: 4 }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: C.d, animation: `rmPulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />)}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div data-screen-label="V3c Field / Hero IS demo" style={{ width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'Geist, Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 24, right: 56, fontFamily: 'Instrument Serif, serif', fontSize: 14, color: C.m, fontStyle: 'italic' }}>№ 01c · The Manuscript</div>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 56px', borderBottom: `1px solid ${C.b}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 26, fontStyle: 'italic', color: C.a }}>R</div>
          <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em' }}>Renderment</span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, alignItems: 'center' }}>
          {['Product', 'Pricing', 'Customers', 'Changelog'].map(x => <span key={x} style={{ cursor: 'pointer' }}>{x}</span>)}
          <span style={{ width: 1, height: 16, background: C.b }} />
          <span style={{ cursor: 'pointer' }}>Sign in</span>
          <button style={{ background: C.ink, color: C.bg, border: 'none', padding: '10px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Start trial</button>
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 0, padding: '56px 56px 0' }}>
        {/* Left margin — manuscript / raw input */}
        <aside style={{ borderRight: `1px solid ${C.b}`, paddingRight: 32, position: 'relative' }}>
          <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: C.m, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18, display: 'flex', justifyContent: 'space-between' }}>
            <span>Margin · raw</span>
            <span style={{ color: C.a }}>● live</span>
          </div>

          <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: C.m, marginBottom: 6, letterSpacing: '0.06em' }}>09:41 · {t.name} customer · SMS</div>
          <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: C.ink, marginBottom: 28, position: 'relative' }}>
            <span style={{ color: C.a, fontFamily: 'Instrument Serif, serif', fontSize: 48, fontStyle: 'italic', position: 'absolute', left: -22, top: -14, lineHeight: 1 }}>"</span>
            {custMsg}
            {stage >= 1 && (
              <span style={{ display: 'inline-block', width: 1, height: 18, background: C.ink, marginLeft: 2, animation: 'rmBlink 1s steps(2) infinite', verticalAlign: 'middle' }} />
            )}
          </div>

          {stage >= 2 && (
            <>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: C.m, marginBottom: 6, letterSpacing: '0.06em' }}>09:41 · Renderment · auto-reply</div>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, lineHeight: 1.5, color: C.ink, padding: '12px 14px', background: C.paper, border: `1px solid ${C.b}`, borderLeft: `2px solid ${C.a}`, marginBottom: 24, animation: 'rmFadeIn .4s ease-out' }}>
                {t.sms[1]?.text}
              </div>
            </>
          )}

          {stage >= 4 && (
            <>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: C.m, marginBottom: 6, letterSpacing: '0.06em' }}>09:42 · {t.name} customer</div>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 17, color: C.ink, marginBottom: 18, animation: 'rmFadeIn .4s ease-out' }}>
                {t.sms[2]?.text}
              </div>
            </>
          )}

          {/* Trade picker — annotation style */}
          <div style={{ marginTop: 36, paddingTop: 18, borderTop: `1px solid ${C.b}` }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 14, color: C.m, marginBottom: 10 }}>Try another trade —</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {TRADES.map((tt, i) => (
                <button key={tt.id} onClick={() => setTi(i)} style={{
                  background: 'transparent', border: 'none', padding: 0, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
                  color: i === ti ? C.a : C.m, fontWeight: i === ti ? 600 : 400,
                  textDecoration: i === ti ? 'underline' : 'none', textUnderlineOffset: 4,
                }}>{tt.name}{i < TRADES.length - 1 && <span style={{ color: C.d, marginLeft: 6 }}>·</span>}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right — the editorial extraction */}
        <main style={{ paddingLeft: 48, position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11.5, color: C.a, fontFamily: 'Geist Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24, fontWeight: 600 }}>
            <span style={{ width: 24, height: 1, background: C.a }} />
            Watch a customer text become a job · live
          </div>

          <h1 style={{ fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.04em', fontWeight: 400, margin: '0 0 24px 0', fontFamily: 'Instrument Serif, serif', maxWidth: 780 }}>
            From <span style={{ fontStyle: 'italic', color: C.a }}>"hey, water</span><br />
            <span style={{ fontStyle: 'italic', color: C.a }}>heater stopped"</span> to a<br />
            booked, dispatched job.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: C.m, maxWidth: 560, margin: '0 0 36px 0' }}>
            Renderment is the operating system for a small trades business — the AI front desk, plus jobs, quotes, invoices, costing, and the eight automations that run themselves. This is the actual flow, running live.
          </p>

          {/* Extracted scope ledger — the "structured" output */}
          <div style={{ background: C.paper, border: `1px solid ${C.b}`, borderRadius: 10, padding: '24px 28px', maxWidth: 680, marginBottom: 28, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -11, left: 24, background: C.paper, padding: '0 10px', fontFamily: 'Geist Mono, monospace', fontSize: 10.5, letterSpacing: '0.12em', color: C.m, textTransform: 'uppercase' }}>
              Extracted · structured ↓
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 32, rowGap: 0 }}>
              <Field label="Issue"     value={scope.issue}   show={stage >= 2} />
              <Field label="Urgency"   value={scope.urgency} show={stage >= 2} mono />
              <Field label="Job type"  value={scope.job}     show={stage >= 3} />
              <Field label="Window"    value={scope.window}  show={stage >= 3} mono />
              <Field label="Assigned"  value={scope.tech}    show={stage >= 4} mono />
              <Field label="Estimate"  value={scope.est}     show={stage >= 4} mono />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button style={{ background: C.a, color: '#fff', border: 'none', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              Run this on your business
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>↗</span>
            </button>
            <button style={{ background: 'transparent', color: C.ink, border: 'none', padding: '15px 0', fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 6 }}>
              How it works →
            </button>
            <span style={{ marginLeft: 12, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 14, color: C.m }}>
              No card · 14-day trial
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
