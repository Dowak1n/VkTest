import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';
import Counter from '../components/Counter';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>
    <Button.Label>Click Me</Button.Label>
    <Button.Counter>
      <Counter count={0} />
    </Button.Counter>
  </Button>
);

export const Default = Template.bind({});
Default.args = {};