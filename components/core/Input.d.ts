import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Uppercase field label rendered above the input. */
  label?: string;
  /** Muted helper text below the field. */
  helper?: string;
  /** Error message — overrides helper and turns the field red. */
  error?: string;
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Text input on a cream field with a turmeric focus ring. */
export function Input(props: InputProps): JSX.Element;
