// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FacebookIcon from './FacebookIcon';

export default {
  title: 'Icons/FacebookIcon',
  component: FacebookIcon,
} as ComponentMeta<typeof FacebookIcon>;

const Template: ComponentStory<typeof FacebookIcon> = (args) => <FacebookIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
