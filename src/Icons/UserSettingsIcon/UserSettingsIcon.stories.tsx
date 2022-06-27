// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserSettingsIcon from './UserSettingsIcon';

export default {
  title: 'Icons/UserSettingsIcon',
  component: UserSettingsIcon,
} as ComponentMeta<typeof UserSettingsIcon>;

const Template: ComponentStory<typeof UserSettingsIcon> = (args) => (
  <UserSettingsIcon
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
