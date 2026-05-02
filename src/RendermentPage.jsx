import React from 'react';
import HeroField from './sections/HeroField.jsx';
import BuiltFor from './sections/BuiltFor.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import Everything from './sections/Everything.jsx';
import Demo from './sections/Demo.jsx';
import Pricing from './sections/Pricing.jsx';
import CTA from './sections/CTA.jsx';

export default function RendermentPage() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <div className="rm-hero-wrap" data-screen-label="01 Hero">
        <HeroField />
      </div>
      <BuiltFor />
      <HowItWorks />
      <Features />
      <Everything />
      <Demo />
      <Pricing />
      <CTA />
    </div>
  );
}
