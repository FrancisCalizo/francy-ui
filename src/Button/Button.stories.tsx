import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);
export const Primary = Template.bind({});
Primary.argTypes = {
  colorScheme: {
    description: 'Color scheme of the `Button` component.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'select',
      options: {
        primary: 'primary',
        success: 'success',
        danger: 'danger',
        warning: 'warning',
      },
    },
  },
  variant: {
    description: 'The variant type of the `Button` component.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'select',
      options: {
        filled: 'filled',
        outline: 'outline',
      },
    },
  },
  size: {
    description: 'The size of the `Button` component.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'select',
      options: {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      },
    },
  },
};
