// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SettingsIcon18 from './SettingsIcon18';

export default {
  title: 'Icons/18pt/SettingsIcon18',
  component: SettingsIcon18,
} as ComponentMeta<typeof SettingsIcon18>;

const Template: ComponentStory<typeof SettingsIcon18> = (args) => <SettingsIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
