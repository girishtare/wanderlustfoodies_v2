import * as React from 'react';

export interface RecipeCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Square dish photo. */
  image: string;
  title: string;
  blurb?: string;
  /** Cook time chip, e.g. "10 min". */
  time?: string;
  /** Extra neutral chips, e.g. ["Gluten-free", "Navratri"]. */
  tags?: string[];
  href?: string;
}

/** Horizontal recipe row with square photo, Oswald name, diet chips and "View recipe". */
export function RecipeCard(props: RecipeCardProps): JSX.Element;
