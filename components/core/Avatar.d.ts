import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. When omitted, initials from `name`/`alt` are shown. */
  src?: string;
  alt?: string;
  /** Used to derive monogram initials when no image. */
  name?: string;
  /** Pixel diameter. Default 44. */
  size?: number;
  /** Espresso ring around the portrait. Default true. */
  ring?: boolean;
}

/** Circular author/portrait avatar with espresso ring and initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
