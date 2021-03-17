import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  colorScheme?: 'primary' | 'danger' | 'success' | 'warning';
  variant?: 'filled' | 'outline';
}

export default function index(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}

const Button = styled.button<ButtonProps>`
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

  /* Color Schemes */
  ${({ colorScheme }) => colorScheme && getColorScheme(colorScheme)}

  /* Variants */
  ${({ variant, colorScheme }) =>
    variant === 'outline' && getVariantOutlineColors(colorScheme)}
`;

const getColorScheme = (colorScheme) => {
  return css`
    background: ${({ theme }) => theme.colors[colorScheme]};
    color: #fff;
    border-color: ${({ theme }) => theme.colors[colorScheme]};
    ${({ theme }) => theme.setFocus(lighten(0.1, theme.colors[colorScheme]))}

    &:hover {
      background: ${({ theme }) => darken(0.07, theme.colors[colorScheme])};
    }
  `;
};

const getVariantOutlineColors = (colorScheme) => {
  return css`
    background: transparent;
    color: ${({ theme }) =>
      colorScheme ? theme.colors[colorScheme] : theme.colors.primary};
    border-color: ${({ theme }) =>
      colorScheme ? theme.colors[colorScheme] : theme.colors.primary};

    &:hover {
      background: ${({ theme }) =>
        colorScheme
          ? transparentize(0.4, theme.colors[colorScheme])
          : transparentize(0.4, theme.colors.primary)};
      color: #fff;
    }
  `;
};
