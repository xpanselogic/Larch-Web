// Features — toggle between four product surfaces
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';
import FeatureMock from './FeatureMock.jsx';

export default function Features() {
  const [active, setActive] = React.useState('jobs');

  const tabs = [
    { id: 'jobs',     label: 'Jobs',      blurb: 'Every job, every cost, every margin — in one place.',  tag: '01' },
    { id: 'quotes',   label: 'Quotes',    blurb: 'Three clicks from quote to job to invoice.',           tag: '02' },
    { id: 'invoices', label: 'Invoices',  blurb: 'Auto-generated when the job ends. Reminders that run themselves.', tag: '03' },
    { id: 'inbox',    label: 'Messages',  blurb: 'AI answers. You thumb up or down. It learns your voice.', tag: '04' },
  ];

  const notes = {
    jobs: [
      ['Five tabs, one job', 'Details, documents, photos, labor, costing — every fact about a job in one place.'],
      ['Profit at a glance', 'Revenue minus materials minus labor minus subs. Know your margin before the truck leaves.'],
      ['Sub-jobs & phases', 'Big remodels broken into phases with their own progress, and child jobs for each trade.'],
    ],
    quotes: [
      ['Quote → Job → Invoice', "Customer accepts → job is created → invoice fires the moment it's marked complete."],
      ['Line items that survive edits', 'Add, remove, repackage. The math always reconciles.'],
      ['Send by SMS, sign by tap', 'No PDFs. No DocuSign. Customer taps the link, signs, you get the alert.'],
    ],
    invoices: [
      ['Auto-generated at "complete"', "The job ends; the invoice is already in the customer's phone."],
      ['Reminders that nag themselves', 'Day 7 polite ping. You never have to send the awkward "still owed" text.'],
      ['Synced both ways', 'Mark invoice paid → job updates. Close the job → invoice fires. Always in lockstep.'],
    ],
    inbox: [
      ['Replies in seconds, 24/7', 'Missed call? Auto-text. Late-night SMS? Answered. Knows your hours, prices, service area.'],
      ['Thumbs up or down', "Rate every AI message. It learns your tone, your phrases, your shop's voice over time."],
      ['Hands off when it should', 'New leads, urgent jobs, anything off-script — flagged to your Handoff queue. You close the deal.'],
    ],
  };

  return (
    <section data-screen-label="03 What it does" style={{ background: C.bg, padding: '120px 56px 100px', borderTop: `1px solid ${C.b}` }}>
      <SectionHead
        folio="№ 03"
        eyebrow="What it does"
        title={<>Four surfaces. <span style={{ fontStyle: 'italic', color: C.a }}>One brain.</span></>}
        kicker="The same agent that books the call writes the quote, schedules the truck, and sends the invoice. Stop bouncing between five apps that don't talk to each other."
      />

      <div style={{ marginTop: 64, display: 'flex', borderTop: `1px solid ${C.b}`, borderBottom: `1px solid ${C.b}`, marginBottom: 40 }}>
        {tabs.map((t, i) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                flex: 1, padding: '24px 26px',
                background: on ? C.ink : 'transparent',
                color: on ? C.bg : C.ink,
                border: 'none',
                borderRight: i < tabs.length - 1 ? `1px solid ${on ? C.ink : C.b}` : 'none',
                cursor: 'pointer', textAlign: 'left',
                transition: 'background 0.18s, color 0.18s',
                fontFamily: fonts.body,
              }}
            >
              <div style={{ fontFamily: fonts.mono, fontSize: 10, color: on ? C.a : C.m, letterSpacing: '0.1em', marginBottom: 10 }}>{t.tag}</div>
              <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 24, marginBottom: 5, letterSpacing: '-0.01em' }}>{t.label}</div>
              <div style={{ fontSize: 13, color: on ? 'rgba(245,241,232,0.7)' : C.m, lineHeight: 1.4 }}>{t.blurb}</div>
            </button>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40, alignItems: 'start' }}>
        <div style={{ minHeight: 520 }}>
          <FeatureMock id={active} />
        </div>
        <div style={{ paddingTop: 8 }}>
          <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.1em', marginBottom: 18 }}>WHAT YOU GET</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {notes[active].map(([h, b], i) => (
              <div key={i} style={{ borderLeft: `2px solid ${C.a}`, paddingLeft: 14 }}>
                <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 18, marginBottom: 6, letterSpacing: '-0.01em' }}>{h}</div>
                <div style={{ fontSize: 13, color: C.m, lineHeight: 1.55 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
