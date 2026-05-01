// Field — Feature mock UI screens. Four surfaces, one design system.
// Aligned to actual product: Jobs (table + 5-tab modal), Quotes, Invoices, Messages (with AI thumbs).
import React from 'react';
import { C, fonts } from '../design/tokens.jsx';

export default function FeatureMock({ id }) {
  const Chrome = ({ title, subtitle, children, height = 480 }) => (
    <div style={{ background: C.paper, border: `1px solid ${C.bDark}`, borderRadius: 12, overflow: 'hidden', boxShadow: '0 30px 60px rgba(26,29,46,0.10)' }}>
      <div style={{ background: C.bg, padding: '12px 16px', borderBottom: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#e5826b', '#e5c46b', '#a3c889'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: fonts.mono, fontSize: 11, color: C.m, letterSpacing: '0.06em' }}>{title} <span style={{ color: C.d }}>·</span> {subtitle}</div>
        <div style={{ width: 54 }} />
      </div>
      <div style={{ height, position: 'relative', overflow: 'hidden' }}>{children}</div>
    </div>
  );

  // ── JOBS — table + open detail modal w/ 5 tabs (real product structure)
  if (id === 'jobs') {
    const stats = [['Pending', '12'], ['In progress', '5'], ['Complete', '38'], ['Revenue (mo)', '$48,210'], ['Outstanding', '$8,420']];
    const rows = [
      { id: 'JOB-0042', cust: 'Smith, Janet', addr: '412 Oak St', phase: 'In progress', sub: 'Mike R.', amt: '$2,710', s: 'live', open: true },
      { id: 'JOB-0041', cust: 'Davis Family', addr: '88 Birchwood', phase: 'In progress', sub: 'Mike R.', amt: '$3,840', s: 'live' },
      { id: 'JOB-0040', cust: 'Patel, Tony', addr: '214 Mason', phase: 'Pending', sub: 'Tony L.', amt: '$1,260', s: 'set' },
      { id: 'JOB-0039', cust: 'Garcia, M.', addr: '1102 Lopez Ln', phase: 'Pending', sub: 'Dave K.', amt: '$890', s: 'set' },
      { id: 'JOB-0038', cust: 'Walker, B.', addr: '4 Walker Bldg', phase: 'Complete', sub: 'Tony L.', amt: '$1,400', s: 'paid' },
      { id: 'JOB-0037', cust: 'Chen, H.', addr: '77 Lake Ave', phase: 'Complete', sub: 'Mike R.', amt: '$420', s: 'paid' },
    ];
    const sc = (s) => s === 'live' ? C.a : s === 'paid' ? '#2f6b3a' : C.ink;

    return (
      <Chrome title="Sterling Plumbing" subtitle="Jobs" height={560}>
        <div style={{ padding: '14px 22px', borderBottom: `1px solid ${C.b}`, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
          {stats.map(([l, v]) => (
            <div key={l}>
              <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em', marginBottom: 3 }}>{l.toUpperCase()}</div>
              <div style={{ fontFamily: fonts.serif, fontSize: 22, color: C.ink, letterSpacing: '-0.02em' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '10px 22px', borderBottom: `1px solid ${C.b}`, background: C.bg, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
          <span style={{ fontFamily: fonts.mono, color: C.a, letterSpacing: '0.06em' }}>＋ NEW JOB</span>
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', color: C.m }}>All · Pending · In progress · Complete · Paid</span>
        </div>
        <div style={{ position: 'relative', height: 'calc(100% - 49px - 39px - 36px)', overflow: 'hidden' }}>
          <div style={{ padding: '10px 22px', borderBottom: `1px solid ${C.b}`, display: 'grid', gridTemplateColumns: '90px 1.4fr 1.2fr 1fr 90px 80px 24px', gap: 16, fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em' }}>
            <span>JOB ID</span><span>CUSTOMER</span><span>ADDRESS</span><span>PHASE</span><span>ASSIGNED</span><span style={{ textAlign: 'right' }}>AMOUNT</span><span />
          </div>
          {rows.map((r) => (
            <div key={r.id} style={{ padding: '12px 22px', borderBottom: `1px solid ${C.b}`, display: 'grid', gridTemplateColumns: '90px 1.4fr 1.2fr 1fr 90px 80px 24px', gap: 16, fontSize: 12.5, alignItems: 'center', background: r.open ? C.bg : 'transparent', borderLeft: r.open ? `2px solid ${C.a}` : '2px solid transparent' }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 11 }}>{r.id}</span>
              <span style={{ fontWeight: r.open ? 600 : 400 }}>{r.cust}</span>
              <span style={{ color: C.m }}>{r.addr}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: fonts.mono, fontSize: 10, color: sc(r.s), letterSpacing: '0.06em' }}>● {r.phase.toUpperCase()}</span>
              <span style={{ color: C.m }}>{r.sub}</span>
              <span style={{ fontFamily: fonts.mono, textAlign: 'right' }}>{r.amt}</span>
              <span style={{ color: C.m, textAlign: 'center' }}>›</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', top: 60, right: 14, bottom: 14, width: 480, background: C.paper, border: `1px solid ${C.bDark}`, borderRadius: 10, boxShadow: '-20px 30px 60px rgba(26,29,46,0.18)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${C.b}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.a, letterSpacing: '0.1em', marginBottom: 4 }}>JOB-0042 · IN PROGRESS</div>
              <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 20, letterSpacing: '-0.01em' }}>Smith Residence — water heater</div>
              <div style={{ fontSize: 11.5, color: C.m, marginTop: 3 }}>412 Oak St · (415) 555-0142</div>
            </div>
            <span style={{ fontSize: 14, color: C.m, cursor: 'pointer' }}>✕</span>
          </div>
          <div style={{ display: 'flex', borderBottom: `1px solid ${C.b}`, fontFamily: fonts.mono, fontSize: 10, letterSpacing: '0.08em' }}>
            {['DETAILS', 'DOCUMENTS', 'PHOTOS', 'LABOR', 'COSTING'].map((t, i) => (
              <div key={t} style={{ padding: '12px 14px', borderBottom: i === 4 ? `2px solid ${C.a}` : '2px solid transparent', color: i === 4 ? C.a : C.m, fontWeight: i === 4 ? 600 : 400 }}>{t}</div>
            ))}
          </div>
          <div style={{ padding: '18px 20px', flex: 1, overflow: 'hidden' }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m, letterSpacing: '0.08em', marginBottom: 12 }}>JOB COSTING</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
              {[['Revenue', '$2,710', '#2f6b3a'], ['Costs', '$1,485', C.ink], ['Profit', '$1,225', C.a], ['Margin', '45.2%', C.a]].map(([l, v, col]) => (
                <div key={l} style={{ padding: '12px 14px', background: C.bg, border: `1px solid ${C.b}`, borderRadius: 6 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em' }}>{l.toUpperCase()}</div>
                  <div style={{ fontFamily: fonts.serif, fontSize: 22, color: col, letterSpacing: '-0.02em', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em', marginBottom: 8 }}>BREAKDOWN</div>
            {[['Materials · Bradford White WH', '$640'], ['Labor · 3 hrs (Mike R.)', '$540'], ['Permit · city', '$185'], ['Subcontractor · electric', '$120']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.b}`, fontSize: 12 }}>
                <span>{l}</span><span style={{ fontFamily: fonts.mono, color: C.ink }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: 10, background: C.aDim, borderLeft: `2px solid ${C.a}`, borderRadius: 4, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 12.5, color: C.ink }}>
              ↗ Margin is 8 pts above your shop avg.
            </div>
          </div>
        </div>
      </Chrome>
    );
  }

  // ── QUOTES
  if (id === 'quotes') {
    const items = [
      { q: 1, d: '50-gal gas water heater · Bradford White', c: 'WH-50-G', p: 1640 },
      { q: 1, d: 'Removal & disposal', c: 'LBR-DSP', p: 120 },
      { q: 1, d: 'Install · 3 hrs labor', c: 'LBR-INS-3', p: 540 },
      { q: 1, d: 'New T&P · expansion tank', c: 'PRT-TP', p: 185 },
      { q: 1, d: 'Permit & city inspection', c: 'PMT-CTY', p: 225 },
    ];
    const sub = items.reduce((a, i) => a + i.p, 0);
    const tax = Math.round(sub * 0.0875);
    const tot = sub + tax;
    return (
      <Chrome title="Sterling Plumbing" subtitle="Quotes · QT-2284" height={520}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', height: '100%' }}>
          <div style={{ padding: '24px 26px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.1em' }}>QUOTE · DRAFT</div>
                <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 22, marginTop: 2 }}>Smith Residence — water heater</div>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m }}>QT-2284</div>
            </div>
            <div style={{ borderTop: `2px solid ${C.ink}`, borderBottom: `1px solid ${C.b}`, padding: '8px 0', display: 'grid', gridTemplateColumns: '30px 1fr 70px 70px', gap: 10, fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em' }}>
              <span>QTY</span><span>DESCRIPTION</span><span style={{ textAlign: 'right' }}>CODE</span><span style={{ textAlign: 'right' }}>PRICE</span>
            </div>
            {items.map((i, k) => (
              <div key={k} style={{ borderBottom: `1px solid ${C.b}`, padding: '10px 0', display: 'grid', gridTemplateColumns: '30px 1fr 70px 70px', gap: 10, fontSize: 11.5 }}>
                <span style={{ fontFamily: fonts.mono }}>{i.q}</span>
                <span>{i.d}</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m, textAlign: 'right' }}>{i.c}</span>
                <span style={{ fontFamily: fonts.mono, textAlign: 'right' }}>${i.p.toLocaleString()}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, paddingTop: 10, borderTop: `2px solid ${C.ink}`, display: 'grid', gridTemplateColumns: '1fr 100px', gap: 10, alignItems: 'baseline' }}>
              <span style={{ textAlign: 'right', fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 18 }}>Total due</span>
              <span style={{ fontFamily: fonts.serif, fontSize: 30, color: C.a, textAlign: 'right', letterSpacing: '-0.02em' }}>${tot.toLocaleString()}</span>
            </div>
          </div>
          <div style={{ background: C.bg, borderLeft: `1px solid ${C.b}`, padding: '24px 22px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.1em', marginBottom: 14 }}>QUOTE → JOB → INVOICE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
              {[['Quote sent', 'QT-2284 · 4:12 PM', true], ['Customer accepted', 'Tap-to-sign · 4:31 PM', true], ['Job auto-created', 'JOB-0042 · scheduled Tue', true], ['Invoice on completion', 'Auto-sent when Mike marks done', false]].map(([h, s, done], i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', border: `1.5px solid ${done ? C.a : C.b}`, background: done ? C.a : 'transparent', color: done ? '#fff' : C.m, fontFamily: fonts.mono, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{done ? '✓' : i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: done ? C.ink : C.m }}>{h}</div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m, marginTop: 1 }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 12, color: C.m, paddingTop: 8, borderTop: `1px solid ${C.b}` }}>Three clicks from quote to invoice.</div>
            <div style={{ marginTop: 'auto' }}>
              <button style={{ width: '100%', background: C.a, color: '#fff', border: 'none', padding: '11px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, fontFamily: fonts.body }}>Send via SMS</button>
            </div>
          </div>
        </div>
      </Chrome>
    );
  }

  // ── INVOICES
  if (id === 'invoices') {
    const rows = [
      { n: 'INV-1051', c: 'Lopez · Maintenance', a: 185, s: 'paid', d: 'Apr 28' },
      { n: 'INV-1042', c: 'Davis · Repipe', a: 3840, s: 'paid', d: 'Apr 26' },
      { n: 'INV-1038', c: 'Chen · Service call', a: 420, s: 'sent', d: 'Apr 25' },
      { n: 'INV-1029', c: 'Walker · Repair', a: 1260, s: 'paid', d: 'Apr 22' },
      { n: 'INV-1014', c: 'Kim · Spring cleanup', a: 680, s: 'aging', d: 'Apr 14' },
      { n: 'INV-1007', c: 'Brooks · Yard reset', a: 5600, s: 'sent', d: 'Apr 12' },
    ];
    const sCol = (s) => s === 'paid' ? '#2f6b3a' : s === 'aging' ? '#d4a017' : C.ink;
    return (
      <Chrome title="Sterling Plumbing" subtitle="Invoices · April" height={520}>
        <div style={{ padding: '18px 24px', borderBottom: `1px solid ${C.b}`, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {[['Outstanding', '$8,420', '3 invoices'], ['Paid this mo.', '$24,680', '18 invoices'], ['Avg. days to pay', '6.2', 'vs. 23 industry'], ['Auto-reminders', 'Day 7', 'sent automatically']].map(([l, v, s]) => (
            <div key={l}>
              <div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m, letterSpacing: '0.08em', marginBottom: 4 }}>{l.toUpperCase()}</div>
              <div style={{ fontFamily: fonts.serif, fontSize: 24, color: C.ink, letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontSize: 11, color: C.m, fontStyle: 'italic', fontFamily: fonts.serif, marginTop: 2 }}>{s}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '12px 24px 0' }}>
          <div style={{ borderTop: `2px solid ${C.ink}`, padding: '10px 0', display: 'grid', gridTemplateColumns: '90px 1fr 80px 80px 80px', gap: 14, fontFamily: fonts.mono, fontSize: 9, color: C.m, letterSpacing: '0.08em' }}>
            <span>NUMBER</span><span>CUSTOMER</span><span style={{ textAlign: 'right' }}>AMOUNT</span><span>STATUS</span><span>SENT</span>
          </div>
          {rows.map((r) => (
            <div key={r.n} style={{ borderBottom: `1px solid ${C.b}`, padding: '12px 0', display: 'grid', gridTemplateColumns: '90px 1fr 80px 80px 80px', gap: 14, fontSize: 12.5, alignItems: 'center' }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: C.ink }}>{r.n}</span>
              <span>{r.c}</span>
              <span style={{ fontFamily: fonts.mono, textAlign: 'right' }}>${r.a.toLocaleString()}</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 10, color: sCol(r.s), letterSpacing: '0.08em', textTransform: 'uppercase' }}>● {r.s}</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: C.m }}>{r.d}</span>
            </div>
          ))}
        </div>
      </Chrome>
    );
  }

  // ── INBOX → MESSAGES (with AI thumbs feedback)
  if (id === 'inbox') {
    const threads = [
      { n: 'Janet S.', m: 'Water heater stopped working...', t: '9:41', a: true, active: true },
      { n: 'Tony Patel', m: 'Power flickering in the kitchen', t: '9:18', a: true },
      { n: 'Mike Garcia', m: 'AC blowing warm. 90° in here.', t: '8:54', a: true },
      { n: 'Sarah W.', m: "Storm last night. There's a leak", t: '8:12', a: false, human: true },
      { n: 'Tom Brooks', m: 'Can we add the firepit?', t: 'Yest.', a: true },
    ];
    return (
      <Chrome title="Sterling Plumbing" subtitle="Messages · 5 active threads" height={520}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', height: '100%' }}>
          <div style={{ borderRight: `1px solid ${C.b}`, background: C.bg }}>
            <div style={{ padding: '12px 14px', borderBottom: `1px solid ${C.b}`, fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.08em' }}>● 4 AUTO · 1 HANDOFF</div>
            {threads.map((th, i) => (
              <div key={i} style={{ padding: '12px 14px', borderBottom: `1px solid ${C.b}`, background: th.active ? C.paper : 'transparent', borderLeft: th.active ? `2px solid ${C.a}` : '2px solid transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600 }}>{th.n}</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 9.5, color: C.m }}>{th.t}</span>
                </div>
                <div style={{ fontSize: 11.5, color: C.m, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{th.m}</div>
                <span style={{ fontFamily: fonts.mono, fontSize: 8.5, color: th.human ? '#d4a017' : C.a, letterSpacing: '0.08em' }}>{th.human ? '! HANDOFF' : '● AUTO'}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '14px 20px', borderBottom: `1px solid ${C.b}` }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Janet Smith <span style={{ fontSize: 11, color: C.m, fontWeight: 400, fontFamily: fonts.serif, fontStyle: 'italic' }}>· customer since 2022</span></div>
            </div>
            <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
              {[
                { f: 'c', t: "Hey, water heater stopped working last night. Any chance you can come today?", time: '9:38' },
                { f: 'a', t: "Hi Janet — sorry to hear that. I have a 2pm slot today with Mike. Diagnostic is $89, applied to repair. Want me to book it?", time: '9:38', rated: 'up' },
                { f: 'c', t: "Yes please.", time: '9:39' },
                { f: 'a', t: "Booked. You'll get a text when Mike's 20 min out.", time: '9:39', rated: null },
              ].map((m, i) => (
                <div key={i} style={{ alignSelf: m.f === 'c' ? 'flex-start' : 'flex-end', maxWidth: '80%' }}>
                  {m.f === 'a' && <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.a, marginBottom: 3, paddingLeft: 4, letterSpacing: '0.06em' }}>RENDERMENT · AI</div>}
                  <div style={{ background: m.f === 'c' ? C.paper : C.ink, color: m.f === 'c' ? C.ink : C.bg, padding: '9px 13px', borderRadius: m.f === 'c' ? '14px 14px 14px 3px' : '14px 14px 3px 14px', fontSize: 12.5, lineHeight: 1.45, border: m.f === 'c' ? `1px solid ${C.b}` : 'none' }}>{m.t}</div>
                  {m.f === 'a' && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 5, paddingRight: 6, fontFamily: fonts.mono, fontSize: 9.5, color: C.m, letterSpacing: '0.04em' }}>
                      <span>{m.time}</span>
                      <span style={{ width: 1, height: 10, background: C.b }} />
                      <span style={{ color: m.rated === 'up' ? '#2f6b3a' : C.m, cursor: 'pointer', fontSize: 11 }}>👍</span>
                      <span style={{ cursor: 'pointer', fontSize: 11, color: C.m }}>👎</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ padding: '10px 16px 14px', borderTop: `1px solid ${C.b}`, background: C.bg, display: 'flex', gap: 8 }}>
              <div style={{ flex: 1, padding: '9px 14px', background: C.paper, border: `1px solid ${C.b}`, borderRadius: 999, fontSize: 12, color: C.m, fontFamily: fonts.serif, fontStyle: 'italic' }}>Reply manually, or let AI continue…</div>
            </div>
          </div>
        </div>
      </Chrome>
    );
  }

  return null;
}
