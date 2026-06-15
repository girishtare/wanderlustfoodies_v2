import React from 'react';
import { Badge } from './Badge.jsx';

/**
 * Wanderlust Foodies — ArticleCard
 * Blog/travel-story card: full-bleed photo, floating category badge,
 * editorial serif title, byline + meta. Lifts and zooms on hover.
 */
export function ArticleCard({
  image,
  category = 'travel',
  categoryLabel,
  title,
  excerpt,
  author,
  date,
  readTime,
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
        flexDirection: 'column',
        textDecoration: 'none',
        background: 'var(--surface-card)',
        border: 'var(--border-width) solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--paper-200)' }}>
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }}
        />
        <span style={{ position: 'absolute', top: 12, left: 12 }}>
          <Badge tone={category} solid>{categoryLabel || category}</Badge>
        </span>
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            textTransform: 'none',
            letterSpacing: '-0.01em',
            fontSize: '1.3rem',
            lineHeight: 1.2,
            color: 'var(--text-strong)',
            margin: 0,
            textWrap: 'pretty',
          }}
        >
          {title}
        </h3>
        {excerpt && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--text-muted)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {excerpt}
          </p>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: 'var(--text-faint)' }}>
          {author && <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{author}</span>}
          {author && <span aria-hidden>·</span>}
          {date && <span>{date}</span>}
          {readTime && <span aria-hidden>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
    </a>
  );
}
