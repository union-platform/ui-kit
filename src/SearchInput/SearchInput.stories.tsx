// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from './SearchInput';

export default {
  title: 'Union-UI/SearchInput',
  component: SearchInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4729%3A34872',
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: 'Some error text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Your Name',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
