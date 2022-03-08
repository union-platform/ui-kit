// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Union-UI/Controlls/Switch',
  component: Switch,
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
