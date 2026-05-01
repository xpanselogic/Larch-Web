// Field — Pricing. Three tiers w/ shop-size toggle.
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';

export default function Pricing() {
  const [size, setSize] = React.useState('mid');

  const sizes = {
    solo: { label: 'Solo / 1 truck', mult: 1, blurb: 'Owner-operator. You are the dispatcher.' },
    mid:  { label: 'Small shop / 2-5 trucks', mult: 1, blurb: 'A few crews. One frazzled office manager.' },
    crew: { label: 'Crew / 6-12 trucks', mult: 1, blurb: 'Multiple dispatchers. Real overhead.' },
  };

  const tiersBySize = {
    solo: [
      { n: 'Front Desk', p: '$249', sub: '/mo', tag: 'Just the inbox',   feat: ['Texts & calls answered 24/7', 'Booking & rescheduling', 'Synced to Google Calendar', 'Daily summary email'], cta: 'Start' },
      { n: 'Whole Shop', p: '$489', sub: '/mo', tag: 'Most popular', popular: true, feat: ['Everything in Front Desk', 'Voice-to-quote', 'Invoices & pay-by-text', 'Job board for the truck', 'QuickBooks sync'], cta: 'Start 14-day trial' },
      { n: 'Crew',       p: '$',    sub: 'Talk to us', tag: 'Multi-crew', feat: ['Everything in Whole Shop', 'Multi-tech dispatch', 'Custom pricing rules', 'API & integrations', 'Dedicated onboarding'], cta: 'Book a call' },
    ],
    mid: [
      { n: 'Front Desk', p: '$489', sub: '/mo', tag: 'Just the inbox',   feat: ['Texts & calls answered 24/7', 'Booking & rescheduling', 'Synced to Google Calendar', 'Daily summary email'], cta: 'Start' },
      { n: 'Whole Shop', p: '$890', sub: '/mo', tag: 'Most popular', popular: true, feat: ['Everything in Front Desk', 'Voice-to-quote', 'Invoices & pay-by-text', 'Job board for the truck', 'QuickBooks sync'], cta: 'Start 14-day trial' },
      { n: 'Crew',       p: '$',    sub: 'Talk to us', tag: 'Multi-crew', feat: ['Everything in Whole Shop', 'Multi-tech dispatch', 'Custom pricing rules', 'API & integrations', 'Dedicated onboarding'], cta: 'Book a call' },
    ],
    crew: [
      { n: 'Front Desk', p: '$890',   sub: '/mo', tag: 'Just the inbox',   feat: ['Texts & calls answered 24/7', 'Booking & rescheduling', 'Synced to Google Calendar', 'Daily summary email'], cta: 'Start' },
      { n: 'Whole Shop', p: '$1,640', sub: '/mo', tag: 'Most popular', popular: true, feat: ['Everything in Front Desk', 'Voice-to-quote', 'Invoices & pay-by-text', 'Job board for the truck', 'QuickBooks sync'], cta: 'Start 14-day trial' },
      { n: 'Crew',       p: '$',      sub: 'Talk to us', tag: 'Multi-crew', feat: ['Everything in Whole Shop', 'Multi-tech dispatch', 'Custom pricing rules', 'API & integrations', 'Dedicated onboarding'], cta: 'Book a call' },
    ],
  };

  const tiers = tiersBySize[size];

  return (
    <section data-screen-label="06 Pricing" style={{ background: C.bg, padding: '120px 56px 100px', borderTop: `1px solid ${C.b}` }}>
      <SectionHead
        folio="№ 06"
        eyebrow="Pricing"
        title={<>Priced like a <span style={{ fontStyle: 'italic', color: C.a }}>good apprentice.</span></>}
        kicker="Cheaper than the office manager you don't have. More reliable than the answering service that's failing you. Cancel any month."
      />

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'inline-flex', background: C.paper, border: `1px solid ${C.b}`, borderRadius: 8, padding: 4, gap: 2 }}>
          {Object.entries(sizes).map(([k, v]) => (
            <button key={k} onClick={() => setSize(k)} style={{
              padding: '10px 18px', background: size === k ? C.ink : 'transparent', color: size === k ? C.bg : C.ink,
              border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13, fontWeight: size === k ? 600 : 400,
              fontFamily: fonts.body, transition: 'all 0.18s'
            }}>{v.label}</button>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 14, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 14, color: C.m }}>{sizes[size].blurb}</div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 1140, margin: '56px auto 0' }}>
        {tiers.map((t) => (
          <div key={t.n} style={{
            position: 'relative',
            background: t.popular ? C.ink : C.paper,
            color: t.popular ? C.bg : C.ink,
            border: `1px solid ${t.popular ? C.ink : C.bDark}`,
            borderRadius: 12,
            padding: '34px 30px 30px',
            boxShadow: t.popular ? '0 30px 60px rgba(26,29,46,0.18)' : 'none',
            transform: t.popular ? 'translateY(-12px)' : 'none',
          }}>
            {t.popular && (
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: C.a, color: '#fff', padding: '5px 14px', borderRadius: 999, fontFamily: fonts.mono, fontSize: 9.5, letterSpacing: '0.1em', fontWeight: 600 }}>★ MOST SHOPS</div>
            )}
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: t.popular ? C.a : C.m, letterSpacing: '0.1em', marginBottom: 14 }}>{t.tag.toUpperCase()}</div>
            <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 30, marginBottom: 14, letterSpacing: '-0.02em' }}>{t.n}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
              <span style={{ fontFamily: fonts.serif, fontSize: 54, letterSpacing: '-0.04em', lineHeight: 1 }}>{t.p}</span>
              <span style={{ fontSize: 14, color: t.popular ? 'rgba(245,241,232,0.55)' : C.m }}>{t.sub}</span>
            </div>
            <div style={{ fontSize: 12, color: t.popular ? 'rgba(245,241,232,0.55)' : C.m, marginBottom: 24, fontStyle: 'italic', fontFamily: fonts.serif }}>billed monthly · cancel anytime</div>

            <div style={{ height: 1, background: t.popular ? 'rgba(245,241,232,0.15)' : C.b, margin: '0 0 20px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
              {t.feat.map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 13.5, lineHeight: 1.45 }}>
                  <span style={{ color: C.a, flexShrink: 0, fontFamily: fonts.mono }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button style={{
              width: '100%',
              background: t.popular ? C.a : 'transparent',
              color: t.popular ? '#fff' : C.ink,
              border: t.popular ? 'none' : `1px solid ${C.bDark}`,
              padding: '13px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              cursor: 'pointer', fontFamily: fonts.body
            }}>{t.cta} →</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 60, textAlign: 'center', fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 16, color: C.m }}>
        Every plan includes free setup, your number forwarding, and a real human you can call when something's off.
      </div>
    </section>
  );
}
