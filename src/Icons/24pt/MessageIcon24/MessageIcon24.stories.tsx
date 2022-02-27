// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageIcon24 from './MessageIcon24';

export default {
  title: 'Icons/24pt/MessageIcon24',
  component: MessageIcon24,
} as ComponentMeta<typeof MessageIcon24>;

const Template: ComponentStory<typeof MessageIcon24> = (args) => <MessageIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
