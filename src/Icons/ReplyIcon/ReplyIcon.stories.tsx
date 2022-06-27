// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyIcon from './ReplyIcon';

export default {
  title: 'Icons/ReplyIcon',
  component: ReplyIcon,
} as ComponentMeta<typeof ReplyIcon>;

const Template: ComponentStory<typeof ReplyIcon> = (args) => <ReplyIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
