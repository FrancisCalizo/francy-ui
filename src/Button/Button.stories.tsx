import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './'


export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
