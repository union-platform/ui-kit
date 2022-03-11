// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'Union-UI/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: 'Some error text',
  errorText: 'Something bad happened',
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  maxSymbols: 12,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  maxSymbols: 12,
  label: 'Your Name',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  maxSymbols: 12,
  fullWidth: true,
};
