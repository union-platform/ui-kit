// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareIcon from './ShareIcon';

export default {
  title: 'Icons/ShareIcon',
  component: ShareIcon,
} as ComponentMeta<typeof ShareIcon>;

const Template: ComponentStory<typeof ShareIcon> = (args) => <ShareIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};

export const Sec = Template.bind({});
Sec.args = {
  fill: '#000000',
  size: '14px',
};
