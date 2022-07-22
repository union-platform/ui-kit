// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'Union-UI/TextInput',
  component: TextInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4732%3A35098',
    },
  },
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

export const Success = Template.bind({});
Success.args = {
  success: true,
  defaultValue: 'Some success text',
  successText: 'Something good happened',
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
