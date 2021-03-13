import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: string;
}

export default function index(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}

const Button = styled.button.attrs({ type: 'button' })`
  display: inline-block;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  /* Defaults */
  background: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  ${({ theme }) => theme.setFocus(lighten(0.1, theme.colors.primary))}

  &:hover {
    background: ${({ theme }) => darken(0.07, theme.colors.primary)};
  }

  /* Variants */
  background: ${({ color }) => color === 'red' && '#f00'};
`;
