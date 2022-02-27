// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import InstagramIcon14 from './InstagramIcon14';

export default {
  title: 'Icons/14pt/InstagramIcon14',
  component: InstagramIcon14,
} as ComponentMeta<typeof InstagramIcon14>;

const Template: ComponentStory<typeof InstagramIcon14> = (args) => <InstagramIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
