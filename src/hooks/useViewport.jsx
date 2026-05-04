// Tiny viewport hook for inline-style components. Returns booleans you can use
// to swap style values. Threshold matches Tailwind's `md:` (768px) so we have
// one mental model: mobile = anything narrower than a tablet.
import React from 'react';

const MOBILE_MAX = 767;

function readIsMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= MOBILE_MAX;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(readIsMobile);

  React.useEffect(() => {
    const onResize = () => setIsMobile(readIsMobile());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile;
}
