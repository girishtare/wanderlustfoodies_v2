import React from 'react';
import { Badge } from './Badge.jsx';

/**
 * Wanderlust Foodies — RecipeCard
 * Square food photo + Oswald recipe name, short blurb, optional
 * meta chips (time, diet) and a "View recipe" affordance.
 */
export function RecipeCard({
  image,
  title,
  blurb,
  time,
  tags = [],
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        gap: '16px',
        textDecoration: 'none',
        background: 'var(--surface-card)',
        border: 'var(--border-width) solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        padding: '14px',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', width: 104, height: 104, flexShrink: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--paper-200)' }}>
        <img
          src={image}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', minWidth: 0, flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: '1.15rem', lineHeight: 1.1, color: 'var(--text-strong)', margin: 0 }}>
          {title}
        </h3>
        {(tags.length > 0 || time) && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
            {time && <Badge tone="recipe" size="sm">{time}</Badge>}
            {tags.map((t) => (
              <Badge key={t} tone="neutral" size="sm">{t}</Badge>
            ))}
          </div>
        )}
        {blurb && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-muted)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {blurb}
          </p>
        )}
        <span style={{ marginTop: 'auto', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '12px', color: hover ? 'var(--accent-primary-press)' : 'var(--text-link)' }}>
          View recipe →
        </span>
      </div>
    </a>
  );
}
