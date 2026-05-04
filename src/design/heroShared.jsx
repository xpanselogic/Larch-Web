// Trade data, hooks, and the striped placeholder helper.
// Used by hero variants and (potentially) other sections that need
// per-trade copy or live-feeling animations.
import React from 'react';

export const TRADES = [
  {
    id: 'plumbing', name: 'Plumbing', verb: 'plumbers', rather: 'in the truck',
    job: 'Smith Residence · Water heater swap',
    phases: ['Drain old tank', 'Set new tank', 'Connect supply', 'Test & cleanup'],
    sms: [
      { from: 'cust', text: "Hey, water heater stopped working last night. Any chance you can come today?" },
      { from: 'ai', text: "Hi Janet — sorry to hear that. Mike's running the truck today; he'll text you with a window once he's clear of his morning job." },
      { from: 'cust', text: "Sounds good, thanks." },
      { from: 'ai', text: "Got it — passing your number to Mike now. He'll text 20 min before he heads out." },
    ],
    invoice: { num: 'INV-1042', label: 'Davis · Repipe', amount: '$3,840' },
  },
  {
    id: 'electrical', name: 'Electrical', verb: 'electricians', rather: 'on the job',
    job: 'Patel Residence · Panel upgrade',
    phases: ['Permit pull', 'Disconnect old panel', 'Install 200A', 'Inspection'],
    sms: [
      { from: 'cust', text: "Power flickering in the kitchen again. Same as last month." },
      { from: 'ai', text: "Tony — got it. I'll flag this for the tech to look at first thing tomorrow; he'll text you a window." },
      { from: 'cust', text: "Works." },
      { from: 'ai', text: "Will do. He'll text when he's en route." },
    ],
    invoice: { num: 'INV-1038', label: 'Chen · Service call', amount: '$420' },
  },
  {
    id: 'hvac', name: 'HVAC', verb: 'HVAC techs', rather: 'on the rooftop',
    job: 'Garcia Residence · 3-ton condenser',
    phases: ['Pump down', 'Set new unit', 'Vacuum & charge', 'Startup test'],
    sms: [
      { from: 'cust', text: "AC is blowing warm. 90° in here." },
      { from: 'ai', text: "That's no good in this heat. I'll have our tech text you a same-day window. If it gets unbearable, reply URGENT and we'll bump you up." },
      { from: 'cust', text: "Thank you" },
      { from: 'ai', text: "On it. The driver will call 15 min out." },
    ],
    invoice: { num: 'INV-1051', label: 'Lopez · Maintenance', amount: '$185' },
  },
  {
    id: 'roofing', name: 'Roofing', verb: 'roofers', rather: 'on the roof',
    job: 'Nguyen Residence · Re-roof',
    phases: ['Tear-off', 'Underlayment', 'Shingle install', 'Final cleanup'],
    sms: [
      { from: 'cust', text: "Storm last night. There's a leak over the kid's bedroom." },
      { from: 'ai', text: "Sorry — that storm was rough. Flagging this for Dave, he handles emergency tarps. He'll text when he's en route. Reply URGENT if it's actively leaking." },
      { from: 'cust', text: "Please" },
      { from: 'ai', text: "On it. Photos will land in your inbox once he's done." },
    ],
    invoice: { num: 'INV-1029', label: 'Walker · Repair', amount: '$1,260' },
  },
  {
    id: 'landscape', name: 'Landscaping', verb: 'landscapers', rather: 'in the dirt',
    job: 'Brooks Residence · Yard reset',
    phases: ['Clear & grade', 'Edge & bed', 'Sod & mulch', 'Walk-through'],
    sms: [
      { from: 'cust', text: "Can we add the firepit to the quote?" },
      { from: 'ai', text: "Good thought — let me get an updated quote out to you. The crew lead will text you the new number once we've sized the ring." },
      { from: 'cust', text: "Perfect." },
      { from: 'ai', text: "Will do. You'll get the updated quote by SMS — tap to approve and we'll lock the install date." },
    ],
    invoice: { num: 'INV-1014', label: 'Kim · Spring cleanup', amount: '$680' },
  },
];

// ─────────────── Hooks ───────────────
export function useTick(intervalMs = 1000) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return tick;
}

// Cycle through SMS messages, revealing them one at a time, then loop.
export function useSmsReveal(messages, perMs = 1800) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(0);
    let n = 0;
    const id = setInterval(() => {
      n = (n + 1);
      if (n > messages.length) { n = 0; }
      setCount(n);
    }, perMs);
    return () => clearInterval(id);
  }, [messages, perMs]);
  return Math.min(count, messages.length);
}

// Phase progression — one phase advances every ~stepMs, looping
export function usePhaseProgress(phases, stepMs = 2400) {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    setActive(1);
    let n = 1;
    const id = setInterval(() => {
      n = n + 1;
      if (n > phases.length + 1) { n = 1; }
      setActive(n);
    }, stepMs);
    return () => clearInterval(id);
  }, [phases, stepMs]);
  return active;
}

// Live clock used for status bar
export function useClock() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return t;
}

// ─────────────── SVG Pattern: subtle stripe placeholder ───────────────
export function StripedPlaceholder({ label = 'photo', color = '#222', bg = '#e8e6e0', borderColor, style }) {
  const id = React.useId().replace(/:/g, '');
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: bg, overflow: 'hidden',
      border: borderColor ? `1px dashed ${borderColor}` : 'none',
      ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
        <defs>
          <pattern id={`stripes-${id}`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripes-${id})`} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Geist Mono, JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em',
        textTransform: 'uppercase', color, opacity: 0.6,
      }}>{label}</div>
    </div>
  );
}
