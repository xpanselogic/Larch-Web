// Field — Pricing. Single all-in-one tier @ $149/mo.
// Live Stripe state (per audit 2026-05-02): one product, one monthly price.
// Annual billing + per-seat add-ons are deferred to v1.1 — keep this section
// honest with what Stripe can actually charge until those SKUs exist.
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';

export default function Pricing() {
  const features = [
    ['AI front desk',           'Texts & calls answered 24/7. Missed-call auto-replies. Knows your hours, prices, service area.'],
    ['Jobs · Quotes · Invoices', 'The full pipeline. Quote accepts → job created → invoice fires on completion.'],
    ['Job costing',              'Revenue, materials, labor, subs, profit, margin — per job, line by line.'],
    ['Subcontractors',           'Contact book, assignments, amount agreed vs. paid vs. outstanding.'],
    ['Calendar',                 'Monthly grid. Auto-SMS confirmations 24 hrs before. Nothing double-booked.'],
    ['Reviews & reminders',      'Eight always-on automations: review requests, invoice nags, appointment confirms.'],
    ['Team & roles',             'Multi-user · 4-role permissions · hide financials from the field.'],
    ['QuickBooks sync',          'Two-way. Invoices, customers, payments — never typed twice.'],
  ];

  return (
    <section data-screen-label="06 Pricing" style={{ background: C.bg, padding: '120px 56px 100px', borderTop: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHead
        folio="№ 06"
        eyebrow="Pricing"
        title={<>Priced like a <span style={{ fontStyle: 'italic', color: C.a }}>good apprentice.</span></>}
        kicker="Cheaper than the office manager you don't have. More reliable than the answering service that's failing you. One price, everything included, cancel any month."
      />

      {/* Single hero pricing card */}
      <div style={{ marginTop: 64, maxWidth: 760, margin: '64px auto 0', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: C.a, color: '#fff', padding: '6px 16px', borderRadius: 999,
          fontFamily: fonts.mono, fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, zIndex: 2,
        }}>★ EVERYTHING · ONE PRICE</div>

        <div style={{
          background: C.paper, border: `1px solid ${C.bDark}`, borderRadius: 14,
          padding: '48px 48px 40px', boxShadow: '0 30px 60px rgba(26,29,46,0.10)',
          display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 40,
        }}>
          {/* Left column — price + CTA */}
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.12em', marginBottom: 12 }}>RENDERMENT · ALL-IN-ONE</div>
            <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 36, marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              The whole shop,<br />in one login.
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: fonts.serif, fontSize: 80, letterSpacing: '-0.04em', lineHeight: 1, color: C.ink }}>$149</span>
              <span style={{ fontFamily: fonts.serif, fontSize: 18, color: C.m, fontStyle: 'italic' }}>/ mo</span>
            </div>
            <div style={{ fontSize: 13, color: C.m, fontStyle: 'italic', fontFamily: fonts.serif, marginBottom: 28 }}>
              billed monthly · cancel anytime
            </div>

            <button style={{
              width: '100%', background: C.a, color: '#fff', border: 'none',
              padding: '15px 22px', borderRadius: 8, fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: fonts.body, display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12,
            }}>
              Start your 14-day trial
              <span style={{ fontFamily: fonts.serif, fontStyle: 'italic' }}>↗</span>
            </button>
            <div style={{ fontSize: 12, color: C.m, fontFamily: fonts.serif, fontStyle: 'italic', textAlign: 'center' }}>
              No credit card required.
            </div>
          </div>

          {/* Vertical rule */}
          <div style={{ background: C.b, width: 1 }} />

          {/* Right column — features list */}
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.12em', marginBottom: 18 }}>WHAT'S INCLUDED</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {features.map(([h, b]) => (
                <div key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, color: C.a, fontFamily: fonts.mono, fontSize: 12, marginTop: 2, fontWeight: 600 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 16, color: C.ink, marginBottom: 2, letterSpacing: '-0.01em' }}>{h}</div>
                    <div style={{ fontSize: 12.5, color: C.m, lineHeight: 1.45 }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60, textAlign: 'center', fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 16, color: C.m, maxWidth: 720, margin: '60px auto 0' }}>
        Every account includes free setup, your number forwarding, QuickBooks sync,
        and a real human you can call when something's off.
      </div>
      </div>
    </section>
  );
}
