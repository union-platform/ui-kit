// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Union-UI/Switch',
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4732%3A34892',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Button',
};
