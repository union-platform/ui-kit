// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatIcon from './ChatIcon';

export default {
  title: 'Icons/ChatIcon',
  component: ChatIcon,
} as ComponentMeta<typeof ChatIcon>;

const Template: ComponentStory<typeof ChatIcon> = (args) => <ChatIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
