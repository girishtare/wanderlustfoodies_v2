import React from 'react';

/**
 * Wanderlust Foodies — Badge
 * Category tag / pill. `tone` maps to the blog taxonomy colors
 * (travel / trek / recipe / story) or status hues.
 */
export function Badge({ children, tone = 'travel', solid = false, size = 'md', style, ...rest }) {
  const tones = {
    travel: { c: 'var(--tag-travel)', bg: 'var(--spice-50)' },
    trek: { c: 'var(--tag-trek)', bg: 'var(--pine-50)' },
    recipe: { c: 'var(--tag-recipe)', bg: 'var(--turmeric-50)' },
    story: { c: 'var(--tag-story)', bg: 'var(--sky-100)' },
    neutral: { c: 'var(--espresso-600)', bg: 'var(--paper-200)' },
    success: { c: 'var(--status-success)', bg: 'var(--status-success-bg)' },
    warning: { c: 'var(--status-warning)', bg: 'var(--status-warning-bg)' },
    danger: { c: 'var(--status-danger)', bg: 'var(--status-danger-bg)' },
  };
  const t = tones[tone] || tones.travel;
  const sizes = {
    sm: { fontSize: '10px', padding: '3px 9px' },
    md: { fontSize: '11px', padding: '5px 12px' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        color: solid ? '#fff' : t.c,
        background: solid ? t.c : t.bg,
        border: solid ? `var(--border-width) solid ${t.c}` : `var(--border-width) solid transparent`,
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
