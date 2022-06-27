// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SettingsIcon from './SettingsIcon';

export default {
  title: 'Icons/SettingsIcon',
  component: SettingsIcon,
} as ComponentMeta<typeof SettingsIcon>;

const Template: ComponentStory<typeof SettingsIcon> = (args) => <SettingsIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
