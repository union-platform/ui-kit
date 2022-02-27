// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FacebookIcon14 from './FacebookIcon14';

export default {
  title: 'Icons/14pt/FacebookIcon14',
  component: FacebookIcon14,
} as ComponentMeta<typeof FacebookIcon14>;

const Template: ComponentStory<typeof FacebookIcon14> = (args) => <FacebookIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
