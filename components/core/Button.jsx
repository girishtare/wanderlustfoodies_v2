import React from 'react';

/**
 * Wanderlust Foodies — Button
 * Vintage-signage CTA: Oswald uppercase label, stamp-pill shape,
 * spice-terracotta primary. Grounded press (no bounce).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '12px', gap: '7px' },
    md: { padding: '12px 24px', fontSize: '14px', gap: '9px' },
    lg: { padding: '16px 32px', fontSize: '16px', gap: '11px' },
  };

  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-spice)',
      border: 'var(--border-width) solid var(--accent-primary)',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: 'var(--border-width) solid var(--border-strong)',
      boxShadow: 'none',
    },
    trek: {
      background: 'var(--accent-trek)',
      color: 'var(--text-on-dark)',
      border: 'var(--border-width) solid var(--accent-trek)',
      boxShadow: 'var(--shadow-sm)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-link)',
      border: 'var(--border-width) solid transparent',
      boxShadow: 'none',
    },
  };

  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      data-variant={variant}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        textDecoration: 'none',
        lineHeight: 1,
        padding: sizes[size].padding,
        fontSize: sizes[size].fontSize,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
        if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-sunk)';
        if (variant === 'trek') e.currentTarget.style.filter = 'brightness(1.12)';
        if (variant === 'ghost') e.currentTarget.style.background = 'var(--spice-50)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.filter = 'none';
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.985)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
