import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  colorScheme?: 'primary' | 'danger' | 'success' | 'warning';
  variant?: 'filled' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  shape?: 'square' | 'rounded' | 'capsule';
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
    (variant === 'outline' || variant === 'ghost') &&
    getVariant(variant, colorScheme)}

  /* Sizes */
  ${({ size }) => size && getSize(size)}
  /* Sizes */

  ${({ shape }) => shape && getShape(shape)}

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

const getVariant = (variant, colorScheme) => {
  return css`
    background: transparent;
    color: ${({ theme }) =>
      colorScheme ? theme.colors[colorScheme] : theme.colors.primary};
    border-color: ${({ theme }) =>
      variant === 'ghost'
        ? 'transparent'
        : colorScheme
        ? theme.colors[colorScheme]
        : theme.colors.primary};

    &:hover {
      background: ${({ theme }) =>
        colorScheme
          ? transparentize(0.4, theme.colors[colorScheme])
          : transparentize(0.4, theme.colors.primary)};
      color: #fff;
    }
  `;
};

const getSize = (size) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
      `;
    case 'sm':
      return css`
        font-size: 0.875rem;
        padding: 0.35rem 0.75rem;
      `;
    case 'lg':
      return css`
        font-size: 1.125rem;
        padding: 0.75rem 1.5rem;
      `;
    default:
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
  }
};

const getShape = (shape) => {
  return css`
    border-radius: ${() =>
      shape === 'square' ? 0 : shape === 'capsule' ? '3.125rem' : '0.25rem'};
  `;
};
