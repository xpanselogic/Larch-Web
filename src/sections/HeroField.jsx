// V3 Field — Editorial light, warm cream, deep indigo + brick orange.
// "Built for the people who build everything else." — original V3 hero with
// the day-book ledger card and phone mockup on the right, trade pills below copy.
import React from 'react';
import { TRADES, useSmsReveal, usePhaseProgress } from '../design/heroShared.jsx';

export default function HeroField() {
  const [ti, setTi] = React.useState(0);
  const t = TRADES[ti];
  const sms = useSmsReveal(t.sms, 1800);
  const ph = usePhaseProgress(t.phases, 2400);
  const C = { bg: '#f5f1e8', paper: '#fbf8f1', ink: '#1a1d2e', m: 'rgba(26,29,46,0.6)', d: 'rgba(26,29,46,0.3)', b: 'rgba(26,29,46,0.12)', a: '#c8421f' };

  return (
    <div style={{ width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'Geist, Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 24, right: 56, fontFamily: 'Instrument Serif, serif', fontSize: 14, color: C.m, fontStyle: 'italic' }}>№ 01 · The Field</div>

      <nav style={{ position: 'relative', zIndex: 2, padding: '24px 56px', borderBottom: `1px solid ${C.b}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1280 - 112, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 26, fontWeight: 400, letterSpacing: '-0.02em', fontStyle: 'italic', color: C.a }}>R</div>
            <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em' }}>Renderment</span>
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: 14, color: C.ink, alignItems: 'center' }}>
            {[
              ['Product', '#product'],
              ['Pricing', '#pricing'],
              ['Customers', '#customers'],
            ].map(([label, href]) => (
              <a key={label} href={href} style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>{label}</a>
            ))}
            <span style={{ width: 1, height: 16, background: C.b }} />
            <a href="https://app.renderment.com/login" style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>Sign in</a>
            <a href="https://app.renderment.com/register" style={{ background: C.ink, color: C.bg, padding: '10px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Start trial</a>
          </div>
        </div>
      </nav>

      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, padding: '56px 56px 0', maxWidth: 1280, margin: '0 auto' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, color: C.a, fontFamily: 'Geist Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, fontWeight: 600 }}>
            <span style={{ width: 24, height: 1, background: C.a }} />
            Operations · for the trades
          </div>

          <h1 style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.04em', fontWeight: 400, margin: '0 0 28px 0', fontFamily: 'Instrument Serif, serif' }}>
            Built for<br />the people<br />
            <span style={{ fontStyle: 'italic', color: C.a }}>who build</span><br />
            <span style={{ fontStyle: 'italic', color: C.a }}>everything else.</span>
          </h1>

          <p style={{ fontSize: 19, lineHeight: 1.55, color: C.m, maxWidth: 540, margin: '0 0 36px 0' }}>
            Renderment is the operations OS for trade businesses — jobs, quotes, invoices, and customer texts handled in one quiet place. Made for {t.verb} who'd rather be on the truck.
          </p>

          <div style={{ marginBottom: 36 }}>
            <div style={{ color: C.m, marginBottom: 14, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 15 }}>Choose your trade —</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TRADES.map((tt, i) => (
                <button key={tt.id} onClick={() => setTi(i)} style={{
                  background: i === ti ? C.ink : 'transparent', color: i === ti ? C.bg : C.ink,
                  border: i === ti ? `1px solid ${C.ink}` : `1px solid ${C.b}`,
                  padding: '9px 16px', borderRadius: 999, fontSize: 13.5, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                }}>{tt.name}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="https://app.renderment.com/register" style={{ background: C.a, color: '#fff', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              Start free for 14 days
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>↗</span>
            </a>
            <a href="#how-it-works" style={{ background: 'transparent', color: C.ink, padding: '15px 0', fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 6 }}>
              Read the manifesto
            </a>
          </div>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.b}`, display: 'flex', gap: 36 }}>
            <div>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 36, fontStyle: 'italic', color: C.a, letterSpacing: '-0.02em' }}>"Saved my Saturdays."</div>
              <div style={{ fontSize: 13, color: C.m, marginTop: 6 }}>— Mike R., Sterling Plumbing · 18-truck shop</div>
            </div>
          </div>
        </div>

        {/* Right: editorial composition with phone + ledger card.
            Width-locked at 480 + marginLeft:auto so day-book + phone stay
            clustered at the right edge regardless of viewport width — page
            still autofills, but this composition doesn't drift apart. */}
        <div style={{ position: 'relative', height: 680, width: 480, marginLeft: 'auto' }}>
          <div style={{ position: 'absolute', top: 20, right: 20, fontFamily: 'Instrument Serif, serif', fontSize: 280, lineHeight: 1, fontStyle: 'italic', color: C.a, opacity: 0.06, fontWeight: 400 }}>0{ti + 1}</div>

          {/* Day-book ledger card */}
          <div style={{ position: 'absolute', left: 0, top: 60, width: 280, background: C.paper, border: `1px solid ${C.b}`, padding: 20, boxShadow: '0 24px 48px rgba(26,29,46,0.08)', transform: 'rotate(-2deg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${C.b}`, paddingBottom: 10, marginBottom: 12 }}>
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 16 }}>Day book</span>
              <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: C.m }}>{t.invoice.num}</span>
            </div>
            <div style={{ color: C.m, marginBottom: 4, fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontSize: 15 }}>For — {t.invoice.label}</div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 42, fontWeight: 400, letterSpacing: '-0.02em', marginTop: 8 }}>{t.invoice.amount}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, paddingTop: 10, borderTop: `1px solid ${C.b}`, fontSize: 11, color: C.m }}>
              <span>Sent · auto</span>
              <span style={{ color: C.a, fontWeight: 600 }}>Paid in 3d</span>
            </div>
          </div>

          {/* Phone */}
          <div style={{ position: 'absolute', right: 30, top: 30, width: 280, height: 580, borderRadius: 42, background: C.ink, padding: 8, boxShadow: '0 30px 80px rgba(26,29,46,0.25)' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: 34, background: C.bg, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 90, height: 24, background: C.ink, borderRadius: 12, zIndex: 3 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 22px 8px', fontSize: 12, fontWeight: 600, color: C.ink }}>
                <span>9:41</span>
                <span style={{ fontSize: 11 }}>●●● 5G ▮</span>
              </div>
              <div style={{ padding: '12px 16px 12px', borderBottom: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.a, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 16 }}>{t.id[0].toUpperCase()}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name} customer</div>
                  <div style={{ color: C.m, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 11 }}>Renderment is replying</div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
                {t.sms.slice(0, sms).map((m, i) => (
                  <div key={i} style={{ alignSelf: m.from === 'cust' ? 'flex-start' : 'flex-end', maxWidth: '80%' }}>
                    <div style={{ background: m.from === 'cust' ? C.paper : C.ink, color: m.from === 'cust' ? C.ink : C.bg, padding: '9px 13px', borderRadius: m.from === 'cust' ? '14px 14px 14px 3px' : '14px 14px 3px 14px', fontSize: 12.5, lineHeight: 1.4, border: m.from === 'cust' ? `1px solid ${C.b}` : 'none' }}>{m.text}</div>
                  </div>
                ))}
              </div>
              {/* Job phase strip at bottom */}
              <div style={{ padding: '12px', borderTop: `1px solid ${C.b}`, background: C.paper }}>
                <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: C.m, marginBottom: 6, letterSpacing: '0.06em' }}>JOB-0042 · {Math.min(ph, t.phases.length)}/{t.phases.length}</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{t.phases[Math.min(ph, t.phases.length) - 1] || 'Complete'}</div>
                <div style={{ height: 3, background: C.b, marginTop: 8, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(100, ((ph - 1) / t.phases.length) * 100)}%`, background: C.a, transition: 'width .5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
