import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Counter, { CounterProps } from '../components/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta;

const Template: StoryFn<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};