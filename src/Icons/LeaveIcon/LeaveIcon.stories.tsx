// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LeaveIcon from './LeaveIcon';

export default {
  title: 'Icons/LeaveIcon',
  component: LeaveIcon,
} as ComponentMeta<typeof LeaveIcon>;

const Template: ComponentStory<typeof LeaveIcon> = (args) => <LeaveIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
