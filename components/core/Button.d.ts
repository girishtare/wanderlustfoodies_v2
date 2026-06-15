import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = spice fill, `secondary` = espresso outline, `trek` = pine fill, `ghost` = text-only. */
  variant?: 'primary' | 'secondary' | 'trek' | 'ghost';
  /** Padding/size preset. */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  /** Stretch to fill its container. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as a different element, e.g. 'a' for links. */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button in vintage-signage style (Oswald uppercase,
 * stamp-pill shape).
 * @startingPoint section="Core" subtitle="Vintage-signage CTA, 4 variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
