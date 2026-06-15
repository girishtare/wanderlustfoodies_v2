import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Headline figure, e.g. "25+". */
  value: React.ReactNode;
  /** Uppercase label under the number. */
  label: string;
  /** Optional supporting sentence. */
  description?: string;
  align?: 'left' | 'center';
}

/** Large Oswald metric with caption — for the "destinations / recipes / stories" trio. */
export function Stat(props: StatProps): JSX.Element;
