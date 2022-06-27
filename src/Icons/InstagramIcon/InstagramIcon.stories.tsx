// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import InstagramIcon from './InstagramIcon';

export default {
  title: 'Icons/InstagramIcon',
  component: InstagramIcon,
} as ComponentMeta<typeof InstagramIcon>;

const Template: ComponentStory<typeof InstagramIcon> = (args) => <InstagramIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
