import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Taxonomy / status color. */
  tone?: 'travel' | 'trek' | 'recipe' | 'story' | 'neutral' | 'success' | 'warning' | 'danger';
  /** Filled (solid color) vs soft tint. */
  solid?: boolean;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

/** Small uppercase category tag / status pill in the blog taxonomy colors. */
export function Badge(props: BadgeProps): JSX.Element;
