import React from 'react';

/**
 * Wanderlust Foodies — Avatar
 * Round portrait with espresso ring, for author bylines.
 * Falls back to monogram initials on the kraft tint.
 */
export function Avatar({ src, alt = '', name, size = 44, ring = true, style, ...rest }) {
  const initials = (name || alt || '')
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        background: 'var(--kraft-300)',
        color: 'var(--espresso-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: size * 0.4,
        letterSpacing: '0.02em',
        boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--espresso-700)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
    </span>
  );
}
