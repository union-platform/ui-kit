// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserSettingsIcon24 from './UserSettingsIcon24';

export default {
  title: 'Icons/24pt/UserSettingsIcon24',
  component: UserSettingsIcon24,
} as ComponentMeta<typeof UserSettingsIcon24>;

const Template: ComponentStory<typeof UserSettingsIcon24> = (args) => (
  <UserSettingsIcon24
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
