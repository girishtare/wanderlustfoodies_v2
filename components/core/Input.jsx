import React from 'react';

/**
 * Wanderlust Foodies — Input
 * Cream field with confident hairline; turmeric focus ring.
 * Supports optional label, helper / error text and leading icon.
 */
export function Input({
  label,
  helper,
  error,
  iconLeft,
  id,
  type = 'text',
  style,
  ...rest
}) {
  const inputId = id || (label ? 'wf-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--surface-raised)',
          border: `var(--border-width) solid ${error ? 'var(--status-danger)' : focused ? 'var(--accent-primary)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '11px 14px',
          boxShadow: focused ? '0 0 0 var(--ring-width) var(--turmeric-100)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        }}
      >
        {iconLeft && <span style={{ display: 'flex', color: 'var(--text-faint)' }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--text-body)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {(helper || error) && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: error ? 'var(--status-danger)' : 'var(--text-faint)',
          }}
        >
          {error || helper}
        </span>
      )}
    </div>
  );
}
