import * as React from 'react';

export interface StampSealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Arced text along the top of the ring. */
  topText?: string;
  /** Arced text along the bottom of the ring. */
  bottomText?: string;
  /** Large center mark (monogram or short word). */
  center?: React.ReactNode;
  /** Small line under the center mark. */
  sub?: string;
  /** Pixel diameter. Default 200. */
  size?: number;
  /** Ink color (any CSS color or token). */
  color?: string;
  /** Disc fill behind the type. Default transparent. */
  background?: string;
}

/**
 * The brand's signature vintage rubber-stamp seal — arced top/bottom type
 * around a center monogram, two rings and side stars. Type-only, no illustration.
 * @startingPoint section="Brand" subtitle="Vintage arced stamp seal" viewport="260x260"
 */
export function StampSeal(props: StampSealProps): JSX.Element;
