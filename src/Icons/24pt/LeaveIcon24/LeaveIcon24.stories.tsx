// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LeaveIcon24 from './LeaveIcon24';

export default {
  title: 'Icons/24pt/LeaveIcon24',
  component: LeaveIcon24,
} as ComponentMeta<typeof LeaveIcon24>;

const Template: ComponentStory<typeof LeaveIcon24> = (args) => <LeaveIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
