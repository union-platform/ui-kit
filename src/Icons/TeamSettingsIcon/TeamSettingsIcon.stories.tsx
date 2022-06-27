// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TeamSettingsIcon from './TeamSettingsIcon';

export default {
  title: 'Icons/TeamSettingsIcon',
  component: TeamSettingsIcon,
} as ComponentMeta<typeof TeamSettingsIcon>;

const Template: ComponentStory<typeof TeamSettingsIcon> = (args) => (
  <TeamSettingsIcon
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
