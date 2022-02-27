// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendIcon18 from './SendIcon18';

export default {
  title: 'Icons/18pt/SendIcon18',
  component: SendIcon18,
} as ComponentMeta<typeof SendIcon18>;

const Template: ComponentStory<typeof SendIcon18> = (args) => <SendIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
