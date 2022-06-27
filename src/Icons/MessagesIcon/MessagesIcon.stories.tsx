// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessagesIcon from './MessagesIcon';

export default {
  title: 'Icons/MessagesIcon',
  component: MessagesIcon,
} as ComponentMeta<typeof MessagesIcon>;

const Template: ComponentStory<typeof MessagesIcon> = (args) => <MessagesIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
