// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationIcon from './NotificationIcon';

export default {
  title: 'Icons/NotificationIcon',
  component: NotificationIcon,
} as ComponentMeta<typeof NotificationIcon>;

const Template: ComponentStory<typeof NotificationIcon> = (args) => <NotificationIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
