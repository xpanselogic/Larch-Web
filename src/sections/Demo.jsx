// Field — Expanded live demo. A SMS thread with the agent, with status side-rail.
import React from 'react';
import { C, fonts, SectionHead } from '../design/tokens.jsx';

export default function Demo() {
  const [step, setStep] = React.useState(0);

  const script = [
    { f: 'c', t: "Hi, my furnace is making a clunking noise. Can someone come look?", time: '10:42 PM' },
    { f: 'a', t: "Hi — sorry to hear that. Sounds like a blower or motor issue. I have Tony available tomorrow at 9am or Mike at 1pm. Diagnostic is $89, applied to any repair.", time: '10:42 PM', meta: 'Replied in 0.6s' },
    { f: 'c', t: "9am works. We're at 4214 Birch.", time: '10:43 PM' },
    { f: 'a', t: "Booked Tony for 9am Tuesday at 4214 Birch. He'll text 20 min before arrival. Heads up — temps dropping to 28° tonight. If it stops heating entirely, reply URGENT.", time: '10:43 PM', meta: 'Job created · QT-2289 drafted · Calendar held' },
    { f: 'c', t: "Thank you. Honestly didn't expect a real reply at 11pm.", time: '10:44 PM' },
    { f: 'a', t: "Anytime. We're around. — Sterling Plumbing & HVAC", time: '10:44 PM', meta: 'Conversation closed · No human escalation needed' },
  ];

  React.useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % (script.length + 2)), 2400);
    return () => clearInterval(id);
  }, []);

  const visible = script.slice(0, Math.min(step, script.length));

  return (
    <section data-screen-label="05 Live demo" style={{ background: C.paper2, padding: '120px 56px 100px', borderTop: `1px solid ${C.b}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHead
        folio="№ 05"
        eyebrow="A real conversation"
        title={<>Watch it work, <span style={{ fontStyle: 'italic', color: C.a }}>at 10:42 PM.</span></>}
        kicker="A customer with a busted furnace. A shop owner asleep. The agent does what a good front-desk would do — politely, accurately, and without waking anyone up."
      />

      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'start' }}>
        <div style={{ background: C.paper, border: `1px solid ${C.bDark}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 30px 60px rgba(26,29,46,0.10)' }}>
          <div style={{ padding: '16px 22px', background: C.bg, borderBottom: `1px solid ${C.b}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Sterling Plumbing & HVAC</div>
              <div style={{ fontSize: 11, color: C.m, fontFamily: fonts.serif, fontStyle: 'italic' }}>SMS · (415) 555-0142</div>
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.a, letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.a, animation: 'rmPulse 1.4s infinite' }} /> AGENT ACTIVE
            </div>
          </div>
          <div style={{ padding: '24px 22px', minHeight: 520, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {visible.map((m, i) => (
              <div key={i} style={{ alignSelf: m.f === 'c' ? 'flex-start' : 'flex-end', maxWidth: '78%', animation: 'rmFadeIn 0.4s ease-out' }}>
                {m.f === 'a' && <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.a, marginBottom: 4, paddingLeft: 4, letterSpacing: '0.08em' }}>RENDERMENT · {m.meta?.split(' · ')[0] || 'AUTO'}</div>}
                <div style={{ background: m.f === 'c' ? C.bg : C.ink, color: m.f === 'c' ? C.ink : C.bg, padding: '11px 15px', borderRadius: m.f === 'c' ? '16px 16px 16px 4px' : '16px 16px 4px 16px', fontSize: 13.5, lineHeight: 1.45, border: m.f === 'c' ? `1px solid ${C.b}` : 'none' }}>{m.t}</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.m, marginTop: 4, paddingLeft: m.f === 'c' ? 6 : 0, paddingRight: m.f === 'a' ? 6 : 0, textAlign: m.f === 'c' ? 'left' : 'right', letterSpacing: '0.06em' }}>
                  {m.time}{m.meta && m.f === 'a' ? ` · ${m.meta.split(' · ').slice(1).join(' · ') || ''}` : ''}
                </div>
              </div>
            ))}
            {step < script.length && step > 0 && script[step].f === 'a' && (
              <div style={{ alignSelf: 'flex-end', display: 'flex', gap: 4, padding: '10px 14px', background: C.ink, borderRadius: '16px 16px 4px 16px' }}>
                {[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: C.bg, animation: `rmPulse 1.2s ease-in-out ${i * 0.15}s infinite` }} />)}
              </div>
            )}
          </div>
        </div>

        <div style={{ paddingTop: 8 }}>
          <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.m, letterSpacing: '0.1em', marginBottom: 18 }}>BEHIND THE SCENES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              ['Read the message', 'HVAC · noise complaint · likely blower'],
              ['Pulled history', 'Janet · customer since 2022 · 4 prior jobs'],
              ['Checked the calendar', 'Tony free at 9am, Mike at 1pm'],
              ['Quoted from your price book', 'Diag $89 · applied to repair'],
              ['Held a slot, then booked', 'Tentative until "yes please"'],
              ['Created the job', 'JOB-0042 drafted · QuickBooks synced'],
              ['Flagged a risk', "Tonight's low: 28°. Escalation rule set."],
              ['Asked you to grade it', 'Thumbs up/down on every reply →'],
            ].map(([h, b], i) => {
              const on = i < Math.min(step, 8);
              return (
                <div key={i} style={{ display: 'flex', gap: 14, opacity: on ? 1 : 0.3, transition: 'opacity 0.4s' }}>
                  <div style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', border: `1.5px solid ${on ? C.a : C.b}`, background: on ? C.a : 'transparent', color: on ? '#fff' : C.m, fontFamily: fonts.mono, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{on ? '✓' : i + 1}</div>
                  <div>
                    <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 15, marginBottom: 3 }}>{h}</div>
                    <div style={{ fontSize: 11.5, color: C.m, fontFamily: fonts.mono, letterSpacing: '0.02em' }}>{b}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 24, padding: 14, background: C.paper, border: `1px solid ${C.b}`, borderLeft: `2px solid ${C.a}`, borderRadius: 6 }}>
            <div style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 14, color: C.ink, lineHeight: 1.5 }}>The shop owner saw this on the morning summary, gave the AI a 👍 on its reply, and it learned a little more about how Sterling talks.</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
