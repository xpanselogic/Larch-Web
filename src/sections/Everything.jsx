// Field — Everything else. Dense 3x3 grid of secondary product features.
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';

export default function Everything() {
  const cells = [
    { tag: 'Subcontractors', title: 'Track every dollar to every sub.',
      body: 'Contact book by trade. Searchable assignment dropdown. Amount agreed vs. paid vs. outstanding for every sub on every job.',
      visual: 'subs' },
    { tag: 'Job Costing', title: 'Know your margin before the truck leaves.',
      body: 'Revenue, materials, labor, subs, profit, %-margin — per job, broken down line by line. The number GCs have never seen this clearly.',
      visual: 'cost' },
    { tag: 'Daily Report', title: 'See yesterday without being there.',
      body: 'Hours worked, photos taken, jobs created, SMS sent, missed calls, leads. End-of-day snapshot for owners off the truck.',
      visual: 'daily' },
    { tag: 'Calendar', title: 'Appointments that confirm themselves.',
      body: 'Monthly grid. Schedule from any quote or job. Customer gets an SMS confirmation 24 hrs before. Nothing double-booked, nothing forgotten.',
      visual: 'cal' },
    { tag: 'Reviews', title: 'Google reviews on autopilot.',
      body: '24 hrs after a job closes, the customer gets a polite text with the review link. Free local-SEO juice while you sleep.',
      visual: 'rev' },
    { tag: 'Bulk SMS', title: 'Tell 500 customers at once.',
      body: 'Seasonal promos, holiday closures, "we\'re booking up." Compose, preview, send. Especially powerful before HVAC season.',
      visual: 'bulk' },
    { tag: 'Analytics', title: 'Your numbers, without a spreadsheet.',
      body: 'Messages per day, revenue per month, busiest weekdays, top customers, response rate. The chart pack you never had time to build.',
      visual: 'chart' },
    { tag: 'Team & Permissions', title: "Office sees money. Field doesn't.",
      body: 'Owner, admin, staff, developer roles. Hide financials from the field. Lock delete, restrict bulk SMS, restrict settings — all toggles.',
      visual: 'team' },
    { tag: 'Always-on automation', title: 'Eight things running 24/7.',
      body: "Review requests. Invoice reminders. Appointment confirmations. Referral source asks. Weekly digest. Cleanup jobs. You don't see them. They're working.",
      visual: 'auto' },
  ];

  return (
    <section data-screen-label="04 Everything else" style={{ background: C.paper2, padding: '120px 56px 100px', borderTop: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHead
        folio="№ 04"
        eyebrow="Everything else"
        title={<>And the <span style={{ fontStyle: 'italic', color: C.a }}>nine other things</span> a real shop needs.</>}
        kicker={`The pitch is "AI front desk." The reality is a complete operating system — subs, costing, calendar, reviews, permissions, the works. All in one login.`}
      />

      <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${C.b}`, borderLeft: `1px solid ${C.b}` }}>
        {cells.map((c, i) => (
          <article key={c.tag} style={{ borderRight: `1px solid ${C.b}`, borderBottom: `1px solid ${C.b}`, padding: '32px 28px 28px', background: C.paper, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 280 }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.a, letterSpacing: '0.12em', fontWeight: 600 }}>№ {String(i + 1).padStart(2, '0')} · {c.tag.toUpperCase()}</div>
            <h3 style={{ fontFamily: fonts.serif, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 400, margin: 0 }}>{c.title}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: C.m, margin: 0 }}>{c.body}</p>
            <div style={{ marginTop: 'auto', paddingTop: 8 }}>
              <EverythingVisual kind={c.visual} />
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function EverythingVisual({ kind }) {
  const box = { background: C.bg, border: `1px solid ${C.b}`, borderRadius: 6, padding: '10px 12px', height: 74, fontFamily: fonts.mono, fontSize: 9.5, color: C.m, letterSpacing: '0.04em', overflow: 'hidden' };

  if (kind === 'subs') return (
    <div style={box}>
      {[['Tony Volt · Electrical', '$1,200 / $800', true], ['Apex Roof', '$3,400 / $3,400', false], ['ProDuct HVAC', '$2,100 / $0', true]].map(([n, a, due]) => (
        <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
          <span style={{ color: C.ink }}>{n}</span><span style={{ color: due ? C.a : '#2f6b3a' }}>{a}</span>
        </div>
      ))}
    </div>
  );
  if (kind === 'cost') return (
    <div style={{ ...box, padding: '10px 12px', display: 'flex', alignItems: 'flex-end', gap: 6, height: 74 }}>
      {[['Rev', 58, C.ink], ['Mat', 26, C.m], ['Lab', 22, C.m], ['Sub', 8, C.m], ['Profit', 32, C.a]].map(([l, h, c]) => (
        <div key={l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{ width: '100%', height: h, background: c, borderRadius: '2px 2px 0 0' }} />
          <span style={{ fontSize: 8.5 }}>{l}</span>
        </div>
      ))}
    </div>
  );
  if (kind === 'daily') return (
    <div style={{ ...box, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px' }}>
      {[['Hrs', '24.5'], ['Photos', '38'], ['Jobs', '7'], ['SMS', '142']].map(([l, v]) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{l}</span><span style={{ color: C.ink, fontWeight: 600 }}>{v}</span>
        </div>
      ))}
    </div>
  );
  if (kind === 'cal') return (
    <div style={{ ...box, display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, padding: '8px 12px' }}>
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: [2, 5, 9, 11].includes(i) ? C.aDim : 'transparent', border: `0.5px solid ${C.b}`, borderRadius: 2, fontSize: 8.5, color: [2, 5, 9, 11].includes(i) ? C.a : C.m }}>{i + 15}</div>
      ))}
    </div>
  );
  if (kind === 'rev') return (
    <div style={box}>
      <div style={{ color: C.ink, marginBottom: 4 }}>To: Janet S. · 24h after JOB-0042</div>
      <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 11, color: C.ink, lineHeight: 1.4 }}>"Hi Janet — would you mind leaving us a quick Google review? Link below..."</div>
    </div>
  );
  if (kind === 'bulk') return (
    <div style={box}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}><span>RECIPIENTS</span><span style={{ color: C.ink }}>342</span></div>
      <div style={{ height: 5, background: C.b, borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}><div style={{ width: '68%', height: '100%', background: C.a }} /></div>
      <div style={{ color: C.ink, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 11 }}>"Furnace tune-up special: $89 thru Sunday."</div>
    </div>
  );
  if (kind === 'chart') return (
    <div style={{ ...box, display: 'flex', alignItems: 'flex-end', gap: 3, padding: '10px 12px' }}>
      {[18, 32, 24, 40, 36, 52, 44, 38, 46, 30, 42, 48].map((h, i) => (
        <div key={i} style={{ flex: 1, height: h, background: i === 5 || i === 11 ? C.a : C.bDark, borderRadius: '1.5px 1.5px 0 0' }} />
      ))}
    </div>
  );
  if (kind === 'team') return (
    <div style={box}>
      {[['Owner', 'full access', C.a], ['Admin', 'no billing', C.ink], ['Staff', 'no $$, no delete', C.m]].map(([r, p, col]) => (
        <div key={r} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
          <span style={{ color: col, fontWeight: 600 }}>{r}</span><span>{p}</span>
        </div>
      ))}
    </div>
  );
  if (kind === 'auto') return (
    <div style={{ ...box, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, alignContent: 'center' }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.a, animation: `rmPulse 1.6s ease-in-out ${i * 0.15}s infinite` }} />
          <span>job-{i + 1}</span>
        </div>
      ))}
    </div>
  );
  return null;
}
