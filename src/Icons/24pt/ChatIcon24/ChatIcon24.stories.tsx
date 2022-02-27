// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatIcon24 from './ChatIcon24';

export default {
  title: 'Icons/24pt/ChatIcon24',
  component: ChatIcon24,
} as ComponentMeta<typeof ChatIcon24>;

const Template: ComponentStory<typeof ChatIcon24> = (args) => <ChatIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
