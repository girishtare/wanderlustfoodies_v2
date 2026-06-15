import React from 'react';

/**
 * Wanderlust Foodies — StampSeal
 * The brand's signature device: a vintage circular rubber-stamp with
 * arced top & bottom text around a center mark. Pure type + rings (no
 * illustration). Echoes the "GLOBAL ADVENTURES · LOCAL FLAVOURS" badge.
 */
export function StampSeal({
  topText = 'GLOBAL ADVENTURES',
  bottomText = 'LOCAL FLAVOURS',
  center = 'WF',
  sub = 'EST · 2025',
  size = 200,
  color = 'var(--espresso-700)',
  background = 'transparent',
  style,
  ...rest
}) {
  const uid = React.useId().replace(/:/g, '');
  const r = 86; // text path radius within 0..200 viewBox
  return (
    <div style={{ width: size, height: size, ...style }} {...rest}>
      <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={`${topText} ${center} ${bottomText}`}>
        <defs>
          <path id={`top-${uid}`} d={`M ${100 - r},100 A ${r},${r} 0 0 1 ${100 + r},100`} />
          <path id={`bot-${uid}`} d={`M ${100 - r},100 A ${r},${r} 0 0 0 ${100 + r},100`} />
        </defs>
        {background !== 'transparent' && <circle cx="100" cy="100" r="98" fill={background} />}
        <circle cx="100" cy="100" r="96" fill="none" stroke={color} strokeWidth="3" />
        <circle cx="100" cy="100" r="78" fill="none" stroke={color} strokeWidth="1.5" />
        <text fill={color} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', letterSpacing: '3px' }}>
          <textPath href={`#top-${uid}`} startOffset="50%" textAnchor="middle">{topText}</textPath>
        </text>
        <text fill={color} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', letterSpacing: '3px' }}>
          <textPath href={`#bot-${uid}`} startOffset="50%" textAnchor="middle">{bottomText}</textPath>
        </text>
        {/* side stars */}
        <text x="13" y="105" fill={color} style={{ fontFamily: 'var(--font-serif)', fontSize: '14px' }} textAnchor="middle">★</text>
        <text x="187" y="105" fill={color} style={{ fontFamily: 'var(--font-serif)', fontSize: '14px' }} textAnchor="middle">★</text>
        {/* center mark */}
        <text x="100" y="98" fill={color} textAnchor="middle" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '40px', letterSpacing: '1px' }}>{center}</text>
        {sub && (
          <text x="100" y="122" fill={color} textAnchor="middle" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '11px', letterSpacing: '3px' }}>{sub}</text>
        )}
      </svg>
    </div>
  );
}
