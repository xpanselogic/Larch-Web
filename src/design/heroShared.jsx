// Trade data, hooks, and the striped placeholder helper.
// Used by hero variants and (potentially) other sections that need
// per-trade copy or live-feeling animations.
import React from 'react';

export const TRADES = [
  {
    id: 'plumbing', name: 'Plumbing', verb: 'plumbers',
    job: 'Smith Residence · Water heater swap',
    phases: ['Drain old tank', 'Set new tank', 'Connect supply', 'Test & cleanup'],
    sms: [
      { from: 'cust', text: "Hey, water heater stopped working last night. Any chance you can come today?" },
      { from: 'ai', text: "Hi Janet — sorry to hear that. I have a 2pm slot today with Mike. Diagnostic is $89, applied to repair. Want me to book it?" },
      { from: 'cust', text: "Yes please." },
      { from: 'ai', text: "Booked. You'll get a text when Mike's 20 min out." },
    ],
    invoice: { num: 'INV-1042', label: 'Davis · Repipe', amount: '$3,840' },
  },
  {
    id: 'electrical', name: 'Electrical', verb: 'electricians',
    job: 'Patel Residence · Panel upgrade',
    phases: ['Permit pull', 'Disconnect old panel', 'Install 200A', 'Inspection'],
    sms: [
      { from: 'cust', text: "Power flickering in the kitchen again. Same as last month." },
      { from: 'ai', text: "Tony — I see your June ticket. Pulling that history for the tech. Earliest is tomorrow 9am, want it?" },
      { from: 'cust', text: "Works." },
      { from: 'ai', text: "Confirmed. I'll text you when he's en route." },
    ],
    invoice: { num: 'INV-1038', label: 'Chen · Service call', amount: '$420' },
  },
  {
    id: 'hvac', name: 'HVAC', verb: 'HVAC techs',
    job: 'Garcia Residence · 3-ton condenser',
    phases: ['Pump down', 'Set new unit', 'Vacuum & charge', 'Startup test'],
    sms: [
      { from: 'cust', text: "AC is blowing warm. 90° in here." },
      { from: 'ai', text: "Pulling up your install — that's the 2023 Carrier, still under labor warranty. Sliding you into a same-day slot at 3:15." },
      { from: 'cust', text: "Thank you" },
      { from: 'ai', text: "On it. Driver will call 15 min out." },
    ],
    invoice: { num: 'INV-1051', label: 'Lopez · Maintenance', amount: '$185' },
  },
  {
    id: 'roofing', name: 'Roofing', verb: 'roofers',
    job: 'Nguyen Residence · Re-roof',
    phases: ['Tear-off', 'Underlayment', 'Shingle install', 'Final cleanup'],
    sms: [
      { from: 'cust', text: "Storm last night. There's a leak over the kid's bedroom." },
      { from: 'ai', text: "Sending Dave for an emergency tarp this afternoon — $0 if you go ahead with the repair. Cool?" },
      { from: 'cust', text: "Please" },
      { from: 'ai', text: "Booked for 2pm. Photos will land in your inbox after." },
    ],
    invoice: { num: 'INV-1029', label: 'Walker · Repair', amount: '$1,260' },
  },
  {
    id: 'landscape', name: 'Landscaping', verb: 'landscapers',
    job: 'Brooks Residence · Yard reset',
    phases: ['Clear & grade', 'Edge & bed', 'Sod & mulch', 'Walk-through'],
    sms: [
      { from: 'cust', text: "Can we add the firepit to the quote?" },
      { from: 'ai', text: "Yes — $1,400 for the 48\" steel ring with paver surround. I'll send the updated quote in 30s." },
      { from: 'cust', text: "Perfect." },
      { from: 'ai', text: "Sent. Tap to approve and we lock the install date." },
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
