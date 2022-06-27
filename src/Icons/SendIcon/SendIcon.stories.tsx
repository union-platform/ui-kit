// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendIcon from './SendIcon';

export default {
  title: 'Icons/SendIcon',
  component: SendIcon,
} as ComponentMeta<typeof SendIcon>;

const Template: ComponentStory<typeof SendIcon> = (args) => <SendIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
