// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessagesIcon24 from './MessagesIcon24';

export default {
  title: 'Icons/24pt/MessagesIcon24',
  component: MessagesIcon24,
} as ComponentMeta<typeof MessagesIcon24>;

const Template: ComponentStory<typeof MessagesIcon24> = (args) => <MessagesIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
