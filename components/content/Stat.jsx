import React from 'react';

/**
 * Wanderlust Foodies — Stat
 * Big Oswald number with caption, for the "25+ Destinations" trio.
 */
export function Stat({ value, label, description, align = 'left', style, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1,
          letterSpacing: '0.01em',
          color: 'var(--accent-primary)',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.95rem',
          color: 'var(--text-strong)',
          marginTop: '8px',
        }}
      >
        {label}
      </div>
      {description && (
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9375rem',
            lineHeight: 1.5,
            color: 'var(--text-muted)',
            margin: '8px 0 0',
            maxWidth: '22ch',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
