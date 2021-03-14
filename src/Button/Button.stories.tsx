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
  color: {
    description: 'Color of the `Button` component.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
    },
    control: 'text',
  },
  variant: {
    description: 'The variant type of the `Button` component.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'filled' },
    },
    control: 'text',
  },
};
