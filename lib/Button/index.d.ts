import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: string;
}
export default function index(props: ButtonProps): JSX.Element;
