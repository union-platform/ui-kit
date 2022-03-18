/* eslint-disable react/jsx-props-no-spreading */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Union-UI/Checkbox',
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4732%3A34892',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {};
